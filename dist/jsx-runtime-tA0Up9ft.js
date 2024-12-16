import Re from "react";
var G = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function je() {
  if (fe) return R;
  fe = 1;
  var s = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function w(C, c, f) {
    var v = null;
    if (f !== void 0 && (v = "" + f), c.key !== void 0 && (v = "" + c.key), "key" in c) {
      f = {};
      for (var _ in c)
        _ !== "key" && (f[_] = c[_]);
    } else f = c;
    return c = f.ref, {
      $$typeof: s,
      type: C,
      key: v,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return R.Fragment = p, R.jsx = w, R.jsxs = w, R;
}
var j = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function pe() {
  return ie || (ie = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === we ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case N:
          return "Fragment";
        case _e:
          return "Portal";
        case F:
          return "Profiler";
        case B:
          return "StrictMode";
        case Y:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case W:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function w(e) {
      try {
        p(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), p(e);
      }
    }
    function C() {
    }
    function c() {
      if (y === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, oe = console.group, te = console.groupCollapsed, ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: C,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      y++;
    }
    function f() {
      if (y--, y === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: g({}, e, { value: K }),
          info: g({}, e, { value: D }),
          warn: g({}, e, { value: ee }),
          error: g({}, e, { value: re }),
          group: g({}, e, { value: oe }),
          groupCollapsed: g({}, e, { value: te }),
          groupEnd: g({}, e, { value: ne })
        });
      }
      0 > y && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function v(e) {
      if (z === void 0)
        try {
          throw Error();
        } catch (o) {
          var r = o.stack.trim().match(/\n( *(at )?)/);
          z = r && r[1] || "", ae = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + z + e + ae;
    }
    function _(e, r) {
      if (!e || V) return "";
      var o = q.get(e);
      if (o !== void 0) return o;
      V = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = b.H, b.H = null, c();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var d = function() {
                  throw Error();
                };
                if (Object.defineProperty(d.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(d, []);
                  } catch (E) {
                    var k = E;
                  }
                  Reflect.construct(e, [], d);
                } else {
                  try {
                    d.call();
                  } catch (E) {
                    k = E;
                  }
                  e.call(d.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  k = E;
                }
                (d = e()) && typeof d.catch == "function" && d.catch(function() {
                });
              }
            } catch (E) {
              if (E && k && typeof E.stack == "string")
                return [E.stack, k.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var t = u.DetermineComponentFrameRoot(), i = t[0], T = t[1];
        if (i && T) {
          var l = i.split(`
`), m = T.split(`
`);
          for (t = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; t < m.length && !m[t].includes(
            "DetermineComponentFrameRoot"
          ); )
            t++;
          if (a === l.length || t === m.length)
            for (a = l.length - 1, t = m.length - 1; 1 <= a && 0 <= t && l[a] !== m[t]; )
              t--;
          for (; 1 <= a && 0 <= t; a--, t--)
            if (l[a] !== m[t]) {
              if (a !== 1 || t !== 1)
                do
                  if (a--, t--, 0 > t || l[a] !== m[t]) {
                    var x = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, x), x;
                  }
                while (1 <= a && 0 <= t);
              break;
            }
        }
      } finally {
        V = !1, b.H = n, f(), Error.prepareStackTrace = o;
      }
      return l = (l = e ? e.displayName || e.name : "") ? v(l) : "", typeof e == "function" && q.set(e, l), l;
    }
    function h(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return _(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return v(e);
      switch (e) {
        case Y:
          return v("Suspense");
        case M:
          return v("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            return e = _(e.render, !1), e;
          case $:
            return h(e.type);
          case W:
            r = e._payload, e = e._init;
            try {
              return h(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = b.A;
      return e === null ? null : e.getOwner();
    }
    function Ee(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function ve(e, r) {
      function o() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function de() {
      var e = s(this.type);
      return le[e] || (le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function be(e, r, o, n, u, a) {
      return o = a.ref, e = {
        $$typeof: A,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: de
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function J(e, r, o, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === N || e === F || e === B || e === Y || e === M || e === Te || typeof e == "object" && e !== null && (e.$$typeof === W || e.$$typeof === $ || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === P || e.$$typeof === ye || e.getModuleId !== void 0)) {
        var t = r.children;
        if (t !== void 0)
          if (n)
            if (U(t)) {
              for (n = 0; n < t.length; n++)
                H(t[n], e);
              Object.freeze && Object.freeze(t);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else H(t, e);
      } else
        t = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (t += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : U(e) ? n = "array" : e !== void 0 && e.$$typeof === A ? (n = "<" + (s(e.type) || "Unknown") + " />", t = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          t
        );
      if (Q.call(r, "key")) {
        t = s(e);
        var i = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        n = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", ce[t + n] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          t,
          i,
          t
        ), ce[t + n] = !0);
      }
      if (t = null, o !== void 0 && (w(o), t = "" + o), Ee(r) && (w(r.key), t = "" + r.key), "key" in r) {
        o = {};
        for (var T in r)
          T !== "key" && (o[T] = r[T]);
      } else o = r;
      return t && ve(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), be(e, t, a, u, O(), o);
    }
    function H(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== xe) {
        if (U(e))
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            S(n) && X(n, r);
          }
        else if (S(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = I && e[I] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            S(e.value) && X(e.value, r);
      }
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function X(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = ge(r), !se[r])) {
        se[r] = !0;
        var o = "";
        e && e._owner != null && e._owner !== O() && (o = null, typeof e._owner.tag == "number" ? o = s(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var n = b.getCurrentStack;
        b.getCurrentStack = function() {
          var u = h(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          o
        ), b.getCurrentStack = n;
      }
    }
    function ge(e) {
      var r = "", o = O();
      return o && (o = s(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = s(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var me = Re, A = Symbol.for("react.transitional.element"), _e = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), I = Symbol.iterator, we = Symbol.for("react.client.reference"), b = me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, g = Object.assign, ye = Symbol.for("react.client.reference"), U = Array.isArray, y = 0, K, D, ee, re, oe, te, ne;
    C.__reactDisabledLog = !0;
    var z, ae, V = !1, q = new (typeof WeakMap == "function" ? WeakMap : Map)(), xe = Symbol.for("react.client.reference"), ue, le = {}, ce = {}, se = {};
    j.Fragment = N, j.jsx = function(e, r, o, n, u) {
      return J(e, r, o, !1, n, u);
    }, j.jsxs = function(e, r, o, n, u) {
      return J(e, r, o, !0, n, u);
    };
  }()), j;
}
process.env.NODE_ENV === "production" ? G.exports = je() : G.exports = pe();
var ke = G.exports;
export {
  ke as j
};
