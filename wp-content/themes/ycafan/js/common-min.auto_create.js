(function(a) {
    function b(a, b) {
        var c = (a & 65535) + (b & 65535),
        d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | c & 65535
    }
    function c(a, b) {
        return a << b | a >>> 32 - b
    }
    function d(a, d, e, f, g, h) {
        return b(c(b(b(d, a), b(f, h)), g), e)
    }
    function e(a, b, c, e, f, g, h) {
        return d(b & c | ~b & e, a, b, f, g, h)
    }
    function f(a, b, c, e, f, g, h) {
        return d(b & e | c & ~e, a, b, f, g, h)
    }
    function g(a, b, c, e, f, g, h) {
        return d(b ^ c ^ e, a, b, f, g, h)
    }
    function h(a, b, c, e, f, g, h) {
        return d(c ^ (b | ~e), a, b, f, g, h)
    }
    function i(a, c) {
        a[c >> 5] |= 128 << c % 32,
        a[(c + 64 >>> 9 << 4) + 14] = c;
        var d, i, j, k, l, m = 1732584193,
        n = -271733879,
        o = -1732584194,
        p = 271733878;
        for (d = 0; d < a.length; d += 16) i = m,
        j = n,
        k = o,
        l = p,
        m = e(m, n, o, p, a[d], 7, -680876936),
        p = e(p, m, n, o, a[d + 1], 12, -389564586),
        o = e(o, p, m, n, a[d + 2], 17, 606105819),
        n = e(n, o, p, m, a[d + 3], 22, -1044525330),
        m = e(m, n, o, p, a[d + 4], 7, -176418897),
        p = e(p, m, n, o, a[d + 5], 12, 1200080426),
        o = e(o, p, m, n, a[d + 6], 17, -1473231341),
        n = e(n, o, p, m, a[d + 7], 22, -45705983),
        m = e(m, n, o, p, a[d + 8], 7, 1770035416),
        p = e(p, m, n, o, a[d + 9], 12, -1958414417),
        o = e(o, p, m, n, a[d + 10], 17, -42063),
        n = e(n, o, p, m, a[d + 11], 22, -1990404162),
        m = e(m, n, o, p, a[d + 12], 7, 1804603682),
        p = e(p, m, n, o, a[d + 13], 12, -40341101),
        o = e(o, p, m, n, a[d + 14], 17, -1502002290),
        n = e(n, o, p, m, a[d + 15], 22, 1236535329),
        m = f(m, n, o, p, a[d + 1], 5, -165796510),
        p = f(p, m, n, o, a[d + 6], 9, -1069501632),
        o = f(o, p, m, n, a[d + 11], 14, 643717713),
        n = f(n, o, p, m, a[d], 20, -373897302),
        m = f(m, n, o, p, a[d + 5], 5, -701558691),
        p = f(p, m, n, o, a[d + 10], 9, 38016083),
        o = f(o, p, m, n, a[d + 15], 14, -660478335),
        n = f(n, o, p, m, a[d + 4], 20, -405537848),
        m = f(m, n, o, p, a[d + 9], 5, 568446438),
        p = f(p, m, n, o, a[d + 14], 9, -1019803690),
        o = f(o, p, m, n, a[d + 3], 14, -187363961),
        n = f(n, o, p, m, a[d + 8], 20, 1163531501),
        m = f(m, n, o, p, a[d + 13], 5, -1444681467),
        p = f(p, m, n, o, a[d + 2], 9, -51403784),
        o = f(o, p, m, n, a[d + 7], 14, 1735328473),
        n = f(n, o, p, m, a[d + 12], 20, -1926607734),
        m = g(m, n, o, p, a[d + 5], 4, -378558),
        p = g(p, m, n, o, a[d + 8], 11, -2022574463),
        o = g(o, p, m, n, a[d + 11], 16, 1839030562),
        n = g(n, o, p, m, a[d + 14], 23, -35309556),
        m = g(m, n, o, p, a[d + 1], 4, -1530992060),
        p = g(p, m, n, o, a[d + 4], 11, 1272893353),
        o = g(o, p, m, n, a[d + 7], 16, -155497632),
        n = g(n, o, p, m, a[d + 10], 23, -1094730640),
        m = g(m, n, o, p, a[d + 13], 4, 681279174),
        p = g(p, m, n, o, a[d], 11, -358537222),
        o = g(o, p, m, n, a[d + 3], 16, -722521979),
        n = g(n, o, p, m, a[d + 6], 23, 76029189),
        m = g(m, n, o, p, a[d + 9], 4, -640364487),
        p = g(p, m, n, o, a[d + 12], 11, -421815835),
        o = g(o, p, m, n, a[d + 15], 16, 530742520),
        n = g(n, o, p, m, a[d + 2], 23, -995338651),
        m = h(m, n, o, p, a[d], 6, -198630844),
        p = h(p, m, n, o, a[d + 7], 10, 1126891415),
        o = h(o, p, m, n, a[d + 14], 15, -1416354905),
        n = h(n, o, p, m, a[d + 5], 21, -57434055),
        m = h(m, n, o, p, a[d + 12], 6, 1700485571),
        p = h(p, m, n, o, a[d + 3], 10, -1894986606),
        o = h(o, p, m, n, a[d + 10], 15, -1051523),
        n = h(n, o, p, m, a[d + 1], 21, -2054922799),
        m = h(m, n, o, p, a[d + 8], 6, 1873313359),
        p = h(p, m, n, o, a[d + 15], 10, -30611744),
        o = h(o, p, m, n, a[d + 6], 15, -1560198380),
        n = h(n, o, p, m, a[d + 13], 21, 1309151649),
        m = h(m, n, o, p, a[d + 4], 6, -145523070),
        p = h(p, m, n, o, a[d + 11], 10, -1120210379),
        o = h(o, p, m, n, a[d + 2], 15, 718787259),
        n = h(n, o, p, m, a[d + 9], 21, -343485551),
        m = b(m, i),
        n = b(n, j),
        o = b(o, k),
        p = b(p, l);
        return [m, n, o, p]
    }
    function j(a) {
        var b, c = "";
        for (b = 0; b < a.length * 32; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return c
    }
    function k(a) {
        var b, c = [];
        c[(a.length >> 2) - 1] = undefined;
        for (b = 0; b < c.length; b += 1) c[b] = 0;
        for (b = 0; b < a.length * 8; b += 8) c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
        return c
    }
    function l(a) {
        return j(i(k(a), a.length * 8))
    }
    function m(a, b) {
        var c, d = k(a),
        e = [],
        f = [],
        g;
        e[15] = f[15] = undefined,
        d.length > 16 && (d = i(d, a.length * 8));
        for (c = 0; c < 16; c += 1) e[c] = d[c] ^ 909522486,
        f[c] = d[c] ^ 1549556828;
        return g = i(e.concat(k(b)), 512 + b.length * 8),
        j(i(f.concat(g), 640))
    }
    function n(a) {
        var b = "0123456789abcdef",
        c = "",
        d, e;
        for (e = 0; e < a.length; e += 1) d = a.charCodeAt(e),
        c += b.charAt(d >>> 4 & 15) + b.charAt(d & 15);
        return c
    }
    function o(a) {
        return unescape(encodeURIComponent(a))
    }
    function p(a) {
        return l(o(a))
    }
    function q(a) {
        return n(p(a))
    }
    function r(a, b) {
        return m(o(a), o(b))
    }
    function s(a, b) {
        return n(r(a, b))
    }
    function t(a, b, c) {
        return b ? c ? r(b, a) : s(b, a) : c ? p(a) : q(a)
    }
    "use strict",
    typeof define == "function" && define.amd ? define(function() {
        return t
    }) : a.md5 = t
})(this);
(function(a) {
    a.cookie = function(a, b, c) {
        if (typeof b != "undefined") {
            c = c || {};
            if (b === null) {
                b = "";
                c.expires = -1
            }
            var d = "";
            if (c.expires && (typeof c.expires == "number" || c.expires.toUTCString)) {
                var e;
                if (typeof c.expires == "number") {
                    e = new Date;
                    e.setTime(e.getTime() + c.expires * 24 * 60 * 60 * 1e3)
                } else {
                    e = c.expires
                }
                d = "; expires=" + e.toUTCString()
            }
            var f = c.path ? "; path=" + c.path: "";
            var g = c.domain ? "; domain=" + c.domain: "";
            var h = c.secure ? "; secure": "";
            document.cookie = [a, "=", encodeURIComponent(b), d, f, g, h].join("")
        } else {
            var i = null;
            if (document.cookie && document.cookie != "") {
                var j = document.cookie.split(";");
                for (var k = 0; k < j.length; k++) {
                    var l = jQuery.trim(j[k]);
                    if (l.substring(0, a.length + 1) == a + "=") {
                        i = decodeURIComponent(l.substring(a.length + 1));
                        break
                    }
                }
            }
            return i
        }
    }
})(jQuery);
var root = window;
root.IFR || (root.IFR = {});
IFR.env = function() {
    function a(a) {
        return a.replace(/(^\s*)|(\s*$)/g, "")
    }
    var b = navigator.userAgent,
    c = null,
    d = function(a, b) {
        var c = a.split(b);
        c = c.shift() + "." + c.join("");
        return c * 1
    },
    e = {
        ua: b,
        version: null,
        ios: false,
        android: false,
        meizu: false,
        meizuVersion: null,
        weixin: false,
        wVersion: null,
        touchSupport: "createTouch" in document,
        hashSupport: !!("onhashchange" in window),
        qqbrowser: false
    };
    c = b.match(/MicroMessenger\/([\.0-9]+)/);
    if (c != null) {
        e.weixin = true;
        e.wVersion = d(c[1], ".")
    }
    c = b.match(/Android(\s|\/)([\.0-9]+)/);
    if (c != null) {
        e.android = true;
        e.version = d(c[2], ".");
        c = b.match(/(m1\snote|MEIZU|MX4|M040|M045|M351|M353|M355|M356)(\s)/);
        if (c != null) {
            e.meizu = true;
            e.meizuVersion = a(c[0])
        }
        c = b.match(/QQBrowser(\s|\/)([\.0-9]+)/);
        if (c != null) {
            e.qqbrowser = true
        }
        return e
    }
    c = b.match(/i(Pod|Pad|Phone).*\sOS\s([\_0-9]+)/);
    if (c != null) {
        e.ios = true;
        e.version = d(c[2], "_");
        return e
    }
    return e
} ();
IFR.env.touchSupport = IFR.env.ios || IFR.env.android || IFR.env.touchSupport;
IFR.env.android4_4 = IFR.env.android && IFR.env.version >= 4.4;
IFR.env.mobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(IFR.env.ua);
IFR.env.mobileiPad = /iPad.*?Mobile/i.test(IFR.env.ua);
IFR.env.mobileSafari = IFR.env.ios && IFR.env.ua.match(/AppleWebKit/);
function featureTest(a, b, c) {
    var d = a + ":",
    e = document.createElement("test"),
    f = e.style;
    if (!c) {
        f.cssText = d + ["-webkit-", "-moz-", "-ms-", "-o-", ""].join(b + ";" + d) + b + ";"
    } else {
        f.cssText = d + b
    }
    return f[a].indexOf(b) !== -1
}
IFR.env.positionStickySupport = featureTest("position", "sticky");
IFR.env.positionFixedSupport = featureTest("position", "fixed", true);
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
function a(b, c) {
    setTimeout(b, c || 1)
};
var IFR = IFR || {};
IFR.Events = function() {
    var a = [];
    var b = a.push;
    var c = a.slice;
    var d = a.splice;
    var e = /\s+/;
    var f = function(a, b, c, d) {
        if (!c) return true;
        if (typeof c === "object") {
            for (var f in c) {
                a[b].apply(a, [f, c[f]].concat(d))
            }
        } else if (e.test(c)) {
            var g = c.split(e);
            for (var h = 0,
            i = g.length; h < i; h++) {
                a[b].apply(a, [g[h]].concat(d))
            }
        } else {
            return true
        }
    };
    var g = function(a, b) {
        var c, d = -1,
        e = a.length;
        switch (b.length) {
        case 0:
            while (++d < e)(c = a[d]).callback.call(c.ctx);
            return;
        case 1:
            while (++d < e)(c = a[d]).callback.call(c.ctx, b[0]);
            return;
        case 2:
            while (++d < e)(c = a[d]).callback.call(c.ctx, b[0], b[1]);
            return;
        case 3:
            while (++d < e)(c = a[d]).callback.call(c.ctx, b[0], b[1], b[2]);
            return;
        default:
            while (++d < e)(c = a[d]).callback.apply(c.ctx, b)
        }
    };
    var h = {
        on: function(a, b, c) {
            if (! (f(this, "on", a, [b, c]) && b)) return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            d.push({
                callback: b,
                context: c,
                ctx: c || this
            });
            return this
        },
        once: function(a, b, c) {
            if (! (f(this, "once", a, [b, c]) && b)) return this;
            var d = this;
            var e = _.once(function() {
                d.off(a, e);
                b.apply(this, arguments)
            });
            e._callback = b;
            this.on(a, e, c);
            return this
        },
        off: function(a, b, c) {
            var d, e, g, h, i, j, k, l;
            if (!this._events || !f(this, "off", a, [b, c])) return this;
            if (!a && !b && !c) {
                this._events = {};
                return this
            }
            h = a ? [a] : _.keys(this._events);
            for (i = 0, j = h.length; i < j; i++) {
                a = h[i];
                if (d = this._events[a]) {
                    g = [];
                    if (b || c) {
                        for (k = 0, l = d.length; k < l; k++) {
                            e = d[k];
                            if (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) {
                                g.push(e)
                            }
                        }
                    }
                    this._events[a] = g
                }
            }
            return this
        },
        trigger: function(a) {
            if (!this._events) return this;
            var b = c.call(arguments, 1);
            if (!f(this, "trigger", a, b)) return this;
            var d = this._events[a];
            var e = this._events.all;
            if (d) g(d, b);
            if (e) g(e, arguments);
            return this
        },
        listenTo: function(a, b, c) {
            var d = this._listeners || (this._listeners = {});
            var e = a._listenerId || (a._listenerId = _.uniqueId("l"));
            d[e] = a;
            a.on(b, typeof b === "object" ? this: c, this);
            return this
        },
        stopListening: function(a, b, c) {
            var d = this._listeners;
            if (!d) return;
            if (a) {
                a.off(b, typeof b === "object" ? this: c, this);
                if (!b && !c) delete d[a._listenerId]
            } else {
                if (typeof b === "object") c = this;
                for (var e in d) {
                    d[e].off(b, c, this)
                }
                this._listeners = {}
            }
            return this
        }
    };
    return h
} ();
var IFR = IFR || {};
IFR.Store = function(a) {
    var b = {},
    c = "localStorage",
    d;
    b.disabled = false;
    b.set = function(a, b) {};
    b.get = function(a) {};
    b.remove = function(a) {};
    b.clear = function() {};
    b.transact = function(a, c, d) {
        var e = b.get(a);
        if (d == null) {
            d = c;
            c = null
        }
        if (typeof e == "undefined") {
            e = c || {}
        }
        d(e);
        b.set(a, e)
    };
    b.getAll = function() {};
    b.forEach = function() {};
    b.serialize = function(a) {
        return JSON.stringify(a)
    };
    b.deserialize = function(a) {
        if (typeof a != "string") {
            return undefined
        }
        try {
            return JSON.parse(a)
        } catch(b) {
            return a || undefined
        }
    };
    function e() {
        try {
            return c in a && a[c]
        } catch(b) {
            return false
        }
    }
    if (e()) {
        d = a[c];
        b.set = function(a, c) {
            try {
                if (c === undefined) {
                    return b.remove(a)
                }
                d.setItem(a, b.serialize(c))
            } catch(e) {
                if (e.name.toUpperCase() == "QUOTA_EXCEEDED_ERR") {
                    return false
                }
            }
            return c
        };
        b.get = function(a) {
            return b.deserialize(d.getItem(a))
        };
        b.remove = function(a) {
            d.removeItem(a);
            d.removeItem(a + "_timestamp");
            b._removeKeyChangeListener(a)
        };
        b.clear = function() {
            b.storageEventCallbacks = [];
            d.clear()
        };
        b.getAll = function() {
            var a = {};
            b.forEach(function(b, c) {
                a[b] = c
            });
            return a
        };
        b.forEach = function(a) {
            for (var c = 0; c < d.length; c++) {
                var e = d.key(c);
                a(e, b.get(e))
            }
        }
    }
    try {
        var f = "__storejs__";
        b.set(f, f);
        if (b.get(f) != f) {
            b.disabled = true
        }
        b.remove(f)
    } catch(g) {
        b.disabled = true
    }
    b.enabled = !b.disabled;
    return b
} (window); +
function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap");
        var b = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        };
        for (var c in b) {
            if (a.style[c] !== undefined) {
                return {
                    end: b[c]
                }
            }
        }
    }
    a.fn.removeClassPrefix = function(a) {
        this.each(function(b, c) {
            var d = c.className.split(" ").map(function(b) {
                return b.indexOf(a) === 0 ? "": b
            });
            c.className = d.join(" ")
        });
        return this
    };
    a.fn.transitionEnd = function(b, c) {
        var d = false,
        e = this;
        b && (b = a.proxy(b, e));
        a(this).one(a.support.transition.end,
        function() {
            d = true;
            b && b()
        });
        var f = function() {
            if (!d) a(e).trigger(a.support.transition.end)
        };
        setTimeout(f, c);
        return this
    };
    a.fn.classAnimoEnd = function(b, c, d) {
        var e = this;
        c && (c = a.proxy(c, e));
        var f = a(e).length;
        a(e).removeClass(b).one(a.support.animate.end,
        function() {
            c && c();
            if (f > 1) {
                f--;
                if (f === 0) d && d()
            }
        });
        requestAnimationFrame(function() {
            a(e).addClass(b);
            if (e.length) {
                var c = e[0];
                if (c.style.display === "none") c.style.display = "block"
            }
        });
        return this
    };
    a.support.transition = b();
    a.support.animate = {
        end: "webkitAnimationEnd animationend"
    };
    a.fn.isDisNone = function() {
        return this.style.display === "none"
    };
    a.fn.disBlock = function() {
        this.each(function(a, b) {
            b.style.display = "block"
        });
        return this
    };
    a.fn.disNone = function() {
        this.each(function(a, b) {
            b.style.display = "none"
        });
        return this
    };
    a.fn.clsShow = function() {
        a(this).removeClass("hide");
        return this
    };
    a.fn.clsHide = function() {
        a(this).addClass("hide");
        return this
    };
    a.fn.sWidth = function(a) {
        this.each(function(b, c) {
            c.style.width = a + "px"
        });
        return this
    };
    a.fn.sHeight = function(a) {
        this.each(function(b, c) {
            c.style.height = a + "px"
        });
        return this
    };
    a.fn.sWTransX = function(a) {
        this.each(function(b, c) {
            c.style.webkitTransform = "translateX(" + a + "px)"
        });
        return this
    };
    a.fn.sWTransY = function(a) {
        this.each(function(b, c) {
            c.style.webkitTransform = "translateY(" + a + "px)"
        });
        return this
    };
    a.fn.sWTransDuration = function(a) {
        a = a ? a + "ms": "";
        this.each(function(b, c) {
            c.style.webkitTransitionDuration = a
        });
        return this
    };
    a.fn.sScaleY = function(a) {
        this.each(function(b, c) {
            c.style.webkitTransform = "scaleY(" + a + ")"
        });
        return this
    };
    a.fn.sRotate = function(a) {
        this.each(function(b, c) {
            c.style.webkitTransform = "rotateZ(" + a + "deg)"
        });
        return this
    };
    a.fn.sHtml = function(a) {
        this.each(function(b, c) {
            c.innerHTML = a
        });
        return this
    }
} (window.$); (function() {
    window.$clamp = function(a, b) {
        function c(a, b) {
            j.getComputedStyle || (j.getComputedStyle = function(a, b) {
                this.el = a;
                this.getPropertyValue = function(b) {
                    var c = /(\-([a-z]){1})/g;
                    "float" == b && (b = "styleFloat");
                    c.test(b) && (b = b.replace(c,
                    function(a, b, c) {
                        return c.toUpperCase()
                    }));
                    return a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null
                };
                return this
            });
            return j.getComputedStyle(a, null).getPropertyValue(b)
        }
        function d(b) {
            b = b || a.clientHeight;
            var c = f(a);
            return Math.max(Math.floor(b / c), 0)
        }
        function e(b) {
            return f(a) * b
        }
        function f(a) {
            var b = c(a, "line-height");
            "normal" == b && (b = 1.2 * parseInt(c(a, "font-size")));
            return parseInt(b)
        }
        function g(b) {
            if (b.lastChild.children && 0 < b.lastChild.children.length) return g(Array.prototype.slice.call(b.children).pop());
            if (b.lastChild && b.lastChild.nodeValue && "" != b.lastChild.nodeValue && b.lastChild.nodeValue != k.truncationChar) return b.lastChild;
            b.lastChild.parentNode.removeChild(b.lastChild);
            return g(a)
        }
        function h(b, c) {
            if (c) {
                var d = b.nodeValue.replace(k.truncationChar, "");
                t || (s = 0 < r.length ? r.shift() : "", t = d.split(s));
                1 < t.length ? (u = t.pop(), i(b, t.join(s))) : t = null;
                q && (b.nodeValue = b.nodeValue.replace(k.truncationChar, ""), a.innerHTML = b.nodeValue + " " + q.innerHTML + k.truncationChar);
                if (t) {
                    if (a.clientHeight <= c) if (0 <= r.length && "" != s) i(b, t.join(s) + s + u),
                    t = null;
                    else return a.innerHTML
                } else "" == s && (i(b, ""), b = g(a), r = k.splitOnChars.slice(0), s = r[0], u = t = null);
                if (k.animate) setTimeout(function() {
                    h(b, c)
                },
                !0 === k.animate ? 10 : k.animate);
                else return h(b, c)
            }
        }
        function i(a, b) {
            a.nodeValue = b + k.truncationChar
        }
        b = b || {};
        var j = window,
        k = {
            clamp: b.clamp || 2,
            useNativeClamp: "undefined" != typeof b.useNativeClamp ? b.useNativeClamp: !0,
            splitOnChars: b.splitOnChars || [".", "-", "–", "—", " "],
            animate: b.animate || !1,
            truncationChar: b.truncationChar || "…",
            truncationHTML: b.truncationHTML
        },
        l = a.style,
        m = a.innerHTML,
        n = "undefined" != typeof a.style.webkitLineClamp,
        o = k.clamp,
        p = o.indexOf && ( - 1 < o.indexOf("px") || -1 < o.indexOf("em")),
        q;
        k.truncationHTML && (q = document.createElement("span"), q.innerHTML = k.truncationHTML);
        var r = k.splitOnChars.slice(0),
        s = r[0],
        t,
        u;
        "auto" == o ? o = d() : p && (o = d(parseInt(o)));
        var v;
        n && k.useNativeClamp ? (l.overflow = "hidden", l.textOverflow = "ellipsis", l.webkitBoxOrient = "vertical", l.display = "-webkit-box", l.webkitLineClamp = o, p && (l.height = k.clamp + "px")) : (l = e(o), l <= a.clientHeight && (v = h(g(a), l)));
        return {
            original: m,
            clamped: v
        }
    }
})();
(function(a) {
    a.fn.qrcode = function(b) {
        var c;
        function d(a) {
            this.mode = c;
            this.data = a
        }
        function e(a, b) {
            this.typeNumber = a;
            this.errorCorrectLevel = b;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = []
        }
        function f(a, b) {
            if (void 0 == a.length) throw Error(a.length + "/" + b);
            for (var c = 0; c < a.length && 0 == a[c];) c++;
            this.num = Array(a.length - c + b);
            for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
        }
        function g(a, b) {
            this.totalCount = a;
            this.dataCount = b
        }
        function h() {
            this.buffer = [];
            this.length = 0
        }
        d.prototype = {
            getLength: function() {
                return this.data.length
            },
            write: function(a) {
                for (var b = 0; b < this.data.length; b++) a.put(this.data.charCodeAt(b), 8)
            }
        };
        e.prototype = {
            addData: function(a) {
                this.dataList.push(new d(a));
                this.dataCache = null
            },
            isDark: function(a, b) {
                if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw Error(a + "," + b);
                return this.modules[a][b]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                if (1 > this.typeNumber) {
                    for (var a = 1,
                    a = 1; 40 > a; a++) {
                        for (var b = g.getRSBlocks(a, this.errorCorrectLevel), c = new h, d = 0, e = 0; e < b.length; e++) d += b[e].dataCount;
                        for (e = 0; e < this.dataList.length; e++) b = this.dataList[e],
                        c.put(b.mode, 4),
                        c.put(b.getLength(), i.getLengthInBits(b.mode, a)),
                        b.write(c);
                        if (c.getLengthInBits() <= 8 * d) break
                    }
                    this.typeNumber = a
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(a, b) {
                this.moduleCount = 4 * this.typeNumber + 17;
                this.modules = Array(this.moduleCount);
                for (var c = 0; c < this.moduleCount; c++) {
                    this.modules[c] = Array(this.moduleCount);
                    for (var d = 0; d < this.moduleCount; d++) this.modules[c][d] = null
                }
                this.setupPositionProbePattern(0, 0);
                this.setupPositionProbePattern(this.moduleCount - 7, 0);
                this.setupPositionProbePattern(0, this.moduleCount - 7);
                this.setupPositionAdjustPattern();
                this.setupTimingPattern();
                this.setupTypeInfo(a, b);
                7 <= this.typeNumber && this.setupTypeNumber(a);
                null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
                this.mapData(this.dataCache, b)
            },
            setupPositionProbePattern: function(a, b) {
                for (var c = -1; 7 >= c; c++) if (! ( - 1 >= a + c || this.moduleCount <= a + c)) for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = 0 <= c && 6 >= c && (0 == d || 6 == d) || 0 <= d && 6 >= d && (0 == c || 6 == c) || 2 <= c && 4 >= c && 2 <= d && 4 >= d ? !0 : !1)
            },
            getBestMaskPattern: function() {
                for (var a = 0,
                b = 0,
                c = 0; 8 > c; c++) {
                    this.makeImpl(!0, c);
                    var d = i.getLostPoint(this);
                    if (0 == c || a > d) a = d,
                    b = c
                }
                return b
            },
            createMovieClip: function(a, b, c) {
                a = a.createEmptyMovieClip(b, c);
                this.make();
                for (b = 0; b < this.modules.length; b++) for (var c = 1 * b,
                d = 0; d < this.modules[b].length; d++) {
                    var e = 1 * d;
                    this.modules[b][d] && (a.beginFill(0, 100), a.moveTo(e, c), a.lineTo(e + 1, c), a.lineTo(e + 1, c + 1), a.lineTo(e, c + 1), a.endFill())
                }
                return a
            },
            setupTimingPattern: function() {
                for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
            },
            setupPositionAdjustPattern: function() {
                for (var a = i.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++) for (var c = 0; c < a.length; c++) {
                    var d = a[b],
                    e = a[c];
                    if (null == this.modules[d][e]) for (var f = -2; 2 >= f; f++) for (var g = -2; 2 >= g; g++) this.modules[d + f][e + g] = -2 == f || 2 == f || -2 == g || 2 == g || 0 == f && 0 == g ? !0 : !1
                }
            },
            setupTypeNumber: function(a) {
                for (var b = i.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
                    var d = !a && 1 == (b >> c & 1);
                    this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
                }
                for (c = 0; 18 > c; c++) d = !a && 1 == (b >> c & 1),
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
            },
            setupTypeInfo: function(a, b) {
                for (var c = i.getBCHTypeInfo(this.errorCorrectLevel << 3 | b), d = 0; 15 > d; d++) {
                    var e = !a && 1 == (c >> d & 1);
                    6 > d ? this.modules[d][8] = e: 8 > d ? this.modules[d + 1][8] = e: this.modules[this.moduleCount - 15 + d][8] = e
                }
                for (d = 0; 15 > d; d++) e = !a && 1 == (c >> d & 1),
                8 > d ? this.modules[8][this.moduleCount - d - 1] = e: 9 > d ? this.modules[8][15 - d - 1 + 1] = e: this.modules[8][15 - d - 1] = e;
                this.modules[this.moduleCount - 8][8] = !a
            },
            mapData: function(a, b) {
                for (var c = -1,
                d = this.moduleCount - 1,
                e = 7,
                f = 0,
                g = this.moduleCount - 1; 0 < g; g -= 2) for (6 == g && g--;;) {
                    for (var h = 0; 2 > h; h++) if (null == this.modules[d][g - h]) {
                        var j = !1;
                        f < a.length && (j = 1 == (a[f] >>> e & 1));
                        i.getMask(b, d, g - h) && (j = !j);
                        this.modules[d][g - h] = j;
                        e--; - 1 == e && (f++, e = 7)
                    }
                    d += c;
                    if (0 > d || this.moduleCount <= d) {
                        d -= c;
                        c = -c;
                        break
                    }
                }
            }
        };
        e.PAD0 = 236;
        e.PAD1 = 17;
        e.createData = function(a, b, c) {
            for (var b = g.getRSBlocks(a, b), d = new h, f = 0; f < c.length; f++) {
                var j = c[f];
                d.put(j.mode, 4);
                d.put(j.getLength(), i.getLengthInBits(j.mode, a));
                j.write(d)
            }
            for (f = a = 0; f < b.length; f++) a += b[f].dataCount;
            if (d.getLengthInBits() > 8 * a) throw Error("code length overflow. (" + d.getLengthInBits() + ">" + 8 * a + ")");
            for (d.getLengthInBits() + 4 <= 8 * a && d.put(0, 4); 0 != d.getLengthInBits() % 8;) d.putBit(!1);
            for (; ! (d.getLengthInBits() >= 8 * a);) {
                d.put(e.PAD0, 8);
                if (d.getLengthInBits() >= 8 * a) break;
                d.put(e.PAD1, 8)
            }
            return e.createBytes(d, b)
        };
        e.createBytes = function(a, b) {
            for (var c = 0,
            d = 0,
            e = 0,
            g = Array(b.length), h = Array(b.length), j = 0; j < b.length; j++) {
                var k = b[j].dataCount,
                l = b[j].totalCount - k,
                d = Math.max(d, k),
                e = Math.max(e, l);
                g[j] = Array(k);
                for (var m = 0; m < g[j].length; m++) g[j][m] = 255 & a.buffer[m + c];
                c += k;
                m = i.getErrorCorrectPolynomial(l);
                k = new f(g[j], m.getLength() - 1).mod(m);
                h[j] = Array(m.getLength() - 1);
                for (m = 0; m < h[j].length; m++) l = m + k.getLength() - h[j].length,
                h[j][m] = 0 <= l ? k.get(l) : 0
            }
            for (m = j = 0; m < b.length; m++) j += b[m].totalCount;
            c = Array(j);
            for (m = k = 0; m < d; m++) for (j = 0; j < b.length; j++) m < g[j].length && (c[k++] = g[j][m]);
            for (m = 0; m < e; m++) for (j = 0; j < b.length; j++) m < h[j].length && (c[k++] = h[j][m]);
            return c
        };
        c = 4;
        for (var i = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(a) {
                for (var b = a << 10; 0 <= i.getBCHDigit(b) - i.getBCHDigit(i.G15);) b ^= i.G15 << i.getBCHDigit(b) - i.getBCHDigit(i.G15);
                return (a << 10 | b) ^ i.G15_MASK
            },
            getBCHTypeNumber: function(a) {
                for (var b = a << 12; 0 <= i.getBCHDigit(b) - i.getBCHDigit(i.G18);) b ^= i.G18 << i.getBCHDigit(b) - i.getBCHDigit(i.G18);
                return a << 12 | b
            },
            getBCHDigit: function(a) {
                for (var b = 0; 0 != a;) b++,
                a >>>= 1;
                return b
            },
            getPatternPosition: function(a) {
                return i.PATTERN_POSITION_TABLE[a - 1]
            },
            getMask: function(a, b, c) {
                switch (a) {
                case 0:
                    return 0 == (b + c) % 2;
                case 1:
                    return 0 == b % 2;
                case 2:
                    return 0 == c % 3;
                case 3:
                    return 0 == (b + c) % 3;
                case 4:
                    return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
                case 5:
                    return 0 == b * c % 2 + b * c % 3;
                case 6:
                    return 0 == (b * c % 2 + b * c % 3) % 2;
                case 7:
                    return 0 == (b * c % 3 + (b + c) % 2) % 2;
                default:
                    throw Error("bad maskPattern:" + a)
                }
            },
            getErrorCorrectPolynomial: function(a) {
                for (var b = new f([1], 0), c = 0; c < a; c++) b = b.multiply(new f([1, j.gexp(c)], 0));
                return b
            },
            getLengthInBits: function(a, b) {
                if (1 <= b && 10 > b) switch (a) {
                case 1:
                    return 10;
                case 2:
                    return 9;
                case c:
                    return 8;
                case 8:
                    return 8;
                default:
                    throw Error("mode:" + a)
                } else if (27 > b) switch (a) {
                case 1:
                    return 12;
                case 2:
                    return 11;
                case c:
                    return 16;
                case 8:
                    return 10;
                default:
                    throw Error("mode:" + a)
                } else if (41 > b) switch (a) {
                case 1:
                    return 14;
                case 2:
                    return 13;
                case c:
                    return 16;
                case 8:
                    return 12;
                default:
                    throw Error("mode:" + a)
                } else throw Error("type:" + b)
            },
            getLostPoint: function(a) {
                for (var b = a.getModuleCount(), c = 0, d = 0; d < b; d++) for (var e = 0; e < b; e++) {
                    for (var f = 0,
                    g = a.isDark(d, e), h = -1; 1 >= h; h++) if (! (0 > d + h || b <= d + h)) for (var i = -1; 1 >= i; i++) 0 > e + i || b <= e + i || 0 == h && 0 == i || g == a.isDark(d + h, e + i) && f++;
                    5 < f && (c += 3 + f - 5)
                }
                for (d = 0; d < b - 1; d++) for (e = 0; e < b - 1; e++) if (f = 0, a.isDark(d, e) && f++, a.isDark(d + 1, e) && f++, a.isDark(d, e + 1) && f++, a.isDark(d + 1, e + 1) && f++, 0 == f || 4 == f) c += 3;
                for (d = 0; d < b; d++) for (e = 0; e < b - 6; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
                for (e = 0; e < b; e++) for (d = 0; d < b - 6; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
                for (e = f = 0; e < b; e++) for (d = 0; d < b; d++) a.isDark(d, e) && f++;
                a = Math.abs(100 * f / b / b - 50) / 5;
                return c + 10 * a
            }
        },
        j = {
            glog: function(a) {
                if (1 > a) throw Error("glog(" + a + ")");
                return j.LOG_TABLE[a]
            },
            gexp: function(a) {
                for (; 0 > a;) a += 255;
                for (; 256 <= a;) a -= 255;
                return j.EXP_TABLE[a]
            },
            EXP_TABLE: Array(256),
            LOG_TABLE: Array(256)
        },
        k = 0; 8 > k; k++) j.EXP_TABLE[k] = 1 << k;
        for (k = 8; 256 > k; k++) j.EXP_TABLE[k] = j.EXP_TABLE[k - 4] ^ j.EXP_TABLE[k - 5] ^ j.EXP_TABLE[k - 6] ^ j.EXP_TABLE[k - 8];
        for (k = 0; 255 > k; k++) j.LOG_TABLE[j.EXP_TABLE[k]] = k;
        f.prototype = {
            get: function(a) {
                return this.num[a]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(a) {
                for (var b = Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++) for (var d = 0; d < a.getLength(); d++) b[c + d] ^= j.gexp(j.glog(this.get(c)) + j.glog(a.get(d)));
                return new f(b, 0)
            },
            mod: function(a) {
                if (0 > this.getLength() - a.getLength()) return this;
                for (var b = j.glog(this.get(0)) - j.glog(a.get(0)), c = Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d);
                for (d = 0; d < a.getLength(); d++) c[d] ^= j.gexp(j.glog(a.get(d)) + b);
                return new f(c, 0).mod(a)
            }
        };
        g.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        g.getRSBlocks = function(a, b) {
            var c = g.getRsBlockTable(a, b);
            if (void 0 == c) throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
            for (var d = c.length / 3,
            e = [], f = 0; f < d; f++) for (var h = c[3 * f + 0], i = c[3 * f + 1], j = c[3 * f + 2], k = 0; k < h; k++) e.push(new g(i, j));
            return e
        };
        g.getRsBlockTable = function(a, b) {
            switch (b) {
            case 1:
                return g.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case 0:
                return g.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case 3:
                return g.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case 2:
                return g.RS_BLOCK_TABLE[4 * (a - 1) + 3]
            }
        };
        h.prototype = {
            get: function(a) {
                return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
            },
            put: function(a, b) {
                for (var c = 0; c < b; c++) this.putBit(1 == (a >>> b - c - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(a) {
                var b = Math.floor(this.length / 8);
                this.buffer.length <= b && this.buffer.push(0);
                a && (this.buffer[b] |= 128 >>> this.length % 8);
                this.length++
            }
        };
        "string" === typeof b && (b = {
            text: b
        });
        b = a.extend({},
        {
            render: "canvas",
            width: 256,
            height: 256,
            typeNumber: -1,
            correctLevel: 2,
            background: "#ffffff",
            foreground: "#000000"
        },
        b);
        return this.each(function() {
            var c;
            if ("canvas" == b.render) {
                c = new e(b.typeNumber, b.correctLevel);
                c.addData(b.text);
                c.make();
                var d = document.createElement("canvas");
                d.width = b.width;
                d.height = b.height;
                for (var f = d.getContext("2d"), g = b.width / c.getModuleCount(), h = b.height / c.getModuleCount(), i = 0; i < c.getModuleCount(); i++) for (var j = 0; j < c.getModuleCount(); j++) {
                    f.fillStyle = c.isDark(i, j) ? b.foreground: b.background;
                    var k = Math.ceil((j + 1) * g) - Math.floor(j * g),
                    l = Math.ceil((i + 1) * g) - Math.floor(i * g);
                    f.fillRect(Math.round(j * g), Math.round(i * h), k, l)
                }
            } else {
                c = new e(b.typeNumber, b.correctLevel);
                c.addData(b.text);
                c.make();
                d = a("<table></table>").css("width", b.width + "px").css("height", b.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", b.background);
                f = b.width / c.getModuleCount();
                g = b.height / c.getModuleCount();
                for (h = 0; h < c.getModuleCount(); h++) {
                    i = a("<tr></tr>").css("height", g + "px").appendTo(d);
                    for (j = 0; j < c.getModuleCount(); j++) a("<td></td>").css("width", f + "px").css("background-color", c.isDark(h, j) ? b.foreground: b.background).appendTo(i)
                }
            }
            c = d;
            jQuery(c).appendTo(this)
        })
    }
})(jQuery);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); +
function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
        b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        }
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
        d = this;
        a(this).one(a.support.transition.end,
        function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    },
    a(function() {
        a.support.transition = b()
    })
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
    c = function(c) {
        a(c).on("click", b, this.close)
    };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
        e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(),
        f.length || (f = d.hasClass("alert") ? d: d.parent()),
        f.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)),
            "string" == typeof b && e[b].call(d)
        })
    },
    a.fn.alert.Constructor = c,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = d,
        this
    },
    a(document).on("click.bs.alert.data-api", b, c.prototype.close)
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({},
        b.DEFAULTS, d)
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    },
    b.prototype.setState = function(a) {
        var b = "disabled",
        c = this.$element,
        d = c.is("input") ? "val": "html",
        e = c.data();
        a += "Text",
        e.resetText || c.data("resetText", c[d]()),
        c[d](e[a] || this.options[a]),
        setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        },
        0)
    },
    b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons"]');
        if (a.length) {
            var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === b.prop("type") && a.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.button"),
            f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)),
            "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    },
    a.fn.button.Constructor = b,
    a.fn.button.noConflict = function() {
        return a.fn.button = c,
        this
    },
    a(document).on("click.bs.button.data-api", "[data-toggle^=button]",
    function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")),
        c.button("toggle"),
        b.preventDefault()
    })
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    b.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    },
    b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"),
        this.$items = this.$active.parent().children(),
        this.$items.index(this.$active)
    },
    b.prototype.to = function(b) {
        var c = this,
        d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid",
        function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next": "prev", a(this.$items[b]))
    },
    b.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    },
    b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    },
    b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left": "right",
        h = "next" == b ? "first": "last",
        i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        this.sliding = !0,
        f && this.pause();
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid",
            function() {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active")
            })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                e.addClass(b),
                e[0].offsetWidth,
                d.addClass(g),
                e.addClass(g),
                d.one(a.support.transition.end,
                function() {
                    e.removeClass([b, g].join(" ")).addClass("active"),
                    d.removeClass(["active", g].join(" ")),
                    i.sliding = !1,
                    setTimeout(function() {
                        i.$element.trigger("slid")
                    },
                    0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                d.removeClass("active"),
                e.addClass("active"),
                this.sliding = !1,
                this.$element.trigger("slid")
            }
            return f && this.cycle(),
            this
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.carousel"),
            f = a.extend({},
            b.DEFAULTS, d.data(), "object" == typeof c && c),
            g = "string" == typeof c ? c: f.slide;
            e || d.data("bs.carousel", e = new b(this, f)),
            "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    },
    a.fn.carousel.Constructor = b,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c,
        this
    },
    a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]",
    function(b) {
        var c, d = a(this),
        e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
        f = a.extend({},
        e.data(), d.data()),
        g = d.attr("data-slide-to");
        g && (f.interval = !1),
        e.carousel(f),
        (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g),
        b.preventDefault()
    }),
    a(window).on("load",
    function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.transitioning = null,
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    },
    b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width": "height"
    },
    b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"),
                    d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0),
                this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    },
    b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
            }
        }
    },
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.collapse"),
            f = a.extend({},
            b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.collapse.Constructor = b,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c,
        this
    },
    a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]",
    function(b) {
        var c, d = a(this),
        e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
        f = a(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle": d.data(),
        i = d.attr("data-parent"),
        j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
        f.collapse(h)
    })
} (window.jQuery),
+
function(a) {
    "use strict";
    function b() {
        a(d).remove(),
        a(e).each(function(b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d: b.parent()
    }
    var d = ".dropdown-backdrop",
    e = "[data-toggle=dropdown]",
    f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
            g = f.hasClass("open");
            if (b(), !g) {
                if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown"),
                e.focus()
            }
            return ! 1
        }
    },
    f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(),
                d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--,
                    40 == b.keyCode && i < h.length - 1 && i++,
                    ~i || (i = 0),
                    h.eq(i).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
            d = c.data("dropdown");
            d || c.data("dropdown", d = new f(this)),
            "string" == typeof b && d[b].call(c)
        })
    },
    a.fn.dropdown.Constructor = f,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g,
        this
    },
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form",
    function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c,
        this.$element = a(b),
        this.$backdrop = this.isShown = null,
        this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide": "show"](a)
    },
    b.prototype.show = function(b) {
        var c = this,
        d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d),
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body),
            c.$element.show(),
            d && c.$element[0].offsetWidth,
            c.$element.addClass("in").attr("aria-hidden", !1),
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end,
            function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    },
    b.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        },
        this))
    },
    b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.removeBackdrop(),
            a.$element.trigger("hidden.bs.modal")
        })
    },
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else ! this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
            f = e.data("bs.modal"),
            g = a.extend({},
            b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)),
            "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    },
    a.fn.modal.Constructor = b,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = c,
        this
    },
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(b) {
        var c = a(this),
        d = c.attr("href"),
        e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
        f = e.data("modal") ? "toggle": a.extend({
            remote: !/#/.test(d) && d
        },
        e.data(), c.data());
        b.preventDefault(),
        e.modal(f, this).one("hide",
        function() {
            c.is(":visible") && c.focus()
        })
    }),
    a(document).on("show.bs.modal", ".modal",
    function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal",
    function() {
        a(document.body).removeClass("modal-open")
    })
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    b.prototype.init = function(b, c, d) {
        this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter": "focus",
                i = "hover" == g ? "mouseleave": "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    },
    b.prototype.getOptions = function(b) {
        return b = a.extend({},
        this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    },
    b.prototype.getDelegateOptions = function() {
        var b = {},
        c = this.getDefaults();
        return this._options && a.each(this._options,
        function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    },
    b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        },
        c.options.delay.show), void 0) : c.show()
    },
    b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        },
        c.options.delay.hide), void 0) : c.hide()
    },
    b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this.tip();
            this.setContent(),
            this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
            e = /\s?auto?\s?/i,
            f = e.test(d);
            f && (d = d.replace(e, "") || "top"),
            c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(d),
            this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition(),
            h = c[0].offsetWidth,
            i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent(),
                k = d,
                l = document.documentElement.scrollTop || document.body.scrollTop,
                m = "body" == this.options.container ? window.innerWidth: j.outerWidth(),
                n = "body" == this.options.container ? window.innerHeight: j.outerHeight(),
                o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top": "top" == d && g.top - l - i < 0 ? "bottom": "right" == d && g.right + h > m ? "left": "left" == d && g.left - h < o ? "right": d,
                c.removeClass(k).addClass(d)
            }
            var p = this.getCalculatedOffset(d, g, h, i);
            this.applyPlacement(p, d),
            this.$element.trigger("shown.bs." + this.type)
        }
    },
    b.prototype.applyPlacement = function(a, b) {
        var c, d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        a.top = a.top + g,
        a.left = a.left + h,
        d.offset(a).addClass("in");
        var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight),
            this.replaceArrow(k - e + i, i, "left")
        } else this.replaceArrow(j - f, j, "top");
        c && d.offset(a)
    },
    b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%": "")
    },
    b.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html": "text"](b),
        a.removeClass("fade in top bottom left right")
    },
    b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach()
        }
        var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e),
        e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
    },
    b.prototype.fixTitle = function() {
        var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    },
    b.prototype.hasContent = function() {
        return this.getTitle()
    },
    b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({},
        "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        },
        this.$element.offset())
    },
    b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        }: "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        }: "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        }: {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    },
    b.prototype.getTitle = function() {
        var a, b = this.$element,
        c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    },
    b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    },
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    b.prototype.enable = function() {
        this.enabled = !0
    },
    b.prototype.disable = function() {
        this.enabled = !1
    },
    b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    },
    b.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tooltip"),
            f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.tooltip.Constructor = b,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c,
        this
    }
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({},
    a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    b.prototype = a.extend({},
    a.fn.tooltip.Constructor.prototype),
    b.prototype.constructor = b,
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    },
    b.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html": "text"](b),
        a.find(".popover-content")[this.options.html ? "html": "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    },
    b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    b.prototype.getContent = function() {
        var a = this.$element,
        b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    },
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)),
        this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.popover"),
            f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.popover.Constructor = b,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = c,
        this
    }
} (window.jQuery),
+
function(a) {
    "use strict";
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(c).is("body") ? a(window) : a(c),
        this.$body = a("body"),
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.offsets = a([]),
        this.targets = a([]),
        this.activeTarget = null,
        this.refresh(),
        this.process()
    }
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset": "position";
        this.offsets = a([]),
        this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
            e = d.data("target") || d.attr("href"),
            f = /^#\w/.test(e) && a(e);
            return f && f.length && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            c.offsets.push(this[0]),
            c.targets.push(this[1])
        })
    },
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        d = c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    },
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.scrollspy"),
            f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c,
        this
    },
    a(window).on("load",
    function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
            f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c),
                this.activate(g, g.parent(),
                function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    },
    b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            b.addClass("active"),
            g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"),
            d && d()
        }
        var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(),
        f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.tab.Constructor = b,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = c,
        this
    },
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]',
    function(b) {
        b.preventDefault(),
        a(this).tab("show")
    })
} (window.jQuery),
+
function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(c),
        this.affixed = this.unpin = null,
        this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom",
    b.DEFAULTS = {
        offset: 0
    },
    b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    },
    b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
            d = this.$window.scrollTop(),
            e = this.$element.offset(),
            f = this.options.offset,
            g = f.top,
            h = f.bottom;
            "object" != typeof f && (h = g = f),
            "function" == typeof g && (g = f.top()),
            "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom": null != g && g >= d ? "top": !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d: null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i: "")), "bottom" == i && this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height()
            }))
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.affix"),
            f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    },
    a.fn.affix.Constructor = b,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = c,
        this
    },
    a(window).on("load",
    function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
            c = b.data();
            c.offset = c.offset || {},
            c.offsetBottom && (c.offset.bottom = c.offsetBottom),
            c.offsetTop && (c.offset.top = c.offsetTop),
            b.affix(c)
        })
    })
} (window.jQuery); 
(function(a, b) {
    "undefined" === typeof console && (b.console = {
        log: function() {}
    });
    IFR = b.IFR || {};
    IFR.util = IFR.util || {};
    IFR.url = b.location;
    IFR.url.hashValue = IFR.url.hash.slice(1);
    IFR.url.hrefWithoutHash = IFR.url.href.replace(IFR.url.hash, "");
    a.extend(a.easing, {
        easeInOutExpo: function(a, b, c, d, e) {
            if (b == 0) return c;
            if (b == e) return c + d;
            if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c;
            return d / 2 * ( - Math.pow(2, -10 * --b) + 2) + c
        }
    });
    a.extend(IFR, {
        isie6: false,
        isie: false,
        hasLocalStorage: !!b.localStorage,
        testStorage: function(a, b) {
            try {
                localStorage.setItem(a, b)
            } catch(c) {
                if (c.name.toUpperCase() == "QUOTA_EXCEEDED_ERR") {
                    return false
                }
            }
        },
        setItem: function(a, b) {
            if (!IFR.hasLocalStorage) return false;
            try {
                b = JSON.stringify(b);
                localStorage.setItem(a, b)
            } catch(c) {
                if (c.name.toUpperCase() == "QUOTA_EXCEEDED_ERR") {
                    return false
                }
            }
        },
        getItem: function(c) {
            if (!IFR.hasLocalStorage) return false;
            var d = b.localStorage.getItem(c);
            d = a.parseJSON(d);
            return d
        },
        share: function(c, d) {
            var e = {
                _t: document.title,
                _url: document.location.href,
                _pic: false,
                _topic: false
            };
            var f = a.extend({},
            e, d);
            var g = encodeURI(f._t),
            h = encodeURIComponent(f._url);
            if (f._topic) var i = encodeURI(f._topic);
            if (f._pic) var j = encodeURI(f._pic);
            var k = 626,
            l = 436;
            var m = f._url;
            if (j) {
                m += "&pic=" + j
            } else {
                var n = a("article img");
                if (n.length) {
                    m += "&pic=" + encodeURIComponent(n[0].src)
                }
            }
            b.open(m, "分享", "width=" + k + ",height=" + l + ", top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no")
        }
    });
    a.extend(IFR.util, {
        isie6: false,
        isie: false,
        isFF: !(window.mozInnerScreenX == null),
        isCanvasSupported: !!document.createElement("canvas").getContext,
        isInt: function(a) {
            return typeof a === "number" && parseFloat(a) == parseInt(a, 10) && !isNaN(a)
        },
        stopBubble: function(a) {
            var c = a || b.event;
            if (c && c.stopPropagation) c.stopPropagation();
            else c.cancelBubble = true
        },
        stopDefault: function(a) {
            a = arguments.callee.caller.arguments[0] || b.event;
            if (a && a.preventDefault) a.preventDefault();
            else a.returnValue = false;
            return false
        },
        exid: function(a) {
            var b = document.getElementById(a);
            if (b) {
                return true
            } else {
                return false
            }
        },
        random: function(a, b, c, d) { ! b && (!c && !d) && (b = c = d = !0);
            var e = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "abcdefghijklmnopqrstuvwxyz".split(""), "0123456789".split("")];
            var f = [];
            var g = "";
            f = b ? f.concat(e[0]) : f;
            f = c ? f.concat(e[1]) : f;
            f = d ? f.concat(e[2]) : f;
            for (var h = 0; h < a; h++) {
                g += f[Math.round(Math.random() * (f.length - 1))]
            }
            return g
        },
        objToParam: function(a, b) {
            var c = [];
            for (var d in a) {
                var e = b ? b + "[" + d + "]": d,
                f = a[d];
                c.push(typeof f == "object" ? IFR.util.objToParam(f, e) : encodeURIComponent(e) + "=" + encodeURIComponent(f))
            }
            return c.join("&")
        },
        paramToObj: function(a) {
            var b = /([^&=]+)=?([^&]*)/g;
            var c = /\+/g;
            var d = function(a) {
                return decodeURIComponent(a.replace(c, " "))
            };
            var e = {},
            f;
            while (f = b.exec(a)) {
                var g = d(f[1]),
                h = d(f[2]);
                if (g.substring(g.length - 2) === "[]") {
                    g = g.substring(0, g.length - 2); (e[g] || (e[g] = [])).push(h)
                } else e[g] = h
            }
            return e
        },
        unix: function() {
            return Math.round( + new Date / 1e3)
        },
        milliseconds: function() {
            return (new Date).getTime()
        },
        relativetime: function(a) {
            if (typeof a === "number") {
                var b = new Date(a * 1e3)
            } else if (typeof a === "string") {
                var c = a.split(/[- :]/),
                b = new Date(c[0], c[1] - 1, c[2], c[3], c[4], c[5])
            } else {}
            a = b.getTime();
            var d = IFR.util.milliseconds();
            var e = b.getFullYear();
            var f = new Date(d).getFullYear();
            var g = d - a;
            var h = Math.floor(Math.abs(g) / 1e3);
            var i = Math.floor(h / 60);
            var j = Math.floor(h / 3600);
            var k = (new Date).getDate() - b.getDate();
            var l;
            if (h >= 86400) {
                if (k == 1) {
                    l = "昨天 " + IFR.util.formatTime(b, "short")
                } else if (k == 2) {
                    l = "前天 " + IFR.util.formatTime(b, "short")
                } else if (e === f) {
                    l = IFR.util.formatTime(b, "withNoYear")
                } else {
                    l = IFR.util.formatTime(b, "full")
                }
            } else if (h >= 3600) {
                l = "今天 " + IFR.util.formatTime(b, "short")
            } else if (h >= 60) {
                l = i + " 分钟前"
            } else {
                l = "刚刚"
            }
            return l
        },
        isLeapYear: function(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        daysInYear: function(a) {
            var b = a.getFullYear();
            return IFR.util.isLeapYear(b) ? 366 : 365
        },
        formatTime: function(a, b) {
            var c = (new Date).getFullYear(),
            d = a.getFullYear(),
            e = a.getMonth() + 1,
            f = a.getDate(),
            g = a.getHours(),
            h = a.getMinutes() + "",
            i;
            if (g < 10) g = "0" + g;
            if (h.length == 1) h = "0" + h;
            switch (b) {
            case "short":
                i = g + ":" + h;
                break;
            case "withNoYear":
                i = e + "月" + f + "日 " + g + ":" + h;
                if (d != c) {
                    i = d + "-" + i
                }
                break;
            default:
            case "full":
                i = d + "年" + e + "月" + f + "日 " + g + ":" + h;
                break
            }
            return i
        },
        linkify: function(a) {
            var b, c, d, e;
            c = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
            b = a.replace(c, '<a href="$1" target="_blank">$1</a>');
            d = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
            b = b.replace(d, '$1<a href="http://$2" target="_blank">$2</a>');
            e = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
            b = b.replace(e, '<a href="mailto:$1">$1</a>');
            return b
        },
        flashColor: function(b) {
            var c = a("#" + b);
            if (c.length) {
                var d = c.css("backgroundColor");
                c.animate({
                    backgroundColor: "yellow"
                },
                "normal", "linear",
                function() {
                    a(this).animate({
                        backgroundColor: d
                    })
                })
            }
        },
        fixDownloadLinkInWeixin: function(a) {
            if (!a.length) return;
            var b = a.attr("href");
            if (IFR.weixin) {
                var c = "http://mp.weixin.qq.com/mp/redirect?url=" + encodeURIComponent(b) + "#wechat_redirect";
                a.attr("href", c)
            }
            return a
        }
    })
})(jQuery, window);
(function(a) {
    a.ifr = a.ifr || {};
    return a.extend(a.ifr, {
        scrollTo: function(b, c, d, e) {
            var f;
            d = d ? d: {};
            if (b.jquery && b.length) {
                b = b.offset().top
            } else if (a(b).length) {
                b = a(b).offset().top
            }
            if (typeof b !== "number") {
                return false
            }
            if (c == "smooth") {
                f = {
                    queue: !1,
                    duration: 800,
                    easing: "easeInOutExpo",
                    complete: e
                }
            }
            if (typeof c === "number") {
                f = c
            }
            if (!f) f = 0;
            a("html,body").animate({
                scrollTop: b - (d.offset ? d.offset: 0)
            },
            f)
        },
        smoothScrollTo: function(a, b, c) {
            this.scrollTo(a, "smooth", b, c)
        },
        scrollToHash: function() {
            if (IFR.url.hashValue) {
                this.scrollTo(a("#" + IFR.url.hashValue))
            }
        }
    })
})($);
(function(a) {
    ns = ns || {};
    ns.defaultUserAvatar = "http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/gravatar.jpg";
    ns.prepareCommenterInfo = function() {
        a.ajax({
            url: "https://sso.ifanr.com/api/v1/user_profile/",
            type: "get",
            xhrFields: {
                withCredentials: true
            },
            localCacheTime: 0
        }).success(function(b) {
            IFR.api("get_user_avatar", {
                data: {
                    sso_id: b.user_id
                },
                success: function(c) {
                    var d = c.data || ns.defaultUserAvatar;
                    var e = b.nickname || b.username;
                    a(".js-login").clsShow();
                    a(".js-not-login").clsHide();
                    a(".js-logout").attr("href", ns.SSO_URL_LOGOUT + "?next_url=" + encodeURIComponent(window.location.href));
                    a(".J_UserIdentity").html(e);
                    a(".js-user-avatar").attr("src", d);
                    a("#login-btn").html(e).attr("href", ns.SSO_URL_MYACCOUNT);
                    IFR.Events.trigger("ifr.ssouser.initialized", {
                        id: b.user_id,
                        name: e,
                        avatarUrl: d
                    })
                }
            })
        }).error(function() {
            a(".js-not-login").clsShow();
            a("#author").val(a.cookie(ns.COMMENTER_NAME));
            a("#email").val(a.cookie(ns.COMMENTER_EMAIL));
            a(".J_LoginButtons a").each(function() {
                var b = a(this);
                b.attr("href", b.attr("href") + "?next=" + encodeURIComponent(IFR.url.href))
            });
            if (!IFR.isMobile) {
                a(".JS_formInFieldLabels label").inFieldLabels()
            }
            IFR.Events.trigger("ifr.ssouser.unauthorized")
        })
    };
    ns.addLoadingConfig = function(a, b) {
        b.cancel_cache = false;
        b.add_dasheng_fields = true;
        var c = a.attr("data-home");
        var d = a.attr("data-post_type-id");
        if (d) {
            b.post_type = d
        }
        var e = a.attr("data-cat-id");
        if (e) b.category_id = e;
        var f = a.attr("data-author-id");
        if (f) b.author_id = f;
        var g = a.attr("data-tag-id");
        if (g) b.tag_id = g;
        return b
    }
})(jQuery);
(function(a) {
    ns.wpPageNowIs = function(b) {
        if (a("body").hasClass(b)) return true;
        return false
    };
    a.fn.opacityToggle = function(a, b, c) {
        return this.animate({
            opacity: "toggle"
        },
        a, b, c)
    };
    a.fn.viewportCenter = function() {
        this.css("position", "absolute");
        this.css("top", (a(w).height() - this.outerHeight()) / 3 + a(w).scrollTop() + "px");
        this.css("left", (a(w).width() - this.outerWidth()) / 2 + a(w).scrollLeft() + "px");
        this.show();
        return this
    }
})(jQuery);
(function(a) {
    window.IFR = window.IFR || {};
    var b = {
        setCache: function(a, c, d) {
            var e = b.parseCacheKey(a, c.data);
            d.timeStamp = IFR.util.unix();
            IFR.setItem(e, d)
        },
        getCache: function(a, c) {
            var d = b.parseCacheKey(a, c.data),
            e = IFR.getItem(d);
            if (e && IFR.util.unix() - c.localCacheTime < e.timeStamp) {
                return e
            }
            return false
        },
        parseCacheKey: function(a, b) {
            var c = a;
            if (typeof b !== "undefined") {
                if (typeof b === "object") {
                    b = IFR.util.objToParam(b)
                }
                c = c + "&" + b
            }
            c = md5(c);
            return c
        }
    };
    var c = function(c, d) {
        if (!c || c == "") return false;
        var e = {
            type: "get",
            localCacheTime: 60,
            debug: 1,
            dataType: "jsonp"
        };
        var f = this,
        g = a.extend({},
        e, d),
        h;
        if (!g.debug && g.localCacheTime) {
            h = b.getCache(c, g);
            if (h) {
                return g.success(h)
            }
        }
        if (typeof g.data === "string") {
            g.data = IFR.util.paramToObj(g.data)
        }
        if (typeof g.data != "undefined" && g.data.cross_domain && g.dataType == "jsonp") {
            return
        }
        a.ajax({
            type: g.type,
            url: IFR.api_url + "?action=" + c,
            cache: false,
            data: a.extend({},
            g.data, IFR.apiNonce),
            dataType: g.dataType,
            success: function(a) {
                if (g.type == "get" && g.localCacheTime) b.setCache(c, g, a);
                g.success && g.success(a)
            },
            error: function(a, b, c) {
                if (g.debug) {
                    console.log("xhr.status: " + a.status);
                    console.log("xhr.statusText: " + a.statusText);
                    console.log("xhr.readyState: " + a.readyState);
                    console.log("xhr.responseText: " + a.responseText);
                    console.log("xhr.responseXML: " + a.responseXML);
                    console.log("textStatus: " + b);
                    console.log("errorThrown: " + c);
                    console.log("xhr.redirect: " + a.redirect);
                    g.error && g.error(a)
                }
                return false
            }
        })
    };
    window.IFR.api = function(a, b) {
        return new c(a, b)
    }
})(jQuery); 
(function(a, b) {
    if (!ns.wpPageNowIs("single-app")) return;
    var c = window.location.href;
    var d = c.substr(c.lastIndexOf("#") + 1);
    if (d === "app-download-buttons") {
        b("#entry-content").remove()
    }
})(window, jQuery); 
(function(a, b) {
    "use strict";
    var c = function(a) {
        this.init(a)
    };
    c.prototype = {
        init: function(b) {
            this.$el = a(b);
            this.cacheDOM();
            this.bindEvents()
        },
        cacheDOM: function() {
            this.$tabs = this.$el.find(".js-tabs");
            this.$tips = this.$el.find(".js-tips");
            this.$tougaoForm = this.$el.find(".js-tougao-form");
            this.$tougaoMail = this.$tougaoForm.find(".js-tougao-submit");
            this.$form = this.$el.find(".js-form");
            this.$formControl = this.$el.find(".form-control");
            this.$select = this.$el.find(".js-select");
            this.$selectOptionInput = this.$el.find("option[data-show-input]")
        },
        bindShareEvents: function() {
            window.wx.onMenuShareAppMessage({
                title: "寻求报道 | 爱范儿",
                desc: "有好产品或项目？马上来爱范儿发布吧！"
            });
            window.wx.onMenuShareTimeline({
                title: "有好产品或项目？马上来爱范儿发布吧！"
            })
        },
        bindEvents: function() {
            var b = this;
            if (window.wx) {
                this.bindShareEvents()
            }
            this.$select.on("change", b.eSelectEvent.bind(b));
            b.$tabs.find(".tab-link").on("click",
            function(c) {
                var d = a(this);
                var e = d.attr("href");
                var f = a(e);
                c.preventDefault();
                d.parent().addClass("active").siblings().removeClass("active");
                f.addClass("active").siblings().removeClass("active");
                if (f.attr("hide-tips") !== undefined) {
                    b.$tips.hide()
                } else {
                    b.$tips.show()
                }
            });
            this.$formControl.on("change keyup",
            function() {
                var b = a(this);
                if (b.hasClass("error")) {
                    b.removeClass("error")
                }
            });
            this.$tougaoMail.on("click", b.eTougaoSubmit.bind(b));
            this.$form.on("submit", b.eSubmit.bind(b))
        },
        eTougaoSubmit: function(a) {
            var b = {};
            var c = this.$tougaoMail.attr("href");
            var d;
            d = this.validateForm(this.$tougaoForm);
            if (!d) {
                a.preventDefault();
                return false
            }
            b = this.getMailString(this.$tougaoForm);
            c = c.replace("{body}", b.content);
            c = c.replace("{subject}", b.subject);
            this.$tougaoMail.attr("href", c);
            $tougaoForm[0].reset()
        },
        eSelectEvent: function(b) {
            var c = a(b.target);
            var d = c.parent();
            var e = c.find("option:selected");
            var f;
            if (!e.attr("data-show-input")) {
                d.find(".js-select-input").removeAttr("required").fadeOut();
                return
            }
            f = d.find(e.data("showInput"));
            f.attr("required", "required").fadeIn()
        },
        setSelectInputValueToOption: function() {
            this.$selectOptionInput.each(function() {
                var b = a(this);
                var c = a(b.data("showInput"));
                var d = c.val();
                if (d) {
                    b.val(d)
                }
            })
        },
        getMailString: function(b) {
            var c = {
                subject: [],
                content: [],
                recipient: "",
                type: ""
            };
            var d = this;
            var e = b.find(".form-label");
            var f = b.data("title");
            var g = b.data("type");
            var h = b.find(".js-input-recipient").val();
            e.each(function() {
                var e = a(this);
                var f = e.text();
                var g = "#" + e.attr("for");
                var h = b.find(g);
                var i = h.val() || h.data("default");
                var j;
                if (h.hasClass("js-subject")) {
                    j = h.data("subjectIndex");
                    c.subject[j] = i
                }
                f = d.formatString(f).replace(/:|：$/, "");
                i = d.formatString(i);
                c.content.push({
                    key: f,
                    value: i
                })
            });
            c.subject = this.formatString(c.subject.join("+"));
            c.content = template("email-report", {
                list: c.content
            });
            c.recipient = this.formatString(h);
            c.type = g;
            if (f) {
                c.subject = f + "：" + c.subject
            }
            return c
        },
        validateForm: function(b) {
            var c = b.find(".form-control");
            var d;
            var e;
            for (e = 0; e < c.length; e++) {
                var f;
                d = a(c[e]);
                f = d.val();
                if (d.attr("required") && f.length <= 0) {
                    d.addClass("error").focus();
                    return false
                }
                if (d.attr("type") === "email" && !/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(f)) {
                    d.addClass("error").focus();
                    return false
                }
            }
            return true
        },
        eSubmit: function(b) {
            var c = {};
            var d = a(b.target);
            var e = d.find(".form-submit");
            var f;
            var g = this;
            b.preventDefault();
            f = this.validateForm(d);
            if (!f) {
                return false
            }
            g.setSelectInputValueToOption();
            g.toggleBtn(e);
            c = this.getMailString(d);
            IFR.api("submit_report", {
                data: c,
                success: function(a) {
                    g.toggleBtn(e);
                    if (a.status === 0) {
                        switch (a.message) {
                        case "error":
                            alert("抱歉，服务器正在开小差，请稍后再尝试。");
                            break;
                        case "invalid":
                            alert("信息填写不完整，请检查后再尝试。");
                            break;
                        default:
                            alert(a.message);
                            break
                        }
                    } else {
                        d[0].reset();
                        alert("提交成功，请耐心等待我们的审核。")
                    }
                },
                error: function() {
                    alert("网络连接失败，请检查网络连接状态后再尝试。");
                    g.toggleBtn(e)
                }
            })
        },
        toggleBtn: function(a) {
            if (a.attr("disabled")) {
                a.removeAttr("disabled");
                a.val("提交")
            } else {
                a.attr("disabled", "disabled");
                a.val("提交中")
            }
        },
        stripTags: function(a) {
            return a.replace(/(<([^>]+)>)/gi, "")
        },
        encodeSpace: function(a) {
            return a.replace(/\s+/g, "%20")
        },
        formatString: function(a) {
            if (!a) {
                return a
            }
            a = this.stripTags(a);
            return a
        }
    };
    b.IfanrReport = c
})(jQuery, window); (function(a, b) {
    var c = function() {};
    c.fn = c.prototype;
    c.fn.loadComments = function() {
        var a = this;
        a.$commentsLoading.show();
        a.fetchCommentEntries(a.appendComments.bind(a))
    };
    c.fn.appendComments = function(a) {
        var c = this;
        c.commentsLength = a.length;
        b.each(a,
        function(a, b) {
            b.postId = c.postId;
            c.generateCommentTree(b)
        });
        c.$commentsList.appendTo(c.$commentsListContainer);
        c.$commentsList = c.$commentsListContainer.find(".js-comments-list");
        c.$commentsLoading.hide();
        IFR.Events.trigger("loaded.comments-list.article", {
            post_id: c.postId
        });
        b(".comment-avatar img").on("error",
        function(a) {
            b(this).attr("src", ns.defaultUserAvatar)
        })
    };
    c.fn.fetchCommentEntries = function(a) {
        var c = this,
        d = null,
        e = null;
        d = {
            post_id: c.postId
        };
        e = b.extend(d, c.commentAjaxConfig);
        IFR.api(c.fetchAction, {
            data: e,
            success: function(b) {
                if (!b.status) return;
                a(b.data)
            }
        })
    };
    c.fn.insertNewComment = function(a) {
        var c = this,
        e = null,
        f = null;
        e = template(c.commentEntryTemplate, a);
        f = b(e).clsShow();
        f.find(".comment-body").append('<div class="comment-submit-success">' + '<i class="icon-ok m-l-5 m-r-2"></i>提交成功</div>');
        c.appendNewComment(f, a);
        f.fadeIn(300,
        function() {
            d("#comment-" + a.comment_id)
        })
    };
    c.fn.onVoteComment = function(a) {
        var c = this,
        d = null,
        e = null,
        f = null;
        d = b(a.currentTarget);
        if (d.hasClass("rated")) return false;
        e = {
            post_id: c.postId,
            comment_id: d.data("id"),
            rating_type: d.data("action")
        };
        f = b.extend(e, c.voteAjaxConfig);
        IFR.api("rating", {
            type: "post",
            data: f,
            success: function(a) {
                if (!a.status) {
                    console.error(a.message);
                    return
                }
                d.addClass("rated checkmark").find("span").text(a.data.rating);
                d.siblings(".js-rating").addClass("rated")
            }
        })
    };
    c.fn.onScrollToRepliedComment = function(a) {
        var c = b(a.currentTarget).attr("href");
        d(c);
        return false
    };
    c.fn.onToggleHiddenComment = function(a) {
        var c = b(a.currentTarget).attr("data-id");
        b("#J_RatingHideCmt-" + c).slideToggle("fast");
        return false
    };
    c.fn.onReplyComment = function(a) {
        var c = this;
        if (!c.$respondFormCmpt.isStateNormal()) return false;
        var d = b(a.currentTarget),
        e = d.data("id"),
        f = d.data("parentid"),
        g = d.data("postid"),
        h = !d.hasClass(".js-reply-comment");
        c.$respondFormCmpt.replyComment({
            commentId: e,
            parentId: f,
            postId: g
        });
        return false
    };
    c.fn.unbindEvents = function() {
        this.$commentsCmpt.off("click", ".comment-at").off("click", ".J_DisplayRatingCmt").off("click", ".js-rating").off("click", ".js-reply-comment");
        return this
    };
    c.fn.bindEvents = function() {
        var a = this;
        a.$commentsCmpt.on("click", ".comment-at", a.onScrollToRepliedComment.bind(a)).on("click", ".J_DisplayRatingCmt", a.onToggleHiddenComment.bind(a)).on("click", ".js-rating", a.onVoteComment.bind(a)).on("click", ".js-reply-comment", a.onReplyComment.bind(a))
    };
    c.fn.appendNewComment = function(a, c) {
        var d = this;
        if (c.comment_parent === "0") {
            d.$commentsList = d.$commentsListContainer.find(".js-comments-list");
            a.appendTo(d.$commentsList);
            return
        }
        var e = c.comment_parent + "-child",
        f = b("." + e),
        g = f.length > 0 ? f.last() : b(".js-comment-" + c.comment_parent);
        a.insertAfter(g);
        a.addClass(e);
        a.addClass("children")
    };
    c.fn.generateCommentTree = function(a) {
        console.error("error: not implemented by the subclass")
    };
    c.fn.init = function(a) {
        this.postId = a.id;
        this.$commentsCmpt = b('[data-cmpt-comments][data-post-id="' + this.postId + '"]');
        if (!this.$commentsCmpt.length) {
            return {
                render: function() {}
            }
        }
        this.$commentsListContainer = this.$commentsCmpt.find(".js-comments-list-container");
        this.$commentsList = b('<ol class="commentlist comments-list js-comments-list" />');
        this.$commentsLoading = this.$commentsCmpt.find(".js-comments-loading");
        this.commentEntryTemplate = null;
        this.fetchAction = a.commentType == "hot" ? "get_hot_comments": "get_comments";
        this.commentAjaxConfig = {
            html_comment_content: 1,
            add_at_depth: 2,
            orderbyreply: 1
        };
        this.voteAjaxConfig = {};
        this.$respondFormCmpt = new ArticleRespondFormComponent;
        this.commentsLength = 0;
        return this
    };
    c.fn.render = function() {
        var a = this;
        a.loadComments();
        a.bindEvents();
        return a
    };
    c.fn.rerender = function() {
        var a = this;
        a.loadComments();
        a.unbindEvents();
        a.bindEvents(false);
        return a
    };
    function d(a) {
        b("html,body").animate({
            scrollTop: b(a).offset().top
        },
        {
            queue: !1,
            duration: 800,
            easing: "easeInOutExpo"
        });
        IFR.util.stopDefault()
    }
    a.ArticleCommentsComponent = c
})(window, jQuery); 
(function(a, b) {
    var c = {
        searchIndex: null,
        algolia: null,
        applicationID: "7TN0U2FL3Q",
        apiKey: "97d5967e87b92827fa8b040bcc4c8581",
        indexName: "prod_ifanrcom"
    };
    c.init = function() {
        this.algolia = this.algolia || algoliasearch(this.applicationID, this.apiKey);
        this.searchIndex = this.searchIndex || this.algolia.initIndex(this.indexName)
    };
    c.init();
    var d = function() {};
    d.fn = d.prototype;
    d.fn.search = function() {
        var a = this,
        b = {
            hitsPerPage: 3,
            page: 0,
            facets: "*",
            attributesToRetrieve: "*"
        };
        c.searchIndex.search(a.postTag, b,
        function(b, c) {
            if (b || !c) {
                return
            }
            var d = c.hits;
            if (!d.length) {
                a.$relatedZone.hide();
                return
            }
            var e = template(a.template, {
                relatedRes: d
            });
            a.$relatedList.html(e)
        })
    };
    d.fn.render = function() {
        var a = this;
        a.search();
        return a
    };
    d.fn.init = function(a) {
        this.postId = a.id;
        this.postTag = a.tag;
        this.template = IFR.env.mobile ? "mobile-entry-related": "desktop-entry-related";
        this.$relatedZone = b('[data-cmpt-related-articles][data-post-id="' + this.postId + '"]');
        this.$relatedList = this.$relatedZone.find(".js-related-list");
        return this
    };
    a.RelatedArticlesComponent = d
})(window, jQuery); 
(function(a, b) {
    var c = {};
    var d = function() {};
    d.fn = d.prototype;
    d.fn.isStateNormal = function() {
        var a = this.$form.attr("data-state") || "normal";
        return a === "normal"
    };
    d.fn.setFormState = function(a) {
        var b = this;
        if (a === "processing") {
            b.$formSubmitBtn.prop("disabled", true).addClass("processing").val("发表中...")
        } else if (a === "normal") {
            b.$formSubmitBtn.prop("disabled", false).removeClass("processing").val("发表评论")
        }
        b.$form.attr("data-state", a)
    };
    d.fn.onSubmitComment = function(a) {
        var c = this;
        if (!c.isStateNormal()) return false;
        c.$processingTip.clsShow().slideDown();
        c.setFormState("processing");
        c.$formContainer.find(".js-cmt-hidden").remove();
        IFR.api("post_comment", {
            type: "post",
            data: c.$form.serialize(),
            success: function(a) {
                if (a.status && a.status === 1) {
                    c.afterSubmitSuccess(a.data);
                    b.cookie(ns.COMMENTER_EMAIL, c.$commenterEmail.val());
                    b.cookie(ns.COMMENTER_NAME, c.$commenterName.val())
                } else {
                    c.showErrorTips(a.message)
                }
            },
            error: function(a) {
                c.showErrorTips(result.message)
            }
        });
        return false
    };
    d.fn.showErrorTips = function(a) {
        var b = this;
        b.$processingTip.clsHide().slideUp();
        b.$errorMsg.clsShow().slideDown().html('<i class="icon-remove"></i> ' + a);
        b.errorMsgDelay ? clearTimeout(b.errorMsgDelay) : null;
        b.errorMsgDelay = setTimeout(function() {
            b.$errorMsg.clsHide().slideUp()
        },
        3e3);
        b.setFormState("normal");
        return false
    };
    d.fn.afterSubmitSuccess = function(a) {
        var b = this;
        b.$processingTip.hide();
        b.$commentContent.val("");
        b.commentsComponent.insertNewComment(a);
        b.resetForm();
        return false
    };
    d.fn.resetForm = function() {
        var a = this,
        b = a.$commentsCmpt.find(".js-wp-temp-form-div");
        if (b.length > 0) {
            a.$formContainer.insertAfter(b);
            b.remove();
            a.$replyTitle.clsHide();
            a.$cancelReply.clsHide();
            a.$formSubmitBtn.val("发表评论")
        }
        a.$serialRepliedParentComment.val("0");
        a.setFormState("normal")
    };
    d.fn.bindEvents = function() {
        var a = this;
        a.$formSubmitBtn.on("click", a.onSubmitComment.bind(a));
        a.$cancelReplyBtn.on("click", a.onCloseReplyForm.bind(a));
        a.$mailNotifyChecked.on("click",
        function() {
            a.$mailNotifyChecked.addClass("hide");
            a.$mailNotifyUnchecked.removeClass("hide");
            a.$mailNotifier.attr("checked", false)
        });
        a.$mailNotifyUnchecked.on("click",
        function() {
            a.$mailNotifyChecked.removeClass("hide");
            a.$mailNotifyUnchecked.addClass("hide");
            a.$mailNotifier.attr("checked", true)
        })
    };
    d.fn.onCloseReplyForm = function(a) {
        var b = this;
        if (!b.isStateNormal()) return false;
        b.resetForm();
        return false
    };
    d.fn.replyComment = function(a) {
        var c = this,
        d = c.$commentsCmpt.find(".js-comment-" + a.commentId),
        e = d.find(".comment-content").first(),
        f = c.$commentsCmpt.find(".js-wp-temp-form-div");
        c.$formSubmitBtn.val("回复");
        if (f.length === 0) {
            f = b('<div class="js-wp-temp-form-div" style="display:none;"></div>');
            f.insertBefore(c.$formContainer)
        }
        c.$formContainer.insertAfter(e);
        c.$serialRepliedPost.val(a.postId);
        c.$serialRepliedParentComment.val(a.parentId);
        c.$replyTitle.clsShow();
        c.$cancelReply.clsShow()
    };
    d.fn.authCheck = function() {
        if (Boolean(IFR.user.id)) {
            return
        }
        this.$formContainer.find(".js-not-login").clsShow()
    };
    d.fn.render = function() {
        var a = this;
        var c = b("input[name=formDisabled]");
        if (c.length > 0 && c.val() === "true") {
            a.submit = function() {
                a.showErrorTips(formDisabled.attr("data-desc"));
                return false
            }
        }
        a.bindEvents();
        a.authCheck();
        return a
    };
    d.fn.init = function(a) {
        this.commentsComponent = a;
        this.$commentsCmpt = this.commentsComponent.$commentsCmpt;
        this.$formContainer = this.$commentsCmpt.find('[data-cmpt-respond-form][data-post-id="' + a.postId + '"]');
        this.$replyTitle = this.$formContainer.find(".js-reply-title");
        this.$cancelReply = this.$formContainer.find(".js-cancel-comment-reply");
        this.$cancelReplyBtn = this.$cancelReply.find(".js-cancel-button");
        this.$form = this.$formContainer.find(".js-respond-form");
        this.$commenterEmail = this.$form.find('input[name="email"]');
        this.$commenterName = this.$form.find('input[name="author"]');
        this.$commentContent = this.$form.find(".js-comment-content");
        this.$formSubmitBtn = this.$form.find(".js-comment-submit");
        this.$processingTip = this.$form.find(".js-comment-processing");
        this.$errorMsg = this.$form.find(".js-error-msg");
        this.errorMsgDelay = null;
        this.$serialRepliedParentComment = this.$form.find('input[name="comment_parent"]');
        this.$serialRepliedPost = this.$form.find('input[name="comment_post_ID"]');
        this.$mailNotifyContainer = this.$formContainer.find(".js-comment-mail-notify");
        this.$mailNotifier = this.$mailNotifyContainer.find(".js-comment-mail-notifier");
        this.$mailNotifyChecked = this.$mailNotifyContainer.find(".js-notify-checked");
        this.$mailNotifyUnchecked = this.$mailNotifyContainer.find(".js-notify-unchecked");
        return this
    };
    a.ArticleRespondFormComponent = d
})(window, jQuery);
(function(a) {
    var b = function(b) {
        a.ajax({
            type: "post",
            url: IFR.api_url + "?action=share_count&post_id=" + b,
            dataType: "json",
            data: IFR.apiNonce,
            success: function(a) {}
        })
    };
    var c = function() {
        var b = a(this);
        var c = b.attr("data-id");
        var d = b.find(".js-like-count");
        var e = JSON.parse(a.cookie("ifanr_dasheng_liked"));
        if (a.isArray(e)) {
            if (a.inArray(c, e) != -1) {
                console.error("already liked");
                b.off("click.ifanrLike");
                return false
            }
        }
        a.ajax({
            type: "post",
            url: IFR.api_url + "?action=like&post_id=" + c,
            dataType: "json",
            data: IFR.apiNonce,
            success: function(e) {
                if (e && e.status) {
                    var f = JSON.parse(a.cookie("ifanr_dasheng_liked"));
                    if (!a.isArray(f)) {
                        f = []
                    }
                    f.push(c);
                    a.unique(f);
                    a.cookie("ifanr_dasheng_liked", JSON.stringify(f), {
                        expires: 7,
                        path: "/"
                    });
                    b.addClass("active");
                    d.text(e.data)
                } else {}
            }
        })
    };
    a("body").on("click.ifanrLike", ".JS_ifanr-plus", c)
})(jQuery);
(function(a) {
    "use strict";
    function b() {
        var b = a('[data-el="share-to-wechat"]');
        if (b.length) {
            var c = "";
            c += '<div data-role="qrcode-area" class="qrcode-area"></div>';
            c += '<div class="share-text">打开微信，点击“发现”，使用“扫一扫”即可将网页分享到我的朋友圈。</div>';
            b.popover({
                html: true,
                content: c,
                trigger: "hover"
            }).on("shown.bs.popover",
            function() {
                var b = a('[data-role="qrcode-area"]');
                a('[data-role="qrcode-area"]').empty();
                a('[data-role="qrcode-area"]').qrcode({
                    width: 128,
                    height: 128,
                    text: a(this).data("post-url")
                });
                a(".popover").addClass("qrcode-popover")
            })
        }
    }
    b();
    IFR.Events.on("reload.weixin.share-items", b)
})(jQuery); 
(function(a, b) {
    var c;
    a("create", "UA-6130036-1", "auto");
    a("require", "linkid", "linkid.js");
    a("require", "displayfeatures");
    if (ns.wpPageNowIs("single-post") || ns.wpPageNowIs("single-data") || ns.wpPageNowIs("single-dasheng")) {
        c = b(".js-post-author-name").text().replace("|", "").replace(/\s/g, "");
        a("set", "dimension1", Boolean(c) ? c: "投稿")
    }
    if (IFR.env.weixin) {
        a("set", "campaignSource", "(wechat)")
    }
    a("send", "pageview")
})(ga, jQuery); 
(function(global, undefined) {
    if (global.RongIMClient) {
        return
    }
    var RongIMEnum = function(a) {
        var b = function() {
            throw "can't Instantiate Enumerations"
        };
        b.setValue = function(a) {
            var c = null;
            b.foreach(function(d) {
                if (d.value == a || d.name == a) {
                    c = b[d.name]
                }
            },
            null);
            return c
        };
        function c(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        }
        var d = b.prototype = {
            constructor: b,
            toString: function() {
                return this.name
            },
            valueOf: function() {
                return this.value
            },
            toJSON: function() {
                return this.name
            }
        };
        b.values = [];
        for (var e in a) {
            var f = c(d);
            f.name = e;
            f.value = a[e];
            b[e] = f;
            b.values.push(f)
        }
        b.foreach = function(a, b) {
            for (var c = 0,
            d = this.values.length; c < d; c++) {
                a.call(b, this.values[c])
            }
        };
        return b
    };
    var MD5 = function(a) {
        function b(a) {
            for (var b = 0,
            c = ""; 3 >= b; b++) c += "0123456789abcdef".charAt(a >> 8 * b + 4 & 15) + "0123456789abcdef".charAt(a >> 8 * b & 15);
            return c
        }
        function c(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }
        function d(a, b, d, e, f, g) {
            a = c(c(b, a), c(e, g));
            return c(a << f | a >>> 32 - f, d)
        }
        function e(a, b, c, e, f, g, h) {
            return d(b & c | ~b & e, a, b, f, g, h)
        }
        function f(a, b, c, e, f, g, h) {
            return d(b & e | c & ~e, a, b, f, g, h)
        }
        function g(a, b, c, e, f, g, h) {
            return d(c ^ (b | ~e), a, b, f, g, h)
        }
        a = function(a) {
            for (var b = (a.length + 8 >> 6) + 1, c = Array(16 * b), d = 0; d < 16 * b; d++) c[d] = 0;
            for (d = 0; d < a.length; d++) c[d >> 2] |= a.charCodeAt(d) << d % 4 * 8;
            c[d >> 2] |= 128 << d % 4 * 8;
            c[16 * b - 2] = 8 * a.length;
            return c
        } (a);
        for (var h = 1732584193,
        i = -271733879,
        j = -1732584194,
        k = 271733878,
        l = 0; l < a.length; l += 16) var m = h,
        n = i,
        o = j,
        p = k,
        h = e(h, i, j, k, a[l + 0], 7, -680876936),
        k = e(k, h, i, j, a[l + 1], 12, -389564586),
        j = e(j, k, h, i, a[l + 2], 17, 606105819),
        i = e(i, j, k, h, a[l + 3], 22, -1044525330),
        h = e(h, i, j, k, a[l + 4], 7, -176418897),
        k = e(k, h, i, j, a[l + 5], 12, 1200080426),
        j = e(j, k, h, i, a[l + 6], 17, -1473231341),
        i = e(i, j, k, h, a[l + 7], 22, -45705983),
        h = e(h, i, j, k, a[l + 8], 7, 1770035416),
        k = e(k, h, i, j, a[l + 9], 12, -1958414417),
        j = e(j, k, h, i, a[l + 10], 17, -42063),
        i = e(i, j, k, h, a[l + 11], 22, -1990404162),
        h = e(h, i, j, k, a[l + 12], 7, 1804603682),
        k = e(k, h, i, j, a[l + 13], 12, -40341101),
        j = e(j, k, h, i, a[l + 14], 17, -1502002290),
        i = e(i, j, k, h, a[l + 15], 22, 1236535329),
        h = f(h, i, j, k, a[l + 1], 5, -165796510),
        k = f(k, h, i, j, a[l + 6], 9, -1069501632),
        j = f(j, k, h, i, a[l + 11], 14, 643717713),
        i = f(i, j, k, h, a[l + 0], 20, -373897302),
        h = f(h, i, j, k, a[l + 5], 5, -701558691),
        k = f(k, h, i, j, a[l + 10], 9, 38016083),
        j = f(j, k, h, i, a[l + 15], 14, -660478335),
        i = f(i, j, k, h, a[l + 4], 20, -405537848),
        h = f(h, i, j, k, a[l + 9], 5, 568446438),
        k = f(k, h, i, j, a[l + 14], 9, -1019803690),
        j = f(j, k, h, i, a[l + 3], 14, -187363961),
        i = f(i, j, k, h, a[l + 8], 20, 1163531501),
        h = f(h, i, j, k, a[l + 13], 5, -1444681467),
        k = f(k, h, i, j, a[l + 2], 9, -51403784),
        j = f(j, k, h, i, a[l + 7], 14, 1735328473),
        i = f(i, j, k, h, a[l + 12], 20, -1926607734),
        h = d(i ^ j ^ k, h, i, a[l + 5], 4, -378558),
        k = d(h ^ i ^ j, k, h, a[l + 8], 11, -2022574463),
        j = d(k ^ h ^ i, j, k, a[l + 11], 16, 1839030562),
        i = d(j ^ k ^ h, i, j, a[l + 14], 23, -35309556),
        h = d(i ^ j ^ k, h, i, a[l + 1], 4, -1530992060),
        k = d(h ^ i ^ j, k, h, a[l + 4], 11, 1272893353),
        j = d(k ^ h ^ i, j, k, a[l + 7], 16, -155497632),
        i = d(j ^ k ^ h, i, j, a[l + 10], 23, -1094730640),
        h = d(i ^ j ^ k, h, i, a[l + 13], 4, 681279174),
        k = d(h ^ i ^ j, k, h, a[l + 0], 11, -358537222),
        j = d(k ^ h ^ i, j, k, a[l + 3], 16, -722521979),
        i = d(j ^ k ^ h, i, j, a[l + 6], 23, 76029189),
        h = d(i ^ j ^ k, h, i, a[l + 9], 4, -640364487),
        k = d(h ^ i ^ j, k, h, a[l + 12], 11, -421815835),
        j = d(k ^ h ^ i, j, k, a[l + 15], 16, 530742520),
        i = d(j ^ k ^ h, i, j, a[l + 2], 23, -995338651),
        h = g(h, i, j, k, a[l + 0], 6, -198630844),
        k = g(k, h, i, j, a[l + 7], 10, 1126891415),
        j = g(j, k, h, i, a[l + 14], 15, -1416354905),
        i = g(i, j, k, h, a[l + 5], 21, -57434055),
        h = g(h, i, j, k, a[l + 12], 6, 1700485571),
        k = g(k, h, i, j, a[l + 3], 10, -1894986606),
        j = g(j, k, h, i, a[l + 10], 15, -1051523),
        i = g(i, j, k, h, a[l + 1], 21, -2054922799),
        h = g(h, i, j, k, a[l + 8], 6, 1873313359),
        k = g(k, h, i, j, a[l + 15], 10, -30611744),
        j = g(j, k, h, i, a[l + 6], 15, -1560198380),
        i = g(i, j, k, h, a[l + 13], 21, 1309151649),
        h = g(h, i, j, k, a[l + 4], 6, -145523070),
        k = g(k, h, i, j, a[l + 11], 10, -1120210379),
        j = g(j, k, h, i, a[l + 2], 15, 718787259),
        i = g(i, j, k, h, a[l + 9], 21, -343485551),
        h = c(h, m),
        i = c(i, n),
        j = c(j, o),
        k = c(k, p);
        return b(h) + b(i) + b(j) + b(k)
    };
    var io = {
        util: {
            load: function(a) {
                if (document.readyState == "complete" || io.util._pageLoaded) {
                    return a()
                }
                if (global.attachEvent) {
                    global.attachEvent("onload", a)
                } else {
                    global.addEventListener("load", a, false)
                }
            },
            inherit: function(a, b) {
                for (var c in b.prototype) {
                    a.prototype[c] = b.prototype[c]
                }
            },
            _extends: function(a, b) {
                a.prototype = new b;
                a.prototype.constructor = a
            },
            indexOf: function(a, b, c) {
                for (var d = a.length,
                e = c < 0 ? Math.max(0, +c) : c || 0; e < d; e++) {
                    if (a[e] == b) {
                        return e
                    }
                }
                return - 1
            },
            isArray: function(a) {
                return Object.prototype.toString.call(a) == "[object Array]"
            },
            forEach: function() {
                if ([].forEach) {
                    return function(a, b) { [].forEach.call(a, b)
                    }
                } else {
                    return function(a, b) {
                        for (var c = 0,
                        d = a.length; c < d; c++) {
                            b.call(a, a[c], c, a)
                        }
                    }
                }
            } (),
            each: function(a, b) {
                if (this.isArray(a)) {
                    this.forEach(x, b)
                } else {
                    for (var c in a) {
                        if (a.hasOwnProperty(c)) {
                            b.call(a, c, a[c])
                        }
                    }
                }
            },
            merge: function(a, b) {
                for (var c in b) {
                    if (b.hasOwnProperty(c)) {
                        a[c] = b[c]
                    }
                }
            },
            arrayFrom: function(a) {
                if (Object.prototype.toString.call(a) == "[object ArrayBuffer]") {
                    var b = new Int8Array(a);
                    return [].slice.call(b)
                }
                return a
            },
            arrayFromInput: function(a) {
                if (Object.prototype.toString.call(a) == "[object ArrayBuffer]") {
                    var b = new Uint8Array(a);
                    return b
                }
                return a
            },
            remove: function(a, b) {
                for (var c = 0,
                d = a.length; c < d; c++) {
                    if (b(a[c])) {
                        return a.splice(c, 1)[0]
                    }
                }
                return null
            },
            int64ToTimestamp: function(a, b) {
                if (a.low === undefined) {
                    return a
                }
                var c = a.low;
                if (c < 0) {
                    c += 4294967295 + 1
                }
                c = c.toString(16);
                var d = parseInt(a.high.toString(16) + "00000000".replace(new RegExp("0{" + c.length + "}$"), c), 16);
                if (b) {
                    return new Date(d)
                }
                return d
            },
            ios: /iphone|ipad/i.test(navigator.userAgent),
            android: /android/i.test(navigator.userAgent)
        }
    },
    func = function() {
        var a = document.createElement("script"),
        b = document.getElementsByTagName("head")[0];
        io._TransportType = "websocket";
        if ("WebSocket" in global && "ArrayBuffer" in global && WebSocket.prototype.CLOSED === 3 && !global.WEB_SOCKET_FORCE_FLASH && !global.WEB_XHR_POLLING) {
            a.src = "http://res.websdk.rongcloud.cn/protobuf-fanwei.min.js"
        } else if (!/opera/i.test(navigator.userAgent) && !global.WEB_XHR_POLLING &&
        function() {
            if ("navigator" in global && "plugins" in navigator && navigator.plugins["Shockwave Flash"]) {
                return !! navigator.plugins["Shockwave Flash"].description
            }
            if ("ActiveXObject" in global) {
                try {
                    return !! new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                } catch(a) {}
            }
            return false
        } ()) {
            a.src = "http://res.websdk.rongcloud.cn/swfobject-0.2.min.js"
        } else {
            io._TransportType = "xhr-polling";
            a.src = "http://res.websdk.rongcloud.cn/xhrpolling-0.2.min.js"
        }
        b.appendChild(a);
        io.util.cookieHelper = function() {
            var a, b;
            if (window.FORCE_LOCAL_STORAGE === true) {
                b = localStorage.setItem;
                localStorage.setItem = function(a, c) {
                    if (localStorage.length == 15) {
                        localStorage.removeItem(localStorage.key(0))
                    }
                    b.call(localStorage, a, c)
                };
                a = localStorage
            } else {
                a = {
                    getItem: function(a) {
                        a = a.replace(/\|/, "\\|");
                        var b = document.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
                        if (b != null) {
                            return b[2]
                        }
                        return null
                    },
                    setItem: function(a, b) {
                        var c = new Date;
                        c.setTime(c.getTime() + 15 * 24 * 3600 * 1e3);
                        document.cookie = a + "=" + escape(b) + ";path=/;expires=" + c.toGMTString()
                    },
                    removeItem: function(a) {
                        if (this.getItem(a)) {
                            document.cookie = a + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT"
                        }
                    },
                    clear: function() {
                        var a = document.cookie.match(/[^ =;]+(?=\=)/g);
                        if (a) {
                            for (var b = a.length; b--;) document.cookie = a[b] + "=0;path=/;expires=" + new Date(0).toUTCString()
                        }
                    }
                }
            }
            return a
        } ();
        io.messageIdHandler = function() {
            var a = 0,
            b = io._TransportType === "xhr-polling",
            c = function() {
                a = +(io.util.cookieHelper.getItem("msgId") || io.util.cookieHelper.setItem("msgId", 0) || 0)
            };
            b && c();
            return {
                messageIdPlus: function(d) {
                    b && c();
                    if (a >= 65535) {
                        d();
                        return false
                    }
                    a++;
                    b && io.util.cookieHelper.setItem("msgId", a);
                    return a
                },
                clearMessageId: function() {
                    a = 0;
                    b && io.util.cookieHelper.setItem("msgId", a)
                },
                getMessageId: function() {
                    b && c();
                    return a
                }
            }
        } ()
    };
    if (document.readyState == "interactive" || document.readyState == "complete") {
        func()
    } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded",
        function() {
            document.removeEventListener("DOMContentLoaded", arguments.callee, false);
            func()
        },
        false)
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange",
        function() {
            if (document.readyState === "interactive" || document.readyState === "complete") {
                document.detachEvent("onreadystatechange", arguments.callee);
                func()
            }
        })
    }
    var binaryHelper = global.RongBinaryHelper = {
        init: function(a) {
            var b = a.length;
            for (var c = 0; c < b; c++) {
                a[c] *= 1;
                if (a[c] < 0) {
                    a[c] += 256
                }
            }
            return a
        },
        writeUTF: function(a, b) {
            var c = [],
            d = 0;
            for (var e = 0,
            f = a.length; e < f; e++) {
                var g = a.charCodeAt(e);
                if (g >= 0 && g <= 127) {
                    d += 1;
                    c.push(g)
                } else if (g >= 128 && g <= 2047) {
                    d += 2;
                    c.push(192 | 31 & g >> 6);
                    c.push(128 | 63 & g)
                } else if (g >= 2048 && g <= 65535) {
                    d += 3;
                    c.push(224 | 15 & g >> 12);
                    c.push(128 | 63 & g >> 6);
                    c.push(128 | 63 & g)
                }
            }
            for (e = 0, f = c.length; e < f; e++) {
                if (c[e] > 255) {
                    c[e] &= 255
                }
            }
            if (b) {
                return c
            }
            if (d <= 255) {
                return [0, d].concat(c)
            } else {
                return [d >> 8, d & 255].concat(c)
            }
        },
        readUTF: function(a) {
            if (Object.prototype.toString.call(a) == "[object String]") {
                return a
            }
            var b = "";
            for (var c = 0,
            d = a.length; c < d; c++) {
                var e = a[c];
                if (e < 0) {
                    e += 256
                }
                var f = e.toString(2),
                g = f.match(/^1+?(?=0)/);
                if (g && f.length == 8) {
                    var h = g[0].length,
                    i = f.slice(7 - h);
                    for (var j = 1; j < h; j++) {
                        i += a[j + c].toString(2).slice(2)
                    }
                    b += String.fromCharCode(parseInt(i, 2));
                    c += h - 1
                } else {
                    b += String.fromCharCode(e)
                }
            }
            return b
        },
        convertStream: function(a) {
            if (a instanceof RongIMStreamUtil) {
                return a
            } else {
                return new RongIMStreamUtil(a)
            }
        },
        toMQttString: function(a) {
            return this.writeUTF(a)
        }
    };
    var RongIMStreamUtil = function(a) {
        this.position = 0;
        this.writen = 0;
        var b = a,
        c = this,
        d = b.length;
        check = function() {
            return c.position >= d
        };
        this.readInt = function() {
            if (check()) {
                return - 1
            }
            var a = "";
            for (var c = 0; c < 4; c++) {
                a += b[this.position++].toString(16)
            }
            return parseInt(a, 16)
        };
        this.readUTF = function() {
            if (check()) {
                return - 1
            }
            var a = this.readByte() << 8 | this.readByte();
            return binaryHelper.readUTF(b.subarray(this.position, this.position += a))
        };
        this.readByte = function() {
            if (check()) {
                return - 1
            }
            var a = b[this.position++];
            return a
        };
        this.read = function(a) {
            if (a) {
                return b.subarray(this.position, d)
            } else {
                return this.readByte()
            }
        };
        this.write = function(a) {
            var c = a;
            if (Object.prototype.toString.call(c).toLowerCase() == "[object array]") { [].push.apply(b, c)
            } else {
                if ( + c == c) {
                    if (c > 255) {
                        c &= 255
                    }
                    b.push(c);
                    this.writen++
                }
            }
            return c
        };
        this.writeUTF = function(a) {
            var c = binaryHelper.writeUTF(a); [].push.apply(b, c);
            this.writen += c.length
        };
        this.toComplements = function() {
            var a = b;
            for (var c = 0,
            d = a.length; c < d; c++) {
                if (a[c] > 128) {
                    a[c] -= 256
                }
            }
            return a
        };
        this.getBytesArray = function(a) {
            if (a) {
                return this.toComplements()
            }
            return b
        }
    };
    var Qos = RongIMEnum({
        AT_MOST_ONCE: 0,
        AT_LEAST_ONCE: 1,
        EXACTLY_ONCE: 2,
        DEFAULT: 3
    }),
    Type = RongIMEnum({
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        QUERY: 5,
        QUERYACK: 6,
        QUERYCON: 7,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14
    }),
    DisconnectionStatus = RongIMEnum({
        RECONNECT: 0,
        OTHER_DEVICE_LOGIN: 1,
        CLOSURE: 2,
        UNKNOWN_ERROR: 3,
        LOGOUT: 4,
        BLOCK: 5
    }),
    ConnectionState = RongIMEnum({
        ACCEPTED: 0,
        UNACCEPTABLE_PROTOCOL_VERSION: 1,
        IDENTIFIER_REJECTED: 2,
        SERVER_UNAVAILABLE: 3,
        TOKEN_INCORRECT: 4,
        NOT_AUTHORIZED: 5,
        REDIRECT: 6,
        PACKAGE_ERROR: 7,
        APP_BLOCK_OR_DELETE: 8,
        BLOCK: 9,
        TOKEN_EXPIRE: 10,
        DEVICE_ERROR: 11
    });
    function Message(a) {
        var b, c, d = 0;
        if (a instanceof Header) {
            b = a
        } else {
            b = new Header(a, false, Qos.AT_MOST_ONCE, false)
        }
        this.read = function(a, b) {
            this.readMessage(a, b)
        };
        this.write = function(a) {
            var b = binaryHelper.convertStream(a);
            c = this.getHeaderFlag();
            b.write(c);
            this.writeMessage(b);
            return b
        };
        this.getHeaderFlag = function() {
            return b.encode()
        };
        this.getLengthSize = function() {
            return d
        };
        this.toBytes = function() {
            return this.write([]).getBytesArray()
        };
        this.setRetained = function(a) {
            b.retain = a
        };
        this.isRetained = function() {
            return b.retain
        };
        this.setQos = function(a) {
            b.qos = a instanceof Qos ? a: Qos.setValue(a)
        };
        this.getQos = function() {
            return b.qos
        };
        this.setDup = function(a) {
            b.dup = a
        };
        this.isDup = function() {
            return b.dup
        };
        this.getType = function() {
            return b.type
        };
        this.messageLength = function() {
            return 0
        };
        this.writeMessage = function(a) {};
        this.readMessage = function(a) {};
        this.init = function(a) {
            var b, c;
            for (c in a) {
                if (!a.hasOwnProperty(c)) continue;
                b = c.replace(/^\w/,
                function(a) {
                    var b = a.charCodeAt(0);
                    return "set" + (b >= 97 ? String.fromCharCode(b & ~32) : a)
                });
                if (b in this) {
                    this[b](a[c])
                }
            }
        }
    }
    Message._name = "Message";
    function Header(a, b, c, d) {
        this.type = null;
        this.retain = false;
        this.qos = Qos.AT_LEAST_ONCE;
        this.dup = false;
        if (a && +a == a && arguments.length == 1) {
            this.retain = (a & 1) > 0;
            this.qos = Qos.setValue((a & 6) >> 1);
            this.dup = (a & 8) > 0;
            this.type = Type.setValue(a >> 4 & 15)
        } else {
            this.type = Type.setValue(a);
            this.retain = b;
            this.qos = Qos.setValue(c);
            this.dup = d
        }
        this.getType = function() {
            return this.type
        };
        this.encode = function() {
            var a = this.type << 4;
            a |= this.retain ? 1 : 0;
            a |= this.qos << 1;
            a |= this.dup ? 8 : 0;
            return a
        };
        this.toString = function() {
            return "Header [type=" + this.type + ",retain=" + this.retain + ",qos=" + this.qos + ",dup=" + this.dup + "]"
        }
    }
    function ConnectMessage() {
        var a = 12,
        b = "RCloud",
        c = 3,
        d, e, f, g, h, i, j, k, l, m, n, o;
        switch (arguments.length) {
        case 0:
            Message.call(this, Type.CONNECT);
            break;
        case 1:
            Message.call(this, arguments[0]);
            break;
        case 3:
            Message.call(this, Type.CONNECT);
            if (!arguments[0] || arguments[0].length > 64) {
                throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: " + arguments[0])
            }
            d = arguments[0];
            h = arguments[1];
            e = arguments[2];
            break
        }
        this.messageLength = function() {
            var b = binaryHelper.toMQttString(d).length;
            b += binaryHelper.toMQttString(i).length;
            b += binaryHelper.toMQttString(j).length;
            b += binaryHelper.toMQttString(f).length;
            b += binaryHelper.toMQttString(g).length;
            return b + a
        };
        this.readMessage = function(a) {
            var p = binaryHelper.convertStream(a);
            b = p.readUTF();
            c = p.readByte();
            var q = p.readByte();
            m = (q & 128) > 0;
            n = (q & 64) > 0;
            l = (q & 32) > 0;
            k = q >> 3 & 3;
            o = (q & 4) > 0;
            h = (q & 32) > 0;
            e = p.read() * 256 + p.read();
            d = p.readUTF();
            if (o) {
                i = p.readUTF();
                j = p.readUTF()
            }
            if (m) {
                try {
                    f = p.readUTF()
                } catch(r) {}
            }
            if (n) {
                try {
                    g = p.readUTF()
                } catch(r) {}
            }
            return p
        };
        this.writeMessage = function(a) {
            var p = binaryHelper.convertStream(a);
            p.writeUTF(b);
            p.write(c);
            var q = h ? 2 : 0;
            q |= o ? 4 : 0;
            q |= k ? k >> 3 : 0;
            q |= l ? 32 : 0;
            q |= n ? 64 : 0;
            q |= m ? 128 : 0;
            p.write(q);
            p.writeChar(e);
            p.writeUTF(d);
            if (o) {
                p.writeUTF(i);
                p.writeUTF(j)
            }
            if (m) {
                p.writeUTF(f)
            }
            if (n) {
                p.writeUTF(g)
            }
            return p
        }
    }
    ConnectMessage._name = "ConnectMessage";
    io.util._extends(ConnectMessage, Message);
    function ConnAckMessage() {
        var a, b, c = 2;
        switch (arguments.length) {
        case 0:
            Message.call(this, Type.CONNACK);
            break;
        case 1:
            if (arguments[0] instanceof Header) {
                Message.call(this, arguments[0])
            } else {
                if (arguments[0] instanceof ConnectionState) {
                    Message.call(this, Type.CONNACK);
                    if (arguments[0] == null) {
                        throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null")
                    }
                    a = arguments[0]
                }
            }
        }
        this.messageLength = function() {
            var a = c;
            if (b) {
                a += binaryHelper.toMQttString(b).length
            }
            return a
        };
        this.readMessage = function(a, b) {
            var d = binaryHelper.convertStream(a);
            d.read();
            var e = +d.read();
            if (e >= 0 && e <= 9) {
                this.setStatus(e)
            } else {
                throw new Error("Unsupported CONNACK code:" + e)
            }
            if (b > c) {
                this.setUserId(d.readUTF())
            }
        };
        this.writeMessage = function(c) {
            var d = binaryHelper.convertStream(c);
            d.write(128);
            switch ( + a) {
            case 0:
            case 1:
            case 2:
            case 5:
            case 6:
                d.write( + a);
                break;
            case 3:
            case 4:
                d.write(3);
                break;
            default:
                throw new Error("Unsupported CONNACK code:" + a)
            }
            if (b) {
                d.writeUTF(b)
            }
            return d
        };
        this.getStatus = function() {
            return a
        };
        this.setStatus = function(b) {
            a = b instanceof ConnectionState ? b: ConnectionState.setValue(b)
        };
        this.setUserId = function(a) {
            b = a
        };
        this.getUserId = function() {
            return b
        }
    }
    ConnAckMessage._name = "ConnAckMessage";
    io.util._extends(ConnAckMessage, Message);
    function DisconnectMessage(a) {
        var b;
        this.MESSAGE_LENGTH = 2;
        if (a instanceof Header) {
            Message.call(this, a)
        } else {
            Message.call(this, Type.DISCONNECT);
            if (a instanceof DisconnectionStatus) {
                b = a
            }
        }
        this.messageLength = function() {
            return this.MESSAGE_LENGTH
        };
        this.readMessage = function(a) {
            var b = binaryHelper.convertStream(a);
            b.read();
            var c = +b.read();
            if (c >= 0 && c <= 5) {
                this.setStatus(c)
            } else {
                throw new Error("Unsupported CONNACK code:" + c)
            }
        };
        this.writeMessage = function(a) {
            var c = binaryHelper.convertStream(a);
            c.write(0);
            if ( + b >= 1 && +b <= 3) {
                c.write( + b - 1)
            } else {
                throw new Error("Unsupported CONNACK code:" + b)
            }
        };
        this.setStatus = function(a) {
            b = a instanceof DisconnectionStatus ? a: DisconnectionStatus.setValue(a)
        };
        this.getStatus = function() {
            return b
        }
    }
    DisconnectMessage._name = "DisconnectMessage";
    io.util._extends(DisconnectMessage, Message);
    function PingReqMessage(a) {
        if (a && a instanceof Header) {
            Message.call(this, a)
        } else {
            Message.call(this, Type.PINGREQ)
        }
    }
    PingReqMessage._name = "PingReqMessage";
    io.util._extends(PingReqMessage, Message);
    function PingRespMessage(a) {
        if (a && a instanceof Header) {
            Message.call(this, a)
        } else {
            Message.call(this, Type.PINGRESP)
        }
    }
    PingRespMessage._name = "PingRespMessage";
    io.util._extends(PingRespMessage, Message);
    function RetryableMessage(a) {
        var b;
        Message.call(this, a);
        this.messageLength = function() {
            return 2
        };
        this.writeMessage = function(a) {
            var b = binaryHelper.convertStream(a),
            c = this.getMessageId(),
            d = c & 255,
            e = (c & 65280) >> 8;
            b.write(e);
            b.write(d);
            return b
        };
        this.readMessage = function(a) {
            var b = binaryHelper.convertStream(a),
            c = b.read() * 256 + b.read();
            this.setMessageId(parseInt(c, 10))
        };
        this.setMessageId = function(a) {
            b = a
        };
        this.getMessageId = function() {
            return b
        }
    }
    RetryableMessage._name = "RetryableMessage";
    io.util._extends(RetryableMessage, Message);
    function PubAckMessage(a) {
        var b, c = 2,
        d = 0;
        if (a instanceof Header) {
            RetryableMessage.call(this, a)
        } else {
            RetryableMessage.call(this, Type.PUBACK);
            this.setMessageId(a)
        }
        this.messageLength = function() {
            return c
        };
        this.writeMessage = function(a) {
            var b = binaryHelper.convertStream(a);
            PubAckMessage.prototype.writeMessage.call(this, b)
        };
        this.readMessage = function(a) {
            var c = binaryHelper.convertStream(a);
            PubAckMessage.prototype.readMessage.call(this, c);
            d = c.readInt();
            b = c.read() * 256 + c.read()
        };
        this.setStatus = function(a) {
            b = a
        };
        this.getStatus = function() {
            return b
        };
        this.getDate = function() {
            return d
        }
    }
    PubAckMessage._name = "PubAckMessage";
    io.util._extends(PubAckMessage, RetryableMessage);
    function PublishMessage(a, b, c) {
        var d, e, f, g;
        if (arguments.length == 1 && a instanceof Header) {
            RetryableMessage.call(this, a)
        } else {
            if (arguments.length == 3) {
                RetryableMessage.call(this, Type.PUBLISH);
                d = a;
                f = c;
                e = typeof b == "string" ? binaryHelper.toMQttString(b) : b
            }
        }
        this.messageLength = function() {
            var a = 10;
            a += binaryHelper.toMQttString(d).length;
            a += binaryHelper.toMQttString(f).length;
            a += e.length;
            return a
        };
        this.writeMessage = function(a) {
            var b = binaryHelper.convertStream(a);
            b.writeUTF(d);
            b.writeUTF(f);
            PublishMessage.prototype.writeMessage.apply(this, arguments);
            b.write(e)
        };
        this.readMessage = function(a, b) {
            var c = 6,
            h = binaryHelper.convertStream(a);
            g = h.readInt();
            d = h.readUTF();
            c += binaryHelper.toMQttString(d).length;
            f = h.readUTF();
            c += binaryHelper.toMQttString(f).length;
            PublishMessage.prototype.readMessage.apply(this, arguments);
            e = new Array(b - c);
            e = h.read(e)
        };
        this.setTopic = function(a) {
            d = a
        };
        this.setData = function(a) {
            e = a
        };
        this.setTargetId = function(a) {
            f = a
        };
        this.setDate = function(a) {
            g = a
        };
        this.setData = function(a) {
            e = a
        };
        this.getTopic = function() {
            return d
        };
        this.getData = function() {
            return e
        };
        this.getTargetId = function() {
            return f
        };
        this.getDate = function() {
            return g
        }
    }
    PublishMessage._name = "PublishMessage";
    io.util._extends(PublishMessage, RetryableMessage);
    function QueryMessage(a, b, c) {
        var d, e, f;
        if (a instanceof Header) {
            RetryableMessage.call(this, a)
        } else {
            if (arguments.length == 3) {
                RetryableMessage.call(this, Type.QUERY);
                e = typeof b == "string" ? binaryHelper.toMQttString(b) : b;
                d = a;
                f = c
            }
        }
        this.messageLength = function() {
            var a = 0;
            a += binaryHelper.toMQttString(d).length;
            a += binaryHelper.toMQttString(f).length;
            a += 2;
            a += e.length;
            return a
        };
        this.writeMessage = function(a) {
            var b = binaryHelper.convertStream(a);
            b.writeUTF(d);
            b.writeUTF(f);
            this.constructor.prototype.writeMessage.call(this, b);
            b.write(e)
        };
        this.readMessage = function(a, b) {
            var c = 0,
            g = binaryHelper.convertStream(a);
            d = g.readUTF();
            f = g.readUTF();
            c += binaryHelper.toMQttString(d).length;
            c += binaryHelper.toMQttString(f).length;
            this.constructor.prototype.readMessage.apply(this, arguments);
            c += 2;
            e = new Array(b - c);
            g.read(e)
        };
        this.setTopic = function(a) {
            d = a
        };
        this.setData = function(a) {
            e = a
        };
        this.setTargetId = function(a) {
            f = a
        };
        this.getTopic = function() {
            return d
        };
        this.getData = function() {
            return e
        };
        this.getTargetId = function() {
            return f
        }
    }
    QueryMessage._name = "QueryMessage";
    io.util._extends(QueryMessage, RetryableMessage);
    function QueryConMessage(a) {
        if (a instanceof Header) {
            RetryableMessage.call(this, a)
        } else {
            RetryableMessage.call(this, Type.QUERYCON);
            this.setMessageId(a)
        }
    }
    QueryConMessage._name = "QueryConMessage";
    io.util._extends(QueryConMessage, RetryableMessage);
    function QueryAckMessage(a) {
        var b, c, d;
        RetryableMessage.call(this, a);
        this.readMessage = function(a, e) {
            var f = binaryHelper.convertStream(a);
            QueryAckMessage.prototype.readMessage.call(this, f);
            d = f.readInt();
            c = f.read() * 256 + f.read();
            if (e > 0) {
                b = new Array(e - 8);
                b = f.read(b)
            }
        };
        this.getStatus = function() {
            return c
        };
        this.getDate = function() {
            return d
        };
        this.setDate = function(a) {
            d = a
        };
        this.setStatus = function(a) {
            c = a
        };
        this.setData = function(a) {
            b = a
        };
        this.getData = function() {
            return b
        }
    }
    QueryAckMessage._name = "QueryAckMessage";
    io.util._extends(QueryAckMessage, RetryableMessage);
    function MessageOutputStream(a) {
        var b = binaryHelper.convertStream(a);
        this.writeMessage = function(a) {
            if (a instanceof Message) {
                a.write(b)
            }
        }
    }
    function MessageInputStream(a, b) {
        var c, d, e = null;
        if (!b) {
            var f = binaryHelper.convertStream(a);
            c = f.readByte()
        } else {
            c = a["headerCode"]
        }
        d = new Header(c);
        this.readMessage = function() {
            switch ( + d.getType()) {
            case 2:
                e = new ConnAckMessage(d);
                break;
            case 3:
                e = new PublishMessage(d);
                break;
            case 4:
                e = new PubAckMessage(d);
                break;
            case 5:
                e = new QueryMessage(d);
                break;
            case 6:
                e = new QueryAckMessage(d);
                break;
            case 7:
                e = new QueryConMessage(d);
                break;
            case 9:
            case 11:
            case 13:
                e = new PingRespMessage(d);
                break;
            case 1:
                e = new ConnectMessage(d);
                break;
            case 8:
            case 10:
            case 12:
                e = new PingReqMessage(d);
                break;
            case 14:
                e = new DisconnectMessage(d);
                break;
            default:
                throw new Error("No support for deserializing " + d.getType() + " messages")
            }
            if (b) {
                e.init(a)
            } else {
                e.read(f, a.length - 1)
            }
            return e
        }
    }
    io.connect = function(a, b) {
        var c = new this.createServer;
        this.getInstance = function() {
            return c
        };
        c.connect(a, b);
        return c
    }; (function() {
        io.util.load(function() {
            io.util._pageLoaded = true;
            if (!global.JSON) {
                global.JSON = {
                    parse: function(sJSON) {
                        return eval("(" + sJSON + ")")
                    },
                    stringify: function() {
                        var a = Object.prototype.toString;
                        var b = Array.isArray ||
                        function(b) {
                            return a.call(b) === "[object Array]"
                        };
                        var c = {
                            '"': '\\"',
                            "\\": "\\\\",
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "	": "\\t"
                        };
                        var d = function(a) {
                            return c[a] || "\\u" + (a.charCodeAt(0) + 65536).toString(16).substr(1)
                        };
                        var e = new RegExp('[\\"' + unescape("%00-%1F%u2028%u2029") + "]", "g");
                        return function f(c) {
                            if (c == null) {
                                return "null"
                            } else if (typeof c === "number") {
                                return isFinite(c) ? c.toString() : "null"
                            } else if (typeof c === "boolean") {
                                return c.toString()
                            } else if (typeof c === "object") {
                                if (typeof c.toJSON === "function") {
                                    return f(c.toJSON())
                                } else if (b(c)) {
                                    var g = "[";
                                    for (var h = 0,
                                    i = c.length; h < i; h++) g += (h ? ", ": "") + f(c[h]);
                                    return g + "]"
                                } else if (a.call(c) === "[object Object]") {
                                    var j = [];
                                    for (var k in c) {
                                        if (c.hasOwnProperty(k)) j.push(f(k) + ": " + f(c[k]))
                                    }
                                    return "{" + j.join(", ") + "}"
                                }
                            }
                            return '"' + c.toString().replace(e, d) + '"'
                        }
                    } ()
                }
            }
        })
    })(); (function() {
        var a = io.Transport = function(a, b) {
            this.base = a;
            this.options = {
                timeout: 3e4
            };
            io.util.merge(this.options, b)
        };
        a.prototype.send = function() {
            throw new Error("No rewrite send() method")
        };
        a.prototype.connect = function() {
            throw new Error("No rewrite connect() method")
        };
        a.prototype.disconnect = function() {
            throw new Error("No rewrite disconnect() method")
        };
        a.prototype._encode = function(a) {
            var b = "?messageid=" + a.getMessageId() + "&header=" + a.getHeaderFlag() + "&sessionid=" + io.util.cookieHelper.getItem(Client.Endpoint.userId + "sId");
            if (!/(PubAckMessage|QueryConMessage)/.test(a.constructor._name)) {
                b += "&topic=" + a.getTopic() + "&targetid=" + (a.getTargetId() || "")
            }
            return {
                url: b,
                data: "getData" in a ? a.getData() : ""
            }
        };
        a.prototype._decode = function(a) {
            if (!a) {
                return
            }
            if (io.util.isArray(a)) {
                this._onMessage(new MessageInputStream(a).readMessage())
            } else if (Object.prototype.toString.call(a) == "[object ArrayBuffer]") {
                this._onMessage(new MessageInputStream(io.util.arrayFromInput(a)).readMessage())
            }
        };
        a.prototype._onData = function(a, b) {
            if (!a || a == "lost params") {
                return
            }
            if (b) {
                io.util.cookieHelper.getItem(Client.Endpoint.userId + "sId") || io.util.cookieHelper.setItem(Client.Endpoint.userId + "sId", b)
            }
            var c = this,
            d = JSON.parse(a);
            if (!io.util.isArray(d)) {
                d = [d]
            }
            io.util.forEach(d,
            function(a) {
                c._onMessage(new MessageInputStream(a, true).readMessage())
            })
        };
        a.prototype._onMessage = function(a) {
            this.base._onMessage(a)
        };
        a.prototype._onConnect = function() {
            this.connected = true;
            this.connecting = false;
            this.base._onConnect()
        };
        a.prototype._onDisconnect = function() {
            this.connecting = false;
            this.connected = false;
            this.base._onDisconnect()
        }
    })(); (function() {
        var a = io.Transport.websocket = function() {
            io.Transport.apply(this, arguments)
        };
        io.util.inherit(a, io.Transport);
        a.prototype.type = "websocket";
        a.prototype.connect = function(a) {
            var b = this;
            this.socket = new WebSocket("ws://" + a);
            this.socket.binaryType = "arraybuffer";
            this.socket.onopen = function() {
                b._onConnect()
            };
            this.socket.onmessage = function(a) {
                if (typeof a.data == "string") {
                    b._decode(a.data.split(","))
                } else {
                    b._decode(a.data)
                }
            };
            this.socket.onclose = function() {
                b._onClose()
            };
            this.socket.onerror = function(a) {
                if (!a.data) {
                    return
                }
                console.log(a.data);
                if (bridge._client && bridge._client.reconnectObj.onError) {
                    bridge._client.reconnectObj.onError(RongIMClient.ConnectErrorStatus.setValue(2));
                    delete bridge._client.reconnectObj.onError
                } else {
                    throw new Error("network is unavailable or unknown error")
                }
            };
            return this
        };
        a.prototype.send = function(a) {
            var b = new RongIMStreamUtil([]),
            c = new MessageOutputStream(b);
            c.writeMessage(a);
            var d = b.getBytesArray(true);
            if (this.socket.readyState == 1) {
                if (global.Int8Array && !global.WEB_SOCKET_FORCE_FLASH) {
                    var e = new Int8Array(d);
                    this.socket.send(e.buffer)
                } else {
                    this.socket.send(d + "")
                }
            }
            return this
        };
        a.prototype.disconnect = function() {
            if (this.socket) {
                this.socket.close()
            }
            return this
        };
        a.prototype._onClose = function() {
            this._onDisconnect();
            return this
        };
        a.check = function() {
            return "WebSocket" in global && WebSocket.prototype && WebSocket.prototype.send && typeof WebSocket !== "undefined"
        };
        a.XDomainCheck = function() {
            return true
        }
    })(); (function() {
        var a = new Function,
        b = function() {
            if (! ("XMLHttpRequest" in global)) return false;
            var a = new XMLHttpRequest;
            return a.withCredentials !== undefined
        } (),
        c = function() {
            if ("XDomainRequest" in global) return new window["XDomainRequest"];
            if ("XMLHttpRequest" in global && b) return new XMLHttpRequest;
            return false
        },
        d = io.Transport.XHR = function() {
            io.Transport.apply(this, arguments)
        };
        io.util.inherit(d, io.Transport);
        d.prototype.connect = function(a) {
            var b = io.util.cookieHelper.getItem(Client.Endpoint.userId + "sId"),
            c = this;
            if (b) {
                io.getInstance().currentURL = a;
                setTimeout(function() {
                    c.onopen('{"status":0,"userId":"' + Client.Endpoint.userId + '","headerCode":32,"messageId":0,"sessionid":"' + b + '"}');
                    c._onConnect()
                },
                500);
                return this
            }
            this._get(a);
            return this
        };
        d.prototype._checkSend = function(a) {
            var b = this._encode(a);
            this._send(b)
        };
        d.prototype.send = function(a) {
            this._checkSend(a);
            return this
        };
        d.prototype._send = function(b) {
            var c = this;
            this._sendXhr = this._request(Client.Endpoint.host + "/websocket" + b.url, "POST");
            if ("onload" in this._sendXhr) {
                this._sendXhr.onload = function() {
                    this.onload = a;
                    c._onData(this.responseText)
                };
                this._sendXhr.onerror = function() {
                    this.onerror = a
                }
            } else {
                this._sendXhr.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        this.onreadystatechange = a;
                        if (/^(202|200)$/.test(this.status)) {
                            c._onData(this.responseText)
                        }
                    }
                }
            }
            this._sendXhr.send(JSON.stringify(b.data))
        };
        d.prototype.disconnect = function() {
            this._onDisconnect();
            return this
        };
        d.prototype._onDisconnect = function(b) {
            if (this._xhr) {
                this._xhr.onreadystatechange = this._xhr.onload = a;
                this._xhr.abort();
                this._xhr = null
            }
            if (this._sendXhr) {
                this._sendXhr.onreadystatechange = this._sendXhr.onload = a;
                this._sendXhr.abort();
                this._sendXhr = null
            }
            if (b === undefined) {
                io.Transport.prototype._onDisconnect.call(this)
            }
        };
        d.prototype._request = function(a, b, d) {
            var e = c();
            if (d) e.multipart = true;
            e.open(b || "GET", "http://" + a);
            if (b == "POST" && "setRequestHeader" in e) {
                e.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8")
            }
            return e
        };
        d.check = function() {
            try {
                if (c()) return true
            } catch(a) {}
            return false
        };
        d.XDomainCheck = function() {
            return d.check()
        };
        d.request = c
    })(); (function() {
        var a = new Function,
        b = io.Transport["xhr-polling"] = function() {
            io.Transport.XHR.apply(this, arguments)
        };
        io.util.inherit(b, io.Transport.XHR);
        b.prototype.type = "xhr-polling";
        b.prototype.connect = function(a) {
            if (io.util.ios || io.util.android) {
                var b = this;
                io.util.load(function() {
                    setTimeout(function() {
                        io.Transport.XHR.prototype.connect.call(b, a)
                    },
                    10)
                })
            } else {
                io.Transport.XHR.prototype.connect.call(this, a)
            }
        };
        b.prototype.onopen = function(a, b) {
            this._onData(a, b);
            if (/"headerCode":-32,/.test(a)) {
                return
            }
            this._get(Client.Endpoint.host + "/pullmsg.js?sessionid=" + io.util.cookieHelper.getItem(Client.Endpoint.userId + "sId"), true)
        };
        var c = {
            200 : function(a, b, c) {
                var d = b.match(/"sessionid":"\S+?(?=")/);
                a.onopen(b, d ? d[0].slice(13) : void 0);
                c || a._onConnect()
            },
            400 : function(a) {
                io.util.cookieHelper.removeItem(Client.Endpoint.userId + "sId");
                a._onDisconnect(true);
                io.getInstance().connecting = false;
                io.getInstance().connected = false;
                io.getInstance().connect(null, null)
            }
        };
        b.prototype._get = function(b, d) {
            var e = this;
            this._xhr = this._request(b, "GET");
            if ("onload" in this._xhr) {
                this._xhr.onload = function() {
                    this.onload = a;
                    if (this.responseText == "lost params") {
                        c["400"](e)
                    } else {
                        c["200"](e, this.responseText, d)
                    }
                };
                this._xhr.onerror = function() {
                    e._onDisconnect()
                }
            } else {
                this._xhr.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        this.onreadystatechange = a;
                        if (/^(200|202)$/.test(this.status)) {
                            c["200"](e, this.responseText, d)
                        } else if (/^(400|403)$/.test(this.status)) {
                            c["400"](e)
                        } else {
                            e._onDisconnect()
                        }
                    }
                }
            }
            this._xhr.send()
        };
        b.check = function() {
            return io.Transport.XHR.check()
        };
        b.XDomainCheck = function() {
            return io.Transport.XHR.XDomainCheck()
        }
    })(); (function() {
        var a = io.createServer = function() {
            this.options = {
                token: "",
                transports: ["websocket", "xhr-polling"]
            };
            this.connected = false;
            this.connecting = false;
            this._events = {};
            this.currentURL = "";
            this.transport = this.getTransport(io._TransportType);
            if (this.transport === null) {
                throw new Error("the channel was not supported")
            }
        };
        a.prototype.getTransport = function(a) {
            var b = 0,
            c = a || this.options.transports[b];
            if (io.Transport[c] && io.Transport[c].check() && io.Transport[c].XDomainCheck()) {
                return new io.Transport[c](this, {})
            }
            return null
        };
        a.prototype.connect = function(a, b) {
            if (this.transport && arguments.length == 2) {
                if (a) {
                    this.on("connect", b ||
                    function() {})
                }
                if (this.connecting || this.connected) {
                    this.disconnect()
                }
                this.connecting = true;
                if (a) {
                    this.currentURL = a
                }
                this.transport.connect(this.currentURL)
            }
            return this
        };
        a.prototype.send = function(a) {
            if (!this.transport || !this.connected) {
                return this._queue(a)
            }
            this.transport.send(a)
        };
        a.prototype.disconnect = function(a) {
            if (a) {
                this.fire("StatusChanged", a)
            }
            this.transport.disconnect();
            return this
        };
        a.prototype.reconnect = function() {
            if (this.currentURL) {
                return this.connect(null, null)
            } else {
                throw new Error("reconnect:no have URL")
            }
        };
        a.prototype.fire = function(a, b) {
            if (a in this._events) {
                for (var c = 0,
                d = this._events[a].length; c < d; c++) {
                    this._events[a][c](b)
                }
            }
            return this
        };
        a.prototype.removeEvent = function(a, b) {
            if (a in this._events) {
                for (var c = 0,
                d = this._events[a].length; c < d; c++) {
                    if (this._events[a][c] == b) {
                        this._events[a].splice(c, 1)
                    }
                }
            }
            return this
        };
        a.prototype._queue = function(a) {
            if (! ("_queueStack" in this)) {
                this._queueStack = []
            }
            this._queueStack.push(a);
            return this
        };
        a.prototype._doQueue = function() {
            if (! ("_queueStack" in this) || !this._queueStack.length) {
                return this
            }
            for (var a = 0,
            b = this._queueStack.length; a < b; a++) {
                this.transport.send(this._queueStack[a])
            }
            this._queueStack = [];
            return this
        };
        a.prototype._onConnect = function() {
            this.connected = true;
            this.connecting = false;
            io.util.cookieHelper.setItem("rongSDK", io._TransportType);
            this.fire("connect")
        };
        a.prototype._onMessage = function(a) {
            this.fire("message", a)
        };
        a.prototype._onDisconnect = function() {
            var a = this.connected;
            this.connected = false;
            this.connecting = false;
            this._queueStack = [];
            if (a) {
                this.fire("disconnect")
            }
        };
        a.prototype.on = function(a, b) {
            if (! (typeof b == "function" && a)) {
                return this
            }
            if (a in this._events) {
                io.util.indexOf(this._events, b) == -1 && this._events[a].push(b)
            } else {
                this._events[a] = [b]
            }
            return this
        }
    })();
    function MessageCallback(a) {
        var b, c = this;
        this.timeout = null;
        this.onError = null;
        if (a && typeof a == "number") {
            b = a
        } else {
            b = 6e3;
            this.onError = a
        }
        this.resumeTimer = function() {
            if (b > 0 && !this.timeout) {
                this.timeout = setTimeout(function() {
                    c.readTimeOut(true)
                },
                b)
            }
        };
        this.pauseTimer = function() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null
            }
        };
        this.readTimeOut = function(a) {
            if (a && this.onError) {
                this.onError(RongIMClient.callback.ErrorCode.TIMEOUT)
            } else {
                this.pauseTimer()
            }
        }
    }
    function MessageHandler(a) {
        if (!_ReceiveMessageListener) {
            throw new Error("please set onReceiveMessageListener")
        }
        var b = {},
        c = _ReceiveMessageListener.onReceived,
        d = null;
        this.putCallback = function(a, c, d) {
            var e = {
                Callback: a,
                Message: d
            };
            e.Callback.resumeTimer();
            b[c] = e
        };
        this.setConnectCallback = function(b) {
            if (b) {
                d = new ConnectAck(b.onSuccess, b.onError, a);
                d.resumeTimer()
            }
        };
        this.onReceived = function(b) {
            var d, e, f;
            if (b.constructor._name != "PublishMessage") {
                d = b;
                io.util.cookieHelper.setItem(a.userId, io.util.int64ToTimestamp(d.dataTime))
            } else {
                if (b.getTopic() == "s_ntf") {
                    d = Modules.NotifyMsg.decode(b.getData());
                    a.syncTime(d.type, io.util.int64ToTimestamp(d.time));
                    return
                } else if (b.getTopic() == "s_msg") {
                    d = Modules.DownStreamMessage.decode(b.getData());
                    io.util.cookieHelper.setItem(a.userId, io.util.int64ToTimestamp(d.dataTime))
                } else {
                    if (bridge._client.sdkVer && bridge._client.sdkVer == "1.0.0") {
                        return
                    }
                    d = Modules.UpStreamMessage.decode(b.getData());
                    var g = b.getTopic();
                    var h = g.substr(0, 2);
                    d.groupId = b.getTargetId();
                    if (h == "pp") {
                        d.type = 1
                    } else if (h == "pd") {
                        d.type = 2
                    } else if (h == "pg") {
                        d.type = 3
                    } else if (h == "chat") {
                        d.type = 4
                    }
                    d.fromUserId = a.userId;
                    d.dataTime = Date.parse(new Date)
                }
                if (!d) {
                    return
                }
            }
            e = messageParser(d, c);
            if (e === null) {
                return
            }
            f = RongIMClient.getInstance().getConversationList().get(e.getConversationType(), e.getTargetId());
            if (!f) {
                f = RongIMClient.getInstance().createConversation(e.getConversationType(), e.getTargetId(), "")
            }
            if (e.getCount()) {
                f.getConversationType() != 0 && f.setUnreadMessageCount(f.getUnreadMessageCount() + 1)
            }
            f.setReceivedTime((new Date).getTime());
            f.setReceivedStatus(new RongIMClient.ReceivedStatus);
            f.setSenderUserId(e.getSenderUserId());
            f.setObjectName(e.getObjectName());
            f.setNotificationStatus(RongIMClient.ConversationNotificationStatus.DO_NOT_DISTURB);
            f.setLatestMessageId(e.getMessageId());
            f.setLatestMessage(e);
            f.setTop();
            c(e)
        };
        this.handleMessage = function(c) {
            if (!c) {
                return
            }
            switch (c.constructor._name) {
            case "ConnAckMessage":
                d.process(c.getStatus(), c.getUserId());
                break;
            case "PublishMessage":
                if (c.getQos() != 0) {
                    a.channel.writeAndFlush(new PubAckMessage(c.getMessageId()))
                }
                a.handler.onReceived(c);
                break;
            case "QueryAckMessage":
                if (c.getQos() != 0) {
                    a.channel.writeAndFlush(new QueryConMessage(c.getMessageId()))
                }
                var e = b[c.getMessageId()];
                if (e) {
                    e.Callback.process(c.getStatus(), c.getData(), c.getDate(), e.Message);
                    delete b[c.getMessageId()]
                }
                break;
            case "PubAckMessage":
                var f = b[c.getMessageId()];
                if (f) {
                    f.Callback.process(c.getStatus() || 0, c.getDate(), f.Message);
                    delete b[c.getMessageId()]
                }
                break;
            case "PingRespMessage":
                a.pauseTimer();
                break;
            case "DisconnectMessage":
                a.channel.disconnect(c.getStatus());
                break;
            default:
            }
        }
    }
    var mapping = {
        1 : 4,
        2 : 2,
        3 : 3,
        4 : 0,
        5 : 1,
        6 : 5
    },
    typeMapping = {
        "RC:TxtMsg": "TextMessage",
        "RC:ImgMsg": "ImageMessage",
        "RC:VcMsg": "VoiceMessage",
        "RC:ImgTextMsg": "RichContentMessage",
        "RC:LBSMsg": "LocationMessage"
    },
    sysNtf = {
        "RC:InfoNtf": "InformationNotificationMessage",
        "RC:ContactNtf": "ContactNotificationMessage",
        "RC:ProfileNtf": "ProfileNotificationMessage",
        "RC:CmdNtf": "CommandNotificationMessage",
        "RC:DizNtf": "DiscussionNotificationMessage"
    },
    _ReceiveMessageListener,
    _ConnectionStatusListener;
    function messageParser(a, b) {
        var c, d;
        d = a.content;
        var e, f = a.classname;
        try {
            if (global["WEB_XHR_POLLING"]) {
                e = JSON.parse(binaryHelper.readUTF(d.offset ? io.util.arrayFrom(d.buffer).slice(d.offset, d.limit) : d))
            } else {
                e = JSON.parse(binaryHelper.readUTF(d.offset ? io.util.arrayFromInput(d.buffer).subarray(d.offset, d.limit) : d))
            }
        } catch(g) {
            return null
        }
        if ("Expression" in RongIMClient && "RC:TxtMsg" == f && e.content) {
            e.content = e.content.replace(/[\uf000-\uf700]/g,
            function(a) {
                return RongIMClient.Expression.calcUTF(a) || a
            })
        }
        if (f in typeMapping) {
            c = new RongIMClient[typeMapping[f]](e)
        } else if (f in sysNtf) {
            c = new RongIMClient[sysNtf[f]](e)
        } else if (f in registerMessageTypeMapping) {
            c = new RongIMClient[registerMessageTypeMapping[f]](e)
        } else {
            c = new RongIMClient.UnknownMessage(e, f)
        }
        c.setSentTime(io.util.int64ToTimestamp(a.dataTime));
        c.setSenderUserId(a.fromUserId);
        c.setConversationType(RongIMClient.ConversationType.setValue(mapping[a.type]));
        if (a.fromUserId == bridge._client.userId) {
            c.setTargetId(a.groupId)
        } else {
            c.setTargetId(/^[234]$/.test(a.type || a.getType()) ? a.groupId: c.getSenderUserId())
        }
        if (a.fromUserId == bridge._client.userId) {
            c.setMessageDirection(RongIMClient.MessageDirection.SEND)
        } else {
            c.setMessageDirection(RongIMClient.MessageDirection.RECEIVE)
        }
        c.setReceivedTime((new Date).getTime());
        c.setMessageId(c.getConversationType() + "_" + ~~ (Math.random() * 16777215));
        c.setReceivedStatus(new RongIMClient.ReceivedStatus);
        return c
    }
    function Channel(a, b, c) {
        var d = a.host + "/websocket?appId=" + c.appId + "&token=" + encodeURIComponent(c.token) + "&sdkVer=" + c.sdkVer + "&apiVer=" + c.apiVer;
        if (RongIMClient.PCClient) {
            d += "&platform=PCClient"
        }
        this.socket = io.connect(d, b);
        if (typeof _ConnectionStatusListener == "object" && "onChanged" in _ConnectionStatusListener) {
            this.socket.on("StatusChanged",
            function(a) {
                if (a instanceof DisconnectionStatus) {
                    _ConnectionStatusListener.onChanged(RongIMClient.ConnectionStatus.setValue(a + 2));
                    c.clearHeartbeat();
                    return
                }
                _ConnectionStatusListener.onChanged(RongIMClient.ConnectionStatus.setValue(a))
            })
        } else {
            throw new Error("setConnectStatusListener:Parameter format is incorrect")
        }
        this.writeAndFlush = function(a) {
            if (this.isWritable()) {
                this.socket.send(a)
            } else {
                this.reconnect({
                    onSuccess: function() {
                        io.getInstance().send(a)
                    },
                    onError: function() {
                        throw new Error("reconnect fail")
                    }
                })
            }
        };
        this.reconnect = function(a) {
            io.messageIdHandler.clearMessageId();
            this.socket = this.socket.reconnect();
            if (a) {
                c.reconnectObj = a
            }
        };
        this.disconnect = function(a) {
            this.socket.disconnect(a)
        };
        this.isWritable = function() {
            return io.getInstance().connected || io.getInstance().connecting
        };
        this.socket.on("message", c.handler.handleMessage);
        this.socket.on("disconnect",
        function() {
            c.channel.socket.fire("StatusChanged", 4)
        })
    }
    function callbackMapping(a, b) {
        switch (b) {
        case "GetUserInfoOutput":
            var c = new RongIMClient.UserInfo;
            c.setUserId(a.userId);
            c.setUserName(a.userName);
            c.setPortraitUri(a.userPortrait);
            return c;
        case "GetQNupTokenOutput":
            return {
                deadline:
                io.util.int64ToTimestamp(a.deadline),
                token: a.token
            };
        case "GetQNdownloadUrlOutput":
            return {
                downloadUrl:
                a.downloadUrl
            };
        case "CreateDiscussionOutput":
            return a.id;
        case "ChannelInfoOutput":
            var d = new RongIMClient.Discussion;
            d.setCreatorId(a.adminUserId);
            d.setId(a.channelId);
            d.setMemberIdList(a.firstTenUserIds);
            d.setName(a.channelName);
            d.setOpen(RongIMClient.DiscussionInviteStatus.setValue(a.openStatus));
            return d;
        case "GroupHashOutput":
            return a.result;
        case "QueryBlackListOutput":
            return a.userIds;
        default:
            return a
        }
    }
    function PublishCallback(a, b) {
        MessageCallback.call(this, b);
        this.process = function(c, d, e) {
            this.readTimeOut();
            if (c == 0) {
                if (e) {
                    e.setSentStatus(RongIMClient.SentStatus.RECEIVED)
                }
                a()
            } else {
                b(RongIMClient.SendErrorStatus.setValue(c))
            }
        };
        this.readTimeOut = function(a) {
            PublishCallback.prototype.readTimeOut.call(this, a)
        }
    }
    io.util._extends(PublishCallback, MessageCallback);
    function QueryCallback(a, b) {
        MessageCallback.call(this, b);
        this.process = function(c, d, e, f) {
            this.readTimeOut();
            if (f && d && c == 0) {
                try {
                    d = callbackMapping(Modules[f].decode(d), f)
                } catch(g) {
                    b(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR);
                    return
                }
                if ("GetUserInfoOutput" == f) {
                    userInfoMapping[d.getUserId()] = d
                }
                a(d)
            } else {
                c > 0 ? b(c) : a(c)
            }
        };
        this.readTimeOut = function(a) {
            QueryCallback.prototype.readTimeOut.call(this, a)
        }
    }
    io.util._extends(QueryCallback, MessageCallback);
    function ConnectAck(a, b, c) {
        MessageCallback.call(this, b);
        this.process = function(d, f) {
            this.readTimeOut();
            if (d == 0) {
                var g = io.util.cookieHelper.getItem("navi\\w+?");
                var h = document.cookie.match(new RegExp("(^| )(navi\\w+?)=.*"));
                var i = "";
                if (h && h[2]) {
                    i = h[2]
                }
                var j = unescape(g).split(",");
                if (!j[1]) {
                    g = unescape(g) + f;
                    io.util.cookieHelper.setItem(i, g)
                }
                c.userId = f;
                if (!RongIMClient.isNotPullMsg) {
                    c.syncTime()
                }
                if (c.reconnectObj.onSuccess) {
                    c.reconnectObj.onSuccess(f);
                    delete c.reconnectObj.onSuccess
                } else {
                    a(f)
                }
                io.getInstance().fire("StatusChanged", 0);
                io.getInstance()._doQueue()
            } else if (d == 6) {
                Client.getServerEndpoint(c.token, c.appId,
                function() {
                    c.clearHeartbeat();
                    __init.call(e,
                    function() {
                        io._TransportType == "websocket" && c.keepLive()
                    });
                    c.channel.socket.fire("StatusChanged", 2)
                },
                b, false)
            } else {
                if (c.reconnectObj.onError) {
                    c.reconnectObj.onError(RongIMClient.ConnectErrorStatus.setValue(d));
                    delete c.reconnectObj.onError
                } else {
                    b(RongIMClient.ConnectErrorStatus.setValue(d))
                }
            }
        };
        this.readTimeOut = function(a) {
            ConnectAck.prototype.readTimeOut.call(this, a)
        }
    }
    io.util._extends(ConnectAck, MessageCallback);
    var userInfoMapping = {};
    function __init(a) {
        this.channel = new Channel(Client.Endpoint, a, this)
    }
    function Client(a, b) {
        var c = 1e5,
        d = this;
        this.timeout_ = 0;
        this.appId = b;
        this.token = a;
        this.sdkVer = "1.1.1";
        this.apiVer = Math.floor(Math.random() * 1e6);
        this.channel = null;
        this.handler = null;
        this.userId = "";
        this.reconnectObj = {};
        this.heartbeat = 0;
        this.chatroomId = "";
        this.resumeTimer = function() {
            if (!this.timeout_) {
                this.timeout_ = setTimeout(function() {
                    if (!d.timeout_) {
                        return
                    }
                    try {
                        d.channel.disconnect()
                    } catch(a) {}
                    clearTimeout(d.timeout_);
                    d.timeout_ = 0;
                    d.channel.reconnect();
                    d.channel.socket.fire("StatusChanged", 5)
                },
                c)
            }
        };
        this.pauseTimer = function() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
                this.timeout_ = 0
            }
        };
        this.connect = function(a) {
            if (Client.Endpoint.host) {
                if (io._TransportType == "websocket") {
                    if (!global.WebSocket) {
                        a.onError(RongIMClient.ConnectErrorStatus.setValue(1));
                        return
                    }
                    "loadFlashPolicyFile" in WebSocket && WebSocket.loadFlashPolicyFile()
                }
                this.handler = new MessageHandler(this);
                this.handler.setConnectCallback(a);
                this.channel = new Channel(Client.Endpoint,
                function() {
                    io._TransportType == "websocket" && d.keepLive()
                },
                this);
                this.channel.socket.fire("StatusChanged", 1)
            } else {
                a.onError(RongIMClient.ConnectErrorStatus.setValue(5))
            }
        };
        this.keepLive = function() {
            if (this.heartbeat > 0) {
                clearInterval(this.heartbeat)
            }
            this.heartbeat = setInterval(function() {
                d.resumeTimer();
                d.channel.writeAndFlush(new PingReqMessage);
                console.log("keep live pingReqMessage sending appId " + d.appId)
            },
            18e4)
        };
        this.clearHeartbeat = function() {
            clearInterval(this.heartbeat);
            this.heartbeat = 0;
            this.pauseTimer()
        };
        this.publishMessage = function(a, b, c, d, e) {
            var f = io.messageIdHandler.messageIdPlus(this.channel.reconnect);
            if (!f) {
                return
            }
            var g = new PublishMessage(a, b, c);
            g.setMessageId(f);
            if (d) {
                g.setQos(Qos.AT_LEAST_ONCE);
                this.handler.putCallback(new PublishCallback(d.onSuccess, d.onError), g.getMessageId(), e)
            } else {
                g.setQos(Qos.AT_MOST_ONCE)
            }
            this.channel.writeAndFlush(g)
        };
        this.queryMessage = function(a, b, c, d, e, f) {
            if (a == "userInf") {
                if (userInfoMapping[c]) {
                    e.onSuccess(userInfoMapping[c]);
                    return
                }
            }
            var g = io.messageIdHandler.messageIdPlus(this.channel.reconnect);
            if (!g) {
                return
            }
            var h = new QueryMessage(a, b, c);
            h.setMessageId(g);
            h.setQos(d);
            this.handler.putCallback(new QueryCallback(e.onSuccess, e.onError), h.getMessageId(), f);
            this.channel.writeAndFlush(h)
        };
        var e = [];
        e.state = "complete";
        function f() {
            var a = false;
            if (arguments.length == 1) {
                a = true
            }
            var b, c, g, h, i = e.shift();
            if (i == undefined) {
                return
            }
            e.state = "pending";
            if (i.type != 2) {
                b = io.util.cookieHelper.getItem(d.userId) || 0;
                c = new Modules.SyncRequestMsg;
                c.setIspolling(false);
                c.setIsweb(a);
                g = "pullMsg";
                h = d.userId
            } else {
                b = io.util.cookieHelper.getItem(d.userId + "CST") || 0;
                c = new Modules.ChrmPullMsg;
                c.setCount(0);
                g = "chrmPull";
                if (d.chatroomId === "") {
                    throw new Error("syncTime:Received messages of chatroom but was not init")
                }
                h = d.chatroomId
            }
            if (i.pulltime <= b) {
                e.state = "complete";
                f();
                return
            }
            c.setSyncTime(b);
            d.queryMessage(g, io.util.arrayFrom(c.toArrayBuffer()), h, Qos.AT_LEAST_ONCE, {
                onSuccess: function(a) {
                    var b = io.util.int64ToTimestamp(a.syncTime),
                    c = d.userId;
                    if (g == "chrmPull") {
                        c += "CST"
                    }
                    io.util.cookieHelper.setItem(c, b);
                    var h = a.list;
                    for (var i = 0,
                    j = h.length; i < j; i++) {
                        bridge._client.handler.onReceived(h[i])
                    }
                    e.state = "complete";
                    f()
                },
                onError: function() {
                    e.state = "complete";
                    f()
                }
            },
            "DownStreamMessages")
        }
        this.syncTime = function(a, b) {
            e.push({
                type: a,
                pulltime: b
            });
            if (e.length == 1 && e.state == "complete") {
                if (arguments.length == 0 && !RongIMClient.isSyncOfflineMsg) {
                    f(true)
                } else {
                    f()
                }
            }
        }
    }
    Client.connect = function(a, b, c) {
        var d = io.util.cookieHelper.getItem("appId");
        if (d && d != a) {
            io.util.cookieHelper.clear();
            io.util.cookieHelper.setItem("appId", a)
        }
        var e = new Client(b, a);
        Client.getServerEndpoint(b, a,
        function() {
            e.connect(c)
        },
        c.onError, true);
        return e
    };
    Client.getServerEndpoint = function(a, b, c, d, e) {
        if (e) {
            var f = MD5(a).slice(8, 16),
            g = io.util.cookieHelper.getItem("navi\\w+?"),
            h = io.util.cookieHelper.getItem("navi" + f);
            if (g == h && h !== null && io.util.cookieHelper.getItem("rongSDK") == io._TransportType) {
                var i = unescape(g).split(",");
                setTimeout(function() {
                    RongBinaryHelper.__host = Client.Endpoint.host = i[0];
                    Client.Endpoint.userId = i[1];
                    c()
                },
                500);
                return
            }
        }
        var j = {
            "navUrl-Debug": "http://119.254.111.49:9100/",
            "navUrl-Release": "http://nav.cn.ronghub.com/"
        },
        k = document.createElement("script");
        k.src = j["navUrl-Release"] + (io._TransportType == "xhr-polling" ? "cometnavi.js": "navi.js") + "?appId=" + b + "&token=" + encodeURIComponent(a) + "&" + "callBack=getServerEndpoint&t=" + (new Date).getTime();
        document.body.appendChild(k);
        k.onerror = function() {
            d(RongIMClient.ConnectErrorStatus.setValue(4))
        };
        if ("onload" in k) {
            k.onload = c
        } else {
            k.onreadystatechange = function() {
                k.readyState == "loaded" && c()
            }
        }
    };
    Client.Endpoint = {};
    global.getServerEndpoint = function(a) {
        RongBinaryHelper.__host = Client.Endpoint.host = a["server"];
        Client.Endpoint.userId = a.userId;
        var b = document.cookie.match(new RegExp("(^| )navi\\w+?=([^;]*)(;|$)"));
        b !== null && io.util.cookieHelper.removeItem(b[0].split("=")[0].replace(/^\s/, ""));
        io.util.cookieHelper.setItem("navi" + MD5(bridge._client.token).slice(8, 16), a["server"] + "," + (a.userId || ""))
    };
    var _topic = ["invtDiz", "crDiz", "qnUrl", "userInf", "dizInf", "userInf", "joinGrp", "quitDiz", "exitGrp", "evctDiz", ["chatMsg", "pcMsgP", "pdMsgP", "pgMsgP", "ppMsgP"], "pdOpen", "rename", "uGcmpr", "qnTkn", "destroyChrm", "createChrm", "exitChrm", "queryChrm", "joinChrm", "pGrps", "addBlack", "rmBlack", "getBlack", "blackStat", "addRelation", "qryRelation", "delRelation"];
    var bridge = function(a, b, c) {
        bridge._client = Client.connect(a, b, c);
        this.setListener = function(a) {
            if (typeof a == "object") {
                if (typeof a.onChanged == "function") {
                    _ConnectionStatusListener = a
                } else if (typeof a.onReceived == "function") {
                    _ReceiveMessageListener = a
                }
            }
        };
        this.reConnect = function(a) {
            bridge._client.channel.reconnect(a)
        };
        this.disConnect = function() {
            bridge._client.clearHeartbeat();
            bridge._client.channel.disconnect()
        };
        this.queryMsg = function(a, b, c, d, e) {
            if (typeof a != "string") {
                a = _topic[a]
            }
            bridge._client.queryMessage(a, b, c, Qos.AT_MOST_ONCE, d, e)
        };
        this.pubMsg = function(a, b, c, d, e) {
            bridge._client.publishMessage(_topic[10][a], b, c, d, e)
        }
    };
    var _func = function() {
        this.add = function(a) {
            for (var b = 0,
            c = this.length; b < c; b++) {
                if (this[b].getTargetId() === a.getTargetId() && b != 0 && this[b].getConversationType() == a.getConversationType()) {
                    this.unshift(this.splice(b, 1)[0]);
                    return
                }
            }
            this.unshift(a)
        };
        this.get = function(a, b) {
            for (var c = 0,
            d = this.length; c < d; c++) {
                if (this[c].getTargetId() == b && this[c].getConversationType() == a) {
                    return this[c]
                }
            }
            return null
        }
    };
    _func.prototype = [];
    var C2S = {
        4 : 1,
        2 : 2,
        3 : 3,
        1 : 5
    };
    function getType(a) {
        var b = Object.prototype.toString.call(a).toLowerCase();
        return b.slice(8, b.length - 1)
    }
    function check(a, b) {
        var c = arguments.callee.caller;
        if ("_client" in bridge || b) {
            for (var d = 0,
            e = c.arguments.length; d < e; d++) {
                if (!new RegExp(getType(c.arguments[d])).test(a[d])) {
                    throw new Error("The index of " + d + " parameter was wrong type " + getType(c.arguments[d]) + " [" + a[d] + "]")
                }
            }
        } else {
            throw new Error("The parameter is incorrect or was not yet instantiated RongIMClient")
        }
    }
    function RongIMClient(a) {
        var b = a,
        c = this,
        d, e = [],
        f = new _func,
        g = global.sessionStorage || new
        function() {
            var a = {};
            this.length = 0;
            this.clear = function() {
                a = {};
                this.length = 0
            };
            this.setItem = function(b, c) { ! a[b] && this.length++;
                a[b] = c;
                return b in a
            };
            this.getItem = function(b) {
                return a[b]
            };
            this.removeItem = function(b) {
                if (b in a) {
                    delete a[b];
                    this.length--;
                    return true
                }
                return false
            }
        };
        this.bolHistoryMessages = true;
        this.clearTextMessageDraft = function(a, b) {
            check(["object", "string"]);
            return g.removeItem(a + "_" + b)
        };
        this.getTextMessageDraft = function(a, b) {
            check(["object", "string"]);
            return g.getItem(a + "_" + b)
        };
        this.saveTextMessageDraft = function(a, b, c) {
            check(["object", "string", "string"]);
            return g.setItem(a + "_" + b, c)
        };
        this.getIO = function() {
            return io
        };
        this.connect = function(a, c) {
            check(["string", "object"], true);
            d = new bridge(b, a, c);
            for (var f = 0,
            g = e.length; f < g; f++) {
                d["setListener"](e[f])
            }
            e = []
        };
        this.disconnect = function() {
            if (d) {
                f = new _func;
                d.disConnect()
            }
        };
        this.reconnect = function(a) {
            check(["object"]);
            if (d) {
                d.reConnect(a)
            }
        };
        this.syncConversationList = function(a) {
            check(["object"]);
            var b = new Modules.RelationsInput;
            b.setType(1);
            d.queryMsg(26, io.util.arrayFrom(b.toArrayBuffer()), bridge._client.userId, {
                onSuccess: function(b) {
                    io.util.forEach(b.info,
                    function(a) {
                        if (a.type > 6) {
                            return
                        }
                        var b = c.createConversation(RongIMClient.ConversationType.setValue(mapping[a.type]), a.userId, "", true);
                        if (a.msg && a.msg.content) {
                            var d = messageParser(a.msg);
                            if (d) {
                                if (!b.getLatestMessage() || b.getLatestMessage().getSentTime() < d.getSentTime()) {
                                    b.setLatestMessage(d)
                                }
                            }
                        }
                        if (a.type == 1) {
                            c.getUserInfo(a.userId, {
                                onSuccess: function(a) {
                                    if (a.getUserName) {
                                        b.setConversationTitle(a.getUserName());
                                        b.setConversationPortrait(a.getPortraitUri())
                                    }
                                },
                                onError: function(a) {
                                    console.log(a)
                                }
                            })
                        } else if (a.type == 2) {
                            c.getDiscussion(a.userId, {
                                onSuccess: function(a) {
                                    if (a.getName) {
                                        b.setConversationTitle(a.getName())
                                    }
                                },
                                onError: function(a) {
                                    console.log(a)
                                }
                            })
                        }
                    });
                    a.onSuccess()
                },
                onError: function() {
                    a.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                }
            },
            "RelationsOutput")
        };
        this.sortConversationList = function(a) {
            if (a.length <= 1 || !this.bolHistoryMessages) {
                return a
            }
            var b = Math.floor(a.length / 2);
            var c = a.splice(b, 1)[0];
            var d = c.getLatestMessage();
            var e = null;
            if (d) {
                try {
                    e = d.getSentTime()
                } catch(f) {
                    e = (new Date).getTime()
                }
            } else {
                e = (new Date).getTime()
            }
            var g = [];
            var h = [];
            for (var i = 0,
            j = a.length; i < j; i++) {
                var k = a[i];
                var l = k.getLatestMessage();
                var m = null;
                if (l) {
                    try {
                        m = l.getSentTime()
                    } catch(f) {
                        m = (new Date).getTime()
                    }
                }
                if (m > e) {
                    h.push(k)
                } else {
                    g.push(k)
                }
            }
            return this.sortConversationList(h).concat([c], this.sortConversationList(g))
        };
        this.getConversation = function(a, b) {
            check(["object", "string"]);
            return this.getConversationList().get(a, b)
        };
        this.getConversationList = function() {
            return f
        };
        this.getConversationNotificationStatus = function(a, b, c) {
            check(["object", "string", "object"]);
            var d = this.getConversation(a, b);
            if (d) {
                c.onSuccess(d.getNotificationStatus())
            } else {
                c.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
            }
        };
        this.clearConversations = function(a) {
            check(["array"]);
            var b = [];
            for (var c = 0,
            d = a.length; c < d; c++) {
                for (var e = 0,
                g = f.length; e < g; e++) {
                    f[e].getConversationType() == a[c] && b.push(e)
                }
            }
            for (c = 0, d = b.length; c < d; c++) {
                var h = f[b[c] - c];
                this.removeConversation(h.getConversationType(), h.getTargetId())
            }
        };
        this.getGroupConversationList = function() {
            var a = [];
            for (var b = 0,
            c; c = this.getConversationList()[b++];) {
                if (c.getConversationType() == 3) {
                    a.push(c)
                }
            }
            return a
        };
        this.removeConversation = function(a, b) {
            check(["object", "string"]);
            var c = io.util.remove(this.getConversationList(),
            function(c) {
                return c.getTargetId() == b && c.getConversationType() == a
            });
            if (!c) return;
            var e = new Modules.RelationsInput;
            e.setType(C2S[a.valueOf()]);
            d.queryMsg(27, io.util.arrayFrom(e.toArrayBuffer()), b, {
                onSuccess: function() {},
                onError: function() {}
            })
        };
        this.setConversationNotificationStatus = function(a, b, c, d) {
            check(["object", "string", "object", "object"]);
            var e = this.getConversation(a, b);
            if (e) {
                e.setNotificationStatus(c);
                d.onSuccess(c)
            } else {
                d.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
            }
        };
        this.setConversationToTop = function(a, b) {
            check(["object", "string"]);
            this.getConversation(a, b).setTop()
        };
        this.setConversationName = function(a, b, c) {
            check(["object", "string", "string"]);
            this.getConversation(a, b).setConversationTitle(c)
        };
        this.createConversation = function(a, b, c, e) {
            if (b == "cstest") {
                return
            }
            check(["object", "string", "string", "boolean|undefined"]);
            var f = this.getConversationList().get(a, b);
            if (f) {
                return f
            }
            var g = new RongIMClient.Conversation;
            g.setTargetId(b);
            g.setConversationType(a);
            g.setConversationTitle(c);
            g.setTop();
            if (/^[1234]$/.test(a.valueOf()) && !e) {
                var h = new Modules.RelationsInput;
                h.setType(C2S[a.valueOf()]);
                d.queryMsg(25, io.util.arrayFrom(h.toArrayBuffer()), b, {
                    onSuccess: function() {},
                    onError: function() {}
                })
            }
            return g
        };
        this.getCurrentUserInfo = function(a) {
            check(["object"]);
            this.getUserInfo(bridge._client.userId, a)
        };
        this.getUserInfo = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.GetUserInfoInput;
            c.setNothing(1);
            d.queryMsg(5, io.util.arrayFrom(c.toArrayBuffer()), a, b, "GetUserInfoOutput")
        };
        this.sendMessage = function(a, b, c, e, f) {
            check(["object", "string", "object", "object|null|global", "object"]);
            if (!io.getInstance().connected || a == 5) {
                f.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR);
                return
            }
            if (! (c instanceof RongIMClient.MessageContent)) {
                c = new RongIMClient.MessageContent(c)
            }
            if (e) {
                e.process(c.getMessage())
            }
            var g = c.encode(),
            h = c.getMessage(),
            i;
            h.setConversationType(a);
            h.setMessageDirection(RongIMClient.MessageDirection.SEND);
            if (!h.getMessageId()) h.setMessageId(a + "_" + ~~ (Math.random() * 16777215));
            h.setSentStatus(RongIMClient.SentStatus.SENDING);
            h.setSenderUserId(bridge._client.userId);
            h.setSentTime((new Date).getTime());
            h.setTargetId(b);
            if (h.getCount) {
                i = this.getConversationList().get(a, b);
                if (!i) {
                    i = this.createConversation(a, b, "")
                }
                i.setSentTime((new Date).getTime());
                i.setSentStatus(RongIMClient.SentStatus.SENDING);
                i.setSenderUserName("");
                i.setSenderUserId(bridge._client.userId);
                i.setObjectName(h.getObjectName());
                i.setNotificationStatus(RongIMClient.ConversationNotificationStatus.DO_NOT_DISTURB);
                i.setLatestMessageId(h.getMessageId());
                i.setLatestMessage(c.getMessage());
                i.setUnreadMessageCount(0);
                i.setTop()
            }
            d.pubMsg(a.valueOf(), g, b, f, h)
        };
        this.uploadMedia = function(a, b, c, d) {
            check(["object", "string", "string", "object"])
        };
        this.getUploadToken = function(a) {
            check(["object"]);
            var b = new Modules.GetQNupTokenInput;
            b.setType(1);
            d.queryMsg(14, io.util.arrayFrom(b.toArrayBuffer()), bridge._client.userId, a, "GetQNupTokenOutput")
        };
        this.getDownloadUrl = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.GetQNdownloadUrlInput;
            c.setType(1);
            c.setKey(a);
            d.queryMsg(14, io.util.arrayFrom(c.toArrayBuffer()), bridge._client.userId, b, "GetQNdownloadUrlOutput")
        };
        this.setConnectionStatusListener = function(a) {
            if (d) {
                d.setListener(a)
            } else {
                e.push(a)
            }
        };
        this.setOnReceiveMessageListener = function(a) {
            if (d) {
                d.setListener(a)
            } else {
                e.push(a)
            }
        };
        this.getTotalUnreadCount = function() {
            var a = 0;
            io.util.forEach(this.getConversationList(),
            function(b) {
                a += b.getUnreadMessageCount()
            });
            return a
        };
        this.getUnreadCount = function(a, b) {
            check(["array|object", "string|undefined"]);
            var c = 0;
            if (getType(a) == "array") {
                var d = this.getConversationList();
                for (var e = 0,
                f = a.length; e < f; e++) {
                    io.util.forEach(d,
                    function(b) {
                        b.getConversationType() == a[e] && (c += b.getUnreadMessageCount())
                    })
                }
            } else {
                if (a == 0) {
                    return c
                }
                var g = this.getConversationList().get(a, b);
                g && (c = g.getUnreadMessageCount())
            }
            return c
        };
        this.clearMessagesUnreadStatus = function(a, b) {
            check(["object", "string"]);
            if (a == 0) {
                return false
            }
            var c = this.getConversationList().get(a, b);
            return !! (c ? c.setUnreadMessageCount(0) || 1 : 0)
        };
        this.initChatRoom = function(a) {
            check(["string"]);
            bridge._client.chatroomId = a
        };
        this.joinChatRoom = function(a, b, c) {
            check(["string", "number", "object"]);
            var e = new Modules.ChrmInput;
            e.setNothing(1);
            d.queryMsg(19, io.util.arrayFrom(e.toArrayBuffer()), a, {
                onSuccess: function() {
                    c.onSuccess();
                    bridge._client.chatroomId = a;
                    var d = new Modules.ChrmPullMsg;
                    b == 0 && (b = -1);
                    d.setCount(b);
                    d.setSyncTime(0);
                    bridge._client.queryMessage("chrmPull", io.util.arrayFrom(d.toArrayBuffer()), a, 1, {
                        onSuccess: function(a) {
                            var b = io.util.int64ToTimestamp(a.syncTime);
                            io.util.cookieHelper.setItem(bridge._client.userId + "CST", b);
                            var c = a.list;
                            for (var d = 0,
                            e = c.length; d < e; d++) {
                                bridge._client.handler.onReceived(c[d])
                            }
                        },
                        onError: function(a) {
                            c.onError(a)
                        }
                    },
                    "DownStreamMessages")
                },
                onError: function() {
                    c.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                }
            },
            "ChrmOutput")
        };
        this.quitChatRoom = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.ChrmInput;
            c.setNothing(1);
            d.queryMsg(17, io.util.arrayFrom(c.toArrayBuffer()), a, b, "ChrmOutput")
        };
        this.sendNotification = function(a, b, c, d) {
            check(["object", "string", "object", "object"]);
            if (c instanceof RongIMClient.NotificationMessage) this.sendMessage(a, b, new RongIMClient.MessageContent(c), null, d);
            else throw new Error("Wrong Parameters")
        };
        this.sendStatus = function(a, b, c, d) {
            check(["object", "string", "object", "object"]);
            if (c instanceof RongIMClient.StatusMessage) this.sendMessage(a, b, new RongIMClient.MessageContent(c), null, d);
            else throw new Error("Wrong Parameters")
        };
        this.setDiscussionInviteStatus = function(a, b, c) {
            check(["string", "object", "object"]);
            var e = new Modules.ModifyPermissionInput;
            e.setOpenStatus(b.valueOf());
            d.queryMsg(11, io.util.arrayFrom(e.toArrayBuffer()), a, {
                onSuccess: function(a) {
                    c.onSuccess(RongIMClient.DiscussionInviteStatus.setValue(a))
                },
                onError: c.onError
            })
        };
        this.setDiscussionName = function(a, b, c) {
            check(["string", "string", "object"]);
            var e = new Modules.RenameChannelInput;
            e.setName(b);
            d.queryMsg(12, io.util.arrayFrom(e.toArrayBuffer()), a, c)
        };
        this.removeMemberFromDiscussion = function(a, b, c) {
            check(["string", "string", "object"]);
            var e = new Modules.ChannelEvictionInput;
            e.setUser(b);
            d.queryMsg(9, io.util.arrayFrom(e.toArrayBuffer()), a, c)
        };
        this.createDiscussion = function(a, b, c) {
            check(["string", "array", "object"]);
            var e = new Modules.CreateDiscussionInput;
            e.setName(a);
            d.queryMsg(1, io.util.arrayFrom(e.toArrayBuffer()), bridge._client.userId, {
                onSuccess: function(a) {
                    var e = new Modules.ChannelInvitationInput;
                    e.setUsers(b);
                    d.queryMsg(0, io.util.arrayFrom(e.toArrayBuffer()), a, {
                        onSuccess: function() {},
                        onError: function() {
                            c.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                        }
                    });
                    c.onSuccess(a)
                },
                onError: function() {
                    c.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                }
            },
            "CreateDiscussionOutput")
        };
        this.addMemberToDiscussion = function(a, b, c) {
            check(["string", "array", "object"]);
            var e = new Modules.ChannelInvitationInput;
            e.setUsers(b);
            d.queryMsg(0, io.util.arrayFrom(e.toArrayBuffer()), a, c)
        };
        this.getDiscussion = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.ChannelInfoInput;
            c.setNothing(1);
            d.queryMsg(4, io.util.arrayFrom(c.toArrayBuffer()), a, b, "ChannelInfoOutput")
        };
        this.quitDiscussion = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.LeaveChannelInput;
            c.setNothing(1);
            d.queryMsg(7, io.util.arrayFrom(c.toArrayBuffer()), a, b)
        };
        this.quitGroup = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.LeaveChannelInput;
            c.setNothing(1);
            d.queryMsg(8, io.util.arrayFrom(c.toArrayBuffer()), a, b)
        };
        this.joinGroup = function(a, b, c) {
            check(["string", "string", "object"]);
            var e = new Modules.GroupInfo;
            e.setId(a);
            e.setName(b);
            var f = new Modules.GroupInput;
            f.setGroupInfo([e]);
            d.queryMsg(6, io.util.arrayFrom(f.toArrayBuffer()), a, c, "GroupOutput")
        };
        this.syncGroup = function(a, b) {
            check(["array", "object"]);
            for (var c = 0,
            e = [], f = [], g = a.length; c < g; c++) {
                if (e.length === 0 || !new RegExp(a[c].getId()).test(e)) {
                    e.push(a[c].getId());
                    var h = new Modules.GroupInfo;
                    h.setId(a[c].getId());
                    h.setName(a[c].getName());
                    f.push(h)
                }
            }
            var i = new Modules.GroupHashInput;
            i.setUserId(bridge._client.userId);
            i.setGroupHashCode(MD5(e.sort().join("")));
            d.queryMsg(13, io.util.arrayFrom(i.toArrayBuffer()), bridge._client.userId, {
                onSuccess: function(a) {
                    if (a === 1) {
                        var c = new Modules.GroupInput;
                        c.setGroupInfo(f);
                        d.queryMsg(20, io.util.arrayFrom(c.toArrayBuffer()), bridge._client.userId, {
                            onSuccess: function() {
                                b.onSuccess()
                            },
                            onError: function() {
                                b.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                            }
                        },
                        "GroupOutput")
                    } else {
                        b.onSuccess()
                    }
                },
                onError: function() {
                    b.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                }
            },
            "GroupHashOutput")
        };
        this.addToBlacklist = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.Add2BlackListInput;
            this.getCurrentUserInfo({
                onSuccess: function(e) {
                    var f = e.getUserId();
                    c.setUserId(a);
                    d.queryMsg(21, io.util.arrayFrom(c.toArrayBuffer()), f, b)
                },
                onError: function() {
                    console.log("添加黑名单失败：addToBlacklist")
                }
            })
        };
        this.getBlacklist = function(a) {
            check(["object"]);
            var b = new Modules.QueryBlackListInput;
            b.setNothing(1);
            d.queryMsg(23, io.util.arrayFrom(b.toArrayBuffer()), bridge._client.userId, a, "QueryBlackListOutput")
        };
        this.getBlacklistStatus = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.BlackListStatusInput;
            this.getCurrentUserInfo({
                onSuccess: function(e) {
                    var f = e.getUserId();
                    c.setUserId(a);
                    d.queryMsg(24, io.util.arrayFrom(c.toArrayBuffer()), f, {
                        onSuccess: function(a) {
                            b.onSuccess(RongIMClient.BlacklistStatus.setValue(a))
                        },
                        onError: function() {
                            b.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                        }
                    })
                },
                onError: function() {
                    console.log("获取黑名单状态出错：getBlacklistStatus.")
                }
            })
        };
        this.removeFromBlacklist = function(a, b) {
            check(["string", "object"]);
            var c = new Modules.RemoveFromBlackListInput;
            this.getCurrentUserInfo({
                onSuccess: function(e) {
                    var f = e.getUserId();
                    c.setUserId(a);
                    d.queryMsg(22, io.util.arrayFrom(c.toArrayBuffer()), f, b)
                },
                onError: function() {
                    console.log("获取用户信息失败：removeFromBlacklist")
                }
            })
        };
        var h = {
            4 : "qryPMsg",
            1 : "qryCMsg",
            3 : "qryGMsg",
            2 : "qryDMsg",
            5 : "qrySMsg"
        },
        i = function(a) {
            this.limit = a || 10;
            this.map = {};
            this.keys = []
        },
        j = new i;
        i.prototype.set = function(a, b) {
            var c = this.map;
            var d = this.keys;
            if (!c.hasOwnProperty(a)) {
                if (d.length === this.limit) {
                    var e = d.shift();
                    delete c[e]
                }
                d.push(a)
            }
            c[a] = b
        };
        i.prototype.get = function(a) {
            return this.map[a] || 0
        };
        i.prototype.remove = function(a) {
            delete this.map[a]
        };
        this.resetGetHistoryMessages = function(a, b) {
            if (typeof b != "string") {
                b = b.toString()
            }
            j.remove(a + b)
        };
        this.getHistoryMessages = function(a, b, c, e) {
            check(["object", "string", "number", "object"]);
            if (a.valueOf() == 0) {
                e.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR);
                return
            }
            var f = new Modules.HistoryMessageInput;
            f.setTargetId(b);
            f.setDataTime(j.get(a + b));
            f.setSize(c);
            d.queryMsg(h[a.valueOf()], io.util.arrayFrom(f.toArrayBuffer()), b, {
                onSuccess: function(c) {
                    var d = c.list.reverse();
                    j.set(a + b, io.util.int64ToTimestamp(c.syncTime));
                    for (var f = 0,
                    g = d.length; f < g; f++) {
                        d[f] = messageParser(d[f])
                    }
                    e.onSuccess( !! c.hasMsg, d)
                },
                onError: function() {
                    e.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR)
                }
            },
            "HistoryMessagesOuput")
        }
    }
    RongIMClient.version = "0.9.15";
    RongIMClient.isSyncOfflineMsg = true;
    RongIMClient.PCClient = false;
    RongIMClient.connect = function(a, b) {
        if (!RongIMClient.getInstance) {
            throw new Error("please init")
        }
        if (global.Modules) {
            RongIMClient.getInstance().connect(a, b)
        } else {
            RongIMClient.connect.token = a;
            RongIMClient.connect.callback = b
        }
    };
    RongIMClient.hasUnreadMessages = function(a, b, c) {
        var d = document.createElement("script");
        d.src = "http://api.cn.ronghub.com/message/exist.js?appKey=" + encodeURIComponent(a) + "&token=" + encodeURIComponent(b) + "&callBack=RongIMClient.hasUnreadMessages.RCcallback&_=" + Date.now();
        document.body.appendChild(d);
        d.onerror = function() {
            c.onError(RongIMClient.callback.ErrorCode.UNKNOWN_ERROR);
            d.parentNode.removeChild(d)
        };
        RongIMClient.hasUnreadMessages.RCcallback = function(a) {
            c.onSuccess( !! +a.status);
            d.parentNode.removeChild(d)
        }
    };
    RongIMClient.init = function(a) {
        var b = null;
        RongIMClient.getInstance === undefined && (RongIMClient.getInstance = function() {
            if (b == null) {
                b = new RongIMClient(a)
            }
            return b
        })
    };
    var registerMessageTypeMapping = {};
    RongIMClient.registerMessageType = function(a) {
        if (!RongIMClient.getInstance) {
            throw new Error("unInitException")
        }
        if ("messageType" in a && "objectName" in a && "fieldName" in a) {
            registerMessageTypeMapping[a.objectName] = a.messageType;
            var b = RongIMClient[a.messageType] = function(b) {
                RongIMClient.RongIMMessage.call(this, b);
                RongIMClient.MessageType[a.messageType] = a.messageType;
                this.setMessageType(a.messageType);
                this.setObjectName(a.objectName);
                for (var c = 0,
                d = a.fieldName.length; c < d; c++) {
                    var e = a.fieldName[c];
                    this["set" + e] = function(a) {
                        return function(b) {
                            this.setContent(b, a)
                        }
                    } (e);
                    this["get" + e] = function(a) {
                        return function() {
                            return this.getDetail()[a]
                        }
                    } (e)
                }
            };
            io.util._extends(b, RongIMClient.RongIMMessage)
        } else throw new Error("registerMessageType:arguments type is error")
    };
    RongIMClient.setConnectionStatusListener = function(a) {
        if (!RongIMClient.getInstance) {
            throw new Error("unInitException")
        }
        RongIMClient.getInstance().setConnectionStatusListener(a)
    };
    RongIMClient.RongIMMessage = function(a) {
        var b = "unknown",
        c = 1,
        d = 2,
        e, f = a || {},
        g, h, i, j, k, l, m, n, o, p = "";
        this.getPushContent = function() {
            return p
        };
        this.getDetail = function() {
            return f
        };
        this.getMessageTag = function() {
            return [RongIMClient.MessageTag.ISPERSISTED, RongIMClient.MessageTag.ISCOUNTED, RongIMClient.MessageTag.ISDISPLAYED]
        };
        this.getContent = function() {
            return f.content
        };
        this.getConversationType = function() {
            return g
        };
        this.getPersist = function() {
            return c
        };
        this.getCount = function() {
            return d
        };
        this.setPersist = function(a) {
            var b = [0, 1];
            if (a in b) {
                c = a
            }
        };
        this.setCount = function(a) {
            var b = [0, 2];
            if (a in b) {
                d = a
            }
        };
        this.getExtra = function() {
            return f.extra
        };
        this.getMessageDirection = function() {
            return h
        };
        this.getMessageId = function() {
            return i
        };
        this.getObjectName = function() {
            return j
        };
        this.getReceivedStatus = function() {
            return k
        };
        this.getReceivedTime = function() {
            return e
        };
        this.getSenderUserId = function() {
            return l
        };
        this.getSentStatus = function() {
            return m
        };
        this.getTargetId = function() {
            return o
        };
        this.setPushContent = function(a) {
            p = a
        };
        this.setContent = function(a, b) {
            f[b || "content"] = a
        };
        this.setConversationType = function(a) {
            g = a
        };
        this.setExtra = function(a) {
            f.extra = a
        };
        this.setMessageDirection = function(a) {
            h = a
        };
        this.setMessageId = function(a) {
            i = a
        };
        this.setObjectName = function(a) {
            j = a
        };
        this.setReceivedStatus = function(a) {
            k = a
        };
        this.setSenderUserId = function(a) {
            l = a
        };
        this.setSentStatus = function(a) {
            return !! (m = a)
        };
        this.setSentTime = function(a) {
            n = io.util.int64ToTimestamp(a)
        };
        this.getSentTime = function() {
            return n
        };
        this.setTargetId = function(a) {
            o = a
        };
        this.setReceivedTime = function(a) {
            e = a
        };
        this.toJSONString = function() {
            var a = {
                receivedTime: e,
                messageType: b,
                details: f,
                conversationType: g,
                direction: h,
                messageId: i,
                objectName: j,
                senderUserId: l,
                sendTime: n,
                targetId: o
            };
            return JSON.stringify(a)
        };
        this.getMessageType = function() {
            return b
        };
        this.setMessageType = function(a) {
            b = a
        }
    };
    RongIMClient.NotificationMessage = function(a) {
        RongIMClient.RongIMMessage.call(this, a);
        this.getMessageTag = function() {
            return [RongIMClient.MessageTag.ISPERSISTED, RongIMClient.MessageTag.ISDISPLAYED]
        };
        this.setCount(0)
    };
    io.util._extends(RongIMClient.NotificationMessage, RongIMClient.RongIMMessage);
    RongIMClient.StatusMessage = function(a) {
        RongIMClient.RongIMMessage.call(this, a);
        this.getMessageTag = function() {
            return ["NONE"]
        };
        this.setCount(0);
        this.setPersist(0)
    };
    io.util._extends(RongIMClient.StatusMessage, RongIMClient.RongIMMessage);
    RongIMClient.TextMessage = function(a) {
        RongIMClient.RongIMMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.TextMessage);
        this.setObjectName("RC:TxtMsg")
    };
    RongIMClient.TextMessage.obtain = function(a) {
        return new RongIMClient.TextMessage({
            content: a,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.TextMessage, RongIMClient.RongIMMessage);
    RongIMClient.ImageMessage = function(a) {
        RongIMClient.RongIMMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.ImageMessage);
        this.setObjectName("RC:ImgMsg");
        this.setImageUri = function(a) {
            this.setContent(a, "imageUri")
        };
        this.getImageUri = function() {
            return this.getDetail().imageUri
        }
    };
    RongIMClient.ImageMessage.obtain = function(a, b) {
        return new RongIMClient.ImageMessage({
            content: a,
            imageUri: b,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.ImageMessage, RongIMClient.RongIMMessage);
    RongIMClient.RichContentMessage = function(a) {
        RongIMClient.RongIMMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.RichContentMessage);
        this.setObjectName("RC:ImgTextMsg");
        this.setTitle = function(a) {
            this.setContent(a, "title")
        };
        this.getTitle = function() {
            return this.getDetail().title
        };
        this.setImageUri = function(a) {
            this.setContent(a, "imageUri")
        };
        this.getImageUri = function() {
            return this.getDetail().imageUri
        }
    };
    RongIMClient.RichContentMessage.obtain = function(a, b, c) {
        return new RongIMClient.RichContentMessage({
            title: a,
            content: b,
            imageUri: c,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.RichContentMessage, RongIMClient.RongIMMessage);
    RongIMClient.VoiceMessage = function(a) {
        RongIMClient.RongIMMessage.call(this, a);
        this.setObjectName("RC:VcMsg");
        this.setMessageType(RongIMClient.MessageType.VoiceMessage);
        this.setDuration = function(a) {
            this.setContent(a, "duration")
        };
        this.getDuration = function() {
            return this.getDetail().duration
        }
    };
    RongIMClient.VoiceMessage.obtain = function(a, b) {
        return new RongIMClient.VoiceMessage({
            content: a,
            duration: b,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.VoiceMessage, RongIMClient.RongIMMessage);
    RongIMClient.HandshakeMessage = function() {
        RongIMClient.RongIMMessage.call(this);
        this.setMessageType(RongIMClient.MessageType.HandshakeMessage);
        this.setObjectName("RC:HsMsg")
    };
    io.util._extends(RongIMClient.HandshakeMessage, RongIMClient.RongIMMessage);
    RongIMClient.SuspendMessage = function() {
        RongIMClient.RongIMMessage.call(this);
        this.setMessageType(RongIMClient.MessageType.SuspendMessage);
        this.setObjectName("RC:SpMsg")
    };
    io.util._extends(RongIMClient.SuspendMessage, RongIMClient.RongIMMessage);
    RongIMClient.UnknownMessage = function(a, b) {
        RongIMClient.RongIMMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.UnknownMessage);
        this.setObjectName(b)
    };
    io.util._extends(RongIMClient.UnknownMessage, RongIMClient.RongIMMessage);
    RongIMClient.LocationMessage = function(a) {
        RongIMClient.RongIMMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.LocationMessage);
        this.setObjectName("RC:LBSMsg");
        this.setLatitude = function(a) {
            this.setContent(a, "latitude")
        };
        this.getLatitude = function() {
            return this.getDetail().latitude
        };
        this.setLongitude = function(a) {
            this.setContent(a, "longitude")
        };
        this.getLongitude = function() {
            return this.getDetail().longitude
        };
        this.setPoi = function(a) {
            this.setContent(a, "poi")
        };
        this.getPoi = function() {
            return this.getDetail().poi
        }
    };
    RongIMClient.LocationMessage.obtain = function(a, b, c, d) {
        return new RongIMClient.LocationMessage({
            content: a,
            latitude: b,
            longitude: c,
            poi: d,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.LocationMessage, RongIMClient.RongIMMessage);
    RongIMClient.DiscussionNotificationMessage = function(a) {
        RongIMClient.NotificationMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.DiscussionNotificationMessage);
        this.setObjectName("RC:DizNtf");
        var b = false;
        this.getExtension = function() {
            return this.getDetail().extension
        };
        this.getOperator = function() {
            return this.getDetail().operator
        };
        this.getType = function() {
            return this.getDetail().type
        };
        this.isHasReceived = function() {
            return b
        };
        this.setExtension = function(a) {
            this.setContent(a, "extension")
        };
        this.setHasReceived = function(a) {
            b = !!a
        };
        this.setOperator = function(a) {
            this.setContent(a, "operator")
        };
        this.setType = function(a) {
            this.setContent(a, "type")
        }
    };
    io.util._extends(RongIMClient.DiscussionNotificationMessage, RongIMClient.NotificationMessage);
    RongIMClient.InformationNotificationMessage = function(a) {
        RongIMClient.NotificationMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.InformationNotificationMessage);
        this.setObjectName("RC:InfoNtf")
    };
    RongIMClient.InformationNotificationMessage.obtain = function(a) {
        return new RongIMClient.InformationNotificationMessage({
            content: a,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.InformationNotificationMessage, RongIMClient.NotificationMessage);
    RongIMClient.ContactNotificationMessage = function(a) {
        RongIMClient.NotificationMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.ContactNotificationMessage);
        this.setObjectName("RC:ContactNtf");
        this.getOperation = function() {
            return this.getDetail().operation
        };
        this.setOperation = function(a) {
            this.setContent(a, "operation")
        };
        this.setMessage = function(a) {
            this.setContent(a, "message")
        };
        this.getMessage = function() {
            return this.getDetail().message
        };
        this.getSourceUserId = function() {
            return this.getDetail().sourceUserId
        };
        this.setSourceUserId = function(a) {
            this.setContent(a, "sourceUserId")
        };
        this.getTargetUserId = function() {
            return this.getDetail().targetUserId
        };
        this.setTargetUserId = function(a) {
            this.setContent(a, "targetUserId")
        }
    };
    RongIMClient.ContactNotificationMessage.obtain = function(a, b, c, d) {
        return new RongIMClient.ContactNotificationMessage({
            operation: a,
            sourceUserId: b,
            targetUserId: c,
            message: d,
            extra: ""
        })
    };
    RongIMClient.ContactNotificationMessage.CONTACT_OPERATION_ACCEPT_RESPONSE = "ContactOperationAcceptResponse";
    RongIMClient.ContactNotificationMessage.CONTACT_OPERATION_REJECT_RESPONSE = "ContactOperationRejectResponse";
    RongIMClient.ContactNotificationMessage.CONTACT_OPERATION_REQUEST = "ContactOperationRequest";
    io.util._extends(RongIMClient.ContactNotificationMessage, RongIMClient.NotificationMessage);
    RongIMClient.ProfileNotificationMessage = function(a) {
        RongIMClient.NotificationMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.ProfileNotificationMessage);
        this.setObjectName("RC:ProfileNtf");
        this.getOperation = function() {
            return this.getDetail().operation
        };
        this.setOperation = function(a) {
            this.setContent(a, "operation")
        };
        this.getData = function() {
            return this.getDetail().data
        };
        this.setData = function(a) {
            this.setContent(a, "data")
        }
    };
    RongIMClient.ProfileNotificationMessage.obtain = function(a, b) {
        return new RongIMClient.ProfileNotificationMessage({
            operation: a,
            data: b,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.ProfileNotificationMessage, RongIMClient.NotificationMessage);
    RongIMClient.CommandNotificationMessage = function(a) {
        RongIMClient.NotificationMessage.call(this, a);
        this.setMessageType(RongIMClient.MessageType.CommandNotificationMessage);
        this.setObjectName("RC:CmdNtf");
        this.getData = function() {
            return this.getDetail().data
        };
        this.setData = function(a) {
            this.setContent(a, "data")
        };
        this.getName = function() {
            return this.getDetail().name
        };
        this.setName = function(a) {
            this.setContent(a, "name")
        }
    };
    RongIMClient.CommandNotificationMessage.obtain = function(a, b) {
        return new RongIMClient.CommandNotificationMessage({
            name: a,
            data: b,
            extra: ""
        })
    };
    io.util._extends(RongIMClient.CommandNotificationMessage, RongIMClient.NotificationMessage);
    RongIMClient.MessageContent = function(a) {
        if (! (a instanceof RongIMClient.RongIMMessage)) {
            throw new Error("wrong parameter")
        }
        this.getMessage = function() {
            return a
        };
        this.encode = function() {
            var b = new Modules.UpStreamMessage;
            b.setSessionId(a.getPersist() | a.getCount());
            b.setClassname(a.getObjectName());
            b.setContent(JSON.stringify(a.getDetail()));
            b.setPushText(a.getPushContent());
            var c = b.toArrayBuffer();
            if (Object.prototype.toString.call(c) == "[object ArrayBuffer]") {
                return [].slice.call(new Int8Array(c))
            }
            return c
        }
    };
    RongIMClient.MessageHandler = function(a) {
        if (typeof a == "function") {
            this.process = a
        } else {
            throw new Error("MessageHandler:arguments type is error")
        }
    };
    RongIMClient.ReceivedStatus = function(a) {
        var b = a || 1;
        this.getFlag = function() {
            return b
        };
        this.isDownload = function() {
            return b == 1
        };
        this.isListened = function() {
            return b == 2
        };
        this.isRead = function() {
            return b == 3
        };
        this.setDownload = function() {
            b = 1
        };
        this.setListened = function() {
            b = 2
        };
        this.setRead = function() {
            b = 3
        }
    };
    RongIMClient.UserInfo = function(a, b, c) {
        var d = a,
        e = b,
        f = c;
        this.getUserName = function() {
            return e
        };
        this.getPortraitUri = function() {
            return f
        };
        this.getUserId = function() {
            return d
        };
        this.setUserName = function(a) {
            e = a
        };
        this.setPortraitUri = function(a) {
            f = a
        };
        this.setUserId = function(a) {
            d = a
        }
    };
    RongIMClient.Conversation = function() {
        var a = this,
        b = (new Date).getTime(),
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = 0,
        q,
        r = RongIMClient.ConversationNotificationStatus.NOTIFY;
        this.getConversationTitle = function() {
            return h
        };
        this.toJSONString = function() {
            var a = {
                senderUserName: g,
                lastTime: b,
                objectName: c,
                senderUserId: d,
                receivedTime: e,
                conversationTitle: h,
                conversationType: i,
                latestMessageId: l,
                sentTime: n,
                targetId: o,
                notificationStatus: r
            };
            return JSON.stringify(a)
        };
        this.setReceivedStatus = function(a) {
            f = a
        };
        this.getReceivedStatus = function() {
            return f
        };
        this.getConversationType = function() {
            return i
        };
        this.getDraft = function() {
            return j
        };
        this.getLatestMessage = function() {
            return k
        };
        this.getLatestMessageId = function() {
            return l
        };
        this.getNotificationStatus = function() {
            return r
        };
        this.getObjectName = function() {
            return c
        };
        this.getReceivedTime = function() {
            return e
        };
        this.getSenderUserId = function() {
            return d
        };
        this.getSentStatus = function() {
            return m
        };
        this.getSentTime = function() {
            return n
        };
        this.getTargetId = function() {
            return o
        };
        this.getUnreadMessageCount = function() {
            return p
        };
        this.isTop = function() {
            var a = RongIMClient.getInstance().getConversationList();
            return a[0] != undefined && a[0].getTargetId() == this.getTargetId() && a[0].getConversationType() == this.getConversationType()
        };
        this.setConversationTitle = function(a) {
            h = a
        };
        this.getConversationPortrait = function() {
            return q
        };
        this.setConversationPortrait = function(a) {
            q = a
        };
        this.setConversationType = function(a) {
            i = a
        };
        this.setDraft = function(a) {
            j = a
        };
        this.setSenderUserName = function(a) {
            g = a
        };
        this.setLatestMessage = function(a) {
            k = a
        };
        this.setLatestMessageId = function(a) {
            l = a
        };
        this.setNotificationStatus = function(a) {
            r = a instanceof RongIMClient.ConversationNotificationStatus ? a: RongIMClient.ConversationNotificationStatus.setValue(a)
        };
        this.setObjectName = function(a) {
            c = a
        };
        this.setReceivedTime = function(a) {
            b = e = a
        };
        this.setSenderUserId = function(a) {
            d = a
        };
        this.getLatestTime = function() {
            return b
        };
        this.setSentStatus = function(a) {
            return !! (m = a)
        };
        this.setSentTime = function(a) {
            b = n = a
        };
        this.setTargetId = function(a) {
            o = a
        };
        this.setTop = function() {
            if (a.getTargetId() == undefined || this.isTop()) {
                return
            }
            RongIMClient.getInstance().getConversationList().add(this)
        };
        this.setUnreadMessageCount = function(a) {
            p = a
        }
    };
    RongIMClient.Discussion = function(a, b, c, d, e) {
        var f = a,
        g = b,
        h = c,
        i = d,
        j = e;
        this.getCreatorId = function() {
            return h
        };
        this.getId = function() {
            return f
        };
        this.getMemberIdList = function() {
            return j
        };
        this.getName = function() {
            return g
        };
        this.isOpen = function() {
            return i
        };
        this.setCreatorId = function(a) {
            h = a
        };
        this.setId = function(a) {
            f = a
        };
        this.setMemberIdList = function(a) {
            j = a
        };
        this.setName = function(a) {
            g = a
        };
        this.setOpen = function(a) {
            i = !!a
        }
    };
    RongIMClient.Group = function(a, b, c) {
        var d = a,
        e = b,
        f = c;
        this.getId = function() {
            return d
        };
        this.getName = function() {
            return e
        };
        this.getPortraitUri = function() {
            return f
        };
        this.setId = function(a) {
            d = a
        };
        this.setName = function(a) {
            e = a
        };
        this.setPortraitUri = function(a) {
            f = a
        }
    };
    var _enum = {
        MessageTag: {
            ISPERSISTED: "ISPERSISTED",
            ISCOUNTED: "ISCOUNTED",
            NONE: "NONE",
            ISDISPLAYED: "ISDISPLAYED"
        },
        ConversationNotificationStatus: ["DO_NOT_DISTURB", "NOTIFY"],
        ConversationType: ["CHATROOM", "CUSTOMER_SERVICE", "DISCUSSION", "GROUP", "PRIVATE", "SYSTEM"],
        SentStatus: ["DESTROYED", "FAILED", "READ", "RECEIVED", "SENDING", "SENT"],
        DiscussionInviteStatus: ["CLOSED", "OPENED"],
        MediaType: ["AUDIO", "FILE", "IMAGE", "VIDEO"],
        MessageDirection: ["RECEIVE", "SEND"],
        MessageType: ["DiscussionNotificationMessage", "TextMessage", "ImageMessage", "VoiceMessage", "RichContentMessage", "HandshakeMessage", "UnknownMessage", "SuspendMessage", "LocationMessage", "InformationNotificationMessage", "ContactNotificationMessage", "ProfileNotificationMessage", "CommandNotificationMessage"],
        SendErrorStatus: {
            REJECTED_BY_BLACKLIST: 405,
            NOT_IN_DISCUSSION: 21406,
            NOT_IN_GROUP: 22406,
            NOT_IN_CHATROOM: 23406
        },
        BlacklistStatus: ["EXIT_BLACK_LIST", "NOT_EXIT_BLACK_LIST"],
        ConnectionStatus: ["CONNECTED", "CONNECTING", "RECONNECT", "OTHER_DEVICE_LOGIN", "CLOSURE", "UNKNOWN_ERROR", "LOGOUT", "BLOCK"]
    };
    io.util.each(_enum,
    function(a, b) {
        var c = {};
        if (io.util.isArray(b)) {
            io.util.forEach(b,
            function(a, b) {
                c[a] = b
            })
        } else {
            c = b
        }
        RongIMClient[a] = RongIMEnum(c)
    });
    RongIMClient.ConnectErrorStatus = ConnectionState;
    RongIMClient.callback = function(a, b) {
        this.onError = b;
        this.onSuccess = a
    };
    RongIMClient.callback.ErrorCode = RongIMEnum({
        TIMEOUT: -1,
        UNKNOWN_ERROR: -2
    });
    if ("function" === typeof require && "object" === typeof module && module && module.id && "object" === typeof exports && exports) {
        module.exports = RongIMClient
    } else if ("function" === typeof define && define.amd) {
        define("RongIMClient", [],
        function() {
            return RongIMClient
        });
        define(function() {
            return RongIMClient
        })
    } else {
        global.RongIMClient = RongIMClient
    }
})(window);
eval(function(a, b, c, d, e, f) {
    e = function(a) {
        return (a < b ? "": e(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (c--) f[e(c)] = d[c] || e(c);
        d = [function(a) {
            return f[a]
        }];
        e = function() {
            return "\\w+"
        };
        c = 1
    }
    while (c--) if (d[c]) a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]);
    return a
} ('(9(b){i(b.r){8 c={6m:{4:"aF",5:"\\7m\\o",3:"\\2\\3O","bp":"-9y 0"},bj:{4:"4I",5:"\\4R\\5n\\5V\\o",3:"\\2\\3P","bp":"-6C 0"},6G:{4:"78",5:"\\7j\\3Q",3:"\\2\\3W","bp":"-83 0"},8g:{4:"8j",5:"\\8F\\o",3:"\\2\\1a","bp":"-9S 0"},ai:{4:"ay",5:"\\aA\\o",3:"\\2\\1b","bp":"-aR 0"},aS:{4:"b0",5:"\\bf\\bg",3:"\\2\\1j","bp":"-by 0"},bB:{4:"4C",5:"\\D\\4N",3:"\\2\\1v","bp":"-4Y 0"},55:{4:"59",5:"\\5m\\o",3:"\\2\\2d","bp":"-5w 0"},5B:{4:"5K",5:"\\5O\\5T",3:"\\2\\2k","bp":"-5W 0"},66:{4:"67",5:"\\6i\\D\\2r\\2s",3:"\\2\\3N","bp":"-71 0"},72:{4:"77",5:"\\y\\B\\p\\7n",3:"\\2\\3R","bp":"-7F 0"},7U:{4:"7Y",5:"\\3T",3:"\\2\\3V","bp":"0 -6"},8m:{4:"8o",5:"\\8z\\8A",3:"\\2\\3X","bp":"-6 -6"},8V:{4:"8Y",5:"\\9e\\9j",3:"\\2\\3Y","bp":"-3Z -6"},aa:{4:"ac",5:"\\41\\am\\44",3:"\\2\\45","bp":"-46 -6"},aG:{4:"aJ",5:"\\aM\\y\\aN",3:"\\2\\49","bp":"-4c -6"},aT:{4:"aZ",5:"\\4d\\4g",3:"\\2\\4k","bp":"-4l -6"},bl:{4:"bm",5:"\\4m",3:"\\2\\4n","bp":"-4o -6"},4D:{4:"4G",5:"\\4p\\4J",3:"\\2\\4r","bp":"-4s -6"},4T:{4:"4U",5:"\\4t\\4Z",3:"\\2\\T","bp":"-U -6"},5a:{4:"5d",5:"\\5e\\5k",3:"\\2\\V","bp":"-W -6"},5o:{4:"5q",5:"\\5r\\5v",3:"\\2\\X","bp":"-Y -6"},5C:{4:"5G",5:"\\5J\\3T",3:"\\2\\Z","bp":"-10 -6"},5P:{4:"5S",5:"\\11\\5U",3:"\\2\\12","bp":"-13 -6"},5Z:{4:"61",5:"\\11\\62",3:"\\2\\14","bp":"-15 -6"},6a:{4:"6b",5:"\\6c\\6h",3:"\\2\\16","bp":"-17 -6"},6q:{4:"6r",5:"\\6w\\6B",3:"\\2\\18","bp":"-19 -6"},6M:{4:"6R",5:"\\6W\\M\\x",3:"\\2\\1c","bp":"-1d -6"},7d:{4:"7i",5:"\\D\\1e",3:"\\2\\1f","bp":"-1g -6"},7s:{4:"7t",5:"\\7w\\x",3:"\\2\\1h","bp":"-1i -6"},7J:{4:"7O",5:"7P",3:"\\7\\1k","bp":"-1l 0"},88:{4:"8b",5:"\\z\\1n",3:"\\7\\1o","bp":"-1p 0"},8r:{4:"8w",5:"\\1q\\3Q",3:"\\7\\1r","bp":"-1s 0"},8J:{4:"8M",5:"\\8Q\\1t",3:"\\7\\1u","bp":"-10 0"},8Z:{4:"93",5:"\\94\\97\\98\\A",3:"\\7\\1w","bp":"-13 0"},9n:{4:"9r",5:"\\9u\\1n",3:"\\7\\1x","bp":"-15 0"},9D:{4:"9H",5:"\\9L\\9O",3:"\\7\\1y","bp":"0 0"},9T:{4:"9X",5:"\\a2\\a6",3:"\\2\\1z","bp":"-1A 0"},ad:{4:"ah",5:"\\4d\\4g",3:"\\2\\1B","bp":"-1C 0"},ao:{4:"ar",5:"\\av\\ax",3:"\\2\\1D","bp":"-1E 0"},aB:{4:"aD",5:"aE",3:"\\2\\1F","bp":"-1G 0"},aH:{4:"aI",5:"\\1H\\aL",3:"\\2\\1I","bp":"-1J 0"},aO:{4:"aP",5:"\\aQ\\1K",3:"\\2\\1L","bp":"-1M 0"},aU:{4:"aV",5:"\\aW\\aY",3:"\\2\\1N","bp":"-1O 0"},b4:{4:"ba",5:"\\bb\\be",3:"\\2\\1P","bp":"-1Q 0"},bh:{4:"bi",5:"\\M\\1R",3:"\\2\\1S","bp":"-1T 0"},bn:{4:"bo",5:"\\bq\\1q\\bt",3:"\\2\\1U","bp":"-1V 0"},bF:{4:"bG",5:"\\4A\\4B",3:"\\2\\1W","bp":"-1X -6"},4E:{4:"4F",5:"\\1Y\\4H",3:"\\2\\1Z","bp":"-20 -6"},4K:{4:"4L",5:"\\4M",3:"\\7\\21","bp":"-6 0"},4O:{4:"4P",5:"\\4Q\\22\\4S",3:"\\7\\23","bp":"-24 0"},4V:{4:"4W",5:"\\4X",3:"\\7\\25","bp":"-26 0"},50:{4:"51",5:"\\52\\53\\54",3:"\\7\\27","bp":"-4l 0"},56:{4:"57",5:"\\58\\28",3:"\\7\\29","bp":"-4s 0"},5b:{4:"5c",5:"\\2a",3:"\\2\\2b","bp":"-1g 0"},5f:{4:"5g",5:"\\5h\\5i\\5j",3:"\\2\\2c","bp":"-1i 0"},5l:{4:"1",5:"1",3:"\\2\\2e","bp":"-2f 0"},5p:{4:"-1",5:"-1",3:"\\2\\2g","bp":"-2h 0"},5s:{4:"5t",5:"\\5u",3:"\\2\\2i","bp":"-2j 0"},5x:{4:"5y",5:"\\5z\\5A",3:"\\2\\4z","bp":"-2l 0"},5D:{4:"5E",5:"\\2s\\5F",3:"\\2\\2m","bp":"-1X 0"},5H:{4:"5I",5:"\\2n",3:"\\2\\2o","bp":"-20 0"},5L:{4:"5M",5:"\\5N\\4p",3:"\\2\\2p","bp":"-2q 0"},5Q:{4:"5R",5:"\\bJ\\K\\2t",3:"\\2\\2u","bp":"-2v 0"},5X:{4:"5Y",5:"\\2w\\60",3:"\\2\\2x","bp":"-2y 0"},63:{4:"64",5:"\\65",3:"\\2\\2z","bp":"-2A 0"},68:{4:"69",5:"\\2B",3:"\\2\\2C","bp":"-2D 0"},6d:{4:"6e",5:"\\6f\\6g",3:"\\2\\2E","bp":"-2F 0"},6j:{4:"6k",5:"\\6l",3:"\\2\\2G","bp":"-6n 0"},6o:{4:"6p",5:"\\B\\2H",3:"\\2\\2I","bp":"-6s 0"},6t:{4:"6u",5:"\\6v",3:"\\2\\2J","bp":"-6x 0"},6y:{4:"6z",5:"\\6A\\2K",3:"\\2\\2L","bp":"-6D 0"},6E:{4:"6F",5:"\\z\\z",3:"\\2\\2M","bp":"-6H 0"},6I:{4:"6J",5:"\\6K\\6L",3:"\\2\\2N","bp":"-6N 0"},6O:{4:"6P",5:"\\6Q\\o",3:"\\2\\2O","bp":"-6S 0"},6T:{4:"6U",5:"\\6V\\2B",3:"\\2\\2P","bp":"-24 -6"},6X:{4:"6Y",5:"\\6Z\\70",3:"\\2\\2Q","bp":"-2R -6"},73:{4:"74",5:"\\2w\\75\\76",3:"\\2\\2S","bp":"-2T -6"},79:{4:"7a",5:"\\7b\\7c\\44",3:"\\2\\2U","bp":"-26 -6"},7e:{4:"7f",5:"\\7g\\7h",3:"\\2\\2V","bp":"-2W -6"},7k:{4:"7l",5:"\\41",3:"\\2\\2X","bp":"-2Y -6"},7o:{4:"7p",5:"\\7q\\7r",3:"\\2\\2Z","bp":"-30 -6"},7u:{4:"7v",5:"\\2n\\B",3:"\\2\\31","bp":"-1l -6"},7x:{4:"7y",5:"\\4m\\7z",3:"\\2\\32","bp":"-1p -6"},7B:{4:"7C",5:"\\7D\\7E",3:"\\2\\33","bp":"-1s -6"},7G:{4:"7H",5:"\\p\\7I\\1R",3:"\\2\\34","bp":"-2j -6"},7K:{4:"7L",5:"\\7M\\7N",3:"\\2\\35","bp":"-36 -6"},7Q:{4:"7R",5:"\\7S\\7T",3:"\\7\\37","bp":"-3Z 0"},7V:{4:"7W",5:"\\7X",3:"\\7\\38","bp":"-46 0"},7Z:{4:"80",5:"\\81\\82",3:"\\7\\39","bp":"-4c 0"},84:{4:"85",5:"\\86\\87",3:"\\7\\3a","bp":"-2R 0"},89:{4:"8a",5:"\\1K",3:"\\7\\3b","bp":"-2T 0"},8c:{4:"8d",5:"\\8e\\8f\\1Y",3:"\\7\\3c","bp":"-2W 0"},8h:{4:"8i",5:"\\28",3:"\\7\\3d","bp":"-4o 0"},8k:{4:"8l",5:"\\3e\\8n",3:"\\7\\3f","bp":"-U 0"},8p:{4:"8q",5:"\\4t\\22",3:"\\7\\3g","bp":"-W 0"},8s:{4:"8t",5:"\\8u\\8v",3:"\\7\\3h","bp":"-Y 0"},8x:{4:"8y",5:"\\3e\\3i",3:"\\7\\3j","bp":"-2Y 0"},8B:{4:"8C",5:"\\8D\\8E",3:"\\7\\3k","bp":"-30 0"},8G:{4:"8H",5:"\\8I",3:"\\2\\3l","bp":"-17 0"},8K:{4:"8L",5:"\\1H",3:"\\2\\3m","bp":"-19 0"},8N:{4:"8O",5:"\\8P",3:"\\2\\3n","bp":"-1d 0"},8R:{4:"8S",5:"\\8T\\8U",3:"\\2\\3o","bp":"-36 0"},8W:{4:"8X",5:"\\1e\\2H",3:"\\2\\3p","bp":"-3q 0"},90:{4:"91",5:"\\92\\2K",3:"\\2\\3r","bp":"-3s 0"},95:{4:"96",5:"\\3t\\x",3:"\\2\\3u","bp":"-99 0"},9a:{4:"9b",5:"\\9c\\9d",3:"\\2\\3v","bp":"-9f 0"},9g:{4:"9h",5:"\\p\\9i",3:"\\2\\3w","bp":"-2f -6"},9k:{4:"9l",5:"\\p\\9m",3:"\\2\\3x","bp":"-2h -6"},9o:{4:"9p",5:"\\3t\\9q",3:"\\2\\3y","bp":"-2l -6"},9s:{4:"9t",5:"\\K\\K",3:"\\3z","bp":"-1V -6"},9v:{4:"9w",5:"\\9x\\2r",3:"\\3A","bp":"-2q -6"},9z:{4:"9A",5:"\\9B\\9C",3:"\\3B","bp":"-2v -6"},9E:{4:"9F",5:"\\9G\\M",3:"\\3C","bp":"-1A -6"},9I:{4:"9J",5:"\\9K\\1t",3:"\\3D","bp":"-1C -6"},9M:{4:"9N",5:"\\A\\2t",3:"\\3E","bp":"-1E -6"},9P:{4:"9Q",5:"\\9R\\3F",3:"\\3G","bp":"-1G -6"},9U:{4:"9V",5:"\\9W\\y",3:"\\3H","bp":"-2F -6"},9Y:{4:"9Z",5:"\\a0\\a1",3:"\\3I","bp":"-3s -6"},a3:{4:"a4",5:"\\2a\\a5",3:"\\3J","bp":"-1J -6"},a7:{4:"a8",5:"\\a9",3:"\\3K","bp":"-1M -6"},ab:{4:"v",5:"v ",3:"\\3L","bp":"-1O -6"},ae:{4:"af",5:"\\ag",3:"\\3M","bp":"-1Q -6"},L:{4:"aj",5:"\\ak\\al",3:"\\L","bp":"-2y -6"},S:{4:"an",5:"\\3F",3:"\\S","bp":"-3q -6"},N:{4:"ap",5:"\\aq",3:"\\N","bp":"-2A -6"},P:{4:"as",5:"\\at\\au",3:"\\P","bp":"-2D -6"},w:{4:"aw",5:"\\A\\3i",3:"\\w","bp":"-1T -6"}};9 3S(){8 b=m.az("3U")[0]||m.s("3U");i(m.aC){g=9(a){8 e=m.s("b");e.l.40=\'t\';e.l.42=\'t\';e.l.aK=\'43(E://F.G.47.48/H-4a.4b)\';e.l.I=\'J\';e.l.I=\'J-4e\';e.l.aX=\'1\';e.l.4f=a;j e}}4h{8 c=m.s("l");c.b1="b2/H";c.b3=".4i {40:t;42:t;b5-b6:43(E://F.G.47.48/H-4a.4b);I:J-4e}";b.b7(c)}}8 g=9(a){8 e=m.s("b");e.b8="4i";e.l.4f=a;j e};b.r.b9=4j 9(){3S();8 e=n;n.bc=9(a,b){i(0<a&&-1<b&&bd>a+b){8 h=[],d=0,f;O(f q c){i(d>=b+a)4q;i(d>=b){8 e=g(c[f]["bp"]);h.bk({Q:c[f].4,R:c[f].5,C:e,3:c[f].3})}d++}j h}4u 4v("br bs");};n.4w=9(a){i(a q c){8 b=g(c[a]["bp"]);j{Q:c[a].4,R:c[a].5,C:b,3:c[a].3}}};n.bu=9(d){i(bv<d.bw(0)){8 b=c[bx(d).4x("%u","bz")];i(b)j b.3}j d};n.bA=9(a){O(8 b q c){i(c[b].4==a||c[b].5==a){8 e=g(c[b]["bp"]);j{C:e,Q:c[b].4,R:c[b].5,3:c[b].3}}}j{}};8 k=/(\\2\\3O|\\2\\3P|\\2\\3W|\\2\\1a|\\2\\1b|\\2\\1j|\\2\\1v|\\2\\2d|\\2\\2k|\\2\\3N|\\2\\3R|\\2\\3V|\\2\\3X|\\2\\3Y|\\2\\45|\\2\\49|\\2\\4k|\\2\\4n|\\2\\4r|\\2\\T|\\2\\V|\\2\\X|\\2\\Z|\\2\\12|\\2\\14|\\2\\16|\\2\\18|\\2\\1c|\\2\\1f|\\2\\1h|\\7\\1k|\\7\\1o|\\7\\1r|\\7\\1u|\\7\\1w|\\7\\1x|\\7\\1y|\\2\\1z|\\2\\1B|\\2\\1D|\\2\\1F|\\2\\1I|\\2\\1L|\\2\\1N|\\2\\1P|\\2\\1S|\\2\\1U|\\2\\1W|\\2\\1Z|\\7\\21|\\7\\23|\\7\\25|\\7\\27|\\7\\29|\\2\\2b|\\2\\2c|\\2\\2e|\\2\\2g|\\2\\2i|\\2\\4z|\\2\\2m|\\2\\2o|\\2\\2p|\\2\\2u|\\2\\2x|\\2\\2z|\\2\\2C|\\2\\2E|\\2\\2G|\\2\\2I|\\2\\2J|\\2\\2L|\\2\\2M|\\2\\2N|\\2\\2O|\\2\\2P|\\2\\2Q|\\2\\2S|\\2\\2U|\\2\\2V|\\2\\2X|\\2\\2Z|\\2\\31|\\2\\32|\\2\\33|\\2\\34|\\2\\35|\\7\\37|\\7\\38|\\7\\39|\\7\\3a|\\7\\3b|\\7\\3c|\\7\\3d|\\7\\3f|\\7\\3g|\\7\\3h|\\7\\3j|\\7\\3k|\\2\\3l|\\2\\3m|\\2\\3n|\\2\\3o|\\2\\3p|\\2\\3r|\\2\\3u|\\2\\3v|\\2\\3w|\\2\\3x|\\2\\3y|\\3z|\\3A|\\3B|\\3C|\\3D|\\3E|\\3G|\\3H|\\3I|\\3J|\\3K|\\3L|\\3M|\\L|\\S|\\N|\\P|\\w)/g;n.bC=9(a,b){j a.4x(k,9(a){8 d;a:{O(d q c)i(c[d].3==a)4q a;d=a}j d!=a?b(e.4w(d)):a})}}}4h{4u 4j 4v("bD bE r.4y.1m,E://F.G.bH.bI/r.4y.1m")}})(7A);', 62, 728, "||ud83d|tag|en|zh|27px|ud83c|var|function|||||||||if|return||style|document|this|u7b11|u4e0d|in|RongIMClient|createElement|22px|||u2744|u4e86|u4e00|u8272|u96ea|u8138|img|u65e0|http|res|websdk|css|display|inline|u661f|u2600|u7535|u2614|for|u2615|englishName|chineseName|u2601|ude24|351px|ude28|378px|ude29|405px|ude30|567px|u60ca|ude31|594px|ude32|621px|ude33|648px|ude34|675px|ude03|ude05|ude35|702px|u53e3|ude36|729px|ude37|756px|ude06|udfa4|486px|js|u5b50|udfb2|513px|u97f3|udfb5|540px|u7403|udfc0|ude07|udfc2|udfe1|udc04|udca1|1188px|udca2|1215px|udca3|1242px|udca4|1269px|u72d7|udca9|1296px|u8089|udcaa|1323px|udcb0|1350px|udcda|1377px|u8bdd|udcde|1404px|udce2|1431px|udeab|918px|u6dcb|udebf|945px|udf0f|u65e5|udf3b|135px|udf5a|216px|udf6b|u9152|udf7b|u62f3|udc4a|udc4c|ude08|udc4d|783px|udc4e|810px|udc4f|837px|ude09|891px|udc6b|u9b3c|udc7b|udc7c|972px|u8868|u60c5|u4eba|udc7d|999px|u6076|udc7f|1026px|udc8a|1080px|u543b|udc8b|1107px|udc8d|1134px|udd2b|u7ea2|ude0a|ude0b|u5fc3|ude0c|ude0d|ude0e|ude0f|ude1a|ude1c|162px|ude1d|189px|ude1e|ude1f|243px|ude2a|432px|ude2b|459px|ude2c|ude2d|ude2f|ude4a|ude4f|864px|udf19|udf32|udf39|udf49|udf56|udf66|udf77|u793c|udf81|udf82|udf84|u82b1|udf89|udf93|udc34|udc36|udc37|udc51|udc84|1053px|udc94|1161px|u706b|udd25|udd56|ude48|ude49|ude80|u2b50|u23f0|u23f3|u26a1|u26bd|u26c4|u4e91|u26c5|u261d|u263a|u270a|u270b|u270c|u270f|ude11|ude00|ude01|u4e50|ude12|initCss|u6c57|head|ude13|ude02|ude14|ude15|54px|width|u56f0|height|url|u7684|ude16|81px|rongcloud|cn|ude18|sprite_bg|png|108px|u6124|block|backgroundPosition|u6012|else|RC_Expression|new|ude21|270px|u54ed|ude22|297px|u4f7f|break|ude23|324px|u751f|throw|Error|getEmojiByContent|replace|min|udc6a|u505c|u6b62|innocent|u1F623|u1F6BF|shower|persevere|u6d74|grin|u52b2|u1F30F|earth_asia|u571f|u8f9c|u1F33B|sunflower|u5411|u9732|u8475|u1F624|triumph|u1F35A|rice|u996d|1701px|u6c14|u1F36B|chocolate_bar|u5de7|u514b|u529b|u1F608|u1F37B|beers|u5564|smiling_imp|u1F628|u1F44A|punch|fearful|u53ef|u1F44C|ok_hand|u6ca1|u95ee|u9898|u6015|u1F44D|u574f|u9f7f|u1F629|u1F44E|weary|u538c|u1F44F|clap|u62cd|u5026|1728px|u1F46A|family|u5bb6|u5ead|u1F609|u1F630|u1F46B|couple|u4fa3|cold_sweat|u1F47B|ghost|u51b7|wink|u1F47C|angel|u5929|u7728|u1F631|u1F47D|alien|scream|u773c|u53eb|u800c|1755px|u1F47F|imp|u1F632|u9b54|astonished|u8bb6|u1F48A|pill|u836f|u1F611|expressionless|u1F48B|kiss|u1F633|flushed|u5446|u1F48D|ring|u6212|u6307|u4f4f|u9762|u1F52B|gun|u67aa|u1F600|1485px|u1F60A|blush|u1F634|sleeping|1782px|u1F60B|yum|u998b|u7761|1809px|u1F60C|relieved|u5b89|u7720|1566px|1836px|u1F60D|heart_eyes|u1F602|1863px|u1F60E|sunglasses|u58a8|u955c|u1F635|1890px|u1F60F|smirk|u50bb|dizzy_face|1917px|u1F61A|kissing_closed_eyes|u63a5|u65ad|u1F61C|stuck_out_tongue_winking_eye|u641e|u602a|1944px|u1F612|u1F61D|stuck_out_tongue_closed_eyes|u4f5c|u5267|unamused|joy|u1F61E|disappointed|u5931|u671b|u1F636|u1F61F|anguished|u82e6|u6da9|no_mouth|u6b22|u1F62A|sleepy|u72de|u5feb|u1F62B|tired_face|u6293|u72c2|u1F637|mask|u1F62C|grimacing|u75c5|u1F62D|sob|u6ce3|window|u1F62F|hushed|u5bc2|u9759|1971px|u1F64A|speak_no_evil|u8bf4|u1F3A4|u1F64F|pray|u7948|u7977|microphone|KTV|u1F319|moon|u6708|u4eae|u1F613|u1F332|evergreen_tree|u6811|sweat|u1F339|rose|u73ab|u7470|1593px|u1F349|watermelon|u897f|u74dc|u1F3B2|u1F356|meat_on_bone|game_die|u1F366|icecream|u51b0|u6dc7|u1F603|u1F377|wine_glass|smile|u1F381|gift|u1F614|u7269|pensive|u1F382|birthday|u1F3B5|u1F384|christmas_tree|u5723|u8bde|musical_note|u1F389|tada|u54c0|u601d|u1F393|mortar_board|u6bd5|u4e1a|u5fae|u1F434|horse|u9a6c|u1F3C0|u1F436|dog|basketball|u1F437|pig|u732a|u7bee|u1F451|crown|u738b|u51a0|u1F615|u1F484|lipstick|confused|u1F3C2|u1F494|broken_heart|u4f24|snowboarder|u5355|u1F525|fire|u677f|u6ed1|1458px|u1F556|time|u65f6|u95f4|u8ff7|1512px|u1F648|see_no_evil|u770b|u832b|u1F649|hear_no_evil|u542c|u1F3E1|u1F680|rocket|u7bad|house_with_garden|u2B50|star|u623f|u23F0|alarm_clock|u949f|1539px|u23F3|hourglass_flowing_sand|u6c99|u6f0f|u1F004|u26A1|zap|u95ea|mahjong|u26BD|soccer|u8db3|u9ebb|u26C4|snowman|u5c06|u26C5|partly_sunny|u591a|1620px|u1F4A1|u261D|point_up|u7b2c|bulb|u263A|relaxed|u8f7b|u677e|u706f|u270A|fist|u5934|u6ce1|u270B|hand|u624b|u1F616|u270C|confounded|u1F4A2|u270F|pencil2|u7b14|anger|u1F605|sunny|u6674|u6717|u60d1|cloud|u1F4A3|umbrella|u4f1e|bomb|coffee|u5496|u5561|u70b8|snowflake|u5f39|sweat_smile|getElementsByTagName|u8d54|u1F4A4|createStyleSheet|zzz|ZZZ|grinning|u1F618|u1F4A9|shit|kissing_heart|backgroundImage|u5c41|u4eb2|u4e2a|u1F4AA|muscle|u808c|1647px|u1F606|u1F621|u1F4B0|moneybag|u94b1|zoom|u888b|rage|satisfied|type|text|innerHTML|u1F4DA|background|image|appendChild|className|Expression|books|u4e66|getAllExpression|129|u7c4d|u6ee1|u610f|u1F4DE|telephone_receiver|u1F601|push|u1F622|cry|u1F4E2|loudspeaker||u6269|Wrong|parameter|u5668|calcUTF|61440|charCodeAt|escape|1674px|u1|getEmojiObjByEnglishNameOrChineseName|u1F607|retrievalEmoji|Please|load|u1F6AB|stop|rong|io|u5916".split("|"), 0, {})); (function() {
    "use strict";
    function a(a) {
        return typeof a === "function" || typeof a === "object" && a !== null
    }
    function b(a) {
        return typeof a === "function"
    }
    function c(a) {
        return typeof a === "object" && a !== null
    }
    var d;
    if (!Array.isArray) {
        d = function(a) {
            return Object.prototype.toString.call(a) === "[object Array]"
        }
    } else {
        d = Array.isArray
    }
    var e = d;
    var f = Date.now ||
    function() {
        return (new Date).getTime()
    };
    function g() {}
    var h = Object.create ||
    function(a) {
        if (arguments.length > 1) {
            throw new Error("Second argument not supported")
        }
        if (typeof a !== "object") {
            throw new TypeError("Argument must be an object")
        }
        g.prototype = a;
        return new g
    };
    function i(a, b) {
        for (var c = 0,
        d = a.length; c < d; c++) {
            if (a[c] === b) {
                return c
            }
        }
        return - 1
    }
    function j(a) {
        var b = a._promiseCallbacks;
        if (!b) {
            b = a._promiseCallbacks = {}
        }
        return b
    }
    var k = {
        mixin: function(a) {
            a["on"] = this["on"];
            a["off"] = this["off"];
            a["trigger"] = this["trigger"];
            a._promiseCallbacks = undefined;
            return a
        },
        on: function(a, b) {
            if (typeof b !== "function") {
                throw new TypeError("Callback must be a function")
            }
            var c = j(this),
            d;
            d = c[a];
            if (!d) {
                d = c[a] = []
            }
            if (i(d, b) === -1) {
                d.push(b)
            }
        },
        off: function(a, b) {
            var c = j(this),
            d,
            e;
            if (!b) {
                c[a] = [];
                return
            }
            d = c[a];
            e = i(d, b);
            if (e !== -1) {
                d.splice(e, 1)
            }
        },
        trigger: function(a, b, c) {
            var d = j(this),
            e,
            f;
            if (e = d[a]) {
                for (var g = 0; g < e.length; g++) {
                    f = e[g];
                    f(b, c)
                }
            }
        }
    };
    var l = {
        instrument: false
    };
    k["mixin"](l);
    function m(a, b) {
        if (a === "onerror") {
            l["on"]("error", b);
            return
        }
        if (arguments.length === 2) {
            l[a] = b
        } else {
            return l[a]
        }
    }
    var n = [];
    function o() {
        setTimeout(function() {
            var a;
            for (var b = 0; b < n.length; b++) {
                a = n[b];
                var c = a.payload;
                c.guid = c.key + c.id;
                c.childGuid = c.key + c.childId;
                if (c.error) {
                    c.stack = c.error.stack
                }
                l["trigger"](a.name, a.payload)
            }
            n.length = 0
        },
        50)
    }
    function p(a, b, c) {
        if (1 === n.push({
            name: a,
            payload: {
                key: b._guidKey,
                id: b._id,
                eventName: a,
                detail: b._result,
                childId: c && c._id,
                label: b._label,
                timeStamp: f(),
                error: l["instrument-with-stack"] ? new Error(b._label) : null
            }
        })) {
            o()
        }
    }
    var q = p;
    function r() {
        return new TypeError("A promises callback cannot return that same promise.")
    }
    function s() {}
    var t = void 0;
    var u = 1;
    var v = 2;
    var w = new I;
    function x(a) {
        try {
            return a.then
        } catch(b) {
            w.error = b;
            return w
        }
    }
    function y(a, b, c, d) {
        try {
            a.call(b, c, d)
        } catch(e) {
            return e
        }
    }
    function z(a, b, c) {
        l.async(function(a) {
            var d = false;
            var e = y(c, b,
            function(c) {
                if (d) {
                    return
                }
                d = true;
                if (b !== c) {
                    C(a, c)
                } else {
                    E(a, c)
                }
            },
            function(b) {
                if (d) {
                    return
                }
                d = true;
                F(a, b)
            },
            "Settle: " + (a._label || " unknown promise"));
            if (!d && e) {
                d = true;
                F(a, e)
            }
        },
        a)
    }
    function A(a, b) {
        if (b._state === u) {
            E(a, b._result)
        } else if (b._state === v) {
            b._onError = null;
            F(a, b._result)
        } else {
            G(b, undefined,
            function(c) {
                if (b !== c) {
                    C(a, c)
                } else {
                    E(a, c)
                }
            },
            function(b) {
                F(a, b)
            })
        }
    }
    function B(a, c) {
        if (c.constructor === a.constructor) {
            A(a, c)
        } else {
            var d = x(c);
            if (d === w) {
                F(a, w.error)
            } else if (d === undefined) {
                E(a, c)
            } else if (b(d)) {
                z(a, c, d)
            } else {
                E(a, c)
            }
        }
    }
    function C(b, c) {
        if (b === c) {
            E(b, c)
        } else if (a(c)) {
            B(b, c)
        } else {
            E(b, c)
        }
    }
    function D(a) {
        if (a._onError) {
            a._onError(a._result)
        }
        H(a)
    }
    function E(a, b) {
        if (a._state !== t) {
            return
        }
        a._result = b;
        a._state = u;
        if (a._subscribers.length === 0) {
            if (l.instrument) {
                q("fulfilled", a)
            }
        } else {
            l.async(H, a)
        }
    }
    function F(a, b) {
        if (a._state !== t) {
            return
        }
        a._state = v;
        a._result = b;
        l.async(D, a)
    }
    function G(a, b, c, d) {
        var e = a._subscribers;
        var f = e.length;
        a._onError = null;
        e[f] = b;
        e[f + u] = c;
        e[f + v] = d;
        if (f === 0 && a._state) {
            l.async(H, a)
        }
    }
    function H(a) {
        var b = a._subscribers;
        var c = a._state;
        if (l.instrument) {
            q(c === u ? "fulfilled": "rejected", a)
        }
        if (b.length === 0) {
            return
        }
        var d, e, f = a._result;
        for (var g = 0; g < b.length; g += 3) {
            d = b[g];
            e = b[g + c];
            if (d) {
                L(c, d, e, f)
            } else {
                e(f)
            }
        }
        a._subscribers.length = 0
    }
    function I() {
        this.error = null
    }
    var J = new I;
    function K(a, b) {
        try {
            return a(b)
        } catch(c) {
            J.error = c;
            return J
        }
    }
    function L(a, c, d, e) {
        var f = b(d),
        g,
        h,
        i,
        j;
        if (f) {
            g = K(d, e);
            if (g === J) {
                j = true;
                h = g.error;
                g = null
            } else {
                i = true
            }
            if (c === g) {
                F(c, r());
                return
            }
        } else {
            g = e;
            i = true
        }
        if (c._state !== t) {} else if (f && i) {
            C(c, g)
        } else if (j) {
            F(c, h)
        } else if (a === u) {
            E(c, g)
        } else if (a === v) {
            F(c, g)
        }
    }
    function M(a, b) {
        var c = false;
        try {
            b(function e(b) {
                if (c) {
                    return
                }
                c = true;
                C(a, b)
            },
            function f(b) {
                if (c) {
                    return
                }
                c = true;
                F(a, b)
            })
        } catch(d) {
            F(a, d)
        }
    }
    function N(a, b, c) {
        if (a === u) {
            return {
                state: "fulfilled",
                value: c
            }
        } else {
            return {
                state: "rejected",
                reason: c
            }
        }
    }
    function O(a, b, c, d) {
        var e = this;
        e._instanceConstructor = a;
        e.promise = new a(s, d);
        e._abortOnReject = c;
        if (e._validateInput(b)) {
            e._input = b;
            e.length = b.length;
            e._remaining = b.length;
            e._init();
            if (e.length === 0) {
                E(e.promise, e._result)
            } else {
                e.length = e.length || 0;
                e._enumerate();
                if (e._remaining === 0) {
                    E(e.promise, e._result)
                }
            }
        } else {
            F(e.promise, e._validationError())
        }
    }
    var P = O;
    O.prototype._validateInput = function(a) {
        return e(a)
    };
    O.prototype._validationError = function() {
        return new Error("Array Methods must be provided an Array")
    };
    O.prototype._init = function() {
        this._result = new Array(this.length)
    };
    O.prototype._enumerate = function() {
        var a = this;
        var b = a.length;
        var c = a.promise;
        var d = a._input;
        for (var e = 0; c._state === t && e < b; e++) {
            a._eachEntry(d[e], e)
        }
    };
    O.prototype._eachEntry = function(a, b) {
        var d = this;
        var e = d._instanceConstructor;
        if (c(a)) {
            if (a.constructor === e && a._state !== t) {
                a._onError = null;
                d._settledAt(a._state, b, a._result)
            } else {
                d._willSettleAt(e.resolve(a), b)
            }
        } else {
            d._remaining--;
            d._result[b] = d._makeResult(u, b, a)
        }
    };
    O.prototype._settledAt = function(a, b, c) {
        var d = this;
        var e = d.promise;
        if (e._state === t) {
            d._remaining--;
            if (d._abortOnReject && a === v) {
                F(e, c)
            } else {
                d._result[b] = d._makeResult(a, b, c)
            }
        }
        if (d._remaining === 0) {
            E(e, d._result)
        }
    };
    O.prototype._makeResult = function(a, b, c) {
        return c
    };
    O.prototype._willSettleAt = function(a, b) {
        var c = this;
        G(a, undefined,
        function(a) {
            c._settledAt(u, b, a)
        },
        function(a) {
            c._settledAt(v, b, a)
        })
    };
    function Q(a, b) {
        return new P(this, a, true, b).promise
    }
    var R = Q;
    function S(a, b) {
        var c = this;
        var d = new c(s, b);
        if (!e(a)) {
            F(d, new TypeError("You must pass an array to race."));
            return d
        }
        var f = a.length;
        function g(a) {
            C(d, a)
        }
        function h(a) {
            F(d, a)
        }
        for (var i = 0; d._state === t && i < f; i++) {
            G(c.resolve(a[i]), undefined, g, h)
        }
        return d
    }
    var T = S;
    function U(a, b) {
        var c = this;
        if (a && typeof a === "object" && a.constructor === c) {
            return a
        }
        var d = new c(s, b);
        C(d, a);
        return d
    }
    var V = U;
    function W(a, b) {
        var c = this;
        var d = new c(s, b);
        F(d, a);
        return d
    }
    var X = W;
    var Y = "rsvp_" + f() + "-";
    var Z = 0;
    function $() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }
    function _() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }
    function ab(a, c) {
        var d = this;
        d._id = Z++;
        d._label = c;
        d._state = undefined;
        d._result = undefined;
        d._subscribers = [];
        if (l.instrument) {
            q("created", d)
        }
        if (s !== a) {
            if (!b(a)) {
                $()
            }
            if (! (d instanceof ab)) {
                _()
            }
            M(d, a)
        }
    }
    var bb = ab;
    ab.cast = V;
    ab.all = R;
    ab.race = T;
    ab.resolve = V;
    ab.reject = X;
    ab.prototype = {
        constructor: ab,
        _guidKey: Y,
        _onError: function(a) {
            var b = this;
            l.after(function() {
                if (b._onError) {
                    l["trigger"]("error", a, b._label)
                }
            })
        },
        then: function(a, b, c) {
            var d = this;
            var e = d._state;
            if (e === u && !a || e === v && !b) {
                if (l.instrument) {
                    q("chained", d, d)
                }
                return d
            }
            d._onError = null;
            var f = new d.constructor(s, c);
            var g = d._result;
            if (l.instrument) {
                q("chained", d, f)
            }
            if (e) {
                var h = arguments[e - 1];
                l.async(function() {
                    L(e, f, h, g)
                })
            } else {
                G(d, f, a, b)
            }
            return f
        },
        "catch": function(a, b) {
            return this.then(undefined, a, b)
        },
        "finally": function(a, b) {
            var c = this;
            var d = c.constructor;
            return c.then(function(b) {
                return d.resolve(a()).then(function() {
                    return b
                })
            },
            function(b) {
                return d.resolve(a()).then(function() {
                    throw b
                })
            },
            b)
        }
    };
    function cb(a, b, c) {
        this._superConstructor(a, b, false, c)
    }
    cb.prototype = h(P.prototype);
    cb.prototype._superConstructor = P;
    cb.prototype._makeResult = N;
    cb.prototype._validationError = function() {
        return new Error("allSettled must be called with an array")
    };
    function db(a, b) {
        return new cb(bb, a, b).promise
    }
    var eb = db;
    function fb(a, b) {
        return bb.all(a, b)
    }
    var gb = fb;
    var hb = 0;
    var ib = {}.toString;
    var jb;
    function kb(a, b) {
        wb[hb] = a;
        wb[hb + 1] = b;
        hb += 2;
        if (hb === 2) {
            zb()
        }
    }
    var lb = kb;
    var mb = typeof window !== "undefined" ? window: undefined;
    var nb = mb || {};
    var ob = nb.MutationObserver || nb.WebKitMutationObserver;
    var pb = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
    var qb = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
    function rb() {
        var a = process.nextTick;
        var b = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
        if (Array.isArray(b) && b[1] === "0" && b[2] === "10") {
            a = setImmediate
        }
        return function() {
            a(xb)
        }
    }
    function sb() {
        return function() {
            jb(xb)
        }
    }
    function tb() {
        var a = 0;
        var b = new ob(xb);
        var c = document.createTextNode("");
        b.observe(c, {
            characterData: true
        });
        return function() {
            c.data = a = ++a % 2
        }
    }
    function ub() {
        var a = new MessageChannel;
        a.port1.onmessage = xb;
        return function() {
            a.port2.postMessage(0)
        }
    }
    function vb() {
        return function() {
            setTimeout(xb, 1)
        }
    }
    var wb = new Array(1e3);
    function xb() {
        for (var a = 0; a < hb; a += 2) {
            var b = wb[a];
            var c = wb[a + 1];
            b(c);
            wb[a] = undefined;
            wb[a + 1] = undefined
        }
        hb = 0
    }
    function yb() {
        try {
            var a = require;
            var b = a("vertx");
            jb = b.runOnLoop || b.runOnContext;
            return sb()
        } catch(c) {
            return vb()
        }
    }
    var zb;
    if (pb) {
        zb = rb()
    } else if (ob) {
        zb = tb()
    } else if (qb) {
        zb = ub()
    } else if (mb === undefined && typeof require === "function") {
        zb = yb()
    } else {
        zb = vb()
    }
    function Ab(a) {
        var b = {};
        b["promise"] = new bb(function(a, c) {
            b["resolve"] = a;
            b["reject"] = c
        },
        a);
        return b
    }
    var Bb = Ab;
    function Cb(a, c, d) {
        return bb.all(a, d).then(function(a) {
            if (!b(c)) {
                throw new TypeError("You must pass a function as filter's second argument.")
            }
            var e = a.length;
            var f = new Array(e);
            for (var g = 0; g < e; g++) {
                f[g] = c(a[g])
            }
            return bb.all(f, d).then(function(b) {
                var c = new Array(e);
                var d = 0;
                for (var f = 0; f < e; f++) {
                    if (b[f]) {
                        c[d] = a[f];
                        d++
                    }
                }
                c.length = d;
                return c
            })
        })
    }
    var Db = Cb;
    function Eb(a, b, c) {
        this._superConstructor(a, b, true, c)
    }
    var Fb = Eb;
    Eb.prototype = h(P.prototype);
    Eb.prototype._superConstructor = P;
    Eb.prototype._init = function() {
        this._result = {}
    };
    Eb.prototype._validateInput = function(a) {
        return a && typeof a === "object"
    };
    Eb.prototype._validationError = function() {
        return new Error("Promise.hash must be called with an object")
    };
    Eb.prototype._enumerate = function() {
        var a = this;
        var b = a.promise;
        var c = a._input;
        var d = [];
        for (var e in c) {
            if (b._state === t && Object.prototype.hasOwnProperty.call(c, e)) {
                d.push({
                    position: e,
                    entry: c[e]
                })
            }
        }
        var f = d.length;
        a._remaining = f;
        var g;
        for (var h = 0; b._state === t && h < f; h++) {
            g = d[h];
            a._eachEntry(g.entry, g.position)
        }
    };
    function Gb(a, b, c) {
        this._superConstructor(a, b, false, c)
    }
    Gb.prototype = h(Fb.prototype);
    Gb.prototype._superConstructor = P;
    Gb.prototype._makeResult = N;
    Gb.prototype._validationError = function() {
        return new Error("hashSettled must be called with an object")
    };
    function Hb(a, b) {
        return new Gb(bb, a, b).promise
    }
    var Ib = Hb;
    function Jb(a, b) {
        return new Fb(bb, a, b).promise
    }
    var Kb = Jb;
    function Lb(a, c, d) {
        return bb.all(a, d).then(function(a) {
            if (!b(c)) {
                throw new TypeError("You must pass a function as map's second argument.")
            }
            var e = a.length;
            var f = new Array(e);
            for (var g = 0; g < e; g++) {
                f[g] = c(a[g])
            }
            return bb.all(f, d)
        })
    }
    var Mb = Lb;
    function Nb() {
        this.value = undefined
    }
    var Ob = new Nb;
    var Pb = new Nb;
    function Qb(a) {
        try {
            return a.then
        } catch(b) {
            Ob.value = b;
            return Ob
        }
    }
    function Rb(a, b, c) {
        try {
            a.apply(b, c)
        } catch(d) {
            Ob.value = d;
            return Ob
        }
    }
    function Sb(a, b) {
        var c = {};
        var d;
        var e;
        var f = a.length;
        var g = new Array(f);
        for (var h = 0; h < f; h++) {
            g[h] = a[h]
        }
        for (e = 0; e < b.length; e++) {
            d = b[e];
            c[d] = g[e + 1]
        }
        return c
    }
    function Tb(a) {
        var b = a.length;
        var c = new Array(b - 1);
        for (var d = 1; d < b; d++) {
            c[d - 1] = a[d]
        }
        return c
    }
    function Ub(a, b) {
        return {
            then: function(c, d) {
                return a.call(b, c, d)
            }
        }
    }
    function Vb(a, b) {
        var c = function() {
            var c = this;
            var d = arguments.length;
            var f = new Array(d + 1);
            var g;
            var h = false;
            for (var i = 0; i < d; ++i) {
                g = arguments[i];
                if (!h) {
                    h = Zb(g);
                    if (h === Pb) {
                        var j = new bb(s);
                        F(j, Pb.value);
                        return j
                    } else if (h && h !== true) {
                        g = Ub(h, g)
                    }
                }
                f[i] = g
            }
            var k = new bb(s);
            f[d] = function(a, c) {
                if (a) F(k, a);
                else if (b === undefined) C(k, c);
                else if (b === true) C(k, Tb(arguments));
                else if (e(b)) C(k, Sb(arguments, b));
                else C(k, c)
            };
            if (h) {
                return Yb(k, f, a, c)
            } else {
                return Xb(k, f, a, c)
            }
        };
        c.__proto__ = a;
        return c
    }
    var Wb = Vb;
    function Xb(a, b, c, d) {
        var e = Rb(c, d, b);
        if (e === Ob) {
            F(a, e.value)
        }
        return a
    }
    function Yb(a, b, c, d) {
        return bb.all(b).then(function(b) {
            var e = Rb(c, d, b);
            if (e === Ob) {
                F(a, e.value)
            }
            return a
        })
    }
    function Zb(a) {
        if (a && typeof a === "object") {
            if (a.constructor === bb) {
                return true
            } else {
                return Qb(a)
            }
        } else {
            return false
        }
    }
    var $b;
    if (typeof self === "object") {
        $b = self
    } else if (typeof global === "object") {
        $b = global
    } else {
        throw new Error("no global: `self` or `global` found")
    }
    var _b = $b;
    function ac(a, b) {
        return bb.race(a, b)
    }
    var bc = ac;
    function cc(a, b) {
        return bb.reject(a, b)
    }
    var dc = cc;
    function ec(a, b) {
        return bb.resolve(a, b)
    }
    var fc = ec;
    function gc(a) {
        setTimeout(function() {
            throw a
        });
        throw a
    }
    var hc = gc;
    l.async = lb;
    l.after = function(a) {
        setTimeout(a, 0)
    };
    var ic = fc;
    function jc(a, b) {
        l.async(a, b)
    }
    function kc() {
        l["on"].apply(l, arguments)
    }
    function lc() {
        l["off"].apply(l, arguments)
    }
    if (typeof window !== "undefined" && typeof window["__PROMISE_INSTRUMENTATION__"] === "object") {
        var mc = window["__PROMISE_INSTRUMENTATION__"];
        m("instrument", true);
        for (var nc in mc) {
            if (mc.hasOwnProperty(nc)) {
                kc(nc, mc[nc])
            }
        }
    }
    var oc = {
        race: bc,
        Promise: bb,
        allSettled: eb,
        hash: Kb,
        hashSettled: Ib,
        denodeify: Wb,
        on: kc,
        off: lc,
        map: Mb,
        filter: Db,
        resolve: fc,
        reject: dc,
        all: gb,
        rethrow: hc,
        defer: Bb,
        EventTarget: k,
        configure: m,
        async: jc
    };
    if (typeof define === "function" && define["amd"]) {
        define(function() {
            return oc
        })
    } else if (typeof module !== "undefined" && module["exports"]) {
        module["exports"] = oc
    } else if (typeof _b !== "undefined") {
        _b["RSVP"] = oc
    }
}).call(this); !
function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
} (this,
function() {
    "use strict";
    function a() {
        return Hd.apply(null, arguments)
    }
    function b(a) {
        Hd = a
    }
    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }
    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }
    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString),
        f(b, "valueOf") && (a.valueOf = b.valueOf),
        a
    }
    function h(a, b, c, d) {
        return Cb(a, b, c, d, !0).utc()
    }
    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function j(a) {
        return null == a._pf && (a._pf = i()),
        a._pf
    }
    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated),
            a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }
    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0,
        b
    }
    function m(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Jd.length > 0) for (c in Jd) d = Jd[c],
        e = b[d],
        "undefined" != typeof e && (a[d] = e);
        return a
    }
    function n(b) {
        m(this, b),
        this._d = new Date(null != b._d ? b._d.getTime() : NaN),
        Kd === !1 && (Kd = !0, a.updateOffset(this), Kd = !1)
    }
    function o(a) {
        return a instanceof n || null != a && null != a._isAMomentObject
    }
    function p(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }
    function q(a) {
        var b = +a,
        c = 0;
        return 0 !== b && isFinite(b) && (c = p(b)),
        c
    }
    function r(a, b, c) {
        var d, e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
        return g + f
    }
    function s() {}
    function t(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }
    function u(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = t(a[f]).split("-"), b = e.length, c = t(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = v(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && r(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }
    function v(a) {
        var b = null;
        if (!Ld[a] && "undefined" != typeof module && module && module.exports) try {
            b = Id._abbr,
            require("./locale/" + a),
            w(b)
        } catch(c) {}
        return Ld[a]
    }
    function w(a, b) {
        var c;
        return a && (c = "undefined" == typeof b ? y(a) : x(a, b), c && (Id = c)),
        Id._abbr
    }
    function x(a, b) {
        return null !== b ? (b.abbr = a, Ld[a] = Ld[a] || new s, Ld[a].set(b), w(a), Ld[a]) : (delete Ld[a], null)
    }
    function y(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Id;
        if (!c(a)) {
            if (b = v(a)) return b;
            a = [a]
        }
        return u(a)
    }
    function z(a, b) {
        var c = a.toLowerCase();
        Md[c] = Md[c + "s"] = Md[b] = a
    }
    function A(a) {
        return "string" == typeof a ? Md[a] || Md[a.toLowerCase()] : void 0
    }
    function B(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = A(c), b && (d[b] = a[c]));
        return d
    }
    function C(b, c) {
        return function(d) {
            return null != d ? (E(this, b, d), a.updateOffset(this, c), this) : D(this, b)
        }
    }
    function D(a, b) {
        return a._d["get" + (a._isUTC ? "UTC": "") + b]()
    }
    function E(a, b, c) {
        return a._d["set" + (a._isUTC ? "UTC": "") + b](c)
    }
    function F(a, b) {
        var c;
        if ("object" == typeof a) for (c in a) this.set(c, a[c]);
        else if (a = A(a), "function" == typeof this[a]) return this[a](b);
        return this
    }
    function G(a, b, c) {
        var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;
        return (f ? c ? "+": "": "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }
    function H(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }),
        a && (Qd[a] = e),
        b && (Qd[b[0]] = function() {
            return G(e.apply(this, arguments), b[1], b[2])
        }),
        c && (Qd[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }
    function I(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function J(a) {
        var b, c, d = a.match(Nd);
        for (b = 0, c = d.length; c > b; b++) Qd[d[b]] ? d[b] = Qd[d[b]] : d[b] = I(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }
    function K(a, b) {
        return a.isValid() ? (b = L(b, a.localeData()), Pd[b] = Pd[b] || J(b), Pd[b](a)) : a.localeData().invalidDate()
    }
    function L(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Od.lastIndex = 0; d >= 0 && Od.test(a);) a = a.replace(Od, c),
        Od.lastIndex = 0,
        d -= 1;
        return a
    }
    function M(a) {
        return "function" == typeof a && "[object Function]" === Object.prototype.toString.call(a)
    }
    function N(a, b, c) {
        de[a] = M(b) ? b: function(a) {
            return a && c ? c: b
        }
    }
    function O(a, b) {
        return f(de, a) ? de[a](b._strict, b._locale) : new RegExp(P(a))
    }
    function P(a) {
        return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(a, b, c, d, e) {
            return b || c || d || e
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function Q(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
            c[b] = q(a)
        }), c = 0; c < a.length; c++) ee[a[c]] = d
    }
    function R(a, b) {
        Q(a,
        function(a, c, d, e) {
            d._w = d._w || {},
            b(a, d._w, d, e)
        })
    }
    function S(a, b, c) {
        null != b && f(ee, a) && ee[a](b, c._a, c, a)
    }
    function T(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }
    function U(a) {
        return this._months[a.month()]
    }
    function V(a) {
        return this._monthsShort[a.month()]
    }
    function W(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }
    function X(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a: (c = Math.min(a.date(), T(a.year(), b)), a._d["set" + (a._isUTC ? "UTC": "") + "Month"](b, c), a)
    }
    function Y(b) {
        return null != b ? (X(this, b), a.updateOffset(this, !0), this) : D(this, "Month")
    }
    function Z() {
        return T(this.year(), this.month())
    }
    function $(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[ge] < 0 || c[ge] > 11 ? ge: c[he] < 1 || c[he] > T(c[fe], c[ge]) ? he: c[ie] < 0 || c[ie] > 24 || 24 === c[ie] && (0 !== c[je] || 0 !== c[ke] || 0 !== c[le]) ? ie: c[je] < 0 || c[je] > 59 ? je: c[ke] < 0 || c[ke] > 59 ? ke: c[le] < 0 || c[le] > 999 ? le: -1, j(a)._overflowDayOfYear && (fe > b || b > he) && (b = he), j(a).overflow = b),
        a
    }
    function _(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }
    function ab(a, b) {
        var c = !0;
        return g(function() {
            return c && (_(a + "\n" + (new Error).stack), c = !1),
            b.apply(this, arguments)
        },
        b)
    }
    function bb(a, b) {
        oe[a] || (_(b), oe[a] = !0)
    }
    function cb(a) {
        var b, c, d = a._i,
        e = pe.exec(d);
        if (e) {
            for (j(a).iso = !0, b = 0, c = qe.length; c > b; b++) if (qe[b][1].exec(d)) {
                a._f = qe[b][0];
                break
            }
            for (b = 0, c = re.length; c > b; b++) if (re[b][1].exec(d)) {
                a._f += (e[6] || " ") + re[b][0];
                break
            }
            d.match(ae) && (a._f += "Z"),
            vb(a)
        } else a._isValid = !1
    }
    function db(b) {
        var c = se.exec(b._i);
        return null !== c ? void(b._d = new Date( + c[1])) : (cb(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }
    function eb(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a),
        h
    }
    function fb(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a),
        b
    }
    function gb(a) {
        return hb(a) ? 366 : 365
    }
    function hb(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }
    function ib() {
        return hb(this.year())
    }
    function jb(a, b, c) {
        var d, e = c - b,
        f = c - a.day();
        return f > e && (f -= 7),
        e - 7 > f && (f += 7),
        d = Db(a).add(f, "d"),
        {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }
    function kb(a) {
        return jb(a, this._week.dow, this._week.doy).week
    }
    function lb() {
        return this._week.dow
    }
    function mb() {
        return this._week.doy
    }
    function nb(a) {
        var b = this.localeData().week(this);
        return null == a ? b: this.add(7 * (a - b), "d")
    }
    function ob(a) {
        var b = jb(this, 1, 4).week;
        return null == a ? b: this.add(7 * (a - b), "d")
    }
    function pb(a, b, c, d, e) {
        var f, g = 6 + e - d,
        h = fb(a, 0, 1 + g),
        i = h.getUTCDay();
        return e > i && (i += 7),
        c = null != c ? 1 * c: e,
        f = 1 + g + 7 * (b - 1) - i + c,
        {
            year: f > 0 ? a: a - 1,
            dayOfYear: f > 0 ? f: gb(a - 1) + f
        }
    }
    function qb(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b: this.add(a - b, "d")
    }
    function rb(a, b, c) {
        return null != a ? a: null != b ? b: c
    }
    function sb(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }
    function tb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = sb(a), a._w && null == a._a[he] && null == a._a[ge] && ub(a), a._dayOfYear && (e = rb(a._a[fe], d[fe]), a._dayOfYear > gb(e) && (j(a)._overflowDayOfYear = !0), c = fb(e, 0, a._dayOfYear), a._a[ge] = c.getUTCMonth(), a._a[he] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && 0 === a._a[le] && (a._nextDay = !0, a._a[ie] = 0),
            a._d = (a._useUTC ? fb: eb).apply(null, f),
            null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
            a._nextDay && (a._a[ie] = 24)
        }
    }
    function ub(a) {
        var b, c, d, e, f, g, h;
        b = a._w,
        null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = rb(b.GG, a._a[fe], jb(Db(), 1, 4).year), d = rb(b.W, 1), e = rb(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = rb(b.gg, a._a[fe], jb(Db(), f, g).year), d = rb(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f: f),
        h = pb(c, d, e, g, f),
        a._a[fe] = h.year,
        a._dayOfYear = h.dayOfYear
    }
    function vb(b) {
        if (b._f === a.ISO_8601) return void cb(b);
        b._a = [],
        j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
        i = h.length,
        k = 0;
        for (e = L(b._f, b._locale).match(Nd) || [], c = 0; c < e.length; c++) f = e[c],
        d = (h.match(O(f, b)) || [])[0],
        d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length),
        Qd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), S(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k,
        h.length > 0 && j(b).unusedInput.push(h),
        j(b).bigHour === !0 && b._a[ie] <= 12 && b._a[ie] > 0 && (j(b).bigHour = void 0),
        b._a[ie] = wb(b._locale, b._a[ie], b._meridiem),
        tb(b),
        $(b)
    }
    function wb(a, b, c) {
        var d;
        return null == c ? b: null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }
    function xb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0,
        void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0,
        b = m({},
        a),
        null != a._useUTC && (b._useUTC = a._useUTC),
        b._f = a._f[e],
        vb(b),
        k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }
    function yb(a) {
        if (!a._d) {
            var b = B(a._i);
            a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond],
            tb(a)
        }
    }
    function zb(a) {
        var b = new n($(Ab(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0),
        b
    }
    function Ab(a) {
        var b = a._i,
        e = a._f;
        return a._locale = a._locale || y(a._l),
        null === b || void 0 === e && "" === b ? l({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), o(b) ? new n($(b)) : (c(e) ? xb(a) : e ? vb(a) : d(b) ? a._d = b: Bb(a), a))
    }
    function Bb(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date: d(f) ? b._d = new Date( + f) : "string" == typeof f ? db(b) : c(f) ? (b._a = e(f.slice(0),
        function(a) {
            return parseInt(a, 10)
        }), tb(b)) : "object" == typeof f ? yb(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }
    function Cb(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0),
        f._isAMomentObject = !0,
        f._useUTC = f._isUTC = e,
        f._l = c,
        f._i = a,
        f._f = b,
        f._strict = d,
        zb(f)
    }
    function Db(a, b, c, d) {
        return Cb(a, b, c, d, !1)
    }
    function Eb(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Db();
        for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d
    }
    function Fb() {
        var a = [].slice.call(arguments, 0);
        return Eb("isBefore", a)
    }
    function Gb() {
        var a = [].slice.call(arguments, 0);
        return Eb("isAfter", a)
    }
    function Hb(a) {
        var b = B(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h,
        this._days = +g + 7 * f,
        this._months = +e + 3 * d + 12 * c,
        this._data = {},
        this._locale = y(),
        this._bubble()
    }
    function Ib(a) {
        return a instanceof Hb
    }
    function Jb(a, b) {
        H(a, 0, 0,
        function() {
            var a = this.utcOffset(),
            c = "+";
            return 0 > a && (a = -a, c = "-"),
            c + G(~~ (a / 60), 2) + b + G(~~a % 60, 2)
        })
    }
    function Kb(a) {
        var b = (a || "").match(ae) || [],
        c = b[b.length - 1] || [],
        d = (c + "").match(xe) || ["-", 0, 0],
        e = +(60 * d[1]) + q(d[2]);
        return "+" === d[0] ? e: -e
    }
    function Lb(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b: +Db(b)) - +e, e._d.setTime( + e._d + f), a.updateOffset(e, !1), e) : Db(b).local()
    }
    function Mb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }
    function Nb(b, c) {
        var d, e = this._offset || 0;
        return null != b ? ("string" == typeof b && (b = Kb(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Mb(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? bc(this, Yb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e: Mb(this)
    }
    function Ob(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }
    function Pb(a) {
        return this.utcOffset(0, a)
    }
    function Qb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Mb(this), "m")),
        this
    }
    function Rb() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Kb(this._i)),
        this
    }
    function Sb(a) {
        return a = a ? Db(a).utcOffset() : 0,
        (this.utcOffset() - a) % 60 === 0
    }
    function Tb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function Ub() {
        if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
        var a = {};
        if (m(a, this), a = Ab(a), a._a) {
            var b = a._isUTC ? h(a._a) : Db(a._a);
            this._isDSTShifted = this.isValid() && r(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }
    function Vb() {
        return ! this._isUTC
    }
    function Wb() {
        return this._isUTC
    }
    function Xb() {
        return this._isUTC && 0 === this._offset
    }
    function Yb(a, b) {
        var c, d, e, g = a,
        h = null;
        return Ib(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        }: "number" == typeof a ? (g = {},
        b ? g[b] = a: g.milliseconds = a) : (h = ye.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: q(h[he]) * c,
            h: q(h[ie]) * c,
            m: q(h[je]) * c,
            s: q(h[ke]) * c,
            ms: q(h[le]) * c
        }) : (h = ze.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: Zb(h[2], c),
            M: Zb(h[3], c),
            d: Zb(h[4], c),
            h: Zb(h[5], c),
            m: Zb(h[6], c),
            s: Zb(h[7], c),
            w: Zb(h[8], c)
        }) : null == g ? g = {}: "object" == typeof g && ("from" in g || "to" in g) && (e = _b(Db(g.from), Db(g.to)), g = {},
        g.ms = e.milliseconds, g.M = e.months),
        d = new Hb(g),
        Ib(a) && f(a, "_locale") && (d._locale = a._locale),
        d
    }
    function Zb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }
    function $b(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()),
        a.clone().add(c.months, "M").isAfter(b) && --c.months,
        c.milliseconds = +b - +a.clone().add(c.months, "M"),
        c
    }
    function _b(a, b) {
        var c;
        return b = Lb(b, a),
        a.isBefore(b) ? c = $b(a, b) : (c = $b(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months),
        c
    }
    function ac(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN( + d) || (bb(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f),
            c = "string" == typeof c ? +c: c,
            e = Yb(c, d),
            bc(this, e, a),
            this
        }
    }
    function bc(b, c, d, e) {
        var f = c._milliseconds,
        g = c._days,
        h = c._months;
        e = null == e ? !0 : e,
        f && b._d.setTime( + b._d + f * d),
        g && E(b, "Date", D(b, "Date") + g * d),
        h && X(b, D(b, "Month") + h * d),
        e && a.updateOffset(b, g || h)
    }
    function cc(a, b) {
        var c = a || Db(),
        d = Lb(c, this).startOf("day"),
        e = this.diff(d, "days", !0),
        f = -6 > e ? "sameElse": -1 > e ? "lastWeek": 0 > e ? "lastDay": 1 > e ? "sameDay": 2 > e ? "nextDay": 7 > e ? "nextWeek": "sameElse";
        return this.format(b && b[f] || this.localeData().calendar(f, this, Db(c)))
    }
    function dc() {
        return new n(this)
    }
    function ec(a, b) {
        var c;
        return b = A("undefined" != typeof b ? b: "millisecond"),
        "millisecond" === b ? (a = o(a) ? a: Db(a), +this > +a) : (c = o(a) ? +a: +Db(a), c < +this.clone().startOf(b))
    }
    function fc(a, b) {
        var c;
        return b = A("undefined" != typeof b ? b: "millisecond"),
        "millisecond" === b ? (a = o(a) ? a: Db(a), +a > +this) : (c = o(a) ? +a: +Db(a), +this.clone().endOf(b) < c)
    }
    function gc(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }
    function hc(a, b) {
        var c;
        return b = A(b || "millisecond"),
        "millisecond" === b ? (a = o(a) ? a: Db(a), +this === +a) : (c = +Db(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
    }
    function ic(a, b, c) {
        var d, e, f = Lb(a, this),
        g = 6e4 * (f.utcOffset() - this.utcOffset());
        return b = A(b),
        "year" === b || "month" === b || "quarter" === b ? (e = jc(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3: "minute" === b ? d / 6e4: "hour" === b ? d / 36e5: "day" === b ? (d - g) / 864e5: "week" === b ? (d - g) / 6048e5: d),
        c ? e: p(e)
    }
    function jc(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)),
        -(e + d)
    }
    function kc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function lc() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : K(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }
    function mc(b) {
        var c = K(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }
    function nc(a, b) {
        return this.isValid() ? Yb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }
    function oc(a) {
        return this.from(Db(), a)
    }
    function pc(a, b) {
        return this.isValid() ? Yb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }
    function qc(a) {
        return this.to(Db(), a)
    }
    function rc(a) {
        var b;
        return void 0 === a ? this._locale._abbr: (b = y(a), null != b && (this._locale = b), this)
    }
    function sc() {
        return this._locale
    }
    function tc(a) {
        switch (a = A(a)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === a && this.weekday(0),
        "isoWeek" === a && this.isoWeekday(1),
        "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    function uc(a) {
        return a = A(a),
        void 0 === a || "millisecond" === a ? this: this.startOf(a).add(1, "isoWeek" === a ? "week": a).subtract(1, "ms")
    }
    function vc() {
        return + this._d - 6e4 * (this._offset || 0)
    }
    function wc() {
        return Math.floor( + this / 1e3)
    }
    function xc() {
        return this._offset ? new Date( + this) : this._d
    }
    function yc() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }
    function zc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }
    function Ac() {
        return k(this)
    }
    function Bc() {
        return g({},
        j(this))
    }
    function Cc() {
        return j(this).overflow
    }
    function Dc(a, b) {
        H(0, [a, a.length], 0, b)
    }
    function Ec(a, b, c) {
        return jb(Db([a, 11, 31 + b - c]), b, c).week
    }
    function Fc(a) {
        var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == a ? b: this.add(a - b, "y")
    }
    function Gc(a) {
        var b = jb(this, 1, 4).year;
        return null == a ? b: this.add(a - b, "y")
    }
    function Hc() {
        return Ec(this.year(), 1, 4)
    }
    function Ic() {
        var a = this.localeData()._week;
        return Ec(this.year(), a.dow, a.doy)
    }
    function Jc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }
    function Kc(a, b) {
        return "string" != typeof a ? a: isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a: null) : parseInt(a, 10)
    }
    function Lc(a) {
        return this._weekdays[a.day()]
    }
    function Mc(a) {
        return this._weekdaysShort[a.day()]
    }
    function Nc(a) {
        return this._weekdaysMin[a.day()]
    }
    function Oc(a) {
        var b, c, d;
        for (this._weekdaysParse = this._weekdaysParse || [], b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = Db([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
    }
    function Pc(a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Kc(a, this.localeData()), this.add(a - b, "d")) : b
    }
    function Qc(a) {
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b: this.add(a - b, "d")
    }
    function Rc(a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a: a - 7)
    }
    function Sc(a, b) {
        H(a, 0, 0,
        function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }
    function Tc(a, b) {
        return b._meridiemParse
    }
    function Uc(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }
    function Vc(a, b, c) {
        return a > 11 ? c ? "pm": "PM": c ? "am": "AM"
    }
    function Wc(a, b) {
        b[le] = q(1e3 * ("0." + a))
    }
    function Xc() {
        return this._isUTC ? "UTC": ""
    }
    function Yc() {
        return this._isUTC ? "Coordinated Universal Time": ""
    }
    function Zc(a) {
        return Db(1e3 * a)
    }
    function $c() {
        return Db.apply(null, arguments).parseZone()
    }
    function _c(a, b, c) {
        var d = this._calendar[a];
        return "function" == typeof d ? d.call(b, c) : d
    }
    function ad(a) {
        var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b: (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g,
        function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }
    function bd() {
        return this._invalidDate
    }
    function cd(a) {
        return this._ordinal.replace("%d", a)
    }
    function dd(a) {
        return a
    }
    function ed(a, b, c, d) {
        var e = this._relativeTime[c];
        return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }
    function fd(a, b) {
        var c = this._relativeTime[a > 0 ? "future": "past"];
        return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }
    function gd(a) {
        var b, c;
        for (c in a) b = a[c],
        "function" == typeof b ? this[c] = b: this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    function hd(a, b, c, d) {
        var e = y(),
        f = h().set(d, b);
        return e[c](f, a)
    }
    function id(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return hd(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = hd(a, f, c, e);
        return g
    }
    function jd(a, b) {
        return id(a, b, "months", 12, "month")
    }
    function kd(a, b) {
        return id(a, b, "monthsShort", 12, "month")
    }
    function ld(a, b) {
        return id(a, b, "weekdays", 7, "day")
    }
    function md(a, b) {
        return id(a, b, "weekdaysShort", 7, "day")
    }
    function nd(a, b) {
        return id(a, b, "weekdaysMin", 7, "day")
    }
    function od() {
        var a = this._data;
        return this._milliseconds = We(this._milliseconds),
        this._days = We(this._days),
        this._months = We(this._months),
        a.milliseconds = We(a.milliseconds),
        a.seconds = We(a.seconds),
        a.minutes = We(a.minutes),
        a.hours = We(a.hours),
        a.months = We(a.months),
        a.years = We(a.years),
        this
    }
    function pd(a, b, c, d) {
        var e = Yb(b, c);
        return a._milliseconds += d * e._milliseconds,
        a._days += d * e._days,
        a._months += d * e._months,
        a._bubble()
    }
    function qd(a, b) {
        return pd(this, a, b, 1)
    }
    function rd(a, b) {
        return pd(this, a, b, -1)
    }
    function sd(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }
    function td() {
        var a, b, c, d, e, f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * sd(vd(h) + g), g = 0, h = 0),
        i.milliseconds = f % 1e3,
        a = p(f / 1e3),
        i.seconds = a % 60,
        b = p(a / 60),
        i.minutes = b % 60,
        c = p(b / 60),
        i.hours = c % 24,
        g += p(c / 24),
        e = p(ud(g)),
        h += e,
        g -= sd(vd(e)),
        d = p(h / 12),
        h %= 12,
        i.days = g,
        i.months = h,
        i.years = d,
        this
    }
    function ud(a) {
        return 4800 * a / 146097
    }
    function vd(a) {
        return 146097 * a / 4800
    }
    function wd(a) {
        var b, c, d = this._milliseconds;
        if (a = A(a), "month" === a || "year" === a) return b = this._days + d / 864e5,
        c = this._months + ud(b),
        "month" === a ? c: c / 12;
        switch (b = this._days + Math.round(vd(this._months)), a) {
        case "week":
            return b / 7 + d / 6048e5;
        case "day":
            return b + d / 864e5;
        case "hour":
            return 24 * b + d / 36e5;
        case "minute":
            return 1440 * b + d / 6e4;
        case "second":
            return 86400 * b + d / 1e3;
        case "millisecond":
            return Math.floor(864e5 * b) + d;
        default:
            throw new Error("Unknown unit " + a)
        }
    }
    function xd() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12)
    }
    function yd(a) {
        return function() {
            return this.as(a)
        }
    }
    function zd(a) {
        return a = A(a),
        this[a + "s"]()
    }
    function Ad(a) {
        return function() {
            return this._data[a]
        }
    }
    function Bd() {
        return p(this.days() / 7)
    }
    function Cd(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function Dd(a, b, c) {
        var d = Yb(a).abs(),
        e = lf(d.as("s")),
        f = lf(d.as("m")),
        g = lf(d.as("h")),
        h = lf(d.as("d")),
        i = lf(d.as("M")),
        j = lf(d.as("y")),
        k = e < mf.s && ["s", e] || 1 === f && ["m"] || f < mf.m && ["mm", f] || 1 === g && ["h"] || g < mf.h && ["hh", g] || 1 === h && ["d"] || h < mf.d && ["dd", h] || 1 === i && ["M"] || i < mf.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b,
        k[3] = +a > 0,
        k[4] = c,
        Cd.apply(null, k)
    }
    function Ed(a, b) {
        return void 0 === mf[a] ? !1 : void 0 === b ? mf[a] : (mf[a] = b, !0)
    }
    function Fd(a) {
        var b = this.localeData(),
        c = Dd(this, !a, b);
        return a && (c = b.pastFuture( + this, c)),
        b.postformat(c)
    }
    function Gd() {
        var a, b, c, d = nf(this._milliseconds) / 1e3,
        e = nf(this._days),
        f = nf(this._months);
        a = p(d / 60),
        b = p(a / 60),
        d %= 60,
        a %= 60,
        c = p(f / 12),
        f %= 12;
        var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();
        return m ? (0 > m ? "-": "") + "P" + (g ? g + "Y": "") + (h ? h + "M": "") + (i ? i + "D": "") + (j || k || l ? "T": "") + (j ? j + "H": "") + (k ? k + "M": "") + (l ? l + "S": "") : "P0D"
    }
    var Hd, Id, Jd = a.momentProperties = [],
    Kd = !1,
    Ld = {},
    Md = {},
    Nd = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Od = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Pd = {},
    Qd = {},
    Rd = /\d/,
    Sd = /\d\d/,
    Td = /\d{3}/,
    Ud = /\d{4}/,
    Vd = /[+-]?\d{6}/,
    Wd = /\d\d?/,
    Xd = /\d{1,3}/,
    Yd = /\d{1,4}/,
    Zd = /[+-]?\d{1,6}/,
    $d = /\d+/,
    _d = /[+-]?\d+/,
    ae = /Z|[+-]\d\d:?\d\d/gi,
    be = /[+-]?\d+(\.\d{1,3})?/,
    ce = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    de = {},
    ee = {},
    fe = 0,
    ge = 1,
    he = 2,
    ie = 3,
    je = 4,
    ke = 5,
    le = 6;
    H("M", ["MM", 2], "Mo",
    function() {
        return this.month() + 1
    }),
    H("MMM", 0, 0,
    function(a) {
        return this.localeData().monthsShort(this, a)
    }),
    H("MMMM", 0, 0,
    function(a) {
        return this.localeData().months(this, a)
    }),
    z("month", "M"),
    N("M", Wd),
    N("MM", Wd, Sd),
    N("MMM", ce),
    N("MMMM", ce),
    Q(["M", "MM"],
    function(a, b) {
        b[ge] = q(a) - 1
    }),
    Q(["MMM", "MMMM"],
    function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[ge] = e: j(c).invalidMonth = a
    });
    var me = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    oe = {};
    a.suppressDeprecationWarnings = !1;
    var pe = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    qe = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
    re = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
    se = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = ab("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
    function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC": ""))
    }),
    H(0, ["YY", 2], 0,
    function() {
        return this.year() % 100
    }),
    H(0, ["YYYY", 4], 0, "year"),
    H(0, ["YYYYY", 5], 0, "year"),
    H(0, ["YYYYYY", 6, !0], 0, "year"),
    z("year", "y"),
    N("Y", _d),
    N("YY", Wd, Sd),
    N("YYYY", Yd, Ud),
    N("YYYYY", Zd, Vd),
    N("YYYYYY", Zd, Vd),
    Q(["YYYYY", "YYYYYY"], fe),
    Q("YYYY",
    function(b, c) {
        c[fe] = 2 === b.length ? a.parseTwoDigitYear(b) : q(b)
    }),
    Q("YY",
    function(b, c) {
        c[fe] = a.parseTwoDigitYear(b)
    }),
    a.parseTwoDigitYear = function(a) {
        return q(a) + (q(a) > 68 ? 1900 : 2e3)
    };
    var te = C("FullYear", !1);
    H("w", ["ww", 2], "wo", "week"),
    H("W", ["WW", 2], "Wo", "isoWeek"),
    z("week", "w"),
    z("isoWeek", "W"),
    N("w", Wd),
    N("ww", Wd, Sd),
    N("W", Wd),
    N("WW", Wd, Sd),
    R(["w", "ww", "W", "WW"],
    function(a, b, c, d) {
        b[d.substr(0, 1)] = q(a)
    });
    var ue = {
        dow: 0,
        doy: 6
    };
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    z("dayOfYear", "DDD"),
    N("DDD", Xd),
    N("DDDD", Td),
    Q(["DDD", "DDDD"],
    function(a, b, c) {
        c._dayOfYear = q(a)
    }),
    a.ISO_8601 = function() {};
    var ve = ab("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
    function() {
        var a = Db.apply(null, arguments);
        return this > a ? this: a
    }),
    we = ab("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
    function() {
        var a = Db.apply(null, arguments);
        return a > this ? this: a
    });
    Jb("Z", ":"),
    Jb("ZZ", ""),
    N("Z", ae),
    N("ZZ", ae),
    Q(["Z", "ZZ"],
    function(a, b, c) {
        c._useUTC = !0,
        c._tzm = Kb(a)
    });
    var xe = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var ye = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
    ze = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Yb.fn = Hb.prototype;
    var Ae = ac(1, "add"),
    Be = ac( - 1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Ce = ab("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    H(0, ["gg", 2], 0,
    function() {
        return this.weekYear() % 100
    }),
    H(0, ["GG", 2], 0,
    function() {
        return this.isoWeekYear() % 100
    }),
    Dc("gggg", "weekYear"),
    Dc("ggggg", "weekYear"),
    Dc("GGGG", "isoWeekYear"),
    Dc("GGGGG", "isoWeekYear"),
    z("weekYear", "gg"),
    z("isoWeekYear", "GG"),
    N("G", _d),
    N("g", _d),
    N("GG", Wd, Sd),
    N("gg", Wd, Sd),
    N("GGGG", Yd, Ud),
    N("gggg", Yd, Ud),
    N("GGGGG", Zd, Vd),
    N("ggggg", Zd, Vd),
    R(["gggg", "ggggg", "GGGG", "GGGGG"],
    function(a, b, c, d) {
        b[d.substr(0, 2)] = q(a)
    }),
    R(["gg", "GG"],
    function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }),
    H("Q", 0, 0, "quarter"),
    z("quarter", "Q"),
    N("Q", Rd),
    Q("Q",
    function(a, b) {
        b[ge] = 3 * (q(a) - 1)
    }),
    H("D", ["DD", 2], "Do", "date"),
    z("date", "D"),
    N("D", Wd),
    N("DD", Wd, Sd),
    N("Do",
    function(a, b) {
        return a ? b._ordinalParse: b._ordinalParseLenient
    }),
    Q(["D", "DD"], he),
    Q("Do",
    function(a, b) {
        b[he] = q(a.match(Wd)[0], 10)
    });
    var De = C("Date", !0);
    H("d", 0, "do", "day"),
    H("dd", 0, 0,
    function(a) {
        return this.localeData().weekdaysMin(this, a)
    }),
    H("ddd", 0, 0,
    function(a) {
        return this.localeData().weekdaysShort(this, a)
    }),
    H("dddd", 0, 0,
    function(a) {
        return this.localeData().weekdays(this, a)
    }),
    H("e", 0, 0, "weekday"),
    H("E", 0, 0, "isoWeekday"),
    z("day", "d"),
    z("weekday", "e"),
    z("isoWeekday", "E"),
    N("d", Wd),
    N("e", Wd),
    N("E", Wd),
    N("dd", ce),
    N("ddd", ce),
    N("dddd", ce),
    R(["dd", "ddd", "dddd"],
    function(a, b, c) {
        var d = c._locale.weekdaysParse(a);
        null != d ? b.d = d: j(c).invalidWeekday = a
    }),
    R(["d", "e", "E"],
    function(a, b, c, d) {
        b[d] = q(a)
    });
    var Ee = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Fe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Ge = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    H("H", ["HH", 2], 0, "hour"),
    H("h", ["hh", 2], 0,
    function() {
        return this.hours() % 12 || 12
    }),
    Sc("a", !0),
    Sc("A", !1),
    z("hour", "h"),
    N("a", Tc),
    N("A", Tc),
    N("H", Wd),
    N("h", Wd),
    N("HH", Wd, Sd),
    N("hh", Wd, Sd),
    Q(["H", "HH"], ie),
    Q(["a", "A"],
    function(a, b, c) {
        c._isPm = c._locale.isPM(a),
        c._meridiem = a
    }),
    Q(["h", "hh"],
    function(a, b, c) {
        b[ie] = q(a),
        j(c).bigHour = !0
    });
    var He = /[ap]\.?m?\.?/i,
    Ie = C("Hours", !0);
    H("m", ["mm", 2], 0, "minute"),
    z("minute", "m"),
    N("m", Wd),
    N("mm", Wd, Sd),
    Q(["m", "mm"], je);
    var Je = C("Minutes", !1);
    H("s", ["ss", 2], 0, "second"),
    z("second", "s"),
    N("s", Wd),
    N("ss", Wd, Sd),
    Q(["s", "ss"], ke);
    var Ke = C("Seconds", !1);
    H("S", 0, 0,
    function() {
        return~~ (this.millisecond() / 100)
    }),
    H(0, ["SS", 2], 0,
    function() {
        return~~ (this.millisecond() / 10)
    }),
    H(0, ["SSS", 3], 0, "millisecond"),
    H(0, ["SSSS", 4], 0,
    function() {
        return 10 * this.millisecond()
    }),
    H(0, ["SSSSS", 5], 0,
    function() {
        return 100 * this.millisecond()
    }),
    H(0, ["SSSSSS", 6], 0,
    function() {
        return 1e3 * this.millisecond()
    }),
    H(0, ["SSSSSSS", 7], 0,
    function() {
        return 1e4 * this.millisecond()
    }),
    H(0, ["SSSSSSSS", 8], 0,
    function() {
        return 1e5 * this.millisecond()
    }),
    H(0, ["SSSSSSSSS", 9], 0,
    function() {
        return 1e6 * this.millisecond()
    }),
    z("millisecond", "ms"),
    N("S", Xd, Rd),
    N("SS", Xd, Sd),
    N("SSS", Xd, Td);
    var Le;
    for (Le = "SSSS"; Le.length <= 9; Le += "S") N(Le, $d);
    for (Le = "S"; Le.length <= 9; Le += "S") Q(Le, Wc);
    var Me = C("Milliseconds", !1);
    H("z", 0, 0, "zoneAbbr"),
    H("zz", 0, 0, "zoneName");
    var Ne = n.prototype;
    Ne.add = Ae,
    Ne.calendar = cc,
    Ne.clone = dc,
    Ne.diff = ic,
    Ne.endOf = uc,
    Ne.format = mc,
    Ne.from = nc,
    Ne.fromNow = oc,
    Ne.to = pc,
    Ne.toNow = qc,
    Ne.get = F,
    Ne.invalidAt = Cc,
    Ne.isAfter = ec,
    Ne.isBefore = fc,
    Ne.isBetween = gc,
    Ne.isSame = hc,
    Ne.isValid = Ac,
    Ne.lang = Ce,
    Ne.locale = rc,
    Ne.localeData = sc,
    Ne.max = we,
    Ne.min = ve,
    Ne.parsingFlags = Bc,
    Ne.set = F,
    Ne.startOf = tc,
    Ne.subtract = Be,
    Ne.toArray = yc,
    Ne.toObject = zc,
    Ne.toDate = xc,
    Ne.toISOString = lc,
    Ne.toJSON = lc,
    Ne.toString = kc,
    Ne.unix = wc,
    Ne.valueOf = vc,
    Ne.year = te,
    Ne.isLeapYear = ib,
    Ne.weekYear = Fc,
    Ne.isoWeekYear = Gc,
    Ne.quarter = Ne.quarters = Jc,
    Ne.month = Y,
    Ne.daysInMonth = Z,
    Ne.week = Ne.weeks = nb,
    Ne.isoWeek = Ne.isoWeeks = ob,
    Ne.weeksInYear = Ic,
    Ne.isoWeeksInYear = Hc,
    Ne.date = De,
    Ne.day = Ne.days = Pc,
    Ne.weekday = Qc,
    Ne.isoWeekday = Rc,
    Ne.dayOfYear = qb,
    Ne.hour = Ne.hours = Ie,
    Ne.minute = Ne.minutes = Je,
    Ne.second = Ne.seconds = Ke,
    Ne.millisecond = Ne.milliseconds = Me,
    Ne.utcOffset = Nb,
    Ne.utc = Pb,
    Ne.local = Qb,
    Ne.parseZone = Rb,
    Ne.hasAlignedHourOffset = Sb,
    Ne.isDST = Tb,
    Ne.isDSTShifted = Ub,
    Ne.isLocal = Vb,
    Ne.isUtcOffset = Wb,
    Ne.isUtc = Xb,
    Ne.isUTC = Xb,
    Ne.zoneAbbr = Xc,
    Ne.zoneName = Yc,
    Ne.dates = ab("dates accessor is deprecated. Use date instead.", De),
    Ne.months = ab("months accessor is deprecated. Use month instead", Y),
    Ne.years = ab("years accessor is deprecated. Use year instead", te),
    Ne.zone = ab("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ob);
    var Oe = Ne,
    Pe = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    },
    Qe = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    Re = "Invalid date",
    Se = "%d",
    Te = /\d{1,2}/,
    Ue = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    },
    Ve = s.prototype;
    Ve._calendar = Pe,
    Ve.calendar = _c,
    Ve._longDateFormat = Qe,
    Ve.longDateFormat = ad,
    Ve._invalidDate = Re,
    Ve.invalidDate = bd,
    Ve._ordinal = Se,
    Ve.ordinal = cd,
    Ve._ordinalParse = Te,
    Ve.preparse = dd,
    Ve.postformat = dd,
    Ve._relativeTime = Ue,
    Ve.relativeTime = ed,
    Ve.pastFuture = fd,
    Ve.set = gd,
    Ve.months = U,
    Ve._months = me,
    Ve.monthsShort = V,
    Ve._monthsShort = ne,
    Ve.monthsParse = W,
    Ve.week = kb,
    Ve._week = ue,
    Ve.firstDayOfYear = mb,
    Ve.firstDayOfWeek = lb,
    Ve.weekdays = Lc,
    Ve._weekdays = Ee,
    Ve.weekdaysMin = Nc,
    Ve._weekdaysMin = Ge,
    Ve.weekdaysShort = Mc,
    Ve._weekdaysShort = Fe,
    Ve.weekdaysParse = Oc,
    Ve.isPM = Uc,
    Ve._meridiemParse = He,
    Ve.meridiem = Vc,
    w("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
            c = 1 === q(a % 100 / 10) ? "th": 1 === b ? "st": 2 === b ? "nd": 3 === b ? "rd": "th";
            return a + c
        }
    }),
    a.lang = ab("moment.lang is deprecated. Use moment.locale instead.", w),
    a.langData = ab("moment.langData is deprecated. Use moment.localeData instead.", y);
    var We = Math.abs,
    Xe = yd("ms"),
    Ye = yd("s"),
    Ze = yd("m"),
    $e = yd("h"),
    _e = yd("d"),
    af = yd("w"),
    bf = yd("M"),
    cf = yd("y"),
    df = Ad("milliseconds"),
    ef = Ad("seconds"),
    ff = Ad("minutes"),
    gf = Ad("hours"),
    hf = Ad("days"),
    jf = Ad("months"),
    kf = Ad("years"),
    lf = Math.round,
    mf = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    },
    nf = Math.abs,
    of = Hb.prototype;
    of.abs = od,
    of.add = qd,
    of.subtract = rd,
    of.as = wd,
    of.asMilliseconds = Xe,
    of.asSeconds = Ye,
    of.asMinutes = Ze,
    of.asHours = $e,
    of.asDays = _e,
    of.asWeeks = af,
    of.asMonths = bf,
    of.asYears = cf,
    of.valueOf = xd,
    of._bubble = td,
    of.get = zd,
    of.milliseconds = df,
    of.seconds = ef,
    of.minutes = ff,
    of.hours = gf,
    of.days = hf,
    of.weeks = Bd,
    of.months = jf,
    of.years = kf,
    of.humanize = Fd,
    of.toISOString = Gd,
    of.toString = Gd,
    of.toJSON = Gd,
    of.locale = rc,
    of.localeData = sc,
    of.toIsoString = ab("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gd),
    of.lang = Ce,
    H("X", 0, 0, "unix"),
    H("x", 0, 0, "valueOf"),
    N("x", _d),
    N("X", be),
    Q("X",
    function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }),
    Q("x",
    function(a, b, c) {
        c._d = new Date(q(a))
    }),
    a.version = "2.10.6",
    b(Db),
    a.fn = Oe,
    a.min = Fb,
    a.max = Gb,
    a.utc = h,
    a.unix = Zc,
    a.months = jd,
    a.isDate = d,
    a.locale = w,
    a.invalid = l,
    a.duration = Yb,
    a.isMoment = o,
    a.weekdays = ld,
    a.parseZone = $c,
    a.localeData = y,
    a.isDuration = Ib,
    a.monthsShort = kd,
    a.weekdaysMin = nd,
    a.defineLocale = x,
    a.weekdaysShort = md,
    a.normalizeUnits = A,
    a.relativeTimeThreshold = Ed;
    var pf = a;
    return pf
});
(function(a) {
    "use strict";
    var b = Object.prototype.hasOwnProperty;
    var c = Object.create(null);
    function d(a) {
        return b.call(c, a)
    }
    function e(a, b) {
        c[a] = b
    }
    function f(a) {
        if (!d(a)) {
            return null
        }
        return Object.assign({},
        c[a])
    }
    function g(a, b) {
        var e;
        var f;
        if (!d(a)) {
            return
        }
        e = c[a];
        for (f in b) {
            if (!b.hasOwnProperty(f)) {
                continue
            }
            e[f] = b[f]
        }
    }
    function h(a, b) {
        if (d(a)) {
            g(a, b)
        } else {
            e(a, b)
        }
    }
    function i() {
        c = Object.create(null)
    }
    a.RealTimeUserInformationCache = {
        exists: d,
        add: e,
        fetch: f,
        update: g,
        addOrUpdate: h,
        clear: i
    }
})(window); (function(a, b, c) {
    "use strict";
    var d = a.RealTimeUserInformationCache;
    var e = 0;
    function f(a) {
        switch (a) {
        case b.callback.ErrorCode.TIMEOUT:
            return RealTime.Error.TIMEOUT;
        case b.callback.ErrorCode.UNKNOWN_ERROR:
        default:
            return RealTime.Error.UNKNOWN_ERROR
        }
    }
    function g(a) {
        var e = c.defer();
        var f = d.fetch(a);
        if (f) {
            e.resolve(f)
        } else {
            b.getInstance().getUserInfo(a, {
                onSuccess: function(b) {
                    var c = {
                        id: a,
                        name: b.getUserName(),
                        avatarUrl: b.getPortraitUri()
                    };
                    d.addOrUpdate(a, c);
                    e.resolve(c)
                },
                onError: function(a) {
                    e.reject(a)
                }
            })
        }
        return e.promise
    }
    function h(a, d) {
        var e = d || {};
        return a.filter(function(a) {
            console.log("generate message object", a);
            return a !== null && !(a instanceof b.NotificationMessage)
        }).map(function(a) {
            var b = c.defer();
            var d = function f(a, c) {
                var d = e.messageFilter ? e.messageFilter(a.getContent()) : a.getContent();
                b.resolve({
                    id: a.getMessageId(),
                    sender: c,
                    sentAt: a.getSentTime(),
                    content: d,
                    rawContent: a.getContent()
                })
            }.bind(this, a);
            g(a.getSenderUserId()).then(d).
            catch(function(a) {
                b.reject(a)
            });
            return b.promise
        })
    }
    function i() {
        return "local-" + Number(new Date) + "" + ++e
    }
    a.RealTimeUtitlies = {
        toRealTimeError: f,
        getUserInfo: g,
        generateRealTimeHistoryMessagesList: h,
        generateMessageUniqueId: i
    }
})(window, RongIMClient, RSVP); (function(a, b, c, d, e) {
    "use strict";
    var f = {
        token: "AgWGc80go+7f7ueE/K8KpJRqp4WRpZLUJswZ6kkfgWNUcQ1KKroNYCb2M+tqvxLXqaFCIQ254cS8SXYitswpCQ==",
        id: "1",
        name: "ifanrx",
        avatarUrl: "http://cdn.ifanr.cn/ifanr/default_avatar.png"
    };
    var g = a.RealTimeUtitlies;
    var h = /chatroom:\d+/i;
    var i = d({});
    var j = {
        subscribe: function(a, b) {
            i.on(a,
            function() {
                b.apply(this, [].slice.call(arguments).slice(1))
            })
        },
        publish: function() {
            i.trigger.apply(i, arguments)
        },
        off: function() {
            i.off.apply(i, arguments)
        }
    };
    var k = null;
    var l = null;
    function m(a) {
        this.id = a.id;
        this.creator = null;
        this.members = null;
        this.topic = null;
        this.historyMessages = null
    }
    m.prototype.initializeCreator = function() {
        var a = c.defer();
        if (this.creator) {
            a.resolve(this.creator)
        } else {
            g.getUserInfo(this.creatorId).then(function(b) {
                this.creator = b;
                a.resolve(this.creator)
            }.bind(this))
        }
        return a.promise
    };
    m.prototype.initializeMembers = function() {
        var a = c.defer();
        var b;
        if (this.members) {
            a.resolve(this.members)
        } else {
            b = this.memberIds.map(function(a) {
                return g.getUserInfo(a)
            });
            c.all(b).then(function(b) {
                this.members = b;
                a.resolve(b)
            }.bind(this))
        }
        return a.promise
    };
    m.prototype.getHistoryMessages = function(a, d) {
        var e = d || {};
        var f = c.defer();
        b.getInstance().getHistoryMessages(b.ConversationType.GROUP, this.id, a && a.limit ? a.limit: 10, {
            onSuccess: function(a, b) {
                var d = g.generateRealTimeHistoryMessagesList(b, e);
                c.all(d).then(function(b) {
                    f.resolve({
                        hasMore: a,
                        messages: b || []
                    })
                }).
                catch(function(a) {
                    f.reject(g.toRealTimeError(a))
                })
            },
            onError: function() {
                f.reject(q.Error.SERVICE_UNAVAILABLE)
            }
        });
        return f.promise
    };
    m.prototype.onMessageReceived = function(a) {
        j.subscribe(q.Event.CHATROOM(this.id), a)
    };
    m.prototype.onMessage = m.prototype.onMessageReceived;
    function n(a) {
        b.setConnectionStatusListener({
            onChanged: function c(a) {
                switch (a) {
                case b.ConnectionStatus.CONNECTED:
                    console.log("ifr.realtime.connected");
                    j.publish(q.Event.OPEN);
                    break;
                case b.ConnectionStatus.CONNECTING:
                    console.log("ifr.realtime.connecting");
                    break;
                case b.ConnectionStatus.RECONNECT:
                    console.log("ifr.realtime.reconnect");
                    j.publish(q.Event.ERROR, q.Error.TIMEOUT);
                    break;
                case b.ConnectionStatus.CLOSUER:
                case b.ConnectionStatus.TOKEN_INCORRECT:
                    console.log("ifr.realtime.closed");
                    j.publish(q.Event.ERROR, q.Error.CLOSED);
                    break;
                case b.ConnectionStatus.LOGOUT:
                    console.log("ifr.realtime.logout");
                    j.publish(q.Event.ERROR, q.Error.UNAUTHENTICATED);
                    break;
                case b.ConnectionStatus.BLOCK:
                    console.log("ifr.realtime.block");
                    j.publish(q.Event.Error, q.Error.PROHIBITED);
                    break;
                case b.ConnectionStatus.OTHER_DEVICE_LOGIN:
                    console.log("ifr.realtime.otherdevice", a);
                    j.publish(q.Event.Error, q.Error.OTHER_DEVICE_LOGIN);
                    break;
                case b.ConnectionStatus.UNKNOWN_ERROR:
                default:
                    j.publish(q.Event.ERROR, q.Error.UNKNOWN_ERROR);
                    break
                }
            }
        });
        b.getInstance().setOnReceiveMessageListener({
            onReceived: function d(c) {
                var d;
                var e;
                var f;
                var h;
                var i;
                if (c instanceof b.DiscussionNotificationMessage) {
                    return
                }
                d = c.getTargetId();
                e = c.getSenderUserId();
                f = c.getMessageId();
                h = c.getContent();
                i = c.getSentTime();
                g.getUserInfo(e).then(function(b) {
                    var c = {
                        sender: {
                            senderId: e,
                            contentId: f,
                            content: h,
                            sentAt: i,
                            name: b.name,
                            id: b.id,
                            avatarUrl: b.avatarUrl
                        },
                        receiver: a.user
                    };
                    j.publish(q.Event.CHATROOM(d), c);
                    j.publish(q.Event.MESSAGE, c)
                })
            }
        })
    }
    function o() {
        var a = c.defer();
        var d = b.getInstance;
        if (!d) {
            console.log("RongCloud not initialized");
            a.resolve();
            return a.promise
        }
        d().disconnect();
        setTimeout(function() {
            l = null;
            a.resolve()
        },
        800);
        return a.promise
    }
    function p(a) {
        var d = c.defer();
        if (a.user.token === l) {
            console.log("no need to reconnect");
            d.resolve();
            return d.promise
        }
        o(a).then(function() {
            console.log("initialize rongcloud", a);
            b.init(a.appId);
            b.connect(a.user.token, {
                onSuccess: function c(b) {
                    l = a.user.token;
                    d.resolve(b)
                },
                onError: function e(a) {
                    var b = g.toRealTimeError(a);
                    d.reject(b)
                }
            });
            n(a)
        });
        return d.promise
    }
    function q() {
        this.Error = q.Error;
        this.Type = q.Type;
        this.Event = q.Event;
        this.ChatRoom = m
    }
    q.Error = {
        TIMEOUT: 0,
        CLOSED: 1,
        PROHIBITED: 2,
        UNKNOWN_ERROR: 3,
        SERVER_UNAVAILABLE: 4,
        UNAUTHENTICATED: 5,
        SERVICE_UNAVAILABLE: 6,
        OTHER_DEVICE_LOGIN: 7
    };
    q.Type = {
        CHATROOM: 11
    };
    q.Event = {
        OPEN: "ifr.realtime.open",
        ERROR: "ifr.realtime.error",
        MESSAGE: "ifr.realtime.message",
        CHATROOM: function(a) {
            return "ifr.realtime.chatroom:" + a
        }
    };
    q.prototype.initialize = function(a) {
        this.options = a;
        console.log("initialize rongcloud");
        p({
            appId: this.options.appId,
            user: this.options.user
        }).then(function() {}).
        catch(function(a) {
            j.publish(q.Event.ERROR, a)
        });
        return this
    };
    q.prototype.setupDefaultListeners = function() {
        console.error("RealTime#setupDefaultListeners has been deprecated")
    };
    q.prototype.on = function(a, b) {
        j.subscribe(a, b);
        return this
    };
    q.prototype.once = function(a, b) {
        j.subscribe(a,
        function() {
            b.apply(this, arguments);
            j.off(a)
        });
        return this
    };
    q.prototype.sendMessage = function(a, d, e) {
        var f = e || {};
        var h = f.beforeMessageSent ? f.beforeMessageSent(a) : a;
        var i = c.defer();
        b.getInstance().sendMessage(b.ConversationType.setValue(b.ConversationType.GROUP), d.id, b.TextMessage.obtain(h.content), null, {
            onSuccess: function k() {
                var a;
                a = f.afterMessageSent ? f.afterMessageSent(h) : h;
                i.resolve(a)
            },
            onError: function l(a) {
                var b = g.toRealTimeError(a);
                i.reject(b);
                j.publish(q.Event.ERROR, b)
            }
        });
        return i.promise
    };
    q.prototype.previewChatRoomMessages = function(a, b) {
        var d = b || {};
        var e = c.defer();
        e.reject("RealTime#previewChatRoomMessages has been deprecated");
        return e.promise
    };
    q.prototype.joinChatRoom = function(a) {
        var d = c.defer();
        var e = a.historyAmount || 10;
        console.log("join chat room", a);
        b.getInstance().joinGroup(a.roomId, a.name, {
            onSuccess: function() {
                console.log("add member success");
                f()
            },
            onError: function(a) {
                console.log("add member fail", a);
                f()
            }
        });
        function f() {
            var b = new m({
                id: a.roomId
            });
            console.log("invoke #getGroupInformation");
            console.log("ifr.realtime getGroupInformation ", b);
            b.getHistoryMessages({
                limit: e
            }).then(function(a) {
                b.historyMessages = a;
                console.log("ifr.realtime.getHistoryMesssages", b.historyMessages);
                d.resolve(b)
            }).
            catch(function(a) {
                console.log("join error", a);
                j.publish(q.Event.ERROR, a)
            })
        }
        return d.promise
    };
    q.prototype.createChatRoom = function(a) {
        var b = c.defer();
        b.reject("Realtime#createChatRoom has been deprecated");
        return b.promise
    };
    q.prototype.disconnect = function() {
        var a = c.defer();
        console.error("RealTime#disconnect has been deprecated");
        return a.reject("RealTime#disconnect has been deprecated")
    };
    q.instance = null;
    q.getInstance = function() {
        if (!this.instance) {
            this.instance = new q
        }
        return this.instance
    };
    a.RealTime = q.getInstance()
})(window, RongIMClient, RSVP, jQuery, IFR);
(function(a) {
    "use strict";
    var b = function(a) {
        var b = document.createElement("a");
        b.href = a;
        this.hostname = b.hostname;
        this.host = b.host;
        this.protocol = b.protocol;
        this.hash = b.hash;
        this.pathname = b.pathname;
        this.parameters = b.search;
        this.hostAndPath = b.hostname + b.pathname;
        this.protocolHostPath = b.protocol + "//" + b.hostname + b.pathname;
        this.parser = b
    };
    b.prototype.getParameter = function(a) {
        var b = this.parser.search.split(/\?|&/).filter(function(a) {
            return a.length !== 0
        });
        var c = null;
        b.map(function(b) {
            var d = new RegExp("^" + a + "=");
            if (c === null && b.match(d)) {
                c = b.replace(d, "")
            }
        });
        return c
    };
    a.UriParser = b
})(window); (function(a, b) {
    "use strict";
    var c = {};
    var d = "SUCCEEDED";
    var e = "PROCESSING";
    var f = "FAILED";
    c.MESSAGE_STATUS_SUCCEEDED = d;
    c.MESSAGE_STATUS_PROCESSING = e;
    c.MESSAGE_STATUS_FAILED = f;
    c.NOTIFICATION_LOAD_USER_ERROR = "加载用户信息时失手了 :(";
    c.NOTIFICATION_CREATE_CHATROOM_ERROR = "创建实时讨论区失手了 :(";
    c.NOTIFICATION_JOIN_CHATROOM_ERROR = "加入实时讨论区失手了 :(";
    c.NOTIFICATION_SEND_MESSAGE_ERROR = "发送消息失手了 :(";
    c.NOTIFICATION_LOAD_HISTORY_ERROR = "加载历史消息失手了 :(";
    c.APP_ID = "pwe86ga5ed1j6";
    function g(a) {
        return i(a, new Date)
    }
    c.checkIsToday = g;
    function h(a) {
        var b = new Date;
        b.setDate(b.getDate() - 1);
        return i(a, b)
    }
    c.checkIsYesterday = h;
    function i(a, c) {
        var d = b(a);
        var e = b(c);
        return d.isSame(e, "day")
    }
    c.checkSameDay = i;
    function j(a) {
        var c = b(a);
        return c.diff(b(), "years") === 0
    }
    c.checkThisYear = j;
    function k(a) {
        var b;
        var c;
        if (typeof jQuery === "function" && a instanceof jQuery) {
            b = a[0]
        } else {
            b = a
        }
        c = b.offsetParent;
        return b.offsetTop - c.scrollTop <= 0
    }
    c.checkElementOverflowUp = k;
    function l(a) {
        var b;
        var c;
        if (typeof jQuery === "function" && a instanceof jQuery) {
            b = a[0]
        } else {
            b = a
        }
        c = b.offsetParent;
        return b.offsetTop - c.scrollTop - c.clientHeight >= 0
    }
    c.checkElementOverflowDown = l;
    function m(a) {
        return ! k(a) && !l(a)
    }
    c.checkElementOverflowVisible = m;
    function n(a) {
        var b;
        var c;
        if (typeof jQuery === "function" && a instanceof jQuery) {
            b = a[0]
        } else {
            b = a
        }
        c = b.getBoundingClientRect();
        return c.top >= 0 && c.left >= 0 && c.bottom <= (window.innerHeight || document.documentElement.clientHeight) && c.right <= (window.innerWidth || document.documentElement.clientWidth)
    }
    c.checkElementViewportVisible = n;
    a.ChatRoomUtils = c
})(window, moment); (function(a, b) {
    "use strict";
    var c = function() {};
    c.fn = c.prototype;
    c.fn.init = function() {
        b(".js-auto-expand-textarea").on("keyup",
        function() {
            b(this).height(0);
            b(this).height(this.scrollHeight - 10)
        });
        b(".auto-expand-textarea").keyup()
    };
    a.AutoExpandTextarea = c
})(window, jQuery); 
(function(a, b, c) {
    "use strict";
    var d = {
        token: "AgWGc80go+7f7ueE/K8KpJRqp4WRpZLUJswZ6kkfgWNUcQ1KKroNYCb2M+tqvxLXqaFCIQ254cS8SXYitswpCQ==",
        id: "1",
        name: "ifanrx",
        avatarUrl: "http://cdn.ifanr.cn/ifanr/default_avatar.png"
    };
    var e = {
        token: "NoL5TEKjTrGj+FqISPQfVpRqp4WRpZLUJswZ6kkfgWNUcQ1KKroNYLTP7s8dYP8nQzWpiIsX5l9fd2K2YdAuWbxJdiK2zCkJ",
        id: "1091431",
        name: "ifanrx2",
        avatarUrl: "http://cdn.ifanr.cn/ifanr/default_avatar.png"
    };
    var f = {
        token: "1WK1ruMITEs0ywZokjr3uYQ9BGZsNaXrqSamvA/xRS2cOs+UM84Qwgx5RdJGumG+6Cl8rZLbyCU=",
        id: "3",
        name: "ifanrx3",
        avatarUrl: "http://cdn.ifanr.cn/ifanr/default_avatar.png"
    };
    var g = function(a) {
        var b = this;
        var c = b.getDefaultUser(a);
        if (c) {
            b.assignUserToThis(c)
        } else {}
    };
    g.fn = g.prototype;
    g.fn.loadUserInfo = function(a) {
        var b = this;
        var d = c.defer();
        var e;
        if (a) {
            e = b.getDefaultUser(a);
            b.assignUserToThis(e);
            d.resolve(b)
        } else {
            b.id = IFR.user.id;
            b.name = IFR.user.name;
            b.avatarUrl = IFR.user.avatarUrl;
            IFR.api("get_realtime_token", {
                data: {
                    sso_id: b.id
                },
                success: function(a) {
                    b.token = a.data.token;
                    d.resolve(b)
                },
                error: function(a) {
                    d.reject(a)
                }
            })
        }
        return d.promise
    };
    g.fn.loadUserToken = function(a, b) {
        var d = this;
        var e = c.defer();
        this.id = a.id;
        this.name = a.name;
        this.avatarUrl = a.avatarUrl;
        this.id = String(this.id);
        if (b) {
            this.token = a.token;
            e.resolve(this)
        } else {
            IFR.api("get_realtime_token", {
                data: {
                    sso_id: this.id
                },
                success: function(a) {
                    d.token = a.data.token;
                    e.resolve(d)
                },
                error: function(a) {
                    e.reject(a)
                }
            })
        }
        return e.promise
    };
    g.fn.getDefaultUser = function(a) {
        var b;
        switch (a) {
        case 1:
            b = d;
            break;
        case 2:
            b = e;
            break;
        case 3:
            b = f;
            break;
        default:
            b = null
        }
        return b
    };
    g.fn.assignUserToThis = function(a) {
        this.id = a.id;
        this.token = a.token;
        this.name = a.name;
        this.avatarUrl = a.avatarUrl
    };
    a.ChatRoomUser = g
})(window, jQuery, RSVP);
(function(a) {
    "use strict";
    var b = function(a, b, c, d) {
        this.id = a;
        this.content = b;
        this.sentAt = c;
        this.sender = d
    };
    a.Message = b
})(window);
(function(a) {
    "use strict";
    var b = function(a, c) {
        this.time = a;
        this.messages = c;
        this.htmlId = "message-group-" + b.getUniqueMessageGroupId()
    };
    var c = 0;
    b.getUniqueMessageGroupId = function() {
        return c++
    };
    a.MessageGroup = b
})(window); (function(a, b, c, d) {
    "use strict";
    var e = function() {};
    e.fn = e.prototype;
    e.fn.init = function(a, c, d) {
        var e = this;
        e.firstGroup = null;
        e.lastGroup = null;
        e.$displayArea = b(".chatroom-display-area");
        e.$loadMore = b(".chatroom-load-more");
        e.userInfo = c;
        e.messagesCache = a;
        e.resendMessageDelegate = d;
        e.templateConfigs = e.getTemplateConfigs();
        e.initialize()
    };
    e.fn.pullHistory = function(a) {
        var b = this;
        var c = "";
        var d;
        if (!a || a.length === 0) {} else {
            d = b.beforeGroup(b.firstGroup, a);
            d.forEach(function(a) {
                a.messages.forEach(function(a) {
                    a.timeStr = b.getMessageTimeString(a.sentAt);
                    a.left = a.sender.id !== b.userInfo.id
                });
                c += template(b.templateConfigs.messageGroup, a)
            });
            if (b.firstGroup) {
                f(b.firstGroup).replaceWith(c)
            } else {
                b.$loadMore.after(c)
            }
            b.firstGroup = d[0];
            if (!b.lastGroup) {
                b.lastGroup = d[d.length - 1]
            }
        }
    };
    e.fn.receiveMessage = function(a) {
        var b = this;
        var d;
        var e;
        var g = {
            messageId: a.id,
            content: a.content,
            sentAt: a.sentAt,
            timeStr: b.getMessageTimeString(a.sentAt),
            left: a.sender.id !== b.userInfo.id,
            sender: a.sender
        };
        if (b.checkMessageInGroup(a, b.lastGroup)) {
            e = g.left ? b.templateConfigs.messageLeft: b.templateConfigs.messageRight;
            d = template(e, g);
            f(b.lastGroup).append(d)
        } else {
            b.lastGroup = new c(b.getGroupTimeString(a.sentAt), [g]);
            d = template(b.templateConfigs.messageGroup, b.lastGroup);
            b.$displayArea.append(d)
        }
    };
    e.fn.sendMessage = function(a) {
        var b = this;
        var e;
        var g = {
            messageId: a.id,
            content: a.content,
            sentAt: a.sentAt,
            timeStr: b.getMessageTimeString(a.sentAt),
            processing: a.status === d.MESSAGE_STATUS_PROCESSING,
            failed: a.status === d.MESSAGE_STATUS_FAILED,
            left: false,
            sender: a.sender
        };
        if (b.checkMessageInGroup(a, b.lastGroup)) {
            e = template(b.templateConfigs.messageRight, g);
            f(b.lastGroup).append(e)
        } else {
            b.lastGroup = new c(b.getGroupTimeString(a.sentAt), [g]);
            e = template(b.templateConfigs.messageGroup, b.lastGroup);
            b.$displayArea.append(e)
        }
    };
    e.fn.modifyMessageStatus = function(a, c) {
        var e = this;
        var f;
        var g = b("#" + a);
        var h;
        var i;
        e.messagesCache.every(function(b) {
            if (b.id === a) {
                f = b;
                return false
            }
            return true
        });
        h = {
            messageId: a,
            content: f.content,
            left: false,
            sentAt: f.sentAt,
            timeStr: e.getMessageTimeString(f.sentAt),
            processing: c === d.MESSAGE_STATUS_PROCESSING,
            failed: c === d.MESSAGE_STATUS_FAILED,
            sender: f.sender
        };
        i = template(e.getTemplateConfigs().messageRight, h);
        g.replaceWith(i);
        g = b("#" + a);
        switch (c) {
        case d.MESSAGE_STATUS_PROCESSING:
            break;
        case d.MESSAGE_STATUS_FAILED:
            g.find(".js-resend").on("click",
            function() {
                e.resendMessageDelegate(a);
                e.modifyMessageStatus(a, d.MESSAGE_STATUS_PROCESSING)
            }.bind(e));
            break;
        case d.MESSAGE_STATUS_SUCCEEDED:
        default:
            break
        }
    };
    e.fn.scrollToBottom = function(a) {
        var c = this;
        var d = b(".chatroom-display-area .chatroom-messages-group");
        var e = 0;
        if (a !== 0 && !a) {
            a = "normal"
        }
        d.each(function() {
            e += b(this).height()
        });
        c.$displayArea.animate({
            scrollTop: e
        },
        a)
    };
    function f(a) {
        return b("#" + a.htmlId)
    }
    e.fn.checkMessageInGroup = function(a, b) {
        var c;
        var d;
        var e;
        if (!a || !b) {
            return false
        }
        c = b.messages[b.messages.length - 1];
        d = this.getGroupTimeString(c.sentAt);
        e = this.getGroupTimeString(a.sentAt);
        return d === e
    };
    e.fn.initialize = function() {};
    e.fn.getTemplateConfigs = function() {
        console.error("Should override this method")
    };
    e.fn.beforeGroup = function(a, b) {
        console.error("Should override this method")
    };
    e.fn.getMessageTimeString = function(a) {
        console.error("Should override this method")
    };
    e.fn.getGroupTimeString = function(a) {
        console.error("Should override this method")
    };
    a.ChatRoomDisplayArea = e
})(window, jQuery, window.MessageGroup, window.ChatRoomUtils); (function(a, b) {
    "use strict";
    var c = "load-more-hidden";
    var d = function() {};
    d.fn = d.prototype;
    d.isLoading = null;
    d.$btn = null;
    d.$hint = null;
    d.fn.init = function(a) {
        var d = this;
        d.isLoading = false;
        d.$btn = b(".js-chatroom-load-more");
        d.$hint = b(".js-chatroom-load-more-hint");
        d.$btn.on("click", d.loadMore.bind(d, a));
        d.$btn.addClass(c)
    };
    d.fn.loadMore = function(a) {
        var b = this;
        if (b.isLoading) {
            return
        }
        b.isLoading = true;
        b.$btn.addClass(c);
        b.$hint.removeClass(c);
        if (a) {
            a(b.onLoaded.bind(b))
        }
    };
    d.fn.onLoaded = function() {
        var a = this;
        a.isLoading = false;
        a.$btn.removeClass(c);
        a.$hint.addClass(c)
    };
    d.fn.disable = function() {
        var a = this;
        a.isLoading = false;
        a.$btn.addClass(c);
        a.$hint.removeClass(c);
        a.$hint.html("已加载全部讨论")
    };
    a.ChatRoomLoadMore = d
})(window, jQuery); 
(function(a, b) {
    "use strict";
    var c = "chatroom-hide";
    var d = function() {};
    d.fn = d.prototype;
    d.fn.$notification = null;
    d.fn.init = function() {
        this.$notification = b(".js-chatroom-notification");
        this.$notification.addClass(c)
    };
    d.fn.show = function(a, b) {
        var d = this;
        d.$notification.html(a);
        d.$notification.removeClass(c);
        if (b && b > 0) {
            setTimeout(function() {
                d.$notification.addClass(c)
            },
            b * 1e3)
        }
    };
    d.fn.hide = function() {
        this.$notification.addClass(c)
    };
    a.ChatRoomNotification = d
})(window, jQuery); 
(function(a, b, c, d, e) {
    "use strict";
    var f = function() {};
    f.fn = f.prototype;
    f.fn.userInfo = {};
    f.fn.postInfo = {
        title: ns.postTitle,
        id: ns.postId
    };
    f.fn.messages = null;
    f.fn.chatroom = null;
    f.inputBox = null;
    f.displayArea = null;
    f.fn.initChatRoom = function() {
        var a = this;
        var b = {
            appId: c.APP_ID,
            user: a.userInfo
        };
        console.log("try connect");
        d.initialize(b).once(d.Event.OPEN, a.onOpen.bind(a))
    };
    f.fn.onOpen = function() {
        var a = this;
        var b = {
            roomId: ns.chatroomId,
            name: ns.postTitle,
            historyAmount: 10
        };
        console.log("on open");
        a.loadmore.loadMore();
        d.joinChatRoom(b).then(function(b) {
            var c = b.historyMessages.messages;
            var d = b.historyMessages.hasMore;
            a.chatroom = b;
            a.messages.splice(0, a.messages.length);
            c.forEach(function(b) {
                a.messages.push(b)
            });
            a.chatroom.onMessageReceived(a.onChatroomMessage.bind(a));
            a.displayArea.pullHistory(c);
            a.displayArea.scrollToBottom(0);
            if (!d) {
                a.loadmore.disable()
            } else {
                a.loadmore.onLoaded()
            }
            console.log("joined!!!");
            a.onChatRoomSetup()
        }).
        catch(function(b) {
            console.log("RealTime Error: join chat room: ", b);
            a.notification.show(c.NOTIFICATION_JOIN_CHATROOM_ERROR)
        })
    };
    f.fn.initChatRoomForDisplay = function(a) {
        var b = this;
        var e = {
            appId: c.APP_ID,
            user: b.userInfo
        };
        console.log("try connect for display!");
        d.initialize(e).once(d.Event.OPEN, b.onOpenForDisplay.bind(b, a)).on(d.Event.ERROR, b.onError.bind(b))
    };
    f.fn.onOpenForDisplay = function(a) {
        var b = this;
        var c = {
            id: ns.chatroomId
        };
        var e = {
            limit: 3
        };
        console.log("on open for display");
        d.previewChatRoomMessages(c, e).then(function(c) {
            var d = c.historyMessages.messages;
            b.chatroom = c;
            a(d)
        }).
        catch(function(a) {
            b.indicator.switchState(ChatRoomIndicator.State.ERROR);
            console.log("RealTime Error: preview history messages: ", a)
        })
    };
    f.fn.onError = function(a) {
        console.log("IM error: ", a)
    };
    f.fn.onChatroomMessage = function(a) {
        var b = this;
        var d = a.sender;
        var e = {
            id: d.id,
            content: d.content,
            sentAt: d.sentAt,
            sender: {
                id: d.senderId,
                name: d.name,
                avatarUrl: d.avatarUrl
            },
            status: c.MESSAGE_STATUS_SUCCEEDED
        };
        console.log("receive msg", a);
        if (b.getMessageById(e.contentId)) {
            return
        }
        b.messages.push(e);
        b.displayArea.receiveMessage(e);
        b.displayArea.scrollToBottom()
    };
    f.fn.submitMessage = function(a) {
        var b = this;
        var f;
        var g = {
            id: e.generateMessageUniqueId(),
            content: a,
            status: c.MESSAGE_STATUS_PROCESSING,
            sentAt: new Date,
            sender: b.userInfo
        };
        b.messages.push(g);
        b.displayArea.sendMessage(g);
        b.displayArea.scrollToBottom();
        console.log("sending msg: ", g);
        f = {
            id: b.chatroom.id
        };
        d.sendMessage(g, f).then(function() {
            console.log("msg sent");
            b.displayArea.modifyMessageStatus(g.id, c.MESSAGE_STATUS_SUCCEEDED)
        }).
        catch(function() {
            b.notification.show(c.NOTIFICATION_SEND_MESSAGE_ERROR, 5);
            b.displayArea.modifyMessageStatus(g.id, c.MESSAGE_STATUS_FAILED)
        })
    };
    f.fn.resendMessage = function(a) {
        var b = this;
        var e = b.getMessageById(a);
        var f = {
            id: b.chatroom.id
        };
        var g;
        if (!e) {
            g = this.getMessageContentByIdFromHtml(a);
            if (g) {
                e = {
                    id: a,
                    content: g,
                    sentAt: new Date,
                    sender: this.userInfo
                }
            }
            this.messages.push(e)
        }
        if (!e) {
            b.notification.show(c.NOTIFICATION_SEND_MESSAGE_ERROR, 5);
            return
        }
        console.log("Resending msg", e);
        d.sendMessage(e, f).then(function() {
            b.notification.hide();
            b.displayArea.modifyMessageStatus(a, c.MESSAGE_STATUS_SUCCEEDED)
        }).
        catch(function(d) {
            b.notification.show(c.NOTIFICATION_SEND_MESSAGE_ERROR, 5);
            b.displayArea.modifyMessageStatus(a, c.MESSAGE_STATUS_FAILED);
            console.log("Resend message Error", d)
        })
    };
    f.fn.writeMessage = function() {
        this.displayArea.scrollToBottom()
    };
    f.fn.scrollDisplayArea = function() {
        this.inputBox.quitWrite()
    };
    f.fn.clickDisplayArea = function() {
        this.inputBox.quitWrite()
    };
    f.fn.LoadMoreHistory = function() {
        var a = this;
        var b = {
            limit: this.messages.length + 10,
            skip: this.messages.length
        };
        a.chatroom.getHistoryMessages(b).then(function(b) {
            a.displayArea.pullHistory(b.messages);
            if (b.hasMore) {
                a.loadmore.onLoaded()
            } else {
                a.loadmore.disable()
            }
        }).
        catch(function(b) {
            a.notification.show(c.NOTIFICATION_LOAD_HISTORY_ERROR);
            console.log("Load History Error", b)
        })
    };
    f.fn.onChatRoomSetup = function() {
        console.log("onChatRoomSetup: This can be override.")
    };
    f.fn.getMessageById = function(a) {
        var b;
        this.messages.every(function(c) {
            if (c.id === a) {
                b = c;
                return false
            }
            return true
        });
        return b
    };
    f.fn.getMessageContentByIdFromHtml = function(a) {
        var c = b("#" + a);
        var d;
        if (c.length > 0) {
            d = c.find(".chatroom-message-content")
        }
        return d.html()
    };
    f.fn.toLocalMessageFormat = function(a, b) {
        return {
            id: a.id,
            content: a.content,
            senderId: a.sender.id,
            senderName: a.sender.name,
            senderAvatarUri: a.sender.avatarUrl,
            sentAt: a.sentAt,
            status: b
        }
    };
    f.fn.setupTestMessages = function(a) {
        a.messages = [{
            id: "m0",
            content: "Hello World!",
            sentAt: new Date(2014, 10, 17, 7, 32),
            sender: {
                id: "u0",
                name: "user1",
                avatarUrl: "http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/gravatar.jpg"
            }
        },
        {
            id: "m2",
            content: "Wahaha!",
            sentAt: new Date(2014, 10, 17, 7, 33),
            sender: {
                id: "u1",
                name: "user2",
                avatarUrl: "http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/gravatar.jpg"
            }
        },
        {
            id: "m3",
            content: "Enenene!!!",
            sentAt: new Date(2014, 10, 17, 7, 34),
            sender: {
                id: "u1",
                name: "user2",
                avatarUrl: "http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/gravatar.jpg"
            }
        },
        {
            id: "m4",
            content: "Hello ?",
            sentAt: new Date(2015, 10, 17, 7, 34),
            sender: {
                id: "u2",
                name: "user3",
                avatarUrl: "http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/gravatar.jpg"
            }
        }]
    };
    f.fn.testDisplayArea = function(a) {
        a.displayArea.pullHistory(a.messages);
        a.displayArea.receiveMessage({
            id: "m00",
            content: "Received 1",
            sentAt: new Date,
            sender: {
                id: "u1",
                name: "Wahaha",
                avatarUri: "http://cdn.ifanr.cn/ifanr/default_avatar.png"
            }
        });
        a.displayArea.receiveMessage({
            id: "m020",
            content: "Received 2",
            sentAt: new Date,
            sender: {
                id: "u1",
                name: "Wahaha",
                avatarUri: "http://cdn.ifanr.cn/ifanr/default_avatar.png"
            }
        });
        a.chatroom = {
            id: "FAKE_CHATROOM_ID_123"
        }
    };
    f.fn.checkUserLogin = function() {
        return true
    };
    a.ChatRoomMain = f
})(window, jQuery, window.ChatRoomUtils, RealTime, RealTimeUtitlies); (function(a, b) {
    "use strict";
    var c = "#intro-";
    var d = "ifr-about-no-display";
    var e = "ifr-about-products-btn-active";
    var f = "ifr-about-team-members-container-expand";
    var g = "ifanr2015-fanhuidingbu";
    var h = "ifanr2015-down1";
    var i = "展开查看全部";
    var j = "收起";
    var k = function(a) {
        this.cacheDOMs();
        this.initProductIntro();
        this.initTeamMembers();
        this.isMobile = Boolean(a) ? a.isMobile: false
    };
    k.fn = k.prototype;
    k.fn.cacheDOMs = function() {
        this.$productBtns = b(".ifr-about-products-btn");
        this.$teamContainer = b(".ifr-about-team-members-container");
        this.$teamMembers = b(".ifr-about-team-member");
        this.$teamMemberAvatars = b(".ifr-about-team-member-avatar");
        this.$teamMoreBtn = b(".ifr-about-team-more");
        this.$teamMoreDescription = b(".ifr-about-team-more-description");
        this.$teamMoreTriangle = b(".ifr-about-team-more-triangle")
    };
    k.fn.initProductIntro = function() {
        this.$productBtns.on("click", this.onProductButtonClick.bind(this))
    };
    k.fn.initTeamMembers = function() {
        this.teamExpanded = false;
        this.$teamMoreBtn.on("click", this.onTeamMoreButtonClick.bind(this))
    };
    k.fn.onProductButtonClick = function(a) {
        var f = b(a.currentTarget);
        var g = f.data("product-id");
        var h = b(c + g);
        h.removeClass(d).siblings().addClass(d);
        f.addClass(e).siblings().removeClass(e)
    };
    k.fn.onTeamMoreButtonClick = function() {
        var a = this.teamExpanded;
        this.$teamContainer.removeClass(a ? f: "");
        this.$teamContainer.addClass(a ? "": f);
        this.$teamMoreDescription.html(a ? i: j);
        this.$teamMoreTriangle.removeClass(a ? g: h);
        this.$teamMoreTriangle.addClass(a ? h: g);
        this.teamExpanded = !this.teamExpanded
    };
    a.AboutTeam = k
})(window, jQuery);
//# sourceMappingURL=common-min-1456211877681.js.map
