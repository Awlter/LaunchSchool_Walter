(function() {
    function a(a, b, c) {
        for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e; )
            if (a[d] === b)
                return d;
        return -1
    }
    function b(b, c) {
        var d = typeof c;
        if (b = b.cache,
        "boolean" == d || null == c)
            return b[c] ? 0 : -1;
        "number" != d && "string" != d && (d = "object");
        var e = "number" == d ? c : r + c;
        return b = (b = b[d]) && b[e],
        "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
    }
    function c(a) {
        var b = this.cache
          , c = typeof a;
        if ("boolean" == c || null == a)
            b[a] = !0;
        else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a : r + a
              , e = b[c] || (b[c] = {});
            "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
        }
    }
    function d(a) {
        return a.charCodeAt(0)
    }
    function e(a, b) {
        for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f; ) {
            var g = c[e]
              , h = d[e];
            if (g !== h) {
                if (g > h || "undefined" == typeof g)
                    return 1;
                if (h > g || "undefined" == typeof h)
                    return -1
            }
        }
        return a.index - b.index
    }
    function f(a) {
        var b = -1
          , d = a.length
          , e = a[0]
          , f = a[d / 2 | 0]
          , g = a[d - 1];
        if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g)
            return !1;
        var h = i();
        h["false"] = h["null"] = h["true"] = h.undefined = !1;
        var j = i();
        for (j.array = a,
        j.cache = h,
        j.push = c; ++b < d; )
            j.push(a[b]);
        return j
    }
    function g(a) {
        return "\\" + V[a]
    }
    function h() {
        return o.pop() || []
    }
    function i() {
        return p.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            value: null
        }
    }
    function j(a) {
        a.length = 0,
        o.length < t && o.push(a)
    }
    function k(a) {
        var b = a.cache;
        b && k(b),
        a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null,
        p.length < t && p.push(a)
    }
    function l(a, b, c) {
        b || (b = 0),
        "undefined" == typeof c && (c = a ? a.length : 0);
        for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e; )
            f[d] = a[b + d];
        return f
    }
    function m(c) {
        function o(a) {
            return a && "object" == typeof a && !Zd(a) && Hd.call(a, "__wrapped__") ? a : new p(a)
        }
        function p(a, b) {
            this.__chain__ = !!b,
            this.__wrapped__ = a
        }
        function t(a) {
            function b() {
                if (d) {
                    var a = l(d);
                    Id.apply(a, arguments)
                }
                if (this instanceof b) {
                    var f = X(c.prototype)
                      , g = c.apply(f, a || arguments);
                    return Eb(g) ? g : f
                }
                return c.apply(e, a || arguments)
            }
            var c = a[0]
              , d = a[2]
              , e = a[4];
            return Yd(b, a),
            b
        }
        function V(a, b, c, d, e) {
            if (c) {
                var f = c(a);
                if ("undefined" != typeof f)
                    return f
            }
            var g = Eb(a);
            if (!g)
                return a;
            var i = Ad.call(a);
            if (!R[i])
                return a;
            var k = Wd[i];
            switch (i) {
            case K:
            case L:
                return new k(+a);
            case N:
            case Q:
                return new k(a);
            case P:
                return f = k(a.source, z.exec(a)),
                f.lastIndex = a.lastIndex,
                f
            }
            var m = Zd(a);
            if (b) {
                var n = !d;
                d || (d = h()),
                e || (e = h());
                for (var o = d.length; o--; )
                    if (d[o] == a)
                        return e[o];
                f = m ? k(a.length) : {}
            } else
                f = m ? l(a) : ee({}, a);
            return m && (Hd.call(a, "index") && (f.index = a.index),
            Hd.call(a, "input") && (f.input = a.input)),
            b ? (d.push(a),
            e.push(f),
            (m ? Yb : he)(a, function(a, g) {
                f[g] = V(a, b, c, d, e)
            }),
            n && (j(d),
            j(e)),
            f) : f
        }
        function X(a) {
            return Eb(a) ? Nd(a) : {}
        }
        function Y(a, b, c) {
            if ("function" != typeof a)
                return Zc;
            if ("undefined" == typeof b || !("prototype"in a))
                return a;
            var d = a.__bindData__;
            if ("undefined" == typeof d && (Xd.funcNames && (d = !a.name),
            d = d || !Xd.funcDecomp,
            !d)) {
                var e = Fd.call(a);
                Xd.funcNames || (d = !A.test(e)),
                d || (d = E.test(e),
                Yd(a, d))
            }
            if (d === !1 || d !== !0 && 1 & d[1])
                return a;
            switch (c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                }
                ;
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                }
                ;
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                }
                ;
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
            }
            return Ic(a, b)
        }
        function Z(a) {
            function b() {
                var a = i ? g : this;
                if (e) {
                    var o = l(e);
                    Id.apply(o, arguments)
                }
                if ((f || k) && (o || (o = l(arguments)),
                f && Id.apply(o, f),
                k && o.length < h))
                    return d |= 16,
                    Z([c, m ? d : -4 & d, o, null, g, h]);
                if (o || (o = arguments),
                j && (c = a[n]),
                this instanceof b) {
                    a = X(c.prototype);
                    var p = c.apply(a, o);
                    return Eb(p) ? p : a
                }
                return c.apply(a, o)
            }
            var c = a[0]
              , d = a[1]
              , e = a[2]
              , f = a[3]
              , g = a[4]
              , h = a[5]
              , i = 1 & d
              , j = 2 & d
              , k = 4 & d
              , m = 8 & d
              , n = c;
            return Yd(b, a),
            b
        }
        function $(c, d) {
            var e = -1
              , g = ib()
              , h = c ? c.length : 0
              , i = h >= s && g === a
              , j = [];
            if (i) {
                var l = f(d);
                l ? (g = b,
                d = l) : i = !1
            }
            for (; ++e < h; ) {
                var m = c[e];
                g(d, m) < 0 && j.push(m)
            }
            return i && k(d),
            j
        }
        function ab(a, b, c, d) {
            for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f; ) {
                var h = a[e];
                if (h && "object" == typeof h && "number" == typeof h.length && (Zd(h) || mb(h))) {
                    b || (h = ab(h, b, c));
                    var i = -1
                      , j = h.length
                      , k = g.length;
                    for (g.length += j; ++i < j; )
                        g[k++] = h[i]
                } else
                    c || g.push(h)
            }
            return g
        }
        function bb(a, b, c, d, e, f) {
            if (c) {
                var g = c(a, b);
                if ("undefined" != typeof g)
                    return !!g
            }
            if (a === b)
                return 0 !== a || 1 / a == 1 / b;
            var i = typeof a
              , k = typeof b;
            if (!(a !== a || a && U[i] || b && U[k]))
                return !1;
            if (null == a || null == b)
                return a === b;
            var l = Ad.call(a)
              , m = Ad.call(b);
            if (l == I && (l = O),
            m == I && (m = O),
            l != m)
                return !1;
            switch (l) {
            case K:
            case L:
                return +a == +b;
            case N:
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case P:
            case Q:
                return a == vd(b)
            }
            var n = l == J;
            if (!n) {
                var o = Hd.call(a, "__wrapped__")
                  , p = Hd.call(b, "__wrapped__");
                if (o || p)
                    return bb(o ? a.__wrapped__ : a, p ? b.__wrapped__ : b, c, d, e, f);
                if (l != O)
                    return !1;
                var q = a.constructor
                  , r = b.constructor;
                if (q != r && !(Db(q) && q instanceof q && Db(r) && r instanceof r) && "constructor"in a && "constructor"in b)
                    return !1
            }
            var s = !e;
            e || (e = h()),
            f || (f = h());
            for (var t = e.length; t--; )
                if (e[t] == a)
                    return f[t] == b;
            var u = 0;
            if (g = !0,
            e.push(a),
            f.push(b),
            n) {
                if (t = a.length,
                u = b.length,
                g = u == t,
                g || d)
                    for (; u--; ) {
                        var v = t
                          , w = b[u];
                        if (d)
                            for (; v-- && !(g = bb(a[v], w, c, d, e, f)); )
                                ;
                        else if (!(g = bb(a[u], w, c, d, e, f)))
                            break
                    }
            } else
                ge(b, function(b, h, i) {
                    return Hd.call(i, h) ? (u++,
                    g = Hd.call(a, h) && bb(a[h], b, c, d, e, f)) : void 0
                }),
                g && !d && ge(a, function(a, b, c) {
                    return Hd.call(c, b) ? g = --u > -1 : void 0
                });
            return e.pop(),
            f.pop(),
            s && (j(e),
            j(f)),
            g
        }
        function cb(a, b, c, d, e) {
            (Zd(b) ? Yb : he)(b, function(b, f) {
                var g, h, i = b, j = a[f];
                if (b && ((h = Zd(b)) || ie(b))) {
                    for (var k = d.length; k--; )
                        if (g = d[k] == b) {
                            j = e[k];
                            break
                        }
                    if (!g) {
                        var l;
                        c && (i = c(j, b),
                        (l = "undefined" != typeof i) && (j = i)),
                        l || (j = h ? Zd(j) ? j : [] : ie(j) ? j : {}),
                        d.push(b),
                        e.push(j),
                        l || cb(j, b, c, d, e)
                    }
                } else
                    c && (i = c(j, b),
                    "undefined" == typeof i && (i = b)),
                    "undefined" != typeof i && (j = i);
                a[f] = j
            })
        }
        function db(a, b) {
            return a + Ed(Vd() * (b - a + 1))
        }
        function eb(c, d, e) {
            var g = -1
              , i = ib()
              , l = c ? c.length : 0
              , m = []
              , n = !d && l >= s && i === a
              , o = e || n ? h() : m;
            if (n) {
                var p = f(o);
                i = b,
                o = p
            }
            for (; ++g < l; ) {
                var q = c[g]
                  , r = e ? e(q, g, c) : q;
                (d ? !g || o[o.length - 1] !== r : i(o, r) < 0) && ((e || n) && o.push(r),
                m.push(q))
            }
            return n ? (j(o.array),
            k(o)) : e && j(o),
            m
        }
        function fb(a) {
            return function(b, c, d) {
                var e = {};
                c = o.createCallback(c, d, 3);
                var f = -1
                  , g = b ? b.length : 0;
                if ("number" == typeof g)
                    for (; ++f < g; ) {
                        var h = b[f];
                        a(e, h, c(h, f, b), b)
                    }
                else
                    he(b, function(b, d, f) {
                        a(e, b, c(b, d, f), f)
                    });
                return e
            }
        }
        function gb(a, b, c, d, e, f) {
            var g = 1 & b
              , h = 2 & b
              , i = 4 & b
              , j = 16 & b
              , k = 32 & b;
            if (!h && !Db(a))
                throw new wd;
            j && !c.length && (b &= -17,
            j = c = !1),
            k && !d.length && (b &= -33,
            k = d = !1);
            var m = a && a.__bindData__;
            if (m && m !== !0)
                return m = l(m),
                m[2] && (m[2] = l(m[2])),
                m[3] && (m[3] = l(m[3])),
                !g || 1 & m[1] || (m[4] = e),
                !g && 1 & m[1] && (b |= 8),
                !i || 4 & m[1] || (m[5] = f),
                j && Id.apply(m[2] || (m[2] = []), c),
                k && Ld.apply(m[3] || (m[3] = []), d),
                m[1] |= b,
                gb.apply(null, m);
            var n = 1 == b || 17 === b ? t : Z;
            return n([a, b, c, d, e, f])
        }
        function hb(a) {
            return ae[a]
        }
        function ib() {
            var b = (b = o.indexOf) === rc ? a : b;
            return b
        }
        function jb(a) {
            return "function" == typeof a && Bd.test(a)
        }
        function kb(a) {
            var b, c;
            return a && Ad.call(a) == O && (b = a.constructor,
            !Db(b) || b instanceof b) ? (ge(a, function(a, b) {
                c = b
            }),
            "undefined" == typeof c || Hd.call(a, c)) : !1
        }
        function lb(a) {
            return be[a]
        }
        function mb(a) {
            return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == I || !1
        }
        function nb(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c,
            c = b,
            b = !1),
            V(a, b, "function" == typeof c && Y(c, d, 1))
        }
        function ob(a, b, c) {
            return V(a, !0, "function" == typeof b && Y(b, c, 1))
        }
        function pb(a, b) {
            var c = X(a);
            return b ? ee(c, b) : c
        }
        function qb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3),
            he(a, function(a, c, e) {
                return b(a, c, e) ? (d = c,
                !1) : void 0
            }),
            d
        }
        function rb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3),
            tb(a, function(a, c, e) {
                return b(a, c, e) ? (d = c,
                !1) : void 0
            }),
            d
        }
        function sb(a, b, c) {
            var d = [];
            ge(a, function(a, b) {
                d.push(b, a)
            });
            var e = d.length;
            for (b = Y(b, c, 3); e-- && b(d[e--], d[e], a) !== !1; )
                ;
            return a
        }
        function tb(a, b, c) {
            var d = _d(a)
              , e = d.length;
            for (b = Y(b, c, 3); e--; ) {
                var f = d[e];
                if (b(a[f], f, a) === !1)
                    break
            }
            return a
        }
        function ub(a) {
            var b = [];
            return ge(a, function(a, c) {
                Db(a) && b.push(c)
            }),
            b.sort()
        }
        function vb(a, b) {
            return a ? Hd.call(a, b) : !1
        }
        function wb(a) {
            for (var b = -1, c = _d(a), d = c.length, e = {}; ++b < d; ) {
                var f = c[b];
                e[a[f]] = f
            }
            return e
        }
        function xb(a) {
            return a === !0 || a === !1 || a && "object" == typeof a && Ad.call(a) == K || !1
        }
        function yb(a) {
            return a && "object" == typeof a && Ad.call(a) == L || !1
        }
        function zb(a) {
            return a && 1 === a.nodeType || !1
        }
        function Ab(a) {
            var b = !0;
            if (!a)
                return b;
            var c = Ad.call(a)
              , d = a.length;
            return c == J || c == Q || c == I || c == O && "number" == typeof d && Db(a.splice) ? !d : (he(a, function() {
                return b = !1
            }),
            b)
        }
        function Bb(a, b, c, d) {
            return bb(a, b, "function" == typeof c && Y(c, d, 2))
        }
        function Cb(a) {
            return Pd(a) && !Qd(parseFloat(a))
        }
        function Db(a) {
            return "function" == typeof a
        }
        function Eb(a) {
            return !(!a || !U[typeof a])
        }
        function Fb(a) {
            return Hb(a) && a != +a
        }
        function Gb(a) {
            return null === a
        }
        function Hb(a) {
            return "number" == typeof a || a && "object" == typeof a && Ad.call(a) == N || !1
        }
        function Ib(a) {
            return a && "object" == typeof a && Ad.call(a) == P || !1
        }
        function Jb(a) {
            return "string" == typeof a || a && "object" == typeof a && Ad.call(a) == Q || !1
        }
        function Kb(a) {
            return "undefined" == typeof a
        }
        function Lb(a, b, c) {
            var d = {};
            return b = o.createCallback(b, c, 3),
            he(a, function(a, c, e) {
                d[c] = b(a, c, e)
            }),
            d
        }
        function Mb(a) {
            var b = arguments
              , c = 2;
            if (!Eb(a))
                return a;
            if ("number" != typeof b[2] && (c = b.length),
            c > 3 && "function" == typeof b[c - 2])
                var d = Y(b[--c - 1], b[c--], 2);
            else
                c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
            for (var e = l(arguments, 1, c), f = -1, g = h(), i = h(); ++f < c; )
                cb(a, e[f], d, g, i);
            return j(g),
            j(i),
            a
        }
        function Nb(a, b, c) {
            var d = {};
            if ("function" != typeof b) {
                var e = [];
                ge(a, function(a, b) {
                    e.push(b)
                }),
                e = $(e, ab(arguments, !0, !1, 1));
                for (var f = -1, g = e.length; ++f < g; ) {
                    var h = e[f];
                    d[h] = a[h]
                }
            } else
                b = o.createCallback(b, c, 3),
                ge(a, function(a, c, e) {
                    b(a, c, e) || (d[c] = a)
                });
            return d
        }
        function Ob(a) {
            for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d; ) {
                var f = c[b];
                e[b] = [f, a[f]]
            }
            return e
        }
        function Pb(a, b, c) {
            var d = {};
            if ("function" != typeof b)
                for (var e = -1, f = ab(arguments, !0, !1, 1), g = Eb(a) ? f.length : 0; ++e < g; ) {
                    var h = f[e];
                    h in a && (d[h] = a[h])
                }
            else
                b = o.createCallback(b, c, 3),
                ge(a, function(a, c, e) {
                    b(a, c, e) && (d[c] = a)
                });
            return d
        }
        function Qb(a, b, c, d) {
            var e = Zd(a);
            if (null == c)
                if (e)
                    c = [];
                else {
                    var f = a && a.constructor
                      , g = f && f.prototype;
                    c = X(g)
                }
            return b && (b = o.createCallback(b, d, 4),
            (e ? Yb : he)(a, function(a, d, e) {
                return b(c, a, d, e)
            })),
            c
        }
        function Rb(a) {
            for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d; )
                e[b] = a[c[b]];
            return e
        }
        function Sb(a) {
            for (var b = arguments, c = -1, d = ab(b, !0, !1, 1), e = b[2] && b[2][b[1]] === a ? 1 : d.length, f = nd(e); ++c < e; )
                f[c] = a[d[c]];
            return f
        }
        function Tb(a, b, c) {
            var d = -1
              , e = ib()
              , f = a ? a.length : 0
              , g = !1;
            return c = (0 > c ? Sd(0, f + c) : c) || 0,
            Zd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Jb(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : he(a, function(a) {
                return ++d >= c ? !(g = a === b) : void 0
            }),
            g
        }
        function Ub(a, b, c) {
            var d = !0;
            b = o.createCallback(b, c, 3);
            var e = -1
              , f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f && (d = !!b(a[e], e, a)); )
                    ;
            else
                he(a, function(a, c, e) {
                    return d = !!b(a, c, e)
                });
            return d
        }
        function Vb(a, b, c) {
            var d = [];
            b = o.createCallback(b, c, 3);
            var e = -1
              , f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f; ) {
                    var g = a[e];
                    b(g, e, a) && d.push(g)
                }
            else
                he(a, function(a, c, e) {
                    b(a, c, e) && d.push(a)
                });
            return d
        }
        function Wb(a, b, c) {
            b = o.createCallback(b, c, 3);
            var d = -1
              , e = a ? a.length : 0;
            if ("number" != typeof e) {
                var f;
                return he(a, function(a, c, d) {
                    return b(a, c, d) ? (f = a,
                    !1) : void 0
                }),
                f
            }
            for (; ++d < e; ) {
                var g = a[d];
                if (b(g, d, a))
                    return g
            }
        }
        function Xb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3),
            Zb(a, function(a, c, e) {
                return b(a, c, e) ? (d = a,
                !1) : void 0
            }),
            d
        }
        function Yb(a, b, c) {
            var d = -1
              , e = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : Y(b, c, 3),
            "number" == typeof e)
                for (; ++d < e && b(a[d], d, a) !== !1; )
                    ;
            else
                he(a, b);
            return a
        }
        function Zb(a, b, c) {
            var d = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : Y(b, c, 3),
            "number" == typeof d)
                for (; d-- && b(a[d], d, a) !== !1; )
                    ;
            else {
                var e = _d(a);
                d = e.length,
                he(a, function(a, c, f) {
                    return c = e ? e[--d] : --d,
                    b(f[c], c, f)
                })
            }
            return a
        }
        function $b(a, b) {
            var c = l(arguments, 2)
              , d = -1
              , e = "function" == typeof b
              , f = a ? a.length : 0
              , g = nd("number" == typeof f ? f : 0);
            return Yb(a, function(a) {
                g[++d] = (e ? b : a[b]).apply(a, c)
            }),
            g
        }
        function _b(a, b, c) {
            var d = -1
              , e = a ? a.length : 0;
            if (b = o.createCallback(b, c, 3),
            "number" == typeof e)
                for (var f = nd(e); ++d < e; )
                    f[d] = b(a[d], d, a);
            else
                f = [],
                he(a, function(a, c, e) {
                    f[++d] = b(a, c, e)
                });
            return f
        }
        function ac(a, b, c) {
            var e = -1 / 0
              , f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null),
            null == b && Zd(a))
                for (var g = -1, h = a.length; ++g < h; ) {
                    var i = a[g];
                    i > f && (f = i)
                }
            else
                b = null == b && Jb(a) ? d : o.createCallback(b, c, 3),
                Yb(a, function(a, c, d) {
                    var g = b(a, c, d);
                    g > e && (e = g,
                    f = a)
                });
            return f
        }
        function bc(a, b, c) {
            var e = 1 / 0
              , f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null),
            null == b && Zd(a))
                for (var g = -1, h = a.length; ++g < h; ) {
                    var i = a[g];
                    f > i && (f = i)
                }
            else
                b = null == b && Jb(a) ? d : o.createCallback(b, c, 3),
                Yb(a, function(a, c, d) {
                    var g = b(a, c, d);
                    e > g && (e = g,
                    f = a)
                });
            return f
        }
        function cc(a, b, c, d) {
            if (!a)
                return c;
            var e = arguments.length < 3;
            b = o.createCallback(b, d, 4);
            var f = -1
              , g = a.length;
            if ("number" == typeof g)
                for (e && (c = a[++f]); ++f < g; )
                    c = b(c, a[f], f, a);
            else
                he(a, function(a, d, f) {
                    c = e ? (e = !1,
                    a) : b(c, a, d, f)
                });
            return c
        }
        function dc(a, b, c, d) {
            var e = arguments.length < 3;
            return b = o.createCallback(b, d, 4),
            Zb(a, function(a, d, f) {
                c = e ? (e = !1,
                a) : b(c, a, d, f)
            }),
            c
        }
        function ec(a, b, c) {
            return b = o.createCallback(b, c, 3),
            Vb(a, function(a, c, d) {
                return !b(a, c, d)
            })
        }
        function fc(a, b, c) {
            if (a && "number" != typeof a.length && (a = Rb(a)),
            null == b || c)
                return a ? a[db(0, a.length - 1)] : n;
            var d = gc(a);
            return d.length = Td(Sd(0, b), d.length),
            d
        }
        function gc(a) {
            var b = -1
              , c = a ? a.length : 0
              , d = nd("number" == typeof c ? c : 0);
            return Yb(a, function(a) {
                var c = db(0, ++b);
                d[b] = d[c],
                d[c] = a
            }),
            d
        }
        function hc(a) {
            var b = a ? a.length : 0;
            return "number" == typeof b ? b : _d(a).length
        }
        function ic(a, b, c) {
            var d;
            b = o.createCallback(b, c, 3);
            var e = -1
              , f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f && !(d = b(a[e], e, a)); )
                    ;
            else
                he(a, function(a, c, e) {
                    return !(d = b(a, c, e))
                });
            return !!d
        }
        function jc(a, b, c) {
            var d = -1
              , f = Zd(b)
              , g = a ? a.length : 0
              , l = nd("number" == typeof g ? g : 0);
            for (f || (b = o.createCallback(b, c, 3)),
            Yb(a, function(a, c, e) {
                var g = l[++d] = i();
                f ? g.criteria = _b(b, function(b) {
                    return a[b]
                }) : (g.criteria = h())[0] = b(a, c, e),
                g.index = d,
                g.value = a
            }),
            g = l.length,
            l.sort(e); g--; ) {
                var m = l[g];
                l[g] = m.value,
                f || j(m.criteria),
                k(m)
            }
            return l
        }
        function kc(a) {
            return a && "number" == typeof a.length ? l(a) : Rb(a)
        }
        function lc(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }
        function mc(a) {
            return $(a, ab(arguments, !0, !0, 1))
        }
        function nc(a, b, c) {
            var d = -1
              , e = a ? a.length : 0;
            for (b = o.createCallback(b, c, 3); ++d < e; )
                if (b(a[d], d, a))
                    return d;
            return -1
        }
        function oc(a, b, c) {
            var d = a ? a.length : 0;
            for (b = o.createCallback(b, c, 3); d--; )
                if (b(a[d], d, a))
                    return d;
            return -1
        }
        function pc(a, b, c) {
            var d = 0
              , e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = -1;
                for (b = o.createCallback(b, c, 3); ++f < e && b(a[f], f, a); )
                    d++
            } else if (d = b,
            null == d || c)
                return a ? a[0] : n;
            return l(a, 0, Td(Sd(0, d), e))
        }
        function qc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c,
            c = "function" != typeof b && d && d[b] === a ? null : b,
            b = !1),
            null != c && (a = _b(a, c, d)),
            ab(a, b)
        }
        function rc(b, c, d) {
            if ("number" == typeof d) {
                var e = b ? b.length : 0;
                d = 0 > d ? Sd(0, e + d) : d || 0
            } else if (d) {
                var f = Ac(b, c);
                return b[f] === c ? f : -1
            }
            return a(b, c, d)
        }
        function sc(a, b, c) {
            var d = 0
              , e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = o.createCallback(b, c, 3); f-- && b(a[f], f, a); )
                    d++
            } else
                d = null == b || c ? 1 : b || d;
            return l(a, 0, Td(Sd(0, e - d), e))
        }
        function tc() {
            for (var c = [], d = -1, e = arguments.length, g = h(), i = ib(), l = i === a, m = h(); ++d < e; ) {
                var n = arguments[d];
                (Zd(n) || mb(n)) && (c.push(n),
                g.push(l && n.length >= s && f(d ? c[d] : m)))
            }
            var o = c[0]
              , p = -1
              , q = o ? o.length : 0
              , r = [];
            a: for (; ++p < q; ) {
                var t = g[0];
                if (n = o[p],
                (t ? b(t, n) : i(m, n)) < 0) {
                    for (d = e,
                    (t || m).push(n); --d; )
                        if (t = g[d],
                        (t ? b(t, n) : i(c[d], n)) < 0)
                            continue a;
                    r.push(n)
                }
            }
            for (; e--; )
                t = g[e],
                t && k(t);
            return j(g),
            j(m),
            r
        }
        function uc(a, b, c) {
            var d = 0
              , e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = o.createCallback(b, c, 3); f-- && b(a[f], f, a); )
                    d++
            } else if (d = b,
            null == d || c)
                return a ? a[e - 1] : n;
            return l(a, Sd(0, e - d))
        }
        function vc(a, b, c) {
            var d = a ? a.length : 0;
            for ("number" == typeof c && (d = (0 > c ? Sd(0, d + c) : Td(c, d - 1)) + 1); d--; )
                if (a[d] === b)
                    return d;
            return -1
        }
        function wc(a) {
            for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d; )
                for (var f = -1, g = b[c]; ++f < e; )
                    a[f] === g && (Kd.call(a, f--, 1),
                    e--);
            return a
        }
        function xc(a, b, c) {
            a = +a || 0,
            c = "number" == typeof c ? c : +c || 1,
            null == b && (b = a,
            a = 0);
            for (var d = -1, e = Sd(0, Cd((b - a) / (c || 1))), f = nd(e); ++d < e; )
                f[d] = a,
                a += c;
            return f
        }
        function yc(a, b, c) {
            var d = -1
              , e = a ? a.length : 0
              , f = [];
            for (b = o.createCallback(b, c, 3); ++d < e; ) {
                var g = a[d];
                b(g, d, a) && (f.push(g),
                Kd.call(a, d--, 1),
                e--)
            }
            return f
        }
        function zc(a, b, c) {
            if ("number" != typeof b && null != b) {
                var d = 0
                  , e = -1
                  , f = a ? a.length : 0;
                for (b = o.createCallback(b, c, 3); ++e < f && b(a[e], e, a); )
                    d++
            } else
                d = null == b || c ? 1 : Sd(0, b);
            return l(a, d)
        }
        function Ac(a, b, c, d) {
            var e = 0
              , f = a ? a.length : e;
            for (c = c ? o.createCallback(c, d, 1) : Zc,
            b = c(b); f > e; ) {
                var g = e + f >>> 1;
                c(a[g]) < b ? e = g + 1 : f = g
            }
            return e
        }
        function Bc() {
            return eb(ab(arguments, !0, !0))
        }
        function Cc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c,
            c = "function" != typeof b && d && d[b] === a ? null : b,
            b = !1),
            null != c && (c = o.createCallback(c, d, 3)),
            eb(a, b, c)
        }
        function Dc(a) {
            return $(a, l(arguments, 1))
        }
        function Ec() {
            for (var a = -1, b = arguments.length; ++a < b; ) {
                var c = arguments[a];
                if (Zd(c) || mb(c))
                    var d = d ? eb($(d, c).concat($(c, d))) : c
            }
            return d || []
        }
        function Fc() {
            for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? ac(me(a, "length")) : 0, d = nd(0 > c ? 0 : c); ++b < c; )
                d[b] = me(a, b);
            return d
        }
        function Gc(a, b) {
            var c = -1
              , d = a ? a.length : 0
              , e = {};
            for (b || !d || Zd(a[0]) || (b = []); ++c < d; ) {
                var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1])
            }
            return e
        }
        function Hc(a, b) {
            if (!Db(b))
                throw new wd;
            return function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }
        function Ic(a, b) {
            return arguments.length > 2 ? gb(a, 17, l(arguments, 2), null, b) : gb(a, 1, null, null, b)
        }
        function Jc(a) {
            for (var b = arguments.length > 1 ? ab(arguments, !0, !1, 1) : ub(a), c = -1, d = b.length; ++c < d; ) {
                var e = b[c];
                a[e] = gb(a[e], 1, null, null, a)
            }
            return a
        }
        function Kc(a, b) {
            return arguments.length > 2 ? gb(b, 19, l(arguments, 2), null, a) : gb(b, 3, null, null, a)
        }
        function Lc() {
            for (var a = arguments, b = a.length; b--; )
                if (!Db(a[b]))
                    throw new wd;
            return function() {
                for (var b = arguments, c = a.length; c--; )
                    b = [a[c].apply(this, b)];
                return b[0]
            }
        }
        function Mc(a, b) {
            return b = "number" == typeof b ? b : +b || a.length,
            gb(a, 4, null, null, null, b)
        }
        function Nc(a, b, c) {
            var d, e, f, g, h, i, j, k = 0, l = !1, m = !0;
            if (!Db(a))
                throw new wd;
            if (b = Sd(0, b) || 0,
            c === !0) {
                var o = !0;
                m = !1
            } else
                Eb(c) && (o = c.leading,
                l = "maxWait"in c && (Sd(b, c.maxWait) || 0),
                m = "trailing"in c ? c.trailing : m);
            var p = function() {
                var c = b - (oe() - g);
                if (0 >= c) {
                    e && Dd(e);
                    var l = j;
                    e = i = j = n,
                    l && (k = oe(),
                    f = a.apply(h, d),
                    i || e || (d = h = null))
                } else
                    i = Jd(p, c)
            }
              , q = function() {
                i && Dd(i),
                e = i = j = n,
                (m || l !== b) && (k = oe(),
                f = a.apply(h, d),
                i || e || (d = h = null))
            };
            return function() {
                if (d = arguments,
                g = oe(),
                h = this,
                j = m && (i || !o),
                l === !1)
                    var c = o && !i;
                else {
                    e || o || (k = g);
                    var n = l - (g - k)
                      , r = 0 >= n;
                    r ? (e && (e = Dd(e)),
                    k = g,
                    f = a.apply(h, d)) : e || (e = Jd(q, n))
                }
                return r && i ? i = Dd(i) : i || b === l || (i = Jd(p, b)),
                c && (r = !0,
                f = a.apply(h, d)),
                !r || i || e || (d = h = null),
                f
            }
        }
        function Oc(a) {
            if (!Db(a))
                throw new wd;
            var b = l(arguments, 1);
            return Jd(function() {
                a.apply(n, b)
            }, 1)
        }
        function Pc(a, b) {
            if (!Db(a))
                throw new wd;
            var c = l(arguments, 2);
            return Jd(function() {
                a.apply(n, c)
            }, b)
        }
        function Qc(a, b) {
            if (!Db(a))
                throw new wd;
            var c = function() {
                var d = c.cache
                  , e = b ? b.apply(this, arguments) : r + arguments[0];
                return Hd.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            };
            return c.cache = {},
            c
        }
        function Rc(a) {
            var b, c;
            if (!Db(a))
                throw new wd;
            return function() {
                return b ? c : (b = !0,
                c = a.apply(this, arguments),
                a = null,
                c)
            }
        }
        function Sc(a) {
            return gb(a, 16, l(arguments, 1))
        }
        function Tc(a) {
            return gb(a, 32, null, l(arguments, 1))
        }
        function Uc(a, b, c) {
            var d = !0
              , e = !0;
            if (!Db(a))
                throw new wd;
            return c === !1 ? d = !1 : Eb(c) && (d = "leading"in c ? c.leading : d,
            e = "trailing"in c ? c.trailing : e),
            S.leading = d,
            S.maxWait = b,
            S.trailing = e,
            Nc(a, b, S)
        }
        function Vc(a, b) {
            return gb(b, 16, [a])
        }
        function Wc(a) {
            return function() {
                return a
            }
        }
        function Xc(a, b, c) {
            var d = typeof a;
            if (null == a || "function" == d)
                return Y(a, b, c);
            if ("object" != d)
                return bd(a);
            var e = _d(a)
              , f = e[0]
              , g = a[f];
            return 1 != e.length || g !== g || Eb(g) ? function(b) {
                for (var c = e.length, d = !1; c-- && (d = bb(b[e[c]], a[e[c]], null, !0)); )
                    ;
                return d
            }
            : function(a) {
                var b = a[f];
                return g === b && (0 !== g || 1 / g == 1 / b)
            }
        }
        function Yc(a) {
            return null == a ? "" : vd(a).replace(de, hb)
        }
        function Zc(a) {
            return a
        }
        function $c(a, b, c) {
            var d = !0
              , e = b && ub(b);
            b && (c || e.length) || (null == c && (c = b),
            f = p,
            b = a,
            a = o,
            e = ub(b)),
            c === !1 ? d = !1 : Eb(c) && "chain"in c && (d = c.chain);
            var f = a
              , g = Db(f);
            Yb(e, function(c) {
                var e = a[c] = b[c];
                g && (f.prototype[c] = function() {
                    var b = this.__chain__
                      , c = this.__wrapped__
                      , g = [c];
                    Id.apply(g, arguments);
                    var h = e.apply(a, g);
                    if (d || b) {
                        if (c === h && Eb(h))
                            return this;
                        h = new f(h),
                        h.__chain__ = b
                    }
                    return h
                }
                )
            })
        }
        function _c() {
            return c._ = zd,
            this
        }
        function ad() {}
        function bd(a) {
            return function(b) {
                return b[a]
            }
        }
        function cd(a, b, c) {
            var d = null == a
              , e = null == b;
            if (null == c && ("boolean" == typeof a && e ? (c = a,
            a = 1) : e || "boolean" != typeof b || (c = b,
            e = !0)),
            d && e && (b = 1),
            a = +a || 0,
            e ? (b = a,
            a = 0) : b = +b || 0,
            c || a % 1 || b % 1) {
                var f = Vd();
                return Td(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
            }
            return db(a, b)
        }
        function dd(a, b) {
            if (a) {
                var c = a[b];
                return Db(c) ? a[b]() : c
            }
        }
        function ed(a, b, c) {
            var d = o.templateSettings;
            a = vd(a || ""),
            c = fe({}, c, d);
            var e, f = fe({}, c.imports, d.imports), h = _d(f), i = Rb(f), j = 0, k = c.interpolate || D, l = "__p += '", m = ud((c.escape || D).source + "|" + k.source + "|" + (k === B ? y : D).source + "|" + (c.evaluate || D).source + "|$", "g");
            a.replace(m, function(b, c, d, f, h, i) {
                return d || (d = f),
                l += a.slice(j, i).replace(F, g),
                c && (l += "' +\n__e(" + c + ") +\n'"),
                h && (e = !0,
                l += "';\n" + h + ";\n__p += '"),
                d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"),
                j = i + b.length,
                b
            }),
            l += "';\n";
            var p = c.variable
              , q = p;
            q || (p = "obj",
            l = "with (" + p + ") {\n" + l + "\n}\n"),
            l = (e ? l.replace(v, "") : l).replace(w, "$1").replace(x, "$1;"),
            l = "function(" + p + ") {\n" + (q ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}";
            var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + H++ + "]") + "\n*/";
            try {
                var s = qd(h, "return " + l + r).apply(n, i)
            } catch (t) {
                throw t.source = l,
                t
            }
            return b ? s(b) : (s.source = l,
            s)
        }
        function fd(a, b, c) {
            a = (a = +a) > -1 ? a : 0;
            var d = -1
              , e = nd(a);
            for (b = Y(b, c, 1); ++d < a; )
                e[d] = b(d);
            return e
        }
        function gd(a) {
            return null == a ? "" : vd(a).replace(ce, lb)
        }
        function hd(a) {
            var b = ++q;
            return vd(null == a ? "" : a) + b
        }
        function id(a) {
            return a = new p(a),
            a.__chain__ = !0,
            a
        }
        function jd(a, b) {
            return b(a),
            a
        }
        function kd() {
            return this.__chain__ = !0,
            this
        }
        function ld() {
            return vd(this.__wrapped__)
        }
        function md() {
            return this.__wrapped__
        }
        c = c ? _.defaults(W.Object(), c, _.pick(W, G)) : W;
        var nd = c.Array
          , od = c.Boolean
          , pd = c.Date
          , qd = c.Function
          , rd = c.Math
          , sd = c.Number
          , td = c.Object
          , ud = c.RegExp
          , vd = c.String
          , wd = c.TypeError
          , xd = []
          , yd = td.prototype
          , zd = c._
          , Ad = yd.toString
          , Bd = ud("^" + vd(Ad).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$")
          , Cd = rd.ceil
          , Dd = c.clearTimeout
          , Ed = rd.floor
          , Fd = qd.prototype.toString
          , Gd = jb(Gd = td.getPrototypeOf) && Gd
          , Hd = yd.hasOwnProperty
          , Id = xd.push
          , Jd = c.setTimeout
          , Kd = xd.splice
          , Ld = xd.unshift
          , Md = function() {
            try {
                var a = {}
                  , b = jb(b = td.defineProperty) && b
                  , c = b(a, a, a) && b
            } catch (d) {}
            return c
        }()
          , Nd = jb(Nd = td.create) && Nd
          , Od = jb(Od = nd.isArray) && Od
          , Pd = c.isFinite
          , Qd = c.isNaN
          , Rd = jb(Rd = td.keys) && Rd
          , Sd = rd.max
          , Td = rd.min
          , Ud = c.parseInt
          , Vd = rd.random
          , Wd = {};
        Wd[J] = nd,
        Wd[K] = od,
        Wd[L] = pd,
        Wd[M] = qd,
        Wd[O] = td,
        Wd[N] = sd,
        Wd[P] = ud,
        Wd[Q] = vd,
        p.prototype = o.prototype;
        var Xd = o.support = {};
        Xd.funcDecomp = !jb(c.WinRTError) && E.test(m),
        Xd.funcNames = "string" == typeof qd.name,
        o.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: B,
            variable: "",
            imports: {
                _: o
            }
        },
        Nd || (X = function() {
            function a() {}
            return function(b) {
                if (Eb(b)) {
                    a.prototype = b;
                    var d = new a;
                    a.prototype = null
                }
                return d || c.Object()
            }
        }());
        var Yd = Md ? function(a, b) {
            T.value = b,
            Md(a, "__bindData__", T)
        }
        : ad
          , Zd = Od || function(a) {
            return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == J || !1
        }
          , $d = function(a) {
            var b, c = a, d = [];
            if (!c)
                return d;
            if (!U[typeof a])
                return d;
            for (b in c)
                Hd.call(c, b) && d.push(b);
            return d
        }
          , _d = Rd ? function(a) {
            return Eb(a) ? Rd(a) : []
        }
        : $d
          , ae = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , be = wb(ae)
          , ce = ud("(" + _d(be).join("|") + ")", "g")
          , de = ud("[" + _d(ae).join("") + "]", "g")
          , ee = function(a, b, c) {
            var d, e = a, f = e;
            if (!e)
                return f;
            var g = arguments
              , h = 0
              , i = "number" == typeof c ? 2 : g.length;
            if (i > 3 && "function" == typeof g[i - 2])
                var j = Y(g[--i - 1], g[i--], 2);
            else
                i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
            for (; ++h < i; )
                if (e = g[h],
                e && U[typeof e])
                    for (var k = -1, l = U[typeof e] && _d(e), m = l ? l.length : 0; ++k < m; )
                        d = l[k],
                        f[d] = j ? j(f[d], e[d]) : e[d];
            return f
        }
          , fe = function(a, b, c) {
            var d, e = a, f = e;
            if (!e)
                return f;
            for (var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length; ++h < i; )
                if (e = g[h],
                e && U[typeof e])
                    for (var j = -1, k = U[typeof e] && _d(e), l = k ? k.length : 0; ++j < l; )
                        d = k[j],
                        "undefined" == typeof f[d] && (f[d] = e[d]);
            return f
        }
          , ge = function(a, b, c) {
            var d, e = a, f = e;
            if (!e)
                return f;
            if (!U[typeof e])
                return f;
            b = b && "undefined" == typeof c ? b : Y(b, c, 3);
            for (d in e)
                if (b(e[d], d, a) === !1)
                    return f;
            return f
        }
          , he = function(a, b, c) {
            var d, e = a, f = e;
            if (!e)
                return f;
            if (!U[typeof e])
                return f;
            b = b && "undefined" == typeof c ? b : Y(b, c, 3);
            for (var g = -1, h = U[typeof e] && _d(e), i = h ? h.length : 0; ++g < i; )
                if (d = h[g],
                b(e[d], d, a) === !1)
                    return f;
            return f
        }
          , ie = Gd ? function(a) {
            if (!a || Ad.call(a) != O)
                return !1;
            var b = a.valueOf
              , c = jb(b) && (c = Gd(b)) && Gd(c);
            return c ? a == c || Gd(a) == c : kb(a)
        }
        : kb
          , je = fb(function(a, b, c) {
            Hd.call(a, c) ? a[c]++ : a[c] = 1
        })
          , ke = fb(function(a, b, c) {
            (Hd.call(a, c) ? a[c] : a[c] = []).push(b)
        })
          , le = fb(function(a, b, c) {
            a[c] = b
        })
          , me = _b
          , ne = Vb
          , oe = jb(oe = pd.now) && oe || function() {
            return (new pd).getTime()
        }
          , pe = 8 == Ud(u + "08") ? Ud : function(a, b) {
            return Ud(Jb(a) ? a.replace(C, "") : a, b || 0)
        }
        ;
        return o.after = Hc,
        o.assign = ee,
        o.at = Sb,
        o.bind = Ic,
        o.bindAll = Jc,
        o.bindKey = Kc,
        o.chain = id,
        o.compact = lc,
        o.compose = Lc,
        o.constant = Wc,
        o.countBy = je,
        o.create = pb,
        o.createCallback = Xc,
        o.curry = Mc,
        o.debounce = Nc,
        o.defaults = fe,
        o.defer = Oc,
        o.delay = Pc,
        o.difference = mc,
        o.filter = Vb,
        o.flatten = qc,
        o.forEach = Yb,
        o.forEachRight = Zb,
        o.forIn = ge,
        o.forInRight = sb,
        o.forOwn = he,
        o.forOwnRight = tb,
        o.functions = ub,
        o.groupBy = ke,
        o.indexBy = le,
        o.initial = sc,
        o.intersection = tc,
        o.invert = wb,
        o.invoke = $b,
        o.keys = _d,
        o.map = _b,
        o.mapValues = Lb,
        o.max = ac,
        o.memoize = Qc,
        o.merge = Mb,
        o.min = bc,
        o.omit = Nb,
        o.once = Rc,
        o.pairs = Ob,
        o.partial = Sc,
        o.partialRight = Tc,
        o.pick = Pb,
        o.pluck = me,
        o.property = bd,
        o.pull = wc,
        o.range = xc,
        o.reject = ec,
        o.remove = yc,
        o.rest = zc,
        o.shuffle = gc,
        o.sortBy = jc,
        o.tap = jd,
        o.throttle = Uc,
        o.times = fd,
        o.toArray = kc,
        o.transform = Qb,
        o.union = Bc,
        o.uniq = Cc,
        o.values = Rb,
        o.where = ne,
        o.without = Dc,
        o.wrap = Vc,
        o.xor = Ec,
        o.zip = Fc,
        o.zipObject = Gc,
        o.collect = _b,
        o.drop = zc,
        o.each = Yb,
        o.eachRight = Zb,
        o.extend = ee,
        o.methods = ub,
        o.object = Gc,
        o.select = Vb,
        o.tail = zc,
        o.unique = Cc,
        o.unzip = Fc,
        $c(o),
        o.clone = nb,
        o.cloneDeep = ob,
        o.contains = Tb,
        o.escape = Yc,
        o.every = Ub,
        o.find = Wb,
        o.findIndex = nc,
        o.findKey = qb,
        o.findLast = Xb,
        o.findLastIndex = oc,
        o.findLastKey = rb,
        o.has = vb,
        o.identity = Zc,
        o.indexOf = rc,
        o.isArguments = mb,
        o.isArray = Zd,
        o.isBoolean = xb,
        o.isDate = yb,
        o.isElement = zb,
        o.isEmpty = Ab,
        o.isEqual = Bb,
        o.isFinite = Cb,
        o.isFunction = Db,
        o.isNaN = Fb,
        o.isNull = Gb,
        o.isNumber = Hb,
        o.isObject = Eb,
        o.isPlainObject = ie,
        o.isRegExp = Ib,
        o.isString = Jb,
        o.isUndefined = Kb,
        o.lastIndexOf = vc,
        o.mixin = $c,
        o.noConflict = _c,
        o.noop = ad,
        o.now = oe,
        o.parseInt = pe,
        o.random = cd,
        o.reduce = cc,
        o.reduceRight = dc,
        o.result = dd,
        o.runInContext = m,
        o.size = hc,
        o.some = ic,
        o.sortedIndex = Ac,
        o.template = ed,
        o.unescape = gd,
        o.uniqueId = hd,
        o.all = Ub,
        o.any = ic,
        o.detect = Wb,
        o.findWhere = Wb,
        o.foldl = cc,
        o.foldr = dc,
        o.include = Tb,
        o.inject = cc,
        $c(function() {
            var a = {};
            return he(o, function(b, c) {
                o.prototype[c] || (a[c] = b)
            }),
            a
        }(), !1),
        o.first = pc,
        o.last = uc,
        o.sample = fc,
        o.take = pc,
        o.head = pc,
        he(o, function(a, b) {
            var c = "sample" !== b;
            o.prototype[b] || (o.prototype[b] = function(b, d) {
                var e = this.__chain__
                  , f = a(this.__wrapped__, b, d);
                return e || null != b && (!d || c && "function" == typeof b) ? new p(f,e) : f
            }
            )
        }),
        o.VERSION = "2.4.1",
        o.prototype.chain = kd,
        o.prototype.toString = ld,
        o.prototype.value = md,
        o.prototype.valueOf = md,
        Yb(["join", "pop", "shift"], function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                var a = this.__chain__
                  , c = b.apply(this.__wrapped__, arguments);
                return a ? new p(c,a) : c
            }
        }),
        Yb(["push", "reverse", "sort", "unshift"], function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments),
                this
            }
        }),
        Yb(["concat", "slice", "splice"], function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                return new p(b.apply(this.__wrapped__, arguments),this.__chain__)
            }
        }),
        o
    }
    var n, o = [], p = [], q = 0, r = +new Date + "", s = 75, t = 40, u = "     \f ﻿\n\r\u2028\u2029 ᠎             　", v = /\b__p \+= '';/g, w = /\b(__p \+=) '' \+/g, x = /(__e\(.*?\)|\b__t\)) \+\n'';/g, y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, z = /\w*$/, A = /^\s*function[ \n\r\t]+\w/, B = /<%=([\s\S]+?)%>/g, C = RegExp("^[" + u + "]*0+(?=.$)"), D = /($^)/, E = /\bthis\b/, F = /['\n\r\t\u2028\u2029\\]/g, G = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"], H = 0, I = "[object Arguments]", J = "[object Array]", K = "[object Boolean]", L = "[object Date]", M = "[object Function]", N = "[object Number]", O = "[object Object]", P = "[object RegExp]", Q = "[object String]", R = {};
    R[M] = !1,
    R[I] = R[J] = R[K] = R[L] = R[N] = R[O] = R[P] = R[Q] = !0;
    var S = {
        leading: !1,
        maxWait: 0,
        trailing: !1
    }
      , T = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
    }
      , U = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }
      , V = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "   ": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , W = U[typeof window] && window || this
      , X = U[typeof exports] && exports && !exports.nodeType && exports
      , Y = U[typeof module] && module && !module.nodeType && module
      , Z = Y && Y.exports === X && X
      , $ = U[typeof global] && global;
    !$ || $.global !== $ && $.window !== $ || (W = $);
    var _ = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (W._ = _,
    define("underscore", [], function() {
        return _
    })) : X && Y ? Z ? (Y.exports = _)._ = _ : X._ = _ : W._ = _
}
).call(this),
function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length
          , c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b))
            return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return _.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (hb.test(b))
                return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1),
        a.removeEventListener("load", g, !1),
        _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = _.expando + Math.random()
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sb.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a),
            g = rb.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a),
            i = _.extend({}, h),
            sb.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(),
        f
    }
    function u(a) {
        var b = Z
          , c = Ob[a];
        return c || (c = t(a, b),
        "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = Nb[0].contentDocument,
        b.write(),
        b.close(),
        c = t(a, b),
        Nb.detach()),
        Ob[a] = c),
        c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)),
        Qb.test(g) && Pb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; )
            if (b = Xb[e] + c,
            b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += _.css(a, c + wb[f], !0, e)),
            d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)),
            "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e),
            "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Rb(a)
          , g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Qb.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = rb.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d),
            "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a,b,c,d,e)
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0
        }),
        Yb = _.now()
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = wb[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                _.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
        j = _.css(a, "display"),
        k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j,
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        l.always(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            $b.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else
                j = void 0;
        if (_.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden"in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}),
            f && (p.hidden = !o),
            o ? _(a).show() : l.done(function() {
                _(a).hide()
            }),
            l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m)
                    _.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l),
                d in p || (p[d] = g.start,
                o && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c),
            e = b[d],
            f = a[c],
            _.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = _.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = _.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Yb || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts))
                return d;
        return _.map(k, F, j),
        _.isFunction(j.opts.start) && j.opts.start.call(a, j),
        _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                e(j),
                !1)
            }),
            i
        }
        var f = {}
          , g = a === vc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d),
        a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b))
            _.each(b, function(b, e) {
                c || zc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== _.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = []
      , R = Q.slice
      , S = Q.concat
      , T = Q.push
      , U = Q.indexOf
      , V = {}
      , W = V.toString
      , X = V.hasOwnProperty
      , Y = {}
      , Z = a.document
      , $ = "2.1.1"
      , _ = function(a, b) {
        return new _.fn.init(a,b)
    }
      , ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , bb = /^-ms-/
      , cb = /-([\da-z])/gi
      , db = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    },
    _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || _.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1,
                    f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {},
                    g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"),
            b.text = a,
            Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d),
                        e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]),
                e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]),
                    e === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            _.isFunction(a) ? (d = R.call(arguments, 2),
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || _.guid++,
            e) : void 0
        },
        now: Date.now,
        support: Y
    }),
    _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b),
            b = b || G,
            c = c || [],
            !a || "string" != typeof a)
                return c;
            if (1 !== (h = b.nodeType) && 9 !== h)
                return [];
            if (I && !d) {
                if (e = sb.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g),
                            !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f),
                                c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f),
                            c
                    } else {
                        if (e[2])
                            return _.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName)
                            return _.apply(c, b.getElementsByClassName(g)),
                            c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N,
                    o = b,
                    p = 9 === h && a,
                    1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a),
                        (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n),
                        n = "[id='" + n + "'] ",
                        i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b,
                        p = j.join(",")
                    }
                    if (p)
                        try {
                            return _.apply(c, o.querySelectorAll(p)),
                            c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && typeof a.getElementsByTagName !== V && a
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}),
                            (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i),
                e)
                    for (j = q(t, n),
                    e(j, [], h, i),
                    k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [],
                            k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t),
                    f ? f(null, g, t, i) : _.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return bb.call(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }
            ]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches),
                    c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0
              , f = a.length > 0
              , g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--,
                    d && p.push(k))
                }
                if (n += o,
                e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Z.call(i));
                        r = q(r)
                    }
                    _.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u,
                C = s),
                p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0),
            0
        }, V = "undefined", W = 1 << 31, X = {}.hasOwnProperty, Y = [], Z = Y.pop, $ = Y.push, _ = Y.push, ab = Y.slice, bb = Y.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", db = "[\\x20\\t\\r\\n\\f]", eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fb = eb.replace("w", "w#"), gb = "\\[" + db + "*(" + eb + ")(?:" + db + "*([*^$|!~]?=)" + db + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fb + "))|)" + db + "*\\]", hb = ":(" + eb + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gb + ")*)|.*)\\)|)", ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$","g"), jb = new RegExp("^" + db + "*," + db + "*"), kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"), lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]","g"), mb = new RegExp(hb), nb = new RegExp("^" + fb + "$"), ob = {
            ID: new RegExp("^#(" + eb + ")"),
            CLASS: new RegExp("^\\.(" + eb + ")"),
            TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + gb),
            PSEUDO: new RegExp("^" + hb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)","i"),
            bool: new RegExp("^(?:" + cb + ")$","i"),
            needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)","i")
        }, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)","ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            _.apply(Y = ab.call(O.childNodes), O.childNodes),
            Y[O.childNodes.length].nodeType
        } catch (xb) {
            _ = {
                apply: Y.length ? function(a, b) {
                    $.apply(a, ab.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        v = b.support = {},
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        F = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O, d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c,
            H = c.documentElement,
            I = !y(c),
            d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                F()
            }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                F()
            })),
            v.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            v.getElementsByTagName = e(function(a) {
                return a.appendChild(c.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            v.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }),
            v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !c.getElementsByName || !c.getElementsByName(N).length
            }),
            v.getById ? (w.find.ID = function(a, b) {
                if (typeof b.getElementById !== V && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete w.find.ID,
            w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
            }
            ,
            K = [],
            J = [],
            (v.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"),
                a.querySelectorAll(":checked").length || J.push(":checked")
            }),
            e(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })),
            (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", hb)
            }),
            J = J.length && new RegExp(J.join("|")),
            K = K.length && new RegExp(K.join("|")),
            b = rb.test(H.compareDocumentPosition),
            M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            U = b ? function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var d, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (d = a; d = d.parentNode; )
                    i.unshift(d);
                for (d = b; d = d.parentNode; )
                    j.unshift(d);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }
            ,
            c) : G
        }
        ,
        b.matches = function(a, c) {
            return b(a, null, null, c)
        }
        ,
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a),
            c = c.replace(lb, "='$1']"),
            !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }
        ,
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        }
        ,
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()]
              , d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }
        ,
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates,
            D = !v.sortStable && a.slice(0),
            a.sort(U),
            E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null,
            a
        }
        ,
        x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }
        ,
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "",
                        "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                for (k = q[N] || (q[N] = {}),
                                j = k[a] || [],
                                n = j[0] === P && j[1],
                                m = j[0] === P && j[2],
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                l !== b)); )
                                    ;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                    w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = bb.call(a, e[g]),
                            a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }
                    ) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = []
                      , c = []
                      , e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(vb, wb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qb.test(a.nodeName)
                },
                input: function(a) {
                    return pb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        })
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l,
        z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = kb.exec(h)) && (d = e.shift(),
                f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }),
                h = h.slice(d.length));
                for (g in w.filter)
                    !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                    f.push({
                        value: d,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }
        ,
        A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)),
                c = b.length; c--; )
                    f = s(b[c]),
                    f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [],
            1 === l.length) {
                if (f = l[0] = l[0].slice(0),
                f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0],
                    !b)
                        return c;
                    j && (b = b.parentNode),
                    a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1),
                        a = d.length && m(f),
                        !a)
                            return _.apply(c, d),
                            c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b),
            c
        }
        ,
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(cb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        b
    }(a);
    _.find = eb,
    _.expr = eb.selectors,
    _.expr[":"] = _.expr.pseudos,
    _.unique = eb.uniqueSort,
    _.text = eb.getText,
    _.isXMLDoc = eb.isXML,
    _.contains = eb.contains;
    var fb = _.expr.match.needsContext
      , gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b,
                _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)),
                gb.test(c[1]) && _.isPlainObject(b))
                    for (c in b)
                        _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]),
            d && d.parentNode && (this.length = 1,
            this[0] = d),
            this.context = Z,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        _.makeArray(a, this))
    }
    ;
    kb.prototype = _.fn,
    ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/
      , mb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && _(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    _.fn.extend({
        has: function(a) {
            var b = _(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = _.filter(d, e)),
            this.length > 1 && (mb[a] || _.unique(e),
            lb.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var nb = /\S+/g
      , ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f,
            c = !0,
            h = e || 0,
            e = 0,
            g = i.length,
            d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1,
            i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    d ? g = i.length : b && (e = c,
                    k(b))
                }
                return this
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; )
                        i.splice(c, 1),
                        d && (g >= c && g--,
                        h >= c && h--)
                }),
                this
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                g = 0,
                this
            },
            disable: function() {
                return i = j = b = void 0,
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = void 0,
                b || l.disable(),
                this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                d ? j.push(b) : k(b)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return l
    }
    ,
    _.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            _.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? R.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); g > e; e++)
                    f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a),
        this
    }
    ,
    _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0,
            a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]),
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"),
            _(Z).off("ready"))))
        }
    }),
    _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(),
        "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1),
        a.addEventListener("load", g, !1))),
        pb.promise(b)
    }
    ,
    _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)
                _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        _.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(_(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
    ;
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ,
    h.uid = 1,
    h.accepts = _.acceptData,
    h.prototype = {
        key: function(a) {
            if (!h.accepts(a))
                return 0;
            var b = {}
              , c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c,
                    _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (_.isEmptyObject(f))
                _.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b),
                b in g ? d = [b, e] : (d = e,
                d = d in g ? [d] : d.match(nb) || [])),
                c = d.length;
                for (; c--; )
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var rb = new h
      , sb = new h
      , tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ub = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },
        data: function(a, b, c) {
            return sb.access(a, b, c)
        },
        removeData: function(a, b) {
            sb.remove(a, b)
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c)
        },
        _removeData: function(a, b) {
            rb.remove(a, b)
        }
    }),
    _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f),
                1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)),
                        i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = sb.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = i(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = sb.get(this, d);
                        sb.set(this, d, b),
                        -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }
    }),
    _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = rb.get(a, b),
            c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = _._queueHooks(a, b)
              , g = function() {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx"; g--; )
                c = rb.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , wb = ["Top", "Right", "Bottom", "Left"]
      , xb = function(a, b) {
        return a = b || a,
        "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }
      , yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment()
          , b = a.appendChild(Z.createElement("div"))
          , c = Z.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin"in a;
    var Ab = /^key/
      , Bb = /^(?:mouse|pointer|contextmenu)|click/
      , Cb = /^(?:focusinfocus|focusoutblur)$/
      , Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = _.guid++),
                (i = q.events) || (i = q.events = {}),
                (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(nb) || [""],
                j = b.length; j--; )
                    h = Db.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n && (l = _.event.special[n] || {},
                    n = (e ? l.delegateType : l.bindType) || n,
                    l = _.event.special[n] || {},
                    k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f),
                    (m = i[n]) || (m = i[n] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""],
                j = b.length; j--; )
                    if (h = Db.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        for (l = _.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = i[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length; f--; )
                            k = m[f],
                            !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle),
                        delete i[n])
                    } else
                        for (n in i)
                            _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle,
                rb.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z,
            3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
            n = o.shift(),
            o.sort()),
            j = n.indexOf(":") < 0 && "on" + n,
            b = b[_.expando] ? b : new _.Event(n,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = o.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : _.makeArray(c, [b]),
            l = _.event.special[n] || {},
            e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n,
                    Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                        m.push(g),
                        h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                    b.type = f > 1 ? i : l.bindType || n,
                    k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"),
                    k && k.apply(g, c),
                    k = j && g[j],
                    k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c),
                    b.result === !1 && b.preventDefault());
                return b.type = n,
                e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j],
                h && (d[j] = null),
                _.event.triggered = n,
                d[n](),
                _.event.triggered = void 0,
                h && (d[j] = h)),
                b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a,
            a.delegateTarget = this,
            !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i),
                b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                    c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f,
                        a.data = f.data,
                        d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z,
                d = c.documentElement,
                e = c.body,
                a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[_.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new _.Event(f),
            b = d.length; b--; )
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = Z),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    ,
    _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a,
        b && _.extend(this, b),
        this.timeStamp = a && a.timeStamp || _.now(),
        void (this[_.expando] = !0)) : new _.Event(a,b)
    }
    ,
    _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = rb.access(d, b);
                e || d.addEventListener(a, c, !0),
                rb.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0),
                rb.remove(d, b))
            }
        }
    }),
    _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = k;
            else if (!d)
                return this;
            return 1 === e && (f = d,
            d = function(a) {
                return _().off(a),
                f.apply(this, arguments)
            }
            ,
            d.guid = f.guid || (f.guid = _.guid++)),
            this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = k),
            this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Fb = /<([\w:]+)/
      , Gb = /<|&#?\w+;/
      , Hb = /<(?:script|style|link)/i
      , Ib = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Jb = /^$|\/(?:java|ecma)script/i
      , Kb = /^true\/(.*)/
      , Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Mb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Mb.optgroup = Mb.option,
    Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead,
    Mb.th = Mb.td,
    _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h),
                f = r(a),
                d = 0,
                e = f.length; e > d; d++)
                    s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a),
                    g = g || r(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        q(f[d], g[d]);
                else
                    q(a, h);
            return g = r(h, "script"),
            g.length > 0 && p(g, !i && r(a, "script")),
            h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m],
                e || 0 === e)
                    if ("object" === _.type(e))
                        _.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")),
                        g = (Fb.exec(e) || ["", ""])[1].toLowerCase(),
                        h = Mb[g] || Mb._default,
                        f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2],
                        j = h[0]; j--; )
                            f = f.lastChild;
                        _.merge(l, f.childNodes),
                        f = k.firstChild,
                        f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            for (k.textContent = "",
            m = 0; e = l[m++]; )
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e),
                f = r(k.appendChild(e), "script"),
                i && p(f),
                c))
                    for (j = 0; e = f[j++]; )
                        Jb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando],
                e && (b = rb.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }
    }),
    _.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || _.cleanData(r(c)),
                c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (_.cleanData(r(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (_.cleanData(r(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                _.cleanData(r(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this),
            d = c.firstChild,
            1 === c.childNodes.length && (c = d),
            d)) {
                for (e = _.map(r(c, "script"), n),
                f = e.length; j > i; i++)
                    g = c,
                    i !== l && (g = _.clone(g, !0, !0),
                    f && _.merge(e, r(g, "script"))),
                    b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument,
                    _.map(e, o),
                    i = 0; f > i; i++)
                        g = e[i],
                        Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }
    }),
    _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0),
                _(e[g])[b](c),
                T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$","i"), Rb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            g.innerHTML = "",
            e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top,
            d = "4px" === b.width,
            e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box",
        g.cloneNode(!0).style.backgroundClip = "",
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip,
        f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        f.appendChild(g),
        a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return null == d && b(),
                d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                c.style.marginRight = c.style.width = "0",
                g.style.width = "1px",
                e.appendChild(f),
                b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                e.removeChild(f),
                b
            }
        }))
    }(),
    _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Sb = /^(none|table(?!-c[ea]).+)/
      , Tb = new RegExp("^(" + vb + ")(.*)$","i")
      , Ub = new RegExp("^([+-])=(" + vb + ")","i")
      , Vb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Wb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)),
                g = _.cssHooks[b] || _.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"),
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)),
            g = _.cssHooks[b] || _.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = v(a, b, d)),
            "normal" === e && b in Wb && (e = Wb[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }),
    _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }),
    _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Pb.test(a) || (_.cssHooks[a + b].set = y)
    }),
    _.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }
    }),
    _.Tween = C,
    C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : C.propHooks._default.set(this),
            this
        }
    },
    C.prototype.init.prototype = C.prototype,
    C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    _.fx = C.prototype.init,
    _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$","i"), ac = /queueHooks$/, bc = [G], cc = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = _b.exec(b)
              , f = e && e[3] || (_.cssNumber[a] ? "" : "px")
              , g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    _.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                cc[c] = cc[c] || [],
                cc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a)
        }
    }),
    _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            _.isFunction(d.old) && d.old.call(this),
            d.queue && _.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a)
              , f = _.speed(b, c, d)
              , g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || rb.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = _.timers
                  , g = rb.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                _.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }),
    _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    _.timers = [],
    _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(),
        Yb = void 0
    }
    ,
    _.fx.timer = function(a) {
        _.timers.push(a),
        a() ? _.fx.start() : _.timers.pop()
    }
    ,
    _.fx.interval = 13,
    _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
    }
    ,
    _.fx.stop = function() {
        clearInterval(Zb),
        Zb = null
    }
    ,
    _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a = Z.createElement("input")
          , b = Z.createElement("select")
          , c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox",
        Y.checkOn = "" !== a.value,
        Y.optSelected = c.selected,
        b.disabled = !0,
        Y.optDisabled = !c.disabled,
        a = Z.createElement("input"),
        a.value = "t",
        a.type = "radio",
        Y.radioValue = "t" === a.value
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }),
    _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(),
                d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void _.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = _.propFix[c] || c,
                    _.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    ec = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b],
            fc[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            fc[b] = f),
            e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }),
    _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !_.isXMLDoc(a),
                f && (b = _.propFix[b] || b,
                e = _.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }),
    Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        }
    }),
    _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = _.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
            }
        }
    }),
    _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
                        d = e[g],
                        (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        },
        Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    }),
    _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jc = _.now()
      , kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a),
        b
    }
    ;
    var lc, mc, nc = /#.*$/, oc = /([?&])_=[^&]*/, pc = /^(.*?):[ \t]*([^\r\n]*)$/gm, qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rc = /^(?:GET|HEAD)$/, sc = /^\/\//, tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, uc = {}, vc = {}, wc = "*/".concat("*");
    try {
        mc = location.href
    } catch (xc) {
        mc = Z.createElement("a"),
        mc.href = "",
        mc = mc.href
    }
    lc = tc.exec(mc.toLowerCase()) || [],
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mc,
            type: "GET",
            isLocal: qc.test(lc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(uc),
        ajaxTransport: J(vc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2,
                h && clearTimeout(h),
                d = void 0,
                f = g || "",
                v.readyState = a > 0 ? 4 : 0,
                i = a >= 200 && 300 > a || 304 === a,
                c && (s = M(l, v, c)),
                s = N(l, s, v, i),
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                u && (_.lastModified[e] = u),
                u = v.getResponseHeader("etag"),
                u && (_.etag[e] = u)),
                204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                k = s.data,
                r = s.error,
                i = !r)) : (r = w,
                (a || !w) && (w = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || w) + "",
                i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                v.statusCode(q),
                q = void 0,
                j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]),
                p.fireWith(m, [v, w]),
                j && (n.trigger("ajaxComplete", [v, l]),
                --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g)
                            for (g = {}; b = pc.exec(f); )
                                g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b),
                    c(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            l.url = ((a || l.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"),
            l.type = b.method || b.type || l.method || l.type,
            l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""],
            null == l.crossDomain && (i = tc.exec(l.url.toLowerCase()),
            l.crossDomain = !(!i || i[1] === lc[1] && i[2] === lc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)),
            K(uc, l, b, v),
            2 === t)
                return v;
            j = l.global,
            j && 0 === _.active++ && _.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !rc.test(l.type),
            e = l.url,
            l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = oc.test(e) ? e.replace(oc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)),
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]),
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
            (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)
                v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[k](l[k]);
            if (d = K(vc, l, b, v)) {
                v.readyState = 1,
                j && n.trigger("ajaxSend", [v, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1,
                    d.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }),
    _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = _(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }
    ,
    _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    }
    ;
    var yc = /%20/g
      , zc = /\[\]$/
      , Ac = /\r?\n/g
      , Bc = /^(?:submit|button|image|reset|file)$/i
      , Cc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional),
        _.isArray(a) || a.jquery && !_.isPlainObject(a))
            _.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(yc, "+")
    }
    ,
    _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ac, "\r\n")
                }
            }).get()
        }
    }),
    _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    }
    ;
    var Dc = 0
      , Ec = {}
      , Fc = {
        0: 200,
        1223: 204
    }
      , Gc = _.ajaxSettings.xhr();
    a.ActiveXObject && _(a).on("unload", function() {
        for (var a in Ec)
            Ec[a]()
    }),
    Y.cors = !!Gc && "withCredentials"in Gc,
    Y.ajax = Gc = !!Gc,
    _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Gc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Dc;
                if (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Ec[g],
                        b = f.onload = f.onerror = null,
                        "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Fc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }
                ,
                f.onload = b(),
                f.onerror = b("error"),
                b = Ec[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }),
    _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a),
                a
            }
        }
    }),
    _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hc = []
      , Ic = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hc.pop() || _.expando + "_" + jc++;
            return this[a] = !0,
            a
        }
    }),
    _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ic.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Ic, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Hc.push(e)),
            g && _.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || Z;
        var d = gb.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e),
        e && e.length && _(e).remove(),
        _.merge([], d.childNodes))
    }
    ;
    var Jc = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Jc)
            return Jc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)),
        a = a.slice(0, h)),
        _.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var Kc = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = _.css(a, "top"),
            i = _.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            _.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    _.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()),
                c = P(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                _.nodeName(a[0], "html") || (d = a.offset()),
                d.top += _.css(a[0], "borderTopWidth", !0),
                d.left += _.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Kc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
                    a = a.offsetParent;
                return a || Kc
            })
        }
    }),
    _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }),
    _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b),
            Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }),
    _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    _.fn.size = function() {
        return this.length
    }
    ,
    _.fn.andSelf = _.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Lc = a.jQuery
      , Mc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Mc),
        b && a.jQuery === _ && (a.jQuery = Lc),
        _
    }
    ,
    typeof b === zb && (a.jQuery = a.$ = _),
    _
}),
define("jquery", function() {}),
function(a, b) {
    if ("function" == typeof define && define.amd)
        define("backbone", ["underscore", "jquery", "exports"], function(c, d, e) {
            a.Backbone = b(a, e, c, d)
        });
    else if ("undefined" != typeof exports) {
        var c = require("underscore");
        b(a, exports, c)
    } else
        a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
}(this, function(a, b, c, d) {
    {
        var e = a.Backbone
          , f = []
          , g = (f.push,
        f.slice);
        f.splice
    }
    b.VERSION = "1.1.2",
    b.$ = d,
    b.noConflict = function() {
        return a.Backbone = e,
        this
    }
    ,
    b.emulateHTTP = !1,
    b.emulateJSON = !1;
    var h = b.Events = {
        on: function(a, b, c) {
            if (!j(this, "on", a, [b, c]) || !b)
                return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }),
            this
        },
        once: function(a, b, d) {
            if (!j(this, "once", a, [b, d]) || !b)
                return this;
            var e = this
              , f = c.once(function() {
                e.off(a, f),
                b.apply(this, arguments)
            });
            return f._callback = b,
            this.on(a, f, d)
        },
        off: function(a, b, d) {
            var e, f, g, h, i, k, l, m;
            if (!this._events || !j(this, "off", a, [b, d]))
                return this;
            if (!a && !b && !d)
                return this._events = void 0,
                this;
            for (h = a ? [a] : c.keys(this._events),
            i = 0,
            k = h.length; k > i; i++)
                if (a = h[i],
                g = this._events[a]) {
                    if (this._events[a] = e = [],
                    b || d)
                        for (l = 0,
                        m = g.length; m > l; l++)
                            f = g[l],
                            (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && e.push(f);
                    e.length || delete this._events[a]
                }
            return this
        },
        trigger: function(a) {
            if (!this._events)
                return this;
            var b = g.call(arguments, 1);
            if (!j(this, "trigger", a, b))
                return this;
            var c = this._events[a]
              , d = this._events.all;
            return c && k(c, b),
            d && k(d, arguments),
            this
        },
        stopListening: function(a, b, d) {
            var e = this._listeningTo;
            if (!e)
                return this;
            var f = !b && !d;
            d || "object" != typeof b || (d = this),
            a && ((e = {})[a._listenId] = a);
            for (var g in e)
                a = e[g],
                a.off(b, d, this),
                (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
            return this
        }
    }
      , i = /\s+/
      , j = function(a, b, c, d) {
        if (!c)
            return !0;
        if ("object" == typeof c) {
            for (var e in c)
                a[b].apply(a, [e, c[e]].concat(d));
            return !1
        }
        if (i.test(c)) {
            for (var f = c.split(i), g = 0, h = f.length; h > g; g++)
                a[b].apply(a, [f[g]].concat(d));
            return !1
        }
        return !0
    }
      , k = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
        case 0:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx);
            return;
        case 1:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f);
            return;
        case 2:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g);
            return;
        case 3:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g, h);
            return;
        default:
            for (; ++d < e; )
                (c = a[d]).callback.apply(c.ctx, b);
            return
        }
    }
      , l = {
        listenTo: "on",
        listenToOnce: "once"
    };
    c.each(l, function(a, b) {
        h[b] = function(b, d, e) {
            var f = this._listeningTo || (this._listeningTo = {})
              , g = b._listenId || (b._listenId = c.uniqueId("l"));
            return f[g] = b,
            e || "object" != typeof d || (e = this),
            b[a](d, e, this),
            this
        }
    }),
    h.bind = h.on,
    h.unbind = h.off,
    c.extend(b, h);
    var m = b.Model = function(a, b) {
        var d = a || {};
        b || (b = {}),
        this.cid = c.uniqueId("c"),
        this.attributes = {},
        b.collection && (this.collection = b.collection),
        b.parse && (d = this.parse(d, b) || {}),
        d = c.defaults({}, d, c.result(this, "defaults")),
        this.set(d, b),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    c.extend(m.prototype, h, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return c.clone(this.attributes)
        },
        sync: function() {
            return b.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return c.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, d) {
            var e, f, g, h, i, j, k, l;
            if (null == a)
                return this;
            if ("object" == typeof a ? (f = a,
            d = b) : (f = {})[a] = b,
            d || (d = {}),
            !this._validate(f, d))
                return !1;
            g = d.unset,
            i = d.silent,
            h = [],
            j = this._changing,
            this._changing = !0,
            j || (this._previousAttributes = c.clone(this.attributes),
            this.changed = {}),
            l = this.attributes,
            k = this._previousAttributes,
            this.idAttribute in f && (this.id = f[this.idAttribute]);
            for (e in f)
                b = f[e],
                c.isEqual(l[e], b) || h.push(e),
                c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b,
                g ? delete l[e] : l[e] = b;
            if (!i) {
                h.length && (this._pending = d);
                for (var m = 0, n = h.length; n > m; m++)
                    this.trigger("change:" + h[m], this, l[h[m]], d)
            }
            if (j)
                return this;
            if (!i)
                for (; this._pending; )
                    d = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, d);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(a, b) {
            return this.set(a, void 0, c.extend({}, b, {
                unset: !0
            }))
        },
        clear: function(a) {
            var b = {};
            for (var d in this.attributes)
                b[d] = void 0;
            return this.set(b, c.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a)
                return this.hasChanged() ? c.clone(this.changed) : !1;
            var b, d = !1, e = this._changing ? this._previousAttributes : this.attributes;
            for (var f in a)
                c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
            return d
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return c.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = this
              , d = a.success;
            return a.success = function(c) {
                return b.set(b.parse(c, a), a) ? (d && d(b, c, a),
                void b.trigger("sync", b, c, a)) : !1
            }
            ,
            L(this, a),
            this.sync("read", this, a)
        },
        save: function(a, b, d) {
            var e, f, g, h = this.attributes;
            if (null == a || "object" == typeof a ? (e = a,
            d = b) : (e = {})[a] = b,
            d = c.extend({
                validate: !0
            }, d),
            e && !d.wait) {
                if (!this.set(e, d))
                    return !1
            } else if (!this._validate(e, d))
                return !1;
            e && d.wait && (this.attributes = c.extend({}, h, e)),
            void 0 === d.parse && (d.parse = !0);
            var i = this
              , j = d.success;
            return d.success = function(a) {
                i.attributes = h;
                var b = i.parse(a, d);
                return d.wait && (b = c.extend(e || {}, b)),
                c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d),
                void i.trigger("sync", i, a, d))
            }
            ,
            L(this, d),
            f = this.isNew() ? "create" : d.patch ? "patch" : "update",
            "patch" === f && (d.attrs = e),
            g = this.sync(f, this, d),
            e && d.wait && (this.attributes = h),
            g
        },
        destroy: function(a) {
            a = a ? c.clone(a) : {};
            var b = this
              , d = a.success
              , e = function() {
                b.trigger("destroy", b, b.collection, a)
            };
            if (a.success = function(c) {
                (a.wait || b.isNew()) && e(),
                d && d(b, c, a),
                b.isNew() || b.trigger("sync", b, c, a)
            }
            ,
            this.isNew())
                return a.success(),
                !1;
            L(this, a);
            var f = this.sync("delete", this, a);
            return a.wait || e(),
            f
        },
        url: function() {
            var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || K();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(a) {
            return this._validate({}, c.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate)
                return !0;
            a = c.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, b) || null;
            return d ? (this.trigger("invalid", this, d, c.extend(b, {
                validationError: d
            })),
            !1) : !0
        }
    });
    var n = ["keys", "values", "pairs", "invert", "pick", "omit"];
    c.each(n, function(a) {
        m.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.attributes),
            c[a].apply(c, b)
        }
    });
    var o = b.Collection = function(a, b) {
        b || (b = {}),
        b.model && (this.model = b.model),
        void 0 !== b.comparator && (this.comparator = b.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        a && this.reset(a, c.extend({
            silent: !0
        }, b))
    }
      , p = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , q = {
        add: !0,
        remove: !1
    };
    c.extend(o.prototype, h, {
        model: m,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return b.sync.apply(this, arguments)
        },
        add: function(a, b) {
            return this.set(a, c.extend({
                merge: !1
            }, b, q))
        },
        remove: function(a, b) {
            var d = !c.isArray(a);
            a = d ? [a] : c.clone(a),
            b || (b = {});
            var e, f, g, h;
            for (e = 0,
            f = a.length; f > e; e++)
                h = a[e] = this.get(a[e]),
                h && (delete this._byId[h.id],
                delete this._byId[h.cid],
                g = this.indexOf(h),
                this.models.splice(g, 1),
                this.length--,
                b.silent || (b.index = g,
                h.trigger("remove", h, this, b)),
                this._removeReference(h, b));
            return d ? a[0] : a
        },
        set: function(a, b) {
            b = c.defaults({}, b, p),
            b.parse && (a = this.parse(a, b));
            var d = !c.isArray(a);
            a = d ? a ? [a] : [] : c.clone(a);
            var e, f, g, h, i, j, k, l = b.at, n = this.model, o = this.comparator && null == l && b.sort !== !1, q = c.isString(this.comparator) ? this.comparator : null, r = [], s = [], t = {}, u = b.add, v = b.merge, w = b.remove, x = !o && u && w ? [] : !1;
            for (e = 0,
            f = a.length; f > e; e++) {
                if (i = a[e] || {},
                g = i instanceof m ? h = i : i[n.prototype.idAttribute || "id"],
                j = this.get(g))
                    w && (t[j.cid] = !0),
                    v && (i = i === h ? h.attributes : i,
                    b.parse && (i = j.parse(i, b)),
                    j.set(i, b),
                    o && !k && j.hasChanged(q) && (k = !0)),
                    a[e] = j;
                else if (u) {
                    if (h = a[e] = this._prepareModel(i, b),
                    !h)
                        continue;
                    r.push(h),
                    this._addReference(h, b)
                }
                h = j || h,
                !x || !h.isNew() && t[h.id] || x.push(h),
                t[h.id] = !0
            }
            if (w) {
                for (e = 0,
                f = this.length; f > e; ++e)
                    t[(h = this.models[e]).cid] || s.push(h);
                s.length && this.remove(s, b)
            }
            if (r.length || x && x.length)
                if (o && (k = !0),
                this.length += r.length,
                null != l)
                    for (e = 0,
                    f = r.length; f > e; e++)
                        this.models.splice(l + e, 0, r[e]);
                else {
                    x && (this.models.length = 0);
                    var y = x || r;
                    for (e = 0,
                    f = y.length; f > e; e++)
                        this.models.push(y[e])
                }
            if (k && this.sort({
                silent: !0
            }),
            !b.silent) {
                for (e = 0,
                f = r.length; f > e; e++)
                    (h = r[e]).trigger("add", h, this, b);
                (k || x && x.length) && this.trigger("sort", this, b)
            }
            return d ? a[0] : a
        },
        reset: function(a, b) {
            b || (b = {});
            for (var d = 0, e = this.models.length; e > d; d++)
                this._removeReference(this.models[d], b);
            return b.previousModels = this.models,
            this._reset(),
            a = this.add(a, c.extend({
                silent: !0
            }, b)),
            b.silent || this.trigger("reset", this, b),
            a
        },
        push: function(a, b) {
            return this.add(a, c.extend({
                at: this.length
            }, b))
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a),
            b
        },
        unshift: function(a, b) {
            return this.add(a, c.extend({
                at: 0
            }, b))
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a),
            b
        },
        slice: function() {
            return g.apply(this.models, arguments)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[a] || this._byId[a.id] || this._byId[a.cid]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, b) {
            return c.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c))
                        return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}),
            c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)),
            a.silent || this.trigger("sort", this, a),
            this
        },
        pluck: function(a) {
            return c.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = a.success
              , d = this;
            return a.success = function(c) {
                var e = a.reset ? "reset" : "set";
                d[e](c, a),
                b && b(d, c, a),
                d.trigger("sync", d, c, a)
            }
            ,
            L(this, a),
            this.sync("read", this, a)
        },
        create: function(a, b) {
            if (b = b ? c.clone(b) : {},
            !(a = this._prepareModel(a, b)))
                return !1;
            b.wait || this.add(a, b);
            var d = this
              , e = b.success;
            return b.success = function(a, c) {
                b.wait && d.add(a, b),
                e && e(a, c, b)
            }
            ,
            a.save(null, b),
            a
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(a, b) {
            if (a instanceof m)
                return a;
            b = b ? c.clone(b) : {},
            b.collection = this;
            var d = new this.model(a,b);
            return d.validationError ? (this.trigger("invalid", this, d.validationError, b),
            !1) : d
        },
        _addReference: function(a) {
            this._byId[a.cid] = a,
            null != a.id && (this._byId[a.id] = a),
            a.collection || (a.collection = this),
            a.on("all", this._onModelEvent, this)
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection,
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d),
            b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)],
            null != b.id && (this._byId[b.id] = b)),
            this.trigger.apply(this, arguments))
        }
    });
    var r = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    c.each(r, function(a) {
        o.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.models),
            c[a].apply(c, b)
        }
    });
    var s = ["groupBy", "countBy", "sortBy", "indexBy"];
    c.each(s, function(a) {
        o.prototype[a] = function(b, d) {
            var e = c.isFunction(b) ? b : function(a) {
                return a.get(b)
            }
            ;
            return c[a](this.models, e, d)
        }
    });
    var t = b.View = function(a) {
        this.cid = c.uniqueId("view"),
        a || (a = {}),
        c.extend(this, c.pick(a, v)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    }
      , u = /^(\S+)\s*(.*)$/
      , v = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    c.extend(t.prototype, h, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(a, c) {
            return this.$el && this.undelegateEvents(),
            this.$el = a instanceof b.$ ? a : b.$(a),
            this.el = this.$el[0],
            c !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(a) {
            if (!a && !(a = c.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var b in a) {
                var d = a[b];
                if (c.isFunction(d) || (d = this[a[b]]),
                d) {
                    var e = b.match(u)
                      , f = e[1]
                      , g = e[2];
                    d = c.bind(d, this),
                    f += ".delegateEvents" + this.cid,
                    "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(c.result(this, "el"), !1);
            else {
                var a = c.extend({}, c.result(this, "attributes"));
                this.id && (a.id = c.result(this, "id")),
                this.className && (a["class"] = c.result(this, "className"));
                var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                this.setElement(d, !1)
            }
        }
    }),
    b.sync = function(a, d, e) {
        var f = x[a];
        c.defaults(e || (e = {}), {
            emulateHTTP: b.emulateHTTP,
            emulateJSON: b.emulateJSON
        });
        var g = {
            type: f,
            dataType: "json"
        };
        if (e.url || (g.url = c.result(d, "url") || K()),
        null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json",
        g.data = JSON.stringify(e.attrs || d.toJSON(e))),
        e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded",
        g.data = g.data ? {
            model: g.data
        } : {}),
        e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
            g.type = "POST",
            e.emulateJSON && (g.data._method = f);
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", f),
                h ? h.apply(this, arguments) : void 0
            }
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1),
        "PATCH" === g.type && w && (g.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        var i = e.xhr = b.ajax(c.extend(g, e));
        return d.trigger("request", d, i, e),
        i
    }
    ;
    var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
      , x = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments)
    }
    ;
    var y = b.Router = function(a) {
        a || (a = {}),
        a.routes && (this.routes = a.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , z = /\((.*?)\)/g
      , A = /(\(\?)?:\w+/g
      , B = /\*\w+/g
      , C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(y.prototype, h, {
        initialize: function() {},
        route: function(a, d, e) {
            c.isRegExp(a) || (a = this._routeToRegExp(a)),
            c.isFunction(d) && (e = d,
            d = ""),
            e || (e = this[d]);
            var f = this;
            return b.history.route(a, function(c) {
                var g = f._extractParameters(a, c);
                f.execute(e, g),
                f.trigger.apply(f, ["route:" + d].concat(g)),
                f.trigger("route", d, g),
                b.history.trigger("route", f, d, g)
            }),
            this
        },
        execute: function(a, b) {
            a && a.apply(this, b)
        },
        navigate: function(a, c) {
            return b.history.navigate(a, c),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = c.result(this, "routes");
                for (var a, b = c.keys(this.routes); null != (a = b.pop()); )
                    this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(C, "\\$&").replace(z, "(?:$1)?").replace(A, function(a, b) {
                return b ? a : "([^/?]+)"
            }).replace(B, "([^?]*?)"),
            new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(a, b) {
            var d = a.exec(b).slice(1);
            return c.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }
    });
    var D = b.History = function() {
        this.handlers = [],
        c.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , E = /^[#\/]|\s+$/g
      , F = /^\/+|\/+$/g
      , G = /msie [\w.]+/
      , H = /\/$/
      , I = /#.*$/;
    D.started = !1,
    c.extend(D.prototype, h, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = decodeURI(this.location.pathname + this.location.search);
                    var c = this.root.replace(H, "");
                    a.indexOf(c) || (a = a.slice(c.length))
                } else
                    a = this.getHash();
            return a.replace(E, "")
        },
        start: function(a) {
            if (D.started)
                throw new Error("Backbone.history has already been started");
            D.started = !0,
            this.options = c.extend({
                root: "/"
            }, this.options, a),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var d = this.getFragment()
              , e = document.documentMode
              , f = G.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
            if (this.root = ("/" + this.root + "/").replace(F, "/"),
            f && this._wantsHashChange) {
                var g = b.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = g.hide().appendTo("body")[0].contentWindow,
                this.navigate(d)
            }
            this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = d;
            var h = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.fragment = this.getFragment(null, !0),
                    this.location.replace(this.root + "#" + this.fragment),
                    !0;
                this._hasPushState && this.atRoot() && h.hash && (this.fragment = this.getHash().replace(E, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            D.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))),
            a === this.fragment ? !1 : (this.iframe && this.navigate(a),
            void this.loadUrl())
        },
        loadUrl: function(a) {
            return a = this.fragment = this.getFragment(a),
            c.any(this.handlers, function(b) {
                return b.route.test(a) ? (b.callback(a),
                !0) : void 0
            })
        },
        navigate: function(a, b) {
            if (!D.started)
                return !1;
            b && b !== !0 || (b = {
                trigger: !!b
            });
            var c = this.root + (a = this.getFragment(a || ""));
            if (a = a.replace(I, ""),
            this.fragment !== a) {
                if (this.fragment = a,
                "" === a && "/" !== c && (c = c.slice(0, -1)),
                this._hasPushState)
                    this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace),
                    this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, a, b.replace))
                }
                return b.trigger ? this.loadUrl(a) : void 0
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else
                a.hash = "#" + b
        }
    }),
    b.history = new D;
    var J = function(a, b) {
        var d, e = this;
        d = a && c.has(a, "constructor") ? a.constructor : function() {
            return e.apply(this, arguments)
        }
        ,
        c.extend(d, e, b);
        var f = function() {
            this.constructor = d
        };
        return f.prototype = e.prototype,
        d.prototype = new f,
        a && c.extend(d.prototype, a),
        d.__super__ = e.prototype,
        d
    };
    m.extend = o.extend = y.extend = t.extend = D.extend = J;
    var K = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , L = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b),
            a.trigger("error", a, d, b)
        }
    };
    return b
}),
define("app/views/app", ["jquery", "underscore", "backbone"], function(a, b, c) {
    var d = c.View.extend({
        el: a(".main-container"),
        setViews: function(a) {
            var b = this.view;
            this.view = a,
            this.view.render(),
            this.view.$el.hide(),
            this.$el.append(this.view.el),
            this.openView(this.view),
            this.closeView(b)
        },
        openView: function(a) {
            a.$el.slideToggle(500)
        },
        closeView: function(b) {
            b && (b.unbind(),
            b.$el.slideToggle(500, function() {
                a(this).remove()
            }))
        }
    });
    return d
}),
define("app/models/contact", ["backbone"], function(a) {
    var b = a.Model.extend({
        defaults: {
            name: null,
            phone: null,
            email: null
        },
        validate: function(a) {
            var b = [];
            return $.trim(a.name) || b.push({
                name: "name",
                message: "Please enter the name field."
            }),
            $.trim(a.phone) || b.push({
                name: "phone",
                message: "Please enter the phone field."
            }),
            $.trim(a.email) && this.validateEmail(a.email) || b.push({
                name: "email",
                message: "Please enter the valid email field."
            }),
            b.length > 0 ? b : !1
        },
        validateEmail: function(a) {
            var b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return b.test(a)
        }
    });
    return b
});
var Handlebars = function() {
    var a = function() {
        "use strict";
        function a(a) {
            this.string = a
        }
        var b;
        return a.prototype.toString = function() {
            return "" + this.string
        }
        ,
        b = a
    }()
      , b = function(a) {
        "use strict";
        function b(a) {
            return h[a] || "&amp;"
        }
        function c(a, b) {
            for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
        }
        function d(a) {
            return a instanceof g ? a.toString() : a || 0 === a ? (a = "" + a,
            j.test(a) ? a.replace(i, b) : a) : ""
        }
        function e(a) {
            return a || 0 === a ? m(a) && 0 === a.length ? !0 : !1 : !0
        }
        var f = {}
          , g = a
          , h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , i = /[&<>"'`]/g
          , j = /[&<>"'`]/;
        f.extend = c;
        var k = Object.prototype.toString;
        f.toString = k;
        var l = function(a) {
            return "function" == typeof a
        };
        l(/x/) && (l = function(a) {
            return "function" == typeof a && "[object Function]" === k.call(a)
        }
        );
        var l;
        f.isFunction = l;
        var m = Array.isArray || function(a) {
            return a && "object" == typeof a ? "[object Array]" === k.call(a) : !1
        }
        ;
        return f.isArray = m,
        f.escapeExpression = d,
        f.isEmpty = e,
        f
    }(a)
      , c = function() {
        "use strict";
        function a(a, b) {
            var d;
            b && b.firstLine && (d = b.firstLine,
            a += " - " + d + ":" + b.firstColumn);
            for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++)
                this[c[f]] = e[c[f]];
            d && (this.lineNumber = d,
            this.column = b.firstColumn)
        }
        var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return a.prototype = new Error,
        b = a
    }()
      , d = function(a, b) {
        "use strict";
        function c(a, b) {
            this.helpers = a || {},
            this.partials = b || {},
            d(this)
        }
        function d(a) {
            a.registerHelper("helperMissing", function(a) {
                if (2 === arguments.length)
                    return void 0;
                throw new h("Missing helper: '" + a + "'")
            }),
            a.registerHelper("blockHelperMissing", function(b, c) {
                var d = c.inverse || function() {}
                  , e = c.fn;
                return m(b) && (b = b.call(this)),
                b === !0 ? e(this) : b === !1 || null == b ? d(this) : l(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b)
            }),
            a.registerHelper("each", function(a, b) {
                var c, d = b.fn, e = b.inverse, f = 0, g = "";
                if (m(a) && (a = a.call(this)),
                b.data && (c = q(b.data)),
                a && "object" == typeof a)
                    if (l(a))
                        for (var h = a.length; h > f; f++)
                            c && (c.index = f,
                            c.first = 0 === f,
                            c.last = f === a.length - 1),
                            g += d(a[f], {
                                data: c
                            });
                    else
                        for (var i in a)
                            a.hasOwnProperty(i) && (c && (c.key = i,
                            c.index = f,
                            c.first = 0 === f),
                            g += d(a[i], {
                                data: c
                            }),
                            f++);
                return 0 === f && (g = e(this)),
                g
            }),
            a.registerHelper("if", function(a, b) {
                return m(a) && (a = a.call(this)),
                !b.hash.includeZero && !a || g.isEmpty(a) ? b.inverse(this) : b.fn(this)
            }),
            a.registerHelper("unless", function(b, c) {
                return a.helpers["if"].call(this, b, {
                    fn: c.inverse,
                    inverse: c.fn,
                    hash: c.hash
                })
            }),
            a.registerHelper("with", function(a, b) {
                return m(a) && (a = a.call(this)),
                g.isEmpty(a) ? void 0 : b.fn(a)
            }),
            a.registerHelper("log", function(b, c) {
                var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                a.log(d, b)
            })
        }
        function e(a, b) {
            p.log(a, b)
        }
        var f = {}
          , g = a
          , h = b
          , i = "1.3.0";
        f.VERSION = i;
        var j = 4;
        f.COMPILER_REVISION = j;
        var k = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: ">= 1.0.0"
        };
        f.REVISION_CHANGES = k;
        var l = g.isArray
          , m = g.isFunction
          , n = g.toString
          , o = "[object Object]";
        f.HandlebarsEnvironment = c,
        c.prototype = {
            constructor: c,
            logger: p,
            log: e,
            registerHelper: function(a, b, c) {
                if (n.call(a) === o) {
                    if (c || b)
                        throw new h("Arg not supported with multiple helpers");
                    g.extend(this.helpers, a)
                } else
                    c && (b.not = c),
                    this.helpers[a] = b
            },
            registerPartial: function(a, b) {
                n.call(a) === o ? g.extend(this.partials, a) : this.partials[a] = b
            }
        };
        var p = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(a, b) {
                if (p.level <= a) {
                    var c = p.methodMap[a];
                    "undefined" != typeof console && console[c] && console[c].call(console, b)
                }
            }
        };
        f.logger = p,
        f.log = e;
        var q = function(a) {
            var b = {};
            return g.extend(b, a),
            b
        };
        return f.createFrame = q,
        f
    }(b, c)
      , e = function(a, b, c) {
        "use strict";
        function d(a) {
            var b = a && a[0] || 1
              , c = m;
            if (b !== c) {
                if (c > b) {
                    var d = n[c]
                      , e = n[b];
                    throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                }
                throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
            }
        }
        function e(a, b) {
            if (!b)
                throw new l("No environment passed to template");
            var c = function(a, c, d, e, f, g) {
                var h = b.VM.invokePartial.apply(this, arguments);
                if (null != h)
                    return h;
                if (b.compile) {
                    var i = {
                        helpers: e,
                        partials: f,
                        data: g
                    };
                    return f[c] = b.compile(a, {
                        data: void 0 !== g
                    }, b),
                    f[c](d, i)
                }
                throw new l("The partial " + c + " could not be compiled when running in runtime-only mode")
            }
              , d = {
                escapeExpression: k.escapeExpression,
                invokePartial: c,
                programs: [],
                program: function(a, b, c) {
                    var d = this.programs[a];
                    return c ? d = g(a, b, c) : d || (d = this.programs[a] = g(a, b)),
                    d
                },
                merge: function(a, b) {
                    var c = a || b;
                    return a && b && a !== b && (c = {},
                    k.extend(c, b),
                    k.extend(c, a)),
                    c
                },
                programWithDepth: b.VM.programWithDepth,
                noop: b.VM.noop,
                compilerInfo: null
            };
            return function(c, e) {
                e = e || {};
                var f, g, h = e.partial ? e : b;
                e.partial || (f = e.helpers,
                g = e.partials);
                var i = a.call(d, h, c, f, g, e.data);
                return e.partial || b.VM.checkRevision(d.compilerInfo),
                i
            }
        }
        function f(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3)
              , e = function(a, e) {
                return e = e || {},
                b.apply(this, [a, e.data || c].concat(d))
            };
            return e.program = a,
            e.depth = d.length,
            e
        }
        function g(a, b, c) {
            var d = function(a, d) {
                return d = d || {},
                b(a, d.data || c)
            };
            return d.program = a,
            d.depth = 0,
            d
        }
        function h(a, b, c, d, e, f) {
            var g = {
                partial: !0,
                helpers: d,
                partials: e,
                data: f
            };
            if (void 0 === a)
                throw new l("The partial " + b + " could not be found");
            return a instanceof Function ? a(c, g) : void 0
        }
        function i() {
            return ""
        }
        var j = {}
          , k = a
          , l = b
          , m = c.COMPILER_REVISION
          , n = c.REVISION_CHANGES;
        return j.checkRevision = d,
        j.template = e,
        j.programWithDepth = f,
        j.program = g,
        j.invokePartial = h,
        j.noop = i,
        j
    }(b, c, d)
      , f = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c, j = d, k = e, l = function() {
            var a = new g.HandlebarsEnvironment;
            return j.extend(a, g),
            a.SafeString = h,
            a.Exception = i,
            a.Utils = j,
            a.VM = k,
            a.template = function(b) {
                return k.template(b, a)
            }
            ,
            a
        }, m = l();
        return m.create = l,
        f = m
    }(d, a, c, b, e)
      , g = function(a) {
        "use strict";
        function b(a) {
            a = a || {},
            this.firstLine = a.first_line,
            this.firstColumn = a.first_column,
            this.lastColumn = a.last_column,
            this.lastLine = a.last_line
        }
        var c, d = a, e = {
            ProgramNode: function(a, c, d, f) {
                var g, h;
                3 === arguments.length ? (f = d,
                d = null) : 2 === arguments.length && (f = c,
                c = null),
                b.call(this, f),
                this.type = "program",
                this.statements = a,
                this.strip = {},
                d ? (h = d[0],
                h ? (g = {
                    first_line: h.firstLine,
                    last_line: h.lastLine,
                    last_column: h.lastColumn,
                    first_column: h.firstColumn
                },
                this.inverse = new e.ProgramNode(d,c,g)) : this.inverse = new e.ProgramNode(d,c),
                this.strip.right = c.left) : c && (this.strip.left = c.right)
            },
            MustacheNode: function(a, c, d, f, g) {
                if (b.call(this, g),
                this.type = "mustache",
                this.strip = f,
                null != d && d.charAt) {
                    var h = d.charAt(3) || d.charAt(2);
                    this.escaped = "{" !== h && "&" !== h
                } else
                    this.escaped = !!d;
                this.sexpr = a instanceof e.SexprNode ? a : new e.SexprNode(a,c),
                this.sexpr.isRoot = !0,
                this.id = this.sexpr.id,
                this.params = this.sexpr.params,
                this.hash = this.sexpr.hash,
                this.eligibleHelper = this.sexpr.eligibleHelper,
                this.isHelper = this.sexpr.isHelper
            },
            SexprNode: function(a, c, d) {
                b.call(this, d),
                this.type = "sexpr",
                this.hash = c;
                var e = this.id = a[0]
                  , f = this.params = a.slice(1)
                  , g = this.eligibleHelper = e.isSimple;
                this.isHelper = g && (f.length || c)
            },
            PartialNode: function(a, c, d, e) {
                b.call(this, e),
                this.type = "partial",
                this.partialName = a,
                this.context = c,
                this.strip = d
            },
            BlockNode: function(a, c, e, f, g) {
                if (b.call(this, g),
                a.sexpr.id.original !== f.path.original)
                    throw new d(a.sexpr.id.original + " doesn't match " + f.path.original,this);
                this.type = "block",
                this.mustache = a,
                this.program = c,
                this.inverse = e,
                this.strip = {
                    left: a.strip.left,
                    right: f.strip.right
                },
                (c || e).strip.left = a.strip.right,
                (e || c).strip.right = f.strip.left,
                e && !c && (this.isInverse = !0)
            },
            ContentNode: function(a, c) {
                b.call(this, c),
                this.type = "content",
                this.string = a
            },
            HashNode: function(a, c) {
                b.call(this, c),
                this.type = "hash",
                this.pairs = a
            },
            IdNode: function(a, c) {
                b.call(this, c),
                this.type = "ID";
                for (var e = "", f = [], g = 0, h = 0, i = a.length; i > h; h++) {
                    var j = a[h].part;
                    if (e += (a[h].separator || "") + j,
                    ".." === j || "." === j || "this" === j) {
                        if (f.length > 0)
                            throw new d("Invalid path: " + e,this);
                        ".." === j ? g++ : this.isScoped = !0
                    } else
                        f.push(j)
                }
                this.original = e,
                this.parts = f,
                this.string = f.join("."),
                this.depth = g,
                this.isSimple = 1 === a.length && !this.isScoped && 0 === g,
                this.stringModeValue = this.string
            },
            PartialNameNode: function(a, c) {
                b.call(this, c),
                this.type = "PARTIAL_NAME",
                this.name = a.original
            },
            DataNode: function(a, c) {
                b.call(this, c),
                this.type = "DATA",
                this.id = a
            },
            StringNode: function(a, c) {
                b.call(this, c),
                this.type = "STRING",
                this.original = this.string = this.stringModeValue = a
            },
            IntegerNode: function(a, c) {
                b.call(this, c),
                this.type = "INTEGER",
                this.original = this.integer = a,
                this.stringModeValue = Number(a)
            },
            BooleanNode: function(a, c) {
                b.call(this, c),
                this.type = "BOOLEAN",
                this.bool = a,
                this.stringModeValue = "true" === a
            },
            CommentNode: function(a, c) {
                b.call(this, c),
                this.type = "comment",
                this.comment = a
            }
        };
        return c = e
    }(c)
      , h = function() {
        "use strict";
        var a, b = function() {
            function a(a, b) {
                return {
                    left: "~" === a.charAt(2),
                    right: "~" === b.charAt(0) || "~" === b.charAt(1)
                }
            }
            function b() {
                this.yy = {}
            }
            var c = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    statements: 4,
                    EOF: 5,
                    program: 6,
                    simpleInverse: 7,
                    statement: 8,
                    openInverse: 9,
                    closeBlock: 10,
                    openBlock: 11,
                    mustache: 12,
                    partial: 13,
                    CONTENT: 14,
                    COMMENT: 15,
                    OPEN_BLOCK: 16,
                    sexpr: 17,
                    CLOSE: 18,
                    OPEN_INVERSE: 19,
                    OPEN_ENDBLOCK: 20,
                    path: 21,
                    OPEN: 22,
                    OPEN_UNESCAPED: 23,
                    CLOSE_UNESCAPED: 24,
                    OPEN_PARTIAL: 25,
                    partialName: 26,
                    partial_option0: 27,
                    sexpr_repetition0: 28,
                    sexpr_option0: 29,
                    dataName: 30,
                    param: 31,
                    STRING: 32,
                    INTEGER: 33,
                    BOOLEAN: 34,
                    OPEN_SEXPR: 35,
                    CLOSE_SEXPR: 36,
                    hash: 37,
                    hash_repetition_plus0: 38,
                    hashSegment: 39,
                    ID: 40,
                    EQUALS: 41,
                    DATA: 42,
                    pathSegments: 43,
                    SEP: 44,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    14: "CONTENT",
                    15: "COMMENT",
                    16: "OPEN_BLOCK",
                    18: "CLOSE",
                    19: "OPEN_INVERSE",
                    20: "OPEN_ENDBLOCK",
                    22: "OPEN",
                    23: "OPEN_UNESCAPED",
                    24: "CLOSE_UNESCAPED",
                    25: "OPEN_PARTIAL",
                    32: "STRING",
                    33: "INTEGER",
                    34: "BOOLEAN",
                    35: "OPEN_SEXPR",
                    36: "CLOSE_SEXPR",
                    40: "ID",
                    41: "EQUALS",
                    42: "DATA",
                    44: "SEP"
                },
                productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]],
                performAction: function(b, c, d, e, f, g) {
                    var h = g.length - 1;
                    switch (f) {
                    case 1:
                        return new e.ProgramNode(g[h - 1],this._$);
                    case 2:
                        return new e.ProgramNode([],this._$);
                    case 3:
                        this.$ = new e.ProgramNode([],g[h - 1],g[h],this._$);
                        break;
                    case 4:
                        this.$ = new e.ProgramNode(g[h - 2],g[h - 1],g[h],this._$);
                        break;
                    case 5:
                        this.$ = new e.ProgramNode(g[h - 1],g[h],[],this._$);
                        break;
                    case 6:
                        this.$ = new e.ProgramNode(g[h],this._$);
                        break;
                    case 7:
                        this.$ = new e.ProgramNode([],this._$);
                        break;
                    case 8:
                        this.$ = new e.ProgramNode([],this._$);
                        break;
                    case 9:
                        this.$ = [g[h]];
                        break;
                    case 10:
                        g[h - 1].push(g[h]),
                        this.$ = g[h - 1];
                        break;
                    case 11:
                        this.$ = new e.BlockNode(g[h - 2],g[h - 1].inverse,g[h - 1],g[h],this._$);
                        break;
                    case 12:
                        this.$ = new e.BlockNode(g[h - 2],g[h - 1],g[h - 1].inverse,g[h],this._$);
                        break;
                    case 13:
                        this.$ = g[h];
                        break;
                    case 14:
                        this.$ = g[h];
                        break;
                    case 15:
                        this.$ = new e.ContentNode(g[h],this._$);
                        break;
                    case 16:
                        this.$ = new e.CommentNode(g[h],this._$);
                        break;
                    case 17:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 18:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 19:
                        this.$ = {
                            path: g[h - 1],
                            strip: a(g[h - 2], g[h])
                        };
                        break;
                    case 20:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 21:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 22:
                        this.$ = new e.PartialNode(g[h - 2],g[h - 1],a(g[h - 3], g[h]),this._$);
                        break;
                    case 23:
                        this.$ = a(g[h - 1], g[h]);
                        break;
                    case 24:
                        this.$ = new e.SexprNode([g[h - 2]].concat(g[h - 1]),g[h],this._$);
                        break;
                    case 25:
                        this.$ = new e.SexprNode([g[h]],null,this._$);
                        break;
                    case 26:
                        this.$ = g[h];
                        break;
                    case 27:
                        this.$ = new e.StringNode(g[h],this._$);
                        break;
                    case 28:
                        this.$ = new e.IntegerNode(g[h],this._$);
                        break;
                    case 29:
                        this.$ = new e.BooleanNode(g[h],this._$);
                        break;
                    case 30:
                        this.$ = g[h];
                        break;
                    case 31:
                        g[h - 1].isHelper = !0,
                        this.$ = g[h - 1];
                        break;
                    case 32:
                        this.$ = new e.HashNode(g[h],this._$);
                        break;
                    case 33:
                        this.$ = [g[h - 2], g[h]];
                        break;
                    case 34:
                        this.$ = new e.PartialNameNode(g[h],this._$);
                        break;
                    case 35:
                        this.$ = new e.PartialNameNode(new e.StringNode(g[h],this._$),this._$);
                        break;
                    case 36:
                        this.$ = new e.PartialNameNode(new e.IntegerNode(g[h],this._$));
                        break;
                    case 37:
                        this.$ = new e.DataNode(g[h],this._$);
                        break;
                    case 38:
                        this.$ = new e.IdNode(g[h],this._$);
                        break;
                    case 39:
                        g[h - 2].push({
                            part: g[h],
                            separator: g[h - 1]
                        }),
                        this.$ = g[h - 2];
                        break;
                    case 40:
                        this.$ = [{
                            part: g[h]
                        }];
                        break;
                    case 43:
                        this.$ = [];
                        break;
                    case 44:
                        g[h - 1].push(g[h]);
                        break;
                    case 47:
                        this.$ = [g[h]];
                        break;
                    case 48:
                        g[h - 1].push(g[h])
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [1, 3],
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    1: [3]
                }, {
                    5: [1, 16],
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    1: [2, 2]
                }, {
                    5: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    16: [2, 9],
                    19: [2, 9],
                    20: [2, 9],
                    22: [2, 9],
                    23: [2, 9],
                    25: [2, 9]
                }, {
                    4: 20,
                    6: 18,
                    7: 19,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 8],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    4: 20,
                    6: 22,
                    7: 19,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 8],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    5: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    16: [2, 13],
                    19: [2, 13],
                    20: [2, 13],
                    22: [2, 13],
                    23: [2, 13],
                    25: [2, 13]
                }, {
                    5: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    16: [2, 14],
                    19: [2, 14],
                    20: [2, 14],
                    22: [2, 14],
                    23: [2, 14],
                    25: [2, 14]
                }, {
                    5: [2, 15],
                    14: [2, 15],
                    15: [2, 15],
                    16: [2, 15],
                    19: [2, 15],
                    20: [2, 15],
                    22: [2, 15],
                    23: [2, 15],
                    25: [2, 15]
                }, {
                    5: [2, 16],
                    14: [2, 16],
                    15: [2, 16],
                    16: [2, 16],
                    19: [2, 16],
                    20: [2, 16],
                    22: [2, 16],
                    23: [2, 16],
                    25: [2, 16]
                }, {
                    17: 23,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    17: 29,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    17: 30,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    17: 31,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    21: 33,
                    26: 32,
                    32: [1, 34],
                    33: [1, 35],
                    40: [1, 28],
                    43: 26
                }, {
                    1: [2, 1]
                }, {
                    5: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    16: [2, 10],
                    19: [2, 10],
                    20: [2, 10],
                    22: [2, 10],
                    23: [2, 10],
                    25: [2, 10]
                }, {
                    10: 36,
                    20: [1, 37]
                }, {
                    4: 38,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 7],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    7: 39,
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 6],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    17: 23,
                    18: [1, 40],
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    10: 41,
                    20: [1, 37]
                }, {
                    18: [1, 42]
                }, {
                    18: [2, 43],
                    24: [2, 43],
                    28: 43,
                    32: [2, 43],
                    33: [2, 43],
                    34: [2, 43],
                    35: [2, 43],
                    36: [2, 43],
                    40: [2, 43],
                    42: [2, 43]
                }, {
                    18: [2, 25],
                    24: [2, 25],
                    36: [2, 25]
                }, {
                    18: [2, 38],
                    24: [2, 38],
                    32: [2, 38],
                    33: [2, 38],
                    34: [2, 38],
                    35: [2, 38],
                    36: [2, 38],
                    40: [2, 38],
                    42: [2, 38],
                    44: [1, 44]
                }, {
                    21: 45,
                    40: [1, 28],
                    43: 26
                }, {
                    18: [2, 40],
                    24: [2, 40],
                    32: [2, 40],
                    33: [2, 40],
                    34: [2, 40],
                    35: [2, 40],
                    36: [2, 40],
                    40: [2, 40],
                    42: [2, 40],
                    44: [2, 40]
                }, {
                    18: [1, 46]
                }, {
                    18: [1, 47]
                }, {
                    24: [1, 48]
                }, {
                    18: [2, 41],
                    21: 50,
                    27: 49,
                    40: [1, 28],
                    43: 26
                }, {
                    18: [2, 34],
                    40: [2, 34]
                }, {
                    18: [2, 35],
                    40: [2, 35]
                }, {
                    18: [2, 36],
                    40: [2, 36]
                }, {
                    5: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    16: [2, 11],
                    19: [2, 11],
                    20: [2, 11],
                    22: [2, 11],
                    23: [2, 11],
                    25: [2, 11]
                }, {
                    21: 51,
                    40: [1, 28],
                    43: 26
                }, {
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 3],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    4: 52,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 5],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    14: [2, 23],
                    15: [2, 23],
                    16: [2, 23],
                    19: [2, 23],
                    20: [2, 23],
                    22: [2, 23],
                    23: [2, 23],
                    25: [2, 23]
                }, {
                    5: [2, 12],
                    14: [2, 12],
                    15: [2, 12],
                    16: [2, 12],
                    19: [2, 12],
                    20: [2, 12],
                    22: [2, 12],
                    23: [2, 12],
                    25: [2, 12]
                }, {
                    14: [2, 18],
                    15: [2, 18],
                    16: [2, 18],
                    19: [2, 18],
                    20: [2, 18],
                    22: [2, 18],
                    23: [2, 18],
                    25: [2, 18]
                }, {
                    18: [2, 45],
                    21: 56,
                    24: [2, 45],
                    29: 53,
                    30: 60,
                    31: 54,
                    32: [1, 57],
                    33: [1, 58],
                    34: [1, 59],
                    35: [1, 61],
                    36: [2, 45],
                    37: 55,
                    38: 62,
                    39: 63,
                    40: [1, 64],
                    42: [1, 27],
                    43: 26
                }, {
                    40: [1, 65]
                }, {
                    18: [2, 37],
                    24: [2, 37],
                    32: [2, 37],
                    33: [2, 37],
                    34: [2, 37],
                    35: [2, 37],
                    36: [2, 37],
                    40: [2, 37],
                    42: [2, 37]
                }, {
                    14: [2, 17],
                    15: [2, 17],
                    16: [2, 17],
                    19: [2, 17],
                    20: [2, 17],
                    22: [2, 17],
                    23: [2, 17],
                    25: [2, 17]
                }, {
                    5: [2, 20],
                    14: [2, 20],
                    15: [2, 20],
                    16: [2, 20],
                    19: [2, 20],
                    20: [2, 20],
                    22: [2, 20],
                    23: [2, 20],
                    25: [2, 20]
                }, {
                    5: [2, 21],
                    14: [2, 21],
                    15: [2, 21],
                    16: [2, 21],
                    19: [2, 21],
                    20: [2, 21],
                    22: [2, 21],
                    23: [2, 21],
                    25: [2, 21]
                }, {
                    18: [1, 66]
                }, {
                    18: [2, 42]
                }, {
                    18: [1, 67]
                }, {
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 4],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    18: [2, 24],
                    24: [2, 24],
                    36: [2, 24]
                }, {
                    18: [2, 44],
                    24: [2, 44],
                    32: [2, 44],
                    33: [2, 44],
                    34: [2, 44],
                    35: [2, 44],
                    36: [2, 44],
                    40: [2, 44],
                    42: [2, 44]
                }, {
                    18: [2, 46],
                    24: [2, 46],
                    36: [2, 46]
                }, {
                    18: [2, 26],
                    24: [2, 26],
                    32: [2, 26],
                    33: [2, 26],
                    34: [2, 26],
                    35: [2, 26],
                    36: [2, 26],
                    40: [2, 26],
                    42: [2, 26]
                }, {
                    18: [2, 27],
                    24: [2, 27],
                    32: [2, 27],
                    33: [2, 27],
                    34: [2, 27],
                    35: [2, 27],
                    36: [2, 27],
                    40: [2, 27],
                    42: [2, 27]
                }, {
                    18: [2, 28],
                    24: [2, 28],
                    32: [2, 28],
                    33: [2, 28],
                    34: [2, 28],
                    35: [2, 28],
                    36: [2, 28],
                    40: [2, 28],
                    42: [2, 28]
                }, {
                    18: [2, 29],
                    24: [2, 29],
                    32: [2, 29],
                    33: [2, 29],
                    34: [2, 29],
                    35: [2, 29],
                    36: [2, 29],
                    40: [2, 29],
                    42: [2, 29]
                }, {
                    18: [2, 30],
                    24: [2, 30],
                    32: [2, 30],
                    33: [2, 30],
                    34: [2, 30],
                    35: [2, 30],
                    36: [2, 30],
                    40: [2, 30],
                    42: [2, 30]
                }, {
                    17: 68,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    18: [2, 32],
                    24: [2, 32],
                    36: [2, 32],
                    39: 69,
                    40: [1, 70]
                }, {
                    18: [2, 47],
                    24: [2, 47],
                    36: [2, 47],
                    40: [2, 47]
                }, {
                    18: [2, 40],
                    24: [2, 40],
                    32: [2, 40],
                    33: [2, 40],
                    34: [2, 40],
                    35: [2, 40],
                    36: [2, 40],
                    40: [2, 40],
                    41: [1, 71],
                    42: [2, 40],
                    44: [2, 40]
                }, {
                    18: [2, 39],
                    24: [2, 39],
                    32: [2, 39],
                    33: [2, 39],
                    34: [2, 39],
                    35: [2, 39],
                    36: [2, 39],
                    40: [2, 39],
                    42: [2, 39],
                    44: [2, 39]
                }, {
                    5: [2, 22],
                    14: [2, 22],
                    15: [2, 22],
                    16: [2, 22],
                    19: [2, 22],
                    20: [2, 22],
                    22: [2, 22],
                    23: [2, 22],
                    25: [2, 22]
                }, {
                    5: [2, 19],
                    14: [2, 19],
                    15: [2, 19],
                    16: [2, 19],
                    19: [2, 19],
                    20: [2, 19],
                    22: [2, 19],
                    23: [2, 19],
                    25: [2, 19]
                }, {
                    36: [1, 72]
                }, {
                    18: [2, 48],
                    24: [2, 48],
                    36: [2, 48],
                    40: [2, 48]
                }, {
                    41: [1, 71]
                }, {
                    21: 56,
                    30: 60,
                    31: 73,
                    32: [1, 57],
                    33: [1, 58],
                    34: [1, 59],
                    35: [1, 61],
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    18: [2, 31],
                    24: [2, 31],
                    32: [2, 31],
                    33: [2, 31],
                    34: [2, 31],
                    35: [2, 31],
                    36: [2, 31],
                    40: [2, 31],
                    42: [2, 31]
                }, {
                    18: [2, 33],
                    24: [2, 33],
                    36: [2, 33],
                    40: [2, 33]
                }],
                defaultActions: {
                    3: [2, 2],
                    16: [2, 1],
                    50: [2, 42]
                },
                parseError: function(a) {
                    throw new Error(a)
                },
                parse: function(a) {
                    function b() {
                        var a;
                        return a = c.lexer.lex() || 1,
                        "number" != typeof a && (a = c.symbols_[a] || a),
                        a
                    }
                    var c = this
                      , d = [0]
                      , e = [null]
                      , f = []
                      , g = this.table
                      , h = ""
                      , i = 0
                      , j = 0
                      , k = 0;
                    this.lexer.setInput(a),
                    this.lexer.yy = this.yy,
                    this.yy.lexer = this.lexer,
                    this.yy.parser = this,
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var l = this.lexer.yylloc;
                    f.push(l);
                    var m = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var n, o, p, q, r, s, t, u, v, w = {}; ; ) {
                        if (p = d[d.length - 1],
                        this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()),
                        q = g[p] && g[p][n]),
                        "undefined" == typeof q || !q.length || !q[0]) {
                            var x = "";
                            if (!k) {
                                v = [];
                                for (s in g[p])
                                    this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"),
                                this.parseError(x, {
                                    text: this.lexer.match,
                                    token: this.terminals_[n] || n,
                                    line: this.lexer.yylineno,
                                    loc: l,
                                    expected: v
                                })
                            }
                        }
                        if (q[0]instanceof Array && q.length > 1)
                            throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                        switch (q[0]) {
                        case 1:
                            d.push(n),
                            e.push(this.lexer.yytext),
                            f.push(this.lexer.yylloc),
                            d.push(q[1]),
                            n = null,
                            o ? (n = o,
                            o = null) : (j = this.lexer.yyleng,
                            h = this.lexer.yytext,
                            i = this.lexer.yylineno,
                            l = this.lexer.yylloc,
                            k > 0 && k--);
                            break;
                        case 2:
                            if (t = this.productions_[q[1]][1],
                            w.$ = e[e.length - t],
                            w._$ = {
                                first_line: f[f.length - (t || 1)].first_line,
                                last_line: f[f.length - 1].last_line,
                                first_column: f[f.length - (t || 1)].first_column,
                                last_column: f[f.length - 1].last_column
                            },
                            m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]),
                            r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f),
                            "undefined" != typeof r)
                                return r;
                            t && (d = d.slice(0, -1 * t * 2),
                            e = e.slice(0, -1 * t),
                            f = f.slice(0, -1 * t)),
                            d.push(this.productions_[q[1]][0]),
                            e.push(w.$),
                            f.push(w._$),
                            u = g[d[d.length - 2]][d[d.length - 1]],
                            d.push(u);
                            break;
                        case 3:
                            return !0
                        }
                    }
                    return !0
                }
            }
              , d = function() {
                var a = {
                    EOF: 1,
                    parseError: function(a, b) {
                        if (!this.yy.parser)
                            throw new Error(a);
                        this.yy.parser.parseError(a, b)
                    },
                    setInput: function(a) {
                        return this._input = a,
                        this._more = this._less = this.done = !1,
                        this.yylineno = this.yyleng = 0,
                        this.yytext = this.matched = this.match = "",
                        this.conditionStack = ["INITIAL"],
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        },
                        this.options.ranges && (this.yylloc.range = [0, 0]),
                        this.offset = 0,
                        this
                    },
                    input: function() {
                        var a = this._input[0];
                        this.yytext += a,
                        this.yyleng++,
                        this.offset++,
                        this.match += a,
                        this.matched += a;
                        var b = a.match(/(?:\r\n?|\n).*/g);
                        return b ? (this.yylineno++,
                        this.yylloc.last_line++) : this.yylloc.last_column++,
                        this.options.ranges && this.yylloc.range[1]++,
                        this._input = this._input.slice(1),
                        a
                    },
                    unput: function(a) {
                        var b = a.length
                          , c = a.split(/(?:\r\n?|\n)/g);
                        this._input = a + this._input,
                        this.yytext = this.yytext.substr(0, this.yytext.length - b - 1),
                        this.offset -= b;
                        var d = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1),
                        this.matched = this.matched.substr(0, this.matched.length - 1),
                        c.length - 1 && (this.yylineno -= c.length - 1);
                        var e = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                        },
                        this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]),
                        this
                    },
                    more: function() {
                        return this._more = !0,
                        this
                    },
                    less: function(a) {
                        this.unput(this.match.slice(a))
                    },
                    pastInput: function() {
                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var a = this.match;
                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)),
                        (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var a = this.pastInput()
                          , b = new Array(a.length + 1).join("-");
                        return a + this.upcomingInput() + "\n" + b + "^"
                    },
                    next: function() {
                        if (this.done)
                            return this.EOF;
                        this._input || (this.done = !0);
                        var a, b, c, d, e;
                        this._more || (this.yytext = "",
                        this.match = "");
                        for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]),
                        !c || b && !(c[0].length > b[0].length) || (b = c,
                        d = g,
                        this.options.flex)); g++)
                            ;
                        return b ? (e = b[0].match(/(?:\r\n?|\n).*/g),
                        e && (this.yylineno += e.length),
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                        },
                        this.yytext += b[0],
                        this.match += b[0],
                        this.matches = b,
                        this.yyleng = this.yytext.length,
                        this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                        this._more = !1,
                        this._input = this._input.slice(b[0].length),
                        this.matched += b[0],
                        a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]),
                        this.done && this._input && (this.done = !1),
                        a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var a = this.next();
                        return "undefined" != typeof a ? a : this.lex()
                    },
                    begin: function(a) {
                        this.conditionStack.push(a)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(a) {
                        this.begin(a)
                    }
                };
                return a.options = {},
                a.performAction = function(a, b, c, d) {
                    function e(a, c) {
                        return b.yytext = b.yytext.substr(a, b.yyleng - c)
                    }
                    switch (c) {
                    case 0:
                        if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1),
                        this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1),
                        this.begin("emu")) : this.begin("mu"),
                        b.yytext)
                            return 14;
                        break;
                    case 1:
                        return 14;
                    case 2:
                        return this.popState(),
                        14;
                    case 3:
                        return e(0, 4),
                        this.popState(),
                        15;
                    case 4:
                        return 35;
                    case 5:
                        return 36;
                    case 6:
                        return 25;
                    case 7:
                        return 16;
                    case 8:
                        return 20;
                    case 9:
                        return 19;
                    case 10:
                        return 19;
                    case 11:
                        return 23;
                    case 12:
                        return 22;
                    case 13:
                        this.popState(),
                        this.begin("com");
                        break;
                    case 14:
                        return e(3, 5),
                        this.popState(),
                        15;
                    case 15:
                        return 22;
                    case 16:
                        return 41;
                    case 17:
                        return 40;
                    case 18:
                        return 40;
                    case 19:
                        return 44;
                    case 20:
                        break;
                    case 21:
                        return this.popState(),
                        24;
                    case 22:
                        return this.popState(),
                        18;
                    case 23:
                        return b.yytext = e(1, 2).replace(/\\"/g, '"'),
                        32;
                    case 24:
                        return b.yytext = e(1, 2).replace(/\\'/g, "'"),
                        32;
                    case 25:
                        return 42;
                    case 26:
                        return 34;
                    case 27:
                        return 34;
                    case 28:
                        return 33;
                    case 29:
                        return 40;
                    case 30:
                        return b.yytext = e(1, 2),
                        40;
                    case 31:
                        return "INVALID";
                    case 32:
                        return 5
                    }
                }
                ,
                a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
                a.conditions = {
                    mu: {
                        rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                        inclusive: !1
                    },
                    emu: {
                        rules: [2],
                        inclusive: !1
                    },
                    com: {
                        rules: [3],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 32],
                        inclusive: !0
                    }
                },
                a
            }();
            return c.lexer = d,
            b.prototype = c,
            c.Parser = b,
            new b
        }();
        return a = b
    }()
      , i = function(a, b) {
        "use strict";
        function c(a) {
            return a.constructor === f.ProgramNode ? a : (e.yy = f,
            e.parse(a))
        }
        var d = {}
          , e = a
          , f = b;
        return d.parser = e,
        d.parse = c,
        d
    }(h, g)
      , j = function(a) {
        "use strict";
        function b() {}
        function c(a, b, c) {
            if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode)
                throw new f("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
            b = b || {},
            "data"in b || (b.data = !0);
            var d = c.parse(a)
              , e = (new c.Compiler).compile(d, b);
            return (new c.JavaScriptCompiler).compile(e, b)
        }
        function d(a, b, c) {
            function d() {
                var d = c.parse(a)
                  , e = (new c.Compiler).compile(d, b)
                  , f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                return c.template(f)
            }
            if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode)
                throw new f("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
            b = b || {},
            "data"in b || (b.data = !0);
            var e;
            return function(a, b) {
                return e || (e = d()),
                e.call(this, a, b)
            }
        }
        var e = {}
          , f = a;
        return e.Compiler = b,
        b.prototype = {
            compiler: b,
            disassemble: function() {
                for (var a, b, c, d = this.opcodes, e = [], f = 0, g = d.length; g > f; f++)
                    if (a = d[f],
                    "DECLARE" === a.opcode)
                        e.push("DECLARE " + a.name + "=" + a.value);
                    else {
                        b = [];
                        for (var h = 0; h < a.args.length; h++)
                            c = a.args[h],
                            "string" == typeof c && (c = '"' + c.replace("\n", "\\n") + '"'),
                            b.push(c);
                        e.push(a.opcode + " " + b.join(" "))
                    }
                return e.join("\n")
            },
            equals: function(a) {
                var b = this.opcodes.length;
                if (a.opcodes.length !== b)
                    return !1;
                for (var c = 0; b > c; c++) {
                    var d = this.opcodes[c]
                      , e = a.opcodes[c];
                    if (d.opcode !== e.opcode || d.args.length !== e.args.length)
                        return !1;
                    for (var f = 0; f < d.args.length; f++)
                        if (d.args[f] !== e.args[f])
                            return !1
                }
                if (b = this.children.length,
                a.children.length !== b)
                    return !1;
                for (c = 0; b > c; c++)
                    if (!this.children[c].equals(a.children[c]))
                        return !1;
                return !0
            },
            guid: 0,
            compile: function(a, b) {
                this.opcodes = [],
                this.children = [],
                this.depths = {
                    list: []
                },
                this.options = b;
                var c = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0
                },
                c)
                    for (var d in c)
                        this.options.knownHelpers[d] = c[d];
                return this.accept(a)
            },
            accept: function(a) {
                var b, c = a.strip || {};
                return c.left && this.opcode("strip"),
                b = this[a.type](a),
                c.right && this.opcode("strip"),
                b
            },
            program: function(a) {
                for (var b = a.statements, c = 0, d = b.length; d > c; c++)
                    this.accept(b[c]);
                return this.isSimple = 1 === d,
                this.depths.list = this.depths.list.sort(function(a, b) {
                    return a - b
                }),
                this
            },
            compileProgram: function(a) {
                var b, c = (new this.compiler).compile(a, this.options), d = this.guid++;
                this.usePartial = this.usePartial || c.usePartial,
                this.children[d] = c;
                for (var e = 0, f = c.depths.list.length; f > e; e++)
                    b = c.depths.list[e],
                    2 > b || this.addDepth(b - 1);
                return d
            },
            block: function(a) {
                var b = a.mustache
                  , c = a.program
                  , d = a.inverse;
                c && (c = this.compileProgram(c)),
                d && (d = this.compileProgram(d));
                var e = b.sexpr
                  , f = this.classifySexpr(e);
                "helper" === f ? this.helperSexpr(e, c, d) : "simple" === f ? (this.simpleSexpr(e),
                this.opcode("pushProgram", c),
                this.opcode("pushProgram", d),
                this.opcode("emptyHash"),
                this.opcode("blockValue")) : (this.ambiguousSexpr(e, c, d),
                this.opcode("pushProgram", c),
                this.opcode("pushProgram", d),
                this.opcode("emptyHash"),
                this.opcode("ambiguousBlockValue")),
                this.opcode("append")
            },
            hash: function(a) {
                var b, c, d = a.pairs;
                this.opcode("pushHash");
                for (var e = 0, f = d.length; f > e; e++)
                    b = d[e],
                    c = b[1],
                    this.options.stringParams ? (c.depth && this.addDepth(c.depth),
                    this.opcode("getContext", c.depth || 0),
                    this.opcode("pushStringParam", c.stringModeValue, c.type),
                    "sexpr" === c.type && this.sexpr(c)) : this.accept(c),
                    this.opcode("assignToHash", b[0]);
                this.opcode("popHash")
            },
            partial: function(a) {
                var b = a.partialName;
                this.usePartial = !0,
                a.context ? this.ID(a.context) : this.opcode("push", "depth0"),
                this.opcode("invokePartial", b.name),
                this.opcode("append")
            },
            content: function(a) {
                this.opcode("appendContent", a.string)
            },
            mustache: function(a) {
                this.sexpr(a.sexpr),
                this.opcode(a.escaped && !this.options.noEscape ? "appendEscaped" : "append")
            },
            ambiguousSexpr: function(a, b, c) {
                var d = a.id
                  , e = d.parts[0]
                  , f = null != b || null != c;
                this.opcode("getContext", d.depth),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                this.opcode("invokeAmbiguous", e, f)
            },
            simpleSexpr: function(a) {
                var b = a.id;
                "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth),
                this.opcode("getContext", b.depth),
                this.opcode("pushContext")),
                this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(a, b, c) {
                var d = this.setupFullMustacheParams(a, b, c)
                  , e = a.id.parts[0];
                if (this.options.knownHelpers[e])
                    this.opcode("invokeKnownHelper", d.length, e);
                else {
                    if (this.options.knownHelpersOnly)
                        throw new f("You specified knownHelpersOnly, but used the unknown helper " + e,a);
                    this.opcode("invokeHelper", d.length, e, a.isRoot)
                }
            },
            sexpr: function(a) {
                var b = this.classifySexpr(a);
                "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
            },
            ID: function(a) {
                this.addDepth(a.depth),
                this.opcode("getContext", a.depth);
                var b = a.parts[0];
                b ? this.opcode("lookupOnContext", a.parts[0]) : this.opcode("pushContext");
                for (var c = 1, d = a.parts.length; d > c; c++)
                    this.opcode("lookup", a.parts[c])
            },
            DATA: function(a) {
                if (this.options.data = !0,
                a.id.isScoped || a.id.depth)
                    throw new f("Scoped data references are not supported: " + a.original,a);
                this.opcode("lookupData");
                for (var b = a.id.parts, c = 0, d = b.length; d > c; c++)
                    this.opcode("lookup", b[c])
            },
            STRING: function(a) {
                this.opcode("pushString", a.string)
            },
            INTEGER: function(a) {
                this.opcode("pushLiteral", a.integer)
            },
            BOOLEAN: function(a) {
                this.opcode("pushLiteral", a.bool)
            },
            comment: function() {},
            opcode: function(a) {
                this.opcodes.push({
                    opcode: a,
                    args: [].slice.call(arguments, 1)
                })
            },
            declare: function(a, b) {
                this.opcodes.push({
                    opcode: "DECLARE",
                    name: a,
                    value: b
                })
            },
            addDepth: function(a) {
                0 !== a && (this.depths[a] || (this.depths[a] = !0,
                this.depths.list.push(a)))
            },
            classifySexpr: function(a) {
                var b = a.isHelper
                  , c = a.eligibleHelper
                  , d = this.options;
                if (c && !b) {
                    var e = a.id.parts[0];
                    d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
                }
                return b ? "helper" : c ? "ambiguous" : "simple"
            },
            pushParams: function(a) {
                for (var b, c = a.length; c--; )
                    b = a[c],
                    this.options.stringParams ? (b.depth && this.addDepth(b.depth),
                    this.opcode("getContext", b.depth || 0),
                    this.opcode("pushStringParam", b.stringModeValue, b.type),
                    "sexpr" === b.type && this.sexpr(b)) : this[b.type](b)
            },
            setupFullMustacheParams: function(a, b, c) {
                var d = a.params;
                return this.pushParams(d),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                a.hash ? this.hash(a.hash) : this.opcode("emptyHash"),
                d
            }
        },
        e.precompile = c,
        e.compile = d,
        e
    }(c)
      , k = function(a, b) {
        "use strict";
        function c(a) {
            this.value = a
        }
        function d() {}
        var e, f = a.COMPILER_REVISION, g = a.REVISION_CHANGES, h = a.log, i = b;
        d.prototype = {
            nameLookup: function(a, b) {
                var c, e;
                return 0 === a.indexOf("depth") && (c = !0),
                e = /^[0-9]+$/.test(b) ? a + "[" + b + "]" : d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']",
                c ? "(" + a + " && " + e + ")" : e
            },
            compilerInfo: function() {
                var a = f
                  , b = g[a];
                return "this.compilerInfo = [" + a + ",'" + b + "'];\n"
            },
            appendToBuffer: function(a) {
                return this.environment.isSimple ? "return " + a + ";" : {
                    appendToBuffer: !0,
                    content: a,
                    toString: function() {
                        return "buffer += " + a + ";"
                    }
                }
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(a, b, c, d) {
                this.environment = a,
                this.options = b || {},
                h("debug", this.environment.disassemble() + "\n\n"),
                this.name = this.environment.name,
                this.isChild = !!c,
                this.context = c || {
                    programs: [],
                    environments: [],
                    aliases: {}
                },
                this.preamble(),
                this.stackSlot = 0,
                this.stackVars = [],
                this.registers = {
                    list: []
                },
                this.hashes = [],
                this.compileStack = [],
                this.inlineStack = [],
                this.compileChildren(a, b);
                var e, f = a.opcodes;
                this.i = 0;
                for (var g = f.length; this.i < g; this.i++)
                    e = f[this.i],
                    "DECLARE" === e.opcode ? this[e.name] = e.value : this[e.opcode].apply(this, e.args),
                    e.opcode !== this.stripNext && (this.stripNext = !1);
                if (this.pushSource(""),
                this.stackSlot || this.inlineStack.length || this.compileStack.length)
                    throw new i("Compile completed with content left on stack");
                return this.createFunctionContext(d)
            },
            preamble: function() {
                var a = [];
                if (this.isChild)
                    a.push("");
                else {
                    var b = this.namespace
                      , c = "helpers = this.merge(helpers, " + b + ".helpers);";
                    this.environment.usePartial && (c = c + " partials = this.merge(partials, " + b + ".partials);"),
                    this.options.data && (c += " data = data || {};"),
                    a.push(c)
                }
                a.push(this.environment.isSimple ? "" : ", buffer = " + this.initializeBuffer()),
                this.lastContext = 0,
                this.source = a
            },
            createFunctionContext: function(a) {
                var b = this.stackVars.concat(this.registers.list);
                if (b.length > 0 && (this.source[1] = this.source[1] + ", " + b.join(", ")),
                !this.isChild)
                    for (var c in this.context.aliases)
                        this.context.aliases.hasOwnProperty(c) && (this.source[1] = this.source[1] + ", " + c + "=" + this.context.aliases[c]);
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"),
                this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"),
                this.environment.isSimple || this.pushSource("return buffer;");
                for (var d = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], e = 0, f = this.environment.depths.list.length; f > e; e++)
                    d.push("depth" + this.environment.depths.list[e]);
                var g = this.mergeSource();
                if (this.isChild || (g = this.compilerInfo() + g),
                a)
                    return d.push(g),
                    Function.apply(this, d);
                var i = "function " + (this.name || "") + "(" + d.join(",") + ") {\n  " + g + "}";
                return h("debug", i + "\n\n"),
                i
            },
            mergeSource: function() {
                for (var a, b = "", c = 0, d = this.source.length; d > c; c++) {
                    var e = this.source[c];
                    e.appendToBuffer ? a = a ? a + "\n    + " + e.content : e.content : (a && (b += "buffer += " + a + ";\n  ",
                    a = void 0),
                    b += e + "\n  ")
                }
                return b
            },
            blockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var a = ["depth0"];
                this.setupParams(0, a),
                this.replaceStack(function(b) {
                    return a.splice(1, 0, b),
                    "blockHelperMissing.call(" + a.join(", ") + ")"
                })
            },
            ambiguousBlockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var a = ["depth0"];
                this.setupParams(0, a);
                var b = this.topStack();
                a.splice(1, 0, b),
                this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
            },
            appendContent: function(a) {
                this.pendingContent && (a = this.pendingContent + a),
                this.stripNext && (a = a.replace(/^\s+/, "")),
                this.pendingContent = a
            },
            strip: function() {
                this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")),
                this.stripNext = "strip"
            },
            append: function() {
                this.flushInline();
                var a = this.popStack();
                this.pushSource("if(" + a + " || " + a + " === 0) { " + this.appendToBuffer(a) + " }"),
                this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                this.context.aliases.escapeExpression = "this.escapeExpression",
                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },
            getContext: function(a) {
                this.lastContext !== a && (this.lastContext = a)
            },
            lookupOnContext: function(a) {
                this.push(this.nameLookup("depth" + this.lastContext, a, "context"))
            },
            pushContext: function() {
                this.pushStackLiteral("depth" + this.lastContext)
            },
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"',
                this.replaceStack(function(a) {
                    return "typeof " + a + " === functionType ? " + a + ".apply(depth0) : " + a
                })
            },
            lookup: function(a) {
                this.replaceStack(function(b) {
                    return b + " == null || " + b + " === false ? " + b + " : " + this.nameLookup(b, a, "context")
                })
            },
            lookupData: function() {
                this.pushStackLiteral("data")
            },
            pushStringParam: function(a, b) {
                this.pushStackLiteral("depth" + this.lastContext),
                this.pushString(b),
                "sexpr" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
            },
            emptyHash: function() {
                this.pushStackLiteral("{}"),
                this.options.stringParams && (this.push("{}"),
                this.push("{}"))
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash),
                this.hash = {
                    values: [],
                    types: [],
                    contexts: []
                }
            },
            popHash: function() {
                var a = this.hash;
                this.hash = this.hashes.pop(),
                this.options.stringParams && (this.push("{" + a.contexts.join(",") + "}"),
                this.push("{" + a.types.join(",") + "}")),
                this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
            },
            pushString: function(a) {
                this.pushStackLiteral(this.quotedString(a))
            },
            push: function(a) {
                return this.inlineStack.push(a),
                a
            },
            pushLiteral: function(a) {
                this.pushStackLiteral(a)
            },
            pushProgram: function(a) {
                this.pushStackLiteral(null != a ? this.programExpression(a) : null)
            },
            invokeHelper: function(a, b, c) {
                this.context.aliases.helperMissing = "helpers.helperMissing",
                this.useRegister("helper");
                var d = this.lastHelper = this.setupHelper(a, b, !0)
                  , e = this.nameLookup("depth" + this.lastContext, b, "context")
                  , f = "helper = " + d.name + " || " + e;
                d.paramsInit && (f += "," + d.paramsInit),
                this.push("(" + f + ",helper ? helper.call(" + d.callParams + ") : helperMissing.call(" + d.helperMissingParams + "))"),
                c || this.flushInline()
            },
            invokeKnownHelper: function(a, b) {
                var c = this.setupHelper(a, b);
                this.push(c.name + ".call(" + c.callParams + ")")
            },
            invokeAmbiguous: function(a, b) {
                this.context.aliases.functionType = '"function"',
                this.useRegister("helper"),
                this.emptyHash();
                var c = this.setupHelper(0, a, b)
                  , d = this.lastHelper = this.nameLookup("helpers", a, "helper")
                  , e = this.nameLookup("depth" + this.lastContext, a, "context")
                  , f = this.nextStack();
                c.paramsInit && this.pushSource(c.paramsInit),
                this.pushSource("if (helper = " + d + ") { " + f + " = helper.call(" + c.callParams + "); }"),
                this.pushSource("else { helper = " + e + "; " + f + " = typeof helper === functionType ? helper.call(" + c.callParams + ") : helper; }")
            },
            invokePartial: function(a) {
                var b = [this.nameLookup("partials", a, "partial"), "'" + a + "'", this.popStack(), "helpers", "partials"];
                this.options.data && b.push("data"),
                this.context.aliases.self = "this",
                this.push("self.invokePartial(" + b.join(", ") + ")")
            },
            assignToHash: function(a) {
                var b, c, d = this.popStack();
                this.options.stringParams && (c = this.popStack(),
                b = this.popStack());
                var e = this.hash;
                b && e.contexts.push("'" + a + "': " + b),
                c && e.types.push("'" + a + "': " + c),
                e.values.push("'" + a + "': (" + d + ")")
            },
            compiler: d,
            compileChildren: function(a, b) {
                for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                    c = e[f],
                    d = new this.compiler;
                    var h = this.matchExistingProgram(c);
                    null == h ? (this.context.programs.push(""),
                    h = this.context.programs.length,
                    c.index = h,
                    c.name = "program" + h,
                    this.context.programs[h] = d.compile(c, b, this.context),
                    this.context.environments[h] = c) : (c.index = h,
                    c.name = "program" + h)
                }
            },
            matchExistingProgram: function(a) {
                for (var b = 0, c = this.context.environments.length; c > b; b++) {
                    var d = this.context.environments[b];
                    if (d && d.equals(a))
                        return b
                }
            },
            programExpression: function(a) {
                if (this.context.aliases.self = "this",
                null == a)
                    return "self.noop";
                for (var b, c = this.environment.children[a], d = c.depths.list, e = [c.index, c.name, "data"], f = 0, g = d.length; g > f; f++)
                    b = d[f],
                    e.push(1 === b ? "depth0" : "depth" + (b - 1));
                return (0 === d.length ? "self.program(" : "self.programWithDepth(") + e.join(", ") + ")"
            },
            register: function(a, b) {
                this.useRegister(a),
                this.pushSource(a + " = " + b + ";")
            },
            useRegister: function(a) {
                this.registers[a] || (this.registers[a] = !0,
                this.registers.list.push(a))
            },
            pushStackLiteral: function(a) {
                return this.push(new c(a))
            },
            pushSource: function(a) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),
                this.pendingContent = void 0),
                a && this.source.push(a)
            },
            pushStack: function(a) {
                this.flushInline();
                var b = this.incrStack();
                return a && this.pushSource(b + " = " + a + ";"),
                this.compileStack.push(b),
                b
            },
            replaceStack: function(a) {
                var b, d, e, f = "", g = this.isInline();
                if (g) {
                    var h = this.popStack(!0);
                    if (h instanceof c)
                        b = h.value,
                        e = !0;
                    else {
                        d = !this.stackSlot;
                        var i = d ? this.incrStack() : this.topStackName();
                        f = "(" + this.push(i) + " = " + h + "),",
                        b = this.topStack()
                    }
                } else
                    b = this.topStack();
                var j = a.call(this, b);
                return g ? (e || this.popStack(),
                d && this.stackSlot--,
                this.push("(" + f + j + ")")) : (/^stack/.test(b) || (b = this.nextStack()),
                this.pushSource(b + " = (" + f + j + ");")),
                b
            },
            nextStack: function() {
                return this.pushStack()
            },
            incrStack: function() {
                return this.stackSlot++,
                this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var a = this.inlineStack;
                if (a.length) {
                    this.inlineStack = [];
                    for (var b = 0, d = a.length; d > b; b++) {
                        var e = a[b];
                        e instanceof c ? this.compileStack.push(e) : this.pushStack(e)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(a) {
                var b = this.isInline()
                  , d = (b ? this.inlineStack : this.compileStack).pop();
                if (!a && d instanceof c)
                    return d.value;
                if (!b) {
                    if (!this.stackSlot)
                        throw new i("Invalid stack pop");
                    this.stackSlot--
                }
                return d
            },
            topStack: function(a) {
                var b = this.isInline() ? this.inlineStack : this.compileStack
                  , d = b[b.length - 1];
                return !a && d instanceof c ? d.value : d
            },
            quotedString: function(a) {
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            setupHelper: function(a, b, c) {
                var d = []
                  , e = this.setupParams(a, d, c)
                  , f = this.nameLookup("helpers", b, "helper");
                return {
                    params: d,
                    paramsInit: e,
                    name: f,
                    callParams: ["depth0"].concat(d).join(", "),
                    helperMissingParams: c && ["depth0", this.quotedString(b)].concat(d).join(", ")
                }
            },
            setupOptions: function(a, b) {
                var c, d, e, f = [], g = [], h = [];
                f.push("hash:" + this.popStack()),
                this.options.stringParams && (f.push("hashTypes:" + this.popStack()),
                f.push("hashContexts:" + this.popStack())),
                d = this.popStack(),
                e = this.popStack(),
                (e || d) && (e || (this.context.aliases.self = "this",
                e = "self.noop"),
                d || (this.context.aliases.self = "this",
                d = "self.noop"),
                f.push("inverse:" + d),
                f.push("fn:" + e));
                for (var i = 0; a > i; i++)
                    c = this.popStack(),
                    b.push(c),
                    this.options.stringParams && (h.push(this.popStack()),
                    g.push(this.popStack()));
                return this.options.stringParams && (f.push("contexts:[" + g.join(",") + "]"),
                f.push("types:[" + h.join(",") + "]")),
                this.options.data && f.push("data:data"),
                f
            },
            setupParams: function(a, b, c) {
                var d = "{" + this.setupOptions(a, b).join(",") + "}";
                return c ? (this.useRegister("options"),
                b.push("options"),
                "options=" + d) : (b.push(d),
                "")
            }
        };
        for (var j = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), k = d.RESERVED_WORDS = {}, l = 0, m = j.length; m > l; l++)
            k[j[l]] = !0;
        return d.isValidJavaScriptVariableName = function(a) {
            return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a) ? !0 : !1
        }
        ,
        e = d
    }(d, c)
      , l = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c.parser, j = c.parse, k = d.Compiler, l = d.compile, m = d.precompile, n = e, o = g.create, p = function() {
            var a = o();
            return a.compile = function(b, c) {
                return l(b, c, a)
            }
            ,
            a.precompile = function(b, c) {
                return m(b, c, a)
            }
            ,
            a.AST = h,
            a.Compiler = k,
            a.JavaScriptCompiler = n,
            a.Parser = i,
            a.parse = j,
            a
        };
        return g = p(),
        g.create = p,
        f = g
    }(f, g, i, j, k);
    return l
}();
define("handlebars", function(a) {
    return function() {
        var b;
        return b || a.Handlebars
    }
}(this)),
define("app/template", ["handlebars"], function(a) {
    var b = {};
    b.contacts = ['<div class="row well">', '<div class="text-center col-sm-6">', '<a href="#contacts/new" class="btn btn-lg btn-outline">Add Contact</a>', "</div>", '<div class="text-center col-sm-6">', '<input type="text" class="form-control contact-name-search" placeholder="Search">', "</div>", "</div>", '<ul class="media-list row contacts-container"></ul>', '<div class="empty-contacts-placeholder"></div>', '<div class="empty-search-contacts-placeholder"></div>'].join(""),
    b.contact = ['<div class="media-heading">', "<h3>", "{{name}}", "</h3>", "</div>", '<div class="media-body">', "<dl>", "<dt>Phone Number:</dt><dd>{{phone}}</dd>", "<dt>Email:</dt><dd>{{email}}</dd>", "</dl>", "</div>", '<div class="contact-btn-wrapper">', '<a href="#contacts/edit/{{id}}" class="edit-contact btn btn-outline"><span class="glyphicon glyphicon-pencil"></span> Edit</a>', '<a href="#contacts/delete/{{id}}" class="delete-contact btn btn-outline">', '<span class="glyphicon glyphicon-trash"></span> Delete', "</a>", "</div>", "<hr/>"].join(""),
    b.contactEdit = ['<h2 class="page-header text-center">{{#if isNew}} Create {{else}} Edit {{/if}} Contact</h2>', '<form role="form" class="form-horizontal contact-form">', '<div class="form-group has-feedback form-group-name">', '<label class="col-sm-4 control-label">Full name:</label>', '<div class="col-sm-6">', '<input type="text" class="form-control contact-name-input" value="{{name}}">', '<small class="help-block"></small>', "</div>", "</div>", '<div class="form-group has-feedback form-group-email">', '<label class="col-sm-4 control-label">Email address:</label>', '<div class="col-sm-6">', '<input type="email" class="form-control contact-email-input" value="{{email}}">', '<small class="help-block"></small>', "</div>", "</div>", '<div class="form-group has-feedback form-group-phone">', '<label class="col-sm-4 control-label">Telephone number:</label>', '<div class="col-sm-6">', '<input type="tel" class="form-control contact-phone-input" value="{{phone}}">', '<small class="help-block"></small>', "</div>", "</div>", '<div class="form-group">', '<div class="col-sm-offset-4 col-sm-3">', '<button type="submit" class="btn btn-outline btn-lg btn-block">Submit</button>', "</div>", '<div class="col-sm-3">', '<button class="btn-close-form btn btn-outline btn-lg btn-block">Cancel</button>', "</div>", "</div>", "</form>"].join("");
    for (var c in b)
        b.hasOwnProperty(c) && (b[c] = a.compile(b[c]));
    return b
}),
define("app/views/contact", ["jquery", "underscore", "backbone", "app/template"], function(a, b, c, d) {
    var e = c.View.extend({
        tagName: "li",
        className: "media col-md-3 col-sm-4",
        template: d.contact,
        events: {
            "click .delete-contact": "onClickContactDelete"
        },
        initialize: function() {
            this.listenTo(this.model, "remove", this.remove)
        },
        render: function() {
            var a = this.template(this.model.toJSON());
            return this.$el.append(a),
            this
        },
        onClickContactDelete: function(a) {
            a.preventDefault();
            var b = window.confirm("Do you want to delete the contact ?");
            b && this.model.destroy()
        }
    });
    return e
}),
define("app/views/contacts", ["jquery", "underscore", "backbone", "app/template", "app/views/contact"], function(a, b, c, d, e) {
    var f = c.View.extend({
        template: d.contacts,
        initialize: function() {
            this.listenTo(this.collection, "remove", this.render),
            this.$el.html(this.template),
            this.contactsContainer = this.$(".contacts-container"),
            this.emptyContactsPlaceholder = this.$(".empty-contacts-placeholder"),
            this.emptySearchPlaceholder = this.$(".empty-search-contacts-placeholder")
        },
        events: {
            "keyup .contact-name-search": "searchContacts"
        },
        searchContacts: function() {
            var c = a.trim(this.$(".contact-name-search").val());
            if (c) {
                var d = this.collection.search(c);
                d.length ? (this.contactsContainer.empty(),
                this.emptySearchPlaceholder.empty(),
                b.each(d, this.renderOne, this)) : (this.contactsContainer.empty(),
                this.emptySearchPlaceholder.html('<div class="well text-center"><h3>There is no contacts starting with <strong>' + c + ".</strong></h3></div>"))
            } else
                this.render()
        },
        render: function() {
            return this.contactsContainer.empty(),
            this.collection.length ? this.collection.each(this.renderOne, this) : this.emptyContactsPlaceholder.html('<div class="well text-center"><h3>There is no contacts.</h3> <a href="#contacts/new" class="btn btn-lg btn-outline">Add Contact</a></div>'),
            this
        },
        renderOne: function(a) {
            var b = new e({
                model: a
            });
            this.contactsContainer.append(b.render().$el)
        }
    });
    return f
}),
define("app/views/editcontact", ["jquery", "underscore", "backbone", "app/template"], function(a, b, c, d) {
    var e = c.View.extend({
        template: d.contactEdit,
        initialize: function() {
            this.listenTo(this.model, "invalid", function(a, c) {
                this.cleanFormErrors(),
                b.each(c, this.showFormErrors, this)
            })
        },
        events: {
            "submit .contact-form": "onFormSubmit",
            "click .btn-close-form": "onFormClose"
        },
        render: function() {
            this.$el.empty();
            var a = this.template(b.extend(this.model.toJSON(), {
                isNew: this.model.isNew()
            }));
            return this.$el.append(a),
            this
        },
        onFormSubmit: function(a) {
            a.preventDefault();
            var c = {
                name: this.$(".contact-name-input").val(),
                phone: this.$(".contact-phone-input").val(),
                email: this.$(".contact-email-input").val()
            };
            if (this.model.isNew()) {
                var d = this.model.validate(c);
                if (d)
                    return this.cleanFormErrors(),
                    void b.each(d, this.showFormErrors, this)
            }
            this.trigger("form:submitted", c)
        },
        showFormErrors: function(a) {
            this.$(".form-group-" + a.name).addClass("has-error").find(".help-block").html(a.message)
        },
        cleanFormErrors: function() {
            this.$(".form-group").removeClass("has-error"),
            this.$(".help-block").html("")
        },
        onFormClose: function(a) {
            a.preventDefault(),
            this.trigger("form:close")
        }
    });
    return e
}),
define("app/router", ["jquery", "underscore", "backbone", "app/models/contact", "app/views/contacts", "app/views/editcontact"], function(a, b, c, d, e, f) {
    var g = c.Router.extend({
        routes: {
            "": "home",
            home: "home",
            "contacts/new": "newContact",
            "contacts/edit/:id": "editContact"
        },
        initialize: function(a) {
            this.appView = a.view,
            this.collection = a.collection,
            this.collection.fetch()
        },
        home: function() {
            var a = new e({
                collection: this.collection
            });
            this.appView.setViews(a)
        },
        newContact: function() {
            var a = new f({
                model: new d
            });
            this.appView.setViews(a),
            a.on("form:submitted", function(a) {
                a.id = this.collection.isEmpty() ? 1 : b.max(this.collection.pluck("id")) + 1;
                var c = new d(a)
                  , e = c.isValid();
                e !== !1 && (this.collection.add(c),
                c.save(),
                App.router.navigate("home", !0))
            }, this),
            a.on("form:close", this.contactFormClose)
        },
        editContact: function(a) {
            var b = this.collection.get(a)
              , c = new f({
                model: b
            });
            this.appView.setViews(c),
            c.on("form:submitted", function(a) {
                var c = b.save(a, {
                    validate: !0
                });
                c !== !1 && App.router.navigate("home", !0)
            }),
            c.on("form:close", this.contactFormClose)
        },
        contactFormClose: function() {
            App.router.navigate("home", !0)
        }
    });
    return g
}),
function(a, b) {
    "object" == typeof exports && "function" == typeof require ? module.exports = b(require("backbone")) : "function" == typeof define && define.amd ? define("localstorage", ["backbone"], function(c) {
        return b(c || a.Backbone)
    }) : b(Backbone)
}(this, function(a) {
    function b() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    function c() {
        return b() + b() + "-" + b() + "-" + b() + "-" + b() + "-" + b() + b() + b()
    }
    function d(a) {
        return a === Object(a)
    }
    function e(a, b) {
        for (var c = a.length; c--; )
            if (a[c] === b)
                return !0;
        return !1
    }
    function f(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    return a.LocalStorage = window.Store = function(a, b) {
        if (!this.localStorage)
            throw "Backbone.localStorage: Environment does not support localStorage.";
        this.name = a,
        this.serializer = b || {
            serialize: function(a) {
                return d(a) ? JSON.stringify(a) : a
            },
            deserialize: function(a) {
                return a && JSON.parse(a)
            }
        };
        var c = this.localStorage().getItem(this.name);
        this.records = c && c.split(",") || []
    }
    ,
    f(a.LocalStorage.prototype, {
        save: function() {
            this.localStorage().setItem(this.name, this.records.join(","))
        },
        create: function(a) {
            return a.id || (a.id = c(),
            a.set(a.idAttribute, a.id)),
            this.localStorage().setItem(this._itemName(a.id), this.serializer.serialize(a)),
            this.records.push(a.id.toString()),
            this.save(),
            this.find(a) !== !1
        },
        update: function(a) {
            this.localStorage().setItem(this._itemName(a.id), this.serializer.serialize(a));
            var b = a.id.toString();
            return e(this.records, b) || (this.records.push(b),
            this.save()),
            this.find(a) !== !1
        },
        find: function(a) {
            return this.serializer.deserialize(this.localStorage().getItem(this._itemName(a.id)))
        },
        findAll: function() {
            for (var a, b, c = [], d = 0; d < this.records.length; d++)
                a = this.records[d],
                b = this.serializer.deserialize(this.localStorage().getItem(this._itemName(a))),
                null != b && c.push(b);
            return c
        },
        destroy: function(a) {
            this.localStorage().removeItem(this._itemName(a.id));
            for (var b = a.id.toString(), c = 0; c < this.records.length; c++)
                this.records[c] === b && this.records.splice(c, 1);
            return this.save(),
            a
        },
        localStorage: function() {
            return localStorage
        },
        _clear: function() {
            var a = this.localStorage()
              , b = new RegExp("^" + this.name + "-");
            a.removeItem(this.name);
            for (var c in a)
                b.test(c) && a.removeItem(c);
            this.records.length = 0
        },
        _storageSize: function() {
            return this.localStorage().length
        },
        _itemName: function(a) {
            return this.name + "-" + a
        }
    }),
    a.LocalStorage.sync = window.Store.sync = a.localSync = function(b, c, d) {
        var e, f, g = c.localStorage || c.collection.localStorage, h = a.$ ? a.$.Deferred && a.$.Deferred() : a.Deferred && a.Deferred();
        try {
            switch (b) {
            case "read":
                e = void 0 != c.id ? g.find(c) : g.findAll();
                break;
            case "create":
                e = g.create(c);
                break;
            case "update":
                e = g.update(c);
                break;
            case "delete":
                e = g.destroy(c)
            }
        } catch (i) {
            f = 22 === i.code && 0 === g._storageSize() ? "Private browsing is unsupported" : i.message
        }
        return e ? (d && d.success && ("0.9.10" === a.VERSION ? d.success(c, e, d) : d.success(e)),
        h && h.resolve(e)) : (f = f ? f : "Record Not Found",
        d && d.error && ("0.9.10" === a.VERSION ? d.error(c, f, d) : d.error(f)),
        h && h.reject(f)),
        d && d.complete && d.complete(e),
        h && h.promise()
    }
    ,
    a.ajaxSync = a.sync,
    a.getSyncMethod = function(b) {
        return b.localStorage || b.collection && b.collection.localStorage ? a.localSync : a.ajaxSync
    }
    ,
    a.sync = function(b, c, d) {
        return a.getSyncMethod(c).apply(this, [b, c, d])
    }
    ,
    a.LocalStorage
}),
define("app/collections/contacts", ["backbone", "app/models/contact", "localstorage"], function(a, b) {
    var c = a.Collection.extend({
        model: b,
        localStorage: new a.LocalStorage("Contacts"),
        search: function(a) {
            var b = new RegExp(a,"gi");
            return this.filter(function(a) {
                return b.test(a.get("name"))
            })
        }
    });
    return c
}),
define("app/app", ["backbone", "app/views/app", "app/router", "app/collections/contacts"], function(a, b, c, d) {
    var e = function() {
        var e = new d
          , f = new b;
        App.router = new c({
            view: f,
            collection: e
        }),
        a.history.start()
    };
    return {
        initialize: e
    }
}),
require.config({
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        localstorage: {
            deps: ["backbone"],
            exports: "localstorage"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "jquery"
        },
        handlebars: {
            exports: "Handlebars"
        }
    },
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        backbone: "../bower_components/backbone/backbone",
        underscore: "../bower_components/lodash/dist/lodash",
        bootstrap: "../bower_components/sass-bootstrap/dist/js/bootstrap",
        handlebars: "../bower_components/handlebars/handlebars",
        localstorage: "../bower_components/backbone.localStorage/backbone.localStorage"
    }
}),
require(["app/app"], function(a) {
    window.App = {},
    a.initialize()
}),
define("main", function() {});
