(function(a, b) {
    var c = function() {
        var c = this;
        c.o = {
            speed: 500,
            delay: 3e3,
            init: 0,
            pause: !b,
            loop: !b,
            keys: b,
            dots: b,
            arrows: b,
            prev: "&larr;",
            next: "&rarr;",
            fluid: b,
            starting: b,
            complete: b,
            items: ">ul",
            item: ">li",
            easing: "swing",
            autoplay: true,
            fade: false
        };
        c.init = function(b, e) {
            c.o = a.extend(c.o, e);
            c.el = b;
            c.ul = b.find(c.o.items);
            c.max = [b.outerWidth() | 0, b.outerHeight() | 0];
            c.li = c.ul.find(c.o.item).each(function(b) {
                var d = a(this),
                e = d.outerWidth(),
                f = d.outerHeight();
                if (e > c.max[0]) c.max[0] = e;
                if (f > c.max[1]) c.max[1] = f
            });
            var e = c.o,
            f = c.ul,
            g = c.li,
            h = g.length;
            c.i = 0;
            b.css({
                width: c.max[0],
                height: g.first().outerHeight(),
                overflow: "hidden"
            });
            f.css({
                position: "relative",
                left: 0,
                width: h * 100 + "%"
            });
            if (e.fluid) {
                g.css({
                    "float": "left",
                    width: 100 / h + "%"
                })
            } else {
                g.css({
                    "float": "left",
                    width: c.max[0] + "px"
                })
            }
            if (e.fade == true) {
                g.css({
                    position: "absolute",
                    display: "none"
                });
                f.find("li").eq(0).css({
                    display: "block"
                })
            }
            e.autoplay && setTimeout(function() {
                if (e.delay | 0) {
                    c.play();
                    if (e.pause) {
                        b.on("mouseover mouseout",
                        function(a) {
                            c.stop();
                            a.type == "mouseout" && c.play()
                        })
                    }
                }
            },
            e.init | 0);
            if (e.keys) {
                a(document).keydown(function(a) {
                    var b = a.which;
                    if (b == 37) c.prev();
                    else if (b == 39) c.next();
                    else if (b == 27) c.stop()
                })
            }
            e.dots && d("dot");
            e.arrows && d("arrow");
            if (e.fluid) {
                a(window).resize(function() {
                    c.r && clearTimeout(c.r);
                    c.r = setTimeout(function() {
                        var a = {
                            height: g.eq(c.i).outerHeight()
                        },
                        d = b.outerWidth();
                        f.css(a);
                        a["width"] = Math.min(Math.round(d / b.parent().width() * 100), 100) + "%";
                        b.css(a);
                        g.css({
                            width: d + "px"
                        })
                    },
                    50)
                }).resize()
            }
            if (a.event.special["move"] || a.Event("move")) {
                b.on("movestart",
                function(a) {
                    if (a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY) {
                        a.preventDefault()
                    } else {
                        b.data("left", c.ul.offset().left / b.width() * 100)
                    }
                }).on("move",
                function(a) {
                    var d = 100 * a.distX / b.width();
                    c.ul.css("left", b.data("left") + d + "%");
                    c.ul.data("left", d)
                }).on("moveend",
                function(a) {
                    var b = c.ul.data("left");
                    if (Math.abs(b) > 30) {
                        var d = b > 0 ? c.i - 1 : c.i + 1;
                        if (d < 0 || d >= h) d = c.i;
                        c.to(d)
                    } else {
                        c.to(c.i)
                    }
                })
            }
            return c
        };
        c.to = function(d, e) {
            if (c.t) {
                c.stop();
                c.play()
            }
            var f = c.o,
            g = c.el,
            h = c.ul,
            i = c.li,
            j = c.i,
            k = i.eq(d);
            a.isFunction(f.starting) && !e && f.starting(g, i.eq(j));
            if ((!k.length || d < 0) && f.loop == b) return;
            if (!k.length) d = 0;
            if (d < 0) d = i.length - 1;
            k = i.eq(d);
            var l = e ? 5 : f.speed | 0,
            m = f.easing,
            n = {
                height: k.outerHeight()
            };
            if (!h.queue("fx").length) {
                g.find(".dot").eq(d).addClass("active").siblings().removeClass("active");
                if (f.fade) {
                    c.i = d;
                    h.find("li:visible").fadeOut(l);
                    h.find("li").eq(d).fadeIn(l)
                } else {
                    g.animate(n, l, m) && h.animate(a.extend({
                        left: "-" + d + "00%"
                    },
                    n), l, m,
                    function(b) {
                        c.i = d;
                        a.isFunction(f.complete) && !e && f.complete(g, k)
                    })
                }
            }
        };
        c.play = function() {
            c.t = setInterval(function() {
                c.to(c.i + 1)
            },
            c.o.delay | 0)
        };
        c.stop = function() {
            c.t = clearInterval(c.t);
            return c
        };
        c.next = function() {
            return c.stop().to(c.i + 1)
        };
        c.prev = function() {
            return c.stop().to(c.i - 1)
        };
        function d(b, d) {
            if (b == "dot") {
                d = '<ol class="dots">';
                a.each(c.li,
                function(a) {
                    d += '<li class="' + (a == c.i ? b + " active": b) + '">' + ++a + "</li>"
                });
                d += "</ol>"
            } else {
                d = '<div class="';
                d = d + b + 's">' + d + b + ' prev">' + c.o.prev + "</div>" + d + b + ' next">' + c.o.next + "</div></div>"
            }
            c.el.addClass("has-" + b + "s").append(d).find("." + b).click(function() {
                var b = a(this);
                b.hasClass("dot") ? c.stop().to(b.index()) : b.hasClass("prev") ? c.prev() : c.next()
            })
        }
    };
    a.fn.unslider = function(b) {
        var d = this.length;
        return this.each(function(e) {
            var f = a(this),
            g = "unslider" + (d > 1 ? "-" + ++e: ""),
            h = (new c).init(f, b);
            f.data(g, h).data("key", g)
        })
    };
    c.version = "1.0.0"
})(jQuery, false); 
(function(a) {
    "use strict";
    var b = function(b, c) {
        if (!c.target) {
            console.error('accordion plugin must be set "target".');
            return
        }
        this.options = a.extend({},
        this.options, c)
    };
    b.prototype = {
        run: function(a) {
            this.bind(a)
        },
        bind: function(b) {
            var c = this;
            var d = c.options.height || b.height();
            var e = b.find(c.options.target);
            var f = e.length;
            var g = c.options.itemHeight || e.height();
            var h = d - g * (f - 1);
            var i;
            e.addClass(c.options.classClose);
            if (g === h) {
                h = h + g;
                d = b.outerHeight() + g;
                b.css({
                    height: d
                })
            }
            if (c.options.defualtOpen) {
                var j = a(c.options.defualtOpen);
                i = j.height(h)
            } else {
                i = e.first().height(h)
            }
            i.removeClass(c.options.classClose).addClass(c.options.classOpen);
            e.on(c.options.bind,
            function(b) {
                if (c.supportTransition()) {
                    e.css({
                        transitionProperty: c.options.transitionProperty,
                        transitionDuration: c.options.speed / 1e3 + "s"
                    });
                    if (i) {
                        i.css({
                            height: g
                        }).removeClass(c.options.classOpen).addClass(c.options.classClose)
                    }
                    a(this).css({
                        height: h
                    }).removeClass(c.options.classClose).addClass(c.options.classOpen)
                } else {
                    if (a(this).hasClass(c.options.classOpen)) return;
                    if (i) {
                        i.stop().animate({
                            height: g + "px"
                        },
                        c.options.speed).removeClass(c.options.classOpen).addClass(c.options.classClose)
                    }
                    a(this).stop().animate({
                        height: h + "px"
                    },
                    c.options.speed).removeClass(c.options.classClose).addClass(c.options.classOpen)
                }
            }).on("mouseleave",
            function(b) {
                i = a(this)
            })
        },
        options: {
            speed: 200,
            bind: "mouseover",
            defualtOpen: "",
            target: "",
            classOpen: "accordion-open",
            classClose: "accordion-close",
            itemHeight: 0,
            height: 0,
            transitionProperty: "all"
        },
        supportTransition: function() {
            var a = document.body || document.documentElement;
            var b = a.style;
            var c = b.transition !== undefined || b.WebkitTransition !== undefined || b.MozTransition !== undefined || b.MsTransition !== undefined || b.OTransition !== undefined;
            return c
        }
    };
    a.fn.ifanrAccordion = function(a) {
        var c = new b(this, a);
        if (!this) return;
        c.run(this);
        return this
    }
})(jQuery); 
(function() {
    "use strict";
    var a = function(a, b, c, d) {
        a.show();
        b.show();
        if (d === 0) {
            a.hide();
            b.hide();
            return
        }
        if (c === 0) {
            a.hide()
        }
        if (c === d - 1) {
            b.hide()
        }
    };
    var b = function(a) {
        this.options = $.extend({},
        this.options, a)
    };
    b.prototype = {
        run: function(a) {
            this.bindEvent(a)
        },
        options: {
            expiration: 1e3 * 600,
            timeout: 0
        },
        getData: function(a, b) {
            var c = this;
            if (!a) {
                return
            }
            a = $.extend({},
            c.options.params, a);
            if (a.action === "mindstore") {
                $.ajax({
                    url: "http://mindstore.io/api/v1.2/mind/",
                    data: $.extend(a),
                    dataType: "json",
                    method: "get",
                    success: function(a) {
                        b(a.objects)
                    }
                })
            } else if ( 1 ) {
                //huangbo
                $.ajax({
                    url: "../wp-admin/admin-ajax.php?timestamp=" + new Date().getTime(),
                    data: $.extend({}, a, {action : 'get_cate'}),
                    dataType: "json",
                    method: "post",
                    success: function(a) {
                        if(a.code > 0){
                            b(a.ret);
                        }
                    }
                })
            } else {
                IFR.api(c.options.action, {
                    data: a,
                    success: function(a) {
                        if (a.status === 1) {
                            b(a.data)
                        }
                    }
                })
            }

        },
        autoload_finish: false,
        render: function(a, b) {
            var c = this;
            var d;
            var e = $(c.options.renderTarget);
            a = a || [];
            if (!c.options.template) {
                return
            }
            d = template(b, {
                previewList: a
            });
            e.append(d).find(".js-excerpt").each(function(a, b) {
                var c = $(this).data("clamp");
                $clamp(b, {
                    clamp: c
                })
            });
            e.find(".js-tags").each(function(a, b) {
                var c;
                var d = $(b).text();
                if (!d) {
                    return
                }
                b = d.split("|");
                b = b.slice(0, 3);
                c = template("desktop-nav-app-tags", {
                    tags: b
                });
                $(this).html(c)
            });
            e.find(".js-date").each(function(a, b) {
                var c = [];
                var d = $(b);
                b = d.text().replace(/-/g, "/");
                b = new Date(b);
                c.push(b.getMonth() + 1);
                c.push(b.getDate());
                c = c.join("-");
                d.text(c)
            });
            e.find(".js-dateYMD").each(function(a, b) {
                var c = [];
                var d = $(b);
                b = d.text().replace(/-/g, "/");
                b = new Date(b);
                c.push(b.getFullYear());
                c.push(b.getMonth() + 1);
                c.push(b.getDate());
                c = c.join(".");
                d.text(c)
            })
        },
        autoload: function(a) {
            var b = this;
            var c = b.getPageFromCache(a);
            var d = $(b.options.renderTarget);
            var e = d.find(".loading");
            var f = b.options.template;
            if (b.autoload_finish) {
                return
            }
            if (!c) {
                c = b.options.page;
                c = c || 0
            }
            c = b.options.params.page = c + 1;
            d.append(e);
            e.show();
            this.getData({},
            function(g) {
                e.hide();
                if (!g.length) {
                    b.autoload_finish = true;
                    if ($(".autoload_finish").length <= 0) {
                        d.append('<p class="autoload_finish">已经没有了</p>')
                    }
                    return
                }
                b.setCache(a, g, true);
                b.setPageToCache(a, c);
                b.render(g, f)
            })
        },
        bindEvent: function(a) {
            var b = this;
            var c;
            var d;
            a.on(b.options.event,
            function(e) {
                var f;
                var g = $(this);
                var h = g.attr(b.options.cateAttr);
                var i = g.data("postType") || "";
                var j = g.data("action") || "";
                var k;
                var l;
                var m = $(b.options.renderTarget).parents(".js-items-preview");
                var n = g.data("template") || b.options.template;
                var o = {};
                var p = g.data("count");
                var q = g.data("limit");
                o.jiong = 1;
                e.preventDefault();
                if (!h) {
                    return
                }
                if (b.options.action !== "latest") {
                    if (i) {
                        o.post_type = i
                    } else if (j) {
                        o.action = j
                    } else {
                        o.category_name = h
                    }
                    if (q) {
                        o.limit = q
                    }
                }
                c = setTimeout(function() {
                    if (b.options.expandFun) {
                        d = b.options.expandFun();
                        if (!d) {
                            return
                        }
                    }
                    a.removeClass("active");
                    g.addClass("active");
                    f = b.getCache(h);
                    k = $(b.options.renderTarget);
                    l = $('<div class="loading"></div>');
                    if (!f || f.length <= 0) {
                        if (b.options.page) {
                            b.options.params.page = b.options.page
                        }
                        k.html(l);
                        b.getData(o,
                        function(a) {
                            b.setCache(h, a);
                            l.hide().addClass("loading-more");
                            a = b.group(a, p);
                            b.render(a, n);
                            if (m.hasClass("js-slider")) {
                                b.slider(m)
                            }
                        })
                    } else {
                        k.html("");
                        l.hide().addClass("loading-more");
                        f = b.group(f, p);
                        b.render(f, n);
                        if (m.hasClass("js-slider")) {
                            b.slider(m)
                        }
                    }
                    k.append(l)
                },
                b.options.timeout)
            }).on("mouseleave",
            function() {
                clearTimeout(c)
            });
            return b
        },
        slider: function(b) {
            var c;
            var d = b.find(".slider-arrow.next");
            var e = b.find(".slider-arrow.prev");
            var f = b.unslider({
                autoplay: false,
                items: ".showbox",
                item: ".item-group",
                fluid: true
            });
            c = f.data("unslider");
            a(e, d, c.i, c.li.length);
            d.unbind().click(function() {
                c.next();
                a(e, d, c.i + 1, c.li.length)
            });
            e.unbind().click(function() {
                c.prev();
                a(e, d, c.i - 1, c.li.length)
            })
        },
        group: function(a, b) {
            var c = [];
            if (!b) {
                return a
            }
            while (a.length) {
                c.push(a.splice(0, b))
            }
            return c
        },
        getCache: function(a) {
            //return null//先去掉缓存
            var b = null;
            var c = IFR.getItem("navCache");
            if (!a) {
                return null
            }
            if (!c) {
                return null
            }
            c = c[a];
            if (c) {
                if (c.time + this.options.expiration > (new Date).getTime()) {
                    b = c.data
                }
            }
            return b
        },
        setCache: function(a, b, c) {
            var d = IFR.getItem("navCache") || {};
            if (!a) {
                return null
            }
            if (c && d[a] && d[a].data) {
                b = d[a].data.concat(b)
            }
            d[a] = {
                data: b,
                time: (new Date).getTime()
            };
            IFR.setItem("navCache", d);
            return this
        },
        setPageToCache: function(a, b) {
            var c = IFR.getItem("navCache") || {};
            if (!a) {
                return null
            }
            c[a].page = b;
            IFR.setItem("navCache", c);
            return this
        },
        getPageFromCache: function(a) {
            var b = IFR.getItem("navCache");
            var c = null;
            if (!a) {
                return null
            }
            if (!b) {
                return null
            }
            b = b[a];
            if (b) {
                if (b.time + this.options.expiration > (new Date).getTime()) {
                    c = b.page
                }
            }
            return c
        }
    };
    $.fn.ifanrNavPreview = function(a) {
        var c;
        if (!this) {
            return
        }
        c = new b(a);
        c.run(this);
        return c
    }
})(); !
function(a) {
    "use strict";
    var b = function(a, c) {
        return b[/string|function/.test(typeof c) ? "compile": "render"].apply(b, arguments)
    };
    var c = b.cache = {};
    var d = function(a, b) {
        if (typeof a !== "string") {
            b = typeof a;
            if (b === "number") {
                a += ""
            } else if (b === "function") {
                a = d(a.call(a))
            } else {
                a = ""
            }
        }
        return a
    };
    var e = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    };
    var f = function(a) {
        return d(a).replace(/&(?![\w#]+;)|[<>"']/g,
        function(a) {
            return e[a]
        })
    };
    var g = Array.isArray ||
    function(a) {
        return {}.toString.call(a) === "[object Array]"
    };
    var h = function(a, b) {
        if (g(a)) {
            for (var c = 0,
            d = a.length; c < d; c++) {
                b.call(a, a[c], c, a)
            }
        } else {
            for (c in a) {
                b.call(a, a[c], c)
            }
        }
    };
    var i = function(a, b) {
        var c = /(\/)[^\/]+\1\.\.\1/;
        var d = a.replace(/^([^.])/, "./$1").replace(/[^\/]+$/, "");
        var e = d + b;
        e = e.replace(/\/\.\//g, "/");
        while (e.match(c)) {
            e = e.replace(c, "/")
        }
        return e
    };
    var j = b.helpers = {
        $include: function(a, c, d) {
            var e = i(d, a);
            return b.render(e, c)
        },
        $string: d,
        $escape: f,
        $each: h
    };
    var k = function(b) {
        var c = "";
        for (var d in b) {
            c += "<" + d + ">\n" + b[d] + "\n\n"
        }
        if (c && a.console) {
            console.error("Template Error\n\n" + c)
        }
        return function() {
            return "{Template Error}"
        }
    };
    b.render = function(a, c) {
        var d = b.get(a) || k({
            id: a,
            name: "Render Error",
            message: "No Template"
        });
        return c ? d(c) : d
    };
    b.compile = function(a, b) {
        var d = typeof b === "function";
        var e = c[a] = function(c) {
            try {
                return d ? new b(c, a) + "": b
            } catch(e) {
                return k(e)()
            }
        };
        e.prototype = j;
        if (d) {
            b.prototype = j
        }
        e.toString = function() {
            return b + ""
        };
        return e
    };
    b.get = function(a) {
        return c[a.replace(/^\.\//, "")]
    };
    b.helper = function(a, b) {
        j[a] = b
    };
    b.helper("$inArray",
    function(a, b) {
        return window.$.inArray(a, b)
    });
    b.helper("i18n",
    function(a, b, c) {
        return window.i18n(a, b, c)
    });
    b.helper("url",
    function(a, b) {
        if (window.IFR.url[a]) return b ? window.IFR.url[a][b] : window.IFR.url[a]
    });
    b.helper("iff",
    function(a, b) {
        return a ? b: ""
    });
    b.helper("$relativetime",
    function() {
        return function(a) {
            return window.IFR.util.relativetime(a)
        }
    } ());
    b.helper("$strip_tags",
    function() {
        return function(a) {
            return a.replace(/(<([^>]+)>)/gi, "")
        }
    } ());
    b.helper("$substring",
    function() {
        return function(a, b) {
            return a.substring(0, b)
        }
    } ());
    b.helper("$adjust_image_size",
    function() {
        return function(a) {
            return a + window.IFR.calcBestImageSize()
        }
    } ());
    b("comment-item",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.comment_id,
        f = a.avatar,
        g = a.comment_author,
        h = a.rated,
        i = a.postId,
        j = a.comment_rating_up,
        k = a.comment_rating_down,
        l = c.$string,
        m = a.comment_content,
        n = a.from_app,
        o = a.comment_date,
        p = "";
        p += ' <li class="comment js-comment-';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '" id="comment-';
        p += d(e);
        p += '"> <div class="comment-content clearfix"> <div class="comment-top clearfix"> <div class="comment-avatar vcard"> <a data-jump-to href=".js-comment-';
        p += d(e);
        p += '"><img alt="" src="';
        p += d(f);
        p += '" class="avatar photo" /></a> </div> <div class="comment-author">';
        p += d(g);
        p += '</div> <div class="comment-rating-zone"> <a class="J_rating js-rating comment-rating rating-up';
        if (h) {
            p += " rated"
        }
        p += '" id="up-';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '" data-action="add" data-post-id="';
        p += d(i);
        p += '" href="javascript:void(0);"> <i class="ifanr2015 ifanr2015-up"></i> <i class="ifanr2015 ifanr2015-dagou"></i> <span id="karma-';
        p += d(e);
        p += '-up">';
        p += d(j);
        p += '</span> </a> <a class="J_rating js-rating comment-rating rating-down';
        if (h) {
            p += " rated"
        }
        p += '" id="down-';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '" data-action="subtract" data-post-id="';
        p += d(i);
        p += '" href="javascript:void(0);"> <i class="ifanr2015 ifanr2015-down"></i> <i class="ifanr2015 ifanr2015-dagou"></i> <span id="karma-';
        p += d(e);
        p += '-down">';
        p += d(k);
        p += '</span> </a> </div> </div> <div class="js-comment-body-';
        p += d(e);
        p += ' comment-body"> ';
        p += l(m);
        p += ' </div> <div class="comment-meta commentmetadata clearfix"> <div class="comment-date"> ';
        if (n) {
            p += ' <span class="comment-from">';
            p += l(n);
            p += "，</span> "
        }
        p += " ";
        p += d(o);
        p += ' </div> <a class="reply comment-reply-link J_ReplyCmt js-reply-comment" href="javascript:void(0);" data-postId="';
        p += d(i);
        p += '" data-parentId="';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '">回复</a> </div> </div> </li>';
        return new String(p)
    });
    b("desktop-article-like-avatars",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.like_avatar,
        f = c.$escape,
        g = a.like_count,
        h = "";
        h += '<div class="js-avatars-list avatars-list"> ';
        for (var d = 0; d < e.length; d++) {
            h += ' <img class="avatar-item" src="';
            h += f(e[d]);
            h += '" alt=""/> '
        }
        h += ' </div> <div class="avatars-counter"> <span class="js-avatars-count avatars-count">';
        h += f(g);
        h += " 个人</span> 点了赞 </div>";
        return new String(h)
    });
    b("desktop-author-hotest-posts",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.list,
        f = c.$escape,
        g = "";
        g += '<div class="title"> <i class="ifanr2015 ifanr2015-remen"></i> <h2>TA 最热的文章</h2> </div> <ul> ';
        for (d = 0; d < e.length; d++) {
            g += ' <li class="list"> <a title="';
            g += f(e[d]["title"]);
            g += '" href="';
            g += f(e[d]["link"]);
            g += '" class="ifanr-top-posts-';
            g += f(d);
            g += '" rel="external" target="_blank"> <div class="ifanr-top-posts-container"> <div class="ifanr-top-posts-cell number-cell"> <span class="ifanr-top-posts-comment">';
            g += f(d + 1);
            g += '</span> </div> <div class="ifanr-top-posts-cell"> <span class="ifanr-top-posts-title">';
            g += f(e[d]["title"]);
            g += "</span> </div> </div> </a> </li> "
        }
        g += " </ul>";
        return new String(g)
    });
    b("desktop-author-latest-posts",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.list,
        f = c.$escape,
        g = a.authorLink,
        h = "";
        h += '<div class="title"> <i class="ifanr2015 ifanr2015-remen"></i> <h2>作者最近的文章</h2> </div> <ul> ';
        for (d = 0; d < e.length; d++) {
            h += ' <li class="list"> <a title="';
            h += f(e[d]["title"]);
            h += '" href="';
            h += f(e[d]["link"]);
            h += '" class="ifanr-top-posts-';
            h += f(d);
            h += '" rel="external" target="_blank"> <div class="ifanr-top-posts-container"> <div class="ifanr-top-posts-cell number-cell"> <span class="ifanr-top-posts-comment">';
            h += f(d + 1);
            h += '</span> </div> <div class="ifanr-top-posts-cell"> <span class="ifanr-top-posts-title">';
            h += f(e[d]["title"]);
            h += "</span> </div> </div> </a> </li> "
        }
        h += ' </ul> <!-- <a class="pull-right" href="';
        h += f(g);
        h += '">更多文章</a> -->';
        return new String(h)
    });
    b("desktop-chatroom-indicator",
    function(a, b) {
        var c = this,
        d = a.show,
        e = a.showHint,
        f = c.$escape,
        g = a.hint,
        h = a.showMessages,
        i = a.avatar_0,
        j = a.avatar_1,
        k = a.avatar_2,
        l = a.message_0,
        m = a.message_1,
        n = a.message_2,
        o = "";
        o += '<section class="chatroom-indicator-container ';
        if (d) {
            o += " chatroom-indicator-show js-chatroom-indicator"
        } else {
            o += " chatroom-indicator-partially-hide "
        }
        o += '"> <div class="chatroom-indicator-header"> <i class="ifanr2015 ifanr2015-comment2 chatroom-icon"></i> <div class="chatroom-indicator-title">即时讨论</div> ';
        if (e) {
            o += ' <div class="chatroom-indicator-hint">';
            o += f(g);
            o += "</div> "
        }
        o += " </div> ";
        if (h) {
            o += ' <div class="chatroom-indicator-main"> <ul class="chatroom-indicator-avatars-list chatroom-carousel"> <li class="chatroom-carousel-item chatroom-carousel-front"> <img src="';
            o += f(i);
            o += '" class="chatroom-indicator-avatar" align="middle"/> </li> <li class="chatroom-carousel-item chatroom-carousel-middle"> <img src="';
            o += f(j);
            o += '" class="chatroom-indicator-avatar" align="middle"/> </li> <li class="chatroom-carousel-item chatroom-carousel-back"> <img src="';
            o += f(k);
            o += '" class="chatroom-indicator-avatar" align="middle"/> </li> </ul> <ul class="chatroom-indicator-messages-list chatroom-fade-carousel"> <li class="chatroom-carousel-item chatroom-carousel-front chatroom-indicator-message"> ';
            o += f(l);
            o += ' </li> <li class="chatroom-carousel-item chatroom-carousel-middle chatroom-indicator-message"> ';
            o += f(m);
            o += ' </li> <li class="chatroom-carousel-item chatroom-carousel-back chatroom-indicator-message"> ';
            o += f(n);
            o += " </li> </ul> </div> "
        }
        o += " </section> ";
        return new String(o)
    });
    b("desktop-chatroom-message-left",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.sender,
        f = a.timeStr,
        g = a.content,
        h = "";
        h += '<section class="chatroom-message-container chatroom-message-left-container"> <img src=\'';
        h += d(e.avatarUrl);
        h += '\' class="chatroom-message-avatar" /> <div class="chatroom-message-detail-left"> <div class="chatroom-message-username">';
        h += d(e.name);
        h += '</div> <div class="chatroom-message-sentat">';
        h += d(f);
        h += '</div> <div class="chatroom-message-box"> <div class="chatroom-message-triangle"></div> <div class="chatroom-message-content">';
        h += d(g);
        h += "</div> <div> </div> </section> ";
        return new String(h)
    });
    b("desktop-chatroom-message-right",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.messageId,
        f = a.sender,
        g = a.timeStr,
        h = a.failed,
        i = a.processing,
        j = a.content,
        k = "";
        k += '<section class="chatroom-message-container chatroom-message-right-container js-message" id="';
        k += d(e);
        k += "\"> <img src='";
        k += d(f.avatarUrl);
        k += '\' class="chatroom-message-avatar" /> <div class="chatroom-message-sentat">';
        k += d(g);
        k += '</div> <div class="chatroom-message-box"> ';
        if (h) {
            k += ' <div class="chatroom-message-status img-status-failed js-resend"></div> '
        } else if (i) {
            k += ' <div class="chatroom-message-status js-processing img-status-processing"></div> '
        } else {
            k += ' <div class="chatroom-message-status"></div> '
        }
        k += ' <div class="chatroom-message-content">';
        k += d(j);
        k += '</div> <div class="chatroom-message-triangle"></div> </div> </section> ';
        return new String(k)
    });
    b("desktop-chatroom-messages-group-header",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.time,
        f = "";
        f += '<div class="chatroom-messages-group-header center"> <time class="chatroom-messages-group-time">';
        f += d(e);
        f += '</time> <div class="line"></div> </div> ';
        return new String(f)
    });
    b("desktop-chatroom-messages-group",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.htmlId,
        f = function(d, e) {
            e = e || a;
            var f = c.$include(d, e, b);
            i += f;
            return f
        },
        g = a.i,
        h = a.messages,
        i = "";
        i += '<section class="chatroom-messages-group" id="';
        i += d(e);
        i += '"> ';
        f("./desktop-chatroom-messages-group-header");
        i += " ";
        for (var g = 0; g < h.length; g++) {
            i += " ";
            if (h[g].left) {
                i += " ";
                f("./desktop-chatroom-message-left", h[g]);
                i += " "
            } else {
                i += " ";
                f("./desktop-chatroom-message-right", h[g]);
                i += " "
            }
            i += " "
        }
        i += " </section> ";
        return new String(i)
    });
    b("desktop-chatroom-panel",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.title,
        f = "";
        f += '<section class="chatroom-panel"> <header class="chatroom-panel-header"> <i class="ifanr2015 ifanr2015-comment2 chatroom-icon"></i> <h1 class=\'chatroom-title\'>';
        f += d(e);
        f += '</h1> </header> <section class="chatroom-toolbar"> <div class="chatroom-close-panel-btn js-chatroom-close-panel-btn"></div> </section> <section class="js-chatroom-notification chatroom-notification chatroom-hide"> 失手了! </section> <section class="chatroom-display-area"> <section class="chatroom-load-more"> <div class="chatroom-load-more-spacer"></div> <a class=\'chatroom-load-more-link js-chatroom-load-more\' href=\'#\' onclick="return false;"><i>加载更多讨论</i></a> <div class=\'chatroom-load-more-hint js-chatroom-load-more-hint load-more-hidden\'>正在加载更多讨论...</div> </section> </section> <section class="chatroom-inputbox"> <form action="#" onsubmit="return false;"> <textarea class="auto-expand-textarea js-auto-expand-textarea" placeholder="说说你的看法"></textarea> <input class="chatroom-inputbox-return-btn" type="button" value="Send" /> </form> <div class="chatroom-inputbox-footer"> <div class="chatroom-inputbox-instruction">Enter发送</div> </div> </section> </section> ';
        return new String(f)
    });
    b("desktop-comment-item-new",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.comment_id,
        f = a.avatar,
        g = a.comment_author,
        h = a.rated,
        i = a.postId,
        j = a.comment_rating_up,
        k = a.comment_rating_down,
        l = c.$string,
        m = a.comment_content,
        n = a.from_app,
        o = a.comment_date,
        p = "";
        p += ' <li class="comment" id="comment-';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '"> <div class="comment-content clearfix"> <div class="comment-top clearfix"> <div class="comment-avatar vcard"> <a href="#comment-';
        p += d(e);
        p += '"><img alt="" src="';
        p += d(f);
        p += '" class="avatar photo"/></a> </div> </div> <div id="comment-body-';
        p += d(e);
        p += '" class="comment-body"> <div class="comment-author">';
        p += d(g);
        p += '</div> <div class="comment-rating-zone"> <a class="J_rating comment-rating rating-up';
        if (h) {
            p += " rated"
        }
        p += '" id="up-';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '" data-action="add" data-post-id="';
        p += d(i);
        p += '" href="javascript:void(0);" title="认同"> <i class="ifanr2015 ifanr2015-unfold rate-up"></i> <i class="ifanr2015 ifanr2015-dagou"></i> <span id="karma-';
        p += d(e);
        p += '-up">';
        p += d(j);
        p += '</span> </a> <a class="J_rating comment-rating rating-down';
        if (h) {
            p += " rated"
        }
        p += '" id="down-';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '" data-action="subtract" data-post-id="';
        p += d(i);
        p += '" href="javascript:void(0);" title="反对"> <i class="ifanr2015 ifanr2015-xiala-small rate-down"></i> <i class="ifanr2015 ifanr2015-dagou"></i> <span id="karma-';
        p += d(e);
        p += '-down">';
        p += d(k);
        p += '</span> </a> </div> <a class="comment-edit m-l-10 hide" href="<?php echo get_edit_comment_link(); ?>';
        p += d(e);
        p += '" target="_blank">编辑</a> <p>';
        p += l(m);
        p += '</p> </div> <div class="comment-meta commentmetadata clearfix"> <a class="reply comment-reply-link J_ReplyCmt" href="javascript:void(0);" data-postId="';
        p += d(i);
        p += '" data-parentId="';
        p += d(e);
        p += '" data-id="';
        p += d(e);
        p += '">回复</a> ';
        if (n) {
            p += ' <span class="comment-from-app">';
            p += l(n);
            p += "，</span> "
        }
        p += ' <div class="comment-date">';
        p += d(o);
        p += "</div> </div> </div> </li>";
        return new String(p)
    });
    b("desktop-comment-item",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.comment_id,
        f = a.depth,
        g = a.avatar,
        h = a.comment_author,
        i = a.rated,
        j = a.postId,
        k = a.comment_rating_up,
        l = a.comment_rating_down,
        m = c.$string,
        n = a.comment_content,
        o = a.from_app,
        p = a.comment_date,
        q = "";
        q += '<li id="comment-';
        q += d(e);
        q += '" class="comment js-comment-';
        q += d(e);
        q += '" data-id="';
        q += d(e);
        q += '" data-depth="';
        q += d(f);
        q += '"> <div class="comment-content clearfix"> <div class="comment-top clearfix"> <div class="comment-avatar vcard"> <a href="#comment-';
        q += d(e);
        q += '"><img alt="" src="';
        q += d(g);
        q += '" class="avatar photo"/></a> </div> </div> <div class="comment-body js-comment-body-';
        q += d(e);
        q += '"> <div class="comment-author">';
        q += d(h);
        q += '</div> <div class="comment-rating-zone"> <a class="J_rating js-rating comment-rating rating-up';
        if (i) {
            q += " rated"
        }
        q += '" id="up-';
        q += d(e);
        q += '" data-id="';
        q += d(e);
        q += '" data-action="add" data-post-id="';
        q += d(j);
        q += '" href="javascript:void(0);" title="认同"> <i class="ifanr2015 ifanr2015-unfold rate-up"></i> <i class="ifanr2015 ifanr2015-dagou"></i> <span id="karma-';
        q += d(e);
        q += '-up">';
        q += d(k);
        q += '</span> </a> <a class="J_rating js-rating comment-rating rating-down';
        if (i) {
            q += " rated"
        }
        q += '" id="down-';
        q += d(e);
        q += '" data-id="';
        q += d(e);
        q += '" data-action="subtract" data-post-id="';
        q += d(j);
        q += '" href="javascript:void(0);" title="反对"> <i class="ifanr2015 ifanr2015-xiala-small rate-down"></i> <i class="ifanr2015 ifanr2015-dagou"></i> <span id="karma-';
        q += d(e);
        q += '-down">';
        q += d(l);
        q += '</span> </a> </div> <a class="comment-edit m-l-10 hide" href="<?php echo get_edit_comment_link(); ?>';
        q += d(e);
        q += '" target="_blank">编辑</a> ';
        q += m(n);
        q += ' </div> <div class="comment-meta commentmetadata clearfix"> <a class="reply comment-reply-link J_ReplyCmt js-reply-comment" href="javascript:void(0);" data-postId="';
        q += d(j);
        q += '" data-parentId="';
        q += d(e);
        q += '" data-id="';
        q += d(e);
        q += '">回复</a> ';
        if (o) {
            q += ' <span class="comment-from-app">';
            q += m(o);
            q += "，</span> "
        }
        q += ' <a href="javascript:void(0)" class="comment-date">';
        q += d(p);
        q += "</a> </div> </div> ";
        if (f <= 5) {
            q += ' <ul class="js-';
            q += d(e);
            q += '-children children"></ul> '
        }
        q += " </li>";
        return new String(q)
    });
    b("desktop-entry-item-dasheng",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.comments,
        f = c.$relativetime,
        g = a.pubDate,
        h = a.link,
        i = c.$string,
        j = a.content,
        k = a.dasheng_author,
        l = a.excerpt,
        m = "";
        m += '<article class="post-item-container row entry-list clearfix"> <div class="post-item-addon comment-count"> <span class="cmt-number">';
        m += d(e);
        m += '</span> <span class="cmt-arrow"></span> </div> <div class="post-item-content"> <div class="tag-label">';
        m += f(g);
        m += '</div> <a class="dasheng-index entry-dasheng clearfix" href="';
        m += d(h);
        m += '"> <div class="entry-dasheng-inner clearfix"> <div class="dasheng_content clearfix"> <span>“';
        m += i(j);
        m += '”</span> <div class="dasheng_original text-right"> <span>—— ';
        m += d(k);
        m += "</span> </div> </div> ";
        if (l) {
            m += ' <div class="dasheng_comment clearfix"> <p>';
            m += d(l);
            m += "</p> </div> "
        }
        m += ' </div> </a> <div class="post-content-bottom row"> <a class="read-more" href="';
        m += d(h);
        m += '">阅读全文</a> <div class="sns-tools js-sns-tools"> <div class="sns-items-wrapper"> <span>分享：</span> <a class="sns-item weibo" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-xinlangweibo"></i></a> <a class="sns-item weixin" data-post-url="';
        m += d(h);
        m += '" data-el="share-to-wechat" data-placement="top" data-toggle="popover" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-weixin"></i></a> <a class="sns-item twitter" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-twitter"></i></a> <div class="sns-item more js-share-items-more" href="javascript:void(0);"> <i class="ifanr2015 ifanr2015-more"></i> <a class="sns-item evernote" target="_blank" href="http://www.evernote.com/clip.action?url=';
        m += d(h);
        m += "&title=";
        m += d(j);
        m += '"><i class="ifanr2015 ifanr2015-evernote"></i></a> <a class="sns-item douban" target="_blank" href="http://www.douban.com/share/service?href=';
        m += d(h);
        m += "&name=";
        m += d(j);
        m += '"><i class="ifanr2015 ifanr2015-douban"></i></a> <a class="sns-item qqzone" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=';
        m += d(h);
        m += "&title=";
        m += d(j);
        m += '"><i class="ifanr2015 ifanr2015-qqkongjian"></i></a> </div> </div> </div> </div> </div> </article>';
        return new String(m)
    });
    b("desktop-entry-item-data",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.ID,
        f = a.comments,
        g = c.$relativetime,
        h = a.pubDate,
        i = a.link,
        j = a.number,
        k = a.subfix,
        l = a.description,
        m = a.content,
        n = a.suffix,
        o = a.title,
        p = "";
        p += '<article id="post-';
        p += d(e);
        p += '" class="row post-item-container entry-list"> <div class="post-item-addon comment-count"> <span class="cmt-number">';
        p += d(f);
        p += '</span> <span class="cmt-arrow"></span> </div> <div class="post-item-content"> <div class="tag-label">';
        p += g(h);
        p += '</div>  <a href="';
        p += d(i);
        p += '" class="clearfix"> <div class="entry-content row"> <span class="widget-data-num num">';
        p += d(j);
        p += "</span> ";
        if (k) {
            p += ' <span class="widget-data-percent yahei">';
            p += d(k);
            p += "</span> "
        }
        p += ' <span class="widget-data-text">';
        p += d(l);
        p += '</span> <div class="entry-data-list-content"><p>';
        p += d(m);
        p += '</p></div> </div> </a> <div class="post-content-bottom row"> <a class="read-more" href="';
        p += d(i);
        p += '">阅读全文</a> <div class="sns-tools js-sns-tools"> <div class="sns-items-wrapper"> <span>分享：</span> <a class="sns-item weibo" target="_blank" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-xinlangweibo"></i></a> <a class="sns-item weixin" data-post-url="';
        p += d(i);
        p += '" data-el="share-to-wechat" data-placement="top" data-toggle="popover" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-weixin"></i></a> <a class="sns-item twitter" target="_blank" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-twitter"></i></a> <div class="sns-item more js-share-items-more" href="javascript:void(0);"> <i class="ifanr2015 ifanr2015-more"></i> <a class="sns-item evernote" target="_blank" href="http://www.evernote.com/clip.action?url=';
        p += d(i);
        p += "&title=";
        p += d(j);
        p += d(n);
        p += '"><i class="ifanr2015 ifanr2015-evernote"></i></a> <a class="sns-item douban" target="_blank" href="http://www.douban.com/share/service?href=';
        p += d(i);
        p += "&name=";
        p += d(j);
        p += d(n);
        p += '"><i class="ifanr2015 ifanr2015-douban"></i></a> <a class="sns-item qqzone" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=';
        p += d(i);
        p += "&title=";
        p += d(o);
        p += d(n);
        p += '"><i class="ifanr2015 ifanr2015-qqkongjian"></i></a> </div> </div> </div> </div> </div> </article> ';
        return new String(p)
    });
    b("desktop-entry-item",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.ID,
        f = a.link,
        g = a.image,
        h = a.title,
        i = a.comments,
        j = a.excerpt,
        k = a.category_link,
        l = a.category,
        m = a.author,
        n = c.$relativetime,
        o = a.pubDate,
        p = "";
        p += '<article id="post-';
        p += d(e);
        p += '" class="row post-item-container"> <div class="new-post-item-content"> <a class="news-pic" href="';
        p += d(f);
        p += '" style="background-image:url(\'';
        p += d(g);
        p += '!400\')"></a> <h2> <a href="';
        p += d(f);
        p += '" rel="external" title="Permalink to ';
        p += d(h);
        p += '">';
        p += d(h);
        p += '</a> <div class="comment-count new-comment-count"> <a class="comment-count-container" href="';
        p += d(f);
        p += '#comments"> <i class="ifanr2015 ifanr2015-pinglun"></i> ';
        p += d(i);
        p += ' </a> </div> </h2> <p class="js-excerpt" data-clamp="2">';
        p += d(j);
        p += '</p> <div class="tag-label"> <a class="tag" href="';
        p += d(k);
        p += '">';
        p += d(l);
        p += '</a> <span class="seperator">|</span> <span class="author">';
        p += d(m);
        p += '</span> <span class="date">';
        p += n(o);
        p += '</span> </div> <div class="post-content-bottom row"> <div class="sns-tools js-sns-tools"> <div class="sns-items-wrapper"> <span>分享：</span> <a class="sns-item weibo" target="_blank" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-xinlangweibo"></i></a> <a class="sns-item weixin" data-post-url="';
        p += d(f);
        p += '" data-el="share-to-wechat" data-placement="top" data-toggle="popover" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-weixin"></i></a> <a class="sns-item twitter" target="_blank" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-twitter"></i></a> <div class="sns-item more js-share-items-more" href="javascript:void(0);"> <i class="ifanr2015 ifanr2015-more"></i> <a ga-track="event" ga-action="click" ga-event-label="linkedin_share" ga-event-category="button" class="js-share-buttons sns-item linkedin" target="_blank" data-share="linkedin" href="https://www.linkedin.com/shareArticle?title=';
        p += d(h);
        p += "&url=";
        p += d(f);
        p += "&summary=";
        p += d(j);
        p += '&source=ifanr" target="_blank"><i class="ifanr2015 ifanr2015-linkedin"></i></a> <a class="sns-item evernote" target="_blank" href="http://www.evernote.com/clip.action?url=';
        p += d(f);
        p += "&title=";
        p += d(h);
        p += '"><i class="ifanr2015 ifanr2015-evernote"></i></a> <a class="sns-item douban" target="_blank" href="http://www.douban.com/share/service?href=';
        p += d(f);
        p += "&name=";
        p += d(h);
        p += '"><i class="ifanr2015 ifanr2015-douban"></i></a> <a class="sns-item qqzone" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=';
        p += d(f);
        p += "&title=";
        p += d(h);
        p += '"><i class="ifanr2015 ifanr2015-qqkongjian"></i></a> </div> </div> </div> </div> </div> </article>';
        return new String(p)
    });
    b("desktop-entry-related",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.relatedRes,
        g = c.$escape,
        h = "";
        for (var d = 0,
        e = f.length; d < e; d++) {
            h += ' <div class="col"> ';
            if (f[d].post_type === "data") {
                h += ' <a href="http://www.ifanr.com/data/';
                h += g(f[d].objectID);
                h += '" class="related-item"> '
            } else {
                h += ' <a href="';
                h += g(f[d].link);
                h += '" class="related-item"> '
            }
            h += " ";
            if (f[d].number) {
                h += ' <div class="picture" style="background-image:url(\'http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/related-search-shudu.jpg\')"></div> '
            } else if (f[d].image !== "") {
                h += ' <div class="picture" style="background-image:url(\'';
                h += g(f[d].image);
                h += "')\"></div> "
            } else {
                h += ' <div class="picture" style="background-image:url(\'http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/default-search-bg.jpg\')"></div> '
            }
            h += ' <div class="title"> <span class="tag"> ';
            if (f[d].category) {
                h += " ";
                h += g(f[d].category);
                h += " "
            } else if (f[d].number) {
                h += " 数读 "
            }
            h += " </span> <h2>";
            h += g(f[d].title);
            h += '</h2> <span class="decoration one"></span> <span class="decoration two"></span> </div> </a> </div> '
        }
        h += " ";
        return new String(h)
    });
    b("desktop-index-appso", '<article class="post-item-container"> <div class="post-item-addon comment-count"> <span class="cmt-number"></span> <span class="cmt-arrow"></span> </div> <div class="post-item-content"> <div class="tag-label"> <span class="tag"></span> <span class="author"></span> <span class="date"></span> </div> <h2> <a href=""></a> </h2> <a class="read-more" href=""></a> <div class="sns-tools"> <span>分享：</span> <a class="sns-item weibo" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-xinlangweibo"></i></a> <a class="sns-item weixin" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-weixin"></i></a> <a class="sns-item twitter" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-twitter"></i></a> <a class="sns-item more" href="javascript:void(0);"><i class="ifanr2015 ifanr2015-more"></i></a> </div> </div> </article>');
    b("desktop-index-mindstore",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.data,
        g = a.k,
        h = a.len2,
        i = c.$escape,
        j = c.$relativetime,
        k = "";
        for (var d = 0,
        e = f.length; d < e; d++) {
            k += ' <div class="article-item"> ';
            for (var g = 0,
            h = f[d].length; g < h; g++) {
                k += ' <a id="mindstore-';
                k += i(f[d][g]["id"]);
                k += '" target="_blank" class="entry-ms" href="http://mindstore.io/mind/';
                k += i(f[d][g].id);
                k += '/"> <span class="date">';
                k += j(f[d][g]["created_at"]);
                k += "</span> <h2>";
                k += i(f[d][g]["title"]);
                k += '</h2> <div class="ms-meta"> <div class="ms-voteup"> <i class="ifanr2015 ifanr2015-up"></i> ';
                k += i(f[d][g]["vote_count"]);
                k += ' </div> <div class="ms-comments"> <i class="ifanr2015 ifanr2015-pinglun"></i> ';
                k += i(f[d][g]["comment_count"]);
                k += ' </div> </div> <p class="ms-intro js-ms-intro"> ';
                k += i(f[d][g]["tagline"]);
                k += ' </p> <div class="ms-poster"> <img class="avatar" src="';
                k += i(f[d][g]["created_by"]["avatar_url"]);
                k += '" alt=""/> <span class="nickname">';
                k += i(f[d][g]["created_by"]["nickname"]);
                k += "</span> </div> </a> "
            }
            k += " </div> "
        }
        return new String(k)
    });
    b("desktop-menu-preview",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.previewList,
        g = c.$escape,
        h = c.$string,
        i = c.$strip_tags,
        j = "";
        for (var d = 0,
        e = f.length; d < e; d++) {
            j += ' <li class="search-item row"> ';
            if (f[d].post_type === "data") {
                j += ' <a href="http://www.ifanr.com/data/';
                j += g(f[d].objectID);
                j += '"> '
            } else {
                j += ' <a href="';
                j += g(f[d].link);
                j += '" class="';
                if (f[d].image === "" || !f[d].image) {
                    j += "non-cover"
                }
                j += '"> '
            }
            j += " ";
            if ( !! f[d].image && f[d].image !== "") {
                j += ' <div class="result-cover" style="background-image:url(\'';
                j += g(f[d].image);
                j += "')\"></div> "
            } else if (f[d].post_type === "data") {
                j += ' <div class="result-cover" style="background-image:url(\'http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/related-search-shudu.jpg\')"></div> '
            }
            j += ' <div class="result-content"> <h2 class="title">';
            j += h(f[d].title);
            j += '</h2> <p class="excerpt js-excerpt" data-clamp="2">';
            j += g(i(f[d].content));
            j += '</p> <span class="meta"> ';
            if (f[d].category && f[d].category !== "") {
                j += " ";
                j += g(f[d].category);
                j += " | "
            } else if (f[d].post_type === "data") {
                j += " 数读 | "
            }
            j += " ";
            if (f[d].post_type !== "data") {
                j += " ";
                j += g(f[d].author);
                j += " | "
            }
            j += " ";
            j += g(f[d].pubDate);
            j += "</span> </div> </a> </li> "
        }
        return new String(j)
    });
    b("desktop-nav-app-tags",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.tags,
        g = c.$escape,
        h = "";
        h += "<ul> ";
        for (var d = 0,
        e = f.length; d < e; d++) {
            h += ' <li class="tag-item"> <a class="tag" href="/tag/';
            h += g(f[d]);
            h += '">';
            h += g(f[d]);
            h += "</a> </li> "
        }
        h += " </ul>";
        return new String(h)
    });
    b("desktop-nav-app",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.previewList,
        g = a.j,
        h = a.len2,
        i = c.$escape,
        j = "";
        j += '<div class="showbox nav-app"> ';
        for (var d = 0,
        e = f.length; d < e; d++) {
            j += ' <div class="item-group"> <div class="item-group-container"> ';
            for (var g = 0,
            h = f[d].length; g < h; g++) {
                j += " ";
                if (f[d][g].is_jiong) {
                    j += ' <div class="item jiong"> <a href="';
                    j += i(f[d][g].jiong_link);
                    j += '" target="_blank" rel="canonical"> <img class="jiong-picture" src="';
                    j += i(f[d][g].jiong_image);
                    j += '" width="270" height="180" alt="appso banner"> </a> </div> '
                } else {
                    j += ' <div class="item"> <a rel="canonical" href="';
                    j += i(f[d][g].link);
                    j += '"> <h3 class="title js-excerpt" data-clamp="2">';
                    j += i(f[d][g].title);
                    j += '</h3> <div class="content-container"> <div class="content"> <p class="excerpt js-excerpt" data-clamp="4">';
                    j += i(f[d][g].excerpt);
                    j += '</p> </div> <img src="';
                    j += i(f[d][g].image);
                    j += '" alt="';
                    j += i(f[d][g].title);
                    j += '"/> </div> </a>  <!-- <span class="meta"> <span class="tags js-tags">';
                    j += i(f[d][g].tags);
                    j += "</span> </span> --> </div> "
                }
                j += " "
            }
            j += " </div> </div> "
        }
        j += ' </div> <a class="goto" href="/app" title="进入AppSo专栏">进入专栏</a>';
        return new String(j)
    });
    b("desktop-nav-dasheng",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.previewList,
        g = a.j,
        h = a.len2,
        i = c.$escape,
        j = "";
        j += '<div class="showbox nav-dasheng"> ';
        for (var d = 0,
        e = f.length; d < e; d++) {
            j += ' <div class="item-group"> <div class="item-group-container"> ';
            for (var g = 0,
            h = f[d].length; g < h; g++) {
                j += ' <div class="item"> <a rel="canonical" href="';
                j += i(f[d][g].link);
                j += '"> <i class="ifanr2015 ifanr2015-dasheng item-hide item-background"></i> <div class="content-container"> <div class="content"> <p class="excerpt js-excerpt" data-clamp="4">';
                j += i(f[d][g].excerpt);
                j += '</p> </div> </div> <span class="meta"> <span class="more item-hide">更多解读</span> <span class="author">';
                j += i(f[d][g].author);
                j += "</span> </span> </a> </div> "
            }
            j += " </div> </div> "
        }
        j += ' </div> <a class="goto" href="/dasheng" title="进入大声专栏">进入专栏</a>';
        return new String(j)
    });
    b("desktop-nav-data",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.previewList,
        g = a.j,
        h = a.len2,
        i = c.$escape,
        j = "";
        j += '<div class="showbox nav-data"> ';
        for (var d = 0,
        e = f.length; d < e; d++) {
            j += ' <div class="item-group"> <div class="item-group-container"> ';
            for (var g = 0,
            h = f[d].length; g < h; g++) {
                j += ' <div class="item"> <a rel="canonical" href="';
                j += i(f[d][g].link);
                j += '"> <span class="js-dateYMD date">';
                j += i(f[d][g].pubDate);
                j += '</span> <h3 class="number-container"> <span class="number">';
                j += i(f[d][g].number);
                j += '</span> <span class="subfix">';
                j += i(f[d][g].subfix);
                j += '</span> </h3> <p class="excerpt js-excerpt" data-clamp="2">';
                j += i(f[d][g].description);
                j += "</p> </a> </div> "
            }
            j += " </div> </div> "
        }
        j += " </div> ";
        return new String(j)
    });
    b("desktop-nav-mindstore",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.previewList,
        g = a.j,
        h = a.len2,
        i = c.$escape,
        j = "";
        j += '<div class="showbox nav-mindstore"> ';
        for (var d = 0,
        e = f.length; d < e; d++) {
            j += ' <div class="item-group"> <div class="item-group-container"> ';
            for (var g = 0,
            h = f[d].length; g < h; g++) {
                j += ' <div class="item"> <a rel="canonical" href="http://mindstore.io/mind/';
                j += i(f[d][g].id);
                j += '/"> <img class="avatar" src="';
                j += i(f[d][g]["created_by"]["avatar_url"]);
                j += '" alt="';
                j += i(f[d][g]["created_by"]["nickname"]);
                j += '"/> <h3 class="title js-excerpt" data-clamp="2">';
                j += i(f[d][g].title);
                j += '</h3> <div class="content-container"> <div class="content"> <p class="excerpt js-excerpt" data-clamp="2">';
                j += i(f[d][g].tagline);
                j += '</p> </div> </div> <span class="meta"> <span class="ms-voteup"> <i class="ifanr2015 ifanr2015-up"></i> ';
                j += i(f[d][g]["vote_count"]);
                j += ' </span> <span class="ms-comments"> <i class="ifanr2015 ifanr2015-pinglun"></i> ';
                j += i(f[d][g]["comment_count"]);
                j += " </span> </span> </a> </div> "
            }
            j += " </div> </div> "
        }
        j += ' </div> <a class="goto" href="http://mindstore.io/" title="进入MindStore">进入MindStore</a>';
        return new String(j)
    });
    b("desktop-nav-preview",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.previewList,
        g = a.j,
        h = a.len2,
        i = c.$escape,
        j = "";
        j += '<div class="showbox"> ';
        for (var d = 0,
        e = f.length; d < e; d++) {
            j += ' <div class="item-group"> <div class="item-group-container"> ';
            for (var g = 0,
            h = f[d].length; g < h; g++) {
                j += " ";
                if (f[d][g].is_jiong) {
                    j += ' <div class="item jiong"> <a href="';
                    j += i(f[d][g].jiong_link);
                    j += '" target="_blank" rel="canonical"> <img class="jiong-picture" src="';
                    j += i(f[d][g].jiong_image);
                    j += '" width="270" height="180" alt="appso banner"> </a> </div> '
                } else {
                    j += ' <div class="item"> <a rel="canonical" href="';
                    j += i(f[d][g].link);
                    j += '"> <h3 class="title js-excerpt" data-clamp="2">';
                    j += i(f[d][g].title);
                    j += '</h3> <div class="content-container"> <div class="content"> <p class="excerpt js-excerpt" data-clamp="4">';
                    j += i(f[d][g].excerpt);
                    j += '</p> </div> <img src="';
                    j += i(f[d][g].image);
                    j += '" alt="';
                    j += i(f[d][g].title);
                    j += '"/> </div> <span class="meta"> <span class="author">';
                    j += i(f[d][g].author);
                    j += '</span> <span class="time">';
                    j += i(f[d][g].pubDate);
                    j += "</span> </span> </a> </div> "
                }
                j += " "
            }
            j += " </div> </div> "
        }
        j += " </div>";
        return new String(j)
    });
    b("desktop-nav-video",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.previewList,
        g = a.j,
        h = a.len2,
        i = c.$escape,
        j = "";
        j += '<div class="showbox nav-video"> ';
        for (var d = 0,
        e = f.length; d < e; d++) {
            j += ' <div class="item-group"> <div class="item-group-container"> ';
            for (var g = 0,
            h = f[d].length; g < h; g++) {
                j += ' <div class="item"> <a rel="canonical" href="';
                j += i(f[d][g].ifr_video_url);
                j += '" target="_blank"> <div class="content-container"> <i class="ifanr2015 ifanr2015-shipin"></i> <img class="img" src="';
                j += i(f[d][g].ifr_video_snapshot);
                j += '" alt="';
                j += i(f[d][g].title);
                j += '"/> <h3 class="title js-excerpt" data-clamp="2">';
                j += i(f[d][g].title);
                j += '</h3> </div> <span class="meta"> <span class="duration">时长:';
                j += i(f[d][g].ifr_video_duration);
                j += '</span> <span class="date js-date">';
                j += i(f[d][g].pubDate);
                j += "</span> </span> </a> </div> "
            }
            j += " </div> </div> "
        }
        j += " </div>";
        return new String(j)
    });
    b("desktop-prevnext-post",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.data,
        f = "";
        f += '<div class="pn-post-container"> <div class="pn next-post"> <div class="bg-img" style="background-image:url(\'';
        f += d(e.next.image);
        f += '!320\')"></div> <a href="';
        f += d(e.next.link);
        f += '" title="';
        f += d(e.prev.title);
        f += '"> <i class="ifanr2015 ifanr2015-shangyige"></i> <div class="title">';
        f += d(e.next.title);
        f += '</div> </a> </div> <div class="pn prev-post"> <div class="bg-img" style="background-image:url(\'';
        f += d(e.prev.image);
        f += '!320\')"></div> <a href="';
        f += d(e.prev.link);
        f += '" title="';
        f += d(e.prev.title);
        f += '"> <div class="title">';
        f += d(e.prev.title);
        f += '</div> <i class="ifanr2015 ifanr2015-xiayige"></i> </a> </div> </div>';
        return new String(f)
    });
    b("desktop-top-post",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.list,
        f = c.$escape,
        g = "";
        g += '<div class="title"> <i class="ifanr2015 ifanr2015-remen"></i> <h2>热门文章</h2> </div> <ul> ';
        for (d = 0; d < e.length; d++) {
            g += ' <li class="list"> <a ga-track="event" ga-action="click" ga-event-category="anchor" ga-event-label="TopNews" title="';
            g += f(e[d]["title"]);
            g += '" href="';
            g += f(e[d]["link"]);
            g += '" class="ifanr-top-posts-';
            g += f(d);
            g += '"> <div class="ifanr-top-posts-container"> <div class="ifanr-top-posts-cell number-cell"> <span class="ifanr-top-posts-comment">';
            g += f(d + 1);
            g += '</span> </div> <div class="ifanr-top-posts-cell"> <span class="ifanr-top-posts-title">';
            g += f(e[d]["title"]);
            g += "</span> </div> </div> </a> </li> "
        }
        g += " </ul>";
        return new String(g)
    });
    b("email-report",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.list,
        f = c.$escape,
        g = "";
        for (var d = 0; d < e.length; d++) {
            g += " ";
            g += f(e[d].key);
            g += ":<br /> ";
            g += f(e[d].value);
            g += "<br /><br /> "
        }
        return new String(g)
    });
    b("entry-item-dasheng",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.ID,
        f = a.link,
        g = a.needPreTitle,
        h = a.content,
        i = a.dasheng_author,
        j = "";
        j += ' <a id="post-';
        j += d(e);
        j += '" class="post dasheng entry-list clearfix" href="';
        j += d(f);
        j += '"> <i class="ifanr2015 ifanr2015-dasheng dasheng-bg"></i> <div class="entry-header"> ';
        if (g) {
            j += ' <span class="tag">大声</span> '
        }
        j += ' </div> <div class="entry-content clearfix"> <p>';
        j += d(h);
        j += '</p> </div> <div class="post-author">—— ';
        j += d(i);
        j += "</div> </a>";
        return new String(j)
    });
    b("entry-item-data",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.link,
        f = a.ID,
        g = a.pubDate,
        h = a.number,
        i = a.subfix,
        j = a.description,
        k = "";
        k += '<a href="';
        k += d(e);
        k += '" id="post-';
        k += d(f);
        k += '" class="entry-list clearfix"> <div class="entry-content"> <span class="widget-data-time">';
        k += d(g);
        k += '</span> <span class="widget-data-num num">';
        k += d(h);
        k += "</span> ";
        if (i) {
            k += ' <span class="widget-data-percent yahei">';
            k += d(i);
            k += "</span> "
        }
        k += ' <span class="widget-data-text">';
        k += d(j);
        k += "</span> </div> </a>";
        return new String(k)
    });
    b("entry-item",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.ID,
        f = a.link,
        g = a.needPreTitle,
        h = a.category,
        i = c.$relativetime,
        j = a.pubDate,
        k = a.comments,
        l = a.title,
        m = a.excerpt,
        n = c.$adjust_image_size,
        o = a.thumb,
        p = a.image,
        q = "";
        q += ' <a id="post-';
        q += d(e);
        q += '" class="post entry-list clearfix" href="';
        q += d(f);
        q += '"> <div class="entry-content clearfix"> <div class="clearfix post-meta"> ';
        if (g) {
            q += ' <span class="tag">';
            q += d(h);
            q += '</span><span class="seperator">|</span> '
        }
        q += ' <div class="post-author">';
        q += i(j);
        q += '</div> <div class="entry-comment-number"> <i class="ifanr2015 ifanr2015-pinglun"></i> <span class="number">';
        q += d(k);
        q += '</span> </div> </div> <div class="entry-header"> <h1 class="entry-name yahei"> <span>';
        q += d(l);
        q += '</span> </h1> </div> <div class="summary"> <p>';
        q += d(m);
        q += '</p> </div> <div class="clearfix"> <div class="post-thumb"> <img src="';
        q += d(n(o ? o: p));
        q += '"> </div> </div> </div> <span class="post-separator"></span> </a>';
        return new String(q)
    });
    b("mobile-chatroom-message-left",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.sender,
        f = a.content,
        g = "";
        g += '<section class="chatroom-message-container chatroom-message-left-container"> <img src=\'';
        g += d(e.avatarUrl);
        g += '\' class="chatroom-message-avatar" /> <div class="chatroom-message-detail-left"> <div class="chatroom-message-username">';
        g += d(e.name);
        g += '</div> <div class="chatroom-message-box"> <div class="chatroom-message-triangle"></div> <div class="chatroom-message-content">';
        g += d(f);
        g += "</div> <div> </div> </section> ";
        return new String(g)
    });
    b("mobile-chatroom-message-right",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.messageId,
        f = a.sender,
        g = a.failed,
        h = a.processing,
        i = a.content,
        j = "";
        j += '<section class="chatroom-message-container chatroom-message-right-container js-message" id="';
        j += d(e);
        j += "\"> <img src='";
        j += d(f.avatarUrl);
        j += '\' class="chatroom-message-avatar" /> <div class="chatroom-message-box"> ';
        if (g) {
            j += ' <div class="chatroom-message-status chatroom-message-status img-status-failed js-resend"></div> '
        } else if (h) {
            j += ' <div class="chatroom-message-status chatroom-message-status img-status-processing"></div> '
        } else {
            j += ' <div class="chatroom-message-status"></div> '
        }
        j += ' <div class="chatroom-message-content">';
        j += d(i);
        j += '</div> <div class="chatroom-message-triangle"></div> </div> </section> ';
        return new String(j)
    });
    b("mobile-chatroom-messages-group",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.htmlId,
        f = a.time,
        g = a.i,
        h = a.messages,
        i = function(d, e) {
            e = e || a;
            var f = c.$include(d, e, b);
            j += f;
            return f
        },
        j = "";
        j += '<section class="chatroom-messages-group" id="';
        j += d(e);
        j += '"> <time class="chatroom-messages-group-time">';
        j += d(f);
        j += "</time> ";
        for (var g = 0; g < h.length; g++) {
            j += " ";
            if (h[g].left) {
                j += " ";
                i("./mobile-chatroom-message-left", h[g]);
                j += " "
            } else {
                j += " ";
                i("./mobile-chatroom-message-right", h[g]);
                j += " "
            }
            j += " "
        }
        j += " </section> ";
        return new String(j)
    });
    b("mobile-entry-related",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.relatedRes,
        g = c.$escape,
        h = "";
        for (var d = 0,
        e = f.length; d < e; d++) {
            h += " ";
            if (f[d].post_type === "data") {
                h += ' <a href="http://www.ifanr.com/data/';
                h += g(f[d].objectID);
                h += '" class="related-item"> '
            } else {
                h += ' <a href="';
                h += g(f[d].link);
                h += '" class="related-item"> '
            }
            h += " ";
            if (f[d].number) {
                h += ' <div class="picture js-head-picture" style="background-image:url(\'http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/related-search-shudu.jpg\')"></div> '
            } else if (f[d].image !== "") {
                h += ' <div class="picture js-head-picture" style="background-image:url(\'';
                h += g(f[d].image);
                h += "')\"></div> "
            } else {
                h += ' <div class="picture js-head-picture" style="background-image:url(\'http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/default-search-bg.jpg\')"></div> '
            }
            h += ' <div class="title"> <span class="tag"> ';
            if (f[d].category) {
                h += " ";
                h += g(f[d].category);
                h += " "
            } else if (f[d].number) {
                h += " 数字 "
            }
            h += " </span> <h2>";
            h += g(f[d].title);
            h += '</h2> <span class="decoration one"></span> <span class="decoration two"></span> </div> </a> '
        }
        h += " ";
        return new String(h)
    });
    b("mobile-index-appso",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.data,
        f = c.$escape,
        g = "";
        for (d = 0; d < e.length; d++) {
            g += ' <a id="post-';
            g += f(e[d]["id"]);
            g += '" class="post entry-appso entry-list clearfix" href="';
            g += f(e[d]["post_url"]);
            g += '"> <div class="entry-content clearfix"> <div class="clearfix"> <div class="post-thumb"> <img src="';
            g += f(e[d]["cover_image"]["url"]);
            g += '"> </div> ';
            if (e[d]["app_icon"] && e[d]["platforms"]) {
                g += ' <div class="app-meta"> <img class="app-icon" src="';
                g += f(e[d]["app_icon"]["url"]);
                g += '"> <div class="app-platforms">';
                g += f(e[d]["platforms"]);
                g += "</div> </div> "
            }
            g += ' </div> <div class="entry-header"> <h1 class="entry-name yahei"> <span>';
            g += f(e[d]["title"]);
            g += '</span> </h1> </div> </div> <span class="post-separator"></span> </a> '
        }
        return new String(g)
    });
    b("mobile-index-mindstore",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.data,
        f = c.$escape,
        g = c.$relativetime,
        h = "";
        for (d = 0; d < e.length; d++) {
            h += ' <a id="mindstore-';
            h += f(e[d]["id"]);
            h += '" class="entry-ms" href="';
            h += f(e[d]["post_url"]);
            h += '"> <h2>';
            h += f(e[d]["title"]);
            h += '</h2> <div class="ms-meta"> <div class="ms-voteup"> <i class="ifanr2015 ifanr2015-up"></i> ';
            h += f(e[d]["vote_count"]);
            h += ' </div> <div class="ms-comments"> <i class="ifanr2015 ifanr2015-pinglun"></i> ';
            h += f(e[d]["comment_count"]);
            h += ' </div> </div> <p class="ms-intro"> ';
            h += f(e[d]["tagline"]);
            h += ' </p> <div class="ms-poster"> <img class="avatar" src="';
            h += f(e[d]["created_by"]["avatar_url"]);
            h += '" alt=""/> <span class="nickname">';
            h += f(e[d]["created_by"]["nickname"]);
            h += '</span> <span class="date">';
            h += g(e[d]["created_at"]);
            h += "</span> </div> </a> "
        }
        return new String(h)
    });
    b("navbar-top-ad",
    function(a, b) {
        var c = this,
        d = c.$escape,
        e = a.data,
        f = "";
        f += '<a ga-track="event" ga-action="click" ga-event-category="navbar-top-jiong" ga-event-label="navbar-top-jiong" href="';
        f += d(e.jiong_link);
        f += '" class="live-container"> <div class="info"> <div class="title">';
        f += d(e.jiong_title);
        f += '</div> <div class="message js-excerpt" data-clamp="2">';
        f += d(e.jiong_description);
        f += '</div> </div> <img class="picture" src="';
        f += d(e.jiong_image);
        f += '" width="100" height="60" alt="';
        f += d(e.jiong_title);
        f += '"> </a>';
        return new String(f)
    });
    b("search/desk-list",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.searchList,
        g = c.$escape,
        h = c.$string,
        i = c.$substring,
        j = c.$strip_tags,
        k = "";
        k += " ";
        for (var d = 0,
        e = f.length; d < e; d++) {
            k += ' <li class="search-item row"> ';
            if (f[d].post_type === "data") {
                k += ' <a href="http://www.ifanr.com/data/';
                k += g(f[d].objectID);
                k += '"> '
            } else {
                k += ' <a href="';
                k += g(f[d].link);
                k += '" target="_blank" class="';
                if (f[d].image === "" || !f[d].image) {
                    k += "non-cover"
                }
                k += '"> '
            }
            k += " ";
            if ( !! f[d].image && f[d].image !== "") {
                k += ' <div class="result-cover" style="background-image:url(\'';
                k += g(f[d].image);
                k += "')\"></div> "
            } else if (f[d].post_type === "data") {
                k += ' <div class="result-cover" style="background-image:url(\'http://cdn.ifanr.cn/site-static/ifanr-2.0/dist/images/common/related-search-shudu.jpg\')"></div> '
            }
            k += ' <div class="result-content"> <h2 class="title">';
            k += h(f[d]._highlightResult.title.value);
            k += '</h2> <p class="excerpt js-excerpt">';
            k += g(i(j(f[d].content), 120));
            k += '</p> <span class="meta"> ';
            if (f[d].category && f[d].category !== "") {
                k += " ";
                k += g(f[d].category);
                k += " | "
            } else if (f[d].post_type === "data") {
                k += " 数读 | "
            }
            k += " ";
            if (f[d].post_type !== "data") {
                k += " ";
                k += g(f[d].author);
                k += " | "
            }
            k += " ";
            k += g(f[d].pubDate);
            k += "</span> </div> </a> </li> "
        }
        return new String(k)
    });
    b("search/mobile-list",
    function(a, b) {
        var c = this,
        d = a.i,
        e = a.len,
        f = a.searchList,
        g = c.$escape,
        h = c.$string,
        i = "";
        i += " ";
        for (var d = 0,
        e = f.length; d < e; d++) {
            i += ' <li class="search-item"> <a href="';
            i += g(f[d].link);
            i += '"> <div class="article-title"> ';
            i += h(f[d]._highlightResult.title.value);
            i += " </div> </a> </li> "
        }
        return new String(i)
    });
    b("search/search-desk-zone", '<div class="ifr-search-zone" id="ifr-search-zone" style="display:none"> <div class="ifr-search-zone-inner"> <div class="ifr-search-zone-container"> <div class="query-zone"> <input type="text" id="ifr-query-search" placeholder="搜索文章"> </div> <div class="loading" id="search-loading"> </div> <div class="search-title js-search-title hide">共搜索到 <span class="js-results-count"></span> 篇文章</div> <div class="search-ifr"> <ul class="search-list" id="search-list"></ul> <div class="load-more hide" id="search-load-more"> <button id="next-page">加载更多</button> </div> </div> </div> </div> </div>');
    b("search/search-zone", '<div class="ifr-search-zone" id="ifr-search-zone"> <div class="ifr-search-zone-container"> <div class="close-zone"> <span id="ifr-cancel-search"> <i class="ifanr2015 ifanr2015-guanbi"></i> </span> </div> <div class="query-zone"> <i class="ifanr2015 ifanr2015-search"></i> <input type="text" id="ifr-query-search"> </div> <div class="loading" id="loading"> </div> <div class="search-ifr"> <ul class="search-list" id="search-list"></ul> <div class="load-more hide" id="search-load-more"> <button id="next-page">加载更多</button> </div> </div> </div> </div>');
    if (typeof define === "function") {
        define(function() {
            return b
        })
    } else if (typeof exports !== "undefined") {
        module.exports = b
    } else {
        a.template = b
    }
} (this);
(function(a) {
    "use strict";
    var b = function(a) {
        this.target = a
    };
    b.prototype = {
        getData: function(a, b, c, d) {
            var e = this;
            IFR.api(a, {
                data: {
                    post_id: e.options.postId
                },
                success: function(a) {
                    c = c || {};
                    if (a.status === 1) {
                        c[b] = e.saveData(a.data)
                    }
                    if (d) {
                        d(c)
                    }
                    return c
                }
            })
        },
        render: function(b, c) {
            var d = template("desktop-prevnext-post", {
                data: c
            });
            a(b).html(d)
        },
        run: function(b) {
            var c = a(b);
            var d = this;
            c.each(function(b, c) {
                var e = a(c);
                var f = e.data("id");
                if (!f) return;
                d.options.postId = f;
                d.getData("get_prev_post", "prev", {},
                function(a) {
                    d.getData("get_next_post", "next", a,
                    function(a) {
                        d.render(e, a)
                    })
                })
            })
        },
        saveData: function(a) {
            var b = {};
            if (a && !(a instanceof Array)) {
                b.title = a["post_title"];
                b.image = a["ifr_post_image"];
                b.link = a["ifr_post_permalink"]
            } else {
                b.title = "已经是第一篇了";
                b.image = "";
                b.link = "#"
            }
            return b
        },
        options: {
            target: "",
            postId: 0
        }
    };
    a.fn.PrevNextPost = function() {
        var a = new b;
        a.run(this);
        return this
    }; (new b).run(".prevnext-post")
})(jQuery); !
function(a, b) {
    "use strict";
    function c(a) {
        this.callback = a,
        this.ticking = !1
    }
    function d(b) {
        return b && "undefined" != typeof a && (b === a || b.nodeType)
    }
    function e(a) {
        if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
        var b, c, f = a || {};
        for (c = 1; c < arguments.length; c++) {
            var g = arguments[c] || {};
            for (b in g) f[b] = "object" != typeof f[b] || d(f[b]) ? f[b] || g[b] : e(f[b], g[b])
        }
        return f
    }
    function f(a) {
        return a === Object(a) ? a: {
            down: a,
            up: a
        }
    }
    function g(a, b) {
        b = e(b, g.options),
        this.lastKnownScrollY = 0,
        this.elem = a,
        this.debouncer = new c(this.update.bind(this)),
        this.tolerance = f(b.tolerance),
        this.classes = b.classes,
        this.offset = b.offset,
        this.scroller = b.scroller,
        this.initialised = !1,
        this.onPin = b.onPin,
        this.onUnpin = b.onUnpin,
        this.onTop = b.onTop,
        this.onNotTop = b.onNotTop
    }
    var h = {
        bind: !!
        function() {}.bind,
        classList: "classList" in b.documentElement,
        rAF: !!(a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame)
    };
    a.requestAnimationFrame = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame,
    c.prototype = {
        constructor: c,
        update: function() {
            this.callback && this.callback(),
            this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    },
    g.prototype = {
        constructor: g,
        init: function() {
            return g.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
        },
        destroy: function() {
            var a = this.classes;
            this.initialised = !1,
            this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.initial),
            this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
        },
        unpin: function() {
            var a = this.elem.classList,
            b = this.classes; (a.contains(b.pinned) || !a.contains(b.unpinned)) && (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var a = this.elem.classList,
            b = this.classes;
            a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this))
        },
        top: function() {
            var a = this.elem.classList,
            b = this.classes;
            a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var a = this.elem.classList,
            b = this.classes;
            a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this))
        },
        getScrollY: function() {
            return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset: void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop: (b.documentElement || b.body.parentNode || b.body).scrollTop
        },
        getViewportHeight: function() {
            return a.innerHeight || b.documentElement.clientHeight || b.body.clientHeight
        },
        getDocumentHeight: function() {
            var a = b.body,
            c = b.documentElement;
            return Math.max(a.scrollHeight, c.scrollHeight, a.offsetHeight, c.offsetHeight, a.clientHeight, c.clientHeight)
        },
        getElementHeight: function(a) {
            return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === a || this.scroller === b.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(a) {
            var b = 0 > a,
            c = a + this.getViewportHeight() > this.getScrollerHeight();
            return b || c
        },
        toleranceExceeded: function(a, b) {
            return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b]
        },
        shouldUnpin: function(a, b) {
            var c = a > this.lastKnownScrollY,
            d = a >= this.offset;
            return c && d && b
        },
        shouldPin: function(a, b) {
            var c = a < this.lastKnownScrollY,
            d = a <= this.offset;
            return c && b || d
        },
        update: function() {
            var a = this.getScrollY(),
            b = a > this.lastKnownScrollY ? "down": "up",
            c = this.toleranceExceeded(a, b);
            this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a)
        }
    },
    g.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: a,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            initial: "headroom"
        }
    },
    g.cutsTheMustard = "undefined" != typeof h && h.rAF && h.bind && h.classList,
    a.Headroom = g
} (window, document);
(function(a) {
    a.fn.lazyload = function(b) {
        var c = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window
        };
        if (b) {
            a.extend(c, b)
        }
        var d = this;
        if ("scroll" == c.event) {
            a(c.container).bind("scroll",
            function(b) {
                var e = 0;
                d.each(function() {
                    if (a.abovethetop(this, c) || a.leftofbegin(this, c)) {} else if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) {
                        a(this).trigger("appear")
                    } else {
                        if (e++>c.failurelimit) {
                            return false
                        }
                    }
                });
                var f = a.grep(d,
                function(a) {
                    return ! a.loaded
                });
                d = a(f)
            })
        }
        this.each(function() {
            var b = this;
            if (undefined == a(b).attr("original")) {
                a(b).attr("original", a(b).attr("src"))
            }
            if ("scroll" != c.event || undefined == a(b).attr("src") || c.placeholder == a(b).attr("src") || (a.abovethetop(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.rightoffold(b, c))) {
                if (c.placeholder) {
                    a(b).attr("src", c.placeholder)
                } else {
                    a(b).removeAttr("src")
                }
                b.loaded = false
            } else {
                b.loaded = true
            }
            a(b).one("appear",
            function() {
                if (!this.loaded) {
                    a("<img />").bind("load",
                    function() {
                        a(b).hide().attr("src", a(b).attr("original"))[c.effect](c.effectspeed);
                        b.loaded = true
                    }).attr("src", a(b).attr("original"))
                }
            });
            if ("scroll" != c.event) {
                a(b).bind(c.event,
                function(c) {
                    if (!b.loaded) {
                        a(b).trigger("appear")
                    }
                })
            }
        });
        a(c.container).trigger(c.event);
        return this
    };
    a.belowthefold = function(b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).height() + a(window).scrollTop()
        } else {
            var d = a(c.container).offset().top + a(c.container).height()
        }
        return d <= a(b).offset().top - c.threshold
    };
    a.rightoffold = function(b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).width() + a(window).scrollLeft()
        } else {
            var d = a(c.container).offset().left + a(c.container).width()
        }
        return d <= a(b).offset().left - c.threshold
    };
    a.abovethetop = function(b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).scrollTop()
        } else {
            var d = a(c.container).offset().top
        }
        return d >= a(b).offset().top + c.threshold + a(b).height()
    };
    a.leftofbegin = function(b, c) {
        if (c.container === undefined || c.container === window) {
            var d = a(window).scrollLeft()
        } else {
            var d = a(c.container).offset().left
        }
        return d >= a(b).offset().left + c.threshold + a(b).width()
    };
    a.extend(a.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
})(jQuery); 
(function(a) {
    a.InFieldLabels = function(b, c, d) {
        var e = this;
        e.$label = a(b);
        e.$field = a(c);
        e.$label.data("InFieldLabels", e);
        e.showing = true;
        e.init = function() {
            e.options = a.extend({},
            a.InFieldLabels.defaultOptions, d);
            e.$label.css("position", "absolute");
            var b = e.$field.position();
            e.$label.css({
                left: 0,
                top: 0,
                display: "block"
            }).addClass(e.options.labelClass);
            e.$field.attr("autocomplete", "off");
            if (e.$field.val() != "") {
                e.$label.hide();
                e.showing = false
            }
            e.$field.focus(function() {
                e.fadeOnFocus();
                e.$field.removeAttr("autocomplete")
            }).blur(function() {
                e.checkForEmpty(true)
            }).bind("keydown.infieldlabel",
            function(a) {
                e.hideOnChange(a)
            }).change(function(a) {
                e.checkForEmpty()
            }).bind("onPropertyChange",
            function() {
                e.checkForEmpty()
            }).bind("input",
            function(a) {
                e.hideOnChange(a)
            }).bind("DOMAutoComplete",
            function(a) {
                e.hideOnChange(a)
            })
        };
        e.fadeOnFocus = function() {
            if (e.showing) {
                e.$label.stop().animate({
                    left: "+=20"
                },
                200,
                function() {
                    e.setOpacity(e.options.fadeOpacity)
                })
            }
        };
        e.setOpacity = function(a) {
            e.$label.stop().animate({
                opacity: a
            },
            e.options.fadeDuration);
            e.showing = a > 0
        };
        e.checkForEmpty = function(a) {
            if (e.$field.val() == "") {
                e.prepForShow();
                e.$label.stop().animate({
                    left: "0px"
                },
                200,
                function() {
                    e.setOpacity(a ? 1 : e.options.fadeOpacity)
                })
            } else {
                e.setOpacity(0)
            }
        };
        e.prepForShow = function(a) {
            if (!e.showing) {
                e.$label.css({
                    opacity: 0
                }).show();
                e.$field.bind("keydown.infieldlabel",
                function(a) {
                    e.hideOnChange(a)
                })
            }
        };
        e.hideOnChange = function(a) {
            if (a.keyCode == 16 || a.keyCode == 9) return;
            if (e.showing) {
                e.$label.hide();
                e.showing = false
            }
            e.$field.unbind("keydown.infieldlabel")
        };
        e.init()
    };
    a.InFieldLabels.defaultOptions = {
        fadeOpacity: .5,
        fadeDuration: 300,
        labelClass: "infield"
    };
    a.fn.inFieldLabels = function(b) {
        return this.each(function() {
            var c = a(this).attr("for");
            if (!c) return;
            var d = a("input#" + c + "[type='text']," + "input#" + c + "[type='password']," + "textarea#" + c);
            if (d.length == 0) return;
            new a.InFieldLabels(this, d[0], b)
        })
    }
})(jQuery); 
(function(a) {
    a.fn.lightbox = function(b) {
        var c = a.extend({},
        a.fn.lightbox.defaults, b);
        return this.each(function() {
            a(this).click(function() {
                d();
                h(this);
                return false
            })
        });
        function d() {
            a("#overlay").remove();
            a("#lightbox").remove();
            c.inprogress = false;
            if (c.jsonData && c.jsonData.length > 0) {
                var b = c.jsonDataParser ? c.jsonDataParser: a.fn.lightbox.parseJsonData;
                c.imageArray = [];
                c.imageArray = b(c.jsonData)
            }
            var d = '<div id="outerImageContainer">';
            d += '<div id="imageContainer">';
            d += '<iframe id="lightboxIframe" />';
            d += '<img id="lightboxImage">';
            d += '<div id="hoverNav"><a href="javascript://" title="' + c.strings.prevLinkTitle + '" id="prevLink"></a><a href="javascript://" id="nextLink" title="' + c.strings.nextLinkTitle + '"></a></div>';
            d += '<div id="loading"><a href="javascript://" id="loadingLink"><div id="jqlb_loading"></div></a></div>';
            d += '<a href="javascript://" id="showBig" class="jqlb_showbig" title="' + c.strings.bigTitle + '">' + c.strings.bigTitle + "</a>";
            d += "</div>";
            d += "</div>";
            var e = '<div id="imageDataContainer" class="clearfix"><div id="imageData"><div id="imageDetails"><span id="caption"></span><div id="numberDisplay"></div></div></div></div>';
            var f;
            if (c.navbarOnTop) {
                f = '<div id="overlay"></div><div id="lightbox">' + e + d + "</div>";
                a("body").append(f);
                a("#imageDataContainer").addClass("ontop")
            } else {
                f = '<div id="overlay"></div><div id="lightbox">' + d + e + "</div>";
                a("body").append(f)
            }
            a("#overlay").click(function() {
                k()
            }).hide();
            a("#lightbox").click(function() {
                k()
            }).hide();
            a("#loadingLink").click(function() {
                k();
                return false
            });
            a("#showBig").click(function() {
                j(1);
                return false
            });
            a("#outerImageContainer").width(c.widthCurrent).height(c.heightCurrent);
            a("#imageDataContainer").width(c.widthCurrent);
            if (!c.imageClickClose) {
                a("#lightboxImage").click(function() {
                    return false
                });
                a("#hoverNav").click(function() {
                    return false
                })
            }
        }
        function e() {
            var b = new Array(a(document).width(), a(document).height(), a(window).width(), a(window).height());
            return b
        }
        function f() {
            var a, b;
            if (self.pageYOffset) {
                b = self.pageYOffset;
                a = self.pageXOffset
            } else if (document.documentElement && document.documentElement.scrollTop) {
                b = document.documentElement.scrollTop;
                a = document.documentElement.scrollLeft
            } else if (document.body) {
                b = document.body.scrollTop;
                a = document.body.scrollLeft
            }
            var c = new Array(a, b);
            return c
        }
        function g(a) {
            var b = new Date;
            var c = null;
            do {
                c = new Date
            } while ( c - b < a )
        }
        function h(b) {
            a("select, embed, object").hide();
            var d = e();
            a("#overlay").hide().css({
                width: "100%",
                height: d[1] + "px",
                opacity: c.overlayOpacity
            }).fadeIn(400);
            var g = 0;
            if (!c.jsonData) {
                c.imageArray = [];
                if (!b.rel || b.rel == "") {
                    c.imageArray.push(new Array(b.href, c.displayTitle ? b.title: ""))
                } else {
                    a("a").each(function() {
                        if (this.href && this.rel == b.rel) {
                            c.imageArray.push(new Array(this.href, c.displayTitle ? this.title: ""))
                        }
                    })
                }
            }
            if (c.imageArray.length > 1) {
                for (var h = 0; h < c.imageArray.length; h++) {
                    for (var j = c.imageArray.length - 1; j > h; j--) {
                        if (c.imageArray[h][0] == c.imageArray[j][0]) {
                            c.imageArray.splice(j, 1)
                        }
                    }
                }
                while (c.imageArray[g][0] != b.href) {
                    g++
                }
            }
            var k = f();
            var l = k[1] + d[3] / 10;
            var m = k[0];
            a("#lightbox").css({
                top: l + "px",
                left: m + "px"
            }).show();
            if (!c.slideNavBar) a("#imageData").hide();
            i(g)
        }
        function i(b) {
            if (c.inprogress == false) {
                c.inprogress = true;
                c.activeImage = b;
                a("#jqlb_loading").show();
                a("#lightboxImage").hide();
                a("#hoverNav").hide();
                a("#prevLink").hide();
                a("#nextLink").hide();
                if (c.slideNavBar) {
                    a("#imageDataContainer").hide();
                    a("#imageData").hide();
                    j()
                } else {
                    j()
                }
            }
        }
        function j(b) {
            if (b == "") {
                b = false
            }
            var d = new Image;
            d.onload = function() {
                var f = d.width;
                var g = d.height;
                if (c.fitToScreen && !b) {
                    var h = e();
                    var i = h[2] - 2 * c.borderSize;
                    var j = h[3] - 120;
                    var k = 1;
                    if (g > j) {
                        k = j / g
                    }
                    f = f * k;
                    g = g * k;
                    k = 1;
                    if (f > i) {
                        k = i / f
                    }
                    f = f * k;
                    g = g * k
                }
                a("#lightboxImage").attr("src", c.imageArray[c.activeImage][0]).width(f).height(g);
                m(f, g)
            };
            d.src = c.imageArray[c.activeImage][0]
        }
        function k() {
            s();
            a("#lightbox").hide();
            a("#overlay").fadeOut(250);
            a("select, object, embed").show()
        }
        function l() {
            if (c.loopImages && c.imageArray.length > 1) {
                var a = new Image;
                a.src = c.imageArray[c.activeImage == c.imageArray.length - 1 ? 0 : c.activeImage + 1][0];
                var b = new Image;
                b.src = c.imageArray[c.activeImage == 0 ? c.imageArray.length - 1 : c.activeImage - 1][0]
            } else {
                if (c.imageArray.length - 1 > c.activeImage) {
                    var a = new Image;
                    a.src = c.imageArray[c.activeImage + 1][0]
                }
                if (c.activeImage > 0) {
                    var b = new Image;
                    b.src = c.imageArray[c.activeImage - 1][0]
                }
            }
        }
        function m(b, d) {
            c.widthCurrent = a("#outerImageContainer").outerWidth();
            c.heightCurrent = a("#outerImageContainer").outerHeight();
            var e = Math.max(350, b + c.borderSize * 2);
            var f = d + c.borderSize * 2;
            c.xScale = e / c.widthCurrent * 100;
            c.yScale = f / c.heightCurrent * 100;
            var h = c.widthCurrent - e,
            i = c.heightCurrent - f;
            a("#imageDataContainer").animate({
                width: e
            },
            c.resizeSpeed, "linear");
            a("#outerImageContainer").animate({
                width: e
            },
            c.resizeSpeed, "linear",
            function() {
                a("#outerImageContainer").animate({
                    height: f
                },
                c.resizeSpeed, "linear",
                function() {
                    n()
                })
            });
            if (i == 0 && h == 0) {
                if (a.browser.msie) {
                    g(250)
                } else {
                    g(100)
                }
            }
            a("#prevLink").height(d);
            a("#nextLink").height(d)
        }
        function n() {
            a("#jqlb_loading").hide();
            a("#lightboxImage").fadeIn(400);
            o();
            l();
            c.inprogress = false
        }
        function o() {
            a("#numberDisplay").html("");
            if (c.imageArray[c.activeImage][1]) {
                a("#caption").html(c.imageArray[c.activeImage][1]).show()
            } else {
                a("#caption").hide()
            }
            if (c.imageArray.length > 1) {
                var b;
                b = c.activeImage + 1 + c.strings.of + c.imageArray.length;
                if (!c.disableNavbarLinks) {
                    if (c.activeImage > 0 || c.loopImages) {
                        b = '<a title="' + c.strings.prevLinkTitle + '" href="#" id="prevLinkText">' + c.strings.prevLinkText + "</a>" + b
                    }
                    if (c.activeImage + 1 < c.imageArray.length || c.loopImages) {
                        b += '<a title="' + c.strings.nextLinkTitle + '" href="#" id="nextLinkText">' + c.strings.nextLinkText + "</a>"
                    }
                }
                a("#numberDisplay").html(b).show()
            }
            if (c.slideNavBar) {
                a("#imageData").slideDown(c.navBarSlideSpeed)
            } else {
                a("#imageData").show()
            }
            var d = e();
            a("#overlay").height(d[1]);
            p()
        }
        function p() {
            if (c.imageArray.length > 1) {
                a("#hoverNav").show();
                if (c.loopImages) {
                    a("#prevLink,#prevLinkText").show().click(function() {
                        i(c.activeImage == 0 ? c.imageArray.length - 1 : c.activeImage - 1);
                        return false
                    });
                    a("#nextLink,#nextLinkText").show().click(function() {
                        i(c.activeImage == c.imageArray.length - 1 ? 0 : c.activeImage + 1);
                        return false
                    })
                } else {
                    if (c.activeImage != 0) {
                        a("#prevLink,#prevLinkText").show().click(function() {
                            i(c.activeImage - 1);
                            return false
                        })
                    }
                    if (c.activeImage != c.imageArray.length - 1) {
                        a("#nextLink,#nextLinkText").show().click(function() {
                            i(c.activeImage + 1);
                            return false
                        })
                    }
                }
                r()
            }
        }
        function q(a) {
            var b = a.data.opts;
            var d = a.keyCode;
            var e = 27;
            var f = String.fromCharCode(d).toLowerCase();
            if (f == "x" || f == "o" || f == "c" || d == e) {
                k()
            } else if (f == "p" || d == 37) {
                if (b.loopImages) {
                    s();
                    i(b.activeImage == 0 ? b.imageArray.length - 1 : b.activeImage - 1)
                } else if (b.activeImage != 0) {
                    s();
                    i(b.activeImage - 1)
                }
            } else if (f == "n" || d == 39) {
                if (c.loopImages) {
                    s();
                    i(b.activeImage == b.imageArray.length - 1 ? 0 : b.activeImage + 1)
                } else if (b.activeImage != b.imageArray.length - 1) {
                    s();
                    i(b.activeImage + 1)
                }
            }
        }
        function r() {
            a(document).bind("keydown", {
                opts: c
            },
            q)
        }
        function s() {
            a(document).unbind("keydown")
        }
    };
    a.fn.lightbox.parseJsonData = function(b) {
        var c = [];
        a.each(b,
        function() {
            c.push(new Array(this.url, this.title))
        });
        return c
    };
    a.fn.lightbox.defaults = {
        overlayOpacity: .8,
        borderSize: 0,
        imageArray: new Array,
        activeImage: null,
        inprogress: false,
        resizeSpeed: 250,
        widthCurrent: 250,
        heightCurrent: 250,
        xScale: 1,
        yScale: 1,
        displayTitle: true,
        navbarOnTop: false,
        slideNavBar: false,
        navBarSlideSpeed: 250,
        displayHelp: false,
        strings: {
            help: "快捷键： ← 上一张图片 → 下一张图片",
            prevLinkTitle: "上一张图片",
            nextLinkTitle: "下一张图片",
            prevLinkText: "&laquo; 上一张",
            nextLinkText: "下一张 &raquo;",
            closeTitle: "关闭",
            bigTitle: "原图",
            image: "lmage",
            of: "/"
        },
        fitToScreen: true,
        disableNavbarLinks: false,
        loopImages: false,
        imageClickClose: false,
        jsonData: null,
        jsonDataParser: null
    }
})(jQuery); 
(function(a, b, c, d) {
    var e = function(d, e) {
        this.elem = d;
        this.$elem = a(d);
        this.options = e;
        this.metadata = this.$elem.data("plugin-options");
        this.$win = a(b);
        this.sections = {};
        this.didScroll = false;
        this.$doc = a(c);
        this.docHeight = this.$doc.height()
    };
    e.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: false,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: .5,
            begin: false,
            end: false,
            scrollChange: false
        },
        init: function() {
            this.config = a.extend({},
            this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== "") {
                this.$nav = this.$nav.filter(this.config.filter)
            }
            this.$nav.on("click.onePageNav", a.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on("resize.onePageNav", a.proxy(this.getPositions, this));
            return this
        },
        adjustNav: function(a, b) {
            a.$elem.find("." + a.config.currentClass).removeClass(a.config.currentClass);
            b.addClass(a.config.currentClass)
        },
        bindInterval: function() {
            var a = this;
            var b;
            a.$win.on("scroll.onePageNav",
            function() {
                a.didScroll = true
            });
            a.t = setInterval(function() {
                b = a.$doc.height();
                if (a.didScroll) {
                    a.didScroll = false;
                    a.scrollChange()
                }
                if (b !== a.docHeight) {
                    a.docHeight = b;
                    a.getPositions()
                }
            },
            250)
        },
        getHash: function(a) {
            return a.attr("href").split("#")[1]
        },
        getPositions: function() {
            var b = this;
            var c;
            var d;
            var e;
            b.$nav.each(function() {
                c = b.getHash(a(this));
                e = a("#" + c);
                if (e.length) {
                    d = e.offset().top;
                    b.sections[c] = Math.round(d)
                }
            })
        },
        getSection: function(a) {
            var b = null;
            var c = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var d in this.sections) {
                if (this.sections[d] - c < a) {
                    b = d
                }
            }
            return b
        },
        handleClick: function(c) {
            var d = this;
            var e = a(c.currentTarget);
            var f = e.parent();
            var g = "#" + d.getHash(e);
            if (!f.hasClass(d.config.currentClass)) {
                if (d.config.begin) {
                    d.config.begin()
                }
                d.adjustNav(d, f);
                d.unbindInterval();
                d.scrollTo(g,
                function() {
                    if (d.config.changeHash) {
                        b.location.hash = g
                    }
                    d.bindInterval();
                    if (d.config.end) {
                        d.config.end()
                    }
                })
            }
            c.preventDefault()
        },
        scrollChange: function() {
            var a = this.$win.scrollTop();
            var b = this.getSection(a);
            var c;
            if (b !== null) {
                c = this.$elem.find('a[href$="#' + b + '"]').parent();
                if (!c.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, c);
                    if (this.config.scrollChange) {
                        this.config.scrollChange(c)
                    }
                }
            }
        },
        scrollTo: function(b, c) {
            var d = a(b).offset().top;
            a("html, body").animate({
                scrollTop: d
            },
            this.config.scrollSpeed, this.config.easing, c)
        },
        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind("scroll.onePageNav")
        }
    };
    e.defaults = e.prototype.defaults;
    a.fn.onePageNav = function(a) {
        return this.each(function() {
            new e(this, a).init()
        })
    }
})(jQuery, window, document); 
(function(a, b) {
    "use strict";
    var c = function(a) {
        this.$el = a;
        this.initialize();
        return a
    };
    c.fn = c.prototype;
    c.fn.options = {
        displayElemPositionPoint: 300,
        displayGo2TopPositionPoint: 600
    };
    c.fn.initialize = function() {
        this.cacheDOM();
        this.cacheParam();
        this.bindEvents();
        if (this.$window.scrollTop() > this.options.displayElemPositionPoint) {
            this.$container.show()
        }
    };
    c.fn.cacheDOM = function() {
        this.$container = this.$el.parents(".js-widget-go2top-container");
        this.$window = b(a)
    };
    c.fn.cacheParam = function() {
        var a;
        this.$footer = b("#footer-zone");
        a = this.$footer.outerHeight();
        this.elemFixedBottom = parseInt(this.$container.css("bottom"), 10);
        this.elemAbsoulteBottom = this.elemFixedBottom + a
    };
    c.fn.bindEvents = function() {
        var a = false;
        var c = this;
        this.$el.on("click",
        function(a) {
            a.preventDefault();
            b.ifr.smoothScrollTo(0)
        });
        this.$window.on("scroll",
        function() {
            if (a) {
                return
            }
            a = true;
            setTimeout(function() {
                c.adjustDisplayState();
                c.adjustPosition();
                a = false
            },
            100)
        })
    };
    c.fn.adjustPosition = function() {
        var a = {};
        var b = this.$footer.offset().top - this.$window.height();
        if (b <= this.$window.scrollTop()) {
            a = {
                position: "absolute",
                bottom: this.elemAbsoulteBottom
            }
        } else {
            a = {
                position: "fixed",
                bottom: this.elemFixedBottom
            }
        }
        this.$container.css(a)
    };
    c.fn.adjustDisplayState = function() {
        if (this.$window.scrollTop() > this.options.displayElemPositionPoint) {
            this.$container.show()
        } else {
            this.$container.hide()
        }
    };
    b.fn.widgetGoToTop = function() {
        if (this.length <= 0) {
            console.error('WidgetGoToTop initialization failed: the "' + this.selector + '" element is not found.');
            return
        }
        return new c(this)
    }
})(window, jQuery); 
(function(a, b) {
    "use strict";
    var c = function(a) {
        this.$el = a;
        this.initialize();
        return a
    };
    c.fn = c.prototype;
    c.fn.initialize = function() {
        this.cacheDOM();
        this.bindEvents()
    };
    c.fn.cacheDOM = function() {
        var a = b(this.$el.data("targetPanel"));
        if (a.length <= 0) {
            console.error("WidgetTabsPanel initialization failed: unable to find element by [data-target-panel].");
            return
        }
        this.$panel = a;
        this.$container = this.$el.parents(".js-widget-go2top-container");
        this.$blackline = this.$panel.find(".js-black-line").show();
        this.$tabs = this.$panel.find(".nav-tab-item")
    };
    c.fn.cacheTabAnimateParam = function() {
        var a;
        var c = parseInt(this.$blackline.css("paddingLeft"), 10);
        if (this.cacheState) {
            return
        }
        this.cacheState = true;
        a = this.$tabs.parents(".nav-tabs").offset().left;
        this.$tabs.each(function() {
            var d = b(this);
            var e = d.children();
            var f = e.width();
            var g = e.offset().left - a - c;
            d.data("animateParam", {
                width: f,
                left: g
            })
        })
    };
    c.fn.bindEvents = function() {
        var a = this;
        var c = this.$el.height();
        this.$el.on("mouseenter",
        function() {
            a.$panel.addClass("open")
        });
        this.$container.on("mouseleave",
        function() {
            a.$panel.removeClass("open")
        });
        this.$el.siblings().on("mouseenter",
        function() {
            a.$panel.removeClass("open")
        });
        this.$el.on("click", false);
        this.$tabs.on("mouseenter",
        function(c) {
            var d = b(this);
            var e;
            var f = d.attr("href");
            var g = b(f);
            c.preventDefault();
            a.cacheTabAnimateParam();
            e = d.data("animateParam");
            a.$blackline.css(e);
            g.addClass("active").siblings().removeClass("active")
        })
    };
    b.fn.widgetTabsPanel = function() {
        if (this.length <= 0) {
            console.error('WidgetTabsPanel initialization failed: the "' + this.selector + '" element is not found.');
            return
        }
        return new c(this)
    }
})(window, jQuery); 
(function(a) {
    "use strict";
    var b = function(a) {
        this.$el = a
    };
    b.fn = b.prototype;
    b.fn.initialize = function(b) {
        var c = this;
        this.options = a.extend({},
        b || {},
        this.
    default);
        this.load().then(function(a) {
            c.render(a)
        }).fail(function(a) {
            console.error(a)
        })
    };
    b.fn.
default = {
        action: "get_top_banner_jiong"
    };
    b.fn.load = function() {
        var b = new a.Deferred;
        IFR.api(this.options.action, {
            success: function(a) {
                if (a.status === 1 && a.data) {
                    b.resolve(a.data)
                }
            },
            error: function(a) {
                b.reject(a)
            }
        });
        return b
    };
    b.fn.render = function(b) {
        var c = template("navbar-top-ad", {
            data: b
        });
        this.$el.html(c).find(".js-excerpt").each(function(b, c) {
            var d = a(this).data("clamp");
            $clamp(c, {
                clamp: d
            })
        })
    };
    a.fn.widgetNavbarBanner = function() {
        var a;
        if (this.length <= 0) {
            console.error('WidgetNavbarBanner initialization failed: the "' + this.selector + '" element is not found.');
            return
        }
        a = new b(this);
        a.initialize();
        return this
    }
})(jQuery); 
(function(a) {
    var b = [],
    c = /^url\(["']?([^"'\)]*)["']?\);?$/i,
    d = /\.png$/i,
    e = false;
    function f() {
        a.each(b,
        function() {
            this.refresh(true)
        })
    }
    a(window).resize(f);
    a.Poshytip = function(b, c) {
        this.$elm = a(b);
        this.opts = a.extend({},
        a.fn.poshytip.defaults, c);
        this.$tip = a(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body);
        this.$arrow = this.$tip.find("div.tip-arrow");
        this.$inner = this.$tip.find("div.tip-inner");
        this.disabled = false;
        this.content = null;
        this.init()
    };
    a.Poshytip.prototype = {
        init: function() {
            b.push(this);
            var c = this.$elm.attr("title");
            this.$elm.data("title.poshytip", c !== undefined ? c: null).data("poshytip", this);
            if (this.opts.showOn != "none") {
                this.$elm.bind({
                    "mouseenter.poshytip": a.proxy(this.mouseenter, this),
                    "mouseleave.poshytip": a.proxy(this.mouseleave, this)
                });
                switch (this.opts.showOn) {
                case "hover":
                    if (this.opts.alignTo == "cursor") this.$elm.bind("mousemove.poshytip", a.proxy(this.mousemove, this));
                    if (this.opts.allowTipHover) this.$tip.hover(a.proxy(this.clearTimeouts, this), a.proxy(this.mouseleave, this));
                    break;
                case "focus":
                    this.$elm.bind({
                        "focus.poshytip":
                        a.proxy(this.show, this),
                        "blur.poshytip": a.proxy(this.hide, this)
                    });
                    break
                }
            }
        },
        mouseenter: function(b) {
            if (this.disabled) return true;
            this.$elm.attr("title", "");
            if (this.opts.showOn == "focus") return true;
            this.clearTimeouts();
            this.showTimeout = setTimeout(a.proxy(this.show, this), this.opts.showTimeout)
        },
        mouseleave: function(b) {
            if (this.disabled || this.asyncAnimating && (this.$tip[0] === b.relatedTarget || jQuery.contains(this.$tip[0], b.relatedTarget))) return true;
            var c = this.$elm.data("title.poshytip");
            if (c !== null) this.$elm.attr("title", c);
            if (this.opts.showOn == "focus") return true;
            this.clearTimeouts();
            this.hideTimeout = setTimeout(a.proxy(this.hide, this), this.opts.hideTimeout)
        },
        mousemove: function(a) {
            if (this.disabled) return true;
            this.eventX = a.pageX;
            this.eventY = a.pageY;
            if (this.opts.followCursor && this.$tip.data("active")) {
                this.calcPos();
                this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                });
                if (this.pos.arrow) this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow
            }
        },
        show: function() {
            if (this.disabled || this.$tip.data("active")) return;
            this.reset();
            this.update();
            this.display();
            if (this.opts.timeOnScreen) setTimeout(a.proxy(this.hide, this), this.opts.timeOnScreen)
        },
        hide: function() {
            if (this.disabled || !this.$tip.data("active")) return;
            this.display(true)
        },
        reset: function() {
            this.$tip.queue([]).detach().css("visibility", "hidden").data("active", false);
            this.$inner.find("*").poshytip("hide");
            if (this.opts.fade) this.$tip.css("opacity", this.opacity);
            this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left";
            this.asyncAnimating = false
        },
        update: function(a, b) {
            if (this.disabled) return;
            var c = a !== undefined;
            if (c) {
                if (!b) this.opts.content = a;
                if (!this.$tip.data("active")) return
            } else {
                a = this.opts.content
            }
            var d = this,
            e = typeof a == "function" ? a.call(this.$elm[0],
            function(a) {
                d.update(a)
            }) : a == "[title]" ? this.$elm.data("title.poshytip") : a;
            if (this.content !== e) {
                this.$inner.empty().append(e);
                this.content = e
            }
            this.refresh(c)
        },
        refresh: function(b) {
            if (this.disabled) return;
            if (b) {
                if (!this.$tip.data("active")) return;
                var f = {
                    left: this.$tip.css("left"),
                    top: this.$tip.css("top")
                }
            }
            this.$tip.css({
                left: 0,
                top: 0
            }).appendTo(document.body);
            if (this.opacity === undefined) this.opacity = this.$tip.css("opacity");
            var g = this.$tip.css("background-image").match(c),
            h = this.$arrow.css("background-image").match(c);
            if (g) {
                var i = d.test(g[1]);
                if (e && i) {
                    this.$tip.css("background-image", "none");
                    this.$inner.css({
                        margin: 0,
                        border: 0,
                        padding: 0
                    });
                    g = i = false
                } else {
                    this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                        border: 0,
                        padding: 0,
                        "background-image": "none",
                        "background-color": "transparent"
                    }).find(".tip-bg-image").css("background-image", 'url("' + g[1] + '")').end().find("td").eq(3).append(this.$inner)
                }
                if (i && !a.support.opacity) this.opts.fade = false
            }
            if (h && !a.support.opacity) {
                if (e && d.test(h[1])) {
                    h = false;
                    this.$arrow.css("background-image", "none")
                }
                this.opts.fade = false
            }
            var j = this.$tip.find("table");
            if (e) {
                this.$tip[0].style.width = "";
                j.width("auto").find("td").eq(3).width("auto");
                var k = this.$tip.width(),
                l = parseInt(this.$tip.css("min-width")),
                m = parseInt(this.$tip.css("max-width"));
                if (!isNaN(l) && k < l) k = l;
                else if (!isNaN(m) && k > m) k = m;
                this.$tip.add(j).width(k).eq(0).find("td").eq(3).width("100%")
            } else if (j[0]) {
                j.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%")
            }
            this.tipOuterW = this.$tip.outerWidth();
            this.tipOuterH = this.$tip.outerHeight();
            this.calcPos();
            if (h && this.pos.arrow) {
                this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow;
                this.$arrow.css("visibility", "inherit")
            }
            if (b) {
                this.asyncAnimating = true;
                var n = this;
                this.$tip.css(f).animate({
                    left: this.pos.l,
                    top: this.pos.t
                },
                200,
                function() {
                    n.asyncAnimating = false
                })
            } else {
                this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                })
            }
        },
        display: function(b) {
            var c = this.$tip.data("active");
            if (c && !b || !c && b) return;
            this.$tip.stop();
            if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (b && this.opts.hideAniDuration || !b && this.opts.showAniDuration)) {
                var d = {},
                e = {};
                if (this.opts.slide && this.pos.arrow) {
                    var f, g;
                    if (this.pos.arrow == "bottom" || this.pos.arrow == "top") {
                        f = "top";
                        g = "bottom"
                    } else {
                        f = "left";
                        g = "right"
                    }
                    var h = parseInt(this.$tip.css(f));
                    d[f] = h + (b ? 0 : this.pos.arrow == g ? -this.opts.slideOffset: this.opts.slideOffset);
                    e[f] = h + (b ? this.pos.arrow == g ? this.opts.slideOffset: -this.opts.slideOffset: 0) + "px"
                }
                if (this.opts.fade) {
                    d.opacity = b ? this.$tip.css("opacity") : 0;
                    e.opacity = b ? 0 : this.opacity
                }
                this.$tip.css(d).animate(e, this.opts[b ? "hideAniDuration": "showAniDuration"])
            }
            b ? this.$tip.queue(a.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit");
            this.$tip.data("active", !c)
        },
        disable: function() {
            this.reset();
            this.disabled = true
        },
        enable: function() {
            this.disabled = false
        },
        destroy: function() {
            this.reset();
            this.$tip.remove();
            delete this.$tip;
            this.content = null;
            this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip");
            b.splice(a.inArray(this, b), 1)
        },
        clearTimeouts: function() {
            if (this.showTimeout) {
                clearTimeout(this.showTimeout);
                this.showTimeout = 0
            }
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = 0
            }
        },
        calcPos: function() {
            var b = {
                l: 0,
                t: 0,
                arrow: ""
            },
            c = a(window),
            d = {
                l: c.scrollLeft(),
                t: c.scrollTop(),
                w: c.width(),
                h: c.height()
            },
            e,
            f,
            g,
            h,
            i,
            j;
            if (this.opts.alignTo == "cursor") {
                e = f = g = this.eventX;
                h = i = j = this.eventY
            } else {
                var k = this.$elm.offset(),
                l = {
                    l: k.left,
                    t: k.top,
                    w: this.$elm.outerWidth(),
                    h: this.$elm.outerHeight()
                };
                e = l.l + (this.opts.alignX != "inner-right" ? 0 : l.w);
                f = e + Math.floor(l.w / 2);
                g = e + (this.opts.alignX != "inner-left" ? l.w: 0);
                h = l.t + (this.opts.alignY != "inner-bottom" ? 0 : l.h);
                i = h + Math.floor(l.h / 2);
                j = h + (this.opts.alignY != "inner-top" ? l.h: 0)
            }
            switch (this.opts.alignX) {
            case "right":
            case "inner-left":
                b.l = g + this.opts.offsetX;
                if (b.l + this.tipOuterW > d.l + d.w) b.l = d.l + d.w - this.tipOuterW;
                if (this.opts.alignX == "right" || this.opts.alignY == "center") b.arrow = "left";
                break;
            case "center":
                b.l = f - Math.floor(this.tipOuterW / 2);
                if (b.l + this.tipOuterW > d.l + d.w) b.l = d.l + d.w - this.tipOuterW;
                else if (b.l < d.l) b.l = d.l;
                break;
            default:
                b.l = e - this.tipOuterW - this.opts.offsetX;
                if (b.l < d.l) b.l = d.l;
                if (this.opts.alignX == "left" || this.opts.alignY == "center") b.arrow = "right"
            }
            switch (this.opts.alignY) {
            case "bottom":
            case "inner-top":
                b.t = j + this.opts.offsetY;
                if (!b.arrow || this.opts.alignTo == "cursor") b.arrow = "top";
                if (b.t + this.tipOuterH > d.t + d.h) {
                    b.t = h - this.tipOuterH - this.opts.offsetY;
                    if (b.arrow == "top") b.arrow = "bottom"
                }
                break;
            case "center":
                b.t = i - Math.floor(this.tipOuterH / 2);
                if (b.t + this.tipOuterH > d.t + d.h) b.t = d.t + d.h - this.tipOuterH;
                else if (b.t < d.t) b.t = d.t;
                break;
            default:
                b.t = h - this.tipOuterH - this.opts.offsetY;
                if (!b.arrow || this.opts.alignTo == "cursor") b.arrow = "bottom";
                if (b.t < d.t) {
                    b.t = j + this.opts.offsetY;
                    if (b.arrow == "bottom") b.arrow = "top"
                }
            }
            this.pos = b
        }
    };
    a.fn.poshytip = function(b) {
        if (typeof b == "string") {
            var c = arguments,
            d = b;
            Array.prototype.shift.call(c);
            if (d == "destroy") this.die("mouseenter.poshytip").die("focus.poshytip");
            return this.each(function() {
                var b = a(this).data("poshytip");
                if (b && b[d]) b[d].apply(b, c)
            })
        }
        var e = a.extend({},
        a.fn.poshytip.defaults, b);
        if (!a("#poshytip-css-" + e.className)[0]) a(['<style id="poshytip-css-', e.className, '" type="text/css">', "div.", e.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", e.className, " table, div.", e.className, " td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}", "div.", e.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", e.bgImageFrameSize, "px;width:", e.bgImageFrameSize, "px;overflow:hidden;}", "div.", e.className, " td.tip-right{background-position:100% 0;}", "div.", e.className, " td.tip-bottom{background-position:100% 100%;}", "div.", e.className, " td.tip-left{background-position:0 100%;}", "div.", e.className, " div.tip-inner{background-position:-", e.bgImageFrameSize, "px -", e.bgImageFrameSize, "px;}", "div.", e.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head");
        if (e.liveEvents && e.showOn != "none") {
            var f = a.extend({},
            e, {
                liveEvents: false
            });
            switch (e.showOn) {
            case "hover":
                this.live("mouseenter.poshytip",
                function() {
                    var b = a(this);
                    if (!b.data("poshytip")) b.poshytip(f).poshytip("mouseenter")
                });
                break;
            case "focus":
                this.live("focus.poshytip",
                function() {
                    var b = a(this);
                    if (!b.data("poshytip")) b.poshytip(f).poshytip("show")
                });
                break
            }
            return this
        }
        return this.each(function() {
            new a.Poshytip(this, e)
        })
    };
    a.fn.poshytip.defaults = {
        content: "[title]",
        className: "tooltip",
        bgImageFrameSize: 10,
        showTimeout: 500,
        hideTimeout: 100,
        timeOnScreen: 0,
        showOn: "hover",
        liveEvents: false,
        alignTo: "cursor",
        alignX: "right",
        alignY: "top",
        offsetX: -22,
        offsetY: 18,
        allowTipHover: true,
        followCursor: false,
        fade: false,
        slide: false,
        slideOffset: 8,
        showAniDuration: 300,
        hideAniDuration: 300
    }
})(jQuery); 
(function(a, b) {
    b(document).on("click", '[ga-track="event"][ga-action="click"]',
    function() {
        var d = b(this);
        if (c(d)) {
            return true
        }
        a.ga("send", "event", d.attr("ga-event-category"), "click", d.attr("ga-event-label"))
    }).on("click", '[ga-track="social"][ga-action="click"]',
    function() {
        var c = b(this);
        a.ga("send", "social", c.attr("ga-social-network"), c.attr("ga-social-action"), c.attr("ga-social-target"))
    });
    function c(a) {
        if (a.is(".js-nav-menu")) {
            return a.find("i.ifanr2015-guanbi").length !== 0
        } else if (a.is(".js-nav-search")) {
            return a.find("i.ifanr2015-guanbi").length === 0
        }
        return false
    }
})(window, jQuery); 
(function(a, b) {
    var c = function() {};
    c.prototype = new ArticleCommentsComponent;
    c.prototype.constructor = c;
    c.fn = c.prototype;
    c.fn.init = function(a) {
        ArticleCommentsComponent.fn.init.call(this, a);
        this.commentEntryTemplate = "desktop-comment-item-new";
        this.$respondFormCmpt.init(this).render();
        this.commentAjaxConfig = {
            html_comment_content: 1,
            rating_filter_content: 1,
            add_at_depth: 5,
            orderbyreply: 1,
            relative_time: 1
        };
        return this
    };
    c.fn.appendComments = function(a) {
        var c = this;
        c.commentsLength = a.length;
        b.each(a,
        function(a, b) {
            b.postId = c.postId;
            c.generateCommentTree(b)
        });
        b("#J_commentlist").fadeOut(150,
        function() {
            b("#J_commentlist ol").remove();
            b("#JS_loading").remove();
            if (c.commentsLength > 0) {
                b(".js-comments-type").removeClass("hide");
                b(".js-comment-void").remove()
            } else if (b('.js-comments-type a[data-comment-type="hot"]').hasClass("active")) {
                c.$commentsListContainer.append('<p class="js-comment-void">还没有热门评论，马上精彩点评一下？</p>')
            }
            c.$commentsList.appendTo(c.$commentsListContainer);
            c.$commentsList = c.$commentsListContainer.find(".js-comments-list");
            b(".comment-avatar img").on("error",
            function(a) {
                b(this).attr("src", ns.defaultUserAvatar)
            })
        }).fadeIn(150);
        c.$commentsLoading.hide();
        IFR.Events.trigger("loaded.comments-list.article", {
            post_id: c.postId
        })
    };
    c.fn.bindEvents = function(a) {
        var b = this;
        a = !(a === false);
        ArticleCommentsComponent.fn.bindEvents.call(this);
        if (!a) return;
        IFR.Events.on("loaded.comments-list.article",
        function(a) {
            if (a.post_id !== b.postId) return;
            b.$widget = Object.create(AutoFixedWidget.fn).init("#comments", {
                fixedTopOffset: ns.globalHeaderHeight + 10
            });
            b.$widget.render()
        })
    };
    c.fn.unbindEvents = function() {
        ArticleCommentsComponent.fn.unbindEvents.call(this);
        IFR.Events.off("loaded.comments-list.article")
    };
    c.fn.generateCommentTree = function(a) {
        var c = this,
        d = template("desktop-comment-item", a);
        if (a.comment_parent === "0") {
            c.$commentsList.append(d);
            return
        }
        if (a.depth > 5) {
            var e = a.comment_parent + "-child";
            var f = c.$commentsList.find("." + e);
            d = b(d);
            d.addClass(e);
            if (f.length) {
                d.insertAfter(f.last())
            } else {
                d.insertAfter(c.$commentsList.find(".js-comment-" + a.comment_parent))
            }
        } else {
            c.$commentsList.find(".js-" + a.comment_parent + "-children").append(d)
        }
    };
    a.DesktopArticleCommentsComponent = c
})(window, jQuery); 
(function(a, b) {
    var c = function() {};
    c.fn = c.prototype;
    c.fn.fetch = function(a, c) {
        var d = this;
        var e = b.extend({
            dataType: "jsonp",
            crossDomain: true,
            method: "get"
        },
        d.ajaxConfig);
        var f = d.ajaxConfig.data.limit ? d.ajaxConfig.data.limit: 0;
        b.ajax(e).success(function(b) {
            b.objects.splice(f, b.objects.length);
            a(b.objects)
        }).error(c)
    };
    c.fn.render = function() {
        var a = this;
        a.fetch(a.appendContents.bind(a),
        function() {})
    };
    c.fn.appendContents = function(a) {
        var c = this,
        d;
        d = template(c.template, {
            data: c.parseData(a)
        });
        c.$articlesList.append(b(d));
        c.$loading.remove()
    };
    c.fn.parseData = function(a) {
        var b = null;
        a.forEach(function(a) {
            b = a.title.match(/(#.*)/g);
            a.platforms = b ? b[0] : null;
            a.post_url = "http://www.ifanr.com/app/" + a.id
        });
        return a
    };
    c.fn.init = function() {
        this.template = "mobile-index-appso";
        this.$articlesList = b("#appso-articles-list");
        this.$loading = this.$articlesList.find(".js-loading");
        this.ajaxConfig = {
            url: "https://socialbase.cn/api/v1.1/appso/article",
            data: {
                limit: 5
            }
        };
        return this
    };
    a.IndexAppSoArticlesList = c
})(window, jQuery); 
(function(a, b) {
    var c = {
        toggleSearchTag: false,
        $containerInner: a("#header .nav-fixed"),
        $domBlurred: a("#container"),
        $domFixed: a("body"),
        searchListId: "search-list",
        $searchBoxZone: null,
        searchIndex: null,
        limitSearch: 12,
        pageNumber: 0,
        pageTotalNumber: null,
        applicationID: "7TN0U2FL3Q",
        apiKey: "97d5967e87b92827fa8b040bcc4c8581",
        indexName: "prod_ifanrcom",
        searchQueryStr: null,
        $loading: null,
        appendSeachZone: function() {
            var b = template("search/search-desk-zone", {});
            c.$containerInner.append(b);
            c.$searchBoxZone = a("#ifr-search-zone");
            c.$loading = a("#search-loading")
        },
        fixStyle: function() {
            var b = parseInt(a("#header").outerHeight(), 10),
            d = parseInt(a(window).height(), 10),
            e = d - b;
            c.$searchBoxZone.css({
                top: b,
                height: e
            })
        },
        _showSearchZone: function() {
            var b = this;
            a(".js-search-title").addClass("hide");
            a("#ifr-search-zone").fadeIn("slow",
            function() {
                a("#ifr-query-search").focus();
                b.$domFixed.addClass("prevent-scrolled")
            })
        },
        _hideSearchZone: function() {
            var b = this;
            b.$domFixed.removeClass("prevent-scrolled");
            a("#ifr-search-zone").fadeOut("slow",
            function() {
                a("#search-list").html("");
                a("#ifr-query-search").val("");
                b._hideLoadNextPageBtn()
            })
        },
        bindEvent: function() {
            var b = 0,
            d = null;
            a("#search-button").on("click",
            function() {
                a(this).find("i").first().toggleClass("ifanr2015-search ifanr2015-guanbi");
                if (!c.toggleSearchTag) {
                    c.toggleSearchTag = true;
                    c._showSearchZone();
                    IFR.Events.trigger("hide.global-header");
                    IFR.Events.trigger("remove.opacity.global-header")
                } else {
                    c.toggleSearchTag = false;
                    c._hideSearchZone();
                    IFR.Events.trigger("restore.opacity.global-header")
                }
            });
            a("#ifr-query-search").on("input",
            function() {
                clearTimeout(d);
                d = setTimeout(function() {
                    c.searchQueryStr = a("#ifr-query-search").val();
                    c.searchResult(true)
                },
                500)
            });
            a("#next-page").on("click",
            function() {
                c.loadNextPage()
            });
            IFR.Events.on("hide.global-search",
            function() {
                var b = a("#search-button").find("i").first();
                if (b.hasClass("ifanr2015-search")) return;
                b.toggleClass("ifanr2015-search ifanr2015-guanbi");
                c.toggleSearchTag = false;
                c._hideSearchZone()
            })
        },
        _getIndex: function() {
            var a = this;
            a.algolia = a.algolia || algoliasearch(a.applicationID, a.apiKey);
            a.searchIndex = a.searchIndex || a.algolia.initIndex(a.indexName);
            return a.searchIndex
        },
        searchResult: function(c) {
            var d = this,
            e = d._getIndex(),
            f = {
                hitsPerPage: d.limitSearch,
                page: d.pageNumber,
                facets: "*",
                attributesToRetrieve: "*",
                facetFilters: ["category:-weizhizao", "category:-video", "category:-buzz"]
            };
            d.$loading.show();
            e.search(d.searchQueryStr, f,
            function(e, f) {
                d._countPageTotal(f.nbPages);
                d.$loading.hide();
                a(".js-search-title").removeClass("hide");
                var g = template("search/desk-list", {
                    searchList: f.hits
                });
                d.$searchBoxZone.find(".js-results-count").html(f.nbHits);
                if (c) {
                    a("#search-list").html(g)
                } else {
                    a("#search-list").append(g)
                }
                d.$searchBoxZone.find(".js-excerpt").each(function(a, c) {
                    b(c, {
                        clamp: 3
                    })
                })
            })
        },
        _countPageTotal: function(a) {
            var b = this;
            b.pageTotalNumber = a;
            b._toggleLoadNextPageBtn()
        },
        _toggleLoadNextPageBtn: function() {
            var b = this;
            if (b.pageNumber >= b.pageTotalNumber - 1) {
                b._hideLoadNextPageBtn()
            } else a("#search-load-more").removeClass("hide")
        },
        _hideLoadNextPageBtn: function() {
            a("#search-load-more").addClass("hide")
        },
        loadNextPage: function() {
            var a = this;
            a.pageNumber++;
            if (a.pageNumber <= a.pageTotalNumber - 1) {
                a.searchResult(false)
            }
        }
    };
    a("body").on("mousewheel.search-prevent-scroll",
    function(b) {
        var d = a(b.target).closest(c.searchListId).length;
        if (c.toggleSearchTag && d) {
            b.preventDefault();
            b.stopPropagation()
        }
    });
    c.appendSeachZone();
    c.bindEvent()
})(jQuery, $clamp); 
(function(a, b, c) {
    var d = function() {};
    d.prototype = new IndexAppSoArticlesList;
    d.prototype.constructor = d;
    d.fn = d.prototype;
    d.fn.parseData = function(a) {
        a.forEach(function(a) {
            a.post_url = "http://mindstore.io/mind/" + a.id + "/"
        });
        return a
    };
    d.fn.appendContents = function(a) {
        var a;
        var d = this;
        var g;
        g = new f;
        a = g.getCache(d) || a;
        a = g.setCache(JSON.stringify(d), a);
        a = g.group(a, 4);
        IndexAppSoArticlesList.fn.appendContents.call(d, a);
        d.$articlesContainer.find(".js-ms-intro").each(function(a, b) {
            c(b, {
                clamp: 3
            })
        });
        var h = b(".mindstore-container");
        var i = h.find(".unslider-arrow.next");
        var j = h.find(".unslider-arrow.prev");
        var k = h.find(".js-arrow");
        var l = b(".js-mindstore").unslider({
            autoplay: false,
            items: ".mindstore-articles-list",
            item: ".article-item"
        });
        var a = l.data("unslider");
        k.click(function() {
            var b = this.className.split(" ")[1];
            a[b]()
        });
        e(j, i, a.i, a.li.length);
        i.unbind().click(function() {
            a.next();
            e(j, i, a.i + 1, a.li.length)
        });
        j.unbind().click(function() {
            a.prev();
            e(j, i, a.i - 1, a.li.length)
        })
    };
    d.fn.init = function() {
        this.template = "desktop-index-mindstore";
        this.$articlesContainer = b("#mindstore-container");
        this.$articlesList = this.$articlesContainer.find("#mindstore-articles-list");
        this.$sliderWrapper = this.$articlesContainer.find("#mindstore-wrapper");
        this.$loading = this.$articlesList.find(".js-loading");
        this.ajaxConfig = {
            url: "http://mindstore.io/api/v1.2/mind/",
            dataType: "json",
            data: {
                limit: 12
            }
        };
        return this
    };
    var e = function(a, b, c, d) {
        a.show();
        b.show();
        if (d === 0) {
            a.hide();
            b.hide();
            return
        }
        if (c === 0) {
            a.hide()
        }
        if (c === d - 1) {
            b.hide()
        }
    };
    var f = function(a) {
        this.options = b.extend({},
        this.options, a)
    };
    f.prototype = {
        getCache: function(a) {
            var b = null;
            var c = IFR.getItem("navCache");
            if (!a) {
                return null
            }
            if (!c) {
                return null
            }
            if (c) {
                if (c.time + this.options.expiration > (new Date).getTime()) {
                    b = c.data
                }
            }
            return b
        },
        setCache: function(a, b) {
            var c = IFR.getItem("navCache") || {};
            if (!a) {
                IFR.setItem("mindstoreStorage", 1);
                return null
            }
            c["mindstore"] = {
                data: b,
                time: (new Date).getTime()
            };
            IFR.setItem("navCache", c);
            IFR.setItem("mindstoreStorage", 0);
            return b
        },
        group: function(a, b) {
            var c = [];
            if (!b) {
                return a
            }
            while (a.length) {
                c.push(a.splice(0, b))
            }
            return c
        }
    };
    a.IndexMindStoreArticlesList = d
})(window, jQuery, $clamp); 
(function() {
    "use strict";
    var a = $(".js-video-container");
    var b = $(".js-list-video");
    var c = $(".js-play-btn");
    var d = $(".video-headline");
    var e = $(".js-video-container").find(".description")[0];
    var f;
    var g = function(b) {
        var c = b.attr("data-video-iframe");
        a.html(c)
    };
    c.on("click",
    function() {
        g(a)
    });
    b.on("click",
    function(a) {
        var c = $(this);
        a.preventDefault();
        b.removeClass("active");
        c.addClass("active");
        g(c)
    });
    for (f = 0; f < d.length; f++) {
        $clamp(d[f], {
            clamp: 2
        })
    }
    if (e) {
        $clamp(e, {
            clamp: 2
        })
    }
})(); 
(function(a, b, c) {
    var d = function() {};
    d.fn = d.prototype;
    d.fn.init = function(a) {
        this.postId = a.id;
        this.$articleFooter = b('[cmpt-article-footer][data-post-id="' + this.postId + '"]');
        this.$scrollToHeader = this.$articleFooter.find(".js-scroll-to");
        this.$scrollToStop = b('.js-scrollto-stop[data-post-id="' + this.postId + '"]');
        this.$cmptComments = (new c).init({
            id: this.postId,
            commentType: a.commentType
        });
        return this
    };
    d.fn.render = function() {
        var a = this;
        a.$cmptComments.render();
        a.bindEvents();
        return this
    };
    d.fn.rerender = function() {
        var a = this;
        a.$cmptComments.rerender();
        return this
    };
    d.fn.bindEvents = function() {
        var a = this;
        a.$scrollToHeader.on("click",
        function() {
            b.ifr.smoothScrollTo(a.$scrollToStop, {
                offset: ns.globalHeaderHeight + 20
            })
        })
    };
    d.fn.tabs = function() {
        b(".js-comments-type a").click(function() {
            var a = b(this);
            if (a.hasClass("active")) return;
            var c = a.data("commentType");
            b(".js-comments-type a").removeClass("active");
            a.addClass("active"); (new DesktopArticleFooter).init({
                id: IFR.postId,
                commentType: c
            }).rerender()
        })
    };
    a.DesktopArticleFooter = d
})(window, jQuery, DesktopArticleCommentsComponent); 
(function(a, b) {
    var c = {
        $wxShareTip: b("#weixin-share-tip"),
        $wxShareTipOverlay: b("#share-overlay"),
        init: function() {
            if (IFR.env.weixin) {
                c.$wxShareTip.addClass("weixin-browser");
                c.$wxShareTipOverlay.on("click", c.hideWxShareTip.bind(c))
            }
        },
        hideWxShareTip: function() {
            setTimeout(function() {
                c.$wxShareTip.addClass("hide").removeClass("download");
                c.$wxShareTipOverlay.addClass("hide")
            },
            300)
        },
        showWxShareTip: function(a) {
            setTimeout(function() {
                c.$wxShareTip.removeClass("hide").addClass("download");
                c.$wxShareTipOverlay.removeClass("hide");
                b(document).one("scroll", c.hideWxShareTip.bind(c))
            },
            300)
        }
    };
    var d = function() {};
    d.fn = d.prototype;
    d.fn.init = function(a) {
        this.postId = a.id;
        this.$articleContentsContainer = b('[cmpt-article-contents][data-post-id="' + this.postId + '"]');
        this.$sharesWrapper = this.$articleContentsContainer.find(".js-ifanr-shares-wrapper");
        this.$sharesCount = this.$sharesWrapper.find(".js-shares-count");
        this.$shareBtns = this.$sharesWrapper.find(".js-share-buttons");
        this.$likeBtn = this.$articleContentsContainer.find(".js-ifanr-like");
        this.$likeAvatars = this.$articleContentsContainer.find(".js-like-avatars");
        this.likeAvatarsTmpl = "desktop-article-like-avatars";
        this.likeAvatarItemTmpl = '<img class="avatar-item" src="{{avatar}}" />';
        this.$jumpTos = this.$articleContentsContainer.find("[data-jump-to]");
        this.$appsoDls = this.$articleContentsContainer.find(".js-appso-dl");
        this.$appsoCards = this.$articleContentsContainer.find('[ifr-box="appso-card"]');
        if (window.AutoFixedWidget) {
            Object.create(AutoFixedWidget.fn).init("#article-wrapper", {
                fixedTopOffset: ns.globalHeaderHeight - 10,
                reachBottom: "hidden"
            }).render()
        }
        return this
    };
    d.fn.render = function() {
        var a = this;
        a.loadPostSnsInfo();
        a.bindEvents();
        if (!IFR.env.mobileiPad && IFR.env.mobile) {
            b(".js-main-singular p:has(img)").each(function(a, c) {
                var d = b(c);
                var e = d.find("img");
                if (e.attr("width") && e.attr("width") > 200) {
                    d.addClass("picture-full-width")
                }
            });
            b(".js-main-singular p:has(iframe)").addClass("picture-full-width");
            b(".js-main-singular p:has(embed)").addClass("picture-full-width");
            var c = 0;
            var d = window.innerWidth > 0 ? window.innerWidth: screen.width;
            var e = d - c;
            a.$articleContentsContainer.find("iframe").each(f);
            a.$articleContentsContainer.find("embed").each(f);
            function f(a, c) {
                var d = b(c);
                var f = d.attr("width");
                var g = d.attr("height");
                var h = f / g;
                var i = e / h;
                d.attr("height", i).attr("width", e)
            }
        }
        if (!ns.wpPageNowIs("single-app")) {
            return
        }
        a.$appsoCards.each(function(a, c) {
            var d = b(c).find(".js-shots-wrapper");
            var e = d.find(".shot-item").length * 108;
            d.css({
                width: e
            })
        })
    };
    d.fn.loadPostSnsInfo = function() {
        var a = this;
        b.ajax({
            url: "https://sso.ifanr.com/api/wp/article/stats/" + a.postId + "/",
            method: "GET",
            contentType: "application/json",
            dataType: "json"
        }).success(a.renderSnsInfo.bind(a))
    };
    d.fn.updateSharesCount = function(a) {
        var c = this;
        var d = b(a.target);
        if (d.hasClass("js-shared")) {
            return true
        }
        d.addClass("js-shared");
        b.ajax({
            url: "https://sso.ifanr.com/api/wp/article/share/" + c.postId + "/",
            method: "put",
            contentType: "application/json",
            dataType: "json",
            data: "{}",
            xhrFields: {
                withCredentials: true
            }
        }).complete(function() {
            var a = c.$sharesCount.text();
            c.$sharesCount.html(parseInt(a, 10) + 1)
        });
        return true
    };
    d.fn.updateLikesCount = function() {
        var a = this;
        if (a.$likeBtn.hasClass("active")) {
            return
        }
        b.ajax({
            url: "https://sso.ifanr.com/api/wp/article/like/" + a.postId + "/",
            method: "put",
            contentType: "application/json",
            dataType: "json",
            data: "{}",
            xhrFields: {
                withCredentials: true
            }
        }).complete(function() {
            a.$likeBtn.addClass("active");
            a.$likeBtn.find(".js-like-hint").html("已点赞");
            a.$likeBtn.find(".ifanr2015").removeClass("ifanr2015-heart").addClass("ifanr2015-like");
            var c = a.$likeAvatarsCount.text();
            a.$likeAvatarsCount.text(parseInt(c, 10) + 1 + " 个人");
            if (!ns.currentUserAvatar) {
                return
            }
            var d = b(a.likeAvatarItemTmpl.replace("{{avatar}}", ns.currentUserAvatar));
            a.$likeAvatarsList.prepend(d);
            d.on("error",
            function() {
                b(this).attr("src", ns.defaultUserAvatar)
            })
        })
    };
    d.fn.renderSnsInfo = function(a) {
        var c = this;
        c.$sharesCount.html(a.share_count);
        c.$likeAvatars.append(template(c.likeAvatarsTmpl, a));
        c.$likeAvatarsCount = c.$likeAvatars.find(".js-avatars-count");
        c.$likeAvatarsList = c.$likeAvatars.find(".js-avatars-list");
        var d = b(".js-avatars-list .avatar-item");
        if (d.length > 0) {
            d.on("error",
            function() {
                b(this).attr("src", ns.defaultUserAvatar)
            })
        } else {
            var e = c.$likeAvatarsCount.text();
            e = parseInt(e, 10);
            if (e <= 10) return;
            var f = Math.ceil(Math.random() * 5);
            var g = c.likeAvatarItemTmpl.replace("{{avatar}}", ns.defaultUserAvatar);
            var h = "";
            for (var i = 0; i < f; i++) {
                h += g
            }
            c.$likeAvatarsList.prepend(h)
        }
    };
    d.fn.bindEvents = function() {
        var a = this;
        a.$shareBtns.on("click", a.updateSharesCount.bind(a));
        a.$sharesWrapper.find(".weixin").on("mouseenter", a.updateSharesCount.bind(a));
        a.$likeBtn.on("click", a.updateLikesCount.bind(a));
        a.$jumpTos.on("touchstart click",
        function() {
            b.ifr.smoothScrollTo(b(this).attr("href"), {
                offset: ns.globalHeaderHeight
            });
            return false
        });
        c.init();
        a.$appsoDls.on("click",
        function(a) {
            if (!IFR.env.weixin) {
                return true
            }
            a.preventDefault();
            c.showWxShareTip();
            return false
        })
    };
    a.DesktopArticleContents = d
})(window, jQuery); 
(function(a, b) {
    var c = b(".js-header");
    var d = b(".js-nav-items");
    var e = b(".js-nav-menu");
    var f = c.find(".js-white-logo");
    var g = c.find(".js-black-logo");
    var h = c.find(".js-nav-user");
    var i = c.find(".js-nav-search");
    var j = c.find(".js-nav-menu");
    var k = d.find(".js-clickable-wrapper");
    var l = c.height() * 2;
    var m = null;
    var n = true;
    var o = false;
    var p = 0;
    var q = true;
    var r = false;
    var s;
    d.on("click",
    function(a) {
        var c = false;
        for (var d = 0,
        e = k.length; d < e; d++) {
            c = c || b.contains(k[d], b(a.target)[0])
        }
        if (c) {
            return
        }
        v()
    });
    IFR.Events.on("hide.global-header",
    function() {
        if (d.hasClass("state-open")) {
            d.removeClass("state-open");
            setTimeout(function() {
                d.addClass("hide").addClass("state-close");
                b("body").removeClass("menu-prevent-scrolled");
                e.removeClass("active");
                if (p < l) {
                    c.removeClass("bordered")
                }
            },
            300);
            o = false;
            r = false
        }
    });
    IFR.Events.on("restore.opacity.global-header",
    function() {
        x();
        o = false
    });
    IFR.Events.on("remove.opacity.global-header",
    function() {
        y();
        o = true
    });
    var t = b(".ifr-nav-items-container");
    t.mouseenter(function() {
        b(this).addClass("mouseenter")
    }).mouseleave(function() {
        b(this).removeClass("mouseenter")
    });
    e.mouseenter(function() {
        s = setTimeout(function() {
            if (t.hasClass("state-close")) {
                v()
            }
        },
        200)
    }).mouseleave(function() {
        clearTimeout(s);
        setTimeout(u, 150)
    });
    function u() {
        if (!t.hasClass("mouseenter") && e.hasClass("active")) {
            v()
        }
    }
    function v() {
        if (d.hasClass("state-open")) {
            d.removeClass("state-open").addClass("state-close");
            b("body").removeClass("menu-prevent-scrolled");
            e.removeClass("active");
            setTimeout(function() {
                d.addClass("hide");
                if (p < l) {
                    c.removeClass("bordered")
                }
                x()
            },
            150);
            o = false;
            r = false
        } else {
            d.removeClass("hide");
            setTimeout(function() {
                d.removeClass("state-close").addClass("state-open");
                c.addClass("bordered");
                b("body").addClass("menu-prevent-scrolled");
                e.addClass("active");
                y();
                IFR.Events.trigger("hide.global-search")
            },
            200);
            o = true;
            r = true
        }
    }
    function w(a) {
        var b = a / l;
        var d = 255 - a;
        var e = {
            color: "rgba(" + d + "," + d + "," + d + ",1)"
        };
        if (b >= 1) {
            b = 1;
            c.addClass("bordered")
        } else {
            c.removeClass("bordered")
        }
        g.css({
            opacity: b
        });
        f.css({
            opacity: 1 - b
        });
        n = b <= 1 && d <= 255
    }
    function x() {
        w(q ? p: l)
    }
    function y() {
        w(l)
    }
    if (!c.hasClass("reverse")) {
        q = false;
        return
    }
    b(window).on("scroll",
    function(a) {
        if (o) {
            return
        }
        if (r) {
            a.preventDefault();
            a.stopPropagation();
            return false
        }
        var c = p = b(this).scrollTop();
        if (c <= l) {
            n = true
        }
        if (!n) {
            return
        }
        clearTimeout(m);
        m = setTimeout(w.bind(this, c), 10)
    })
})(window, jQuery); 
(function(a, b) {
    var c = function(a) {
        a.preventDefault();
        var c = b(a.target).parent();
        var d = c.attr("data-share");
        if (!d) return false;
        IFR.share(d, {
            _topic: "爱范儿",
            _url: c.attr("href")
        })
    };
    var d = function() {};
    d.fn = d.prototype;
    d.fn.init = function() {
        return this
    };
    d.fn.render = function() {
        var a = this;
        var d = null;
        b(document).on("click", "[data-share]", c.bind(a)).on("mouseenter", ".js-sns-tools .ifanr2015-more",
        function() {
            clearTimeout(d);
            setTimeout(function() {
                b(this).parents(".js-sns-tools").addClass("more")
            }.bind(this), 300)
        }).on("mouseleave", ".js-sns-tools",
        function() {
            clearTimeout(d);
            d = setTimeout(function() {
                b(this).removeClass("more")
            }.bind(this), 300)
        }).on("mouseenter", ".js-sns-tools .js-share-buttons.weixin",
        function() {
            b(this).parent().parent().addClass("active")
        }).on("mouseleave", ".js-sns-tools .js-share-buttons.weixin",
        function() {
            b(this).parent().parent().removeClass("active")
        })
    };
    a.SnsShareItems = d
})(window, jQuery); 
(function(a, b) {
    if (!a.requestAnimationFrame) {
        a.requestAnimationFrame = function(a) {
            setTimeout(a, 200)
        }
    }
    var c = function() {};
    c.fn = c.prototype;
    c.fn.init = function(a, c) {
        this.options = c ? c: {};
        this.reachBottom = this.options.reachBottom === "hidden" ? "hidden": null;
        this.widgetContainer = b("[data-cmpt-autofixed-container]" + a);
        if (!this.widgetContainer.length) {
            return {
                render: function() {}
            }
        }
        this.fixedTopOffset = this.options.fixedTopOffset ? this.options.fixedTopOffset: 0;
        this.calcTopDoms = this.options.hasTopDoms ? this.options.fixedTopOffset: false;
        this.$widget = this.widgetContainer.find("[data-cmpt-autofixed]");
        if (this.$widget.css("display") === "none") {
            this.notRendered = true;
            return this
        }
        this.$followTo = this.$widget.data("autofixed-follow-to");
        this.$followTo = this.$followTo ? b(this.$followTo) : null;
        this.shouldAnimated = typeof this.options.animated !== "undefined" ? this.options.animated: true;
        this.isAnimationFrameScheduled = false;
        var d = this.$widget.parent().offset().top - this.fixedTopOffset;
        var e = this.widgetContainer.outerHeight();
        var f = this.$widget.width();
        var g = parseInt(this.$widget.css("left"));
        this.meta = {
            startY: d,
            endY: -1,
            height: -1,
            posX: g ? g: 0,
            width: f,
            containerHeight: e
        };
        this.__widgetTopDoms = [];
        var h = this.widgetContainer.children();
        for (var i = 0,
        j = h.length; i < j; i++) {
            var k = b(h[i]);
            if (k.data("cmpt-autofixed") === "") {
                break
            }
            this.__widgetTopDoms.push(k)
        }
        ns.autofixedWidgets.push(this);
        return this
    };
    c.fn.calcWidgetOffsetTop = function() {
        var a = this;
        a.__widgetTopOffset = 0;
        for (var b = 0,
        c = a.__widgetTopDoms.length; b < c; b++) {
            a.__widgetTopOffset += a.__widgetTopDoms[b].outerHeight(true)
        }
        return a.__widgetTopOffset
    };
    c.fn.getFixedPosMeta = function() {
        var a = this.meta;
        var b = this.$widget.height();
        var c = this.$widget.children().first().height();
        a.height = c > b ? c: b;
        a.endY = a.startY - a.height + (this.$followTo ? this.$followTo.height() : a.containerHeight);
        a.startY = this.$widget.parent().offset().top - this.fixedTopOffset + a.posY;
        a.posY = this.calcTopDoms ? this.calcWidgetOffsetTop() : 0;
        return a
    };
    c.fn.render = function() {
        if (this.notRendered) {
            return
        }
        this.bindEvents()
    };
    c.fn.bindEvents = function() {
        var c = this;
        b(window).on("scroll",
        function() {
            var e = b(this).scrollTop();
            var f = c.getFixedPosMeta();
            if (c.isAnimationFrameScheduled) {
                return
            }
            c.isAnimationFrameScheduled = true;
            a.requestAnimationFrame(d.bind(c, e, f))
        })
    };
    function d(a, b) {
        if (a > b.startY && a <= b.endY) {
            this.$widget.addClass(this.shouldAnimated ? "animated": "").css({
                visibility: "visible",
                bottom: "auto",
                left: "auto",
                top: this.fixedTopOffset,
                transform: "translateX(" + b.posX + "px)",
                width: b.width,
                position: "fixed"
            })
        } else if (a > b.endY) {
            this.$widget.css({
                visibility: this.reachBottom ? "hidden": "visible",
                position: "absolute",
                top: "auto",
                left: b.posX,
                bottom: 0,
                transform: "translateX(0px)",
                width: b.width
            })
        } else if (a < b.startY) {
            this.$widget.removeClass("animated").css({
                visibility: "visible",
                position: "absolute",
                top: b.posY,
                bottom: "auto",
                left: b.posX,
                transform: "translateX(0px)",
                width: b.width
            })
        }
        this.isAnimationFrameScheduled = false
    }
    a.AutoFixedWidget = c
})(window, jQuery); 
(function(a, b) {
    var c = function() {};
    c.fn = c.prototype;
    c.fn.init = function(a) {
        this.options = a ? a: {};
        this.$background = b("[data-cmpt-parallax-bg]" + a.selector ? a.selector: "");
        this.bgEndY = this.$background.offset().top + this.$background.outerHeight();
        return this
    };
    c.fn.render = function() {
        var a = this;
        a.bindEvents()
    };
    c.fn.bindEvents = function() {
        var a = this;
        var c = null;
        b(window).on("scroll",
        function() {
            var d = b(this).scrollTop();
            if (d > a.bgEndY) {
                return
            }
            clearInterval(c);
            c = setInterval(function() {
                requestAnimationFrame(function(b) {
                    var c = "translate3d(0," + (b * .25).toFixed(2) + "px, 0)";
                    a.$background.css({
                        transform: c,
                        "-webkit-transform": c
                    })
                }.bind(this, d))
            }.bind(this), 10)
        })
    };
    a.ParallaxBackground = c
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
            this.$nav = this.$el.find(".js-page-list");
            this.$wrap = this.$el.find(".js-wrap");
            this.$list = this.$nav.find(".page-item a")
        },
        bindEvents: function() {
            var c = this;
            if (this.$wrap.length) {
                Object.create(b.AutoFixedWidget.fn).init(".js-wrap", {
                    fixedTopOffset: 0,
                    animated: false
                }).render()
            }
            c.$nav.onePageNav({
                currentClass: "active",
                scrollChange: function(a) {
                    c.addActiveClass(a.data("active"))
                }
            });
            c.$list.on("click",
            function() {
                c.addActiveClass(a(this).parent().data("active"))
            })
        },
        addActiveClass: function(b) {
            a(b).addClass("active").siblings().removeClass("active");
            a(b + "-page").addClass("active")
        }
    };
    b.IfanrOurService = c
})(jQuery, window); 
(function() {
    $("[widget-go2top]").widgetGoToTop();
    $("[widget-tabspanel]").widgetTabsPanel();
    $(".js-navbar-top-jiong-container").widgetNavbarBanner();
    ns.globalHeaderHeight = $("#header").height();
    delete ns.autofixedWidgets;
    ns.autofixedWidgets = [];
    var a = {
        fixedTopOffset: $("#header").height() - 60,
        animated: false
    };
    if (ns.wpPageNowIs("home")) {
        Object.create(AutoFixedWidget.fn).init("#index-part-one", a).render();
        Object.create(AutoFixedWidget.fn).init("#index-part-two", a).render();
        Object.create(AutoFixedWidget.fn).init("#index-part-forth", a).render()
    }
    if ($("#ifr-page-our-team").length > 0) {
        new window.AboutTeam({
            isMobile: false
        })
    }
    if (ns.wpPageNowIs("single")) {
        var b = $("#header");
        var c = {
            classes: {
                initial: "animated",
                pinned: "slideInDown",
                unpinned: "slideOutUp"
            },
            onPin: function() {
                ns.autofixedWidgets.forEach(function(a) {
                    a.fixedTopOffset = ns.globalHeaderHeight + 20
                })
            },
            onUnpin: function() {
                ns.autofixedWidgets.forEach(function(a) {
                    a.fixedTopOffset = 20
                })
            }
        };
        var d = new Headroom(b[0], c)
    }
    Object.create(SnsShareItems.fn).init().render();
    var e = function() {
        $("#JS_orderCmtByRating").click(function() {
            if ($("ol.commentlistByRating li").length <= 0) {
                f()
            }
            $("ol.commentlist").hide();
            $("ol.commentlistByRating").show()
        });
        $("#JS_orderCmtByTime").click(function() {
            $("ol.commentlist").show();
            $("ol.commentlistByRating").hide()
        });
        $(".comment-list-order").click(function() {
            $(this).hide().siblings().show()
        })
    };
    var f = function() {
        var a = [];
        $("ol.commentlist li").each(function() {
            var b = $(this);
            var c = b.attr("id");
            var d = b.attr("data-id");
            var e = parseInt($("#karma-" + d + "-up").text());
            if (e > 8) {
                a.unshift([c, e])
            }
        });
        if (a.length >= 0) {
            a.sort(function(a, b) {
                return b[1] - a[1]
            });
            $(a).each(function(a, b) {
                var c = $("#" + b[0]).clone();
                c.find(".children").remove();
                c.find(".comment-meta").empty().append('<dd><a class="JS_commentOrg" href="#' + b[0] + '">回列表查看此评论</a></dd>');
                $("ol.commentlistByRating").append(c)
            });
            $(".JS_commentOrg").click(function() {
                $("#JS_orderCmtByTime").click();
                $.ifr.scrollTo($(this).attr("href"));
                return false
            })
        } else {
            $("ol.commentlistByRating span#noItem").removeClass("hide")
        }
    };
    var g = function() {
        $(".entry-content .gallery").each(function() {
            var a = $(this),
            b = a.attr("id");
            a.find(".gallery-item a").each(function() {
                var a = $(this),
                c = a.children("img"),
                d = c.attr("width"),
                e = c.attr("height"),
                f = c.attr("src").replace("-" + d + "x" + e, "");
                a.attr("rel", 'lightbox["' + b + '"]');
                a.attr("href", f)
            })
        });
        $('.entry-content a[rel^="attachment"]').each(function() {
            var a = $(this);
            a.attr("title", a.next(".wp-caption-text").text());
            a.attr("rel", "lightbox[" + IFR.postId + "]");
            a.attr("href", a.children("img").attr("src"))
        });
        $('.entry-content a[rel^="attachment"], a[rel^="lightbox"]').lightbox({
            fitToScreen: typeof JQLBSettings == "object" && JQLBSettings.fitToScreen == "1" ? false: true,
            resizeSpeed: typeof JQLBSettings == "object" && JQLBSettings.resizeSpeed > 0 ? JQLBSettings.resizeSpeed: 250,
            imageClickClose: true
        })
    };
    var h = function() {
        var a = $(".J_Notice");
        if (!a.length) return false;
        var b = function() {
            IFR.api("get_site_notice", {
                localCacheTime: 60,
                success: function(b) {
                    var c = b.data;
                    if (!c || !c.id) return false;
                    var d = "site-notice-" + c.id;
                    if ($.cookie(d) != 1) {
                        a.find(".J_Close").bind("click",
                        function() {
                            a.slideUp();
                            $.cookie(d, 1, {
                                expires: 7,
                                path: "/"
                            });
                            return false
                        });
                        if (c.link != IFR.url.href) {
                            a.clsShow();
                            a.find(".J_NoticeTitle").text(c.title);
                            a.find(".J_NoticeLink").attr("href", c.link)
                        }
                    }
                },
                error: function(a) {
                    if (a.status == 502) {
                        b()
                    }
                }
            })
        };
        b()
    };
    var i = function() {
        var a = $(".J_TopBanner");
        var b = a.attr("data-cookie-id");
        if (b && $.cookie(b) != 1) {
            a.find(".J_Close").bind("click",
            function() {
                a.slideUp();
                $.cookie(b, 1, {
                    expires: 7,
                    path: "/"
                });
                return false
            });
            var c = a.find(".J_TopBannerImg").attr("data-src");
            a.find(".J_TopBannerImg").attr("src", c);
            a.show()
        }
    };
    $(document).ready(function() {
        $(".single .entry-comment-number a").click(function() {
            $.ifr.smoothScrollTo("#comments-box");
            IFR.util.stopDefault()
        });
        $("#JS_show_license").click(function() {
            $("#JS_License").slideToggle()
        });
        if (typeof $.fn.lazyload !== "undefined") {
            $("body.home, body.archive, body.search").find(".entry-common img, .entry-list img").lazyload({
                placeholder: IFR.blankImg_url,
                effect: "fadeIn"
            })
        }
        if ($(".ifanr-our-service").length) {
            new window.IfanrOurService(".ifanr-our-service")
        }
        if ($(".ifanr-report").length) {
            new window.IfanrReport(".ifanr-report")
        }
        if (ns.wpPageNowIs("single")) {
            g(); (new DesktopArticleContents).init({
                id: IFR.postId
            }).render();
            if (!ns.wpPageNowIs("single-buzz")) { (new DesktopArticleFooter).init({
                    id: IFR.postId
                }).render().tabs()
            }
            $(".JS_show_tip").poshytip({
                showTimeout: 1,
                alignTo: "target",
                alignX: "center",
                alignY: "top",
                offsetX: 5
            });
            $(".JS_show_share").on("click",
            function() {
                $(this).addClass("submenuOn")
            });
            $(".comment-content").on("mouseleave",
            function() {
                $(this).find(".JS_show_share").removeClass("submenuOn")
            })
        }
        h();
        i();
        $(".JS_ShowDropdown").hover(function() {
            $(this).toggleClass("open")
        });
        var a = $(window);
        var b = $(".js-nav-fixed");
        var c = $(".header").outerHeight() - $(".js-nav-fixed").outerHeight();
        var d = $("#content-outer");
        var e = null;
        a.on("scroll",
        function(a) {
            clearTimeout(e);
            e = setTimeout(f, 0)
        });
        var f = function() {
            var a = $(window).scrollTop();
            var e = c <= a;
            if (e) {
                b.addClass("fixed");
                d.removeClass("fix-header-height")
            } else {
                b.removeClass("fixed");
                d.addClass("fix-header-height")
            }
        };
        var j = function(a) {
            var b = $(window).scrollTop();
            var c = $(".header").outerHeight() - b;
            var d = $(".js-header").outerHeight();
            c = c < d ? d: c;
            var e = $("body").outerHeight();
            return e - c
        };
        $(".js-nav-search").click(function() {
            var a = $(".ifr-search-zone");
            a.height(j())
        });
        $(".js-nav-menu").mouseenter(function() {
            var a = $(".ifr-nav-items-container");
            a.height(j())
        })
    });
    var j = $("#recommend-post .slider");
    j.unslider({
        dots: true,
        fade: true,
        autoplay: j.find("ul li").length > 1 ? true: false,
        fluid: true,
        delay: 5e3
    });
    var k = j.find(".dots");
    k.wrap('<div class="fullwidth"></div>');
    $(".accordion-border").ifanrAccordion({
        target: ".accordion-item",
        itemHeight: 50,
        height: 200,
        transitionProperty: "height, background"
    });
    var l = $(".js-clickable-wrapper a:first-child").ifanrNavPreview({
        action: "latest",
        params: {
            posts_per_page: 20,
            excerpt_length: 200,
            cancel_cache: true
        },
        page: 1,
        template: "desktop-menu-preview",
        cateAttr: "ga-event-label",
        event: "click",
        renderTarget: ".js-menu-preview .search-list"
    });
    $(".js-nav-menu").mouseenter(function() {
        $(".js-clickable-wrapper a:first-child").click()
    });
    $(".preview-list").scroll(function() {
        var a = $(this);
        var b = $(this).height() + parseInt($(this).css("padding-bottom"), 10);
        var c = $(this).get(0).scrollHeight;
        var d = $(this).scrollTop();
        if (d - (c - b) >= 0) {
            l.autoload("首页")
        }
    });
    var m = $(".js-items-preview");
    var n = $(".nav-list .nav-item:nth-child(n+3)");
    n.ifanrNavPreview({
        action: "get_posts_by_category",
        params: {
            excerpt_length: 100,
            limit: 12
        },
        timeout: 100,
        template: "desktop-nav-preview",
        cateAttr: "cate",
        event: "mouseenter",
        renderTarget: ".js-items-preview .items-flex",
        expandFun: function() {
            if ($(".ifr-search-zone").css("display") !== "none") {
                return false
            } else {
                $(".js-nav-menu").removeClass("active");
                $(".js-nav-items").addClass("hide").addClass("state-close").removeClass("state-open");
                $("body").removeClass("menu-prevent-scrolled");
                m.stop(true, true).fadeIn().mouseleave(function() {
                    n.removeClass("active");
                    m.fadeOut()
                });
                return true
            }
        }
    });
    var o = $(".js-nav-items");
    var p = $(".js-nav-menu");
    var q = $("body");
    o.on("mouseleave",
    function() {
        p.removeClass("active");
        o.addClass("hide").addClass("state-close").removeClass("state-open");
        q.removeClass("menu-prevent-scrolled")
    });
    var r;
    n.mouseenter(function() {
        clearTimeout(r)
    }).mouseleave(function() {
        r = setTimeout(s, 200)
    });
    m.mouseenter(function() {
        $(this).addClass("hover")
    }).mouseleave(function() {
        $(this).removeClass("hover")
    });
    var s = function() {
        if (m.hasClass("hover")) return;
        n.removeClass("active");
        m.stop(true, true).fadeOut()
    };
    $(window).on("scroll",
    function() {
        n.removeClass("active");
        m.fadeOut()
    });
    $(".js-nav-search").on("click", s);
    $('.widget_ifanr_jiong_new [rel="external"]').click(function() {
        window.open($(this).prop("href"));
        return false
    });
    var t;
    $(".js-logo").on("mouseenter",
    function() {
        clearTimeout(t);
        $(".js-sns").addClass("sns-show").on("mouseenter",
        function() {
            $(this).addClass("hover")
        }).on("mouseleave",
        function() {
            $(this).removeClass("sns-show");
            $(this).removeClass("hover")
        })
    }).on("mouseleave",
    function() {
        t = setTimeout(function() {
            if (!$(".js-sns").hasClass("hover")) {
                $(".js-sns").removeClass("sns-show")
            }
        },
        200)
    });
    $(".js-excerpt").each(function(a, b) {
        var c = $(this).data("clamp");
        if (c) {
            $clamp(b, {
                clamp: c
            })
        }
    })
})(); 
(function(a) {
    ns.topBarUserMenu = ns.topBarUserMenu || {};
    a.extend(ns.topBarUserMenu, {
        menuIsShow: false,
        navIdStr: "#nav-user-subs",
        eventNamespace: "click.ifrTopUserBar"
    });
    a.extend(ns.topBarUserMenu, {
        $menuSubs: a(ns.topBarUserMenu.navIdStr),
        eventBind: function() {
            a("#nav-user-button").on("click",
            function(b) {
                b.stopPropagation();
                ns.topBarUserMenu.menuIsShow = !ns.topBarUserMenu.menuIsShow;
                ns.topBarUserMenu.$menuSubs.toggleClass("hide");
                if (ns.topBarUserMenu.menuIsShow) {
                    a(document).on(ns.topBarUserMenu.eventNamespace,
                    function(b) {
                        b.stopPropagation();
                        var c = a(b.target).closest(ns.topBarUserMenu.navIdStr).length > 0;
                        if (!c) {
                            ns.topBarUserMenu.menuIsShow = false;
                            ns.topBarUserMenu.$menuSubs.addClass("hide");
                            a(document).off(ns.topBarUserMenu.eventNamespace)
                        }
                    })
                }
            })
        }
    });
    ns.topBarUserMenu.eventBind()
})(jQuery); 
(function(a) {
    "use strict";
    var b = "QuotaExceededError";
    var c = 1e3;
    var d = 86400;
    var e;
    function f() {}
    f.prototype.setCache = function(a, f, g) {
        var h = (new Date).getTime();
        var i = g && g.expiresIn ? g.expiresIn: d;
        var j;
        if (!a || !f) {
            return undefined
        }
        e = h + parseInt(i * c);
        j = {
            data: f,
            timeStamp: e
        };
        try {
            localStorage.setItem(a, JSON.stringify(j))
        } catch(k) {
            if (k.name === b) {
                this.removeAll();
                localStorage.setItem(a, JSON.stringify(j))
            }
        }
    };
    f.prototype.getCache = function(a) {
        //return undefined;//huangbo remove cache
        var b = localStorage.getItem(a);
        var c = (new Date).getTime();
        if (b) {
            b = JSON.parse(b) || {};
            if (b.timeStamp < c) {
                this.removeItem(a);
                return undefined
            }
            return b
        }
        return undefined
    };
    f.prototype.removeItem = function(a) {
        localStorage.removeItem(a)
    };
    f.prototype.removeAll = function() {
        localStorage.clear()
    };
    var g = new f;
    a.historyStorage = g
})(window); 
(function(a, b) {
    var c = function() {
        var c = a("#loading-more-container");
        var d = a("#JS_loading");
        var e = a("#JS_loadMore");
        var f = a(".js-loading-posts-wrapper");
        var g = ns.wpPageNowIs("home") || ns.wpPageNowIs("author");
        var h = a("#no-articles");
        var i = {
            posts_per_page: ns.wpPageNowIs("author") ? 12 : 5,
            excerpt_length: "200",
            thumb_size: "120xauto"
        };
        var j = ns.wpPageNowIs("home") ? a.extend({
            offset_featured: 1
        },
        i) : i;
        var k = "ifr_latest";
        var l;
        var m = 0;
        var n = location.pathname.toString();
        var o = encodeURIComponent(n) + "_IFANR";
        var p = {
            storageData: [],
            nextPageNum: 1
        };
        var q = {
            //expiresIn: 43200
            expiresIn: 1
        };
        var r;
        var s;
        console.log(b);
        var t = function(b, i) {
            var k;
            s = i;
            if (!e.length) {
                return false
            }
            if (b) {
                if (!b.length) {
                    d.hide();
                    h.removeClass("hide")
                }
                a.each(b,
                function(b, d) {
                    d.needPreTitle = g;
                    d.place_right = b % 5 <= 1;
                    d.is_row_end = (b + 1) % 5 === 0;
                    if (d.post_type === "dasheng") {
                        l = "desktop-entry-item-dasheng"
                    } else if (d.post_type === "data") {
                        l = "desktop-entry-item-data"
                    } else {
                        l = "desktop-entry-item"
                    }
                    k = template(l, d);
                    f.append(k);
                    f.append(c);
                    f.find(".js-excerpt").each(function(b, c) {
                        var d = a(this).data("clamp");
                        $clamp(c, {
                            clamp: d
                        })
                    })
                });
                if (b.length < j.posts_per_page || i === m) {
                    d.fadeOut(350,
                    function() {
                        e.hide()
                    });
                    h.removeClass("hide");
                    p.nextPageNum = m;
                    return
                }
                IFR.Events.trigger("reload.weixin.share-items")
            }
        };
        var u = function() {
            d.fadeOut(350,
            function() {
                e.fadeIn(350)
            })
        };
        var v = function() {
            s = e.attr("data-page");
            j.paged = s;
            j.page = s;
            j = ns.addLoadingConfig(e, j);
            d.fadeIn(350);
            e.hide();
            if (j.post_type === "dasheng") {
                k = "dasheng"
            }
            u();
            //huangbo
            $.ajax({
                url: "../wp-admin/admin-ajax.php?timestamp=" + new Date().getTime(),
                data: $.extend({}, j, {action : 'get_latest'}),
                dataType: "json",
                method: "post",
                success: function(a) {
                    s = parseInt(s) + 1;
                    e.attr("data-page", s);
                    p.storageData = p.storageData.concat(a.ret);
                    p.nextPageNum = s;
                    t(a.ret, s);
                    historyStorage.setCache(o, p, q);
                    b("send", "pageview", {
                        page: window.location.pathname + window.location.search,
                        title: "More Contents -- Ajax Load"
                    })
                }
            })
            //IFR.api(k, {
            //    data: j,
            //    success: function(a) {
            //        s = parseInt(s) + 1;
            //        e.attr("data-page", s);
            //        p.storageData = p.storageData.concat(a.data);
            //        p.nextPageNum = s;
            //        t(a.data, s);
            //        historyStorage.setCache(o, p, q);
            //        b("send", "pageview", {
            //            page: window.location.pathname + window.location.search,
            //            title: "More Contents -- Ajax Load"
            //        })
            //    }
            //})
        };
        e.on("click", v);
        r = historyStorage.getCache(o);
        if (r && r.data) {
            p.storageData = r.data.storageData;
            s = r.data.nextPageNum;
            e.attr("data-page", parseInt(s));
            t(p.storageData, s)
        }
    };
    if (ns.wpPageNowIs("home") || ns.wpPageNowIs("archive")) {
        c()
    }
    if (ns.wpPageNowIs("home")) { (new IndexMindStoreArticlesList).init().render()
    }
})(jQuery, ga); 
(function(a, b, c) {
    var d = function() {
        var a = this;
        a.param = rcGlobal;
        a.param.serverUrl = c.wp_url;
        a.config = {
            commentTempId: "rc-comment-temp",
            itemIdPrefix: "rc-comment-",
            commentClass: "rc-comment",
            infoClass: "rc-info",
            excerptClass: "rc-excerpt",
            ellipsisClass: "rc-ellipsis",
            contentClass: "rc-content",
            labelClass: "rc-label",
            toggleClass: "rc-toggle",
            collapseClass: "rc-collapse",
            expandClass: "rc-expand",
            naviClass: "rc-navi",
            newestClass: "rc-newest",
            newerClass: "rc-newer",
            olderClass: "rc-older",
            loadingClass: "rc-loading"
        };
        a.context = {
            commentTemp: null,
            list: null
        }
    };
    d.prototype = {
        init: function() {
            var b = this;
            var c = a("#" + b.config.commentTempId);
            if (!c.length) {
                return false
            }
            b.context.commentTemp = c.clone(true);
            b.context.list = c.parent();
            b.page("init")
        },
        page: function(a) {
            var b = this;
            if (a == "init") {
                a = 1;
                var d = true
            } else {
                var d = false
            }
            c.api("recent_comments", {
                data: {
                    page: a
                },
                localCacheTime: 60,
                success: function(a) {
                    var c = a.data;
                    if (!c) return false;
                    b._buildList(c);
                    b._changeCursor("auto");
                    if (!d) {
                        b._scrollTop()
                    }
                },
                error: function(a) {
                    if (a.status == 502) {
                        loadTopPosts()
                    }
                }
            })
        },
        _buildList: function(b) {
            var c = this;
            if (!b.items) {
                c.context.list.html("<li>" + c.param.noCommentsText + "</li>");
                return false
            }
            var d = c._createCommentCode(b.items);
            var e = c._createNaviCode(b.navi);
            if (e.length > 0) {
                d += e
            }
            c.context.list.fadeOut(function() {
                a(this).html(d).fadeIn(function() {
                    if (c.param.showContent) {
                        c.context.list.find("li").each(function() {
                            c._bindCommentAction({
                                item: a(this)
                            })
                        })
                    }
                    if (c.param.external) {
                        c._initLinks()
                    }
                    if (e.length > 0) {
                        c._bindNaviAction({
                            item: a(this),
                            pageNumber: b.navi.page
                        })
                    }
                })
            });
            return true
        },
        _createCommentCode: function(b) {
            var c = a("<ul>");
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                var f = null;
                f = this._buildComment(e);
                if (f) {
                    c.append(f)
                }
            }
            return c.html()
        },
        _createNaviCode: function(a) {
            if (!a) {
                return ""
            }
            var b = parseInt(a.page, 10);
            if (b <= 1 && !a.more) {
                return ""
            }
            var c = this;
            var d = '<li class="' + c.config.naviClass + ' rc-clearfix">';
            if (b >= 2) {
                if (b > 2) {
                    d += '<a "rel=nofollow" class="' + c.config.newestClass + '">' + c.param.newestText + "</a>"
                }
                d += '<a "rel=nofollow" class="' + c.config.newerClass + '">' + c.param.newerText + "</a>"
            }
            if (a.more) {
                d += '<a "rel=nofollow" class="' + c.config.olderClass + '">' + c.param.olderText + "</a>"
            }
            d += "</li>";
            return d
        },
        _bindCommentAction: function(a) {
            var b = a.item;
            var c = this;
            var d = b.find("div." + c.config.excerptClass + ":eq(0)");
            var e = d.find("span." + c.config.ellipsisClass + ":eq(0)");
            if (e.length == 1) {
                d.parent().hover(function(a) {
                    c._enterCommnet(a, {
                        _self: c,
                        item: b
                    })
                },
                function(a) {
                    c._leaveCommnet(a, {
                        _self: c,
                        item: b
                    })
                })
            }
        },
        _bindNaviAction: function(a) {
            var b = a.item;
            var c = a.pageNumber;
            var d = this;
            var e = b.find("a." + d.config.newestClass + ":eq(0)");
            if (e) {
                e.click(function(a) {
                    d.page(1)
                })
            }
            var f = b.find("a." + d.config.newerClass + ":eq(0)");
            if (f) {
                f.click(function(a) {
                    d.page(parseInt(c, 10) - 1)
                })
            }
            var g = b.find("a." + d.config.olderClass + ":eq(0)");
            if (g) {
                g.click(function(a) {
                    d.page(parseInt(c, 10) + 1)
                })
            }
        },
        _scrollTop: function() {
            a.ifr.smoothScrollTo("#recentcomments");
            return false;
            var b = a("#recentcomments").offset().top;
            if (b) {
                a("html,body").animate({
                    scrollTop: b
                },
                {
                    queue: !1,
                    duration: 800,
                    easing: "easeInOutExpo"
                })
            }
        },
        _buildComment: function(b) {
            var c = this.context.commentTemp.clone(true);
            var d = c.find("div." + this.config.infoClass + ":eq(0)");
            var e = c.find("div." + this.config.excerptClass + ":eq(0)");
            c.attr("id", this.config.itemIdPrefix + b.id);
            if (b.reviewerName.length <= 0) {
                b.reviewerName = this.param.anonymous
            }
            if (b.title) {
                var f = "";
                if (b.reviewerUrl && b.reviewerUrl.length > 0) {
                    var g = "nofollow external";
                    if (this.param.external && b.reviewerUrl.indexOf(this.param.serverUrl) != 0) {
                        g += " external"
                    }
                    f = '<a class="rc-reviewer" rel="' + g + '" href="' + b.reviewerUrl + '">' + b.reviewerName + "</a>"
                } else {
                    f = '<span class="rc-reviewer">' + b.reviewerName + "</span>"
                }
                var h = '<a class="rc-post" rel="nofollow external" href="' + b.postUrl + "#comment-" + b.id + '">' + b.postTitle + "</a>";
                d.html(this.param.infoTemp.replace(/%REVIEWER%/g, f).replace(/%POST%/g, h))
            } else {
                var f = '<a class="rc-reviewer" rel="nofollow" href="' + b.postUrl + "#comment-" + b.id + '" title="' + b.postTitle + '">' + b.reviewerName + "</a>";
                d.html(f)
            }
            e.html(b.excerpt);
            if (b.ellipsis) {
                var i = a("<span>");
                i.attr("class", this.config.ellipsisClass);
                i.html("...");
                e.append(i)
            }
            if (b.avatarImage) {
                var j = a("<img>");
                j.attr("class", "rc-avatar rc-" + this.param.avatarPosition);
                j.attr("width", this.param.avatarSize);
                j.attr("height", this.param.avatarSize);
                j.attr("alt", "");
                j.attr("src", b.avatarImage);
                j.insertBefore(e)
            }
            return c
        },
        _initLinks: function() {
            var a = this.context.list;
            a.find('a[rel*="external"]').click(function() {
                window.open(this.href);
                return false
            })
        },
        _bindPopup: function(a, b) {
            window.open(b.link.href);
            if (a.preventDefault) {
                a.preventDefault()
            } else {
                a.returnValue = false
            }
        },
        _enterCommnet: function(b, c) {
            var d = c._self;
            var e = c.item;
            var f = e.find("div." + d.config.excerptClass + ":eq(0)");
            var g = e.find("a." + d.config.toggleClass + ":eq(0)");
            if (g.length == 1) {
                g.fadeIn()
            } else {
                var g = a("<a>");
                g.attr("rel", "nofollow");
                g.attr("class", d.config.toggleClass + " " + d.config.collapseClass);
                g.click(function(a) {
                    d._toggleComment(a, {
                        _self: d,
                        item: e,
                        source: g
                    })
                });
                g.insertBefore(f)
            }
        },
        _leaveCommnet: function(a, b) {
            var c = b._self;
            var d = b.item;
            var e = d.find("a." + c.config.toggleClass + ":eq(0)");
            if (e.length == 1) {
                e.fadeOut()
            }
        },
        _toggleComment: function(b, d) {
            var e = d._self;
            var f = d.item;
            var g = d.source;
            var h = f.find("div." + e.config.contentClass + ":eq(0)");
            var i = f.find("div." + e.config.excerptClass + ":eq(0)");
            if (h.length == 1 && g.is("." + e.config.collapseClass)) {
                i.hide();
                h.show();
                g.attr("class", e.config.toggleClass + " " + e.config.expandClass)
            } else if (h.length == 1) {
                h.hide();
                i.show();
                g.attr("class", e.config.toggleClass + " " + e.config.collapseClass)
            } else {
                h = a("<div>");
                h.attr("class", e.config.contentClass);
                h.hide();
                h.insertAfter(i);
                c.api("recent_comments_content", {
                    data: {
                        id: f.attr("id").replace(e.config.itemIdPrefix, "")
                    },
                    localCacheTime: 0,
                    success: function(a) {
                        var b = a.data;
                        if (!b) return false;
                        if (!b.length) {
                            b = i.html()
                        }
                        h.html(b);
                        i.hide();
                        h.show();
                        g.attr("class", e.config.toggleClass + " " + e.config.expandClass)
                    },
                    error: function(a) {
                        if (a.status == 502) {
                            loadTopPosts()
                        }
                    }
                })
            }
        },
        _loading: function() {
            var a = this.context.list.find("li." + this.config.naviClass + ":eq(0)");
            if (a) {
                a.html('<span class="' + this.config.loadingClass + '">' + this.param.loadingText + "...<span>")
            }
        },
        _changeCursor: function(a) {
            this.context.list.css("cursor", a)
        }
    };
    a(document).ready(function() { (new d).init()
    })
})(jQuery, window, IFR); 
(function(a, b) {
    var c = a(".JS_append_weibo_comment");
    if (c.length) {
        c.append('<h2 class="weibo-comment-tab JS_weibo_comment_tab"> <a class="nav-tab-active" href="javascript:void(0);" data-id="1">新浪微博评论</a>  </h2>');
        var d = a('<div id="JS_append_weibo_comment_div"></div>').appendTo(c);
        var e = b.url.hrefWithoutHash;
        var f = "100%",
        g = 500;
        var h = {
            url: e,
            appkey: "3857924317",
            border: "1",
            skin: "1",
            titlebar: "1",
            colordiy: "1",
            color: "eeeeee,ffffff,4c4c4c,5093d5,f0f0f0,f0f0f0",
            rnd: (new Date).valueOf()
        };
        var i = [];
        for (var j in h) {
            i.push(j + "=" + encodeURIComponent(h[j] || ""))
        }
        d.append('<div id="weibo-comment-tab-div-1" class="weibo-comment-tab clearfix"><iframe id="WBCommentFrame" allowTransparency="true" frameborder="0" scrolling="no" src="http://widget.weibo.com/distribution/comments.php?' + i.join("&") + '" width="' + f + '" height="' + g + '"></iframe></div>');
        a.getScript("http://tjs.sjs.sinajs.cn/open/widget/js/widget/comment.js",
        function() {
            window.WBComment.init({
                id: "WBCommentFrame"
            })
        })
    }
})(jQuery, IFR); 
(function(a) {
    ns.initTopPosts = function() {
        var b = a("#J_TopPosts");
        if (!b.length) return false;
        var c = function() {
            IFR.api("top", {
                data: {
                    posts_per_page: 9
                },
                localCacheTime: 600,
                success: function(a) {
                    var c = a.data;
                    if (!c) return false;
                    b.empty().append(template("desktop-top-post", {
                        list: c
                    }))
                },
                error: function(a) {
                    if (a.status == 502) {
                        c()
                    }
                }
            })
        };
        c()
    };
    ns.loadAuthorLatestPosts = function() {
        var b = a("#author-latest-posts");
        if (!b.length) return false;
        var c = function() {//huangbo
            var data = {
                posts_per_page: 4,
                author_id: b.attr("data-author-id")
            };
            $.ajax({
                url: "../wp-admin/admin-ajax.php?timestamp=" + new Date().getTime(),
                data: $.extend({}, data, {action : 'get_author_latest'}),
                dataType: "json",
                method: "post",
                success: function(a) {
                    var c = a.ret;
                    if (!c) return false;
                    b.html(template("desktop-author-latest-posts", {
                        list: c,
                        authorLink: b.attr("data-author-link")
                    }))
                }
            })
        };
        c()
    };
    ns.loadAuthorHotestPosts = function() {
        var b = a("#author-hotest-posts");
        if (!b.length) return false;
        var c = function() {
            IFR.api("top", {
                data: {
                    posts_per_page: 5,
                    author_id: b.attr("data-author-id")
                },
                localCacheTime: 600,
                success: function(a) {
                    var c = a.data;
                    if (!c) return false;
                    b.html(template("desktop-author-hotest-posts", {
                        list: c
                    }))
                },
                error: function(a) {
                    if (a.status == 502) {
                        c()
                    }
                }
            })
        };
        c()
    }
})(jQuery); 
(function(a) {
    ns.prepareCommenterInfo();
    if (a(".sbl").length) {
        ns.initTopPosts();
        ns.loadAuthorLatestPosts();
        ns.loadAuthorHotestPosts()
    }
})(jQuery); !
function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND",
                j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports,
            function(a) {
                var c = b[g][1][a];
                return e(c ? c: a)
            },
            k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require,
    g = 0; g < d.length; g++) e(d[g]);
    return e
} ({
    1 : [function(a, b, c) {
        "use strict";
        var d = a("../main");
        "function" == typeof define && define.amd ? define(d) : (window.PerfectScrollbar = d, "undefined" == typeof window.Ps && (window.Ps = d))
    },
    {
        "../main": 7
    }],
    2 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            var c = a.className.split(" ");
            c.indexOf(b) < 0 && c.push(b),
            a.className = c.join(" ")
        }
        function e(a, b) {
            var c = a.className.split(" "),
            d = c.indexOf(b);
            d >= 0 && c.splice(d, 1),
            a.className = c.join(" ")
        }
        c.add = function(a, b) {
            a.classList ? a.classList.add(b) : d(a, b)
        },
        c.remove = function(a, b) {
            a.classList ? a.classList.remove(b) : e(a, b)
        },
        c.list = function(a) {
            return a.classList ? Array.prototype.slice.apply(a.classList) : a.className.split(" ")
        }
    },
    {}],
    3 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            return window.getComputedStyle(a)[b]
        }
        function e(a, b, c) {
            return "number" == typeof c && (c = c.toString() + "px"),
            a.style[b] = c,
            a
        }
        function f(a, b) {
            for (var c in b) {
                var d = b[c];
                "number" == typeof d && (d = d.toString() + "px"),
                a.style[c] = d
            }
            return a
        }
        var g = {};
        g.e = function(a, b) {
            var c = document.createElement(a);
            return c.className = b,
            c
        },
        g.appendTo = function(a, b) {
            return b.appendChild(a),
            a
        },
        g.css = function(a, b, c) {
            return "object" == typeof b ? f(a, b) : "undefined" == typeof c ? d(a, b) : e(a, b, c)
        },
        g.matches = function(a, b) {
            return "undefined" != typeof a.matches ? a.matches(b) : "undefined" != typeof a.matchesSelector ? a.matchesSelector(b) : "undefined" != typeof a.webkitMatchesSelector ? a.webkitMatchesSelector(b) : "undefined" != typeof a.mozMatchesSelector ? a.mozMatchesSelector(b) : "undefined" != typeof a.msMatchesSelector ? a.msMatchesSelector(b) : void 0
        },
        g.remove = function(a) {
            "undefined" != typeof a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a)
        },
        g.queryChildren = function(a, b) {
            return Array.prototype.filter.call(a.childNodes,
            function(a) {
                return g.matches(a, b)
            })
        },
        b.exports = g
    },
    {}],
    4 : [function(a, b, c) {
        "use strict";
        var d = function(a) {
            this.element = a,
            this.events = {}
        };
        d.prototype.bind = function(a, b) {
            "undefined" == typeof this.events[a] && (this.events[a] = []),
            this.events[a].push(b),
            this.element.addEventListener(a, b, !1)
        },
        d.prototype.unbind = function(a, b) {
            var c = "undefined" != typeof b;
            this.events[a] = this.events[a].filter(function(d) {
                return c && d !== b ? !0 : (this.element.removeEventListener(a, d, !1), !1)
            },
            this)
        },
        d.prototype.unbindAll = function() {
            for (var a in this.events) this.unbind(a)
        };
        var e = function() {
            this.eventElements = []
        };
        e.prototype.eventElement = function(a) {
            var b = this.eventElements.filter(function(b) {
                return b.element === a
            })[0];
            return "undefined" == typeof b && (b = new d(a), this.eventElements.push(b)),
            b
        },
        e.prototype.bind = function(a, b, c) {
            this.eventElement(a).bind(b, c)
        },
        e.prototype.unbind = function(a, b, c) {
            this.eventElement(a).unbind(b, c)
        },
        e.prototype.unbindAll = function() {
            for (var a = 0; a < this.eventElements.length; a++) this.eventElements[a].unbindAll()
        },
        e.prototype.once = function(a, b, c) {
            var d = this.eventElement(a),
            e = function(a) {
                d.unbind(b, e),
                c(a)
            };
            d.bind(b, e)
        },
        b.exports = e
    },
    {}],
    5 : [function(a, b, c) {
        "use strict";
        b.exports = function() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            }
        } ()
    },
    {}],
    6 : [function(a, b, c) {
        "use strict";
        var d = a("./class"),
        e = a("./dom");
        c.toInt = function(a) {
            return parseInt(a, 10) || 0
        },
        c.clone = function(a) {
            if (null === a) return null;
            if ("object" == typeof a) {
                var b = {};
                for (var c in a) b[c] = this.clone(a[c]);
                return b
            }
            return a
        },
        c.extend = function(a, b) {
            var c = this.clone(a);
            for (var d in b) c[d] = this.clone(b[d]);
            return c
        },
        c.isEditable = function(a) {
            return e.matches(a, "input,[contenteditable]") || e.matches(a, "select,[contenteditable]") || e.matches(a, "textarea,[contenteditable]") || e.matches(a, "button,[contenteditable]")
        },
        c.removePsClasses = function(a) {
            for (var b = d.list(a), c = 0; c < b.length; c++) {
                var e = b[c];
                0 === e.indexOf("ps-") && d.remove(a, e)
            }
        },
        c.outerWidth = function(a) {
            return this.toInt(e.css(a, "width")) + this.toInt(e.css(a, "paddingLeft")) + this.toInt(e.css(a, "paddingRight")) + this.toInt(e.css(a, "borderLeftWidth")) + this.toInt(e.css(a, "borderRightWidth"))
        },
        c.startScrolling = function(a, b) {
            d.add(a, "ps-in-scrolling"),
            "undefined" != typeof b ? d.add(a, "ps-" + b) : (d.add(a, "ps-x"), d.add(a, "ps-y"))
        },
        c.stopScrolling = function(a, b) {
            d.remove(a, "ps-in-scrolling"),
            "undefined" != typeof b ? d.remove(a, "ps-" + b) : (d.remove(a, "ps-x"), d.remove(a, "ps-y"))
        },
        c.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    },
    {
        "./class": 2,
        "./dom": 3
    }],
    7 : [function(a, b, c) {
        "use strict";
        var d = a("./plugin/destroy"),
        e = a("./plugin/initialize"),
        f = a("./plugin/update");
        b.exports = {
            initialize: e,
            update: f,
            destroy: d
        }
    },
    {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8 : [function(a, b, c) {
        "use strict";
        b.exports = {
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            useSelectionScroll: !1,
            wheelPropagation: !1,
            wheelSpeed: 1
        }
    },
    {}],
    9 : [function(a, b, c) {
        "use strict";
        var d = a("../lib/dom"),
        e = a("../lib/helper"),
        f = a("./instances");
        b.exports = function(a) {
            var b = f.get(a);
            b && (b.event.unbindAll(), d.remove(b.scrollbarX), d.remove(b.scrollbarY), d.remove(b.scrollbarXRail), d.remove(b.scrollbarYRail), e.removePsClasses(a), f.remove(a))
        }
    },
    {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            function c(a) {
                return a.getBoundingClientRect()
            }
            var d = window.Event.prototype.stopPropagation.bind;
            b.settings.stopPropagationOnClick && b.event.bind(b.scrollbarY, "click", d),
            b.event.bind(b.scrollbarYRail, "click",
            function(d) {
                var f = e.toInt(b.scrollbarYHeight / 2),
                i = b.railYRatio * (d.pageY - window.scrollY - c(b.scrollbarYRail).top - f),
                j = b.railYRatio * (b.railYHeight - b.scrollbarYHeight),
                k = i / j;
                0 > k ? k = 0 : k > 1 && (k = 1),
                h(a, "top", (b.contentHeight - b.containerHeight) * k),
                g(a),
                d.stopPropagation()
            }),
            b.settings.stopPropagationOnClick && b.event.bind(b.scrollbarX, "click", d),
            b.event.bind(b.scrollbarXRail, "click",
            function(d) {
                var f = e.toInt(b.scrollbarXWidth / 2),
                i = b.railXRatio * (d.pageX - window.scrollX - c(b.scrollbarXRail).left - f),
                j = b.railXRatio * (b.railXWidth - b.scrollbarXWidth),
                k = i / j;
                0 > k ? k = 0 : k > 1 && (k = 1),
                h(a, "left", (b.contentWidth - b.containerWidth) * k - b.negativeScrollAdjustment),
                g(a),
                d.stopPropagation()
            })
        }
        var e = a("../../lib/helper"),
        f = a("../instances"),
        g = a("../update-geometry"),
        h = a("../update-scroll");
        b.exports = function(a) {
            var b = f.get(a);
            d(a, b)
        }
    },
    {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            function c(c) {
                var e = d + c * b.railXRatio,
                f = b.scrollbarXRail.getBoundingClientRect().left + b.railXRatio * (b.railXWidth - b.scrollbarXWidth);
                0 > e ? b.scrollbarXLeft = 0 : e > f ? b.scrollbarXLeft = f: b.scrollbarXLeft = e;
                var h = g.toInt(b.scrollbarXLeft * (b.contentWidth - b.containerWidth) / (b.containerWidth - b.railXRatio * b.scrollbarXWidth)) - b.negativeScrollAdjustment;
                j(a, "left", h)
            }
            var d = null,
            e = null,
            h = function(b) {
                c(b.pageX - e),
                i(a),
                b.stopPropagation(),
                b.preventDefault()
            },
            k = function() {
                g.stopScrolling(a, "x"),
                b.event.unbind(b.ownerDocument, "mousemove", h)
            };
            b.event.bind(b.scrollbarX, "mousedown",
            function(c) {
                e = c.pageX,
                d = g.toInt(f.css(b.scrollbarX, "left")) * b.railXRatio,
                g.startScrolling(a, "x"),
                b.event.bind(b.ownerDocument, "mousemove", h),
                b.event.once(b.ownerDocument, "mouseup", k),
                c.stopPropagation(),
                c.preventDefault()
            })
        }
        function e(a, b) {
            function c(c) {
                var e = d + c * b.railYRatio,
                f = b.scrollbarYRail.getBoundingClientRect().top + b.railYRatio * (b.railYHeight - b.scrollbarYHeight);
                0 > e ? b.scrollbarYTop = 0 : e > f ? b.scrollbarYTop = f: b.scrollbarYTop = e;
                var h = g.toInt(b.scrollbarYTop * (b.contentHeight - b.containerHeight) / (b.containerHeight - b.railYRatio * b.scrollbarYHeight));
                j(a, "top", h)
            }
            var d = null,
            e = null,
            h = function(b) {
                c(b.pageY - e),
                i(a),
                b.stopPropagation(),
                b.preventDefault()
            },
            k = function() {
                g.stopScrolling(a, "y"),
                b.event.unbind(b.ownerDocument, "mousemove", h)
            };
            b.event.bind(b.scrollbarY, "mousedown",
            function(c) {
                e = c.pageY,
                d = g.toInt(f.css(b.scrollbarY, "top")) * b.railYRatio,
                g.startScrolling(a, "y"),
                b.event.bind(b.ownerDocument, "mousemove", h),
                b.event.once(b.ownerDocument, "mouseup", k),
                c.stopPropagation(),
                c.preventDefault()
            })
        }
        var f = a("../../lib/dom"),
        g = a("../../lib/helper"),
        h = a("../instances"),
        i = a("../update-geometry"),
        j = a("../update-scroll");
        b.exports = function(a) {
            var b = h.get(a);
            d(a, b),
            e(a, b)
        }
    },
    {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            function c(c, d) {
                var e = a.scrollTop;
                if (0 === c) {
                    if (!b.scrollbarYActive) return ! 1;
                    if (0 === e && d > 0 || e >= b.contentHeight - b.containerHeight && 0 > d) return ! b.settings.wheelPropagation
                }
                var f = a.scrollLeft;
                if (0 === d) {
                    if (!b.scrollbarXActive) return ! 1;
                    if (0 === f && 0 > c || f >= b.contentWidth - b.containerWidth && c > 0) return ! b.settings.wheelPropagation
                }
                return ! 0
            }
            var d = !1;
            b.event.bind(a, "mouseenter",
            function() {
                d = !0
            }),
            b.event.bind(a, "mouseleave",
            function() {
                d = !1
            });
            var f = !1;
            b.event.bind(b.ownerDocument, "keydown",
            function(i) {
                if ((!i.isDefaultPrevented || !i.isDefaultPrevented()) && d) {
                    var j = document.activeElement ? document.activeElement: b.ownerDocument.activeElement;
                    if (j) {
                        for (; j.shadowRoot;) j = j.shadowRoot.activeElement;
                        if (e.isEditable(j)) return
                    }
                    var k = 0,
                    l = 0;
                    switch (i.which) {
                    case 37:
                        k = -30;
                        break;
                    case 38:
                        l = 30;
                        break;
                    case 39:
                        k = 30;
                        break;
                    case 40:
                        l = -30;
                        break;
                    case 33:
                        l = 90;
                        break;
                    case 32:
                        l = i.shiftKey ? 90 : -90;
                        break;
                    case 34:
                        l = -90;
                        break;
                    case 35:
                        l = i.ctrlKey ? -b.contentHeight: -b.containerHeight;
                        break;
                    case 36:
                        l = i.ctrlKey ? a.scrollTop: b.containerHeight;
                        break;
                    default:
                        return
                    }
                    h(a, "top", a.scrollTop - l),
                    h(a, "left", a.scrollLeft + k),
                    g(a),
                    f = c(k, l),
                    f && i.preventDefault()
                }
            })
        }
        var e = a("../../lib/helper"),
        f = a("../instances"),
        g = a("../update-geometry"),
        h = a("../update-scroll");
        b.exports = function(a) {
            var b = f.get(a);
            d(a, b)
        }
    },
    {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            function c(c, d) {
                var e = a.scrollTop;
                if (0 === c) {
                    if (!b.scrollbarYActive) return ! 1;
                    if (0 === e && d > 0 || e >= b.contentHeight - b.containerHeight && 0 > d) return ! b.settings.wheelPropagation
                }
                var f = a.scrollLeft;
                if (0 === d) {
                    if (!b.scrollbarXActive) return ! 1;
                    if (0 === f && 0 > c || f >= b.contentWidth - b.containerWidth && c > 0) return ! b.settings.wheelPropagation
                }
                return ! 0
            }
            function d(a) {
                var b = a.deltaX,
                c = -1 * a.deltaY;
                return ("undefined" == typeof b || "undefined" == typeof c) && (b = -1 * a.wheelDeltaX / 6, c = a.wheelDeltaY / 6),
                a.deltaMode && 1 === a.deltaMode && (b *= 10, c *= 10),
                b !== b && c !== c && (b = 0, c = a.wheelDelta),
                [b, c]
            }
            function f(b, c) {
                var d = a.querySelector("textarea:hover");
                if (d) {
                    var e = d.scrollHeight - d.clientHeight;
                    if (e > 0 && !(0 === d.scrollTop && c > 0 || d.scrollTop === e && 0 > c)) return ! 0;
                    var f = d.scrollLeft - d.clientWidth;
                    if (f > 0 && !(0 === d.scrollLeft && 0 > b || d.scrollLeft === f && b > 0)) return ! 0
                }
                return ! 1
            }
            function i(i) {
                if (e.env.isWebKit || !a.querySelector("select:focus")) {
                    var k = d(i),
                    l = k[0],
                    m = k[1];
                    f(l, m) || (j = !1, b.settings.useBothWheelAxes ? b.scrollbarYActive && !b.scrollbarXActive ? (m ? h(a, "top", a.scrollTop - m * b.settings.wheelSpeed) : h(a, "top", a.scrollTop + l * b.settings.wheelSpeed), j = !0) : b.scrollbarXActive && !b.scrollbarYActive && (l ? h(a, "left", a.scrollLeft + l * b.settings.wheelSpeed) : h(a, "left", a.scrollLeft - m * b.settings.wheelSpeed), j = !0) : (h(a, "top", a.scrollTop - m * b.settings.wheelSpeed), h(a, "left", a.scrollLeft + l * b.settings.wheelSpeed)), g(a), j = j || c(l, m), j && (i.stopPropagation(), i.preventDefault()))
                }
            }
            var j = !1;
            "undefined" != typeof window.onwheel ? b.event.bind(a, "wheel", i) : "undefined" != typeof window.onmousewheel && b.event.bind(a, "mousewheel", i)
        }
        var e = a("../../lib/helper"),
        f = a("../instances"),
        g = a("../update-geometry"),
        h = a("../update-scroll");
        b.exports = function(a) {
            var b = f.get(a);
            d(a, b)
        }
    },
    {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            b.event.bind(a, "scroll",
            function() {
                f(a)
            })
        }
        var e = a("../instances"),
        f = a("../update-geometry");
        b.exports = function(a) {
            var b = e.get(a);
            d(a, b)
        }
    },
    {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            function c() {
                var a = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === a.toString().length ? null: a.getRangeAt(0).commonAncestorContainer
            }
            function d() {
                j || (j = setInterval(function() {
                    return f.get(a) ? (h(a, "top", a.scrollTop + k.top), h(a, "left", a.scrollLeft + k.left), void g(a)) : void clearInterval(j)
                },
                50))
            }
            function i() {
                j && (clearInterval(j), j = null),
                e.stopScrolling(a)
            }
            var j = null,
            k = {
                top: 0,
                left: 0
            },
            l = !1;
            b.event.bind(b.ownerDocument, "selectionchange",
            function() {
                a.contains(c()) ? l = !0 : (l = !1, i())
            }),
            b.event.bind(window, "mouseup",
            function() {
                l && (l = !1, i())
            }),
            b.event.bind(window, "mousemove",
            function(b) {
                if (l) {
                    var c = {
                        x: b.pageX,
                        y: b.pageY
                    },
                    f = {
                        left: a.offsetLeft,
                        right: a.offsetLeft + a.offsetWidth,
                        top: a.offsetTop,
                        bottom: a.offsetTop + a.offsetHeight
                    };
                    c.x < f.left + 3 ? (k.left = -5, e.startScrolling(a, "x")) : c.x > f.right - 3 ? (k.left = 5, e.startScrolling(a, "x")) : k.left = 0,
                    c.y < f.top + 3 ? (f.top + 3 - c.y < 5 ? k.top = -5 : k.top = -20, e.startScrolling(a, "y")) : c.y > f.bottom - 3 ? (c.y - f.bottom + 3 < 5 ? k.top = 5 : k.top = 20, e.startScrolling(a, "y")) : k.top = 0,
                    0 === k.top && 0 === k.left ? i() : d()
                }
            })
        }
        var e = a("../../lib/helper"),
        f = a("../instances"),
        g = a("../update-geometry"),
        h = a("../update-scroll");
        b.exports = function(a) {
            var b = f.get(a);
            d(a, b)
        }
    },
    {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16 : [function(a, b, c) {
        "use strict";
        function d(a, b, c, d) {
            function h(c, d) {
                var e = a.scrollTop,
                f = a.scrollLeft,
                g = Math.abs(c),
                h = Math.abs(d);
                if (h > g) {
                    if (0 > d && e === b.contentHeight - b.containerHeight || d > 0 && 0 === e) return ! b.settings.swipePropagation
                } else if (g > h && (0 > c && f === b.contentWidth - b.containerWidth || c > 0 && 0 === f)) return ! b.settings.swipePropagation;
                return ! 0
            }
            function i(b, c) {
                g(a, "top", a.scrollTop - c),
                g(a, "left", a.scrollLeft - b),
                f(a)
            }
            function j() {
                u = !0
            }
            function k() {
                u = !1
            }
            function l(a) {
                return a.targetTouches ? a.targetTouches[0] : a
            }
            function m(a) {
                return a.targetTouches && 1 === a.targetTouches.length ? !0 : a.pointerType && "mouse" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_MOUSE ? !0 : !1
            }
            function n(a) {
                if (m(a)) {
                    v = !0;
                    var b = l(a);
                    q.pageX = b.pageX,
                    q.pageY = b.pageY,
                    r = (new Date).getTime(),
                    null !== t && clearInterval(t),
                    a.stopPropagation()
                }
            }
            function o(a) {
                if (!u && v && m(a)) {
                    var b = l(a),
                    c = {
                        pageX: b.pageX,
                        pageY: b.pageY
                    },
                    d = c.pageX - q.pageX,
                    e = c.pageY - q.pageY;
                    i(d, e),
                    q = c;
                    var f = (new Date).getTime(),
                    g = f - r;
                    g > 0 && (s.x = d / g, s.y = e / g, r = f),
                    h(d, e) && (a.stopPropagation(), a.preventDefault())
                }
            }
            function p() { ! u && v && (v = !1, clearInterval(t), t = setInterval(function() {
                    return e.get(a) ? Math.abs(s.x) < .01 && Math.abs(s.y) < .01 ? void clearInterval(t) : (i(30 * s.x, 30 * s.y), s.x *= .8, void(s.y *= .8)) : void clearInterval(t)
                },
                10))
            }
            var q = {},
            r = 0,
            s = {},
            t = null,
            u = !1,
            v = !1;
            c && (b.event.bind(window, "touchstart", j), b.event.bind(window, "touchend", k), b.event.bind(a, "touchstart", n), b.event.bind(a, "touchmove", o), b.event.bind(a, "touchend", p)),
            d && (window.PointerEvent ? (b.event.bind(window, "pointerdown", j), b.event.bind(window, "pointerup", k), b.event.bind(a, "pointerdown", n), b.event.bind(a, "pointermove", o), b.event.bind(a, "pointerup", p)) : window.MSPointerEvent && (b.event.bind(window, "MSPointerDown", j), b.event.bind(window, "MSPointerUp", k), b.event.bind(a, "MSPointerDown", n), b.event.bind(a, "MSPointerMove", o), b.event.bind(a, "MSPointerUp", p)))
        }
        var e = a("../instances"),
        f = a("../update-geometry"),
        g = a("../update-scroll");
        b.exports = function(a, b, c) {
            var f = e.get(a);
            d(a, f, b, c)
        }
    },
    {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17 : [function(a, b, c) {
        "use strict";
        var d = a("../lib/class"),
        e = a("../lib/helper"),
        f = a("./instances"),
        g = a("./update-geometry"),
        h = a("./handler/click-rail"),
        i = a("./handler/drag-scrollbar"),
        j = a("./handler/keyboard"),
        k = a("./handler/mouse-wheel"),
        l = a("./handler/native-scroll"),
        m = a("./handler/selection"),
        n = a("./handler/touch");
        b.exports = function(a, b) {
            b = "object" == typeof b ? b: {},
            d.add(a, "ps-container");
            var c = f.add(a);
            c.settings = e.extend(c.settings, b),
            h(a),
            i(a),
            k(a),
            l(a),
            c.settings.useSelectionScroll && m(a),
            (e.env.supportsTouch || e.env.supportsIePointer) && n(a, e.env.supportsTouch, e.env.supportsIePointer),
            c.settings.useKeyboard && j(a),
            g(a)
        }
    },
    {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18 : [function(a, b, c) {
        "use strict";
        function d(a) {
            var b = this;
            b.settings = l.clone(i),
            b.containerWidth = null,
            b.containerHeight = null,
            b.contentWidth = null,
            b.contentHeight = null,
            b.isRtl = "rtl" === h.css(a, "direction"),
            b.isNegativeScroll = function() {
                var b = a.scrollLeft,
                c = null;
                return a.scrollLeft = -1,
                c = a.scrollLeft < 0,
                a.scrollLeft = b,
                c
            } (),
            b.negativeScrollAdjustment = b.isNegativeScroll ? a.scrollWidth - a.clientWidth: 0,
            b.event = new j,
            b.ownerDocument = a.ownerDocument || document,
            b.scrollbarXRail = h.appendTo(h.e("div", "ps-scrollbar-x-rail"), a),
            b.scrollbarX = h.appendTo(h.e("div", "ps-scrollbar-x"), b.scrollbarXRail),
            b.scrollbarXActive = null,
            b.scrollbarXWidth = null,
            b.scrollbarXLeft = null,
            b.scrollbarXBottom = l.toInt(h.css(b.scrollbarXRail, "bottom")),
            b.isScrollbarXUsingBottom = b.scrollbarXBottom === b.scrollbarXBottom,
            b.scrollbarXTop = b.isScrollbarXUsingBottom ? null: l.toInt(h.css(b.scrollbarXRail, "top")),
            b.railBorderXWidth = l.toInt(h.css(b.scrollbarXRail, "borderLeftWidth")) + l.toInt(h.css(b.scrollbarXRail, "borderRightWidth")),
            h.css(b.scrollbarXRail, "display", "block"),
            b.railXMarginWidth = l.toInt(h.css(b.scrollbarXRail, "marginLeft")) + l.toInt(h.css(b.scrollbarXRail, "marginRight")),
            h.css(b.scrollbarXRail, "display", ""),
            b.railXWidth = null,
            b.railXRatio = null,
            b.scrollbarYRail = h.appendTo(h.e("div", "ps-scrollbar-y-rail"), a),
            b.scrollbarY = h.appendTo(h.e("div", "ps-scrollbar-y"), b.scrollbarYRail),
            b.scrollbarYActive = null,
            b.scrollbarYHeight = null,
            b.scrollbarYTop = null,
            b.scrollbarYRight = l.toInt(h.css(b.scrollbarYRail, "right")),
            b.isScrollbarYUsingRight = b.scrollbarYRight === b.scrollbarYRight,
            b.scrollbarYLeft = b.isScrollbarYUsingRight ? null: l.toInt(h.css(b.scrollbarYRail, "left")),
            b.scrollbarYOuterWidth = b.isRtl ? l.outerWidth(b.scrollbarY) : null,
            b.railBorderYWidth = l.toInt(h.css(b.scrollbarYRail, "borderTopWidth")) + l.toInt(h.css(b.scrollbarYRail, "borderBottomWidth")),
            h.css(b.scrollbarYRail, "display", "block"),
            b.railYMarginHeight = l.toInt(h.css(b.scrollbarYRail, "marginTop")) + l.toInt(h.css(b.scrollbarYRail, "marginBottom")),
            h.css(b.scrollbarYRail, "display", ""),
            b.railYHeight = null,
            b.railYRatio = null
        }
        function e(a) {
            return "undefined" == typeof a.dataset ? a.getAttribute("data-ps-id") : a.dataset.psId
        }
        function f(a, b) {
            "undefined" == typeof a.dataset ? a.setAttribute("data-ps-id", b) : a.dataset.psId = b
        }
        function g(a) {
            "undefined" == typeof a.dataset ? a.removeAttribute("data-ps-id") : delete a.dataset.psId
        }
        var h = a("../lib/dom"),
        i = a("./default-setting"),
        j = a("../lib/event-manager"),
        k = a("../lib/guid"),
        l = a("../lib/helper"),
        m = {};
        c.add = function(a) {
            var b = k();
            return f(a, b),
            m[b] = new d(a),
            m[b]
        },
        c.remove = function(a) {
            delete m[e(a)],
            g(a)
        },
        c.get = function(a) {
            return m[e(a)]
        }
    },
    {
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19 : [function(a, b, c) {
        "use strict";
        function d(a, b) {
            return a.settings.minScrollbarLength && (b = Math.max(b, a.settings.minScrollbarLength)),
            a.settings.maxScrollbarLength && (b = Math.min(b, a.settings.maxScrollbarLength)),
            b
        }
        function e(a, b) {
            var c = {
                width: b.railXWidth
            };
            b.isRtl ? c.left = b.negativeScrollAdjustment + a.scrollLeft + b.containerWidth - b.contentWidth: c.left = a.scrollLeft,
            b.isScrollbarXUsingBottom ? c.bottom = b.scrollbarXBottom - a.scrollTop: c.top = b.scrollbarXTop + a.scrollTop,
            g.css(b.scrollbarXRail, c);
            var d = {
                top: a.scrollTop,
                height: b.railYHeight
            };
            b.isScrollbarYUsingRight ? b.isRtl ? d.right = b.contentWidth - (b.negativeScrollAdjustment + a.scrollLeft) - b.scrollbarYRight - b.scrollbarYOuterWidth: d.right = b.scrollbarYRight - a.scrollLeft: b.isRtl ? d.left = b.negativeScrollAdjustment + a.scrollLeft + 2 * b.containerWidth - b.contentWidth - b.scrollbarYLeft - b.scrollbarYOuterWidth: d.left = b.scrollbarYLeft + a.scrollLeft,
            g.css(b.scrollbarYRail, d),
            g.css(b.scrollbarX, {
                left: b.scrollbarXLeft,
                width: b.scrollbarXWidth - b.railBorderXWidth
            }),
            g.css(b.scrollbarY, {
                top: b.scrollbarYTop,
                height: b.scrollbarYHeight - b.railBorderYWidth
            })
        }
        var f = a("../lib/class"),
        g = a("../lib/dom"),
        h = a("../lib/helper"),
        i = a("./instances"),
        j = a("./update-scroll");
        b.exports = function(a) {
            var b = i.get(a);
            b.containerWidth = a.clientWidth,
            b.containerHeight = a.clientHeight,
            b.contentWidth = a.scrollWidth,
            b.contentHeight = a.scrollHeight;
            var c;
            a.contains(b.scrollbarXRail) || (c = g.queryChildren(a, ".ps-scrollbar-x-rail"), c.length > 0 && c.forEach(function(a) {
                g.remove(a)
            }), g.appendTo(b.scrollbarXRail, a)),
            a.contains(b.scrollbarYRail) || (c = g.queryChildren(a, ".ps-scrollbar-y-rail"), c.length > 0 && c.forEach(function(a) {
                g.remove(a)
            }), g.appendTo(b.scrollbarYRail, a)),
            !b.settings.suppressScrollX && b.containerWidth + b.settings.scrollXMarginOffset < b.contentWidth ? (b.scrollbarXActive = !0, b.railXWidth = b.containerWidth - b.railXMarginWidth, b.railXRatio = b.containerWidth / b.railXWidth, b.scrollbarXWidth = d(b, h.toInt(b.railXWidth * b.containerWidth / b.contentWidth)), b.scrollbarXLeft = h.toInt((b.negativeScrollAdjustment + a.scrollLeft) * (b.railXWidth - b.scrollbarXWidth) / (b.contentWidth - b.containerWidth))) : (b.scrollbarXActive = !1, b.scrollbarXWidth = 0, b.scrollbarXLeft = 0, a.scrollLeft = 0),
            !b.settings.suppressScrollY && b.containerHeight + b.settings.scrollYMarginOffset < b.contentHeight ? (b.scrollbarYActive = !0, b.railYHeight = b.containerHeight - b.railYMarginHeight, b.railYRatio = b.containerHeight / b.railYHeight, b.scrollbarYHeight = d(b, h.toInt(b.railYHeight * b.containerHeight / b.contentHeight)), b.scrollbarYTop = h.toInt(a.scrollTop * (b.railYHeight - b.scrollbarYHeight) / (b.contentHeight - b.containerHeight))) : (b.scrollbarYActive = !1, b.scrollbarYHeight = 0, b.scrollbarYTop = 0, j(a, "top", 0)),
            b.scrollbarXLeft >= b.railXWidth - b.scrollbarXWidth && (b.scrollbarXLeft = b.railXWidth - b.scrollbarXWidth),
            b.scrollbarYTop >= b.railYHeight - b.scrollbarYHeight && (b.scrollbarYTop = b.railYHeight - b.scrollbarYHeight),
            e(a, b),
            f[b.scrollbarXActive ? "add": "remove"](a, "ps-active-x"),
            f[b.scrollbarYActive ? "add": "remove"](a, "ps-active-y")
        }
    },
    {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20 : [function(a, b, c) {
        "use strict";
        var d, e, f = a("./instances"),
        g = document.createEvent("Event"),
        h = document.createEvent("Event"),
        i = document.createEvent("Event"),
        j = document.createEvent("Event"),
        k = document.createEvent("Event"),
        l = document.createEvent("Event"),
        m = document.createEvent("Event"),
        n = document.createEvent("Event"),
        o = document.createEvent("Event"),
        p = document.createEvent("Event");
        g.initEvent("ps-scroll-up", !0, !0),
        h.initEvent("ps-scroll-down", !0, !0),
        i.initEvent("ps-scroll-left", !0, !0),
        j.initEvent("ps-scroll-right", !0, !0),
        k.initEvent("ps-scroll-y", !0, !0),
        l.initEvent("ps-scroll-x", !0, !0),
        m.initEvent("ps-x-reach-start", !0, !0),
        n.initEvent("ps-x-reach-end", !0, !0),
        o.initEvent("ps-y-reach-start", !0, !0),
        p.initEvent("ps-y-reach-end", !0, !0),
        b.exports = function(a, b, c) {
            if ("undefined" == typeof a) throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof b) throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof c) throw "You must provide a value to the update-scroll function";
            if ("top" === b && 0 >= c) return a.scrollTop = 0,
            void a.dispatchEvent(o);
            if ("left" === b && 0 >= c) return a.scrollLeft = 0,
            void a.dispatchEvent(m);
            var q = f.get(a);
            return "top" === b && c > q.contentHeight - q.containerHeight ? (a.scrollTop = q.contentHeight - q.containerHeight, void a.dispatchEvent(p)) : "left" === b && c > q.contentWidth - q.containerWidth ? (a.scrollLeft = q.contentWidth - q.containerWidth, void a.dispatchEvent(n)) : (d || (d = a.scrollTop), e || (e = a.scrollLeft), "top" === b && d > c && a.dispatchEvent(g), "top" === b && c > d && a.dispatchEvent(h), "left" === b && e > c && a.dispatchEvent(i), "left" === b && c > e && a.dispatchEvent(j), "top" === b && (a.scrollTop = d = c, a.dispatchEvent(k)), void("left" === b && (a.scrollLeft = e = c, a.dispatchEvent(l))))
        }
    },
    {
        "./instances": 18
    }],
    21 : [function(a, b, c) {
        "use strict";
        var d = a("../lib/dom"),
        e = a("../lib/helper"),
        f = a("./instances"),
        g = a("./update-geometry");
        b.exports = function(a) {
            var b = f.get(a);
            b && (b.negativeScrollAdjustment = b.isNegativeScroll ? a.scrollWidth - a.clientWidth: 0, d.css(b.scrollbarXRail, "display", "block"), d.css(b.scrollbarYRail, "display", "block"), b.railXMarginWidth = e.toInt(d.css(b.scrollbarXRail, "marginLeft")) + e.toInt(d.css(b.scrollbarXRail, "marginRight")), b.railYMarginHeight = e.toInt(d.css(b.scrollbarYRail, "marginTop")) + e.toInt(d.css(b.scrollbarYRail, "marginBottom")), d.css(b.scrollbarXRail, "display", "none"), d.css(b.scrollbarYRail, "display", "none"), g(a), d.css(b.scrollbarXRail, "display", ""), d.css(b.scrollbarYRail, "display", ""))
        }
    },
    {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19
    }]
},
{},
[1]); 
(function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "desktop-chatroom-messages-group";
    var i = "desktop-chatroom-message-right";
    var j = "desktop-chatroom-message-left";
    var k = "今天";
    var l = "昨天";
    var m = "hh:mm A";
    var n = "M[月] D[日]";
    var o = "YYYY[年] M[月] D[日]";
    var p = function() {};
    p.prototype = new e;
    p.prototype.constructor = p;
    p.fn = p.prototype;
    p.fn.initialize = function() {
        g.initialize(this.$displayArea[0], {
            suppressScrollX: true
        });
        g.update(this.$displayArea[0])
    };
    p.fn.getTemplateConfigs = function() {
        return {
            messageGroup: h,
            messageRight: i,
            messageLeft: j
        }
    };
    e.fn.beforeGroup = function(a, b) {
        var c = this;
        var d;
        var e = [];
        var g = 0;
        var h;
        var i;
        var j;
        var k;
        if (a && a.messages.length > 0) {
            i = c.getGroupTimeString(a.messages[0].sentAt);
            j = a
        } else {
            k = b[b.length - 1];
            i = c.getGroupTimeString(k.sentAt);
            j = new f(i, [])
        }
        e.splice(0, 0, j);
        for (g = b.length - 1; g >= 0; g--) {
            h = b[g];
            d = c.getGroupTimeString(h.sentAt);
            if (d === i) {
                j.messages.splice(0, 0, h)
            } else {
                j.time = i;
                i = d;
                j = new f(i, [h]);
                e.splice(0, 0, j)
            }
        }
        return e
    };
    p.fn.getGroupTimeString = function(a) {
        var b;
        var e = c(a);
        if (d.checkIsToday(a)) {
            b = k
        } else if (d.checkIsYesterday(a)) {
            b = l
        } else if (d.checkThisYear(a)) {
            b = e.format(n)
        } else {
            b = e.format(o)
        }
        return b
    };
    p.fn.getMessageTimeString = function(a) {
        return c(a).format(m)
    };
    a.ChatRoomDesktopDisplayArea = p
})(window, jQuery, moment, window.ChatRoomUtils, window.ChatRoomDisplayArea, window.MessageGroup, window.Ps); 
(function(a, b) {
    "use strict";
    var c = navigator.platform === "iPhone";
    var d = function() {};
    d.fn = d.prototype;
    d.$inputbox = null;
    d.$textarea = null;
    d.isEditing = false;
    d.fn.init = function(a, d) {
        var e = this;
        var f;
        e.$inputbox = b(".chatroom-inputbox");
        e.$textarea = b(".chatroom-inputbox .auto-expand-textarea");
        f = e.$textarea;
        f.keyup(function(c) {
            var d = b(this)[0];
            var e = d.value;
            if (c.which === 13 && e.length >= 1) {
                a(e);
                d.value = "";
                b(this).keyup()
            }
        });
        f.keydown(function(a) {
            if (a.which === 13) {
                return false
            }
        });
        f.focus(function() {
            if (c) {
                b(".js-ios-keyboard-gap-fixer").addClass("chatroom-inputbox-ios")
            }
            e.isEditing = true;
            d()
        });
        f.blur(function() {
            if (c) {
                b(".js-ios-keyboard-gap-fixer").removeClass("chatroom-inputbox-ios")
            }
            e.isEditing = false
        })
    };
    d.fn.quitWrite = function() {
        if (this.isEditing) {
            b(".auto-expand-textarea").blur()
        }
    };
    a.ChatRoomInputBox = d
})(window, jQuery); 
(function(a, b, c) {
    "use strict";
    var d = ".chatroom-display-area";
    var e = "#chatroom-messages-group-header-float";
    var f = ".chatroom-display-area .chatroom-messages-group-header";
    var g = ".chatroom-messages-group-time";
    var h = "desktop-chatroom-messages-group-header";
    var i = function() {};
    i.fn = i.prototype;
    i.fn.init = function() {
        b(d).on("scroll", this.float.bind(this))
    };
    i.fn.getElementsAboveClient = function() {
        var a = [];
        b(f).each(function() {
            var d = c.checkElementOverflowUp(b(this));
            if (!d) {
                return false
            }
            a.push(b(this))
        });
        return a
    };
    i.fn.getFirstVisibleElement = function() {
        var a = [];
        b(f).each(function() {
            var d = c.checkElementOverflowVisible(b(this));
            if (d) {
                a.push(b(this));
                return false
            }
        });
        return a
    };
    i.fn.float = function() {
        var a = this.getElementsAboveClient();
        var c;
        var f;
        var i = b(e);
        var j;
        var k;
        var l;
        var m;
        var n;
        var o;
        if (a.length <= 0) {
            if (i.length > 0) {
                i.addClass("chatroom-hide")
            }
        } else {
            c = a[a.length - 1];
            f = c.find(g);
            j = template(h, {
                time: f.html()
            });
            if (i.length > 0) {
                i.removeClass("chatroom-hide");
                i.html(j);
                k = this.getFirstVisibleElement();
                if (k.length > 0) {
                    l = k[0];
                    m = l[0].getBoundingClientRect().top;
                    n = i[0].getBoundingClientRect().top;
                    o = m - n;
                    if (o <= i.height() && o > 0) {
                        i.removeClass("chatroom-z100")
                    } else {
                        i.addClass("chatroom-z100")
                    }
                } else {
                    i.addClass("chatroom-z100")
                }
            } else {
                j = '<div id="chatroom-messages-group-header-float">' + j + "</div>";
                b(d).before(j);
                i = b(e);
                i.addClass("chatroom-z100")
            }
        }
    };
    a.ChatRoomScrollFloater = i
})(window, jQuery, window.ChatRoomUtils); 
(function(a, b) {
    "use strict";
    var c = ".chatroom-indicator-container";
    var d = "desktop-chatroom-indicator";
    var e = function() {
        this.state = e.State.NONE
    };
    e.fn = e.prototype;
    e.State = {
        NONE: "NONE",
        TO_CREATE: "TO_CREATE",
        TO_LOG_IN: "TO_LOG_IN",
        LOGGED_IN: "LOGGED_IN",
        LOADING: "LOADING",
        ERROR: "ERROR"
    };
    e.fn.delegate = null;
    e.fn.switchState = function(a, f) {
        var g;
        var h;
        var i;
        var j;
        if (this.state === a) {
            return
        }
        switch (a) {
        case e.State.LOADING:
            i = new e.DelegateLoading(f);
            break;
        case e.State.TO_LOG_IN:
            i = new e.DelegateToLogin(f);
            break;
        case e.State.LOGGED_IN:
            i = new e.DelegateToChat(f);
            break;
        case e.State.ERROR:
            i = new e.DelegateError(f);
            break;
        default:
            break
        }
        g = i.getTemplateData();
        h = template(d, g);
        b(".container").append(h);
        j = b(c);
        j.on("click", i.handleClick.bind(i))
    };
    a.ChatRoomIndicator = e
})(window, jQuery); 
(function(a) {
    "use strict";
    var b = function(a) {
        var b = function() {};
        if (!a) {
            a = {
                onclick: b,
                onFirstClick: b
            }
        }
        a.onclick = a.onclick ? a.onclick: b;
        a.onFirstClick = a.onFirstClick ? a.onFirstClick: b;
        this.configs = a;
        this.clicked = false
    };
    b.fn = b.prototype;
    b.fn.getTemplateData = function() {
        console.error("ChatRoomIndicator.DelegateBase: It is only an interface, should realize it in a subclass")
    };
    b.fn.handleClick = function() {
        console.log("Base handle click!!!");
        if (this.clicked) {
            this.configs.onclick()
        } else {
            this.clicked = true;
            this.configs.onFirstClick()
        }
    };
    a.DelegateBase = b
})(window.ChatRoomIndicator); 
(function(a, b, c) {
    "use strict";
    var d = function(a) {
        c.call(this, a)
    };
    d.prototype = new c;
    d.prototype.constructor = d;
    d.fn = d.prototype;
    d.fn.getTemplateData = function() {
        var a = {
            show: false,
            showHint: true,
            showMessages: false,
            hint: "加载中..."
        };
        return a
    };
    d.fn.handleClick = function() {
        c.prototype.handleClick.call(this)
    };
    a.DelegateLoading = d
})(window.ChatRoomIndicator, jQuery, window.ChatRoomIndicator.DelegateBase); 
(function(a, b, c) {
    "use strict";
    var d = function(a) {
        c.call(this, a)
    };
    d.prototype = new c;
    d.prototype.constructor = d;
    d.fn = d.prototype;
    d.fn.getTemplateData = function() {
        var a = {
            show: false,
            showHint: true,
            showMessages: false,
            hint: "点击创建"
        };
        return a
    };
    d.fn.handleClick = function() {
        c.prototype.handleClick.call(this)
    };
    a.DelegateCreate = d
})(window.ChatRoomIndicator, jQuery, window.ChatRoomIndicator.DelegateBase); 
(function(a, b, c, d) {
    "use strict";
    var e = ".chatroom-indicator-hint";
    var f = function(a) {
        c.call(this, a)
    };
    f.prototype = new c;
    f.prototype.constructor = f;
    f.fn = f.prototype;
    f.fn.getTemplateData = function() {
        return {
            show: false,
            showHint: true,
            showMessages: false,
            hint: "点击登录加入"
        }
    };
    f.fn.handleClick = function() {
        if (!this.clicked) {
            b(e).html("正在跳转登录...");
            this.configs.onclick();
            this.clicked = true;
            this.jumpToLogin()
        }
        c.prototype.handleClick.call(this)
    };
    f.fn.jumpToLogin = function() {
        var a = new d(window.location.href);
        var b = ns.SSO_URL_LOGIN + "?next=" + a.protocolHostPath;
        window.location = b
    };
    a.DelegateToLogin = f
})(window.ChatRoomIndicator, jQuery, window.ChatRoomIndicator.DelegateBase, window.UriParser); 
(function(a, b, c) {
    "use strict";
    var d = "chatroom-hide";
    var e = ".chatroom-indicator-container";
    var f = function(a) {
        c.call(this, a)
    };
    f.prototype = new c;
    f.prototype.constructor = f;
    f.fn = f.prototype;
    f.fn.getTemplateData = function() {
        return {
            show: false,
            showHint: true,
            showMessages: false,
            hint: "点击加入"
        }
    };
    f.fn.handleClick = function() {
        this.togglePanel(true);
        c.prototype.handleClick.call(this)
    };
    f.fn.togglePanel = function(a) {
        var c = this;
        var e = b(".chatroom-panel");
        var f;
        this.isPanelOpen = a;
        this.toggleIndicator(!a);
        if (e.length > 0) {
            if (a) {
                e.removeClass(d)
            } else {
                e.addClass(d)
            }
        } else if (a) {
            f = template("desktop-chatroom-panel", {
                title: ns.postTitle
            });
            b(".container").append(f);
            this.$closeBtn = b(".js-chatroom-close-panel-btn");
            this.$closeBtn.addClass(d);
            this.$closeBtn.on("click",
            function() {
                c.togglePanel(false)
            });
            b(".chatroom-panel").on({
                mouseenter: function() {
                    c.$closeBtn.addClass("animation-pop-up");
                    c.$closeBtn.removeClass(d)
                },
                mouseleave: function() {
                    c.$closeBtn.removeClass("animation-pop-up");
                    c.$closeBtn.addClass(d)
                }
            })
        }
    };
    f.fn.toggleIndicator = function(a) {
        if (a) {
            b(e).removeClass(d)
        } else {
            b(e).addClass(d)
        }
    };
    f.fn.handleHtmlClick = function(a) {
        var c = this;
        var d = b(a.target);
        if (d.hasClass("chatroom-indicator-container") || d.fathers(".chatroom-indicator-container").length > 0 || d.hasClass("chatroom-panel") || d.fathers(".chatroom-panel").length > 0 || d.hasClass("js-resend")) {
            return
        }
        c.togglePanel(false)
    };
    a.DelegateToChat = f
})(window.ChatRoomIndicator, jQuery, window.ChatRoomIndicator.DelegateBase); 
(function(a, b, c) {
    "use strict";
    var d = function(a) {
        c.call(this, a)
    };
    d.prototype = new c;
    d.prototype.constructor = d;
    d.fn = d.prototype;
    d.fn.getTemplateData = function() {
        return {
            show: false,
            showHint: true,
            showMessages: false,
            hint: "系统失手啦！"
        }
    };
    d.fn.handleClick = function() {
        c.prototype.handleClick.call(this)
    }
})(window.ChatRoomIndicator, jQuery, window.ChatRoomIndicator.DelegateBase); 
(function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    var n = function() {};
    n.prototype = new e;
    n.prototype.constructor = n;
    n.fn = n.prototype;
    n.fn.indicator = null;
    n.fn.loadmore = null;
    n.fn.scrollFloater = null;
    n.fn.awake = function() {
        this.indicator = new g;
        this.indicator.switchState(g.State.LOADING)
    };
    n.fn.init = function(a) {
        var b = this;
        var c = {
            onFirstClick: b.lateInit.bind(b)
        };
        b.messages = [];
        b.indicator = new g;
        b.indicator.switchState(g.State.LOGGED_IN, c);
        b.userInfo = a
    };
    n.fn.lateInit = function() {
        var a = this;
        a.notification = new k;
        a.notification.init();
        a.inputBox = new l;
        a.inputBox.init(a.submitMessage.bind(a), a.writeMessage.bind(a));
        a.displayArea = new f;
        a.displayArea.init(a.messages, a.userInfo, a.resendMessage.bind(a));
        a.loadmore = new h;
        a.loadmore.init(a.LoadMoreHistory.bind(a));
        a.scrollFloater = new i;
        a.scrollFloater.init();
        a.initChatRoom()
    };
    n.fn.onDisplayMessages = function(a) {};
    n.fn.showErrorMessage = function() {
        this.indicator.switchState(g.State.Error)
    };
    n.fn.initForLogin = function() {
        var a = this;
        a.indicator = new g;
        a.indicator.switchState(g.State.TO_LOG_IN);
        a.initChatRoomForDisplay(a.onDisplayMessages.bind(a))
    };
    n.fn.initForCreate = function(a) {
        var b = this;
        var c = {
            onclick: b.initChatRoomForCreate.bind(b)
        };
        b.indicator = new g;
        b.indicator.switchState(g.State.TO_CREATE, c);
        b.userInfo = a
    };
    n.fn.initChatRoomForCreate = function() {
        var a = this;
        var b = {
            appId: m.APP_ID,
            user: a.userInfo
        };
        d.initialize(b).on(d.Event.OPEN, a.createChatRoom.bind(a))
    };
    n.fn.createChatRoom = function() {
        var a = this;
        var b = {
            memberIds: [],
            name: a.postInfo.title,
            topic: a.postInfo.id
        };
        console.log("begin to create", b);
        d.createChatRoom(b).then(function() {
            console.log("create success");
            location.reload(true)
        }).
        catch(function(b) {
            console.error("create error ", b);
            a.indicator.switchState(g.State.ERROR)
        })
    };
    n.fn.clear = function() {
        var a = b(".chatroom-indicator-container");
        var c = b(".chatroom-panel");
        if (a.length > 0) {
            a.remove()
        }
        if (c.length > 0) {
            c.remove()
        }
    };
    a.ChatRoomDesktopMain = n
})(window, jQuery, RSVP, RealTime, window.ChatRoomMain, window.ChatRoomDesktopDisplayArea, window.ChatRoomIndicator, window.ChatRoomLoadMore, window.ChatRoomScrollFloater, window.ChatRoomUser, window.ChatRoomNotification, window.ChatRoomInputBox, window.ChatRoomUtils); 
(function(a, b, c) {
    "use strict";
    var d;
    if (ns.chatroomId) {
        d = new b;
        d.awake();
        IFR.Events.on("ifr.ssouser.initialized",
        function(a) {
            var b = new c;
            b.loadUserToken(a).then(function(a) {
                d.clear();
                d.init(a)
            }).
            catch(function() {
                d.showErrorMessage()
            })
        });
        IFR.Events.on("ifr.ssouser.unauthorized",
        function() {
            d.clear();
            d.initForLogin()
        })
    }
})(window, window.ChatRoomDesktopMain, window.ChatRoomUser);
//# sourceMappingURL=desktop-min-1456211879518.js.map
