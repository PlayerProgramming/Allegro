! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Vex = e() : t.Vex = e()
}(window, function () {
    return function (t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(i, o, function (e) {
                    return t[e]
                }.bind(null, o));
            return i
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 0)
    }([function (t, e, n) {
        "use strict";

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function a(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (a = function (t) {
                if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                var n;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, i)
                }

                function i() {
                    return l(t, arguments, c(this).constructor)
                }
                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), u(i, t)
            })(t)
        }

        function l(t, e, n) {
            return (l = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                } catch (t) {
                    return !1
                }
            }() ? Reflect.construct : function (t, e, n) {
                var i = [null];
                i.push.apply(i, e);
                var o = new(Function.bind.apply(t, i));
                return n && u(o, n.prototype), o
            }).apply(null, arguments)
        }

        function u(t, e) {
            return (u = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function c(t) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        n.r(e);
        var h = function () {};
        h.L = function (t, e) {
            if (e) {
                var n = Array.prototype.slice.call(e).join(" ");
                window.console.log(t + ": " + n)
            }
        }, h.MakeException = function (t) {
            return function (e) {
                function n(e, i) {
                    var o;
                    return r(this, n), (o = s(this, c(n).call(this, e))).name = t, o.message = e, o.data = i, o
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && u(t, e)
                }(n, a(Error)), n
            }()
        };
        var f = function () {
            function t(e, n) {
                r(this, t), this.code = e, this.message = n
            }
            var e, n, i;
            return e = t, (n = [{
                key: "toString",
                value: function () {
                    return "[RuntimeError] " + this.code + ":" + this.message
                }
            }]) && o(e.prototype, n), i && o(e, i), t
        }();

        function b(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function p(t, e, n) {
            return e && b(t.prototype, e), n && b(t, n), t
        }
        h.RuntimeError = f, h.RERR = h.RuntimeError, h.Merge = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, h.Min = Math.min, h.Max = Math.max, h.forEach = function (t, e) {
            for (var n = 0; n < t.length; n++) e(t[n], n)
        }, h.RoundN = function (t, e) {
            return t % e >= e / 2 ? parseInt(t / e, 10) * e + e : parseInt(t / e, 10) * e
        }, h.MidLine = function (t, e) {
            var n = e + (t - e) / 2;
            return n % 2 > 0 && (n = h.RoundN(10 * n, 5) / 10), n
        }, h.SortAndUnique = function (t, e, n) {
            if (t.length > 1) {
                var i, o = [];
                t.sort(e);
                for (var r = 0; r < t.length; ++r) 0 !== r && n(t[r], i) || o.push(t[r]), i = t[r];
                return o
            }
            return t
        }, h.Contains = function (t, e) {
            for (var n = t.length; n--;)
                if (t[n] === e) return !0;
            return !1
        }, h.getCanvasContext = function (t) {
            if (!t) throw new h.RERR("BadArgument", "Invalid canvas selector: " + t);
            var e = document.getElementById(t);
            if (!e || !e.getContext) throw new h.RERR("UnsupportedBrowserError", "This browser does not support HTML5 Canvas");
            return e.getContext("2d")
        }, h.drawDot = function (t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#55";
            t.save(), t.setFillStyle(i), t.beginPath(), t.arc(e, n, 3, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.restore()
        }, h.BM = function (t, e) {
            var n = (new Date).getTime();
            e();
            var i = (new Date).getTime() - n;
            h.L(t + i + "ms")
        }, h.StackTrace = function () {
            return (new Error).stack
        }, h.W = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            var i = e.join(" ");
            window.console.log("Warning: ", i, h.StackTrace())
        }, h.Prefix = function (t) {
            return h.Prefix.prefix + t
        }, h.Prefix.prefix = "vf-";
        var y = function () {
            function t(e, n) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.set(e, n)
            }
            return p(t, null, [{
                key: "GCD",
                value: function (t, e) {
                    if ("number" != typeof t || "number" != typeof e) throw new h.RERR("BadArgument", "Invalid numbers: ".concat(t, ", ").concat(e));
                    for (var n; 0 !== e;) n = e, e = t % e, t = n;
                    return t
                }
            }, {
                key: "LCM",
                value: function (e, n) {
                    return e * n / t.GCD(e, n)
                }
            }, {
                key: "LCMM",
                value: function (e) {
                    if (0 === e.length) return 0;
                    if (1 === e.length) return e[0];
                    if (2 === e.length) return t.LCM(e[0], e[1]);
                    var n = e[0];
                    return e.shift(), t.LCM(n, t.LCMM(e))
                }
            }]), p(t, [{
                key: "set",
                value: function (t, e) {
                    return this.numerator = void 0 === t ? 1 : t, this.denominator = void 0 === e ? 1 : e, this
                }
            }, {
                key: "value",
                value: function () {
                    return this.numerator / this.denominator
                }
            }, {
                key: "simplify",
                value: function () {
                    var e = this.numerator,
                        n = this.denominator,
                        i = t.GCD(e, n);
                    return e /= i, (n /= i) < 0 && (n = -n, e = -e), this.set(e, n)
                }
            }, {
                key: "add",
                value: function (e, n) {
                    var i, o;
                    e instanceof t ? (i = e.numerator, o = e.denominator) : (i = void 0 !== e ? e : 0, o = void 0 !== n ? n : 1);
                    var r = t.LCM(this.denominator, o),
                        s = r / this.denominator,
                        a = r / o,
                        l = this.numerator * s + i * a;
                    return this.set(l, r)
                }
            }, {
                key: "subtract",
                value: function (e, n) {
                    var i, o;
                    e instanceof t ? (i = e.numerator, o = e.denominator) : (i = void 0 !== e ? e : 0, o = void 0 !== n ? n : 1);
                    var r = t.LCM(this.denominator, o),
                        s = r / this.denominator,
                        a = r / o,
                        l = this.numerator * s - i * a;
                    return this.set(l, r)
                }
            }, {
                key: "multiply",
                value: function (e, n) {
                    var i, o;
                    return e instanceof t ? (i = e.numerator, o = e.denominator) : (i = void 0 !== e ? e : 1, o = void 0 !== n ? n : 1), this.set(this.numerator * i, this.denominator * o)
                }
            }, {
                key: "divide",
                value: function (e, n) {
                    var i, o;
                    return e instanceof t ? (i = e.numerator, o = e.denominator) : (i = void 0 !== e ? e : 1, o = void 0 !== n ? n : 1), this.set(this.numerator * o, this.denominator * i)
                }
            }, {
                key: "equals",
                value: function (e) {
                    var n = t.__compareA.copy(e).simplify(),
                        i = t.__compareB.copy(this).simplify();
                    return n.numerator === i.numerator && n.denominator === i.denominator
                }
            }, {
                key: "greaterThan",
                value: function (e) {
                    var n = t.__compareB.copy(this);
                    return n.subtract(e), n.numerator > 0
                }
            }, {
                key: "greaterThanEquals",
                value: function (e) {
                    var n = t.__compareB.copy(this);
                    return n.subtract(e), n.numerator >= 0
                }
            }, {
                key: "lessThan",
                value: function (t) {
                    return !this.greaterThanEquals(t)
                }
            }, {
                key: "lessThanEquals",
                value: function (t) {
                    return !this.greaterThan(t)
                }
            }, {
                key: "clone",
                value: function () {
                    return new t(this.numerator, this.denominator)
                }
            }, {
                key: "copy",
                value: function (t) {
                    return "number" == typeof t ? this.set(t || 0, 1) : this.set(t.numerator, t.denominator)
                }
            }, {
                key: "quotient",
                value: function () {
                    return Math.floor(this.numerator / this.denominator)
                }
            }, {
                key: "fraction",
                value: function () {
                    return this.numerator % this.denominator
                }
            }, {
                key: "abs",
                value: function () {
                    return this.denominator = Math.abs(this.denominator), this.numerator = Math.abs(this.numerator), this
                }
            }, {
                key: "toString",
                value: function () {
                    return this.numerator + "/" + this.denominator
                }
            }, {
                key: "toSimplifiedString",
                value: function () {
                    return t.__tmp.copy(this).simplify().toString()
                }
            }, {
                key: "toMixedString",
                value: function () {
                    var e = "",
                        n = this.quotient(),
                        i = t.__tmp.copy(this);
                    return n < 0 ? i.abs().fraction() : i.fraction(), 0 !== n ? (e += n, 0 !== i.numerator && (e += " " + i.toSimplifiedString())) : e = 0 === i.numerator ? "0" : i.toSimplifiedString(), e
                }
            }, {
                key: "parse",
                value: function (t) {
                    var e = t.split("/"),
                        n = parseInt(e[0], 10),
                        i = e[1] ? parseInt(e[1], 10) : 1;
                    return this.set(n, i)
                }
            }]), t
        }();

        function d(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function v(t, e, n) {
            return e && d(t.prototype, e), n && d(t, n), t
        }
        y.__compareA = new y, y.__compareB = new y, y.__tmp = new y;
        var g = h.MakeException("RegistryError");

        function m(t, e, n, i, o) {
            t[e][n] || (t[e][n] = {}), t[e][n][i] = o
        }
        var _ = function () {
            function t() {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.clear()
            }
            return v(t, null, [{
                key: "INDEXES",
                get: function () {
                    return ["type"]
                }
            }]), v(t, [{
                key: "clear",
                value: function () {
                    return this.index = {
                        id: {},
                        type: {},
                        class: {}
                    }, this
                }
            }, {
                key: "updateIndex",
                value: function (t) {
                    var e = t.id,
                        n = t.name,
                        i = t.value,
                        o = t.oldValue,
                        r = this.getElementById(e);
                    null !== o && this.index[n][o] && delete this.index[n][o][e], null !== i && m(this.index, n, i, r.getAttribute("id"), r)
                }
            }, {
                key: "register",
                value: function (e, n) {
                    var i = this;
                    if (!(n = n || e.getAttribute("id"))) throw new g("Can't add element without `id` attribute to registry", e);
                    return e.setAttribute("id", n), m(this.index, "id", n, n, e), t.INDEXES.forEach(function (t) {
                        i.updateIndex({
                            id: n,
                            name: t,
                            value: e.getAttribute(t),
                            oldValue: null
                        })
                    }), e.onRegister(this), this
                }
            }, {
                key: "getElementById",
                value: function (t) {
                    return this.index.id[t] ? this.index.id[t][t] : null
                }
            }, {
                key: "getElementsByAttribute",
                value: function (t, e) {
                    var n = this.index[t];
                    return n && n[e] ? Object.keys(n[e]).map(function (t) {
                        return n[e][t]
                    }) : []
                }
            }, {
                key: "getElementsByType",
                value: function (t) {
                    return this.getElementsByAttribute("type", t)
                }
            }, {
                key: "getElementsByClass",
                value: function (t) {
                    return this.getElementsByAttribute("class", t)
                }
            }, {
                key: "onUpdate",
                value: function (e) {
                    var n = e.id,
                        i = e.name,
                        o = e.value,
                        r = e.oldValue;
                    return function (t, e) {
                        return t.filter(function (t) {
                            return t === e
                        }).length > 0
                    }(t.INDEXES.concat(["id", "class"]), i) ? (this.updateIndex({
                        id: n,
                        name: i,
                        value: o,
                        oldValue: r
                    }), this) : this
                }
            }], [{
                key: "enableDefaultRegistry",
                value: function (e) {
                    t.defaultRegistry = e
                }
            }, {
                key: "getDefaultRegistry",
                value: function () {
                    return t.defaultRegistry
                }
            }, {
                key: "disableDefaultRegistry",
                value: function () {
                    t.defaultRegistry = null
                }
            }]), t
        }();

        function x(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function w(t, e, n) {
            return e && x(t.prototype, e), n && x(t, n), t
        }
        _.defaultRegistry = null;
        var k = function () {
            function t() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type;
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.attrs = {
                    id: t.newID(),
                    el: null,
                    type: e || "Base",
                    classes: {}
                }, this.boundingBox = null, this.context = null, this.rendered = !1, _.getDefaultRegistry() && _.getDefaultRegistry().register(this)
            }
            return w(t, null, [{
                key: "newID",
                value: function () {
                    return "auto" + t.ID++
                }
            }]), w(t, [{
                key: "setStyle",
                value: function (t) {
                    return this.style = t, this
                }
            }, {
                key: "getStyle",
                value: function () {
                    return this.style
                }
            }, {
                key: "applyStyle",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.context,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getStyle();
                    return e ? (t.save(), e.shadowColor && t.setShadowColor(e.shadowColor), e.shadowBlur && t.setShadowBlur(e.shadowBlur), e.fillStyle && t.setFillStyle(e.fillStyle), e.strokeStyle && t.setStrokeStyle(e.strokeStyle), e.lineWidth && t.setLineWidth(e.lineWidth), this) : this
                }
            }, {
                key: "restoreStyle",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.context;
                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getStyle()) ? (t.restore(), this) : this
                }
            }, {
                key: "hasClass",
                value: function (t) {
                    return !0 === this.attrs.classes[t]
                }
            }, {
                key: "addClass",
                value: function (t) {
                    return this.attrs.classes[t] = !0, this.registry && this.registry.onUpdate({
                        id: this.getAttribute("id"),
                        name: "class",
                        value: t,
                        oldValue: null
                    }), this
                }
            }, {
                key: "removeClass",
                value: function (t) {
                    return delete this.attrs.classes[t], this.registry && this.registry.onUpdate({
                        id: this.getAttribute("id"),
                        name: "class",
                        value: null,
                        oldValue: t
                    }), this
                }
            }, {
                key: "onRegister",
                value: function (t) {
                    return this.registry = t, this
                }
            }, {
                key: "isRendered",
                value: function () {
                    return this.rendered
                }
            }, {
                key: "setRendered",
                value: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this.rendered = t, this
                }
            }, {
                key: "getAttributes",
                value: function () {
                    return this.attrs
                }
            }, {
                key: "getAttribute",
                value: function (t) {
                    return this.attrs[t]
                }
            }, {
                key: "setAttribute",
                value: function (t, e) {
                    var n = this.attrs.id,
                        i = this.attrs[t];
                    return this.attrs[t] = e, this.registry && this.registry.onUpdate({
                        id: n,
                        name: t,
                        value: e,
                        oldValue: i
                    }), this
                }
            }, {
                key: "getContext",
                value: function () {
                    return this.context
                }
            }, {
                key: "setContext",
                value: function (t) {
                    return this.context = t, this
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    return this.boundingBox
                }
            }, {
                key: "checkContext",
                value: function () {
                    if (!this.context) throw new h.RERR("NoContext", "No rendering context attached to instance");
                    return this.context
                }
            }]), t
        }();

        function S(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        k.ID = 1e3;
        var T = function () {
            function t(e, n, i, o) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.addPoint(e, n), this.addPoint(i, o)
            }
            var e, n, i;
            return e = t, (n = [{
                key: "width",
                value: function () {
                    return this.x2 - this.x1
                }
            }, {
                key: "height",
                value: function () {
                    return this.y2 - this.y1
                }
            }, {
                key: "addPoint",
                value: function (t, e) {
                    null != t && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), null != e && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e))
                }
            }, {
                key: "addX",
                value: function (t) {
                    this.addPoint(t, null)
                }
            }, {
                key: "addY",
                value: function (t) {
                    this.addPoint(null, t)
                }
            }, {
                key: "addQuadraticCurve",
                value: function (t, e, n, i, o, r) {
                    var s = t + 2 / 3 * (n - t),
                        a = e + 2 / 3 * (i - e),
                        l = s + 1 / 3 * (o - t),
                        u = a + 1 / 3 * (r - e);
                    this.addBezierCurve(t, e, s, a, l, u, o, r)
                }
            }, {
                key: "addBezierCurve",
                value: function (t, e, n, i, o, r, s, a) {
                    var l, u = [t, e],
                        c = [n, i],
                        h = [o, r],
                        f = [s, a];
                    this.addPoint(u[0], u[1]), this.addPoint(f[0], f[1]);
                    var b = function (t, e) {
                        return Math.pow(1 - t, 3) * u[e] + 3 * Math.pow(1 - t, 2) * t * c[e] + 3 * (1 - t) * Math.pow(t, 2) * h[e] + Math.pow(t, 3) * f[e]
                    };
                    for (l = 0; l <= 1; l++) {
                        var p = 6 * u[l] - 12 * c[l] + 6 * h[l],
                            y = -3 * u[l] + 9 * c[l] - 9 * h[l] + 3 * f[l],
                            d = 3 * c[l] - 3 * u[l];
                        if (0 !== y) {
                            var v = Math.pow(p, 2) - 4 * d * y;
                            if (!(v < 0)) {
                                var g = (-p + Math.sqrt(v)) / (2 * y);
                                0 < g && g < 1 && (0 === l && this.addX(b(g, l)), 1 === l && this.addY(b(g, l)));
                                var m = (-p - Math.sqrt(v)) / (2 * y);
                                0 < m && m < 1 && (0 === l && this.addX(b(m, l)), 1 === l && this.addY(b(m, l)))
                            }
                        } else {
                            if (0 === p) continue;
                            var _ = -d / p;
                            0 < _ && _ < 1 && (0 === l && this.addX(b(_, l)), 1 === l && this.addY(b(_, l)))
                        }
                    }
                }
            }]) && S(e.prototype, n), i && S(e, i), t
        }();

        function E(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function O(t, e, n) {
            return e && E(t.prototype, e), n && E(t, n), t
        }
        var R = function () {
                function t(e, n, i, o) {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.x = e, this.y = n, this.w = i, this.h = o
                }
                return O(t, null, [{
                    key: "copy",
                    value: function (e) {
                        return new t(e.x, e.y, e.w, e.h)
                    }
                }]), O(t, [{
                    key: "getX",
                    value: function () {
                        return this.x
                    }
                }, {
                    key: "getY",
                    value: function () {
                        return this.y
                    }
                }, {
                    key: "getW",
                    value: function () {
                        return this.w
                    }
                }, {
                    key: "getH",
                    value: function () {
                        return this.h
                    }
                }, {
                    key: "setX",
                    value: function (t) {
                        return this.x = t, this
                    }
                }, {
                    key: "setY",
                    value: function (t) {
                        return this.y = t, this
                    }
                }, {
                    key: "setW",
                    value: function (t) {
                        return this.w = t, this
                    }
                }, {
                    key: "setH",
                    value: function (t) {
                        return this.h = t, this
                    }
                }, {
                    key: "move",
                    value: function (t, e) {
                        this.x += t, this.y += e
                    }
                }, {
                    key: "clone",
                    value: function () {
                        return t.copy(this)
                    }
                }, {
                    key: "mergeWith",
                    value: function (t, e) {
                        var n = t,
                            i = this.x < n.x ? this.x : n.x,
                            o = this.y < n.y ? this.y : n.y,
                            r = Math.max(this.x + this.w, n.x + n.w) - i,
                            s = Math.max(this.y + this.h, n.y + n.h) - o;
                        return this.x = i, this.y = o, this.w = r, this.h = s, e && this.draw(e), this
                    }
                }, {
                    key: "draw",
                    value: function (t, e, n) {
                        e || (e = 0), n || (n = 0), t.rect(this.x + e, this.y + n, this.w, this.h), t.stroke()
                    }
                }]), t
            }(),
            P = {
                glyphs: {
                    v0: {
                        x_min: 0,
                        x_max: 514.5,
                        ha: 525,
                        o: "m 236 648 b 246 648 238 648 242 648 b 288 646 261 648 283 648 b 472 513 364 634 428 587 b 514 347 502 464 514 413 b 462 163 514 272 499 217 b 257 44 409 83 333 44 b 50 163 181 44 103 83 b 0 347 14 217 0 272 b 40 513 0 413 12 464 b 236 648 87 591 155 638 m 277 614 b 253 616 273 616 261 616 b 242 616 247 616 243 616 b 170 499 193 609 181 589 b 159 348 163 446 159 398 b 166 222 159 308 161 266 b 201 91 174 138 183 106 b 257 76 215 81 235 76 b 311 91 277 76 299 81 b 347 222 330 106 338 138 b 353 348 352 266 353 308 b 344 499 353 398 351 446 b 277 614 333 587 322 606 m 257 -1 l 258 -1 l 255 -1 l 257 -1 m 257 673 l 258 673 l 255 673 l 257 673 "
                    },
                    v1: {
                        x_min: -1.359375,
                        x_max: 344.359375,
                        ha: 351,
                        o: "m 126 637 l 129 638 l 198 638 l 266 638 l 269 635 b 274 631 272 634 273 632 l 277 627 l 277 395 b 279 156 277 230 277 161 b 329 88 281 123 295 106 b 344 69 341 81 344 79 b 337 55 344 62 343 59 l 333 54 l 197 54 l 61 54 l 58 55 b 50 69 53 59 50 62 b 65 88 50 79 53 81 b 80 97 72 91 74 93 b 117 156 103 113 112 129 b 117 345 117 161 117 222 l 117 528 l 100 503 l 38 406 b 14 383 24 384 23 383 b -1 398 5 383 -1 390 b 4 415 -1 403 1 409 b 16 437 5 416 10 426 l 72 539 l 100 596 b 121 632 119 631 119 631 b 126 637 122 634 125 635 m 171 -1 l 172 -1 l 170 -1 l 171 -1 m 171 673 l 172 673 l 170 673 l 171 673 "
                    },
                    v2: {
                        x_min: -1.359375,
                        x_max: 458.6875,
                        ha: 468,
                        o: "m 197 648 b 216 648 201 648 208 648 b 258 646 232 648 253 648 b 419 546 333 637 393 599 b 432 489 428 528 432 509 b 356 342 432 440 405 384 b 235 278 322 313 288 295 b 69 170 166 256 107 217 b 69 169 69 170 69 169 b 69 169 69 169 69 169 b 74 173 69 169 72 170 b 209 222 112 204 163 222 b 310 195 247 222 274 215 b 371 179 332 184 352 179 b 396 181 379 179 387 179 b 428 202 409 184 423 194 b 442 212 431 209 436 212 b 458 197 450 212 458 206 b 441 148 458 190 449 165 b 299 44 409 84 353 44 b 288 45 295 44 292 44 b 250 61 274 45 268 49 b 122 99 212 86 164 99 b 73 91 104 99 88 97 b 28 63 53 84 34 72 b 14 54 25 56 20 54 b 1 62 9 54 4 56 l -1 65 l -1 79 b 0 99 -1 91 0 95 b 2 113 1 102 2 108 b 164 309 20 197 81 272 b 285 470 232 341 277 398 b 287 487 287 476 287 481 b 171 595 287 551 239 595 b 155 595 166 595 160 595 b 142 592 145 594 142 594 b 145 589 142 592 142 591 b 179 527 168 576 179 551 b 132 455 179 496 163 467 b 104 451 122 452 112 451 b 27 530 62 451 27 487 b 29 555 27 538 27 546 b 197 648 44 601 115 639 m 228 -1 l 230 -1 l 227 -1 l 228 -1 m 228 673 l 230 673 l 227 673 l 228 673 "
                    },
                    v3: {
                        x_min: -1.359375,
                        x_max: 409.6875,
                        ha: 418,
                        o: "m 174 648 b 191 648 176 648 183 648 b 225 648 204 648 220 648 b 402 523 317 638 389 588 b 404 503 404 517 404 510 b 402 484 404 495 404 488 b 264 373 389 437 334 394 b 257 370 259 371 257 371 b 257 370 257 370 257 370 b 264 369 258 370 261 369 b 409 202 359 334 409 267 b 318 72 409 152 381 104 b 200 43 281 52 240 43 b 23 113 134 43 69 68 b 0 169 6 129 0 149 b 77 249 0 210 29 249 l 77 249 b 152 174 125 249 152 212 b 103 102 152 145 137 116 b 103 102 103 102 103 102 b 147 94 103 101 132 95 b 153 94 149 94 151 94 b 265 206 219 94 265 141 b 264 226 265 213 265 219 b 147 355 253 299 204 353 b 126 371 133 356 126 362 b 147 388 126 383 132 388 b 254 474 196 391 238 424 b 259 502 258 484 259 494 b 182 592 259 544 228 582 b 156 595 175 595 166 595 b 115 592 142 595 129 594 l 111 591 l 115 588 b 152 524 141 574 152 549 b 92 449 152 491 130 458 b 76 448 87 448 81 448 b -1 530 32 448 -1 488 b 20 581 -1 548 5 566 b 174 648 55 619 108 641 m 204 -1 l 205 -1 l 202 -1 l 204 -1 m 204 673 l 205 673 l 202 673 l 204 673 "
                    },
                    v4: {
                        x_min: 0,
                        x_max: 468.21875,
                        ha: 478,
                        o: "m 174 637 b 232 638 175 638 189 638 b 277 638 245 638 259 638 l 378 638 l 381 635 b 389 623 386 632 389 627 b 382 609 389 617 386 613 b 366 589 381 606 372 598 l 313 528 l 245 451 l 209 410 l 155 348 l 84 267 b 59 240 72 252 59 240 b 59 240 59 240 59 240 b 151 238 59 238 68 238 l 242 238 l 242 303 b 243 371 242 369 242 370 b 289 426 245 374 254 385 l 303 441 l 317 456 l 338 483 l 360 506 l 371 520 b 386 527 375 526 381 527 b 400 519 392 527 397 524 b 401 440 401 516 401 514 b 401 377 401 423 401 402 l 401 238 l 426 238 b 453 237 449 238 450 238 b 465 217 461 234 465 226 b 460 202 465 212 464 206 b 426 197 454 197 453 197 l 401 197 l 401 180 b 451 88 402 129 412 109 b 468 69 465 81 468 79 b 461 55 468 62 466 59 l 458 54 l 321 54 l 185 54 l 182 55 b 175 69 176 59 175 62 b 191 88 175 79 176 81 b 240 180 230 109 240 129 l 240 197 l 125 197 b 73 195 104 195 87 195 b 8 197 10 195 9 197 b 0 212 2 199 0 205 b 0 212 0 212 0 212 b 20 242 0 219 0 219 b 163 610 104 344 163 492 b 174 637 163 628 166 634 m 234 -1 l 235 -1 l 232 -1 l 234 -1 m 234 673 l 235 673 l 232 673 l 234 673 "
                    },
                    v5: {
                        x_min: 0,
                        x_max: 409.6875,
                        ha: 418,
                        o: "m 47 637 b 53 638 49 638 50 638 b 69 634 55 638 61 637 b 210 610 114 619 161 610 b 363 634 259 610 311 619 b 382 638 372 637 378 638 b 392 634 386 638 389 637 b 397 623 396 630 397 627 b 393 610 397 620 396 616 b 298 505 368 552 338 520 b 212 494 277 498 246 494 b 65 517 163 494 106 502 b 61 517 62 517 61 517 b 61 517 61 517 61 517 b 51 408 61 517 51 412 b 51 408 51 408 51 408 b 51 408 51 408 51 408 b 61 412 53 408 55 409 b 125 434 80 421 103 430 b 185 441 145 440 166 441 b 409 244 310 441 409 353 b 401 191 409 227 406 209 b 197 43 375 105 287 43 b 159 47 183 43 171 44 b 23 123 112 56 61 86 b 0 180 6 140 0 159 b 76 260 0 220 31 260 b 92 259 81 260 87 259 b 152 183 132 251 152 216 b 100 112 152 152 134 122 b 95 111 98 112 95 111 b 95 111 95 111 95 111 b 129 98 95 109 119 101 b 148 97 136 97 141 97 b 264 235 206 97 261 158 b 265 248 265 240 265 244 b 210 398 265 312 243 373 b 179 408 201 406 194 408 b 174 408 178 408 176 408 b 53 369 130 408 88 394 b 34 359 39 359 38 359 b 17 374 24 359 17 365 b 39 628 17 384 38 625 b 47 637 40 631 43 635 m 204 -1 l 205 -1 l 202 -1 l 204 -1 m 204 673 l 205 673 l 202 673 l 204 673 "
                    },
                    v6: {
                        x_min: 0,
                        x_max: 475.03125,
                        ha: 485,
                        o: "m 255 648 b 274 648 259 648 266 648 b 314 646 288 648 307 648 b 450 555 374 637 438 594 b 454 530 453 546 454 538 b 375 451 454 485 416 451 b 328 467 359 451 343 455 b 300 526 310 483 300 503 b 352 598 300 557 319 589 b 356 599 355 598 356 599 b 352 602 356 599 355 601 b 288 616 330 612 308 616 b 210 584 257 616 230 605 b 164 433 189 559 174 508 b 160 374 163 415 160 381 b 160 374 160 374 160 374 b 160 374 160 374 160 374 b 168 377 160 374 164 376 b 258 395 200 390 228 395 b 366 367 294 395 328 387 b 475 223 436 333 475 283 b 472 197 475 215 473 206 b 349 65 462 141 419 95 b 259 43 317 51 288 43 b 167 69 230 43 200 52 b 4 290 80 113 20 195 b 0 349 1 309 0 328 b 20 467 0 391 6 433 b 255 648 58 563 155 637 m 269 363 b 257 363 265 363 261 363 b 210 345 236 363 220 356 b 186 226 196 324 186 272 b 187 198 186 216 186 206 b 213 95 191 151 202 112 b 257 76 221 83 238 76 b 270 77 261 76 266 76 b 321 156 299 81 310 99 b 329 229 326 183 329 206 b 321 301 329 252 326 274 b 269 363 311 342 298 359 m 236 -1 l 238 -1 l 235 -1 l 236 -1 m 236 673 l 238 673 l 235 673 l 236 673 "
                    },
                    v7: {
                        x_min: 0,
                        x_max: 442.359375,
                        ha: 451,
                        o: "m 147 648 b 166 649 153 649 160 649 b 313 598 217 649 273 630 b 340 587 323 588 328 587 l 341 587 b 412 628 367 587 390 601 b 427 638 416 635 421 638 b 439 632 431 638 435 637 b 442 623 441 630 442 628 b 430 569 442 616 439 603 b 352 369 408 492 377 410 b 300 259 325 324 313 298 b 273 84 283 205 273 140 b 265 55 273 65 272 59 l 261 54 l 181 54 l 99 54 l 96 55 b 91 61 95 56 92 59 l 89 63 l 89 77 b 147 263 89 133 111 202 b 261 401 176 313 212 355 b 378 541 315 449 349 489 l 382 548 l 375 544 b 240 495 333 512 285 495 b 129 535 198 495 160 509 b 84 560 108 552 95 560 b 76 559 81 560 78 560 b 31 487 59 555 43 530 b 14 470 27 473 24 470 b 1 477 8 470 4 471 l 0 480 l 0 553 l 0 627 l 1 630 b 16 638 4 635 9 638 b 23 635 17 638 20 637 b 49 626 36 626 39 626 b 96 638 59 626 80 630 b 104 639 99 638 102 639 b 117 644 107 641 112 642 b 147 648 125 645 137 648 m 220 -1 l 221 -1 l 219 -1 l 220 -1 m 220 673 l 221 673 l 219 673 l 220 673 "
                    },
                    v8: {
                        x_min: 0,
                        x_max: 488.640625,
                        ha: 499,
                        o: "m 217 648 b 245 649 225 648 235 649 b 453 516 343 649 430 595 b 458 478 455 503 458 491 b 412 370 458 440 441 398 b 411 369 412 369 411 369 b 415 365 411 367 412 367 b 488 231 462 331 488 281 b 472 165 488 208 483 186 b 243 43 434 86 338 43 b 63 104 178 43 112 62 b 0 233 20 140 0 186 b 73 365 0 283 24 331 l 77 369 l 72 374 b 29 476 42 406 29 441 b 217 648 29 557 103 635 m 258 605 b 242 606 253 605 247 606 b 157 552 198 606 157 580 b 160 541 157 548 159 544 b 319 413 176 503 242 452 l 337 403 l 338 406 b 359 476 352 428 359 452 b 258 605 359 537 318 595 m 138 326 b 130 330 134 328 130 330 b 130 330 130 330 130 330 b 107 305 127 330 112 313 b 84 231 91 281 84 256 b 243 86 84 156 151 86 b 249 87 245 86 246 87 b 347 156 303 88 347 120 b 344 172 347 162 345 167 b 156 319 325 227 257 281 b 138 326 151 322 144 324 m 243 -1 l 245 -1 l 242 -1 l 243 -1 m 243 673 l 245 673 l 242 673 l 243 673 "
                    },
                    v9: {
                        x_min: 0,
                        x_max: 475.03125,
                        ha: 485,
                        o: "m 191 646 b 212 649 198 648 205 649 b 255 644 227 649 243 646 b 458 448 348 616 428 539 b 475 342 469 415 475 378 b 460 244 475 308 469 274 b 193 44 421 124 303 44 b 91 69 157 44 122 51 b 19 161 43 97 19 126 b 21 181 19 167 20 174 b 98 241 32 220 65 241 b 170 186 129 241 160 223 b 172 166 171 179 172 173 b 121 94 172 134 152 102 b 117 93 118 94 117 93 b 121 90 117 93 118 91 b 185 76 142 80 164 76 b 270 119 220 76 251 91 b 308 259 287 145 300 194 b 313 317 310 277 313 310 b 313 317 313 317 313 317 b 313 317 313 317 313 317 b 304 315 313 317 308 316 b 216 295 273 302 245 295 b 145 308 193 295 170 299 b 19 398 88 327 42 360 b 0 469 5 420 0 444 b 24 551 0 496 8 526 b 191 646 54 596 125 637 m 227 614 b 215 616 224 616 220 616 b 202 614 210 616 206 616 b 152 535 174 610 163 592 b 144 463 147 509 144 485 b 152 391 144 440 147 417 b 216 328 163 344 179 328 b 280 391 253 328 269 344 b 288 463 285 417 288 440 b 280 535 288 485 285 509 b 227 614 269 594 258 610 m 236 -1 l 238 -1 l 235 -1 l 236 -1 m 236 673 l 238 673 l 235 673 l 236 673 "
                    },
                    va: {
                        x_min: -149.71875,
                        x_max: 148.359375,
                        ha: 151,
                        o: "m -8 -1 b -1 0 -5 -1 -4 0 b 16 -11 5 0 13 -4 b 83 -186 17 -12 47 -90 l 148 -358 l 148 -363 b 127 -385 148 -376 138 -385 b 112 -378 122 -385 118 -383 b 54 -226 110 -374 114 -385 b 0 -81 24 -147 0 -81 b -55 -226 -1 -81 -25 -147 b -114 -378 -115 -385 -111 -374 b -129 -385 -119 -383 -123 -385 b -149 -363 -140 -385 -149 -376 l -149 -358 l -84 -186 b -19 -11 -49 -90 -19 -12 b -8 -1 -17 -8 -12 -4 "
                    },
                    vb: {
                        x_min: 0,
                        x_max: 428.75,
                        ha: 438,
                        o: "m 262 186 b 273 186 266 186 272 186 b 274 186 273 186 274 186 b 285 186 274 186 280 186 b 428 48 375 181 428 122 b 386 -68 428 12 416 -29 b 155 -187 329 -145 236 -187 b 12 -111 92 -187 38 -162 b 0 -51 4 -91 0 -72 b 262 186 0 58 122 179 "
                    },
                    vc: {
                        x_min: 0,
                        x_max: 447.8125,
                        ha: 457,
                        o: "m 0 86 l 0 173 l 223 173 l 447 173 l 447 86 l 447 0 l 223 0 l 0 0 l 0 86 "
                    },
                    vf: {
                        x_min: 0,
                        x_max: 370.21875,
                        ha: 378,
                        o: "m 0 0 l 0 277 l 61 277 l 122 277 l 122 0 l 122 -278 l 61 -278 l 0 -278 l 0 0 m 246 -1 l 246 277 l 308 277 l 370 277 l 370 -1 l 370 -278 l 308 -278 l 246 -278 l 246 -1 "
                    },
                    v10: {
                        x_min: 0,
                        x_max: 559.421875,
                        ha: 571,
                        o: "m 5 127 b 14 127 6 127 9 127 b 51 126 25 127 43 127 b 175 98 93 122 138 112 l 186 94 b 279 51 210 86 255 65 b 285 47 280 51 283 48 b 319 27 291 44 311 31 l 326 22 b 359 0 332 19 352 4 l 367 -6 b 371 -9 368 -6 370 -8 l 379 -15 b 387 -22 383 -18 386 -20 l 398 -30 l 411 -40 l 417 -47 l 427 -55 l 434 -61 b 441 -66 436 -62 439 -65 l 446 -72 l 453 -77 l 462 -87 b 558 -188 490 -113 549 -176 b 559 -195 559 -191 559 -194 b 548 -205 559 -201 555 -205 b 541 -204 547 -205 544 -205 b 534 -198 539 -201 536 -199 l 525 -191 b 481 -162 518 -187 490 -167 b 472 -155 477 -159 472 -156 b 468 -152 470 -155 469 -154 b 461 -149 466 -152 464 -151 b 428 -130 454 -145 441 -137 b 371 -99 413 -122 372 -99 b 363 -95 371 -99 367 -98 b 353 -91 357 -94 353 -91 b 348 -90 353 -91 352 -91 b 332 -81 343 -87 341 -86 b 27 -12 230 -37 127 -13 b 0 -5 4 -11 2 -11 b 0 58 0 -2 0 27 b 0 122 0 88 0 120 b 5 127 1 124 4 126 "
                    },
                    v11: {
                        x_min: -155.171875,
                        x_max: 153.8125,
                        ha: 157,
                        o: "m -137 353 b -130 353 -136 353 -133 353 b -112 349 -125 353 -119 352 b -100 342 -110 347 -104 344 b 0 317 -69 326 -35 317 b 111 349 38 317 76 328 b 129 353 117 352 123 353 b 153 327 142 353 153 344 b 144 302 153 320 153 317 b 27 6 93 226 50 113 b 21 -13 24 -11 24 -11 b 0 -26 17 -22 8 -26 b -24 -12 -9 -26 -19 -22 b -28 5 -24 -9 -27 -2 b -145 302 -53 117 -95 224 b -155 327 -155 317 -155 320 b -137 353 -155 340 -148 349 "
                    },
                    v18: {
                        x_min: 0,
                        x_max: 323.9375,
                        ha: 331,
                        o: "m 217 535 b 225 537 220 537 221 537 b 245 524 235 537 242 533 l 246 521 l 247 390 l 247 258 l 273 265 b 306 270 288 269 299 270 b 322 259 315 270 319 267 b 323 208 323 256 323 233 b 322 158 323 184 323 159 b 288 140 318 148 315 147 b 247 130 254 131 247 130 b 247 65 247 130 247 104 b 247 20 247 51 247 36 l 247 -88 l 273 -81 b 306 -76 289 -77 299 -76 b 318 -81 311 -76 315 -77 b 323 -123 323 -87 323 -86 l 323 -138 l 323 -154 b 318 -195 323 -191 323 -190 b 269 -210 314 -199 315 -199 b 249 -216 259 -213 250 -216 l 247 -216 l 247 -349 l 246 -483 l 245 -487 b 225 -499 242 -495 234 -499 b 206 -487 219 -499 210 -495 l 205 -483 l 205 -355 l 205 -227 l 204 -227 l 181 -233 l 138 -244 b 117 -249 127 -247 117 -249 b 115 -385 115 -249 115 -256 l 115 -523 l 114 -526 b 95 -538 110 -534 102 -538 b 74 -526 87 -538 78 -534 l 73 -523 l 73 -391 b 72 -260 73 -269 73 -260 b 72 -260 72 -260 72 -260 b 19 -273 61 -263 23 -273 b 0 -260 10 -273 4 -267 b 0 -209 0 -256 0 -256 l 0 -162 l 1 -158 b 61 -134 5 -148 5 -148 l 73 -131 l 73 -22 b 72 86 73 79 73 86 b 72 86 72 86 72 86 b 19 74 61 83 23 74 b 0 86 10 74 4 79 b 0 137 0 90 0 90 l 0 184 l 1 188 b 61 212 5 198 5 198 l 73 215 l 73 348 l 73 481 l 74 485 b 95 498 78 492 87 498 b 103 495 98 498 100 496 b 114 485 107 494 111 489 l 115 481 l 115 353 l 115 226 l 121 226 b 159 235 123 227 141 231 l 198 247 l 205 248 l 205 384 l 205 521 l 206 524 b 217 535 209 528 212 533 m 205 9 b 205 119 205 70 205 119 l 205 119 b 182 113 204 119 194 116 l 138 102 b 117 97 127 99 117 97 b 115 -12 115 97 115 91 l 115 -122 l 121 -120 b 159 -111 123 -119 141 -115 l 198 -101 l 205 -98 l 205 9 "
                    },
                    v1b: {
                        x_min: 0,
                        x_max: 559.421875,
                        ha: 571,
                        o: "m 544 204 b 548 204 545 204 547 204 b 559 194 555 204 559 199 b 559 190 559 192 559 191 b 530 156 559 188 556 184 b 462 86 510 134 481 104 b 453 76 458 81 454 77 l 446 70 l 441 65 b 434 59 439 63 436 61 l 427 54 b 409 37 426 51 416 44 b 392 23 398 29 394 26 b 387 19 389 22 387 20 b 379 13 386 19 383 16 l 371 8 l 367 5 l 359 -1 l 337 -16 b 285 -48 319 -29 298 -41 l 279 -52 b 186 -95 255 -66 210 -87 l 175 -99 b 23 -129 127 -117 68 -129 b 17 -129 20 -129 19 -129 b 1 -123 2 -129 2 -129 b 0 -49 0 -122 0 -83 b 0 4 0 -22 0 1 b 27 11 2 9 4 9 b 185 31 78 12 145 20 b 198 34 186 31 193 33 b 314 73 234 44 277 58 b 349 88 328 79 340 84 b 353 90 352 90 353 90 b 363 94 353 90 357 93 b 371 98 367 97 371 98 b 428 129 372 98 413 120 b 461 148 441 136 454 144 b 468 151 464 149 466 151 b 472 154 469 152 470 154 b 481 161 473 155 477 158 b 525 190 490 166 518 186 l 534 197 b 540 201 536 198 539 199 b 544 204 541 202 544 204 "
                    },
                    v1d: {
                        x_min: 0,
                        x_max: 619.3125,
                        ha: 632,
                        o: "m 274 184 b 307 186 285 186 296 186 b 616 22 465 186 597 116 b 619 -1 617 13 619 5 b 308 -187 619 -104 483 -187 b 0 -1 133 -187 0 -102 b 5 36 0 11 1 23 b 274 184 29 115 141 176 m 289 161 b 272 162 284 162 277 162 b 171 41 209 162 171 108 b 205 -73 171 5 182 -34 b 345 -163 243 -133 298 -163 b 436 -98 385 -163 420 -142 b 446 -43 443 -80 446 -62 b 289 161 446 47 377 147 "
                    },
                    v1e: {
                        x_min: -402.890625,
                        x_max: 401.53125,
                        ha: 410,
                        o: "m -219 173 b -213 174 -217 174 -215 174 b -202 173 -209 174 -205 173 b -114 86 -200 172 -179 151 b -28 0 -66 37 -28 0 b 40 84 -28 0 2 37 b 117 174 111 173 110 172 b 122 174 118 174 119 174 b 132 173 125 174 129 173 b 295 11 134 172 171 134 l 307 -1 l 336 34 b 374 76 366 72 368 74 b 381 77 375 77 378 77 b 401 56 392 77 401 68 b 400 48 401 54 401 51 b 223 -172 397 41 230 -166 b 210 -176 220 -174 215 -176 b 201 -174 206 -176 204 -176 b 112 -87 198 -173 178 -152 b 27 0 65 -38 27 0 b -42 -86 27 0 -4 -38 b -118 -174 -112 -174 -111 -173 b -123 -176 -119 -176 -121 -176 b -133 -174 -126 -176 -130 -174 b -296 -12 -136 -173 -172 -137 l -308 0 l -337 -34 b -375 -77 -367 -73 -370 -76 b -382 -79 -377 -79 -379 -79 b -402 -58 -393 -79 -402 -69 b -401 -49 -402 -55 -402 -52 b -224 172 -398 -43 -228 167 b -219 173 -223 172 -220 173 "
                    },
                    v1f: {
                        x_min: -340.28125,
                        x_max: 338.921875,
                        ha: 346,
                        o: "m -32 520 b -29 521 -31 520 -31 521 b -23 519 -27 521 -24 520 b -20 513 -21 517 -20 516 b -21 506 -20 512 -20 509 b -31 474 -23 502 -27 488 l -53 402 l -66 352 l -68 349 l -57 349 b -32 351 -51 349 -40 351 b 123 370 19 352 74 359 b 137 371 127 370 133 371 b 170 356 152 371 164 366 b 171 355 170 355 170 355 b 216 366 174 355 183 358 b 280 378 268 377 266 377 b 287 378 283 378 284 378 b 332 349 307 378 322 369 b 338 319 336 341 338 330 b 332 301 338 310 336 302 b 242 280 329 299 246 280 b 242 280 242 280 242 280 b 235 288 236 280 235 283 b 235 292 235 290 235 291 b 236 302 236 297 236 299 b 220 337 236 316 230 330 l 216 340 l 210 335 b 159 276 189 322 172 301 b 118 149 152 265 156 274 b 81 34 84 36 85 36 b -8 13 78 33 -4 13 b -8 13 -8 13 -8 13 b -14 20 -12 15 -14 15 b -8 44 -14 24 -12 31 b -2 66 -5 55 -2 65 b -2 66 -2 66 -2 66 l -2 66 b -43 41 -2 66 -21 55 b -114 4 -98 8 -98 8 b -144 0 -123 0 -134 0 b -242 99 -197 0 -242 43 b -242 109 -242 102 -242 105 b -212 219 -240 122 -242 116 b -185 312 -197 270 -185 312 l -185 312 b -189 312 -185 312 -186 312 b -259 312 -200 312 -227 312 b -321 310 -291 312 -310 310 b -334 312 -330 310 -334 312 b -340 319 -338 313 -340 316 b -336 326 -340 322 -338 324 b -291 337 -334 326 -314 331 l -247 347 l -210 348 b -172 348 -190 348 -172 348 b -168 363 -172 348 -171 355 b -145 442 -151 424 -145 441 b -133 452 -144 444 -140 446 l -77 489 b -32 520 -53 506 -32 520 m 57 334 b 53 335 55 335 54 335 b 44 334 50 335 49 335 b -70 316 8 326 -28 320 b -78 309 -78 316 -78 316 b -108 202 -80 305 -88 274 b -141 81 -136 112 -141 93 b -140 74 -141 79 -141 77 b -117 49 -137 59 -127 49 b -107 52 -114 49 -110 51 b 16 127 -106 54 14 126 b 42 217 16 127 42 215 b 49 241 42 222 44 229 b 73 320 53 251 73 317 b 57 334 73 327 65 333 "
                    },
                    v20: {
                        x_min: -571.671875,
                        x_max: 570.3125,
                        ha: 582,
                        o: "m -559 351 b -551 352 -556 352 -553 352 b -530 338 -543 352 -533 348 b -529 169 -530 337 -529 291 l -529 1 l -507 27 l -441 112 b -382 174 -394 169 -390 174 b -378 174 -381 174 -379 174 b -281 86 -370 174 -375 179 b -196 0 -234 37 -196 0 b -126 84 -196 0 -164 37 b -50 174 -55 173 -57 172 b -44 174 -49 174 -47 174 b -35 173 -42 174 -38 173 b 53 86 -32 172 -12 151 b 138 0 100 37 138 0 b 208 84 140 0 170 37 b 284 174 279 173 279 172 b 289 174 285 174 288 174 b 300 173 294 174 298 173 b 462 11 303 172 340 134 l 475 -1 l 503 34 b 541 76 534 72 536 74 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -174 382 -176 b 368 -174 375 -176 371 -176 b 280 -87 367 -173 347 -152 b 194 0 234 -38 194 0 b 126 -86 194 0 163 -38 b 49 -174 54 -174 55 -173 b 44 -176 47 -176 46 -176 b 34 -174 40 -176 36 -174 b -54 -87 31 -173 10 -152 b -140 0 -102 -38 -140 0 b -209 -86 -140 0 -171 -38 b -285 -174 -280 -174 -279 -173 b -291 -176 -287 -176 -288 -176 b -300 -174 -294 -176 -298 -174 b -464 -11 -303 -173 -374 -102 l -476 0 l -506 -37 b -539 -76 -528 -65 -537 -74 b -551 -80 -543 -79 -547 -80 b -570 -68 -558 -80 -566 -76 l -571 -65 l -571 136 b -570 340 -571 331 -571 337 b -559 351 -568 344 -564 348 "
                    },
                    v22: {
                        x_min: 0,
                        x_max: 432.828125,
                        ha: 442,
                        o: "m 209 186 b 213 187 210 187 212 187 b 216 187 215 187 216 187 b 224 174 216 186 220 180 b 420 -1 269 105 338 43 b 432 -12 431 -8 432 -9 b 421 -23 432 -15 432 -16 b 228 -180 345 -70 264 -137 b 219 -188 221 -188 221 -188 l 219 -188 b 208 -177 215 -188 215 -188 b 10 1 163 -106 93 -44 b 0 11 0 6 0 8 b 10 22 0 13 0 15 b 202 179 87 69 167 136 b 209 186 206 183 209 186 "
                    },
                    v23: {
                        x_min: 0,
                        x_max: 133.390625,
                        ha: 136,
                        o: "m 54 66 b 65 68 58 68 61 68 b 122 37 88 68 110 56 b 133 -1 130 26 133 12 b 104 -58 133 -23 123 -44 b 66 -69 92 -65 78 -69 b 10 -38 44 -69 23 -58 b 0 -1 2 -27 0 -13 b 54 66 0 30 20 61 "
                    },
                    v25: {
                        x_min: 0,
                        x_max: 318.5,
                        ha: 325,
                        o: "m 20 376 b 167 377 23 377 96 377 b 296 376 231 377 294 377 b 318 347 311 371 318 359 b 296 316 318 333 311 320 b 159 315 294 315 227 315 b 21 316 91 315 24 315 b 0 345 6 320 0 333 b 20 376 0 359 6 371 "
                    },
                    v26: {
                        x_min: -21.78125,
                        x_max: 483.1875,
                        ha: 493,
                        o: "m -8 631 b -1 632 -6 632 -4 632 b 19 620 8 632 16 628 b 20 383 20 616 20 616 l 20 148 l 21 151 b 140 199 59 183 102 199 b 206 179 164 199 187 192 l 210 176 l 210 396 l 210 617 l 212 621 b 231 632 216 628 223 632 b 250 620 239 632 247 628 b 251 383 251 616 251 616 l 251 148 l 254 151 b 370 199 291 183 332 199 b 415 191 385 199 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -142 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -217 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -142 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -224 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 624 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "
                    },
                    v27: {
                        x_min: 0,
                        x_max: 432.828125,
                        ha: 442,
                        o: "m 208 184 b 213 187 209 186 212 187 b 224 176 217 187 221 183 b 245 147 225 172 235 159 b 419 -1 288 90 347 38 b 431 -8 424 -4 431 -8 b 432 -12 432 -9 432 -11 b 430 -18 432 -13 432 -16 b 364 -61 424 -20 383 -47 b 225 -183 307 -102 250 -152 b 223 -187 224 -184 223 -187 b 220 -188 221 -188 220 -188 b 208 -176 216 -188 210 -184 b 187 -148 205 -173 197 -159 b 12 0 144 -90 84 -38 b 0 11 4 5 0 8 b 16 24 0 13 4 18 b 183 158 83 69 141 115 b 208 184 194 169 198 173 m 183 105 b 176 113 181 109 176 113 b 172 109 176 113 175 112 b 92 45 149 90 117 62 l 88 41 l 102 31 b 247 -105 160 -6 210 -55 l 254 -115 l 257 -112 l 269 -102 b 340 -45 287 -87 319 -61 l 344 -43 l 330 -33 b 183 105 272 6 221 54 "
                    },
                    v28: {
                        x_min: -73.5,
                        x_max: 72.140625,
                        ha: 74,
                        o: "m -72 252 l -73 254 l 0 254 l 72 254 l 70 252 b 0 -1 70 248 0 -1 b -72 252 -1 -1 -72 248 "
                    },
                    v29: {
                        x_min: -590.71875,
                        x_max: 589.359375,
                        ha: 601,
                        o: "m 175 273 b 182 274 178 273 181 274 b 202 262 190 274 198 269 b 204 158 204 259 204 259 l 204 56 l 250 112 b 303 174 296 172 298 172 b 308 174 304 174 307 174 b 318 173 313 174 317 173 b 481 11 322 172 357 134 l 494 -1 l 522 34 b 560 76 553 72 555 74 b 567 77 563 77 564 77 b 589 56 579 77 589 68 b 586 48 589 54 588 51 b 411 -172 583 41 416 -166 b 397 -176 406 -174 401 -176 b 387 -174 393 -176 390 -176 b 299 -87 386 -173 366 -152 b 213 0 253 -38 213 0 b 208 -6 213 0 210 -2 l 204 -12 l 204 -147 b 204 -210 204 -173 204 -194 b 198 -292 204 -297 204 -287 b 183 -299 194 -297 189 -299 b 164 -287 175 -299 167 -295 b 163 -174 163 -284 163 -284 l 161 -63 l 119 -117 b 65 -176 76 -170 73 -176 b 61 -176 63 -176 62 -176 b -35 -87 51 -174 57 -180 b -121 0 -83 -38 -121 0 b -190 -86 -122 0 -152 -38 b -266 -174 -261 -174 -259 -173 b -272 -176 -268 -176 -270 -176 b -281 -174 -276 -176 -280 -174 b -371 -86 -284 -173 -304 -152 b -457 0 -417 -38 -457 0 l -457 0 b -477 -26 -457 0 -470 -16 b -548 -227 -524 -88 -548 -161 b -536 -303 -548 -254 -544 -280 b -533 -317 -534 -309 -533 -313 b -553 -338 -533 -330 -541 -338 b -577 -315 -566 -338 -571 -333 b -590 -227 -586 -287 -590 -258 b -518 -9 -590 -154 -564 -77 b -465 56 -509 2 -504 8 l -402 134 b -363 174 -374 170 -371 174 b -359 174 -362 174 -360 174 b -262 86 -351 174 -356 179 b -176 0 -216 37 -176 0 b -107 84 -176 0 -145 37 b -31 174 -36 173 -38 172 b -25 174 -29 174 -28 174 b -16 173 -23 174 -19 173 b 147 11 -13 172 35 123 l 157 -1 l 160 1 l 163 4 l 163 130 b 164 260 163 256 163 258 b 175 273 166 266 170 270 "
                    },
                    v2a: {
                        x_min: -21.78125,
                        x_max: 366.140625,
                        ha: 374,
                        o: "m 276 1378 b 284 1379 279 1379 281 1379 b 306 1360 292 1379 298 1374 b 352 1247 326 1326 343 1286 b 366 1139 362 1213 366 1175 b 347 1009 366 1093 359 1049 l 344 1002 l 347 992 b 352 971 348 986 351 977 b 366 863 362 936 366 899 b 347 732 366 818 359 773 l 344 725 l 347 716 b 352 695 348 710 351 700 b 366 588 362 659 366 623 b 223 262 366 464 314 345 b 189 233 212 252 212 252 b 35 76 126 183 73 129 b -1 16 20 56 2 27 b -19 4 -4 9 -12 4 l -21 4 l -21 137 l -21 270 l -17 270 b 186 344 59 281 134 308 b 319 606 270 399 319 499 b 317 650 319 620 319 635 l 315 659 l 314 655 b 223 537 288 607 258 570 b 189 509 212 528 212 528 b 35 352 126 459 73 405 b -1 292 20 333 2 303 b -19 280 -4 285 -12 280 l -21 280 l -21 413 l -21 546 l -17 546 b 186 620 59 557 134 584 b 319 882 270 675 319 775 b 317 925 319 896 319 911 l 315 935 l 314 931 b 223 813 288 884 258 846 b 189 785 212 805 212 805 b 35 628 126 735 73 681 b -1 569 20 609 2 580 b -19 556 -4 562 -12 556 l -21 556 l -21 689 l -21 823 l -17 823 b 202 907 68 835 152 867 b 319 1157 280 968 319 1061 b 270 1338 319 1218 303 1281 b 262 1358 264 1349 262 1353 b 262 1364 262 1360 262 1363 b 276 1378 265 1371 269 1376 "
                    },
                    v2c: {
                        x_min: -597.53125,
                        x_max: 596.171875,
                        ha: 608,
                        o: "m -413 173 b -408 174 -412 174 -409 174 b -397 173 -404 174 -400 173 b -308 86 -394 172 -374 151 b -223 0 -261 37 -223 0 b -153 84 -223 0 -191 37 b -77 174 -83 173 -84 172 b -72 174 -76 174 -74 174 b -62 173 -68 174 -63 173 b 25 86 -59 172 -39 151 b 112 0 73 37 111 0 b 181 84 112 0 144 37 b 257 174 251 173 251 172 b 262 174 258 174 261 174 b 273 173 266 174 270 173 b 436 9 276 172 347 101 l 447 -1 l 477 36 b 522 79 511 79 513 79 l 522 79 b 552 51 533 79 539 73 b 596 -112 582 6 596 -51 b 567 -262 596 -161 586 -213 b 539 -322 558 -287 544 -316 b 524 -327 534 -326 529 -327 b 504 -315 515 -327 507 -323 b 503 -308 503 -312 503 -309 b 511 -285 503 -302 504 -297 b 555 -113 540 -227 555 -169 b 544 -34 555 -86 551 -59 b 522 19 540 -16 530 8 l 521 22 l 481 -26 l 405 -122 b 353 -176 366 -172 362 -176 b 349 -176 352 -176 351 -176 b 253 -87 341 -176 347 -180 b 167 0 206 -38 167 0 b 99 -86 167 0 136 -38 b 21 -174 27 -174 28 -173 b 17 -176 20 -176 19 -176 b 6 -174 13 -176 9 -174 b -81 -87 4 -173 -14 -152 b -167 0 -129 -38 -167 0 b -236 -86 -167 0 -198 -38 b -313 -174 -307 -174 -306 -173 b -318 -176 -314 -176 -315 -176 b -328 -174 -321 -176 -325 -174 b -491 -12 -330 -173 -367 -137 l -503 0 l -530 -34 b -570 -77 -562 -73 -564 -76 b -577 -79 -571 -79 -574 -79 b -597 -58 -588 -79 -597 -69 b -596 -49 -597 -55 -597 -52 b -417 172 -593 -43 -423 167 b -413 173 -417 172 -415 173 "
                    },
                    v2d: {
                        x_min: 0,
                        x_max: 438.28125,
                        ha: 447,
                        o: "m 212 190 b 219 191 213 191 216 191 b 236 176 225 191 228 190 b 419 18 277 105 341 49 b 436 5 431 13 434 11 b 438 -1 438 4 438 1 b 424 -16 438 -8 432 -13 b 356 -49 409 -20 379 -36 b 234 -180 306 -83 258 -133 b 219 -192 230 -188 224 -192 b 200 -176 213 -192 206 -187 b 9 -15 157 -102 89 -45 b 0 0 2 -12 0 -6 b 16 18 0 9 2 12 b 200 176 93 48 159 104 b 212 190 205 186 208 188 m 239 113 b 236 117 238 116 238 117 b 230 108 235 117 234 115 b 92 -15 196 58 140 8 b 88 -18 91 -16 88 -18 b 92 -20 88 -18 91 -19 b 198 -116 130 -43 166 -74 b 200 -117 200 -117 200 -117 b 201 -117 200 -117 201 -117 b 264 -43 212 -98 242 -62 b 345 15 288 -19 321 4 b 348 18 347 16 348 16 b 344 20 348 18 347 19 b 239 113 307 41 266 79 "
                    },
                    v2f: {
                        x_min: -1.359375,
                        x_max: 680.5625,
                        ha: 694,
                        o: "m 597 1042 b 604 1042 600 1042 602 1042 b 642 1002 627 1042 642 1022 b 619 966 642 988 635 974 b 439 927 574 942 503 927 l 426 927 l 426 921 b 430 838 428 893 430 866 b 345 480 430 696 398 560 b 179 391 307 423 249 391 b 156 392 171 391 164 392 b 138 394 149 394 142 394 b 103 434 115 396 103 416 b 129 471 103 451 111 466 b 141 474 133 473 137 474 b 172 459 153 474 164 469 b 181 455 175 456 176 455 b 187 456 182 455 185 455 b 253 520 212 460 234 483 b 315 836 294 605 315 714 b 311 928 315 867 314 898 b 302 945 310 943 311 942 b 245 953 283 950 262 953 b 130 891 193 953 149 931 b 84 860 119 870 102 860 b 36 905 61 860 39 877 b 36 910 36 907 36 909 b 80 970 36 931 50 949 b 249 1017 125 1000 187 1017 b 322 1009 273 1017 299 1014 l 341 1003 b 436 991 372 995 406 991 b 577 1031 495 991 545 1004 b 597 1042 583 1038 590 1041 m 416 360 b 424 360 419 360 421 360 b 481 309 454 360 479 338 b 503 145 484 280 495 199 b 585 -185 525 16 555 -106 b 630 -245 596 -213 613 -237 l 634 -247 l 638 -245 b 647 -244 641 -245 645 -244 b 680 -278 666 -244 680 -262 b 664 -308 680 -290 675 -301 b 638 -312 658 -310 650 -312 b 613 -309 631 -312 623 -310 b 477 -201 555 -303 502 -260 b 417 -2 460 -159 434 -72 b 416 5 417 1 416 5 b 416 5 416 5 416 5 b 411 -5 415 5 413 0 b 359 -97 397 -33 377 -70 b 353 -106 355 -102 353 -105 b 359 -112 353 -108 355 -109 b 409 -130 375 -123 390 -129 b 426 -134 420 -130 421 -131 b 431 -147 428 -137 431 -141 b 420 -162 431 -152 427 -159 b 382 -169 409 -166 396 -169 b 323 -155 363 -169 341 -165 l 317 -152 l 314 -155 b 62 -303 240 -240 148 -295 b 36 -305 55 -305 44 -305 b 23 -303 29 -305 24 -305 b -1 -273 6 -299 -1 -287 b 31 -240 -1 -256 10 -240 b 36 -240 32 -240 34 -240 b 42 -241 38 -241 39 -241 b 134 -204 63 -241 99 -226 b 367 288 265 -115 357 81 b 375 330 368 313 370 320 b 416 360 383 347 400 358 m 360 -359 b 379 -359 363 -359 371 -359 b 424 -360 396 -359 416 -359 b 646 -502 536 -373 624 -430 b 649 -527 649 -510 649 -519 b 530 -673 649 -578 604 -635 l 521 -677 l 529 -681 b 653 -811 592 -714 637 -762 b 660 -853 658 -827 660 -839 b 645 -911 660 -873 656 -892 b 426 -1021 608 -981 519 -1021 b 283 -989 377 -1021 328 -1011 b 235 -949 249 -972 239 -964 b 234 -936 234 -946 234 -941 b 234 -928 234 -934 234 -931 l 235 -925 l 234 -927 l 225 -934 b 87 -982 186 -966 138 -982 b 80 -982 85 -982 83 -982 b 55 -981 70 -981 58 -981 b 17 -943 32 -981 17 -964 b 54 -904 17 -921 35 -904 b 78 -914 62 -904 72 -909 l 83 -918 l 88 -918 b 190 -831 122 -918 166 -881 b 269 -506 242 -727 269 -612 b 268 -462 269 -492 269 -477 b 266 -449 266 -458 266 -452 b 265 -444 266 -445 266 -444 b 257 -446 264 -444 261 -445 b 132 -545 196 -470 152 -505 b 88 -573 122 -563 104 -573 b 39 -523 63 -573 39 -553 b 63 -476 39 -505 44 -494 b 360 -359 136 -408 235 -369 m 419 -424 b 393 -423 411 -423 406 -423 l 375 -423 l 377 -426 b 379 -439 377 -427 378 -434 b 383 -510 382 -463 383 -487 b 314 -811 383 -609 360 -710 b 266 -893 296 -850 285 -870 b 264 -898 265 -896 264 -898 l 264 -898 b 264 -898 264 -898 264 -898 b 268 -898 264 -898 266 -898 b 273 -898 270 -898 272 -898 b 300 -909 283 -898 291 -900 b 426 -957 340 -941 385 -957 b 476 -949 443 -957 460 -954 b 547 -853 522 -931 547 -893 b 485 -745 547 -816 526 -775 b 397 -707 460 -727 432 -714 b 366 -675 375 -703 366 -692 b 396 -642 366 -657 377 -645 b 530 -557 455 -637 511 -601 b 536 -527 534 -548 536 -537 b 419 -424 536 -480 490 -437 "
                    },
                    v30: {
                        x_min: -21.78125,
                        x_max: 367.5,
                        ha: 375,
                        o: "m 276 1900 b 284 1901 279 1900 281 1901 b 306 1883 291 1901 298 1896 b 367 1686 347 1825 367 1757 b 343 1558 367 1643 359 1600 l 338 1549 l 343 1537 b 367 1411 359 1497 367 1454 b 343 1282 367 1367 359 1324 l 338 1272 l 343 1261 b 367 1135 359 1221 367 1178 b 343 1007 367 1090 359 1047 l 338 996 l 343 985 b 367 859 359 945 367 902 b 343 731 367 814 359 771 l 338 720 l 343 709 b 367 582 359 667 367 626 b 289 362 367 503 340 426 b 239 312 276 345 259 330 b 29 77 152 237 76 152 b -1 18 14 54 2 30 b -19 4 -4 11 -12 4 l -21 4 l -21 133 l -20 260 l -13 262 b 98 299 17 269 62 284 b 111 305 103 302 110 305 b 167 334 123 310 156 327 b 319 595 264 391 319 491 b 313 659 319 616 318 638 b 310 667 311 664 311 667 b 307 663 310 667 308 666 b 240 588 289 637 269 614 b 16 331 141 505 62 413 b -1 294 8 316 1 302 b -19 280 -4 287 -12 280 l -21 280 l -21 408 l -20 537 l -13 538 b 98 576 17 545 62 560 b 111 581 103 578 110 581 b 167 610 123 587 156 603 b 319 871 264 667 319 767 b 313 935 319 892 318 913 b 310 942 311 941 311 942 b 307 939 310 942 308 941 b 240 864 289 913 269 889 b 16 607 141 781 62 689 b -1 570 8 592 1 578 b -19 556 -4 563 -12 556 l -21 556 l -21 684 l -20 813 l -13 814 b 98 852 17 821 62 836 b 111 857 103 855 110 857 b 167 886 123 863 156 880 b 319 1147 264 943 319 1043 b 313 1211 319 1168 318 1189 b 310 1218 311 1217 311 1218 b 307 1215 310 1218 308 1217 b 240 1140 289 1188 269 1165 b 16 884 141 1057 62 966 b -1 846 8 868 1 855 b -19 832 -4 839 -12 832 l -21 832 l -21 960 l -20 1089 l -13 1090 b 98 1128 17 1097 62 1111 b 111 1134 103 1131 110 1134 b 167 1163 123 1139 156 1156 b 319 1424 264 1220 319 1320 b 313 1486 319 1444 318 1465 b 310 1494 311 1493 311 1494 b 307 1492 310 1494 308 1493 b 240 1417 289 1464 269 1442 b 16 1160 141 1333 62 1242 b -1 1121 8 1145 1 1131 b -19 1109 -4 1115 -12 1109 l -21 1109 l -21 1236 l -20 1365 l -13 1367 b 98 1404 17 1374 62 1388 b 111 1410 103 1407 110 1410 b 250 1508 172 1437 215 1467 b 319 1701 296 1564 319 1633 b 270 1859 319 1757 303 1814 b 262 1882 265 1868 262 1875 b 276 1900 262 1890 266 1896 "
                    },
                    v31: {
                        x_min: 0,
                        x_max: 386.5625,
                        ha: 394,
                        o: "m 0 173 l 0 347 l 193 347 l 386 347 l 386 173 l 386 0 l 193 0 l 0 0 l 0 173 "
                    },
                    v33: {
                        x_min: -423.3125,
                        x_max: 421.9375,
                        ha: 431,
                        o: "m -10 276 b -2 277 -8 277 -5 277 b 17 265 5 277 13 273 b 19 163 19 260 19 260 l 19 68 l 39 45 b 277 -95 122 -34 200 -81 b 289 -97 281 -97 285 -97 b 378 0 332 -97 371 -54 b 378 11 378 4 378 6 b 302 83 378 55 345 83 b 242 66 283 83 262 77 b 208 56 231 59 219 56 b 148 120 175 56 148 81 b 200 186 148 151 164 172 b 261 198 220 194 240 198 b 420 45 341 198 411 137 b 421 22 421 37 421 29 b 257 -198 421 -86 347 -188 b 242 -198 251 -198 247 -198 b 20 -105 181 -198 95 -163 l 19 -104 l 19 -183 b 19 -216 19 -195 19 -206 b 12 -273 19 -272 17 -267 b -2 -278 8 -277 2 -278 b -21 -266 -10 -278 -19 -274 b -23 -165 -23 -263 -23 -262 l -23 -69 l -44 -47 b -250 86 -117 23 -183 66 b -295 94 -270 93 -284 94 b -315 91 -302 94 -308 94 b -381 5 -356 81 -381 43 b -355 -56 -381 -16 -372 -40 b -299 -81 -338 -73 -319 -81 b -246 -68 -283 -81 -265 -77 b -212 -58 -234 -61 -223 -58 b -168 -77 -196 -58 -179 -65 b -151 -122 -156 -90 -151 -105 b -179 -174 -151 -141 -160 -162 b -239 -195 -194 -184 -217 -192 b -257 -197 -245 -195 -250 -197 b -423 -5 -349 -197 -423 -113 b -423 0 -423 -4 -423 -1 b -277 194 -420 97 -362 173 b -247 197 -268 197 -258 197 b -24 104 -185 197 -100 162 l -23 102 l -23 181 b -21 265 -23 260 -23 260 b -10 276 -20 269 -14 274 "
                    },
                    v34: {
                        x_min: 0,
                        x_max: 622.03125,
                        ha: 635,
                        o: "m 398 417 b 406 419 401 419 404 419 b 427 398 417 419 427 409 b 427 391 427 395 427 392 b 34 -274 424 385 38 -272 b 20 -280 29 -278 25 -280 b 0 -259 9 -280 0 -270 b 0 -252 0 -256 0 -254 b 393 413 2 -247 389 410 b 398 417 394 415 397 416 m 592 417 b 600 419 594 419 597 419 b 622 398 611 419 622 409 b 620 391 622 395 620 392 b 227 -274 617 385 231 -272 b 213 -280 223 -278 219 -280 b 193 -259 202 -280 193 -270 b 194 -252 193 -256 193 -254 b 586 413 196 -247 582 410 b 592 417 588 415 590 416 "
                    },
                    v36: {
                        x_min: -1.359375,
                        x_max: 1064.390625,
                        ha: 1086,
                        o: "m 296 692 b 314 694 302 694 307 694 b 386 685 337 694 366 689 b 548 498 480 660 548 580 b 548 481 548 492 548 487 b 455 395 541 426 499 395 b 370 462 420 395 383 417 b 362 496 364 477 362 488 b 377 514 362 509 367 514 b 393 501 386 514 390 510 b 432 474 397 484 413 474 b 470 487 445 474 458 478 b 491 530 484 496 491 510 b 490 544 491 534 491 539 b 333 660 479 606 411 657 l 323 662 l 315 646 b 269 524 285 591 269 556 b 321 431 269 492 287 466 b 349 395 338 413 343 408 b 363 342 359 378 363 362 b 359 312 363 333 362 322 b 285 158 348 266 318 206 b 281 152 283 155 281 152 b 281 152 281 152 281 152 b 287 154 283 152 284 152 b 318 155 298 154 308 155 b 461 98 371 155 419 136 l 464 97 l 483 112 b 503 129 494 120 503 127 b 504 130 503 129 504 129 b 503 138 504 131 503 134 b 500 180 500 152 500 166 b 553 326 500 238 518 288 b 604 366 560 331 592 358 b 649 381 617 376 632 381 b 696 362 665 381 681 374 b 724 302 714 347 724 324 b 695 238 724 278 714 255 b 660 210 691 234 662 212 b 579 148 658 209 582 151 b 579 148 579 148 579 148 b 596 106 579 144 589 119 b 622 77 604 88 609 83 b 657 69 632 72 645 69 b 748 112 688 69 721 84 b 755 123 754 117 755 120 b 755 127 755 124 755 126 b 751 165 752 137 751 151 b 758 219 751 183 754 202 b 894 387 774 290 820 347 b 896 390 896 388 896 388 b 891 398 896 391 895 392 b 622 560 827 477 730 535 b 600 580 605 564 600 569 b 617 596 600 591 607 596 b 628 595 622 596 624 596 b 1057 248 846 552 1020 412 b 1064 191 1061 229 1064 209 b 922 0 1064 94 1005 9 b 902 -1 916 -1 909 -1 b 774 76 847 -1 800 26 b 769 83 770 81 770 83 b 769 81 769 83 769 83 b 627 -1 733 29 677 -1 b 548 27 597 -1 570 8 b 515 88 537 37 525 61 l 513 95 l 510 93 l 453 45 b 390 0 396 0 396 0 b 390 0 390 0 390 0 b 374 15 381 0 377 4 b 268 105 359 69 314 105 b 250 104 262 105 257 105 l 243 102 l 234 90 b 155 1 201 49 159 2 b 147 -1 152 0 149 -1 b 130 15 138 -1 130 6 b 132 20 130 18 132 19 b 136 31 133 22 134 27 b 220 131 149 74 178 109 b 231 137 225 134 230 136 b 302 278 280 202 302 244 b 265 335 302 299 295 309 b 209 442 234 363 213 402 b 209 455 209 446 209 451 b 279 648 209 502 232 564 l 285 659 l 283 659 b 176 627 238 653 210 645 b 57 477 111 594 66 538 b 55 459 55 471 55 464 b 72 409 55 437 61 415 b 93 403 78 405 87 403 b 152 467 123 403 151 431 b 168 488 153 483 157 488 b 185 462 181 488 185 483 l 185 460 b 137 344 183 409 168 369 b 78 322 119 328 98 322 b 13 360 50 322 25 335 b -1 426 4 380 -1 402 b 89 610 -1 488 32 559 b 296 692 147 659 210 685 m 926 348 b 921 353 924 351 922 353 b 914 348 920 353 918 351 b 823 167 857 306 823 237 b 828 124 823 154 826 138 b 890 31 837 79 862 40 b 896 31 892 31 894 31 b 956 104 916 31 940 59 b 970 191 965 129 970 159 b 966 241 970 208 969 224 b 926 348 959 277 945 313 m 627 326 b 619 326 624 326 622 326 b 598 316 611 326 604 323 b 568 215 579 288 568 255 b 568 208 568 213 568 210 b 571 183 570 195 570 184 l 571 183 b 594 201 571 183 582 191 l 634 231 b 660 259 653 247 656 248 b 664 278 662 266 664 272 b 627 326 664 299 649 320 "
                    },
                    v38: {
                        x_min: -1.359375,
                        x_max: 651.96875,
                        ha: 665,
                        o: "m 389 644 b 405 645 394 645 400 645 b 504 566 450 645 492 613 b 507 541 506 557 507 549 b 480 471 507 514 498 489 l 477 467 l 483 470 b 609 591 539 485 586 531 b 613 601 611 595 613 599 b 631 609 619 607 624 609 b 651 588 641 609 651 602 b 200 -946 651 584 204 -941 b 182 -957 197 -953 190 -957 b 163 -945 174 -957 166 -953 b 161 -939 161 -942 161 -942 b 217 -743 161 -931 170 -904 b 272 -555 247 -639 272 -555 b 272 -555 272 -555 272 -555 b 264 -560 272 -555 268 -557 b 140 -603 227 -589 182 -603 b 36 -567 102 -603 65 -592 b -1 -487 12 -548 -1 -517 b 17 -427 -1 -466 5 -445 b 103 -380 38 -395 70 -380 b 191 -433 137 -380 172 -398 b 205 -484 201 -448 205 -466 b 178 -553 205 -509 196 -535 l 175 -557 l 182 -555 b 307 -435 236 -539 284 -494 b 372 -213 308 -430 372 -215 b 372 -213 372 -213 372 -213 b 364 -219 372 -213 368 -216 b 240 -262 328 -247 283 -262 b 137 -226 202 -262 166 -249 b 99 -145 112 -206 99 -176 b 118 -84 99 -124 106 -104 b 204 -38 138 -54 171 -38 b 292 -91 238 -38 273 -56 b 306 -141 302 -106 306 -124 b 279 -212 306 -167 296 -194 l 276 -215 l 281 -213 b 408 -93 336 -198 385 -151 b 473 129 409 -88 473 127 b 473 129 473 129 473 129 b 465 122 473 129 469 126 b 341 80 428 94 383 80 b 236 115 303 80 266 91 b 200 195 213 136 200 165 b 217 256 200 217 206 238 b 304 303 239 287 272 303 b 393 249 338 303 374 285 b 406 199 402 234 406 217 b 379 129 406 173 397 148 l 377 126 l 382 127 b 509 248 436 142 485 190 b 574 470 510 254 574 469 b 574 470 574 470 574 470 b 566 464 574 470 570 467 b 442 421 529 435 484 421 b 337 458 404 421 367 433 b 300 537 313 478 300 508 b 389 644 300 585 334 635 "
                    },
                    v39: {
                        x_min: -171.5,
                        x_max: 251.8125,
                        ha: 257,
                        o: "m -8 631 b -1 632 -6 632 -4 632 b 19 620 8 632 16 628 b 20 553 20 616 20 614 b 20 491 20 503 20 491 l 20 491 b 153 535 47 501 149 535 b 174 514 167 535 174 524 b 164 496 174 508 171 501 b 92 470 164 495 132 484 l 20 445 l 20 390 b 20 363 20 378 20 370 b 20 333 20 340 20 333 l 20 333 b 153 377 47 344 149 377 b 174 356 167 377 174 367 b 164 338 174 349 171 342 b 92 312 164 338 132 326 l 20 288 l 20 219 l 20 148 l 21 151 b 137 199 59 183 99 199 b 182 191 152 199 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -142 206 -40 178 -72 l 23 -215 b -1 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -224 b -21 30 -21 -212 -21 -212 b -21 273 -21 163 -21 273 b -84 252 -21 273 -50 263 b -152 230 -133 234 -145 230 b -157 231 -155 230 -156 231 b -171 252 -166 234 -171 244 b -160 270 -171 259 -167 266 b -27 316 -159 270 -93 294 l -21 319 l -21 374 b -21 431 -21 406 -21 431 b -84 409 -21 431 -50 421 b -152 388 -133 392 -145 388 b -157 390 -155 388 -156 388 b -171 409 -166 392 -171 401 b -160 428 -171 417 -167 424 b -27 474 -159 428 -93 451 l -21 476 l -21 546 b -20 620 -21 614 -21 616 b -8 631 -17 624 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
                    },
                    v3b: {
                        x_min: 0,
                        x_max: 484.5625,
                        ha: 494,
                        o: "m 228 245 b 239 247 234 247 239 247 b 243 247 240 247 242 247 b 303 238 257 247 287 242 b 484 -2 417 208 484 104 b 412 -177 484 -65 461 -127 b 243 -248 363 -226 303 -248 b 6 -63 138 -248 36 -180 b 0 -1 1 -41 0 -20 b 228 245 0 127 98 240 m 255 181 b 240 183 247 183 245 183 b 232 181 238 183 235 183 b 142 152 200 180 168 170 l 138 149 l 190 97 l 242 44 l 294 97 l 345 149 l 340 152 b 255 181 315 169 284 180 m 147 -54 l 197 -1 l 147 51 l 95 104 l 91 99 b 62 -1 72 70 62 34 b 66 -43 62 -15 63 -29 b 91 -101 72 -63 80 -84 l 95 -106 l 147 -54 m 393 99 b 389 104 390 102 389 104 b 337 51 389 104 366 80 l 285 -1 l 337 -54 l 389 -106 l 393 -101 b 421 -1 412 -72 421 -36 b 393 99 421 34 412 69 m 294 -98 b 242 -45 265 -69 242 -45 b 190 -98 242 -45 219 -69 l 138 -151 l 142 -154 b 242 -184 172 -174 206 -184 b 340 -154 276 -184 311 -174 l 345 -151 l 294 -98 "
                    },
                    v3c: {
                        x_min: 0,
                        x_max: 450.53125,
                        ha: 460,
                        o: "m 189 302 b 204 303 193 302 198 303 b 303 224 250 303 292 270 b 306 199 304 216 306 208 b 279 129 306 173 296 147 l 276 126 l 281 127 b 408 249 337 142 385 190 b 412 259 409 254 412 258 b 430 267 417 265 423 267 b 450 247 441 267 450 259 b 200 -605 450 242 204 -599 b 182 -616 197 -612 190 -616 b 163 -602 174 -616 166 -610 b 161 -598 161 -601 161 -601 b 217 -402 161 -589 170 -562 b 272 -213 247 -298 272 -213 b 272 -213 272 -213 272 -213 b 264 -219 272 -213 268 -216 b 140 -262 227 -247 182 -262 b 36 -226 102 -262 65 -249 b 0 -145 12 -206 0 -176 b 17 -84 0 -124 5 -104 b 103 -38 38 -54 70 -38 b 191 -91 137 -38 172 -56 b 205 -141 201 -106 205 -124 b 178 -212 205 -167 196 -194 l 175 -215 l 182 -213 b 307 -93 236 -198 284 -151 b 372 129 308 -88 372 127 b 372 129 372 129 372 129 b 364 122 372 129 368 126 b 240 80 328 94 283 80 b 137 115 202 80 166 91 b 99 194 111 136 99 165 b 189 302 99 244 133 292 "
                    },
                    v3e: {
                        x_min: 0,
                        x_max: 406.96875,
                        ha: 415,
                        o: "m 21 183 b 28 183 24 183 25 183 b 42 181 34 183 39 183 b 127 108 47 179 47 179 b 202 41 168 72 202 41 b 279 108 204 41 238 72 b 357 177 321 145 356 176 b 375 183 363 181 370 183 b 406 151 392 183 406 169 b 404 137 406 147 405 141 b 322 62 401 131 398 129 b 251 0 284 27 251 0 b 322 -63 251 -1 284 -29 b 404 -138 398 -130 401 -133 b 406 -152 405 -142 406 -148 b 375 -184 406 -170 392 -184 b 357 -179 370 -184 363 -183 b 279 -109 356 -177 321 -147 b 202 -43 238 -73 204 -43 b 127 -109 202 -43 168 -73 b 49 -179 85 -147 50 -177 b 31 -184 43 -183 36 -184 b 0 -152 13 -184 0 -170 b 2 -138 0 -148 0 -142 b 83 -63 5 -133 8 -130 b 155 0 122 -29 155 -1 b 83 62 155 0 122 27 b 8 129 43 97 10 127 b 0 151 2 136 0 144 b 21 183 0 165 8 177 "
                    },
                    v3f: {
                        x_min: -24.5,
                        x_max: 317.140625,
                        ha: 324,
                        o: "m -24 -147 l -24 -5 l -20 -5 b -1 -19 -12 -5 -4 -11 b 58 -123 6 -43 31 -86 b 196 -278 93 -173 134 -219 b 317 -570 274 -356 317 -460 b 294 -713 317 -617 308 -666 l 289 -724 l 294 -735 b 317 -873 308 -780 317 -827 b 235 -1132 317 -963 288 -1054 b 209 -1165 228 -1140 224 -1146 b 189 -1177 204 -1172 196 -1177 b 171 -1164 182 -1177 175 -1172 b 168 -1154 170 -1161 168 -1159 b 181 -1132 168 -1149 172 -1142 b 269 -891 238 -1064 269 -975 b 269 -881 269 -886 269 -884 b 262 -814 269 -857 265 -827 b 258 -800 261 -811 259 -806 b 142 -628 240 -731 198 -667 b -8 -589 112 -606 47 -589 b -20 -589 -13 -589 -19 -589 l -24 -589 l -24 -449 l -24 -308 l -20 -308 b -1 -322 -12 -308 -4 -313 b 58 -424 6 -345 31 -388 b 194 -580 93 -476 136 -523 b 259 -660 221 -606 245 -635 b 261 -663 259 -662 261 -663 b 264 -656 262 -663 262 -660 b 269 -587 268 -632 269 -610 b 264 -521 269 -566 268 -544 b 262 -512 264 -517 262 -513 b 258 -498 261 -509 259 -503 b 142 -326 240 -428 198 -365 b -8 -287 112 -303 47 -288 b -20 -287 -13 -287 -19 -287 l -24 -287 l -24 -147 "
                    },
                    v40: {
                        x_min: -1.359375,
                        x_max: 436.921875,
                        ha: 446,
                        o: "m 213 205 b 217 205 215 205 216 205 b 234 194 224 205 234 199 b 236 187 234 194 235 190 l 245 167 l 261 129 l 270 106 b 355 -61 294 54 329 -13 b 420 -163 381 -105 402 -138 b 436 -188 435 -184 436 -184 b 436 -191 436 -190 436 -190 b 421 -206 436 -201 431 -206 l 421 -206 l 416 -206 l 405 -201 b 217 -158 347 -172 283 -158 b 31 -201 153 -158 88 -172 l 20 -206 l 14 -206 l 14 -206 b 0 -191 5 -206 0 -201 b -1 -188 0 -190 -1 -190 b 14 -163 -1 -186 0 -184 b 95 -34 36 -136 72 -77 b 166 106 119 8 148 68 l 175 129 l 183 148 l 200 188 b 213 205 205 199 208 202 "
                    },
                    v41: {
                        x_min: -1.359375,
                        x_max: 556.6875,
                        ha: 568,
                        o: "m 294 322 b 318 323 299 322 308 323 b 360 320 334 323 352 322 b 526 217 430 310 490 273 b 543 166 537 202 543 184 b 447 70 543 117 503 70 b 445 70 447 70 446 70 b 359 159 394 72 359 113 b 368 201 359 173 362 187 b 442 245 382 229 412 245 b 455 244 446 245 451 245 b 460 244 458 244 460 244 b 460 244 460 244 460 244 b 454 248 460 244 458 245 b 325 291 417 276 372 291 b 285 287 313 291 299 290 b 144 -2 183 269 144 190 b 281 -290 144 -208 179 -280 b 304 -291 289 -291 298 -291 b 524 -105 412 -291 506 -212 b 541 -84 526 -88 530 -84 b 556 -101 551 -84 556 -90 b 549 -138 556 -111 553 -122 b 334 -322 521 -237 435 -310 b 302 -324 323 -323 313 -324 b 13 -101 172 -324 54 -234 b -1 -1 4 -68 -1 -34 b 294 322 -1 161 121 303 "
                    },
                    v42: {
                        x_min: -348.4375,
                        x_max: 24.5,
                        ha: 25,
                        o: "m -330 155 b -322 156 -329 156 -326 156 b -315 156 -319 156 -317 156 b -298 147 -311 155 -308 154 b -19 30 -224 98 -122 55 l 2 26 b 24 -1 17 22 24 13 b 2 -27 24 -15 17 -23 l -19 -31 b -298 -148 -122 -56 -224 -99 b -322 -158 -313 -158 -315 -158 b -348 -131 -338 -158 -348 -145 b -344 -117 -348 -127 -347 -122 b -328 -104 -341 -112 -338 -111 b -127 -8 -269 -65 -202 -33 b -106 0 -115 -4 -106 -1 b -127 6 -106 0 -115 2 b -328 102 -202 31 -269 63 b -344 116 -338 109 -341 111 b -348 130 -347 120 -348 124 b -330 155 -348 141 -341 152 "
                    },
                    v43: {
                        x_min: -442.359375,
                        x_max: 441,
                        ha: 450,
                        o: "m -31 487 b -1 488 -21 488 -10 488 b 434 104 216 488 397 330 b 441 27 438 79 441 47 b 439 12 441 20 439 15 b 419 0 435 4 427 0 b 404 5 413 0 408 1 b 398 30 400 11 398 13 b 0 351 390 213 213 351 b -59 348 -20 351 -39 349 b -400 30 -251 324 -393 191 b -405 5 -400 13 -401 11 b -420 0 -409 1 -415 0 b -441 12 -428 0 -436 4 b -442 27 -441 15 -442 20 b -435 104 -442 47 -439 79 b -31 487 -401 316 -235 474 m -13 131 b -1 133 -9 133 -5 133 b 51 105 19 133 39 123 b 61 70 58 95 61 83 b 51 34 61 58 58 45 b -1 6 39 16 19 6 b -46 27 -17 6 -34 13 b -62 69 -57 38 -62 54 b -13 131 -62 98 -44 124 "
                    },
                    v44: {
                        x_min: -21.78125,
                        x_max: 251.8125,
                        ha: 257,
                        o: "m -8 631 b -1 632 -6 632 -4 632 b 19 620 8 632 16 628 b 20 383 20 616 20 616 l 20 148 l 21 151 b 137 199 59 183 99 199 b 182 191 152 199 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -142 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -224 l -21 -212 l -21 201 l -21 616 l -20 620 b -8 631 -17 624 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
                    },
                    v45: {
                        x_min: -402.890625,
                        x_max: 401.53125,
                        ha: 410,
                        o: "m -10 273 b -4 274 -9 273 -6 274 b 16 262 4 274 12 269 b 17 158 17 259 17 259 l 17 56 l 62 112 b 117 174 110 172 110 172 b 122 174 118 174 119 174 b 132 173 125 174 129 173 b 295 11 134 172 171 134 l 307 -1 l 336 34 b 374 76 366 72 368 74 b 381 77 375 77 378 77 b 401 56 392 77 401 68 b 400 48 401 54 401 51 b 223 -172 397 41 230 -166 b 210 -176 220 -174 215 -176 b 201 -174 206 -176 204 -176 b 112 -87 198 -173 178 -152 b 27 0 65 -38 27 0 b 21 -6 27 0 24 -2 l 17 -12 l 17 -147 b 17 -210 17 -173 17 -194 b 10 -292 17 -297 16 -287 b -2 -299 6 -297 2 -299 b -21 -287 -10 -299 -19 -295 b -24 -174 -23 -284 -23 -284 l -24 -63 l -66 -117 b -121 -176 -110 -170 -114 -176 b -125 -176 -122 -176 -123 -176 b -296 -12 -134 -174 -125 -184 l -308 0 l -337 -34 b -375 -77 -367 -73 -370 -76 b -382 -79 -377 -79 -379 -79 b -402 -58 -393 -79 -402 -69 b -401 -49 -402 -55 -402 -52 b -224 170 -398 -43 -231 165 b -212 174 -221 173 -216 174 b -202 173 -208 174 -205 174 b -39 11 -200 172 -151 122 l -28 -1 l -25 1 l -24 4 l -24 130 b -23 260 -24 256 -24 258 b -10 273 -20 266 -16 270 "
                    },
                    v46: {
                        x_min: 0,
                        x_max: 627.46875,
                        ha: 640,
                        o: "m 306 190 b 314 191 308 191 311 191 b 326 184 318 191 322 190 l 336 173 b 510 52 377 127 442 80 b 515 49 513 51 515 49 b 611 16 537 40 579 24 b 627 0 624 13 627 9 b 607 -18 627 -11 624 -13 b 330 -181 490 -49 389 -109 b 314 -192 323 -190 319 -192 b 306 -191 311 -192 308 -192 b 294 -177 302 -188 302 -188 b 257 -140 287 -170 265 -148 b 19 -18 193 -84 114 -44 b 0 0 2 -13 0 -11 b 16 16 0 9 2 13 b 110 49 47 24 89 40 b 117 52 111 49 114 51 b 145 65 126 56 130 58 b 281 163 200 93 245 124 b 300 186 288 170 291 174 b 306 190 300 187 303 188 m 317 137 b 313 142 315 141 314 142 b 308 137 313 142 311 141 b 161 4 276 84 220 33 b 155 0 159 1 155 0 b 163 -4 155 0 159 -2 b 308 -138 220 -34 276 -84 b 313 -142 311 -141 313 -142 b 317 -138 314 -142 315 -141 b 464 -4 351 -84 406 -34 b 470 0 468 -2 470 0 b 464 4 470 0 468 1 b 317 137 406 33 351 84 "
                    },
                    v47: {
                        x_min: -24.5,
                        x_max: 315.78125,
                        ha: 322,
                        o: "m -24 -145 l -24 -5 l -20 -5 b 1 -26 -10 -5 -6 -9 b 175 -241 31 -86 96 -166 b 314 -548 259 -323 304 -420 b 315 -589 315 -555 315 -571 b 314 -630 315 -606 315 -623 b 298 -730 311 -664 306 -699 l 295 -742 l 296 -748 b 314 -850 304 -778 311 -813 b 315 -892 315 -857 315 -874 b 314 -932 315 -909 315 -925 b 298 -1032 311 -967 306 -1002 l 295 -1045 l 296 -1050 b 314 -1153 304 -1081 311 -1115 b 315 -1193 315 -1160 315 -1177 b 314 -1235 315 -1211 315 -1228 b 217 -1526 306 -1338 270 -1444 b 201 -1533 213 -1532 208 -1533 b 182 -1522 193 -1533 185 -1529 b 179 -1514 181 -1518 179 -1517 b 189 -1489 179 -1508 182 -1501 b 266 -1217 240 -1403 266 -1308 b 262 -1156 266 -1196 265 -1177 b 110 -907 247 -1043 190 -950 b 0 -889 87 -895 50 -889 l -1 -889 l -24 -889 l -24 -749 l -24 -610 l -20 -610 b 1 -631 -10 -610 -6 -614 b 175 -846 31 -691 96 -771 b 259 -956 213 -884 236 -914 b 265 -966 262 -961 264 -966 b 265 -966 265 -966 265 -966 b 265 -953 265 -964 265 -959 b 266 -920 266 -943 266 -932 b 262 -853 266 -898 265 -873 b 110 -605 247 -741 190 -648 b 0 -587 87 -592 50 -587 l -1 -587 l -24 -587 l -24 -448 l -24 -308 l -20 -308 b 1 -328 -10 -308 -6 -312 b 175 -544 31 -388 96 -469 b 259 -655 213 -581 236 -612 b 265 -663 262 -659 264 -663 b 265 -663 265 -663 265 -663 b 265 -650 265 -663 265 -657 b 266 -617 266 -641 266 -630 b 262 -551 266 -595 265 -570 b 110 -303 247 -438 190 -345 b 0 -284 87 -290 50 -284 l -1 -284 l -24 -284 l -24 -145 "
                    },
                    v49: {
                        x_min: 0,
                        x_max: 630.203125,
                        ha: 643,
                        o: "m 308 204 b 314 205 310 205 313 205 b 326 201 319 205 323 204 b 355 154 328 199 338 180 b 401 83 362 142 392 95 l 409 72 b 431 41 412 66 424 49 b 619 -174 498 -51 570 -134 b 630 -192 626 -180 630 -186 b 626 -202 630 -195 628 -199 b 616 -206 623 -205 620 -206 b 552 -188 608 -206 592 -202 b 310 -155 488 -169 392 -155 b 268 -156 295 -155 281 -155 b 77 -188 197 -161 126 -173 b 13 -206 35 -202 20 -206 b 9 -206 12 -206 10 -206 b 0 -191 2 -202 0 -197 b 8 -176 0 -186 2 -180 b 204 49 58 -136 138 -43 l 220 72 l 227 83 b 295 188 245 108 281 166 b 308 204 299 197 304 202 m 315 147 b 314 147 315 147 314 147 b 314 147 314 147 314 147 b 306 129 314 145 310 138 l 296 105 b 281 72 292 97 284 77 l 274 56 b 181 -123 247 -4 212 -72 l 174 -134 l 176 -133 b 314 -123 215 -127 272 -123 b 451 -133 356 -123 413 -127 l 454 -134 l 449 -123 b 353 56 417 -72 381 -4 l 347 72 b 332 105 344 77 336 97 l 322 129 b 315 147 318 138 315 145 "
                    },
                    v4a: {
                        x_min: 70.78125,
                        x_max: 378.390625,
                        ha: 315,
                        o: "m 246 373 b 254 373 249 373 251 373 b 372 324 303 373 360 351 b 378 302 377 317 378 309 b 338 251 378 278 362 255 b 328 249 334 249 332 249 b 283 294 303 249 283 270 b 288 315 283 301 284 308 b 289 319 289 317 289 319 b 289 319 289 319 289 319 b 283 320 289 320 287 320 b 270 322 279 322 274 322 b 206 288 242 322 215 308 b 206 283 206 287 206 285 b 257 223 206 267 230 238 b 284 206 272 213 277 210 b 351 90 328 173 351 130 b 340 47 351 74 348 59 b 205 -30 314 -2 264 -30 b 182 -29 198 -30 190 -30 b 84 15 147 -24 103 -5 b 70 48 74 24 70 36 b 108 99 70 70 85 94 b 121 102 112 101 117 102 b 167 56 147 102 167 80 b 159 31 167 48 164 40 l 156 26 l 157 26 b 190 20 167 22 178 20 b 220 26 201 20 212 22 b 258 65 243 34 258 51 b 257 70 258 66 258 69 b 204 126 249 94 234 109 b 114 258 148 158 114 209 b 125 302 114 273 118 288 b 246 373 147 342 193 370 "
                    },
                    v4b: {
                        x_min: 0,
                        x_max: 503.609375,
                        ha: 514,
                        o: "m 274 430 b 277 430 276 430 277 430 b 310 394 296 430 310 415 b 308 383 310 391 308 387 b 306 367 307 381 307 374 b 236 120 298 305 272 210 b 40 -273 189 -5 125 -134 b 20 -287 35 -283 27 -287 b 5 -281 14 -287 9 -285 b 0 -267 1 -277 0 -273 b 9 -242 0 -262 2 -255 b 246 395 137 -12 232 242 b 274 430 249 416 257 427 m 468 430 b 472 430 469 430 470 430 b 503 394 490 430 503 415 b 502 383 503 391 503 387 b 499 367 502 381 500 374 b 431 120 491 305 465 210 b 234 -273 382 -5 318 -134 b 213 -287 228 -283 220 -287 b 198 -281 208 -287 202 -285 b 193 -267 194 -277 193 -273 b 202 -242 193 -262 196 -255 b 439 395 330 -12 426 242 b 468 430 442 416 451 427 "
                    },
                    v4d: {
                        x_min: -311.6875,
                        x_max: 310.328125,
                        ha: 317,
                        o: "m -9 388 b -2 390 -8 390 -5 390 b 5 388 1 390 4 390 b 19 378 10 387 16 383 b 23 333 23 371 23 371 b 24 298 23 299 24 298 b 81 276 34 298 65 285 b 213 91 145 240 190 177 b 224 24 217 76 224 36 b 257 24 224 24 235 24 b 299 19 292 24 292 24 b 310 -1 306 15 310 6 b 299 -23 310 -11 306 -19 b 257 -27 292 -27 292 -27 b 224 -29 235 -27 224 -29 b 213 -95 224 -40 217 -80 b 81 -280 190 -181 145 -244 b 24 -301 65 -290 34 -301 b 23 -335 24 -301 23 -303 l 23 -340 b 17 -381 23 -374 23 -374 b -1 -391 13 -388 5 -391 b -21 -381 -9 -391 -17 -388 b -27 -340 -27 -374 -27 -374 l -27 -335 b -28 -301 -27 -303 -27 -301 b -85 -280 -38 -301 -69 -290 b -217 -95 -149 -244 -194 -181 b -228 -29 -221 -80 -228 -40 b -259 -27 -228 -29 -238 -27 b -300 -23 -294 -27 -294 -27 b -311 -2 -307 -19 -311 -11 b -294 23 -311 8 -304 19 b -259 24 -291 23 -284 24 b -228 24 -239 24 -228 24 b -217 91 -228 36 -221 76 b -85 276 -194 177 -149 240 b -28 298 -69 285 -38 298 b -27 333 -27 298 -27 299 b -27 371 -27 362 -27 369 b -9 388 -24 378 -17 385 m -27 136 b -28 247 -27 197 -28 247 b -61 216 -31 247 -53 226 b -123 33 -95 172 -121 98 l -125 24 l -76 24 l -27 24 l -27 136 m 29 242 b 24 247 27 245 24 247 b 23 136 24 247 23 197 l 23 24 l 72 24 l 121 24 l 119 33 b 29 242 115 116 77 206 m -27 -140 l -27 -27 l -76 -27 l -125 -27 l -123 -36 b -61 -220 -121 -102 -95 -176 b -28 -251 -53 -230 -31 -251 b -27 -140 -28 -251 -27 -201 m 119 -36 l 121 -27 l 72 -27 l 23 -27 l 23 -140 b 24 -251 23 -201 24 -251 b 57 -220 27 -251 49 -230 b 119 -36 91 -176 117 -102 "
                    },
                    v4e: {
                        x_min: 0,
                        x_max: 239.5625,
                        ha: 244,
                        o: "m 10 460 b 20 462 13 462 14 462 b 39 449 28 462 35 458 l 40 446 l 40 326 b 40 205 40 259 40 205 b 127 227 40 205 80 215 b 220 249 196 244 213 249 b 227 247 224 249 225 248 b 238 237 231 245 235 241 l 239 233 l 239 -106 l 239 -448 l 238 -451 b 219 -463 234 -459 225 -463 b 198 -451 210 -463 202 -459 l 197 -448 l 197 -324 b 197 -201 197 -248 197 -201 b 110 -223 196 -201 157 -210 b 17 -245 42 -240 24 -245 b 10 -242 13 -245 13 -244 b 0 -233 6 -241 2 -237 l 0 -230 l 0 108 l 0 446 l 0 449 b 10 460 2 453 6 458 m 197 22 b 197 70 197 41 197 58 b 196 116 197 113 197 116 l 196 116 b 118 97 196 116 160 106 l 40 77 l 40 -18 b 40 -112 40 -69 40 -112 l 119 -93 l 197 -73 l 197 22 "
                    },
                    v51: {
                        x_min: -1.359375,
                        x_max: 455.96875,
                        ha: 465,
                        o: "m 352 541 b 357 542 353 542 355 542 b 377 530 364 542 372 537 l 378 526 l 378 394 l 379 262 l 404 266 b 436 270 420 269 430 270 b 450 265 443 270 446 269 b 455 220 455 259 455 260 l 455 208 l 455 161 l 454 156 b 411 140 449 147 447 147 b 378 133 393 137 379 134 b 378 68 378 133 378 106 b 378 22 378 54 378 38 l 379 -87 l 404 -83 b 436 -79 420 -80 430 -79 b 450 -84 443 -79 446 -80 b 455 -129 455 -90 455 -88 l 455 -141 l 455 -188 l 454 -192 b 413 -209 449 -202 447 -202 b 382 -215 398 -212 383 -215 l 378 -215 l 378 -345 l 378 -380 b 375 -485 378 -484 378 -480 b 357 -494 371 -491 364 -494 b 340 -485 351 -494 344 -491 b 336 -383 337 -480 336 -484 l 336 -349 l 336 -223 l 334 -223 b 291 -231 334 -223 314 -227 l 247 -240 l 247 -371 l 246 -503 l 245 -506 b 225 -519 242 -514 234 -519 b 206 -506 219 -519 210 -514 l 205 -503 l 205 -376 l 205 -248 l 160 -256 l 115 -265 l 115 -396 l 115 -527 l 114 -531 b 95 -544 110 -539 102 -544 b 76 -531 87 -544 78 -539 l 73 -527 l 73 -399 b 73 -273 73 -330 73 -273 b 49 -277 73 -273 61 -274 b 17 -281 32 -280 24 -281 b 4 -276 10 -281 8 -280 b -1 -234 0 -269 -1 -272 b 0 -219 -1 -229 0 -224 l 0 -170 l 1 -167 b 10 -158 2 -163 6 -159 b 49 -149 13 -156 16 -155 l 73 -145 l 73 -34 b 73 76 73 26 73 76 b 49 72 73 76 61 74 b 17 68 32 69 24 68 b 4 73 10 68 8 69 b -1 115 0 80 -1 77 b 0 130 -1 120 0 124 l 0 179 l 1 181 b 10 191 2 186 6 190 b 49 199 13 192 16 194 l 73 204 l 73 338 b 73 374 73 352 73 365 b 77 483 73 484 73 477 b 95 492 81 489 88 492 b 111 483 100 492 107 489 b 115 378 115 477 115 483 l 115 342 b 117 212 115 223 115 212 b 204 229 117 212 200 227 l 205 229 l 205 365 l 205 502 l 206 505 b 225 517 210 513 219 517 b 245 505 234 517 242 513 l 246 502 l 247 369 l 247 237 l 249 237 b 336 254 253 238 336 254 b 337 390 336 254 337 302 l 337 526 l 338 530 b 352 541 341 535 347 539 m 336 15 b 336 126 336 102 336 126 l 336 126 b 291 117 336 126 315 122 l 247 109 l 247 -1 l 247 -112 l 249 -112 b 336 -95 253 -111 336 -95 b 336 15 336 -95 336 -56 m 205 -120 b 205 -55 205 -120 205 -93 b 205 -9 205 -41 205 -24 l 205 101 l 160 93 l 115 84 l 115 -26 b 115 -83 115 -49 115 -69 b 117 -137 115 -133 115 -137 b 205 -120 118 -137 204 -120 "
                    },
                    v52: {
                        x_min: -10.890625,
                        x_max: 298.078125,
                        ha: 294,
                        o: "m 138 473 b 142 474 140 473 141 474 b 164 459 148 474 153 470 b 191 402 183 442 191 423 b 181 353 191 388 187 371 b 178 349 179 352 178 349 b 179 348 178 348 179 348 b 185 349 181 348 182 348 b 255 376 210 355 234 363 b 272 381 264 381 266 381 b 298 355 287 381 298 370 b 288 330 298 348 298 345 b 171 34 238 254 194 141 b 166 13 168 16 168 16 b 144 1 161 5 152 1 b 121 15 134 1 125 5 b 115 33 119 18 117 24 b 0 330 91 145 49 252 b -10 355 -9 345 -10 348 b 13 381 -10 371 0 381 b 31 376 19 381 25 380 b 132 345 61 358 103 345 l 136 345 l 137 355 b 145 378 138 359 142 370 b 152 415 149 394 152 405 b 137 452 152 427 148 438 b 133 464 134 458 133 460 b 138 473 133 467 134 470 "
                    },
                    v53: {
                        x_min: 0,
                        x_max: 902.421875,
                        ha: 921,
                        o: "m 17 240 b 24 241 19 241 21 241 b 32 240 28 241 31 241 b 46 229 38 238 43 234 b 50 88 50 223 50 237 b 50 -1 50 63 50 34 b 50 -90 50 -36 50 -65 b 46 -231 50 -238 50 -224 b 25 -242 42 -238 34 -242 b 0 -224 14 -242 4 -235 b 0 2 0 -222 0 -108 b 0 223 0 112 0 220 b 17 240 2 230 9 237 m 110 240 b 118 241 111 241 114 241 b 126 240 121 241 123 241 b 142 223 133 237 140 230 b 144 123 144 220 144 205 b 144 29 144 45 144 29 b 144 29 144 29 144 29 b 393 183 166 106 264 167 b 450 186 412 184 431 186 b 756 29 600 186 732 120 b 756 29 756 29 756 29 b 758 123 758 29 758 45 b 760 227 758 226 758 223 b 784 241 766 237 774 241 b 804 229 792 241 800 237 b 809 88 808 223 809 237 l 809 -1 l 809 -90 b 804 -231 809 -238 808 -224 b 784 -242 800 -238 792 -242 b 762 -231 775 -242 766 -238 b 758 -124 756 -224 758 -231 b 756 -30 758 -47 758 -30 b 756 -30 756 -30 756 -30 b 509 -184 736 -108 637 -169 b 450 -187 488 -187 469 -187 b 144 -30 300 -187 168 -122 b 144 -30 144 -30 144 -30 b 144 -124 144 -30 144 -47 b 140 -231 144 -231 144 -224 b 118 -242 134 -238 126 -242 b 92 -224 107 -242 96 -235 b 92 2 92 -222 92 -108 b 92 223 92 112 92 220 b 110 240 95 230 102 237 m 432 161 b 413 162 426 162 420 162 b 313 41 351 162 313 109 b 347 -73 313 5 323 -34 b 487 -163 385 -133 439 -163 b 578 -97 526 -163 562 -142 b 588 -43 585 -80 588 -62 b 432 161 588 47 518 147 m 868 240 b 876 241 869 241 872 241 b 884 240 879 241 882 241 b 898 229 890 238 894 234 b 902 88 902 223 902 237 l 902 -1 l 902 -90 b 898 -231 902 -238 902 -224 b 876 -242 892 -238 884 -242 b 852 -224 865 -242 854 -235 b 850 2 850 -222 850 -108 b 852 223 850 112 850 220 b 868 240 853 230 860 237 "
                    },
                    v54: {
                        x_min: -24.5,
                        x_max: 317.140625,
                        ha: 324,
                        o: "m -24 -161 l -24 -5 l -20 -5 b 0 -24 -9 -5 -2 -12 b 171 -315 21 -124 84 -233 b 317 -660 268 -406 317 -531 b 187 -1014 317 -782 274 -909 b 161 -1034 172 -1034 171 -1034 b 141 -1013 149 -1034 141 -1025 b 152 -991 141 -1004 142 -1002 b 266 -682 228 -899 266 -788 b 174 -430 266 -588 236 -498 b -23 -317 136 -388 66 -348 b -24 -161 -23 -316 -24 -285 "
                    },
                    v55: {
                        x_min: 0,
                        x_max: 551.25,
                        ha: 563,
                        o: "m 289 644 b 304 645 294 645 299 645 b 404 566 349 645 392 613 b 406 541 405 557 406 549 b 379 471 406 514 397 489 l 377 467 l 382 470 b 509 591 438 485 485 531 b 513 601 510 595 513 599 b 530 609 518 607 524 609 b 551 588 540 609 551 602 b 200 -605 551 584 204 -599 b 182 -616 197 -612 190 -616 b 163 -602 174 -616 166 -610 b 161 -598 161 -601 161 -601 b 217 -402 161 -589 170 -562 b 272 -213 247 -298 272 -213 b 272 -213 272 -213 272 -213 b 264 -219 272 -213 268 -216 b 140 -262 227 -247 182 -262 b 36 -226 102 -262 65 -249 b 0 -145 12 -206 0 -176 b 17 -84 0 -124 5 -104 b 103 -38 38 -54 70 -38 b 191 -91 137 -38 172 -56 b 205 -141 201 -106 205 -124 b 178 -212 205 -167 196 -194 l 175 -215 l 182 -213 b 307 -93 236 -198 284 -151 b 372 129 308 -88 372 127 b 372 129 372 129 372 129 b 364 122 372 129 368 126 b 240 80 328 94 283 80 b 137 115 202 80 166 91 b 99 195 112 136 99 165 b 118 256 99 217 106 238 b 204 303 138 287 171 303 b 292 249 238 303 273 285 b 306 199 302 234 306 217 b 279 129 306 173 296 148 l 276 126 l 281 127 b 408 248 336 142 385 190 b 473 470 409 254 473 469 b 473 470 473 470 473 470 b 465 464 473 470 469 467 b 341 421 428 435 383 421 b 236 458 303 421 266 433 b 200 537 212 478 200 508 b 289 644 200 585 234 635 "
                    },
                    v58: {
                        x_min: -21.78125,
                        x_max: 367.5,
                        ha: 375,
                        o: "m 259 1553 b 265 1553 261 1553 264 1553 b 288 1540 272 1553 277 1550 b 367 1351 340 1493 367 1424 b 336 1221 367 1308 357 1263 l 332 1211 l 333 1208 b 367 1077 356 1170 367 1124 b 336 945 367 1032 357 986 l 332 935 l 333 932 b 367 800 356 893 367 848 b 336 669 367 756 357 710 l 332 659 l 333 656 b 367 523 356 617 367 571 b 345 412 367 485 360 446 b 231 273 322 356 284 310 b -1 19 121 195 27 93 b -17 4 -4 11 -10 5 l -21 4 l -21 134 l -21 265 l -17 265 b 133 291 20 265 96 278 b 318 537 245 328 318 433 b 307 603 318 559 315 582 b 303 614 304 612 304 614 b 298 609 302 614 300 613 b 231 549 281 589 258 567 b -1 295 121 471 27 369 b -17 280 -4 287 -10 281 l -21 280 l -21 410 l -21 541 l -17 541 b 133 567 20 541 96 555 b 318 813 245 605 318 709 b 307 880 318 835 315 859 b 303 891 304 888 304 891 b 298 885 302 891 300 888 b 231 825 281 866 258 843 b -1 571 121 748 27 645 b -17 556 -4 563 -10 557 l -21 556 l -21 687 l -21 817 l -17 817 b 133 843 20 817 96 830 b 318 1089 245 881 318 985 b 307 1156 318 1111 315 1134 b 303 1167 304 1164 304 1167 b 298 1161 302 1167 300 1164 b 231 1102 281 1140 258 1120 b -1 848 121 1024 27 921 b -17 832 -4 839 -10 834 l -21 832 l -21 963 l -21 1093 l -17 1093 b 114 1113 12 1093 78 1103 b 313 1314 215 1142 289 1218 b 318 1364 317 1331 318 1347 b 255 1511 318 1422 295 1478 b 243 1532 247 1519 243 1525 b 259 1553 243 1540 250 1550 "
                    },
                    v59: {
                        x_min: 0,
                        x_max: 464.140625,
                        ha: 474,
                        o: "m 0 0 l 0 347 l 76 347 l 153 347 l 153 0 l 153 -348 l 76 -348 l 0 -348 l 0 0 m 308 -1 l 308 347 l 386 347 l 464 347 l 464 -1 l 464 -348 l 386 -348 l 308 -348 l 308 -1 "
                    },
                    v5a: {
                        x_min: -171.5,
                        x_max: 170.140625,
                        ha: 174,
                        o: "m -6 566 b 0 567 -5 567 -2 567 b 14 556 6 567 12 563 b 92 285 14 555 50 433 b 170 13 166 33 170 19 b 168 13 170 13 170 13 b 161 1 168 8 167 4 l 159 0 l 122 0 l 84 0 l 81 1 b 21 195 76 5 78 -5 b -32 381 -8 297 -32 381 b -87 197 -32 381 -57 298 b -141 8 -115 94 -140 9 b -155 0 -142 2 -149 0 b -171 15 -163 0 -171 5 b -14 556 -171 18 -24 528 b -6 566 -14 560 -10 564 "
                    },
                    v5b: {
                        x_min: -441,
                        x_max: 439.640625,
                        ha: 449,
                        o: "m -428 -2 b -421 0 -427 -1 -424 0 b -406 -6 -416 0 -409 -2 b -400 -31 -401 -12 -400 -15 b -1 -352 -392 -215 -215 -352 b 58 -349 19 -352 38 -351 b 398 -31 250 -326 392 -192 b 404 -6 398 -15 400 -12 b 419 -1 408 -2 413 -1 b 439 -13 427 -1 435 -5 b 439 -29 439 -16 439 -22 b 434 -105 439 -48 438 -80 b 0 -489 397 -333 213 -489 b -68 -484 -23 -489 -44 -488 b -441 -36 -280 -452 -436 -263 b -441 -30 -441 -34 -441 -31 b -428 -2 -441 -11 -439 -5 m -13 -9 b -1 -8 -9 -8 -5 -8 b 50 -36 19 -8 39 -19 b 61 -72 57 -47 61 -59 b 50 -106 61 -84 57 -97 b -1 -134 39 -124 19 -134 b -46 -115 -17 -134 -34 -129 b -62 -72 -57 -102 -62 -87 b -13 -9 -62 -44 -44 -16 "
                    },
                    v5c: {
                        x_min: 0,
                        x_max: 447.8125,
                        ha: 457,
                        o: "m 0 -87 l 0 0 l 223 0 l 447 0 l 447 -87 l 447 -174 l 223 -174 l 0 -174 l 0 -87 "
                    },
                    v5d: {
                        x_min: -1.359375,
                        x_max: 592.078125,
                        ha: 604,
                        o: "m 280 692 b 295 694 283 692 289 694 b 310 692 300 694 307 692 b 357 630 340 684 357 657 b 336 580 357 612 351 594 b 311 538 321 566 311 549 b 352 492 311 512 330 492 b 366 495 357 492 362 492 b 397 553 390 503 397 517 b 415 603 397 576 402 591 b 460 623 427 617 443 623 b 509 599 479 623 498 614 b 522 559 518 587 522 573 b 494 506 522 538 513 519 b 451 495 481 498 473 496 b 415 488 432 495 426 494 b 394 449 404 483 394 464 b 394 448 394 448 394 448 l 394 440 l 397 433 b 428 409 404 420 413 413 b 438 408 431 408 435 408 b 479 431 450 408 462 415 b 528 455 495 448 510 455 b 548 452 534 455 541 453 b 592 391 577 442 592 416 b 549 331 592 365 577 340 b 528 327 541 328 534 327 b 479 351 510 327 495 335 b 438 374 464 367 450 374 b 417 369 431 374 424 373 b 394 333 402 360 394 348 b 400 312 394 326 396 319 b 451 287 408 294 420 288 b 513 258 484 285 499 278 b 522 223 519 247 522 234 b 461 159 522 190 496 159 b 449 161 457 159 453 159 b 397 229 416 167 397 191 b 366 288 397 265 390 278 b 352 290 362 290 357 290 b 315 262 336 290 321 280 b 311 245 313 256 311 251 b 334 204 311 233 318 220 b 355 170 348 190 351 184 b 357 152 356 166 357 159 b 355 136 357 147 356 140 b 295 88 345 104 321 88 b 232 152 264 88 232 112 b 255 204 232 174 238 186 b 279 244 273 222 279 231 l 279 245 b 238 290 279 270 259 290 b 224 288 234 290 228 290 b 193 229 200 278 193 265 b 141 161 193 191 174 167 b 129 159 137 159 133 159 b 68 223 93 159 68 190 b 77 258 68 234 70 247 b 138 287 91 278 106 285 b 185 302 166 287 175 291 b 196 333 193 312 196 323 b 174 369 196 347 187 360 b 152 374 166 373 159 374 b 111 351 140 374 126 367 b 62 327 95 335 80 327 b 51 328 58 327 54 327 b -1 391 16 334 -1 363 b 53 455 -1 420 17 449 b 62 455 57 455 59 455 b 111 431 80 455 95 448 b 152 408 127 415 140 408 b 161 409 155 408 159 408 b 193 433 176 413 186 420 l 196 440 l 196 448 b 196 451 196 449 196 449 b 190 471 196 459 194 463 b 137 495 182 489 167 495 l 134 495 l 134 495 b 68 560 95 495 68 521 b 129 623 68 596 95 623 b 144 621 134 623 138 623 b 193 553 175 614 193 589 b 224 495 193 517 200 503 b 238 492 228 492 234 492 b 279 538 259 492 279 512 b 254 580 279 549 269 566 b 232 630 239 594 232 612 b 280 692 232 657 250 684 m 307 456 b 295 458 303 458 299 458 b 230 391 258 458 230 426 b 236 360 230 381 231 371 b 295 324 249 337 272 324 b 353 360 318 324 341 337 b 360 391 357 370 360 381 b 307 456 360 421 340 451 "
                    },
                    v60: {
                        x_min: -590.71875,
                        x_max: 589.359375,
                        ha: 601,
                        o: "m -367 173 b -362 174 -366 174 -364 174 b -351 173 -357 174 -353 173 b -262 86 -348 172 -328 151 b -176 0 -216 37 -176 0 b -107 84 -176 0 -145 37 b -31 174 -36 173 -38 172 b -25 174 -29 174 -28 174 b -16 173 -23 174 -19 173 b 72 86 -13 172 6 151 b 157 0 119 37 157 0 b 227 84 159 0 189 37 b 303 174 298 173 296 172 b 308 174 304 174 307 174 b 318 173 313 174 317 173 b 481 11 322 172 357 134 l 494 -1 l 522 34 b 560 76 553 72 555 74 b 567 77 563 77 564 77 b 589 56 579 77 589 68 b 586 48 589 54 588 51 b 411 -172 583 41 416 -166 b 397 -176 406 -174 401 -176 b 387 -174 393 -176 390 -176 b 299 -87 386 -173 366 -152 b 213 0 253 -38 213 0 b 144 -86 213 0 182 -38 b 68 -174 73 -174 74 -173 b 62 -176 66 -176 65 -176 b 53 -174 59 -176 55 -174 b -35 -87 50 -173 29 -152 b -121 0 -83 -38 -121 0 b -190 -86 -122 0 -152 -38 b -266 -174 -261 -174 -259 -173 b -272 -176 -268 -176 -270 -176 b -281 -174 -276 -176 -280 -174 b -371 -86 -284 -173 -304 -152 b -457 0 -417 -38 -457 0 l -457 0 b -477 -26 -457 0 -470 -16 b -548 -227 -524 -88 -548 -161 b -536 -303 -548 -254 -544 -280 b -533 -317 -534 -309 -533 -313 b -553 -338 -533 -330 -541 -338 b -577 -315 -566 -338 -571 -333 b -590 -227 -586 -287 -590 -258 b -518 -9 -590 -154 -564 -77 b -465 56 -509 2 -504 8 l -402 134 b -367 173 -375 169 -372 172 "
                    },
                    v62: {
                        x_min: 46.28125,
                        x_max: 669.671875,
                        ha: 563,
                        o: "m 183 376 b 189 376 185 376 187 376 b 212 374 197 376 208 376 b 265 337 234 369 253 355 b 274 317 268 331 273 320 b 274 316 274 317 274 316 b 280 323 276 316 276 319 b 311 358 288 337 299 348 b 319 366 315 360 318 365 b 356 376 326 373 340 376 b 382 371 364 376 374 374 b 428 337 400 366 417 352 b 436 317 431 331 436 320 b 438 316 436 317 436 316 b 442 323 438 316 439 319 b 475 358 451 337 462 348 b 483 366 477 360 481 365 b 518 376 488 373 503 376 b 544 373 528 376 536 376 b 604 285 579 360 604 326 b 597 249 604 273 601 258 b 543 63 596 247 544 70 b 541 54 543 61 541 55 b 540 44 540 51 540 47 b 552 23 540 33 545 23 b 552 23 552 23 552 23 b 647 126 586 29 627 72 b 658 138 651 136 653 138 b 660 138 660 138 660 138 b 669 129 666 137 669 136 b 654 88 669 122 665 109 b 562 -12 631 43 602 9 l 549 -19 b 521 -27 540 -24 530 -27 b 447 30 490 -27 458 -4 b 443 58 445 38 443 48 b 450 93 443 72 446 84 b 504 278 453 97 504 272 b 507 288 506 283 506 287 b 509 298 507 292 509 295 b 491 326 509 310 502 320 b 487 327 490 327 488 327 b 479 324 484 327 483 326 b 441 270 462 316 443 288 b 435 249 441 265 436 254 b 398 127 434 248 419 195 b 362 4 379 61 362 5 b 328 -1 359 -1 362 -1 b 314 -1 323 -1 319 -1 b 302 -1 310 -1 306 -1 b 266 4 266 -1 269 -1 b 265 6 265 5 265 5 b 303 144 265 13 272 34 b 343 278 325 216 343 276 b 344 288 343 281 344 285 b 345 298 345 291 345 295 b 330 326 345 310 340 320 b 323 327 328 327 325 327 b 317 324 322 327 321 326 b 279 270 300 316 281 288 b 273 249 279 265 274 254 b 236 127 272 248 255 195 b 200 4 216 61 200 5 b 164 -1 197 -1 198 -1 b 151 -1 161 -1 156 -1 b 140 -1 147 -1 142 -1 b 103 4 104 -1 106 -1 b 103 6 103 5 103 5 b 141 144 103 13 108 34 b 181 278 161 216 179 276 b 182 288 181 281 181 285 b 183 298 182 291 183 295 b 168 324 183 310 178 320 b 160 327 166 326 163 327 b 141 320 156 327 151 324 b 69 230 112 305 85 272 b 57 215 65 217 62 215 b 55 215 57 215 55 215 b 46 224 49 215 46 217 b 59 260 46 231 50 242 b 151 363 81 306 112 341 b 161 369 155 365 160 367 b 183 376 166 371 174 374 "
                    },
                    v68: {
                        x_min: -597.53125,
                        x_max: 596.171875,
                        ha: 608,
                        o: "m -533 324 b -525 327 -530 326 -528 327 b -504 305 -514 327 -504 317 b -504 305 -504 305 -504 305 b -513 284 -504 299 -504 299 b -556 112 -541 226 -556 167 b -545 33 -556 84 -552 58 b -524 -20 -541 15 -532 -9 l -522 -23 l -491 15 l -413 111 b -355 174 -367 169 -363 174 b -351 174 -353 174 -352 174 b -254 86 -343 174 -348 179 b -168 -1 -208 37 -168 -1 b -100 84 -168 -1 -137 37 b -23 173 -28 173 -29 172 b -19 174 -21 174 -20 174 b -8 173 -14 174 -10 173 b 155 11 -5 172 43 123 l 166 -1 l 168 1 l 170 4 l 170 130 b 171 260 170 256 170 258 b 191 274 175 269 183 274 b 205 267 196 274 201 272 b 212 158 212 262 210 273 l 212 56 l 257 112 b 311 173 304 172 304 172 b 317 174 313 174 314 174 b 326 173 319 174 323 173 b 490 11 329 172 366 134 l 502 -1 l 530 34 b 568 76 560 72 563 74 b 575 77 570 77 573 77 b 596 56 586 77 596 68 b 594 48 596 54 596 51 b 417 -172 592 41 424 -166 b 405 -176 415 -174 409 -176 b 396 -174 401 -176 398 -176 b 307 -87 393 -173 372 -152 b 221 -1 259 -38 221 -1 b 216 -6 221 -1 219 -2 l 212 -12 l 212 -147 b 212 -210 212 -173 212 -194 b 205 -292 212 -297 210 -287 b 191 -299 201 -297 196 -299 b 172 -287 183 -299 175 -295 b 170 -174 171 -284 171 -284 l 170 -63 l 127 -117 b 73 -176 84 -170 80 -176 b 68 -176 72 -176 70 -176 b -27 -87 59 -174 65 -180 b -114 0 -74 -38 -112 0 b -182 -86 -114 0 -145 -38 b -258 -174 -253 -174 -253 -173 b -264 -176 -259 -176 -262 -176 b -274 -174 -268 -176 -272 -174 b -438 -11 -277 -173 -348 -102 l -449 0 l -479 -37 b -524 -80 -513 -80 -514 -80 l -524 -80 b -553 -52 -534 -80 -540 -74 b -597 109 -583 -8 -597 48 b -560 280 -597 165 -585 224 b -533 324 -548 310 -540 322 "
                    },
                    v6c: {
                        x_min: -1.359375,
                        x_max: 193.28125,
                        ha: 197,
                        o: "m 78 233 b 87 233 81 233 84 233 b 187 140 132 233 174 195 b 193 102 190 127 193 115 b 43 -113 193 22 136 -62 b 27 -119 36 -116 31 -119 b 19 -108 21 -119 19 -115 b 29 -97 19 -102 20 -101 b 102 13 73 -72 102 -27 b 92 51 102 26 98 40 l 91 54 l 84 54 b 8 104 53 54 21 74 b -1 142 1 116 -1 130 b 78 233 -1 187 31 227 "
                    },
                    v6d: {
                        x_min: -590.71875,
                        x_max: 589.359375,
                        ha: 601,
                        o: "m 544 335 b 553 337 548 337 551 337 b 575 313 563 337 570 330 b 589 226 583 285 589 256 b 517 8 589 152 563 76 b 464 -58 507 -4 503 -9 l 401 -136 b 362 -176 372 -172 370 -176 b 357 -176 360 -176 359 -176 b 261 -87 349 -174 355 -180 b 175 0 215 -38 175 0 b 106 -86 175 0 144 -38 b 29 -174 35 -174 36 -173 b 24 -176 28 -176 27 -176 b 14 -174 21 -176 17 -174 b -73 -87 12 -173 -8 -152 b -159 0 -121 -38 -159 0 b -228 -86 -160 0 -190 -38 b -304 -174 -299 -174 -298 -173 b -310 -176 -306 -176 -308 -176 b -319 -174 -314 -176 -318 -174 b -483 -12 -323 -173 -359 -137 l -495 0 l -524 -34 b -562 -77 -553 -73 -556 -76 b -568 -79 -564 -79 -566 -79 b -590 -58 -581 -79 -590 -69 b -588 -49 -590 -55 -589 -52 b -412 170 -585 -43 -417 165 b -398 174 -408 173 -402 174 b -389 173 -394 174 -392 174 b -300 86 -387 172 -366 151 b -215 -1 -254 37 -215 -1 b -145 84 -215 -1 -183 37 b -69 173 -74 173 -76 172 b -63 174 -68 174 -66 174 b -54 173 -61 174 -57 173 b 34 86 -51 172 -31 151 b 119 -1 81 37 119 -1 b 189 84 121 -1 151 37 b 265 173 259 173 258 172 b 270 174 266 174 269 174 b 280 173 274 174 279 173 b 370 84 283 172 303 151 b 455 -1 416 37 455 -1 l 455 -1 b 476 24 455 -1 469 15 b 547 226 522 87 547 159 b 534 302 547 252 543 278 b 532 317 533 308 532 313 b 544 335 532 326 536 333 "
                    },
                    v6f: {
                        x_min: -80.3125,
                        x_max: 78.9375,
                        ha: 81,
                        o: "m 63 191 b 69 192 65 192 66 192 b 77 188 72 192 76 191 b 78 183 78 187 78 186 b 74 158 78 179 77 172 l 66 115 b 9 -161 49 30 10 -158 b -10 -187 6 -172 -1 -181 b -34 -194 -17 -191 -25 -194 b -80 -147 -58 -194 -80 -174 b -80 -141 -80 -144 -80 -142 b 9 70 -80 -134 -73 -117 l 49 163 b 63 191 59 188 61 190 "
                    },
                    v70: {
                        x_min: 0,
                        x_max: 436.921875,
                        ha: 446,
                        o: "m 213 190 b 217 191 215 191 216 191 b 231 184 223 191 228 188 b 249 154 240 167 246 159 b 419 18 292 91 348 45 b 436 -1 435 11 436 8 b 424 -16 436 -9 434 -13 b 308 -87 394 -26 340 -59 b 231 -186 276 -117 257 -142 b 219 -192 228 -191 225 -192 b 198 -174 209 -192 208 -191 b 47 -33 161 -113 110 -63 b 10 -16 34 -26 17 -19 b 0 -1 2 -13 0 -9 b 17 18 0 8 1 11 b 198 173 95 48 156 101 b 213 190 206 187 208 188 "
                    },
                    v72: {
                        x_min: -423.3125,
                        x_max: 421.9375,
                        ha: 431,
                        o: "m -262 197 b -247 197 -257 197 -253 197 b -118 162 -210 197 -163 184 b 40 45 -61 134 -13 98 b 277 -95 119 -33 200 -81 b 289 -97 281 -97 285 -97 b 378 0 332 -97 371 -55 b 378 11 378 4 378 6 b 302 83 378 55 345 83 b 242 66 283 83 262 77 b 208 56 231 59 219 56 b 148 120 175 56 148 81 b 201 186 148 151 164 172 b 261 198 220 194 240 198 b 420 45 341 198 411 136 b 421 22 421 37 421 29 b 245 -199 421 -93 338 -199 b 238 -198 243 -199 240 -199 b -44 -47 148 -194 50 -141 b -250 86 -114 22 -183 66 b -295 94 -270 91 -283 94 b -315 91 -302 94 -307 94 b -381 4 -356 81 -381 43 b -355 -56 -381 -18 -372 -40 b -298 -81 -338 -73 -319 -81 b -246 -68 -283 -81 -265 -77 b -212 -58 -234 -61 -223 -58 b -178 -69 -200 -58 -189 -62 b -151 -122 -160 -81 -151 -101 b -171 -167 -151 -138 -157 -155 b -239 -195 -185 -181 -213 -192 b -257 -197 -245 -197 -250 -197 b -423 -5 -352 -197 -423 -109 b -412 65 -423 16 -419 40 b -262 197 -389 137 -329 188 "
                    },
                    v74: {
                        x_min: -206.890625,
                        x_max: 428.75,
                        ha: 438,
                        o: "m 389 -351 b 394 -351 390 -351 393 -351 b 428 -385 413 -351 428 -367 b 428 -394 428 -388 428 -391 b 394 -428 426 -406 421 -410 l 332 -473 l 269 -516 l 205 -560 l 141 -603 l 77 -648 l 13 -692 l -50 -737 l -114 -780 l -145 -802 b -171 -813 -157 -810 -163 -813 b -175 -813 -172 -813 -174 -813 b -206 -777 -194 -811 -206 -795 b -202 -760 -206 -771 -205 -766 b -87 -675 -197 -752 -206 -757 l -34 -639 l 83 -557 l 145 -514 l 209 -470 l 272 -427 b 389 -351 375 -356 381 -352 "
                    },
                    v75: {
                        x_min: -149.71875,
                        x_max: 148.359375,
                        ha: 151,
                        o: "m -137 381 b -130 383 -134 383 -133 383 b -111 371 -122 383 -114 378 b -55 224 -110 370 -85 305 b 0 80 -25 145 -1 80 b 54 224 0 80 24 145 b 112 377 114 384 110 373 b 127 384 118 381 122 384 b 148 362 138 384 148 374 l 148 356 l 83 183 b 16 9 47 88 17 11 b -1 0 12 2 5 0 b -14 5 -5 0 -10 1 b -84 183 -19 9 -13 -6 l -149 356 l -149 362 b -137 381 -149 371 -145 378 "
                    },
                    v78: {
                        x_min: 0,
                        x_max: 193.28125,
                        ha: 197,
                        o: "m 85 514 b 95 517 88 517 89 517 b 114 505 103 517 110 513 l 115 502 l 115 376 b 115 249 115 306 115 249 b 141 258 117 249 127 252 l 167 266 l 172 266 b 190 254 181 265 187 262 l 193 251 l 193 202 l 193 188 b 187 147 193 149 191 152 b 147 130 183 142 182 141 l 115 119 l 115 9 b 115 -99 115 -51 115 -99 b 141 -91 115 -99 127 -95 b 171 -81 166 -81 167 -81 l 171 -81 b 191 -94 181 -81 189 -87 b 193 -142 191 -97 193 -120 b 191 -195 193 -167 191 -194 b 125 -227 187 -205 187 -204 l 115 -230 l 115 -366 l 115 -503 l 114 -506 b 95 -519 110 -514 102 -519 b 74 -506 87 -519 78 -514 l 73 -503 l 73 -374 b 73 -245 73 -260 73 -245 b 73 -245 73 -245 73 -245 b 55 -252 72 -245 63 -249 l 32 -260 b 19 -263 27 -262 23 -263 b 4 -256 13 -263 8 -260 b 0 -215 0 -251 0 -254 b 0 -199 0 -210 0 -206 l 0 -152 l 1 -149 b 8 -140 2 -145 5 -141 b 42 -127 9 -140 24 -133 l 73 -116 l 73 -5 b 73 23 73 4 73 15 b 73 105 73 70 73 105 b 49 97 73 105 61 101 b 17 88 32 91 23 88 b 4 95 10 88 8 91 b 0 137 0 101 0 98 b 0 151 0 141 0 145 l 0 199 l 1 202 b 43 224 5 212 5 212 l 73 234 l 73 367 l 73 502 l 74 505 b 85 514 77 509 81 513 "
                    },
                    v79: {
                        x_min: -1.359375,
                        x_max: 899.703125,
                        ha: 918,
                        o: "m 307 349 b 332 351 315 351 323 351 b 443 340 367 351 408 347 b 741 47 607 306 720 195 b 744 0 743 31 744 16 b 660 -303 744 -90 713 -206 b 28 -755 534 -531 304 -695 b 14 -756 23 -755 19 -756 b -1 -741 4 -756 -1 -750 b 21 -720 -1 -731 1 -728 b 567 -56 337 -601 548 -344 b 568 -11 568 -41 568 -24 b 442 285 568 129 525 233 b 325 319 406 308 367 319 b 93 177 232 319 137 266 b 84 154 91 170 84 155 b 84 154 84 154 84 154 b 88 156 84 154 85 155 b 159 177 110 170 134 177 b 257 134 194 177 231 162 b 294 41 281 108 294 73 b 171 -97 294 -24 246 -90 b 156 -98 166 -97 161 -98 b 6 74 73 -98 6 -22 b 6 80 6 76 6 79 b 307 349 10 223 141 340 m 839 215 b 845 216 841 216 842 216 b 862 213 852 216 860 215 b 899 163 887 206 899 184 b 872 117 899 145 890 127 b 847 111 865 112 856 111 b 808 130 833 111 818 117 b 796 162 800 140 796 151 b 839 215 796 187 812 212 m 839 -112 b 845 -112 841 -112 842 -112 b 862 -115 852 -112 860 -113 b 899 -165 887 -122 899 -144 b 872 -210 899 -183 890 -201 b 847 -217 865 -215 856 -217 b 808 -198 833 -217 818 -210 b 796 -165 800 -188 796 -177 b 839 -112 796 -140 812 -116 "
                    },
                    v7a: {
                        x_min: -1.359375,
                        x_max: 386.5625,
                        ha: 394,
                        o: "m 249 535 b 257 537 251 537 253 537 b 276 524 266 537 273 533 l 277 521 l 279 419 l 279 316 l 304 323 b 337 328 319 326 330 328 b 353 316 347 328 349 324 b 355 266 355 315 355 290 b 353 215 355 241 355 217 b 319 198 349 206 347 205 b 279 187 284 190 279 188 b 279 156 279 187 279 174 b 279 136 279 151 279 144 l 279 84 l 289 87 l 330 98 b 367 105 352 102 362 105 b 378 101 372 105 375 104 b 386 61 385 95 386 94 b 386 40 386 55 386 48 l 386 -5 l 385 -8 b 374 -19 383 -12 378 -18 b 291 -40 372 -19 347 -26 b 279 -43 284 -41 279 -43 b 279 -83 279 -43 279 -59 b 279 -95 279 -87 279 -91 l 279 -145 l 304 -140 b 337 -133 321 -136 330 -133 b 349 -140 343 -133 347 -136 b 355 -181 355 -145 355 -142 l 355 -197 l 355 -210 b 349 -252 355 -249 355 -247 b 300 -269 345 -258 347 -258 b 280 -274 291 -272 281 -273 l 279 -274 l 277 -378 l 277 -483 l 276 -487 b 257 -499 273 -495 265 -499 b 238 -487 249 -499 242 -495 l 236 -483 l 236 -384 l 236 -285 l 235 -285 l 212 -291 l 170 -301 b 148 -308 159 -305 148 -306 b 147 -415 147 -308 147 -313 l 147 -523 l 145 -526 b 126 -538 141 -534 133 -538 b 106 -526 118 -538 110 -534 l 104 -523 l 104 -420 b 103 -317 104 -326 104 -317 b 103 -317 103 -317 103 -317 b 50 -330 92 -322 54 -330 b 31 -317 42 -330 35 -326 b 29 -267 29 -315 29 -315 l 29 -219 l 32 -216 b 92 -192 36 -206 36 -206 l 104 -190 l 104 -138 b 103 -87 104 -91 104 -87 b 103 -87 103 -87 103 -87 b 88 -91 103 -87 96 -88 l 49 -101 b 17 -106 32 -105 23 -106 b 6 -102 13 -106 10 -105 b -1 -62 0 -97 -1 -95 b 0 -41 -1 -56 0 -49 l 0 4 l 1 6 b 10 16 2 11 6 15 b 91 37 12 18 38 24 l 104 41 l 104 93 b 103 144 104 140 104 144 b 103 144 103 144 103 144 b 50 131 92 141 54 131 b 31 144 42 131 35 137 b 29 195 29 147 29 148 l 29 242 l 32 245 b 92 269 36 255 36 255 l 104 273 l 104 377 l 104 481 l 106 485 b 126 498 110 492 118 498 b 134 495 129 498 132 496 b 145 485 138 494 142 489 l 147 481 l 147 383 l 147 283 l 152 284 b 190 294 155 285 171 290 l 230 303 l 236 305 l 236 413 l 236 521 l 238 524 b 249 535 240 528 243 533 m 236 126 b 235 177 236 154 236 177 l 235 177 b 213 172 235 177 225 174 l 170 161 b 147 155 157 158 147 155 b 147 124 147 155 147 142 b 147 102 147 117 147 111 l 147 52 l 153 54 l 228 72 l 236 74 l 236 126 m 236 -105 b 235 -54 236 -65 236 -54 l 235 -54 b 231 -55 235 -54 234 -54 b 172 -69 227 -55 204 -62 l 149 -76 l 147 -76 l 147 -127 l 147 -179 l 152 -177 b 190 -167 155 -177 171 -173 l 230 -158 l 236 -156 l 236 -105 "
                    },
                    v7c: {
                        x_min: 0,
                        x_max: 300.8125,
                        ha: 307,
                        o: "m 49 505 b 53 506 50 505 51 506 b 70 496 58 506 62 503 b 81 485 73 492 78 488 l 96 473 l 111 459 l 122 449 l 134 438 l 182 396 l 255 330 b 292 291 292 298 292 298 l 292 290 l 292 284 l 283 270 b 209 36 234 197 209 113 b 288 -170 209 -44 235 -119 b 299 -184 295 -179 299 -181 b 300 -191 300 -187 300 -188 b 285 -206 300 -199 294 -206 b 280 -206 283 -206 281 -206 b 247 -201 270 -202 259 -201 b 176 -222 223 -201 197 -208 b 114 -340 136 -249 114 -292 b 172 -471 114 -384 134 -433 b 185 -492 182 -481 185 -487 b 181 -502 185 -496 183 -499 b 171 -508 176 -505 174 -508 b 152 -498 166 -508 160 -503 b 0 -284 65 -428 12 -352 b 0 -260 0 -278 0 -270 b 1 -238 0 -252 0 -242 b 148 -140 16 -177 73 -140 b 209 -148 167 -140 189 -142 b 215 -149 212 -148 215 -149 b 215 -149 215 -149 215 -149 l 215 -149 b 201 -136 215 -148 209 -142 l 157 -97 l 96 -41 b 17 34 21 24 17 29 b 17 37 17 36 17 36 b 17 38 17 37 17 38 b 25 56 17 44 17 44 b 110 298 81 131 110 219 b 46 474 110 367 88 431 b 38 491 40 480 38 487 b 49 505 38 498 42 502 "
                    },
                    v7d: {
                        x_min: -1.359375,
                        x_max: 436.921875,
                        ha: 446,
                        o: "m 213 205 b 217 205 215 205 216 205 b 234 194 224 205 234 199 b 236 187 234 194 235 190 l 245 167 l 261 129 l 270 106 b 355 -61 294 54 329 -13 b 420 -163 381 -105 402 -138 b 436 -188 435 -184 436 -184 b 436 -191 436 -190 436 -190 b 421 -206 436 -201 431 -206 l 421 -206 l 416 -206 l 405 -201 b 217 -158 347 -172 283 -158 b 31 -201 153 -158 88 -172 l 20 -206 l 14 -206 l 14 -206 b 0 -191 5 -206 0 -201 b -1 -188 0 -190 -1 -190 b 14 -163 -1 -186 0 -184 b 95 -34 36 -136 72 -77 b 166 106 119 8 148 68 l 175 129 l 183 148 l 200 188 b 213 205 205 199 208 202 "
                    },
                    v7f: {
                        x_min: 0,
                        x_max: 367.5,
                        ha: 375,
                        o: "m 0 124 l 0 187 l 61 187 l 122 187 l 122 138 l 122 91 l 153 61 l 183 30 l 213 61 l 243 91 l 243 138 l 243 187 l 306 187 l 367 187 l 367 124 l 367 61 l 321 61 l 274 61 l 243 30 l 213 0 l 243 -31 l 274 -62 l 321 -62 l 367 -62 l 367 -124 l 367 -188 l 306 -188 l 243 -188 l 243 -140 l 243 -93 l 213 -62 l 183 -31 l 153 -62 l 122 -93 l 122 -140 l 122 -188 l 61 -188 l 0 -188 l 0 -124 l 0 -62 l 46 -62 l 92 -62 l 123 -31 l 153 0 l 123 30 l 92 61 l 46 61 l 0 61 l 0 124 "
                    },
                    v80: {
                        x_min: 29.9375,
                        x_max: 420.578125,
                        ha: 371,
                        o: "m 115 345 b 221 347 117 345 166 347 b 411 345 306 347 409 345 b 420 330 416 342 420 335 b 415 319 420 326 419 321 b 178 118 397 303 179 118 b 178 117 178 118 178 117 b 181 117 178 117 178 117 b 189 117 182 117 185 117 b 193 117 190 117 191 117 b 247 98 215 117 232 111 b 296 75 266 83 280 76 b 302 75 299 75 300 75 b 322 91 311 75 315 79 b 322 91 322 91 322 91 b 322 91 322 91 322 91 b 319 91 322 91 321 91 b 313 90 318 90 315 90 b 283 107 300 90 288 97 b 277 126 279 114 277 121 b 319 167 277 149 295 167 b 319 167 319 167 319 167 b 362 118 347 167 362 147 b 355 82 362 108 359 96 b 311 33 349 65 340 55 b 224 1 284 12 253 1 b 194 5 213 1 204 2 b 168 18 183 8 178 11 b 110 36 151 30 130 36 b 57 15 88 36 68 29 b 47 11 54 12 51 11 b 31 20 40 11 34 13 b 29 26 31 22 29 25 b 68 66 29 36 39 45 b 285 250 73 71 281 248 b 285 250 285 250 285 250 b 231 252 285 252 261 252 b 137 250 190 252 141 250 b 93 227 122 248 110 241 b 78 220 88 222 83 220 b 66 227 74 220 70 222 b 63 234 65 229 63 231 b 85 291 63 241 69 252 b 115 345 108 342 108 344 "
                    },
                    v81: {
                        x_min: 0,
                        x_max: 428.75,
                        ha: 438,
                        o: "m 262 186 b 273 186 266 186 272 186 b 274 186 273 186 274 186 b 285 186 274 186 280 186 b 428 48 375 181 428 122 b 386 -68 428 12 416 -29 b 155 -187 329 -145 236 -187 b 12 -111 92 -187 38 -162 b 0 -51 4 -91 0 -72 b 262 186 0 58 122 179 m 366 131 b 352 134 362 133 357 134 b 219 81 321 134 269 115 b 47 -111 126 23 50 -62 b 47 -112 47 -111 47 -112 b 77 -136 47 -129 58 -136 b 264 -45 118 -136 194 -101 b 382 109 336 12 382 76 b 366 131 382 120 377 129 "
                    },
                    v83: {
                        x_min: -1.359375,
                        x_max: 847.96875,
                        ha: 865,
                        o: "m 488 1499 b 495 1500 490 1500 492 1500 b 541 1465 507 1500 521 1490 b 679 1078 622 1372 679 1210 b 677 1050 679 1068 677 1060 b 477 642 668 893 604 764 l 443 609 l 431 596 l 431 592 l 438 562 l 449 508 l 460 458 b 481 355 475 390 481 355 b 481 355 481 355 481 355 b 490 356 481 355 485 355 b 528 358 495 356 511 358 b 558 356 540 358 552 356 b 839 95 699 338 808 237 b 847 22 845 72 847 47 b 631 -303 847 -113 766 -242 b 620 -309 623 -308 620 -309 l 620 -310 b 631 -359 620 -310 626 -333 l 646 -435 l 660 -496 b 672 -588 668 -535 672 -563 b 664 -653 672 -610 669 -630 b 383 -875 630 -792 509 -875 b 201 -810 321 -875 257 -855 b 129 -680 151 -768 129 -730 b 274 -530 129 -592 200 -530 b 351 -553 300 -530 326 -538 b 412 -669 393 -582 412 -626 b 287 -805 412 -735 366 -800 l 279 -805 l 285 -809 b 383 -830 318 -823 351 -830 b 586 -718 464 -830 540 -789 b 626 -584 612 -678 626 -631 b 619 -528 626 -566 623 -548 b 612 -495 619 -526 616 -510 b 577 -324 590 -387 577 -324 b 577 -324 577 -324 577 -324 b 568 -326 575 -324 571 -324 b 528 -334 558 -328 537 -333 b 465 -338 506 -337 485 -338 b 24 -11 269 -338 87 -206 b -1 145 8 41 -1 93 b 96 442 -1 249 32 351 b 322 714 166 541 236 626 l 352 745 l 345 782 l 332 843 l 315 921 b 303 984 310 950 304 978 b 295 1082 298 1017 295 1049 b 413 1426 295 1208 336 1329 b 488 1499 436 1456 477 1496 m 549 1301 b 541 1301 547 1301 544 1301 b 411 1207 500 1301 447 1263 b 355 1004 374 1152 355 1079 b 359 942 355 984 356 963 b 371 881 362 927 363 917 l 385 818 b 392 782 389 799 392 784 l 392 782 b 434 828 393 782 424 816 b 607 1165 534 941 594 1060 b 608 1193 608 1175 608 1183 b 597 1270 608 1224 604 1254 b 549 1301 589 1286 571 1299 m 398 528 b 393 555 396 542 393 553 b 392 555 393 555 393 555 b 317 470 390 555 347 505 b 190 298 266 408 212 334 b 127 70 148 227 127 148 b 155 -77 127 19 137 -30 b 468 -303 209 -216 333 -303 b 519 -299 484 -303 502 -302 b 568 -284 541 -295 568 -287 l 568 -284 b 563 -263 568 -284 566 -274 l 534 -120 l 511 -13 l 496 61 l 480 133 b 469 187 472 176 469 187 b 468 188 469 187 469 188 b 416 162 462 188 430 172 b 337 13 364 126 337 69 b 413 -124 337 -40 363 -93 b 428 -144 424 -131 428 -137 b 428 -149 428 -145 428 -148 b 409 -166 426 -161 419 -166 b 394 -162 405 -166 400 -165 b 240 77 302 -122 240 -27 l 240 77 b 430 342 240 197 315 301 l 436 344 l 426 394 l 398 528 m 548 194 b 526 195 540 195 532 195 b 519 195 524 195 521 195 l 514 195 l 518 177 l 539 79 l 552 15 l 566 -48 l 594 -187 l 605 -240 b 612 -266 609 -254 611 -266 b 612 -266 612 -266 612 -266 b 641 -248 613 -266 630 -256 b 744 -98 692 -212 730 -156 b 751 -40 749 -79 751 -59 b 548 194 751 76 665 181 "
                    },
                    v84: {
                        x_min: 25.859375,
                        x_max: 164.6875,
                        ha: 168,
                        o: "m 34 369 b 40 370 35 370 38 370 b 59 353 49 370 50 367 b 164 40 122 254 155 158 b 164 0 164 33 164 16 b 164 -40 164 -16 164 -34 b 59 -353 155 -158 122 -254 b 40 -371 53 -366 47 -371 b 34 -370 38 -371 36 -370 b 25 -358 28 -367 25 -363 b 31 -337 25 -352 27 -347 b 92 0 72 -234 92 -117 b 31 335 92 116 72 233 b 25 356 27 345 25 352 b 34 369 25 363 28 366 "
                    },
                    v86: {
                        x_min: -571.671875,
                        x_max: 570.3125,
                        ha: 582,
                        o: "m -386 173 b -381 174 -385 174 -383 174 b -370 173 -377 174 -372 173 b -281 86 -367 172 -347 151 b -196 0 -235 37 -196 0 b -126 84 -196 0 -164 37 b -50 174 -55 173 -57 172 b -44 174 -49 174 -47 174 b -35 173 -42 174 -38 173 b 53 86 -32 172 -12 151 b 138 0 100 37 138 0 b 208 84 140 0 170 37 b 284 174 279 173 277 172 b 289 174 285 174 288 174 b 299 173 294 174 298 173 b 462 11 303 172 338 134 l 475 -1 l 503 34 b 541 76 534 72 536 74 b 548 77 544 77 545 77 b 570 56 560 77 570 68 b 567 48 570 54 568 51 b 392 -172 564 41 397 -166 b 378 -176 387 -174 382 -176 b 368 -174 374 -176 371 -176 b 280 -87 367 -173 345 -152 b 194 0 234 -38 194 0 b 125 -86 194 0 163 -38 b 49 -174 54 -174 55 -173 b 43 -176 47 -176 46 -176 b 34 -174 40 -176 36 -174 b -54 -87 31 -173 10 -152 b -140 0 -102 -38 -140 0 b -209 -86 -141 0 -171 -38 b -285 -174 -280 -174 -279 -173 b -291 -176 -287 -176 -289 -176 b -300 -174 -295 -176 -299 -174 b -464 -12 -304 -173 -340 -137 l -476 0 l -504 -34 b -543 -77 -534 -73 -537 -76 b -549 -79 -545 -79 -547 -79 b -571 -58 -562 -79 -571 -69 b -568 -49 -571 -55 -570 -52 b -392 172 -566 -43 -396 167 b -386 173 -390 172 -387 173 "
                    },
                    v8a: {
                        x_min: -170.140625,
                        x_max: 168.78125,
                        ha: 172,
                        o: "m -160 567 b -122 567 -159 567 -149 567 l -87 567 l -84 566 b -74 553 -78 563 -77 560 b -20 366 -73 551 -49 466 b 31 186 8 267 31 186 b 85 371 31 186 55 269 b 140 559 114 473 138 557 b 153 567 141 564 148 567 b 168 559 159 567 166 564 b 168 555 168 557 168 557 b 92 281 168 548 159 513 b 14 13 50 134 14 13 b 0 0 14 6 6 0 b -17 15 -8 0 -17 8 b -93 283 -17 15 -51 136 b -170 552 -166 533 -170 548 b -170 553 -170 552 -170 552 b -160 567 -170 560 -167 564 "
                    },
                    v8b: {
                        x_min: 0,
                        x_max: 319.859375,
                        ha: 326,
                        o: "m 149 508 b 159 509 152 509 155 509 b 186 494 170 509 181 503 b 190 440 190 487 190 488 l 190 430 l 190 377 l 242 377 l 251 377 b 303 373 298 377 296 377 b 319 345 314 367 319 356 b 304 319 319 335 314 324 b 250 315 296 315 299 315 l 242 315 l 190 315 l 190 262 l 190 252 b 186 198 190 204 190 205 b 159 183 179 188 170 183 b 132 198 148 183 138 188 b 127 252 127 205 127 204 l 127 262 l 127 315 l 76 315 l 68 315 b 14 319 20 315 21 315 b 0 347 4 324 0 335 b 14 373 0 356 4 367 b 68 377 21 377 20 377 l 76 377 l 127 377 l 127 430 l 127 440 b 132 494 127 488 127 487 b 149 508 136 501 142 505 "
                    },
                    v8c: {
                        x_min: -330.75,
                        x_max: 329.390625,
                        ha: 336,
                        o: "m -133 483 b -117 484 -127 484 -122 484 b 31 373 -51 484 9 440 b 35 348 34 365 35 356 b -25 285 35 313 10 285 b -87 331 -55 285 -76 302 b -167 402 -100 376 -133 402 b -191 398 -175 402 -183 401 b -227 341 -215 388 -227 369 b -225 320 -227 334 -227 327 b -13 74 -209 230 -125 133 b 6 65 -4 70 5 66 l 9 63 l 10 65 b 117 231 12 68 40 112 l 189 341 l 242 424 b 268 460 262 456 264 458 b 283 464 273 463 277 464 b 308 438 296 464 308 453 l 308 437 b 287 396 308 430 308 428 l 95 98 l 59 43 l 58 41 l 65 37 b 253 -156 151 -8 217 -77 b 281 -285 272 -199 281 -244 b 148 -481 281 -381 231 -463 b 115 -485 137 -484 126 -485 b -32 -376 51 -485 -9 -442 b -36 -349 -35 -366 -36 -358 b 25 -287 -36 -315 -12 -287 b 85 -333 54 -287 74 -302 b 166 -403 99 -377 133 -403 b 190 -399 174 -403 182 -402 b 225 -342 215 -390 225 -370 b 224 -322 225 -335 225 -328 b 12 -76 208 -231 125 -134 b -8 -66 2 -72 -6 -68 l -10 -65 l -12 -66 b -118 -231 -13 -68 -42 -113 l -190 -342 l -243 -426 b -269 -462 -264 -458 -265 -458 b -284 -466 -274 -464 -279 -466 b -310 -440 -298 -466 -310 -455 l -310 -438 b -288 -398 -310 -430 -308 -430 l -96 -99 l -59 -44 l -59 -43 l -66 -38 b -281 284 -198 33 -281 158 l -281 284 b -133 483 -281 392 -220 474 m 254 177 b 266 179 258 177 262 179 b 319 149 287 179 307 167 b 329 115 326 140 329 127 b 319 79 329 102 326 90 b 268 51 307 61 287 51 b 221 72 250 51 234 58 b 205 115 210 84 205 99 b 254 177 205 142 223 170 m -281 -54 b -269 -52 -277 -52 -273 -52 b -223 -73 -253 -52 -235 -59 b -206 -116 -212 -84 -206 -101 b -216 -151 -206 -129 -209 -141 b -269 -179 -228 -170 -249 -179 b -314 -159 -285 -179 -302 -173 b -330 -116 -325 -147 -330 -131 b -281 -54 -330 -88 -313 -61 "
                    },
                    v8d: {
                        x_min: -1.359375,
                        x_max: 255.890625,
                        ha: 261,
                        o: "m 118 514 b 127 517 121 517 122 517 b 147 505 136 517 142 513 l 148 502 l 148 403 b 148 306 148 351 148 306 b 174 315 149 306 160 310 l 200 324 l 205 323 b 223 312 213 323 220 319 l 225 308 l 225 260 b 225 245 225 255 225 249 b 220 204 225 208 224 209 b 179 188 216 199 215 199 l 148 177 l 148 124 l 148 70 l 189 84 b 236 98 219 94 230 98 b 247 94 240 98 243 97 b 255 52 254 88 255 87 b 255 33 255 47 255 40 l 254 -12 l 253 -15 b 249 -22 253 -18 250 -20 l 245 -24 l 196 -41 l 148 -58 l 148 -108 b 148 -158 148 -136 148 -158 b 174 -148 148 -158 160 -154 b 204 -140 198 -140 200 -140 l 204 -140 b 224 -152 213 -140 221 -145 b 225 -201 224 -155 225 -177 b 224 -254 225 -226 224 -251 b 157 -284 220 -262 220 -262 l 148 -288 l 148 -395 l 148 -503 l 147 -506 b 127 -519 142 -514 134 -519 b 107 -506 119 -519 111 -514 l 106 -503 l 106 -403 b 106 -303 106 -316 106 -303 b 104 -303 104 -303 104 -303 b 88 -310 104 -303 96 -306 l 63 -319 b 51 -322 59 -320 55 -322 b 36 -315 46 -322 40 -319 b 31 -273 32 -309 31 -312 b 31 -258 31 -269 31 -263 l 31 -210 l 34 -206 b 40 -198 35 -204 38 -199 b 74 -186 42 -197 57 -191 l 106 -173 l 106 -123 b 106 -97 106 -112 106 -104 b 106 -72 106 -76 106 -72 b 104 -72 106 -72 106 -72 b 20 -99 89 -79 23 -99 b 0 -84 10 -99 2 -93 b -1 -37 0 -81 -1 -59 b 0 11 -1 -15 0 9 b 58 40 4 22 2 22 l 106 56 l 106 109 b 106 123 106 115 106 119 b 106 162 106 147 106 162 b 81 155 106 162 93 159 b 50 147 65 149 55 147 b 36 152 43 147 40 148 b 31 194 32 158 31 156 b 31 209 31 198 31 204 l 31 256 l 34 260 b 76 281 38 269 38 269 l 106 292 l 106 396 l 106 502 l 107 505 b 118 514 110 509 114 513 "
                    },
                    v8f: {
                        x_min: -21.78125,
                        x_max: 362.0625,
                        ha: 369,
                        o: "m 302 1031 b 308 1032 304 1032 307 1032 b 330 1016 318 1032 325 1027 b 362 867 351 970 362 920 b 340 738 362 824 353 780 l 336 727 l 340 717 b 362 591 355 677 362 634 b 257 323 362 496 325 401 b 204 272 243 306 227 290 b 20 56 129 206 66 133 b -1 18 12 44 0 22 b -19 4 -4 9 -12 4 l -21 4 l -21 140 l -21 276 l -12 277 b 167 333 61 288 127 309 b 319 598 262 388 319 491 b 311 664 319 620 317 642 l 310 673 l 304 664 b 204 548 279 620 250 587 b 20 333 129 483 66 409 b -1 292 12 320 0 298 b -19 280 -4 285 -12 280 l -21 280 l -21 416 l -21 552 l -12 553 b 167 609 61 564 127 585 b 319 874 264 666 319 770 b 294 992 319 914 311 954 b 288 1011 288 1004 288 1007 b 302 1031 288 1021 294 1028 "
                    },
                    v90: {
                        x_min: -171.5,
                        x_max: 483.1875,
                        ha: 493,
                        o: "m -8 631 b -1 632 -6 632 -4 632 b 19 620 8 632 16 628 b 20 495 20 616 20 616 b 20 373 20 427 20 373 b 115 410 20 373 63 390 l 210 448 l 210 531 b 212 620 210 614 210 616 b 231 632 215 628 223 632 b 246 627 236 632 242 631 b 251 541 251 620 251 628 l 251 463 l 315 489 b 387 514 368 509 381 514 b 393 513 390 514 392 514 b 406 494 402 510 406 502 b 397 476 406 487 404 480 b 323 446 396 474 363 462 l 251 417 l 251 283 l 251 148 l 254 151 b 370 199 291 183 332 199 b 415 191 385 199 400 197 b 483 84 458 176 483 134 b 461 0 483 58 476 29 b 332 -142 439 -40 411 -72 l 255 -215 b 231 -229 240 -229 239 -229 b 216 -223 224 -229 220 -227 b 210 -158 210 -217 210 -223 b 210 -120 210 -148 210 -136 l 210 -29 l 205 -34 b 100 -142 182 -65 159 -88 l 23 -215 b -1 -229 9 -229 6 -229 b -19 -217 -9 -229 -16 -224 l -20 -215 l -21 48 l -21 310 l -83 287 b -152 262 -133 266 -145 262 b -157 263 -153 262 -155 262 b -171 283 -166 266 -171 274 b -161 301 -171 290 -167 297 b -91 328 -160 302 -129 315 l -21 356 l -21 487 l -20 617 l -19 621 b -8 631 -17 626 -12 630 m 210 288 b 210 401 210 351 210 401 b 114 365 209 401 167 384 l 20 327 l 20 238 l 20 148 l 21 151 b 140 199 59 183 102 199 b 206 180 164 199 187 192 l 209 177 b 209 177 209 177 209 177 b 210 288 210 177 210 199 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 m 341 131 b 328 133 337 133 332 133 b 322 133 326 133 323 133 b 257 87 296 129 273 113 l 251 80 l 251 -37 l 251 -156 l 255 -152 b 375 81 328 -72 375 20 l 375 83 b 341 131 375 113 367 126 "
                    },
                    v92: {
                        x_min: 0,
                        x_max: 598.890625,
                        ha: 611,
                        o: "m 62 181 b 77 183 66 183 72 183 b 91 181 83 183 88 183 b 202 131 100 180 106 177 l 299 87 l 394 131 b 517 183 499 181 502 183 b 519 183 517 183 518 183 b 598 104 567 183 598 144 b 577 49 598 84 592 65 b 518 15 567 38 563 37 b 484 0 499 6 484 0 b 518 -16 484 -1 499 -8 b 577 -51 563 -38 567 -40 b 598 -105 592 -66 598 -86 b 519 -184 598 -145 567 -184 b 517 -184 518 -184 517 -184 b 394 -133 502 -184 499 -183 l 299 -88 l 202 -133 b 81 -184 99 -183 95 -184 b 77 -184 80 -184 78 -184 b 0 -105 29 -184 0 -145 b 20 -51 0 -86 5 -66 b 80 -16 29 -40 34 -38 b 114 -1 98 -8 114 -1 b 80 15 114 0 98 6 b 20 49 34 37 29 38 b 0 104 6 65 0 84 b 62 181 0 140 23 174 m 88 134 b 74 136 85 134 80 136 b 68 134 72 136 69 136 b 46 104 54 130 46 117 b 55 81 46 95 49 88 b 149 34 59 76 53 80 b 224 -1 190 15 224 0 b 144 -38 224 -1 187 -18 b 54 -84 59 -79 58 -79 b 46 -105 49 -90 46 -98 b 76 -137 46 -122 58 -137 b 78 -137 77 -137 77 -137 b 194 -86 87 -137 76 -141 b 298 -36 250 -58 298 -36 b 298 -36 298 -36 298 -36 b 402 -84 299 -36 345 -58 b 518 -137 522 -141 510 -137 b 521 -137 519 -137 519 -137 b 551 -105 539 -137 551 -122 b 541 -83 551 -98 548 -90 b 447 -36 537 -77 544 -81 b 374 -1 406 -16 374 -1 b 447 34 374 0 406 15 b 541 81 544 80 537 76 b 551 104 548 88 551 97 b 521 136 551 120 539 136 b 518 136 519 136 519 136 b 517 136 518 136 517 136 l 517 136 b 402 83 511 136 511 136 b 298 34 345 56 299 34 b 298 34 298 34 298 34 b 194 84 298 34 250 56 b 88 134 137 111 89 133 "
                    },
                    v93: {
                        x_min: 0,
                        x_max: 438.28125,
                        ha: 447,
                        o: "m 212 205 b 219 205 213 205 216 205 b 239 183 228 205 231 204 b 421 -163 298 40 363 -83 b 438 -191 434 -180 438 -186 b 436 -197 438 -192 438 -195 b 424 -206 434 -204 431 -206 b 406 -201 420 -206 415 -205 b 216 -156 347 -172 281 -156 b 23 -205 148 -156 80 -173 b 14 -206 20 -206 17 -206 b 0 -191 6 -206 0 -201 b 6 -176 0 -187 1 -183 b 202 192 63 -104 142 45 b 212 205 205 199 208 202 m 264 48 l 249 81 l 243 94 l 242 91 b 89 -126 208 36 137 -66 b 81 -138 85 -133 81 -138 b 81 -138 81 -138 81 -138 b 81 -138 81 -138 81 -138 b 95 -133 81 -138 87 -136 b 280 -94 156 -108 221 -94 b 334 -98 299 -94 317 -95 b 343 -99 338 -99 343 -99 b 343 -99 343 -99 343 -99 b 338 -94 343 -99 341 -97 b 264 48 318 -58 287 1 "
                    },
                    v94: {
                        x_min: -149.71875,
                        x_max: 148.359375,
                        ha: 151,
                        o: "m -9 215 b 0 217 -6 217 -4 217 b 19 205 8 217 14 213 b 20 142 20 202 20 201 l 20 84 l 23 84 b 144 -27 81 74 129 30 b 148 -66 147 -40 148 -54 b 36 -213 148 -134 103 -197 b 0 -219 24 -217 12 -219 b -145 -104 -68 -219 -129 -173 b -149 -68 -148 -91 -149 -79 b -24 84 -149 6 -98 74 l -21 84 l -21 142 b -19 205 -20 201 -20 202 b -9 215 -17 209 -13 213 m -21 -15 b -23 41 -21 37 -21 41 b -23 41 -23 41 -23 41 b -76 11 -35 40 -62 26 b -108 -65 -98 -11 -108 -38 b -1 -176 -108 -122 -65 -176 b 107 -65 63 -176 107 -122 b 74 11 107 -38 96 -11 b 20 41 61 26 32 41 b 20 -15 20 41 20 15 b 19 -74 20 -72 20 -72 b 0 -87 14 -83 6 -87 b -19 -74 -8 -87 -16 -83 b -21 -15 -20 -72 -20 -72 "
                    },
                    v95: {
                        x_min: 0,
                        x_max: 406.96875,
                        ha: 415,
                        o: "m 55 181 b 70 183 61 183 66 183 b 111 170 85 183 99 179 b 160 130 115 167 137 149 l 202 95 l 245 130 b 319 181 299 176 302 179 b 334 183 325 183 330 183 b 406 109 375 183 406 148 b 401 81 406 99 405 91 b 348 24 394 65 390 59 b 318 -1 332 11 318 0 b 348 -26 318 -1 332 -12 b 401 -83 390 -61 394 -66 b 406 -111 405 -93 406 -101 b 334 -184 406 -149 375 -184 b 319 -183 330 -184 325 -184 b 245 -131 302 -180 299 -177 l 202 -97 l 160 -131 b 85 -183 107 -177 103 -180 b 70 -184 80 -184 76 -184 b 0 -111 31 -184 0 -149 b 4 -83 0 -101 1 -93 b 58 -26 10 -66 16 -61 b 88 -1 74 -12 88 -1 b 58 24 88 0 74 11 b 10 69 23 54 17 59 b 0 109 2 81 0 95 b 55 181 0 142 21 173 m 83 133 b 72 136 78 136 76 136 b 57 131 66 136 61 134 b 46 109 49 126 46 117 b 50 93 46 104 47 98 b 107 45 51 91 77 70 b 160 0 137 20 160 0 b 107 -47 160 -1 137 -22 b 50 -94 77 -72 51 -93 b 46 -111 47 -99 46 -105 b 59 -134 46 -120 50 -130 b 72 -137 62 -136 68 -137 b 83 -136 76 -137 80 -136 b 144 -84 84 -134 107 -116 b 202 -36 176 -58 202 -36 b 261 -84 202 -36 230 -58 b 323 -136 299 -116 321 -134 b 334 -137 326 -136 330 -137 b 345 -134 338 -137 343 -136 b 360 -111 355 -130 360 -120 b 355 -94 360 -105 359 -99 b 299 -47 353 -93 329 -72 b 245 0 269 -22 245 -1 b 299 45 245 0 269 20 b 355 93 329 70 353 91 b 360 109 359 98 360 104 b 345 133 360 119 355 129 b 334 136 343 134 338 136 b 323 134 330 136 326 134 b 261 83 321 133 299 115 b 202 34 230 56 202 34 b 144 83 202 34 176 56 b 83 133 106 115 84 133 "
                    },
                    v97: {
                        x_min: -228.671875,
                        x_max: 227.3125,
                        ha: 232,
                        o: "m -217 487 l -213 488 l 0 488 l 212 488 l 216 487 b 225 476 220 484 224 480 l 227 473 l 227 244 l 227 15 l 225 12 b 206 0 223 4 215 0 b 197 1 204 0 200 0 b 187 12 193 4 189 6 l 186 15 l 186 138 l 186 262 l -1 262 l -187 262 l -187 138 l -187 15 l -189 12 b -208 0 -193 4 -200 0 b -227 12 -216 0 -223 4 l -228 15 l -228 244 l -228 473 l -227 476 b -217 487 -225 480 -221 484 "
                    },
                    v9a: {
                        x_min: -21.78125,
                        x_max: 367.5,
                        ha: 375,
                        o: "m 230 1031 b 238 1032 232 1032 235 1032 b 259 1014 245 1032 251 1027 b 367 662 330 906 367 782 b 364 602 367 641 367 621 b 232 317 352 488 304 384 b 57 120 155 245 103 187 b -1 18 31 84 6 40 b -19 4 -4 11 -12 4 l -21 4 l -21 159 l -21 315 l -16 315 b 96 335 10 315 62 324 b 315 695 227 380 315 527 b 313 738 315 709 314 724 b 224 991 304 825 273 916 b 216 1013 219 999 216 1007 b 230 1031 216 1021 220 1028 "
                    },
                    v9b: {
                        x_min: -24.5,
                        x_max: 313.0625,
                        ha: 319,
                        o: "m -24 -133 l -24 -5 l -20 -5 b -1 -19 -12 -5 -4 -11 b 142 -213 13 -61 74 -144 b 258 -376 196 -269 230 -315 b 313 -605 295 -449 313 -528 b 292 -742 313 -652 306 -699 b 288 -752 289 -748 288 -752 b 288 -752 288 -752 288 -752 b 292 -764 289 -753 291 -757 b 313 -907 306 -811 313 -860 b 292 -1045 313 -954 306 -1002 b 288 -1054 289 -1050 288 -1054 b 288 -1054 288 -1054 288 -1054 b 292 -1067 289 -1054 291 -1060 b 313 -1210 306 -1113 313 -1161 b 292 -1346 313 -1257 306 -1304 b 288 -1357 289 -1353 288 -1357 b 288 -1357 288 -1357 288 -1357 b 292 -1368 289 -1357 291 -1363 b 313 -1512 306 -1415 313 -1464 b 292 -1648 313 -1560 306 -1605 b 288 -1660 289 -1654 288 -1660 b 288 -1660 288 -1660 288 -1660 b 292 -1671 289 -1660 291 -1665 b 313 -1814 306 -1719 313 -1766 b 250 -2040 313 -1897 291 -1977 b 232 -2062 238 -2057 236 -2059 b 221 -2065 230 -2063 225 -2065 b 200 -2045 210 -2065 201 -2057 b 200 -2043 200 -2044 200 -2044 b 208 -2026 200 -2037 202 -2034 b 269 -1826 249 -1966 269 -1897 b 153 -1544 269 -1726 230 -1625 b -9 -1472 115 -1506 58 -1481 b -21 -1471 -14 -1471 -19 -1471 l -24 -1471 l -24 -1343 l -24 -1215 l -20 -1215 b -1 -1229 -12 -1215 -4 -1221 b 142 -1424 13 -1270 74 -1353 b 257 -1582 196 -1478 228 -1524 b 264 -1594 261 -1589 264 -1594 l 264 -1594 b 265 -1582 264 -1594 264 -1589 b 270 -1525 268 -1562 270 -1544 b 153 -1243 270 -1424 228 -1321 b -9 -1170 115 -1203 58 -1178 b -21 -1168 -14 -1170 -19 -1168 l -24 -1168 l -24 -1041 l -24 -913 l -20 -913 b -1 -927 -12 -913 -4 -918 b 142 -1121 13 -967 74 -1050 b 257 -1281 196 -1175 228 -1221 b 264 -1292 261 -1286 264 -1292 l 264 -1292 b 265 -1279 264 -1292 264 -1286 b 270 -1222 268 -1261 270 -1242 b 153 -941 270 -1121 228 -1018 b -9 -867 115 -900 58 -875 b -21 -866 -14 -867 -19 -866 l -24 -866 l -24 -738 l -24 -610 l -20 -610 b -1 -624 -12 -610 -4 -616 b 142 -818 13 -664 74 -749 b 257 -978 196 -873 228 -918 b 264 -989 261 -984 264 -989 l 264 -989 b 265 -977 264 -989 264 -984 b 270 -920 268 -959 270 -939 b 153 -638 270 -818 228 -716 b -9 -564 115 -598 58 -573 b -21 -563 -14 -564 -19 -563 l -24 -563 l -24 -435 l -24 -308 l -20 -308 b -1 -322 -12 -308 -4 -313 b 142 -516 13 -363 74 -446 b 257 -675 196 -571 228 -616 b 264 -687 261 -681 264 -687 l 264 -687 b 265 -674 264 -687 264 -681 b 270 -617 268 -656 270 -637 b 153 -335 270 -516 228 -413 b -9 -262 115 -295 58 -270 b -21 -260 -14 -262 -19 -260 l -24 -260 l -24 -133 "
                    },
                    v9c: {
                        x_min: -166.0625,
                        x_max: -25.859375,
                        ha: 0,
                        o: "m -49 369 b -42 370 -46 369 -44 370 b -27 360 -36 370 -29 366 b -25 355 -27 359 -25 358 b -32 335 -25 351 -28 347 b -92 52 -66 248 -87 159 b -93 -1 -93 43 -93 20 b -92 -54 -93 -23 -93 -45 b -32 -337 -85 -162 -66 -251 b -25 -355 -27 -349 -25 -352 b -42 -371 -25 -365 -32 -371 b -61 -353 -50 -371 -51 -369 b -163 -63 -119 -262 -153 -165 b -166 -1 -166 -37 -166 -31 b -163 62 -166 30 -166 36 b -61 352 -153 163 -119 260 b -49 369 -54 365 -51 366 "
                    },
                    v9e: {
                        x_min: 0,
                        x_max: 607.0625,
                        ha: 619,
                        o: "m 243 631 b 250 632 246 632 249 632 b 270 620 259 632 268 628 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -224 259 -229 b 227 -215 243 -229 240 -229 l 151 -142 b 32 -16 81 -80 53 -49 b 0 84 9 18 0 52 b 111 199 0 149 42 199 b 137 197 119 199 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 624 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 m 347 631 b 353 632 348 632 351 632 b 374 620 363 632 371 628 b 375 383 375 616 375 616 l 375 148 l 377 151 b 492 199 415 183 454 199 b 537 191 507 199 522 197 b 607 84 582 176 607 134 b 583 0 607 58 598 29 b 455 -142 562 -40 533 -72 l 378 -215 b 355 -229 364 -229 362 -229 b 334 -216 345 -229 337 -224 l 333 -212 l 333 201 l 333 616 l 334 620 b 347 631 337 624 341 630 m 465 131 b 451 133 461 133 455 133 b 445 133 449 133 446 133 b 379 87 419 129 396 113 l 375 80 l 375 -37 l 375 -156 l 378 -152 b 499 81 451 -72 499 20 l 499 83 b 465 131 499 113 490 126 "
                    },
                    va3: {
                        x_min: 58.53125,
                        x_max: 228.671875,
                        ha: 294,
                        o: "m 138 371 b 142 373 140 371 141 373 b 178 342 149 373 156 366 b 228 251 217 297 228 278 b 228 244 228 248 228 247 b 176 147 227 212 212 184 b 123 73 152 122 132 93 b 121 62 122 70 121 66 b 145 13 121 48 129 31 b 153 -2 151 6 153 1 b 149 -9 153 -5 152 -6 b 144 -11 148 -11 145 -11 b 129 -1 140 -11 136 -8 b 61 87 89 37 68 68 b 58 113 59 95 58 105 b 110 215 58 144 74 177 b 163 287 134 240 155 269 b 166 299 166 291 166 295 b 141 348 166 313 157 330 b 133 360 134 356 133 358 b 133 363 133 362 133 362 b 138 371 133 367 136 370 "
                    },
                    va5: {
                        x_min: 0,
                        x_max: 349.8125,
                        ha: 357,
                        o: "m 88 302 b 103 303 93 302 98 303 b 202 224 149 303 191 270 b 205 199 204 216 205 208 b 178 129 205 173 196 147 l 175 126 l 182 127 b 307 249 236 142 284 190 b 313 259 308 254 311 258 b 329 267 317 265 323 267 b 349 247 340 267 349 259 b 201 -263 349 242 204 -258 b 182 -273 197 -270 190 -273 b 163 -260 174 -273 166 -269 b 161 -256 161 -259 161 -258 b 217 -59 161 -248 170 -220 b 272 129 247 43 272 127 b 272 129 272 129 272 129 b 264 122 272 129 268 126 b 140 80 227 94 183 80 b 36 115 102 80 65 91 b 0 194 10 136 0 165 b 88 302 0 244 32 292 "
                    },
                    va9: {
                        x_min: -24.5,
                        x_max: 314.421875,
                        ha: 321,
                        o: "m -24 -145 l -24 -5 l -20 -5 b 0 -23 -9 -5 -2 -12 b 27 -87 4 -38 14 -66 b 138 -220 53 -136 88 -177 b 235 -328 179 -255 208 -288 b 314 -592 287 -409 314 -501 b 292 -732 314 -639 307 -687 l 289 -742 l 294 -756 b 314 -896 307 -802 314 -849 b 292 -1035 314 -943 307 -991 l 289 -1045 l 294 -1057 b 314 -1197 307 -1104 314 -1152 b 292 -1338 314 -1246 307 -1292 l 289 -1347 l 294 -1360 b 314 -1500 307 -1407 314 -1454 b 273 -1689 314 -1565 300 -1628 b 250 -1712 265 -1710 261 -1712 b 228 -1691 236 -1712 228 -1704 l 228 -1685 l 234 -1675 b 270 -1507 258 -1621 270 -1564 b 98 -1193 270 -1381 209 -1261 b 40 -1174 76 -1179 58 -1174 b -10 -1189 24 -1174 8 -1178 b -20 -1192 -14 -1192 -16 -1192 l -24 -1192 l -24 -1052 l -24 -913 l -20 -913 b 0 -931 -9 -913 -2 -920 b 27 -995 4 -946 14 -974 b 138 -1128 53 -1043 88 -1085 b 257 -1275 190 -1172 228 -1220 b 262 -1283 259 -1279 262 -1283 l 262 -1283 b 269 -1249 264 -1282 268 -1260 b 270 -1206 270 -1233 270 -1220 b 98 -891 270 -1075 206 -957 b 40 -871 76 -877 58 -871 b -10 -886 24 -871 8 -875 b -20 -889 -14 -889 -16 -889 l -24 -889 l -24 -749 l -24 -610 l -20 -610 b 0 -628 -9 -610 -2 -617 b 27 -692 4 -644 14 -671 b 138 -825 53 -741 88 -782 b 257 -973 190 -870 228 -917 b 262 -981 259 -977 262 -981 l 262 -981 b 269 -946 264 -979 268 -957 b 270 -903 270 -931 270 -917 b 98 -588 270 -774 206 -655 b 40 -569 76 -574 58 -569 b -10 -584 24 -569 8 -574 b -20 -587 -14 -587 -16 -587 l -24 -587 l -24 -448 l -24 -308 l -20 -308 b 0 -326 -9 -308 -2 -315 b 27 -390 4 -341 14 -369 b 138 -523 53 -438 88 -480 b 257 -670 190 -567 228 -614 b 262 -678 259 -674 262 -678 b 262 -678 262 -678 262 -678 b 269 -644 264 -677 268 -656 b 270 -601 270 -628 270 -614 b 98 -285 270 -471 206 -352 b 40 -266 76 -273 58 -266 b -10 -281 24 -266 8 -272 b -20 -284 -14 -284 -16 -284 l -24 -284 l -24 -145 "
                    },
                    vaa: {
                        x_min: -1.359375,
                        x_max: 752.703125,
                        ha: 768,
                        o: "m 490 985 b 504 986 495 986 500 986 b 604 907 551 986 593 954 b 607 884 607 900 607 892 b 581 813 607 857 597 831 l 578 810 l 583 811 b 710 932 638 827 687 873 b 714 943 711 936 713 942 b 730 952 720 949 725 952 b 752 931 741 952 752 943 b 200 -946 752 927 204 -941 b 182 -957 197 -953 190 -957 b 163 -945 174 -957 166 -953 b 161 -939 161 -942 161 -942 b 217 -743 161 -931 170 -904 b 272 -555 247 -639 272 -555 b 272 -555 272 -555 272 -555 b 264 -560 272 -555 268 -557 b 140 -603 227 -589 182 -603 b 36 -567 102 -603 65 -592 b -1 -487 12 -548 -1 -517 b 17 -427 -1 -466 5 -445 b 103 -380 38 -395 70 -380 b 191 -433 137 -380 172 -398 b 205 -484 201 -448 205 -466 b 178 -553 205 -509 196 -535 l 175 -557 l 182 -555 b 307 -435 236 -539 284 -494 b 372 -213 308 -430 372 -215 b 372 -213 372 -213 372 -213 b 364 -219 372 -213 368 -216 b 240 -262 328 -247 283 -262 b 137 -226 202 -262 166 -249 b 99 -145 112 -206 99 -176 b 118 -84 99 -124 106 -104 b 204 -38 138 -54 171 -38 b 292 -91 238 -38 273 -56 b 306 -141 302 -106 306 -124 b 279 -212 306 -167 296 -194 l 276 -215 l 281 -213 b 408 -93 336 -198 385 -151 b 473 129 409 -88 473 127 b 473 129 473 129 473 129 b 465 122 473 129 469 126 b 341 80 428 94 383 80 b 236 115 303 80 266 91 b 200 195 213 136 200 165 b 217 256 200 217 206 238 b 304 303 239 287 272 303 b 393 249 338 303 374 285 b 406 199 402 234 406 217 b 379 129 406 173 397 148 l 377 126 l 382 127 b 509 248 436 142 485 190 b 574 470 510 254 574 469 b 574 470 574 470 574 470 b 566 464 574 470 570 467 b 442 421 529 435 484 421 b 337 458 404 421 367 433 b 300 538 314 477 300 508 b 318 598 300 559 306 580 b 404 645 340 630 372 645 b 494 592 439 645 475 627 b 507 541 502 577 507 559 b 480 471 507 516 498 489 l 477 467 l 483 470 b 608 589 537 485 586 531 b 675 811 611 595 675 810 b 675 811 675 811 675 811 b 666 806 675 811 671 809 b 543 763 628 777 585 763 b 438 799 504 763 468 775 b 401 878 412 820 401 849 b 490 985 401 928 434 977 "
                    },
                    vab: {
                        x_min: 0,
                        x_max: 272.21875,
                        ha: 278,
                        o: "m 243 631 b 250 632 246 632 249 632 b 270 620 259 632 268 628 l 272 616 l 272 201 l 272 -212 l 270 -216 b 251 -229 268 -224 259 -229 b 227 -215 243 -229 240 -229 l 151 -142 b 32 -16 81 -80 53 -49 b 0 84 9 18 0 52 b 111 199 0 149 42 199 b 137 197 119 199 127 198 b 228 151 168 191 197 177 l 231 148 l 231 383 b 232 620 231 616 231 616 b 243 631 234 624 238 630 m 168 131 b 152 133 163 133 157 133 b 107 102 130 133 111 120 b 106 86 107 97 106 91 b 111 41 106 73 108 56 b 227 -152 125 -13 171 -90 l 231 -156 l 231 -37 l 231 80 l 225 87 b 168 131 210 111 190 126 "
                    },
                    vad: {
                        x_min: 0,
                        x_max: 873.828125,
                        ha: 892,
                        o: "m 0 0 l 0 703 l 81 703 l 164 703 l 164 0 l 164 -705 l 81 -705 l 0 -705 l 0 0 m 225 0 l 225 703 l 246 703 l 268 703 l 268 366 l 268 30 l 274 36 b 314 79 284 44 302 63 b 413 302 357 137 392 213 b 432 327 419 324 421 327 b 449 306 443 327 447 322 b 611 115 457 195 529 115 b 651 122 624 115 638 117 b 728 316 705 140 724 188 b 729 388 728 342 729 366 b 671 635 729 533 711 602 b 581 662 649 652 616 662 b 477 637 545 662 510 653 l 475 635 l 477 634 b 503 627 488 632 495 631 b 545 556 532 612 545 584 b 491 480 545 524 526 491 b 465 474 481 476 473 474 b 379 563 417 474 379 516 b 389 602 379 576 382 588 b 541 691 409 641 479 681 b 582 694 555 692 568 694 b 865 462 714 694 834 598 b 873 392 871 440 873 416 b 865 317 873 367 871 341 b 639 84 839 194 748 101 b 612 83 630 83 620 83 b 511 116 577 83 543 94 b 504 120 509 119 506 120 b 504 120 504 120 504 120 b 469 59 504 120 488 93 l 432 -1 l 469 -61 b 504 -122 488 -94 504 -122 b 504 -122 504 -122 504 -122 b 511 -117 506 -122 509 -120 b 612 -84 543 -95 577 -84 b 665 -91 630 -84 647 -87 b 869 -338 771 -122 850 -216 b 873 -392 872 -356 873 -374 b 798 -595 873 -469 847 -539 b 581 -695 741 -662 660 -695 b 406 -626 517 -695 454 -671 b 381 -563 389 -607 381 -585 b 465 -477 381 -519 413 -477 b 545 -559 514 -477 545 -519 b 503 -628 545 -587 532 -613 b 477 -635 495 -632 488 -634 l 475 -637 l 477 -638 b 581 -663 510 -655 545 -663 b 671 -637 616 -663 649 -653 b 729 -391 711 -603 729 -534 b 728 -317 729 -367 728 -344 b 623 -117 722 -173 698 -124 b 611 -116 619 -116 615 -116 b 449 -308 528 -116 457 -198 b 432 -328 447 -323 443 -328 b 413 -303 421 -328 419 -326 b 314 -80 392 -215 357 -138 b 274 -37 302 -65 284 -45 l 268 -31 l 268 -367 l 268 -705 l 246 -705 l 225 -705 l 225 0 "
                    },
                    vb1: {
                        x_min: 78.9375,
                        x_max: 485.921875,
                        ha: 417,
                        o: "m 362 378 b 378 380 367 380 372 380 b 472 348 415 380 453 367 b 485 315 481 338 485 327 b 462 273 485 298 477 281 b 439 267 454 269 446 267 b 398 290 424 267 409 274 b 344 319 385 309 364 319 b 281 269 315 319 289 301 b 279 262 280 266 279 262 b 276 256 279 260 277 258 b 274 249 276 254 274 251 b 238 127 273 248 257 192 b 201 4 217 61 201 5 b 166 -1 198 -1 200 -1 b 153 -1 163 -1 157 -1 b 141 -1 148 -1 144 -1 b 104 4 106 -1 107 -1 b 104 6 104 5 104 5 b 142 144 104 13 110 34 b 182 278 164 219 181 276 b 183 288 182 281 182 285 b 185 302 185 292 185 298 b 164 330 185 317 176 328 b 159 330 163 330 161 330 b 102 302 140 330 119 320 b 91 294 95 295 93 294 b 88 294 91 294 89 294 b 78 303 83 294 78 298 b 81 312 78 306 78 309 b 200 373 106 347 160 373 b 215 371 205 373 209 371 b 266 335 235 367 254 353 b 269 331 268 333 269 331 b 269 331 269 331 269 331 b 273 335 269 331 270 334 b 362 378 298 359 330 376 "
                    },
                    vb3: {
                        x_min: 0,
                        x_max: 227.3125,
                        ha: 232,
                        o: "m 91 213 b 100 215 93 215 96 215 b 227 58 167 215 224 144 b 227 52 227 56 227 54 b 61 -201 227 -43 164 -138 b 29 -216 44 -212 36 -216 b 23 -210 27 -216 24 -213 b 21 -205 21 -208 21 -206 b 34 -192 21 -201 25 -197 b 122 -55 89 -161 122 -106 b 104 6 122 -33 117 -12 l 103 9 l 96 9 b 4 79 57 9 17 38 b 0 112 1 90 0 101 b 91 213 0 163 36 209 "
                    },
                    vb4: {
                        x_min: -597.53125,
                        x_max: 596.171875,
                        ha: 608,
                        o: "m -533 324 b -525 327 -530 326 -528 327 b -504 305 -514 327 -504 317 b -504 305 -504 305 -504 305 b -513 284 -504 299 -504 299 b -556 112 -541 226 -556 167 b -545 33 -556 84 -552 58 b -524 -20 -541 15 -532 -9 l -522 -23 l -491 15 l -413 111 b -355 174 -367 169 -363 174 b -351 174 -353 174 -352 174 b -254 86 -343 174 -348 179 b -168 -1 -208 37 -168 -1 b -100 84 -168 -1 -137 37 b -23 173 -28 173 -29 172 b -19 174 -21 174 -20 174 b -8 173 -14 174 -10 173 b 80 86 -5 172 13 151 b 166 -1 127 37 166 -1 b 235 84 166 -1 197 37 b 311 173 306 173 304 172 b 317 174 313 174 314 174 b 326 173 319 174 323 173 b 490 11 329 172 366 134 l 502 -1 l 530 34 b 568 76 560 72 563 74 b 575 77 570 77 573 77 b 596 56 586 77 596 68 b 594 48 596 54 596 51 b 417 -172 592 41 424 -166 b 405 -176 415 -174 409 -176 b 396 -174 401 -176 398 -176 b 307 -87 393 -173 372 -152 b 221 -1 259 -38 221 -1 b 152 -86 221 -1 190 -38 b 76 -176 81 -174 83 -173 b 70 -176 74 -176 73 -176 b 61 -174 66 -176 62 -174 b -27 -87 58 -173 38 -152 b -114 -1 -74 -38 -112 -1 b -182 -86 -114 -1 -145 -38 b -258 -176 -253 -174 -253 -173 b -264 -176 -259 -176 -262 -176 b -274 -174 -268 -176 -272 -174 b -438 -11 -277 -173 -348 -102 l -449 0 l -479 -37 b -524 -80 -513 -80 -514 -80 l -524 -80 b -553 -52 -534 -80 -540 -74 b -597 109 -583 -8 -597 48 b -560 280 -597 165 -585 224 b -533 324 -548 310 -540 322 "
                    },
                    vb6: {
                        x_min: 0,
                        x_max: 556.6875,
                        ha: 568,
                        o: "m 289 545 b 298 546 292 545 295 546 b 318 533 306 546 315 541 b 319 428 319 530 319 528 l 319 327 l 334 327 b 526 223 412 326 485 285 b 543 172 537 206 543 190 b 447 76 543 122 503 76 b 445 76 446 76 446 76 b 359 165 394 77 359 119 b 368 205 359 179 362 192 b 441 251 382 233 412 251 b 455 249 446 251 451 251 b 460 248 458 249 460 248 b 460 248 460 248 460 248 b 454 254 460 249 458 251 b 334 295 419 280 378 294 l 319 295 l 319 4 l 319 -287 l 321 -285 b 328 -285 322 -285 325 -285 b 524 -99 424 -277 507 -198 b 541 -79 526 -84 530 -79 b 556 -97 551 -79 556 -84 b 548 -133 556 -105 553 -117 b 334 -317 521 -233 434 -306 b 322 -319 329 -317 323 -317 l 319 -319 l 319 -424 b 319 -471 319 -444 319 -459 b 313 -541 319 -544 318 -535 b 298 -548 308 -545 303 -548 b 279 -534 289 -548 281 -542 b 277 -424 277 -531 277 -530 l 277 -317 l 273 -317 b 13 -95 153 -305 51 -217 b 0 2 4 -62 0 -29 b 182 295 0 126 66 238 b 274 324 210 309 249 320 l 277 324 l 277 427 b 279 533 277 528 277 530 b 289 545 281 538 285 542 m 277 2 b 277 291 277 161 277 291 b 268 288 277 291 273 290 b 144 1 179 265 144 184 b 276 -284 144 -199 175 -267 l 277 -285 l 277 2 "
                    },
                    vb7: {
                        x_min: -176.9375,
                        x_max: 251.8125,
                        ha: 257,
                        o: "m -8 631 b -1 632 -6 632 -4 632 b 19 620 8 632 16 628 b 20 503 20 616 20 614 b 20 391 20 442 20 391 b 84 424 20 391 49 406 l 147 456 l 152 456 b 153 456 153 456 153 456 b 175 435 166 456 175 446 b 172 427 175 433 174 430 b 92 380 170 420 172 421 l 20 342 l 20 245 l 20 148 l 21 151 b 137 199 59 183 99 199 b 182 191 152 199 167 197 b 251 84 227 176 251 134 b 228 0 251 58 243 29 b 100 -142 206 -40 178 -72 l 23 -215 b 0 -229 9 -229 6 -229 b -20 -216 -9 -229 -17 -224 b -21 54 -21 -212 -21 -212 b -21 322 -21 201 -21 322 b -85 290 -21 322 -50 308 l -148 256 l -153 256 b -155 256 -155 256 -155 256 b -176 277 -167 256 -176 266 b -174 285 -176 280 -175 283 b -93 333 -171 294 -174 292 l -21 370 l -21 494 b -20 620 -21 616 -21 616 b -8 631 -17 624 -13 630 m 110 131 b 96 133 106 133 100 133 b 89 133 93 133 91 133 b 24 87 63 129 40 113 l 20 80 l 20 -37 l 20 -156 l 23 -152 b 144 81 96 -72 144 20 l 144 83 b 110 131 144 113 134 126 "
                    },
                    vb9: {
                        x_min: -122.5,
                        x_max: 121.140625,
                        ha: 124,
                        o: "m -16 145 b 0 147 -10 147 -5 147 b 121 -1 66 147 121 77 b 114 -49 121 -16 118 -33 b -1 -148 95 -112 47 -148 b -85 -106 -31 -148 -61 -134 b -122 -1 -110 -76 -122 -38 b -16 145 -122 68 -81 134 m 12 111 b 0 113 8 113 4 113 b -68 22 -29 113 -61 73 b -70 0 -69 15 -70 6 b -13 -113 -70 -49 -47 -98 b -1 -115 -9 -115 -5 -115 b 63 -40 24 -115 53 -83 b 68 -1 66 -27 68 -15 b 12 111 68 48 46 97 "
                    },
                    vba: {
                        x_min: -118.421875,
                        x_max: 597.53125,
                        ha: 381,
                        o: "m 460 574 b 464 574 461 574 462 574 b 488 574 470 574 481 574 b 500 573 491 574 498 574 b 594 503 543 570 588 538 b 597 488 596 498 597 494 b 528 417 597 449 564 417 b 502 423 519 417 510 419 b 465 481 477 434 465 458 b 488 528 465 499 472 516 b 490 530 490 530 490 530 b 490 530 490 530 490 530 b 468 517 488 530 475 523 b 349 340 419 485 377 420 b 347 330 348 334 347 330 b 383 328 347 328 363 328 b 428 326 423 328 424 328 b 442 302 438 320 442 312 b 430 281 442 294 438 285 b 385 276 424 277 426 276 l 377 276 l 332 276 l 330 269 b 178 -117 303 126 250 -9 b 1 -249 129 -194 69 -237 b -20 -251 -6 -251 -13 -251 b -114 -187 -65 -251 -100 -227 b -118 -156 -117 -177 -118 -166 b -51 -84 -118 -116 -91 -84 b -31 -87 -46 -84 -39 -86 b 16 -152 0 -95 16 -124 b -12 -205 16 -173 8 -194 b -16 -208 -14 -206 -16 -208 b -14 -208 -16 -208 -14 -208 b -9 -206 -14 -208 -12 -208 b 74 -124 23 -197 54 -166 b 172 224 98 -79 125 22 b 185 276 178 252 183 274 b 185 276 185 276 185 276 b 141 276 185 276 181 276 b 91 280 96 276 96 276 b 77 302 83 285 77 294 b 91 326 77 312 83 320 b 148 328 95 328 96 328 l 198 330 l 202 341 b 460 574 249 473 351 566 "
                    },
                    vbf: {
                        x_min: -53.078125,
                        x_max: 513.140625,
                        ha: 485,
                        o: "m 185 383 b 196 384 187 383 191 384 b 277 334 230 384 259 365 b 288 301 281 324 288 306 b 288 297 288 298 288 297 b 294 302 289 297 291 299 b 394 370 323 338 367 367 b 404 371 398 370 401 371 b 510 272 453 371 498 328 b 513 237 513 262 513 251 b 507 172 513 217 511 192 b 326 -34 487 59 412 -26 b 314 -36 322 -36 318 -36 b 274 -24 298 -36 283 -31 l 265 -16 b 224 44 246 -1 232 20 b 223 49 224 47 223 49 b 223 49 223 49 223 49 b 149 -197 221 48 149 -194 b 149 -198 149 -197 149 -198 b 170 -210 149 -202 155 -205 b 187 -215 174 -210 175 -212 b 204 -231 201 -219 204 -222 b 197 -245 204 -240 202 -242 l 194 -248 l 76 -248 l -42 -248 l -46 -245 b -53 -231 -51 -242 -53 -240 b -35 -215 -53 -222 -49 -217 b -13 -210 -21 -212 -20 -212 b -6 -208 -10 -209 -8 -208 b 0 -206 -6 -208 -2 -206 b 25 -188 13 -201 21 -195 b 163 280 28 -183 163 276 b 166 291 163 283 164 287 b 167 302 167 295 167 299 b 155 324 167 315 161 324 b 155 324 155 324 155 324 b 65 230 125 322 85 280 b 53 215 61 217 58 215 b 51 215 53 215 51 215 b 42 224 46 215 42 217 b 57 263 42 231 47 244 b 140 360 77 305 104 337 b 152 370 144 365 149 369 b 185 383 157 376 172 381 m 374 306 b 366 308 371 308 368 308 b 300 273 348 308 321 294 b 284 254 288 262 287 259 b 280 242 283 249 281 245 b 257 169 279 240 270 213 l 236 98 l 236 93 b 251 48 238 77 243 61 b 279 27 258 37 272 27 b 281 27 279 27 280 27 b 291 31 281 27 287 30 b 396 170 334 52 378 109 b 406 247 402 197 406 224 b 401 277 406 259 405 270 b 374 306 397 290 383 303 "
                    },
                    vc3: {
                        x_min: -10.890625,
                        x_max: 299.4375,
                        ha: 294,
                        o: "m 136 460 b 142 462 137 462 140 462 b 166 449 152 462 161 456 b 171 428 168 446 168 445 b 288 131 194 322 238 209 b 298 115 295 120 296 117 b 299 106 298 112 299 109 b 273 81 299 91 287 81 b 255 86 268 81 261 83 b 155 116 225 104 183 116 l 152 116 l 149 108 b 141 83 148 102 144 91 b 134 48 137 69 134 58 b 149 9 134 34 140 24 b 153 -1 152 5 153 1 b 149 -9 153 -5 152 -6 b 144 -11 148 -11 147 -11 b 122 2 138 -11 133 -6 b 95 61 104 20 95 38 b 107 108 95 74 99 90 b 108 113 107 111 108 112 b 107 113 108 113 108 113 b 102 113 106 113 104 113 b 31 86 76 108 53 98 b 14 80 24 81 20 80 b -10 106 0 80 -10 91 b 0 131 -10 115 -9 116 b 115 430 49 209 91 317 b 136 460 119 451 123 456 "
                    },
                    vd0: {
                        x_min: -10.890625,
                        x_max: 299.4375,
                        ha: 294,
                        o: "m 44 174 b 51 174 47 174 49 174 b 68 173 55 174 61 174 l 287 112 l 551 40 b 615 20 617 22 609 23 b 626 0 622 16 626 8 b 615 -22 626 -9 622 -18 b 613 -23 613 -23 613 -23 b 613 -23 613 -23 613 -23 b 287 -113 613 -24 597 -29 l 68 -174 b 53 -176 61 -176 57 -176 b 39 -172 47 -176 43 -174 b 27 -151 31 -167 27 -159 b 39 -129 27 -141 31 -133 b 230 -74 43 -124 20 -131 l 370 -36 l 468 -9 b 498 0 484 -4 498 -1 b 468 8 498 0 484 2 l 370 34 l 230 73 b 40 126 28 129 43 124 b 27 149 31 131 27 140 b 44 174 27 161 34 170 m 205 110 l 205 300 b 205 330 245 330 245 300 l 245 300 l 245 -300 b 245 -330 205 -330 205 -300 l 205 -300 l 205 110 l 345 90 m 345 90 l 345 330 b 345 360 385 360 385 330 l 385 330 l 385 -270 b 385 -300 345 -300 345 -270 l 345 -270 l 345 90 "
                    },
                    vd1: {
                        x_min: -20,
                        x_max: 320,
                        ha: 257,
                        o: "m -8 200 b -8 210 8 200 16 200 l 20 148 -199 l 23 -615 b 0 -629 9 -629 6 -629 l -21 -612 l -21 -201 l -21 216 l -20 200 m 16 200 l 310 0 l 240 0 l 16 140 l 16 -120 l 240 0 l 310 0 l 16 -200 "
                    },
                    vd2: {
                        x_min: 0,
                        x_max: 430.75,
                        ha: 386,
                        o: "m 0 200 l 0 -200 l 430 -200 l 430 200 l 0 200 "
                    },
                    vd3: {
                        x_min: 0,
                        x_max: 430.75,
                        ha: 386,
                        o: "m 0 200 l 0 -200 l 430 -200 l 430 200 l 0 200 l 50 150 l 380 150 l 380 -150 l 50 -150 l 50 150 "
                    },
                    vd4: {
                        x_min: 0,
                        x_max: 430.75,
                        ha: 360,
                        o: "m 0 150 l 0 -150 l 430 -150 l 430 150 l 0 150 "
                    },
                    vd5: {
                        x_min: 0,
                        x_max: 430.75,
                        ha: 360,
                        o: "m 0 150 l 0 -150 l 430 -150 l 430 150 l 0 150 l 50 100 l 380 100 l 380 -100 l 50 -100 l 50 100"
                    }
                },
                cssFontWeight: "normal",
                ascender: 1903,
                underlinePosition: -125,
                cssFontStyle: "normal",
                boundingBox: {
                    yMin: -2065.375,
                    xMin: -695.53125,
                    yMax: 1901.578125,
                    xMax: 1159.671875
                },
                resolution: 1e3,
                descender: -2066,
                familyName: "VexFlow-18",
                lineHeight: 4093,
                underlineThickness: 50
            };

        function C(t) {
            return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function N(t, e) {
            return !e || "object" !== C(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function A(t) {
            return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function L(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function M(t, e, n) {
            return e && L(t.prototype, e), n && L(t, n), t
        }

        function F(t, e) {
            return (F = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function B(t, e, n, i, o, r) {
            var s, a, l, u = 0;

            function c() {
                return e + t[u++] * i
            }

            function h() {
                return n + t[u++] * o
            }
            for (; u < t.length;) switch (s = t[u++]) {
                case "m":
                case "l":
                    r[s](c(), h());
                    break;
                case "q":
                    a = c(), l = h(), r.q(c(), h(), a, l);
                    break;
                case "b":
                    a = c(), l = h(), r.b(c(), h(), c(), h(), a, l)
            }
        }
        var j = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = N(this, A(e).call(this))).setAttribute("type", "Glyph"), o.code = t, o.point = n, o.options = {
                    cache: !0,
                    font: P
                }, o.metrics = null, o.x_shift = 0, o.y_shift = 0, o.originShift = {
                    x: 0,
                    y: 0
                }, i ? o.setOptions(i) : o.reset(), o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && F(t, e)
            }(e, k), M(e, null, [{
                key: "loadMetrics",
                value: function (t, e, n) {
                    var i = t.glyphs[e];
                    if (!i) throw new h.RERR("BadGlyph", "Glyph ".concat(e, " does not exist in font."));
                    var o, r = i.x_min,
                        s = i.x_max,
                        a = i.ha;
                    if (i.o) return n ? i.cached_outline ? o = i.cached_outline : (o = i.o.split(" "), i.cached_outline = o) : (i.cached_outline && delete i.cached_outline, o = i.o.split(" ")), {
                        x_min: r,
                        x_max: s,
                        ha: a,
                        outline: o
                    };
                    throw new h.RERR("BadGlyph", "Glyph ".concat(e, " has no outline defined."))
                }
            }, {
                key: "renderGlyph",
                value: function (t, n, i, o, r, s) {
                    var a = 72 * o / (100 * P.resolution),
                        l = e.loadMetrics(P, r, !s);
                    e.renderOutline(t, l.outline, a, n, i)
                }
            }, {
                key: "renderOutline",
                value: function (t, e, n, i, o) {
                    t.beginPath(), t.moveTo(i, o), B(e, i, o, n, -n, {
                        m: t.moveTo.bind(t),
                        l: t.lineTo.bind(t),
                        q: t.quadraticCurveTo.bind(t),
                        b: t.bezierCurveTo.bind(t)
                    }), t.fill()
                }
            }, {
                key: "getOutlineBoundingBox",
                value: function (t, e, n, i) {
                    var o = new T;
                    return B(t, n, i, e, -e, {
                        m: o.addPoint.bind(o),
                        l: o.addPoint.bind(o),
                        q: o.addQuadraticCurve.bind(o),
                        b: o.addBezierCurve.bind(o)
                    }), new R(o.x1, o.y1, o.width(), o.height())
                }
            }]), M(e, [{
                key: "setOptions",
                value: function (t) {
                    h.Merge(this.options, t), this.reset()
                }
            }, {
                key: "setPoint",
                value: function (t) {
                    return this.point = t, this
                }
            }, {
                key: "setStave",
                value: function (t) {
                    return this.stave = t, this
                }
            }, {
                key: "setXShift",
                value: function (t) {
                    return this.x_shift = t, this
                }
            }, {
                key: "setYShift",
                value: function (t) {
                    return this.y_shift = t, this
                }
            }, {
                key: "reset",
                value: function () {
                    this.scale = 72 * this.point / (100 * this.options.font.resolution), this.metrics = e.loadMetrics(this.options.font, this.code, this.options.cache), this.bbox = e.getOutlineBoundingBox(this.metrics.outline, this.scale, 0, 0)
                }
            }, {
                key: "getMetrics",
                value: function () {
                    if (!this.metrics) throw new h.RuntimeError("BadGlyph", "Glyph ".concat(this.code, " is not initialized."));
                    return {
                        x_min: this.metrics.x_min * this.scale,
                        x_max: this.metrics.x_max * this.scale,
                        width: this.bbox.getW(),
                        height: this.bbox.getH()
                    }
                }
            }, {
                key: "setOriginX",
                value: function (t) {
                    var e = this.bbox,
                        n = (t - Math.abs(e.getX() / e.getW())) * e.getW();
                    this.originShift.x = -n
                }
            }, {
                key: "setOriginY",
                value: function (t) {
                    var e = this.bbox,
                        n = (t - Math.abs(e.getY() / e.getH())) * e.getH();
                    this.originShift.y = -n
                }
            }, {
                key: "setOrigin",
                value: function (t, e) {
                    this.setOriginX(t), this.setOriginY(e)
                }
            }, {
                key: "render",
                value: function (t, n, i) {
                    if (!this.metrics) throw new h.RuntimeError("BadGlyph", "Glyph ".concat(this.code, " is not initialized."));
                    var o = this.metrics.outline,
                        r = this.scale;
                    this.setRendered(), this.applyStyle(t), e.renderOutline(t, o, r, n + this.originShift.x, i + this.originShift.y), this.restoreStyle(t)
                }
            }, {
                key: "renderToStave",
                value: function (t) {
                    if (this.checkContext(), !this.metrics) throw new h.RuntimeError("BadGlyph", "Glyph ".concat(this.code, " is not initialized."));
                    if (!this.stave) throw new h.RuntimeError("GlyphError", "No valid stave");
                    var n = this.metrics.outline,
                        i = this.scale;
                    this.setRendered(), this.applyStyle(), e.renderOutline(this.context, n, i, t + this.x_shift, this.stave.getYForGlyphs() + this.y_shift), this.restoreStyle()
                }
            }]), e
        }();

        function D(t) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var I = {
            STEM_WIDTH: 1.5,
            STEM_HEIGHT: 35,
            STAVE_LINE_THICKNESS: 1,
            RESOLUTION: 16384,
            DEFAULT_NOTATION_FONT_SCALE: 39,
            DEFAULT_TABLATURE_FONT_SCALE: 39,
            SLASH_NOTEHEAD_WIDTH: 15,
            TEXT_HEIGHT_OFFSET_HACK: 1,
            IsKerned: !0
        };

        function G(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Y(t, e, n) {
            return e && G(t.prototype, e), n && G(t, n), t
        }
        I.clefProperties = function (t) {
            if (!t) throw new h.RERR("BadArgument", "Invalid clef: " + t);
            var e = I.clefProperties.values[t];
            if (!e) throw new h.RERR("BadArgument", "Invalid clef: " + t);
            return e
        }, I.clefProperties.values = {
            treble: {
                line_shift: 0
            },
            bass: {
                line_shift: 6
            },
            tenor: {
                line_shift: 4
            },
            alto: {
                line_shift: 3
            },
            soprano: {
                line_shift: 1
            },
            percussion: {
                line_shift: 0
            },
            "mezzo-soprano": {
                line_shift: 2
            },
            "baritone-c": {
                line_shift: 5
            },
            "baritone-f": {
                line_shift: 5
            },
            subbass: {
                line_shift: 7
            },
            french: {
                line_shift: -1
            }
        }, I.keyProperties = function (t, e, n) {
            void 0 === e && (e = "treble");
            var i = {
                octave_shift: 0
            };
            "object" === D(n) && h.Merge(i, n);
            var o = t.split("/");
            if (o.length < 2) throw new h.RERR("BadArguments", "Key must have note + octave and an optional glyph: ".concat(t));
            var r = o[0].toUpperCase(),
                s = I.keyProperties.note_values[r];
            if (!s) throw new h.RERR("BadArguments", "Invalid key name: " + r);
            s.octave && (o[1] = s.octave);
            var a = parseInt(o[1], 10),
                l = (7 * (a += -1 * i.octave_shift) - 28 + s.index) / 2,
                u = 0;
            (l += I.clefProperties(e).line_shift) <= 0 && 2 * l % 2 == 0 && (u = 1), l >= 6 && 2 * l % 2 == 0 && (u = -1);
            var c = void 0 !== s.int_val ? 12 * a + s.int_val : null,
                f = s.code,
                b = s.shift_right;
            if (o.length > 2 && o[2]) {
                var p = o[2].toUpperCase(),
                    y = I.keyProperties.note_glyph[p];
                y && (f = y.code, b = y.shift_right)
            }
            return {
                key: r,
                octave: a,
                line: l,
                int_value: c,
                accidental: s.accidental,
                code: f,
                stroke: u,
                shift_right: b,
                displaced: !1
            }
        }, I.keyProperties.note_values = {
            C: {
                index: 0,
                int_val: 0,
                accidental: null
            },
            CN: {
                index: 0,
                int_val: 0,
                accidental: "n"
            },
            "C#": {
                index: 0,
                int_val: 1,
                accidental: "#"
            },
            "C##": {
                index: 0,
                int_val: 2,
                accidental: "##"
            },
            CB: {
                index: 0,
                int_val: -1,
                accidental: "b"
            },
            CBB: {
                index: 0,
                int_val: -2,
                accidental: "bb"
            },
            D: {
                index: 1,
                int_val: 2,
                accidental: null
            },
            DN: {
                index: 1,
                int_val: 2,
                accidental: "n"
            },
            "D#": {
                index: 1,
                int_val: 3,
                accidental: "#"
            },
            "D##": {
                index: 1,
                int_val: 4,
                accidental: "##"
            },
            DB: {
                index: 1,
                int_val: 1,
                accidental: "b"
            },
            DBB: {
                index: 1,
                int_val: 0,
                accidental: "bb"
            },
            E: {
                index: 2,
                int_val: 4,
                accidental: null
            },
            EN: {
                index: 2,
                int_val: 4,
                accidental: "n"
            },
            "E#": {
                index: 2,
                int_val: 5,
                accidental: "#"
            },
            "E##": {
                index: 2,
                int_val: 6,
                accidental: "##"
            },
            EB: {
                index: 2,
                int_val: 3,
                accidental: "b"
            },
            EBB: {
                index: 2,
                int_val: 2,
                accidental: "bb"
            },
            F: {
                index: 3,
                int_val: 5,
                accidental: null
            },
            FN: {
                index: 3,
                int_val: 5,
                accidental: "n"
            },
            "F#": {
                index: 3,
                int_val: 6,
                accidental: "#"
            },
            "F##": {
                index: 3,
                int_val: 7,
                accidental: "##"
            },
            FB: {
                index: 3,
                int_val: 4,
                accidental: "b"
            },
            FBB: {
                index: 3,
                int_val: 3,
                accidental: "bb"
            },
            G: {
                index: 4,
                int_val: 7,
                accidental: null
            },
            GN: {
                index: 4,
                int_val: 7,
                accidental: "n"
            },
            "G#": {
                index: 4,
                int_val: 8,
                accidental: "#"
            },
            "G##": {
                index: 4,
                int_val: 9,
                accidental: "##"
            },
            GB: {
                index: 4,
                int_val: 6,
                accidental: "b"
            },
            GBB: {
                index: 4,
                int_val: 5,
                accidental: "bb"
            },
            A: {
                index: 5,
                int_val: 9,
                accidental: null
            },
            AN: {
                index: 5,
                int_val: 9,
                accidental: "n"
            },
            "A#": {
                index: 5,
                int_val: 10,
                accidental: "#"
            },
            "A##": {
                index: 5,
                int_val: 11,
                accidental: "##"
            },
            AB: {
                index: 5,
                int_val: 8,
                accidental: "b"
            },
            ABB: {
                index: 5,
                int_val: 7,
                accidental: "bb"
            },
            B: {
                index: 6,
                int_val: 11,
                accidental: null
            },
            BN: {
                index: 6,
                int_val: 11,
                accidental: "n"
            },
            "B#": {
                index: 6,
                int_val: 12,
                accidental: "#"
            },
            "B##": {
                index: 6,
                int_val: 13,
                accidental: "##"
            },
            BB: {
                index: 6,
                int_val: 10,
                accidental: "b"
            },
            BBB: {
                index: 6,
                int_val: 9,
                accidental: "bb"
            },
            R: {
                index: 6,
                int_val: 9,
                rest: !0
            },
            X: {
                index: 6,
                accidental: "",
                octave: 4,
                code: "v3e",
                shift_right: 5.5
            }
        }, I.keyProperties.note_glyph = {
            D0: {
                code: "v27",
                shift_right: -.5
            },
            D1: {
                code: "v2d",
                shift_right: -.5
            },
            D2: {
                code: "v22",
                shift_right: -.5
            },
            D3: {
                code: "v70",
                shift_right: -.5
            },
            T0: {
                code: "v49",
                shift_right: -2,
                stem_up_y_offset: -4,
                stem_down_y_offset: 4
            },
            T1: {
                code: "v93",
                shift_right: .5,
                stem_up_y_offset: -4,
                stem_down_y_offset: 4
            },
            T2: {
                code: "v40",
                shift_right: .5,
                stem_up_y_offset: -4,
                stem_down_y_offset: 4
            },
            T3: {
                code: "v7d",
                shift_right: .5,
                stem_up_y_offset: -4,
                stem_down_y_offset: 4
            },
            X0: {
                code: "v92",
                shift_right: -2,
                stem_up_y_offset: 4,
                stem_down_y_offset: 4
            },
            X1: {
                code: "v95",
                shift_right: -.5,
                stem_up_y_offset: 4,
                stem_down_y_offset: 4
            },
            X2: {
                code: "v3e",
                shift_right: .5,
                stem_up_y_offset: 4,
                stem_down_y_offset: 4
            },
            X3: {
                code: "v3b",
                shift_right: -2,
                stem_up_y_offset: 2,
                stem_down_y_offset: 2
            },
            S1: {
                code: "vd3",
                shift_right: 0
            },
            S2: {
                code: "vd2",
                shift_right: 0
            },
            R1: {
                code: "vd5",
                shift_right: 0
            },
            R2: {
                code: "vd4",
                shift_right: 0
            }
        }, I.integerToNote = function (t) {
            if (void 0 === t) throw new h.RERR("BadArguments", "Undefined integer for integerToNote");
            if (t < -2) throw new h.RERR("BadArguments", "integerToNote requires integer > -2: ".concat(t));
            var e = I.integerToNote.table[t];
            if (!e) throw new h.RERR("BadArguments", "Unknown note value for integer: ".concat(t));
            return e
        }, I.integerToNote.table = {
            0: "C",
            1: "C#",
            2: "D",
            3: "D#",
            4: "E",
            5: "F",
            6: "F#",
            7: "G",
            8: "G#",
            9: "A",
            10: "A#",
            11: "B"
        }, I.tabToGlyph = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                n = null,
                i = 0,
                o = 0;
            if ("X" === t.toString().toUpperCase()) {
                var r = new j("v7f", I.DEFAULT_TABLATURE_FONT_SCALE).getMetrics();
                n = "v7f", i = r.width, o = -r.height / 2
            } else i = I.textWidth(t.toString());
            return {
                text: t,
                code: n,
                getWidth: function () {
                    return i * e
                },
                shift_y: o
            }
        }, I.textWidth = function (t) {
            return 7 * t.toString().length
        }, I.articulationCodes = function (t) {
            return I.articulationCodes.articulations[t]
        }, I.articulationCodes.articulations = {
            "a.": {
                code: "v23",
                between_lines: !0
            },
            av: {
                code: "v28",
                between_lines: !0
            },
            "a>": {
                code: "v42",
                between_lines: !0
            },
            "a-": {
                code: "v25",
                between_lines: !0
            },
            "a^": {
                code: "va",
                between_lines: !1
            },
            "a+": {
                code: "v8b",
                between_lines: !1
            },
            ao: {
                code: "v94",
                between_lines: !1
            },
            ah: {
                code: "vb9",
                between_lines: !1
            },
            "a@a": {
                code: "v43",
                between_lines: !1
            },
            "a@u": {
                code: "v5b",
                between_lines: !1
            },
            "a|": {
                code: "v75",
                between_lines: !1
            },
            am: {
                code: "v97",
                between_lines: !1
            },
            "a,": {
                code: "vb3",
                between_lines: !1
            }
        }, I.accidentalCodes = function (t) {
            return I.accidentalCodes.accidentals[t]
        }, I.accidentalCodes.accidentals = {
            "#": {
                code: "v18",
                parenRightPaddingAdjustment: -1
            },
            "##": {
                code: "v7f",
                parenRightPaddingAdjustment: -1
            },
            b: {
                code: "v44",
                parenRightPaddingAdjustment: -2
            },
            bb: {
                code: "v26",
                parenRightPaddingAdjustment: -2
            },
            n: {
                code: "v4e",
                parenRightPaddingAdjustment: -1
            },
            "{": {
                code: "v9c",
                parenRightPaddingAdjustment: -1
            },
            "}": {
                code: "v84",
                parenRightPaddingAdjustment: -1
            },
            db: {
                code: "v9e",
                parenRightPaddingAdjustment: -1
            },
            d: {
                code: "vab",
                parenRightPaddingAdjustment: 0
            },
            bbs: {
                code: "v90",
                parenRightPaddingAdjustment: -1
            },
            "++": {
                code: "v51",
                parenRightPaddingAdjustment: -1
            },
            "+": {
                code: "v78",
                parenRightPaddingAdjustment: -1
            },
            "+-": {
                code: "v8d",
                parenRightPaddingAdjustment: -1
            },
            "++-": {
                code: "v7a",
                parenRightPaddingAdjustment: -1
            },
            bs: {
                code: "vb7",
                parenRightPaddingAdjustment: -1
            },
            bss: {
                code: "v39",
                parenRightPaddingAdjustment: -1
            },
            o: {
                code: "vd0",
                parenRightPaddingAdjustment: -1
            },
            k: {
                code: "vd1",
                parenRightPaddingAdjustment: -1
            }
        }, I.accidentalColumnsTable = {
            1: {
                a: [1],
                b: [1]
            },
            2: {
                a: [1, 2]
            },
            3: {
                a: [1, 3, 2],
                b: [1, 2, 1],
                second_on_bottom: [1, 2, 3]
            },
            4: {
                a: [1, 3, 4, 2],
                b: [1, 2, 3, 1],
                spaced_out_tetrachord: [1, 2, 1, 2]
            },
            5: {
                a: [1, 3, 5, 4, 2],
                b: [1, 2, 4, 3, 1],
                spaced_out_pentachord: [1, 2, 3, 2, 1],
                very_spaced_out_pentachord: [1, 2, 1, 2, 1]
            },
            6: {
                a: [1, 3, 5, 6, 4, 2],
                b: [1, 2, 4, 5, 3, 1],
                spaced_out_hexachord: [1, 3, 2, 1, 3, 2],
                very_spaced_out_hexachord: [1, 2, 1, 2, 1, 2]
            }
        }, I.ornamentCodes = function (t) {
            return I.ornamentCodes.ornaments[t]
        }, I.ornamentCodes.ornaments = {
            mordent: {
                code: "v1e"
            },
            mordent_inverted: {
                code: "v45"
            },
            turn: {
                code: "v72"
            },
            turn_inverted: {
                code: "v33"
            },
            tr: {
                code: "v1f"
            },
            upprall: {
                code: "v60"
            },
            downprall: {
                code: "vb4"
            },
            prallup: {
                code: "v6d"
            },
            pralldown: {
                code: "v2c"
            },
            upmordent: {
                code: "v29"
            },
            downmordent: {
                code: "v68"
            },
            lineprall: {
                code: "v20"
            },
            prallprall: {
                code: "v86"
            }
        }, I.keySignature = function (t) {
            var e = I.keySignature.keySpecs[t];
            if (!e) throw new h.RERR("BadKeySignature", "Bad key signature spec: '".concat(t, "'"));
            if (!e.acc) return [];
            for (var n = I.keySignature.accidentalList(e.acc), i = [], o = 0; o < e.num; ++o) {
                var r = n[o];
                i.push({
                    type: e.acc,
                    line: r
                })
            }
            return i
        }, I.keySignature.keySpecs = {
            C: {
                acc: null,
                num: 0
            },
            Am: {
                acc: null,
                num: 0
            },
            F: {
                acc: "b",
                num: 1
            },
            Dm: {
                acc: "b",
                num: 1
            },
            Bb: {
                acc: "b",
                num: 2
            },
            Gm: {
                acc: "b",
                num: 2
            },
            Eb: {
                acc: "b",
                num: 3
            },
            Cm: {
                acc: "b",
                num: 3
            },
            Ab: {
                acc: "b",
                num: 4
            },
            Fm: {
                acc: "b",
                num: 4
            },
            Db: {
                acc: "b",
                num: 5
            },
            Bbm: {
                acc: "b",
                num: 5
            },
            Gb: {
                acc: "b",
                num: 6
            },
            Ebm: {
                acc: "b",
                num: 6
            },
            Cb: {
                acc: "b",
                num: 7
            },
            Abm: {
                acc: "b",
                num: 7
            },
            G: {
                acc: "#",
                num: 1
            },
            Em: {
                acc: "#",
                num: 1
            },
            D: {
                acc: "#",
                num: 2
            },
            Bm: {
                acc: "#",
                num: 2
            },
            A: {
                acc: "#",
                num: 3
            },
            "F#m": {
                acc: "#",
                num: 3
            },
            E: {
                acc: "#",
                num: 4
            },
            "C#m": {
                acc: "#",
                num: 4
            },
            B: {
                acc: "#",
                num: 5
            },
            "G#m": {
                acc: "#",
                num: 5
            },
            "F#": {
                acc: "#",
                num: 6
            },
            "D#m": {
                acc: "#",
                num: 6
            },
            "C#": {
                acc: "#",
                num: 7
            },
            "A#m": {
                acc: "#",
                num: 7
            }
        }, I.unicode = {
            sharp: String.fromCharCode(parseInt("266F", 16)),
            flat: String.fromCharCode(parseInt("266D", 16)),
            natural: String.fromCharCode(parseInt("266E", 16)),
            triangle: String.fromCharCode(parseInt("25B3", 16)),
            "o-with-slash": String.fromCharCode(parseInt("00F8", 16)),
            degrees: String.fromCharCode(parseInt("00B0", 16)),
            circle: String.fromCharCode(parseInt("25CB", 16))
        }, I.keySignature.accidentalList = function (t) {
            return {
                b: [2, .5, 2.5, 1, 3, 1.5, 3.5],
                "#": [0, 1.5, -.5, 1, 2.5, .5, 2]
            } [t]
        }, I.parseNoteDurationString = function (t) {
            if ("string" != typeof t) return null;
            var e = /(\d*\/?\d+|[a-z])(d*)([nrhms]|$)/.exec(t);
            if (!e) return null;
            var n = e[1],
                i = e[2].length,
                o = e[3];
            return 0 === o.length && (o = "n"), {
                duration: n,
                dots: i,
                type: o
            }
        }, I.parseNoteData = function (t) {
            var e = t.duration,
                n = I.parseNoteDurationString(e);
            if (!n) return null;
            var i = I.durationToTicks(n.duration);
            if (null == i) return null;
            var o = t.type;
            if (o) {
                if ("n" !== o && "r" !== o && "h" !== o && "m" !== o && "s" !== o) return null
            } else {
                if (o = n.type, void 0 !== t.keys) {
                    var r = t.keys[0].split("/");
                    r && 3 === r.length && (o = r[2])
                }
                o || (o = "n")
            }
            var s = t.dots ? t.dots : n.dots;
            if ("number" != typeof s) return null;
            for (var a = i, l = 0; l < s; l++) {
                if (a <= 1) return null;
                i += a /= 2
            }
            return {
                duration: n.duration,
                type: o,
                dots: s,
                ticks: i
            }
        }, I.sanitizeDuration = function (t) {
            var e = I.durationAliases[t];
            if (void 0 !== e && (t = e), void 0 === I.durationToTicks.durations[t]) throw new h.RERR("BadArguments", "The provided duration is not valid: ".concat(t));
            return t
        }, I.durationToFraction = function (t) {
            return (new y).parse(I.sanitizeDuration(t))
        }, I.durationToNumber = function (t) {
            return I.durationToFraction(t).value()
        }, I.durationToTicks = function (t) {
            t = I.sanitizeDuration(t);
            var e = I.durationToTicks.durations[t];
            return void 0 === e ? null : e
        }, I.durationToTicks.durations = {
            "1/2": 2 * I.RESOLUTION,
            1: I.RESOLUTION / 1,
            2: I.RESOLUTION / 2,
            4: I.RESOLUTION / 4,
            8: I.RESOLUTION / 8,
            16: I.RESOLUTION / 16,
            32: I.RESOLUTION / 32,
            64: I.RESOLUTION / 64,
            128: I.RESOLUTION / 128,
            256: I.RESOLUTION / 256
        }, I.durationAliases = {
            w: "1",
            h: "2",
            q: "4",
            b: "256"
        }, I.durationToGlyph = function (t, e) {
            t = I.sanitizeDuration(t);
            var n = I.durationToGlyph.duration_codes[t];
            if (void 0 === n) return null;
            e || (e = "n");
            var i = n.type[e];
            if (void 0 === i) {
                var o = I.keyProperties.note_glyph[e.toUpperCase()];
                if (void 0 === o) return null;
                i = {
                    code_head: o.code,
                    stem_up_y_offset: o.stem_up_y_offset,
                    stem_down_y_offset: o.stem_down_y_offset
                }
            }
            return h.Merge(h.Merge({}, n.common), i)
        }, I.durationToGlyph.duration_codes = {
            "1/2": {
                common: {
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "v53", t).getMetrics().width
                    },
                    stem: !1,
                    stem_offset: 0,
                    flag: !1,
                    stem_up_extension: -I.STEM_HEIGHT,
                    stem_down_extension: -I.STEM_HEIGHT,
                    tabnote_stem_up_extension: -I.STEM_HEIGHT,
                    tabnote_stem_down_extension: -I.STEM_HEIGHT,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "v53"
                    },
                    h: {
                        code_head: "v59"
                    },
                    m: {
                        code_head: "vf",
                        stem_offset: 0
                    },
                    r: {
                        code_head: "v31",
                        rest: !0,
                        position: "B/5",
                        dot_shiftY: .5
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            1: {
                common: {
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "v1d", t).getMetrics().width
                    },
                    stem: !1,
                    stem_offset: 0,
                    flag: !1,
                    stem_up_extension: -I.STEM_HEIGHT,
                    stem_down_extension: -I.STEM_HEIGHT,
                    tabnote_stem_up_extension: -I.STEM_HEIGHT,
                    tabnote_stem_down_extension: -I.STEM_HEIGHT,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "v1d"
                    },
                    h: {
                        code_head: "v46"
                    },
                    m: {
                        code_head: "v92",
                        stem_offset: -3
                    },
                    r: {
                        code_head: "v5c",
                        rest: !0,
                        position: "D/5",
                        dot_shiftY: .5
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            2: {
                common: {
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "v81", t).getMetrics().width
                    },
                    stem: !0,
                    stem_offset: 0,
                    flag: !1,
                    stem_up_extension: 0,
                    stem_down_extension: 0,
                    tabnote_stem_up_extension: 0,
                    tabnote_stem_down_extension: 0,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "v81"
                    },
                    h: {
                        code_head: "v2d"
                    },
                    m: {
                        code_head: "v95",
                        stem_offset: -3
                    },
                    r: {
                        code_head: "vc",
                        stem: !1,
                        rest: !0,
                        position: "B/4",
                        dot_shiftY: -.5
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            4: {
                common: {
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "vb", t).getMetrics().width
                    },
                    stem: !0,
                    stem_offset: 0,
                    flag: !1,
                    stem_up_extension: 0,
                    stem_down_extension: 0,
                    tabnote_stem_up_extension: 0,
                    tabnote_stem_down_extension: 0,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "vb"
                    },
                    h: {
                        code_head: "v22"
                    },
                    m: {
                        code_head: "v3e",
                        stem_offset: -3
                    },
                    r: {
                        code_head: "v7c",
                        stem: !1,
                        rest: !0,
                        position: "B/4",
                        dot_shiftY: -.5,
                        line_above: 1.5,
                        line_below: 1.5
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            8: {
                common: {
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "vb", t).getMetrics().width
                    },
                    stem: !0,
                    stem_offset: 0,
                    flag: !0,
                    beam_count: 1,
                    code_flag_upstem: "v54",
                    code_flag_downstem: "v9a",
                    stem_up_extension: 0,
                    stem_down_extension: 0,
                    tabnote_stem_up_extension: 0,
                    tabnote_stem_down_extension: 0,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "vb"
                    },
                    h: {
                        code_head: "v22"
                    },
                    m: {
                        code_head: "v3e"
                    },
                    r: {
                        code_head: "va5",
                        stem: !1,
                        flag: !1,
                        rest: !0,
                        position: "B/4",
                        dot_shiftY: -.5,
                        line_above: 1,
                        line_below: 1
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            16: {
                common: {
                    beam_count: 2,
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "vb", t).getMetrics().width
                    },
                    stem: !0,
                    stem_offset: 0,
                    flag: !0,
                    code_flag_upstem: "v3f",
                    code_flag_downstem: "v8f",
                    stem_up_extension: 0,
                    stem_down_extension: 0,
                    tabnote_stem_up_extension: 0,
                    tabnote_stem_down_extension: 0,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "vb"
                    },
                    h: {
                        code_head: "v22"
                    },
                    m: {
                        code_head: "v3e"
                    },
                    r: {
                        code_head: "v3c",
                        stem: !1,
                        flag: !1,
                        rest: !0,
                        position: "B/4",
                        dot_shiftY: -.5,
                        line_above: 1,
                        line_below: 2
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            32: {
                common: {
                    beam_count: 3,
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "vb", t).getMetrics().width
                    },
                    stem: !0,
                    stem_offset: 0,
                    flag: !0,
                    code_flag_upstem: "v47",
                    code_flag_downstem: "v2a",
                    stem_up_extension: 9,
                    stem_down_extension: 9,
                    tabnote_stem_up_extension: 8,
                    tabnote_stem_down_extension: 5,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "vb"
                    },
                    h: {
                        code_head: "v22"
                    },
                    m: {
                        code_head: "v3e"
                    },
                    r: {
                        code_head: "v55",
                        stem: !1,
                        flag: !1,
                        rest: !0,
                        position: "B/4",
                        dot_shiftY: -1.5,
                        line_above: 2,
                        line_below: 2
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            64: {
                common: {
                    beam_count: 4,
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "vb", t).getMetrics().width
                    },
                    stem: !0,
                    stem_offset: 0,
                    flag: !0,
                    code_flag_upstem: "va9",
                    code_flag_downstem: "v58",
                    stem_up_extension: 13,
                    stem_down_extension: 13,
                    tabnote_stem_up_extension: 12,
                    tabnote_stem_down_extension: 9,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "vb"
                    },
                    h: {
                        code_head: "v22"
                    },
                    m: {
                        code_head: "v3e"
                    },
                    r: {
                        code_head: "v38",
                        stem: !1,
                        flag: !1,
                        rest: !0,
                        position: "B/4",
                        dot_shiftY: -1.5,
                        line_above: 2,
                        line_below: 3
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            },
            128: {
                common: {
                    beam_count: 5,
                    getWidth: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.DEFAULT_NOTATION_FONT_SCALE;
                        return new j(this.code_head || "vb", t).getMetrics().width
                    },
                    stem: !0,
                    stem_offset: 0,
                    flag: !0,
                    code_flag_upstem: "v9b",
                    code_flag_downstem: "v30",
                    stem_up_extension: 22,
                    stem_down_extension: 22,
                    tabnote_stem_up_extension: 21,
                    tabnote_stem_down_extension: 18,
                    dot_shiftY: 0,
                    line_above: 0,
                    line_below: 0
                },
                type: {
                    n: {
                        code_head: "vb"
                    },
                    h: {
                        code_head: "v22"
                    },
                    m: {
                        code_head: "v3e"
                    },
                    r: {
                        code_head: "vaa",
                        stem: !1,
                        flag: !1,
                        rest: !0,
                        position: "B/4",
                        dot_shiftY: 1.5,
                        line_above: 3,
                        line_below: 3
                    },
                    s: {
                        getWidth: function () {
                            return I.SLASH_NOTEHEAD_WIDTH
                        },
                        position: "B/4"
                    }
                }
            }
        }, I.smufl = {}, I.smufl.to_code_points = {
            bracketTop: "v1b",
            bracketBottom: "v10",
            barlineTick: "v6f",
            segno: "v8c",
            coda: "v4d",
            gClef: "v83",
            cClef: "vad",
            fClef: "v79",
            unpitchedPercussionClef1: "v59",
            "6stringTabClef": "v2f",
            timeSig0: "v0",
            timeSig1: "v1",
            timeSig2: "v2",
            timeSig3: "v3",
            timeSig4: "v4",
            timeSig5: "v5",
            timeSig6: "v6",
            timeSig7: "v7",
            timeSig8: "v8",
            timeSig9: "v9",
            timeSigCommon: "v41",
            timeSigCutCommon: "vb6",
            noteheadDoubleWhole: "v53",
            noteheadWhole: "v1d",
            noteheadHalf: "v81",
            noteheadBlack: "vb",
            noteheadXWhole: "v92",
            noteheadXHalf: "v95",
            noteheadXBlack: "v3e",
            noteheadCircleX: "v3b",
            noteheadTriangleUpWhole: "v49",
            noteheadTriangleUpHalf: "v93",
            noteheadTriangleUpBlack: "v40",
            noteheadDiamondWhole: "v46",
            noteheadDiamondHalf: "v2d",
            noteheadDiamondBlack: "v22",
            augmentationDot: "v23",
            tremolo1: "v74",
            flag8thUp: "v54",
            flag8thDown: "v9a",
            flag16thUp: "v3f",
            flag16thDown: "v8f",
            flag32ndUp: "v47",
            flag32ndDown: "v2a",
            flag64thUp: "va9",
            flag64thDown: "v58",
            flag128thUp: "v9b",
            flag128thDown: "v30",
            accidentalFlat: "v44",
            accidentalNatural: "v4e",
            accidentalSharp: "v18",
            accidentalDoubleSharp: "v7f",
            accidentalDoubleFlat: "v26",
            accidentalParensLeft: "v9c",
            accidentalParensRight: "v84",
            accidentalQuarterToneFlatStein: "vab",
            accidentalThreeQuarterTonesFlatZimmermann: "v9e",
            accidentalQuarterToneSharpStein: "v78",
            accidentalThreeQuarterTonesSharpStein: "v51",
            accidentalBuyukMucennebFlat: "v39",
            accidentalBakiyeFlat: "vb7",
            accidentalKomaSharp: "v51",
            accidentalKucukMucennebSharp: "v8d",
            accidentalKoron: "vd1",
            accidentalSori: "vd0",
            articAccentAbove: "v42",
            articAccentBelow: "v42",
            articTenutoAbove: "v25",
            articTenutoBelow: "v25",
            articStaccatoAbove: "v23",
            articStaccatoBelow: "v23",
            articStaccatissimoAbove: "v28",
            articMarcatoAbove: "va",
            fermataAbove: "v43",
            fermataBelow: "v5b",
            breathMarkComma: "v6c",
            breathMarkUpbow: "v8a",
            caesura: "v34",
            caesuraCurved: "v4b",
            restMaxima: "v59",
            restDoubleWhole: "v31",
            restWhole: "v5c",
            restHalf: "vc",
            restQuarter: "v7c",
            rest8th: "va5",
            rest16th: "v3c",
            rest32nd: "v55",
            rest64th: "v38",
            rest128th: "vaa",
            dynamicPiano: "vbf",
            dynamicMezzo: "v62",
            dynamicForte: "vba",
            dynamicRinforzando: "vba",
            dynamicSforzando: "v4a",
            dynamicZ: "v80",
            ornamentTrill: "v1f",
            ornamentTurn: "v72",
            ornamentTurnSlash: "v33",
            ornamentMordent: "v45",
            ornamentMordentInverted: "v1e",
            ornamentTremblement: "v86",
            ornamentPrecompAppoggTrill: "v20",
            ornamentPrecompSlideTrillDAnglebert: "v60",
            ornamentPrecompSlideTrillBach: "v29",
            ornamentPrecompTrillSuffixDandrieu: "v6d",
            ornamentPrecompDoubleCadenceUpperPrefix: "vb4",
            ornamentPrecompDoubleCadenceUpperPrefixTurn: "v68",
            ornamentPrecompTrillLowerSuffix: "v2c",
            stringsDownBow: "v94",
            stringsUpBow: "v75",
            stringsHarmonic: "vb9",
            pluckedSnapPizzicatoAbove: "v94",
            pluckedLeftHandPizzicato: "v8b",
            keyboardPedalPed: "v36",
            keyboardPedalUp: "v5d",
            pictChokeCymbal: "vb3",
            wiggleArpeggiatoUp: "va3",
            arrowheadBlackUp: "vc3",
            arrowheadBlackDown: "v52"
        }, I.TIME4_4 = {
            num_beats: 4,
            beat_value: 4,
            resolution: I.RESOLUTION
        };
        var W = function () {
            function t(e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.vexFlowCanvasContext = e, e.canvas ? this.canvas = e.canvas : this.canvas = {
                    width: t.WIDTH,
                    height: t.HEIGHT
                }
            }
            return Y(t, null, [{
                key: "WIDTH",
                get: function () {
                    return 600
                }
            }, {
                key: "HEIGHT",
                get: function () {
                    return 400
                }
            }]), Y(t, [{
                key: "clear",
                value: function () {
                    this.vexFlowCanvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
            }, {
                key: "openGroup",
                value: function () {}
            }, {
                key: "closeGroup",
                value: function () {}
            }, {
                key: "add",
                value: function () {}
            }, {
                key: "setFont",
                value: function (t, e, n) {
                    return this.vexFlowCanvasContext.font = (n || "") + " " + e + "pt " + t, this
                }
            }, {
                key: "setRawFont",
                value: function (t) {
                    return this.vexFlowCanvasContext.font = t, this
                }
            }, {
                key: "setFillStyle",
                value: function (t) {
                    return this.vexFlowCanvasContext.fillStyle = t, this
                }
            }, {
                key: "setBackgroundFillStyle",
                value: function (t) {
                    return this.background_fillStyle = t, this
                }
            }, {
                key: "setStrokeStyle",
                value: function (t) {
                    return this.vexFlowCanvasContext.strokeStyle = t, this
                }
            }, {
                key: "setShadowColor",
                value: function (t) {
                    return this.vexFlowCanvasContext.shadowColor = t, this
                }
            }, {
                key: "setShadowBlur",
                value: function (t) {
                    return this.vexFlowCanvasContext.shadowBlur = t, this
                }
            }, {
                key: "setLineWidth",
                value: function (t) {
                    return this.vexFlowCanvasContext.lineWidth = t, this
                }
            }, {
                key: "setLineCap",
                value: function (t) {
                    return this.vexFlowCanvasContext.lineCap = t, this
                }
            }, {
                key: "setLineDash",
                value: function (t) {
                    return this.vexFlowCanvasContext.lineDash = t, this
                }
            }, {
                key: "scale",
                value: function (t, e) {
                    return this.vexFlowCanvasContext.scale(parseFloat(t), parseFloat(e))
                }
            }, {
                key: "resize",
                value: function (t, e) {
                    return this.vexFlowCanvasContext.resize(parseInt(t, 10), parseInt(e, 10))
                }
            }, {
                key: "rect",
                value: function (t, e, n, i) {
                    return this.vexFlowCanvasContext.rect(t, e, n, i)
                }
            }, {
                key: "fillRect",
                value: function (t, e, n, i) {
                    return this.vexFlowCanvasContext.fillRect(t, e, n, i)
                }
            }, {
                key: "clearRect",
                value: function (t, e, n, i) {
                    return this.vexFlowCanvasContext.clearRect(t, e, n, i)
                }
            }, {
                key: "beginPath",
                value: function () {
                    return this.vexFlowCanvasContext.beginPath()
                }
            }, {
                key: "moveTo",
                value: function (t, e) {
                    return this.vexFlowCanvasContext.moveTo(t, e)
                }
            }, {
                key: "lineTo",
                value: function (t, e) {
                    return this.vexFlowCanvasContext.lineTo(t, e)
                }
            }, {
                key: "bezierCurveTo",
                value: function (t, e, n, i, o, r) {
                    return this.vexFlowCanvasContext.bezierCurveTo(t, e, n, i, o, r)
                }
            }, {
                key: "quadraticCurveTo",
                value: function (t, e, n, i) {
                    return this.vexFlowCanvasContext.quadraticCurveTo(t, e, n, i)
                }
            }, {
                key: "arc",
                value: function (t, e, n, i, o, r) {
                    return this.vexFlowCanvasContext.arc(t, e, n, i, o, r)
                }
            }, {
                key: "glow",
                value: function () {
                    return this.vexFlowCanvasContext.glow()
                }
            }, {
                key: "fill",
                value: function () {
                    return this.vexFlowCanvasContext.fill()
                }
            }, {
                key: "stroke",
                value: function () {
                    return this.vexFlowCanvasContext.stroke()
                }
            }, {
                key: "closePath",
                value: function () {
                    return this.vexFlowCanvasContext.closePath()
                }
            }, {
                key: "measureText",
                value: function (t) {
                    return this.vexFlowCanvasContext.measureText(t)
                }
            }, {
                key: "fillText",
                value: function (t, e, n) {
                    return this.vexFlowCanvasContext.fillText(t, e, n)
                }
            }, {
                key: "save",
                value: function () {
                    return this.vexFlowCanvasContext.save()
                }
            }, {
                key: "restore",
                value: function () {
                    return this.vexFlowCanvasContext.restore()
                }
            }]), t
        }();

        function H(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var X = function () {
            function t(e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.paper = Raphael(e), this.path = "", this.pen = {
                    x: 0,
                    y: 0
                }, this.lineWidth = 1, this.state = {
                    scale: {
                        x: 1,
                        y: 1
                    },
                    font_family: "Arial",
                    font_size: 8,
                    font_weight: 800
                }, this.attributes = {
                    "stroke-width": .3,
                    fill: "black",
                    stroke: "black",
                    font: "10pt Arial"
                }, this.background_attributes = {
                    "stroke-width": 0,
                    fill: "white",
                    stroke: "white",
                    font: "10pt Arial"
                }, this.shadow_attributes = {
                    width: 0,
                    color: "black"
                }, this.state_stack = []
            }
            var e, n, i;
            return e = t, (n = [{
                key: "openGroup",
                value: function () {}
            }, {
                key: "closeGroup",
                value: function () {}
            }, {
                key: "add",
                value: function () {}
            }, {
                key: "setFont",
                value: function (t, e, n) {
                    return this.state.font_family = t, this.state.font_size = e, this.state.font_weight = n, this.attributes.font = (this.state.font_weight || "") + " " + this.state.font_size * this.state.scale.x + "pt " + this.state.font_family, this
                }
            }, {
                key: "setRawFont",
                value: function (t) {
                    return this.attributes.font = t, this
                }
            }, {
                key: "setFillStyle",
                value: function (t) {
                    return this.attributes.fill = t, this
                }
            }, {
                key: "setBackgroundFillStyle",
                value: function (t) {
                    return this.background_attributes.fill = t, this.background_attributes.stroke = t, this
                }
            }, {
                key: "setStrokeStyle",
                value: function (t) {
                    return this.attributes.stroke = t, this
                }
            }, {
                key: "setShadowColor",
                value: function (t) {
                    return this.shadow_attributes.color = t, this
                }
            }, {
                key: "setShadowBlur",
                value: function (t) {
                    return this.shadow_attributes.width = t, this
                }
            }, {
                key: "setLineWidth",
                value: function (t) {
                    this.attributes["stroke-width"] = t, this.lineWidth = t
                }
            }, {
                key: "setLineDash",
                value: function () {
                    return this
                }
            }, {
                key: "setLineCap",
                value: function () {
                    return this
                }
            }, {
                key: "scale",
                value: function (t, e) {
                    return this.state.scale = {
                        x: t,
                        y: e
                    }, this.attributes.transform = "S" + t + "," + e + ",0,0", this.attributes.scale = t + "," + e + ",0,0", this.attributes.font = this.state.font_size * this.state.scale.x + "pt " + this.state.font_family, this.background_attributes.transform = "S" + t + "," + e + ",0,0", this.background_attributes.font = this.state.font_size * this.state.scale.x + "pt " + this.state.font_family, this
                }
            }, {
                key: "clear",
                value: function () {
                    this.paper.clear()
                }
            }, {
                key: "resize",
                value: function (t, e) {
                    return this.element.style.width = t, this.paper.setSize(t, e), this
                }
            }, {
                key: "setViewBox",
                value: function (t) {
                    this.paper.canvas.setAttribute("viewBox", t)
                }
            }, {
                key: "rect",
                value: function (t, e, n, i) {
                    return i < 0 && (e += i, i = -i), this.paper.rect(t, e, n - .5, i - .5).attr(this.attributes).attr("fill", "none").attr("stroke-width", this.lineWidth), this
                }
            }, {
                key: "fillRect",
                value: function (t, e, n, i) {
                    return i < 0 && (e += i, i = -i), this.paper.rect(t, e, n - .5, i - .5).attr(this.attributes), this
                }
            }, {
                key: "clearRect",
                value: function (t, e, n, i) {
                    return i < 0 && (e += i, i = -i), this.paper.rect(t, e, n - .5, i - .5).attr(this.background_attributes), this
                }
            }, {
                key: "beginPath",
                value: function () {
                    return this.path = "", this.pen.x = 0, this.pen.y = 0, this
                }
            }, {
                key: "moveTo",
                value: function (t, e) {
                    return this.path += "M" + t + "," + e, this.pen.x = t, this.pen.y = e, this
                }
            }, {
                key: "lineTo",
                value: function (t, e) {
                    return this.path += "L" + t + "," + e, this.pen.x = t, this.pen.y = e, this
                }
            }, {
                key: "bezierCurveTo",
                value: function (t, e, n, i, o, r) {
                    return this.path += "C" + t + "," + e + "," + n + "," + i + "," + o + "," + r, this.pen.x = o, this.pen.y = r, this
                }
            }, {
                key: "quadraticCurveTo",
                value: function (t, e, n, i) {
                    return this.path += "Q" + t + "," + e + "," + n + "," + i, this.pen.x = n, this.pen.y = i, this
                }
            }, {
                key: "arc",
                value: function (t, e, n, i, o, r) {
                    function s(t) {
                        for (; t < 0;) t += 2 * Math.PI;
                        for (; t > 2 * Math.PI;) t -= 2 * Math.PI;
                        return t
                    }
                    if ((i = s(i)) > (o = s(o))) {
                        var a = i;
                        i = o, o = a, r = !r
                    }
                    var l = o - i;
                    return l > Math.PI ? (this.arcHelper(t, e, n, i, i + l / 2, r), this.arcHelper(t, e, n, i + l / 2, o, r)) : this.arcHelper(t, e, n, i, o, r), this
                }
            }, {
                key: "arcHelper",
                value: function (t, e, n, i, o, r) {
                    var s = t + n * Math.cos(i),
                        a = e + n * Math.sin(i),
                        l = t + n * Math.cos(o),
                        u = e + n * Math.sin(o),
                        c = 0,
                        h = 0;
                    r ? (h = 1, o - i < Math.PI && (c = 1)) : o - i > Math.PI && (c = 1), this.path += "M" + s + "," + a + ",A" + n + "," + n + ",0," + c + "," + h + "," + l + "," + u + "M" + this.pen.x + "," + this.pen.y
                }
            }, {
                key: "glow",
                value: function () {
                    var t = this.paper.set();
                    if (this.shadow_attributes.width > 0)
                        for (var e = this.shadow_attributes, n = e.width / 2, i = 1; i <= n; i++) t.push(this.paper.path(this.path).attr({
                            stroke: e.color,
                            "stroke-linejoin": "round",
                            "stroke-linecap": "round",
                            "stroke-width": +(e.width / n * i).toFixed(3),
                            opacity: +((e.opacity || .3) / n).toFixed(3),
                            transform: this.attributes.transform,
                            scale: this.attributes.scale
                        }));
                    return t
                }
            }, {
                key: "fill",
                value: function () {
                    var t = this.paper.path(this.path).attr(this.attributes).attr("stroke-width", 0);
                    return this.glow(t), this
                }
            }, {
                key: "stroke",
                value: function () {
                    var t = this.lineWidth * (this.state.scale.x + this.state.scale.y) / 2,
                        e = this.paper.path(this.path).attr(this.attributes).attr("fill", "none").attr("stroke-width", t);
                    return this.glow(e), this
                }
            }, {
                key: "closePath",
                value: function () {
                    return this.path += "Z", this
                }
            }, {
                key: "measureText",
                value: function (t) {
                    var e = this.paper.text(0, 0, t).attr(this.attributes).attr("fill", "none").attr("stroke", "none"),
                        n = e.getBBox();
                    return e.remove(), {
                        width: n.width,
                        height: n.height
                    }
                }
            }, {
                key: "fillText",
                value: function (t, e, n) {
                    return this.paper.text(e + this.measureText(t).width / 2, n - this.state.font_size / (2.25 * this.state.scale.y), t).attr(this.attributes), this
                }
            }, {
                key: "save",
                value: function () {
                    return this.state_stack.push({
                        state: {
                            font_family: this.state.font_family
                        },
                        attributes: {
                            font: this.attributes.font,
                            fill: this.attributes.fill,
                            stroke: this.attributes.stroke,
                            "stroke-width": this.attributes["stroke-width"]
                        },
                        shadow_attributes: {
                            width: this.shadow_attributes.width,
                            color: this.shadow_attributes.color
                        }
                    }), this
                }
            }, {
                key: "restore",
                value: function () {
                    var t = this.state_stack.pop();
                    return this.state.font_family = t.state.font_family, this.attributes.font = t.attributes.font, this.attributes.fill = t.attributes.fill, this.attributes.stroke = t.attributes.stroke, this.attributes["stroke-width"] = t.attributes["stroke-width"], this.shadow_attributes.width = t.shadow_attributes.width, this.shadow_attributes.color = t.shadow_attributes.color, this
                }
            }]) && H(e.prototype, n), i && H(e, i), t
        }();

        function U(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var V = {
                path: {
                    x: !0,
                    y: !0,
                    width: !0,
                    height: !0
                },
                rect: {},
                text: {
                    width: !0,
                    height: !0
                }
            },
            z = {
                "font-family": !0,
                "font-weight": !0,
                "font-style": !0,
                "font-size": !0
            };
        h.Merge(V.rect, z), h.Merge(V.path, z);
        var K = function () {
            function t(e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.svgNS = "http://www.w3.org/2000/svg";
                var n = this.create("svg");
                this.element.appendChild(n), this.svg = n, this.groups = [this.svg], this.parent = this.svg, this.path = "", this.pen = {
                    x: NaN,
                    y: NaN
                }, this.lineWidth = 1, this.state = {
                    scale: {
                        x: 1,
                        y: 1
                    },
                    "font-family": "Arial",
                    "font-size": "8pt",
                    "font-weight": "normal"
                }, this.attributes = {
                    "stroke-width": .3,
                    fill: "black",
                    stroke: "black",
                    "stroke-dasharray": "none",
                    "font-family": "Arial",
                    "font-size": "10pt",
                    "font-weight": "normal",
                    "font-style": "normal"
                }, this.background_attributes = {
                    "stroke-width": 0,
                    fill: "white",
                    stroke: "white",
                    "stroke-dasharray": "none",
                    "font-family": "Arial",
                    "font-size": "10pt",
                    "font-weight": "normal",
                    "font-style": "normal"
                }, this.shadow_attributes = {
                    width: 0,
                    color: "black"
                }, this.state_stack = [], this.iePolyfill()
            }
            var e, n, i;
            return e = t, (n = [{
                key: "create",
                value: function (t) {
                    return document.createElementNS(this.svgNS, t)
                }
            }, {
                key: "openGroup",
                value: function (t, e, n) {
                    var i = this.create("g");
                    return this.groups.push(i), this.parent.appendChild(i), this.parent = i, t && i.setAttribute("class", h.Prefix(t)), e && i.setAttribute("id", h.Prefix(e)), n && n.pointerBBox && i.setAttribute("pointer-events", "bounding-box"), i
                }
            }, {
                key: "closeGroup",
                value: function () {
                    this.groups.pop(), this.parent = this.groups[this.groups.length - 1]
                }
            }, {
                key: "add",
                value: function (t) {
                    this.parent.appendChild(t)
                }
            }, {
                key: "iePolyfill",
                value: function () {
                    "undefined" != typeof navigator && (this.ie = /MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11\.0/i.test(navigator.userAgent) || /Trident/i.test(navigator.userAgent))
                }
            }, {
                key: "setFont",
                value: function (t, e, n) {
                    var i = !1,
                        o = !1,
                        r = "normal";
                    "string" == typeof n && (-1 !== n.indexOf("italic") && (n = n.replace(/italic/g, ""), o = !0), -1 !== n.indexOf("bold") && (n = n.replace(/bold/g, ""), i = !0), n = n.replace(/ /g, ""));
                    var s = {
                        "font-family": t,
                        "font-size": e + "pt",
                        "font-weight": n = void 0 === (n = i ? "bold" : n) || "" === n ? "normal" : n,
                        "font-style": r = o ? "italic" : r
                    };
                    return this.fontSize = Number(e), h.Merge(this.attributes, s), h.Merge(this.state, s), this
                }
            }, {
                key: "setRawFont",
                value: function (t) {
                    var e = (t = t.trim()).split(" ");
                    return this.attributes["font-family"] = e[1], this.state["font-family"] = e[1], this.attributes["font-size"] = e[0], this.state["font-size"] = e[0], this.fontSize = Number(e[0].match(/\d+/)), this
                }
            }, {
                key: "setFillStyle",
                value: function (t) {
                    return this.attributes.fill = t, this
                }
            }, {
                key: "setBackgroundFillStyle",
                value: function (t) {
                    return this.background_attributes.fill = t, this.background_attributes.stroke = t, this
                }
            }, {
                key: "setStrokeStyle",
                value: function (t) {
                    return this.attributes.stroke = t, this
                }
            }, {
                key: "setShadowColor",
                value: function (t) {
                    return this.shadow_attributes.color = t, this
                }
            }, {
                key: "setShadowBlur",
                value: function (t) {
                    return this.shadow_attributes.width = t, this
                }
            }, {
                key: "setLineWidth",
                value: function (t) {
                    this.attributes["stroke-width"] = t, this.lineWidth = t
                }
            }, {
                key: "setLineDash",
                value: function (t) {
                    if ("[object Array]" === Object.prototype.toString.call(t)) return t = t.join(", "), this.attributes["stroke-dasharray"] = t, this;
                    throw new h.RERR("ArgumentError", "lineDash must be an array of integers.")
                }
            }, {
                key: "setLineCap",
                value: function (t) {
                    return this.attributes["stroke-linecap"] = t, this
                }
            }, {
                key: "resize",
                value: function (t, e) {
                    this.width = t, this.height = e, this.element.style.width = t;
                    var n = {
                        width: t,
                        height: e
                    };
                    return this.applyAttributes(this.svg, n), this
                }
            }, {
                key: "scale",
                value: function (t, e) {
                    this.state.scale = {
                        x: t,
                        y: e
                    };
                    var n = this.width / t,
                        i = this.height / e;
                    return this.setViewBox(0, 0, n, i), this
                }
            }, {
                key: "setViewBox",
                value: function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    if (1 === e.length) {
                        var i = e[0];
                        this.svg.setAttribute("viewBox", i)
                    } else {
                        var o = e[0] + " " + e[1] + " " + e[2] + " " + e[3];
                        this.svg.setAttribute("viewBox", o)
                    }
                }
            }, {
                key: "applyAttributes",
                value: function (t, e) {
                    var n = V[t.nodeName];
                    return Object.keys(e).forEach(function (i) {
                        n && n[i] || t.setAttributeNS(null, i, e[i])
                    }), t
                }
            }, {
                key: "clear",
                value: function () {
                    for (; this.svg.lastChild;) this.svg.removeChild(this.svg.lastChild);
                    this.scale(this.state.scale.x, this.state.scale.y)
                }
            }, {
                key: "rect",
                value: function (t, e, n, i, o) {
                    i < 0 && (e += i, i *= -1);
                    var r = this.create("rect");
                    return void 0 === o && (o = {
                        fill: "none",
                        "stroke-width": this.lineWidth,
                        stroke: "black"
                    }), h.Merge(o, {
                        x: t,
                        y: e,
                        width: n,
                        height: i
                    }), this.applyAttributes(r, o), this.add(r), this
                }
            }, {
                key: "fillRect",
                value: function (t, e, n, i) {
                    return i < 0 && (e += i, i *= -1), this.rect(t, e, n, i, this.attributes), this
                }
            }, {
                key: "clearRect",
                value: function (t, e, n, i) {
                    return this.rect(t, e, n, i, this.background_attributes), this
                }
            }, {
                key: "beginPath",
                value: function () {
                    return this.path = "", this.pen.x = NaN, this.pen.y = NaN, this
                }
            }, {
                key: "moveTo",
                value: function (t, e) {
                    return this.path += "M" + t + " " + e, this.pen.x = t, this.pen.y = e, this
                }
            }, {
                key: "lineTo",
                value: function (t, e) {
                    return this.path += "L" + t + " " + e, this.pen.x = t, this.pen.y = e, this
                }
            }, {
                key: "bezierCurveTo",
                value: function (t, e, n, i, o, r) {
                    return this.path += "C" + t + " " + e + "," + n + " " + i + "," + o + " " + r, this.pen.x = o, this.pen.y = r, this
                }
            }, {
                key: "quadraticCurveTo",
                value: function (t, e, n, i) {
                    return this.path += "Q" + t + " " + e + "," + n + " " + i, this.pen.x = n, this.pen.y = i, this
                }
            }, {
                key: "arc",
                value: function (t, e, n, i, o, r) {
                    function s(t) {
                        for (; t < 0;) t += 2 * Math.PI;
                        for (; t > 2 * Math.PI;) t -= 2 * Math.PI;
                        return t
                    }
                    if ((i = s(i)) > (o = s(o))) {
                        var a = i;
                        i = o, o = a, r = !r
                    }
                    var l = o - i;
                    return l > Math.PI ? (this.arcHelper(t, e, n, i, i + l / 2, r), this.arcHelper(t, e, n, i + l / 2, o, r)) : this.arcHelper(t, e, n, i, o, r), this
                }
            }, {
                key: "arcHelper",
                value: function (t, e, n, i, o, r) {
                    var s = t + n * Math.cos(i),
                        a = e + n * Math.sin(i),
                        l = t + n * Math.cos(o),
                        u = e + n * Math.sin(o),
                        c = 0,
                        h = 0;
                    r ? (h = 1, o - i < Math.PI && (c = 1)) : o - i > Math.PI && (c = 1), this.path += "M" + s + " " + a + " A" + n + " " + n + " 0 " + c + " " + h + " " + l + " " + u, isNaN(this.pen.x) || isNaN(this.pen.y) || (this.peth += "M" + this.pen.x + " " + this.pen.y)
                }
            }, {
                key: "closePath",
                value: function () {
                    return this.path += "Z", this
                }
            }, {
                key: "glow",
                value: function () {
                    if (this.shadow_attributes.width > 0)
                        for (var t = this.shadow_attributes, e = t.width / 2, n = 1; n <= e; n++) {
                            var i = {
                                    stroke: t.color,
                                    "stroke-linejoin": "round",
                                    "stroke-linecap": "round",
                                    "stroke-width": +(.4 * t.width / e * n).toFixed(3),
                                    opacity: +((t.opacity || .3) / e).toFixed(3)
                                },
                                o = this.create("path");
                            i.d = this.path, this.applyAttributes(o, i), this.add(o)
                        }
                    return this
                }
            }, {
                key: "fill",
                value: function (t) {
                    this.glow();
                    var e = this.create("path");
                    return void 0 === t && (t = {}, h.Merge(t, this.attributes), t.stroke = "none"), t.d = this.path, this.applyAttributes(e, t), this.add(e), this
                }
            }, {
                key: "stroke",
                value: function () {
                    this.glow();
                    var t = this.create("path"),
                        e = {};
                    return h.Merge(e, this.attributes), e.fill = "none", e["stroke-width"] = this.lineWidth, e.d = this.path, this.applyAttributes(t, e), this.add(t), this
                }
            }, {
                key: "measureText",
                value: function (t) {
                    var e = this.create("text");
                    if ("function" != typeof e.getBBox) return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    e.textContent = t, this.applyAttributes(e, this.attributes), this.svg.appendChild(e);
                    var n = e.getBBox();
                    return this.ie && "" !== t && "italic" === this.attributes["font-style"] && (n = this.ieMeasureTextFix(n, t)), this.svg.removeChild(e), n
                }
            }, {
                key: "ieMeasureTextFix",
                value: function (t) {
                    var e = 1.196 * Number(this.fontSize) + 1.9598,
                        n = t.width - e,
                        i = t.height - 1.5;
                    return {
                        x: t.x,
                        y: t.y,
                        width: n,
                        height: i
                    }
                }
            }, {
                key: "fillText",
                value: function (t, e, n) {
                    if (t && !(t.length <= 0)) {
                        var i = {};
                        h.Merge(i, this.attributes), i.stroke = "none", i.x = e, i.y = n;
                        var o = this.create("text");
                        o.textContent = t, this.applyAttributes(o, i), this.add(o)
                    }
                }
            }, {
                key: "save",
                value: function () {
                    return this.state_stack.push({
                        state: {
                            "font-family": this.state["font-family"],
                            "font-weight": this.state["font-weight"],
                            "font-style": this.state["font-style"],
                            "font-size": this.state["font-size"]
                        },
                        attributes: {
                            "font-family": this.attributes["font-family"],
                            "font-weight": this.attributes["font-weight"],
                            "font-style": this.attributes["font-style"],
                            "font-size": this.attributes["font-size"],
                            fill: this.attributes.fill,
                            stroke: this.attributes.stroke,
                            "stroke-width": this.attributes["stroke-width"],
                            "stroke-dasharray": this.attributes["stroke-dasharray"]
                        },
                        shadow_attributes: {
                            width: this.shadow_attributes.width,
                            color: this.shadow_attributes.color
                        },
                        lineWidth: this.lineWidth
                    }), this
                }
            }, {
                key: "restore",
                value: function () {
                    var t = this.state_stack.pop();
                    return this.state["font-family"] = t.state["font-family"], this.state["font-weight"] = t.state["font-weight"], this.state["font-style"] = t.state["font-style"], this.state["font-size"] = t.state["font-size"], this.attributes["font-family"] = t.attributes["font-family"], this.attributes["font-weight"] = t.attributes["font-weight"], this.attributes["font-style"] = t.attributes["font-style"], this.attributes["font-size"] = t.attributes["font-size"], this.attributes.fill = t.attributes.fill, this.attributes.stroke = t.attributes.stroke, this.attributes["stroke-width"] = t.attributes["stroke-width"], this.attributes["stroke-dasharray"] = t.attributes["stroke-dasharray"], this.shadow_attributes.width = t.shadow_attributes.width, this.shadow_attributes.color = t.shadow_attributes.color, this.lineWidth = t.lineWidth, this
                }
            }]) && U(e.prototype, n), i && U(e, i), t
        }();

        function J(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function q(t, e, n) {
            return e && J(t.prototype, e), n && J(t, n), t
        }
        var Q = null,
            Z = function () {
                function t(e, n) {
                    if (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.elementId = e, !this.elementId) throw new h.RERR("BadArgument", "Invalid id for renderer.");
                    if (this.element = document.getElementById(e), this.element || (this.element = e), this.ctx = null, this.paper = null, this.backend = n, this.backend === t.Backends.CANVAS) {
                        if (!this.element.getContext) throw new h.RERR("BadElement", "Can't get canvas context from element: ".concat(e));
                        this.ctx = t.bolsterCanvasContext(this.element.getContext("2d"))
                    } else if (this.backend === t.Backends.RAPHAEL) this.ctx = new X(this.element);
                    else {
                        if (this.backend !== t.Backends.SVG) throw new h.RERR("InvalidBackend", "No support for backend: ".concat(this.backend));
                        this.ctx = new K(this.element)
                    }
                }
                return q(t, null, [{
                    key: "buildContext",
                    value: function (e, n, i, o, r) {
                        var s = new t(e, n);
                        i && o && s.resize(i, o), r || (r = "#FFF");
                        var a = s.getContext();
                        return a.setBackgroundFillStyle(r), t.lastContext = a, a
                    }
                }, {
                    key: "getCanvasContext",
                    value: function (e, n, i, o) {
                        return t.buildContext(e, t.Backends.CANVAS, n, i, o)
                    }
                }, {
                    key: "getRaphaelContext",
                    value: function (e, n, i, o) {
                        return t.buildContext(e, t.Backends.RAPHAEL, n, i, o)
                    }
                }, {
                    key: "getSVGContext",
                    value: function (e, n, i, o) {
                        return t.buildContext(e, t.Backends.SVG, n, i, o)
                    }
                }, {
                    key: "bolsterCanvasContext",
                    value: function (e) {
                        if (t.USE_CANVAS_PROXY) return new W(e);
                        return e.vexFlowCanvasContext = e, ["clear", "setFont", "setRawFont", "setFillStyle", "setBackgroundFillStyle", "setStrokeStyle", "setShadowColor", "setShadowBlur", "setLineWidth", "setLineCap", "setLineDash", "openGroup", "closeGroup", "getGroup"].forEach(function (t) {
                            e[t] = e[t] || W.prototype[t]
                        }), e
                    }
                }, {
                    key: "drawDashedLine",
                    value: function (t, e, n, i, o, r) {
                        t.beginPath();
                        var s = i - e,
                            a = o - n,
                            l = Math.atan2(a, s),
                            u = e,
                            c = n;
                        t.moveTo(e, n);
                        for (var h = 0, f = !0; !(s < 0 ? u <= i : u >= i) || !(a < 0 ? c <= o : c >= o);) {
                            var b = r[h++ % r.length],
                                p = u + Math.cos(l) * b;
                            u = s < 0 ? Math.max(i, p) : Math.min(i, p);
                            var y = c + Math.sin(l) * b;
                            c = a < 0 ? Math.max(o, y) : Math.min(o, y), f ? t.lineTo(u, c) : t.moveTo(u, c), f = !f
                        }
                        t.closePath(), t.stroke()
                    }
                }, {
                    key: "Backends",
                    get: function () {
                        return {
                            CANVAS: 1,
                            RAPHAEL: 2,
                            SVG: 3,
                            VML: 4
                        }
                    }
                }, {
                    key: "LineEndType",
                    get: function () {
                        return {
                            NONE: 1,
                            UP: 2,
                            DOWN: 3
                        }
                    }
                }, {
                    key: "USE_CANVAS_PROXY",
                    get: function () {
                        return !1
                    }
                }, {
                    key: "lastContext",
                    get: function () {
                        return Q
                    },
                    set: function (t) {
                        Q = t
                    }
                }]), q(t, [{
                    key: "resize",
                    value: function (e, n) {
                        if (this.backend === t.Backends.CANVAS) {
                            if (!this.element.getContext) throw new h.RERR("BadElement", "Can't get canvas context from element: ".concat(this.elementId));
                            var i = window.devicePixelRatio || 1;
                            this.element.width = e * i, this.element.height = n * i, this.element.style.width = e + "px", this.element.style.height = n + "px", this.ctx = t.bolsterCanvasContext(this.element.getContext("2d")), this.ctx.scale(i, i)
                        } else this.ctx.resize(e, n);
                        return this
                    }
                }, {
                    key: "getContext",
                    value: function () {
                        return this.ctx
                    }
                }]), t
            }();

        function $(t) {
            return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function tt(t, e) {
            return !e || "object" !== $(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function et(t) {
            return (et = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function nt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function it(t, e, n) {
            return e && nt(t.prototype, e), n && nt(t, n), t
        }

        function ot(t, e) {
            return (ot = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var rt = function (t) {
            function e() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = tt(this, et(e).call(this))).setAttribute("type", "Stem"), t.x_begin = n.x_begin || 0, t.x_end = n.x_end || 0, t.y_top = n.y_top || 0, t.y_bottom = n.y_bottom || 0, t.stem_extension = n.stem_extension || 0, t.stem_direction = n.stem_direction || 0, t.hide = n.hide || !1, t.isStemlet = n.isStemlet || !1, t.stemletHeight = n.stemletHeight || 0, t.stem_up_y_offset = n.stem_up_y_offset || 0, t.stem_down_y_offset = n.stem_down_y_offset || 0, t.renderHeightAdjustment = 0, t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ot(t, e)
            }(e, k), it(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "stem"
                }
            }, {
                key: "UP",
                get: function () {
                    return 1
                }
            }, {
                key: "DOWN",
                get: function () {
                    return -1
                }
            }, {
                key: "WIDTH",
                get: function () {
                    return I.STEM_WIDTH
                }
            }, {
                key: "HEIGHT",
                get: function () {
                    return I.STEM_HEIGHT
                }
            }]), it(e, [{
                key: "setNoteHeadXBounds",
                value: function (t, e) {
                    return this.x_begin = t, this.x_end = e, this
                }
            }, {
                key: "setDirection",
                value: function (t) {
                    this.stem_direction = t
                }
            }, {
                key: "setExtension",
                value: function (t) {
                    this.stem_extension = t
                }
            }, {
                key: "getExtension",
                value: function () {
                    return this.stem_extension
                }
            }, {
                key: "setYBounds",
                value: function (t, e) {
                    this.y_top = t, this.y_bottom = e
                }
            }, {
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "getHeight",
                value: function () {
                    var t = this.stem_direction === e.UP ? this.stem_up_y_offset : this.stem_down_y_offset;
                    return (this.y_bottom - this.y_top) * this.stem_direction + (e.HEIGHT - t + this.stem_extension) * this.stem_direction
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    throw new h.RERR("NotImplemented", "getBoundingBox() not implemented.")
                }
            }, {
                key: "getExtents",
                value: function () {
                    var t = this.stem_direction === e.UP,
                        n = [this.y_top, this.y_bottom],
                        i = e.HEIGHT + this.stem_extension,
                        o = (t ? Math.min : Math.max).apply(void 0, n),
                        r = (t ? Math.max : Math.min).apply(void 0, n);
                    return {
                        topY: o + i * -this.stem_direction,
                        baseY: r
                    }
                }
            }, {
                key: "setVisibility",
                value: function (t) {
                    return this.hide = !t, this
                }
            }, {
                key: "setStemlet",
                value: function (t, e) {
                    return this.isStemlet = t, this.stemletHeight = e, this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.setRendered(), !this.hide) {
                        var t, n, i = this.checkContext(),
                            o = this.stem_direction;
                        o === e.DOWN ? (t = this.x_begin, n = this.y_top + this.stem_down_y_offset) : (t = this.x_end, n = this.y_bottom - this.stem_up_y_offset);
                        var r = this.getHeight();
                        ! function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            rt.DEBUG && h.L("Vex.Flow.Stem", e)
                        }("Rendering stem - ", "Top Y: ", this.y_top, "Bottom Y: ", this.y_bottom);
                        var s = this.isStemlet ? r - this.stemletHeight * this.stem_direction : 0;
                        i.save(), this.applyStyle(i), i.beginPath(), i.setLineWidth(e.WIDTH), i.moveTo(t, n - s), i.lineTo(t, n - r - this.renderHeightAdjustment * o), i.stroke(), this.restoreStyle(i), i.restore()
                    }
                }
            }]), e
        }();

        function st(t) {
            return (st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function at(t, e) {
            return !e || "object" !== st(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function lt(t) {
            return (lt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ut(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ct(t, e, n) {
            return e && ut(t.prototype, e), n && ut(t, n), t
        }

        function ht(t, e) {
            return (ht = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ft = function (t) {
            function e(t, n) {
                var i;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (i = at(this, lt(e).call(this))).setAttribute("type", "Tuplet"), !t || !t.length) throw new h.RuntimeError("BadArguments", "No notes provided for tuplet.");
                return i.options = h.Merge({}, n), i.notes = t, i.num_notes = "num_notes" in i.options ? i.options.num_notes : t.length, i.options.beats_occupied && i.beatsOccupiedDeprecationWarning(), i.notes_occupied = i.options.notes_occupied || i.options.beats_occupied || 2, "bracketed" in i.options ? i.bracketed = i.options.bracketed : i.bracketed = t.some(function (t) {
                    return null === t.beam
                }), i.ratioed = "ratioed" in i.options ? i.options.ratioed : Math.abs(i.notes_occupied - i.num_notes) > 1, i.point = 28, i.y_pos = 16, i.x_pos = 100, i.width = 200, i.location = i.options.location || e.LOCATION_TOP, qi.AlignRestsToNotes(t, !0, !0), i.resolveGlyphs(), i.attach(), i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ht(t, e)
            }(e, k), ct(e, null, [{
                key: "LOCATION_TOP",
                get: function () {
                    return 1
                }
            }, {
                key: "LOCATION_BOTTOM",
                get: function () {
                    return -1
                }
            }, {
                key: "NESTING_OFFSET",
                get: function () {
                    return 15
                }
            }]), ct(e, [{
                key: "attach",
                value: function () {
                    for (var t = 0; t < this.notes.length; t++) {
                        this.notes[t].setTuplet(this)
                    }
                }
            }, {
                key: "detach",
                value: function () {
                    for (var t = 0; t < this.notes.length; t++) {
                        this.notes[t].resetTuplet(this)
                    }
                }
            }, {
                key: "setBracketed",
                value: function (t) {
                    return this.bracketed = !!t, this
                }
            }, {
                key: "setRatioed",
                value: function (t) {
                    return this.ratioed = !!t, this
                }
            }, {
                key: "setTupletLocation",
                value: function (t) {
                    if (t) {
                        if (t !== e.LOCATION_TOP && t !== e.LOCATION_BOTTOM) throw new h.RERR("BadArgument", "Invalid tuplet location: " + t)
                    } else t = e.LOCATION_TOP;
                    return this.location = t, this
                }
            }, {
                key: "getNotes",
                value: function () {
                    return this.notes
                }
            }, {
                key: "getNoteCount",
                value: function () {
                    return this.num_notes
                }
            }, {
                key: "beatsOccupiedDeprecationWarning",
                value: function () {
                    var t = ["beats_occupied has been deprecated as an ", "option for tuplets. Please use notes_occupied ", "instead. Calls to getBeatsOccupied and ", "setBeatsOccupied should now be routed to ", "getNotesOccupied and setNotesOccupied instead"].join("");
                    console && console.warn ? console.warn(t) : console && console.log(t)
                }
            }, {
                key: "getBeatsOccupied",
                value: function () {
                    return this.beatsOccupiedDeprecationWarning(), this.getNotesOccupied()
                }
            }, {
                key: "setBeatsOccupied",
                value: function (t) {
                    return this.beatsOccupiedDeprecationWarning(), this.setNotesOccupied(t)
                }
            }, {
                key: "getNotesOccupied",
                value: function () {
                    return this.notes_occupied
                }
            }, {
                key: "setNotesOccupied",
                value: function (t) {
                    this.detach(), this.notes_occupied = t, this.resolveGlyphs(), this.attach()
                }
            }, {
                key: "resolveGlyphs",
                value: function () {
                    this.num_glyphs = [];
                    for (var t = this.num_notes; t >= 1;) this.num_glyphs.push(new j("v" + t % 10, this.point)), t = parseInt(t / 10, 10);
                    for (this.denom_glyphs = [], t = this.notes_occupied; t >= 1;) this.denom_glyphs.push(new j("v" + t % 10, this.point)), t = parseInt(t / 10, 10)
                }
            }, {
                key: "getNestedTupletCount",
                value: function () {
                    var t = this.location,
                        e = this.notes[0],
                        n = o(e, t),
                        i = o(e, t);

                    function o(t, e) {
                        return t.tupletStack.filter(function (t) {
                            return t.location === e
                        }).length
                    }
                    return this.notes.forEach(function (e) {
                        var r = o(e, t);
                        n = r > n ? r : n, i = r < i ? r : i
                    }), n - i
                }
            }, {
                key: "getYPosition",
                value: function () {
                    var t, n = this.getNestedTupletCount() * e.NESTING_OFFSET * -this.location,
                        i = this.options.y_offset || 0,
                        o = this.notes[0];
                    if (this.location === e.LOCATION_TOP) {
                        t = o.getStave().getYForLine(0) - 15;
                        for (var r = 0; r < this.notes.length; ++r) {
                            var s = this.notes[r].getStemDirection() === rt.UP ? this.notes[r].getStemExtents().topY - 10 : this.notes[r].getStemExtents().baseY - 20;
                            s < t && (t = s)
                        }
                    } else {
                        t = o.getStave().getYForLine(4) + 20;
                        for (var a = 0; a < this.notes.length; ++a) {
                            var l = this.notes[a].getStemDirection() === rt.UP ? this.notes[a].getStemExtents().baseY + 20 : this.notes[a].getStemExtents().topY + 10;
                            l > t && (t = l)
                        }
                    }
                    return t + n + i
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this;
                    this.checkContext(), this.setRendered();
                    var n = this.notes[0],
                        i = this.notes[this.notes.length - 1];
                    this.bracketed ? (this.x_pos = n.getTieLeftX() - 5, this.width = i.getTieRightX() - this.x_pos + 5) : (this.x_pos = n.getStemX(), this.width = i.getStemX() - this.x_pos), this.y_pos = this.getYPosition();
                    var o = function (t, e) {
                            return t + e.getMetrics().width
                        },
                        r = this.num_glyphs.reduce(o, 0);
                    this.ratioed && (r = this.denom_glyphs.reduce(o, r), r += .32 * this.point);
                    var s = this.x_pos + this.width / 2 - r / 2;
                    if (this.bracketed) {
                        var a = this.width / 2 - r / 2 - 5;
                        a > 0 && (this.context.fillRect(this.x_pos, this.y_pos, a, 1), this.context.fillRect(this.x_pos + this.width / 2 + r / 2 + 5, this.y_pos, a, 1), this.context.fillRect(this.x_pos, this.y_pos + (this.location === e.LOCATION_BOTTOM), 1, 10 * this.location), this.context.fillRect(this.x_pos + this.width, this.y_pos + (this.location === e.LOCATION_BOTTOM), 1, 10 * this.location))
                    }
                    var l = 0;
                    if (this.num_glyphs.forEach(function (e) {
                            e.render(t.context, s + l, t.y_pos + t.point / 3 - 2), l += e.getMetrics().width
                        }), this.ratioed) {
                        var u = s + l + .16 * this.point,
                            c = .06 * this.point;
                        this.context.beginPath(), this.context.arc(u, this.y_pos - .08 * this.point, c, 0, 2 * Math.PI, !0), this.context.closePath(), this.context.fill(), this.context.beginPath(), this.context.arc(u, this.y_pos + .12 * this.point, c, 0, 2 * Math.PI, !0), this.context.closePath(), this.context.fill(), l += .32 * this.point, this.denom_glyphs.forEach(function (e) {
                            e.render(t.context, s + l, t.y_pos + t.point / 3 - 2), l += e.getMetrics().width
                        })
                    }
                }
            }]), e
        }();

        function bt(t) {
            return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function pt(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function yt(t) {
            return (yt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function dt(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function vt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function gt(t, e, n) {
            return e && vt(t.prototype, e), n && vt(t, n), t
        }

        function mt(t, e) {
            return (mt = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function _t(t) {
            var e = 0;
            return t.forEach(function (t) {
                t.keyProps && t.keyProps.forEach(function (t) {
                    e += t.line - 3
                })
            }), e >= 0 ? rt.DOWN : rt.UP
        }
        var xt = function (t) {
            function e(t, n) {
                var i, o, r, s, a;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), o = this, (i = !(r = yt(e).call(this)) || "object" !== bt(r) && "function" != typeof r ? dt(o) : r).setAttribute("type", "Beam"), !t || t === []) throw new h.RuntimeError("BadArguments", "No notes provided for beam.");
                if (1 === t.length) throw new h.RuntimeError("BadArguments", "Too few notes for beam.");
                if (i.ticks = t[0].getIntrinsicTicks(), i.ticks >= I.durationToTicks("4")) throw new h.RuntimeError("BadArguments", "Beams can only be applied to notes shorter than a quarter note.");
                for (i.stem_direction = rt.UP, s = 0; s < t.length; ++s)
                    if ((a = t[s]).hasStem()) {
                        i.stem_direction = a.getStemDirection();
                        break
                    } var l = i.stem_direction;
                if (n && "stavenotes" === t[0].getCategory()) l = _t(t);
                else if (n && "tabnotes" === t[0].getCategory()) {
                    l = t.reduce(function (t, e) {
                        return t + e.stem_direction
                    }, 0) > -1 ? rt.UP : rt.DOWN
                }
                for (s = 0; s < t.length; ++s) a = t[s], n && (a.setStemDirection(l), i.stem_direction = l), a.setBeam(dt(i));
                return i.postFormatted = !1, i.notes = t, i.beam_count = i.getBeamCount(), i.break_on_indices = [], i.render_options = {
                    beam_width: 5,
                    max_slope: .25,
                    min_slope: -.25,
                    slope_iterations: 20,
                    slope_cost: 100,
                    show_stemlets: !1,
                    stemlet_extension: 7,
                    partial_beam_length: 10,
                    flat_beams: !1,
                    min_flat_beam_offset: 15
                }, i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && mt(t, e)
            }(e, k), gt(e, null, [{
                key: "getDefaultBeamGroups",
                value: function (t) {
                    t && "c" !== t || (t = "4/4");
                    var e = {
                        "1/2": ["1/2"],
                        "2/2": ["1/2"],
                        "3/2": ["1/2"],
                        "4/2": ["1/2"],
                        "1/4": ["1/4"],
                        "2/4": ["1/4"],
                        "3/4": ["1/4"],
                        "4/4": ["1/4"],
                        "1/8": ["1/8"],
                        "2/8": ["2/8"],
                        "3/8": ["3/8"],
                        "4/8": ["2/8"],
                        "1/16": ["1/16"],
                        "2/16": ["2/16"],
                        "3/16": ["3/16"],
                        "4/16": ["2/16"]
                    } [t];
                    if (void 0 !== e) return e.map(function (t) {
                        return (new y).parse(t)
                    });
                    var n = parseInt(t.split("/")[0], 10),
                        i = parseInt(t.split("/")[1], 10);
                    return n % 3 == 0 ? [new y(3, i)] : i > 4 ? [new y(2, i)] : i <= 4 ? [new y(1, i)] : [new y(1, 4)]
                }
            }, {
                key: "applyAndGetBeams",
                value: function (t, n, i) {
                    return e.generateBeams(t.getTickables(), {
                        groups: i,
                        stem_direction: n
                    })
                }
            }, {
                key: "generateBeams",
                value: function (t, n) {
                    n || (n = {}), n.groups && n.groups.length || (n.groups = [new y(2, 8)]);
                    var i, o, r = n.groups.map(function (t) {
                            if (!t.multiply) throw new h.RuntimeError("InvalidBeamGroups", "The beam groups must be an array of Vex.Flow.Fractions");
                            return t.clone().multiply(I.RESOLUTION, 1)
                        }),
                        s = 0,
                        a = [],
                        l = [];

                    function u() {
                        r.length - 1 > s ? s += 1 : s = 0
                    }
                    i = [], t.forEach(function (t) {
                        if (i = [], t.shouldIgnoreTicks()) return a.push(l), void(l = i);
                        l.push(t);
                        var e = r[s].clone(),
                            n = l.reduce(function (t, e) {
                                return e.getTicks().clone().add(t)
                            }, new y(0, 1)),
                            o = I.durationToNumber(t.duration) < 8;
                        o && t.tuplet && (e.numerator *= 2), n.greaterThan(e) ? (o || i.push(l.pop()), a.push(l), l = i, u()) : n.equals(e) && (a.push(l), l = i, u())
                    }), l.length > 0 && a.push(l), o = [], a.forEach(function (t) {
                        var e = [];
                        t.forEach(function (t, i, r) {
                            var s = 0 === i || i === r.length - 1,
                                a = r[i - 1],
                                l = !n.beam_rests && t.isRest(),
                                u = n.beam_rests && n.beam_middle_only && t.isRest() && s,
                                c = !1;
                            if (n.maintain_stem_directions && a && !t.isRest() && !a.isRest()) {
                                var h = a.getStemDirection();
                                c = t.getStemDirection() !== h
                            }
                            var f = parseInt(t.duration, 10) < 8;
                            l || u || c || f ? (e.length > 0 && o.push(e), e = c ? [t] : []) : e.push(t)
                        }), e.length > 0 && o.push(e)
                    }), (a = o).forEach(function (t) {
                        var e;
                        if (n.maintain_stem_directions) {
                            var i = function (t) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (!n.isRest()) return n
                                }
                                return !1
                            }(t);
                            e = i ? i.getStemDirection() : rt.UP
                        } else e = n.stem_direction ? n.stem_direction : _t(t);
                        ! function (t, e) {
                            t.forEach(function (t) {
                                t.setStemDirection(e)
                            })
                        }(t, e)
                    });
                    var c, f = a.filter(function (t) {
                            if (t.length > 1) {
                                var e = !0;
                                return t.forEach(function (t) {
                                    t.getIntrinsicTicks() >= I.durationToTicks("4") && (e = !1)
                                }), e
                            }
                            return !1
                        }),
                        b = (c = [], a.forEach(function (t) {
                            var e = null;
                            t.forEach(function (t) {
                                t.tuplet && e !== t.tuplet && (e = t.tuplet, c.push(e))
                            })
                        }), c),
                        p = [];
                    return f.forEach(function (t) {
                        var i = new e(t);
                        n.show_stemlets && (i.render_options.show_stemlets = !0), n.secondary_breaks && (i.render_options.secondary_break_ticks = I.durationToTicks(n.secondary_breaks)), !0 === n.flat_beams && (i.render_options.flat_beams = !0, i.render_options.flat_beam_offset = n.flat_beam_offset), p.push(i)
                    }), b.forEach(function (t) {
                        var e = t.notes[0].stem_direction === rt.DOWN ? ft.LOCATION_BOTTOM : ft.LOCATION_TOP;
                        t.setTupletLocation(e);
                        for (var n = !1, i = 0; i < t.notes.length; i++) {
                            if (null === t.notes[i].beam) {
                                n = !0;
                                break
                            }
                        }
                        t.setBracketed(n)
                    }), p
                }
            }]), gt(e, [{
                key: "getNotes",
                value: function () {
                    return this.notes
                }
            }, {
                key: "getBeamCount",
                value: function () {
                    return this.notes.map(function (t) {
                        return t.getGlyph().beam_count
                    }).reduce(function (t, e) {
                        return e > t ? e : t
                    })
                }
            }, {
                key: "breakSecondaryAt",
                value: function (t) {
                    return this.break_on_indices = t, this
                }
            }, {
                key: "getSlopeY",
                value: function (t, e, n, i) {
                    return n + (t - e) * i
                }
            }, {
                key: "calculateSlope",
                value: function () {
                    for (var t = this.notes, e = this.stem_direction, n = this.render_options, i = n.max_slope, o = n.min_slope, r = n.slope_iterations, s = n.slope_cost, a = t[0], l = function (t, e) {
                            var n = t.getStemExtents().topY,
                                i = t.getStemX();
                            return (e.getStemExtents().topY - n) / (e.getStemX() - i)
                        }(a, t[t.length - 1]), u = (i - o) / r, c = Number.MAX_VALUE, h = 0, f = 0, b = o; b <= i; b += u) {
                        for (var p = 0, y = 0, d = 1; d < t.length; ++d) {
                            var v = t[d],
                                g = this.getSlopeY(v.getStemX(), a.getStemX(), a.getStemExtents().topY, b) + y,
                                m = v.getStemExtents().topY;
                            if (m * e < g * e) {
                                var _ = Math.abs(m - g);
                                y += _ * -e, p += _ * d
                            } else p += (m - g) * e
                        }
                        var x = l / 2,
                            w = s * Math.abs(x - b) + Math.abs(p);
                        w < c && (c = w, h = b, f = y)
                    }
                    this.slope = h, this.y_shift = f
                }
            }, {
                key: "calculateFlatSlope",
                value: function () {
                    for (var t = this.notes, e = this.stem_direction, n = this.render_options, i = n.beam_width, o = n.min_flat_beam_offset, r = n.flat_beam_offset, s = 0, a = 0, l = 0, u = 0, c = 0; c < t.length; c++) {
                        var h = t[c],
                            f = h.getStemExtents().topY;
                        s += f, e === rt.DOWN && u < f ? (u = f, a = Math.max.apply(Math, pt(h.getYs())), l = h.getBeamCount()) : e === rt.UP && (0 === u || u > f) && (u = f, a = Math.min.apply(Math, pt(h.getYs())), l = h.getBeamCount())
                    }
                    var b = s / t.length,
                        p = o + l * (1.5 * i),
                        y = a + p * -e;
                    e === rt.DOWN && b < y ? b = a + p : e === rt.UP && b > y && (b = a - p), r ? e === rt.DOWN && b > r ? this.render_options.flat_beam_offset = b : e === rt.UP && b < r && (this.render_options.flat_beam_offset = b) : this.render_options.flat_beam_offset = b, this.slope = 0, this.y_shift = 0
                }
            }, {
                key: "getBeamYToDraw",
                value: function () {
                    var t = this.notes[0].getStemExtents().topY;
                    return this.render_options.flat_beams && this.render_options.flat_beam_offset && (t = this.render_options.flat_beam_offset), t
                }
            }, {
                key: "applyStemExtensions",
                value: function () {
                    for (var t = this.notes, e = this.slope, n = this.y_shift, i = this.stem_direction, o = this.beam_count, r = this.render_options, s = r.show_stemlets, a = r.stemlet_extension, l = r.beam_width, u = t[0], c = this.getBeamYToDraw(), h = u.getStemX(), f = 0; f < t.length; ++f) {
                        var b = t[f],
                            p = b.getStemX(),
                            y = b.getStemExtents().topY,
                            d = this.getSlopeY(p, h, c, e) + n,
                            v = b.getStem().getExtension(),
                            g = i === rt.UP ? y - d : d - y;
                        if (b.stem.setExtension(v + g), b.stem.renderHeightAdjustment = -rt.WIDTH / 2, b.isRest() && s) {
                            var m = (o - 1) * l * 1.5 + l;
                            b.stem.setVisibility(!0).setStemlet(!0, m + a)
                        }
                    }
                }
            }, {
                key: "getBeamLines",
                value: function (t) {
                    for (var e = [], n = !1, i = null, o = this.render_options.partial_beam_length, r = !1, s = 0, a = 0; a < this.notes.length; ++a) {
                        var l = this.notes[a];
                        s += l.ticks.value();
                        var u = !1;
                        parseInt(t, 10) >= 8 && (u = -1 !== this.break_on_indices.indexOf(a), this.render_options.secondary_break_ticks && s >= this.render_options.secondary_break_ticks && (s = 0, u = !0));
                        var c = l.getIntrinsicTicks() < I.durationToTicks(t),
                            h = l.getStemX() - rt.WIDTH / 2,
                            f = this.notes[a + 1],
                            b = f && f.getIntrinsicTicks() < I.durationToTicks(t);
                        c ? n ? ((i = e[e.length - 1]).end = h, u && (n = !1, f && !b && null === i.end && (i.end = i.start - o))) : (i = {
                            start: h,
                            end: null
                        }, n = !0, b ? u && (i.end = i.start - o, n = !1) : i.end = (r || 0 === a) && f ? i.start + o : i.start - o, e.push(i)) : n = !1, r = u
                    }
                    var p = e[e.length - 1];
                    return p && null === p.end && (p.end = p.start - o), e
                }
            }, {
                key: "drawStems",
                value: function () {
                    var t = this;
                    this.notes.forEach(function (e) {
                        e.getStem() && e.getStem().setContext(t.context).draw()
                    }, this)
                }
            }, {
                key: "drawBeamLines",
                value: function () {
                    this.checkContext();
                    for (var t = ["4", "8", "16", "32", "64"], e = this.notes[0], n = this.getBeamYToDraw(), i = e.getStemX(), o = this.render_options.beam_width * this.stem_direction, r = 0; r < t.length; ++r) {
                        for (var s = t[r], a = this.getBeamLines(s), l = 0; l < a.length; ++l) {
                            var u = a[l],
                                c = u.start,
                                h = this.getSlopeY(c, i, n, this.slope),
                                f = u.end,
                                b = this.getSlopeY(f, i, n, this.slope);
                            this.context.beginPath(), this.context.moveTo(c, h), this.context.lineTo(c, h + o), this.context.lineTo(f + 1, b + o), this.context.lineTo(f + 1, b), this.context.closePath(), this.context.fill()
                        }
                        n += 1.5 * o
                    }
                }
            }, {
                key: "preFormat",
                value: function () {
                    return this
                }
            }, {
                key: "postFormat",
                value: function () {
                    this.postFormatted || ("tabnotes" === this.notes[0].getCategory() || this.render_options.flat_beams ? this.calculateFlatSlope() : this.calculateSlope(), this.applyStemExtensions(), this.postFormatted = !0)
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered(), this.unbeamable || (this.postFormatted || this.postFormat(), this.drawStems(), this.applyStyle(), this.drawBeamLines(), this.restoreStyle())
                }
            }]), e
        }();

        function wt(t) {
            return (wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function kt(t, e) {
            return !e || "object" !== wt(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function St(t) {
            return (St = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Tt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Et(t, e, n) {
            return e && Tt(t.prototype, e), n && Tt(t, n), t
        }

        function Ot(t, e) {
            return (Ot = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Rt = function (t) {
            function e(t) {
                var n;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = kt(this, St(e).call(this))).setAttribute("type", "Voice"), "string" == typeof t) {
                    var i = t.match(/(\d+)\/(\d+)/);
                    i && (t = {
                        num_beats: i[1],
                        beat_value: i[2],
                        resolution: I.RESOLUTION
                    })
                }
                return n.time = h.Merge({
                    num_beats: 4,
                    beat_value: 4,
                    resolution: I.RESOLUTION
                }, t), n.totalTicks = new y(n.time.num_beats * (n.time.resolution / n.time.beat_value), 1), n.resolutionMultiplier = 1, n.tickables = [], n.ticksUsed = new y(0, 1), n.smallestTickCount = n.totalTicks.clone(), n.largestTickWidth = 0, n.stave = null, n.mode = e.Mode.STRICT, n.voiceGroup = null, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ot(t, e)
            }(e, k), Et(e, null, [{
                key: "Mode",
                get: function () {
                    return {
                        STRICT: 1,
                        SOFT: 2,
                        FULL: 3
                    }
                }
            }]), Et(e, [{
                key: "getTotalTicks",
                value: function () {
                    return this.totalTicks
                }
            }, {
                key: "getTicksUsed",
                value: function () {
                    return this.ticksUsed
                }
            }, {
                key: "getLargestTickWidth",
                value: function () {
                    return this.largestTickWidth
                }
            }, {
                key: "getSmallestTickCount",
                value: function () {
                    return this.smallestTickCount
                }
            }, {
                key: "getTickables",
                value: function () {
                    return this.tickables
                }
            }, {
                key: "getMode",
                value: function () {
                    return this.mode
                }
            }, {
                key: "setMode",
                value: function (t) {
                    return this.mode = t, this
                }
            }, {
                key: "getResolutionMultiplier",
                value: function () {
                    return this.resolutionMultiplier
                }
            }, {
                key: "getActualResolution",
                value: function () {
                    return this.resolutionMultiplier * this.time.resolution
                }
            }, {
                key: "setStave",
                value: function (t) {
                    return this.stave = t, this.boundingBox = null, this
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    var t, e, n, i;
                    if (!this.boundingBox) {
                        if (!this.stave) throw new h.RERR("NoStave", "Can't get bounding box without stave.");
                        for (t = this.stave, e = null, i = 0; i < this.tickables.length; ++i) this.tickables[i].setStave(t), (n = this.tickables[i].getBoundingBox()) && (e = e ? e.mergeWith(n) : n);
                        this.boundingBox = e
                    }
                    return this.boundingBox
                }
            }, {
                key: "getVoiceGroup",
                value: function () {
                    if (!this.voiceGroup) throw new h.RERR("NoVoiceGroup", "No voice group for voice.");
                    return this.voiceGroup
                }
            }, {
                key: "setVoiceGroup",
                value: function (t) {
                    return this.voiceGroup = t, this
                }
            }, {
                key: "setStrict",
                value: function (t) {
                    return this.mode = t ? e.Mode.STRICT : e.Mode.SOFT, this
                }
            }, {
                key: "isComplete",
                value: function () {
                    return this.mode !== e.Mode.STRICT && this.mode !== e.Mode.FULL || this.ticksUsed.equals(this.totalTicks)
                }
            }, {
                key: "addTickable",
                value: function (t) {
                    if (!t.shouldIgnoreTicks()) {
                        var n = t.getTicks();
                        if (this.ticksUsed.add(n), (this.mode === e.Mode.STRICT || this.mode === e.Mode.FULL) && this.ticksUsed.greaterThan(this.totalTicks)) throw this.ticksUsed.subtract(n), new h.RERR("BadArgument", "Too many ticks.");
                        n.lessThan(this.smallestTickCount) && (this.smallestTickCount = n.clone()), this.resolutionMultiplier = this.ticksUsed.denominator, this.totalTicks.add(0, this.ticksUsed.denominator)
                    }
                    return this.tickables.push(t), t.setVoice(this), this
                }
            }, {
                key: "addTickables",
                value: function (t) {
                    for (var e = 0; e < t.length; ++e) this.addTickable(t[e]);
                    return this
                }
            }, {
                key: "preFormat",
                value: function () {
                    var t = this;
                    return this.preFormatted ? this : (this.tickables.forEach(function (e) {
                        e.getStave() || e.setStave(t.stave)
                    }), this.preFormatted = !0, this)
                }
            }, {
                key: "draw",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.context,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.stave;
                    this.setRendered();
                    for (var n = null, i = 0; i < this.tickables.length; ++i) {
                        var o = this.tickables[i];
                        if (e && o.setStave(e), !o.getStave()) throw new h.RuntimeError("MissingStave", "The voice cannot draw tickables without staves.");
                        if (0 === i && (n = o.getBoundingBox()), i > 0 && n) {
                            var r = o.getBoundingBox();
                            r && n.mergeWith(r)
                        }
                        o.setContext(t), o.draw()
                    }
                    this.boundingBox = n
                }
            }]), e
        }();

        function Pt(t) {
            return (Pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ct(t, e) {
            return !e || "object" !== Pt(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Nt(t) {
            return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function At(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Lt(t, e, n) {
            return e && At(t.prototype, e), n && At(t, n), t
        }

        function Mt(t, e) {
            return (Mt = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Ft(t, e, n, i, o) {
            if (e !== Bt.type.BOLD_DOUBLE_LEFT && e !== Bt.type.BOLD_DOUBLE_RIGHT) throw new h.RERR("InvalidConnector", "A REPEAT_BEGIN or REPEAT_END type must be provided.");
            var r = 3,
                s = 3.5;
            e === Bt.type.BOLD_DOUBLE_RIGHT && (r = -5, s = 3), t.fillRect(n + r, i, 1, o - i), t.fillRect(n - 2, i, s, o - i)
        }
        var Bt = function (t) {
            function e(t, n) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = Ct(this, Nt(e).call(this))).setAttribute("type", "StaveConnector"), i.thickness = I.STAVE_LINE_THICKNESS, i.width = 3, i.top_stave = t, i.bottom_stave = n, i.type = e.type.DOUBLE, i.font = {
                    family: "times",
                    size: 16,
                    weight: "normal"
                }, i.x_shift = 0, i.texts = [], i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Mt(t, e)
            }(e, k), Lt(e, null, [{
                key: "type",
                get: function () {
                    return {
                        SINGLE_RIGHT: 0,
                        SINGLE_LEFT: 1,
                        SINGLE: 1,
                        DOUBLE: 2,
                        BRACE: 3,
                        BRACKET: 4,
                        BOLD_DOUBLE_LEFT: 5,
                        BOLD_DOUBLE_RIGHT: 6,
                        THIN_DOUBLE: 7,
                        NONE: 8
                    }
                }
            }, {
                key: "typeString",
                get: function () {
                    return {
                        singleRight: e.type.SINGLE_RIGHT,
                        singleLeft: e.type.SINGLE_LEFT,
                        single: e.type.SINGLE,
                        double: e.type.DOUBLE,
                        brace: e.type.BRACE,
                        bracket: e.type.BRACKET,
                        boldDoubleLeft: e.type.BOLD_DOUBLE_LEFT,
                        boldDoubleRight: e.type.BOLD_DOUBLE_RIGHT,
                        thinDouble: e.type.THIN_DOUBLE,
                        none: e.type.NONE
                    }
                }
            }]), Lt(e, [{
                key: "setType",
                value: function (t) {
                    return (t = "string" == typeof t ? e.typeString[t] : t) >= e.type.SINGLE_RIGHT && t <= e.type.NONE && (this.type = t), this
                }
            }, {
                key: "setText",
                value: function (t, e) {
                    return this.texts.push({
                        content: t,
                        options: h.Merge({
                            shift_x: 0,
                            shift_y: 0
                        }, e)
                    }), this
                }
            }, {
                key: "setFont",
                value: function (t) {
                    h.Merge(this.font, t)
                }
            }, {
                key: "setXShift",
                value: function (t) {
                    if ("number" != typeof t) throw h.RERR("InvalidType", "x_shift must be a Number");
                    return this.x_shift = t, this
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this.checkContext();
                    this.setRendered();
                    var n = this.top_stave.getYForLine(0),
                        i = this.bottom_stave.getYForLine(this.bottom_stave.getNumLines() - 1) + this.thickness,
                        o = this.width,
                        r = this.top_stave.getX();
                    (this.type === e.type.SINGLE_RIGHT || this.type === e.type.BOLD_DOUBLE_RIGHT || this.type === e.type.THIN_DOUBLE) && (r = this.top_stave.getX() + this.top_stave.width);
                    var s = i - n;
                    switch (this.type) {
                        case e.type.SINGLE:
                        case e.type.SINGLE_LEFT:
                        case e.type.SINGLE_RIGHT:
                            o = 1;
                            break;
                        case e.type.DOUBLE:
                            r -= this.width + 2;
                            break;
                        case e.type.BRACE:
                            o = 12;
                            var a = this.top_stave.getX() - 2 + this.x_shift,
                                l = n,
                                u = a,
                                c = i,
                                f = a - o,
                                b = l + s / 2,
                                p = f - .9 * o,
                                y = l + .2 * s,
                                d = a + 1.1 * o,
                                v = b - .135 * s,
                                g = d,
                                m = b + .135 * s,
                                _ = p,
                                x = c - .2 * s,
                                w = f - o,
                                k = x,
                                S = a + .4 * o,
                                T = b + .135 * s,
                                E = S,
                                O = b - .135 * s,
                                R = w,
                                P = y;
                            t.beginPath(), t.moveTo(a, l), t.bezierCurveTo(p, y, d, v, f, b), t.bezierCurveTo(g, m, _, x, u, c), t.bezierCurveTo(w, k, S, T, f, b), t.bezierCurveTo(E, O, R, P, a, l), t.fill(), t.stroke();
                            break;
                        case e.type.BRACKET:
                            s = (i += 4) - (n -= 4), j.renderGlyph(t, r - 5, n - 3, 40, "v1b", !0), j.renderGlyph(t, r - 5, i + 3, 40, "v10", !0), r -= this.width + 2;
                            break;
                        case e.type.BOLD_DOUBLE_LEFT:
                            Ft(t, this.type, r + this.x_shift, n, i);
                            break;
                        case e.type.BOLD_DOUBLE_RIGHT:
                            Ft(t, this.type, r, n, i);
                            break;
                        case e.type.THIN_DOUBLE:
                            o = 1;
                            break;
                        case e.type.NONE:
                            break;
                        default:
                            throw new h.RERR("InvalidType", "The provided StaveConnector.type (".concat(this.type, ") is invalid"))
                    }
                    this.type !== e.type.BRACE && this.type !== e.type.BOLD_DOUBLE_LEFT && this.type !== e.type.BOLD_DOUBLE_RIGHT && this.type !== e.type.NONE && t.fillRect(r, n, o, s), this.type === e.type.THIN_DOUBLE && t.fillRect(r - 3, n, o, s), t.save(), t.lineWidth = 2, t.setFont(this.font.family, this.font.size, this.font.weight);
                    for (var C = 0; C < this.texts.length; C++) {
                        var N = this.texts[C],
                            A = t.measureText("" + N.content).width,
                            L = this.top_stave.getX() - A - 24 + N.options.shift_x,
                            M = (this.top_stave.getYForLine(0) + this.bottom_stave.getBottomLineY()) / 2 + N.options.shift_y;
                        t.fillText("" + N.content, L, M + 4)
                    }
                    t.restore()
                }
            }]), e
        }();

        function jt(t) {
            return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Dt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function It(t, e) {
            return !e || "object" !== jt(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Gt(t) {
            return (Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Yt(t, e) {
            return (Yt = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Wt = function (t) {
            function e() {
                var t;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = It(this, Gt(e).call(this))).setAttribute("type", "Tickable"), t.ticks = new y(0, 1), t.intrinsicTicks = 0, t.tickMultiplier = new y(1, 1), t.width = 0, t.x_shift = 0, t.voice = null, t.tickContext = null, t.modifierContext = null, t.modifiers = [], t.preFormatted = !1, t.postFormatted = !1, t.tuplet = null, t.tupletStack = [], t.align_center = !1, t.center_x_shift = 0, t.ignore_ticks = !1, t.formatterMetrics = {
                    freedom: {
                        left: 0,
                        right: 0
                    },
                    duration: "",
                    iterations: 0,
                    space: {
                        used: 0,
                        mean: 0,
                        deviation: 0
                    }
                }, t
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Yt(t, e)
            }(e, k), n = e, (i = [{
                key: "reset",
                value: function () {
                    return this
                }
            }, {
                key: "getTicks",
                value: function () {
                    return this.ticks
                }
            }, {
                key: "shouldIgnoreTicks",
                value: function () {
                    return this.ignore_ticks
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "getFormatterMetrics",
                value: function () {
                    return this.formatterMetrics
                }
            }, {
                key: "setXShift",
                value: function (t) {
                    this.x_shift = t
                }
            }, {
                key: "getCenterXShift",
                value: function () {
                    return this.isCenterAligned() ? this.center_x_shift : 0
                }
            }, {
                key: "isCenterAligned",
                value: function () {
                    return this.align_center
                }
            }, {
                key: "setCenterAlignment",
                value: function (t) {
                    return this.align_center = t, this
                }
            }, {
                key: "getVoice",
                value: function () {
                    if (!this.voice) throw new h.RERR("NoVoice", "Tickable has no voice.");
                    return this.voice
                }
            }, {
                key: "setVoice",
                value: function (t) {
                    this.voice = t
                }
            }, {
                key: "getTuplet",
                value: function () {
                    return this.tuplet
                }
            }, {
                key: "resetTuplet",
                value: function (t) {
                    var e, n;
                    if (t) {
                        var i = this.tupletStack.indexOf(t);
                        return -1 !== i && (this.tupletStack.splice(i, 1), e = t.getNoteCount(), n = t.getNotesOccupied(), this.applyTickMultiplier(e, n)), this
                    }
                    for (; this.tupletStack.length;) e = (t = this.tupletStack.pop()).getNoteCount(), n = t.getNotesOccupied(), this.applyTickMultiplier(e, n);
                    return this
                }
            }, {
                key: "setTuplet",
                value: function (t) {
                    if (t) {
                        this.tupletStack.push(t);
                        var e = t.getNoteCount(),
                            n = t.getNotesOccupied();
                        this.applyTickMultiplier(n, e)
                    }
                    return this.tuplet = t, this
                }
            }, {
                key: "addToModifierContext",
                value: function (t) {
                    this.modifierContext = t, this.preFormatted = !1
                }
            }, {
                key: "addModifier",
                value: function (t) {
                    return this.modifiers.push(t), this.preFormatted = !1, this
                }
            }, {
                key: "getModifiers",
                value: function () {
                    return this.modifiers
                }
            }, {
                key: "setTickContext",
                value: function (t) {
                    this.tickContext = t, this.preFormatted = !1
                }
            }, {
                key: "preFormat",
                value: function () {
                    this.preFormatted || (this.width = 0, this.modifierContext && (this.modifierContext.preFormat(), this.width += this.modifierContext.getWidth()))
                }
            }, {
                key: "postFormat",
                value: function () {
                    return this.postFormatted ? this : (this.postFormatted = !0, this)
                }
            }, {
                key: "getIntrinsicTicks",
                value: function () {
                    return this.intrinsicTicks
                }
            }, {
                key: "setIntrinsicTicks",
                value: function (t) {
                    this.intrinsicTicks = t, this.ticks = this.tickMultiplier.clone().multiply(this.intrinsicTicks)
                }
            }, {
                key: "getTickMultiplier",
                value: function () {
                    return this.tickMultiplier
                }
            }, {
                key: "applyTickMultiplier",
                value: function (t, e) {
                    this.tickMultiplier.multiply(t, e), this.ticks = this.tickMultiplier.clone().multiply(this.intrinsicTicks)
                }
            }, {
                key: "setDuration",
                value: function (t) {
                    var e = t.numerator * (I.RESOLUTION / t.denominator);
                    this.ticks = this.tickMultiplier.clone().multiply(e), this.intrinsicTicks = this.ticks.value()
                }
            }]) && Dt(n.prototype, i), o && Dt(n, o), e
        }();

        function Ht(t) {
            return (Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Xt(t, e) {
            return !e || "object" !== Ht(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ut(t) {
            return (Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Vt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function zt(t, e, n) {
            return e && Vt(t.prototype, e), n && Vt(t, n), t
        }

        function Kt(t, e) {
            return (Kt = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Jt = function (t) {
            function e(t) {
                var n;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = Xt(this, Ut(e).call(this))).setAttribute("type", "Note"), !t) throw new h.RuntimeError("BadArguments", "Note must have valid initialization data to identify duration and type.");
                var i = I.parseNoteData(t);
                if (!i) throw new h.RuntimeError("BadArguments", "Invalid note initialization object: ".concat(JSON.stringify(t)));
                if (n.duration = i.duration, n.dots = i.dots, n.noteType = i.type, t.duration_override ? n.setDuration(t.duration_override) : n.setIntrinsicTicks(i.ticks), n.modifiers = [], n.glyph = I.durationToGlyph(n.duration, n.noteType), n.positions && ("object" !== Ht(n.positions) || !n.positions.length)) throw new h.RuntimeError("BadArguments", "Note keys must be array type.");
                return n.playNote = null, n.tickContext = null, n.modifierContext = null, n.ignore_ticks = !1, n.width = 0, n.extraLeftPx = 0, n.extraRightPx = 0, n.x_shift = 0, n.left_modPx = 0, n.right_modPx = 0, n.voice = null, n.preFormatted = !1, n.ys = [], t.align_center && n.setCenterAlignment(t.align_center), n.stave = null, n.render_options = {
                    annotation_spacing: 5,
                    stave_padding: e.STAVEPADDING
                }, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Kt(t, e)
            }(e, Wt), zt(e, null, [{
                key: "plotMetrics",
                value: function (t, e, n) {
                    var i = e.getMetrics(),
                        o = e.getAbsoluteX() - i.modLeftPx - i.extraLeftPx,
                        r = e.getAbsoluteX() - i.extraLeftPx,
                        s = e.getAbsoluteX(),
                        a = e.getAbsoluteX() + i.noteWidth,
                        l = e.getAbsoluteX() + i.noteWidth + i.extraRightPx,
                        u = e.getAbsoluteX() + i.noteWidth + i.extraRightPx + i.modRightPx,
                        c = u + e.getFormatterMetrics().freedom.right,
                        f = u - o;
                    t.save(), t.setFont("Arial", 8, ""), t.fillText(Math.round(f) + "px", o + e.getXShift(), n);
                    var b = n + 7;

                    function p(n, i, o) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b;
                        t.beginPath(), t.setStrokeStyle(o), t.setFillStyle(o), t.setLineWidth(3), t.moveTo(n + e.getXShift(), r), t.lineTo(i + e.getXShift(), r), t.stroke()
                    }
                    p(o, r, "red"), p(r, s, "#999"), p(s, a, "green"), p(a, l, "#999"), p(l, u, "red"), p(u, c, "#DD0"), p(o - e.getXShift(), o, "#BBB"), h.drawDot(t, s + e.getXShift(), b, "blue");
                    var y = e.getFormatterMetrics();
                    if (y.iterations > 0) {
                        var d = y.space.deviation,
                            v = d >= 0 ? "+" : "";
                        t.setFillStyle("red"), t.fillText(v + Math.round(d), s + e.getXShift(), n - 10)
                    }
                    t.restore()
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "note"
                }
            }, {
                key: "STAVEPADDING",
                get: function () {
                    return 12
                }
            }]), zt(e, [{
                key: "getPlayNote",
                value: function () {
                    return this.playNote
                }
            }, {
                key: "setPlayNote",
                value: function (t) {
                    return this.playNote = t, this
                }
            }, {
                key: "isRest",
                value: function () {
                    return !1
                }
            }, {
                key: "addStroke",
                value: function (t, e) {
                    return e.setNote(this), e.setIndex(t), this.modifiers.push(e), this.setPreFormatted(!1), this
                }
            }, {
                key: "getStave",
                value: function () {
                    return this.stave
                }
            }, {
                key: "setStave",
                value: function (t) {
                    return this.stave = t, this.setYs([t.getYForLine(0)]), this.context = this.stave.context, this
                }
            }, {
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setContext",
                value: function (t) {
                    return this.context = t, this
                }
            }, {
                key: "getExtraLeftPx",
                value: function () {
                    return this.extraLeftPx
                }
            }, {
                key: "getExtraRightPx",
                value: function () {
                    return this.extraRightPx
                }
            }, {
                key: "setExtraLeftPx",
                value: function (t) {
                    return this.extraLeftPx = t, this
                }
            }, {
                key: "setExtraRightPx",
                value: function (t) {
                    return this.extraRightPx = t, this
                }
            }, {
                key: "shouldIgnoreTicks",
                value: function () {
                    return this.ignore_ticks
                }
            }, {
                key: "getLineNumber",
                value: function () {
                    return 0
                }
            }, {
                key: "getLineForRest",
                value: function () {
                    return 0
                }
            }, {
                key: "getGlyph",
                value: function () {
                    return this.glyph
                }
            }, {
                key: "getGlyphWidth",
                value: function () {
                    return this.glyph.getWidth(this.render_options.glyph_font_scale)
                }
            }, {
                key: "setYs",
                value: function (t) {
                    return this.ys = t, this
                }
            }, {
                key: "getYs",
                value: function () {
                    if (0 === this.ys.length) throw new h.RERR("NoYValues", "No Y-values calculated for this note.");
                    return this.ys
                }
            }, {
                key: "getYForTopText",
                value: function (t) {
                    if (!this.stave) throw new h.RERR("NoStave", "No stave attached to this note.");
                    return this.stave.getYForTopText(t)
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    return null
                }
            }, {
                key: "getVoice",
                value: function () {
                    if (!this.voice) throw new h.RERR("NoVoice", "Note has no voice.");
                    return this.voice
                }
            }, {
                key: "setVoice",
                value: function (t) {
                    return this.voice = t, this.preFormatted = !1, this
                }
            }, {
                key: "getTickContext",
                value: function () {
                    return this.tickContext
                }
            }, {
                key: "setTickContext",
                value: function (t) {
                    return this.tickContext = t, this.preFormatted = !1, this
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.duration
                }
            }, {
                key: "isDotted",
                value: function () {
                    return this.dots > 0
                }
            }, {
                key: "hasStem",
                value: function () {
                    return !1
                }
            }, {
                key: "getDots",
                value: function () {
                    return this.dots
                }
            }, {
                key: "getNoteType",
                value: function () {
                    return this.noteType
                }
            }, {
                key: "setBeam",
                value: function () {
                    return this
                }
            }, {
                key: "setModifierContext",
                value: function (t) {
                    return this.modifierContext = t, this
                }
            }, {
                key: "addModifier",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return t.setNote(this), t.setIndex(e), this.modifiers.push(t), this.setPreFormatted(!1), this
                }
            }, {
                key: "getModifierStartXY",
                value: function () {
                    if (!this.preFormatted) throw new h.RERR("UnformattedNote", "Can't call GetModifierStartXY on an unformatted note");
                    return {
                        x: this.getAbsoluteX(),
                        y: this.ys[0]
                    }
                }
            }, {
                key: "getMetrics",
                value: function () {
                    if (!this.preFormatted) throw new h.RERR("UnformattedNote", "Can't call getMetrics on an unformatted note.");
                    var t = 0,
                        e = 0;
                    null != this.modifierContext && (t = this.modifierContext.state.left_shift, e = this.modifierContext.state.right_shift);
                    var n = this.getWidth();
                    return {
                        width: n,
                        noteWidth: n - t - e - this.extraLeftPx - this.extraRightPx,
                        left_shift: this.x_shift,
                        modLeftPx: t,
                        modRightPx: e,
                        extraLeftPx: this.extraLeftPx,
                        extraRightPx: this.extraRightPx
                    }
                }
            }, {
                key: "setWidth",
                value: function (t) {
                    this.width = t
                }
            }, {
                key: "getWidth",
                value: function () {
                    if (!this.preFormatted) throw new h.RERR("UnformattedNote", "Can't call GetWidth on an unformatted note.");
                    return this.width + (this.modifierContext ? this.modifierContext.getWidth() : 0)
                }
            }, {
                key: "setXShift",
                value: function (t) {
                    return this.x_shift = t, this
                }
            }, {
                key: "getXShift",
                value: function () {
                    return this.x_shift
                }
            }, {
                key: "getX",
                value: function () {
                    if (!this.tickContext) throw new h.RERR("NoTickContext", "Note needs a TickContext assigned for an X-Value");
                    return this.tickContext.getX() + this.x_shift
                }
            }, {
                key: "getAbsoluteX",
                value: function () {
                    if (!this.tickContext) throw new h.RERR("NoTickContext", "Note needs a TickContext assigned for an X-Value");
                    var t = this.tickContext.getX();
                    return this.stave && (t += this.stave.getNoteStartX() + this.render_options.stave_padding), this.isCenterAligned() && (t += this.getCenterXShift()), t
                }
            }, {
                key: "setPreFormatted",
                value: function (t) {
                    if (this.preFormatted = t, this.preFormatted) {
                        var e = this.tickContext.getExtraPx();
                        this.left_modPx = Math.max(this.left_modPx, e.left), this.right_modPx = Math.max(this.right_modPx, e.right)
                    }
                }
            }]), e
        }();

        function qt(t) {
            return (qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Qt(t, e) {
            return !e || "object" !== qt(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Zt(t, e, n) {
            return (Zt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = $t(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function $t(t) {
            return ($t = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function te(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ee(t, e, n) {
            return e && te(t.prototype, e), n && te(t, n), t
        }

        function ne(t, e) {
            return (ne = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ie = function (t) {
            function e(t) {
                var n;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = Qt(this, $t(e).call(this, t))).setAttribute("type", "NoteHead"), n.index = t.index, n.x = t.x || 0, n.y = t.y || 0, n.note_type = t.note_type, n.duration = t.duration, n.displaced = t.displaced || !1, n.stem_direction = t.stem_direction || Le.STEM_UP, n.line = t.line, n.glyph = I.durationToGlyph(n.duration, n.note_type), !n.glyph) throw new h.RuntimeError("BadArguments", "No glyph found for duration '".concat(n.duration, "' and type '").concat(n.note_type, "'"));
                return n.glyph_code = n.glyph.code_head, n.x_shift = t.x_shift, t.custom_glyph_code && (n.custom_glyph = !0, n.glyph_code = t.custom_glyph_code), n.style = t.style, n.slashed = t.slashed, h.Merge(n.render_options, {
                    glyph_font_scale: t.glyph_font_scale || I.DEFAULT_NOTATION_FONT_SCALE,
                    stroke_px: 3
                }), n.setWidth(n.glyph.getWidth(n.render_options.glyph_font_scale)), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ne(t, e)
            }(e, Jt), ee(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "notehead"
                }
            }]), ee(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "isDisplaced",
                value: function () {
                    return !0 === this.displaced
                }
            }, {
                key: "getGlyph",
                value: function () {
                    return this.glyph
                }
            }, {
                key: "setX",
                value: function (t) {
                    return this.x = t, this
                }
            }, {
                key: "getY",
                value: function () {
                    return this.y
                }
            }, {
                key: "setY",
                value: function (t) {
                    return this.y = t, this
                }
            }, {
                key: "getLine",
                value: function () {
                    return this.line
                }
            }, {
                key: "setLine",
                value: function (t) {
                    return this.line = t, this
                }
            }, {
                key: "getAbsoluteX",
                value: function () {
                    var t = this.preFormatted ? Zt($t(e.prototype), "getAbsoluteX", this).call(this) : this.x,
                        n = rt.WIDTH / 2;
                    return t + (this.displaced ? (this.width - n) * this.stem_direction : 0)
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    if (!this.preFormatted) throw new h.RERR("UnformattedNote", "Can't call getBoundingBox on an unformatted note.");
                    var t = this.stave.getSpacingBetweenLines(),
                        e = t / 2,
                        n = this.y - e;
                    return new I.BoundingBox(this.getAbsoluteX(), n, this.width, t)
                }
            }, {
                key: "setStave",
                value: function (t) {
                    var e = this.getLine();
                    return this.stave = t, this.setY(t.getYForNote(e)), this.context = this.stave.context, this
                }
            }, {
                key: "preFormat",
                value: function () {
                    if (this.preFormatted) return this;
                    var t = this.getWidth() + this.extraLeftPx + this.extraRightPx;
                    return this.setWidth(t), this.setPreFormatted(!0), this
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered();
                    var t = this.context,
                        e = this.getAbsoluteX(),
                        n = this.y;
                    ! function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        ie.DEBUG && h.L("Vex.Flow.NoteHead", e)
                    }("Drawing note head '", this.note_type, this.duration, "' at", e, n);
                    var i = this.stem_direction,
                        o = this.render_options.glyph_font_scale;
                    if (this.style && this.applyStyle(t), "s" === this.note_type) {
                        var r = this.stave.getSpacingBetweenLines();
                        ! function (t, e, n, i, o, r) {
                            var s = I.SLASH_NOTEHEAD_WIDTH;
                            t.save(), t.setLineWidth(I.STEM_WIDTH);
                            var a = !1;
                            if (I.durationToNumber(e) > 2 && (a = !0), a || (n -= I.STEM_WIDTH / 2 * o), t.beginPath(), t.moveTo(n, i + r), t.lineTo(n, i + 1), t.lineTo(n + s, i - r), t.lineTo(n + s, i), t.lineTo(n, i + r), t.closePath(), a ? t.fill() : t.stroke(), I.durationToFraction(e).equals(.5))
                                for (var l = [-3, -1, s + 1, s + 3], u = 0; u < l.length; u++) t.beginPath(), t.moveTo(n + l[u], i - 10), t.lineTo(n + l[u], i + 11), t.stroke();
                            t.restore()
                        }(t, this.duration, e, n, i, r)
                    } else j.renderGlyph(t, e, n, o, this.glyph_code);
                    this.style && this.restoreStyle(t)
                }
            }]), e
        }();

        function oe(t) {
            return (oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function re(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function se(t, e) {
            return !e || "object" !== oe(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ae(t) {
            return (ae = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function le(t, e) {
            return (le = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ue = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = se(this, ae(e).call(this, t))).setAttribute("type", "StemmableNote"), n.stem = null, n.stemExtensionOverride = null, n.beam = null, n
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && le(t, e)
            }(e, Jt), n = e, (i = [{
                key: "getStem",
                value: function () {
                    return this.stem
                }
            }, {
                key: "setStem",
                value: function (t) {
                    return this.stem = t, this
                }
            }, {
                key: "buildStem",
                value: function () {
                    var t = new rt;
                    return this.setStem(t), this
                }
            }, {
                key: "buildFlag",
                value: function () {
                    var t = this.glyph,
                        e = null === this.beam;
                    if (t && t.flag && e) {
                        var n = this.getStemDirection() === rt.DOWN ? t.code_flag_downstem : t.code_flag_upstem;
                        this.flag = new j(n, this.render_options.glyph_font_scale)
                    }
                }
            }, {
                key: "getStemLength",
                value: function () {
                    return rt.HEIGHT + this.getStemExtension()
                }
            }, {
                key: "getBeamCount",
                value: function () {
                    var t = this.getGlyph();
                    return t ? t.beam_count : 0
                }
            }, {
                key: "getStemMinumumLength",
                value: function () {
                    var t = I.durationToFraction(this.duration).value() <= 1 ? 0 : 20;
                    switch (this.duration) {
                        case "8":
                            null == this.beam && (t = 35);
                            break;
                        case "16":
                            t = null == this.beam ? 35 : 25;
                            break;
                        case "32":
                            t = null == this.beam ? 45 : 35;
                            break;
                        case "64":
                            t = null == this.beam ? 50 : 40;
                            break;
                        case "128":
                            t = null == this.beam ? 55 : 45
                    }
                    return t
                }
            }, {
                key: "getStemDirection",
                value: function () {
                    return this.stem_direction
                }
            }, {
                key: "setStemDirection",
                value: function (t) {
                    if (t || (t = rt.UP), t !== rt.UP && t !== rt.DOWN) throw new h.RERR("BadArgument", "Invalid stem direction: ".concat(t));
                    return this.stem_direction = t, this.stem && (this.stem.setDirection(t), this.stem.setExtension(this.getStemExtension())), this.reset(), this.flag && this.buildFlag(), this.beam = null, this.preFormatted && this.preFormat(), this
                }
            }, {
                key: "getStemX",
                value: function () {
                    var t = this.getAbsoluteX() + this.x_shift,
                        e = this.getAbsoluteX() + this.x_shift + this.getGlyphWidth();
                    return this.stem_direction === rt.DOWN ? t : e
                }
            }, {
                key: "getCenterGlyphX",
                value: function () {
                    return this.getAbsoluteX() + this.x_shift + this.getGlyphWidth() / 2
                }
            }, {
                key: "getStemExtension",
                value: function () {
                    var t = this.getGlyph();
                    return null != this.stemExtensionOverride ? this.stemExtensionOverride : t ? 1 === this.getStemDirection() ? t.stem_up_extension : t.stem_down_extension : 0
                }
            }, {
                key: "setStemLength",
                value: function (t) {
                    return this.stemExtensionOverride = t - rt.HEIGHT, this
                }
            }, {
                key: "getStemExtents",
                value: function () {
                    return this.stem.getExtents()
                }
            }, {
                key: "setBeam",
                value: function (t) {
                    return this.beam = t, this
                }
            }, {
                key: "getYForTopText",
                value: function (t) {
                    var e = this.getStemExtents();
                    return this.hasStem() ? Math.min(this.stave.getYForTopText(t), e.topY - this.render_options.annotation_spacing * (t + 1)) : this.stave.getYForTopText(t)
                }
            }, {
                key: "getYForBottomText",
                value: function (t) {
                    var e = this.getStemExtents();
                    return this.hasStem() ? Math.max(this.stave.getYForTopText(t), e.baseY + this.render_options.annotation_spacing * t) : this.stave.getYForBottomText(t)
                }
            }, {
                key: "hasFlag",
                value: function () {
                    return I.durationToGlyph(this.duration).flag && !this.beam
                }
            }, {
                key: "postFormat",
                value: function () {
                    return this.beam && this.beam.postFormat(), this.postFormatted = !0, this
                }
            }, {
                key: "drawStem",
                value: function (t) {
                    this.checkContext(), this.setRendered(), this.setStem(new rt(t)), this.stem.setContext(this.context).draw()
                }
            }]) && re(n.prototype, i), o && re(n, o), e
        }();

        function ce(t) {
            return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function he(t, e) {
            return !e || "object" !== ce(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function fe(t) {
            return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function be(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function pe(t, e, n) {
            return e && be(t.prototype, e), n && be(t, n), t
        }

        function ye(t, e) {
            return (ye = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var de = function (t) {
            function e() {
                var t;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = he(this, fe(e).call(this))).setAttribute("type", "Modifier"), t.width = 0, t.note = null, t.index = null, t.text_line = 0, t.position = e.Position.LEFT, t.modifier_context = null, t.x_shift = 0, t.y_shift = 0, t.spacingFromNextModifier = 0, t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ye(t, e)
            }(e, k), pe(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "none"
                }
            }, {
                key: "Position",
                get: function () {
                    return {
                        LEFT: 1,
                        RIGHT: 2,
                        ABOVE: 3,
                        BELOW: 4
                    }
                }
            }, {
                key: "PositionString",
                get: function () {
                    return {
                        above: e.Position.ABOVE,
                        below: e.Position.BELOW,
                        left: e.Position.LEFT,
                        right: e.Position.RIGHT
                    }
                }
            }]), pe(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "setWidth",
                value: function (t) {
                    return this.width = t, this
                }
            }, {
                key: "getNote",
                value: function () {
                    return this.note
                }
            }, {
                key: "setNote",
                value: function (t) {
                    return this.note = t, this
                }
            }, {
                key: "getIndex",
                value: function () {
                    return this.index
                }
            }, {
                key: "setIndex",
                value: function (t) {
                    return this.index = t, this
                }
            }, {
                key: "getModifierContext",
                value: function () {
                    return this.modifier_context
                }
            }, {
                key: "setModifierContext",
                value: function (t) {
                    return this.modifier_context = t, this
                }
            }, {
                key: "getPosition",
                value: function () {
                    return this.position
                }
            }, {
                key: "setPosition",
                value: function (t) {
                    return this.position = "string" == typeof t ? e.PositionString[t] : t, this
                }
            }, {
                key: "setTextLine",
                value: function (t) {
                    return this.text_line = t, this
                }
            }, {
                key: "setYShift",
                value: function (t) {
                    return this.y_shift = t, this
                }
            }, {
                key: "setSpacingFromNextModifier",
                value: function (t) {
                    this.spacingFromNextModifier = t
                }
            }, {
                key: "getSpacingFromNextModifier",
                value: function () {
                    return this.spacingFromNextModifier
                }
            }, {
                key: "setXShift",
                value: function (t) {
                    this.x_shift = 0, this.position === e.Position.LEFT ? this.x_shift -= t : this.x_shift += t
                }
            }, {
                key: "getXShift",
                value: function () {
                    return this.x_shift
                }
            }, {
                key: "draw",
                value: function () {
                    throw this.checkContext(), new h.RERR("MethodNotImplemented", "draw() not implemented for this modifier.")
                }
            }, {
                key: "alignSubNotesWithNote",
                value: function (t, e) {
                    var n = e.getTickContext(),
                        i = n.getExtraPx(),
                        o = n.getX() - i.left - i.extraLeft + this.getSpacingFromNextModifier();
                    t.forEach(function (t) {
                        var n = t.getTickContext();
                        t.setStave(e.stave), n.setXOffset(o)
                    })
                }
            }]), e
        }();

        function ve(t) {
            return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ge(t, e) {
            return !e || "object" !== ve(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function me(t) {
            return (me = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function _e(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function xe(t, e, n) {
            return e && _e(t.prototype, e), n && _e(t, n), t
        }

        function we(t, e) {
            return (we = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ke = function (t) {
            function e() {
                var t;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = ge(this, me(e).call(this))).setAttribute("type", "Dot"), t.note = null, t.index = null, t.position = de.Position.RIGHT, t.radius = 2, t.setWidth(5), t.dot_shiftY = 0, t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && we(t, e)
            }(e, de), xe(e, null, [{
                key: "format",
                value: function (t, e) {
                    var n = e.right_shift;
                    if (!t || 0 === t.length) return !1;
                    for (var i = [], o = {}, r = 0; r < t.length; ++r) {
                        var s = t[r],
                            a = s.getNote(),
                            l = void 0,
                            u = void 0;
                        "function" == typeof a.getKeyProps ? u = (l = a.getKeyProps()[s.getIndex()]).displaced ? a.getExtraRightPx() : 0 : (l = {
                            line: .5
                        }, u = 0);
                        var c = a.getAttribute("id");
                        i.push({
                            line: l.line,
                            note: a,
                            note_id: c,
                            dot: s
                        }), o[c] = Math.max(o[c] || u, u)
                    }
                    i.sort(function (t, e) {
                        return e.line - t.line
                    });
                    for (var h = n, f = 0, b = null, p = null, y = null, d = 0, v = 0; v < i.length; ++v) {
                        var g = i[v],
                            m = g.dot,
                            _ = g.note,
                            x = g.note_id,
                            w = g.line;
                        w === b && _ === p || (h = o[x]), _.isRest() || w === b || (.5 === Math.abs(w % 1) ? d = 0 : (d = .5, null == p || p.isRest() || b - w != .5 ? w + d === y && (d = -.5) : d = -.5)), _.isRest() ? m.dot_shiftY += -d : m.dot_shiftY = -d, y = w + d, m.setXShift(h), f = (h += m.getWidth() + 1) > f ? h : f, b = w, p = _
                    }
                    return e.right_shift += f, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "dots"
                }
            }]), xe(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setNote",
                value: function (t) {
                    this.note = t, "gracenotes" === this.note.getCategory() && (this.radius *= .5, this.setWidth(3))
                }
            }, {
                key: "setDotShiftY",
                value: function (t) {
                    return this.dot_shiftY = t, this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), this.setRendered(), !this.note || null === this.index) throw new h.RERR("NoAttachedNote", "Can't draw dot without a note and index.");
                    var t = this.note.stave.options.spacing_between_lines_px,
                        e = this.note.getModifierStartXY(this.position, this.index, {
                            forceFlagRight: !0
                        });
                    "tabnotes" === this.note.getCategory() && (e.y = this.note.getStemExtents().baseY);
                    var n = e.x + this.x_shift + this.width - this.radius,
                        i = e.y + this.y_shift + this.dot_shiftY * t,
                        o = this.context;
                    o.beginPath(), o.arc(n, i, this.radius, 0, 2 * Math.PI, !1), o.fill()
                }
            }]), e
        }();

        function Se(t) {
            return (Se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Te() {
            return (Te = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Ee(t, e) {
            return !e || "object" !== Se(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Oe(t, e, n) {
            return (Oe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Re(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function Re(t) {
            return (Re = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Pe(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ce(t, e, n) {
            return e && Pe(t.prototype, e), n && Pe(t, n), t
        }

        function Ne(t, e) {
            return (Ne = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Ae(t, e, n) {
            var i = (e.isrest ? 0 : 1) * n;
            t.line += i, t.maxLine += i, t.minLine += i, t.note.setKeyLine(0, t.note.getKeyLine(0) + i)
        }
        var Le = function (t) {
            function e(t) {
                var n;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = Ee(this, Re(e).call(this, t))).setAttribute("type", "StaveNote"), n.keys = t.keys, n.clef = t.clef, n.octave_shift = t.octave_shift, n.beam = null, n.glyph = I.durationToGlyph(n.duration, n.noteType), !n.glyph) throw new h.RuntimeError("BadArguments", "Invalid note initialization data (No glyph found): ".concat(JSON.stringify(t)));
                return n.displaced = !1, n.dot_shiftY = 0, n.keyProps = [], n.use_default_head_x = !1, n.note_heads = [], n.modifiers = [], h.Merge(n.render_options, {
                    glyph_font_scale: t.glyph_font_scale || I.DEFAULT_NOTATION_FONT_SCALE,
                    stroke_px: t.stroke_px || e.DEFAULT_LEDGER_LINE_OFFSET
                }), n.calculateKeyProps(), n.buildStem(), t.auto_stem ? n.autoStem() : n.setStemDirection(t.stem_direction), n.reset(), n.buildFlag(), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ne(t, e)
            }(e, ue), Ce(e, null, [{
                key: "format",
                value: function (t, n) {
                    if (!t || t.length < 2) return !1;
                    if (t[0].getStave()) return e.formatByY(t, n);
                    for (var i = [], o = 0; o < t.length; o++) {
                        var r = t[o].getKeyProps(),
                            s = r[0].line,
                            a = r[r.length - 1].line,
                            l = t[o].getStemDirection(),
                            u = t[o].getStemLength() / 10,
                            c = t[o].getStemMinumumLength() / 10,
                            f = void 0;
                        t[o].isRest() ? (f = s + t[o].glyph.line_above, a = s - t[o].glyph.line_below) : (f = 1 === l ? r[r.length - 1].line + u : r[r.length - 1].line, a = 1 === l ? r[0].line : r[0].line - u), i.push({
                            line: r[0].line,
                            maxLine: f,
                            minLine: a,
                            isrest: t[o].isRest(),
                            stemDirection: l,
                            stemMax: u,
                            stemMin: c,
                            voice_shift: t[o].getVoiceShiftWidth(),
                            is_displaced: t[o].isDisplaced(),
                            note: t[o]
                        })
                    }
                    var b = i.length,
                        p = i[0],
                        y = b > 2 ? i[1] : null,
                        d = b > 2 ? i[2] : i[1];
                    2 === b && -1 === p.stemDirection && 1 === d.stemDirection && (p = i[1], d = i[0]);
                    var v, g = Math.max(p.voice_shift, d.voice_shift),
                        m = 0;
                    if (2 === b) {
                        var _ = p.stemDirection === d.stemDirection ? 0 : .5;
                        return p.stemDirection === d.stemDirection && p.minLine <= d.maxLine && (p.isrest || (v = Math.abs(p.line - (d.maxLine + .5)), v = Math.max(v, p.stemMin), p.minLine = p.line - v, p.note.setStemLength(10 * v))), p.minLine <= d.maxLine + _ && (p.isrest ? Ae(p, d, 1) : d.isrest ? Ae(d, p, -1) : (m = g, p.stemDirection === d.stemDirection ? p.note.setXShift(m + 3) : d.note.setXShift(m))), !0
                    }
                    if ((null !== y && y.minLine < d.maxLine + .5 && (y.isrest || (v = Math.abs(y.line - (d.maxLine + .5)), v = Math.max(v, y.stemMin), y.minLine = y.line - v, y.note.setStemLength(10 * v))), y.isrest && !p.isrest && !d.isrest) && (p.minLine <= y.maxLine || y.minLine <= d.maxLine)) return y.maxLine - y.minLine < p.minLine - d.maxLine ? function (t, e, n) {
                        var i = t.line - h.MidLine(e.minLine, n.maxLine);
                        t.note.setKeyLine(0, t.note.getKeyLine(0) - i), t.line -= i, t.maxLine -= i, t.minLine -= i
                    }(y, p, d) : (m = g + 3, y.note.setXShift(m)), !0;
                    return p.isrest && y.isrest && d.isrest ? (Ae(p, y, 1), Ae(d, y, -1), !0) : (y.isrest && p.isrest && y.minLine <= d.maxLine && Ae(y, d, 1), y.isrest && d.isrest && p.minLine <= y.maxLine && Ae(y, p, -1), p.isrest && p.minLine <= y.maxLine && Ae(p, y, 1), d.isrest && y.minLine <= d.maxLine && Ae(d, y, -1), (!p.isrest && !y.isrest && p.minLine <= y.maxLine + .5 || !y.isrest && !d.isrest && y.minLine <= d.maxLine) && (m = g + 3, y.note.setXShift(m)), !0)
                }
            }, {
                key: "formatByY",
                value: function (t, e) {
                    for (var n = !0, i = 0; i < t.length; i++) n = n && null != t[i].getStave();
                    if (!n) throw new h.RERR("Stave Missing", "All notes must have a stave - Vex.Flow.ModifierContext.formatMultiVoice!");
                    for (var o = 0, r = 0; r < t.length - 1; r++) {
                        var s = t[r],
                            a = t[r + 1];
                        s.getStemDirection() === rt.DOWN && (s = t[r + 1], a = t[r]);
                        var l = s.getKeyProps(),
                            u = a.getKeyProps(),
                            c = s.getStave().getYForLine(5 - l[0].line + .5);
                        a.getStave().getYForLine(5 - u[u.length - 1].line - .5) - c < 0 && (o = s.getVoiceShiftWidth() + 2, a.setXShift(o))
                    }
                    e.right_shift += o
                }
            }, {
                key: "postFormat",
                value: function (t) {
                    return !!t && (t.forEach(function (t) {
                        return t.postFormat()
                    }), !0)
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "stavenotes"
                }
            }, {
                key: "STEM_UP",
                get: function () {
                    return rt.UP
                }
            }, {
                key: "STEM_DOWN",
                get: function () {
                    return rt.DOWN
                }
            }, {
                key: "DEFAULT_LEDGER_LINE_OFFSET",
                get: function () {
                    return 3
                }
            }]), Ce(e, [{
                key: "reset",
                value: function () {
                    var t = this;
                    Oe(Re(e.prototype), "reset", this).call(this);
                    var n = this.note_heads.map(function (t) {
                        return t.getStyle()
                    });
                    this.buildNoteHeads(), this.note_heads.forEach(function (t, e) {
                        return t.setStyle(n[e])
                    }), this.stave && this.note_heads.forEach(function (e) {
                        return e.setStave(t.stave)
                    }), this.calcExtraPx()
                }
            }, {
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "buildStem",
                value: function () {
                    var t = this.getGlyph();
                    this.setStem(new rt({
                        stem_up_y_offset: t.stem_up_y_offset,
                        stem_down_y_offset: t.stem_down_y_offset,
                        hide: !!this.isRest()
                    }))
                }
            }, {
                key: "buildNoteHeads",
                value: function () {
                    this.note_heads = [];
                    var t, e, n, i = this.getStemDirection(),
                        o = this.getKeys(),
                        r = null,
                        s = null,
                        a = !1;
                    i === rt.UP ? (t = 0, e = o.length, n = 1) : i === rt.DOWN && (t = o.length - 1, e = -1, n = -1);
                    for (var l = t; l !== e; l += n) {
                        var u = this.keyProps[l],
                            c = u.line;
                        null === r ? r = c : 0 === (s = Math.abs(r - c)) || .5 === s ? a = !a : (a = !1, this.use_default_head_x = !0), r = c;
                        var h = new ie({
                            duration: this.duration,
                            note_type: this.noteType,
                            displaced: a,
                            stem_direction: i,
                            custom_glyph_code: u.code,
                            glyph_font_scale: this.render_options.glyph_font_scale,
                            x_shift: u.shift_right,
                            line: u.line
                        });
                        this.note_heads[l] = h
                    }
                }
            }, {
                key: "autoStem",
                value: function () {
                    this.minLine = this.keyProps[0].line, this.maxLine = this.keyProps[this.keyProps.length - 1].line;
                    var t = (this.minLine + this.maxLine) / 2 < 3 ? rt.UP : rt.DOWN;
                    this.setStemDirection(t)
                }
            }, {
                key: "calculateKeyProps",
                value: function () {
                    for (var t = null, e = 0; e < this.keys.length; ++e) {
                        var n = this.keys[e];
                        this.glyph.rest && (this.glyph.position = n);
                        var i = {
                                octave_shift: this.octave_shift || 0
                            },
                            o = I.keyProperties(n, this.clef, i);
                        if (!o) throw new h.RuntimeError("BadArguments", "Invalid key for note properties: ".concat(n));
                        "R" === o.key && ("1" === this.duration || "w" === this.duration ? o.line = 4 : o.line = 3);
                        var r = o.line;
                        null === t ? t = r : .5 === Math.abs(t - r) && (this.displaced = !0, o.displaced = !0, this.keyProps.length > 0 && (this.keyProps[e - 1].displaced = !0)), t = r, this.keyProps.push(o)
                    }
                    t = -1 / 0, this.keyProps.forEach(function (e) {
                        e.line < t && h.W("Unsorted keys in note will be sorted. See https://github.com/0xfe/vexflow/issues/104 for details."), t = e.line
                    }), this.keyProps.sort(function (t, e) {
                        return t.line - e.line
                    })
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    if (!this.preFormatted) throw new h.RERR("UnformattedNote", "Can't call getBoundingBox on an unformatted note.");
                    var t = this.getMetrics(),
                        e = t.width,
                        n = t.modLeftPx,
                        i = t.extraLeftPx,
                        o = this.getAbsoluteX() - n - i,
                        r = 0,
                        s = 0,
                        a = this.getStave().getSpacingBetweenLines() / 2,
                        l = 2 * a;
                    if (this.isRest()) {
                        var u = this.ys[0],
                            c = I.durationToFraction(this.duration);
                        c.equals(1) || c.equals(2) ? (r = u - a, s = u + a) : (r = u - this.glyph.line_above * l, s = u + this.glyph.line_below * l)
                    } else if (this.glyph.stem) {
                        var f = this.getStemExtents();
                        f.baseY += a * this.stem_direction, r = Math.min(f.topY, f.baseY), s = Math.max(f.topY, f.baseY)
                    } else {
                        r = null, s = null;
                        for (var b = 0; b < this.ys.length; ++b) {
                            var p = this.ys[b];
                            0 === b ? (r = p, s = p) : (r = Math.min(p, r), s = Math.max(p, s))
                        }
                        r -= a, s += a
                    }
                    return new R(o, r, e, s - r)
                }
            }, {
                key: "getLineNumber",
                value: function (t) {
                    if (!this.keyProps.length) throw new h.RERR("NoKeyProps", "Can't get bottom note line, because note is not initialized properly.");
                    for (var e = this.keyProps[0].line, n = 0; n < this.keyProps.length; n++) {
                        var i = this.keyProps[n].line;
                        t ? i > e && (e = i) : i < e && (e = i)
                    }
                    return e
                }
            }, {
                key: "isRest",
                value: function () {
                    return this.glyph.rest
                }
            }, {
                key: "isChord",
                value: function () {
                    return !this.isRest() && this.keys.length > 1
                }
            }, {
                key: "hasStem",
                value: function () {
                    return this.glyph.stem
                }
            }, {
                key: "hasFlag",
                value: function () {
                    return Oe(Re(e.prototype), "hasFlag", this).call(this) && !this.isRest()
                }
            }, {
                key: "getStemX",
                value: function () {
                    return "r" === this.noteType ? this.getCenterGlyphX() : Oe(Re(e.prototype), "getStemX", this).call(this) + (t = this, rt.WIDTH / (2 * -t.getStemDirection()));
                    var t
                }
            }, {
                key: "getYForTopText",
                value: function (t) {
                    var e = this.getStemExtents();
                    return Math.min(this.stave.getYForTopText(t), e.topY - this.render_options.annotation_spacing * (t + 1))
                }
            }, {
                key: "getYForBottomText",
                value: function (t) {
                    var e = this.getStemExtents();
                    return Math.max(this.stave.getYForTopText(t), e.baseY + this.render_options.annotation_spacing * t)
                }
            }, {
                key: "setStave",
                value: function (t) {
                    Oe(Re(e.prototype), "setStave", this).call(this, t);
                    var n = this.note_heads.map(function (e) {
                        return e.setStave(t), e.getY()
                    });
                    if (this.setYs(n), this.stem) {
                        var i = this.getNoteHeadBounds(),
                            o = i.y_top,
                            r = i.y_bottom;
                        this.stem.setYBounds(o, r)
                    }
                    return this
                }
            }, {
                key: "getKeys",
                value: function () {
                    return this.keys
                }
            }, {
                key: "getKeyProps",
                value: function () {
                    return this.keyProps
                }
            }, {
                key: "isDisplaced",
                value: function () {
                    return this.displaced
                }
            }, {
                key: "setNoteDisplaced",
                value: function (t) {
                    return this.displaced = t, this
                }
            }, {
                key: "getTieRightX",
                value: function () {
                    var t = this.getAbsoluteX();
                    return t += this.getGlyphWidth() + this.x_shift + this.extraRightPx, this.modifierContext && (t += this.modifierContext.getExtraRightPx()), t
                }
            }, {
                key: "getTieLeftX",
                value: function () {
                    var t = this.getAbsoluteX();
                    return t += this.x_shift - this.extraLeftPx
                }
            }, {
                key: "getLineForRest",
                value: function () {
                    var t = this.keyProps[0].line;
                    if (this.keyProps.length > 1) {
                        var e = this.keyProps[this.keyProps.length - 1].line,
                            n = Math.max(t, e),
                            i = Math.min(t, e);
                        t = h.MidLine(n, i)
                    }
                    return t
                }
            }, {
                key: "getModifierStartXY",
                value: function (t, e, n) {
                    if (n = n || {}, !this.preFormatted) throw new h.RERR("UnformattedNote", "Can't call GetModifierStartXY on an unformatted note");
                    if (0 === this.ys.length) throw new h.RERR("NoYValues", "No Y-Values calculated for this note.");
                    var i = de.Position,
                        o = i.ABOVE,
                        r = i.BELOW,
                        s = i.LEFT,
                        a = i.RIGHT,
                        l = 0;
                    return t === s ? l = -2 : t === a ? (l = this.getGlyphWidth() + this.x_shift + 2, this.stem_direction === rt.UP && this.hasFlag() && (n.forceFlagRight || function (t, e) {
                        return e === (t.getStemDirection() === rt.UP ? t.keyProps.length - 1 : 0)
                    }(this, e)) && (l += this.flag.getMetrics().width)) : t !== r && t !== o || (l = this.getGlyphWidth() / 2), {
                        x: this.getAbsoluteX() + l,
                        y: this.ys[e]
                    }
                }
            }, {
                key: "setStyle",
                value: function (t) {
                    Oe(Re(e.prototype), "setStyle", this).call(this, t), this.note_heads.forEach(function (e) {
                        return e.setStyle(t)
                    }), this.stem.setStyle(t)
                }
            }, {
                key: "setStemStyle",
                value: function (t) {
                    this.getStem().setStyle(t)
                }
            }, {
                key: "getStemStyle",
                value: function () {
                    return this.stem.getStyle()
                }
            }, {
                key: "setLedgerLineStyle",
                value: function (t) {
                    this.ledgerLineStyle = t
                }
            }, {
                key: "getLedgerLineStyle",
                value: function () {
                    return this.ledgerLineStyle
                }
            }, {
                key: "setFlagStyle",
                value: function (t) {
                    this.flagStyle = t
                }
            }, {
                key: "getFlagStyle",
                value: function () {
                    return this.flagStyle
                }
            }, {
                key: "setKeyStyle",
                value: function (t, e) {
                    return this.note_heads[t].setStyle(e), this
                }
            }, {
                key: "setKeyLine",
                value: function (t, e) {
                    return this.keyProps[t].line = e, this.reset(), this
                }
            }, {
                key: "getKeyLine",
                value: function (t) {
                    return this.keyProps[t].line
                }
            }, {
                key: "addToModifierContext",
                value: function (t) {
                    this.setModifierContext(t);
                    for (var e = 0; e < this.modifiers.length; ++e) this.modifierContext.addModifier(this.modifiers[e]);
                    return this.modifierContext.addModifier(this), this.setPreFormatted(!1), this
                }
            }, {
                key: "addModifier",
                value: function (t, e) {
                    return e.setNote(this), e.setIndex(t), this.modifiers.push(e), this.setPreFormatted(!1), this
                }
            }, {
                key: "addAccidental",
                value: function (t, e) {
                    return this.addModifier(t, e)
                }
            }, {
                key: "addArticulation",
                value: function (t, e) {
                    return this.addModifier(t, e)
                }
            }, {
                key: "addAnnotation",
                value: function (t, e) {
                    return this.addModifier(t, e)
                }
            }, {
                key: "addDot",
                value: function (t) {
                    var e = new ke;
                    return e.setDotShiftY(this.glyph.dot_shiftY), this.dots++, this.addModifier(t, e)
                }
            }, {
                key: "addDotToAll",
                value: function () {
                    for (var t = 0; t < this.keys.length; ++t) this.addDot(t);
                    return this
                }
            }, {
                key: "getAccidentals",
                value: function () {
                    return this.modifierContext.getModifiers("accidentals")
                }
            }, {
                key: "getDots",
                value: function () {
                    return this.modifierContext.getModifiers("dots")
                }
            }, {
                key: "getVoiceShiftWidth",
                value: function () {
                    return this.getGlyphWidth() * (this.displaced ? 2 : 1)
                }
            }, {
                key: "calcExtraPx",
                value: function () {
                    this.setExtraLeftPx(this.displaced && this.stem_direction === rt.DOWN ? this.getGlyphWidth() : 0), this.setExtraRightPx(!this.hasFlag() && this.displaced && this.stem_direction === rt.UP ? this.getGlyphWidth() : 0)
                }
            }, {
                key: "preFormat",
                value: function () {
                    if (!this.preFormatted) {
                        this.modifierContext && this.modifierContext.preFormat();
                        var t = this.getGlyphWidth() + this.extraLeftPx + this.extraRightPx;
                        this.glyph.flag && null === this.beam && this.stem_direction === rt.UP && (t += this.getGlyphWidth()), this.setWidth(t), this.setPreFormatted(!0)
                    }
                }
            }, {
                key: "getNoteHeadBounds",
                value: function () {
                    var t = null,
                        e = null,
                        n = null,
                        i = null,
                        o = this.stave.getNumLines(),
                        r = 1,
                        s = !1,
                        a = !1,
                        l = o,
                        u = r;
                    return this.note_heads.forEach(function (c) {
                        var h = c.getLine(),
                            f = c.getY();
                        (null === t || f < t) && (t = f), (null === e || f > e) && (e = f), null === i && c.isDisplaced() && (i = c.getAbsoluteX()), null !== n || c.isDisplaced() || (n = c.getAbsoluteX()), o = h > o ? h : o, r = h < r ? h : r, c.isDisplaced() ? (s = !1 === s ? h : Math.max(h, s), a = !1 === a ? h : Math.min(h, a)) : (l = Math.max(h, l), u = Math.min(h, u))
                    }, this), {
                        y_top: t,
                        y_bottom: e,
                        displaced_x: i,
                        non_displaced_x: n,
                        highest_line: o,
                        lowest_line: r,
                        highest_displaced_line: s,
                        lowest_displaced_line: a,
                        highest_non_displaced_line: l,
                        lowest_non_displaced_line: u
                    }
                }
            }, {
                key: "getNoteHeadBeginX",
                value: function () {
                    return this.getAbsoluteX() + this.x_shift
                }
            }, {
                key: "getNoteHeadEndX",
                value: function () {
                    return this.getNoteHeadBeginX() + this.getGlyphWidth()
                }
            }, {
                key: "drawLedgerLines",
                value: function () {
                    var t = this.stave,
                        e = this.glyph,
                        n = this.render_options.stroke_px,
                        i = this.context,
                        o = e.getWidth() + 2 * n,
                        r = 2 * (e.getWidth() + n) - rt.WIDTH / 2;
                    if (!this.isRest()) {
                        if (!i) throw new h.RERR("NoCanvasContext", "Can't draw without a canvas context.");
                        var s = this.getNoteHeadBounds(),
                            a = s.highest_line,
                            l = s.lowest_line,
                            u = s.highest_displaced_line,
                            c = s.highest_non_displaced_line,
                            f = s.lowest_displaced_line,
                            b = s.lowest_non_displaced_line,
                            p = s.displaced_x,
                            y = s.non_displaced_x,
                            d = Math.min(p, y),
                            v = function (t, e, s) {
                                var a;
                                a = s && e ? d - n : e ? y - n : p - n;
                                var l = e && s ? r : o;
                                i.beginPath(), i.moveTo(a, t), i.lineTo(a + l, t), i.stroke()
                            },
                            g = Te({}, t.getStyle() || {}, this.getLedgerLineStyle() || {});
                        this.applyStyle(i, g);
                        for (var m = 6; m <= a; ++m) {
                            var _ = null !== y && m <= c,
                                x = null !== p && m <= u;
                            v(t.getYForNote(m), _, x)
                        }
                        for (var w = 0; w >= l; --w) {
                            var k = null !== y && w >= b,
                                S = null !== p && w >= f;
                            v(t.getYForNote(w), k, S)
                        }
                        this.restoreStyle(i, g)
                    }
                }
            }, {
                key: "drawModifiers",
                value: function () {
                    if (!this.context) throw new h.RERR("NoCanvasContext", "Can't draw without a canvas context.");
                    var t = this.context;
                    t.openGroup("modifiers");
                    for (var e = 0; e < this.modifiers.length; e++) {
                        var n = this.modifiers[e],
                            i = this.note_heads[n.getIndex()],
                            o = i.getStyle();
                        i.applyStyle(t, o), n.setContext(t), n.draw(), i.restoreStyle(t, o)
                    }
                    t.closeGroup()
                }
            }, {
                key: "drawFlag",
                value: function () {
                    var t = this.stem,
                        e = this.beam,
                        n = this.context;
                    if (!n) throw new h.RERR("NoCanvasContext", "Can't draw without a canvas context.");
                    var i = null === e;
                    if (this.getGlyph().flag && i) {
                        var o = this.getNoteHeadBounds(),
                            r = o.y_top,
                            s = o.y_bottom,
                            a = t.getHeight(),
                            l = this.getStemX(),
                            u = this.getStemDirection() === rt.DOWN ? r - a + 2 : s - a - 2;
                        n.openGroup("flag", null, {
                            pointerBBox: !0
                        }), this.applyStyle(n, this.getFlagStyle() || !1), this.flag.render(n, l, u), this.restoreStyle(n, this.getFlagStyle() || !1), n.closeGroup()
                    }
                }
            }, {
                key: "drawNoteHeads",
                value: function () {
                    var t = this;
                    this.note_heads.forEach(function (e) {
                        t.context.openGroup("notehead", null, {
                            pointerBBox: !0
                        }), e.setContext(t.context).draw(), t.context.closeGroup()
                    })
                }
            }, {
                key: "drawStem",
                value: function (t) {
                    if (!this.context) throw new h.RERR("NoCanvasContext", "Can't draw without a canvas context.");
                    t && this.setStem(new rt(t)), this.context.openGroup("stem", null, {
                        pointerBBox: !0
                    }), this.stem.setContext(this.context).draw(), this.context.closeGroup()
                }
            }, {
                key: "draw",
                value: function () {
                    if (!this.context) throw new h.RERR("NoCanvasContext", "Can't draw without a canvas context.");
                    if (!this.stave) throw new h.RERR("NoStave", "Can't draw without a stave.");
                    if (0 === this.ys.length) throw new h.RERR("NoYValues", "Can't draw note without Y values.");
                    var t = this.getNoteHeadBeginX(),
                        e = this.hasStem() && !this.beam;
                    this.note_heads.forEach(function (e) {
                        return e.setX(t)
                    });
                    var n = this.getStemX();
                    this.stem.setNoteHeadXBounds(n, n),
                        function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            Le.DEBUG && h.L("Vex.Flow.StaveNote", e)
                        }("Rendering ", this.isChord() ? "chord :" : "note :", this.keys), this.drawLedgerLines(), this.applyStyle(), this.setAttribute("el", this.context.openGroup("stavenote", this.getAttribute("id"))), this.context.openGroup("note", null, {
                            pointerBBox: !0
                        }), e && this.drawStem(), this.drawNoteHeads(), this.drawFlag(), this.context.closeGroup(), this.drawModifiers(), this.context.closeGroup(), this.restoreStyle(), this.setRendered()
                }
            }]), e
        }();

        function Me(t) {
            return (Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Fe(t, e) {
            return !e || "object" !== Me(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Be(t) {
            return (Be = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function je(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function De(t, e, n) {
            return e && je(t.prototype, e), n && je(t, n), t
        }

        function Ie(t, e) {
            return (Ie = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Ge = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Fe(this, Be(e).call(this))).setAttribute("type", "FretHandFinger"), n.note = null, n.index = null, n.finger = t, n.width = 7, n.position = de.Position.LEFT, n.x_shift = 0, n.y_shift = 0, n.x_offset = 0, n.y_offset = 0, n.font = {
                    family: "sans-serif",
                    size: 9,
                    weight: "bold"
                }, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ie(t, e)
            }(e, de), De(e, null, [{
                key: "format",
                value: function (t, e) {
                    var n = e.left_shift,
                        i = e.right_shift;
                    if (!t || 0 === t.length) return !1;
                    for (var o = [], r = null, s = 0, a = 0, l = 0; l < t.length; ++l) {
                        var u = t[l],
                            c = u.getNote(),
                            h = u.getPosition(),
                            f = c.getKeyProps()[u.getIndex()];
                        if (c !== r) {
                            for (var b = 0; b < c.keys.length; ++b) {
                                var p = c.getKeyProps()[b];
                                0 === n && (s = p.displaced ? c.getExtraLeftPx() : s), 0 === i && (a = p.displaced ? c.getExtraRightPx() : a)
                            }
                            r = c
                        }
                        o.push({
                            note: c,
                            num: u,
                            pos: h,
                            line: f.line,
                            shiftL: s,
                            shiftR: a
                        })
                    }
                    o.sort(function (t, e) {
                        return e.line - t.line
                    });
                    for (var y = 0, d = 0, v = 0, g = 0, m = null, _ = null, x = 0; x < o.length; ++x) {
                        var w = 0,
                            k = o[x],
                            S = k.note,
                            T = k.pos,
                            E = k.num,
                            O = k.line,
                            R = k.shiftL,
                            P = k.shiftR;
                        O === m && S === _ || (y = n + R, d = i + P);
                        var C = E.getWidth() + 1;
                        T === de.Position.LEFT ? (E.setXShift(n + y), v = (w = n + C) > v ? w : v) : T === de.Position.RIGHT && (E.setXShift(d), g = (w = a + C) > g ? w : g), m = O, _ = S
                    }
                    return e.left_shift += v, e.right_shift += g, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "frethandfinger"
                }
            }]), De(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setFretHandFinger",
                value: function (t) {
                    return this.finger = t, this
                }
            }, {
                key: "setOffsetX",
                value: function (t) {
                    return this.x_offset = t, this
                }
            }, {
                key: "setOffsetY",
                value: function (t) {
                    return this.y_offset = t, this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.note || null == this.index) throw new h.RERR("NoAttachedNote", "Can't draw string number without a note and index.");
                    this.setRendered();
                    var t = this.context,
                        e = this.note.getModifierStartXY(this.position, this.index),
                        n = e.x + this.x_shift + this.x_offset,
                        i = e.y + this.y_shift + this.y_offset + 5;
                    switch (this.position) {
                        case de.Position.ABOVE:
                            n -= 4, i -= 12;
                            break;
                        case de.Position.BELOW:
                            n -= 2, i += 10;
                            break;
                        case de.Position.LEFT:
                            n -= this.width;
                            break;
                        case de.Position.RIGHT:
                            n += 1;
                            break;
                        default:
                            throw new h.RERR("InvalidPostion", "The position ".concat(this.position, " does not exist"))
                    }
                    t.save(), t.setFont(this.font.family, this.font.size, this.font.weight), t.fillText("" + this.finger, n, i), t.restore()
                }
            }]), e
        }();

        function Ye(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var We = function () {
            function t() {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, i;
            return e = t, i = [{
                key: "NUM_TONES",
                get: function () {
                    return 12
                }
            }, {
                key: "roots",
                get: function () {
                    return ["c", "d", "e", "f", "g", "a", "b"]
                }
            }, {
                key: "root_values",
                get: function () {
                    return [0, 2, 4, 5, 7, 9, 11]
                }
            }, {
                key: "root_indices",
                get: function () {
                    return {
                        c: 0,
                        d: 1,
                        e: 2,
                        f: 3,
                        g: 4,
                        a: 5,
                        b: 6
                    }
                }
            }, {
                key: "canonical_notes",
                get: function () {
                    return ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]
                }
            }, {
                key: "diatonic_intervals",
                get: function () {
                    return ["unison", "m2", "M2", "m3", "M3", "p4", "dim5", "p5", "m6", "M6", "b7", "M7", "octave"]
                }
            }, {
                key: "diatonic_accidentals",
                get: function () {
                    return {
                        unison: {
                            note: 0,
                            accidental: 0
                        },
                        m2: {
                            note: 1,
                            accidental: -1
                        },
                        M2: {
                            note: 1,
                            accidental: 0
                        },
                        m3: {
                            note: 2,
                            accidental: -1
                        },
                        M3: {
                            note: 2,
                            accidental: 0
                        },
                        p4: {
                            note: 3,
                            accidental: 0
                        },
                        dim5: {
                            note: 4,
                            accidental: -1
                        },
                        p5: {
                            note: 4,
                            accidental: 0
                        },
                        m6: {
                            note: 5,
                            accidental: -1
                        },
                        M6: {
                            note: 5,
                            accidental: 0
                        },
                        b7: {
                            note: 6,
                            accidental: -1
                        },
                        M7: {
                            note: 6,
                            accidental: 0
                        },
                        octave: {
                            note: 7,
                            accidental: 0
                        }
                    }
                }
            }, {
                key: "intervals",
                get: function () {
                    return {
                        u: 0,
                        unison: 0,
                        m2: 1,
                        b2: 1,
                        min2: 1,
                        S: 1,
                        H: 1,
                        2: 2,
                        M2: 2,
                        maj2: 2,
                        T: 2,
                        W: 2,
                        m3: 3,
                        b3: 3,
                        min3: 3,
                        M3: 4,
                        3: 4,
                        maj3: 4,
                        4: 5,
                        p4: 5,
                        "#4": 6,
                        b5: 6,
                        aug4: 6,
                        dim5: 6,
                        5: 7,
                        p5: 7,
                        "#5": 8,
                        b6: 8,
                        aug5: 8,
                        6: 9,
                        M6: 9,
                        maj6: 9,
                        b7: 10,
                        m7: 10,
                        min7: 10,
                        dom7: 10,
                        M7: 11,
                        maj7: 11,
                        8: 12,
                        octave: 12
                    }
                }
            }, {
                key: "scales",
                get: function () {
                    return {
                        major: [2, 2, 1, 2, 2, 2, 1],
                        dorian: [2, 1, 2, 2, 2, 1, 2],
                        mixolydian: [2, 2, 1, 2, 2, 1, 2],
                        minor: [2, 1, 2, 2, 1, 2, 2]
                    }
                }
            }, {
                key: "scaleTypes",
                get: function () {
                    return {
                        M: t.scales.major,
                        m: t.scales.minor
                    }
                }
            }, {
                key: "accidentals",
                get: function () {
                    return ["bb", "b", "n", "#", "##"]
                }
            }, {
                key: "noteValues",
                get: function () {
                    return {
                        c: {
                            root_index: 0,
                            int_val: 0
                        },
                        cn: {
                            root_index: 0,
                            int_val: 0
                        },
                        "c#": {
                            root_index: 0,
                            int_val: 1
                        },
                        "c##": {
                            root_index: 0,
                            int_val: 2
                        },
                        cb: {
                            root_index: 0,
                            int_val: 11
                        },
                        cbb: {
                            root_index: 0,
                            int_val: 10
                        },
                        d: {
                            root_index: 1,
                            int_val: 2
                        },
                        dn: {
                            root_index: 1,
                            int_val: 2
                        },
                        "d#": {
                            root_index: 1,
                            int_val: 3
                        },
                        "d##": {
                            root_index: 1,
                            int_val: 4
                        },
                        db: {
                            root_index: 1,
                            int_val: 1
                        },
                        dbb: {
                            root_index: 1,
                            int_val: 0
                        },
                        e: {
                            root_index: 2,
                            int_val: 4
                        },
                        en: {
                            root_index: 2,
                            int_val: 4
                        },
                        "e#": {
                            root_index: 2,
                            int_val: 5
                        },
                        "e##": {
                            root_index: 2,
                            int_val: 6
                        },
                        eb: {
                            root_index: 2,
                            int_val: 3
                        },
                        ebb: {
                            root_index: 2,
                            int_val: 2
                        },
                        f: {
                            root_index: 3,
                            int_val: 5
                        },
                        fn: {
                            root_index: 3,
                            int_val: 5
                        },
                        "f#": {
                            root_index: 3,
                            int_val: 6
                        },
                        "f##": {
                            root_index: 3,
                            int_val: 7
                        },
                        fb: {
                            root_index: 3,
                            int_val: 4
                        },
                        fbb: {
                            root_index: 3,
                            int_val: 3
                        },
                        g: {
                            root_index: 4,
                            int_val: 7
                        },
                        gn: {
                            root_index: 4,
                            int_val: 7
                        },
                        "g#": {
                            root_index: 4,
                            int_val: 8
                        },
                        "g##": {
                            root_index: 4,
                            int_val: 9
                        },
                        gb: {
                            root_index: 4,
                            int_val: 6
                        },
                        gbb: {
                            root_index: 4,
                            int_val: 5
                        },
                        a: {
                            root_index: 5,
                            int_val: 9
                        },
                        an: {
                            root_index: 5,
                            int_val: 9
                        },
                        "a#": {
                            root_index: 5,
                            int_val: 10
                        },
                        "a##": {
                            root_index: 5,
                            int_val: 11
                        },
                        ab: {
                            root_index: 5,
                            int_val: 8
                        },
                        abb: {
                            root_index: 5,
                            int_val: 7
                        },
                        b: {
                            root_index: 6,
                            int_val: 11
                        },
                        bn: {
                            root_index: 6,
                            int_val: 11
                        },
                        "b#": {
                            root_index: 6,
                            int_val: 0
                        },
                        "b##": {
                            root_index: 6,
                            int_val: 1
                        },
                        bb: {
                            root_index: 6,
                            int_val: 10
                        },
                        bbb: {
                            root_index: 6,
                            int_val: 9
                        }
                    }
                }
            }], (n = [{
                key: "isValidNoteValue",
                value: function (e) {
                    return !(null == e || e < 0 || e >= t.NUM_TONES)
                }
            }, {
                key: "isValidIntervalValue",
                value: function (t) {
                    return this.isValidNoteValue(t)
                }
            }, {
                key: "getNoteParts",
                value: function (t) {
                    if (!t || t.length < 1) throw new h.RERR("BadArguments", "Invalid note name: " + t);
                    if (t.length > 3) throw new h.RERR("BadArguments", "Invalid note name: " + t);
                    var e = t.toLowerCase(),
                        n = /^([cdefgab])(b|bb|n|#|##)?$/.exec(e);
                    if (null != n) return {
                        root: n[1],
                        accidental: n[2]
                    };
                    throw new h.RERR("BadArguments", "Invalid note name: " + t)
                }
            }, {
                key: "getKeyParts",
                value: function (t) {
                    if (!t || t.length < 1) throw new h.RERR("BadArguments", "Invalid key: " + t);
                    var e = t.toLowerCase(),
                        n = /^([cdefgab])(b|#)?(mel|harm|m|M)?$/.exec(e);
                    if (null != n) {
                        var i = n[1],
                            o = n[2],
                            r = n[3];
                        return r || (r = "M"), {
                            root: i,
                            accidental: o,
                            type: r
                        }
                    }
                    throw new h.RERR("BadArguments", "Invalid key: ".concat(t))
                }
            }, {
                key: "getNoteValue",
                value: function (e) {
                    var n = t.noteValues[e];
                    if (null == n) throw new h.RERR("BadArguments", "Invalid note name: ".concat(e));
                    return n.int_val
                }
            }, {
                key: "getIntervalValue",
                value: function (e) {
                    var n = t.intervals[e];
                    if (null == n) throw new h.RERR("BadArguments", "Invalid interval name: ".concat(e));
                    return n
                }
            }, {
                key: "getCanonicalNoteName",
                value: function (e) {
                    if (!this.isValidNoteValue(e)) throw new h.RERR("BadArguments", "Invalid note value: ".concat(e));
                    return t.canonical_notes[e]
                }
            }, {
                key: "getCanonicalIntervalName",
                value: function (e) {
                    if (!this.isValidIntervalValue(e)) throw new h.RERR("BadArguments", "Invalid interval value: ".concat(e));
                    return t.diatonic_intervals[e]
                }
            }, {
                key: "getRelativeNoteValue",
                value: function (e, n, i) {
                    if (null == i && (i = 1), 1 !== i && -1 !== i) throw new h.RERR("BadArguments", "Invalid direction: ".concat(i));
                    var o = (e + i * n) % t.NUM_TONES;
                    return o < 0 && (o += t.NUM_TONES), o
                }
            }, {
                key: "getRelativeNoteName",
                value: function (e, n) {
                    var i = this.getNoteParts(e),
                        o = this.getNoteValue(i.root),
                        r = n - o;
                    if (Math.abs(r) > t.NUM_TONES - 3) {
                        var s = 1;
                        r > 0 && (s = -1);
                        var a = (n + 1 + (o + 1)) % t.NUM_TONES * s;
                        if (Math.abs(a) > 2) throw new h.RERR("BadArguments", "Notes not related: ".concat(e, ", ").concat(n, ")"));
                        r = a
                    }
                    if (Math.abs(r) > 2) throw new h.RERR("BadArguments", "Notes not related: ".concat(e, ", ").concat(n, ")"));
                    var l = i.root;
                    if (r > 0)
                        for (var u = 1; u <= r; ++u) l += "#";
                    else if (r < 0)
                        for (var c = -1; c >= r; --c) l += "b";
                    return l
                }
            }, {
                key: "getScaleTones",
                value: function (t, e) {
                    for (var n = [t], i = t, o = 0; o < e.length; o += 1)(i = this.getRelativeNoteValue(i, e[o])) !== t && n.push(i);
                    return n
                }
            }, {
                key: "getIntervalBetween",
                value: function (e, n, i) {
                    if (null == i && (i = 1), 1 !== i && -1 !== i) throw new h.RERR("BadArguments", "Invalid direction: ".concat(i));
                    if (!this.isValidNoteValue(e) || !this.isValidNoteValue(n)) throw new h.RERR("BadArguments", "Invalid notes: ".concat(e, ", ").concat(n));
                    var o = 1 === i ? n - e : e - n;
                    return o < 0 && (o += t.NUM_TONES), o
                }
            }, {
                key: "createScaleMap",
                value: function (e) {
                    var n = this.getKeyParts(e),
                        i = t.scaleTypes[n.type],
                        o = n.root;
                    if (n.accidental && (o += n.accidental), !i) throw new h.RERR("BadArguments", "Unsupported key type: " + e);
                    for (var r = this.getScaleTones(this.getNoteValue(o), i), s = t.root_indices[n.root], a = {}, l = 0; l < t.roots.length; ++l) {
                        var u = (s + l) % t.roots.length,
                            c = t.roots[u],
                            f = this.getRelativeNoteName(c, r[l]);
                        1 === f.length && (f += "n"), a[c] = f
                    }
                    return a
                }
            }]) && Ye(e.prototype, n), i && Ye(e, i), t
        }();

        function He(t) {
            return (He = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Xe(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Ue(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = [],
                    i = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function Ve(t, e) {
            return !e || "object" !== He(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ze(t) {
            return (ze = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ke(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Je(t, e, n) {
            return e && Ke(t.prototype, e), n && Ke(t, n), t
        }

        function qe(t, e) {
            return (qe = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Qe() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            $e.DEBUG && h.L("Vex.Flow.Accidental", e)
        }
        var Ze = function (t) {
                return t.getMetrics().width
            },
            $e = function (t) {
                function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (t = Ve(this, ze(e).call(this))).setAttribute("type", "Accidental"), Qe("New accidental: ", n), t.note = null, t.index = null, t.type = n, t.position = de.Position.LEFT, t.render_options = {
                            font_scale: 38,
                            stroke_px: 3,
                            parenLeftPadding: 2,
                            parenRightPadding: 2
                        }, t.accidental = I.accidentalCodes(t.type), !t.accidental) throw new h.RERR("ArgumentError", "Unknown accidental type: ".concat(n));
                    return t.cautionary = !1, t.parenLeft = null, t.parenRight = null, t.reset(), t
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && qe(t, e)
                }(e, de), Je(e, null, [{
                    key: "format",
                    value: function (t, e) {
                        var n = this,
                            i = e.left_shift + 1;
                        if (t && 0 !== t.length) {
                            for (var o = [], r = null, s = 0, a = 0; a < t.length; ++a) {
                                var l = t[a],
                                    u = l.getNote(),
                                    c = u.getStave(),
                                    h = u.getKeyProps()[l.getIndex()];
                                if (u !== r) {
                                    for (var f = 0; f < u.keys.length; ++f) s = u.getKeyProps()[f].displaced ? u.getExtraLeftPx() : s;
                                    r = u
                                }
                                if (null !== c) {
                                    var b = c.options.spacing_between_lines_px,
                                        p = c.getYForLine(h.line),
                                        y = Math.round(p / b * 2) / 2;
                                    o.push({
                                        y: p,
                                        line: y,
                                        shift: s,
                                        acc: l,
                                        lineSpace: b
                                    })
                                } else o.push({
                                    line: h.line,
                                    shift: s,
                                    acc: l
                                })
                            }
                            o.sort(function (t, e) {
                                return e.line - t.line
                            });
                            for (var d = [], v = 0, g = null, m = 0; m < o.length; m++) {
                                var _ = o[m];
                                null !== g && g === _.line || d.push({
                                    line: _.line,
                                    flatLine: !0,
                                    dblSharpLine: !0,
                                    numAcc: 0,
                                    width: 0
                                }), "b" !== _.acc.type && "bb" !== _.acc.type && (d[d.length - 1].flatLine = !1), "##" !== _.acc.type && (d[d.length - 1].dblSharpLine = !1), d[d.length - 1].numAcc++, d[d.length - 1].width += _.acc.getWidth() + 3, v = _.shift > v ? _.shift : v, g = _.line
                            }
                            for (var x = 0, w = function (t) {
                                    for (var e = !1, i = t, o = t; o + 1 < d.length && !e;) n.checkCollision(d[o], d[o + 1]) ? o++ : e = !0;
                                    var r = function (t) {
                                            return d[i + t]
                                        },
                                        s = function (t) {
                                            return t.map(r)
                                        },
                                        a = function (e, n) {
                                            var i = Ue(s([e, n]).map(function (t) {
                                                    return t.line
                                                }), 2),
                                                o = i[0],
                                                r = i[1];
                                            return k = t, o - r
                                        },
                                        l = function () {
                                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                                            return e.map(s).every(function (t) {
                                                return !n.checkCollision.apply(n, Xe(t))
                                            })
                                        },
                                        u = o - i + 1,
                                        c = n.checkCollision(d[i], d[o]) ? "a" : "b";
                                    switch (u) {
                                        case 3:
                                            "a" === c && .5 === a(1, 2) && .5 !== a(0, 1) && (c = "second_on_bottom");
                                            break;
                                        case 4:
                                            l([0, 2], [1, 3]) && (c = "spaced_out_tetrachord");
                                            break;
                                        case 5:
                                            "b" === c && l([1, 3]) && (c = "spaced_out_pentachord", l([0, 2], [2, 4]) && (c = "very_spaced_out_pentachord"));
                                            break;
                                        case 6:
                                            l([0, 3], [1, 4], [2, 5]) && (c = "spaced_out_hexachord"), l([0, 2], [2, 4], [1, 3], [3, 5]) && (c = "very_spaced_out_hexachord")
                                    }
                                    var h = void 0,
                                        f = void 0;
                                    if (u >= 7) {
                                        for (var b = 2, p = !0; !0 === p;) {
                                            p = !1;
                                            for (var y = 0; y + b < d.length; y++)
                                                if (n.checkCollision(d[y], d[y + b])) {
                                                    p = !0, b++;
                                                    break
                                                }
                                        }
                                        for (h = t; h <= o; h++) f = (h - t) % b + 1, d[h].column = f, x = x > f ? x : f
                                    } else
                                        for (h = t; h <= o; h++) f = I.accidentalColumnsTable[u][c][h - t], d[h].column = f, x = x > f ? x : f;
                                    k = t = o
                                }, k = 0; k < d.length; k++) w(k);
                            for (var S = [], T = [], E = 0; E <= x; E++) S[E] = 0, T[E] = 0;
                            S[0] = v + i, T[0] = v + i, d.forEach(function (t) {
                                t.width > S[t.column] && (S[t.column] = t.width)
                            });
                            for (var O = 1; O < S.length; O++) T[O] = S[O] + T[O - 1];
                            var R = T[T.length - 1],
                                P = 0;
                            d.forEach(function (t) {
                                for (var e = 0, n = P + t.numAcc; P < n; P++) {
                                    var i = T[t.column - 1] + e;
                                    o[P].acc.setXShift(i), e += o[P].acc.getWidth() + 3, Qe("Line, accCount, shift: ", t.line, P, i)
                                }
                            }), e.left_shift += R
                        }
                    }
                }, {
                    key: "checkCollision",
                    value: function (t, e) {
                        var n = e.line - t.line,
                            i = 3;
                        n > 0 ? (i = e.flatLine || e.dblSharpLine ? 2.5 : 3, t.dblSharpLine && (n -= .5)) : (i = t.flatLine || t.dblSharpLine ? 2.5 : 3, e.dblSharpLine && (n -= .5));
                        var o = Math.abs(n) < i;
                        return Qe("Line_1, Line_2, Collision: ", t.line, e.line, o), o
                    }
                }, {
                    key: "applyAccidentals",
                    value: function (t, n) {
                        var i = [],
                            o = {};
                        t.forEach(function (t) {
                            var e = new y(0, 1);
                            t.getTickables().forEach(function (t) {
                                if (!t.shouldIgnoreTicks()) {
                                    var n = o[e.value()];
                                    n ? n.push(t) : (i.push(e.value()), o[e.value()] = [t]), e.add(t.getTicks())
                                }
                            })
                        });
                        var r = new We;
                        n || (n = "C");
                        var s = r.createScaleMap(n);
                        i.forEach(function (t) {
                            var n = o[t],
                                i = [];
                            n.forEach(function t(n) {
                                n.isRest() || n.shouldIgnoreTicks() || (n.keys.forEach(function (t, o) {
                                    var a = r.getNoteParts(t.split("/")[0]),
                                        l = a.accidental || "n",
                                        u = a.root + l,
                                        c = s[a.root] === u,
                                        h = i.indexOf(u) > -1;
                                    if (!c || c && h) {
                                        s[a.root] = u;
                                        var f = new e(l);
                                        n.addAccidental(o, f), i.push(u)
                                    }
                                }), n.getModifiers().forEach(function (e) {
                                    "gracenotegroups" === e.getCategory() && e.getGraceNotes().forEach(t)
                                }))
                            })
                        })
                    }
                }, {
                    key: "CATEGORY",
                    get: function () {
                        return "accidentals"
                    }
                }]), Je(e, [{
                    key: "reset",
                    value: function () {
                        var t = this.render_options.font_scale;
                        this.glyph = new j(this.accidental.code, t), this.glyph.setOriginX(1), this.cautionary && (this.parenLeft = new j(I.accidentalCodes("{").code, t), this.parenRight = new j(I.accidentalCodes("}").code, t), this.parenLeft.setOriginX(1), this.parenRight.setOriginX(1))
                    }
                }, {
                    key: "getCategory",
                    value: function () {
                        return e.CATEGORY
                    }
                }, {
                    key: "getWidth",
                    value: function () {
                        var t = this.cautionary ? Ze(this.parenLeft) + Ze(this.parenRight) + this.render_options.parenLeftPadding + this.render_options.parenRightPadding : 0;
                        return Ze(this.glyph) + t
                    }
                }, {
                    key: "setNote",
                    value: function (t) {
                        if (!t) throw new h.RERR("ArgumentError", "Bad note value: ".concat(t));
                        this.note = t, "gracenotes" === this.note.getCategory() && (this.render_options.font_scale = 25, this.reset())
                    }
                }, {
                    key: "setAsCautionary",
                    value: function () {
                        return this.cautionary = !0, this.render_options.font_scale = 28, this.reset(), this
                    }
                }, {
                    key: "draw",
                    value: function () {
                        var t = this.context,
                            e = this.type,
                            n = this.position,
                            i = this.note,
                            o = this.index,
                            r = this.cautionary,
                            s = this.x_shift,
                            a = this.y_shift,
                            l = this.glyph,
                            u = this.parenLeft,
                            c = this.parenRight,
                            f = this.render_options,
                            b = f.parenLeftPadding,
                            p = f.parenRightPadding;
                        if (this.checkContext(), !i || null == o) throw new h.RERR("NoAttachedNote", "Can't draw accidental without a note and index.");
                        var y = i.getModifierStartXY(n, o),
                            d = y.x + s,
                            v = y.y + a;
                        Qe("Rendering: ", e, d, v), r ? (c.render(t, d, v), d -= Ze(c), d -= p, d -= this.accidental.parenRightPaddingAdjustment, l.render(t, d, v), d -= Ze(l), d -= b, u.render(t, d, v)) : l.render(t, d, v), this.setRendered()
                    }
                }]), e
            }();

        function tn(t) {
            return (tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function en(t, e) {
            return !e || "object" !== tn(e) && "function" != typeof e ? on(t) : e
        }

        function nn(t) {
            return (nn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function on(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function rn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function sn(t, e, n) {
            return e && rn(t.prototype, e), n && rn(t, n), t
        }

        function an(t, e) {
            return (an = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ln = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = en(this, nn(e).call(this))).setAttribute("type", "NoteSubGroup"), n.note = null, n.index = null, n.position = de.Position.LEFT, n.subNotes = t, n.subNotes.forEach(function (t) {
                    t.ignore_ticks = !1
                }), n.width = 0, n.preFormatted = !1, n.formatter = new qi, n.voice = new Rt({
                    num_beats: 4,
                    beat_value: 4,
                    resolution: I.RESOLUTION
                }).setStrict(!1), n.voice.addTickables(n.subNotes), en(n, on(n))
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && an(t, e)
            }(e, de), sn(e, null, [{
                key: "format",
                value: function (t, e) {
                    if (!t || 0 === t.length) return !1;
                    for (var n = 0, i = 0; i < t.length; ++i) {
                        var o = t[i];
                        o.preFormat(), n += o.getWidth()
                    }
                    return e.left_shift += n, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "notesubgroup"
                }
            }]), sn(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "preFormat",
                value: function () {
                    this.preFormatted || (this.formatter.joinVoices([this.voice]).format([this.voice], 0), this.setWidth(this.formatter.getMinTotalWidth()), this.preFormatted = !0)
                }
            }, {
                key: "setNote",
                value: function (t) {
                    this.note = t
                }
            }, {
                key: "setWidth",
                value: function (t) {
                    this.width = t
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this;
                    this.checkContext();
                    var e = this.getNote();
                    if (!e || null === this.index) throw new h.RuntimeError("NoAttachedNote", "Can't draw notes without a parent note and parent note index.");
                    this.setRendered(), this.alignSubNotesWithNote(this.subNotes, e), this.subNotes.forEach(function (e) {
                        return e.setContext(t.context).draw()
                    })
                }
            }]), e
        }();

        function un(t) {
            return (un = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function cn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function hn(t, e) {
            return !e || "object" !== un(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function fn(t) {
            return (fn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function bn(t, e) {
            return (bn = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var pn = function (t) {
            function e(t, n) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = hn(this, fn(e).call(this))).setAttribute("type", "StaveTie"), i.notes = t, i.context = null, i.text = n, i.direction = null, i.render_options = {
                    cp1: 8,
                    cp2: 12,
                    text_shift_x: 0,
                    first_x_shift: 0,
                    last_x_shift: 0,
                    y_shift: 7,
                    tie_spacing: 0,
                    font: {
                        family: "Arial",
                        size: 10,
                        style: ""
                    }
                }, i.font = i.render_options.font, i.setNotes(t), i
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && bn(t, e)
            }(e, k), n = e, (i = [{
                key: "setFont",
                value: function (t) {
                    return this.font = t, this
                }
            }, {
                key: "setDirection",
                value: function (t) {
                    return this.direction = t, this
                }
            }, {
                key: "setNotes",
                value: function (t) {
                    if (!t.first_note && !t.last_note) throw new h.RuntimeError("BadArguments", "Tie needs to have either first_note or last_note set.");
                    if (t.first_indices || (t.first_indices = [0]), t.last_indices || (t.last_indices = [0]), t.first_indices.length !== t.last_indices.length) throw new h.RuntimeError("BadArguments", "Tied notes must have similar index sizes");
                    return this.first_note = t.first_note, this.first_indices = t.first_indices, this.last_note = t.last_note, this.last_indices = t.last_indices, this
                }
            }, {
                key: "isPartial",
                value: function () {
                    return !this.first_note || !this.last_note
                }
            }, {
                key: "renderTie",
                value: function (t) {
                    if (0 === t.first_ys.length || 0 === t.last_ys.length) throw new h.RERR("BadArguments", "No Y-values to render");
                    var e = this.context,
                        n = this.render_options.cp1,
                        i = this.render_options.cp2;
                    Math.abs(t.last_x_px - t.first_x_px) < 10 && (n = 2, i = 8);
                    for (var o = this.render_options.first_x_shift, r = this.render_options.last_x_shift, s = this.render_options.y_shift * t.direction, a = 0; a < this.first_indices.length; ++a) {
                        var l = (t.last_x_px + r + (t.first_x_px + o)) / 2,
                            u = t.first_ys[this.first_indices[a]] + s,
                            c = t.last_ys[this.last_indices[a]] + s;
                        if (isNaN(u) || isNaN(c)) throw new h.RERR("BadArguments", "Bad indices for tie rendering.");
                        var f = (u + c) / 2 + n * t.direction,
                            b = (u + c) / 2 + i * t.direction;
                        e.beginPath(), e.moveTo(t.first_x_px + o, u), e.quadraticCurveTo(l, f, t.last_x_px + r, c), e.quadraticCurveTo(l, b, t.first_x_px + o, u), e.closePath(), e.fill()
                    }
                }
            }, {
                key: "renderText",
                value: function (t, e) {
                    if (this.text) {
                        var n = (t + e) / 2;
                        n -= this.context.measureText(this.text).width / 2, this.context.save(), this.context.setFont(this.font.family, this.font.size, this.font.style), this.context.fillText(this.text, n + this.render_options.text_shift_x, (this.first_note || this.last_note).getStave().getYForTopText() - 1), this.context.restore()
                    }
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered();
                    var t, e, n, i, o, r = this.first_note,
                        s = this.last_note;
                    return r ? (t = r.getTieRightX() + this.render_options.tie_spacing, o = r.getStemDirection(), n = r.getYs()) : (t = s.getStave().getTieStartX(), n = s.getYs(), this.first_indices = this.last_indices), s ? (e = s.getTieLeftX() + this.render_options.tie_spacing, o = s.getStemDirection(), i = s.getYs()) : (e = r.getStave().getTieEndX(), i = r.getYs(), this.last_indices = this.first_indices), this.direction && (o = this.direction), this.renderTie({
                        first_x_px: t,
                        last_x_px: e,
                        first_ys: n,
                        last_ys: i,
                        direction: o
                    }), this.renderText(t, e), !0
                }
            }]) && cn(n.prototype, i), o && cn(n, o), e
        }();

        function yn(t) {
            return (yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function dn(t, e) {
            return !e || "object" !== yn(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function vn(t) {
            return (vn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function gn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function mn(t, e, n) {
            return e && gn(t.prototype, e), n && gn(t, n), t
        }

        function _n(t, e) {
            return (_n = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var xn = function (t) {
            function e(t, n) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = dn(this, vn(e).call(this, t, n))).setAttribute("type", "TabTie"), i.render_options.cp1 = 9, i.render_options.cp2 = 11, i.render_options.y_shift = 3, i.setNotes(t), i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && _n(t, e)
            }(e, pn), mn(e, null, [{
                key: "createHammeron",
                value: function (t) {
                    return new e(t, "H")
                }
            }, {
                key: "createPulloff",
                value: function (t) {
                    return new e(t, "P")
                }
            }]), mn(e, [{
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered();
                    var t, e, n, i, o = this.first_note,
                        r = this.last_note;
                    return o ? (t = o.getTieRightX() + this.render_options.tie_spacing, n = o.getYs()) : (t = r.getStave().getTieStartX(), n = r.getYs(), this.first_indices = this.last_indices), r ? (e = r.getTieLeftX() + this.render_options.tie_spacing, i = r.getYs()) : (e = o.getStave().getTieEndX(), i = o.getYs(), this.last_indices = this.first_indices), this.renderTie({
                        first_x_px: t,
                        last_x_px: e,
                        first_ys: n,
                        last_ys: i,
                        direction: -1
                    }), this.renderText(t, e), !0
                }
            }]), e
        }();

        function wn(t) {
            return (wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function kn(t, e) {
            return !e || "object" !== wn(e) && "function" != typeof e ? Tn(t) : e
        }

        function Sn(t) {
            return (Sn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Tn(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function En(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function On(t, e, n) {
            return e && En(t.prototype, e), n && En(t, n), t
        }

        function Rn(t, e) {
            return (Rn = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Pn = function (t) {
            function e(t, n) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = kn(this, Sn(e).call(this))).setAttribute("type", "GraceNoteGroup"), i.note = null, i.index = null, i.position = de.Position.LEFT, i.grace_notes = t, i.width = 0, i.preFormatted = !1, i.show_slur = n, i.slur = null, i.formatter = new qi, i.voice = new Rt({
                    num_beats: 4,
                    beat_value: 4,
                    resolution: I.RESOLUTION
                }).setStrict(!1), i.render_options = {
                    slur_y_shift: 0
                }, i.beams = [], i.voice.addTickables(i.grace_notes), kn(i, Tn(i))
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Rn(t, e)
            }(e, de), On(e, null, [{
                key: "format",
                value: function (t, e) {
                    if (!t || 0 === t.length) return !1;
                    for (var n = [], i = null, o = 0, r = 0; r < t.length; ++r) {
                        var s = t[r],
                            a = s.getNote(),
                            l = a.getCategory() === Le.CATEGORY,
                            u = l ? 4 : 0;
                        if (l && a !== i) {
                            for (var c = 0; c < a.keys.length; ++c) {
                                o = a.getKeyProps()[c].displaced ? a.getExtraLeftPx() : o
                            }
                            i = a
                        }
                        n.push({
                            shift: o,
                            gracenote_group: s,
                            spacing: u
                        })
                    }
                    for (var h, f = n[0].shift, b = 0; b < n.length; ++b) {
                        var p = n[b].gracenote_group;
                        p.preFormat(), h = p.getWidth() + n[b].spacing, f = Math.max(h, f)
                    }
                    for (var y = 0; y < n.length; ++y) {
                        var d = n[y].gracenote_group;
                        h = d.getWidth() + n[y].spacing, d.setSpacingFromNextModifier(f - Math.min(h, f))
                    }
                    return e.left_shift += f, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "gracenotegroups"
                }
            }]), On(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "preFormat",
                value: function () {
                    this.preFormatted || (this.formatter.joinVoices([this.voice]).format([this.voice], 0), this.setWidth(this.formatter.getMinTotalWidth()), this.preFormatted = !0)
                }
            }, {
                key: "beamNotes",
                value: function (t) {
                    if ((t = t || this.grace_notes).length > 1) {
                        var e = new xt(t);
                        e.render_options.beam_width = 3, e.render_options.partial_beam_length = 4, this.beams.push(e)
                    }
                    return this
                }
            }, {
                key: "setNote",
                value: function (t) {
                    this.note = t
                }
            }, {
                key: "setWidth",
                value: function (t) {
                    this.width = t
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "getGraceNotes",
                value: function () {
                    return this.grace_notes
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this;
                    this.checkContext();
                    var e = this.getNote();
                    if (function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            Pn.DEBUG && h.L("Vex.Flow.GraceNoteGroup", e)
                        }("Drawing grace note group for:", e), !e || null === this.index) throw new h.RuntimeError("NoAttachedNote", "Can't draw grace note without a parent note and parent note index.");
                    if (this.setRendered(), this.alignSubNotesWithNote(this.getGraceNotes(), e), this.grace_notes.forEach(function (e) {
                            e.setContext(t.context).draw()
                        }), this.beams.forEach(function (e) {
                            e.setContext(t.context).draw()
                        }), this.show_slur) {
                        var n = this.getNote().getCategory() === Le.CATEGORY,
                            i = n ? pn : xn;
                        this.slur = new i({
                            last_note: this.grace_notes[0],
                            first_note: e,
                            first_indices: [0],
                            last_indices: [0]
                        }), this.slur.render_options.cp2 = 12, this.slur.render_options.y_shift = (n ? 7 : 5) + this.render_options.slur_y_shift, this.slur.setContext(this.context).draw()
                    }
                }
            }]), e
        }();

        function Cn(t) {
            return (Cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Nn(t, e) {
            return !e || "object" !== Cn(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function An(t) {
            return (An = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ln(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Mn(t, e, n) {
            return e && Ln(t.prototype, e), n && Ln(t, n), t
        }

        function Fn(t, e) {
            return (Fn = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Bn = function (t) {
            function e(t, n) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = Nn(this, An(e).call(this))).setAttribute("type", "Stroke"), i.note = null, i.options = h.Merge({}, n), i.all_voices = !("all_voices" in i.options) || i.options.all_voices, i.note_end = null, i.index = null, i.type = t, i.position = de.Position.LEFT, i.render_options = {
                    font_scale: 38,
                    stroke_px: 3,
                    stroke_spacing: 10
                }, i.font = {
                    family: "serif",
                    size: 10,
                    weight: "bold italic"
                }, i.setXShift(0), i.setWidth(10), i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Fn(t, e)
            }(e, de), Mn(e, null, [{
                key: "format",
                value: function (t, e) {
                    var n = e.left_shift;
                    if (!t || 0 === t.length) return this;
                    var i = t.map(function (t) {
                            var e = t.getNote();
                            if (e instanceof Le) {
                                var n = e.getKeyProps()[t.getIndex()];
                                return {
                                    line: n.line,
                                    shift: n.displaced ? e.getExtraLeftPx() : 0,
                                    stroke: t
                                }
                            }
                            return {
                                line: e.getPositions()[t.getIndex()].str,
                                shift: 0,
                                stroke: t
                            }
                        }),
                        o = n,
                        r = i.reduce(function (t, e) {
                            var n = e.stroke,
                                i = e.shift;
                            return n.setXShift(o + i), Math.max(n.getWidth() + 0, t)
                        }, 0);
                    return e.left_shift += r, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "strokes"
                }
            }, {
                key: "Type",
                get: function () {
                    return {
                        BRUSH_DOWN: 1,
                        BRUSH_UP: 2,
                        ROLL_DOWN: 3,
                        ROLL_UP: 4,
                        RASQUEDO_DOWN: 5,
                        RASQUEDO_UP: 6,
                        ARPEGGIO_DIRECTIONLESS: 7
                    }
                }
            }]), Mn(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "getPosition",
                value: function () {
                    return this.position
                }
            }, {
                key: "addEndNote",
                value: function (t) {
                    return this.note_end = t, this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), this.setRendered(), !this.note || null == this.index) throw new h.RERR("NoAttachedNote", "Can't draw stroke without a note and index.");
                    for (var t, n, i, o, r, s = this.note.getModifierStartXY(this.position, this.index), a = this.note.getYs(), l = s.y, u = s.y, c = s.x - 5, f = this.note.stave.options.spacing_between_lines_px, b = this.getModifierContext().getModifiers(this.note.getCategory()), p = 0; p < b.length; p++) {
                        a = b[p].getYs();
                        for (var y = 0; y < a.length; y++)(this.note === b[p] || this.all_voices) && (l = h.Min(l, a[y]), u = h.Max(u, a[y]))
                    }
                    switch (this.type) {
                        case e.Type.BRUSH_DOWN:
                            t = "vc3", n = -3, i = l - f / 2 + 10, u += f / 2;
                            break;
                        case e.Type.BRUSH_UP:
                            t = "v11", n = .5, i = u + f / 2, l -= f / 2;
                            break;
                        case e.Type.ROLL_DOWN:
                        case e.Type.RASQUEDO_DOWN:
                            t = "vc3", n = -3, o = this.x_shift + n - 2, this.note instanceof Le ? (i = (l += 1.5 * f) - f, r = (u += (u - l) % 2 != 0 ? .5 * f : f) + f + 2) : (i = (l += 1.5 * f) - .75 * f, r = (u += f) + .25 * f);
                            break;
                        case e.Type.ROLL_UP:
                        case e.Type.RASQUEDO_UP:
                            t = "v52", n = -4, o = this.x_shift + n - 1, this.note instanceof Le ? (i = f / 2, (u - (l += .5 * f)) % 2 == 0 && (u += f / 2), i = u + .5 * f, r = l - 1.25 * f) : (i = (u += .5 * f) + .25 * f, r = (l += .25 * f) - f);
                            break;
                        case e.Type.ARPEGGIO_DIRECTIONLESS:
                            l += .5 * f, u += f;
                            break;
                        default:
                            throw new h.RERR("InvalidType", "The stroke type ".concat(this.type, " does not exist"))
                    }
                    if (this.type === e.Type.BRUSH_DOWN || this.type === e.Type.BRUSH_UP) this.context.fillRect(c + this.x_shift, l, 1, u - l);
                    else if (this.note instanceof Le)
                        for (var d = l; d <= u; d += f) j.renderGlyph(this.context, c + this.x_shift - 4, d, this.render_options.font_scale, "va3");
                    else {
                        var v;
                        for (v = l; v <= u; v += 10) j.renderGlyph(this.context, c + this.x_shift - 4, v, this.render_options.font_scale, "va3");
                        this.type === e.Type.RASQUEDO_DOWN && (r = v + .25 * f)
                    }
                    this.type !== e.Type.ARPEGGIO_DIRECTIONLESS && (j.renderGlyph(this.context, c + this.x_shift + n, i, this.render_options.font_scale, t), this.type !== e.Type.RASQUEDO_DOWN && this.type !== e.Type.RASQUEDO_UP || (this.context.save(), this.context.setFont(this.font.family, this.font.size, this.font.weight), this.context.fillText("R", c + o, r), this.context.restore()))
                }
            }]), e
        }();

        function jn(t) {
            return (jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Dn(t, e) {
            return !e || "object" !== jn(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function In(t) {
            return (In = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Gn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Yn(t, e, n) {
            return e && Gn(t.prototype, e), n && Gn(t, n), t
        }

        function Wn(t, e) {
            return (Wn = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Hn = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Dn(this, In(e).call(this))).setAttribute("type", "StringNumber"), n.note = null, n.last_note = null, n.index = null, n.string_number = t, n.setWidth(20), n.position = de.Position.ABOVE, n.x_shift = 0, n.y_shift = 0, n.x_offset = 0, n.y_offset = 0, n.dashed = !0, n.leg = Z.LineEndType.NONE, n.radius = 8, n.font = {
                    family: "sans-serif",
                    size: 10,
                    weight: "bold"
                }, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Wn(t, e)
            }(e, de), Yn(e, null, [{
                key: "format",
                value: function (t, e) {
                    var n = e.left_shift,
                        i = e.right_shift;
                    if (!t || 0 === t.length) return this;
                    var o, r, s, a, l, u = [],
                        c = null,
                        h = 0,
                        f = 0;
                    for (o = 0; o < t.length; ++o)
                        for (s = (r = t[o]).getNote(), o = 0; o < t.length; ++o) {
                            s = (r = t[o]).getNote(), a = r.getPosition();
                            var b = s.getKeyProps()[r.getIndex()];
                            if (s !== c) {
                                for (var p = 0; p < s.keys.length; ++p) l = s.getKeyProps()[p], 0 === n && (h = l.displaced ? s.getExtraLeftPx() : h), 0 === i && (f = l.displaced ? s.getExtraRightPx() : f);
                                c = s
                            }
                            u.push({
                                pos: a,
                                note: s,
                                num: r,
                                line: b.line,
                                shiftL: h,
                                shiftR: f
                            })
                        }
                    u.sort(function (t, e) {
                        return e.line - t.line
                    });
                    var y = 0,
                        d = 0,
                        v = 0,
                        g = null,
                        m = null;
                    for (o = 0; o < u.length; ++o) {
                        var _ = 0;
                        s = u[o].note, a = u[o].pos, r = u[o].num;
                        var x = u[o].line,
                            w = u[o].shiftL,
                            k = u[o].shiftR;
                        x === g && s === m || (n + w, y = i + k);
                        var S = r.getWidth() + 1;
                        a === de.Position.LEFT ? (r.setXShift(n), d = (_ = h + S) > d ? _ : d) : a === de.Position.RIGHT && (r.setXShift(y), v = (_ += S) > v ? _ : v), g = x, m = s
                    }
                    return e.left_shift += d, e.right_shift += v, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "stringnumber"
                }
            }]), Yn(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "getNote",
                value: function () {
                    return this.note
                }
            }, {
                key: "setNote",
                value: function (t) {
                    return this.note = t, this
                }
            }, {
                key: "getIndex",
                value: function () {
                    return this.index
                }
            }, {
                key: "setIndex",
                value: function (t) {
                    return this.index = t, this
                }
            }, {
                key: "setLineEndType",
                value: function (t) {
                    return t >= Z.LineEndType.NONE && t <= Z.LineEndType.DOWN && (this.leg = t), this
                }
            }, {
                key: "setStringNumber",
                value: function (t) {
                    return this.string_number = t, this
                }
            }, {
                key: "setOffsetX",
                value: function (t) {
                    return this.x_offset = t, this
                }
            }, {
                key: "setOffsetY",
                value: function (t) {
                    return this.y_offset = t, this
                }
            }, {
                key: "setLastNote",
                value: function (t) {
                    return this.last_note = t, this
                }
            }, {
                key: "setDashed",
                value: function (t) {
                    return this.dashed = t, this
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this.checkContext();
                    if (!this.note || null == this.index) throw new h.RERR("NoAttachedNote", "Can't draw string number without a note and index.");
                    this.setRendered();
                    var e = this.note.stave.options.spacing_between_lines_px,
                        n = this.note.getModifierStartXY(this.position, this.index),
                        i = n.x + this.x_shift + this.x_offset,
                        o = n.y + this.y_shift + this.y_offset;
                    switch (this.position) {
                        case de.Position.ABOVE:
                        case de.Position.BELOW:
                            var r = this.note.getStemExtents(),
                                s = r.topY,
                                a = r.baseY + 2;
                            this.note.stem_direction === Le.STEM_DOWN && (s = r.baseY, a = r.topY - 2), o = this.position === de.Position.ABOVE ? this.note.hasStem() ? s - 1.75 * e : n.y - 1.75 * e : this.note.hasStem() ? a + 1.5 * e : n.y + 1.75 * e, o += this.y_shift + this.y_offset;
                            break;
                        case de.Position.LEFT:
                            i -= this.radius / 2 + 5;
                            break;
                        case de.Position.RIGHT:
                            i += this.radius / 2 + 6;
                            break;
                        default:
                            throw new h.RERR("InvalidPosition", "The position ".concat(this.position, " is invalid"))
                    }
                    t.save(), t.beginPath(), t.arc(i, o, this.radius, 0, 2 * Math.PI, !1), t.lineWidth = 1.5, t.stroke(), t.setFont(this.font.family, this.font.size, this.font.weight);
                    var l = i - t.measureText(this.string_number).width / 2;
                    if (t.fillText("" + this.string_number, l, o + 4.5), null != this.last_note) {
                        var u, c, f = this.last_note.getStemX() - this.note.getX() + 5;
                        switch (t.strokeStyle = "#000000", t.lineCap = "round", t.lineWidth = .6, this.dashed ? Z.drawDashedLine(t, i + 10, o, i + f, o, [3, 3]) : Z.drawDashedLine(t, i + 10, o, i + f, o, [3, 0]), this.leg) {
                            case Z.LineEndType.UP:
                                u = -10, c = this.dashed ? [3, 3] : [3, 0], Z.drawDashedLine(t, i + f, o, i + f, o + u, c);
                                break;
                            case Z.LineEndType.DOWN:
                                u = 10, c = this.dashed ? [3, 3] : [3, 0], Z.drawDashedLine(t, i + f, o, i + f, o + u, c)
                        }
                    }
                    t.restore()
                }
            }]), e
        }();

        function Xn(t) {
            return (Xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Un(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function Vn(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = [],
                    i = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function zn(t, e) {
            return !e || "object" !== Xn(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Kn(t) {
            return (Kn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Jn(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function qn(t, e, n) {
            return e && Jn(t.prototype, e), n && Jn(t, n), t
        }

        function Qn(t, e) {
            return (Qn = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Zn(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var $n = de.Position,
            ti = $n.ABOVE,
            ei = $n.BELOW,
            ni = function (t, e) {
                return .5 * t(e / .5)
            },
            ii = function (t, e) {
                return e === ti ? t <= 5 : t >= 1
            },
            oi = function (t, e) {
                return ii(t, e) ? e === ti ? Math.ceil : Math.floor : Math.round
            },
            ri = function (t) {
                var e = t.getCategory();
                return "stavenotes" === e || "gracenotes" === e
            },
            si = function (t) {
                function e(t) {
                    var n;
                    if (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (n = zn(this, Kn(e).call(this))).setAttribute("type", "Articulation"), n.note = null, n.index = null, n.type = t, n.position = ei, n.render_options = {
                            font_scale: 38
                        }, n.articulation = I.articulationCodes(n.type), !n.articulation) throw new h.RERR("ArgumentError", "Articulation not found: ".concat(n.type));
                    return n.glyph = new j(n.articulation.code, n.render_options.font_scale), n.setWidth(n.glyph.getMetrics().width), n
                }
                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && Qn(t, e)
                }(e, de), qn(e, null, [{
                    key: "format",
                    value: function (t, e) {
                        if (!t || 0 === t.length) return !1;
                        var n = function (t, e, n) {
                            return ni(oi(e, n), t.glyph.getMetrics().height / 10 + .5)
                        };
                        t.filter(function (t) {
                            return t.getPosition() === ti
                        }).forEach(function (t) {
                            t.setTextLine(e.top_text_line), e.top_text_line += n(t, e.top_text_line, ti)
                        }), t.filter(function (t) {
                            return t.getPosition() === ei
                        }).forEach(function (t) {
                            t.setTextLine(e.text_line), e.text_line += n(t, e.text_line, ei)
                        });
                        var i = t.map(function (t) {
                            return t.getWidth()
                        }).reduce(function (t, e) {
                            return Math.max(e, t)
                        });
                        return e.left_shift += i / 2, e.right_shift += i / 2, !0
                    }
                }, {
                    key: "easyScoreHook",
                    value: function (t, e, n) {
                        var i = t.articulations;
                        if (i) {
                            var o = {
                                staccato: "a.",
                                tenuto: "a-"
                            };
                            i.split(",").map(function (t) {
                                return t.trim().split(".")
                            }).map(function (t) {
                                var e = Vn(t, 2),
                                    i = e[0],
                                    r = e[1],
                                    s = {
                                        type: o[i]
                                    };
                                return r && (s.position = de.PositionString[r]), n.getFactory().Articulation(s)
                            }).map(function (t) {
                                return e.addModifier(0, t)
                            })
                        }
                    }
                }, {
                    key: "CATEGORY",
                    get: function () {
                        return "articulations"
                    }
                }, {
                    key: "INITIAL_OFFSET",
                    get: function () {
                        return -.5
                    }
                }]), qn(e, [{
                    key: "getCategory",
                    value: function () {
                        return e.CATEGORY
                    }
                }, {
                    key: "draw",
                    value: function () {
                        var t, n = this.note,
                            i = this.index,
                            o = this.position,
                            r = this.glyph,
                            s = this.articulation.between_lines,
                            a = this.text_line,
                            l = this.context;
                        if (this.checkContext(), !n || null == i) throw new h.RERR("NoAttachedNote", "Can't draw Articulation without a note and index.");
                        this.setRendered();
                        var u = n.getStave(),
                            c = u.getSpacingBetweenLines(),
                            f = "tabnotes" === n.getCategory(),
                            b = n.getModifierStartXY(o, i).x,
                            p = !s || f,
                            y = function (t, e) {
                                var n = e === ti && t.getStemDirection() === rt.UP || e === ei && t.getStemDirection() === rt.DOWN;
                                return ri(t) ? t.hasStem() && n ? .5 : 1 : t.hasStem() && n ? 1 : 0
                            }(n, o),
                            d = (t = {}, Un(t, ti, function () {
                                r.setOrigin(.5, 1);
                                var t = function (t, e) {
                                    var n = t.getStave(),
                                        i = t.getStemDirection(),
                                        o = t.getStemExtents(),
                                        r = o.topY,
                                        s = o.baseY;
                                    if (ri(t)) return t.hasStem() ? i === rt.UP ? r : s : Math.min.apply(Math, Zn(t.getYs()));
                                    if ("tabnotes" === t.getCategory()) return t.hasStem() && i === rt.UP ? r : n.getYForTopText(e);
                                    throw new h.RERR("UnknownCategory", "Only can get the top and bottom ys of stavenotes and tabnotes")
                                }(n, a) - (a + y) * c;
                                return p ? Math.min(u.getYForTopText(e.INITIAL_OFFSET), t) : t
                            }), Un(t, ei, function () {
                                r.setOrigin(.5, 0);
                                var t = function (t, e) {
                                    var n = t.getStave(),
                                        i = t.getStemDirection(),
                                        o = t.getStemExtents(),
                                        r = o.topY,
                                        s = o.baseY;
                                    if (ri(t)) return t.hasStem() ? i === rt.UP ? s : r : Math.max.apply(Math, Zn(t.getYs()));
                                    if ("tabnotes" === t.getCategory()) return t.hasStem() ? i === rt.UP ? n.getYForBottomText(e) : r : n.getYForBottomText(e);
                                    throw new h.RERR("UnknownCategory", "Only can get the top and bottom ys of stavenotes and tabnotes")
                                }(n, a) + (a + y) * c;
                                return p ? Math.max(u.getYForBottomText(e.INITIAL_OFFSET), t) : t
                            }), t)[o]();
                        if (!f) {
                            var v = o === ti ? -1 : 1,
                                g = f ? n.positions[i].str : n.getKeyProps()[i].line,
                                m = (n.getYs()[i] - d) / c + g,
                                _ = function (t, e, n, i) {
                                    var o = ni(oi(e, n), e);
                                    if (t && ii(o, n) && o % 1 == 0) return o + .5 * -i;
                                    return o
                                }(s, m, o, v);
                            ii(_, o) && r.setOrigin(.5, .5), d += Math.abs(_ - m) * c * v
                        }! function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            si.DEBUG && h.L("Vex.Flow.Articulation", e)
                        }("Rendering articulation at (x: ".concat(b, ", y: ").concat(d, ")")), r.render(l, b, d)
                    }
                }]), e
            }();

        function ai(t) {
            return (ai = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function li(t, e) {
            return !e || "object" !== ai(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ui(t) {
            return (ui = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ci(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function hi(t, e, n) {
            return e && ci(t.prototype, e), n && ci(t, n), t
        }

        function fi(t, e) {
            return (fi = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var bi = function (t) {
            function e() {
                var t;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = li(this, ui(e).call(this))).setAttribute("type", "TickContext"), t.currentTick = new y(0, 1), t.maxTicks = new y(0, 1), t.minTicks = null, t.padding = 3, t.x = 0, t.xBase = 0, t.xOffset = 0, t.tickables = [], t.notePx = 0, t.extraLeftPx = 0, t.extraRightPx = 0, t.tContexts = [], t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && fi(t, e)
            }(e, Wt), hi(e, null, [{
                key: "getNextContext",
                value: function (t) {
                    var e = t.tContexts,
                        n = e.indexOf(t);
                    return e[n + 1]
                }
            }]), hi(e, [{
                key: "getX",
                value: function () {
                    return this.x
                }
            }, {
                key: "setX",
                value: function (t) {
                    return this.x = t, this.xBase = t, this.xOffset = 0, this
                }
            }, {
                key: "getXBase",
                value: function () {
                    return this.xBase
                }
            }, {
                key: "setXBase",
                value: function (t) {
                    this.xBase = t, this.x = t + this.xOffset
                }
            }, {
                key: "getXOffset",
                value: function () {
                    return this.xOffset
                }
            }, {
                key: "setXOffset",
                value: function (t) {
                    this.xOffset = t, this.x = this.xBase + t
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width + 2 * this.padding
                }
            }, {
                key: "setPadding",
                value: function (t) {
                    return this.padding = t, this
                }
            }, {
                key: "getMaxTicks",
                value: function () {
                    return this.maxTicks
                }
            }, {
                key: "getMinTicks",
                value: function () {
                    return this.minTicks
                }
            }, {
                key: "getTickables",
                value: function () {
                    return this.tickables
                }
            }, {
                key: "getCenterAlignedTickables",
                value: function () {
                    return this.tickables.filter(function (t) {
                        return t.isCenterAligned()
                    })
                }
            }, {
                key: "getMetrics",
                value: function () {
                    return {
                        width: this.width,
                        notePx: this.notePx,
                        extraLeftPx: this.extraLeftPx,
                        extraRightPx: this.extraRightPx
                    }
                }
            }, {
                key: "getCurrentTick",
                value: function () {
                    return this.currentTick
                }
            }, {
                key: "setCurrentTick",
                value: function (t) {
                    this.currentTick = t, this.preFormatted = !1
                }
            }, {
                key: "getExtraPx",
                value: function () {
                    for (var t = 0, e = 0, n = 0, i = 0, o = 0; o < this.tickables.length; o++) {
                        n = Math.max(this.tickables[o].extraLeftPx || 0, n), i = Math.max(this.tickables[o].extraRightPx || 0, i);
                        var r = this.tickables[o].modifierContext;
                        r && null != r && (t = Math.max(t, r.state.left_shift), e = Math.max(e, r.state.right_shift))
                    }
                    return {
                        left: t,
                        right: e,
                        extraLeft: n,
                        extraRight: i
                    }
                }
            }, {
                key: "addTickable",
                value: function (t) {
                    if (!t) throw new h.RERR("BadArgument", "Invalid tickable added.");
                    if (!t.shouldIgnoreTicks()) {
                        this.ignore_ticks = !1;
                        var e = t.getTicks();
                        e.greaterThan(this.maxTicks) && (this.maxTicks = e.clone()), null == this.minTicks ? this.minTicks = e.clone() : e.lessThan(this.minTicks) && (this.minTicks = e.clone())
                    }
                    return t.setTickContext(this), this.tickables.push(t), this.preFormatted = !1, this
                }
            }, {
                key: "preFormat",
                value: function () {
                    if (this.preFormatted) return this;
                    for (var t = 0; t < this.tickables.length; ++t) {
                        var e = this.tickables[t];
                        e.preFormat();
                        var n = e.getMetrics();
                        this.extraLeftPx = Math.max(this.extraLeftPx, n.extraLeftPx + n.modLeftPx), this.extraRightPx = Math.max(this.extraRightPx, n.extraRightPx + n.modRightPx), this.notePx = Math.max(this.notePx, n.noteWidth), this.width = this.notePx + this.extraLeftPx + this.extraRightPx
                    }
                    return this
                }
            }, {
                key: "postFormat",
                value: function () {
                    return this.postFormatted ? this : (this.postFormatted = !0, this)
                }
            }]), e
        }();

        function pi(t) {
            return (pi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function yi(t, e) {
            return !e || "object" !== pi(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function di(t) {
            return (di = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function vi(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function gi(t, e, n) {
            return e && vi(t.prototype, e), n && vi(t, n), t
        }

        function mi(t, e) {
            return (mi = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var _i = function (t) {
            function e(t) {
                var n;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = yi(this, di(e).call(this))).setAttribute("type", "Ornament"), n.note = null, n.index = null, n.type = t, n.position = de.Position.ABOVE, n.delayed = !1, n.accidentalUpper = null, n.accidentalLower = null, n.render_options = {
                        font_scale: 38,
                        accidentalLowerPadding: 3,
                        accidentalUpperPadding: 3
                    }, n.ornament = I.ornamentCodes(n.type), !n.ornament) throw new h.RERR("ArgumentError", "Ornament not found: '".concat(n.type, "'"));
                return n.glyph = new j(n.ornament.code, n.render_options.font_scale), n.glyph.setOrigin(.5, 1), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && mi(t, e)
            }(e, de), gi(e, null, [{
                key: "format",
                value: function (t, e) {
                    if (!t || 0 === t.length) return !1;
                    for (var n = 0, i = 0; i < t.length; ++i) {
                        var o = t[i];
                        n = Math.max(o.getWidth(), n), o.getPosition() === de.Position.ABOVE ? (o.setTextLine(e.top_text_line), e.top_text_line += 2) : (o.setTextLine(e.text_line), e.text_line += 2)
                    }
                    return e.left_shift += n / 2, e.right_shift += n / 2, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "ornaments"
                }
            }]), gi(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setDelayed",
                value: function (t) {
                    return this.delayed = t, this
                }
            }, {
                key: "setUpperAccidental",
                value: function (t) {
                    var e = this.render_options.font_scale / 1.3;
                    return this.accidentalUpper = new j(I.accidentalCodes(t).code, e), this.accidentalUpper.setOrigin(.5, 1), this
                }
            }, {
                key: "setLowerAccidental",
                value: function (t) {
                    var e = this.render_options.font_scale / 1.3;
                    return this.accidentalLower = new j(I.accidentalCodes(t).code, e), this.accidentalLower.setOrigin(.5, 1), this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.note || null == this.index) throw new h.RERR("NoAttachedNote", "Can't draw Ornament without a note and index.");
                    this.setRendered();
                    var t = this.context,
                        e = this.note.getStemDirection(),
                        n = this.note.getStave(),
                        i = this.note.getStem().getExtents(),
                        o = e === Le.STEM_DOWN ? i.baseY : i.topY;
                    "tabnotes" === this.note.getCategory() && (this.note.hasStem() ? e === Le.STEM_DOWN && (o = n.getYForTopText(this.text_line)) : o = n.getYForTopText(this.text_line));
                    var r = e === Le.STEM_DOWN,
                        s = n.getSpacingBetweenLines(),
                        a = 1;
                    !r && this.note.beam && (a += .5);
                    var l = o - s * (this.text_line + a),
                        u = this.note.getModifierStartXY(this.position, this.index).x,
                        c = Math.min(n.getYForTopText(this.text_line), l);
                    if (c += this.y_shift, this.delayed) {
                        var f = 0;
                        if (void 0 !== this.delayXShift) f = this.delayXShift;
                        else {
                            f += this.glyph.getMetrics().width / 2;
                            var b = bi.getNextContext(this.note.getTickContext());
                            f += b ? .5 * (b.getX() - u) : .5 * (n.x + n.width - u), this.delayXShift = f
                        }
                        u += f
                    }! function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        _i.DEBUG && h.L("Vex.Flow.Ornament", e)
                    }("Rendering ornament: ", this.ornament, u, c), this.accidentalLower && (this.accidentalLower.render(t, u, c), c -= this.accidentalLower.getMetrics().height, c -= this.render_options.accidentalLowerPadding), this.glyph.render(t, u, c), c -= this.glyph.getMetrics().height, this.accidentalUpper && (c -= this.render_options.accidentalUpperPadding, this.accidentalUpper.render(t, u, c))
                }
            }]), e
        }();

        function xi(t) {
            return (xi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function wi(t, e) {
            return !e || "object" !== xi(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ki(t) {
            return (ki = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Si(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ti(t, e, n) {
            return e && Si(t.prototype, e), n && Si(t, n), t
        }

        function Ei(t, e) {
            return (Ei = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Oi = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = wi(this, ki(e).call(this))).setAttribute("type", "Annotation"), n.note = null, n.index = null, n.text = t, n.justification = e.Justify.CENTER, n.vert_justification = e.VerticalJustify.TOP, n.font = {
                    family: "Arial",
                    size: 10,
                    weight: ""
                }, n.setWidth(I.textWidth(t)), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ei(t, e)
            }(e, de), Ti(e, null, [{
                key: "format",
                value: function (t, e) {
                    if (!t || 0 === t.length) return !1;
                    for (var n = 0, i = 0; i < t.length; ++i) {
                        var o = t[i];
                        n = Math.max(o.getWidth(), n), o.getPosition() === de.Position.ABOVE ? (o.setTextLine(e.top_text_line), e.top_text_line++) : (o.setTextLine(e.text_line), e.text_line++)
                    }
                    return e.left_shift += n / 2, e.right_shift += n / 2, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "annotations"
                }
            }, {
                key: "Justify",
                get: function () {
                    return {
                        LEFT: 1,
                        CENTER: 2,
                        RIGHT: 3,
                        CENTER_STEM: 4
                    }
                }
            }, {
                key: "JustifyString",
                get: function () {
                    return {
                        left: e.Justify.LEFT,
                        right: e.Justify.RIGHT,
                        center: e.Justify.CENTER,
                        centerStem: e.Justify.CENTER_STEM
                    }
                }
            }, {
                key: "VerticalJustify",
                get: function () {
                    return {
                        TOP: 1,
                        CENTER: 2,
                        BOTTOM: 3,
                        CENTER_STEM: 4
                    }
                }
            }, {
                key: "VerticalJustifyString",
                get: function () {
                    return {
                        above: e.VerticalJustify.TOP,
                        top: e.VerticalJustify.TOP,
                        below: e.VerticalJustify.BOTTOM,
                        bottom: e.VerticalJustify.BOTTOM,
                        center: e.VerticalJustify.CENTER,
                        centerStem: e.VerticalJustify.CENTER_STEM
                    }
                }
            }]), Ti(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setFont",
                value: function (t, e, n) {
                    return this.font = {
                        family: t,
                        size: e,
                        weight: n
                    }, this
                }
            }, {
                key: "setVerticalJustification",
                value: function (t) {
                    return this.vert_justification = "string" == typeof t ? e.VerticalJustifyString[t] : t, this
                }
            }, {
                key: "getJustification",
                value: function () {
                    return this.justification
                }
            }, {
                key: "setJustification",
                value: function (t) {
                    return this.justification = "string" == typeof t ? e.JustifyString[t] : t, this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.note) throw new h.RERR("NoNoteForAnnotation", "Can't draw text annotation without an attached note.");
                    this.setRendered();
                    var t = this.note.getModifierStartXY(de.Position.ABOVE, this.index);
                    this.context.save(), this.context.setFont(this.font.family, this.font.size, this.font.weight);
                    var n, i, o, r, s = this.context.measureText(this.text).width,
                        a = this.context.measureText("m").width;
                    n = this.justification === e.Justify.LEFT ? t.x : this.justification === e.Justify.RIGHT ? t.x - s : this.justification === e.Justify.CENTER ? t.x - s / 2 : this.note.getStemX() - s / 2;
                    var l = this.note.hasStem(),
                        u = this.note.getStave();
                    if (l && (o = this.note.getStem().getExtents(), r = u.getSpacingBetweenLines()), this.vert_justification === e.VerticalJustify.BOTTOM) {
                        if (i = u.getYForBottomText(this.text_line + I.TEXT_HEIGHT_OFFSET_HACK), l) {
                            var c = 1 === this.note.getStemDirection() ? o.baseY : o.topY;
                            i = Math.max(i, c + r * (this.text_line + 2))
                        }
                    } else if (this.vert_justification === e.VerticalJustify.CENTER) {
                        var f = this.note.getYForTopText(this.text_line) - 1;
                        i = f + (u.getYForBottomText(this.text_line) - f) / 2 + a / 2
                    } else if (this.vert_justification === e.VerticalJustify.TOP) i = Math.min(u.getYForTopText(this.text_line), this.note.getYs()[0] - 10), l && (i = Math.min(i, o.topY - 5 - r * this.text_line));
                    else {
                        var b = this.note.getStemExtents();
                        i = b.topY + (b.baseY - b.topY) / 2 + a / 2
                    }! function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        Oi.DEBUG && h.L("Vex.Flow.Annotation", e)
                    }("Rendering annotation: ", this.text, n, i), this.context.fillText(this.text, n, i), this.context.restore()
                }
            }]), e
        }();

        function Ri(t) {
            return (Ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Pi(t, e) {
            return !e || "object" !== Ri(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ci(t) {
            return (Ci = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ni(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ai(t, e, n) {
            return e && Ni(t.prototype, e), n && Ni(t, n), t
        }

        function Li(t, e) {
            return (Li = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Mi = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = Pi(this, Ci(e).call(this))).setAttribute("type", "Bend"), o.text = t, o.x_shift = 0, o.release = n || !1, o.font = "10pt Arial", o.render_options = {
                    line_width: 1.5,
                    line_style: "#777777",
                    bend_width: 8,
                    release_width: 8
                }, i ? o.phrase = i : (o.phrase = [{
                    type: e.UP,
                    text: o.text
                }], o.release && o.phrase.push({
                    type: e.DOWN,
                    text: ""
                })), o.updateWidth(), o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Li(t, e)
            }(e, de), Ai(e, null, [{
                key: "format",
                value: function (t, e) {
                    if (!t || 0 === t.length) return !1;
                    for (var n = 0, i = e.top_text_line, o = 0; o < t.length; ++o) {
                        var r = t[o];
                        r.setXShift(n), n = r.getWidth(), r.setTextLine(i)
                    }
                    return e.right_shift += n, e.top_text_line += 1, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "bends"
                }
            }, {
                key: "UP",
                get: function () {
                    return 0
                }
            }, {
                key: "DOWN",
                get: function () {
                    return 1
                }
            }]), Ai(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setXShift",
                value: function (t) {
                    this.x_shift = t, this.updateWidth()
                }
            }, {
                key: "setFont",
                value: function (t) {
                    return this.font = t, this
                }
            }, {
                key: "getText",
                value: function () {
                    return this.text
                }
            }, {
                key: "updateWidth",
                value: function () {
                    var t = this;
                    for (var n, i = 0, o = 0; o < this.phrase.length; ++o) {
                        var r = this.phrase[o];
                        if ("width" in r) i += r.width;
                        else {
                            var s = r.type === e.UP ? this.render_options.bend_width : this.render_options.release_width;
                            r.width = h.Max(s, (n = r.text, t.context ? t.context.measureText(n).width : I.textWidth(n))) + 3, r.draw_width = r.width / 2, i += r.width
                        }
                    }
                    return this.setWidth(i + this.x_shift), this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.note || null == this.index) throw new h.RERR("NoNoteForBend", "Can't draw bend without a note or index.");
                    this.setRendered();
                    var t = this.note.getModifierStartXY(de.Position.RIGHT, this.index);
                    t.x += 3, t.y += .5;
                    var n = this.x_shift,
                        i = this.context,
                        o = this.note.getStave().getYForTopText(this.text_line) + 3,
                        r = this.note.getStave().getYForTopText(this.text_line) - 1,
                        s = this;

                    function a(t, e, n, o) {
                        i.save(), i.beginPath(), i.setLineWidth(s.render_options.line_width), i.setStrokeStyle(s.render_options.line_style), i.setFillStyle(s.render_options.line_style), i.moveTo(t, o), i.quadraticCurveTo(t + n, o, t + n, e), i.stroke(), i.restore()
                    }

                    function l(t, e, n) {
                        var o = n || 1;
                        i.beginPath(), i.moveTo(t, e), i.lineTo(t - 4, e + 4 * o), i.lineTo(t + 4, e + 4 * o), i.closePath(), i.fill()
                    }

                    function u(t, e) {
                        i.save(), i.setRawFont(s.font);
                        var n = t - i.measureText(e).width / 2;
                        i.fillText(e, n, r), i.restore()
                    }
                    for (var c, f, b, p, y, d, v = null, g = 0, m = 0; m < this.phrase.length; ++m) {
                        var _ = this.phrase[m];
                        0 === m && (_.draw_width += n), g = _.draw_width + (v ? v.draw_width : 0) - (1 === m ? n : 0), _.type === e.UP && (v && v.type === e.UP && l(t.x, o), c = t.x, f = t.y, p = o, y = void 0, d = void 0, y = c + (b = g), d = f, i.save(), i.beginPath(), i.setLineWidth(s.render_options.line_width), i.setStrokeStyle(s.render_options.line_style), i.setFillStyle(s.render_options.line_style), i.moveTo(c, f), i.quadraticCurveTo(y, d, c + b, p), i.stroke(), i.restore()), _.type === e.DOWN && (v && v.type === e.UP && a(t.x, t.y, g, o), v && v.type === e.DOWN && (l(t.x, t.y, -1), a(t.x, t.y, g, o)), null === v && (g = _.draw_width, a(t.x, t.y, g, o))), u(t.x + g, _.text), (v = _).x = t.x, t.x += g
                    }
                    v.type === e.UP ? l(v.x + g, o) : v.type === e.DOWN && l(v.x + g, t.y, -1)
                }
            }]), e
        }();

        function Fi(t) {
            return (Fi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Bi(t, e) {
            return !e || "object" !== Fi(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ji(t) {
            return (ji = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Di(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ii(t, e, n) {
            return e && Di(t.prototype, e), n && Di(t, n), t
        }

        function Gi(t, e) {
            return (Gi = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Yi = function (t) {
            function e() {
                var t;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = Bi(this, ji(e).call(this))).setAttribute("type", "Vibrato"), t.position = de.Position.RIGHT, t.render_options = {
                    harsh: !1,
                    vibrato_width: 20,
                    wave_height: 6,
                    wave_width: 4,
                    wave_girth: 2
                }, t.setVibratoWidth(t.render_options.vibrato_width), t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Gi(t, e)
            }(e, de), Ii(e, null, [{
                key: "format",
                value: function (t, e, n) {
                    if (!t || 0 === t.length) return !1;
                    var i = e.top_text_line,
                        o = 0,
                        r = e.right_shift - 7,
                        s = n.getModifiers(Mi.CATEGORY);
                    s && s.length > 0 && i--;
                    for (var a = 0; a < t.length; ++a) {
                        var l = t[a];
                        l.setXShift(r), l.setTextLine(i), r += o += l.getWidth()
                    }
                    return e.right_shift += o, e.top_text_line += 1, !0
                }
            }, {
                key: "CATEGORY",
                get: function () {
                    return "vibratos"
                }
            }]), Ii(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setHarsh",
                value: function (t) {
                    return this.render_options.harsh = t, this
                }
            }, {
                key: "setVibratoWidth",
                value: function (t) {
                    return this.render_options.vibrato_width = t, this.setWidth(t), this
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this.checkContext();
                    if (!this.note) throw new h.RERR("NoNoteForVibrato", "Can't draw vibrato without an attached note.");
                    this.setRendered();
                    var n = this.note.getModifierStartXY(de.Position.RIGHT, this.index).x + this.x_shift,
                        i = this.note.getYForTopText(this.text_line) + 2;
                    e.renderVibrato(t, n, i, this.render_options)
                }
            }], [{
                key: "renderVibrato",
                value: function (t, e, n, i) {
                    var o, r = i.harsh,
                        s = i.vibrato_width,
                        a = i.wave_width,
                        l = i.wave_girth,
                        u = i.wave_height,
                        c = s / a;
                    if (t.beginPath(), r) {
                        for (t.moveTo(e, n + l + 1), o = 0; o < c / 2; ++o) t.lineTo(e + a, n - u / 2), e += a, t.lineTo(e + a, n + u / 2), e += a;
                        for (o = 0; o < c / 2; ++o) t.lineTo(e - a, n - u / 2 + l + 1), e -= a, t.lineTo(e - a, n + u / 2 + l + 1), e -= a;
                        t.fill()
                    } else {
                        for (t.moveTo(e, n + l), o = 0; o < c / 2; ++o) t.quadraticCurveTo(e + a / 2, n - u / 2, e + a, n), e += a, t.quadraticCurveTo(e + a / 2, n + u / 2, e + a, n), e += a;
                        for (o = 0; o < c / 2; ++o) t.quadraticCurveTo(e - a / 2, n + u / 2 + l, e - a, n + l), e -= a, t.quadraticCurveTo(e - a / 2, n - u / 2 + l, e - a, n + l), e -= a;
                        t.fill()
                    }
                }
            }]), e
        }();

        function Wi(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Hi() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            Xi.DEBUG && h.L("Vex.Flow.ModifierContext", e)
        }
        var Xi = function () {
            function t() {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.modifiers = {}, this.preFormatted = !1, this.postFormatted = !1, this.width = 0, this.spacing = 0, this.state = {
                    left_shift: 0,
                    right_shift: 0,
                    text_line: 0,
                    top_text_line: 0
                }, this.PREFORMAT = [Le, ke, Ge, $e, Bn, Pn, ln, Hn, si, _i, Oi, Mi, Yi], this.POSTFORMAT = [Le]
            }
            var e, n, i;
            return e = t, (n = [{
                key: "addModifier",
                value: function (t) {
                    var e = t.getCategory();
                    return this.modifiers[e] || (this.modifiers[e] = []), this.modifiers[e].push(t), t.setModifierContext(this), this.preFormatted = !1, this
                }
            }, {
                key: "getModifiers",
                value: function (t) {
                    return this.modifiers[t]
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "getExtraLeftPx",
                value: function () {
                    return this.state.left_shift
                }
            }, {
                key: "getExtraRightPx",
                value: function () {
                    return this.state.right_shift
                }
            }, {
                key: "getState",
                value: function () {
                    return this.state
                }
            }, {
                key: "getMetrics",
                value: function () {
                    if (!this.formatted) throw new h.RERR("UnformattedModifier", "Unformatted modifier has no metrics.");
                    return {
                        width: this.state.left_shift + this.state.right_shift + this.spacing,
                        spacing: this.spacing,
                        extra_left_px: this.state.left_shift,
                        extra_right_px: this.state.right_shift
                    }
                }
            }, {
                key: "preFormat",
                value: function () {
                    var t = this;
                    this.preFormatted || (this.PREFORMAT.forEach(function (e) {
                        Hi("Preformatting ModifierContext: ", e.CATEGORY), e.format(t.getModifiers(e.CATEGORY), t.state, t)
                    }), this.width = this.state.left_shift + this.state.right_shift, this.preFormatted = !0)
                }
            }, {
                key: "postFormat",
                value: function () {
                    var t = this;
                    this.postFormatted || this.POSTFORMAT.forEach(function (e) {
                        Hi("Postformatting ModifierContext: ", e.CATEGORY), e.postFormat(t.getModifiers(e.CATEGORY), t)
                    })
                }
            }]) && Wi(e.prototype, n), i && Wi(e, i), t
        }();

        function Ui(t) {
            return (Ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Vi(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function zi(t, e, n) {
            return e && Vi(t.prototype, e), n && Vi(t, n), t
        }

        function Ki(t, e, n, i) {
            var o = e;
            for (n += 1; n < t.length; n += 1) {
                var r = t[n];
                if (!r.isRest() && !r.shouldIgnoreTicks()) {
                    o = r.getLineForRest();
                    break
                }
            }
            if (i && e !== o) {
                var s = Math.max(e, o),
                    a = Math.min(e, o);
                o = h.MidLine(s, a)
            }
            return o
        }

        function Ji(t, e, n) {
            if (!t || !t.length) throw new h.RERR("BadArgument", "No voices to format");
            var i = t[0].getTotalTicks(),
                o = t.reduce(function (t, e) {
                    if (!e.getTotalTicks().equals(i)) throw new h.RERR("TickMismatch", "Voices should have same total note duration in ticks.");
                    if (e.getMode() === Rt.Mode.STRICT && !e.isComplete()) throw new h.RERR("IncompleteVoice", "Voice does not have enough notes.");
                    return Math.max(t, y.LCM(t, e.getResolutionMultiplier()))
                }, 1),
                r = {},
                s = [],
                a = [];
            return t.forEach(function (t) {
                var i = new y(0, o);
                t.getTickables().forEach(function (t) {
                    var o = i.numerator;
                    if (!r[o]) {
                        var l = new e;
                        a.push(l), r[o] = l
                    }
                    n(t, r[o]), s.push(o), i.add(t.getTicks())
                })
            }), {
                map: r,
                array: a,
                list: h.SortAndUnique(s, function (t, e) {
                    return t - e
                }, function (t, e) {
                    return t === e
                }),
                resolutionMultiplier: o
            }
        }
        var qi = function () {
            function t() {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.minTotalWidth = 0, this.hasMinTotalWidth = !1, this.totalTicks = new y(0, 1), this.tickContexts = null, this.modiferContexts = null, this.contextGaps = {
                    total: 0,
                    gaps: []
                }, this.voices = []
            }
            return zi(t, null, [{
                key: "SimpleFormat",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).paddingBetween,
                        i = void 0 === n ? 10 : n;
                    t.reduce(function (t, e) {
                        e.addToModifierContext(new Xi);
                        var n = (new bi).addTickable(e).preFormat(),
                            o = n.getExtraPx();
                        return n.setX(t + o.left), t + n.getWidth() + o.right + i
                    }, e)
                }
            }, {
                key: "plotDebugging",
                value: function (t, e, n, i, o) {
                    var r = n + Jt.STAVEPADDING,
                        s = e.contextGaps;
                    t.save(), t.setFont("Arial", 8, ""), s.gaps.forEach(function (e) {
                        var n, s, a;
                        n = r + e.x1, s = r + e.x2, a = "#aaa", t.beginPath(), t.setStrokeStyle(a), t.setFillStyle(a), t.setLineWidth(1), t.fillRect(n, i, s - n, o - i), t.fillText(Math.round(e.x2 - e.x1), r + e.x1, o + 12)
                    }), t.fillText(Math.round(s.total) + "px", r - 20, o + 12), t.setFillStyle("red"), t.fillText("Loss: " + e.lossHistory.map(function (t) {
                        return Math.round(t)
                    }), r - 20, o + 22), t.restore()
                }
            }, {
                key: "FormatAndDraw",
                value: function (e, n, i, o) {
                    var r = {
                        auto_beam: !1,
                        align_rests: !1
                    };
                    "object" === Ui(o) ? h.Merge(r, o) : "boolean" == typeof o && (r.auto_beam = o);
                    var s = new Rt(I.TIME4_4).setMode(Rt.Mode.SOFT).addTickables(i),
                        a = r.auto_beam ? xt.applyAndGetBeams(s) : [];
                    return (new t).joinVoices([s], {
                        align_rests: r.align_rests
                    }).formatToStave([s], n, {
                        align_rests: r.align_rests,
                        stave: n
                    }), s.setStave(n).draw(e, n), a.forEach(function (t) {
                        return t.setContext(e).draw()
                    }), s.getBoundingBox()
                }
            }, {
                key: "FormatAndDrawTab",
                value: function (e, n, i, o, r, s, a) {
                    var l = {
                        auto_beam: s,
                        align_rests: !1
                    };
                    "object" === Ui(a) ? h.Merge(l, a) : "boolean" == typeof a && (l.auto_beam = a);
                    var u = new Rt(I.TIME4_4).setMode(Rt.Mode.SOFT).addTickables(r),
                        c = new Rt(I.TIME4_4).setMode(Rt.Mode.SOFT).addTickables(o),
                        f = l.auto_beam ? xt.applyAndGetBeams(u) : [];
                    (new t).joinVoices([u], {
                        align_rests: l.align_rests
                    }).joinVoices([c]).formatToStave([u, c], i, {
                        align_rests: l.align_rests
                    }), u.draw(e, i), c.draw(e, n), f.forEach(function (t) {
                        return t.setContext(e).draw()
                    }), new Bt(i, n).setContext(e).draw()
                }
            }, {
                key: "AlignRestsToNotes",
                value: function (t, e, n) {
                    return t.forEach(function (i, o) {
                        if (i instanceof Le && i.isRest()) {
                            if (i.tuplet && !n) return;
                            var r = i.getGlyph().position.toUpperCase();
                            if ("R/4" !== r && "B/4" !== r) return;
                            if (e || null != i.beam) {
                                var s = i.getKeyProps()[0];
                                if (0 === o) s.line = Ki(t, s.line, o, !1), i.setKeyLine(0, s.line);
                                else if (o > 0 && o < t.length) {
                                    var a;
                                    t[o - 1].isRest() ? (a = t[o - 1].getKeyProps()[0].line, s.line = a) : (a = t[o - 1].getLineForRest(), s.line = Ki(t, a, o, !0)), i.setKeyLine(0, s.line)
                                }
                            }
                        }
                    }), this
                }
            }]), zi(t, [{
                key: "alignRests",
                value: function (e, n) {
                    if (!e || !e.length) throw new h.RERR("BadArgument", "No voices to format rests");
                    e.forEach(function (e) {
                        return t.AlignRestsToNotes(e.getTickables(), n)
                    })
                }
            }, {
                key: "preCalculateMinTotalWidth",
                value: function (t) {
                    if (this.hasMinTotalWidth) return this.minTotalWidth;
                    if (!this.tickContexts) {
                        if (!t) throw new h.RERR("BadArgument", "'voices' required to run preCalculateMinTotalWidth");
                        this.createTickContexts(t)
                    }
                    var e = this.tickContexts,
                        n = e.list,
                        i = e.map;
                    return this.minTotalWidth = n.map(function (t) {
                        var e = i[t];
                        return e.preFormat(), e.getWidth()
                    }).reduce(function (t, e) {
                        return t + e
                    }, 0), this.hasMinTotalWidth = !0, this.minTotalWidth
                }
            }, {
                key: "getMinTotalWidth",
                value: function () {
                    if (!this.hasMinTotalWidth) throw new h.RERR("NoMinTotalWidth", "Call 'preCalculateMinTotalWidth' or 'preFormat' before calling 'getMinTotalWidth'");
                    return this.minTotalWidth
                }
            }, {
                key: "createModifierContexts",
                value: function (t) {
                    var e = Ji(t, Xi, function (t, e) {
                        return t.addToModifierContext(e)
                    });
                    return this.modiferContexts = e, e
                }
            }, {
                key: "createTickContexts",
                value: function (t) {
                    var e = Ji(t, bi, function (t, e) {
                        return e.addTickable(t)
                    });
                    return e.array.forEach(function (t) {
                        t.tContexts = e.array
                    }), this.totalTicks = t[0].getTicksUsed().clone(), this.tickContexts = e, e
                }
            }, {
                key: "preFormat",
                value: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        r = this.tickContexts,
                        s = r.list,
                        a = r.map,
                        l = r.resolutionMultiplier;
                    i && o && i.forEach(function (t) {
                        return t.setStave(o).preFormat()
                    });
                    var u = 0,
                        c = 0,
                        h = e / 2;
                    if (this.minTotalWidth = 0, s.forEach(function (e) {
                            var i = a[e];
                            n && i.setContext(n), i.preFormat();
                            var o = i.getWidth();
                            t.minTotalWidth += o;
                            var r = i.getMetrics();
                            u = u + c + r.extraLeftPx, i.setX(u), c = o - r.extraLeftPx
                        }), this.minTotalWidth = u + c, this.hasMinTotalWidth = !0, !(e <= 0)) {
                        var f = (e - this.minTotalWidth) / (this.totalTicks.value() * l),
                            b = 0;
                        s.forEach(function (t, e) {
                            var n = s[e - 1] || 0,
                                i = a[t];
                            b += (t - n) * f, i.setX(i.getX() + b), i.getCenterAlignedTickables().forEach(function (t) {
                                t.center_x_shift = h - i.getX()
                            })
                        }), 1 !== s.length && (this.justifyWidth = e, this.lossHistory = [], this.evaluate())
                    }
                }
            }, {
                key: "evaluate",
                value: function () {
                    var t = this,
                        e = this.justifyWidth;
                    this.contextGaps = {
                        total: 0,
                        gaps: []
                    }, this.tickContexts.list.forEach(function (e, n) {
                        if (0 !== n) {
                            var i = t.tickContexts.list[n - 1],
                                o = t.tickContexts.map[i],
                                r = t.tickContexts.map[e],
                                s = o.getMetrics(),
                                a = o.getX() + s.width,
                                l = r.getX(),
                                u = l - a;
                            t.contextGaps.total += u, t.contextGaps.gaps.push({
                                x1: a,
                                x2: l
                            }), r.getFormatterMetrics().freedom.left = u, o.getFormatterMetrics().freedom.right = u
                        }
                    });
                    var n = this.durationStats = {};
                    this.voices.forEach(function (t) {
                        t.getTickables().forEach(function (t, i, o) {
                            var r = t.getTicks().clone().simplify().toString(),
                                s = t.getMetrics(),
                                a = t.getFormatterMetrics(),
                                l = t.getX() + s.noteWidth + s.modRightPx + s.extraRightPx,
                                u = 0;
                            if (i < o.length - 1) {
                                var c = o[i + 1],
                                    h = c.getMetrics();
                                u = c.getX() - h.modLeftPx - h.extraLeftPx - l, a.space.used = c.getX() - t.getX(), c.getFormatterMetrics().freedom.left = u
                            } else u = e - l, a.space.used = e - t.getX();
                            a.freedom.right = u,
                                function (t, e) {
                                    var i = n[t];
                                    void 0 === i ? n[t] = {
                                        mean: e,
                                        count: 1
                                    } : (i.count += 1, i.mean = (i.mean + e) / 2)
                                }(r, a.space.used)
                        })
                    });
                    var i = 0;
                    return this.voices.forEach(function (t) {
                        t.getTickables().forEach(function (t) {
                            var e = t.getTicks().clone().simplify().toString(),
                                o = t.getFormatterMetrics();
                            o.iterations += 1, o.space.deviation = o.space.used - n[e].mean, o.duration = e, o.space.mean = n[e].mean, i += Math.pow(n[e].mean, 2)
                        })
                    }), this.totalCost = Math.sqrt(i), this.lossHistory.push(this.totalCost), this
                }
            }, {
                key: "tune",
                value: function () {
                    var t = this;
                    var e = 0;
                    return this.tickContexts.list.forEach(function (n, i, o) {
                        var r = t.tickContexts.map[n],
                            s = i > 0 ? t.tickContexts.map[o[i - 1]] : null,
                            a = i < o.length - 1 ? t.tickContexts.map[o[i + 1]] : null;
                        ! function (t, e, n, i) {
                            t.setX(t.getX() + i), t.getFormatterMetrics().freedom.left += i, t.getFormatterMetrics().freedom.right -= i, e && (e.getFormatterMetrics().freedom.right += i), n && (n.getFormatterMetrics().freedom.left -= i)
                        }(r, s, a, e);
                        var l = -r.getTickables().map(function (t) {
                            return t.getFormatterMetrics().space.deviation
                        }).reduce(function (t, e) {
                            return t + e
                        });
                        l > 0 ? e = -Math.min(r.getFormatterMetrics().freedom.right, Math.abs(l)) : l < 0 && (e = a ? Math.min(a.getFormatterMetrics().freedom.right, Math.abs(l)) : 0);
                        var u = Math.min(5, Math.abs(e));
                        e = e > 0 ? u : -u
                    }), this.evaluate()
                }
            }, {
                key: "postFormat",
                value: function () {
                    var t = function (t) {
                        return t.list.forEach(function (e) {
                            return t.map[e].postFormat()
                        })
                    };
                    return t(this.modiferContexts), t(this.tickContexts), this
                }
            }, {
                key: "joinVoices",
                value: function (t) {
                    return this.createModifierContexts(t), this.hasMinTotalWidth = !1, this
                }
            }, {
                key: "format",
                value: function (t, e, n) {
                    var i = {
                        align_rests: !1,
                        context: null,
                        stave: null
                    };
                    return h.Merge(i, n), this.voices = t, this.alignRests(t, i.align_rests), this.createTickContexts(t), this.preFormat(e, i.context, t, i.stave), i.stave && this.postFormat(), this
                }
            }, {
                key: "formatToStave",
                value: function (t, e, n) {
                    var i = e.getNoteEndX() - e.getNoteStartX() - 10;
                    ! function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        qi.DEBUG && h.L("Vex.Flow.Formatter", e)
                    }("Formatting voices to width: ", i);
                    var o = {
                        context: e.getContext()
                    };
                    return h.Merge(o, n), this.format(t, i, o)
                }
            }]), t
        }();

        function Qi(t) {
            return (Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Zi(t, e) {
            return !e || "object" !== Qi(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function $i(t) {
            return ($i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function to(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function eo(t, e, n) {
            return e && to(t.prototype, e), n && to(t, n), t
        }

        function no(t, e) {
            return (no = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var io = function (t) {
            function e() {
                var t;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = Zi(this, $i(e).call(this))).setAttribute("type", "StaveModifier"), t.padding = 10, t.position = e.Position.ABOVE, t.layoutMetrics = null, t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && no(t, e)
            }(e, k), eo(e, null, [{
                key: "Position",
                get: function () {
                    return {
                        LEFT: 1,
                        RIGHT: 2,
                        ABOVE: 3,
                        BELOW: 4,
                        BEGIN: 5,
                        END: 6
                    }
                }
            }]), eo(e, [{
                key: "getPosition",
                value: function () {
                    return this.position
                }
            }, {
                key: "setPosition",
                value: function (t) {
                    return this.position = t, this
                }
            }, {
                key: "getStave",
                value: function () {
                    return this.stave
                }
            }, {
                key: "setStave",
                value: function (t) {
                    return this.stave = t, this
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "setWidth",
                value: function (t) {
                    return this.width = t, this
                }
            }, {
                key: "getX",
                value: function () {
                    return this.x
                }
            }, {
                key: "setX",
                value: function (t) {
                    return this.x = t, this
                }
            }, {
                key: "getCategory",
                value: function () {
                    return ""
                }
            }, {
                key: "makeSpacer",
                value: function (t) {
                    return {
                        getContext: function () {
                            return !0
                        },
                        setStave: function () {},
                        renderToStave: function () {},
                        getMetrics: function () {
                            return {
                                width: t
                            }
                        }
                    }
                }
            }, {
                key: "placeGlyphOnLine",
                value: function (t, e, n) {
                    t.setYShift(e.getYForLine(n) - e.getYForGlyphs())
                }
            }, {
                key: "getPadding",
                value: function (t) {
                    return void 0 !== t && t < 2 ? 0 : this.padding
                }
            }, {
                key: "setPadding",
                value: function (t) {
                    return this.padding = t, this
                }
            }, {
                key: "setLayoutMetrics",
                value: function (t) {
                    return this.layoutMetrics = t, this
                }
            }, {
                key: "getLayoutMetrics",
                value: function () {
                    return this.layoutMetrics
                }
            }]), e
        }();

        function oo(t) {
            return (oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ro(t, e) {
            return !e || "object" !== oo(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function so(t) {
            return (so = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ao(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function lo(t, e, n) {
            return e && ao(t.prototype, e), n && ao(t, n), t
        }

        function uo(t, e) {
            return (uo = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var co = function (t) {
            function e(t) {
                var n;
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = ro(this, so(e).call(this))).setAttribute("type", "Barline"), n.thickness = I.STAVE_LINE_THICKNESS;
                var i = e.type;
                return n.widths = {}, n.widths[i.SINGLE] = 5, n.widths[i.DOUBLE] = 5, n.widths[i.END] = 5, n.widths[i.REPEAT_BEGIN] = 5, n.widths[i.REPEAT_END] = 5, n.widths[i.REPEAT_BOTH] = 5, n.widths[i.NONE] = 5, n.paddings = {}, n.paddings[i.SINGLE] = 0, n.paddings[i.DOUBLE] = 0, n.paddings[i.END] = 0, n.paddings[i.REPEAT_BEGIN] = 15, n.paddings[i.REPEAT_END] = 15, n.paddings[i.REPEAT_BOTH] = 15, n.paddings[i.NONE] = 0, n.layoutMetricsMap = {}, n.layoutMetricsMap[i.SINGLE] = {
                    xMin: 0,
                    xMax: 1,
                    paddingLeft: 5,
                    paddingRight: 5
                }, n.layoutMetricsMap[i.DOUBLE] = {
                    xMin: -3,
                    xMax: 1,
                    paddingLeft: 5,
                    paddingRight: 5
                }, n.layoutMetricsMap[i.END] = {
                    xMin: -5,
                    xMax: 1,
                    paddingLeft: 5,
                    paddingRight: 5
                }, n.layoutMetricsMap[i.REPEAT_END] = {
                    xMin: -10,
                    xMax: 1,
                    paddingLeft: 5,
                    paddingRight: 5
                }, n.layoutMetricsMap[i.REPEAT_BEGIN] = {
                    xMin: -2,
                    xMax: 10,
                    paddingLeft: 5,
                    paddingRight: 5
                }, n.layoutMetricsMap[i.REPEAT_BOTH] = {
                    xMin: -10,
                    xMax: 10,
                    paddingLeft: 5,
                    paddingRight: 5
                }, n.layoutMetricsMap[i.NONE] = {
                    xMin: 0,
                    xMax: 0,
                    paddingLeft: 5,
                    paddingRight: 5
                }, n.setPosition(io.Position.BEGIN), n.setType(t), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && uo(t, e)
            }(e, io), lo(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "barlines"
                }
            }, {
                key: "type",
                get: function () {
                    return {
                        SINGLE: 1,
                        DOUBLE: 2,
                        END: 3,
                        REPEAT_BEGIN: 4,
                        REPEAT_END: 5,
                        REPEAT_BOTH: 6,
                        NONE: 7
                    }
                }
            }, {
                key: "typeString",
                get: function () {
                    return {
                        single: e.type.SINGLE,
                        double: e.type.DOUBLE,
                        end: e.type.END,
                        repeatBegin: e.type.REPEAT_BEGIN,
                        repeatEnd: e.type.REPEAT_END,
                        repeatBoth: e.type.REPEAT_BOTH,
                        none: e.type.NONE
                    }
                }
            }]), lo(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "getType",
                value: function () {
                    return this.type
                }
            }, {
                key: "setType",
                value: function (t) {
                    return this.type = "string" == typeof t ? e.typeString[t] : t, this.setWidth(this.widths[this.type]), this.setPadding(this.paddings[this.type]), this.setLayoutMetrics(this.layoutMetricsMap[this.type]), this
                }
            }, {
                key: "draw",
                value: function (t) {
                    switch (t.checkContext(), this.setRendered(), this.type) {
                        case e.type.SINGLE:
                            this.drawVerticalBar(t, this.x, !1);
                            break;
                        case e.type.DOUBLE:
                            this.drawVerticalBar(t, this.x, !0);
                            break;
                        case e.type.END:
                            this.drawVerticalEndBar(t, this.x);
                            break;
                        case e.type.REPEAT_BEGIN:
                            this.drawRepeatBar(t, this.x, !0), t.getX() !== this.x && this.drawVerticalBar(t, t.getX());
                            break;
                        case e.type.REPEAT_END:
                            this.drawRepeatBar(t, this.x, !1);
                            break;
                        case e.type.REPEAT_BOTH:
                            this.drawRepeatBar(t, this.x, !1), this.drawRepeatBar(t, this.x, !0)
                    }
                }
            }, {
                key: "drawVerticalBar",
                value: function (t, e, n) {
                    t.checkContext();
                    var i = t.getTopLineTopY(),
                        o = t.getBottomLineBottomY();
                    n && t.context.fillRect(e - 3, i, 1, o - i), t.context.fillRect(e, i, 1, o - i)
                }
            }, {
                key: "drawVerticalEndBar",
                value: function (t, e) {
                    t.checkContext();
                    var n = t.getTopLineTopY(),
                        i = t.getBottomLineBottomY();
                    t.context.fillRect(e - 5, n, 1, i - n), t.context.fillRect(e - 2, n, 3, i - n)
                }
            }, {
                key: "drawRepeatBar",
                value: function (t, e, n) {
                    t.checkContext();
                    var i = t.getTopLineTopY(),
                        o = t.getBottomLineBottomY(),
                        r = 3;
                    n || (r = -5), t.context.fillRect(e + r, i, 1, o - i), t.context.fillRect(e - 2, i, 3, o - i);
                    n ? r += 4 : r -= 4;
                    var s = e + r + 1,
                        a = (t.getNumLines() - 1) * t.getSpacingBetweenLines(),
                        l = i + (a = a / 2 - t.getSpacingBetweenLines() / 2) + 1;
                    t.context.beginPath(), t.context.arc(s, l, 2, 0, 2 * Math.PI, !1), t.context.fill(), l += t.getSpacingBetweenLines(), t.context.beginPath(), t.context.arc(s, l, 2, 0, 2 * Math.PI, !1), t.context.fill()
                }
            }]), e
        }();

        function ho(t) {
            return (ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function fo(t, e) {
            return !e || "object" !== ho(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function bo(t) {
            return (bo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function po(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function yo(t, e, n) {
            return e && po(t.prototype, e), n && po(t, n), t
        }

        function vo(t, e) {
            return (vo = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var go = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = fo(this, bo(e).call(this))).setAttribute("type", "Repetition"), o.symbol_type = t, o.x = n, o.x_shift = 0, o.y_shift = i, o.font = {
                    family: "times",
                    size: 12,
                    weight: "bold italic"
                }, o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && vo(t, e)
            }(e, io), yo(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "repetitions"
                }
            }, {
                key: "type",
                get: function () {
                    return {
                        NONE: 1,
                        CODA_LEFT: 2,
                        CODA_RIGHT: 3,
                        SEGNO_LEFT: 4,
                        SEGNO_RIGHT: 5,
                        DC: 6,
                        DC_AL_CODA: 7,
                        DC_AL_FINE: 8,
                        DS: 9,
                        DS_AL_CODA: 10,
                        DS_AL_FINE: 11,
                        FINE: 12
                    }
                }
            }]), yo(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setShiftX",
                value: function (t) {
                    return this.x_shift = t, this
                }
            }, {
                key: "setShiftY",
                value: function (t) {
                    return this.y_shift = t, this
                }
            }, {
                key: "draw",
                value: function (t, n) {
                    switch (this.setRendered(), this.symbol_type) {
                        case e.type.CODA_RIGHT:
                            this.drawCodaFixed(t, n + t.width);
                            break;
                        case e.type.CODA_LEFT:
                            this.drawSymbolText(t, n, "Coda", !0);
                            break;
                        case e.type.SEGNO_LEFT:
                            this.drawSignoFixed(t, n);
                            break;
                        case e.type.SEGNO_RIGHT:
                            this.drawSignoFixed(t, n + t.width);
                            break;
                        case e.type.DC:
                            this.drawSymbolText(t, n, "D.C.", !1);
                            break;
                        case e.type.DC_AL_CODA:
                            this.drawSymbolText(t, n, "D.C. al", !0);
                            break;
                        case e.type.DC_AL_FINE:
                            this.drawSymbolText(t, n, "D.C. al Fine", !1);
                            break;
                        case e.type.DS:
                            this.drawSymbolText(t, n, "D.S.", !1);
                            break;
                        case e.type.DS_AL_CODA:
                            this.drawSymbolText(t, n, "D.S. al", !0);
                            break;
                        case e.type.DS_AL_FINE:
                            this.drawSymbolText(t, n, "D.S. al Fine", !1);
                            break;
                        case e.type.FINE:
                            this.drawSymbolText(t, n, "Fine", !1)
                    }
                    return this
                }
            }, {
                key: "drawCodaFixed",
                value: function (t, e) {
                    var n = t.getYForTopText(t.options.num_lines) + this.y_shift;
                    return j.renderGlyph(t.context, this.x + e + this.x_shift, n + 25, 40, "v4d", !0), this
                }
            }, {
                key: "drawSignoFixed",
                value: function (t, e) {
                    var n = t.getYForTopText(t.options.num_lines) + this.y_shift;
                    return j.renderGlyph(t.context, this.x + e + this.x_shift, n + 25, 30, "v8c", !0), this
                }
            }, {
                key: "drawSymbolText",
                value: function (t, n, i, o) {
                    var r = t.checkContext();
                    r.save(), r.setFont(this.font.family, this.font.size, this.font.weight);
                    var s = 0 + this.x_shift,
                        a = n + this.x_shift;
                    this.symbol_type === e.type.CODA_LEFT ? a = (s = this.x + t.options.vertical_bar_width) + r.measureText(i).width + 12 : s = (a = this.x + n + t.width - 5 + this.x_shift) - +r.measureText(i).width - 12;
                    var l = t.getYForTopText(t.options.num_lines) + this.y_shift;
                    return o && j.renderGlyph(r, a, l, 40, "v4d", !0), r.fillText(i, s, l + 5), r.restore(), this
                }
            }]), e
        }();

        function mo(t) {
            return (mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function _o(t, e) {
            return !e || "object" !== mo(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function xo(t) {
            return (xo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function wo(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ko(t, e, n) {
            return e && wo(t.prototype, e), n && wo(t, n), t
        }

        function So(t, e) {
            return (So = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var To = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = _o(this, xo(e).call(this))).setAttribute("type", "StaveSection"), o.setWidth(16), o.section = t, o.x = n, o.shift_x = 0, o.shift_y = i, o.font = {
                    family: "sans-serif",
                    size: 12,
                    weight: "bold"
                }, o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && So(t, e)
            }(e, io), ko(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "stavesection"
                }
            }]), ko(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setStaveSection",
                value: function (t) {
                    return this.section = t, this
                }
            }, {
                key: "setShiftX",
                value: function (t) {
                    return this.shift_x = t, this
                }
            }, {
                key: "setShiftY",
                value: function (t) {
                    return this.shift_y = t, this
                }
            }, {
                key: "draw",
                value: function (t, e) {
                    var n = t.checkContext();
                    this.setRendered(), n.save(), n.lineWidth = 2, n.setFont(this.font.family, this.font.size, this.font.weight);
                    var i = n.measureText("" + this.section).width,
                        o = i + 6;
                    o < 18 && (o = 18);
                    var r = t.getYForTopText(3) + this.shift_y,
                        s = this.x + e;
                    return n.beginPath(), n.lineWidth = 2, n.rect(s, r, o, 20), n.stroke(), s += (o - i) / 2, n.fillText("" + this.section, s, r + 16), n.restore(), this
                }
            }]), e
        }();

        function Eo(t) {
            return (Eo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Oo(t, e) {
            return !e || "object" !== Eo(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ro(t) {
            return (Ro = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Po(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Co(t, e, n) {
            return e && Po(t.prototype, e), n && Po(t, n), t
        }

        function No(t, e) {
            return (No = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Ao = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = Oo(this, Ro(e).call(this))).setAttribute("type", "StaveTempo"), o.tempo = t, o.position = de.Position.ABOVE, o.x = n, o.shift_x = 10, o.shift_y = i, o.font = {
                    family: "times",
                    size: 14,
                    weight: "bold"
                }, o.render_options = {
                    glyph_font_scale: 30
                }, o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && No(t, e)
            }(e, io), Co(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "stavetempo"
                }
            }]), Co(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setTempo",
                value: function (t) {
                    return this.tempo = t, this
                }
            }, {
                key: "setShiftX",
                value: function (t) {
                    return this.shift_x = t, this
                }
            }, {
                key: "setShiftY",
                value: function (t) {
                    return this.shift_y = t, this
                }
            }, {
                key: "draw",
                value: function (t, e) {
                    var n = t.checkContext();
                    this.setRendered();
                    var i = this.render_options,
                        o = i.glyph_font_scale / 38,
                        r = this.tempo.name,
                        s = this.tempo.duration,
                        a = this.tempo.dots,
                        l = this.tempo.bpm,
                        u = this.font,
                        c = this.x + this.shift_x + e,
                        h = t.getYForTopText(1) + this.shift_y;
                    if (n.save(), r && (n.setFont(u.family, u.size, u.weight), n.fillText(r, c, h), c += n.measureText(r).width), s && l) {
                        n.setFont(u.family, u.size, "normal"), r && (c += n.measureText(" ").width, n.fillText("(", c, h), c += n.measureText("(").width);
                        var f = I.durationToGlyph(s);
                        if (c += 3 * o, j.renderGlyph(n, c, h, i.glyph_font_scale, f.code_head), c += f.getWidth() * o, f.stem) {
                            var b = 30;
                            f.beam_count && (b += 3 * (f.beam_count - 1));
                            var p = h - (b *= o);
                            n.fillRect(c - o, p, o, b), f.flag && (j.renderGlyph(n, c, p, i.glyph_font_scale, f.code_flag_upstem), a || (c += 6 * o))
                        }
                        for (var y = 0; y < a; y++) c += 6 * o, n.beginPath(), n.arc(c, h + 2 * o, 2 * o, 0, 2 * Math.PI, !1), n.fill();
                        n.fillText(" = " + l + (r ? ")" : ""), c + 3 * o, h)
                    }
                    return n.restore(), this
                }
            }]), e
        }();

        function Lo(t) {
            return (Lo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Mo(t, e) {
            return !e || "object" !== Lo(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Fo(t) {
            return (Fo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Bo(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function jo(t, e, n) {
            return e && Bo(t.prototype, e), n && Bo(t, n), t
        }

        function Do(t, e) {
            return (Do = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Io = function (t) {
            function e(t) {
                var n;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = Mo(this, Fo(e).call(this, t))).setAttribute("type", "TextNote"), n.text = t.text, n.superscript = t.superscript, n.subscript = t.subscript, n.glyph_type = t.glyph, n.glyph = null, n.font = {
                        family: "Arial",
                        size: 12,
                        weight: ""
                    }, t.font && (n.font = t.font), n.glyph_type) {
                    var i = e.GLYPHS[n.glyph_type];
                    if (!i) throw new h.RERR("Invalid glyph type: " + n.glyph_type);
                    n.glyph = new j(i.code, i.point, {
                        cache: !1
                    }), i.width ? n.setWidth(i.width) : n.setWidth(n.glyph.getMetrics().width), n.glyph_struct = i
                } else n.setWidth(I.textWidth(n.text));
                return n.line = t.line || 0, n.smooth = t.smooth || !1, n.ignore_ticks = t.ignore_ticks || !1, n.justification = e.Justification.LEFT, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Do(t, e)
            }(e, Jt), jo(e, null, [{
                key: "Justification",
                get: function () {
                    return {
                        LEFT: 1,
                        CENTER: 2,
                        RIGHT: 3
                    }
                }
            }, {
                key: "GLYPHS",
                get: function () {
                    return {
                        segno: {
                            code: "v8c",
                            point: 40,
                            x_shift: 0,
                            y_shift: -10
                        },
                        tr: {
                            code: "v1f",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        mordent_upper: {
                            code: "v1e",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        mordent_lower: {
                            code: "v45",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        f: {
                            code: "vba",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        p: {
                            code: "vbf",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        m: {
                            code: "v62",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        s: {
                            code: "v4a",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        z: {
                            code: "v80",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        coda: {
                            code: "v4d",
                            point: 40,
                            x_shift: 0,
                            y_shift: -8
                        },
                        pedal_open: {
                            code: "v36",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        pedal_close: {
                            code: "v5d",
                            point: 40,
                            x_shift: 0,
                            y_shift: 3
                        },
                        caesura_straight: {
                            code: "v34",
                            point: 40,
                            x_shift: 0,
                            y_shift: 2
                        },
                        caesura_curved: {
                            code: "v4b",
                            point: 40,
                            x_shift: 0,
                            y_shift: 2
                        },
                        breath: {
                            code: "v6c",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        tick: {
                            code: "v6f",
                            point: 50,
                            x_shift: 0,
                            y_shift: 0
                        },
                        turn: {
                            code: "v72",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        turn_inverted: {
                            code: "v33",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        },
                        mordent: {
                            code: "v1e",
                            point: 40,
                            x_shift: 0,
                            y_shift: 0
                        }
                    }
                }
            }]), jo(e, [{
                key: "setJustification",
                value: function (t) {
                    return this.justification = t, this
                }
            }, {
                key: "setLine",
                value: function (t) {
                    return this.line = t, this
                }
            }, {
                key: "preFormat",
                value: function () {
                    this.checkContext(), this.preFormatted || (this.smooth ? this.setWidth(0) : this.glyph || this.setWidth(this.context.measureText(this.text).width), this.justification === e.Justification.CENTER ? this.extraLeftPx = this.width / 2 : this.justification === e.Justification.RIGHT && (this.extraLeftPx = this.width), this.setPreFormatted(!0))
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.stave) throw new h.RERR("NoStave", "Can't draw without a stave.");
                    this.setRendered();
                    var t, n = this.context,
                        i = this.getAbsoluteX();
                    if (this.justification === e.Justification.CENTER ? i -= this.getWidth() / 2 : this.justification === e.Justification.RIGHT && (i -= this.getWidth()), this.glyph) t = this.stave.getYForLine(this.line + -3), this.glyph.render(this.context, i + this.glyph_struct.x_shift, t + this.glyph_struct.y_shift);
                    else {
                        t = this.stave.getYForLine(this.line + -3), this.applyStyle(n), n.setFont(this.font.family, this.font.size, this.font.weight), n.fillText(this.text, i, t);
                        var o = n.measureText("M").width,
                            r = n.measureText(this.text).width;
                        this.superscript && (n.setFont(this.font.family, this.font.size / 1.3, this.font.weight), n.fillText(this.superscript, i + r + 2, t - o / 2.2)), this.subscript && (n.setFont(this.font.family, this.font.size / 1.3, this.font.weight), n.fillText(this.subscript, i + r + 2, t + o / 2.2 - 1)), this.restoreStyle(n)
                    }
                }
            }]), e
        }();

        function Go(t) {
            return (Go = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Yo(t, e) {
            return !e || "object" !== Go(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Wo(t) {
            return (Wo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ho(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Xo(t, e, n) {
            return e && Ho(t.prototype, e), n && Ho(t, n), t
        }

        function Uo(t, e) {
            return (Uo = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Vo = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = Yo(this, Wo(e).call(this))).setAttribute("type", "StaveText"), o.setWidth(16), o.text = t, o.position = n, o.options = {
                    shift_x: 0,
                    shift_y: 0,
                    justification: Io.Justification.CENTER
                }, h.Merge(o.options, i), o.font = {
                    family: "times",
                    size: 16,
                    weight: "normal"
                }, o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Uo(t, e)
            }(e, io), Xo(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "stavetext"
                }
            }]), Xo(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setStaveText",
                value: function (t) {
                    return this.text = t, this
                }
            }, {
                key: "setShiftX",
                value: function (t) {
                    return this.shift_x = t, this
                }
            }, {
                key: "setShiftY",
                value: function (t) {
                    return this.shift_y = t, this
                }
            }, {
                key: "setFont",
                value: function (t) {
                    h.Merge(this.font, t)
                }
            }, {
                key: "setText",
                value: function (t) {
                    this.text = t
                }
            }, {
                key: "draw",
                value: function (t) {
                    var e = t.checkContext();
                    this.setRendered(), e.save(), e.lineWidth = 2, e.setFont(this.font.family, this.font.size, this.font.weight);
                    var n, i, o = e.measureText("" + this.text).width,
                        r = io.Position,
                        s = Io.Justification;
                    switch (this.position) {
                        case r.LEFT:
                        case r.RIGHT:
                            i = (t.getYForLine(0) + t.getBottomLineY()) / 2 + this.options.shift_y, n = this.position === r.LEFT ? t.getX() - o - 24 + this.options.shift_x : t.getX() + t.getWidth() + 24 + this.options.shift_x;
                            break;
                        case r.ABOVE:
                        case r.BELOW:
                            n = t.getX() + this.options.shift_x, this.options.justification === s.CENTER ? n += t.getWidth() / 2 - o / 2 : this.options.justification === s.RIGHT && (n += t.getWidth() - o), i = this.position === r.ABOVE ? t.getYForTopText(2) + this.options.shift_y : t.getYForBottomText(2) + this.options.shift_y;
                            break;
                        default:
                            throw new h.RERR("InvalidPosition", "Value Must be in Modifier.Position.")
                    }
                    return e.fillText("" + this.text, n, i + 4), e.restore(), this
                }
            }]), e
        }();

        function zo(t) {
            return (zo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ko(t, e) {
            return !e || "object" !== zo(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Jo(t) {
            return (Jo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function qo(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Qo(t, e, n) {
            return e && qo(t.prototype, e), n && qo(t, n), t
        }

        function Zo(t, e) {
            return (Zo = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var $o = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (o = Ko(this, Jo(e).call(this))).setAttribute("type", "Clef"), o.setPosition(io.Position.BEGIN), o.setType(t, n, i), o.setWidth(o.glyph.getMetrics().width),
                    function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        $o.DEBUG && h.L("Vex.Flow.Clef", e)
                    }("Creating clef:", t), o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Zo(t, e)
            }(e, io), Qo(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "clefs"
                }
            }, {
                key: "types",
                get: function () {
                    return {
                        treble: {
                            code: "v83",
                            line: 3
                        },
                        bass: {
                            code: "v79",
                            line: 1
                        },
                        alto: {
                            code: "vad",
                            line: 2
                        },
                        tenor: {
                            code: "vad",
                            line: 1
                        },
                        percussion: {
                            code: "v59",
                            line: 2
                        },
                        soprano: {
                            code: "vad",
                            line: 4
                        },
                        "mezzo-soprano": {
                            code: "vad",
                            line: 3
                        },
                        "baritone-c": {
                            code: "vad",
                            line: 0
                        },
                        "baritone-f": {
                            code: "v79",
                            line: 2
                        },
                        subbass: {
                            code: "v79",
                            line: 0
                        },
                        french: {
                            code: "v83",
                            line: 4
                        },
                        tab: {
                            code: "v2f"
                        }
                    }
                }
            }, {
                key: "sizes",
                get: function () {
                    return {
                        default: 40,
                        small: 32
                    }
                }
            }, {
                key: "annotations",
                get: function () {
                    return {
                        "8va": {
                            code: "v8",
                            sizes: {
                                default: {
                                    point: 20,
                                    attachments: {
                                        treble: {
                                            line: -1.2,
                                            x_shift: 11
                                        }
                                    }
                                },
                                small: {
                                    point: 18,
                                    attachments: {
                                        treble: {
                                            line: -.4,
                                            x_shift: 8
                                        }
                                    }
                                }
                            }
                        },
                        "8vb": {
                            code: "v8",
                            sizes: {
                                default: {
                                    point: 20,
                                    attachments: {
                                        treble: {
                                            line: 6.3,
                                            x_shift: 10
                                        },
                                        bass: {
                                            line: 4,
                                            x_shift: 1
                                        }
                                    }
                                },
                                small: {
                                    point: 18,
                                    attachments: {
                                        treble: {
                                            line: 5.8,
                                            x_shift: 6
                                        },
                                        bass: {
                                            line: 3.5,
                                            x_shift: .5
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }]), Qo(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setType",
                value: function (t, n, i) {
                    if (this.type = t, this.clef = e.types[t], this.size = void 0 === n ? "default" : n, this.clef.point = e.sizes[this.size], this.glyph = new j(this.clef.code, this.clef.point), void 0 !== i) {
                        var o = e.annotations[i];
                        this.annotation = {
                            code: o.code,
                            point: o.sizes[this.size].point,
                            line: o.sizes[this.size].attachments[this.type].line,
                            x_shift: o.sizes[this.size].attachments[this.type].x_shift
                        }, this.attachment = new j(this.annotation.code, this.annotation.point), this.attachment.metrics.x_max = 0, this.attachment.setXShift(this.annotation.x_shift)
                    } else this.annotation = void 0;
                    return this
                }
            }, {
                key: "getWidth",
                value: function () {
                    if ("tab" === this.type && !this.stave) throw new h.RERR("ClefError", "Can't get width without stave.");
                    return this.width
                }
            }, {
                key: "setStave",
                value: function (t) {
                    if (this.stave = t, "tab" !== this.type) return this;
                    var e, n, i = this.stave.getOptions().num_lines;
                    switch (i) {
                        case 8:
                            e = 55, n = 14;
                            break;
                        case 7:
                            e = 47, n = 8;
                            break;
                        case 6:
                            e = 40, n = 1;
                            break;
                        case 5:
                            e = 30, n = -6;
                            break;
                        case 4:
                            e = 23, n = -12;
                            break;
                        default:
                            throw new h.RERR("ClefError", "Invalid number of lines: ".concat(i))
                    }
                    return this.glyph.setPoint(e), this.glyph.setYShift(n), this
                }
            }, {
                key: "draw",
                value: function () {
                    if (!this.x) throw new h.RERR("ClefError", "Can't draw clef without x.");
                    if (!this.stave) throw new h.RERR("ClefError", "Can't draw clef without stave.");
                    this.setRendered(), this.glyph.setStave(this.stave), this.glyph.setContext(this.stave.context), void 0 !== this.clef.line && this.placeGlyphOnLine(this.glyph, this.stave, this.clef.line), this.glyph.renderToStave(this.x), void 0 !== this.annotation && (this.placeGlyphOnLine(this.attachment, this.stave, this.annotation.line), this.attachment.setStave(this.stave), this.attachment.setContext(this.stave.context), this.attachment.renderToStave(this.x))
                }
            }]), e
        }();

        function tr(t) {
            return (tr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function er(t, e) {
            return !e || "object" !== tr(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function nr(t) {
            return (nr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ir(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function or(t, e, n) {
            return e && ir(t.prototype, e), n && ir(t, n), t
        }

        function rr(t, e) {
            return (rr = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var sr = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = er(this, nr(e).call(this))).setAttribute("type", "KeySignature"), o.setKeySig(t, n, i), o.setPosition(io.Position.BEGIN), o.glyphFontScale = 38, o.glyphs = [], o.xPositions = [], o.paddingForced = !1, o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && rr(t, e)
            }(e, io), or(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "keysignatures"
                }
            }, {
                key: "accidentalSpacing",
                get: function () {
                    return {
                        "#": {
                            above: 6,
                            below: 4
                        },
                        b: {
                            above: 4,
                            below: 7
                        },
                        n: {
                            above: 4,
                            below: 1
                        },
                        "##": {
                            above: 6,
                            below: 4
                        },
                        bb: {
                            above: 4,
                            below: 7
                        },
                        db: {
                            above: 4,
                            below: 7
                        },
                        d: {
                            above: 4,
                            below: 7
                        },
                        bbs: {
                            above: 4,
                            below: 7
                        },
                        "++": {
                            above: 6,
                            below: 4
                        },
                        "+": {
                            above: 6,
                            below: 4
                        },
                        "+-": {
                            above: 6,
                            below: 4
                        },
                        "++-": {
                            above: 6,
                            below: 4
                        },
                        bs: {
                            above: 4,
                            below: 10
                        },
                        bss: {
                            above: 4,
                            below: 10
                        }
                    }
                }
            }]), or(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "convertToGlyph",
                value: function (t, n) {
                    var i = I.accidentalCodes(t.type),
                        o = new j(i.code, this.glyphFontScale),
                        r = 1;
                    if ("n" === t.type && n) {
                        var s = e.accidentalSpacing[n.type];
                        if (s) r = n.line >= t.line ? s.above : s.below
                    }
                    this.placeGlyphOnLine(o, this.stave, t.line), this.glyphs.push(o);
                    var a = this.xPositions[this.xPositions.length - 1],
                        l = o.getMetrics().width + r;
                    this.xPositions.push(a + l), this.width += l
                }
            }, {
                key: "cancelKey",
                value: function (t) {
                    return this.formatted = !1, this.cancelKeySpec = t, this
                }
            }, {
                key: "convertToCancelAccList",
                value: function (t) {
                    var e = I.keySignature(t),
                        n = this.accList.length > 0 && e.length > 0 && e[0].type !== this.accList[0].type,
                        i = n ? e.length : e.length - this.accList.length;
                    if (!(i < 1)) {
                        for (var o = [], r = 0; r < i; r++) {
                            var s = r;
                            n || (s = e.length - i + r);
                            var a = e[s];
                            o.push({
                                type: "n",
                                line: a.line
                            })
                        }
                        this.accList = o.concat(this.accList)
                    }
                }
            }, {
                key: "addToStave",
                value: function (t) {
                    return this.paddingForced = !0, t.addModifier(this), this
                }
            }, {
                key: "convertAccLines",
                value: function (t, e) {
                    var n, i, o = 0;
                    switch (t) {
                        case "soprano":
                            "#" === e ? n = [2.5, .5, 2, 0, 1.5, -.5, 1] : o = -1;
                            break;
                        case "mezzo-soprano":
                            "b" === e ? n = [0, 2, .5, 2.5, 1, 3, 1.5] : o = 1.5;
                            break;
                        case "alto":
                            o = .5;
                            break;
                        case "tenor":
                            "#" === e ? n = [3, 1, 2.5, .5, 2, 0, 1.5] : o = -.5;
                            break;
                        case "baritone-f":
                        case "baritone-c":
                            "b" === e ? n = [.5, 2.5, 1, 3, 1.5, 3.5, 2] : o = 2;
                            break;
                        case "bass":
                        case "french":
                            o = 1
                    }
                    if (void 0 !== n)
                        for (i = 0; i < this.accList.length; ++i) this.accList[i].line = n[i];
                    else if (0 !== o)
                        for (i = 0; i < this.accList.length; ++i) this.accList[i].line += o
                }
            }, {
                key: "getPadding",
                value: function (t) {
                    return this.formatted || this.format(), 0 === this.glyphs.length || !this.paddingForced && t < 2 ? 0 : this.padding
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.formatted || this.format(), this.width
                }
            }, {
                key: "setKeySig",
                value: function (t, e, n) {
                    return this.formatted = !1, this.keySpec = t, this.cancelKeySpec = e, this.alterKeySpec = n, this
                }
            }, {
                key: "alterKey",
                value: function (t) {
                    return this.formatted = !1, this.alterKeySpec = t, this
                }
            }, {
                key: "convertToAlterAccList",
                value: function (t) {
                    for (var e = Math.min(t.length, this.accList.length), n = 0; n < e; ++n) t[n] && (this.accList[n].type = t[n])
                }
            }, {
                key: "format",
                value: function () {
                    if (!this.stave) throw new h.RERR("KeySignatureError", "Can't draw key signature without stave.");
                    this.width = 0, this.glyphs = [], this.xPositions = [0], this.accList = I.keySignature(this.keySpec), this.cancelKeySpec && this.convertToCancelAccList(this.cancelKeySpec);
                    var t = this.accList.length > 0 ? this.accList[0].type : null;
                    if (this.alterKeySpec && this.convertToAlterAccList(this.alterKeySpec), this.accList.length > 0) {
                        this.convertAccLines(this.stave.clef, t);
                        for (var e = 0; e < this.accList.length; ++e) this.convertToGlyph(this.accList[e], this.accList[e + 1])
                    }
                    this.formatted = !0
                }
            }, {
                key: "draw",
                value: function () {
                    if (!this.x) throw new h.RERR("KeySignatureError", "Can't draw key signature without x.");
                    if (!this.stave) throw new h.RERR("KeySignatureError", "Can't draw key signature without stave.");
                    this.formatted || this.format(), this.setRendered();
                    for (var t = 0; t < this.glyphs.length; t++) {
                        var e = this.glyphs[t],
                            n = this.x + this.xPositions[t];
                        e.setStave(this.stave), e.setContext(this.stave.context), e.renderToStave(n)
                    }
                }
            }]), e
        }();

        function ar(t) {
            return (ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function lr(t, e) {
            return function (t) {
                if (Array.isArray(t)) return t
            }(t) || function (t, e) {
                var n = [],
                    i = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function ur(t, e) {
            return !e || "object" !== ar(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function cr(t) {
            return (cr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function hr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function fr(t, e, n) {
            return e && hr(t.prototype, e), n && hr(t, n), t
        }

        function br(t, e) {
            return (br = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var pr = function (t) {
            function e() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
                    o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (t = ur(this, cr(e).call(this))).setAttribute("type", "TimeSignature"), t.validate_args = o, null === n) return ur(t);
                var r = i;
                return t.point = 40, t.topLine = 2, t.bottomLine = 4, t.setPosition(io.Position.BEGIN), t.setTimeSig(n), t.setWidth(t.timeSig.glyph.getMetrics().width), t.setPadding(r), t
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && br(t, e)
            }(e, io), fr(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "timesignatures"
                }
            }, {
                key: "glyphs",
                get: function () {
                    return {
                        C: {
                            code: "v41",
                            point: 40,
                            line: 2
                        },
                        "C|": {
                            code: "vb6",
                            point: 40,
                            line: 2
                        }
                    }
                }
            }]), fr(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "parseTimeSpec",
                value: function (t) {
                    if ("C" === t || "C|" === t) {
                        var n = e.glyphs[t],
                            i = n.line,
                            o = n.code,
                            r = n.point;
                        return {
                            line: i,
                            num: !1,
                            glyph: new j(o, r)
                        }
                    }
                    this.validate_args && function (t) {
                        var e = t.split("/").filter(function (t) {
                            return "" !== t
                        });
                        if (2 !== e.length) throw new h.RERR("BadTimeSignature", "Invalid time spec: ".concat(t, '. Must be in the form "<numerator>/<denominator>"'));
                        e.forEach(function (e) {
                            if (isNaN(Number(e))) throw new h.RERR("BadTimeSignature", "Invalid time spec: ".concat(t, ". Must contain two valid numbers."))
                        })
                    }(t);
                    var s = lr(t.split("/").map(function (t) {
                            return t.split("")
                        }), 2),
                        a = s[0],
                        l = s[1];
                    return {
                        num: !0,
                        glyph: this.makeTimeSignatureGlyph(a, l)
                    }
                }
            }, {
                key: "makeTimeSignatureGlyph",
                value: function (t, e) {
                    var n = new j("v0", this.point);
                    n.topGlyphs = [], n.botGlyphs = [];
                    for (var i = 0, o = 0; o < t.length; ++o) {
                        var r = t[o],
                            s = new j("v" + r, this.point);
                        n.topGlyphs.push(s), i += s.getMetrics().width
                    }
                    for (var a = 0, l = 0; l < e.length; ++l) {
                        var u = e[l],
                            c = new j("v" + u, this.point);
                        n.botGlyphs.push(c), a += c.getMetrics().width
                    }
                    var h = i > a ? i : a,
                        f = n.getMetrics().x_min;
                    n.getMetrics = function () {
                        return {
                            x_min: f,
                            x_max: f + h,
                            width: h
                        }
                    };
                    var b = (h - i) / 2,
                        p = (h - a) / 2,
                        y = this;
                    return n.renderToStave = function (t) {
                        for (var e = t + b, n = 0; n < this.topGlyphs.length; ++n) {
                            var i = this.topGlyphs[n];
                            j.renderOutline(this.context, i.metrics.outline, i.scale, e + i.x_shift, this.stave.getYForLine(y.topLine) + 1), e += i.getMetrics().width
                        }
                        e = t + p;
                        for (var o = 0; o < this.botGlyphs.length; ++o) {
                            var r = this.botGlyphs[o];
                            y.placeGlyphOnLine(r, this.stave, r.line), j.renderOutline(this.context, r.metrics.outline, r.scale, e + r.x_shift, this.stave.getYForLine(y.bottomLine) + 1), e += r.getMetrics().width
                        }
                    }, n
                }
            }, {
                key: "getTimeSig",
                value: function () {
                    return this.timeSig
                }
            }, {
                key: "setTimeSig",
                value: function (t) {
                    return this.timeSig = this.parseTimeSpec(t), this
                }
            }, {
                key: "draw",
                value: function () {
                    if (!this.x) throw new h.RERR("TimeSignatureError", "Can't draw time signature without x.");
                    if (!this.stave) throw new h.RERR("TimeSignatureError", "Can't draw time signature without stave.");
                    this.setRendered(), this.timeSig.glyph.setStave(this.stave), this.timeSig.glyph.setContext(this.stave.context), this.placeGlyphOnLine(this.timeSig.glyph, this.stave, this.timeSig.line), this.timeSig.glyph.renderToStave(this.x)
                }
            }]), e
        }();

        function yr(t) {
            return (yr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function dr(t, e) {
            return !e || "object" !== yr(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function vr(t) {
            return (vr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function gr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function mr(t, e, n) {
            return e && gr(t.prototype, e), n && gr(t, n), t
        }

        function _r(t, e) {
            return (_r = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var xr = function (t) {
            function e(t, n, i, o) {
                var r;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (r = dr(this, vr(e).call(this))).setAttribute("type", "Volta"), r.volta = t, r.x = i, r.y_shift = o, r.number = n, r.font = {
                    family: "sans-serif",
                    size: 9,
                    weight: "bold"
                }, r
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && _r(t, e)
            }(e, io), mr(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "voltas"
                }
            }, {
                key: "type",
                get: function () {
                    return {
                        NONE: 1,
                        BEGIN: 2,
                        MID: 3,
                        END: 4,
                        BEGIN_END: 5
                    }
                }
            }]), mr(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setShiftY",
                value: function (t) {
                    return this.y_shift = t, this
                }
            }, {
                key: "draw",
                value: function (t, n) {
                    var i = t.checkContext();
                    this.setRendered();
                    var o = t.width,
                        r = t.getYForTopText(t.options.num_lines) + this.y_shift,
                        s = 1.5 * t.options.spacing_between_lines_px;
                    switch (this.volta) {
                        case e.type.BEGIN:
                            i.fillRect(this.x + n, r, 1, s);
                            break;
                        case e.type.END:
                            o -= 5, i.fillRect(this.x + n + o, r, 1, s);
                            break;
                        case e.type.BEGIN_END:
                            o -= 3, i.fillRect(this.x + n, r, 1, s), i.fillRect(this.x + n + o, r, 1, s)
                    }
                    return this.volta !== e.type.BEGIN && this.volta !== e.type.BEGIN_END || (i.save(), i.setFont(this.font.family, this.font.size, this.font.weight), i.fillText(this.number, this.x + n + 5, r + 15), i.restore()), i.fillRect(this.x + n, r, o, 1), this
                }
            }]), e
        }();

        function wr(t) {
            return (wr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function kr() {
            return (kr = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Sr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Tr(t, e) {
            return !e || "object" !== wr(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Er(t) {
            return (Er = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Or(t, e) {
            return (Or = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Rr = function (t) {
            function e(t, n, i, o) {
                var r;
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (r = Tr(this, Er(e).call(this))).setAttribute("type", "Stave"), r.x = t, r.y = n, r.width = i, r.formatted = !1, r.start_x = t + 5, r.end_x = t + i, r.modifiers = [], r.measure = 0, r.clef = "treble", r.font = {
                    family: "sans-serif",
                    size: 8,
                    weight: ""
                }, r.options = {
                    vertical_bar_width: 10,
                    glyph_spacing_px: 10,
                    num_lines: 5,
                    fill_style: "#999999",
                    left_bar: !0,
                    right_bar: !0,
                    spacing_between_lines_px: 10,
                    space_above_staff_ln: 4,
                    space_below_staff_ln: 4,
                    top_text_position: 1
                }, r.bounds = {
                    x: r.x,
                    y: r.y,
                    w: r.width,
                    h: 0
                }, h.Merge(r.options, o), r.resetLines();
                var s = co.type;
                return r.addModifier(new co(r.options.left_bar ? s.SINGLE : s.NONE)), r.addEndModifier(new co(r.options.right_bar ? s.SINGLE : s.NONE)), r
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Or(t, e)
            }(e, k), n = e, (i = [{
                key: "space",
                value: function (t) {
                    return this.options.spacing_between_lines_px * t
                }
            }, {
                key: "resetLines",
                value: function () {
                    this.options.line_config = [];
                    for (var t = 0; t < this.options.num_lines; t++) this.options.line_config.push({
                        visible: !0
                    });
                    this.height = (this.options.num_lines + this.options.space_above_staff_ln) * this.options.spacing_between_lines_px, this.options.bottom_text_position = this.options.num_lines
                }
            }, {
                key: "getOptions",
                value: function () {
                    return this.options
                }
            }, {
                key: "setNoteStartX",
                value: function (t) {
                    return this.formatted || this.format(), this.start_x = t, this
                }
            }, {
                key: "getNoteStartX",
                value: function () {
                    return this.formatted || this.format(), this.start_x
                }
            }, {
                key: "getNoteEndX",
                value: function () {
                    return this.formatted || this.format(), this.end_x
                }
            }, {
                key: "getTieStartX",
                value: function () {
                    return this.start_x
                }
            }, {
                key: "getTieEndX",
                value: function () {
                    return this.x + this.width
                }
            }, {
                key: "getX",
                value: function () {
                    return this.x
                }
            }, {
                key: "getNumLines",
                value: function () {
                    return this.options.num_lines
                }
            }, {
                key: "setNumLines",
                value: function (t) {
                    return this.options.num_lines = parseInt(t, 10), this.resetLines(), this
                }
            }, {
                key: "setY",
                value: function (t) {
                    return this.y = t, this
                }
            }, {
                key: "getTopLineTopY",
                value: function () {
                    return this.getYForLine(0) - I.STAVE_LINE_THICKNESS / 2
                }
            }, {
                key: "getBottomLineBottomY",
                value: function () {
                    return this.getYForLine(this.getNumLines() - 1) + I.STAVE_LINE_THICKNESS / 2
                }
            }, {
                key: "setX",
                value: function (t) {
                    var e = t - this.x;
                    this.formatted = !1, this.x = t, this.start_x += e, this.end_x += e;
                    for (var n = 0; n < this.modifiers.length; n++) {
                        var i = this.modifiers[n];
                        void 0 !== i.x && (i.x += e)
                    }
                    return this
                }
            }, {
                key: "setWidth",
                value: function (t) {
                    return this.formatted = !1, this.width = t, this.end_x = this.x + t, this
                }
            }, {
                key: "getWidth",
                value: function () {
                    return this.width
                }
            }, {
                key: "getStyle",
                value: function () {
                    return kr({
                        fillStyle: this.options.fill_style,
                        strokeStyle: this.options.fill_style,
                        lineWidth: I.STAVE_LINE_THICKNESS
                    }, this.style || {})
                }
            }, {
                key: "setMeasure",
                value: function (t) {
                    return this.measure = t, this
                }
            }, {
                key: "getModifierXShift",
                value: function () {
                    if ("number" != typeof (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) throw new h.RERR("InvalidIndex", "Must be of number type");
                    if (this.formatted || this.format(), 1 === this.getModifiers(io.Position.BEGIN).length) return 0;
                    var t = this.start_x - this.x,
                        e = this.modifiers[0];
                    return e.getType() === co.type.REPEAT_BEGIN && t > e.getWidth() && (t -= e.getWidth()), t
                }
            }, {
                key: "setRepetitionTypeLeft",
                value: function (t, e) {
                    return this.modifiers.push(new go(t, this.x, e)), this
                }
            }, {
                key: "setRepetitionTypeRight",
                value: function (t, e) {
                    return this.modifiers.push(new go(t, this.x, e)), this
                }
            }, {
                key: "setVoltaType",
                value: function (t, e, n) {
                    return this.modifiers.push(new xr(t, e, this.x, n)), this
                }
            }, {
                key: "setSection",
                value: function (t, e) {
                    return this.modifiers.push(new To(t, this.x, e)), this
                }
            }, {
                key: "setTempo",
                value: function (t, e) {
                    return this.modifiers.push(new Ao(t, this.x, e)), this
                }
            }, {
                key: "setText",
                value: function (t, e, n) {
                    return this.modifiers.push(new Vo(t, e, n)), this
                }
            }, {
                key: "getHeight",
                value: function () {
                    return this.height
                }
            }, {
                key: "getSpacingBetweenLines",
                value: function () {
                    return this.options.spacing_between_lines_px
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    return new R(this.x, this.y, this.width, this.getBottomY() - this.y)
                }
            }, {
                key: "getBottomY",
                value: function () {
                    var t = this.options,
                        e = t.spacing_between_lines_px;
                    return this.getYForLine(t.num_lines) + t.space_below_staff_ln * e
                }
            }, {
                key: "getBottomLineY",
                value: function () {
                    return this.getYForLine(this.options.num_lines)
                }
            }, {
                key: "getYForLine",
                value: function (t) {
                    var e = this.options,
                        n = e.spacing_between_lines_px,
                        i = e.space_above_staff_ln;
                    return this.y + t * n + i * n
                }
            }, {
                key: "getLineForY",
                value: function (t) {
                    var e = this.options,
                        n = e.spacing_between_lines_px,
                        i = e.space_above_staff_ln;
                    return (t - this.y) / n - i
                }
            }, {
                key: "getYForTopText",
                value: function (t) {
                    var e = t || 0;
                    return this.getYForLine(-e - this.options.top_text_position)
                }
            }, {
                key: "getYForBottomText",
                value: function (t) {
                    var e = t || 0;
                    return this.getYForLine(this.options.bottom_text_position + e)
                }
            }, {
                key: "getYForNote",
                value: function (t) {
                    var e = this.options,
                        n = e.spacing_between_lines_px,
                        i = e.space_above_staff_ln;
                    return this.y + i * n + 5 * n - t * n
                }
            }, {
                key: "getYForGlyphs",
                value: function () {
                    return this.getYForLine(3)
                }
            }, {
                key: "addModifier",
                value: function (t, e) {
                    return void 0 !== e && t.setPosition(e), t.setStave(this), this.formatted = !1, this.modifiers.push(t), this
                }
            }, {
                key: "addEndModifier",
                value: function (t) {
                    return this.addModifier(t, io.Position.END), this
                }
            }, {
                key: "setBegBarType",
                value: function (t) {
                    var e = co.type,
                        n = e.SINGLE,
                        i = e.REPEAT_BEGIN,
                        o = e.NONE;
                    return t !== n && t !== i && t !== o || (this.modifiers[0].setType(t), this.formatted = !1), this
                }
            }, {
                key: "setEndBarType",
                value: function (t) {
                    return t !== co.type.REPEAT_BEGIN && (this.modifiers[1].setType(t), this.formatted = !1), this
                }
            }, {
                key: "setClef",
                value: function (t, e, n, i) {
                    void 0 === i && (i = io.Position.BEGIN), this.clef = t;
                    var o = this.getModifiers(i, $o.CATEGORY);
                    return 0 === o.length ? this.addClef(t, e, n, i) : o[0].setType(t, e, n), this
                }
            }, {
                key: "setEndClef",
                value: function (t, e, n) {
                    return this.setClef(t, e, n, io.Position.END), this
                }
            }, {
                key: "setKeySignature",
                value: function (t, e, n) {
                    void 0 === n && (n = io.Position.BEGIN);
                    var i = this.getModifiers(n, sr.CATEGORY);
                    return 0 === i.length ? this.addKeySignature(t, e, n) : i[0].setKeySig(t, e), this
                }
            }, {
                key: "setEndKeySignature",
                value: function (t, e) {
                    return this.setKeySignature(t, e, io.Position.END), this
                }
            }, {
                key: "setTimeSignature",
                value: function (t, e, n) {
                    void 0 === n && (n = io.Position.BEGIN);
                    var i = this.getModifiers(n, pr.CATEGORY);
                    return 0 === i.length ? this.addTimeSignature(t, e, n) : i[0].setTimeSig(t), this
                }
            }, {
                key: "setEndTimeSignature",
                value: function (t, e) {
                    return this.setTimeSignature(t, e, io.Position.END), this
                }
            }, {
                key: "addKeySignature",
                value: function (t, e, n) {
                    return this.addModifier(new sr(t, e), n), this
                }
            }, {
                key: "addClef",
                value: function (t, e, n, i) {
                    return void 0 !== i && i !== io.Position.BEGIN || (this.clef = t), this.addModifier(new $o(t, e, n), i), this
                }
            }, {
                key: "addEndClef",
                value: function (t, e, n) {
                    return this.addClef(t, e, n, io.Position.END), this
                }
            }, {
                key: "addTimeSignature",
                value: function (t, e, n) {
                    return this.addModifier(new pr(t, e), n), this
                }
            }, {
                key: "addEndTimeSignature",
                value: function (t, e) {
                    return this.addTimeSignature(t, e, io.Position.END), this
                }
            }, {
                key: "addTrebleGlyph",
                value: function () {
                    return this.addClef("treble"), this
                }
            }, {
                key: "getModifiers",
                value: function (t, e) {
                    return void 0 === t ? this.modifiers : this.modifiers.filter(function (n) {
                        return t === n.getPosition() && (void 0 === e || e === n.getCategory())
                    })
                }
            }, {
                key: "sortByCategory",
                value: function (t, e) {
                    for (var n = t.length - 1; n >= 0; n--)
                        for (var i = 0; i < n; i++)
                            if (e[t[i].getCategory()] > e[t[i + 1].getCategory()]) {
                                var o = t[i];
                                t[i] = t[i + 1], t[i + 1] = o
                            }
                }
            }, {
                key: "format",
                value: function () {
                    var t, e, n, i = this.modifiers[0],
                        o = this.modifiers[1],
                        r = this.getModifiers(io.Position.BEGIN),
                        s = this.getModifiers(io.Position.END);
                    this.sortByCategory(r, {
                        barlines: 0,
                        clefs: 1,
                        keysignatures: 2,
                        timesignatures: 3
                    }), this.sortByCategory(s, {
                        timesignatures: 0,
                        keysignatures: 1,
                        barlines: 2,
                        clefs: 3
                    }), r.length > 1 && i.getType() === co.type.REPEAT_BEGIN && (r.push(r.splice(0, 1)[0]), r.splice(0, 0, new co(co.type.SINGLE))), s.indexOf(o) > 0 && s.splice(0, 0, new co(co.type.NONE));
                    for (var a = 0, l = this.x, u = 0; u < r.length; u++) e = (n = r[u]).getPadding(u + a), t = n.getWidth(), l += e, n.setX(l), l += t, e + t === 0 && a--;
                    this.start_x = l, l = this.x + this.width;
                    for (var c = {
                            left: 0,
                            right: 0,
                            paddingRight: 0,
                            paddingLeft: 0
                        }, h = 0, f = 0; f < s.length; f++) {
                        h = "barlines" === (n = s[f]).getCategory() ? f : h, c.right = 0, c.left = 0, c.paddingRight = 0, c.paddingLeft = 0;
                        var b = n.getLayoutMetrics();
                        b ? (0 !== f && (c.right = b.xMax || 0, c.paddingRight = b.paddingRight || 0), c.left = -b.xMin || 0, c.paddingLeft = b.paddingLeft || 0, f === s.length - 1 && (c.paddingLeft = 0)) : (c.paddingRight = n.getPadding(f - h), 0 !== f && (c.right = n.getWidth()), 0 === f && (c.left = n.getWidth())), l -= c.paddingRight, l -= c.right, n.setX(l), l -= c.left, l -= c.paddingLeft
                    }
                    this.end_x = 1 === s.length ? this.x + this.width : l, this.formatted = !0
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered(), this.formatted || this.format();
                    for (var t, e = this.options.num_lines, n = this.width, i = this.x, o = 0; o < e; o++) t = this.getYForLine(o), this.applyStyle(), this.options.line_config[o].visible && (this.context.beginPath(), this.context.moveTo(i, t), this.context.lineTo(i + n, t), this.context.stroke()), this.restoreStyle();
                    for (var r = 0; r < this.modifiers.length; r++) "function" == typeof this.modifiers[r].draw && this.modifiers[r].draw(this, this.getModifierXShift(r));
                    if (this.measure > 0) {
                        this.context.save(), this.context.setFont(this.font.family, this.font.size, this.font.weight);
                        var s = this.context.measureText("" + this.measure).width;
                        t = this.getYForTopText(0) + 3, this.context.fillText("" + this.measure, this.x - s / 2, t), this.context.restore()
                    }
                    return this
                }
            }, {
                key: "drawVertical",
                value: function (t, e) {
                    this.drawVerticalFixed(this.x + t, e)
                }
            }, {
                key: "drawVerticalFixed",
                value: function (t, e) {
                    this.checkContext();
                    var n = this.getYForLine(0),
                        i = this.getYForLine(this.options.num_lines - 1);
                    e && this.context.fillRect(t - 3, n, 1, i - n + 1), this.context.fillRect(t, n, 1, i - n + 1)
                }
            }, {
                key: "drawVerticalBar",
                value: function (t) {
                    this.drawVerticalBarFixed(this.x + t, !1)
                }
            }, {
                key: "drawVerticalBarFixed",
                value: function (t) {
                    this.checkContext();
                    var e = this.getYForLine(0),
                        n = this.getYForLine(this.options.num_lines - 1);
                    this.context.fillRect(t, e, 1, n - e + 1)
                }
            }, {
                key: "getConfigForLines",
                value: function () {
                    return this.options.line_config
                }
            }, {
                key: "setConfigForLine",
                value: function (t, e) {
                    if (t >= this.options.num_lines || t < 0) throw new h.RERR("StaveConfigError", "The line number must be within the range of the number of lines in the Stave.");
                    if (void 0 === e.visible) throw new h.RERR("StaveConfigError", "The line configuration object is missing the 'visible' property.");
                    if ("boolean" != typeof e.visible) throw new h.RERR("StaveConfigError", "The line configuration objects 'visible' property must be true or false.");
                    return this.options.line_config[t] = e, this
                }
            }, {
                key: "setConfigForLines",
                value: function (t) {
                    if (t.length !== this.options.num_lines) throw new h.RERR("StaveConfigError", "The length of the lines configuration array must match the number of lines in the Stave");
                    for (var e in t) t[e] || (t[e] = this.options.line_config[e]), h.Merge(this.options.line_config[e], t[e]);
                    return this.options.line_config = t, this
                }
            }]) && Sr(n.prototype, i), o && Sr(n, o), e
        }();

        function Pr(t) {
            return (Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Cr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Nr(t, e) {
            return !e || "object" !== Pr(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ar(t) {
            return (Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Lr(t, e) {
            return (Lr = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Mr = function (t) {
            function e(t, n, i, o) {
                var r;
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var s = {
                    spacing_between_lines_px: 13,
                    num_lines: 6,
                    top_text_position: 1
                };
                return h.Merge(s, o), (r = Nr(this, Ar(e).call(this, t, n, i, s))).setAttribute("type", "TabStave"), r
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Lr(t, e)
            }(e, Rr), n = e, (i = [{
                key: "getYForGlyphs",
                value: function () {
                    return this.getYForLine(2.5)
                }
            }, {
                key: "addTabGlyph",
                value: function () {
                    return this.addClef("tab"), this
                }
            }]) && Cr(n.prototype, i), o && Cr(n, o), e
        }();

        function Fr(t) {
            return (Fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Br(t, e) {
            return !e || "object" !== Fr(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function jr(t, e, n) {
            return (jr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Dr(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function Dr(t) {
            return (Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ir(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Gr(t, e, n) {
            return e && Ir(t.prototype, e), n && Ir(t, n), t
        }

        function Yr(t, e) {
            return (Yr = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Wr = function (t) {
            function e(t, n) {
                var i;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (i = Br(this, Dr(e).call(this, t))).setAttribute("type", "TabNote"), i.ghost = !1, i.positions = t.positions, h.Merge(i.render_options, {
                        glyph_font_scale: I.DEFAULT_TABLATURE_FONT_SCALE,
                        draw_stem: n,
                        draw_dots: n,
                        draw_stem_through_stave: !1,
                        y_shift: 0,
                        scale: 1,
                        font: "10pt Arial"
                    }), i.glyph = I.durationToGlyph(i.duration, i.noteType), !i.glyph) throw new h.RuntimeError("BadArguments", "Invalid note initialization data (No glyph found): ".concat(JSON.stringify(t)));
                return i.buildStem(), t.stem_direction ? i.setStemDirection(t.stem_direction) : i.setStemDirection(rt.UP), i.ghost = !1, i.updateWidth(), i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Yr(t, e)
            }(e, ue), Gr(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "tabnotes"
                }
            }]), Gr(e, [{
                key: "reset",
                value: function () {
                    this.stave && this.setStave(this.stave)
                }
            }, {
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "setGhost",
                value: function (t) {
                    return this.ghost = t, this.updateWidth(), this
                }
            }, {
                key: "hasStem",
                value: function () {
                    return this.render_options.draw_stem
                }
            }, {
                key: "getStemExtension",
                value: function () {
                    var t = this.getGlyph();
                    return null != this.stem_extension_override ? this.stem_extension_override : t ? 1 === this.getStemDirection() ? t.tabnote_stem_up_extension : t.tabnote_stem_down_extension : 0
                }
            }, {
                key: "addDot",
                value: function () {
                    var t = new ke;
                    return this.dots += 1, this.addModifier(t, 0)
                }
            }, {
                key: "updateWidth",
                value: function () {
                    var t = this;
                    this.glyphs = [], this.width = 0;
                    for (var e = 0; e < this.positions.length; ++e) {
                        var n = this.positions[e].fret;
                        this.ghost && (n = "(" + n + ")");
                        var i = I.tabToGlyph(n, this.render_options.scale);
                        this.glyphs.push(i), this.width = Math.max(i.getWidth(), this.width)
                    }
                    this.glyph.getWidth = function () {
                        return t.width
                    }
                }
            }, {
                key: "setStave",
                value: function (t) {
                    var n, i = this;
                    if (jr(Dr(e.prototype), "setStave", this).call(this, t), this.context = t.context, this.context) {
                        var o = this.context;
                        this.width = 0;
                        var r = function () {
                            var t = i.glyphs[n],
                                e = "" + t.text;
                            "X" !== e.toUpperCase() && (o.save(), o.setRawFont(i.render_options.font), t.width = o.measureText(e).width, o.restore(), t.getWidth = function () {
                                return t.width
                            }), i.width = Math.max(t.getWidth(), i.width)
                        };
                        for (n = 0; n < this.glyphs.length; ++n) r();
                        this.glyph.getWidth = function () {
                            return i.width
                        }
                    }
                    var s = this.positions.map(function (e) {
                        var n = e.str;
                        return t.getYForLine(n - 1)
                    });
                    return this.setYs(s), this.stem && this.stem.setYBounds(this.getStemY(), this.getStemY()), this
                }
            }, {
                key: "getPositions",
                value: function () {
                    return this.positions
                }
            }, {
                key: "addToModifierContext",
                value: function (t) {
                    this.setModifierContext(t);
                    for (var e = 0; e < this.modifiers.length; ++e) this.modifierContext.addModifier(this.modifiers[e]);
                    return this.modifierContext.addModifier(this), this.preFormatted = !1, this
                }
            }, {
                key: "getTieRightX",
                value: function () {
                    var t = this.getAbsoluteX();
                    return t += this.glyph.getWidth() / 2, t += -this.width / 2 + this.width + 2
                }
            }, {
                key: "getTieLeftX",
                value: function () {
                    var t = this.getAbsoluteX();
                    return t += this.glyph.getWidth() / 2, t -= this.width / 2 + 2
                }
            }, {
                key: "getModifierStartXY",
                value: function (t, e) {
                    if (!this.preFormatted) throw new h.RERR("UnformattedNote", "Can't call GetModifierStartXY on an unformatted note");
                    if (0 === this.ys.length) throw new h.RERR("NoYValues", "No Y-Values calculated for this note.");
                    var n = 0;
                    if (t === de.Position.LEFT) n = -2;
                    else if (t === de.Position.RIGHT) n = this.width + 2;
                    else if (t === de.Position.BELOW || t === de.Position.ABOVE) {
                        n = this.glyph.getWidth() / 2
                    }
                    return {
                        x: this.getAbsoluteX() + n,
                        y: this.ys[e]
                    }
                }
            }, {
                key: "getLineForRest",
                value: function () {
                    return this.positions[0].str
                }
            }, {
                key: "preFormat",
                value: function () {
                    this.preFormatted || (this.modifierContext && this.modifierContext.preFormat(), this.setPreFormatted(!0))
                }
            }, {
                key: "getStemX",
                value: function () {
                    return this.getCenterGlyphX()
                }
            }, {
                key: "getStemY",
                value: function () {
                    var t = this.stave.getNumLines() - .5,
                        e = rt.UP === this.stem_direction ? -.5 : t;
                    return this.stave.getYForLine(e)
                }
            }, {
                key: "getStemExtents",
                value: function () {
                    return this.stem.getExtents()
                }
            }, {
                key: "drawFlag",
                value: function () {
                    var t = this.beam,
                        e = this.glyph,
                        n = this.context,
                        i = this.stem,
                        o = this.stem_direction,
                        r = this.render_options,
                        s = r.draw_stem,
                        a = r.glyph_font_scale,
                        l = null == t && s;
                    if (e.flag && l) {
                        var u = this.getStemX() + 1,
                            c = this.getStemY() - i.getHeight(),
                            h = o === rt.DOWN ? e.code_flag_downstem : e.code_flag_upstem;
                        j.renderGlyph(n, u, c, a, h)
                    }
                }
            }, {
                key: "drawModifiers",
                value: function () {
                    var t = this;
                    this.modifiers.forEach(function (e) {
                        ("dots" !== e.getCategory() || t.render_options.draw_dots) && (e.setContext(t.context), e.draw())
                    })
                }
            }, {
                key: "drawStemThrough",
                value: function () {
                    var t = this.getStemX(),
                        e = this.getStemY(),
                        n = this.context,
                        i = this.render_options.draw_stem_through_stave;
                    if (this.render_options.draw_stem && i) {
                        var o = function (t, e, n, i) {
                            var o = 1 !== i,
                                r = -1 !== i,
                                s = n.getSpacingBetweenLines(),
                                a = n.getNumLines(),
                                l = [];
                            return e.forEach(function (e) {
                                var u = e.indexOf(a) > -1,
                                    c = e.indexOf(1) > -1;
                                if (!(o && c || r && u)) {
                                    1 === e.length && e.push(e[0]);
                                    var h = [];
                                    e.forEach(function (e, o, r) {
                                        var l = 1 === e,
                                            u = e === a,
                                            c = n.getYForLine(e - 1);
                                        0 !== o || l ? o !== r.length - 1 || u || (c += s / 2 - 1) : c -= s / 2 - 1, h.push(c), 1 === i && l ? h.push(t - 2) : -1 === i && u && h.push(t + 2)
                                    }), l.push(h.sort(function (t, e) {
                                        return t - e
                                    }))
                                }
                            }), l
                        }(e, function (t, e) {
                            for (var n = [], i = [], o = 1; o <= t; o++) e.indexOf(o) > -1 ? (n.push(i), i = []) : i.push(o);
                            return i.length > 0 && n.push(i), n
                        }(this.stave.getNumLines(), this.positions.map(function (t) {
                            return t.str
                        })), this.getStave(), this.getStemDirection());
                        n.save(), n.setLineWidth(rt.WIDTH), o.forEach(function (e) {
                            0 !== e.length && (n.beginPath(), n.moveTo(t, e[0]), n.lineTo(t, e[e.length - 1]), n.stroke(), n.closePath())
                        }), n.restore()
                    }
                }
            }, {
                key: "drawPositions",
                value: function () {
                    for (var t = this.context, e = this.getAbsoluteX(), n = this.ys, i = 0; i < this.positions.length; ++i) {
                        var o = n[i] + this.render_options.y_shift,
                            r = this.glyphs[i],
                            s = e + this.glyph.getWidth() / 2 - r.getWidth() / 2;
                        if (t.clearRect(s - 2, o - 3, r.getWidth() + 4, 6), r.code) j.renderGlyph(t, s, o, this.render_options.glyph_font_scale * this.render_options.scale, r.code);
                        else {
                            t.save(), t.setRawFont(this.render_options.font);
                            var a = r.text.toString();
                            t.fillText(a, s, o + 5 * this.render_options.scale), t.restore()
                        }
                    }
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.stave) throw new h.RERR("NoStave", "Can't draw without a stave.");
                    if (0 === this.ys.length) throw new h.RERR("NoYValues", "Can't draw note without Y values.");
                    this.setRendered();
                    var t = null == this.beam && this.render_options.draw_stem;
                    this.drawPositions(), this.drawStemThrough();
                    var e = this.getStemX();
                    this.stem.setNoteHeadXBounds(e, e), t && (this.context.openGroup("stem", null, {
                        pointerBBox: !0
                    }), this.stem.setContext(this.context).draw(), this.context.closeGroup()), this.drawFlag(), this.drawModifiers()
                }
            }]), e
        }();

        function Hr(t) {
            return (Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Xr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ur(t, e) {
            return !e || "object" !== Hr(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Vr(t) {
            return (Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function zr(t, e) {
            return (zr = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Kr, Jr = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Ur(this, Vr(e).call(this))).setAttribute("type", "VibratoBracket"), n.start = t.start, n.stop = t.stop, n.line = 1, n.render_options = {
                    harsh: !1,
                    wave_height: 6,
                    wave_width: 4,
                    wave_girth: 2
                }, n
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && zr(t, e)
            }(e, k), n = e, (i = [{
                key: "setLine",
                value: function (t) {
                    return this.line = t, this
                }
            }, {
                key: "setHarsh",
                value: function (t) {
                    return this.render_options.harsh = t, this
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this.context;
                    this.setRendered();
                    var e = this.start ? this.start.getStave().getYForTopText(this.line) : this.stop.getStave().getYForTopText(this.line),
                        n = this.start ? this.start.getAbsoluteX() : this.stop.getStave().getTieStartX(),
                        i = this.stop ? this.stop.getAbsoluteX() - this.stop.getWidth() - 5 : this.start.getStave().getTieEndX() - 10;
                    this.render_options.vibrato_width = i - n,
                        function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            Jr.DEBUG && h.L("Vex.Flow.VibratoBracket", e)
                        }("Rendering VibratoBracket: start_x:", n, "stop_x:", i, "y:", e), Yi.renderVibrato(t, n, e, this.render_options)
                }
            }]) && Xr(n.prototype, i), o && Xr(n, o), e
        }();

        function qr(t) {
            return (qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Qr(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Zr(t, e) {
            return !e || "object" !== qr(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function $r(t) {
            return ($r = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ts(t, e) {
            return (ts = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var es = function (t) {
            function e(t, n) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = Zr(this, $r(e).call(this))).setAttribute("type", "MultiMeasureRest"), i.render_options = {
                    show_number: !0,
                    number_line: -.5,
                    number_glyph_point: 40,
                    padding_left: void 0,
                    padding_right: void 0,
                    line: 2,
                    spacing_between_lines_px: 10,
                    line_thickness: void 0,
                    serif_thickness: 2,
                    use_symbols: !1,
                    symbol_spacing: void 0,
                    semibrave_rest_glyph_scale: I.DEFAULT_NOTATION_FONT_SCALE
                }, h.Merge(i.render_options, n), i.number_of_measures = t, i.xs = {
                    left: NaN,
                    right: NaN
                }, i
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ts(t, e)
            }(e, k), n = e, (i = [{
                key: "getXs",
                value: function () {
                    return this.xs
                }
            }, {
                key: "setStave",
                value: function (t) {
                    return this.stave = t, this
                }
            }, {
                key: "getStave",
                value: function () {
                    return this.stave
                }
            }, {
                key: "drawLine",
                value: function (t, e, n, i) {
                    var o = this.stave.getYForLine(this.render_options.line),
                        r = .1 * (n - e);
                    e += r, n -= r;
                    var s = this.render_options.serif_thickness,
                        a = .25 * i;
                    isNaN(this.render_options.line_thickness) || (a = .5 * this.render_options.line_thickness), t.save(), t.beginPath(), t.moveTo(e, o - i), t.lineTo(e + s, o - i), t.lineTo(e + s, o - a), t.lineTo(n - s, o - a), t.lineTo(n - s, o - i), t.lineTo(n, o - i), t.lineTo(n, o + i), t.lineTo(n - s, o + i), t.lineTo(n - s, o + a), t.lineTo(e + s, o + a), t.lineTo(e + s, o + i), t.lineTo(e, o + i), t.closePath(), t.fill()
                }
            }, {
                key: "drawSymbols",
                value: function (t, e, n, i) {
                    var o = Math.floor(this.number_of_measures / 4),
                        r = this.number_of_measures % 4,
                        s = Math.floor(r / 2),
                        a = r % 2,
                        l = function () {
                            if (!Kr) {
                                var t = new ie({
                                    duration: "w",
                                    note_type: "r"
                                });
                                Kr = {
                                    glyph_font_scale: t.render_options.glyph_font_scale,
                                    glyph_code: t.glyph_code,
                                    width: t.getWidth()
                                }
                            }
                            return Kr
                        }(),
                        u = l.width * (this.render_options.semibrave_rest_glyph_scale / l.glyph_font_scale),
                        c = {
                            2: {
                                width: .5 * u,
                                height: i
                            },
                            1: {
                                width: u
                            }
                        },
                        h = 1.35 * u;
                    isNaN(this.render_options.symbol_spacing) || (h = this.render_options.symbol_spacing);
                    var f = e + .5 * (n - e) - .5 * (o * c[2].width + s * c[2].width + a * c[1].width + (o + s + a - 1) * h),
                        b = this.stave.getYForLine(this.render_options.line - 1),
                        p = this.stave.getYForLine(this.render_options.line),
                        y = this.stave.getYForLine(this.render_options.line + 1);
                    t.save(), t.setStrokeStyle("none"), t.setLineWidth(0);
                    for (var d = 0; d < o; ++d) t.fillRect(f, p - c[2].height, c[2].width, c[2].height), t.fillRect(f, y - c[2].height, c[2].width, c[2].height), f += c[2].width + h;
                    for (var v = 0; v < s; ++v) t.fillRect(f, p - c[2].height, c[2].width, c[2].height), f += c[2].width + h;
                    for (var g = 0; g < a; ++g) j.renderGlyph(t, f, b, this.render_options.semibrave_rest_glyph_scale, l.glyph_code), f += c[1].width + h;
                    t.restore()
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered();
                    var t = this.context,
                        e = this.stave,
                        n = this.render_options.spacing_between_lines_px,
                        i = e.getNoteStartX(),
                        o = e.getNoteEndX(),
                        r = e.getModifiers(io.Position.BEGIN);
                    if (1 === r.length && "barlines" === r[0].getCategory() && (i -= r[0].getWidth()), isNaN(this.render_options.padding_left) || (i = e.getX() + this.render_options.padding_left), isNaN(this.render_options.padding_right) || (o = e.getX() + e.getWidth() - this.render_options.padding_right), this.xs.left = i, this.xs.right = o, this.render_options.use_symbols ? this.drawSymbols(t, i, o, n) : this.drawLine(t, i, o, n), this.render_options.show_number) {
                        var s = "/" + this.number_of_measures,
                            a = new pr(null, void 0, !1);
                        a.point = this.render_options.number_glyph_point, a.setTimeSig(s), a.setStave(e), a.x = i + .5 * (o - i) - .5 * a.timeSig.glyph.getMetrics().width, a.bottomLine = this.render_options.number_line, a.setContext(t).draw()
                    }
                }
            }]) && Qr(n.prototype, i), o && Qr(n, o), e
        }();

        function ns(t) {
            return (ns = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function is(t, e) {
            return !e || "object" !== ns(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function os(t, e, n) {
            return (os = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = rs(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function rs(t) {
            return (rs = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ss(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function as(t, e, n) {
            return e && ss(t.prototype, e), n && ss(t, n), t
        }

        function ls(t, e) {
            return (ls = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var us = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = is(this, rs(e).call(this, {
                    duration: "b"
                }))).setAttribute("type", "ClefNote"), o.setType(t, n, i), o.ignore_ticks = !0, o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ls(t, e)
            }(e, Jt), as(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "clefnote"
                }
            }]), as(e, [{
                key: "setType",
                value: function (t, e, n) {
                    return this.type = t, this.clef_obj = new $o(t, e, n), this.clef = this.clef_obj.clef, this.glyph = new j(this.clef.code, this.clef.point), this.setWidth(this.glyph.getMetrics().width), this
                }
            }, {
                key: "getClef",
                value: function () {
                    return this.clef
                }
            }, {
                key: "setContext",
                value: function (t) {
                    return this.context = t, this.glyph.setContext(this.context), this
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    return os(rs(e.prototype), "getBoundingBox", this).call(this)
                }
            }, {
                key: "addToModifierContext",
                value: function () {
                    return this
                }
            }, {
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "preFormat",
                value: function () {
                    return this.setPreFormatted(!0), this
                }
            }, {
                key: "draw",
                value: function () {
                    if (!this.stave) throw new h.RERR("NoStave", "Can't draw without a stave.");
                    this.glyph.getContext() || this.glyph.setContext(this.context), this.setRendered();
                    var t = this.getAbsoluteX();
                    if (this.glyph.setStave(this.stave), this.glyph.setYShift(this.stave.getYForLine(this.clef.line) - this.stave.getYForGlyphs()), this.glyph.renderToStave(t), void 0 !== this.clef_obj.annotation) {
                        var e = new j(this.clef_obj.annotation.code, this.clef_obj.annotation.point);
                        e.getContext() || e.setContext(this.context), e.setStave(this.stave), e.setYShift(this.stave.getYForLine(this.clef_obj.annotation.line) - this.stave.getYForGlyphs()), e.setXShift(this.clef_obj.annotation.x_shift), e.renderToStave(t)
                    }
                }
            }]), e
        }();

        function cs(t) {
            return (cs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function hs(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function fs(t, e) {
            return !e || "object" !== cs(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function bs(t, e, n) {
            return (bs = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ps(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function ps(t) {
            return (ps = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ys(t, e) {
            return (ys = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ds = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = fs(this, ps(e).call(this, {
                    duration: "b"
                }))).setAttribute("type", "KeySigNote"), o.keySignature = new sr(t, n, i), o.ignore_ticks = !0, o
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ys(t, e)
            }(e, Jt), n = e, (i = [{
                key: "getBoundingBox",
                value: function () {
                    return bs(ps(e.prototype), "getBoundingBox", this).call(this)
                }
            }, {
                key: "addToModifierContext",
                value: function () {
                    return this
                }
            }, {
                key: "preFormat",
                value: function () {
                    return this.setPreFormatted(!0), this.keySignature.setStave(this.stave), this.keySignature.format(), this.setWidth(this.keySignature.width), this
                }
            }, {
                key: "draw",
                value: function () {
                    this.stave.checkContext(), this.setRendered(), this.keySignature.x = this.getAbsoluteX(), this.keySignature.setContext(this.context), this.keySignature.draw()
                }
            }]) && hs(n.prototype, i), o && hs(n, o), e
        }();

        function vs(t) {
            return (vs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function gs(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ms(t, e) {
            return !e || "object" !== vs(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function _s(t, e, n) {
            return (_s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = xs(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function xs(t) {
            return (xs = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ws(t, e) {
            return (ws = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ks = function (t) {
            function e(t, n) {
                var i;
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = ms(this, xs(e).call(this, {
                    duration: "b"
                }))).setAttribute("type", "TimeSigNote");
                var o = new pr(t, n);
                return i.timeSig = o.getTimeSig(), i.setWidth(i.timeSig.glyph.getMetrics().width), i.ignore_ticks = !0, i
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ws(t, e)
            }(e, Jt), n = e, (i = [{
                key: "getBoundingBox",
                value: function () {
                    return _s(xs(e.prototype), "getBoundingBox", this).call(this)
                }
            }, {
                key: "addToModifierContext",
                value: function () {
                    return this
                }
            }, {
                key: "preFormat",
                value: function () {
                    return this.setPreFormatted(!0), this
                }
            }, {
                key: "draw",
                value: function () {
                    this.stave.checkContext(), this.setRendered(), this.timeSig.glyph.getContext() || this.timeSig.glyph.setContext(this.context), this.timeSig.glyph.setStave(this.stave), this.timeSig.glyph.setYShift(this.stave.getYForLine(this.timeSig.line) - this.stave.getYForGlyphs()), this.timeSig.glyph.renderToStave(this.getAbsoluteX())
                }
            }]) && gs(n.prototype, i), o && gs(n, o), e
        }();

        function Ss(t) {
            return (Ss = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ts(t, e) {
            return !e || "object" !== Ss(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Es(t) {
            return (Es = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Os(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Rs(t, e, n) {
            return e && Os(t.prototype, e), n && Os(t, n), t
        }

        function Ps(t, e) {
            return (Ps = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Cs = function (t) {
            function e(t, n) {
                var i;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (i = Ts(this, Es(e).call(this, t, "sl."))).setAttribute("type", "TabSlide"), !n) {
                    var o = t.first_note.getPositions()[0].fret,
                        r = t.last_note.getPositions()[0].fret;
                    n = parseInt(o, 10) > parseInt(r, 10) ? e.SLIDE_DOWN : e.SLIDE_UP
                }
                return i.slide_direction = n, i.render_options.cp1 = 11, i.render_options.cp2 = 14, i.render_options.y_shift = .5, i.setFont({
                    font: "Times",
                    size: 10,
                    style: "bold italic"
                }), i.setNotes(t), i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ps(t, e)
            }(e, xn), Rs(e, null, [{
                key: "createSlideUp",
                value: function (t) {
                    return new e(t, e.SLIDE_UP)
                }
            }, {
                key: "createSlideDown",
                value: function (t) {
                    return new e(t, e.SLIDE_DOWN)
                }
            }, {
                key: "SLIDE_UP",
                get: function () {
                    return 1
                }
            }, {
                key: "SLIDE_DOWN",
                get: function () {
                    return -1
                }
            }]), Rs(e, [{
                key: "renderTie",
                value: function (t) {
                    if (0 === t.first_ys.length || 0 === t.last_ys.length) throw new h.RERR("BadArguments", "No Y-values to render");
                    var n = this.context,
                        i = t.first_x_px,
                        o = t.first_ys,
                        r = t.last_x_px,
                        s = this.slide_direction;
                    if (s !== e.SLIDE_UP && s !== e.SLIDE_DOWN) throw new h.RERR("BadSlide", "Invalid slide direction");
                    for (var a = 0; a < this.first_indices.length; ++a) {
                        var l = o[this.first_indices[a]] + this.render_options.y_shift;
                        if (isNaN(l)) throw new h.RERR("BadArguments", "Bad indices for slide rendering.");
                        n.beginPath(), n.moveTo(i, l + 3 * s), n.lineTo(r, l - 3 * s), n.closePath(), n.stroke()
                    }
                    this.setRendered()
                }
            }]), e
        }();

        function Ns(t) {
            return (Ns = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function As() {
            return (As = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Ls(t, e) {
            return !e || "object" !== Ns(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ms(t, e, n) {
            return (Ms = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Fs(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function Fs(t) {
            return (Fs = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Bs(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function js(t, e, n) {
            return e && Bs(t.prototype, e), n && Bs(t, n), t
        }

        function Ds(t, e) {
            return (Ds = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Is = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Ls(this, Fs(e).call(this, As(t, {
                    glyph_font_scale: I.DEFAULT_NOTATION_FONT_SCALE * e.SCALE,
                    stroke_px: e.LEDGER_LINE_OFFSET
                })))).setAttribute("type", "GraceNote"), n.slash = t.slash, n.slur = !0, n.buildNoteHeads(), n.width = 3, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ds(t, e)
            }(e, Le), js(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "gracenotes"
                }
            }, {
                key: "LEDGER_LINE_OFFSET",
                get: function () {
                    return 2
                }
            }, {
                key: "SCALE",
                get: function () {
                    return .66
                }
            }]), js(e, [{
                key: "getStemExtension",
                value: function () {
                    if (null != this.stem_extension_override) return this.stem_extension_override;
                    var t = this.getGlyph();
                    if (t) {
                        var n = Ms(Fs(e.prototype), "getStemExtension", this).call(this);
                        if (t.stem) {
                            var i = this.getStaveNoteScale();
                            n = (rt.HEIGHT + n) * i - rt.HEIGHT
                        }
                        return n
                    }
                    return 0
                }
            }, {
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "getStaveNoteScale",
                value: function () {
                    return this.render_options.glyph_font_scale / I.DEFAULT_NOTATION_FONT_SCALE
                }
            }, {
                key: "draw",
                value: function () {
                    Ms(Fs(e.prototype), "draw", this).call(this), this.setRendered();
                    var t = this.stem;
                    if (this.slash && t) {
                        var n = this.getStaveNoteScale(),
                            i = n / .66,
                            o = void 0,
                            r = this.beam;
                        if (r) r.postFormatted || r.postFormat(), o = this.calcBeamedNotesSlashBBox(8 * i, 8 * i, {
                            stem: 6 * i,
                            beam: 5 * i
                        });
                        else {
                            var s = this.getStemDirection(),
                                a = this.getNoteHeadBounds(),
                                l = t.getHeight(),
                                u = this.getAbsoluteX(),
                                c = s === I.Stem.DOWN ? a.y_top - l : a.y_bottom - l,
                                h = s === I.Stem.DOWN ? this.glyph.stem_down_extension : this.glyph.stem_up_extension,
                                f = I.STEM_HEIGHT;
                            f -= f / 2.8, c += (f += h) * n * s;
                            var b = s === I.Stem.UP ? {
                                x1: 1,
                                y1: 0,
                                x2: 13,
                                y2: -9
                            } : {
                                x1: -4,
                                y1: 1,
                                x2: 13,
                                y2: 9
                            };
                            o = {
                                x1: u += b.x1 * i,
                                y1: c += b.y1 * i,
                                x2: u + b.x2 * i,
                                y2: c + b.y2 * i
                            }
                        }
                        var p = this.context;
                        p.save(), p.setLineWidth(1 * i), p.beginPath(), p.moveTo(o.x1, o.y1), p.lineTo(o.x2, o.y2), p.closePath(), p.stroke(), p.restore()
                    }
                }
            }, {
                key: "calcBeamedNotesSlashBBox",
                value: function (t, e, n) {
                    var i = this.beam,
                        o = i.slope,
                        r = i.notes[i.notes.length - 1] === this ? -1 : 1,
                        s = Math.atan(o * r),
                        a = Math.cos(s) * e,
                        l = Math.sin(s) * e;
                    t *= this.getStemDirection();
                    var u = Math.atan((l - t) / a),
                        c = Math.cos(u) * n.stem * r,
                        h = Math.sin(u) * n.stem,
                        f = Math.cos(u) * n.beam * r,
                        b = Math.sin(u) * n.beam,
                        p = this.getStemX(),
                        y = i.notes[0].getStemX(),
                        d = this.beam.getBeamYToDraw() + (p - y) * o;
                    return {
                        x1: p - c,
                        y1: d + t - h,
                        x2: p + a * r + f,
                        y2: d + l + b
                    }
                }
            }]), e
        }();

        function Gs(t) {
            return (Gs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ys(t, e) {
            return !e || "object" !== Gs(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ws(t, e, n) {
            return (Ws = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Hs(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function Hs(t) {
            return (Hs = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Xs(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Us(t, e, n) {
            return e && Xs(t.prototype, e), n && Xs(t, n), t
        }

        function Vs(t, e) {
            return (Vs = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var zs = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Ys(this, Hs(e).call(this, t, !1))).setAttribute("type", "GraceTabNote"), h.Merge(n.render_options, {
                    y_shift: .3,
                    scale: .6,
                    font: "7.5pt Arial"
                }), n.updateWidth(), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Vs(t, e)
            }(e, Wr), Us(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "gracetabnotes"
                }
            }]), Us(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "draw",
                value: function () {
                    Ws(Hs(e.prototype), "draw", this).call(this), this.setRendered()
                }
            }]), e
        }();

        function Ks(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Js(t, e, n) {
            return e && Ks(t.prototype, e), n && Ks(t, n), t
        }
        var qs = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "E/5,B/4,G/4,D/4,A/3,E/3,B/2,E/2";
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.setTuning(e)
            }
            return Js(t, null, [{
                key: "names",
                get: function () {
                    return {
                        standard: "E/5,B/4,G/4,D/4,A/3,E/3",
                        dagdad: "D/5,A/4,G/4,D/4,A/3,D/3",
                        dropd: "E/5,B/4,G/4,D/4,A/3,D/3",
                        eb: "Eb/5,Bb/4,Gb/4,Db/4,Ab/3,Db/3",
                        standardBanjo: "D/5,B/4,G/4,D/4,G/5"
                    }
                }
            }]), Js(t, [{
                key: "noteToInteger",
                value: function (t) {
                    return I.keyProperties(t).int_value
                }
            }, {
                key: "setTuning",
                value: function (e) {
                    t.names[e] && (e = t.names[e]), this.tuningString = e, this.tuningValues = [], this.numStrings = 0;
                    var n = e.split(/\s*,\s*/);
                    if (0 === n.length) throw new h.RERR("BadArguments", "Invalid tuning string: " + e);
                    this.numStrings = n.length;
                    for (var i = 0; i < this.numStrings; ++i) this.tuningValues[i] = this.noteToInteger(n[i])
                }
            }, {
                key: "getValueForString",
                value: function (t) {
                    var e = parseInt(t, 10);
                    if (e < 1 || e > this.numStrings) throw new h.RERR("BadArguments", "String number must be between 1 and ".concat(this.numStrings, ":").concat(t));
                    return this.tuningValues[e - 1]
                }
            }, {
                key: "getValueForFret",
                value: function (t, e) {
                    var n = this.getValueForString(e),
                        i = parseInt(t, 10);
                    if (i < 0) throw new h.RERR("BadArguments", "Fret number must be 0 or higher: " + t);
                    return n + i
                }
            }, {
                key: "getNoteForFret",
                value: function (t, e) {
                    var n = this.getValueForFret(t, e),
                        i = Math.floor(n / 12),
                        o = n % 12;
                    return I.integerToNote(o) + "/" + i
                }
            }]), t
        }();

        function Qs(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var Zs = function () {
            function t(e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.music = new We, this.setKey(e)
            }
            var e, n, i;
            return e = t, (n = [{
                key: "setKey",
                value: function (t) {
                    return this.key = t, this.reset(), this
                }
            }, {
                key: "getKey",
                value: function () {
                    return this.key
                }
            }, {
                key: "reset",
                value: function () {
                    if (this.keyParts = this.music.getKeyParts(this.key), this.keyString = this.keyParts.root, this.keyParts.accidental && (this.keyString += this.keyParts.accidental), !We.scaleTypes[this.keyParts.type]) throw new h.RERR("BadArguments", "Unsupported key type: ".concat(this.key));
                    this.scale = this.music.getScaleTones(this.music.getNoteValue(this.keyString), We.scaleTypes[this.keyParts.type]), this.scaleMap = {}, this.scaleMapByValue = {}, this.originalScaleMapByValue = {};
                    for (var t = We.root_indices[this.keyParts.root], e = 0; e < We.roots.length; ++e) {
                        var n = (t + e) % We.roots.length,
                            i = We.roots[n],
                            o = this.music.getRelativeNoteName(i, this.scale[e]);
                        this.scaleMap[i] = o, this.scaleMapByValue[this.scale[e]] = o, this.originalScaleMapByValue[this.scale[e]] = o
                    }
                    return this
                }
            }, {
                key: "getAccidental",
                value: function (t) {
                    var e = this.music.getKeyParts(t).root,
                        n = this.music.getNoteParts(this.scaleMap[e]);
                    return {
                        note: this.scaleMap[e],
                        accidental: n.accidental
                    }
                }
            }, {
                key: "selectNote",
                value: function (t) {
                    t = t.toLowerCase();
                    var e = this.music.getNoteParts(t),
                        n = this.scaleMap[e.root],
                        i = this.music.getNoteParts(n);
                    if (n === t) return {
                        note: n,
                        accidental: e.accidental,
                        change: !1
                    };
                    var o = this.scaleMapByValue[this.music.getNoteValue(t)];
                    if (null != o) return {
                        note: o,
                        accidental: this.music.getNoteParts(o).accidental,
                        change: !1
                    };
                    var r = this.originalScaleMapByValue[this.music.getNoteValue(t)];
                    return null != r ? (this.scaleMap[i.root] = r, delete this.scaleMapByValue[this.music.getNoteValue(n)], this.scaleMapByValue[this.music.getNoteValue(t)] = r, {
                        note: r,
                        accidental: this.music.getNoteParts(r).accidental,
                        change: !0
                    }) : i.root === t ? (delete this.scaleMapByValue[this.music.getNoteValue(this.scaleMap[e.root])], this.scaleMapByValue[this.music.getNoteValue(i.root)] = i.root, this.scaleMap[i.root] = i.root, {
                        note: i.root,
                        accidental: null,
                        change: !0
                    }) : (delete this.scaleMapByValue[this.music.getNoteValue(this.scaleMap[e.root])], this.scaleMapByValue[this.music.getNoteValue(t)] = t, delete this.scaleMap[i.root], this.scaleMap[i.root] = t, {
                        note: t,
                        accidental: e.accidental,
                        change: !0
                    })
                }
            }]) && Qs(e.prototype, n), i && Qs(e, i), t
        }();

        function $s(t) {
            return ($s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ta(t, e) {
            return !e || "object" !== $s(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ea(t) {
            return (ea = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function na(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ia(t, e, n) {
            return e && na(t.prototype, e), n && na(t, n), t
        }

        function oa(t, e) {
            return (oa = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var ra = function (t) {
            function e(t, n) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = ta(this, ea(e).call(this))).setAttribute("type", "StaveHairpin"), i.notes = t, i.hairpin = n, i.position = de.Position.BELOW, i.render_options = {
                    height: 10,
                    y_shift: 0,
                    left_shift_px: 0,
                    right_shift_px: 0
                }, i.setNotes(t), i
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && oa(t, e)
            }(e, k), ia(e, null, [{
                key: "FormatByTicksAndDraw",
                value: function (t, n, i, o, r, s) {
                    var a = n.pixelsPerTick;
                    if (null == a) throw new h.RuntimeError("BadArguments", "A valid Formatter must be provide to draw offsets by ticks.");
                    var l = a * s.left_shift_ticks,
                        u = a * s.right_shift_ticks,
                        c = {
                            height: s.height,
                            y_shift: s.y_shift,
                            left_shift_px: l,
                            right_shift_px: u
                        };
                    new e({
                        first_note: i.first_note,
                        last_note: i.last_note
                    }, o).setContext(t).setRenderOptions(c).setPosition(r).draw()
                }
            }, {
                key: "type",
                get: function () {
                    return {
                        CRESC: 1,
                        DECRESC: 2
                    }
                }
            }]), ia(e, [{
                key: "setPosition",
                value: function (t) {
                    return t !== de.Position.ABOVE && t !== de.Position.BELOW || (this.position = t), this
                }
            }, {
                key: "setRenderOptions",
                value: function (t) {
                    return null != t.height && null != t.y_shift && null != t.left_shift_px && null != t.right_shift_px && (this.render_options = t), this
                }
            }, {
                key: "setNotes",
                value: function (t) {
                    if (!t.first_note && !t.last_note) throw new h.RuntimeError("BadArguments", "Hairpin needs to have either first_note or last_note set.");
                    return this.first_note = t.first_note, this.last_note = t.last_note, this
                }
            }, {
                key: "renderHairpin",
                value: function (t) {
                    var n = this.checkContext(),
                        i = this.render_options.y_shift + 20,
                        o = t.first_y;
                    this.position === de.Position.ABOVE && (i = 30 - i, o = t.first_y - t.staff_height);
                    var r = this.render_options.left_shift_px,
                        s = this.render_options.right_shift_px;
                    switch (n.beginPath(), this.hairpin) {
                        case e.type.CRESC:
                            n.moveTo(t.last_x + s, o + i), n.lineTo(t.first_x + r, o + this.render_options.height / 2 + i), n.lineTo(t.last_x + s, o + this.render_options.height + i);
                            break;
                        case e.type.DECRESC:
                            n.moveTo(t.first_x + r, o + i), n.lineTo(t.last_x + s, o + this.render_options.height / 2 + i), n.lineTo(t.first_x + r, o + this.render_options.height + i)
                    }
                    n.stroke(), n.closePath()
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered();
                    var t = this.first_note,
                        e = this.last_note,
                        n = t.getModifierStartXY(this.position, 0),
                        i = e.getModifierStartXY(this.position, 0);
                    return this.renderHairpin({
                        first_x: n.x,
                        last_x: i.x,
                        first_y: t.getStave().y + t.getStave().height,
                        last_y: e.getStave().y + e.getStave().height,
                        staff_height: t.getStave().height
                    }), !0
                }
            }]), e
        }();

        function sa(t) {
            return (sa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function aa(t, e) {
            return !e || "object" !== sa(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function la(t) {
            return (la = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ua(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function ca(t, e, n) {
            return e && ua(t.prototype, e), n && ua(t, n), t
        }

        function ha(t, e) {
            return (ha = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var fa = function (t) {
            function e(t, n, i) {
                var o;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = aa(this, la(e).call(this))).setAttribute("type", "Curve"), o.render_options = {
                    spacing: 2,
                    thickness: 2,
                    x_shift: 0,
                    y_shift: 10,
                    position: e.Position.NEAR_HEAD,
                    position_end: e.Position.NEAR_HEAD,
                    invert: !1,
                    cps: [{
                        x: 0,
                        y: 10
                    }, {
                        x: 0,
                        y: 10
                    }]
                }, h.Merge(o.render_options, i), o.setNotes(t, n), o
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ha(t, e)
            }(e, k), ca(e, null, [{
                key: "Position",
                get: function () {
                    return {
                        NEAR_HEAD: 1,
                        NEAR_TOP: 2
                    }
                }
            }, {
                key: "PositionString",
                get: function () {
                    return {
                        nearHead: e.Position.NEAR_HEAD,
                        nearTop: e.Position.NEAR_TOP
                    }
                }
            }]), ca(e, [{
                key: "setNotes",
                value: function (t, e) {
                    if (!t && !e) throw new h.RuntimeError("BadArguments", "Curve needs to have either first_note or last_note set.");
                    return this.from = t, this.to = e, this
                }
            }, {
                key: "isPartial",
                value: function () {
                    return !this.from || !this.to
                }
            }, {
                key: "renderCurve",
                value: function (t) {
                    var e = this.context,
                        n = this.render_options.cps,
                        i = this.render_options.x_shift,
                        o = this.render_options.y_shift * t.direction,
                        r = t.first_x + i,
                        s = t.first_y + o,
                        a = t.last_x - i,
                        l = t.last_y + o,
                        u = this.render_options.thickness,
                        c = (a - r) / (n.length + 2);
                    e.beginPath(), e.moveTo(r, s), e.bezierCurveTo(r + c + n[0].x, s + n[0].y * t.direction, a - c + n[1].x, l + n[1].y * t.direction, a, l), e.bezierCurveTo(a - c + n[1].x, l + (n[1].y + u) * t.direction, r + c + n[0].x, s + (n[0].y + u) * t.direction, r, s), e.stroke(), e.closePath(), e.fill()
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered();
                    var t, n, i, o, r, s = this.from,
                        a = this.to,
                        l = "baseY",
                        u = "baseY";

                    function c(t) {
                        return "string" == typeof t ? e.PositionString[t] : t
                    }
                    var h = c(this.render_options.position),
                        f = c(this.render_options.position_end);
                    return h === e.Position.NEAR_TOP && (l = "topY", u = "topY"), f === e.Position.NEAR_HEAD ? u = "baseY" : f === e.Position.NEAR_TOP && (u = "topY"), s ? (t = s.getTieRightX(), r = s.getStemDirection(), i = s.getStemExtents()[l]) : (t = a.getStave().getTieStartX(), i = a.getStemExtents()[l]), a ? (n = a.getTieLeftX(), r = a.getStemDirection(), o = a.getStemExtents()[u]) : (n = s.getStave().getTieEndX(), o = s.getStemExtents()[u]), this.renderCurve({
                        first_x: t,
                        last_x: n,
                        first_y: i,
                        last_y: o,
                        direction: r * (!0 === this.render_options.invert ? -1 : 1)
                    }), !0
                }
            }]), e
        }();

        function ba(t) {
            return (ba = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function pa(t, e) {
            return !e || "object" !== ba(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ya(t) {
            return (ya = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function da(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function va(t, e, n) {
            return e && da(t.prototype, e), n && da(t, n), t
        }

        function ga(t, e) {
            return (ga = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function ma() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            _a.DEBUG && h.L("Vex.Flow.TextDynamics", e)
        }
        var _a = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = pa(this, ya(e).call(this, t))).setAttribute("type", "TextDynamics"), n.sequence = t.text.toLowerCase(), n.line = t.line || 0, n.glyphs = [], h.Merge(n.render_options, {
                    glyph_font_size: 40
                }), ma("New Dynamics Text: ", n.sequence), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ga(t, e)
            }(e, Jt), va(e, null, [{
                key: "GLYPHS",
                get: function () {
                    return {
                        f: {
                            code: "vba",
                            width: 12
                        },
                        p: {
                            code: "vbf",
                            width: 14
                        },
                        m: {
                            code: "v62",
                            width: 17
                        },
                        s: {
                            code: "v4a",
                            width: 10
                        },
                        z: {
                            code: "v80",
                            width: 12
                        },
                        r: {
                            code: "vb1",
                            width: 12
                        }
                    }
                }
            }]), va(e, [{
                key: "setLine",
                value: function (t) {
                    return this.line = t, this
                }
            }, {
                key: "preFormat",
                value: function () {
                    var t = this,
                        n = 0;
                    return this.sequence.split("").forEach(function (i) {
                        var o = e.GLYPHS[i];
                        if (!o) throw new h.RERR("Invalid dynamics character: " + i);
                        var r = t.render_options.glyph_font_size,
                            s = new j(o.code, r);
                        t.glyphs.push(s), n += o.width
                    }), this.setWidth(n), this.preFormatted = !0, this
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this;
                    this.setRendered();
                    var n = this.getAbsoluteX(),
                        i = this.stave.getYForLine(this.line + -3);
                    ma("Rendering Dynamics: ", this.sequence);
                    var o = n;
                    this.glyphs.forEach(function (n, r) {
                        var s = t.sequence[r];
                        n.render(t.context, o, i), o += e.GLYPHS[s].width
                    })
                }
            }]), e
        }();

        function xa(t) {
            return (xa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function wa(t, e) {
            return !e || "object" !== xa(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ka(t) {
            return (ka = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Sa(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ta(t, e, n) {
            return e && Sa(t.prototype, e), n && Sa(t, n), t
        }

        function Ea(t, e) {
            return (Ea = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Oa(t, e, n, i, o, r, s) {
            t.beginPath(), t.moveTo(e, n), t.lineTo(i, o), t.lineTo(r, s), t.lineTo(e, n), t.closePath(), t.fill()
        }
        var Ra = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = wa(this, ka(e).call(this))).setAttribute("type", "StaveLine"), n.notes = t, n.text = "", n.font = {
                    family: "Arial",
                    size: 10,
                    weight: ""
                }, n.render_options = {
                    padding_left: 4,
                    padding_right: 3,
                    line_width: 1,
                    line_dash: null,
                    rounded_end: !0,
                    color: null,
                    draw_start_arrow: !1,
                    draw_end_arrow: !1,
                    arrowhead_length: 10,
                    arrowhead_angle: Math.PI / 8,
                    text_position_vertical: e.TextVerticalPosition.TOP,
                    text_justification: e.TextJustification.CENTER
                }, n.setNotes(t), n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ea(t, e)
            }(e, k), Ta(e, null, [{
                key: "TextVerticalPosition",
                get: function () {
                    return {
                        TOP: 1,
                        BOTTOM: 2
                    }
                }
            }, {
                key: "TextJustification",
                get: function () {
                    return {
                        LEFT: 1,
                        CENTER: 2,
                        RIGHT: 3
                    }
                }
            }]), Ta(e, [{
                key: "setFont",
                value: function (t) {
                    return this.font = t, this
                }
            }, {
                key: "setText",
                value: function (t) {
                    return this.text = t, this
                }
            }, {
                key: "setNotes",
                value: function (t) {
                    if (!t.first_note && !t.last_note) throw new h.RuntimeError("BadArguments", "Notes needs to have either first_note or last_note set.");
                    if (t.first_indices || (t.first_indices = [0]), t.last_indices || (t.last_indices = [0]), t.first_indices.length !== t.last_indices.length) throw new h.RuntimeError("BadArguments", "Connected notes must have similar index sizes");
                    return this.first_note = t.first_note, this.first_indices = t.first_indices, this.last_note = t.last_note, this.last_indices = t.last_indices, this
                }
            }, {
                key: "applyLineStyle",
                value: function () {
                    var t = this.checkContext(),
                        e = this.render_options;
                    e.line_dash && t.setLineDash(e.line_dash), e.line_width && t.setLineWidth(e.line_width), e.rounded_end ? t.setLineCap("round") : t.setLineCap("square")
                }
            }, {
                key: "applyFontStyle",
                value: function () {
                    var t = this.checkContext();
                    this.font && t.setFont(this.font.family, this.font.size, this.font.weight), this.render_options.color && (t.setStrokeStyle(this.render_options.color), t.setFillStyle(this.render_options.color))
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this,
                        n = this.checkContext();
                    this.setRendered();
                    var i, o, r = this.first_note,
                        s = this.last_note,
                        a = this.render_options;
                    n.save(), this.applyLineStyle(), this.first_indices.forEach(function (e, l) {
                        var u = t.last_indices[l];
                        i = r.getModifierStartXY(2, e), o = s.getModifierStartXY(1, u);
                        var c = i.y > o.y;
                        i.x += r.getMetrics().modRightPx + a.padding_left, o.x -= s.getMetrics().modLeftPx + a.padding_right;
                        var h = r.getGlyph().getWidth();
                        r.getKeyProps()[e].displaced && 1 === r.getStemDirection() && (i.x += h + a.padding_left), s.getKeyProps()[u].displaced && -1 === s.getStemDirection() && (o.x -= h + a.padding_right), i.y += c ? -3 : 1, o.y += c ? 2 : 0,
                            function (t, e, n, i) {
                                var o, r, s, a, l = i.draw_start_arrow && i.draw_end_arrow,
                                    u = e.x,
                                    c = e.y,
                                    h = n.x,
                                    f = n.y,
                                    b = Math.sqrt((h - u) * (h - u) + (f - c) * (f - c)),
                                    p = (b - i.arrowhead_length / 3) / b;
                                i.draw_end_arrow || l ? (o = Math.round(u + (h - u) * p), r = Math.round(c + (f - c) * p)) : (o = h, r = f), i.draw_start_arrow || l ? (s = u + (h - u) * (1 - p), a = c + (f - c) * (1 - p)) : (s = u, a = c), i.color && (t.setStrokeStyle(i.color), t.setFillStyle(i.color)), t.beginPath(), t.moveTo(s, a), t.lineTo(o, r), t.stroke(), t.closePath();
                                var y, d, v, g, m = Math.atan2(f - c, h - u),
                                    _ = Math.abs(i.arrowhead_length / Math.cos(i.arrowhead_angle));
                                (i.draw_end_arrow || l) && (y = m + Math.PI + i.arrowhead_angle, v = h + Math.cos(y) * _, g = f + Math.sin(y) * _, d = m + Math.PI - i.arrowhead_angle, Oa(t, v, g, h, f, h + Math.cos(d) * _, f + Math.sin(d) * _)), (i.draw_start_arrow || l) && (y = m + i.arrowhead_angle, v = u + Math.cos(y) * _, g = c + Math.sin(y) * _, d = m - i.arrowhead_angle, Oa(t, v, g, u, c, u + Math.cos(d) * _, c + Math.sin(d) * _))
                            }(n, i, o, t.render_options)
                    }), n.restore();
                    var l, u = n.measureText(this.text).width,
                        c = a.text_justification,
                        h = 0;
                    if (c === e.TextJustification.LEFT) h = i.x;
                    else if (c === e.TextJustification.CENTER) {
                        h = (o.x - i.x) / 2 + i.x - u / 2
                    } else c === e.TextJustification.RIGHT && (h = o.x - u);
                    var f = a.text_position_vertical;
                    return f === e.TextVerticalPosition.TOP ? l = r.getStave().getYForTopText() : f === e.TextVerticalPosition.BOTTOM && (l = r.getStave().getYForBottomText(I.TEXT_HEIGHT_OFFSET_HACK)), n.save(), this.applyFontStyle(), n.fillText(this.text, h, l), n.restore(), this
                }
            }]), e
        }();

        function Pa(t) {
            return (Pa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ca(t, e) {
            return !e || "object" !== Pa(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Na(t) {
            return (Na = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Aa(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function La(t, e, n) {
            return e && Aa(t.prototype, e), n && Aa(t, n), t
        }

        function Ma(t, e) {
            return (Ma = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Fa(t, e, n, i, o) {
            var r = Ba.GLYPHS[t];
            new j(r.code, o).render(e, n + r.x_shift, i + r.y_shift)
        }
        var Ba = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Ca(this, Na(e).call(this))).setAttribute("type", "PedalMarking"), n.notes = t, n.style = e.TEXT, n.line = 0, n.custom_depress_text = "", n.custom_release_text = "", n.font = {
                    family: "Times New Roman",
                    size: 12,
                    weight: "italic bold"
                }, n.render_options = {
                    bracket_height: 10,
                    text_margin_right: 6,
                    bracket_line_width: 1,
                    glyph_point_size: 40,
                    color: "black"
                }, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ma(t, e)
            }(e, k), La(e, null, [{
                key: "createSustain",
                value: function (t) {
                    return new e(t)
                }
            }, {
                key: "createSostenuto",
                value: function (t) {
                    var n = new e(t);
                    return n.setStyle(e.Styles.MIXED), n.setCustomText("Sost. Ped."), n
                }
            }, {
                key: "createUnaCorda",
                value: function (t) {
                    var n = new e(t);
                    return n.setStyle(e.Styles.TEXT), n.setCustomText("una corda", "tre corda"), n
                }
            }, {
                key: "GLYPHS",
                get: function () {
                    return {
                        pedal_depress: {
                            code: "v36",
                            x_shift: -10,
                            y_shift: 0
                        },
                        pedal_release: {
                            code: "v5d",
                            x_shift: -2,
                            y_shift: 3
                        }
                    }
                }
            }, {
                key: "Styles",
                get: function () {
                    return {
                        TEXT: 1,
                        BRACKET: 2,
                        MIXED: 3
                    }
                }
            }, {
                key: "StylesString",
                get: function () {
                    return {
                        text: e.Styles.TEXT,
                        bracket: e.Styles.BRACKET,
                        mixed: e.Styles.MIXED
                    }
                }
            }]), La(e, [{
                key: "setCustomText",
                value: function (t, e) {
                    return this.custom_depress_text = t || "", this.custom_release_text = e || "", this
                }
            }, {
                key: "setStyle",
                value: function (t) {
                    if (t < 1 && t > 3) throw new h.RERR("InvalidParameter", "The style must be one found in PedalMarking.Styles");
                    return this.style = t, this
                }
            }, {
                key: "setLine",
                value: function (t) {
                    return this.line = t, this
                }
            }, {
                key: "drawBracketed",
                value: function () {
                    var t, n, i = this.context,
                        o = !1,
                        r = this;
                    this.notes.forEach(function (s, a, l) {
                        o = !o;
                        var u = s.getAbsoluteX(),
                            c = s.getStave().getYForBottomText(r.line + 3);
                        if (u < t) throw new h.RERR("InvalidConfiguration", "The notes provided must be in order of ascending x positions");
                        var f = l[a + 1] === s,
                            b = l[a - 1] === s,
                            p = 0;
                        if (o)
                            if (p = b ? 5 : 0, r.style !== e.Styles.MIXED || b) i.beginPath(), i.moveTo(u, c - r.render_options.bracket_height), i.lineTo(u + p, c), i.stroke(), i.closePath();
                            else if (r.custom_depress_text) {
                            var y = i.measureText(r.custom_depress_text).width;
                            i.fillText(r.custom_depress_text, u - y / 2, c), p = y / 2 + r.render_options.text_margin_right
                        } else Fa("pedal_depress", i, u, c, r.render_options.glyph_point_size), p = 20 + r.render_options.text_margin_right;
                        else p = f ? -5 : 0, i.beginPath(), i.moveTo(t, n), i.lineTo(u + p, c), i.lineTo(u, c - r.render_options.bracket_height), i.stroke(), i.closePath();
                        t = u + p, n = c
                    })
                }
            }, {
                key: "drawText",
                value: function () {
                    var t = this.context,
                        e = !1,
                        n = this,
                        i = n.render_options.glyph_point_size;
                    this.notes.forEach(function (o) {
                        e = !e;
                        var r = o.getStave(),
                            s = o.getAbsoluteX(),
                            a = r.getYForBottomText(n.line + 3),
                            l = 0;
                        e ? n.custom_depress_text ? (l = t.measureText(n.custom_depress_text).width, t.fillText(n.custom_depress_text, s - l / 2, a)) : Fa("pedal_depress", t, s, a, i) : n.custom_release_text ? (l = t.measureText(n.custom_release_text).width, t.fillText(n.custom_release_text, s - l / 2, a)) : Fa("pedal_release", t, s, a, i)
                    })
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this.checkContext();
                    this.setRendered(), t.save(), t.setStrokeStyle(this.render_options.color), t.setFillStyle(this.render_options.color), t.setFont(this.font.family, this.font.size, this.font.weight),
                        function () {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            Ba.DEBUG && h.L("Vex.Flow.PedalMarking", e)
                        }("Rendering Pedal Marking"), this.style === e.Styles.BRACKET || this.style === e.Styles.MIXED ? (t.setLineWidth(this.render_options.bracket_line_width), this.drawBracketed()) : this.style === e.Styles.TEXT && this.drawText(), t.restore()
                }
            }]), e
        }();

        function ja(t) {
            return (ja = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Da() {
            return (Da = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Ia(t, e) {
            return !e || "object" !== ja(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ga(t) {
            return (Ga = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ya(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Wa(t, e, n) {
            return e && Ya(t.prototype, e), n && Ya(t, n), t
        }

        function Ha(t, e) {
            return (Ha = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Xa = function (t) {
            function e(t) {
                var n, i = t.start,
                    o = t.stop,
                    r = t.text,
                    s = void 0 === r ? "" : r,
                    a = t.superscript,
                    l = void 0 === a ? "" : a,
                    u = t.position,
                    c = void 0 === u ? e.Positions.TOP : u;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Ia(this, Ga(e).call(this))).setAttribute("type", "TextBracket"), n.start = i, n.stop = o, n.text = s, n.superscript = l, n.position = "string" == typeof c ? e.PositionString[c] : c, n.line = 1, n.font = {
                    family: "Serif",
                    size: 15,
                    weight: "italic"
                }, n.render_options = {
                    dashed: !0,
                    dash: [5],
                    color: "black",
                    line_width: 1,
                    show_bracket: !0,
                    bracket_height: 8,
                    underline_superscript: !0
                }, n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ha(t, e)
            }(e, k), Wa(e, null, [{
                key: "Positions",
                get: function () {
                    return {
                        TOP: 1,
                        BOTTOM: -1
                    }
                }
            }, {
                key: "PositionString",
                get: function () {
                    return {
                        top: e.Positions.TOP,
                        bottom: e.Positions.BOTTOM
                    }
                }
            }]), Wa(e, [{
                key: "applyStyle",
                value: function (t) {
                    return t.setFont(this.font.family, this.font.size, this.font.weight), t.setStrokeStyle(this.render_options.color), t.setFillStyle(this.render_options.color), t.setLineWidth(this.render_options.line_width), this
                }
            }, {
                key: "setDashed",
                value: function (t, e) {
                    return this.render_options.dashed = t, e && (this.render_options.dash = e), this
                }
            }, {
                key: "setFont",
                value: function (t) {
                    return this.font = Da({}, this.font, t), this
                }
            }, {
                key: "setLine",
                value: function (t) {
                    return this.line = t, this
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this.context;
                    this.setRendered();
                    var n = 0;
                    switch (this.position) {
                        case e.Positions.TOP:
                            n = this.start.getStave().getYForTopText(this.line);
                            break;
                        case e.Positions.BOTTOM:
                            n = this.start.getStave().getYForBottomText(this.line + I.TEXT_HEIGHT_OFFSET_HACK);
                            break;
                        default:
                            throw new h.RERR("InvalidPosition", "The position ".concat(this.position, " is invalid"))
                    }
                    var i = {
                            x: this.start.getAbsoluteX(),
                            y: n
                        },
                        o = {
                            x: this.stop.getAbsoluteX(),
                            y: n
                        };
                    ! function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        Xa.DEBUG && h.L("Vex.Flow.TextBracket", e)
                    }("Rendering TextBracket: start:", i, "stop:", o, "y:", n);
                    var r = this.render_options.bracket_height * this.position;
                    t.save(), this.applyStyle(t), t.fillText(this.text, i.x, i.y);
                    var s = t.measureText(this.text).width,
                        a = t.measureText("M").width,
                        l = i.y - a / 2.5;
                    t.setFont(this.font.family, this.font.size / 1.4, this.font.weight), t.fillText(this.superscript, i.x + s + 1, l);
                    var u = t.measureText(this.superscript).width,
                        c = t.measureText("M").width,
                        f = i.x,
                        b = l,
                        p = o.x + this.stop.getGlyph().getWidth();
                    this.position === e.Positions.TOP ? (f += s + u + 5, b -= c / 2.7) : this.position === e.Positions.BOTTOM && (b += c / 2.7, f += s + 2, this.render_options.underline_superscript || (f += u)), this.render_options.dashed ? (Z.drawDashedLine(t, f, b, p, b, this.render_options.dash), this.render_options.show_bracket && Z.drawDashedLine(t, p, b + 1 * this.position, p, b + r, this.render_options.dash)) : (t.beginPath(), t.moveTo(f, b), t.lineTo(p, b), this.render_options.show_bracket && t.lineTo(p, b + r), t.stroke(), t.closePath()), t.restore()
                }
            }]), e
        }();

        function Ua(t) {
            return (Ua = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Va(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function za(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Ka(t, e) {
            return !e || "object" !== Ua(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ja(t, e, n) {
            return (Ja = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = qa(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function qa(t) {
            return (qa = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Qa(t, e) {
            return (Qa = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var Za = function (t) {
            function e() {
                var t, n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : co.type.SINGLE;
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Ka(this, qa(e).call(this, {
                    duration: "b"
                }))).setAttribute("type", "BarNote"), n.metrics = {
                    widths: {}
                };
                var o = co.type;
                return n.metrics.widths = (Va(t = {}, o.SINGLE, 8), Va(t, o.DOUBLE, 12), Va(t, o.END, 15), Va(t, o.REPEAT_BEGIN, 14), Va(t, o.REPEAT_END, 14), Va(t, o.REPEAT_BOTH, 18), Va(t, o.NONE, 0), t), n.ignore_ticks = !0, n.setType(i), n
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Qa(t, e)
            }(e, Jt), n = e, (i = [{
                key: "getType",
                value: function () {
                    return this.type
                }
            }, {
                key: "setType",
                value: function (t) {
                    return this.type = "string" == typeof t ? co.typeString[t] : t, this.setWidth(this.metrics.widths[this.type]), this
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    return Ja(qa(e.prototype), "getBoundingBox", this).call(this)
                }
            }, {
                key: "addToModifierContext",
                value: function () {
                    return this
                }
            }, {
                key: "preFormat",
                value: function () {
                    return this.setPreFormatted(!0), this
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.stave) throw new h.RERR("NoStave", "Can't draw without a stave.");
                    ! function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        Za.DEBUG && h.L("Vex.Flow.BarNote", e)
                    }("Rendering bar line at: ", this.getAbsoluteX());
                    var t = new co(this.type);
                    t.setX(this.getAbsoluteX()), t.draw(this.stave), this.setRendered()
                }
            }]) && za(n.prototype, i), o && za(n, o), e
        }();

        function $a(t) {
            return ($a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function tl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function el(t, e) {
            return !e || "object" !== $a(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function nl(t, e, n) {
            return (nl = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = il(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function il(t) {
            return (il = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ol(t, e) {
            return (ol = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var rl = function (t) {
            function e(t) {
                var n, i;
                if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), !t) throw new h.RuntimeError("BadArguments", "Ghost note must have valid initialization data to identify duration.");
                if ("string" == typeof t) i = {
                    duration: t
                };
                else {
                    if ("object" !== $a(t)) throw new h.RuntimeError("BadArguments", "Ghost note must have valid initialization data to identify duration.");
                    i = t
                }
                return (n = el(this, il(e).call(this, i))).setAttribute("type", "GhostNote"), n.setWidth(0), n
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ol(t, e)
            }(e, ue), n = e, (i = [{
                key: "isRest",
                value: function () {
                    return !0
                }
            }, {
                key: "setStave",
                value: function (t) {
                    nl(il(e.prototype), "setStave", this).call(this, t)
                }
            }, {
                key: "addToModifierContext",
                value: function () {
                    return this
                }
            }, {
                key: "preFormat",
                value: function () {
                    return this.setPreFormatted(!0), this
                }
            }, {
                key: "draw",
                value: function () {
                    if (!this.stave) throw new h.RERR("NoStave", "Can't draw without a stave.");
                    this.setRendered();
                    for (var t = 0; t < this.modifiers.length; ++t) {
                        var e = this.modifiers[t];
                        e.setContext(this.context), e.draw()
                    }
                }
            }]) && tl(n.prototype, i), o && tl(n, o), e
        }();

        function sl(t) {
            return (sl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function al(t, e) {
            return !e || "object" !== sl(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ll(t) {
            return (ll = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ul(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function cl(t, e, n) {
            return e && ul(t.prototype, e), n && ul(t, n), t
        }

        function hl(t, e) {
            return (hl = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var fl = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = al(this, ll(e).call(this))).setAttribute("type", "Tremolo"), n.num = t, n.note = null, n.index = null, n.position = de.Position.CENTER, n.code = "v74", n
            }
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && hl(t, e)
            }(e, de), cl(e, null, [{
                key: "CATEGORY",
                get: function () {
                    return "tremolo"
                }
            }, {
                key: "YOFFSETSTEMUP",
                get: function () {
                    return -9
                }
            }, {
                key: "YOFFSETSTEMDOWN",
                get: function () {
                    return -21
                }
            }, {
                key: "XOFFSETSTEMUP",
                get: function () {
                    return 6
                }
            }, {
                key: "XOFFSETSTEMDOWN",
                get: function () {
                    return -2
                }
            }]), cl(e, [{
                key: "getCategory",
                value: function () {
                    return e.CATEGORY
                }
            }, {
                key: "draw",
                value: function () {
                    if (this.checkContext(), !this.note || null == this.index) throw new h.RERR("NoAttachedNote", "Can't draw Tremolo without a note and index.");
                    this.setRendered();
                    var t = this.note.getStemDirection();
                    this.y_spacing = 4 * t;
                    var n = this.note.getModifierStartXY(this.position, this.index).x,
                        i = this.note.stem.getExtents().topY,
                        o = "gracenotes" === this.note.getCategory() ? Is.SCALE : 1;
                    i += t < 0 ? e.YOFFSETSTEMDOWN * o : e.YOFFSETSTEMUP * o, this.font = {
                        family: "Arial",
                        size: 16 * o,
                        weight: ""
                    }, this.render_options = {
                        font_scale: 35 * o,
                        stroke_px: 3,
                        stroke_spacing: 10 * o
                    }, n += t < 0 ? e.XOFFSETSTEMDOWN : e.XOFFSETSTEMUP;
                    for (var r = 0; r < this.num; ++r) j.renderGlyph(this.context, n, i, this.render_options.font_scale, this.code), i += this.y_spacing
                }
            }]), e
        }();

        function bl(t) {
            return (bl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function pl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function yl(t, e) {
            return !e || "object" !== bl(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function dl(t) {
            return (dl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function vl(t, e) {
            return (vl = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var gl = function (t) {
            function e(t) {
                var n;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = yl(this, dl(e).call(this, t))).setAttribute("type", "Crescendo"), n.decrescendo = !1, n.line = t.line || 0, n.height = 15, h.Merge(n.render_options, {
                    extend_left: 0,
                    extend_right: 0,
                    y_shift: 0
                }), n
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && vl(t, e)
            }(e, Jt), n = e, (i = [{
                key: "setLine",
                value: function (t) {
                    return this.line = t, this
                }
            }, {
                key: "setHeight",
                value: function (t) {
                    return this.height = t, this
                }
            }, {
                key: "setDecrescendo",
                value: function (t) {
                    return this.decrescendo = t, this
                }
            }, {
                key: "preFormat",
                value: function () {
                    return this.preFormatted = !0, this
                }
            }, {
                key: "draw",
                value: function () {
                    this.checkContext(), this.setRendered();
                    var t = this.getTickContext(),
                        e = bi.getNextContext(t),
                        n = this.getAbsoluteX(),
                        i = e ? e.getX() : this.stave.x + this.stave.width,
                        o = this.stave.getYForLine(this.line + -3) + 1;
                    ! function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        gl.DEBUG && h.L("Vex.Flow.Crescendo", e)
                    }("Drawing ", this.decrescendo ? "decrescendo " : "crescendo ", this.height, "x", n - i),
                    function (t, e) {
                        var n = e.begin_x,
                            i = e.end_x,
                            o = e.y,
                            r = e.height / 2;
                        t.beginPath(), e.reverse ? (t.moveTo(n, o - r), t.lineTo(i, o), t.lineTo(n, o + r)) : (t.moveTo(i, o - r), t.lineTo(n, o), t.lineTo(i, o + r)), t.stroke(), t.closePath()
                    }(this.context, {
                        begin_x: n - this.render_options.extend_left,
                        end_x: i + this.render_options.extend_right,
                        y: o + this.render_options.y_shift,
                        height: this.height,
                        reverse: this.decrescendo
                    })
                }
            }]) && pl(n.prototype, i), o && pl(n, o), e
        }();

        function ml(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function _l() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            kl.DEBUG && h.L("Vex.Flow.Parser", e)
        }
        var xl = h.MakeException("ParserError");

        function wl(t) {
            return void 0 !== t.matchedString ? t.matchedString : t.results ? wl(t.results) : 1 === t.length ? wl(t[0]) : 0 === t.length ? null : t.map(wl)
        }
        var kl = function () {
            function t(e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.grammar = e
            }
            var e, n, i;
            return e = t, (n = [{
                key: "parse",
                value: function (t) {
                    this.line = t, this.pos = 0, this.errorPos = -1;
                    var e = this.expect(this.grammar.begin());
                    return e.errorPos = this.errorPos, e
                }
            }, {
                key: "matchFail",
                value: function (t) {
                    -1 === this.errorPos && (this.errorPos = this.pos), this.pos = t
                }
            }, {
                key: "matchSuccess",
                value: function () {
                    this.errorPos = -1
                }
            }, {
                key: "matchToken",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? new RegExp("^((" + t + "))") : new RegExp("^((" + t + ")\\s*)"),
                        n = this.line.slice(this.pos).match(e);
                    return null !== n ? {
                        success: !0,
                        matchedString: n[2],
                        incrementPos: n[1].length,
                        pos: this.pos
                    } : {
                        success: !1,
                        pos: this.pos
                    }
                }
            }, {
                key: "expectOne",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = [],
                        i = this.pos,
                        o = !0,
                        r = !1;
                    e = !0 === e || !0 === t.maybe;
                    for (var s = 0; s < t.expect.length; s++) {
                        var a = t.expect[s],
                            l = this.pos,
                            u = this.expect(a);
                        if (u.success) {
                            if (n.push(u), r = !0, t.or) break
                        } else if (o = !1, !t.or) {
                            this.pos = l;
                            break
                        }
                    }
                    var c = t.or && r || o,
                        h = c || !0 === e;
                    return e && !c && (this.pos = i), h ? this.matchSuccess() : this.matchFail(i), {
                        success: h,
                        results: n,
                        numMatches: c ? 1 : 0
                    }
                }
            }, {
                key: "expectOneOrMore",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = [],
                        i = this.pos,
                        o = 0,
                        r = !0;
                    do {
                        var s = this.expectOne(t);
                        s.success ? (o++, n.push(s.results)) : r = !1
                    } while (r);
                    var a = o > 0 || !0 === e;
                    return !e || o > 0 || (this.pos = i), a ? this.matchSuccess() : this.matchFail(i), {
                        success: a,
                        results: n,
                        numMatches: o
                    }
                }
            }, {
                key: "expectZeroOrMore",
                value: function (t) {
                    return this.expectOneOrMore(t, !0)
                }
            }, {
                key: "expect",
                value: function (t) {
                    var e;
                    if (_l("Evaluating rules:", t), !t) throw new xl("Invalid Rule: " + t, t);
                    var n = t.bind(this.grammar)();
                    if (n.token)(e = this.matchToken(n.token, !0 === n.noSpace)).success && (this.pos += e.incrementPos);
                    else {
                        if (!n.expect) throw new xl("Bad grammar! No `token` or `expect` property", n);
                        e = n.oneOrMore ? this.expectOneOrMore(n) : n.zeroOrMore ? this.expectZeroOrMore(n) : this.expectOne(n)
                    }
                    return e.matches = [], e.results && e.results.forEach(function (t) {
                        return e.matches.push(wl(t))
                    }), n.run && e.success && n.run(e), e
                }
            }]) && ml(e.prototype, n), i && ml(e, i), t
        }();

        function Sl(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Tl(t) {
            return (Tl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function El() {
            return (El = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Ol(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function Rl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Pl(t, e, n) {
            return e && Rl(t.prototype, e), n && Rl(t, n), t
        }

        function Cl() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            Bl.DEBUG && h.L("Vex.Flow.EasyScore", e)
        }
        var Nl = h.MakeException("EasyScoreError"),
            Al = function () {
                function t(e) {
                    Ol(this, t), this.builder = e
                }
                return Pl(t, [{
                    key: "begin",
                    value: function () {
                        return this.LINE
                    }
                }, {
                    key: "LINE",
                    value: function () {
                        return {
                            expect: [this.PIECE, this.PIECES, this.EOL]
                        }
                    }
                }, {
                    key: "PIECE",
                    value: function () {
                        var t = this;
                        return {
                            expect: [this.CHORDORNOTE, this.PARAMS],
                            run: function () {
                                return t.builder.commitPiece()
                            }
                        }
                    }
                }, {
                    key: "PIECES",
                    value: function () {
                        return {
                            expect: [this.COMMA, this.PIECE],
                            zeroOrMore: !0
                        }
                    }
                }, {
                    key: "PARAMS",
                    value: function () {
                        return {
                            expect: [this.DURATION, this.TYPE, this.DOTS, this.OPTS]
                        }
                    }
                }, {
                    key: "CHORDORNOTE",
                    value: function () {
                        return {
                            expect: [this.CHORD, this.SINGLENOTE],
                            or: !0
                        }
                    }
                }, {
                    key: "CHORD",
                    value: function () {
                        var t = this;
                        return {
                            expect: [this.LPAREN, this.NOTES, this.RPAREN],
                            run: function (e) {
                                return t.builder.addChord(e.matches[1])
                            }
                        }
                    }
                }, {
                    key: "NOTES",
                    value: function () {
                        return {
                            expect: [this.NOTE],
                            oneOrMore: !0
                        }
                    }
                }, {
                    key: "NOTE",
                    value: function () {
                        return {
                            expect: [this.NOTENAME, this.ACCIDENTAL, this.OCTAVE]
                        }
                    }
                }, {
                    key: "SINGLENOTE",
                    value: function () {
                        var t = this;
                        return {
                            expect: [this.NOTENAME, this.ACCIDENTAL, this.OCTAVE],
                            run: function (e) {
                                return t.builder.addSingleNote(e.matches[0], e.matches[1], e.matches[2])
                            }
                        }
                    }
                }, {
                    key: "ACCIDENTAL",
                    value: function () {
                        return {
                            expect: [this.ACCIDENTALS],
                            maybe: !0
                        }
                    }
                }, {
                    key: "DOTS",
                    value: function () {
                        var t = this;
                        return {
                            expect: [this.DOT],
                            zeroOrMore: !0,
                            run: function (e) {
                                return t.builder.setNoteDots(e.matches[0])
                            }
                        }
                    }
                }, {
                    key: "TYPE",
                    value: function () {
                        var t = this;
                        return {
                            expect: [this.SLASH, this.MAYBESLASH, this.TYPES],
                            maybe: !0,
                            run: function (e) {
                                return t.builder.setNoteType(e.matches[2])
                            }
                        }
                    }
                }, {
                    key: "DURATION",
                    value: function () {
                        var t = this;
                        return {
                            expect: [this.SLASH, this.DURATIONS],
                            maybe: !0,
                            run: function (e) {
                                return t.builder.setNoteDuration(e.matches[1])
                            }
                        }
                    }
                }, {
                    key: "OPTS",
                    value: function () {
                        return {
                            expect: [this.LBRACKET, this.KEYVAL, this.KEYVALS, this.RBRACKET],
                            maybe: !0
                        }
                    }
                }, {
                    key: "KEYVALS",
                    value: function () {
                        return {
                            expect: [this.COMMA, this.KEYVAL],
                            zeroOrMore: !0
                        }
                    }
                }, {
                    key: "KEYVAL",
                    value: function () {
                        var t = this;
                        return {
                            expect: [this.KEY, this.EQUALS, this.VAL],
                            run: function (e) {
                                return t.builder.addNoteOption(e.matches[0], e.matches[2].slice(1, -1))
                            }
                        }
                    }
                }, {
                    key: "VAL",
                    value: function () {
                        return {
                            expect: [this.SVAL, this.DVAL],
                            or: !0
                        }
                    }
                }, {
                    key: "KEY",
                    value: function () {
                        return {
                            token: "[a-zA-Z][a-zA-Z0-9]*"
                        }
                    }
                }, {
                    key: "DVAL",
                    value: function () {
                        return {
                            token: '["][^"]*["]'
                        }
                    }
                }, {
                    key: "SVAL",
                    value: function () {
                        return {
                            token: "['][^']*[']"
                        }
                    }
                }, {
                    key: "NOTENAME",
                    value: function () {
                        return {
                            token: "[a-gA-G]"
                        }
                    }
                }, {
                    key: "OCTAVE",
                    value: function () {
                        return {
                            token: "[0-9]+"
                        }
                    }
                }, {
                    key: "ACCIDENTALS",
                    value: function () {
                        return {
                            token: "bbs|bb|bss|bs|b|db|d|##|#|n|\\+\\+-|\\+-|\\+\\+|\\+|k|o"
                        }
                    }
                }, {
                    key: "DURATIONS",
                    value: function () {
                        return {
                            token: "[0-9whq]+"
                        }
                    }
                }, {
                    key: "TYPES",
                    value: function () {
                        return {
                            token: "[rRsSxX]"
                        }
                    }
                }, {
                    key: "LPAREN",
                    value: function () {
                        return {
                            token: "[(]"
                        }
                    }
                }, {
                    key: "RPAREN",
                    value: function () {
                        return {
                            token: "[)]"
                        }
                    }
                }, {
                    key: "COMMA",
                    value: function () {
                        return {
                            token: "[,]"
                        }
                    }
                }, {
                    key: "DOT",
                    value: function () {
                        return {
                            token: "[.]"
                        }
                    }
                }, {
                    key: "SLASH",
                    value: function () {
                        return {
                            token: "[/]"
                        }
                    }
                }, {
                    key: "MAYBESLASH",
                    value: function () {
                        return {
                            token: "[/]?"
                        }
                    }
                }, {
                    key: "EQUALS",
                    value: function () {
                        return {
                            token: "[=]"
                        }
                    }
                }, {
                    key: "LBRACKET",
                    value: function () {
                        return {
                            token: "\\["
                        }
                    }
                }, {
                    key: "RBRACKET",
                    value: function () {
                        return {
                            token: "\\]"
                        }
                    }
                }, {
                    key: "EOL",
                    value: function () {
                        return {
                            token: "$"
                        }
                    }
                }]), t
            }(),
            Ll = function () {
                function t(e) {
                    Ol(this, t), this.factory = e, this.commitHooks = [], this.reset()
                }
                return Pl(t, [{
                    key: "reset",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.options = {
                            stem: "auto",
                            clef: "treble"
                        }, this.elements = {
                            notes: [],
                            accidentals: []
                        }, this.rollingDuration = "8", this.resetPiece(), El(this.options, t)
                    }
                }, {
                    key: "getFactory",
                    value: function () {
                        return this.factory
                    }
                }, {
                    key: "getElements",
                    value: function () {
                        return this.elements
                    }
                }, {
                    key: "addCommitHook",
                    value: function (t) {
                        this.commitHooks.push(t)
                    }
                }, {
                    key: "resetPiece",
                    value: function () {
                        Cl("resetPiece"), this.piece = {
                            chord: [],
                            duration: this.rollingDuration,
                            dots: 0,
                            type: void 0,
                            options: {}
                        }
                    }
                }, {
                    key: "setNoteDots",
                    value: function (t) {
                        Cl("setNoteDots:", t), t && (this.piece.dots = t.length)
                    }
                }, {
                    key: "setNoteDuration",
                    value: function (t) {
                        Cl("setNoteDuration:", t), this.rollingDuration = this.piece.duration = t || this.rollingDuration
                    }
                }, {
                    key: "setNoteType",
                    value: function (t) {
                        Cl("setNoteType:", t), t && (this.piece.type = t)
                    }
                }, {
                    key: "addNoteOption",
                    value: function (t, e) {
                        Cl("addNoteOption: key:", t, "value:", e), this.piece.options[t] = e
                    }
                }, {
                    key: "addNote",
                    value: function (t, e, n) {
                        Cl("addNote:", t, e, n), this.piece.chord.push({
                            key: t,
                            accid: e,
                            octave: n
                        })
                    }
                }, {
                    key: "addSingleNote",
                    value: function (t, e, n) {
                        Cl("addSingleNote:", t, e, n), this.addNote(t, e, n)
                    }
                }, {
                    key: "addChord",
                    value: function (t) {
                        var e = this;
                        Cl("startChord"), "object" !== Tl(t[0]) ? this.addSingleNote(t[0]) : t.forEach(function (t) {
                            t && e.addNote.apply(e, Sl(t))
                        }), Cl("endChord")
                    }
                }, {
                    key: "commitPiece",
                    value: function () {
                        var t = this;
                        Cl("commitPiece");
                        var e = this.factory;
                        if (e) {
                            var n = El({}, this.options, this.piece.options),
                                i = n.stem,
                                o = n.clef,
                                r = "auto" === i.toLowerCase(),
                                s = r || "up" !== i.toLowerCase() ? Le.STEM_DOWN : Le.STEM_UP,
                                a = this.piece,
                                l = a.chord,
                                u = a.duration,
                                c = a.dots,
                                h = a.type,
                                f = l.map(function (t) {
                                    return t.key + "/" + t.octave
                                }),
                                b = e.StaveNote({
                                    keys: f,
                                    duration: u,
                                    dots: c,
                                    type: h,
                                    clef: o,
                                    auto_stem: r
                                });
                            r || b.setStemDirection(s);
                            var p = l.map(function (t) {
                                return t.accid || null
                            });
                            p.forEach(function (t, n) {
                                t && b.addAccidental(n, e.Accidental({
                                    type: t
                                }))
                            });
                            for (var y = 0; y < c; y++) b.addDotToAll();
                            this.commitHooks.forEach(function (e) {
                                return e(n, b, t)
                            }), this.elements.notes.push(b), this.elements.accidentals.concat(p), this.resetPiece()
                        }
                    }
                }]), t
            }();

        function Ml(t, e) {
            var n = t.id;
            void 0 !== n && e.setAttribute("id", n)
        }

        function Fl(t, e) {
            if (t.class) {
                t.class.split(/\s*,\s*/).forEach(function (t) {
                    return e.addClass(t)
                })
            }
        }
        var Bl = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Ol(this, t), this.setOptions(e), this.defaults = {
                    clef: "treble",
                    time: "4/4",
                    stem: "auto"
                }
            }
            return Pl(t, [{
                key: "set",
                value: function (t) {
                    return El(this.defaults, t), this
                }
            }, {
                key: "setOptions",
                value: function (t) {
                    var e = this;
                    return this.options = El({
                        factory: null,
                        builder: null,
                        commitHooks: [Ml, Fl, si.easyScoreHook],
                        throwOnError: !1
                    }, t), this.factory = this.options.factory, this.builder = this.options.builder || new Ll(this.factory), this.grammar = new Al(this.builder), this.parser = new kl(this.grammar), this.options.commitHooks.forEach(function (t) {
                        return e.addCommitHook(t)
                    }), this
                }
            }, {
                key: "setContext",
                value: function (t) {
                    return this.factory && this.factory.setContext(t), this
                }
            }, {
                key: "parse",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.builder.reset(e);
                    var n = this.parser.parse(t);
                    if (!n.success && this.options.throwOnError) throw new Nl("Error parsing line: " + t, n);
                    return n
                }
            }, {
                key: "beam",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.factory.Beam({
                        notes: t,
                        options: e
                    }), t
                }
            }, {
                key: "tuplet",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.factory.Tuplet({
                        notes: t,
                        options: e
                    }), t
                }
            }, {
                key: "notes",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e = El({
                        clef: this.defaults.clef,
                        stem: this.defaults.stem
                    }, e), this.parse(t, e), this.builder.getElements().notes
                }
            }, {
                key: "voice",
                value: function (t, e) {
                    return e = El({
                        time: this.defaults.time
                    }, e), this.factory.Voice(e).addTickables(t)
                }
            }, {
                key: "addCommitHook",
                value: function (t) {
                    return this.builder.addCommitHook(t)
                }
            }]), t
        }();

        function jl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Dl() {
            return (Dl = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }
        var Il = h.MakeException("FactoryError");

        function Gl() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 ? arguments[1] : void 0,
                n = e.options;
            return (t = Dl(e, t)).options = Dl(n, t.options), t
        }
        var Yl = function () {
            function t(e) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    Yl.DEBUG && h.L("Vex.Flow.Factory", e)
                }("New factory: ", e);
                var n = {
                    stave: {
                        space: 10
                    },
                    renderer: {
                        context: null,
                        elementId: "",
                        backend: Z.Backends.SVG,
                        width: 500,
                        height: 200,
                        background: "#FFF"
                    },
                    font: {
                        face: "Arial",
                        point: 10,
                        style: ""
                    }
                };
                this.options = n, this.setOptions(e)
            }
            var e, n, i;
            return e = t, i = [{
                key: "newFromElementId",
                value: function (e) {
                    return new t({
                        renderer: {
                            elementId: e,
                            width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                            height: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200
                        }
                    })
                }
            }], (n = [{
                key: "reset",
                value: function () {
                    this.renderQ = [], this.systems = [], this.staves = [], this.voices = [], this.stave = null
                }
            }, {
                key: "getOptions",
                value: function () {
                    return this.options
                }
            }, {
                key: "setOptions",
                value: function (t) {
                    for (var e = ["stave", "renderer", "font"], n = 0; n < e.length; n++) {
                        var i = e[n];
                        Dl(this.options[i], t[i])
                    }(null !== this.options.renderer.elementId || this.options.renderer.context) && this.initRenderer(), this.reset()
                }
            }, {
                key: "initRenderer",
                value: function () {
                    var t = this.options.renderer,
                        e = t.elementId,
                        n = t.backend,
                        i = t.width,
                        o = t.height,
                        r = t.background;
                    if ("" === e) throw new Il("HTML DOM element not set in Factory");
                    this.context = Z.buildContext(e, n, i, o, r)
                }
            }, {
                key: "getContext",
                value: function () {
                    return this.context
                }
            }, {
                key: "setContext",
                value: function (t) {
                    return this.context = t, this
                }
            }, {
                key: "getStave",
                value: function () {
                    return this.stave
                }
            }, {
                key: "getVoices",
                value: function () {
                    return this.voices
                }
            }, {
                key: "space",
                value: function (t) {
                    return this.options.stave.space * t
                }
            }, {
                key: "Stave",
                value: function (t) {
                    t = Gl(t, {
                        x: 0,
                        y: 0,
                        width: this.options.renderer.width - this.space(1),
                        options: {
                            spacing_between_lines_px: this.options.stave.space
                        }
                    });
                    var e = new Rr(t.x, t.y, t.width, t.options);
                    return this.staves.push(e), e.setContext(this.context), this.stave = e, e
                }
            }, {
                key: "TabStave",
                value: function (t) {
                    t = Gl(t, {
                        x: 0,
                        y: 0,
                        width: this.options.renderer.width - this.space(1),
                        options: {
                            spacing_between_lines_px: 1.3 * this.options.stave.space
                        }
                    });
                    var e = new Mr(t.x, t.y, t.width, t.options);
                    return this.staves.push(e), e.setContext(this.context), this.stave = e, e
                }
            }, {
                key: "StaveNote",
                value: function (t) {
                    var e = new Le(t);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "GhostNote",
                value: function (t) {
                    var e = new rl(t);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "TextNote",
                value: function (t) {
                    var e = new Io(t);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "BarNote",
                value: function (t) {
                    t = Gl(t, {
                        type: "single",
                        options: {}
                    });
                    var e = new Za(t.type);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "ClefNote",
                value: function (t) {
                    t = Gl(t, {
                        type: "treble",
                        options: {
                            size: "default"
                        }
                    });
                    var e = new us(t.type, t.options.size, t.options.annotation);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "TimeSigNote",
                value: function (t) {
                    t = Gl(t, {
                        time: "4/4",
                        options: {}
                    });
                    var e = new ks(t.time);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "KeySigNote",
                value: function (t) {
                    var e = new ds(t.key, t.cancelKey, t.alterKey);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "TabNote",
                value: function (t) {
                    var e = new Wr(t);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "GraceNote",
                value: function (t) {
                    var e = new Is(t);
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), e
                }
            }, {
                key: "GraceNoteGroup",
                value: function (t) {
                    var e = new Pn(t.notes, t.slur);
                    return e.setContext(this.context), e
                }
            }, {
                key: "Accidental",
                value: function (t) {
                    t = Gl(t, {
                        type: null,
                        options: {}
                    });
                    var e = new $e(t.type);
                    return e.setContext(this.context), e
                }
            }, {
                key: "Annotation",
                value: function (t) {
                    t = Gl(t, {
                        text: "p",
                        vJustify: "below",
                        hJustify: "center",
                        fontFamily: "Times",
                        fontSize: 14,
                        fontWeight: "bold italic",
                        options: {}
                    });
                    var e = new Oi(t.text);
                    return e.setJustification(t.hJustify), e.setVerticalJustification(t.vJustify), e.setFont(t.fontFamily, t.fontSize, t.fontWeight), e.setContext(this.context), e
                }
            }, {
                key: "Articulation",
                value: function (t) {
                    t = Gl(t, {
                        type: "a.",
                        position: "above",
                        options: {}
                    });
                    var e = new si(t.type);
                    return e.setPosition(t.position), e.setContext(this.context), e
                }
            }, {
                key: "TextDynamics",
                value: function (t) {
                    t = Gl(t, {
                        text: "p",
                        duration: "q",
                        dots: 0,
                        line: 0,
                        options: {}
                    });
                    var e = new _a({
                        text: t.text,
                        line: t.line,
                        duration: t.duration,
                        dots: t.dots
                    });
                    return this.stave && e.setStave(this.stave), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "Fingering",
                value: function (t) {
                    t = Gl(t, {
                        number: "0",
                        position: "left",
                        options: {}
                    });
                    var e = new Ge(t.number);
                    return e.setPosition(t.position), e.setContext(this.context), e
                }
            }, {
                key: "StringNumber",
                value: function (t) {
                    t = Gl(t, {
                        number: "0",
                        position: "left",
                        options: {}
                    });
                    var e = new Hn(t.number);
                    return e.setPosition(t.position), e.setContext(this.context), e
                }
            }, {
                key: "TickContext",
                value: function () {
                    return (new bi).setContext(this.context)
                }
            }, {
                key: "ModifierContext",
                value: function () {
                    return new Xi
                }
            }, {
                key: "MultiMeasureRest",
                value: function (t) {
                    var e = new es(t.number_of_measures, t);
                    return e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "Voice",
                value: function (t) {
                    t = Gl(t, {
                        time: "4/4",
                        options: {}
                    });
                    var e = new Rt(t.time);
                    return this.voices.push(e), e
                }
            }, {
                key: "StaveConnector",
                value: function (t) {
                    t = Gl(t, {
                        top_stave: null,
                        bottom_stave: null,
                        type: "double",
                        options: {}
                    });
                    var e = new Bt(t.top_stave, t.bottom_stave);
                    return e.setType(t.type).setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "Formatter",
                value: function () {
                    return new qi
                }
            }, {
                key: "Tuplet",
                value: function (t) {
                    t = Gl(t, {
                        notes: [],
                        options: {}
                    });
                    var e = new ft(t.notes, t.options).setContext(this.context);
                    return this.renderQ.push(e), e
                }
            }, {
                key: "Beam",
                value: function (t) {
                    t = Gl(t, {
                        notes: [],
                        options: {
                            autoStem: !1,
                            secondaryBeamBreaks: []
                        }
                    });
                    var e = new xt(t.notes, t.options.autoStem).setContext(this.context);
                    return e.breakSecondaryAt(t.options.secondaryBeamBreaks), this.renderQ.push(e), e
                }
            }, {
                key: "Curve",
                value: function (t) {
                    t = Gl(t, {
                        from: null,
                        to: null,
                        options: {}
                    });
                    var e = new fa(t.from, t.to, t.options).setContext(this.context);
                    return this.renderQ.push(e), e
                }
            }, {
                key: "StaveTie",
                value: function (t) {
                    t = Gl(t, {
                        from: null,
                        to: null,
                        first_indices: [0],
                        last_indices: [0],
                        text: null,
                        options: {
                            direction: void 0
                        }
                    });
                    var e = new pn({
                        first_note: t.from,
                        last_note: t.to,
                        first_indices: t.first_indices,
                        last_indices: t.last_indices
                    }, t.text);
                    return t.options.direction && e.setDirection(t.options.direction), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "StaveLine",
                value: function (t) {
                    t = Gl(t, {
                        from: null,
                        to: null,
                        first_indices: [0],
                        last_indices: [0],
                        options: {}
                    });
                    var e = new Ra({
                        first_note: t.from,
                        last_note: t.to,
                        first_indices: t.first_indices,
                        last_indices: t.last_indices
                    });
                    return t.options.text && e.setText(t.options.text), t.options.font && e.setFont(t.options.font), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "VibratoBracket",
                value: function (t) {
                    t = Gl(t, {
                        from: null,
                        to: null,
                        options: {
                            harsh: !1
                        }
                    });
                    var e = new Jr({
                        start: t.from,
                        stop: t.to
                    });
                    return t.options.line && e.setLine(t.options.line), t.options.harsh && e.setHarsh(t.options.harsh), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "TextBracket",
                value: function (t) {
                    t = Gl(t, {
                        from: null,
                        to: null,
                        text: "",
                        options: {
                            superscript: "",
                            position: 1
                        }
                    });
                    var e = new Xa({
                        start: t.from,
                        stop: t.to,
                        text: t.text,
                        superscript: t.options.superscript,
                        position: t.options.position
                    });
                    return t.options.line && e.setLine(t.options.line), t.options.font && e.setFont(t.options.font), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "System",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t.factory = this;
                    var e = new ql(t).setContext(this.context);
                    return this.systems.push(e), e
                }
            }, {
                key: "EasyScore",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return t.factory = this, new Bl(t)
                }
            }, {
                key: "PedalMarking",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t = Gl(t, {
                        notes: [],
                        options: {
                            style: "mixed"
                        }
                    });
                    var e = new Ba(t.notes);
                    return e.setStyle(Ba.StylesString[t.options.style]), e.setContext(this.context), this.renderQ.push(e), e
                }
            }, {
                key: "NoteSubGroup",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t = Gl(t, {
                        notes: [],
                        options: {}
                    });
                    var e = new ln(t.notes);
                    return e.setContext(this.context), e
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this;
                    this.systems.forEach(function (e) {
                        return e.setContext(t.context).format()
                    }), this.staves.forEach(function (e) {
                        return e.setContext(t.context).draw()
                    }), this.voices.forEach(function (e) {
                        return e.setContext(t.context).draw()
                    }), this.renderQ.forEach(function (e) {
                        e.isRendered() || e.setContext(t.context).draw()
                    }), this.systems.forEach(function (e) {
                        return e.setContext(t.context).draw()
                    }), this.reset()
                }
            }]) && jl(e.prototype, n), i && jl(e, i), t
        }();

        function Wl(t) {
            return (Wl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Hl(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function Xl(t, e) {
            return !e || "object" !== Wl(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ul(t, e, n) {
            return (Ul = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                var i = function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Vl(t)););
                    return t
                }(t, e);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value
                }
            })(t, e, n || t)
        }

        function Vl(t) {
            return (Vl = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function zl(t, e) {
            return (zl = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Kl() {
            return (Kl = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }).apply(this, arguments)
        }

        function Jl(t, e) {
            var n = e.options;
            return (t = Kl(e, t)).options = Kl(n, t.options), t
        }
        var ql = function (t) {
            function e() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = Xl(this, Vl(e).call(this))).setAttribute("type", "System"), t.setOptions(n), t.parts = [], t
            }
            var n, i, o;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && zl(t, e)
            }(e, k), n = e, (i = [{
                key: "setOptions",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.options = Jl(t, {
                        x: 10,
                        y: 10,
                        width: 500,
                        connector: null,
                        spaceBetweenStaves: 12,
                        factory: null,
                        debugFormatter: !1,
                        formatIterations: 0,
                        options: {}
                    }), this.factory = this.options.factory || new Yl({
                        renderer: {
                            el: null
                        }
                    })
                }
            }, {
                key: "setContext",
                value: function (t) {
                    return Ul(Vl(e.prototype), "setContext", this).call(this, t), this.factory.setContext(t), this
                }
            }, {
                key: "addConnector",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "double";
                    return this.connector = this.factory.StaveConnector({
                        top_stave: this.parts[0].stave,
                        bottom_stave: this.parts[this.parts.length - 1].stave,
                        type: t
                    }), this.connector
                }
            }, {
                key: "addStave",
                value: function (t) {
                    var e = this;
                    return (t = Jl(t, {
                        stave: null,
                        voices: [],
                        spaceAbove: 0,
                        spaceBelow: 0,
                        debugNoteMetrics: !1,
                        options: {
                            left_bar: !1
                        }
                    })).stave || (t.stave = this.factory.Stave({
                        x: this.options.x,
                        y: this.options.y,
                        width: this.options.width,
                        options: t.options
                    })), t.voices.forEach(function (n) {
                        return n.setContext(e.context).setStave(t.stave).getTickables().forEach(function (e) {
                            return e.setStave(t.stave)
                        })
                    }), this.parts.push(t), t.stave
                }
            }, {
                key: "format",
                value: function () {
                    var t = this,
                        e = new qi;
                    this.formatter = e;
                    var n = this.options.y,
                        i = 0,
                        o = [],
                        r = [];
                    this.parts.forEach(function (s) {
                        n += s.stave.space(s.spaceAbove), s.stave.setY(n), e.joinVoices(s.voices), n += s.stave.space(s.spaceBelow), n += s.stave.space(t.options.spaceBetweenStaves), s.debugNoteMetrics && (r.push({
                            y: n,
                            voice: s.voices[0]
                        }), n += 15), o = o.concat(s.voices), i = Math.max(i, s.stave.getNoteStartX())
                    }), this.parts.forEach(function (t) {
                        return t.stave.setNoteStartX(i)
                    });
                    var s = this.options.width - (i - this.options.x) - Jt.STAVEPADDING;
                    e.format(o, s);
                    for (var a = 0; a < this.options.formatIterations; a++) e.tune();
                    this.startX = i, this.debugNoteMetricsYs = r, this.lastY = n
                }
            }, {
                key: "draw",
                value: function () {
                    var t = this.checkContext();
                    this.setRendered(), this.options.debugFormatter && qi.plotDebugging(t, this.formatter, this.startX, this.options.y, this.lastY), this.debugNoteMetricsYs.forEach(function (e) {
                        e.voice.getTickables().forEach(function (n) {
                            return Jt.plotMetrics(t, n, e.y)
                        })
                    })
                }
            }]) && Hl(n.prototype, i), o && Hl(n, o), e
        }();
        h.Flow = I, h.Flow.Element = k, h.Flow.Fraction = y, h.Flow.Renderer = Z, h.Flow.Formatter = qi, h.Flow.Music = We, h.Flow.Glyph = j, h.Flow.Stave = Rr, h.Flow.StaveNote = Le, h.Flow.StaveModifier = io, h.Flow.StaveTempo = Ao, h.Flow.Voice = Rt, h.Flow.Accidental = $e, h.Flow.Beam = xt, h.Flow.StaveTie = pn, h.Flow.TabStave = Mr, h.Flow.TabNote = Wr, h.Flow.Bend = Mi, h.Flow.Vibrato = Yi, h.Flow.VibratoBracket = Jr, h.Flow.Note = Jt, h.Flow.ModifierContext = Xi, h.Flow.MultiMeasureRest = es, h.Flow.TickContext = bi, h.Flow.Articulation = si, h.Flow.Annotation = Oi, h.Flow.Barline = co, h.Flow.NoteHead = ie, h.Flow.StaveConnector = Bt, h.Flow.ClefNote = us, h.Flow.KeySignature = sr, h.Flow.KeySigNote = ds, h.Flow.TimeSignature = pr, h.Flow.TimeSigNote = ks, h.Flow.Stem = rt, h.Flow.TabTie = xn, h.Flow.Clef = $o, h.Flow.Dot = ke, h.Flow.Modifier = de, h.Flow.TabSlide = Cs, h.Flow.Tuplet = ft, h.Flow.GraceNote = Is, h.Flow.GraceTabNote = zs, h.Flow.Tuning = qs, h.Flow.KeyManager = Zs, h.Flow.StaveHairpin = ra, h.Flow.BoundingBox = R, h.Flow.Stroke = Bn, h.Flow.TextNote = Io, h.Flow.Curve = fa, h.Flow.TextDynamics = _a, h.Flow.StaveLine = Ra, h.Flow.Ornament = _i, h.Flow.PedalMarking = Ba, h.Flow.TextBracket = Xa, h.Flow.FretHandFinger = Ge, h.Flow.Repetition = go, h.Flow.BarNote = Za, h.Flow.GhostNote = rl, h.Flow.NoteSubGroup = ln, h.Flow.GraceNoteGroup = Pn, h.Flow.Tremolo = fl, h.Flow.StringNumber = Hn, h.Flow.Crescendo = gl, h.Flow.Volta = xr, h.Flow.Font = P, h.Flow.System = ql, h.Flow.Factory = Yl, h.Flow.Parser = kl, h.Flow.EasyScore = Bl, h.Flow.Registry = _;
        e.default = h
    }]).default
});
//# sourceMappingURL=vexflow-debug.js.map