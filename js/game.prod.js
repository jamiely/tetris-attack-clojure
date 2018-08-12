function e(a) {
  throw a;
}
var h = void 0, k = !0, l = null, m = !1;
function aa() {
  return function(a) {
    return a
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var p, ca = this;
function da(a, b) {
  var c = a.split("."), d = ca;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && q(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ea(a) {
  for(var a = a.split("."), b = ca, c;c = a.shift();) {
    if(b[c] != l) {
      b = b[c]
    }else {
      return l
    }
  }
  return b
}
function ga() {
}
function s(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function q(a) {
  return a !== h
}
function ia(a) {
  return"array" == s(a)
}
function ja(a) {
  var b = s(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ka(a) {
  return"string" == typeof a
}
function la(a) {
  return"function" == s(a)
}
function ma(a) {
  var b = typeof a;
  return"object" == b && a != l || "function" == b
}
function na(a) {
  return a[oa] || (a[oa] = ++pa)
}
var oa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), pa = 0;
function qa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ra(a, b, c) {
  a || e(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function sa(a, b, c) {
  sa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? qa : ra;
  return sa.apply(l, arguments)
}
function ta(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ua = Date.now || function() {
  return+new Date
};
function va(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.oa = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function wa(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, wa) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
va(wa, Error);
wa.prototype.name = "CustomError";
function xa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function ya(a) {
  if(!za.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Aa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ba, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ca, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;"));
  return a
}
var Aa = /&/g, Ba = /</g, Ca = />/g, Ea = /\"/g, za = /[&<>\"]/;
function Fa(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function Ga(a, b) {
  b.unshift(a);
  wa.call(this, xa.apply(l, b));
  b.shift();
  this.bg = a
}
va(Ga, wa);
Ga.prototype.name = "AssertionError";
function Ha(a, b) {
  e(new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Ia = Array.prototype, Ja = Ia.indexOf ? function(a, b, c) {
  return Ia.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ka(a)) {
    return!ka(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ka = Ia.forEach ? function(a, b, c) {
  Ia.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = ka(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, La = Ia.filter ? function(a, b, c) {
  return Ia.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = ka(a) ? a.split("") : a, j = 0;j < d;j++) {
    if(j in i) {
      var r = i[j];
      b.call(c, r, j, a) && (f[g++] = r)
    }
  }
  return f
}, Ma = Ia.some ? function(a, b, c) {
  return Ia.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = ka(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return k
    }
  }
  return m
};
function Oa(a, b) {
  var c = Ja(a, b);
  0 <= c && Ia.splice.call(a, c, 1)
}
function Pa(a) {
  return Ia.concat.apply(Ia, arguments)
}
function Qa(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function Ra(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function Sa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Ua.length;g++) {
      c = Ua[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Xa(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, r, v, C, F) {
    if("%" == v) {
      return"%"
    }
    var T = c.shift();
    "undefined" == typeof T && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = T;
    return Xa.Ea[v].apply(l, arguments)
  })
}
Xa.Ea = {};
Xa.Ea.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
Xa.Ea.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var g;
  g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = g + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + Array(a + 1).join(" ") : g + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
Xa.Ea.d = function(a, b, c, d, f, g, i, j) {
  return Xa.Ea.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
Xa.Ea.i = Xa.Ea.d;
Xa.Ea.u = Xa.Ea.d;
function Ya(a, b) {
  a != l && this.append.apply(this, arguments)
}
Ya.prototype.mb = "";
Ya.prototype.set = function(a) {
  this.mb = "" + a
};
Ya.prototype.append = function(a, b, c) {
  this.mb += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.mb += arguments[d]
    }
  }
  return this
};
Ya.prototype.toString = n("mb");
var Za;
function t(a) {
  return a != l && a !== m
}
function $a(a) {
  return a == l
}
function ab(a) {
  return t(a) ? m : k
}
function u(a, b) {
  return a[s(b == l ? l : b)] ? k : a._ ? k : m
}
function w(a, b) {
  return Error(["No protocol method ", a, " defined for type ", s(b), ": ", b].join(""))
}
function bb(a) {
  return Array.prototype.slice.call(arguments)
}
var cb, db = l, db = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Array(a);
    case 2:
      return db.c(b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
db.c = function(a) {
  return Array(a)
};
db.a = function(a, b) {
  return db.c(b)
};
cb = db;
var eb = {};
function fb(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = fb[s(a == l ? l : a)];
  c ? b = c : (c = fb._) ? b = c : e(w("ICounted.-count", a));
  return b.call(l, a)
}
function gb(a) {
  if(a ? a.H : a) {
    return a.H(a)
  }
  var b;
  var c = gb[s(a == l ? l : a)];
  c ? b = c : (c = gb._) ? b = c : e(w("IEmptyableCollection.-empty", a));
  return b.call(l, a)
}
var hb = {};
function ib(a, b) {
  if(a ? a.N : a) {
    return a.N(a, b)
  }
  var c;
  var d = ib[s(a == l ? l : a)];
  d ? c = d : (d = ib._) ? c = d : e(w("ICollection.-conj", a));
  return c.call(l, a, b)
}
var jb = {}, x, kb = l;
function lb(a, b) {
  if(a ? a.da : a) {
    return a.da(a, b)
  }
  var c;
  var d = x[s(a == l ? l : a)];
  d ? c = d : (d = x._) ? c = d : e(w("IIndexed.-nth", a));
  return c.call(l, a, b)
}
function mb(a, b, c) {
  if(a ? a.Y : a) {
    return a.Y(a, b, c)
  }
  var d;
  var f = x[s(a == l ? l : a)];
  f ? d = f : (f = x._) ? d = f : e(w("IIndexed.-nth", a));
  return d.call(l, a, b, c)
}
kb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return lb.call(this, a, b);
    case 3:
      return mb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
kb.a = lb;
kb.b = mb;
x = kb;
var nb = {}, ob = {};
function pb(a) {
  if(a ? a.aa : a) {
    return a.aa(a)
  }
  var b;
  var c = pb[s(a == l ? l : a)];
  c ? b = c : (c = pb._) ? b = c : e(w("ISeq.-first", a));
  return b.call(l, a)
}
function qb(a) {
  if(a ? a.Z : a) {
    return a.Z(a)
  }
  var b;
  var c = qb[s(a == l ? l : a)];
  c ? b = c : (c = qb._) ? b = c : e(w("ISeq.-rest", a));
  return b.call(l, a)
}
var rb = {};
function sb(a) {
  if(a ? a.Qa : a) {
    return a.Qa(a)
  }
  var b;
  var c = sb[s(a == l ? l : a)];
  c ? b = c : (c = sb._) ? b = c : e(w("INext.-next", a));
  return b.call(l, a)
}
var y, tb = l;
function ub(a, b) {
  if(a ? a.R : a) {
    return a.R(a, b)
  }
  var c;
  var d = y[s(a == l ? l : a)];
  d ? c = d : (d = y._) ? c = d : e(w("ILookup.-lookup", a));
  return c.call(l, a, b)
}
function vb(a, b, c) {
  if(a ? a.A : a) {
    return a.A(a, b, c)
  }
  var d;
  var f = y[s(a == l ? l : a)];
  f ? d = f : (f = y._) ? d = f : e(w("ILookup.-lookup", a));
  return d.call(l, a, b, c)
}
tb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ub.call(this, a, b);
    case 3:
      return vb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
tb.a = ub;
tb.b = vb;
y = tb;
function wb(a, b) {
  if(a ? a.Hb : a) {
    return a.Hb(a, b)
  }
  var c;
  var d = wb[s(a == l ? l : a)];
  d ? c = d : (d = wb._) ? c = d : e(w("IAssociative.-contains-key?", a));
  return c.call(l, a, b)
}
function xb(a, b, c) {
  if(a ? a.ga : a) {
    return a.ga(a, b, c)
  }
  var d;
  var f = xb[s(a == l ? l : a)];
  f ? d = f : (f = xb._) ? d = f : e(w("IAssociative.-assoc", a));
  return d.call(l, a, b, c)
}
var yb = {};
function zb(a, b) {
  if(a ? a.Ib : a) {
    return a.Ib(a, b)
  }
  var c;
  var d = zb[s(a == l ? l : a)];
  d ? c = d : (d = zb._) ? c = d : e(w("IMap.-dissoc", a));
  return c.call(l, a, b)
}
var Ab = {};
function Bb(a) {
  if(a ? a.jc : a) {
    return a.jc(a)
  }
  var b;
  var c = Bb[s(a == l ? l : a)];
  c ? b = c : (c = Bb._) ? b = c : e(w("IMapEntry.-key", a));
  return b.call(l, a)
}
function Cb(a) {
  if(a ? a.kc : a) {
    return a.kc(a)
  }
  var b;
  var c = Cb[s(a == l ? l : a)];
  c ? b = c : (c = Cb._) ? b = c : e(w("IMapEntry.-val", a));
  return b.call(l, a)
}
var Db = {};
function Eb(a, b) {
  if(a ? a.Wd : a) {
    return a.Wd(a, b)
  }
  var c;
  var d = Eb[s(a == l ? l : a)];
  d ? c = d : (d = Eb._) ? c = d : e(w("ISet.-disjoin", a));
  return c.call(l, a, b)
}
function Fb(a) {
  if(a ? a.eb : a) {
    return a.eb(a)
  }
  var b;
  var c = Fb[s(a == l ? l : a)];
  c ? b = c : (c = Fb._) ? b = c : e(w("IStack.-peek", a));
  return b.call(l, a)
}
var Gb = {};
function Hb(a) {
  if(a ? a.Qc : a) {
    return a.Qc(a)
  }
  var b;
  var c = Hb[s(a == l ? l : a)];
  c ? b = c : (c = Hb._) ? b = c : e(w("IDeref.-deref", a));
  return b.call(l, a)
}
var Ib = {};
function Jb(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = Jb[s(a == l ? l : a)];
  c ? b = c : (c = Jb._) ? b = c : e(w("IMeta.-meta", a));
  return b.call(l, a)
}
function Kb(a, b) {
  if(a ? a.P : a) {
    return a.P(a, b)
  }
  var c;
  var d = Kb[s(a == l ? l : a)];
  d ? c = d : (d = Kb._) ? c = d : e(w("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var Lb = {}, Mb, Nb = l;
function Ob(a, b) {
  if(a ? a.bb : a) {
    return a.bb(a, b)
  }
  var c;
  var d = Mb[s(a == l ? l : a)];
  d ? c = d : (d = Mb._) ? c = d : e(w("IReduce.-reduce", a));
  return c.call(l, a, b)
}
function Pb(a, b, c) {
  if(a ? a.cb : a) {
    return a.cb(a, b, c)
  }
  var d;
  var f = Mb[s(a == l ? l : a)];
  f ? d = f : (f = Mb._) ? d = f : e(w("IReduce.-reduce", a));
  return d.call(l, a, b, c)
}
Nb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ob.call(this, a, b);
    case 3:
      return Pb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nb.a = Ob;
Nb.b = Pb;
Mb = Nb;
function Qb(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = Qb[s(a == l ? l : a)];
  d ? c = d : (d = Qb._) ? c = d : e(w("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function Rb(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = Rb[s(a == l ? l : a)];
  c ? b = c : (c = Rb._) ? b = c : e(w("IHash.-hash", a));
  return b.call(l, a)
}
function Sb(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  var c = Sb[s(a == l ? l : a)];
  c ? b = c : (c = Sb._) ? b = c : e(w("ISeqable.-seq", a));
  return b.call(l, a)
}
var Tb = {}, Ub = {};
function Vb(a) {
  if(a ? a.lc : a) {
    return a.lc(a)
  }
  var b;
  var c = Vb[s(a == l ? l : a)];
  c ? b = c : (c = Vb._) ? b = c : e(w("IReversible.-rseq", a));
  return b.call(l, a)
}
var Xb = {};
function Yb(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  var d = Yb[s(a == l ? l : a)];
  d ? c = d : (d = Yb._) ? c = d : e(w("IPrintable.-pr-seq", a));
  return c.call(l, a, b)
}
function Zb(a, b) {
  if(a ? a.Yd : a) {
    return a.Yd(0, b)
  }
  var c;
  var d = Zb[s(a == l ? l : a)];
  d ? c = d : (d = Zb._) ? c = d : e(w("IWriter.-write", a));
  return c.call(l, a, b)
}
function $b(a) {
  if(a ? a.bf : a) {
    return l
  }
  var b;
  var c = $b[s(a == l ? l : a)];
  c ? b = c : (c = $b._) ? b = c : e(w("IWriter.-flush", a));
  return b.call(l, a)
}
var ac = {};
function bc(a, b, c) {
  if(a ? a.J : a) {
    return a.J(a, b, c)
  }
  var d;
  var f = bc[s(a == l ? l : a)];
  f ? d = f : (f = bc._) ? d = f : e(w("IPrintWithWriter.-pr-writer", a));
  return d.call(l, a, b, c)
}
function cc(a, b, c) {
  if(a ? a.Xd : a) {
    return a.Xd(a, b, c)
  }
  var d;
  var f = cc[s(a == l ? l : a)];
  f ? d = f : (f = cc._) ? d = f : e(w("IWatchable.-notify-watches", a));
  return d.call(l, a, b, c)
}
var dc = {};
function ec(a) {
  if(a ? a.nb : a) {
    return a.nb(a)
  }
  var b;
  var c = ec[s(a == l ? l : a)];
  c ? b = c : (c = ec._) ? b = c : e(w("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function fc(a, b) {
  if(a ? a.pb : a) {
    return a.pb(a, b)
  }
  var c;
  var d = fc[s(a == l ? l : a)];
  d ? c = d : (d = fc._) ? c = d : e(w("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function gc(a) {
  if(a ? a.Jb : a) {
    return a.Jb(a)
  }
  var b;
  var c = gc[s(a == l ? l : a)];
  c ? b = c : (c = gc._) ? b = c : e(w("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function hc(a, b, c) {
  if(a ? a.ob : a) {
    return a.ob(a, b, c)
  }
  var d;
  var f = hc[s(a == l ? l : a)];
  f ? d = f : (f = hc._) ? d = f : e(w("ITransientAssociative.-assoc!", a));
  return d.call(l, a, b, c)
}
var ic = {};
function jc(a, b) {
  if(a ? a.Td : a) {
    return a.Td(a, b)
  }
  var c;
  var d = jc[s(a == l ? l : a)];
  d ? c = d : (d = jc._) ? c = d : e(w("IComparable.-compare", a));
  return c.call(l, a, b)
}
function kc(a) {
  if(a ? a.Rd : a) {
    return a.Rd()
  }
  var b;
  var c = kc[s(a == l ? l : a)];
  c ? b = c : (c = kc._) ? b = c : e(w("IChunk.-drop-first", a));
  return b.call(l, a)
}
var lc = {};
function mc(a) {
  if(a ? a.Pc : a) {
    return a.Pc(a)
  }
  var b;
  var c = mc[s(a == l ? l : a)];
  c ? b = c : (c = mc._) ? b = c : e(w("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function nc(a) {
  if(a ? a.ic : a) {
    return a.ic(a)
  }
  var b;
  var c = nc[s(a == l ? l : a)];
  c ? b = c : (c = nc._) ? b = c : e(w("IChunkedSeq.-chunked-rest", a));
  return b.call(l, a)
}
function z(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.l & 32) ? b : a.Pf) || (a.l ? 0 : u(nb, a)) : u(nb, a);
    a = b ? a : Sb(a)
  }
  return a
}
function A(a) {
  if(a == l) {
    return l
  }
  var b;
  b = a ? ((b = a.l & 64) ? b : a.Rc) || (a.l ? 0 : u(ob, a)) : u(ob, a);
  if(b) {
    return pb(a)
  }
  a = z(a);
  return a == l ? l : pb(a)
}
function B(a) {
  if(a != l) {
    var b;
    b = a ? ((b = a.l & 64) ? b : a.Rc) || (a.l ? 0 : u(ob, a)) : u(ob, a);
    if(b) {
      return qb(a)
    }
    a = z(a);
    return a != l ? qb(a) : D
  }
  return D
}
function E(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.l & 128) ? b : a.Vf) || (a.l ? 0 : u(rb, a)) : u(rb, a);
    a = b ? sb(a) : z(B(a))
  }
  return a
}
var G, oc = l;
function pc(a, b) {
  var c = a === b;
  return c ? c : Qb(a, b)
}
function qc(a, b, c) {
  for(;;) {
    if(t(oc.a(a, b))) {
      if(E(c)) {
        a = b, b = A(c), c = E(c)
      }else {
        return oc.a(b, A(c))
      }
    }else {
      return m
    }
  }
}
function rc(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return qc.call(this, a, b, d)
}
rc.o = 2;
rc.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return qc(b, c, a)
};
rc.e = qc;
oc = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return k;
    case 2:
      return pc.call(this, a, b);
    default:
      return rc.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
oc.o = 2;
oc.h = rc.h;
oc.c = ba(k);
oc.a = pc;
oc.e = rc.e;
G = oc;
function I(a, b) {
  return b instanceof a
}
Rb["null"] = ba(0);
var sc = l, sc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return l;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
y["null"] = sc;
xb["null"] = function(a, b, c) {
  return J.a ? J.a(b, c) : J.call(l, b, c)
};
rb["null"] = k;
sb["null"] = ba(l);
ac["null"] = k;
bc["null"] = function(a, b) {
  return Zb(b, "nil")
};
hb["null"] = k;
ib["null"] = function(a, b) {
  return K.c ? K.c(b) : K.call(l, b)
};
Lb["null"] = k;
var tc = l, tc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b.p ? b.p() : b.call(l);
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mb["null"] = tc;
Xb["null"] = k;
Yb["null"] = function() {
  return K.c ? K.c("nil") : K.call(l, "nil")
};
Db["null"] = k;
Eb["null"] = ba(l);
eb["null"] = k;
fb["null"] = ba(0);
Fb["null"] = ba(l);
ob["null"] = k;
pb["null"] = ba(l);
qb["null"] = function() {
  return K.p ? K.p() : K.call(l)
};
Qb["null"] = function(a, b) {
  return b == l
};
Kb["null"] = ba(l);
Ib["null"] = k;
Jb["null"] = ba(l);
jb["null"] = k;
var uc = l, uc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return l;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
x["null"] = uc;
gb["null"] = ba(l);
yb["null"] = k;
zb["null"] = ba(l);
Date.prototype.B = function(a, b) {
  var c = I(Date, b);
  return c ? a.toString() === b.toString() : c
};
Rb.number = aa();
Qb.number = function(a, b) {
  return a === b
};
Rb["boolean"] = function(a) {
  return a === k ? 1 : 0
};
Kb["function"] = function(a, b) {
  return vc.a ? vc.a(function() {
    if(h === Za) {
      Za = {};
      Za = function(a, b, c) {
        this.k = a;
        this.fb = b;
        this.od = c;
        this.v = 0;
        this.l = 393217
      };
      Za.ed = k;
      Za.Zd = function() {
        return K.c ? K.c("cljs.core/t5891") : K.call(l, "cljs.core/t5891")
      };
      Za.$d = function(a, b) {
        return Zb(b, "cljs.core/t5891")
      };
      var c = function(a, b) {
        return L.a ? L.a(a.fb, b) : L.call(l, a.fb, b)
      }, d = function(a, b) {
        var a = this, d = l;
        q(b) && (d = H(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.h = function(a) {
        var b = A(a), a = B(a);
        return c(b, a)
      };
      d.e = c;
      Za.prototype.call = d;
      Za.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      Za.prototype.O = n("od");
      Za.prototype.P = function(a, b) {
        return new Za(this.k, this.fb, b)
      }
    }
    return new Za(b, a, l)
  }(), b) : vc.call(l, function() {
    if(h === Za) {
      Za = function(a, b, c) {
        this.k = a;
        this.fb = b;
        this.od = c;
        this.v = 0;
        this.l = 393217
      };
      Za.ed = k;
      Za.Zd = function() {
        return K.c ? K.c("cljs.core/t5891") : K.call(l, "cljs.core/t5891")
      };
      Za.$d = function(a, b) {
        return Zb(b, "cljs.core/t5891")
      };
      var c = function(a, b) {
        return L.a ? L.a(a.fb, b) : L.call(l, a.fb, b)
      }, d = function(a, b) {
        var a = this, d = l;
        q(b) && (d = H(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.h = function(a) {
        var b = A(a), a = B(a);
        return c(b, a)
      };
      d.e = c;
      Za.prototype.call = d;
      Za.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      Za.prototype.O = n("od");
      Za.prototype.P = function(a, b) {
        return new Za(this.k, this.fb, b)
      }
    }
    return new Za(b, a, l)
  }(), b)
};
Ib["function"] = k;
Jb["function"] = ba(l);
Rb._ = function(a) {
  return na(a)
};
function wc(a) {
  this.m = a;
  this.v = 0;
  this.l = 32768
}
wc.prototype.Qc = n("m");
var xc, yc = l;
function zc(a, b) {
  var c = fb(a);
  if(0 === c) {
    return b.p ? b.p() : b.call(l)
  }
  for(var d = x.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, x.a(a, f)) : b.call(l, d, x.a(a, f));
      if(I(wc, d)) {
        return Ac.c ? Ac.c(d) : Ac.call(l, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Bc(a, b, c) {
  for(var d = fb(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, x.a(a, f)) : b.call(l, c, x.a(a, f));
      if(I(wc, c)) {
        return Ac.c ? Ac.c(c) : Ac.call(l, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Cc(a, b, c, d) {
  for(var f = fb(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, x.a(a, d)) : b.call(l, c, x.a(a, d));
      if(I(wc, c)) {
        return Ac.c ? Ac.c(c) : Ac.call(l, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
yc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return zc.call(this, a, b);
    case 3:
      return Bc.call(this, a, b, c);
    case 4:
      return Cc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yc.a = zc;
yc.b = Bc;
yc.q = Cc;
xc = yc;
var Dc, Ec = l;
function Fc(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.p ? b.p() : b.call(l)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, a[f]) : b.call(l, d, a[f]);
      if(I(wc, d)) {
        return Ac.c ? Ac.c(d) : Ac.call(l, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Gc(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(l, c, a[f]);
      if(I(wc, c)) {
        return Ac.c ? Ac.c(c) : Ac.call(l, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Hc(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(l, c, a[d]);
      if(I(wc, c)) {
        return Ac.c ? Ac.c(c) : Ac.call(l, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Ec = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Fc.call(this, a, b);
    case 3:
      return Gc.call(this, a, b, c);
    case 4:
      return Hc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ec.a = Fc;
Ec.b = Gc;
Ec.q = Hc;
Dc = Ec;
function Ic(a) {
  if(a) {
    var b = a.l & 2, a = (b ? b : a.Sf) ? k : a.l ? m : u(eb, a)
  }else {
    a = u(eb, a)
  }
  return a
}
function Jc(a) {
  if(a) {
    var b = a.l & 16, a = (b ? b : a.Ud) ? k : a.l ? m : u(jb, a)
  }else {
    a = u(jb, a)
  }
  return a
}
function Kc(a, b) {
  this.X = a;
  this.t = b;
  this.v = 0;
  this.l = 166199550
}
p = Kc.prototype;
p.I = function(a) {
  return Lc.c ? Lc.c(a) : Lc.call(l, a)
};
p.Qa = function() {
  return this.t + 1 < this.X.length ? new Kc(this.X, this.t + 1) : l
};
p.N = function(a, b) {
  return M.a ? M.a(b, a) : M.call(l, b, a)
};
p.lc = function(a) {
  var b = a.G(a);
  return 0 < b ? new Mc(a, b - 1, l) : D
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.bb = function(a, b) {
  return Ic(this.X) ? xc.q(this.X, b, this.X[this.t], this.t + 1) : xc.q(a, b, this.X[this.t], 0)
};
p.cb = function(a, b, c) {
  return Ic(this.X) ? xc.q(this.X, b, c, this.t) : xc.q(a, b, c, 0)
};
p.L = aa();
p.G = function() {
  return this.X.length - this.t
};
p.aa = function() {
  return this.X[this.t]
};
p.Z = function() {
  return this.t + 1 < this.X.length ? new Kc(this.X, this.t + 1) : K.p ? K.p() : K.call(l)
};
p.B = function(a, b) {
  return Nc.a ? Nc.a(a, b) : Nc.call(l, a, b)
};
p.da = function(a, b) {
  var c = b + this.t;
  return c < this.X.length ? this.X[c] : l
};
p.Y = function(a, b, c) {
  a = b + this.t;
  return a < this.X.length ? this.X[a] : c
};
p.H = function() {
  return D
};
var Oc, Pc = l;
function Qc(a) {
  return Pc.a(a, 0)
}
function Rc(a, b) {
  return b < a.length ? new Kc(a, b) : l
}
Pc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Qc.call(this, a);
    case 2:
      return Rc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pc.c = Qc;
Pc.a = Rc;
Oc = Pc;
var H, Sc = l;
function Tc(a) {
  return Oc.a(a, 0)
}
function Uc(a, b) {
  return Oc.a(a, b)
}
Sc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Tc.call(this, a);
    case 2:
      return Uc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sc.c = Tc;
Sc.a = Uc;
H = Sc;
Lb.array = k;
var Vc = l, Vc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return xc.a(a, b);
    case 3:
      return xc.b(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mb.array = Vc;
var Wc = l, Wc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return x.b(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
y.array = Wc;
jb.array = k;
var Xc = l, Xc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < a.length ? a[b] : l;
    case 3:
      return b < a.length ? a[b] : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
x.array = Xc;
eb.array = k;
fb.array = function(a) {
  return a.length
};
Sb.array = function(a) {
  return H.a(a, 0)
};
function Mc(a, b, c) {
  this.Oc = a;
  this.t = b;
  this.k = c;
  this.v = 0;
  this.l = 31850574
}
p = Mc.prototype;
p.I = function(a) {
  return Lc.c ? Lc.c(a) : Lc.call(l, a)
};
p.N = function(a, b) {
  return M.a ? M.a(b, a) : M.call(l, b, a)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = aa();
p.G = function() {
  return this.t + 1
};
p.aa = function() {
  return x.a(this.Oc, this.t)
};
p.Z = function() {
  return 0 < this.t ? new Mc(this.Oc, this.t - 1, l) : D
};
p.B = function(a, b) {
  return Nc.a ? Nc.a(a, b) : Nc.call(l, a, b)
};
p.P = function(a, b) {
  return new Mc(this.Oc, this.t, b)
};
p.O = n("k");
p.H = function() {
  return vc.a ? vc.a(D, this.k) : vc.call(l, D, this.k)
};
Qb._ = function(a, b) {
  return a === b
};
var Yc, Zc = l;
function $c(a, b, c) {
  for(;;) {
    if(t(c)) {
      a = Zc.a(a, b), b = A(c), c = E(c)
    }else {
      return Zc.a(a, b)
    }
  }
}
function ad(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return $c.call(this, a, b, d)
}
ad.o = 2;
ad.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return $c(b, c, a)
};
ad.e = $c;
Zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ib(a, b);
    default:
      return ad.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zc.o = 2;
Zc.h = ad.h;
Zc.a = function(a, b) {
  return ib(a, b)
};
Zc.e = ad.e;
Yc = Zc;
function bd(a) {
  if(Ic(a)) {
    a = fb(a)
  }else {
    a: {
      for(var a = z(a), b = 0;;) {
        if(Ic(a)) {
          a = b + fb(a);
          break a
        }
        a = E(a);
        b += 1
      }
      a = h
    }
  }
  return a
}
var cd, dd = l;
function ed(a, b) {
  for(;;) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(z(a)) {
        return A(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Jc(a)) {
      return x.a(a, b)
    }
    if(z(a)) {
      var c = E(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function fd(a, b, c) {
  for(;;) {
    if(a == l) {
      return c
    }
    if(0 === b) {
      return z(a) ? A(a) : c
    }
    if(Jc(a)) {
      return x.b(a, b, c)
    }
    if(z(a)) {
      a = E(a), b -= 1
    }else {
      return c
    }
  }
}
dd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ed.call(this, a, b);
    case 3:
      return fd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
dd.a = ed;
dd.b = fd;
cd = dd;
var O, gd = l;
function hd(a, b) {
  var c;
  a == l ? c = l : (c = a ? ((c = a.l & 16) ? c : a.Ud) || (a.l ? 0 : u(jb, a)) : u(jb, a), c = c ? x.a(a, Math.floor(b)) : cd.a(a, Math.floor(b)));
  return c
}
function id(a, b, c) {
  if(a != l) {
    var d;
    d = a ? ((d = a.l & 16) ? d : a.Ud) || (a.l ? 0 : u(jb, a)) : u(jb, a);
    a = d ? x.b(a, Math.floor(b), c) : cd.b(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
gd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return hd.call(this, a, b);
    case 3:
      return id.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gd.a = hd;
gd.b = id;
O = gd;
var P, jd = l;
function kd(a, b, c, d) {
  for(;;) {
    if(a = jd.b(a, b, c), t(d)) {
      b = A(d), c = A(E(d)), d = E(E(d))
    }else {
      return a
    }
  }
}
function ld(a, b, c, d) {
  var f = l;
  q(d) && (f = H(Array.prototype.slice.call(arguments, 3), 0));
  return kd.call(this, a, b, c, f)
}
ld.o = 3;
ld.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), a = B(E(E(a)));
  return kd(b, c, d, a)
};
ld.e = kd;
jd = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return xb(a, b, c);
    default:
      return ld.e(a, b, c, H(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
jd.o = 3;
jd.h = ld.h;
jd.b = function(a, b, c) {
  return xb(a, b, c)
};
jd.e = ld.e;
P = jd;
var md, nd = l;
function od(a, b, c) {
  for(;;) {
    if(a = nd.a(a, b), t(c)) {
      b = A(c), c = E(c)
    }else {
      return a
    }
  }
}
function pd(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return od.call(this, a, b, d)
}
pd.o = 2;
pd.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return od(b, c, a)
};
pd.e = od;
nd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return zb(a, b);
    default:
      return pd.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
nd.o = 2;
nd.h = pd.h;
nd.c = aa();
nd.a = function(a, b) {
  return zb(a, b)
};
nd.e = pd.e;
md = nd;
function vc(a, b) {
  return Kb(a, b)
}
function qd(a) {
  var b;
  b = a ? ((b = a.l & 131072) ? b : a.Vd) || (a.l ? 0 : u(Ib, a)) : u(Ib, a);
  return b ? Jb(a) : l
}
var rd, sd = l;
function td(a, b, c) {
  for(;;) {
    if(a = sd.a(a, b), t(c)) {
      b = A(c), c = E(c)
    }else {
      return a
    }
  }
}
function ud(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return td.call(this, a, b, d)
}
ud.o = 2;
ud.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return td(b, c, a)
};
ud.e = td;
sd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return Eb(a, b);
    default:
      return ud.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
sd.o = 2;
sd.h = ud.h;
sd.c = aa();
sd.a = function(a, b) {
  return Eb(a, b)
};
sd.e = ud.e;
rd = sd;
var vd = {}, wd = 0, xd, yd = l;
function zd(a) {
  return yd.a(a, k)
}
function Ad(a, b) {
  var c;
  ((c = ka(a)) ? b : c) ? (255 < wd && (vd = {}, wd = 0), c = vd[a], c == l && (c = Fa(a), vd[a] = c, wd += 1)) : c = Rb(a);
  return c
}
yd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return zd.call(this, a);
    case 2:
      return Ad.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yd.c = zd;
yd.a = Ad;
xd = yd;
function Bd(a) {
  var b = a == l;
  return b ? b : ab(z(a))
}
function Cd(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.l & 4096, a = (b ? b : a.Yf) ? k : a.l ? m : u(Db, a)
    }else {
      a = u(Db, a)
    }
  }
  return a
}
function Dd(a) {
  if(a) {
    var b = a.l & 16777216, a = (b ? b : a.Xf) ? k : a.l ? m : u(Tb, a)
  }else {
    a = u(Tb, a)
  }
  return a
}
function Ed(a) {
  if(a) {
    var b = a.l & 16384, a = (b ? b : a.Zf) ? k : a.l ? m : u(Gb, a)
  }else {
    a = u(Gb, a)
  }
  return a
}
function Fd(a) {
  if(a) {
    var b = a.v & 512, a = (b ? b : a.Qf) ? k : a.v ? m : u(lc, a)
  }else {
    a = u(lc, a)
  }
  return a
}
function Gd(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Hd = {};
function Q(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.l & 64, a = (b ? b : a.Rc) ? k : a.l ? m : u(ob, a)
    }else {
      a = u(ob, a)
    }
  }
  return a
}
function Id(a) {
  var b = ka(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = !(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function Jd(a) {
  var b = ka(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Kd(a) {
  var b = ka(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function Ld(a, b) {
  return y.b(a, b, Hd) === Hd ? m : k
}
function Md(a, b) {
  if(a === b) {
    return 0
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  if((a == l ? l : a.constructor) === (b == l ? l : b.constructor)) {
    var c;
    c = a ? ((c = a.v & 2048) ? c : a.Xe) || (a.v ? 0 : u(ic, a)) : u(ic, a);
    return c ? jc(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Nd, Od = l;
function Pd(a, b) {
  var c = bd(a), d = bd(b);
  return c < d ? -1 : c > d ? 1 : Od.q(a, b, c, 0)
}
function Qd(a, b, c, d) {
  for(;;) {
    var f = Md(O.a(a, d), O.a(b, d)), g = 0 === f;
    if(g ? d + 1 < c : g) {
      d += 1
    }else {
      return f
    }
  }
}
Od = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Pd.call(this, a, b);
    case 4:
      return Qd.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Od.a = Pd;
Od.q = Qd;
Nd = Od;
var Rd, Sd = l;
function Td(a, b) {
  var c = z(b);
  return c ? S.b ? S.b(a, A(c), E(c)) : S.call(l, a, A(c), E(c)) : a.p ? a.p() : a.call(l)
}
function Ud(a, b, c) {
  for(c = z(c);;) {
    if(c) {
      b = a.a ? a.a(b, A(c)) : a.call(l, b, A(c));
      if(I(wc, b)) {
        return Ac.c ? Ac.c(b) : Ac.call(l, b)
      }
      c = E(c)
    }else {
      return b
    }
  }
}
Sd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Td.call(this, a, b);
    case 3:
      return Ud.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sd.a = Td;
Sd.b = Ud;
Rd = Sd;
var S, Vd = l;
function Wd(a, b) {
  var c;
  c = b ? ((c = b.l & 524288) ? c : b.af) || (b.l ? 0 : u(Lb, b)) : u(Lb, b);
  return c ? Mb.a(b, a) : Rd.a(a, b)
}
function Xd(a, b, c) {
  var d;
  d = c ? ((d = c.l & 524288) ? d : c.af) || (c.l ? 0 : u(Lb, c)) : u(Lb, c);
  return d ? Mb.b(c, a, b) : Rd.b(a, b, c)
}
Vd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Wd.call(this, a, b);
    case 3:
      return Xd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vd.a = Wd;
Vd.b = Xd;
S = Vd;
var Yd, Zd = l;
function $d(a, b, c) {
  return S.b(Zd, a + b, c)
}
function ae(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return $d.call(this, a, b, d)
}
ae.o = 2;
ae.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return $d(b, c, a)
};
ae.e = $d;
Zd = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return 0;
    case 1:
      return a;
    case 2:
      return a + b;
    default:
      return ae.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zd.o = 2;
Zd.h = ae.h;
Zd.p = ba(0);
Zd.c = aa();
Zd.a = function(a, b) {
  return a + b
};
Zd.e = ae.e;
Yd = Zd;
var be, ce = l;
function de(a, b) {
  return a > b ? a : b
}
function ee(a, b, c) {
  return S.b(ce, a > b ? a : b, c)
}
function fe(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return ee.call(this, a, b, d)
}
fe.o = 2;
fe.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return ee(b, c, a)
};
fe.e = ee;
ce = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return de.call(this, a, b);
    default:
      return fe.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ce.o = 2;
ce.h = fe.h;
ce.c = aa();
ce.a = de;
ce.e = fe.e;
be = ce;
function ge(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(l, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(l, a)
}
function he(a) {
  return ge(a)
}
function ie(a) {
  return ge((a - a % 2) / 2)
}
var je, ke = l;
function le() {
  return Math.random.p ? Math.random.p() : Math.random.call(l)
}
function me(a) {
  return a * ke.p()
}
ke = function(a) {
  switch(arguments.length) {
    case 0:
      return le.call(this);
    case 1:
      return me.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ke.p = le;
ke.c = me;
je = ke;
function ne(a) {
  return ge(je.c(a))
}
function oe(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function pe(a) {
  for(var b = 1, a = z(a);;) {
    var c = a;
    if(t(c ? 0 < b : c)) {
      b -= 1, a = E(a)
    }else {
      return a
    }
  }
}
var qe, re = l;
function se(a) {
  return a == l ? "" : a.toString()
}
function te(a, b) {
  return function(a, b) {
    for(;;) {
      if(t(b)) {
        var f = a.append(re.c(A(b))), g = E(b), a = f, b = g
      }else {
        return re.c(a)
      }
    }
  }.call(l, new Ya(re.c(a)), b)
}
function ue(a, b) {
  var c = l;
  q(b) && (c = H(Array.prototype.slice.call(arguments, 1), 0));
  return te.call(this, a, c)
}
ue.o = 1;
ue.h = function(a) {
  var b = A(a), a = B(a);
  return te(b, a)
};
ue.e = te;
re = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return se.call(this, a);
    default:
      return ue.e(a, H(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
re.o = 1;
re.h = ue.h;
re.p = ba("");
re.c = se;
re.e = ue.e;
qe = re;
var U, ve = l;
function we(a) {
  return Kd(a) ? a.substring(2, a.length) : Jd(a) ? qe.e(":", H([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
}
function xe(a, b) {
  return function(a, b) {
    for(;;) {
      if(t(b)) {
        var f = a.append(ve.c(A(b))), g = E(b), a = f, b = g
      }else {
        return qe.c(a)
      }
    }
  }.call(l, new Ya(ve.c(a)), b)
}
function ye(a, b) {
  var c = l;
  q(b) && (c = H(Array.prototype.slice.call(arguments, 1), 0));
  return xe.call(this, a, c)
}
ye.o = 1;
ye.h = function(a) {
  var b = A(a), a = B(a);
  return xe(b, a)
};
ye.e = xe;
ve = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return we.call(this, a);
    default:
      return ye.e(a, H(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ve.o = 1;
ve.h = ye.h;
ve.p = ba("");
ve.c = we;
ve.e = ye.e;
U = ve;
var ze, Ae = l, Ae = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ae.a = function(a, b) {
  return a.substring(b)
};
Ae.b = function(a, b, c) {
  return a.substring(b, c)
};
ze = Ae;
var Be, Ce = l;
function De(a) {
  return Jd(a) ? a : Kd(a) ? qe.e("\ufdd0", H(["'", ze.a(a, 2)], 0)) : qe.e("\ufdd0", H(["'", a], 0))
}
function Ee(a, b) {
  return Ce.c(qe.e(a, H(["/", b], 0)))
}
Ce = function(a, b) {
  switch(arguments.length) {
    case 1:
      return De.call(this, a);
    case 2:
      return Ee.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ce.c = De;
Ce.a = Ee;
Be = Ce;
function Nc(a, b) {
  var c;
  if(Dd(b)) {
    a: {
      c = z(a);
      for(var d = z(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && G.a(A(c), A(d))) {
          c = E(c), d = E(d)
        }else {
          c = m;
          break a
        }
      }
      c = h
    }
  }else {
    c = l
  }
  return t(c) ? k : m
}
function Lc(a) {
  return S.b(function(a, c) {
    var d = xd.a(c, m);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, xd.a(A(a), m), E(a))
}
function Fe(a) {
  for(var b = 0, a = z(a);;) {
    if(a) {
      var c = A(a), b = (b + (xd.c(Ge.c ? Ge.c(c) : Ge.call(l, c)) ^ xd.c(He.c ? He.c(c) : He.call(l, c)))) % 4503599627370496, a = E(a)
    }else {
      return b
    }
  }
}
function Ie(a) {
  for(var b = 0, a = z(a);;) {
    if(a) {
      var c = A(a), b = (b + xd.c(c)) % 4503599627370496, a = E(a)
    }else {
      return b
    }
  }
}
function Je(a, b, c, d, f) {
  this.k = a;
  this.ub = b;
  this.Ma = c;
  this.count = d;
  this.n = f;
  this.v = 0;
  this.l = 65413358
}
p = Je.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.Qa = function() {
  return 1 === this.count ? l : this.Ma
};
p.N = function(a, b) {
  return new Je(this.k, b, a, this.count + 1, l)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = aa();
p.G = n("count");
p.eb = n("ub");
p.aa = n("ub");
p.Z = function() {
  return 1 === this.count ? D : this.Ma
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new Je(b, this.ub, this.Ma, this.count, this.n)
};
p.O = n("k");
p.H = function() {
  return D
};
function Ke(a) {
  this.k = a;
  this.v = 0;
  this.l = 65413326
}
p = Ke.prototype;
p.I = ba(0);
p.Qa = ba(l);
p.N = function(a, b) {
  return new Je(this.k, b, l, 1, l)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = ba(l);
p.G = ba(0);
p.eb = ba(l);
p.aa = ba(l);
p.Z = function() {
  return D
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new Ke(b)
};
p.O = n("k");
p.H = aa();
var D = new Ke(l);
function Me(a) {
  var b;
  b = a ? ((b = a.l & 134217728) ? b : a.Wf) || (a.l ? 0 : u(Ub, a)) : u(Ub, a);
  return b ? Vb(a) : S.b(Yc, D, a)
}
var K, Ne = l;
function Oe(a) {
  return Yc.a(D, a)
}
function Pe(a, b) {
  return Yc.a(Ne.c(b), a)
}
function Qe(a, b, c) {
  return Yc.a(Ne.a(b, c), a)
}
function Re(a, b, c, d) {
  return Yc.a(Yc.a(Yc.a(S.b(Yc, D, Me(d)), c), b), a)
}
function Se(a, b, c, d) {
  var f = l;
  q(d) && (f = H(Array.prototype.slice.call(arguments, 3), 0));
  return Re.call(this, a, b, c, f)
}
Se.o = 3;
Se.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), a = B(E(E(a)));
  return Re(b, c, d, a)
};
Se.e = Re;
Ne = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return D;
    case 1:
      return Oe.call(this, a);
    case 2:
      return Pe.call(this, a, b);
    case 3:
      return Qe.call(this, a, b, c);
    default:
      return Se.e(a, b, c, H(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ne.o = 3;
Ne.h = Se.h;
Ne.p = function() {
  return D
};
Ne.c = Oe;
Ne.a = Pe;
Ne.b = Qe;
Ne.e = Se.e;
K = Ne;
function Te(a, b, c, d) {
  this.k = a;
  this.ub = b;
  this.Ma = c;
  this.n = d;
  this.v = 0;
  this.l = 65405164
}
p = Te.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.Qa = function() {
  return this.Ma == l ? l : Sb(this.Ma)
};
p.N = function(a, b) {
  return new Te(l, b, a, this.n)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = aa();
p.aa = n("ub");
p.Z = function() {
  return this.Ma == l ? D : this.Ma
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new Te(b, this.ub, this.Ma, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(D, this.k)
};
function M(a, b) {
  var c = b == l;
  c || (c = b ? ((c = b.l & 64) ? c : b.Rc) || (b.l ? 0 : u(ob, b)) : u(ob, b));
  return c ? new Te(l, a, b, l) : new Te(l, a, z(b), l)
}
Lb.string = k;
var Ue = l, Ue = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return xc.a(a, b);
    case 3:
      return xc.b(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mb.string = Ue;
var Ve = l, Ve = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return x.a(a, b);
    case 3:
      return x.b(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
y.string = Ve;
jb.string = k;
var We = l, We = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < fb(a) ? a.charAt(b) : l;
    case 3:
      return b < fb(a) ? a.charAt(b) : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
x.string = We;
eb.string = k;
fb.string = function(a) {
  return a.length
};
Sb.string = function(a) {
  return Oc.a(a, 0)
};
Rb.string = function(a) {
  return Fa(a)
};
function Xe(a) {
  this.ld = a;
  this.v = 0;
  this.l = 1
}
var Ye = l, Ye = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == l) {
        d = l
      }else {
        var f = b.Za;
        d = f == l ? y.b(b, d.ld, l) : f[d.ld]
      }
      return d;
    case 3:
      return b == l ? c : y.b(b, this.ld, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xe.prototype.call = Ye;
Xe.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Ze = l, Ze = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return y.b(b, this.toString(), l);
    case 3:
      return y.b(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Ze;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > bd(b) ? y.b(b[0], a, l) : y.b(b[0], a, b[1])
};
function $e(a) {
  var b = a.x;
  if(a.ud) {
    return b
  }
  a.x = b.p ? b.p() : b.call(l);
  a.ud = k;
  return a.x
}
function af(a, b, c, d) {
  this.k = a;
  this.ud = b;
  this.x = c;
  this.n = d;
  this.v = 0;
  this.l = 31850700
}
p = af.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.Qa = function(a) {
  return Sb(a.Z(a))
};
p.N = function(a, b) {
  return M(b, a)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = function(a) {
  return z($e(a))
};
p.aa = function(a) {
  return A($e(a))
};
p.Z = function(a) {
  return B($e(a))
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new af(b, this.ud, this.x, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(D, this.k)
};
function bf(a, b) {
  this.Lc = a;
  this.end = b;
  this.v = 0;
  this.l = 2
}
bf.prototype.G = n("end");
bf.prototype.add = function(a) {
  this.Lc[this.end] = a;
  return this.end += 1
};
bf.prototype.Pa = function() {
  var a = new cf(this.Lc, 0, this.end);
  this.Lc = l;
  return a
};
function cf(a, b, c) {
  this.g = a;
  this.W = b;
  this.end = c;
  this.v = 0;
  this.l = 524306
}
p = cf.prototype;
p.bb = function(a, b) {
  return Dc.q(this.g, b, this.g[this.W], this.W + 1)
};
p.cb = function(a, b, c) {
  return Dc.q(this.g, b, c, this.W)
};
p.Rd = function() {
  this.W === this.end && e(Error("-drop-first of empty chunk"));
  return new cf(this.g, this.W + 1, this.end)
};
p.da = function(a, b) {
  return this.g[this.W + b]
};
p.Y = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.W : a) ? this.g[this.W + b] : c
};
p.G = function() {
  return this.end - this.W
};
var df, ef = l;
function ff(a) {
  return ef.b(a, 0, a.length)
}
function gf(a, b) {
  return ef.b(a, b, a.length)
}
function hf(a, b, c) {
  return new cf(a, b, c)
}
ef = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return ff.call(this, a);
    case 2:
      return gf.call(this, a, b);
    case 3:
      return hf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ef.c = ff;
ef.a = gf;
ef.b = hf;
df = ef;
function jf(a, b, c, d) {
  this.Pa = a;
  this.Ua = b;
  this.k = c;
  this.n = d;
  this.l = 31850604;
  this.v = 1536
}
p = jf.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.N = function(a, b) {
  return M(b, a)
};
p.L = aa();
p.aa = function() {
  return x.a(this.Pa, 0)
};
p.Z = function() {
  return 1 < fb(this.Pa) ? new jf(kc(this.Pa), this.Ua, this.k, l) : this.Ua == l ? D : this.Ua
};
p.Sd = function() {
  return this.Ua == l ? l : this.Ua
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new jf(this.Pa, this.Ua, b, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(D, this.k)
};
p.Pc = n("Pa");
p.ic = function() {
  return this.Ua == l ? D : this.Ua
};
function kf(a, b) {
  return 0 === fb(a) ? b : new jf(a, b, l, l)
}
function lf(a) {
  for(var b = [];;) {
    if(z(a)) {
      b.push(A(a)), a = E(a)
    }else {
      return b
    }
  }
}
function mf(a, b) {
  if(Ic(a)) {
    return bd(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? z(c) : g;
    if(t(g)) {
      c = E(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var of = function nf(b) {
  return b == l ? l : E(b) == l ? z(A(b)) : M(A(b), nf(E(b)))
}, pf, qf = l;
function rf() {
  return new af(l, m, ba(l), l)
}
function sf(a) {
  return new af(l, m, function() {
    return a
  }, l)
}
function tf(a, b) {
  return new af(l, m, function() {
    var c = z(a);
    return c ? Fd(c) ? kf(mc(c), qf.a(nc(c), b)) : M(A(c), qf.a(B(c), b)) : b
  }, l)
}
function uf(a, b, c) {
  return function f(a, b) {
    return new af(l, m, function() {
      var c = z(a);
      return c ? Fd(c) ? kf(mc(c), f(nc(c), b)) : M(A(c), f(B(c), b)) : t(b) ? f(A(b), E(b)) : l
    }, l)
  }(qf.a(a, b), c)
}
function vf(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return uf.call(this, a, b, d)
}
vf.o = 2;
vf.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return uf(b, c, a)
};
vf.e = uf;
qf = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return rf.call(this);
    case 1:
      return sf.call(this, a);
    case 2:
      return tf.call(this, a, b);
    default:
      return vf.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
qf.o = 2;
qf.h = vf.h;
qf.p = rf;
qf.c = sf;
qf.a = tf;
qf.e = vf.e;
pf = qf;
var wf, xf = l;
function yf(a, b, c) {
  return M(a, M(b, c))
}
function zf(a, b, c, d) {
  return M(a, M(b, M(c, d)))
}
function Af(a, b, c, d, f) {
  return M(a, M(b, M(c, M(d, of(f)))))
}
function Bf(a, b, c, d, f) {
  var g = l;
  q(f) && (g = H(Array.prototype.slice.call(arguments, 4), 0));
  return Af.call(this, a, b, c, d, g)
}
Bf.o = 4;
Bf.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), f = A(E(E(E(a)))), a = B(E(E(E(a))));
  return Af(b, c, d, f, a)
};
Bf.e = Af;
xf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return z(a);
    case 2:
      return M(a, b);
    case 3:
      return yf.call(this, a, b, c);
    case 4:
      return zf.call(this, a, b, c, d);
    default:
      return Bf.e(a, b, c, d, H(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
xf.o = 4;
xf.h = Bf.h;
xf.c = function(a) {
  return z(a)
};
xf.a = function(a, b) {
  return M(a, b)
};
xf.b = yf;
xf.q = zf;
xf.e = Bf.e;
wf = xf;
function Cf(a, b, c) {
  var d = z(c);
  if(0 === b) {
    return a.p ? a.p() : a.call(l)
  }
  var c = pb(d), f = qb(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(l, c)
  }
  var d = pb(f), g = qb(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(l, c, d)
  }
  var f = pb(g), i = qb(g);
  if(3 === b) {
    return a.b ? a.b(c, d, f) : a.b ? a.b(c, d, f) : a.call(l, c, d, f)
  }
  var g = pb(i), j = qb(i);
  if(4 === b) {
    return a.q ? a.q(c, d, f, g) : a.q ? a.q(c, d, f, g) : a.call(l, c, d, f, g)
  }
  i = pb(j);
  j = qb(j);
  if(5 === b) {
    return a.T ? a.T(c, d, f, g, i) : a.T ? a.T(c, d, f, g, i) : a.call(l, c, d, f, g, i)
  }
  var a = pb(j), r = qb(j);
  if(6 === b) {
    return a.ha ? a.ha(c, d, f, g, i, a) : a.ha ? a.ha(c, d, f, g, i, a) : a.call(l, c, d, f, g, i, a)
  }
  var j = pb(r), v = qb(r);
  if(7 === b) {
    return a.qb ? a.qb(c, d, f, g, i, a, j) : a.qb ? a.qb(c, d, f, g, i, a, j) : a.call(l, c, d, f, g, i, a, j)
  }
  var r = pb(v), C = qb(v);
  if(8 === b) {
    return a.cd ? a.cd(c, d, f, g, i, a, j, r) : a.cd ? a.cd(c, d, f, g, i, a, j, r) : a.call(l, c, d, f, g, i, a, j, r)
  }
  var v = pb(C), F = qb(C);
  if(9 === b) {
    return a.dd ? a.dd(c, d, f, g, i, a, j, r, v) : a.dd ? a.dd(c, d, f, g, i, a, j, r, v) : a.call(l, c, d, f, g, i, a, j, r, v)
  }
  var C = pb(F), T = qb(F);
  if(10 === b) {
    return a.Sc ? a.Sc(c, d, f, g, i, a, j, r, v, C) : a.Sc ? a.Sc(c, d, f, g, i, a, j, r, v, C) : a.call(l, c, d, f, g, i, a, j, r, v, C)
  }
  var F = pb(T), R = qb(T);
  if(11 === b) {
    return a.Tc ? a.Tc(c, d, f, g, i, a, j, r, v, C, F) : a.Tc ? a.Tc(c, d, f, g, i, a, j, r, v, C, F) : a.call(l, c, d, f, g, i, a, j, r, v, C, F)
  }
  var T = pb(R), ha = qb(R);
  if(12 === b) {
    return a.Uc ? a.Uc(c, d, f, g, i, a, j, r, v, C, F, T) : a.Uc ? a.Uc(c, d, f, g, i, a, j, r, v, C, F, T) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T)
  }
  var R = pb(ha), fa = qb(ha);
  if(13 === b) {
    return a.Vc ? a.Vc(c, d, f, g, i, a, j, r, v, C, F, T, R) : a.Vc ? a.Vc(c, d, f, g, i, a, j, r, v, C, F, T, R) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R)
  }
  var ha = pb(fa), Da = qb(fa);
  if(14 === b) {
    return a.Wc ? a.Wc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha) : a.Wc ? a.Wc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R, ha)
  }
  var fa = pb(Da), Na = qb(Da);
  if(15 === b) {
    return a.Xc ? a.Xc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa) : a.Xc ? a.Xc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa)
  }
  var Da = pb(Na), Va = qb(Na);
  if(16 === b) {
    return a.Yc ? a.Yc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da) : a.Yc ? a.Yc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da)
  }
  var Na = pb(Va), Wb = qb(Va);
  if(17 === b) {
    return a.Zc ? a.Zc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na) : a.Zc ? a.Zc(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na)
  }
  var Va = pb(Wb), Le = qb(Wb);
  if(18 === b) {
    return a.$c ? a.$c(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va) : a.$c ? a.$c(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va)
  }
  Wb = pb(Le);
  Le = qb(Le);
  if(19 === b) {
    return a.ad ? a.ad(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va, Wb) : a.ad ? a.ad(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va, Wb) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va, Wb)
  }
  var Bh = pb(Le);
  qb(Le);
  if(20 === b) {
    return a.bd ? a.bd(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va, Wb, Bh) : a.bd ? a.bd(c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va, Wb, Bh) : a.call(l, c, d, f, g, i, a, j, r, v, C, F, T, R, ha, fa, Da, Na, Va, Wb, Bh)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var L, Df = l;
function Ef(a, b) {
  var c = a.o;
  if(a.h) {
    var d = mf(b, c + 1);
    return d <= c ? Cf(a, d, b) : a.h(b)
  }
  return a.apply(a, lf(b))
}
function Ff(a, b, c) {
  b = wf.a(b, c);
  c = a.o;
  if(a.h) {
    var d = mf(b, c + 1);
    return d <= c ? Cf(a, d, b) : a.h(b)
  }
  return a.apply(a, lf(b))
}
function Gf(a, b, c, d) {
  b = wf.b(b, c, d);
  c = a.o;
  return a.h ? (d = mf(b, c + 1), d <= c ? Cf(a, d, b) : a.h(b)) : a.apply(a, lf(b))
}
function Hf(a, b, c, d, f) {
  b = wf.q(b, c, d, f);
  c = a.o;
  return a.h ? (d = mf(b, c + 1), d <= c ? Cf(a, d, b) : a.h(b)) : a.apply(a, lf(b))
}
function If(a, b, c, d, f, g) {
  b = M(b, M(c, M(d, M(f, of(g)))));
  c = a.o;
  return a.h ? (d = mf(b, c + 1), d <= c ? Cf(a, d, b) : a.h(b)) : a.apply(a, lf(b))
}
function Jf(a, b, c, d, f, g) {
  var i = l;
  q(g) && (i = H(Array.prototype.slice.call(arguments, 5), 0));
  return If.call(this, a, b, c, d, f, i)
}
Jf.o = 5;
Jf.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), f = A(E(E(E(a)))), g = A(E(E(E(E(a))))), a = B(E(E(E(E(a)))));
  return If(b, c, d, f, g, a)
};
Jf.e = If;
Df = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Ef.call(this, a, b);
    case 3:
      return Ff.call(this, a, b, c);
    case 4:
      return Gf.call(this, a, b, c, d);
    case 5:
      return Hf.call(this, a, b, c, d, f);
    default:
      return Jf.e(a, b, c, d, f, H(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Df.o = 5;
Df.h = Jf.h;
Df.a = Ef;
Df.b = Ff;
Df.q = Gf;
Df.T = Hf;
Df.e = Jf.e;
L = Df;
function Kf(a, b) {
  for(;;) {
    if(z(b) == l) {
      return k
    }
    if(t(a.c ? a.c(A(b)) : a.call(l, A(b)))) {
      var c = a, d = E(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Lf(a, b) {
  for(;;) {
    if(z(b)) {
      var c = a.c ? a.c(A(b)) : a.call(l, A(b));
      if(t(c)) {
        return c
      }
      var c = a, d = E(b), a = c, b = d
    }else {
      return l
    }
  }
}
function Mf(a) {
  return a
}
function Nf(a) {
  function b(b) {
    q(b) && H(Array.prototype.slice.call(arguments, 0), 0);
    return a
  }
  b.o = 0;
  b.h = function(b) {
    z(b);
    return a
  };
  b.e = function() {
    return a
  };
  return b
}
var Of, Pf = l;
function Qf(a, b) {
  function c(a, b, c, f) {
    var v = l;
    q(f) && (v = H(Array.prototype.slice.call(arguments, 3), 0));
    return d.call(this, a, b, c, v)
  }
  function d(c, d, f, r) {
    return a.c ? a.c(L.T(b, c, d, f, r)) : a.call(l, L.T(b, c, d, f, r))
  }
  var f = l;
  c.o = 3;
  c.h = function(a) {
    var b = A(a), c = A(E(a)), f = A(E(E(a))), a = B(E(E(a)));
    return d(b, c, f, a)
  };
  c.e = d;
  f = function(d, f, j, r) {
    switch(arguments.length) {
      case 0:
        return a.c ? a.c(b.p ? b.p() : b.call(l)) : a.call(l, b.p ? b.p() : b.call(l));
      case 1:
        return a.c ? a.c(b.c ? b.c(d) : b.call(l, d)) : a.call(l, b.c ? b.c(d) : b.call(l, d));
      case 2:
        return a.c ? a.c(b.a ? b.a(d, f) : b.call(l, d, f)) : a.call(l, b.a ? b.a(d, f) : b.call(l, d, f));
      case 3:
        return a.c ? a.c(b.b ? b.b(d, f, j) : b.call(l, d, f, j)) : a.call(l, b.b ? b.b(d, f, j) : b.call(l, d, f, j));
      default:
        return c.e(d, f, j, H(arguments, 3))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  f.o = 3;
  f.h = c.h;
  return f
}
function Rf(a, b, c) {
  function d(a, b, c, d) {
    var g = l;
    q(d) && (g = H(Array.prototype.slice.call(arguments, 3), 0));
    return f.call(this, a, b, c, g)
  }
  function f(d, f, g, v) {
    return a.c ? a.c(b.c ? b.c(L.T(c, d, f, g, v)) : b.call(l, L.T(c, d, f, g, v))) : a.call(l, b.c ? b.c(L.T(c, d, f, g, v)) : b.call(l, L.T(c, d, f, g, v)))
  }
  var g = l;
  d.o = 3;
  d.h = function(a) {
    var b = A(a), c = A(E(a)), d = A(E(E(a))), a = B(E(E(a)));
    return f(b, c, d, a)
  };
  d.e = f;
  g = function(f, g, r, v) {
    switch(arguments.length) {
      case 0:
        return a.c ? a.c(b.c ? b.c(c.p ? c.p() : c.call(l)) : b.call(l, c.p ? c.p() : c.call(l))) : a.call(l, b.c ? b.c(c.p ? c.p() : c.call(l)) : b.call(l, c.p ? c.p() : c.call(l)));
      case 1:
        return a.c ? a.c(b.c ? b.c(c.c ? c.c(f) : c.call(l, f)) : b.call(l, c.c ? c.c(f) : c.call(l, f))) : a.call(l, b.c ? b.c(c.c ? c.c(f) : c.call(l, f)) : b.call(l, c.c ? c.c(f) : c.call(l, f)));
      case 2:
        return a.c ? a.c(b.c ? b.c(c.a ? c.a(f, g) : c.call(l, f, g)) : b.call(l, c.a ? c.a(f, g) : c.call(l, f, g))) : a.call(l, b.c ? b.c(c.a ? c.a(f, g) : c.call(l, f, g)) : b.call(l, c.a ? c.a(f, g) : c.call(l, f, g)));
      case 3:
        return a.c ? a.c(b.c ? b.c(c.b ? c.b(f, g, r) : c.call(l, f, g, r)) : b.call(l, c.b ? c.b(f, g, r) : c.call(l, f, g, r))) : a.call(l, b.c ? b.c(c.b ? c.b(f, g, r) : c.call(l, f, g, r)) : b.call(l, c.b ? c.b(f, g, r) : c.call(l, f, g, r)));
      default:
        return d.e(f, g, r, H(arguments, 3))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  g.o = 3;
  g.h = d.h;
  return g
}
function Sf(a, b, c, d) {
  function f(a) {
    var b = l;
    q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
    return g.call(this, b)
  }
  function g(a) {
    for(var a = L.a(A(i), a), b = E(i);;) {
      if(b) {
        a = A(b).call(l, a), b = E(b)
      }else {
        return a
      }
    }
  }
  var i = Me(wf.q(a, b, c, d));
  f.o = 0;
  f.h = function(a) {
    a = z(a);
    return g(a)
  };
  f.e = g;
  return f
}
function Tf(a, b, c, d) {
  var f = l;
  q(d) && (f = H(Array.prototype.slice.call(arguments, 3), 0));
  return Sf.call(this, a, b, c, f)
}
Tf.o = 3;
Tf.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), a = B(E(E(a)));
  return Sf(b, c, d, a)
};
Tf.e = Sf;
Pf = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return Mf;
    case 1:
      return a;
    case 2:
      return Qf.call(this, a, b);
    case 3:
      return Rf.call(this, a, b, c);
    default:
      return Tf.e(a, b, c, H(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pf.o = 3;
Pf.h = Tf.h;
Pf.p = function() {
  return Mf
};
Pf.c = aa();
Pf.a = Qf;
Pf.b = Rf;
Pf.e = Tf.e;
Of = Pf;
var Uf, Vf = l;
function Wf(a, b) {
  function c(a) {
    var b = l;
    q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, b)
  }
  function d(c) {
    return L.b(a, b, c)
  }
  c.o = 0;
  c.h = function(a) {
    a = z(a);
    return d(a)
  };
  c.e = d;
  return c
}
function Xf(a, b, c) {
  function d(a) {
    var b = l;
    q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
    return f.call(this, b)
  }
  function f(d) {
    return L.q(a, b, c, d)
  }
  d.o = 0;
  d.h = function(a) {
    a = z(a);
    return f(a)
  };
  d.e = f;
  return d
}
function Yf(a, b, c, d) {
  function f(a) {
    var b = l;
    q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
    return g.call(this, b)
  }
  function g(f) {
    return L.T(a, b, c, d, f)
  }
  f.o = 0;
  f.h = function(a) {
    a = z(a);
    return g(a)
  };
  f.e = g;
  return f
}
function Zf(a, b, c, d, f) {
  function g(a) {
    var b = l;
    q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
    return i.call(this, b)
  }
  function i(g) {
    return L.T(a, b, c, d, pf.a(f, g))
  }
  g.o = 0;
  g.h = function(a) {
    a = z(a);
    return i(a)
  };
  g.e = i;
  return g
}
function $f(a, b, c, d, f) {
  var g = l;
  q(f) && (g = H(Array.prototype.slice.call(arguments, 4), 0));
  return Zf.call(this, a, b, c, d, g)
}
$f.o = 4;
$f.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), f = A(E(E(E(a)))), a = B(E(E(E(a))));
  return Zf(b, c, d, f, a)
};
$f.e = Zf;
Vf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Wf.call(this, a, b);
    case 3:
      return Xf.call(this, a, b, c);
    case 4:
      return Yf.call(this, a, b, c, d);
    default:
      return $f.e(a, b, c, d, H(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vf.o = 4;
Vf.h = $f.h;
Vf.a = Wf;
Vf.b = Xf;
Vf.q = Yf;
Vf.e = $f.e;
Uf = Vf;
var V, ag = l;
function bg(a, b) {
  return new af(l, m, function() {
    var c = z(b);
    if(c) {
      if(Fd(c)) {
        for(var d = mc(c), f = bd(d), g = new bf(cb.c(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(x.a(d, i)) : a.call(l, x.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return kf(g.Pa(), ag.a(a, nc(c)))
      }
      return M(a.c ? a.c(A(c)) : a.call(l, A(c)), ag.a(a, B(c)))
    }
    return l
  }, l)
}
function cg(a, b, c) {
  return new af(l, m, function() {
    var d = z(b), f = z(c);
    return(d ? f : d) ? M(a.a ? a.a(A(d), A(f)) : a.call(l, A(d), A(f)), ag.b(a, B(d), B(f))) : l
  }, l)
}
function dg(a, b, c, d) {
  return new af(l, m, function() {
    var f = z(b), g = z(c), i = z(d);
    return(f ? g ? i : g : f) ? M(a.b ? a.b(A(f), A(g), A(i)) : a.call(l, A(f), A(g), A(i)), ag.q(a, B(f), B(g), B(i))) : l
  }, l)
}
function eg(a, b, c, d, f) {
  return ag.a(function(b) {
    return L.a(a, b)
  }, function i(a) {
    return new af(l, m, function() {
      var b = ag.a(z, a);
      return Kf(Mf, b) ? M(ag.a(A, b), i(ag.a(B, b))) : l
    }, l)
  }(Yc.e(f, d, H([c, b], 0))))
}
function fg(a, b, c, d, f) {
  var g = l;
  q(f) && (g = H(Array.prototype.slice.call(arguments, 4), 0));
  return eg.call(this, a, b, c, d, g)
}
fg.o = 4;
fg.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), f = A(E(E(E(a)))), a = B(E(E(E(a))));
  return eg(b, c, d, f, a)
};
fg.e = eg;
ag = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return bg.call(this, a, b);
    case 3:
      return cg.call(this, a, b, c);
    case 4:
      return dg.call(this, a, b, c, d);
    default:
      return fg.e(a, b, c, d, H(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ag.o = 4;
ag.h = fg.h;
ag.a = bg;
ag.b = cg;
ag.q = dg;
ag.e = fg.e;
V = ag;
var hg = function gg(b, c) {
  return new af(l, m, function() {
    if(0 < b) {
      var d = z(c);
      return d ? M(A(d), gg(b - 1, B(d))) : l
    }
    return l
  }, l)
};
function ig(a, b) {
  return new af(l, m, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = z(d), f = 0 < c;
        if(t(f ? d : f)) {
          c -= 1, d = B(d)
        }else {
          c = d;
          break a
        }
      }
      c = h
    }
    return c
  }, l)
}
function jg(a) {
  return W([hg(8, a), ig(8, a)])
}
var kg, lg = l;
function mg(a) {
  return new af(l, m, function() {
    return M(a, lg.c(a))
  }, l)
}
function ng(a, b) {
  return hg(a, lg.c(b))
}
lg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return mg.call(this, a);
    case 2:
      return ng.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
lg.c = mg;
lg.a = ng;
kg = lg;
var og, pg = l;
function qg(a, b) {
  return new af(l, m, function() {
    var c = z(a), d = z(b);
    return(c ? d : c) ? M(A(c), M(A(d), pg.a(B(c), B(d)))) : l
  }, l)
}
function rg(a, b, c) {
  return new af(l, m, function() {
    var d = V.a(z, Yc.e(c, b, H([a], 0)));
    return Kf(Mf, d) ? pf.a(V.a(A, d), L.a(pg, V.a(B, d))) : l
  }, l)
}
function sg(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return rg.call(this, a, b, d)
}
sg.o = 2;
sg.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return rg(b, c, a)
};
sg.e = rg;
pg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return qg.call(this, a, b);
    default:
      return sg.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
pg.o = 2;
pg.h = sg.h;
pg.a = qg;
pg.e = sg.e;
og = pg;
function tg(a, b) {
  return ig(1, og.a(kg.c(a), b))
}
function ug(a) {
  return function c(a, f) {
    return new af(l, m, function() {
      var g = z(a);
      return g ? M(A(g), c(B(g), f)) : z(f) ? c(A(f), B(f)) : l
    }, l)
  }(l, a)
}
var vg, wg = l;
function xg(a, b) {
  return ug(V.a(a, b))
}
function yg(a, b, c) {
  return ug(L.q(V, a, b, c))
}
function zg(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return yg.call(this, a, b, d)
}
zg.o = 2;
zg.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return yg(b, c, a)
};
zg.e = yg;
wg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return xg.call(this, a, b);
    default:
      return zg.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
wg.o = 2;
wg.h = zg.h;
wg.a = xg;
wg.e = zg.e;
vg = wg;
var Bg = function Ag(b, c) {
  return new af(l, m, function() {
    var d = z(c);
    if(d) {
      if(Fd(d)) {
        for(var f = mc(d), g = bd(f), i = new bf(cb.c(g), 0), j = 0;;) {
          if(j < g) {
            if(t(b.c ? b.c(x.a(f, j)) : b.call(l, x.a(f, j)))) {
              var r = x.a(f, j);
              i.add(r)
            }
            j += 1
          }else {
            break
          }
        }
        return kf(i.Pa(), Ag(b, nc(d)))
      }
      f = A(d);
      d = B(d);
      return t(b.c ? b.c(f) : b.call(l, f)) ? M(f, Ag(b, d)) : Ag(b, d)
    }
    return l
  }, l)
};
function Cg(a, b) {
  function c(a, b, c) {
    var f = l;
    q(c) && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return d.call(this, a, b, f)
  }
  function d(b, c, d) {
    return ab(L.q(a, b, c, d))
  }
  var f = l;
  c.o = 2;
  c.h = function(a) {
    var b = A(a), c = A(E(a)), a = B(E(a));
    return d(b, c, a)
  };
  c.e = d;
  f = function(b, d, f) {
    switch(arguments.length) {
      case 0:
        return ab(a.p ? a.p() : a.call(l));
      case 1:
        return ab(a.c ? a.c(b) : a.call(l, b));
      case 2:
        return ab(a.a ? a.a(b, d) : a.call(l, b, d));
      default:
        return c.e(b, d, H(arguments, 2))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  f.o = 2;
  f.h = c.h;
  return Bg(f, b)
}
function Dg(a) {
  return Bg(function(a) {
    return!Dd(a)
  }, B(function c(a) {
    return new af(l, m, function() {
      return M(a, t(Dd.c ? Dd.c(a) : Dd.call(l, a)) ? vg.a(c, z.c ? z.c(a) : z.call(l, a)) : l)
    }, l)
  }(a)))
}
function Eg(a, b) {
  var c;
  c = a ? ((c = a.v & 4) ? c : a.Tf) || (a.v ? 0 : u(dc, a)) : u(dc, a);
  c ? (c = S.b(fc, ec(a), b), c = gc(c)) : c = S.b(ib, a, b);
  return c
}
var Fg, Gg = l;
function Hg(a, b) {
  return Gg.b(a, a, b)
}
function Ig(a, b, c) {
  return new af(l, m, function() {
    var d = z(c);
    if(d) {
      var f = hg(a, d);
      return a === bd(f) ? M(f, Gg.b(a, b, ig(b, d))) : l
    }
    return l
  }, l)
}
function Jg(a, b, c, d) {
  return new af(l, m, function() {
    var f = z(d);
    if(f) {
      var g = hg(a, f);
      return a === bd(g) ? M(g, Gg.q(a, b, c, ig(b, f))) : K.c(hg(a, pf.a(g, c)))
    }
    return l
  }, l)
}
Gg = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Hg.call(this, a, b);
    case 3:
      return Ig.call(this, a, b, c);
    case 4:
      return Jg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gg.a = Hg;
Gg.b = Ig;
Gg.q = Jg;
Fg = Gg;
var Kg;
function Lg(a, b, c, d) {
  var f = O.b(b, 0, l), b = pe(b);
  return t(b) ? P.b(a, f, L.T(Mg, y.b(a, f, l), b, c, d)) : P.b(a, f, L.b(c, y.b(a, f, l), d))
}
function Mg(a, b, c, d) {
  var f = l;
  q(d) && (f = H(Array.prototype.slice.call(arguments, 3), 0));
  return Lg.call(this, a, b, c, f)
}
Mg.o = 3;
Mg.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), a = B(E(E(a)));
  return Lg(b, c, d, a)
};
Mg.e = Lg;
Kg = Mg;
function Ng(a, b) {
  this.z = a;
  this.g = b
}
function Og(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Pg(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Ng(a, cb.c(32));
    d.g[0] = c;
    c = d;
    b -= 5
  }
}
var Rg = function Qg(b, c, d, f) {
  var g = new Ng(d.z, d.g.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? g.g[i] = f : (d = d.g[i], b = d != l ? Qg(b, c - 5, d, f) : Pg(l, c - 5, f), g.g[i] = b);
  return g
};
function Sg(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Og(a)) {
      return a.ba
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.g[b >>> d & 31], d = f
      }else {
        return c.g
      }
    }
  }else {
    e(Error([U("No item "), U(b), U(" in vector of length "), U(a.j)].join("")))
  }
}
var Ug = function Tg(b, c, d, f, g) {
  var i = new Ng(d.z, d.g.slice());
  if(0 === c) {
    i.g[f & 31] = g
  }else {
    var j = f >>> c & 31, b = Tg(b, c - 5, d.g[j], f, g);
    i.g[j] = b
  }
  return i
};
function Vg(a, b, c, d, f, g) {
  this.k = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.ba = f;
  this.n = g;
  this.v = 4;
  this.l = 167668511
}
p = Vg.prototype;
p.nb = function() {
  return new Wg(this.j, this.shift, Xg.c ? Xg.c(this.root) : Xg.call(l, this.root), Yg.c ? Yg.c(this.ba) : Yg.call(l, this.ba))
};
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.R = function(a, b) {
  return a.Y(a, b, l)
};
p.A = function(a, b, c) {
  return a.Y(a, b, c)
};
p.ga = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Og(a) <= b ? (a = this.ba.slice(), a[b & 31] = c, new Vg(this.k, this.j, this.shift, this.root, a, l)) : new Vg(this.k, this.j, this.shift, Ug(a, this.shift, this.root, b, c), this.ba, l)
  }
  if(b === this.j) {
    return a.N(a, c)
  }
  e(Error([U("Index "), U(b), U(" out of bounds  [0,"), U(this.j), U("]")].join("")))
};
var Zg = l, Zg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Vg.prototype;
p.call = Zg;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  if(32 > this.j - Og(a)) {
    var c = this.ba.slice();
    c.push(b);
    return new Vg(this.k, this.j + 1, this.shift, this.root, c, l)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Ng(l, cb.c(32));
    d.g[0] = this.root;
    var f = Pg(l, this.shift, new Ng(l, this.ba));
    d.g[1] = f
  }else {
    d = Rg(a, this.shift, this.root, new Ng(l, this.ba))
  }
  return new Vg(this.k, this.j + 1, c, d, [b], l)
};
p.lc = function(a) {
  return 0 < this.j ? new Mc(a, this.j - 1, l) : D
};
p.jc = function(a) {
  return a.da(a, 0)
};
p.kc = function(a) {
  return a.da(a, 1)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.bb = function(a, b) {
  return xc.a(a, b)
};
p.cb = function(a, b, c) {
  return xc.b(a, b, c)
};
p.L = function(a) {
  return 0 === this.j ? l : $g.b ? $g.b(a, 0, 0) : $g.call(l, a, 0, 0)
};
p.G = n("j");
p.eb = function(a) {
  return 0 < this.j ? a.da(a, this.j - 1) : l
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new Vg(b, this.j, this.shift, this.root, this.ba, this.n)
};
p.O = n("k");
p.da = function(a, b) {
  return Sg(a, b)[b & 31]
};
p.Y = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.da(a, b) : c
};
p.H = function() {
  return Kb(ah, this.k)
};
var bh = new Ng(l, cb.c(32)), ah = new Vg(l, 0, 5, bh, [], 0);
function W(a) {
  var b = a.length;
  if(32 > b) {
    return new Vg(l, b, 5, bh, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = ec(new Vg(l, 32, 5, bh, c, l));;) {
    if(d < b) {
      c = d + 1, f = fc(f, a[d]), d = c
    }else {
      return gc(f)
    }
  }
}
function ch(a) {
  return gc(S.b(fc, ec(ah), a))
}
function dh(a) {
  var b = l;
  q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
  return ch(b)
}
dh.o = 0;
dh.h = function(a) {
  a = z(a);
  return ch(a)
};
dh.e = function(a) {
  return ch(a)
};
function eh(a, b, c, d, f, g) {
  this.pa = a;
  this.ma = b;
  this.t = c;
  this.W = d;
  this.k = f;
  this.n = g;
  this.l = 31719660;
  this.v = 1536
}
p = eh.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.Qa = function(a) {
  return this.W + 1 < this.ma.length ? (a = $g.q ? $g.q(this.pa, this.ma, this.t, this.W + 1) : $g.call(l, this.pa, this.ma, this.t, this.W + 1), a == l ? l : a) : a.Sd(a)
};
p.N = function(a, b) {
  return M(b, a)
};
p.L = aa();
p.aa = function() {
  return this.ma[this.W]
};
p.Z = function(a) {
  return this.W + 1 < this.ma.length ? (a = $g.q ? $g.q(this.pa, this.ma, this.t, this.W + 1) : $g.call(l, this.pa, this.ma, this.t, this.W + 1), a == l ? D : a) : a.ic(a)
};
p.Sd = function() {
  var a = this.ma.length, a = this.t + a < fb(this.pa) ? $g.b ? $g.b(this.pa, this.t + a, 0) : $g.call(l, this.pa, this.t + a, 0) : l;
  return a == l ? l : a
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return $g.T ? $g.T(this.pa, this.ma, this.t, this.W, b) : $g.call(l, this.pa, this.ma, this.t, this.W, b)
};
p.H = function() {
  return Kb(ah, this.k)
};
p.Pc = function() {
  return df.a(this.ma, this.W)
};
p.ic = function() {
  var a = this.ma.length, a = this.t + a < fb(this.pa) ? $g.b ? $g.b(this.pa, this.t + a, 0) : $g.call(l, this.pa, this.t + a, 0) : l;
  return a == l ? D : a
};
var $g, fh = l;
function gh(a, b, c) {
  return fh.T(a, Sg(a, b), b, c, l)
}
function hh(a, b, c, d) {
  return fh.T(a, b, c, d, l)
}
function ih(a, b, c, d, f) {
  return new eh(a, b, c, d, f, l)
}
fh = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return gh.call(this, a, b, c);
    case 4:
      return hh.call(this, a, b, c, d);
    case 5:
      return ih.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
fh.b = gh;
fh.q = hh;
fh.T = ih;
$g = fh;
function Xg(a) {
  return new Ng({}, a.g.slice())
}
function Yg(a) {
  var b = cb.c(32);
  Gd(a, 0, b, 0, a.length);
  return b
}
var kh = function jh(b, c, d, f) {
  var d = b.root.z === d.z ? d : new Ng(b.root.z, d.g.slice()), g = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.g[g], b = i != l ? jh(b, c - 5, i, f) : Pg(b.root.z, c - 5, f)
  }
  d.g[g] = b;
  return d
};
function Wg(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.ba = d;
  this.l = 275;
  this.v = 88
}
var lh = l, lh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Wg.prototype;
p.call = lh;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.R = function(a, b) {
  return a.Y(a, b, l)
};
p.A = function(a, b, c) {
  return a.Y(a, b, c)
};
p.da = function(a, b) {
  if(this.root.z) {
    return Sg(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
p.Y = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.da(a, b) : c
};
p.G = function() {
  if(this.root.z) {
    return this.j
  }
  e(Error("count after persistent!"))
};
p.ob = function(a, b, c) {
  var d;
  a: {
    if(a.root.z) {
      var f = 0 <= b;
      if(f ? b < a.j : f) {
        Og(a) <= b ? a.ba[b & 31] = c : (d = function i(d, f) {
          var v = a.root.z === f.z ? f : new Ng(a.root.z, f.g.slice());
          if(0 === d) {
            v.g[b & 31] = c
          }else {
            var C = b >>> d & 31, F = i(d - 5, v.g[C]);
            v.g[C] = F
          }
          return v
        }.call(l, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.j) {
        d = a.pb(a, c);
        break a
      }
      e(Error([U("Index "), U(b), U(" out of bounds for TransientVector of length"), U(a.j)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
p.pb = function(a, b) {
  if(this.root.z) {
    if(32 > this.j - Og(a)) {
      this.ba[this.j & 31] = b
    }else {
      var c = new Ng(this.root.z, this.ba), d = cb.c(32);
      d[0] = b;
      this.ba = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = cb.c(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Pg(this.root.z, this.shift, c);
        this.root = new Ng(this.root.z, d);
        this.shift = f
      }else {
        this.root = kh(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
p.Jb = function(a) {
  if(this.root.z) {
    this.root.z = l;
    var a = this.j - Og(a), b = cb.c(a);
    Gd(this.ba, 0, b, 0, a);
    return new Vg(l, this.j, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
function mh(a, b, c, d) {
  this.k = a;
  this.ka = b;
  this.Wa = c;
  this.n = d;
  this.v = 0;
  this.l = 31850572
}
p = mh.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.N = function(a, b) {
  return M(b, a)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = aa();
p.aa = function() {
  return pb(this.ka)
};
p.Z = function(a) {
  var b = E(this.ka);
  return b ? new mh(this.k, b, this.Wa, l) : this.Wa == l ? a.H(a) : new mh(this.k, this.Wa, l, l)
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new mh(b, this.ka, this.Wa, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(D, this.k)
};
function nh(a, b, c, d, f) {
  this.k = a;
  this.count = b;
  this.ka = c;
  this.Wa = d;
  this.n = f;
  this.v = 0;
  this.l = 31858766
}
p = nh.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.N = function(a, b) {
  var c;
  t(this.ka) ? (c = this.Wa, c = new nh(this.k, this.count + 1, this.ka, Yc.a(t(c) ? c : ah, b), l)) : c = new nh(this.k, this.count + 1, Yc.a(this.ka, b), ah, l);
  return c
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = function() {
  var a = z(this.Wa), b = this.ka;
  return t(t(b) ? b : a) ? new mh(l, this.ka, z(a), l) : l
};
p.G = n("count");
p.eb = function() {
  return pb(this.ka)
};
p.aa = function() {
  return A(this.ka)
};
p.Z = function(a) {
  return B(z(a))
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new nh(b, this.count, this.ka, this.Wa, this.n)
};
p.O = n("k");
p.H = function() {
  return oh
};
var oh = new nh(l, 0, l, ah, 0);
function ph() {
  this.v = 0;
  this.l = 2097152
}
ph.prototype.B = ba(m);
var qh = new ph;
function rh(a, b) {
  var c;
  c = b == l ? 0 : b ? ((c = b.l & 1024) ? c : b.Uf) || (b.l ? 0 : u(yb, b)) : u(yb, b);
  c = c ? bd(a) === bd(b) ? Kf(Mf, V.a(function(a) {
    return G.a(y.b(b, A(a), qh), A(E(a)))
  }, a)) : l : l;
  return t(c) ? k : m
}
function sh(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return l
    }
  }
}
function th(a, b) {
  var c = xd.c(a), d = xd.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function uh(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.Za, i = vc(vh, qd(a)), a = 0, i = ec(i);;) {
    if(a < f) {
      var j = d[a], a = a + 1, i = hc(i, j, g[j])
    }else {
      return b = hc(i, b, c), gc(b)
    }
  }
}
function wh(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var g = b[f];
      c[g] = a[g];
      f += 1
    }else {
      break
    }
  }
  return c
}
function xh(a, b, c, d, f) {
  this.k = a;
  this.keys = b;
  this.Za = c;
  this.ac = d;
  this.n = f;
  this.v = 4;
  this.l = 16123663
}
p = xh.prototype;
p.nb = function(a) {
  a = Eg(J.p ? J.p() : J.call(l), a);
  return ec(a)
};
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Fe(a)
};
p.R = function(a, b) {
  return a.A(a, b, l)
};
p.A = function(a, b, c) {
  return((a = ka(b)) ? sh(b, this.keys) != l : a) ? this.Za[b] : c
};
p.ga = function(a, b, c) {
  if(ka(b)) {
    var d = this.ac > yh;
    if(d ? d : this.keys.length >= yh) {
      return uh(a, b, c)
    }
    if(sh(b, this.keys) != l) {
      return a = wh(this.Za, this.keys), a[b] = c, new xh(this.k, this.keys, a, this.ac + 1, l)
    }
    a = wh(this.Za, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new xh(this.k, d, a, this.ac + 1, l)
  }
  return uh(a, b, c)
};
p.Hb = function(a, b) {
  var c = ka(b);
  return(c ? sh(b, this.keys) != l : c) ? k : m
};
var zh = l, zh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = xh.prototype;
p.call = zh;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  return Ed(b) ? a.ga(a, x.a(b, 0), x.a(b, 1)) : S.b(ib, a, b)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = function() {
  var a = this;
  return 0 < a.keys.length ? V.a(function(b) {
    return dh.e(H([b, a.Za[b]], 0))
  }, a.keys.sort(th)) : l
};
p.G = function() {
  return this.keys.length
};
p.B = function(a, b) {
  return rh(a, b)
};
p.P = function(a, b) {
  return new xh(b, this.keys, this.Za, this.ac, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(Ah, this.k)
};
p.Ib = function(a, b) {
  var c = ka(b);
  if(c ? sh(b, this.keys) != l : c) {
    var c = this.keys.slice(), d = wh(this.Za, this.keys);
    c.splice(sh(b, c), 1);
    delete d[b];
    return new xh(this.k, c, d, this.ac + 1, l)
  }
  return a
};
var Ah = new xh(l, [], {}, 0, 0), yh = 32;
function Ch(a, b) {
  return new xh(l, a, b, 0, l)
}
function Dh(a, b) {
  for(var c = a.g, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(G.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
function Eh(a, b, c, d) {
  this.k = a;
  this.j = b;
  this.g = c;
  this.n = d;
  this.v = 4;
  this.l = 16123663
}
p = Eh.prototype;
p.nb = function() {
  return new Fh({}, this.g.length, this.g.slice())
};
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Fe(a)
};
p.R = function(a, b) {
  return a.A(a, b, l)
};
p.A = function(a, b, c) {
  a = Dh(a, b);
  return-1 === a ? c : this.g[a + 1]
};
p.ga = function(a, b, c) {
  var d = Dh(a, b);
  if(-1 === d) {
    if(this.j < Gh) {
      var d = this.k, a = this.j + 1, f = this.g.slice();
      f.push(b);
      f.push(c);
      c = new Eh(d, a, f, l)
    }else {
      d = Eg(vh, a), d = ec(d), c = hc(d, b, c), c = gc(c)
    }
  }else {
    c === this.g[d + 1] ? c = a : (b = this.k, a = this.j, f = this.g.slice(), f[d + 1] = c, c = new Eh(b, a, f, l))
  }
  return c
};
p.Hb = function(a, b) {
  return-1 !== Dh(a, b)
};
var Hh = l, Hh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Eh.prototype;
p.call = Hh;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  return Ed(b) ? a.ga(a, x.a(b, 0), x.a(b, 1)) : S.b(ib, a, b)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = function() {
  var a = this;
  if(0 < a.j) {
    var b = a.g.length;
    return function d(f) {
      return new af(l, m, function() {
        return f < b ? M(W([a.g[f], a.g[f + 1]]), d(f + 2)) : l
      }, l)
    }(0)
  }
  return l
};
p.G = n("j");
p.B = function(a, b) {
  return rh(a, b)
};
p.P = function(a, b) {
  return new Eh(b, this.j, this.g, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(Ih, this.k)
};
p.Ib = function(a, b) {
  if(0 <= Dh(a, b)) {
    var c = this.g.length, d = c - 2;
    if(0 === d) {
      return a.H(a)
    }
    for(var d = cb.c(d), f = 0, g = 0;;) {
      if(f >= c) {
        return new Eh(this.k, this.j - 1, d, l)
      }
      G.a(b, this.g[f]) || (d[g] = this.g[f], d[g + 1] = this.g[f + 1], g += 2);
      f += 2
    }
  }else {
    return a
  }
};
var Ih = new Eh(l, 0, [], l), Gh = 16;
function Fh(a, b, c) {
  this.sb = a;
  this.hb = b;
  this.g = c;
  this.v = 56;
  this.l = 258
}
p = Fh.prototype;
p.ob = function(a, b, c) {
  if(t(this.sb)) {
    var d = Dh(a, b);
    if(-1 === d) {
      if(this.hb + 2 <= 2 * Gh) {
        return this.hb += 2, this.g.push(b), this.g.push(c), a
      }
      a = Jh.a ? Jh.a(this.hb, this.g) : Jh.call(l, this.hb, this.g);
      return hc(a, b, c)
    }
    c !== this.g[d + 1] && (this.g[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
p.pb = function(a, b) {
  if(t(this.sb)) {
    var c;
    c = b ? ((c = b.l & 2048) ? c : b.$e) || (b.l ? 0 : u(Ab, b)) : u(Ab, b);
    if(c) {
      return a.ob(a, Ge.c ? Ge.c(b) : Ge.call(l, b), He.c ? He.c(b) : He.call(l, b))
    }
    c = z(b);
    for(var d = a;;) {
      var f = A(c);
      if(t(f)) {
        c = E(c), d = d.ob(d, Ge.c ? Ge.c(f) : Ge.call(l, f), He.c ? He.c(f) : He.call(l, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
p.Jb = function() {
  if(t(this.sb)) {
    return this.sb = m, new Eh(l, ie(this.hb), this.g, l)
  }
  e(Error("persistent! called twice"))
};
p.R = function(a, b) {
  return a.A(a, b, l)
};
p.A = function(a, b, c) {
  if(t(this.sb)) {
    return a = Dh(a, b), -1 === a ? c : this.g[a + 1]
  }
  e(Error("lookup after persistent!"))
};
p.G = function() {
  if(t(this.sb)) {
    return ie(this.hb)
  }
  e(Error("count after persistent!"))
};
function Jh(a, b) {
  for(var c = ec(Ah), d = 0;;) {
    if(d < a) {
      c = hc(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Kh() {
  this.m = m
}
function Lh(a, b) {
  return ka(a) ? a === b : G.a(a, b)
}
var Mh, Nh = l;
function Oh(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Ph(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Nh = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Oh.call(this, a, b, c);
    case 5:
      return Ph.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nh.b = Oh;
Nh.T = Ph;
Mh = Nh;
function Qh(a, b) {
  var c = cb.c(a.length - 2);
  Gd(a, 0, c, 0, 2 * b);
  Gd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Rh, Sh = l;
function Th(a, b, c, d) {
  a = a.tb(b);
  a.g[c] = d;
  return a
}
function Uh(a, b, c, d, f, g) {
  a = a.tb(b);
  a.g[c] = d;
  a.g[f] = g;
  return a
}
Sh = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return Th.call(this, a, b, c, d);
    case 6:
      return Uh.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sh.q = Th;
Sh.ha = Uh;
Rh = Sh;
function Vh(a, b, c) {
  this.z = a;
  this.F = b;
  this.g = c
}
p = Vh.prototype;
p.ta = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = oe(this.F & i - 1);
  if(0 === (this.F & i)) {
    var r = oe(this.F);
    if(2 * r < this.g.length) {
      a = this.tb(a);
      b = a.g;
      g.m = k;
      a: {
        c = 2 * (r - j);
        g = 2 * j + (c - 1);
        for(r = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[r] = b[g];
          r -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.F |= i;
      return a
    }
    if(16 <= r) {
      j = cb.c(32);
      j[c >>> b & 31] = Wh.ta(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.F >>> d & 1) && (j[d] = this.g[f] != l ? Wh.ta(a, b + 5, xd.c(this.g[f]), this.g[f], this.g[f + 1], g) : this.g[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Xh(a, r + 1, j)
    }
    b = cb.c(2 * (r + 4));
    Gd(this.g, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Gd(this.g, 2 * j, b, 2 * (j + 1), 2 * (r - j));
    g.m = k;
    a = this.tb(a);
    a.g = b;
    a.F |= i;
    return a
  }
  r = this.g[2 * j];
  i = this.g[2 * j + 1];
  if(r == l) {
    return r = i.ta(a, b + 5, c, d, f, g), r === i ? this : Rh.q(this, a, 2 * j + 1, r)
  }
  if(Lh(d, r)) {
    return f === i ? this : Rh.q(this, a, 2 * j + 1, f)
  }
  g.m = k;
  return Rh.ha(this, a, 2 * j, l, 2 * j + 1, Yh.qb ? Yh.qb(a, b + 5, r, i, c, d, f) : Yh.call(l, a, b + 5, r, i, c, d, f))
};
p.Qb = function() {
  return Zh.c ? Zh.c(this.g) : Zh.call(l, this.g)
};
p.tb = function(a) {
  if(a === this.z) {
    return this
  }
  var b = oe(this.F), c = cb.c(0 > b ? 4 : 2 * (b + 1));
  Gd(this.g, 0, c, 0, 2 * b);
  return new Vh(a, this.F, c)
};
p.Rb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.F & d)) {
    return this
  }
  var f = oe(this.F & d - 1), g = this.g[2 * f], i = this.g[2 * f + 1];
  return g == l ? (a = i.Rb(a + 5, b, c), a === i ? this : a != l ? new Vh(l, this.F, Mh.b(this.g, 2 * f + 1, a)) : this.F === d ? l : new Vh(l, this.F ^ d, Qh(this.g, f))) : Lh(c, g) ? new Vh(l, this.F ^ d, Qh(this.g, f)) : this
};
p.sa = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = oe(this.F & g - 1);
  if(0 === (this.F & g)) {
    var j = oe(this.F);
    if(16 <= j) {
      i = cb.c(32);
      i[b >>> a & 31] = Wh.sa(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.F >>> c & 1) && (i[c] = this.g[d] != l ? Wh.sa(a + 5, xd.c(this.g[d]), this.g[d], this.g[d + 1], f) : this.g[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Xh(l, j + 1, i)
    }
    a = cb.c(2 * (j + 1));
    Gd(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Gd(this.g, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.m = k;
    return new Vh(l, this.F | g, a)
  }
  j = this.g[2 * i];
  g = this.g[2 * i + 1];
  if(j == l) {
    return j = g.sa(a + 5, b, c, d, f), j === g ? this : new Vh(l, this.F, Mh.b(this.g, 2 * i + 1, j))
  }
  if(Lh(c, j)) {
    return d === g ? this : new Vh(l, this.F, Mh.b(this.g, 2 * i + 1, d))
  }
  f.m = k;
  return new Vh(l, this.F, Mh.T(this.g, 2 * i, l, 2 * i + 1, Yh.ha ? Yh.ha(a + 5, j, g, b, c, d) : Yh.call(l, a + 5, j, g, b, c, d)))
};
p.Ta = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.F & f)) {
    return d
  }
  var g = oe(this.F & f - 1), f = this.g[2 * g], g = this.g[2 * g + 1];
  return f == l ? g.Ta(a + 5, b, c, d) : Lh(c, f) ? g : d
};
var Wh = new Vh(l, 0, cb.c(0));
function Xh(a, b, c) {
  this.z = a;
  this.j = b;
  this.g = c
}
p = Xh.prototype;
p.ta = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.g[i];
  if(j == l) {
    return a = Rh.q(this, a, i, Wh.ta(a, b + 5, c, d, f, g)), a.j += 1, a
  }
  b = j.ta(a, b + 5, c, d, f, g);
  return b === j ? this : Rh.q(this, a, i, b)
};
p.Qb = function() {
  return $h.c ? $h.c(this.g) : $h.call(l, this.g)
};
p.tb = function(a) {
  return a === this.z ? this : new Xh(a, this.j, this.g.slice())
};
p.Rb = function(a, b, c) {
  var d = b >>> a & 31, f = this.g[d];
  if(f != l) {
    a = f.Rb(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == l) {
        if(8 >= this.j) {
          a: {
            for(var f = this.g, a = 2 * (this.j - 1), b = cb.c(a), c = 0, g = 1, i = 0;;) {
              if(c < a) {
                var j = c !== d;
                if(j ? f[c] != l : j) {
                  b[g] = f[c], g += 2, i |= 1 << c
                }
                c += 1
              }else {
                d = new Vh(l, i, b);
                break a
              }
            }
            d = h
          }
        }else {
          d = new Xh(l, this.j - 1, Mh.b(this.g, d, a))
        }
      }else {
        d = new Xh(l, this.j, Mh.b(this.g, d, a))
      }
    }
    return d
  }
  return this
};
p.sa = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.g[g];
  if(i == l) {
    return new Xh(l, this.j + 1, Mh.b(this.g, g, Wh.sa(a + 5, b, c, d, f)))
  }
  a = i.sa(a + 5, b, c, d, f);
  return a === i ? this : new Xh(l, this.j, Mh.b(this.g, g, a))
};
p.Ta = function(a, b, c, d) {
  var f = this.g[b >>> a & 31];
  return f != l ? f.Ta(a + 5, b, c, d) : d
};
function ai(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Lh(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function bi(a, b, c, d) {
  this.z = a;
  this.Ca = b;
  this.j = c;
  this.g = d
}
p = bi.prototype;
p.ta = function(a, b, c, d, f, g) {
  if(c === this.Ca) {
    b = ai(this.g, this.j, d);
    if(-1 === b) {
      if(this.g.length > 2 * this.j) {
        return a = Rh.ha(this, a, 2 * this.j, d, 2 * this.j + 1, f), g.m = k, a.j += 1, a
      }
      c = this.g.length;
      b = cb.c(c + 2);
      Gd(this.g, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.m = k;
      g = this.j + 1;
      a === this.z ? (this.g = b, this.j = g, a = this) : a = new bi(this.z, this.Ca, g, b);
      return a
    }
    return this.g[b + 1] === f ? this : Rh.q(this, a, b + 1, f)
  }
  return(new Vh(a, 1 << (this.Ca >>> b & 31), [l, this, l, l])).ta(a, b, c, d, f, g)
};
p.Qb = function() {
  return Zh.c ? Zh.c(this.g) : Zh.call(l, this.g)
};
p.tb = function(a) {
  if(a === this.z) {
    return this
  }
  var b = cb.c(2 * (this.j + 1));
  Gd(this.g, 0, b, 0, 2 * this.j);
  return new bi(a, this.Ca, this.j, b)
};
p.Rb = function(a, b, c) {
  a = ai(this.g, this.j, c);
  return-1 === a ? this : 1 === this.j ? l : new bi(l, this.Ca, this.j - 1, Qh(this.g, ie(a)))
};
p.sa = function(a, b, c, d, f) {
  return b === this.Ca ? (a = ai(this.g, this.j, c), -1 === a ? (a = this.g.length, b = cb.c(a + 2), Gd(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.m = k, new bi(l, this.Ca, this.j + 1, b)) : G.a(this.g[a], d) ? this : new bi(l, this.Ca, this.j, Mh.b(this.g, a + 1, d))) : (new Vh(l, 1 << (this.Ca >>> a & 31), [l, this])).sa(a, b, c, d, f)
};
p.Ta = function(a, b, c, d) {
  a = ai(this.g, this.j, c);
  return 0 > a ? d : Lh(c, this.g[a]) ? this.g[a + 1] : d
};
var Yh, ci = l;
function di(a, b, c, d, f, g) {
  var i = xd.c(b);
  if(i === d) {
    return new bi(l, i, 2, [b, c, f, g])
  }
  var j = new Kh;
  return Wh.sa(a, i, b, c, j).sa(a, d, f, g, j)
}
function ei(a, b, c, d, f, g, i) {
  var j = xd.c(c);
  if(j === f) {
    return new bi(l, j, 2, [c, d, g, i])
  }
  var r = new Kh;
  return Wh.ta(a, b, j, c, d, r).ta(a, b, f, g, i, r)
}
ci = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return di.call(this, a, b, c, d, f, g);
    case 7:
      return ei.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ci.ha = di;
ci.qb = ei;
Yh = ci;
function fi(a, b, c, d, f) {
  this.k = a;
  this.ua = b;
  this.t = c;
  this.wa = d;
  this.n = f;
  this.v = 0;
  this.l = 31850572
}
p = fi.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.N = function(a, b) {
  return M(b, a)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = aa();
p.aa = function() {
  return this.wa == l ? W([this.ua[this.t], this.ua[this.t + 1]]) : A(this.wa)
};
p.Z = function() {
  return this.wa == l ? Zh.b ? Zh.b(this.ua, this.t + 2, l) : Zh.call(l, this.ua, this.t + 2, l) : Zh.b ? Zh.b(this.ua, this.t, E(this.wa)) : Zh.call(l, this.ua, this.t, E(this.wa))
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new fi(b, this.ua, this.t, this.wa, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(D, this.k)
};
var Zh, gi = l;
function hi(a) {
  return gi.b(a, 0, l)
}
function ii(a, b, c) {
  if(c == l) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != l) {
          return new fi(l, a, b, l, l)
        }
        var d = a[b + 1];
        if(t(d) && (d = d.Qb(), t(d))) {
          return new fi(l, a, b + 2, d, l)
        }
        b += 2
      }else {
        return l
      }
    }
  }else {
    return new fi(l, a, b, c, l)
  }
}
gi = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return hi.call(this, a);
    case 3:
      return ii.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gi.c = hi;
gi.b = ii;
Zh = gi;
function ji(a, b, c, d, f) {
  this.k = a;
  this.ua = b;
  this.t = c;
  this.wa = d;
  this.n = f;
  this.v = 0;
  this.l = 31850572
}
p = ji.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.N = function(a, b) {
  return M(b, a)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = aa();
p.aa = function() {
  return A(this.wa)
};
p.Z = function() {
  return $h.q ? $h.q(l, this.ua, this.t, E(this.wa)) : $h.call(l, l, this.ua, this.t, E(this.wa))
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new ji(b, this.ua, this.t, this.wa, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(D, this.k)
};
var $h, ki = l;
function li(a) {
  return ki.q(l, a, 0, l)
}
function mi(a, b, c, d) {
  if(d == l) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(t(f) && (f = f.Qb(), t(f))) {
          return new ji(a, b, c + 1, f, l)
        }
        c += 1
      }else {
        return l
      }
    }
  }else {
    return new ji(a, b, c, d, l)
  }
}
ki = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return li.call(this, a);
    case 4:
      return mi.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ki.c = li;
ki.q = mi;
$h = ki;
function ni(a, b, c, d, f, g) {
  this.k = a;
  this.j = b;
  this.root = c;
  this.$ = d;
  this.ea = f;
  this.n = g;
  this.v = 4;
  this.l = 16123663
}
p = ni.prototype;
p.nb = function() {
  return new oi({}, this.root, this.j, this.$, this.ea)
};
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Fe(a)
};
p.R = function(a, b) {
  return a.A(a, b, l)
};
p.A = function(a, b, c) {
  return b == l ? this.$ ? this.ea : c : this.root == l ? c : this.root.Ta(0, xd.c(b), b, c)
};
p.ga = function(a, b, c) {
  if(b == l) {
    var d = this.$;
    return(d ? c === this.ea : d) ? a : new ni(this.k, this.$ ? this.j : this.j + 1, this.root, k, c, l)
  }
  d = new Kh;
  c = (this.root == l ? Wh : this.root).sa(0, xd.c(b), b, c, d);
  return c === this.root ? a : new ni(this.k, d.m ? this.j + 1 : this.j, c, this.$, this.ea, l)
};
p.Hb = function(a, b) {
  return b == l ? this.$ : this.root == l ? m : this.root.Ta(0, xd.c(b), b, Hd) !== Hd
};
var pi = l, pi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = ni.prototype;
p.call = pi;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  return Ed(b) ? a.ga(a, x.a(b, 0), x.a(b, 1)) : S.b(ib, a, b)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = function() {
  if(0 < this.j) {
    var a = this.root != l ? this.root.Qb() : l;
    return this.$ ? M(W([l, this.ea]), a) : a
  }
  return l
};
p.G = n("j");
p.B = function(a, b) {
  return rh(a, b)
};
p.P = function(a, b) {
  return new ni(b, this.j, this.root, this.$, this.ea, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(vh, this.k)
};
p.Ib = function(a, b) {
  if(b == l) {
    return this.$ ? new ni(this.k, this.j - 1, this.root, m, l, l) : a
  }
  if(this.root == l) {
    return a
  }
  var c = this.root.Rb(0, xd.c(b), b);
  return c === this.root ? a : new ni(this.k, this.j - 1, c, this.$, this.ea, l)
};
var vh = new ni(l, 0, l, m, l, 0);
function oi(a, b, c, d, f) {
  this.z = a;
  this.root = b;
  this.count = c;
  this.$ = d;
  this.ea = f;
  this.v = 56;
  this.l = 258
}
p = oi.prototype;
p.ob = function(a, b, c) {
  return qi(a, b, c)
};
p.pb = function(a, b) {
  var c;
  a: {
    if(a.z) {
      c = b ? ((c = b.l & 2048) ? c : b.$e) || (b.l ? 0 : u(Ab, b)) : u(Ab, b);
      if(c) {
        c = qi(a, Ge.c ? Ge.c(b) : Ge.call(l, b), He.c ? He.c(b) : He.call(l, b));
        break a
      }
      c = z(b);
      for(var d = a;;) {
        var f = A(c);
        if(t(f)) {
          c = E(c), d = qi(d, Ge.c ? Ge.c(f) : Ge.call(l, f), He.c ? He.c(f) : He.call(l, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = h
  }
  return c
};
p.Jb = function(a) {
  var b;
  a.z ? (a.z = l, b = new ni(l, a.count, a.root, a.$, a.ea, l)) : e(Error("persistent! called twice"));
  return b
};
p.R = function(a, b) {
  return b == l ? this.$ ? this.ea : l : this.root == l ? l : this.root.Ta(0, xd.c(b), b)
};
p.A = function(a, b, c) {
  return b == l ? this.$ ? this.ea : c : this.root == l ? c : this.root.Ta(0, xd.c(b), b, c)
};
p.G = function() {
  if(this.z) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function qi(a, b, c) {
  if(a.z) {
    if(b == l) {
      a.ea !== c && (a.ea = c), a.$ || (a.count += 1, a.$ = k)
    }else {
      var d = new Kh, b = (a.root == l ? Wh : a.root).ta(a.z, 0, xd.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.m && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function ri(a, b, c) {
  for(var d = b;;) {
    if(a != l) {
      b = c ? a.left : a.right, d = Yc.a(d, a), a = b
    }else {
      return d
    }
  }
}
function si(a, b, c, d, f) {
  this.k = a;
  this.stack = b;
  this.fc = c;
  this.j = d;
  this.n = f;
  this.v = 0;
  this.l = 31850574
}
p = si.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.N = function(a, b) {
  return M(b, a)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = aa();
p.G = function(a) {
  return 0 > this.j ? bd(E(a)) + 1 : this.j
};
p.aa = function() {
  return Fb(this.stack)
};
p.Z = function() {
  var a = A(this.stack), a = ri(this.fc ? a.right : a.left, E(this.stack), this.fc);
  return a != l ? new si(l, a, this.fc, this.j - 1, l) : D
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new si(b, this.stack, this.fc, this.j, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(D, this.k)
};
function ti(a, b, c, d) {
  return I(X, c) ? I(X, c.left) ? new X(c.key, c.m, c.left.Ba(), new Y(a, b, c.right, d, l), l) : I(X, c.right) ? new X(c.right.key, c.right.m, new Y(c.key, c.m, c.left, c.right.left, l), new Y(a, b, c.right.right, d, l), l) : new Y(a, b, c, d, l) : new Y(a, b, c, d, l)
}
function ui(a, b, c, d) {
  return I(X, d) ? I(X, d.right) ? new X(d.key, d.m, new Y(a, b, c, d.left, l), d.right.Ba(), l) : I(X, d.left) ? new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, l), new Y(d.key, d.m, d.left.right, d.right, l), l) : new Y(a, b, c, d, l) : new Y(a, b, c, d, l)
}
function vi(a, b, c, d) {
  if(I(X, c)) {
    return new X(a, b, c.Ba(), d, l)
  }
  if(I(Y, d)) {
    return ui(a, b, c, d.Xb())
  }
  var f = I(X, d);
  if(f ? I(Y, d.left) : f) {
    return new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, l), ui(d.key, d.m, d.left.right, d.right.Xb()), l)
  }
  e(Error("red-black tree invariant violation"))
}
function Y(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.n = f;
  this.v = 0;
  this.l = 32402207
}
Y.prototype.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
Y.prototype.R = function(a, b) {
  return a.Y(a, b, l)
};
Y.prototype.A = function(a, b, c) {
  return a.Y(a, b, c)
};
Y.prototype.ga = function(a, b, c) {
  return P.b(W([this.key, this.m]), b, c)
};
var wi = l, wi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Y.prototype;
p.call = wi;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  return W([this.key, this.m, b])
};
p.jc = n("key");
p.kc = n("m");
p.Gd = function(a) {
  return a.Nd(this)
};
p.Xb = function() {
  return new X(this.key, this.m, this.left, this.right, l)
};
p.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, l)
};
p.Fd = function(a) {
  return a.Md(this)
};
p.Md = function(a) {
  return new Y(a.key, a.m, this, a.right, l)
};
var xi = l, xi = function() {
  switch(arguments.length) {
    case 0:
      return N.c ? N.c(this) : N.call(l, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Y.prototype;
p.toString = xi;
p.Nd = function(a) {
  return new Y(a.key, a.m, a.left, this, l)
};
p.Ba = function() {
  return this
};
p.bb = function(a, b) {
  return xc.a(a, b)
};
p.cb = function(a, b, c) {
  return xc.b(a, b, c)
};
p.L = function() {
  return K.a(this.key, this.m)
};
p.G = ba(2);
p.eb = n("m");
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return vc(W([this.key, this.m]), b)
};
p.O = ba(l);
p.da = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
p.Y = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
p.H = function() {
  return ah
};
function X(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.n = f;
  this.v = 0;
  this.l = 32402207
}
X.prototype.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
X.prototype.R = function(a, b) {
  return a.Y(a, b, l)
};
X.prototype.A = function(a, b, c) {
  return a.Y(a, b, c)
};
X.prototype.ga = function(a, b, c) {
  return P.b(W([this.key, this.m]), b, c)
};
var yi = l, yi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = X.prototype;
p.call = yi;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  return W([this.key, this.m, b])
};
p.jc = n("key");
p.kc = n("m");
p.Gd = function(a) {
  return new X(this.key, this.m, this.left, a, l)
};
p.Xb = function() {
  e(Error("red-black tree invariant violation"))
};
p.replace = function(a, b, c, d) {
  return new X(a, b, c, d, l)
};
p.Fd = function(a) {
  return new X(this.key, this.m, a, this.right, l)
};
p.Md = function(a) {
  return I(X, this.left) ? new X(this.key, this.m, this.left.Ba(), new Y(a.key, a.m, this.right, a.right, l), l) : I(X, this.right) ? new X(this.right.key, this.right.m, new Y(this.key, this.m, this.left, this.right.left, l), new Y(a.key, a.m, this.right.right, a.right, l), l) : new Y(a.key, a.m, this, a.right, l)
};
var zi = l, zi = function() {
  switch(arguments.length) {
    case 0:
      return N.c ? N.c(this) : N.call(l, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = X.prototype;
p.toString = zi;
p.Nd = function(a) {
  return I(X, this.right) ? new X(this.key, this.m, new Y(a.key, a.m, a.left, this.left, l), this.right.Ba(), l) : I(X, this.left) ? new X(this.left.key, this.left.m, new Y(a.key, a.m, a.left, this.left.left, l), new Y(this.key, this.m, this.left.right, this.right, l), l) : new Y(a.key, a.m, a.left, this, l)
};
p.Ba = function() {
  return new Y(this.key, this.m, this.left, this.right, l)
};
p.bb = function(a, b) {
  return xc.a(a, b)
};
p.cb = function(a, b, c) {
  return xc.b(a, b, c)
};
p.L = function() {
  return K.a(this.key, this.m)
};
p.G = ba(2);
p.eb = n("m");
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return vc(W([this.key, this.m]), b)
};
p.O = ba(l);
p.da = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
p.Y = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
p.H = function() {
  return ah
};
var Bi = function Ai(b, c, d, f, g) {
  if(c == l) {
    return new X(d, f, l, l, l)
  }
  var i = b.a ? b.a(d, c.key) : b.call(l, d, c.key);
  if(0 === i) {
    return g[0] = c, l
  }
  if(0 > i) {
    return b = Ai(b, c.left, d, f, g), b != l ? c.Fd(b) : l
  }
  b = Ai(b, c.right, d, f, g);
  return b != l ? c.Gd(b) : l
}, Di = function Ci(b, c) {
  if(b == l) {
    return c
  }
  if(c == l) {
    return b
  }
  if(I(X, b)) {
    if(I(X, c)) {
      var d = Ci(b.right, c.left);
      return I(X, d) ? new X(d.key, d.m, new X(b.key, b.m, b.left, d.left, l), new X(c.key, c.m, d.right, c.right, l), l) : new X(b.key, b.m, b.left, new X(c.key, c.m, d, c.right, l), l)
    }
    return new X(b.key, b.m, b.left, Ci(b.right, c), l)
  }
  if(I(X, c)) {
    return new X(c.key, c.m, Ci(b, c.left), c.right, l)
  }
  d = Ci(b.right, c.left);
  return I(X, d) ? new X(d.key, d.m, new Y(b.key, b.m, b.left, d.left, l), new Y(c.key, c.m, d.right, c.right, l), l) : vi(b.key, b.m, b.left, new Y(c.key, c.m, d, c.right, l))
}, Fi = function Ei(b, c, d, f) {
  if(c != l) {
    var g = b.a ? b.a(d, c.key) : b.call(l, d, c.key);
    if(0 === g) {
      return f[0] = c, Di(c.left, c.right)
    }
    if(0 > g) {
      var b = Ei(b, c.left, d, f), i = b != l;
      return(i ? i : f[0] != l) ? I(Y, c.left) ? vi(c.key, c.m, b, c.right) : new X(c.key, c.m, b, c.right, l) : l
    }
    b = Ei(b, c.right, d, f);
    ((d = b != l) ? d : f[0] != l) ? I(Y, c.right) ? (f = c.key, d = c.m, c = c.left, I(X, b) ? i = new X(f, d, c, b.Ba(), l) : I(Y, c) ? i = ti(f, d, c.Xb(), b) : ((g = I(X, c)) ? I(Y, c.right) : g) ? i = new X(c.right.key, c.right.m, ti(c.key, c.m, c.left.Xb(), c.right.left), new Y(f, d, c.right.right, b, l), l) : e(Error("red-black tree invariant violation"))) : i = new X(c.key, c.m, c.left, b, l) : i = l;
    return i
  }
  return l
}, Hi = function Gi(b, c, d, f) {
  var g = c.key, i = b.a ? b.a(d, g) : b.call(l, d, g);
  return 0 === i ? c.replace(g, f, c.left, c.right) : 0 > i ? c.replace(g, c.m, Gi(b, c.left, d, f), c.right) : c.replace(g, c.m, c.left, Gi(b, c.right, d, f))
};
function Ii(a, b, c, d, f) {
  this.qa = a;
  this.kb = b;
  this.j = c;
  this.k = d;
  this.n = f;
  this.v = 0;
  this.l = 418776847
}
p = Ii.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Fe(a)
};
p.R = function(a, b) {
  return a.A(a, b, l)
};
p.A = function(a, b, c) {
  a = Ji(a, b);
  return a != l ? a.m : c
};
p.ga = function(a, b, c) {
  var d = [l], f = Bi(this.qa, this.kb, b, c, d);
  return f == l ? (d = O.a(d, 0), G.a(c, d.m) ? a : new Ii(this.qa, Hi(this.qa, this.kb, b, c), this.j, this.k, l)) : new Ii(this.qa, f.Ba(), this.j + 1, this.k, l)
};
p.Hb = function(a, b) {
  return Ji(a, b) != l
};
var Ki = l, Ki = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Ii.prototype;
p.call = Ki;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  return Ed(b) ? a.ga(a, x.a(b, 0), x.a(b, 1)) : S.b(ib, a, b)
};
p.lc = function() {
  return 0 < this.j ? new si(l, ri(this.kb, l, m), m, this.j, l) : l
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
function Ji(a, b) {
  for(var c = a.kb;;) {
    if(c != l) {
      var d = a.qa.a ? a.qa.a(b, c.key) : a.qa.call(l, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return l
    }
  }
}
p.L = function() {
  return 0 < this.j ? new si(l, ri(this.kb, l, k), k, this.j, l) : l
};
p.G = n("j");
p.B = function(a, b) {
  return rh(a, b)
};
p.P = function(a, b) {
  return new Ii(this.qa, this.kb, this.j, b, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(Li, this.k)
};
p.Ib = function(a, b) {
  var c = [l], d = Fi(this.qa, this.kb, b, c);
  return d == l ? O.a(c, 0) == l ? a : new Ii(this.qa, l, 0, this.k, l) : new Ii(this.qa, d.Ba(), this.j - 1, this.k, l)
};
var Li = new Ii(Md, l, 0, l, 0), J;
function Mi(a) {
  for(var b = z(a), c = ec(vh);;) {
    if(b) {
      var a = E(E(b)), d = A(b), b = A(E(b)), c = hc(c, d, b), b = a
    }else {
      return gc(c)
    }
  }
}
function Ni(a) {
  var b = l;
  q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
  return Mi.call(this, b)
}
Ni.o = 0;
Ni.h = function(a) {
  a = z(a);
  return Mi(a)
};
Ni.e = Mi;
J = Ni;
function Oi(a) {
  return new Eh(l, ie(bd(a)), L.a(bb, a), l)
}
function Pi(a) {
  var b = l;
  q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
  return Oi.call(this, b)
}
Pi.o = 0;
Pi.h = function(a) {
  a = z(a);
  return Oi(a)
};
Pi.e = Oi;
function Qi(a) {
  for(var a = z(a), b = Li;;) {
    if(a) {
      var c = E(E(a)), b = P.b(b, A(a), A(E(a))), a = c
    }else {
      return b
    }
  }
}
function Ri(a) {
  var b = l;
  q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
  return Qi.call(this, b)
}
Ri.o = 0;
Ri.h = function(a) {
  a = z(a);
  return Qi(a)
};
Ri.e = Qi;
function Ge(a) {
  return Bb(a)
}
function He(a) {
  return Cb(a)
}
function Si(a) {
  return t(Lf(Mf, a)) ? S.a(function(a, c) {
    return Yc.a(t(a) ? a : Ah, c)
  }, a) : l
}
function Ti(a) {
  var b = l;
  q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
  return Si.call(this, b)
}
Ti.o = 0;
Ti.h = function(a) {
  a = z(a);
  return Si(a)
};
Ti.e = Si;
function Ui(a, b, c) {
  this.k = a;
  this.wb = b;
  this.n = c;
  this.v = 4;
  this.l = 15077647
}
Ui.prototype.nb = function() {
  return new Vi(ec(this.wb))
};
Ui.prototype.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Ie(a)
};
Ui.prototype.R = function(a, b) {
  return a.A(a, b, l)
};
Ui.prototype.A = function(a, b, c) {
  return t(wb(this.wb, b)) ? b : c
};
var Wi = l, Wi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.R(this, b);
    case 3:
      return this.A(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Ui.prototype;
p.call = Wi;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.N = function(a, b) {
  return new Ui(this.k, P.b(this.wb, b, l), l)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.L = function() {
  return z(V.a(A, this.wb))
};
p.Wd = function(a, b) {
  return new Ui(this.k, md.a(this.wb, b), l)
};
p.G = function(a) {
  return bd(z(a))
};
p.B = function(a, b) {
  var c = Cd(b);
  return c ? (c = bd(a) === bd(b)) ? Kf(function(b) {
    return Ld(a, b)
  }, b) : c : c
};
p.P = function(a, b) {
  return new Ui(b, this.wb, this.n)
};
p.O = n("k");
p.H = function() {
  return Kb(Xi, this.k)
};
var Xi = new Ui(l, J(), 0);
function Yi(a) {
  for(var b = bd(a), c = 0, d = ec(Xi);;) {
    if(c < b) {
      var f = c + 1, d = fc(d, a[c]), c = f
    }else {
      return gc(d)
    }
  }
}
function Vi(a) {
  this.jb = a;
  this.l = 259;
  this.v = 136
}
var Zi = l, Zi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return y.b(this.jb, b, Hd) === Hd ? l : b;
    case 3:
      return y.b(this.jb, b, Hd) === Hd ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
p = Vi.prototype;
p.call = Zi;
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.R = function(a, b) {
  return a.A(a, b, l)
};
p.A = function(a, b, c) {
  return y.b(this.jb, b, Hd) === Hd ? c : b
};
p.G = function() {
  return bd(this.jb)
};
p.pb = function(a, b) {
  this.jb = hc(this.jb, b, l);
  return a
};
p.Jb = function() {
  return new Ui(l, gc(this.jb), l)
};
Ri();
function $i(a) {
  if(Id(a)) {
    return a
  }
  var b = Jd(a);
  if(b ? b : Kd(a)) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? ze.a(a, 2) : ze.a(a, b + 1)
  }
  e(Error([U("Doesn't support name: "), U(a)].join("")))
}
function aj(a) {
  var b = Jd(a);
  if(b ? b : Kd(a)) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? ze.b(a, 2, b) : l
  }
  e(Error([U("Doesn't support namespace: "), U(a)].join("")))
}
var bj, cj = l;
function dj(a, b, c) {
  return(a.c ? a.c(b) : a.call(l, b)) > (a.c ? a.c(c) : a.call(l, c)) ? b : c
}
function ej(a, b, c, d) {
  return S.b(function(b, c) {
    return cj.b(a, b, c)
  }, cj.b(a, b, c), d)
}
function fj(a, b, c, d) {
  var f = l;
  q(d) && (f = H(Array.prototype.slice.call(arguments, 3), 0));
  return ej.call(this, a, b, c, f)
}
fj.o = 3;
fj.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), a = B(E(E(a)));
  return ej(b, c, d, a)
};
fj.e = ej;
cj = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return b;
    case 3:
      return dj.call(this, a, b, c);
    default:
      return fj.e(a, b, c, H(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
cj.o = 3;
cj.h = fj.h;
cj.a = function(a, b) {
  return b
};
cj.b = dj;
cj.e = fj.e;
bj = cj;
function gj(a, b, c, d, f) {
  this.k = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = f;
  this.v = 0;
  this.l = 32375006
}
p = gj.prototype;
p.I = function(a) {
  var b = this.n;
  return b != l ? b : this.n = a = Lc(a)
};
p.Qa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new gj(this.k, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new gj(this.k, this.start + this.step, this.end, this.step, l) : l
};
p.N = function(a, b) {
  return M(b, a)
};
p.toString = function() {
  return N.c ? N.c(this) : N.call(l, this)
};
p.bb = function(a, b) {
  return xc.a(a, b)
};
p.cb = function(a, b, c) {
  return xc.b(a, b, c)
};
p.L = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
p.G = function(a) {
  return ab(a.L(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
p.aa = n("start");
p.Z = function(a) {
  return a.L(a) != l ? new gj(this.k, this.start + this.step, this.end, this.step, l) : D
};
p.B = function(a, b) {
  return Nc(a, b)
};
p.P = function(a, b) {
  return new gj(b, this.start, this.end, this.step, this.n)
};
p.O = n("k");
p.da = function(a, b) {
  if(b < a.G(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
p.Y = function(a, b, c) {
  c = b < a.G(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
p.H = function() {
  return Kb(D, this.k)
};
var hj, ij = l;
function jj() {
  return ij.b(0, Number.MAX_VALUE, 1)
}
function kj(a) {
  return ij.b(0, a, 1)
}
function lj(a, b) {
  return ij.b(a, b, 1)
}
function mj(a, b, c) {
  return new gj(l, a, b, c, l)
}
ij = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return jj.call(this);
    case 1:
      return kj.call(this, a);
    case 2:
      return lj.call(this, a, b);
    case 3:
      return mj.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ij.p = jj;
ij.c = kj;
ij.a = lj;
ij.b = mj;
hj = ij;
var nj, oj = l;
function pj(a) {
  for(;;) {
    if(z(a)) {
      a = E(a)
    }else {
      return l
    }
  }
}
function qj(a, b) {
  for(;;) {
    var c = z(b);
    if(t(c ? 0 < a : c)) {
      var c = a - 1, d = E(b), a = c, b = d
    }else {
      return l
    }
  }
}
oj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return pj.call(this, a);
    case 2:
      return qj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
oj.c = pj;
oj.a = qj;
nj = oj;
var rj, sj = l;
function tj(a) {
  nj.c(a);
  return a
}
function uj(a, b) {
  nj.a(a, b);
  return b
}
sj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return tj.call(this, a);
    case 2:
      return uj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sj.c = tj;
sj.a = uj;
rj = sj;
function vj(a) {
  var b = wj.exec(a);
  return G.a(A(b), a) ? 1 === bd(b) ? A(b) : ch(b) : l
}
function xj(a) {
  a = /^(?:\(\?([idmsux]*)\))?(.*)/.exec(a);
  a = a == l ? l : 1 === bd(a) ? A(a) : ch(a);
  O.b(a, 0, l);
  O.b(a, 1, l);
  O.b(a, 2, l)
}
function yj(a, b, c, d, f, g) {
  return pf.e(W([b]), ug(tg(W([c]), V.a(function(b) {
    return a.a ? a.a(b, f) : a.call(l, b, f)
  }, g))), H([W([d])], 0))
}
function zj(a, b, c, d, f, g, i) {
  Zb(a, c);
  z(i) && (b.b ? b.b(A(i), a, g) : b.call(l, A(i), a, g));
  for(c = z(E(i));;) {
    if(c) {
      i = A(c), Zb(a, d), b.b ? b.b(i, a, g) : b.call(l, i, a, g), c = E(c)
    }else {
      break
    }
  }
  return Zb(a, f)
}
function Aj(a, b) {
  for(var c = z(b);;) {
    if(c) {
      var d = A(c);
      Zb(a, d);
      c = E(c)
    }else {
      return l
    }
  }
}
function Bj(a, b) {
  var c = l;
  q(b) && (c = H(Array.prototype.slice.call(arguments, 1), 0));
  return Aj.call(this, a, c)
}
Bj.o = 1;
Bj.h = function(a) {
  var b = A(a), a = B(a);
  return Aj(b, a)
};
Bj.e = Aj;
function Cj(a) {
  this.zf = a;
  this.v = 0;
  this.l = 1073741824
}
Cj.prototype.Yd = function(a, b) {
  return this.zf.append(b)
};
Cj.prototype.bf = ba(l);
var Ej = function Dj(b, c) {
  return b == l ? K.c("nil") : h === b ? K.c("#<undefined>") : pf.a(t(function() {
    var d = y.b(c, "\ufdd0'meta", l);
    return t(d) ? (d = b ? ((d = b.l & 131072) ? d : b.Vd) ? k : b.l ? m : u(Ib, b) : u(Ib, b), t(d) ? qd(b) : d) : d
  }()) ? pf.e(W(["^"]), Dj(qd(b), c), H([W([" "])], 0)) : l, function() {
    var c = b != l;
    return c ? b.ed : c
  }() ? b.Zd(b) : (b ? function() {
    var c = b.l & 536870912;
    return c ? c : b.Q
  }() || (b.l ? 0 : u(Xb, b)) : u(Xb, b)) ? Yb(b, c) : t(b instanceof RegExp) ? K.b('#"', b.source, '"') : K.b("#<", "" + U(b), ">"))
}, Gj = function Fj(b, c, d) {
  if(b == l) {
    return Zb(c, "nil")
  }
  if(h === b) {
    return Zb(c, "#<undefined>")
  }
  var f;
  f = y.b(d, "\ufdd0'meta", l);
  t(f) && (f = b ? ((f = b.l & 131072) ? f : b.Vd) ? k : b.l ? m : u(Ib, b) : u(Ib, b), f = t(f) ? qd(b) : f);
  t(f) && (Zb(c, "^"), Fj(qd(b), c, d), Zb(c, " "));
  ((f = b != l) ? b.ed : f) ? b = b.$d(b, c, d) : (f = b ? ((f = b.l & 2147483648) ? f : b.S) || (b.l ? 0 : u(ac, b)) : u(ac, b), f ? b = bc(b, c, d) : (f = b ? ((f = b.l & 536870912) ? f : b.Q) || (b.l ? 0 : u(Xb, b)) : u(Xb, b), b = f ? L.b(Bj, c, Yb(b, d)) : t(b instanceof RegExp) ? Bj.e(c, H(['#"', b.source, '"'], 0)) : Bj.e(c, H(["#<", "" + U(b), ">"], 0))));
  return b
};
function Hj(a) {
  var b = Ch(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":k, "\ufdd0'readably":k, "\ufdd0'meta":m, "\ufdd0'dup":m});
  if(Bd(a)) {
    b = ""
  }else {
    var c = new Ya, d = new Cj(c);
    Gj(A(a), d, b);
    for(a = z(E(a));;) {
      if(a) {
        var f = A(a);
        Zb(d, " ");
        Gj(f, d, b);
        a = E(a)
      }else {
        break
      }
    }
    $b(d);
    b = "" + U(c)
  }
  return b
}
var N;
function Ij(a) {
  var b = l;
  q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
  return Hj(b)
}
Ij.o = 0;
Ij.h = function(a) {
  a = z(a);
  return Hj(a)
};
Ij.e = function(a) {
  return Hj(a)
};
N = Ij;
var Jj = Ch('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function Kj(a) {
  return[U('"'), U(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return y.b(Jj, a, l)
  })), U('"')].join("")
}
Xb.number = k;
Yb.number = function(a) {
  return K.c("" + U(a))
};
Kc.prototype.Q = k;
Kc.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
jf.prototype.Q = k;
jf.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
Ii.prototype.Q = k;
Ii.prototype.K = function(a, b) {
  return yj(function(a) {
    return yj(Ej, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Eh.prototype.Q = k;
Eh.prototype.K = function(a, b) {
  return yj(function(a) {
    return yj(Ej, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
nh.prototype.Q = k;
nh.prototype.K = function(a, b) {
  return yj(Ej, "#queue [", " ", "]", b, z(a))
};
af.prototype.Q = k;
af.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
Mc.prototype.Q = k;
Mc.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
Xb["boolean"] = k;
Yb["boolean"] = function(a) {
  return K.c("" + U(a))
};
Xb.string = k;
Yb.string = function(a, b) {
  return Jd(a) ? K.c([U(":"), U(function() {
    var b = aj(a);
    return t(b) ? [U(b), U("/")].join("") : l
  }()), U($i(a))].join("")) : Kd(a) ? K.c([U(function() {
    var b = aj(a);
    return t(b) ? [U(b), U("/")].join("") : l
  }()), U($i(a))].join("")) : K.c(t((new Xe("\ufdd0'readably")).call(l, b)) ? Kj(a) : a)
};
fi.prototype.Q = k;
fi.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
X.prototype.Q = k;
X.prototype.K = function(a, b) {
  return yj(Ej, "[", " ", "]", b, a)
};
eh.prototype.Q = k;
eh.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
ni.prototype.Q = k;
ni.prototype.K = function(a, b) {
  return yj(function(a) {
    return yj(Ej, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Ui.prototype.Q = k;
Ui.prototype.K = function(a, b) {
  return yj(Ej, "#{", " ", "}", b, a)
};
Vg.prototype.Q = k;
Vg.prototype.K = function(a, b) {
  return yj(Ej, "[", " ", "]", b, a)
};
Je.prototype.Q = k;
Je.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
Xb.array = k;
Yb.array = function(a, b) {
  return yj(Ej, "#<Array [", ", ", "]>", b, a)
};
Xb["function"] = k;
Yb["function"] = function(a) {
  return K.b("#<", "" + U(a), ">")
};
Ke.prototype.Q = k;
Ke.prototype.K = function() {
  return K.c("()")
};
Y.prototype.Q = k;
Y.prototype.K = function(a, b) {
  return yj(Ej, "[", " ", "]", b, a)
};
Date.prototype.Q = k;
Date.prototype.K = function(a) {
  function b(a, b) {
    for(var f = "" + U(a);;) {
      if(bd(f) < b) {
        f = [U("0"), U(f)].join("")
      }else {
        return f
      }
    }
  }
  return K.c([U('#inst "'), U(a.getUTCFullYear()), U("-"), U(b(a.getUTCMonth() + 1, 2)), U("-"), U(b(a.getUTCDate(), 2)), U("T"), U(b(a.getUTCHours(), 2)), U(":"), U(b(a.getUTCMinutes(), 2)), U(":"), U(b(a.getUTCSeconds(), 2)), U("."), U(b(a.getUTCMilliseconds(), 3)), U("-"), U('00:00"')].join(""))
};
Te.prototype.Q = k;
Te.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
gj.prototype.Q = k;
gj.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
ji.prototype.Q = k;
ji.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
xh.prototype.Q = k;
xh.prototype.K = function(a, b) {
  return yj(function(a) {
    return yj(Ej, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
si.prototype.Q = k;
si.prototype.K = function(a, b) {
  return yj(Ej, "(", " ", ")", b, a)
};
ac.number = k;
bc.number = function(a, b) {
  1 / 0;
  return Zb(b, "" + U(a))
};
Kc.prototype.S = k;
Kc.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
jf.prototype.S = k;
jf.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
Ii.prototype.S = k;
Ii.prototype.J = function(a, b, c) {
  return zj(b, function(a) {
    return zj(b, Gj, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Eh.prototype.S = k;
Eh.prototype.J = function(a, b, c) {
  return zj(b, function(a) {
    return zj(b, Gj, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
nh.prototype.S = k;
nh.prototype.J = function(a, b, c) {
  return zj(b, Gj, "#queue [", " ", "]", c, z(a))
};
af.prototype.S = k;
af.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
Mc.prototype.S = k;
Mc.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
ac["boolean"] = k;
bc["boolean"] = function(a, b) {
  return Zb(b, "" + U(a))
};
ac.string = k;
bc.string = function(a, b, c) {
  return Jd(a) ? (Zb(b, ":"), c = aj(a), t(c) && Bj.e(b, H(["" + U(c), "/"], 0)), Zb(b, $i(a))) : Kd(a) ? (c = aj(a), t(c) && Bj.e(b, H(["" + U(c), "/"], 0)), Zb(b, $i(a))) : t((new Xe("\ufdd0'readably")).call(l, c)) ? Zb(b, Kj(a)) : Zb(b, a)
};
fi.prototype.S = k;
fi.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
X.prototype.S = k;
X.prototype.J = function(a, b, c) {
  return zj(b, Gj, "[", " ", "]", c, a)
};
eh.prototype.S = k;
eh.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
ni.prototype.S = k;
ni.prototype.J = function(a, b, c) {
  return zj(b, function(a) {
    return zj(b, Gj, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Ui.prototype.S = k;
Ui.prototype.J = function(a, b, c) {
  return zj(b, Gj, "#{", " ", "}", c, a)
};
Vg.prototype.S = k;
Vg.prototype.J = function(a, b, c) {
  return zj(b, Gj, "[", " ", "]", c, a)
};
Je.prototype.S = k;
Je.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
ac.array = k;
bc.array = function(a, b, c) {
  return zj(b, Gj, "#<Array [", ", ", "]>", c, a)
};
ac["function"] = k;
bc["function"] = function(a, b) {
  return Bj.e(b, H(["#<", "" + U(a), ">"], 0))
};
Ke.prototype.S = k;
Ke.prototype.J = function(a, b) {
  return Zb(b, "()")
};
Y.prototype.S = k;
Y.prototype.J = function(a, b, c) {
  return zj(b, Gj, "[", " ", "]", c, a)
};
Date.prototype.S = k;
Date.prototype.J = function(a, b) {
  function c(a, b) {
    for(var c = "" + U(a);;) {
      if(bd(c) < b) {
        c = [U("0"), U(c)].join("")
      }else {
        return c
      }
    }
  }
  return Bj.e(b, H(['#inst "', "" + U(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
};
Te.prototype.S = k;
Te.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
gj.prototype.S = k;
gj.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
ji.prototype.S = k;
ji.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
xh.prototype.S = k;
xh.prototype.J = function(a, b, c) {
  return zj(b, function(a) {
    return zj(b, Gj, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
si.prototype.S = k;
si.prototype.J = function(a, b, c) {
  return zj(b, Gj, "(", " ", ")", c, a)
};
Vg.prototype.Xe = k;
Vg.prototype.Td = function(a, b) {
  return Nd.a(a, b)
};
function Lj(a, b, c, d) {
  this.state = a;
  this.k = b;
  this.Ef = c;
  this.Ff = d;
  this.l = 2690809856;
  this.v = 2
}
p = Lj.prototype;
p.I = function(a) {
  return na(a)
};
p.Xd = function(a, b, c) {
  for(var d = z(this.Ff);;) {
    if(d) {
      var f = A(d), g = O.b(f, 0, l), f = O.b(f, 1, l);
      f.q ? f.q(g, a, b, c) : f.call(l, g, a, b, c);
      d = E(d)
    }else {
      return l
    }
  }
};
p.J = function(a, b, c) {
  Zb(b, "#<Atom: ");
  bc(this.state, b, c);
  return Zb(b, ">")
};
p.K = function(a, b) {
  return pf.e(W(["#<Atom: "]), Yb(this.state, b), H([">"], 0))
};
p.O = n("k");
p.Qc = n("state");
p.B = function(a, b) {
  return a === b
};
var Mj, Nj = l;
function Oj(a) {
  return new Lj(a, l, l, l)
}
function Pj(a, b) {
  var c = Q(b) ? L.a(J, b) : b, d = y.b(c, "\ufdd0'validator", l), c = y.b(c, "\ufdd0'meta", l);
  return new Lj(a, c, d, l)
}
function Qj(a, b) {
  var c = l;
  q(b) && (c = H(Array.prototype.slice.call(arguments, 1), 0));
  return Pj.call(this, a, c)
}
Qj.o = 1;
Qj.h = function(a) {
  var b = A(a), a = B(a);
  return Pj(b, a)
};
Qj.e = Pj;
Nj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Oj.call(this, a);
    default:
      return Qj.e(a, H(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nj.o = 1;
Nj.h = Qj.h;
Nj.c = Oj;
Nj.e = Qj.e;
Mj = Nj;
function Rj(a, b) {
  var c = a.Ef;
  t(c) && !t(c.c ? c.c(b) : c.call(l, b)) && e(Error([U("Assert failed: "), U("Validator rejected reference state"), U("\n"), U(N.e(H([vc(K("\ufdd1'validate", "\ufdd1'new-value"), J("\ufdd0'line", 6751))], 0)))].join("")));
  c = a.state;
  a.state = b;
  cc(a, c, b);
  return b
}
var Sj, Tj = l;
function Uj(a, b) {
  return Rj(a, b.c ? b.c(a.state) : b.call(l, a.state))
}
function Vj(a, b, c) {
  return Rj(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
}
function Wj(a, b, c, d) {
  return Rj(a, b.b ? b.b(a.state, c, d) : b.call(l, a.state, c, d))
}
function Xj(a, b, c, d, f) {
  return Rj(a, b.q ? b.q(a.state, c, d, f) : b.call(l, a.state, c, d, f))
}
function Yj(a, b, c, d, f, g) {
  return Rj(a, L.e(b, a.state, c, d, f, H([g], 0)))
}
function Zj(a, b, c, d, f, g) {
  var i = l;
  q(g) && (i = H(Array.prototype.slice.call(arguments, 5), 0));
  return Yj.call(this, a, b, c, d, f, i)
}
Zj.o = 5;
Zj.h = function(a) {
  var b = A(a), c = A(E(a)), d = A(E(E(a))), f = A(E(E(E(a)))), g = A(E(E(E(E(a))))), a = B(E(E(E(E(a)))));
  return Yj(b, c, d, f, g, a)
};
Zj.e = Yj;
Tj = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Uj.call(this, a, b);
    case 3:
      return Vj.call(this, a, b, c);
    case 4:
      return Wj.call(this, a, b, c, d);
    case 5:
      return Xj.call(this, a, b, c, d, f);
    default:
      return Zj.e(a, b, c, d, f, H(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tj.o = 5;
Tj.h = Zj.h;
Tj.a = Uj;
Tj.b = Vj;
Tj.q = Wj;
Tj.T = Xj;
Tj.e = Zj.e;
Sj = Tj;
function Ac(a) {
  return Hb(a)
}
var $j, ak = l;
function bk(a) {
  if(a ? a.Ye : a) {
    return a.Ye(a)
  }
  var b;
  var c = $j[s(a == l ? l : a)];
  c ? b = c : (c = $j._) ? b = c : e(w("IEncodeClojure.-js->clj", a));
  return b.call(l, a)
}
function ck(a, b) {
  if(a ? a.Ze : a) {
    return a.Ze(a, b)
  }
  var c;
  var d = $j[s(a == l ? l : a)];
  d ? c = d : (d = $j._) ? c = d : e(w("IEncodeClojure.-js->clj", a));
  return c.call(l, a, b)
}
ak = function(a, b) {
  switch(arguments.length) {
    case 1:
      return bk.call(this, a);
    case 2:
      return ck.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ak.c = bk;
ak.a = ck;
$j = ak;
var dk = l, dk = function(a, b) {
  switch(arguments.length) {
    case 1:
      return $j.a(a, Ch(["\ufdd0'keywordize-keys"], {"\ufdd0'keywordize-keys":m}));
    case 2:
      var c = Q(b) ? L.a(J, b) : b, c = y.b(c, "\ufdd0'keywordize-keys", l), d = t(c) ? Be : U;
      return function g(a) {
        var b;
        if(Q(a)) {
          b = rj.c(V.a(g, a))
        }else {
          if(b = a == l ? m : a ? ((b = a.l & 8) ? b : a.Rf) ? k : a.l ? m : u(hb, a) : u(hb, a), b) {
            b = Eg(gb(a), V.a(g, a))
          }else {
            if(t(ia(a))) {
              b = ch(V.a(g, a))
            }else {
              if((a == l ? l : a.constructor) === Object) {
                b = Ah;
                var c = [];
                Ra(a, function(a, b) {
                  return c.push(b)
                });
                b = Eg(b, function C(b) {
                  return new af(l, m, function() {
                    for(;;) {
                      if(z(b)) {
                        var c = A(b);
                        return M(W([d.c ? d.c(c) : d.call(l, c), g(a[c])]), C(B(b)))
                      }
                      return l
                    }
                  }, l)
                }(c))
              }else {
                b = a
              }
            }
          }
        }
        return b
      }(a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$j._ = dk;
function ek(a, b) {
  return $j.a(a, L.a(Pi, b))
}
function fk(a, b) {
  var c = l;
  q(b) && (c = H(Array.prototype.slice.call(arguments, 1), 0));
  return ek.call(this, a, c)
}
fk.o = 1;
fk.h = function(a) {
  var b = A(a), a = B(a);
  return ek(b, a)
};
fk.e = ek;
var gk = l;
function hk() {
  return gk.c(1)
}
function ik(a) {
  return(Math.random.p ? Math.random.p() : Math.random.call(l)) * a
}
gk = function(a) {
  switch(arguments.length) {
    case 0:
      return hk.call(this);
    case 1:
      return ik.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gk.p = hk;
gk.c = ik;
je = gk;
ne = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.p ? Math.random.p() : Math.random.call(l)) * a) : Math.floor.call(l, (Math.random.p ? Math.random.p() : Math.random.call(l)) * a)
};
function jk() {
  var a = W("#996633 #FFFF00 #FF6699 #00FFFF #00FF00 #9900CC #FF0000".split(" "));
  return O.a(a, ne(bd(a)))
}
Mj.c(Ch(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":Ah, "\ufdd0'descendants":Ah, "\ufdd0'ancestors":Ah}));
function kk(a) {
  this.Ec = a;
  this.v = 0;
  this.l = 2690646016
}
p = kk.prototype;
p.I = function(a) {
  return Fa(N.e(H([a], 0)))
};
p.J = function(a, b) {
  return Zb(b, [U('#uuid "'), U(this.Ec), U('"')].join(""))
};
p.K = function() {
  return K.c([U('#uuid "'), U(this.Ec), U('"')].join(""))
};
p.B = function(a, b) {
  var c = I(kk, b);
  return c ? this.Ec === b.Ec : c
};
p.toString = function() {
  return N.e(H([this], 0))
};
function lk(a, b) {
  return W([a, b])
}
function mk(a, b) {
  var c = O.b(a, 0, l), d = O.b(a, 1, l), f = O.b(b, 0, l), g = O.b(b, 1, l);
  return W([c + f, d + g])
}
function nk(a) {
  return mk(a, lk(0, 1))
}
;function ok(a) {
  var a = Q(a) ? L.a(J, a) : a, a = y.b(a, "\ufdd0'ticks", l), b = a != l;
  return b ? 0 === a : b
}
function pk(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'ticks", l);
  return b == l ? a : P.b(a, "\ufdd0'ticks", b - 1)
}
;function qk(a, b) {
  return Ch(["\ufdd0'type", "\ufdd0'position"], {"\ufdd0'type":b, "\ufdd0'position":a})
}
function rk(a, b, c) {
  return Ch(["\ufdd0'type", "\ufdd0'position", "\ufdd0'length", "\ufdd0'height"], {"\ufdd0'type":"\ufdd0'garbage", "\ufdd0'position":a, "\ufdd0'length":b, "\ufdd0'height":c})
}
function sk(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'position", l), c = O.b(b, 0, l), d = O.b(b, 1, l), b = y.b(a, "\ufdd0'length", l), f = y.b(a, "\ufdd0'height", l);
  return function i(a) {
    return new af(l, m, function() {
      for(var b = a;;) {
        if(z(b)) {
          var v = A(b);
          if(v = z(function(a, b) {
            return function R(a) {
              return new af(l, m, function() {
                for(;;) {
                  if(z(a)) {
                    var f = A(a);
                    return M(lk(c + b, d - f), R(B(a)))
                  }
                  return l
                }
              }, l)
            }
          }(b, v)(hj.a(0, f)))) {
            return pf.a(v, i(B(b)))
          }
          b = B(b)
        }else {
          return l
        }
      }
    }, l)
  }(hj.a(0, b))
}
function tk(a) {
  var b = V.a(function(a) {
    return qk(a, jk())
  }, sk(a));
  return Ch(["\ufdd0'type", "\ufdd0'garbage-block", "\ufdd0'ticks", "\ufdd0'pending-blocks", "\ufdd0'starting-ticks"], {"\ufdd0'type":"\ufdd0'dissolve", "\ufdd0'garbage-block":a, "\ufdd0'ticks":30, "\ufdd0'pending-blocks":b, "\ufdd0'starting-ticks":30})
}
function uk(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'position", l);
  return Ch(["\ufdd0'type", "\ufdd0'block", "\ufdd0'position", "\ufdd0'ticks", "\ufdd0'falling-to"], {"\ufdd0'type":"\ufdd0'falling", "\ufdd0'block":a, "\ufdd0'position":b, "\ufdd0'ticks":5, "\ufdd0'falling-to":nk(b)})
}
function vk(a, b) {
  var c = Q(a) ? L.a(J, a) : a, c = y.b(c, "\ufdd0'type", l);
  return G.a(c, b)
}
function wk(a) {
  return vk(a, "\ufdd0'falling")
}
function xk(a) {
  return vk(a, "\ufdd0'dissolve")
}
function yk(a) {
  return vk(a, "\ufdd0'swap-empty")
}
function zk(a) {
  return vk(a, "\ufdd0'garbage")
}
function Ak(a) {
  var b = Ld(a, "\ufdd0'position");
  return b ? (b = ab(zk(a))) ? ab(wk(a)) : b : b
}
function Bk(a) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'ticks", l);
  return ok(a)
}
function Ck(a) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'ticks", l);
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'block", l), c = y.b(a, "\ufdd0'falling-to", l);
  return t(wk(a)) ? P.b(b, "\ufdd0'position", c) : a
}
function Dk(a) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'block", l);
  y.b(a, "\ufdd0'into-position", l);
  var b = ok(a);
  return t(b) ? yk(a) : b
}
function Ek(a) {
  var b = Q(a) ? L.a(J, a) : a, a = y.b(b, "\ufdd0'block", l), b = y.b(b, "\ufdd0'into-position", l);
  return P.b(a, "\ufdd0'position", b)
}
function Fk(a) {
  a = Q(a) ? L.a(J, a) : a;
  a = y.b(a, "\ufdd0'type", l);
  return G.a(a, "\ufdd0'swap")
}
function Gk(a) {
  var b = Fk(a);
  return t(b) ? ok(a) : b
}
;var Hk, Ik = l;
function Jk(a, b) {
  for(;;) {
    if(bd(b) < bd(a)) {
      var c = a, a = b, b = c
    }else {
      return S.b(function(a, b) {
        return function(a, c) {
          return Ld(b, c) ? a : rd.a(a, c)
        }
      }(a, b), a, a)
    }
  }
}
function Kk(a, b, c) {
  var a = Yc.e(c, b, H([a], 0)), d = L.b(bj, function(a) {
    return-bd(a)
  }, a), a = M(d, Cg(function(a) {
    return d === a
  }, a));
  return S.b(Ik, A(a), B(a))
}
function Lk(a, b, c) {
  var d = l;
  q(c) && (d = H(Array.prototype.slice.call(arguments, 2), 0));
  return Kk.call(this, a, b, d)
}
Lk.o = 2;
Lk.h = function(a) {
  var b = A(a), c = A(E(a)), a = B(E(a));
  return Kk(b, c, a)
};
Lk.e = Kk;
Ik = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return Jk.call(this, a, b);
    default:
      return Lk.e(a, b, H(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ik.o = 2;
Ik.h = Lk.h;
Ik.c = aa();
Ik.a = Jk;
Ik.e = Lk.e;
Hk = Ik;
var Mk, Nk = l;
function Ok(a) {
  return L.a(U, a)
}
function Pk(a, b) {
  return L.a(U, tg(a, b))
}
Nk = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ok.call(this, a);
    case 2:
      return Pk.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nk.c = Ok;
Nk.a = Pk;
Mk = Nk;
function Qk(a) {
  return a.toUpperCase()
}
;function Rk(a, b) {
  e(Error(L.a(U, b)))
}
function Sk(a, b) {
  var c = l;
  q(b) && (c = H(Array.prototype.slice.call(arguments, 1), 0));
  return Rk.call(this, 0, c)
}
Sk.o = 1;
Sk.h = function(a) {
  A(a);
  a = B(a);
  return Rk(0, a)
};
Sk.e = Rk;
xj("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
xj("([-+]?[0-9]+)/([0-9]+)");
xj("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
xj("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
xj("[0-9A-Fa-f]{2}");
xj("[0-9A-Fa-f]{4}");
function Tk(a) {
  var b = 0 === (a % 4 + 4) % 4;
  return t(b) ? (b = ab(0 === (a % 100 + 100) % 100), t(b) ? b : 0 === (a % 400 + 400) % 400) : b
}
var Uk, Vk = W([l, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]), Wk = W([l, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
Uk = function(a, b) {
  return y.b(t(b) ? Wk : Vk, a, l)
};
var Xk, wj = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Yk(a, b, c, d) {
  var f = a <= b;
  (f ? b <= c : f) || e(Error([U("Assert failed: "), U([U(d), U(" Failed:  "), U(a), U("<="), U(b), U("<="), U(c)].join("")), U("\n"), U(N.e(H([vc(K("\ufdd1'<=", "\ufdd1'low", "\ufdd1'n", "\ufdd1'high"), J("\ufdd0'line", 474))], 0)))].join("")));
  return b
}
Xk = function(a) {
  var b = V.a(ch, jg(vj(a)));
  if(t(b)) {
    var c = O.b(b, 0, l);
    O.b(c, 0, l);
    var a = O.b(c, 1, l), d = O.b(c, 2, l), f = O.b(c, 3, l), g = O.b(c, 4, l), i = O.b(c, 5, l), j = O.b(c, 6, l), c = O.b(c, 7, l), r = O.b(b, 1, l);
    O.b(r, 0, l);
    O.b(r, 1, l);
    O.b(r, 2, l);
    var v = V.a(function(a) {
      return V.a(function(a) {
        return parseInt(a, 10)
      }, a)
    }, V.b(function(a, b) {
      return Kg(b, W([0]), a)
    }, W([Nf(l), function(a) {
      return G.a(a, "-") ? "-1" : "1"
    }]), b)), C = O.b(v, 0, l);
    O.b(C, 0, l);
    var b = O.b(C, 1, l), r = O.b(C, 2, l), F = O.b(C, 3, l), T = O.b(C, 4, l), R = O.b(C, 5, l), ha = O.b(C, 6, l), C = O.b(C, 7, l), fa = O.b(v, 1, l), v = O.b(fa, 0, l), Da = O.b(fa, 1, l), fa = O.b(fa, 2, l);
    return W([ab(a) ? 1970 : b, ab(d) ? 1 : Yk(1, r, 12, "timestamp month field must be in range 1..12"), ab(f) ? 1 : Yk(1, F, Uk.a ? Uk.a(r, Tk(b)) : Uk.call(l, r, Tk(b)), "timestamp day field must be in range 1..last day in month"), ab(g) ? 0 : Yk(0, T, 23, "timestamp hour field must be in range 0..23"), ab(i) ? 0 : Yk(0, R, 59, "timestamp minute field must be in range 0..59"), ab(j) ? 0 : Yk(0, ha, G.a(R, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), ab(c) ? 0 : Yk(0, C, 999, 
    "timestamp millisecond field must be in range 0..999"), v * (60 * Da + fa)])
  }
  return l
};
Mj.c(Ch(["inst", "uuid", "queue"], {inst:function(a) {
  var b;
  if(Id(a)) {
    if(b = Xk.c ? Xk.c(a) : Xk.call(l, a), t(b)) {
      var a = O.b(b, 0, l), c = O.b(b, 1, l), d = O.b(b, 2, l), f = O.b(b, 3, l), g = O.b(b, 4, l), i = O.b(b, 5, l), j = O.b(b, 6, l);
      b = O.b(b, 7, l);
      b = new Date(Date.UTC(a, c - 1, d, f, g, i, j) - 6E4 * b)
    }else {
      b = Sk.e(l, H([[U("Unrecognized date/time syntax: "), U(a)].join("")], 0))
    }
  }else {
    b = Sk.e(l, H(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, uuid:function(a) {
  return Id(a) ? new kk(a) : Sk.e(l, H(["UUID literal expects a string as its representation."], 0))
}, queue:function(a) {
  return Ed(a) ? Eg(oh, a) : Sk.e(l, H(["Queue literal expects a vector for its elements."], 0))
}}));
var $k = function Zk(b, c) {
  var d = O.b(b, 0, l), f = pe(b), g = O.b(c, 0, l), i = pe(c), j = d == l;
  return(j ? j : g == l) ? D : M(W([d, g]), Zk(f, i))
};
function al(a, b) {
  return Math.pow(a, b)
}
function bl(a) {
  if(G.a("11", a)) {
    return"B"
  }
  if(G.a("12", a)) {
    return"C"
  }
  if(G.a("13", a)) {
    return"D"
  }
  if(G.a("14", a)) {
    return"E"
  }
  if(G.a("15", a)) {
    return"F"
  }
  if(G.a("0", a)) {
    return"0"
  }
  if(G.a("1", a)) {
    return"1"
  }
  if(G.a("2", a)) {
    return"2"
  }
  if(G.a("3", a)) {
    return"3"
  }
  if(G.a("4", a)) {
    return"4"
  }
  if(G.a("5", a)) {
    return"5"
  }
  if(G.a("6", a)) {
    return"6"
  }
  if(G.a("7", a)) {
    return"7"
  }
  if(G.a("8", a)) {
    return"8"
  }
  if(G.a("9", a)) {
    return"9"
  }
  if(G.a("10", a)) {
    return"A"
  }
  e(Error([U("No matching clause: "), U(a)].join("")))
}
function cl(a) {
  if(G.a("A", a)) {
    return 10
  }
  if(G.a("B", a)) {
    return 11
  }
  if(G.a("C", a)) {
    return 12
  }
  if(G.a("D", a)) {
    return 13
  }
  if(G.a("E", a)) {
    return 14
  }
  if(G.a("F", a)) {
    return 15
  }
  if(G.a("0", a)) {
    return 0
  }
  if(G.a("1", a)) {
    return 1
  }
  if(G.a("2", a)) {
    return 2
  }
  if(G.a("3", a)) {
    return 3
  }
  if(G.a("4", a)) {
    return 4
  }
  if(G.a("5", a)) {
    return 5
  }
  if(G.a("6", a)) {
    return 6
  }
  if(G.a("7", a)) {
    return 7
  }
  if(G.a("8", a)) {
    return 8
  }
  if(G.a("9", a)) {
    return 9
  }
  e(Error([U("No matching clause: "), U(a)].join("")))
}
function dl(a) {
  var b = ge(a / 16), a = (a % 16 + 16) % 16;
  return Mk.c(V.a(Of.a(bl, U), W([b, a])))
}
;function el(a, b) {
  return P.b(a, "\ufdd0'blocks", Eg(ah, b))
}
var gl = function fl(b) {
  if(t(zk(b))) {
    b = sk(b)
  }else {
    var c;
    c = Fk(b);
    c = t(c) ? c : vk(b, "\ufdd0'disappear");
    b = t(c) ? S.a(pf, V.a(fl, (new Xe("\ufdd0'blocks")).call(l, b))) : t(yk(b)) ? M((new Xe("\ufdd0'into-position")).call(l, b), fl((new Xe("\ufdd0'block")).call(l, b))) : t(xk(b)) ? S.a(pf, V.a(fl, (new Xe("\ufdd0'pending-blocks")).call(l, b))) : Ld(b, "\ufdd0'position") ? W([(new Xe("\ufdd0'position")).call(l, b)]) : ah
  }
  return b
};
function hl(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'blocks", l), c = el(c, pf.a(d, b)), c = Q(c) ? L.a(J, c) : c, d = y.b(c, "\ufdd0'blocks-hash", l), d = S.b(function(a, b) {
    return S.b(function(a, c) {
      return P.b(a, c, b)
    }, a, gl(b))
  }, d, b);
  return P.b(c, "\ufdd0'blocks-hash", d)
}
function il(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'blocks", l), c = el(c, Cg(b, d)), c = Q(c) ? L.a(J, c) : c, d = y.b(c, "\ufdd0'blocks-hash", l), f = S.a(pf, V.a(gl, b)), d = S.b(function(a, b) {
    return md.a(a, b)
  }, d, f);
  return P.b(c, "\ufdd0'blocks-hash", d)
}
function jl(a, b, c) {
  return hl(il(a, b), c)
}
function kl(a) {
  a = Q(a) ? L.a(J, a) : a;
  a = y.b(a, "\ufdd0'blocks", l);
  return pf.a(Bg(Ak, a), Dg(V.a(function(a) {
    a = Q(a) ? L.a(J, a) : a;
    a = y.b(a, "\ufdd0'blocks", l);
    return a == l ? ah : a
  }, a)))
}
function ll(a) {
  a = Q(a) ? L.a(J, a) : a;
  a = y.b(a, "\ufdd0'blocks", l);
  return Bg(zk, a)
}
function ml(a) {
  a = Q(a) ? L.a(J, a) : a;
  a = y.b(a, "\ufdd0'blocks", l);
  return V.a(function(a) {
    return(new Xe("\ufdd0'into-position")).call(l, a)
  }, Bg(yk, a))
}
function nl(a) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'blocks", l);
  return pf.e(V.a(function(a) {
    return(new Xe("\ufdd0'position")).call(l, a)
  }, kl(a)), ml(a), H([S.b(function(a, c) {
    return pf.a(a, sk(c))
  }, ah, ll(a))], 0))
}
function ol(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'blocks", l);
  return pf.a(nl(a), S.b(function(a, b) {
    var f = Q(b) ? L.a(J, b) : b, g = y.b(f, "\ufdd0'block", l), g = Q(g) ? L.a(J, g) : g, g = y.b(g, "\ufdd0'position", l), f = y.b(f, "\ufdd0'falling-to", l);
    return pf.a(a, W([g, f]))
  }, ah, Bg(wk, b)))
}
function pl(a, b, c) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'blocks", l);
  if(t(Ld(Eg(Xi, ol(a)), c))) {
    return a
  }
  c = Ch(["\ufdd0'type", "\ufdd0'block", "\ufdd0'into-position", "\ufdd0'ticks"], {"\ufdd0'type":"\ufdd0'swap-empty", "\ufdd0'block":b, "\ufdd0'into-position":c, "\ufdd0'ticks":5});
  return jl(a, Yi([b]), Yi([c]))
}
function ql(a, b) {
  var c = Q(a) ? L.a(J, a) : a, c = y.b(c, "\ufdd0'blocks-hash", l);
  return y.b(c, b, l)
}
function rl(a) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'blocks", l);
  var b = y.b(a, "\ufdd0'rows", l), c = y.b(a, "\ufdd0'cols", l), d = b + 1, b = V.a(function(a) {
    return qk(lk(a, d), jk())
  }, hj.a(1, c + 1));
  return P.b(hl(a, b), "\ufdd0'rows", d)
}
var tl = function sl(b, c, d) {
  var f;
  f = Q(d) ? L.a(J, d) : d;
  f = y.b(f, "\ufdd0'position", l);
  f = ql(b, mk(f, c));
  var g = f != l;
  if(g) {
    var g = Q(d) ? L.a(J, d) : d, g = y.b(g, "\ufdd0'type", l), i = Q(f) ? L.a(J, f) : f, i = y.b(i, "\ufdd0'type", l), g = G.a(g, i)
  }
  return t(g) ? M(d, sl(b, c, f)) : W([d])
};
function ul(a, b, c) {
  function d(b) {
    b = V.a(function(b) {
      return tl(a, b, c)
    }, b);
    return Dg(Bg(function(a) {
      return 3 <= bd(a)
    }, b))
  }
  var f;
  f = d(W([lk(-1, 0), lk(1, 0)]));
  var g = d(W([lk(0, 1), lk(0, -1)]));
  f = W([f, g]);
  f = Dg(Bg(Of.a(ab, Bd), f));
  return M(f, b)
}
function vl(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'rows", l), c = y.b(c, "\ufdd0'cols", l), f = O.b(b, 0, l), g = O.b(b, 1, l), i = 0 < f;
  return i && (i = 0 < g) ? (d = d >= g) ? c >= f : d : i
}
function wl(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'position", l), c = O.b(b, 0, l), d = O.b(b, 1, l);
  y.b(a, "\ufdd0'height", l);
  b = y.b(a, "\ufdd0'length", l);
  return t(zk(a)) ? V.a(function(a) {
    return lk(c + a, d)
  }, hj.a(0, b)) : ah
}
function xl(a, b) {
  var c = Q(b) ? L.a(J, b) : b, d = y.b(c, "\ufdd0'position", l), f = O.b(d, 0, l), g = O.b(d, 1, l), d = y.b(c, "\ufdd0'height", l), i = y.b(c, "\ufdd0'length", l), c = f - 1, i = f + i, j = g + 1, r = g - d, f = function C(a) {
    return new af(l, m, function() {
      for(var b = a;;) {
        if(z(b)) {
          var c = A(b);
          if(c = z(function(a, b) {
            return function Na(a) {
              return new af(l, m, function() {
                for(;;) {
                  if(z(a)) {
                    var c = A(a);
                    return M(lk(b, c), Na(B(a)))
                  }
                  return l
                }
              }, l)
            }
          }(b, c)(W([r, j])))) {
            return pf.a(c, C(B(b)))
          }
          b = B(b)
        }else {
          return l
        }
      }
    }, l)
  }(hj.a(f, i)), d = function F(a) {
    return new af(l, m, function() {
      for(var b = a;;) {
        if(z(b)) {
          var c = A(b);
          if(c = z(function(a, b) {
            return function Va(a) {
              return new af(l, m, function() {
                for(;;) {
                  if(z(a)) {
                    var c = A(a);
                    return M(lk(b, c), Va(B(a)))
                  }
                  return l
                }
              }, l)
            }
          }(b, c)(hj.b(g, j, 1)))) {
            return pf.a(c, F(B(b)))
          }
          b = B(b)
        }else {
          return l
        }
      }
    }, l)
  }(W([c, i]));
  return Eg(Xi, Bg(Uf.a(vl, a), pf.a(f, d)))
}
function yl(a) {
  var b = Ak(a);
  return t(b) ? b : zk(a)
}
function zl(a) {
  return Bg(yl, (new Xe("\ufdd0'blocks")).call(l, a))
}
function Al(a) {
  if(t(zk(a))) {
    var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'position", l);
    O.b(b, 0, l);
    b = O.b(b, 1, l);
    a = y.b(a, "\ufdd0'height", l);
    return b + a - 1
  }
  return t(Ak(a)) ? (a = Q(a) ? L.a(J, a) : a, a = y.b(a, "\ufdd0'position", l), O.b(a, 0, l), b = O.b(a, 1, l)) : l
}
var Cl = function Bl(b, c) {
  var d = t(Ak(c)) ? function(b) {
    return dh.e(H([(new Xe("\ufdd0'position")).call(l, b)], 0))
  } : t(zk(c)) ? wl : t(Fk(c)) ? function(c) {
    return S.a(pf, V.a(Uf.a(Bl, b), (new Xe("\ufdd0'blocks")).call(l, c)))
  } : t(yk(c)) ? function(c) {
    return M((new Xe("\ufdd0'into-position")).call(l, c), Bl(b, (new Xe("\ufdd0'block")).call(l, c)))
  } : function() {
    return ah
  };
  return Cg($a, V.a(Of.a(Uf.a(ql, b), nk), d.c ? d.c(c) : d.call(l, c)))
}, Dl;
function El(a, b, c) {
  if(c == l) {
    a = m
  }else {
    if(yl(c) === m) {
      a = m
    }else {
      var d;
      d = Al(c);
      d = d == l ? m : G.a(d, b);
      a = t(d) ? m : Kf(Uf.b(Dl, a, b), Cl(a, c))
    }
  }
  return a
}
var Fl = Mj.c(Ah);
function Gl(a) {
  var b = y.b(Hb(Fl), a, l);
  if(t(b)) {
    return b
  }
  b = L.a(El, a);
  Sj.q(Fl, P, a, b);
  return b
}
function Hl(a) {
  var b = l;
  q(a) && (b = H(Array.prototype.slice.call(arguments, 0), 0));
  return Gl.call(this, b)
}
Hl.o = 0;
Hl.h = function(a) {
  a = z(a);
  return Gl(a)
};
Hl.e = Gl;
Dl = Hl;
function Il(a) {
  var b, c = L.a(be, Cg($a, V.a(Al, zl.c ? zl.c(a) : zl.call(l, a))));
  b = Uf.b(Dl, a, c);
  a = zl(a);
  return function f(a) {
    return new af(l, m, function() {
      for(var b = a;;) {
        if(z(b)) {
          var c = A(b), r = O.b(c, 0, l);
          if(O.b(c, 1, l) === k) {
            return M(r, f(B(b)))
          }
          b = B(b)
        }else {
          return l
        }
      }
    }, l)
  }(S.b(function(a, c) {
    return P.b(a, c, b.c ? b.c(c) : b.call(l, c))
  }, Ah, a))
}
;function Jl(a) {
  var b = Q(a) ? L.a(J, a) : a, a = y.b(b, "\ufdd0'grid", l), b = y.b(b, "\ufdd0'max-lines", l), a = V.a(function(a) {
    O.b(a, 0, l);
    return O.b(a, 1, l)
  }, ol(a));
  return bd(function d(a, b) {
    return new af(l, m, function() {
      return function(a, b) {
        for(;;) {
          var f = a, g = O.b(f, 0, l);
          if(f = z(f)) {
            if(Ld(b, g)) {
              g = B(f), f = b, a = g, b = f
            }else {
              return M(g, d(B(f), Yc.a(b, g)))
            }
          }else {
            return l
          }
        }
      }.call(l, a, b)
    }, l)
  }(a, Xi)) > b
}
function Kl(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'grid", l);
  return P.b(a, "\ufdd0'grid", rl(b))
}
function Ll(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'grid", l), d = hl(d, Yi([b]));
  return P.b(c, "\ufdd0'grid", d)
}
function Ml(a) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'grid", l);
  var b = rk(lk(1, 1), 5, 1);
  return Ll(a, b)
}
function Nl(a) {
  a = Q(a) ? L.a(J, a) : a;
  y.b(a, "\ufdd0'dirty", l);
  if(t(Jl(a))) {
    var b = Q(a) ? L.a(J, a) : a;
    y.b(b, "\ufdd0'status", l);
    return P.b(a, "\ufdd0'status", "\ufdd0'game-over")
  }
  var b = Q(a) ? L.a(J, a) : a, c = y.b(b, "\ufdd0'clock", l);
  y.b(b, "\ufdd0'grid", l);
  var b = P.b(b, "\ufdd0'clock", c + 1), b = Q(b) ? L.a(J, b) : b, c = y.b(b, "\ufdd0'grid", l), d = y.b(b, "\ufdd0'dirty", l), c = Q(c) ? L.a(J, c) : c, f = y.b(c, "\ufdd0'blocks", l), f = Bg(function(a) {
    return Ld(a, "\ufdd0'ticks")
  }, f), g = V.a(pk, f), c = jl(c, Eg(Xi, f), g), c = Q(c) ? L.a(J, c) : c, f = y.b(c, "\ufdd0'blocks", l), f = Bg(Gk, f), g = Dg(V.a(function(a) {
    var b = (new Xe("\ufdd0'blocks")).call(l, a), a = O.b(b, 0, l), b = O.b(b, 1, l), c = Q(a) ? L.a(J, a) : a, c = y.b(c, "\ufdd0'position", l), d = Q(b) ? L.a(J, b) : b, d = y.b(d, "\ufdd0'position", l);
    return W([P.b(a, "\ufdd0'position", d), P.b(b, "\ufdd0'position", c)])
  }, f)), c = jl(c, Eg(Xi, f), g), c = Q(c) ? L.a(J, c) : c;
  y.b(c, "\ufdd0'blocks", l);
  f = Eg(Xi, Il.c ? Il.c(c) : Il.call(l, c));
  c = jl(c, f, V.a(uk, f));
  if(t(d)) {
    d = Q(c) ? L.a(J, c) : c;
    f = y.b(d, "\ufdd0'blocks", l);
    f = Bg(Ak, f);
    d = S.b(Uf.a(ul, d), ah, f);
    d = Bg(Of.a(ab, $a), d);
    d = V.a(function(a) {
      return Eg(Xi, a)
    }, d);
    d = Bg(Of.a(ab, Bd), d);
    f = Eg(Xi, d);
    d = Xi;
    b: {
      for(var g = Eg(D, f), f = D, i = g;;) {
        if(Bd(i)) {
          break b
        }
        var j = A(i), g = B(i);
        t(Lf(function(a, b, c) {
          return function(a) {
            var b = bd(c) <= bd(a);
            return b ? Kf(function(b) {
              return Ld(a, b)
            }, c) : b
          }
        }(f, i, j, g), g)) || (f = M(j, f));
        i = g
      }
      f = h
    }
    d = Eg(d, f);
    f = Dg(V.a(Uf.a(Eg, D), d));
    c = Q(c) ? L.a(J, c) : c;
    y.b(c, "\ufdd0'blocks", l);
    var c = Bd(f) ? c : jl(c, Eg(Xi, f), Yi([Ti.e(H([Ch(["\ufdd0'blocks"], {"\ufdd0'blocks":f}), Ch(["\ufdd0'ticks", "\ufdd0'type"], {"\ufdd0'ticks":15, "\ufdd0'type":"\ufdd0'disappear"})], 0))])), c = Q(c) ? L.a(J, c) : c, f = y.b(c, "\ufdd0'blocks", l), c = il(c, Eg(Xi, Bg(function(a) {
      var b = vk(a, "\ufdd0'disappear");
      return t(b) ? ok(a) : b
    }, f))), r = Q(c) ? L.a(J, c) : c, f = y.b(r, "\ufdd0'blocks", l), v = Eg(Xi, S.b(function(a, b) {
      return pf.a(a, V.a(function(a) {
        return(new Xe("\ufdd0'position")).call(l, a)
      }, b))
    }, ah, d)), d = Eg(Xi, Bg(function(a) {
      return Of.a(ab, Bd).call(l, Hk.a(xl(r, a), v))
    }, Bg(zk, f))), f = Eg(Xi, V.a(tk, Bg(zk, d))), c = jl(c, d, f)
  }
  c = Q(c) ? L.a(J, c) : c;
  d = y.b(c, "\ufdd0'blocks", l);
  c = S.b(function(a, b) {
    var c = Yi([b]), d;
    d = Q(b) ? L.a(J, b) : b;
    var f = y.b(d, "\ufdd0'pending-blocks", l);
    d = t(ok(d)) ? Eg(Xi, f) : Yi([d]);
    return jl(a, c, d)
  }, c, Bg(ok, Bg(xk, d)));
  c = Q(c) ? L.a(J, c) : c;
  d = y.b(c, "\ufdd0'blocks", l);
  d = Eg(Xi, Bg(Bk, d));
  c = jl(c, Eg(Xi, d), V.a(Ck, d));
  c = Q(c) ? L.a(J, c) : c;
  d = y.b(c, "\ufdd0'blocks", l);
  d = Eg(Xi, Bg(Dk, d));
  c = jl(c, Eg(Xi, d), V.a(Ek, d));
  b = P.b(b, "\ufdd0'grid", c);
  b = Q(b) ? L.a(J, b) : b;
  c = y.b(b, "\ufdd0'add-line-ticks", l);
  d = Q(b) ? L.a(J, b) : b;
  d = y.b(d, "\ufdd0'clock", l);
  c = G.a(0, (d % c + c) % c);
  b = t(c) ? Kl(b) : b;
  b = Q(b) ? L.a(J, b) : b;
  c = y.b(b, "\ufdd0'grid", l);
  d = y.b(b, "\ufdd0'clock", l);
  G.a(0, (d % 201 + 201) % 201) && (d = Q(c) ? L.a(J, c) : c, c = y.b(d, "\ufdd0'cols", l), d = y.b(d, "\ufdd0'rows", l), f = 3 + ne(c - 3), c = 1 + ne(c - f - -1), c = rk(lk(c, d - 11), f, 1 + ne(2)), b = Ll(b, c));
  b = Q(b) ? L.a(J, b) : b;
  c = y.b(b, "\ufdd0'grid", l);
  d = y.b(b, "\ufdd0'clock", l);
  b = P.b(b, "\ufdd0'grid", P.b(c, "\ufdd0'cache-clock", d));
  a = Q(a) ? L.a(J, a) : a;
  a = y.b(a, "\ufdd0'grid", l);
  b = Q(b) ? L.a(J, b) : b;
  c = y.b(b, "\ufdd0'grid", l);
  return P.b(b, "\ufdd0'dirty", ab(G.a(a, c)))
}
;da("attack.hello.greet", function(a) {
  return[U("Hello "), U(a)].join("")
});
function Ol() {
  this.ia = m
}
Ol.prototype.hd = function() {
  this.ia || (this.ia = k, this.M())
};
Ol.prototype.M = function() {
  this.lf && Pl.apply(l, this.lf);
  if(this.Ee) {
    for(;this.Ee.length;) {
      this.Ee.shift()()
    }
  }
};
function Ql(a) {
  a && "function" == typeof a.hd && a.hd()
}
function Pl(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ja(d) ? Pl.apply(l, d) : Ql(d)
  }
}
;var Rl, Sl, Tl, Ul;
function Vl() {
  return ca.navigator ? ca.navigator.userAgent : l
}
Ul = Tl = Sl = Rl = m;
var Wl;
if(Wl = Vl()) {
  var Xl = ca.navigator;
  Rl = 0 == Wl.indexOf("Opera");
  Sl = !Rl && -1 != Wl.indexOf("MSIE");
  Tl = !Rl && -1 != Wl.indexOf("WebKit");
  Ul = !Rl && !Tl && "Gecko" == Xl.product
}
var Yl = Rl, Zl = Sl, $l = Ul, am = Tl, bm = ca.navigator, cm = -1 != (bm && bm.platform || "").indexOf("Mac"), dm;
a: {
  var em = "", fm;
  if(Yl && ca.opera) {
    var gm = ca.opera.version, em = "function" == typeof gm ? gm() : gm
  }else {
    if($l ? fm = /rv\:([^\);]+)(\)|;)/ : Zl ? fm = /MSIE\s+([^\);]+)(\)|;)/ : am && (fm = /WebKit\/(\S+)/), fm) {
      var hm = fm.exec(Vl()), em = hm ? hm[1] : ""
    }
  }
  if(Zl) {
    var im, jm = ca.document;
    im = jm ? jm.documentMode : h;
    if(im > parseFloat(em)) {
      dm = String(im);
      break a
    }
  }
  dm = em
}
var km = {};
function lm(a) {
  var b;
  if(!(b = km[a])) {
    b = 0;
    for(var c = String(dm).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", r = RegExp("(\\d*)(\\D*)", "g"), v = RegExp("(\\d*)(\\D*)", "g");
      do {
        var C = r.exec(i) || ["", "", ""], F = v.exec(j) || ["", "", ""];
        if(0 == C[0].length && 0 == F[0].length) {
          break
        }
        b = ((0 == C[1].length ? 0 : parseInt(C[1], 10)) < (0 == F[1].length ? 0 : parseInt(F[1], 10)) ? -1 : (0 == C[1].length ? 0 : parseInt(C[1], 10)) > (0 == F[1].length ? 0 : parseInt(F[1], 10)) ? 1 : 0) || ((0 == C[2].length) < (0 == F[2].length) ? -1 : (0 == C[2].length) > (0 == F[2].length) ? 1 : 0) || (C[2] < F[2] ? -1 : C[2] > F[2] ? 1 : 0)
      }while(0 == b)
    }
    b = km[a] = 0 <= b
  }
  return b
}
var mm = {};
function nm() {
  return mm[9] || (mm[9] = Zl && !!document.documentMode && 9 <= document.documentMode)
}
;!Zl || nm();
var om = !Zl || nm(), pm = Zl && !lm("8");
!am || lm("528");
$l && lm("1.9b") || Zl && lm("8") || Yl && lm("9.5") || am && lm("528");
$l && !lm("8") || Zl && lm("9");
function qm(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
p = qm.prototype;
p.M = function() {
};
p.hd = function() {
};
p.Bb = m;
p.defaultPrevented = m;
p.zc = k;
p.preventDefault = function() {
  this.defaultPrevented = k;
  this.zc = m
};
function rm(a) {
  rm[" "](a);
  return a
}
rm[" "] = ga;
function sm(a, b) {
  try {
    return rm(a[b]), k
  }catch(c) {
  }
  return m
}
;function tm(a, b) {
  a && this.qc(a, b)
}
va(tm, qm);
p = tm.prototype;
p.target = l;
p.relatedTarget = l;
p.offsetX = 0;
p.offsetY = 0;
p.clientX = 0;
p.clientY = 0;
p.screenX = 0;
p.screenY = 0;
p.button = 0;
p.keyCode = 0;
p.charCode = 0;
p.ctrlKey = m;
p.altKey = m;
p.shiftKey = m;
p.metaKey = m;
p.uf = m;
p.oc = l;
p.qc = function(a, b) {
  var c = this.type = a.type;
  qm.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? $l && (sm(d, "nodeName") || (d = l)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = am || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = am || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.uf = cm ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.oc = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Bb
};
p.preventDefault = function() {
  tm.oa.preventDefault.call(this);
  var a = this.oc;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, pm) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
p.M = function() {
};
function um() {
}
var vm = 0;
p = um.prototype;
p.key = 0;
p.Cb = m;
p.Mc = m;
p.qc = function(a, b, c, d, f, g) {
  la(a) ? this.we = k : a && a.handleEvent && la(a.handleEvent) ? this.we = m : e(Error("Invalid listener argument"));
  this.Tb = a;
  this.He = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.kd = g;
  this.Mc = m;
  this.key = ++vm;
  this.Cb = m
};
p.handleEvent = function(a) {
  return this.we ? this.Tb.call(this.kd || this.src, a) : this.Tb.handleEvent.call(this.Tb, a)
};
var wm = {}, xm = {}, ym = {}, zm = {};
function Am(a, b, c, d, f) {
  if(b) {
    if(ia(b)) {
      for(var g = 0;g < b.length;g++) {
        Am(a, b[g], c, d, f)
      }
      return l
    }
    var d = !!d, i = xm;
    b in i || (i[b] = {C:0, na:0});
    i = i[b];
    d in i || (i[d] = {C:0, na:0}, i.C++);
    var i = i[d], j = na(a), r;
    i.na++;
    if(i[j]) {
      r = i[j];
      for(g = 0;g < r.length;g++) {
        if(i = r[g], i.Tb == c && i.kd == f) {
          if(i.Cb) {
            break
          }
          return r[g].key
        }
      }
    }else {
      r = i[j] = [], i.C++
    }
    var v = Bm, C = om ? function(a) {
      return v.call(C.src, C.key, a)
    } : function(a) {
      a = v.call(C.src, C.key, a);
      if(!a) {
        return a
      }
    }, g = C;
    g.src = a;
    i = new um;
    i.qc(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    r.push(i);
    wm[c] = i;
    ym[j] || (ym[j] = []);
    ym[j].push(i);
    a.addEventListener ? (a == ca || !a.ke) && a.addEventListener(b, g, d) : a.attachEvent(b in zm ? zm[b] : zm[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function Cm(a, b, c, d, f) {
  if(ia(b)) {
    for(var g = 0;g < b.length;g++) {
      Cm(a, b[g], c, d, f)
    }
    return l
  }
  a = Am(a, b, c, d, f);
  wm[a].Mc = k;
  return a
}
function Dm(a, b, c, d, f) {
  if(ia(b)) {
    for(var g = 0;g < b.length;g++) {
      Dm(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = xm;
      if(b in g && (g = g[b], d in g && (g = g[d], a = na(a), g[a]))) {
        a = g[a];
        break a
      }
      a = l
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Tb == c && a[g].capture == d && a[g].kd == f) {
          Em(a[g].key);
          break
        }
      }
    }
  }
}
function Em(a) {
  if(!wm[a]) {
    return m
  }
  var b = wm[a];
  if(b.Cb) {
    return m
  }
  var c = b.src, d = b.type, f = b.He, g = b.capture;
  c.removeEventListener ? (c == ca || !c.ke) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in zm ? zm[d] : zm[d] = "on" + d, f);
  c = na(c);
  ym[c] && (f = ym[c], Oa(f, b), 0 == f.length && delete ym[c]);
  b.Cb = k;
  if(b = xm[d][g][c]) {
    b.Be = k, Fm(d, g, c, b)
  }
  delete wm[a];
  return k
}
function Fm(a, b, c, d) {
  if(!d.rc && d.Be) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].Cb ? d[f].He.src = l : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.Be = m;
    0 == g && (delete xm[a][b][c], xm[a][b].C--, 0 == xm[a][b].C && (delete xm[a][b], xm[a].C--), 0 == xm[a].C && delete xm[a])
  }
}
function Gm(a, b, c, d, f) {
  var g = 1, b = na(b);
  if(a[b]) {
    a.na--;
    a = a[b];
    a.rc ? a.rc++ : a.rc = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var r = a[j];
        r && !r.Cb && (g &= Hm(r, f) !== m)
      }
    }finally {
      a.rc--, Fm(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Hm(a, b) {
  a.Mc && Em(a.key);
  return a.handleEvent(b)
}
function Bm(a, b) {
  if(!wm[a]) {
    return k
  }
  var c = wm[a], d = c.type, f = xm;
  if(!(d in f)) {
    return k
  }
  var f = f[d], g, i;
  if(!om) {
    g = b || ea("window.event");
    var j = k in f, r = m in f;
    if(j) {
      if(0 > g.keyCode || g.returnValue != h) {
        return k
      }
      a: {
        var v = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(C) {
            v = k
          }
        }
        if(v || g.returnValue == h) {
          g.returnValue = k
        }
      }
    }
    v = new tm;
    v.qc(g, this);
    g = k;
    try {
      if(j) {
        for(var F = [], T = v.currentTarget;T;T = T.parentNode) {
          F.push(T)
        }
        i = f[k];
        i.na = i.C;
        for(var R = F.length - 1;!v.Bb && 0 <= R && i.na;R--) {
          v.currentTarget = F[R], g &= Gm(i, F[R], d, k, v)
        }
        if(r) {
          i = f[m];
          i.na = i.C;
          for(R = 0;!v.Bb && R < F.length && i.na;R++) {
            v.currentTarget = F[R], g &= Gm(i, F[R], d, m, v)
          }
        }
      }else {
        g = Hm(c, v)
      }
    }finally {
      F && (F.length = 0)
    }
    return g
  }
  d = new tm(b, this);
  return g = Hm(c, d)
}
;function Im() {
  this.ia = m
}
va(Im, Ol);
p = Im.prototype;
p.ke = k;
p.rd = l;
p.addEventListener = function(a, b, c, d) {
  Am(this, a, b, c, d)
};
p.removeEventListener = function(a, b, c, d) {
  Dm(this, a, b, c, d)
};
p.dispatchEvent = function(a) {
  var b = a.type || a, c = xm;
  if(b in c) {
    if(ka(a)) {
      a = new qm(a, this)
    }else {
      if(a instanceof qm) {
        a.target = a.target || this
      }else {
        var d = a, a = new qm(b, this);
        Wa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = k in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.rd) {
        f.push(g)
      }
      g = c[k];
      g.na = g.C;
      for(var i = f.length - 1;!a.Bb && 0 <= i && g.na;i--) {
        a.currentTarget = f[i], d &= Gm(g, f[i], a.type, k, a) && a.zc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.na = g.C, b) {
        for(i = 0;!a.Bb && i < f.length && g.na;i++) {
          a.currentTarget = f[i], d &= Gm(g, f[i], a.type, m, a) && a.zc != m
        }
      }else {
        for(f = this;!a.Bb && f && g.na;f = f.rd) {
          a.currentTarget = f, d &= Gm(g, f, a.type, m, a) && a.zc != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = k
  }
  return a
};
p.M = function() {
  Im.oa.M.call(this);
  var a, b = 0, c = a == l;
  a = !!a;
  if(this == l) {
    Ra(ym, function(d) {
      for(var f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          Em(g.key), b++
        }
      }
    })
  }else {
    var d = na(this);
    if(ym[d]) {
      for(var d = ym[d], f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          Em(g.key), b++
        }
      }
    }
  }
  this.rd = l
};
function Jm(a, b) {
  this.ia = m;
  this.yb = a || 1;
  this.$b = b || Km;
  this.Kc = sa(this.Df, this);
  this.md = ua()
}
va(Jm, Im);
Jm.prototype.enabled = m;
var Km = ca.window;
p = Jm.prototype;
p.Na = l;
p.Df = function() {
  if(this.enabled) {
    var a = ua() - this.md;
    0 < a && a < 0.8 * this.yb ? this.Na = this.$b.setTimeout(this.Kc, this.yb - a) : (this.dispatchEvent(Lm), this.enabled && (this.Na = this.$b.setTimeout(this.Kc, this.yb), this.md = ua()))
  }
};
p.start = function() {
  this.enabled = k;
  this.Na || (this.Na = this.$b.setTimeout(this.Kc, this.yb), this.md = ua())
};
p.stop = function() {
  this.enabled = m;
  this.Na && (this.$b.clearTimeout(this.Na), this.Na = l)
};
p.M = function() {
  Jm.oa.M.call(this);
  this.stop();
  delete this.$b
};
var Lm = "tick";
function Mm(a, b) {
  la(a) || (a && "function" == typeof a.handleEvent ? a = sa(a.handleEvent, a) : e(Error("Invalid listener argument")));
  return 2147483647 < b ? -1 : Km.setTimeout(a, b || 0)
}
;function Nm(a) {
  if("function" == typeof a.Ga) {
    return a.Ga()
  }
  if(ka(a)) {
    return a.split("")
  }
  if(ja(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Sa(a)
}
;function Om(a, b) {
  this.Ia = {};
  this.U = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof Om ? (c = a.vb(), d = a.Ga()) : (c = Ta(a), d = Sa(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
p = Om.prototype;
p.C = 0;
p.Pe = 0;
p.Ga = function() {
  Pm(this);
  for(var a = [], b = 0;b < this.U.length;b++) {
    a.push(this.Ia[this.U[b]])
  }
  return a
};
p.vb = function() {
  Pm(this);
  return this.U.concat()
};
p.Kb = function(a) {
  return Qm(this.Ia, a)
};
p.remove = function(a) {
  return Qm(this.Ia, a) ? (delete this.Ia[a], this.C--, this.Pe++, this.U.length > 2 * this.C && Pm(this), k) : m
};
function Pm(a) {
  if(a.C != a.U.length) {
    for(var b = 0, c = 0;b < a.U.length;) {
      var d = a.U[b];
      Qm(a.Ia, d) && (a.U[c++] = d);
      b++
    }
    a.U.length = c
  }
  if(a.C != a.U.length) {
    for(var f = {}, c = b = 0;b < a.U.length;) {
      d = a.U[b], Qm(f, d) || (a.U[c++] = d, f[d] = 1), b++
    }
    a.U.length = c
  }
}
p.get = function(a, b) {
  return Qm(this.Ia, a) ? this.Ia[a] : b
};
p.set = function(a, b) {
  Qm(this.Ia, a) || (this.C++, this.U.push(a), this.Pe++);
  this.Ia[a] = b
};
p.mc = function() {
  return new Om(this)
};
function Qm(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Rm(a) {
  return Sm(a || arguments.callee.caller, [])
}
function Sm(a, b) {
  var c = [];
  if(0 <= Ja(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Tm(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Tm(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Sm(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Tm(a) {
  if(Um[a]) {
    return Um[a]
  }
  a = String(a);
  if(!Um[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Um[a] = b ? b[1] : "[Anonymous]"
  }
  return Um[a]
}
var Um = {};
function Vm(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Vm.prototype.Af = 0;
Vm.prototype.pe = l;
Vm.prototype.oe = l;
var Wm = 0;
Vm.prototype.reset = function(a, b, c, d, f) {
  this.Af = "number" == typeof f ? f : Wm++;
  this.dg = d || ua();
  this.Sb = a;
  this.sf = b;
  this.ag = c;
  delete this.pe;
  delete this.oe
};
Vm.prototype.Oe = function(a) {
  this.Sb = a
};
function Xm(a) {
  this.Ae = a
}
Xm.prototype.va = l;
Xm.prototype.Sb = l;
Xm.prototype.Nc = l;
Xm.prototype.te = l;
function Ym(a, b) {
  this.name = a;
  this.value = b
}
Ym.prototype.toString = n("name");
var Zm = new Ym("SEVERE", 1E3), $m = new Ym("WARNING", 900), an = new Ym("INFO", 800), bn = new Ym("CONFIG", 700), cn = new Ym("FINE", 500), dn = new Ym("FINEST", 300);
p = Xm.prototype;
p.getName = n("Ae");
p.getParent = n("va");
p.se = function() {
  this.Nc || (this.Nc = {});
  return this.Nc
};
p.Oe = function(a) {
  this.Sb = a
};
function en(a) {
  if(a.Sb) {
    return a.Sb
  }
  if(a.va) {
    return en(a.va)
  }
  Ha("Root logger has no level set.");
  return l
}
p.log = function(a, b, c) {
  if(a.value >= en(this).value) {
    a = this.of(a, b, c);
    b = "log:" + a.sf;
    ca.console && (ca.console.timeStamp ? ca.console.timeStamp(b) : ca.console.markTimeline && ca.console.markTimeline(b));
    ca.msWriteProfilerMark && ca.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.te) {
        for(var f = 0, g = h;g = c.te[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
p.of = function(a, b, c) {
  var d = new Vm(a, String(b), this.Ae);
  if(c) {
    d.pe = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var j = ea("window.location.href");
      if(ka(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var r, v, C = m;
        try {
          r = c.lineNumber || c.$f || "Not available"
        }catch(F) {
          r = "Not available", C = k
        }
        try {
          v = c.fileName || c.filename || c.sourceURL || j
        }catch(T) {
          v = "Not available", C = k
        }
        i = C || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:r, fileName:v, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + ya(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + ya(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(Rm(g) + "-> ")
    }catch(R) {
      f = "Exception trying to expose exception! You win, we lose. " + R
    }
    d.oe = f
  }
  return d
};
p.info = function(a, b) {
  this.log(an, a, b)
};
function fn(a) {
  Z.log(cn, a, h)
}
function gn(a) {
  Z.log(dn, a, h)
}
var hn = {}, jn = l;
function kn(a) {
  jn || (jn = new Xm(""), hn[""] = jn, jn.Oe(bn));
  var b;
  if(!(b = hn[a])) {
    b = new Xm(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = kn(a.substr(0, c));
    c.se()[d] = b;
    b.va = c;
    hn[a] = b
  }
  return b
}
;function ln(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function mn(a) {
  var b = [];
  nn(new on, a, b);
  return b.join("")
}
function on() {
  this.yc = h
}
function nn(a, b, c) {
  switch(typeof b) {
    case "string":
      pn(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == l) {
        c.push("null");
        break
      }
      if(ia(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], nn(a, a.yc ? a.yc.call(b, String(g), f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), pn(g, c), c.push(":"), nn(a, a.yc ? a.yc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var qn = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, rn = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function pn(a, b) {
  b.push('"', a.replace(rn, function(a) {
    if(a in qn) {
      return qn[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return qn[a] = f + b.toString(16)
  }), '"')
}
;var sn = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function tn(a) {
  var b = a.match(sn), a = b[1], c = b[2], d = b[3], b = b[4], f = [];
  a && f.push(a, ":");
  d && (f.push("//"), c && f.push(c, "@"), f.push(d), b && f.push(":", b));
  return f.join("")
}
;kn("goog.net.XhrIo");
var un = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"}, $ = {Dd:"cn", Qe:"at", Se:"rat", dc:"pu", Oa:"ifrid", Gb:"tp", Fc:"lru", cc:"pru", $a:"lpu", ab:"ppu", Hc:"ph", Gc:"osh", Ic:"role", Re:"nativeProtocolVersion"}, vn = [$.dc, $.Fc, $.cc, $.$a, $.ab], wn = {};
function xn(a) {
  for(var b = yn, c = b.length, d = "";0 < a--;) {
    d += b.charAt(Math.floor(Math.random() * c))
  }
  return d
}
var yn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Z = kn("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function zn(a, b) {
  this.hc = [];
  this.Od = a;
  this.le = b || l
}
p = zn.prototype;
p.ra = m;
p.Nb = m;
p.Vb = 0;
p.zd = m;
p.We = m;
p.gc = 0;
p.cancel = function(a) {
  if(this.ra) {
    this.Yb instanceof zn && this.Yb.cancel()
  }else {
    if(this.va) {
      var b = this.va;
      delete this.va;
      a ? b.cancel(a) : (b.gc--, 0 >= b.gc && b.cancel())
    }
    this.Od ? this.Od.call(this.le, this) : this.zd = k;
    this.ra || this.ne(new An(this))
  }
};
p.ie = function(a, b) {
  Bn(this, a, b);
  this.Vb--;
  0 == this.Vb && this.ra && Cn(this)
};
function Bn(a, b, c) {
  a.ra = k;
  a.Yb = c;
  a.Nb = !b;
  Cn(a)
}
function Dn(a) {
  a.ra && (a.zd || e(new En(a)), a.zd = m)
}
p.xa = function(a) {
  Dn(this);
  Bn(this, k, a)
};
p.ne = function(a) {
  Dn(this);
  Bn(this, m, a)
};
function Fn(a, b, c, d) {
  a.hc.push([b, c, d]);
  a.ra && Cn(a)
}
function Gn(a, b) {
  var c = sa(b.Te, b);
  Fn(a, c, l, h)
}
p.Te = function(a) {
  var b = new zn;
  Fn(this, b.xa, b.ne, b);
  a && (b.va = this, this.gc++);
  return b
};
function Hn(a) {
  return Ma(a.hc, function(a) {
    return la(a[1])
  })
}
function Cn(a) {
  a.Cd && (a.ra && Hn(a)) && (ca.clearTimeout(a.Cd), delete a.Cd);
  a.va && (a.va.gc--, delete a.va);
  for(var b = a.Yb, c = m, d = m;a.hc.length && 0 == a.Vb;) {
    var f = a.hc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Nb ? i : g) {
      try {
        var j = g.call(f || a.le, b);
        q(j) && (a.Nb = a.Nb && (j == b || j instanceof Error), a.Yb = b = j);
        b instanceof zn && (d = k, a.Vb++)
      }catch(r) {
        b = r, a.Nb = k, Hn(a) || (c = k)
      }
    }
  }
  a.Yb = b;
  d && a.Vb && (Fn(b, sa(a.ie, a, k), sa(a.ie, a, m)), b.We = k);
  c && (a.Cd = ca.setTimeout(function() {
    e(new In(b))
  }, 0))
}
function En(a) {
  wa.call(this);
  this.hf = a
}
va(En, wa);
En.prototype.message = "Already called";
function An(a) {
  wa.call(this);
  this.hf = a
}
va(An, wa);
An.prototype.message = "Deferred was cancelled";
function In(a) {
  wa.call(this);
  this.Of = a;
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
va(In, wa);
function Jn(a, b) {
  var c;
  if(a instanceof Jn) {
    this.la = q(b) ? b : a.la, Kn(this, a.Db), c = a.Dc, Ln(this), this.Dc = c, c = a.Mb, Ln(this), this.Mb = c, Mn(this, a.xc), c = a.uc, Ln(this), this.uc = c, Nn(this, a.La.mc()), c = a.pc, Ln(this), this.pc = c
  }else {
    if(a && (c = String(a).match(sn))) {
      this.la = !!b;
      Kn(this, c[1] || "", k);
      var d = c[2] || "";
      Ln(this);
      this.Dc = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      Ln(this);
      this.Mb = d ? decodeURIComponent(d) : "";
      Mn(this, c[4]);
      d = c[5] || "";
      Ln(this);
      this.uc = d ? decodeURIComponent(d) : "";
      Nn(this, c[6] || "", k);
      c = c[7] || "";
      Ln(this);
      this.pc = c ? decodeURIComponent(c) : ""
    }else {
      this.la = !!b, this.La = new On(l, 0, this.la)
    }
  }
}
p = Jn.prototype;
p.Db = "";
p.Dc = "";
p.Mb = "";
p.xc = l;
p.uc = "";
p.pc = "";
p.rf = m;
p.la = m;
p.toString = function() {
  var a = [], b = this.Db;
  b && a.push(Pn(b, Qn), ":");
  if(b = this.Mb) {
    a.push("//");
    var c = this.Dc;
    c && a.push(Pn(c, Qn), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.xc;
    b != l && a.push(":", String(b))
  }
  if(b = this.uc) {
    this.Mb && "/" != b.charAt(0) && a.push("/"), a.push(Pn(b, "/" == b.charAt(0) ? Rn : Sn))
  }
  (b = this.La.toString()) && a.push("?", b);
  (b = this.pc) && a.push("#", Pn(b, Tn));
  return a.join("")
};
p.mc = function() {
  return new Jn(this)
};
function Kn(a, b, c) {
  Ln(a);
  a.Db = c ? b ? decodeURIComponent(b) : "" : b;
  a.Db && (a.Db = a.Db.replace(/:$/, ""))
}
function Mn(a, b) {
  Ln(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.xc = b) : a.xc = l
}
function Nn(a, b, c) {
  Ln(a);
  b instanceof On ? (a.La = b, a.La.yd(a.la)) : (c || (b = Pn(b, Un)), a.La = new On(b, 0, a.la))
}
function Ln(a) {
  a.rf && e(Error("Tried to modify a read-only Uri"))
}
p.yd = function(a) {
  this.la = a;
  this.La && this.La.yd(a);
  return this
};
function Pn(a, b) {
  return ka(a) ? encodeURI(a).replace(b, Vn) : l
}
function Vn(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Qn = /[#\/\?@]/g, Sn = /[\#\?:]/g, Rn = /[\#\?]/g, Un = /[\#\?@]/g, Tn = /#/g;
function On(a, b, c) {
  this.ja = a || l;
  this.la = !!c
}
function Wn(a) {
  if(!a.V && (a.V = new Om, a.C = 0, a.ja)) {
    for(var b = a.ja.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = l, g = l;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Xn(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
p = On.prototype;
p.V = l;
p.C = l;
p.add = function(a, b) {
  Wn(this);
  this.ja = l;
  var a = Xn(this, a), c = this.V.get(a);
  c || this.V.set(a, c = []);
  c.push(b);
  this.C++;
  return this
};
p.remove = function(a) {
  Wn(this);
  a = Xn(this, a);
  return this.V.Kb(a) ? (this.ja = l, this.C -= this.V.get(a).length, this.V.remove(a)) : m
};
p.Kb = function(a) {
  Wn(this);
  a = Xn(this, a);
  return this.V.Kb(a)
};
p.vb = function() {
  Wn(this);
  for(var a = this.V.Ga(), b = this.V.vb(), c = [], d = 0;d < b.length;d++) {
    for(var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
p.Ga = function(a) {
  Wn(this);
  var b = [];
  if(a) {
    this.Kb(a) && (b = Pa(b, this.V.get(Xn(this, a))))
  }else {
    for(var a = this.V.Ga(), c = 0;c < a.length;c++) {
      b = Pa(b, a[c])
    }
  }
  return b
};
p.set = function(a, b) {
  Wn(this);
  this.ja = l;
  a = Xn(this, a);
  this.Kb(a) && (this.C -= this.V.get(a).length);
  this.V.set(a, [b]);
  this.C++;
  return this
};
p.get = function(a, b) {
  var c = a ? this.Ga(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
p.toString = function() {
  if(this.ja) {
    return this.ja
  }
  if(!this.V) {
    return""
  }
  for(var a = [], b = this.V.vb(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent(String(d)), d = this.Ga(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent(String(d[g])));
      a.push(i)
    }
  }
  return this.ja = a.join("&")
};
p.mc = function() {
  var a = new On;
  a.ja = this.ja;
  this.V && (a.V = this.V.mc());
  return a
};
function Xn(a, b) {
  var c = String(b);
  a.la && (c = c.toLowerCase());
  return c
}
p.yd = function(a) {
  if(a && !this.la) {
    Wn(this);
    this.ja = l;
    var b = this.V, c = function(a, b) {
      var c = b.toLowerCase();
      b != c && (this.remove(b), this.remove(c), 0 < a.length && (this.ja = l, this.V.set(Xn(this, c), Qa(a)), this.C += a.length))
    };
    if("function" == typeof b.forEach) {
      b.forEach(c, this)
    }else {
      if(ja(b) || ka(b)) {
        Ka(b, c, this)
      }else {
        var d;
        if("function" == typeof b.vb) {
          d = b.vb()
        }else {
          if("function" != typeof b.Ga) {
            if(ja(b) || ka(b)) {
              d = [];
              for(var f = b.length, g = 0;g < f;g++) {
                d.push(g)
              }
            }else {
              d = Ta(b)
            }
          }else {
            d = h
          }
        }
        b = Nm(b);
        f = b.length;
        for(g = 0;g < f;g++) {
          c.call(this, b[g], d && d[g])
        }
      }
    }
  }
  this.la = a
};
function Yn(a, b, c) {
  this.ia = m;
  this.nd = a;
  this.yb = b || 0;
  this.Ob = c;
  this.Ue = sa(this.mf, this)
}
va(Yn, Ol);
p = Yn.prototype;
p.Pb = 0;
p.M = function() {
  Yn.oa.M.call(this);
  this.stop();
  delete this.nd;
  delete this.Ob
};
p.start = function(a) {
  this.stop();
  this.Pb = Mm(this.Ue, q(a) ? a : this.yb)
};
p.stop = function() {
  this.ve() && Km.clearTimeout(this.Pb);
  this.Pb = 0
};
p.ve = function() {
  return 0 != this.Pb
};
p.mf = function() {
  this.Pb = 0;
  this.nd && this.nd.call(this.Ob)
};
function Zn() {
  var a = W([3, 6]), b = O.b(a, 0, l), a = O.b(a, 1, l), a = Ch(["\ufdd0'blocks", "\ufdd0'rows", "\ufdd0'cols", "\ufdd0'blocks-hash"], {"\ufdd0'blocks":ah, "\ufdd0'rows":0, "\ufdd0'cols":a, "\ufdd0'blocks-hash":Ah}), c = kg.a(13, rl), a = S.b(function(a, b) {
    return b.c ? b.c(a) : b.call(l, a)
  }, a, c), a = il(a, Eg(Xi, (new Xe("\ufdd0'blocks")).call(l, a))), b = S.b(function(a, b) {
    return b.c ? b.c(a) : b.call(l, a)
  }, a, kg.a(b, rl));
  return Ch(["\ufdd0'game", "\ufdd0'cursor"], {"\ufdd0'game":Ch("\ufdd0'grid \ufdd0'status \ufdd0'max-lines \ufdd0'clock \ufdd0'dirty \ufdd0'add-line-ticks".split(" "), {"\ufdd0'grid":b, "\ufdd0'status":"\ufdd0'active", "\ufdd0'max-lines":13, "\ufdd0'clock":0, "\ufdd0'dirty":m, "\ufdd0'add-line-ticks":120}), "\ufdd0'cursor":Ch(["\ufdd0'origin"], {"\ufdd0'origin":lk(2, 15)})})
}
;var $n;
!Zl || nm();
var ao = !$l && !Zl || Zl && nm() || $l && lm("1.9.1");
Zl && lm("9");
function bo(a) {
  return a ? new co(9 == a.nodeType ? a : a.ownerDocument || a.document) : $n || ($n = new co)
}
function eo(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function co(a) {
  this.Lb = a || ca.document || document
}
p = co.prototype;
p.createElement = function(a) {
  return this.Lb.createElement(a)
};
p.createTextNode = function(a) {
  return this.Lb.createTextNode(a)
};
p.D = function() {
  return this.Lb.parentWindow || this.Lb.defaultView
};
p.appendChild = function(a, b) {
  a.appendChild(b)
};
p.append = function(a, b) {
  function c(a) {
    a && f.appendChild(ka(a) ? d.createTextNode(a) : a)
  }
  for(var d = 9 == a.nodeType ? a : a.ownerDocument || a.document, f = a, g = arguments, i = 1;i < g.length;i++) {
    var j = g[i];
    if(ja(j) && !(ma(j) && 0 < j.nodeType)) {
      var r = Ka, v;
      a: {
        if((v = j) && "number" == typeof v.length) {
          if(ma(v)) {
            v = "function" == typeof v.item || "string" == typeof v.item;
            break a
          }
          if(la(v)) {
            v = "function" == typeof v.item;
            break a
          }
        }
        v = m
      }
      r(v ? Qa(j) : j, c)
    }else {
      c(j)
    }
  }
};
p.se = function(a) {
  return ao && a.children != h ? a.children : La(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function fo(a) {
  this.ia = m;
  this.Ob = a;
  this.U = []
}
va(fo, Ol);
var go = [];
function ho(a, b, c, d, f, g) {
  if(ia(c)) {
    for(var i = 0;i < c.length;i++) {
      ho(a, b, c[i], d, f, g)
    }
  }else {
    b = Cm(b, c, d || a, f, g || a.Ob || a), a.U.push(b)
  }
}
fo.prototype.M = function() {
  fo.oa.M.call(this);
  Ka(this.U, Em);
  this.U.length = 0
};
fo.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function io() {
  this.ia = m;
  this.xd = {}
}
va(io, Ol);
io.prototype.sc = kn("goog.messaging.AbstractChannel");
io.prototype.ya = function(a) {
  a && a()
};
io.prototype.za = ba(k);
io.prototype.M = function() {
  io.oa.M.call(this);
  Ql(this.sc);
  delete this.sc;
  delete this.xd;
  delete this.me
};
function jo(a) {
  this.ia = m;
  this.Fa = a || bo()
}
va(jo, Ol);
jo.prototype.Eb = 0;
jo.prototype.D = function() {
  return this.Fa.D()
};
jo.prototype.getName = function() {
  return un[this.Eb] || ""
};
function ko(a, b) {
  jo.call(this, b);
  this.r = a;
  this.Wb = [];
  this.jf = sa(this.kf, this)
}
va(ko, jo);
p = ko.prototype;
p.Eb = 2;
p.vd = m;
p.Na = 0;
p.ya = function() {
  0 == lo(this.r) ? (this.Ha = this.r.xb, this.Ha.XPC_toOuter = sa(this.ue, this)) : this.Kd()
};
p.Kd = function() {
  var a = k;
  try {
    this.Ha || (this.Ha = this.D().frameElement), this.Ha && this.Ha.XPC_toOuter && (this.qd = this.Ha.XPC_toOuter, this.Ha.XPC_toOuter.XPC_toInner = sa(this.ue, this), a = m, this.send("tp", "SETUP_ACK"), this.r.Ja())
  }catch(b) {
    Z.log(Zm, "exception caught while attempting setup: " + b, h)
  }
  a && (this.Jd || (this.Jd = sa(this.Kd, this)), this.D().setTimeout(this.Jd, 100))
};
p.Bd = function(a) {
  0 == lo(this.r) && !this.r.za() && "SETUP_ACK" == a ? (this.qd = this.Ha.XPC_toOuter.XPC_toInner, this.r.Ja()) : e(Error("Got unexpected transport message."))
};
p.ue = function(a, b) {
  !this.vd && 0 == this.Wb.length ? this.r.Da(a, b) : (this.Wb.push({Cf:a, td:b}), 1 == this.Wb.length && (this.Na = this.D().setTimeout(this.jf, 1)))
};
p.kf = function() {
  for(;this.Wb.length;) {
    var a = this.Wb.shift();
    this.r.Da(a.Cf, a.td)
  }
};
p.send = function(a, b) {
  this.vd = k;
  this.qd(a, b);
  this.vd = m
};
p.M = function() {
  ko.oa.M.call(this);
  this.Ha = this.qd = l
};
function mo(a, b) {
  jo.call(this, b);
  this.r = a;
  this.Zb = this.r.w[$.ab];
  this.yf = this.r.w[$.$a];
  this.Ac = []
}
var no, oo;
va(mo, jo);
p = mo.prototype;
p.vf = 5;
p.Eb = 4;
p.Cc = 0;
p.Fb = m;
p.gb = m;
p.Le = l;
function po(a) {
  return"googlexpc_" + a.r.name + "_msg"
}
function qo(a) {
  return"googlexpc_" + a.r.name + "_ack"
}
function ro(a) {
  try {
    if(!a.ia && so(a.r)) {
      return a.r.Ka.frames || {}
    }
  }catch(b) {
    fn("error retrieving peer frames")
  }
  return{}
}
p.ya = function() {
  if(!this.ia && so(this.r)) {
    fn("transport connect called");
    if(!this.gb) {
      fn("initializing...");
      var a = po(this);
      this.Ab = to(this, a);
      this.pd = this.D().frames[a];
      a = qo(this);
      this.lb = to(this, a);
      this.Jc = this.D().frames[a];
      this.gb = k
    }
    if(!uo(this, po(this)) || !uo(this, qo(this))) {
      gn("foreign frames not (yet) present");
      if(1 == lo(this.r)) {
        this.Le || 0 < this.vf-- || (gn("Inner peer reconnect triggered."), this.r.name = xn(10), gn("switching channels: " + this.r.name), vo(this), this.gb = m, this.Le = to(this, "googlexpc_reconnect_" + this.r.name))
      }else {
        if(0 == lo(this.r)) {
          gn("outerPeerReconnect called");
          for(var a = ro(this), b = a.length, c = 0;c < b;c++) {
            var d;
            try {
              a[c] && a[c].name && (d = a[c].name)
            }catch(f) {
            }
            if(d) {
              var g = d.split("_");
              if(3 == g.length && "googlexpc" == g[0] && "reconnect" == g[1]) {
                this.r.name = g[2];
                vo(this);
                this.gb = m;
                break
              }
            }
          }
        }
      }
      this.D().setTimeout(sa(this.ya, this), 100)
    }else {
      fn("foreign frames present"), this.ye = new wo(this, ro(this)[po(this)], sa(this.xf, this)), this.Ed = new wo(this, ro(this)[qo(this)], sa(this.wf, this)), this.Qd()
    }
  }
};
function to(a, b) {
  gn("constructing sender frame: " + b);
  var c;
  c = document.createElement("iframe");
  var d = c.style;
  d.position = "absolute";
  d.top = "-10px";
  d.left = "10px";
  d.width = "1px";
  d.height = "1px";
  c.id = c.name = b;
  c.src = a.Zb + "#INITIAL";
  a.D().document.body.appendChild(c);
  return c
}
function vo(a) {
  gn("deconstructSenderFrames called");
  a.Ab && (a.Ab.parentNode.removeChild(a.Ab), a.Ab = l, a.pd = l);
  a.lb && (a.lb.parentNode.removeChild(a.lb), a.lb = l, a.Jc = l)
}
function uo(a, b) {
  gn("checking for receive frame: " + b);
  try {
    var c = ro(a)[b];
    if(!c || 0 != c.location.href.indexOf(a.yf)) {
      return m
    }
  }catch(d) {
    return m
  }
  return k
}
p.Qd = function() {
  var a = ro(this);
  !a[qo(this)] || !a[po(this)] ? (this.Pd || (this.Pd = sa(this.Qd, this)), this.D().setTimeout(this.Pd, 100), fn("local frames not (yet) present")) : (this.ze = new xo(this.Zb, this.pd), this.ec = new xo(this.Zb, this.Jc), fn("local frames ready"), this.D().setTimeout(sa(function() {
    this.ze.send("SETUP");
    this.Fb = this.cg = k;
    fn("SETUP sent")
  }, this), 100))
};
function yo(a) {
  if(a.wd && a.Je) {
    if(a.r.Ja(), a.rb) {
      fn("delivering queued messages (" + a.rb.length + ")");
      for(var b = 0, c;b < a.rb.length;b++) {
        c = a.rb[b], a.r.Da(c.Bf, c.td)
      }
      delete a.rb
    }
  }else {
    gn("checking if connected: ack sent:" + a.wd + ", ack rcvd: " + a.Je)
  }
}
p.xf = function(a) {
  gn("msg received: " + a);
  if("SETUP" == a) {
    this.ec && (this.ec.send("SETUP_ACK"), gn("SETUP_ACK sent"), this.wd = k, yo(this))
  }else {
    if(this.r.za() || this.wd) {
      var b = a.indexOf("|"), c = a.substring(0, b), a = a.substring(b + 1), b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.ec.send("ACK:" + c);
        zo(this, a)
      }else {
        d = c.substring(0, b), this.ec.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.sd = []), this.sd.push(a), b == c && (zo(this, this.sd.join("")), delete this.sd)
      }
    }else {
      Z.log($m, "received msg, but channel is not connected", h)
    }
  }
};
p.wf = function(a) {
  gn("ack received: " + a);
  "SETUP_ACK" == a ? (this.Fb = m, this.Je = k, yo(this)) : this.r.za() ? this.Fb ? parseInt(a.split(":")[1], 10) == this.Cc ? (this.Fb = m, Ao(this)) : Z.log($m, "got ack with wrong sequence", h) : Z.log($m, "got unexpected ack", h) : Z.log($m, "received ack, but channel not connected", h)
};
function Ao(a) {
  if(!a.Fb && a.Ac.length) {
    var b = a.Ac.shift();
    ++a.Cc;
    a.ze.send(a.Cc + b);
    gn("msg sent: " + a.Cc + b);
    a.Fb = k
  }
}
function zo(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), c = b.substring(c + 1);
  a.r.za() ? a.r.Da(d, c) : ((a.rb || (a.rb = [])).push({Bf:d, td:c}), gn("queued delivery"))
}
p.bc = 3800;
p.send = function(a, b) {
  var c = a + ":" + b;
  if(!Zl || b.length <= this.bc) {
    this.Ac.push("|" + c)
  }else {
    for(var d = b.length, f = Math.ceil(d / this.bc), g = 0, i = 1;g < d;) {
      this.Ac.push("," + i + "/" + f + "|" + c.substr(g, this.bc)), i++, g += this.bc
    }
  }
  Ao(this)
};
p.M = function() {
  mo.oa.M.call(this);
  var a = Bo;
  Oa(a, this.ye);
  Oa(a, this.Ed);
  this.ye = this.Ed = l;
  eo(this.Ab);
  eo(this.lb);
  this.pd = this.Jc = this.Ab = this.lb = l
};
var Bo = [], Co = sa(function() {
  var a = m;
  try {
    for(var b = 0, c = Bo.length;b < c;b++) {
      var d;
      if(!(d = a)) {
        var f = Bo[b], g = f.Ie.location.href;
        if(g != f.je) {
          f.je = g;
          var i = g.split("#")[1];
          i && (i = i.substr(1), f.Ve(decodeURIComponent(i)));
          d = k
        }else {
          d = m
        }
      }
      a = d
    }
  }catch(j) {
    if(Z.info("receive_() failed: " + j), b = Bo[b].ca.r, Z.info("Transport Error"), b.close(), !Bo.length) {
      return
    }
  }
  b = ua();
  a && (no = b);
  oo = window.setTimeout(Co, 1E3 > b - no ? 10 : 100)
}, mo);
function Do() {
  fn("starting receive-timer");
  no = ua();
  oo && window.clearTimeout(oo);
  oo = window.setTimeout(Co, 10)
}
function xo(a, b) {
  this.Zb = a;
  this.Ne = b;
  this.gd = 0
}
xo.prototype.send = function(a) {
  this.gd = ++this.gd % 2;
  a = this.Zb + "#" + this.gd + encodeURIComponent(a);
  try {
    am ? this.Ne.location.href = a : this.Ne.location.replace(a)
  }catch(b) {
    Z.log(Zm, "sending failed", b)
  }
  Do()
};
function wo(a, b, c) {
  this.ca = a;
  this.Ie = b;
  this.Ve = c;
  this.je = this.Ie.location.href.split("#")[0] + "#INITIAL";
  Bo.push(this);
  Do()
}
;function Eo(a, b) {
  jo.call(this, b);
  this.r = a;
  this.tf = this.r.w[$.cc];
  this.Ge = this.r.w[$.Oa];
  am && (Fo || (Fo = window.setTimeout(function() {
    Go()
  }, 1E3)))
}
va(Eo, jo);
if(am) {
  var Ho = [], Fo = 0, Go = function(a) {
    for(var b = ua(), a = a || 3E3;Ho.length && b - Ho[0].timestamp >= a;) {
      var c = Ho.shift().qf;
      eo(c);
      gn("iframe removed")
    }
    Fo = window.setTimeout(Io, 1E3)
  }, Io = function() {
    Go()
  }
}
var Jo = {};
p = Eo.prototype;
p.Eb = 3;
p.ya = function() {
  this.D().xpcRelay || (this.D().xpcRelay = Ko);
  this.send("tp", "SETUP")
};
function Ko(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), f = b.substr(c + 1);
  if(!Zl || -1 == (c = d.indexOf("|"))) {
    var g = d
  }else {
    var g = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), i = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), j = Jo[i];
    j || (j = Jo[i] = {re:[], Ke:0, qe:0});
    -1 != d.indexOf("++") && (j.qe = c + 1);
    j.re[c] = f;
    j.Ke++;
    if(j.Ke != j.qe) {
      return
    }
    f = j.re.join("");
    delete Jo[i]
  }
  wn[a].Da(g, decodeURIComponent(f))
}
p.Bd = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.r.Ja()) : "SETUP_ACK" == a && this.r.Ja()
};
p.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length;
  if(Zl && 1800 < d) {
    for(var f = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ ua()).toString(36), g = 0, i = 0;g < d;i++) {
      var j = c.substr(g, 1800), g = g + 1800;
      Lo(this, a, j, f + (g >= d ? "++" : "+") + i)
    }
  }else {
    Lo(this, a, c)
  }
};
function Lo(a, b, c, d) {
  if(Zl) {
    var f = a.D().document.createElement("div");
    f.innerHTML = '<iframe onload="this.xpcOnload()"></iframe>';
    f = f.childNodes[0];
    f.xpcOnload = Mo
  }else {
    f = a.D().document.createElement("iframe"), am ? Ho.push({timestamp:ua(), qf:f}) : Am(f, "load", Mo)
  }
  var g = f.style;
  g.visibility = "hidden";
  g.width = f.style.height = "0px";
  g.position = "absolute";
  g = a.tf;
  g += "#" + a.r.name;
  a.Ge && (g += "," + a.Ge);
  g += "|" + b;
  d && (g += "|" + d);
  g += ":" + c;
  f.src = g;
  a.D().document.body.appendChild(f);
  gn("msg sent: " + g)
}
function Mo() {
  gn("iframe-load");
  eo(this);
  this.eg = l
}
p.M = function() {
  Eo.oa.M.call(this);
  am && Go(0)
};
function No(a, b, c, d, f) {
  jo.call(this, c);
  this.r = a;
  this.ib = f || 2;
  this.Fe = b || "*";
  this.jd = new fo(this);
  this.Ub = new Jm(100, this.D());
  this.tc = !!d;
  this.Xa = new zn;
  this.Ya = new zn;
  this.Ra = new zn;
  this.nf = xn(10);
  this.vc = l;
  this.tc ? 1 == lo(this.r) ? Gn(this.Ra, this.Xa) : Gn(this.Ra, this.Ya) : (Gn(this.Ra, this.Xa), 2 == this.ib && Gn(this.Ra, this.Ya));
  Fn(this.Ra, this.Ce, l, this);
  this.Ra.xa(k);
  a = this.jd;
  b = this.Ub;
  c = this.xe;
  d = Lm;
  ia(d) || (go[0] = d, d = go);
  for(f = 0;f < d.length;f++) {
    var g = Am(b, d[f], c || a, m, a.Ob || a);
    a.U.push(g)
  }
  Z.info("NativeMessagingTransport created.  protocolVersion=" + this.ib + ", oneSidedHandshake=" + this.tc + ", role=" + lo(this.r))
}
va(No, jo);
No.prototype.fa = l;
No.prototype.gb = m;
No.prototype.Eb = 1;
var Oo = {};
function Po(a) {
  var b = a.oc.data;
  if(!ka(b)) {
    return m
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return m
  }
  var f = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  fn("messageReceived: channel=" + f + ", service=" + c + ", payload=" + b);
  if(d = wn[f]) {
    return d.Da(c, b, a.oc.origin), k
  }
  var a = Qo(b)[0], g;
  for(g in wn) {
    if(d = wn[g], 1 == lo(d) && !d.za() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return fn("changing channel name to " + f), d.name = f, delete wn[g], wn[f] = d, d.Da(c, b), k
    }
  }
  Z.info('channel name mismatch; message ignored"');
  return m
}
p = No.prototype;
p.Bd = function(a) {
  var b = Qo(a), a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      Ro(this, 1);
      this.Xa.ra || this.Xa.xa(k);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.ib && (Ro(this, 2), this.Xa.ra || this.Xa.xa(k));
      break;
    case "SETUP":
      Ro(this, 1);
      So(this, 1);
      break;
    case "SETUP_NTPV2":
      if(2 == this.ib) {
        b = this.fa;
        Ro(this, 2);
        So(this, 2);
        if((1 == b || this.vc != l) && this.vc != a) {
          Z.info("Sending SETUP and changing peer ID to: " + a), To(this)
        }
        this.vc = a
      }
  }
};
function To(a) {
  if(2 == a.ib && (a.fa == l || 2 == a.fa)) {
    var b;
    b = "SETUP_NTPV2," + a.nf;
    a.send("tp", b)
  }
  (a.fa == l || 1 == a.fa) && a.send("tp", "SETUP")
}
function So(a, b) {
  if(2 == a.ib && (a.fa == l || 2 == a.fa) && 2 == b) {
    a.send("tp", "SETUP_ACK_NTPV2")
  }else {
    if((a.fa == l || 1 == a.fa) && 1 == b) {
      a.send("tp", "SETUP_ACK")
    }else {
      return
    }
  }
  a.Ya.ra || a.Ya.xa(k)
}
function Ro(a, b) {
  b > a.fa && (a.fa = b);
  1 == a.fa && (!a.Ya.ra && !a.tc && a.Ya.xa(k), a.vc = l)
}
p.ya = function() {
  var a = this.D(), b = na(a), c = Oo[b];
  "number" == typeof c || (c = 0);
  0 == c && Am(a.postMessage ? a : a.document, "message", Po, m, No);
  Oo[b] = c + 1;
  this.gb = k;
  this.xe()
};
p.xe = function() {
  var a = 0 == lo(this.r);
  this.tc && a || this.r.za() || this.ia ? this.Ub.stop() : (this.Ub.start(), To(this))
};
p.send = function(a, b) {
  var c = this.r.Ka;
  c ? (this.send = function(a, b) {
    var g = this, i = this.r.name;
    this.Bc = Mm(function() {
      g.Bc = 0;
      try {
        var j = c.postMessage ? c : c.document;
        j.postMessage ? (j.postMessage(i + "|" + a + ":" + b, g.Fe), fn("send(): service=" + a + " payload=" + b + " to hostname=" + g.Fe)) : Z.log($m, "Peer window had no postMessage function.", h)
      }catch(r) {
        Z.log($m, "Error performing postMessage, ignoring.", r)
      }
    }, 0)
  }, this.send(a, b)) : fn("send(): window not ready")
};
p.Ce = function() {
  this.r.Ja(1 == this.ib || 1 == this.fa ? 200 : h)
};
p.M = function() {
  if(this.gb) {
    var a = this.D(), b = na(a), c = Oo[b];
    Oo[b] = c - 1;
    1 == c && Dm(a.postMessage ? a : a.document, "message", Po, m, No)
  }
  this.Bc && (Km.clearTimeout(this.Bc), this.Bc = 0);
  Ql(this.jd);
  delete this.jd;
  Ql(this.Ub);
  delete this.Ub;
  this.Xa.cancel();
  delete this.Xa;
  this.Ya.cancel();
  delete this.Ya;
  this.Ra.cancel();
  delete this.Ra;
  delete this.send;
  No.oa.M.call(this)
};
function Qo(a) {
  a = a.split(",");
  a[1] = a[1] || l;
  return a
}
;function Uo(a, b) {
  jo.call(this, b);
  this.r = a;
  this.Ld = a[$.Qe] || "";
  this.Me = a[$.Se] || "";
  var c = this.D();
  if(!c.nix_setup_complete) {
    var d = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + Vo + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    Wo + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function";
    try {
      c.execScript(d, "vbscript"), c.nix_setup_complete = k
    }catch(f) {
      Z.log(Zm, "exception caught while attempting global setup: " + f, h)
    }
  }
  this[Vo] = this.pf;
  this[Wo] = this.gf
}
va(Uo, jo);
var Vo = "GCXPC____NIXJS_handle_message", Wo = "GCXPC____NIXJS_create_channel";
p = Uo.prototype;
p.Eb = 6;
p.zb = m;
p.Va = l;
p.ya = function() {
  0 == lo(this.r) ? this.Id() : this.Hd()
};
p.Id = function() {
  if(!this.zb) {
    var a = this.r.xb;
    try {
      a.contentWindow.opener = this.D().GCXPC____NIXVBS_get_wrapper(this, this.Ld), this.zb = k
    }catch(b) {
      Z.log(Zm, "exception caught while attempting setup: " + b, h)
    }
    this.zb || this.D().setTimeout(sa(this.Id, this), 100)
  }
};
p.Hd = function() {
  if(!this.zb) {
    try {
      var a = this.D().opener;
      if(a && "GCXPC____NIXVBS_container" in a) {
        this.Va = a;
        if(this.Va.GetAuthToken() != this.Me) {
          Z.log(Zm, "Invalid auth token from other party", h);
          return
        }
        this.Va.CreateChannel(this.D().GCXPC____NIXVBS_get_wrapper(this, this.Ld));
        this.zb = k;
        this.r.Ja()
      }
    }catch(b) {
      Z.log(Zm, "exception caught while attempting setup: " + b, h);
      return
    }
    this.zb || this.D().setTimeout(sa(this.Hd, this), 100)
  }
};
p.gf = function(a) {
  ("unknown" != typeof a || !("GCXPC____NIXVBS_container" in a)) && Z.log(Zm, "Invalid NIX channel given to createChannel_", h);
  this.Va = a;
  this.Va.GetAuthToken() != this.Me ? Z.log(Zm, "Invalid auth token from other party", h) : this.r.Ja()
};
p.pf = function(a, b) {
  this.D().setTimeout(sa(function() {
    this.r.Da(a, b, h)
  }, this), 1)
};
p.send = function(a, b) {
  "unknown" !== typeof this.Va && Z.log(Zm, "NIX channel not connected", h);
  this.Va.SendMessage(a, b)
};
p.M = function() {
  Uo.oa.M.call(this);
  this.Va = l
};
function Xo(a, b) {
  io.call(this);
  for(var c = 0, d;d = vn[c];c++) {
    d in a && !/^https?:\/\//.test(a[d]) && e(Error("URI " + a[d] + " is invalid for field " + d))
  }
  this.w = a;
  this.name = this.w[$.Dd] || xn(10);
  this.Fa = b || bo();
  this.nc = [];
  this.wc = new fo(this);
  a[$.$a] = a[$.$a] || tn(this.Fa.D().location.href) + "/robots.txt";
  a[$.ab] = a[$.ab] || tn(a[$.dc] || "") + "/robots.txt";
  wn[this.name] = this;
  Am(window, "unload", Yo);
  Z.info("CrossPageChannel created: " + this.name)
}
va(Xo, io);
var Zo = /^%*tp$/, $o = /^%+tp$/;
p = Xo.prototype;
p.Sa = l;
p.Aa = l;
p.ca = l;
p.Ad = 1;
p.za = function() {
  return 2 == this.Ad
};
p.Ka = l;
p.xb = l;
function so(a) {
  try {
    return!!a.Ka && !Boolean(a.Ka.closed)
  }catch(b) {
    return m
  }
}
function ap(a) {
  a.Aa && (a.Aa.cancel(), a.Aa = l);
  a.nc.length = 0;
  a = a.wc;
  Ka(a.U, Em);
  a.U.length = 0
}
p.ya = function(a) {
  this.fd = a || ga;
  this.Aa ? Fn(this.Aa, this.he, l, h) : this.he()
};
p.he = function() {
  Z.info("continueConnection_()");
  this.Aa = l;
  this.w[$.Oa] && (this.xb = ka(this.w[$.Oa]) ? this.Fa.Lb.getElementById(this.w[$.Oa]) : this.w[$.Oa]);
  if(this.xb) {
    var a = this.xb.contentWindow;
    a || (a = window.frames[this.w[$.Oa]]);
    this.Ka = a
  }
  this.Ka || (window == window.top && e(Error("CrossPageChannel: Can't connect, peer window-object not set.")), this.Ka = window.parent);
  if(!this.ca) {
    if(!this.w[$.Gb]) {
      var a = this.w, b = $.Gb, c;
      if(la(document.postMessage) || la(window.postMessage) || Zl && window.postMessage) {
        c = 1
      }else {
        if($l) {
          c = 2
        }else {
          if(Zl && this.w[$.cc]) {
            c = 3
          }else {
            var d;
            if(d = Zl) {
              d = m;
              try {
                c = window.opener, window.opener = {}, d = sm(window, "opener"), window.opener = c
              }catch(f) {
              }
            }
            c = d ? 6 : 4
          }
        }
      }
      a[b] = c
    }
    switch(this.w[$.Gb]) {
      case 1:
        this.ca = new No(this, this.w[$.Hc], this.Fa, !!this.w[$.Gc], this.w[$.Re] || 2);
        break;
      case 6:
        this.ca = new Uo(this, this.Fa);
        break;
      case 2:
        this.ca = new ko(this, this.Fa);
        break;
      case 3:
        this.ca = new Eo(this, this.Fa);
        break;
      case 4:
        this.ca = new mo(this, this.Fa)
    }
    this.ca ? Z.info("Transport created: " + this.ca.getName()) : e(Error("CrossPageChannel: No suitable transport found!"))
  }
  for(this.ca.ya();0 < this.nc.length;) {
    this.nc.shift()()
  }
};
p.close = function() {
  ap(this);
  this.Ad = 3;
  Ql(this.ca);
  this.fd = this.ca = l;
  Ql(this.Sa);
  this.Sa = l;
  Z.info('Channel "' + this.name + '" closed')
};
p.Ja = function(a) {
  this.za() || this.Sa && this.Sa.ve() || (this.Ad = 2, Z.info('Channel "' + this.name + '" connected'), Ql(this.Sa), a ? (this.Sa = new Yn(this.fd, a), this.Sa.start()) : (this.Sa = l, this.fd()))
};
p.Ce = Xo.prototype.Ja;
p.send = function(a, b) {
  this.za() ? so(this) ? (ma(b) && (b = mn(b)), this.ca.send(bp(a), b)) : (Z.log(Zm, "Peer has disappeared.", h), this.close()) : Z.log(Zm, "Can't send. Channel not connected.", h)
};
p.Da = function(a, b, c) {
  if(this.Aa) {
    this.nc.push(sa(this.Da, this, a, b, c))
  }else {
    var d = this.w[$.Hc];
    if(/^[\s\xa0]*$/.test(c == l ? "" : String(c)) || /^[\s\xa0]*$/.test(d == l ? "" : String(d)) || c == this.w[$.Hc]) {
      if(this.ia) {
        Z.log($m, "CrossPageChannel::deliver_(): Disposed.", h)
      }else {
        if(!a || "tp" == a) {
          this.ca.Bd(b)
        }else {
          if(this.za()) {
            if(a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = $o.test(a) ? a.substring(1) : a, c = this.xd[a], c || (this.me ? c = {xa:ta(this.me, a), De:ma(b)} : (this.sc.log($m, 'Unknown service name "' + a + '"', h), c = l)), c) {
              var f;
              a: {
                if((d = c.De) && ka(b)) {
                  try {
                    f = ln(b);
                    break a
                  }catch(g) {
                    this.sc.log($m, "Expected JSON payload for " + a + ', was "' + b + '"', h);
                    f = l;
                    break a
                  }
                }else {
                  if(!d && !ka(b)) {
                    f = mn(b);
                    break a
                  }
                }
                f = b
              }
              f != l && c.xa(f)
            }
          }else {
            Z.info("CrossPageChannel::deliver_(): Not connected.")
          }
        }
      }
    }else {
      Z.log($m, 'Message received from unapproved origin "' + c + '" - rejected.', h)
    }
  }
};
function bp(a) {
  Zo.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
}
function lo(a) {
  var b = a.w[$.Ic];
  return b ? b : window.parent == a.Ka ? 1 : 0
}
p.M = function() {
  this.close();
  this.xb = this.Ka = l;
  delete wn[this.name];
  Ql(this.wc);
  delete this.wc;
  Xo.oa.M.call(this)
};
function Yo() {
  for(var a in wn) {
    Ql(wn[a])
  }
}
;Eg(Ah, V.a(function(a) {
  var b = O.b(a, 0, l), a = O.b(a, 1, l);
  return W([Be.c(b.toLowerCase()), a])
}, Ti.e(H([fk({Hf:"complete", Nf:"success", If:"error", Gf:"abort", Lf:"ready", Mf:"readystatechange", TIMEOUT:"timeout", Jf:"incrementaldata", Kf:"progress"})], 0))));
var cp, dp = l;
function ep(a) {
  if(a ? a.ae : a) {
    return a.ae(a)
  }
  var b;
  var c = cp[s(a == l ? l : a)];
  c ? b = c : (c = cp._) ? b = c : e(w("IConnection.connect", a));
  return b.call(l, a)
}
function fp(a, b) {
  if(a ? a.be : a) {
    return a.be(a, b)
  }
  var c;
  var d = cp[s(a == l ? l : a)];
  d ? c = d : (d = cp._) ? c = d : e(w("IConnection.connect", a));
  return c.call(l, a, b)
}
function gp(a, b, c) {
  if(a ? a.ce : a) {
    return a.ce(a, b, c)
  }
  var d;
  var f = cp[s(a == l ? l : a)];
  f ? d = f : (f = cp._) ? d = f : e(w("IConnection.connect", a));
  return d.call(l, a, b, c)
}
function hp(a, b, c, d) {
  if(a ? a.de : a) {
    return a.de(a, b, c, d)
  }
  var f;
  var g = cp[s(a == l ? l : a)];
  g ? f = g : (g = cp._) ? f = g : e(w("IConnection.connect", a));
  return f.call(l, a, b, c, d)
}
dp = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return ep.call(this, a);
    case 2:
      return fp.call(this, a, b);
    case 3:
      return gp.call(this, a, b, c);
    case 4:
      return hp.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
dp.c = ep;
dp.a = fp;
dp.b = gp;
dp.q = hp;
cp = dp;
var ip, jp = l;
function kp(a, b) {
  if(a ? a.cf : a) {
    return a.cf(a, b)
  }
  var c;
  var d = ip[s(a == l ? l : a)];
  d ? c = d : (d = ip._) ? c = d : e(w("IConnection.transmit", a));
  return c.call(l, a, b)
}
function lp(a, b, c) {
  if(a ? a.ee : a) {
    return a.ee(a, b, c)
  }
  var d;
  var f = ip[s(a == l ? l : a)];
  f ? d = f : (f = ip._) ? d = f : e(w("IConnection.transmit", a));
  return d.call(l, a, b, c)
}
function mp(a, b, c, d) {
  if(a ? a.df : a) {
    return a.df(a, b, c, d)
  }
  var f;
  var g = ip[s(a == l ? l : a)];
  g ? f = g : (g = ip._) ? f = g : e(w("IConnection.transmit", a));
  return f.call(l, a, b, c, d)
}
function np(a, b, c, d, f) {
  if(a ? a.ef : a) {
    return a.ef(a, b, c, d, f)
  }
  var g;
  var i = ip[s(a == l ? l : a)];
  i ? g = i : (i = ip._) ? g = i : e(w("IConnection.transmit", a));
  return g.call(l, a, b, c, d, f)
}
function op(a, b, c, d, f, g) {
  if(a ? a.ff : a) {
    return a.ff(a, b, c, d, f, g)
  }
  var i;
  var j = ip[s(a == l ? l : a)];
  j ? i = j : (j = ip._) ? i = j : e(w("IConnection.transmit", a));
  return i.call(l, a, b, c, d, f, g)
}
jp = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return kp.call(this, a, b);
    case 3:
      return lp.call(this, a, b, c);
    case 4:
      return mp.call(this, a, b, c, d);
    case 5:
      return np.call(this, a, b, c, d, f);
    case 6:
      return op.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
jp.a = kp;
jp.b = lp;
jp.q = mp;
jp.T = np;
jp.ha = op;
ip = jp;
var pp = Eg(Ah, V.a(function(a) {
  var b = O.b(a, 0, l), a = O.b(a, 1, l);
  return W([Be.c(b.toLowerCase()), a])
}, fk($))), qp, rp = l;
function sp(a, b, c) {
  if(a ? a.fe : a) {
    return a.fe(a, b, c)
  }
  var d;
  var f = qp[s(a == l ? l : a)];
  f ? d = f : (f = qp._) ? d = f : e(w("ICrossPageChannel.register-service", a));
  return d.call(l, a, b, c)
}
function tp(a, b, c, d) {
  if(a ? a.ge : a) {
    return a.ge(a, b, c, d)
  }
  var f;
  var g = qp[s(a == l ? l : a)];
  g ? f = g : (g = qp._) ? f = g : e(w("ICrossPageChannel.register-service", a));
  return f.call(l, a, b, c, d)
}
rp = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return sp.call(this, a, b, c);
    case 4:
      return tp.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rp.b = sp;
rp.q = tp;
qp = rp;
p = Xo.prototype;
p.ae = function(a) {
  return cp.a(a, l)
};
p.be = function(a, b) {
  return a.ya(b)
};
p.ce = function(a, b, c) {
  return cp.q(a, b, c, document.body)
};
p.de = function(a, b, c, d) {
  Z.info("createPeerIframe()");
  var f = a.w[$.Oa];
  f || (f = a.w[$.Oa] = "xpcpeer" + xn(4));
  var g = bo(d).createElement("IFRAME");
  g.id = g.name = f;
  c ? c(g) : g.style.width = g.style.height = "100%";
  ap(a);
  a.Aa = new zn(h, a);
  var i, c = a.w[$.dc];
  ka(c) && (c = a.w[$.dc] = new Jn(c));
  var j = {};
  j[$.Dd] = a.name;
  j[$.Gb] = a.w[$.Gb];
  j[$.Gc] = a.w[$.Gc];
  a.w[$.Fc] && (j[$.cc] = a.w[$.Fc]);
  a.w[$.$a] && (j[$.ab] = a.w[$.$a]);
  a.w[$.ab] && (j[$.$a] = a.w[$.ab]);
  var r = a.w[$.Ic];
  r && (j[$.Ic] = 1 == r ? 0 : 1);
  r = c;
  j = mn(j);
  Ln(r);
  r.La.set("xpc", j);
  i = c;
  ho(a.wc, g, "load", a.Aa.xa, m, a.Aa);
  $l || am ? window.setTimeout(sa(function() {
    d.appendChild(g);
    g.src = i.toString();
    Z.info("peer iframe created (" + f + ")")
  }, a), 1) : (g.src = i.toString(), d.appendChild(g), Z.info("peer iframe created (" + f + ")"));
  return a.ya(b)
};
p.ee = function(a, b, c) {
  return a.send($i(b), c)
};
p.fe = function(a, b, c) {
  return qp.q(a, b, c, m)
};
p.ge = function(a, b, c, d) {
  b = $i(b);
  a.xd[b] = {xa:c, De:!!d}
};
var up, vp = l;
function wp() {
  var a = (new Jn(window.location.href)).La.get("xpc");
  return t(a) ? new Xo(ln(a)) : l
}
function xp(a) {
  return new Xo(S.b(function(a, c) {
    var d = O.b(c, 0, l), f = O.b(c, 1, l), d = y.b(pp, d, l);
    t(d) && (a[d] = f);
    return a
  }, {}, a))
}
vp = function(a) {
  switch(arguments.length) {
    case 0:
      return wp.call(this);
    case 1:
      return xp.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vp.p = wp;
vp.c = xp;
up = vp;
var yp = Mj.c(l);
function zp(a) {
  var b = function() {
    try {
      return Ch(["\ufdd0'status", "\ufdd0'value"], {"\ufdd0'status":"\ufdd0'success", "\ufdd0'value":"" + U(eval(a))})
    }catch(b) {
      if(I(Error, b)) {
        return Ch(["\ufdd0'status", "\ufdd0'value", "\ufdd0'stacktrace"], {"\ufdd0'status":"\ufdd0'exception", "\ufdd0'value":N.e(H([b], 0)), "\ufdd0'stacktrace":t(b.hasOwnProperty("stack")) ? b.stack : "No stacktrace available."})
      }
      e(b)
    }
  }();
  return N.e(H([b], 0))
}
Mj.c(0);
var Ap = up.c(Ch(["\ufdd0'peer_uri"], {"\ufdd0'peer_uri":"http://localhost:9000/repl"}));
Sj.a(yp, Nf(Ap));
qp.b(Ap, "\ufdd0'evaluate-javascript", function(a) {
  return ip.b(Ap, "\ufdd0'send-result", zp(a))
});
cp.b(Ap, Nf(l), function(a) {
  return a.style.display = "none"
});
function Bp(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'total-rows", l), f = y.b(c, "\ufdd0'block-height", l), g = y.b(c, "\ufdd0'block-width", l), c = y.b(c, "\ufdd0'display-height", l), i = O.b(b, 0, l), j = O.b(b, 1, l);
  return W([i * g, c - (d - j + 1) * f])
}
;function Cp(a) {
  var b = rj.c(V.a(Uf.a(al, 16), rj.c(hj.a(0, a.length)))), a = Me(rj.c(V.a(cl, a))), b = $k(b, a), b = rj.c(V.a(function(a) {
    var b = O.b(a, 0, l), a = O.b(a, 1, l);
    return b * a
  }, b));
  return S.a(Yd, b)
}
function Dp(a, b) {
  var c;
  c = V.a(Cp, V.a(Mk, Fg.a(2, a.replace("#", ""))));
  c = V.a(he, V.a(function(a) {
    return 255 > (1 + b) * (a + 100) ? (1 + b) * (a + 100) : 255
  }, c));
  c = V.a(dl, c);
  return[U("#"), U(Qk(Mk.c(c)))].join("")
}
;W([30, 30]);
function Ep(a) {
  return Ch(["\ufdd0'total-rows", "\ufdd0'block-height", "\ufdd0'block-width", "\ufdd0'display-height"], {"\ufdd0'total-rows":a, "\ufdd0'block-height":30, "\ufdd0'block-width":30, "\ufdd0'display-height":400})
}
function Fp() {
  return document.getElementById("canvas").getContext("2d")
}
function Gp(a, b, c) {
  var c = Q(c) ? L.a(J, c) : c, d = y.b(c, "\ufdd0'position", l), c = y.b(c, "\ufdd0'type", l), d = Bp(Ep(a), d), a = O.b(d, 0, l), d = O.b(d, 1, l);
  return b.ha ? b.ha(Fp(), $i(c), a, d, 30, 30) : b.call(l, Fp(), $i(c), a, d, 30, 30)
}
function Hp(a, b, c, d, f, g) {
  a.fillStyle = b;
  return a.fillRect(c, d, f, g)
}
function Ip() {
  return Hp(Fp(), "white", 0, 0, 270, 400)
}
function Jp(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'type", l);
  return P.b(c, "\ufdd0'type", Dp("" + U(d), b))
}
function Kp(a, b) {
  var c = Q(b) ? L.a(J, b) : b, d = y.b(c, "\ufdd0'blocks", l), f = y.b(c, "\ufdd0'ticks", l), c = rj.c(V.a(function(a) {
    var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'type", l);
    U(b);
    return Jp(a, (20 - f) / 20 + 0.2)
  }, d));
  return rj.c(V.a(Uf.a(Lp, a), c))
}
function Mp(a) {
  return P.b(a, "\ufdd0'type", "\ufdd0'gray")
}
function Np(a, b) {
  var c = Q(b) ? L.a(J, b) : b, d = y.b(c, "\ufdd0'blocks", l);
  y.b(c, "\ufdd0'ticks", l);
  c = rj.c(V.a(Mp, d));
  return rj.c(V.a(Uf.a(Lp, a), c))
}
function Op(a, b) {
  var c = Q(b) ? L.a(J, b) : b, c = y.b(c, "\ufdd0'block", l);
  return Lp.a ? Lp.a(a, c) : Lp.call(l, a, c)
}
function Pp(a, b) {
  var c = Q(b) ? L.a(J, b) : b, d = y.b(c, "\ufdd0'block", l);
  y.b(c, "\ufdd0'into-position", l);
  return V.a(Uf.a(Lp, a), W([Mp(d)]))
}
function Qp(a, b, c) {
  b = sk(b);
  b = rj.c(V.a(function(a) {
    return qk(a, c)
  }, b));
  return rj.c(V.a(Uf.a(Lp, a), b))
}
function Rp(a, b) {
  var c = Q(b) ? L.a(J, b) : b, d = y.b(c, "\ufdd0'garbage-block", l), d = Q(d) ? L.a(J, d) : d, f = y.b(d, "\ufdd0'position", l), g = y.b(d, "\ufdd0'length", l), i = y.b(d, "\ufdd0'height", l), c = y.b(c, "\ufdd0'pending-blocks", l), j = nk(f), f = O.b(j, 0, l), r = O.b(j, 1, l), j = lk(f + g, r + i), i = Bp(Ep(a), W([f, r])), g = O.b(i, 0, l), i = O.b(i, 1, l), j = Bp(Ep(a), j), f = O.b(j, 0, l), j = O.b(j, 1, l), f = f - g, j = i - j, r = Fp();
  Qp(a, d, "\ufdd0'AAA");
  rj.c(V.a(function(b) {
    return Lp.a ? Lp.a(a, Jp(b, 0.9)) : Lp.call(l, a, Jp(b, 0.9))
  }, c));
  r.lineWidth = 3;
  r.strokeStyle = "black";
  return r.strokeRect(g, i, f, j)
}
function Sp(a, b) {
  return Qp(a, b, "\ufdd0'black")
}
function Lp(a, b) {
  var c = Q(b) ? L.a(J, b) : b, d = y.b(c, "\ufdd0'type", l), d = G.a("\ufdd0'falling", d) ? Uf.a(Op, a) : G.a("\ufdd0'disappear", d) ? Uf.a(Kp, a) : G.a("\ufdd0'swap-empty", d) ? Uf.a(Pp, a) : G.a("\ufdd0'swap", d) ? Uf.a(Np, a) : G.a("\ufdd0'garbage", d) ? Uf.a(Sp, a) : G.a("\ufdd0'dissolve", d) ? Uf.a(Rp, a) : Uf.b(Gp, a, Hp);
  return d.c ? d.c(c) : d.call(l, c)
}
function Tp(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'game", l), f = y.b(c, "\ufdd0'cursor", l), g = Q(f) ? L.a(J, f) : f, f = y.b(g, "\ufdd0'origin", l), f = mk(f, b), g = P.b(g, "\ufdd0'origin", f), d = Q(d) ? L.a(J, d) : d, d = y.b(d, "\ufdd0'grid", l), d = Q(d) ? L.a(J, d) : d, i = y.b(d, "\ufdd0'rows", l), j = y.b(d, "\ufdd0'cols", l), r = O.b(f, 0, l), v = O.b(f, 1, l);
  return t(!function() {
    var a = 0 < r;
    return a && (a = 0 < v) ? (a = i >= v) ? j > r : a : a
  }()) ? c : P.b(c, "\ufdd0'cursor", g)
}
function Up(a) {
  return Tp(a, lk(0, 1))
}
function Vp(a) {
  return Tp(a, lk(0, -1))
}
function Wp(a) {
  return Tp(a, lk(-1, 0))
}
function Xp(a) {
  return Tp(a, lk(1, 0))
}
function Yp(a) {
  var b = Q(a) ? L.a(J, a) : a, a = y.b(b, "\ufdd0'game", l), a = Q(a) ? L.a(J, a) : a, c = y.b(a, "\ufdd0'grid", l), a = y.b(b, "\ufdd0'cursor", l), a = Q(a) ? L.a(J, a) : a, d = y.b(a, "\ufdd0'origin", l), f = mk(d, lk(1, 0)), g = rj.c(V.a(function(a) {
    return ql(c, a)
  }, W([d, f]))), a = O.b(g, 0, l), g = O.b(g, 1, l);
  if(Kf($a, W([a, g]))) {
    a = b
  }else {
    if(Kf(Of.a(ab, $a), W([a, g]))) {
      b = Q(b) ? L.a(J, b) : b;
      d = y.b(b, "\ufdd0'game", l);
      d = Q(d) ? L.a(J, d) : d;
      f = y.b(d, "\ufdd0'grid", l);
      f = Q(f) ? L.a(J, f) : f;
      y.b(f, "\ufdd0'blocks", l);
      if(Kf(Ak, W([a, g]))) {
        var i = Ch(["\ufdd0'blocks", "\ufdd0'ticks", "\ufdd0'type"], {"\ufdd0'blocks":W([a, g]), "\ufdd0'ticks":5, "\ufdd0'type":"\ufdd0'swap"}), a = jl(f, Yi([a, g]), Yi([i]))
      }else {
        a = f
      }
      a = P.b(b, "\ufdd0'game", P.b(d, "\ufdd0'grid", a))
    }else {
      a = A(Bg(function(a) {
        var b = O.b(a, 0, l);
        O.b(a, 1, l);
        return b != l
      }, W([W([a, f]), W([g, d])]))), b = Q(b) ? L.a(J, b) : b, g = y.b(b, "\ufdd0'game", l), g = Q(g) ? L.a(J, g) : g, d = y.b(g, "\ufdd0'grid", l), f = O.b(a, 0, l), a = O.b(a, 1, l), a = P.b(b, "\ufdd0'game", P.b(g, "\ufdd0'grid", pl(d, f, a)))
    }
  }
  return a
}
function Zp(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'game", l);
  return P.b(a, "\ufdd0'game", Kl(b))
}
function $p(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'game", l);
  return P.b(a, "\ufdd0'game", Ml(b))
}
function aq(a) {
  function b(a) {
    console.log("" + U(a))
  }
  var c = (new Xe("\ufdd0'grid")).call(l, (new Xe("\ufdd0'game")).call(l, a));
  (new Xe("\ufdd0'blocks")).call(l, c);
  c = Il(c);
  b("" + U("Game interface"));
  b(a);
  b("" + U("Fallers"));
  b(c);
  return a
}
function bq(a) {
  var a = Q(a) ? L.a(J, a) : a, b = y.b(a, "\ufdd0'game", l);
  return P.b(a, "\ufdd0'game", Nl(b))
}
function cq(a, b) {
  var c = Q(a) ? L.a(J, a) : a, d = y.b(c, "\ufdd0'game", l), d = Q(d) ? L.a(J, d) : d, f = y.b(d, "\ufdd0'grid", l), f = Q(f) ? L.a(J, f) : f;
  y.b(f, "\ufdd0'rows", l);
  y.b(d, "\ufdd0'clock", l);
  y.b(c, "\ufdd0'cursor", l);
  Ip();
  var f = Q(f) ? L.a(J, f) : f, g = y.b(f, "\ufdd0'rows", l);
  rj.c(V.a(Uf.a(Lp, g), (new Xe("\ufdd0'blocks")).call(l, f)));
  f = Fp();
  f.fillStyle = "red";
  f.font = "bold 12px sans-serif";
  f.fillText([U("FPS "), U(b)].join(""), 150, 10);
  if(t(Jl(d))) {
    c = Fp(), f = W([30, 200]), d = O.b(f, 0, l), f = O.b(f, 1, l), Hp(c, "black", d, f - 30, 270, 60), c.fillStyle = "white", c.font = "bold 20px sans-serif", c = c.fillText("" + U("Game over"), d + 30, f)
  }else {
    var d = Q(c) ? L.a(J, c) : c, c = y.b(d, "\ufdd0'game", l), f = Q(c) ? L.a(J, c) : c, c = y.b(f, "\ufdd0'clock", l), f = y.b(f, "\ufdd0'grid", l), f = Q(f) ? L.a(J, f) : f, i = y.b(f, "\ufdd0'rows", l), d = y.b(d, "\ufdd0'cursor", l), f = Fp();
    f.fillStyle = "black";
    f.font = "bold 12px sans-serif";
    f.fillText([U("Clock "), U(c)].join(""), 30, 10);
    var c = Q(d) ? L.a(J, d) : d, c = y.b(c, "\ufdd0'origin", l), j = Fp(), d = function(a) {
      var b = Bp(Ep(i), a), a = O.b(b, 0, l), b = O.b(b, 1, l);
      j.lineWidth = 3;
      j.strokeStyle = "black";
      return j.strokeRect(a, b, 30, 30)
    };
    d(c);
    c = d(mk(c, lk(1, 0)))
  }
  return c
}
;var dq = A(Bg(Of.a(ab, $a), W([window.requestAnimationFrame, window.mozRequestAnimationFrame, window.msRequestAnimationFrame, window.webkitRequestAnimationFrame]))), eq = Mj.c(Zn());
function fq() {
  return Zn()
}
function gq() {
  return Sj.a(eq, bq)
}
var iq = function hq() {
  var b = (new Date).getTime();
  return setTimeout(function() {
    var c = Math.floor(1E3 * (1 / ((new Date).getTime() - b)));
    cq.a ? cq.a(Hb(eq), c) : cq.call(l, Hb(eq), c);
    return dq.c ? dq.c(hq) : dq.call(l, hq)
  }, 30)
};
da("attack.entrypoint.keyup_handler", function(a) {
  var b = G.a(32, a.which) ? "\ufdd0'SPACE" : G.a(37, a.which) ? "\ufdd0'LEFT" : G.a(38, a.which) ? "\ufdd0'UP" : G.a(39, a.which) ? "\ufdd0'RIGHT" : G.a(40, a.which) ? "\ufdd0'DOWN" : G.a(13, a.which) ? "\ufdd0'ENTER" : G.a(78, a.which) ? "\ufdd0'N" : G.a(80, a.which) ? "\ufdd0'P" : G.a(49, a.which) ? "\ufdd0'EXCLAMATION" : G.a(82, a.which) ? "\ufdd0'R" : G.a(191, a.which) ? "\ufdd0'QMARK" : "\ufdd0'UNSUPPORTED";
  G.a("\ufdd0'SPACE", b) ? a = Yp : G.a("\ufdd0'LEFT", b) ? a = Wp : G.a("\ufdd0'QMARK", b) ? a = aq : G.a("\ufdd0'ENTER", b) ? a = Yp : G.a("\ufdd0'R", b) ? a = Zp : G.a("\ufdd0'EXCLAMATION", b) ? a = $p : G.a("\ufdd0'N", b) ? a = fq : G.a("\ufdd0'DOWN", b) ? a = Up : G.a("\ufdd0'RIGHT", b) ? a = Xp : G.a("\ufdd0'UP", b) ? a = Vp : (console.log(a), a = Mf);
  return Sj.a(eq, a)
});
da("attack.entrypoint.init", function() {
  var a = [U("Initializing "), U(Hb(eq))].join("");
  console.log(a);
  Ip.p ? Ip.p() : Ip.call(l);
  setInterval(gq, 30);
  return iq()
});
