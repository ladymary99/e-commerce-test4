(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const f of o.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = a(s);
    fetch(s.href, o);
  }
})();
function Vx(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var Zd = { exports: {} },
  Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg;
function Qx() {
  if (Gg) return Is;
  Gg = 1;
  var u = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function a(i, s, o) {
    var f = null;
    if (
      (o !== void 0 && (f = "" + o),
      s.key !== void 0 && (f = "" + s.key),
      "key" in s)
    ) {
      o = {};
      for (var m in s) m !== "key" && (o[m] = s[m]);
    } else o = s;
    return (
      (s = o.ref),
      { $$typeof: u, type: i, key: f, ref: s !== void 0 ? s : null, props: o }
    );
  }
  return (Is.Fragment = l), (Is.jsx = a), (Is.jsxs = a), Is;
}
var Vg;
function Zx() {
  return Vg || ((Vg = 1), (Zd.exports = Qx())), Zd.exports;
}
var d = Zx(),
  Kd = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qg;
function Kx() {
  if (Qg) return Ee;
  Qg = 1;
  var u = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function x(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (b && S[b]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    T = {};
  function E(S, K, le) {
    (this.props = S),
      (this.context = K),
      (this.refs = T),
      (this.updater = le || _);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (S, K) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, K, "setState");
    }),
    (E.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function A() {}
  A.prototype = E.prototype;
  function O(S, K, le) {
    (this.props = S),
      (this.context = K),
      (this.refs = T),
      (this.updater = le || _);
  }
  var z = (O.prototype = new A());
  (z.constructor = O), w(z, E.prototype), (z.isPureReactComponent = !0);
  var C = Array.isArray,
    U = { H: null, A: null, T: null, S: null },
    V = Object.prototype.hasOwnProperty;
  function q(S, K, le, re, W, pe) {
    return (
      (le = pe.ref),
      {
        $$typeof: u,
        type: S,
        key: K,
        ref: le !== void 0 ? le : null,
        props: pe,
      }
    );
  }
  function Y(S, K) {
    return q(S.type, K, void 0, void 0, void 0, S.props);
  }
  function L(S) {
    return typeof S == "object" && S !== null && S.$$typeof === u;
  }
  function G(S) {
    var K = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (le) {
        return K[le];
      })
    );
  }
  var se = /\/+/g;
  function I(S, K) {
    return typeof S == "object" && S !== null && S.key != null
      ? G("" + S.key)
      : K.toString(36);
  }
  function ye() {}
  function _e(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(ye, ye)
            : ((S.status = "pending"),
              S.then(
                function (K) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = K));
                },
                function (K) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = K));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function ve(S, K, le, re, W) {
    var pe = typeof S;
    (pe === "undefined" || pe === "boolean") && (S = null);
    var oe = !1;
    if (S === null) oe = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case u:
            case l:
              oe = !0;
              break;
            case v:
              return (oe = S._init), ve(oe(S._payload), K, le, re, W);
          }
      }
    if (oe)
      return (
        (W = W(S)),
        (oe = re === "" ? "." + I(S, 0) : re),
        C(W)
          ? ((le = ""),
            oe != null && (le = oe.replace(se, "$&/") + "/"),
            ve(W, K, le, "", function (De) {
              return De;
            }))
          : W != null &&
            (L(W) &&
              (W = Y(
                W,
                le +
                  (W.key == null || (S && S.key === W.key)
                    ? ""
                    : ("" + W.key).replace(se, "$&/") + "/") +
                  oe
              )),
            K.push(W)),
        1
      );
    oe = 0;
    var He = re === "" ? "." : re + ":";
    if (C(S))
      for (var xe = 0; xe < S.length; xe++)
        (re = S[xe]), (pe = He + I(re, xe)), (oe += ve(re, K, le, pe, W));
    else if (((xe = x(S)), typeof xe == "function"))
      for (S = xe.call(S), xe = 0; !(re = S.next()).done; )
        (re = re.value), (pe = He + I(re, xe++)), (oe += ve(re, K, le, pe, W));
    else if (pe === "object") {
      if (typeof S.then == "function") return ve(_e(S), K, le, re, W);
      throw (
        ((K = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (K === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : K) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return oe;
  }
  function F(S, K, le) {
    if (S == null) return S;
    var re = [],
      W = 0;
    return (
      ve(S, re, "", "", function (pe) {
        return K.call(le, pe, W++);
      }),
      re
    );
  }
  function J(S) {
    if (S._status === -1) {
      var K = S._result;
      (K = K()),
        K.then(
          function (le) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = le));
          },
          function (le) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = le));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = K));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ee =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var K = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(K)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function me() {}
  return (
    (Ee.Children = {
      map: F,
      forEach: function (S, K, le) {
        F(
          S,
          function () {
            K.apply(this, arguments);
          },
          le
        );
      },
      count: function (S) {
        var K = 0;
        return (
          F(S, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (S) {
        return (
          F(S, function (K) {
            return K;
          }) || []
        );
      },
      only: function (S) {
        if (!L(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (Ee.Component = E),
    (Ee.Fragment = a),
    (Ee.Profiler = s),
    (Ee.PureComponent = O),
    (Ee.StrictMode = i),
    (Ee.Suspense = g),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
    (Ee.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Ee.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (Ee.cloneElement = function (S, K, le) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var re = w({}, S.props),
        W = S.key,
        pe = void 0;
      if (K != null)
        for (oe in (K.ref !== void 0 && (pe = void 0),
        K.key !== void 0 && (W = "" + K.key),
        K))
          !V.call(K, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && K.ref === void 0) ||
            (re[oe] = K[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) re.children = le;
      else if (1 < oe) {
        for (var He = Array(oe), xe = 0; xe < oe; xe++)
          He[xe] = arguments[xe + 2];
        re.children = He;
      }
      return q(S.type, W, void 0, void 0, pe, re);
    }),
    (Ee.createContext = function (S) {
      return (
        (S = {
          $$typeof: f,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: o, _context: S }),
        S
      );
    }),
    (Ee.createElement = function (S, K, le) {
      var re,
        W = {},
        pe = null;
      if (K != null)
        for (re in (K.key !== void 0 && (pe = "" + K.key), K))
          V.call(K, re) &&
            re !== "key" &&
            re !== "__self" &&
            re !== "__source" &&
            (W[re] = K[re]);
      var oe = arguments.length - 2;
      if (oe === 1) W.children = le;
      else if (1 < oe) {
        for (var He = Array(oe), xe = 0; xe < oe; xe++)
          He[xe] = arguments[xe + 2];
        W.children = He;
      }
      if (S && S.defaultProps)
        for (re in ((oe = S.defaultProps), oe))
          W[re] === void 0 && (W[re] = oe[re]);
      return q(S, pe, void 0, void 0, null, W);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (S) {
      return { $$typeof: m, render: S };
    }),
    (Ee.isValidElement = L),
    (Ee.lazy = function (S) {
      return { $$typeof: v, _payload: { _status: -1, _result: S }, _init: J };
    }),
    (Ee.memo = function (S, K) {
      return { $$typeof: p, type: S, compare: K === void 0 ? null : K };
    }),
    (Ee.startTransition = function (S) {
      var K = U.T,
        le = {};
      U.T = le;
      try {
        var re = S(),
          W = U.S;
        W !== null && W(le, re),
          typeof re == "object" &&
            re !== null &&
            typeof re.then == "function" &&
            re.then(me, ee);
      } catch (pe) {
        ee(pe);
      } finally {
        U.T = K;
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return U.H.useCacheRefresh();
    }),
    (Ee.use = function (S) {
      return U.H.use(S);
    }),
    (Ee.useActionState = function (S, K, le) {
      return U.H.useActionState(S, K, le);
    }),
    (Ee.useCallback = function (S, K) {
      return U.H.useCallback(S, K);
    }),
    (Ee.useContext = function (S) {
      return U.H.useContext(S);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (S, K) {
      return U.H.useDeferredValue(S, K);
    }),
    (Ee.useEffect = function (S, K) {
      return U.H.useEffect(S, K);
    }),
    (Ee.useId = function () {
      return U.H.useId();
    }),
    (Ee.useImperativeHandle = function (S, K, le) {
      return U.H.useImperativeHandle(S, K, le);
    }),
    (Ee.useInsertionEffect = function (S, K) {
      return U.H.useInsertionEffect(S, K);
    }),
    (Ee.useLayoutEffect = function (S, K) {
      return U.H.useLayoutEffect(S, K);
    }),
    (Ee.useMemo = function (S, K) {
      return U.H.useMemo(S, K);
    }),
    (Ee.useOptimistic = function (S, K) {
      return U.H.useOptimistic(S, K);
    }),
    (Ee.useReducer = function (S, K, le) {
      return U.H.useReducer(S, K, le);
    }),
    (Ee.useRef = function (S) {
      return U.H.useRef(S);
    }),
    (Ee.useState = function (S) {
      return U.H.useState(S);
    }),
    (Ee.useSyncExternalStore = function (S, K, le) {
      return U.H.useSyncExternalStore(S, K, le);
    }),
    (Ee.useTransition = function () {
      return U.H.useTransition();
    }),
    (Ee.version = "19.0.0"),
    Ee
  );
}
var Zg;
function Gh() {
  return Zg || ((Zg = 1), (Kd.exports = Kx())), Kd.exports;
}
var N = Gh(),
  $d = { exports: {} },
  eu = {},
  Fd = { exports: {} },
  Pd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kg;
function $x() {
  return (
    Kg ||
      ((Kg = 1),
      (function (u) {
        function l(F, J) {
          var ee = F.length;
          F.push(J);
          e: for (; 0 < ee; ) {
            var me = (ee - 1) >>> 1,
              S = F[me];
            if (0 < s(S, J)) (F[me] = J), (F[ee] = S), (ee = me);
            else break e;
          }
        }
        function a(F) {
          return F.length === 0 ? null : F[0];
        }
        function i(F) {
          if (F.length === 0) return null;
          var J = F[0],
            ee = F.pop();
          if (ee !== J) {
            F[0] = ee;
            e: for (var me = 0, S = F.length, K = S >>> 1; me < K; ) {
              var le = 2 * (me + 1) - 1,
                re = F[le],
                W = le + 1,
                pe = F[W];
              if (0 > s(re, ee))
                W < S && 0 > s(pe, re)
                  ? ((F[me] = pe), (F[W] = ee), (me = W))
                  : ((F[me] = re), (F[le] = ee), (me = le));
              else if (W < S && 0 > s(pe, ee))
                (F[me] = pe), (F[W] = ee), (me = W);
              else break e;
            }
          }
          return J;
        }
        function s(F, J) {
          var ee = F.sortIndex - J.sortIndex;
          return ee !== 0 ? ee : F.id - J.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          u.unstable_now = function () {
            return o.now();
          };
        } else {
          var f = Date,
            m = f.now();
          u.unstable_now = function () {
            return f.now() - m;
          };
        }
        var g = [],
          p = [],
          v = 1,
          b = null,
          x = 3,
          _ = !1,
          w = !1,
          T = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          O = typeof setImmediate < "u" ? setImmediate : null;
        function z(F) {
          for (var J = a(p); J !== null; ) {
            if (J.callback === null) i(p);
            else if (J.startTime <= F)
              i(p), (J.sortIndex = J.expirationTime), l(g, J);
            else break;
            J = a(p);
          }
        }
        function C(F) {
          if (((T = !1), z(F), !w))
            if (a(g) !== null) (w = !0), _e();
            else {
              var J = a(p);
              J !== null && ve(C, J.startTime - F);
            }
        }
        var U = !1,
          V = -1,
          q = 5,
          Y = -1;
        function L() {
          return !(u.unstable_now() - Y < q);
        }
        function G() {
          if (U) {
            var F = u.unstable_now();
            Y = F;
            var J = !0;
            try {
              e: {
                (w = !1), T && ((T = !1), A(V), (V = -1)), (_ = !0);
                var ee = x;
                try {
                  t: {
                    for (
                      z(F), b = a(g);
                      b !== null && !(b.expirationTime > F && L());

                    ) {
                      var me = b.callback;
                      if (typeof me == "function") {
                        (b.callback = null), (x = b.priorityLevel);
                        var S = me(b.expirationTime <= F);
                        if (((F = u.unstable_now()), typeof S == "function")) {
                          (b.callback = S), z(F), (J = !0);
                          break t;
                        }
                        b === a(g) && i(g), z(F);
                      } else i(g);
                      b = a(g);
                    }
                    if (b !== null) J = !0;
                    else {
                      var K = a(p);
                      K !== null && ve(C, K.startTime - F), (J = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (x = ee), (_ = !1);
                }
                J = void 0;
              }
            } finally {
              J ? se() : (U = !1);
            }
          }
        }
        var se;
        if (typeof O == "function")
          se = function () {
            O(G);
          };
        else if (typeof MessageChannel < "u") {
          var I = new MessageChannel(),
            ye = I.port2;
          (I.port1.onmessage = G),
            (se = function () {
              ye.postMessage(null);
            });
        } else
          se = function () {
            E(G, 0);
          };
        function _e() {
          U || ((U = !0), se());
        }
        function ve(F, J) {
          V = E(function () {
            F(u.unstable_now());
          }, J);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (u.unstable_continueExecution = function () {
            w || _ || ((w = !0), _e());
          }),
          (u.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (q = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (u.unstable_getFirstCallbackNode = function () {
            return a(g);
          }),
          (u.unstable_next = function (F) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = x;
            }
            var ee = x;
            x = J;
            try {
              return F();
            } finally {
              x = ee;
            }
          }),
          (u.unstable_pauseExecution = function () {}),
          (u.unstable_requestPaint = function () {}),
          (u.unstable_runWithPriority = function (F, J) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var ee = x;
            x = F;
            try {
              return J();
            } finally {
              x = ee;
            }
          }),
          (u.unstable_scheduleCallback = function (F, J, ee) {
            var me = u.unstable_now();
            switch (
              (typeof ee == "object" && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == "number" && 0 < ee ? me + ee : me))
                : (ee = me),
              F)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = ee + S),
              (F = {
                id: v++,
                callback: J,
                priorityLevel: F,
                startTime: ee,
                expirationTime: S,
                sortIndex: -1,
              }),
              ee > me
                ? ((F.sortIndex = ee),
                  l(p, F),
                  a(g) === null &&
                    F === a(p) &&
                    (T ? (A(V), (V = -1)) : (T = !0), ve(C, ee - me)))
                : ((F.sortIndex = S), l(g, F), w || _ || ((w = !0), _e())),
              F
            );
          }),
          (u.unstable_shouldYield = L),
          (u.unstable_wrapCallback = function (F) {
            var J = x;
            return function () {
              var ee = x;
              x = J;
              try {
                return F.apply(this, arguments);
              } finally {
                x = ee;
              }
            };
          });
      })(Pd)),
    Pd
  );
}
var $g;
function Fx() {
  return $g || (($g = 1), (Fd.exports = $x())), Fd.exports;
}
var Jd = { exports: {} },
  dn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fg;
function Px() {
  if (Fg) return dn;
  Fg = 1;
  var u = Gh();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(l(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function o(g, p, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: v,
    };
  }
  var f = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (dn.createPortal = function (g, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return o(g, p, null, v);
    }),
    (dn.flushSync = function (g) {
      var p = f.T,
        v = i.p;
      try {
        if (((f.T = null), (i.p = 2), g)) return g();
      } finally {
        (f.T = p), (i.p = v), i.d.f();
      }
    }),
    (dn.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        i.d.C(g, p));
    }),
    (dn.prefetchDNS = function (g) {
      typeof g == "string" && i.d.D(g);
    }),
    (dn.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = m(v, p.crossOrigin),
          x = typeof p.integrity == "string" ? p.integrity : void 0,
          _ = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? i.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: _,
            })
          : v === "script" &&
            i.d.X(g, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: _,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (dn.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = m(p.as, p.crossOrigin);
            i.d.M(g, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(g);
    }),
    (dn.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          b = m(v, p.crossOrigin);
        i.d.L(g, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (dn.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var v = m(p.as, p.crossOrigin);
          i.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else i.d.m(g);
    }),
    (dn.requestFormReset = function (g) {
      i.d.r(g);
    }),
    (dn.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (dn.useFormState = function (g, p, v) {
      return f.H.useFormState(g, p, v);
    }),
    (dn.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (dn.version = "19.0.0"),
    dn
  );
}
var Pg;
function Jx() {
  if (Pg) return Jd.exports;
  Pg = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (l) {
        console.error(l);
      }
  }
  return u(), (Jd.exports = Px()), Jd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jg;
function Wx() {
  if (Jg) return eu;
  Jg = 1;
  var u = Fx(),
    l = Gh(),
    a = Jx();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var o = Symbol.for("react.element"),
    f = Symbol.for("react.transitional.element"),
    m = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    v = Symbol.for("react.profiler"),
    b = Symbol.for("react.provider"),
    x = Symbol.for("react.consumer"),
    _ = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    T = Symbol.for("react.suspense"),
    E = Symbol.for("react.suspense_list"),
    A = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    z = Symbol.for("react.offscreen"),
    C = Symbol.for("react.memo_cache_sentinel"),
    U = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (U && e[U]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var q = Symbol.for("react.client.reference");
  function Y(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === q ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case g:
        return "Fragment";
      case m:
        return "Portal";
      case v:
        return "Profiler";
      case p:
        return "StrictMode";
      case T:
        return "Suspense";
      case E:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _:
          return (e.displayName || "Context") + ".Provider";
        case x:
          return (e._context.displayName || "Context") + ".Consumer";
        case w:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case A:
          return (
            (t = e.displayName || null), t !== null ? t : Y(e.type) || "Memo"
          );
        case O:
          (t = e._payload), (e = e._init);
          try {
            return Y(e(t));
          } catch {}
      }
    return null;
  }
  var L = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = Object.assign,
    se,
    I;
  function ye(e) {
    if (se === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (se = (t && t[1]) || ""),
          (I =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      se +
      e +
      I
    );
  }
  var _e = !1;
  function ve(e, t) {
    if (!e || _e) return "";
    _e = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var P = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(P.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(P, []);
                } catch (Q) {
                  var B = Q;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (Q) {
                  B = Q;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                B = Q;
              }
              (P = e()) &&
                typeof P.catch == "function" &&
                P.catch(function () {});
            }
          } catch (Q) {
            if (Q && B && typeof Q.stack == "string") return [Q.stack, B.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var h = r.DetermineComponentFrameRoot(),
        y = h[0],
        j = h[1];
      if (y && j) {
        var R = y.split(`
`),
          D = j.split(`
`);
        for (
          c = r = 0;
          r < R.length && !R[r].includes("DetermineComponentFrameRoot");

        )
          r++;
        for (; c < D.length && !D[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (r === R.length || c === D.length)
          for (
            r = R.length - 1, c = D.length - 1;
            1 <= r && 0 <= c && R[r] !== D[c];

          )
            c--;
        for (; 1 <= r && 0 <= c; r--, c--)
          if (R[r] !== D[c]) {
            if (r !== 1 || c !== 1)
              do
                if ((r--, c--, 0 > c || R[r] !== D[c])) {
                  var Z =
                    `
` + R[r].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Z.includes("<anonymous>") &&
                      (Z = Z.replace("<anonymous>", e.displayName)),
                    Z
                  );
                }
              while (1 <= r && 0 <= c);
            break;
          }
      }
    } finally {
      (_e = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? ye(n) : "";
  }
  function F(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ye(e.type);
      case 16:
        return ye("Lazy");
      case 13:
        return ye("Suspense");
      case 19:
        return ye("SuspenseList");
      case 0:
      case 15:
        return (e = ve(e.type, !1)), e;
      case 11:
        return (e = ve(e.type.render, !1)), e;
      case 1:
        return (e = ve(e.type, !0)), e;
      default:
        return "";
    }
  }
  function J(e) {
    try {
      var t = "";
      do (t += F(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function ee(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function me(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (ee(e) !== e) throw Error(i(188));
  }
  function K(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ee(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var c = n.return;
      if (c === null) break;
      var h = c.alternate;
      if (h === null) {
        if (((r = c.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (c.child === h.child) {
        for (h = c.child; h; ) {
          if (h === n) return S(c), e;
          if (h === r) return S(c), t;
          h = h.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) (n = c), (r = h);
      else {
        for (var y = !1, j = c.child; j; ) {
          if (j === n) {
            (y = !0), (n = c), (r = h);
            break;
          }
          if (j === r) {
            (y = !0), (r = c), (n = h);
            break;
          }
          j = j.sibling;
        }
        if (!y) {
          for (j = h.child; j; ) {
            if (j === n) {
              (y = !0), (n = h), (r = c);
              break;
            }
            if (j === r) {
              (y = !0), (r = h), (n = c);
              break;
            }
            j = j.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function le(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = le(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var re = Array.isArray,
    W = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    pe = { pending: !1, data: null, method: null, action: null },
    oe = [],
    He = -1;
  function xe(e) {
    return { current: e };
  }
  function De(e) {
    0 > He || ((e.current = oe[He]), (oe[He] = null), He--);
  }
  function Ve(e, t) {
    He++, (oe[He] = e.current), (e.current = t);
  }
  var nt = xe(null),
    Mt = xe(null),
    we = xe(null),
    lt = xe(null);
  function Yt(e, t) {
    switch ((Ve(we, t), Ve(Mt, e), Ve(nt, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? yg(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = yg(e)), (t = _g(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    De(nt), Ve(nt, t);
  }
  function Ot() {
    De(nt), De(Mt), De(we);
  }
  function X(e) {
    e.memoizedState !== null && Ve(lt, e);
    var t = nt.current,
      n = _g(t, e.type);
    t !== n && (Ve(Mt, e), Ve(nt, n));
  }
  function Zt(e) {
    Mt.current === e && (De(nt), De(Mt)),
      lt.current === e && (De(lt), ($s._currentValue = pe));
  }
  var Yn = Object.prototype.hasOwnProperty,
    al = u.unstable_scheduleCallback,
    st = u.unstable_cancelCallback,
    Nl = u.unstable_shouldYield,
    Ul = u.unstable_requestPaint,
    Kt = u.unstable_now,
    Dt = u.unstable_getCurrentPriorityLevel,
    Rl = u.unstable_ImmediatePriority,
    ot = u.unstable_UserBlockingPriority,
    rn = u.unstable_NormalPriority,
    Mn = u.unstable_LowPriority,
    rl = u.unstable_IdlePriority,
    va = u.log,
    _t = u.unstable_setDisableYieldValue,
    Hl = null,
    dt = null;
  function Di(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function xn(e) {
    if (
      (typeof va == "function" && _t(e),
      dt && typeof dt.setStrictMode == "function")
    )
      try {
        dt.setStrictMode(Hl, e);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : ii,
    li = Math.log,
    Ne = Math.LN2;
  function ii(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((li(e) / Ne) | 0)) | 0;
  }
  var sn = 128,
    un = 4194304;
  function qt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function sl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      c = e.suspendedLanes,
      h = e.pingedLanes,
      y = e.warmLanes;
    e = e.finishedLanes !== 0;
    var j = n & 134217727;
    return (
      j !== 0
        ? ((n = j & ~c),
          n !== 0
            ? (r = qt(n))
            : ((h &= j),
              h !== 0
                ? (r = qt(h))
                : e || ((y = j & ~y), y !== 0 && (r = qt(y)))))
        : ((j = n & ~c),
          j !== 0
            ? (r = qt(j))
            : h !== 0
            ? (r = qt(h))
            : e || ((y = n & ~y), y !== 0 && (r = qt(y)))),
      r === 0
        ? 0
        : t !== 0 &&
          t !== r &&
          (t & c) === 0 &&
          ((c = r & -r),
          (y = t & -t),
          c >= y || (c === 32 && (y & 4194176) !== 0))
        ? t
        : r
    );
  }
  function ul(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Al(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zi() {
    var e = sn;
    return (sn <<= 1), (sn & 4194176) === 0 && (sn = 128), e;
  }
  function je() {
    var e = un;
    return (un <<= 1), (un & 62914560) === 0 && (un = 4194304), e;
  }
  function he(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ze(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function te(e, t, n, r, c, h) {
    var y = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var j = e.entanglements,
      R = e.expirationTimes,
      D = e.hiddenUpdates;
    for (n = y & ~n; 0 < n; ) {
      var Z = 31 - xt(n),
        P = 1 << Z;
      (j[Z] = 0), (R[Z] = -1);
      var B = D[Z];
      if (B !== null)
        for (D[Z] = null, Z = 0; Z < B.length; Z++) {
          var Q = B[Z];
          Q !== null && (Q.lane &= -536870913);
        }
      n &= ~P;
    }
    r !== 0 && be(e, r, 0),
      h !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(y & ~t));
  }
  function be(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - xt(t);
    (e.entangledLanes |= t),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 4194218));
  }
  function fe(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - xt(n),
        c = 1 << r;
      (c & t) | (e[r] & t) && (e[r] |= t), (n &= ~c);
    }
  }
  function Se(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Et() {
    var e = W.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ug(e.type));
  }
  function ke(e, t) {
    var n = W.p;
    try {
      return (W.p = e), t();
    } finally {
      W.p = n;
    }
  }
  var Pe = Math.random().toString(36).slice(2),
    Qe = "__reactFiber$" + Pe,
    Le = "__reactProps$" + Pe,
    $e = "__reactContainer$" + Pe,
    Fe = "__reactEvents$" + Pe,
    qn = "__reactListeners$" + Pe,
    ut = "__reactHandles$" + Pe,
    cn = "__reactResources$" + Pe,
    on = "__reactMarker$" + Pe;
  function Nt(e) {
    delete e[Qe], delete e[Le], delete e[Fe], delete e[qn], delete e[ut];
  }
  function ct(e) {
    var t = e[Qe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[$e] || n[Qe])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Sg(e); e !== null; ) {
            if ((n = e[Qe])) return n;
            e = Sg(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ht(e) {
    if ((e = e[Qe] || e[$e])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Xn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Cl(e) {
    var t = e[cn];
    return (
      t ||
        (t = e[cn] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Be(e) {
    e[on] = !0;
  }
  var bt = new Set(),
    Gn = {};
  function Ml(e, t) {
    ai(e, t), ai(e + "Capture", t);
  }
  function ai(e, t) {
    for (Gn[e] = t, e = 0; e < t.length; e++) bt.add(t[e]);
  }
  var bn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    cl = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ki = {},
    ya = {};
  function _a(e) {
    return Yn.call(ya, e)
      ? !0
      : Yn.call(ki, e)
      ? !1
      : cl.test(e)
      ? (ya[e] = !0)
      : ((ki[e] = !0), !1);
  }
  function Xu(e, t, n) {
    if (_a(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Gu(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function ri(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + r);
    }
  }
  function ol(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function bm(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function By(e) {
    var t = bm(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var c = n.get,
        h = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            (r = "" + y), h.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (y) {
            r = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Vu(e) {
    e._valueTracker || (e._valueTracker = By(e));
  }
  function Sm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = bm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Qu(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Yy = /[\n"\\]/g;
  function fl(e) {
    return e.replace(Yy, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Go(e, t, n, r, c, h, y, j) {
    (e.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.type = y)
        : e.removeAttribute("type"),
      t != null
        ? y === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + ol(t))
          : e.value !== "" + ol(t) && (e.value = "" + ol(t))
        : (y !== "submit" && y !== "reset") || e.removeAttribute("value"),
      t != null
        ? Vo(e, y, ol(t))
        : n != null
        ? Vo(e, y, ol(n))
        : r != null && e.removeAttribute("value"),
      c == null && h != null && (e.defaultChecked = !!h),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      j != null &&
      typeof j != "function" &&
      typeof j != "symbol" &&
      typeof j != "boolean"
        ? (e.name = "" + ol(j))
        : e.removeAttribute("name");
  }
  function jm(e, t, n, r, c, h, y, j) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (e.type = h),
      t != null || n != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || t != null)) return;
      (n = n != null ? "" + ol(n) : ""),
        (t = t != null ? "" + ol(t) : n),
        j || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = r ?? c),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (e.checked = j ? e.checked : !!r),
      (e.defaultChecked = !!r),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (e.name = y);
  }
  function Vo(e, t, n) {
    (t === "number" && Qu(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function sr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < n.length; c++) t["$" + n[c]] = !0;
      for (n = 0; n < e.length; n++)
        (c = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== c && (e[n].selected = c),
          c && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ol(n), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === n) {
          (e[c].selected = !0), r && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Tm(e, t, n) {
    if (
      t != null &&
      ((t = "" + ol(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + ol(n) : "";
  }
  function wm(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(i(92));
        if (re(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        n = r;
      }
      n == null && (n = ""), (t = n);
    }
    (n = ol(t)),
      (e.defaultValue = n),
      (r = e.textContent),
      r === n && r !== "" && r !== null && (e.value = r);
  }
  function ur(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Em(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? r
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : r
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || qy.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function Nm(e, t, n) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), n != null)) {
      for (var r in n)
        !n.hasOwnProperty(r) ||
          (t != null && t.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? e.setProperty(r, "")
            : r === "float"
            ? (e.cssFloat = "")
            : (e[r] = ""));
      for (var c in t)
        (r = t[c]), t.hasOwnProperty(c) && n[c] !== r && Em(e, c, r);
    } else for (var h in t) t.hasOwnProperty(h) && Em(e, h, t[h]);
  }
  function Qo(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xy = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Gy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zu(e) {
    return Gy.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Zo = null;
  function Ko(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var cr = null,
    or = null;
  function Rm(e) {
    var t = ht(e);
    if (t && (e = t.stateNode)) {
      var n = e[Le] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Go(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + fl("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var c = r[Le] || null;
                if (!c) throw Error(i(90));
                Go(
                  r,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (r = n[t]), r.form === e.form && Sm(r);
          }
          break e;
        case "textarea":
          Tm(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && sr(e, !!n.multiple, t, !1);
      }
    }
  }
  var $o = !1;
  function Am(e, t, n) {
    if ($o) return e(t, n);
    $o = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (
        (($o = !1),
        (cr !== null || or !== null) &&
          (Ac(), cr && ((t = cr), (e = or), (or = cr = null), Rm(t), e)))
      )
        for (t = 0; t < e.length; t++) Rm(e[t]);
    }
  }
  function us(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = n[Le] || null;
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Fo = !1;
  if (bn)
    try {
      var cs = {};
      Object.defineProperty(cs, "passive", {
        get: function () {
          Fo = !0;
        },
      }),
        window.addEventListener("test", cs, cs),
        window.removeEventListener("test", cs, cs);
    } catch {
      Fo = !1;
    }
  var Li = null,
    Po = null,
    Ku = null;
  function Cm() {
    if (Ku) return Ku;
    var e,
      t = Po,
      n = t.length,
      r,
      c = "value" in Li ? Li.value : Li.textContent,
      h = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++);
    var y = n - e;
    for (r = 1; r <= y && t[n - r] === c[h - r]; r++);
    return (Ku = c.slice(e, 1 < r ? 1 - r : void 0));
  }
  function $u(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fu() {
    return !0;
  }
  function Mm() {
    return !1;
  }
  function On(e) {
    function t(n, r, c, h, y) {
      (this._reactName = n),
        (this._targetInst = c),
        (this.type = r),
        (this.nativeEvent = h),
        (this.target = y),
        (this.currentTarget = null);
      for (var j in e)
        e.hasOwnProperty(j) && ((n = e[j]), (this[j] = n ? n(h) : h[j]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? Fu
          : Mm),
        (this.isPropagationStopped = Mm),
        this
      );
    }
    return (
      G(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Fu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Fu));
        },
        persist: function () {},
        isPersistent: Fu,
      }),
      t
    );
  }
  var xa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pu = On(xa),
    os = G({}, xa, { view: 0, detail: 0 }),
    Vy = On(os),
    Jo,
    Wo,
    fs,
    Ju = G({}, os, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ef,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== fs &&
              (fs && e.type === "mousemove"
                ? ((Jo = e.screenX - fs.screenX), (Wo = e.screenY - fs.screenY))
                : (Wo = Jo = 0),
              (fs = e)),
            Jo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Wo;
      },
    }),
    Om = On(Ju),
    Qy = G({}, Ju, { dataTransfer: 0 }),
    Zy = On(Qy),
    Ky = G({}, os, { relatedTarget: 0 }),
    Io = On(Ky),
    $y = G({}, xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fy = On($y),
    Py = G({}, xa, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Jy = On(Py),
    Wy = G({}, xa, { data: 0 }),
    Dm = On(Wy),
    Iy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    e_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    t_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function n_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = t_[e])
      ? !!t[e]
      : !1;
  }
  function ef() {
    return n_;
  }
  var l_ = G({}, os, {
      key: function (e) {
        if (e.key) {
          var t = Iy[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = $u(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? e_[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ef,
      charCode: function (e) {
        return e.type === "keypress" ? $u(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? $u(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    i_ = On(l_),
    a_ = G({}, Ju, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zm = On(a_),
    r_ = G({}, os, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ef,
    }),
    s_ = On(r_),
    u_ = G({}, xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    c_ = On(u_),
    o_ = G({}, Ju, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    f_ = On(o_),
    d_ = G({}, xa, { newState: 0, oldState: 0 }),
    h_ = On(d_),
    m_ = [9, 13, 27, 32],
    tf = bn && "CompositionEvent" in window,
    ds = null;
  bn && "documentMode" in document && (ds = document.documentMode);
  var p_ = bn && "TextEvent" in window && !ds,
    km = bn && (!tf || (ds && 8 < ds && 11 >= ds)),
    Lm = " ",
    Um = !1;
  function Hm(e, t) {
    switch (e) {
      case "keyup":
        return m_.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var fr = !1;
  function g_(e, t) {
    switch (e) {
      case "compositionend":
        return Bm(t);
      case "keypress":
        return t.which !== 32 ? null : ((Um = !0), Lm);
      case "textInput":
        return (e = t.data), e === Lm && Um ? null : e;
      default:
        return null;
    }
  }
  function v_(e, t) {
    if (fr)
      return e === "compositionend" || (!tf && Hm(e, t))
        ? ((e = Cm()), (Ku = Po = Li = null), (fr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return km && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var y_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ym(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!y_[e.type] : t === "textarea";
  }
  function qm(e, t, n, r) {
    cr ? (or ? or.push(r) : (or = [r])) : (cr = r),
      (t = zc(t, "onChange")),
      0 < t.length &&
        ((n = new Pu("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var hs = null,
    ms = null;
  function __(e) {
    hg(e, 0);
  }
  function Wu(e) {
    var t = Xn(e);
    if (Sm(t)) return e;
  }
  function Xm(e, t) {
    if (e === "change") return t;
  }
  var Gm = !1;
  if (bn) {
    var nf;
    if (bn) {
      var lf = "oninput" in document;
      if (!lf) {
        var Vm = document.createElement("div");
        Vm.setAttribute("oninput", "return;"),
          (lf = typeof Vm.oninput == "function");
      }
      nf = lf;
    } else nf = !1;
    Gm = nf && (!document.documentMode || 9 < document.documentMode);
  }
  function Qm() {
    hs && (hs.detachEvent("onpropertychange", Zm), (ms = hs = null));
  }
  function Zm(e) {
    if (e.propertyName === "value" && Wu(ms)) {
      var t = [];
      qm(t, ms, e, Ko(e)), Am(__, t);
    }
  }
  function x_(e, t, n) {
    e === "focusin"
      ? (Qm(), (hs = t), (ms = n), hs.attachEvent("onpropertychange", Zm))
      : e === "focusout" && Qm();
  }
  function b_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wu(ms);
  }
  function S_(e, t) {
    if (e === "click") return Wu(t);
  }
  function j_(e, t) {
    if (e === "input" || e === "change") return Wu(t);
  }
  function T_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Vn = typeof Object.is == "function" ? Object.is : T_;
  function ps(e, t) {
    if (Vn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var c = n[r];
      if (!Yn.call(t, c) || !Vn(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Km(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $m(e, t) {
    var n = Km(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Km(n);
    }
  }
  function Fm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Fm(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Pm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Qu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Qu(e.document);
    }
    return t;
  }
  function af(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function w_(e, t) {
    var n = Pm(t);
    t = e.focusedElem;
    var r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Fm(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && af(t)) {
        if (
          ((e = r.start),
          (n = r.end),
          n === void 0 && (n = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(n, t.value.length));
        else if (
          ((n = ((e = t.ownerDocument || document) && e.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var c = t.textContent.length,
            h = Math.min(r.start, c);
          (r = r.end === void 0 ? h : Math.min(r.end, c)),
            !n.extend && h > r && ((c = r), (r = h), (h = c)),
            (c = $m(t, h));
          var y = $m(t, r);
          c &&
            y &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== c.node ||
              n.anchorOffset !== c.offset ||
              n.focusNode !== y.node ||
              n.focusOffset !== y.offset) &&
            ((e = e.createRange()),
            e.setStart(c.node, c.offset),
            n.removeAllRanges(),
            h > r
              ? (n.addRange(e), n.extend(y.node, y.offset))
              : (e.setEnd(y.node, y.offset), n.addRange(e)));
        }
      }
      for (e = [], n = t; (n = n.parentNode); )
        n.nodeType === 1 &&
          e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (n = e[t]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var E_ = bn && "documentMode" in document && 11 >= document.documentMode,
    dr = null,
    rf = null,
    gs = null,
    sf = !1;
  function Jm(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sf ||
      dr == null ||
      dr !== Qu(r) ||
      ((r = dr),
      "selectionStart" in r && af(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (gs && ps(gs, r)) ||
        ((gs = r),
        (r = zc(rf, "onSelect")),
        0 < r.length &&
          ((t = new Pu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = dr))));
  }
  function ba(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hr = {
      animationend: ba("Animation", "AnimationEnd"),
      animationiteration: ba("Animation", "AnimationIteration"),
      animationstart: ba("Animation", "AnimationStart"),
      transitionrun: ba("Transition", "TransitionRun"),
      transitionstart: ba("Transition", "TransitionStart"),
      transitioncancel: ba("Transition", "TransitionCancel"),
      transitionend: ba("Transition", "TransitionEnd"),
    },
    uf = {},
    Wm = {};
  bn &&
    ((Wm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hr.animationend.animation,
      delete hr.animationiteration.animation,
      delete hr.animationstart.animation),
    "TransitionEvent" in window || delete hr.transitionend.transition);
  function Sa(e) {
    if (uf[e]) return uf[e];
    if (!hr[e]) return e;
    var t = hr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Wm) return (uf[e] = t[n]);
    return e;
  }
  var Im = Sa("animationend"),
    e0 = Sa("animationiteration"),
    t0 = Sa("animationstart"),
    N_ = Sa("transitionrun"),
    R_ = Sa("transitionstart"),
    A_ = Sa("transitioncancel"),
    n0 = Sa("transitionend"),
    l0 = new Map(),
    i0 =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Ol(e, t) {
    l0.set(e, t), Ml(t, [e]);
  }
  var dl = [],
    mr = 0,
    cf = 0;
  function Iu() {
    for (var e = mr, t = (cf = mr = 0); t < e; ) {
      var n = dl[t];
      dl[t++] = null;
      var r = dl[t];
      dl[t++] = null;
      var c = dl[t];
      dl[t++] = null;
      var h = dl[t];
      if (((dl[t++] = null), r !== null && c !== null)) {
        var y = r.pending;
        y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)),
          (r.pending = c);
      }
      h !== 0 && a0(n, c, h);
    }
  }
  function ec(e, t, n, r) {
    (dl[mr++] = e),
      (dl[mr++] = t),
      (dl[mr++] = n),
      (dl[mr++] = r),
      (cf |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r);
  }
  function of(e, t, n, r) {
    return ec(e, t, n, r), tc(e);
  }
  function Ui(e, t) {
    return ec(e, null, null, t), tc(e);
  }
  function a0(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var c = !1, h = e.return; h !== null; )
      (h.childLanes |= n),
        (r = h.alternate),
        r !== null && (r.childLanes |= n),
        h.tag === 22 &&
          ((e = h.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = h),
        (h = h.return);
    c &&
      t !== null &&
      e.tag === 3 &&
      ((h = e.stateNode),
      (c = 31 - xt(n)),
      (h = h.hiddenUpdates),
      (e = h[c]),
      e === null ? (h[c] = [t]) : e.push(t),
      (t.lane = n | 536870912));
  }
  function tc(e) {
    if (50 < qs) throw ((qs = 0), (gd = null), Error(i(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var pr = {},
    r0 = new WeakMap();
  function hl(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = r0.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: J(t) }), r0.set(e, t), t);
    }
    return { value: e, source: t, stack: J(t) };
  }
  var gr = [],
    vr = 0,
    nc = null,
    lc = 0,
    ml = [],
    pl = 0,
    ja = null,
    si = 1,
    ui = "";
  function Ta(e, t) {
    (gr[vr++] = lc), (gr[vr++] = nc), (nc = e), (lc = t);
  }
  function s0(e, t, n) {
    (ml[pl++] = si), (ml[pl++] = ui), (ml[pl++] = ja), (ja = e);
    var r = si;
    e = ui;
    var c = 32 - xt(r) - 1;
    (r &= ~(1 << c)), (n += 1);
    var h = 32 - xt(t) + c;
    if (30 < h) {
      var y = c - (c % 5);
      (h = (r & ((1 << y) - 1)).toString(32)),
        (r >>= y),
        (c -= y),
        (si = (1 << (32 - xt(t) + c)) | (n << c) | r),
        (ui = h + e);
    } else (si = (1 << h) | (n << c) | r), (ui = e);
  }
  function ff(e) {
    e.return !== null && (Ta(e, 1), s0(e, 1, 0));
  }
  function df(e) {
    for (; e === nc; )
      (nc = gr[--vr]), (gr[vr] = null), (lc = gr[--vr]), (gr[vr] = null);
    for (; e === ja; )
      (ja = ml[--pl]),
        (ml[pl] = null),
        (ui = ml[--pl]),
        (ml[pl] = null),
        (si = ml[--pl]),
        (ml[pl] = null);
  }
  var Sn = null,
    en = null,
    Ze = !1,
    Dl = null,
    Bl = !1,
    hf = Error(i(519));
  function wa(e) {
    var t = Error(i(418, ""));
    throw (_s(hl(t, e)), hf);
  }
  function u0(e) {
    var t = e.stateNode,
      n = e.type,
      r = e.memoizedProps;
    switch (((t[Qe] = e), (t[Le] = r), n)) {
      case "dialog":
        Ye("cancel", t), Ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Gs.length; n++) Ye(Gs[n], t);
        break;
      case "source":
        Ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ye("error", t), Ye("load", t);
        break;
      case "details":
        Ye("toggle", t);
        break;
      case "input":
        Ye("invalid", t),
          jm(
            t,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0
          ),
          Vu(t);
        break;
      case "select":
        Ye("invalid", t);
        break;
      case "textarea":
        Ye("invalid", t), wm(t, r.value, r.defaultValue, r.children), Vu(t);
    }
    (n = r.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      r.suppressHydrationWarning === !0 ||
      vg(t.textContent, n)
        ? (r.popover != null && (Ye("beforetoggle", t), Ye("toggle", t)),
          r.onScroll != null && Ye("scroll", t),
          r.onScrollEnd != null && Ye("scrollend", t),
          r.onClick != null && (t.onclick = kc),
          (t = !0))
        : (t = !1),
      t || wa(e);
  }
  function c0(e) {
    for (Sn = e.return; Sn; )
      switch (Sn.tag) {
        case 3:
        case 27:
          Bl = !0;
          return;
        case 5:
        case 13:
          Bl = !1;
          return;
        default:
          Sn = Sn.return;
      }
  }
  function vs(e) {
    if (e !== Sn) return !1;
    if (!Ze) return c0(e), (Ze = !0), !1;
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Dd(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && en && wa(e),
      c0(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                en = kl(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        en = null;
      }
    } else en = Sn ? kl(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ys() {
    (en = Sn = null), (Ze = !1);
  }
  function _s(e) {
    Dl === null ? (Dl = [e]) : Dl.push(e);
  }
  var xs = Error(i(460)),
    o0 = Error(i(474)),
    mf = { then: function () {} };
  function f0(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ic() {}
  function d0(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ic, ic), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === xs ? Error(i(483)) : e);
      default:
        if (typeof t.status == "string") t.then(ic, ic);
        else {
          if (((e = it), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (r) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "fulfilled"), (c.value = r);
                }
              },
              function (r) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "rejected"), (c.reason = r);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === xs ? Error(i(483)) : e);
        }
        throw ((bs = t), xs);
    }
  }
  var bs = null;
  function h0() {
    if (bs === null) throw Error(i(459));
    var e = bs;
    return (bs = null), e;
  }
  var yr = null,
    Ss = 0;
  function ac(e) {
    var t = Ss;
    return (Ss += 1), yr === null && (yr = []), d0(yr, e, t);
  }
  function js(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function rc(e, t) {
    throw t.$$typeof === o
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function m0(e) {
    var t = e._init;
    return t(e._payload);
  }
  function p0(e) {
    function t(k, M) {
      if (e) {
        var H = k.deletions;
        H === null ? ((k.deletions = [M]), (k.flags |= 16)) : H.push(M);
      }
    }
    function n(k, M) {
      if (!e) return null;
      for (; M !== null; ) t(k, M), (M = M.sibling);
      return null;
    }
    function r(k) {
      for (var M = new Map(); k !== null; )
        k.key !== null ? M.set(k.key, k) : M.set(k.index, k), (k = k.sibling);
      return M;
    }
    function c(k, M) {
      return (k = Fi(k, M)), (k.index = 0), (k.sibling = null), k;
    }
    function h(k, M, H) {
      return (
        (k.index = H),
        e
          ? ((H = k.alternate),
            H !== null
              ? ((H = H.index), H < M ? ((k.flags |= 33554434), M) : H)
              : ((k.flags |= 33554434), M))
          : ((k.flags |= 1048576), M)
      );
    }
    function y(k) {
      return e && k.alternate === null && (k.flags |= 33554434), k;
    }
    function j(k, M, H, $) {
      return M === null || M.tag !== 6
        ? ((M = ud(H, k.mode, $)), (M.return = k), M)
        : ((M = c(M, H)), (M.return = k), M);
    }
    function R(k, M, H, $) {
      var ae = H.type;
      return ae === g
        ? Z(k, M, H.props.children, $, H.key)
        : M !== null &&
          (M.elementType === ae ||
            (typeof ae == "object" &&
              ae !== null &&
              ae.$$typeof === O &&
              m0(ae) === M.type))
        ? ((M = c(M, H.props)), js(M, H), (M.return = k), M)
        : ((M = Tc(H.type, H.key, H.props, null, k.mode, $)),
          js(M, H),
          (M.return = k),
          M);
    }
    function D(k, M, H, $) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== H.containerInfo ||
        M.stateNode.implementation !== H.implementation
        ? ((M = cd(H, k.mode, $)), (M.return = k), M)
        : ((M = c(M, H.children || [])), (M.return = k), M);
    }
    function Z(k, M, H, $, ae) {
      return M === null || M.tag !== 7
        ? ((M = ka(H, k.mode, $, ae)), (M.return = k), M)
        : ((M = c(M, H)), (M.return = k), M);
    }
    function P(k, M, H) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (M = ud("" + M, k.mode, H)), (M.return = k), M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case f:
            return (
              (H = Tc(M.type, M.key, M.props, null, k.mode, H)),
              js(H, M),
              (H.return = k),
              H
            );
          case m:
            return (M = cd(M, k.mode, H)), (M.return = k), M;
          case O:
            var $ = M._init;
            return (M = $(M._payload)), P(k, M, H);
        }
        if (re(M) || V(M))
          return (M = ka(M, k.mode, H, null)), (M.return = k), M;
        if (typeof M.then == "function") return P(k, ac(M), H);
        if (M.$$typeof === _) return P(k, bc(k, M), H);
        rc(k, M);
      }
      return null;
    }
    function B(k, M, H, $) {
      var ae = M !== null ? M.key : null;
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return ae !== null ? null : j(k, M, "" + H, $);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case f:
            return H.key === ae ? R(k, M, H, $) : null;
          case m:
            return H.key === ae ? D(k, M, H, $) : null;
          case O:
            return (ae = H._init), (H = ae(H._payload)), B(k, M, H, $);
        }
        if (re(H) || V(H)) return ae !== null ? null : Z(k, M, H, $, null);
        if (typeof H.then == "function") return B(k, M, ac(H), $);
        if (H.$$typeof === _) return B(k, M, bc(k, H), $);
        rc(k, H);
      }
      return null;
    }
    function Q(k, M, H, $, ae) {
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return (k = k.get(H) || null), j(M, k, "" + $, ae);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case f:
            return (
              (k = k.get($.key === null ? H : $.key) || null), R(M, k, $, ae)
            );
          case m:
            return (
              (k = k.get($.key === null ? H : $.key) || null), D(M, k, $, ae)
            );
          case O:
            var Ce = $._init;
            return ($ = Ce($._payload)), Q(k, M, H, $, ae);
        }
        if (re($) || V($)) return (k = k.get(H) || null), Z(M, k, $, ae, null);
        if (typeof $.then == "function") return Q(k, M, H, ac($), ae);
        if ($.$$typeof === _) return Q(k, M, H, bc(M, $), ae);
        rc(M, $);
      }
      return null;
    }
    function ue(k, M, H, $) {
      for (
        var ae = null, Ce = null, ce = M, ge = (M = 0), Pt = null;
        ce !== null && ge < H.length;
        ge++
      ) {
        ce.index > ge ? ((Pt = ce), (ce = null)) : (Pt = ce.sibling);
        var Ke = B(k, ce, H[ge], $);
        if (Ke === null) {
          ce === null && (ce = Pt);
          break;
        }
        e && ce && Ke.alternate === null && t(k, ce),
          (M = h(Ke, M, ge)),
          Ce === null ? (ae = Ke) : (Ce.sibling = Ke),
          (Ce = Ke),
          (ce = Pt);
      }
      if (ge === H.length) return n(k, ce), Ze && Ta(k, ge), ae;
      if (ce === null) {
        for (; ge < H.length; ge++)
          (ce = P(k, H[ge], $)),
            ce !== null &&
              ((M = h(ce, M, ge)),
              Ce === null ? (ae = ce) : (Ce.sibling = ce),
              (Ce = ce));
        return Ze && Ta(k, ge), ae;
      }
      for (ce = r(ce); ge < H.length; ge++)
        (Pt = Q(ce, k, ge, H[ge], $)),
          Pt !== null &&
            (e &&
              Pt.alternate !== null &&
              ce.delete(Pt.key === null ? ge : Pt.key),
            (M = h(Pt, M, ge)),
            Ce === null ? (ae = Pt) : (Ce.sibling = Pt),
            (Ce = Pt));
      return (
        e &&
          ce.forEach(function (na) {
            return t(k, na);
          }),
        Ze && Ta(k, ge),
        ae
      );
    }
    function Te(k, M, H, $) {
      if (H == null) throw Error(i(151));
      for (
        var ae = null,
          Ce = null,
          ce = M,
          ge = (M = 0),
          Pt = null,
          Ke = H.next();
        ce !== null && !Ke.done;
        ge++, Ke = H.next()
      ) {
        ce.index > ge ? ((Pt = ce), (ce = null)) : (Pt = ce.sibling);
        var na = B(k, ce, Ke.value, $);
        if (na === null) {
          ce === null && (ce = Pt);
          break;
        }
        e && ce && na.alternate === null && t(k, ce),
          (M = h(na, M, ge)),
          Ce === null ? (ae = na) : (Ce.sibling = na),
          (Ce = na),
          (ce = Pt);
      }
      if (Ke.done) return n(k, ce), Ze && Ta(k, ge), ae;
      if (ce === null) {
        for (; !Ke.done; ge++, Ke = H.next())
          (Ke = P(k, Ke.value, $)),
            Ke !== null &&
              ((M = h(Ke, M, ge)),
              Ce === null ? (ae = Ke) : (Ce.sibling = Ke),
              (Ce = Ke));
        return Ze && Ta(k, ge), ae;
      }
      for (ce = r(ce); !Ke.done; ge++, Ke = H.next())
        (Ke = Q(ce, k, ge, Ke.value, $)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              ce.delete(Ke.key === null ? ge : Ke.key),
            (M = h(Ke, M, ge)),
            Ce === null ? (ae = Ke) : (Ce.sibling = Ke),
            (Ce = Ke));
      return (
        e &&
          ce.forEach(function (Gx) {
            return t(k, Gx);
          }),
        Ze && Ta(k, ge),
        ae
      );
    }
    function Tt(k, M, H, $) {
      if (
        (typeof H == "object" &&
          H !== null &&
          H.type === g &&
          H.key === null &&
          (H = H.props.children),
        typeof H == "object" && H !== null)
      ) {
        switch (H.$$typeof) {
          case f:
            e: {
              for (var ae = H.key; M !== null; ) {
                if (M.key === ae) {
                  if (((ae = H.type), ae === g)) {
                    if (M.tag === 7) {
                      n(k, M.sibling),
                        ($ = c(M, H.props.children)),
                        ($.return = k),
                        (k = $);
                      break e;
                    }
                  } else if (
                    M.elementType === ae ||
                    (typeof ae == "object" &&
                      ae !== null &&
                      ae.$$typeof === O &&
                      m0(ae) === M.type)
                  ) {
                    n(k, M.sibling),
                      ($ = c(M, H.props)),
                      js($, H),
                      ($.return = k),
                      (k = $);
                    break e;
                  }
                  n(k, M);
                  break;
                } else t(k, M);
                M = M.sibling;
              }
              H.type === g
                ? (($ = ka(H.props.children, k.mode, $, H.key)),
                  ($.return = k),
                  (k = $))
                : (($ = Tc(H.type, H.key, H.props, null, k.mode, $)),
                  js($, H),
                  ($.return = k),
                  (k = $));
            }
            return y(k);
          case m:
            e: {
              for (ae = H.key; M !== null; ) {
                if (M.key === ae)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === H.containerInfo &&
                    M.stateNode.implementation === H.implementation
                  ) {
                    n(k, M.sibling),
                      ($ = c(M, H.children || [])),
                      ($.return = k),
                      (k = $);
                    break e;
                  } else {
                    n(k, M);
                    break;
                  }
                else t(k, M);
                M = M.sibling;
              }
              ($ = cd(H, k.mode, $)), ($.return = k), (k = $);
            }
            return y(k);
          case O:
            return (ae = H._init), (H = ae(H._payload)), Tt(k, M, H, $);
        }
        if (re(H)) return ue(k, M, H, $);
        if (V(H)) {
          if (((ae = V(H)), typeof ae != "function")) throw Error(i(150));
          return (H = ae.call(H)), Te(k, M, H, $);
        }
        if (typeof H.then == "function") return Tt(k, M, ac(H), $);
        if (H.$$typeof === _) return Tt(k, M, bc(k, H), $);
        rc(k, H);
      }
      return (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
        ? ((H = "" + H),
          M !== null && M.tag === 6
            ? (n(k, M.sibling), ($ = c(M, H)), ($.return = k), (k = $))
            : (n(k, M), ($ = ud(H, k.mode, $)), ($.return = k), (k = $)),
          y(k))
        : n(k, M);
    }
    return function (k, M, H, $) {
      try {
        Ss = 0;
        var ae = Tt(k, M, H, $);
        return (yr = null), ae;
      } catch (ce) {
        if (ce === xs) throw ce;
        var Ce = _l(29, ce, null, k.mode);
        return (Ce.lanes = $), (Ce.return = k), Ce;
      } finally {
      }
    };
  }
  var Ea = p0(!0),
    g0 = p0(!1),
    _r = xe(null),
    sc = xe(0);
  function v0(e, t) {
    (e = _i), Ve(sc, e), Ve(_r, t), (_i = e | t.baseLanes);
  }
  function pf() {
    Ve(sc, _i), Ve(_r, _r.current);
  }
  function gf() {
    (_i = sc.current), De(_r), De(sc);
  }
  var gl = xe(null),
    Yl = null;
  function Hi(e) {
    var t = e.alternate;
    Ve(Xt, Xt.current & 1),
      Ve(gl, e),
      Yl === null &&
        (t === null || _r.current !== null || t.memoizedState !== null) &&
        (Yl = e);
  }
  function y0(e) {
    if (e.tag === 22) {
      if ((Ve(Xt, Xt.current), Ve(gl, e), Yl === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Yl = e);
      }
    } else Bi();
  }
  function Bi() {
    Ve(Xt, Xt.current), Ve(gl, gl.current);
  }
  function ci(e) {
    De(gl), Yl === e && (Yl = null), De(Xt);
  }
  var Xt = xe(0);
  function uc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var C_ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    M_ = u.unstable_scheduleCallback,
    O_ = u.unstable_NormalPriority,
    Gt = {
      $$typeof: _,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function vf() {
    return { controller: new C_(), data: new Map(), refCount: 0 };
  }
  function Ts(e) {
    e.refCount--,
      e.refCount === 0 &&
        M_(O_, function () {
          e.controller.abort();
        });
  }
  var ws = null,
    yf = 0,
    xr = 0,
    br = null;
  function D_(e, t) {
    if (ws === null) {
      var n = (ws = []);
      (yf = 0),
        (xr = Td()),
        (br = {
          status: "pending",
          value: void 0,
          then: function (r) {
            n.push(r);
          },
        });
    }
    return yf++, t.then(_0, _0), t;
  }
  function _0() {
    if (--yf === 0 && ws !== null) {
      br !== null && (br.status = "fulfilled");
      var e = ws;
      (ws = null), (xr = 0), (br = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function z_(e, t) {
    var n = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          n.push(c);
        },
      };
    return (
      e.then(
        function () {
          (r.status = "fulfilled"), (r.value = t);
          for (var c = 0; c < n.length; c++) (0, n[c])(t);
        },
        function (c) {
          for (r.status = "rejected", r.reason = c, c = 0; c < n.length; c++)
            (0, n[c])(void 0);
        }
      ),
      r
    );
  }
  var x0 = L.S;
  L.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      D_(e, t),
      x0 !== null && x0(e, t);
  };
  var Na = xe(null);
  function _f() {
    var e = Na.current;
    return e !== null ? e : it.pooledCache;
  }
  function cc(e, t) {
    t === null ? Ve(Na, Na.current) : Ve(Na, t.pool);
  }
  function b0() {
    var e = _f();
    return e === null ? null : { parent: Gt._currentValue, pool: e };
  }
  var Yi = 0,
    Re = null,
    We = null,
    zt = null,
    oc = !1,
    Sr = !1,
    Ra = !1,
    fc = 0,
    Es = 0,
    jr = null,
    k_ = 0;
  function Rt() {
    throw Error(i(321));
  }
  function xf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Vn(e[n], t[n])) return !1;
    return !0;
  }
  function bf(e, t, n, r, c, h) {
    return (
      (Yi = h),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? Aa : qi),
      (Ra = !1),
      (h = n(r, c)),
      (Ra = !1),
      Sr && (h = j0(t, n, r, c)),
      S0(e),
      h
    );
  }
  function S0(e) {
    L.H = ql;
    var t = We !== null && We.next !== null;
    if (((Yi = 0), (zt = We = Re = null), (oc = !1), (Es = 0), (jr = null), t))
      throw Error(i(300));
    e === null ||
      $t ||
      ((e = e.dependencies), e !== null && xc(e) && ($t = !0));
  }
  function j0(e, t, n, r) {
    Re = e;
    var c = 0;
    do {
      if ((Sr && (jr = null), (Es = 0), (Sr = !1), 25 <= c))
        throw Error(i(301));
      if (((c += 1), (zt = We = null), e.updateQueue != null)) {
        var h = e.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (L.H = Ca), (h = t(n, r));
    } while (Sr);
    return h;
  }
  function L_() {
    var e = L.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ns(t) : t),
      (e = e.useState()[0]),
      (We !== null ? We.memoizedState : null) !== e && (Re.flags |= 1024),
      t
    );
  }
  function Sf() {
    var e = fc !== 0;
    return (fc = 0), e;
  }
  function jf(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Tf(e) {
    if (oc) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      oc = !1;
    }
    (Yi = 0), (zt = We = Re = null), (Sr = !1), (Es = fc = 0), (jr = null);
  }
  function Dn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return zt === null ? (Re.memoizedState = zt = e) : (zt = zt.next = e), zt;
  }
  function kt() {
    if (We === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = zt === null ? Re.memoizedState : zt.next;
    if (t !== null) (zt = t), (We = e);
    else {
      if (e === null)
        throw Re.alternate === null ? Error(i(467)) : Error(i(310));
      (We = e),
        (e = {
          memoizedState: We.memoizedState,
          baseState: We.baseState,
          baseQueue: We.baseQueue,
          queue: We.queue,
          next: null,
        }),
        zt === null ? (Re.memoizedState = zt = e) : (zt = zt.next = e);
    }
    return zt;
  }
  var dc;
  dc = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ns(e) {
    var t = Es;
    return (
      (Es += 1),
      jr === null && (jr = []),
      (e = d0(jr, e, t)),
      (t = Re),
      (zt === null ? t.memoizedState : zt.next) === null &&
        ((t = t.alternate),
        (L.H = t === null || t.memoizedState === null ? Aa : qi)),
      e
    );
  }
  function hc(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ns(e);
      if (e.$$typeof === _) return fn(e);
    }
    throw Error(i(438, String(e)));
  }
  function wf(e) {
    var t = null,
      n = Re.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var r = Re.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (t = {
              data: r.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = dc()), (Re.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
    return t.index++, n;
  }
  function oi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function mc(e) {
    var t = kt();
    return Ef(t, We, e);
  }
  function Ef(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = n;
    var c = e.baseQueue,
      h = r.pending;
    if (h !== null) {
      if (c !== null) {
        var y = c.next;
        (c.next = h.next), (h.next = y);
      }
      (t.baseQueue = c = h), (r.pending = null);
    }
    if (((h = e.baseState), c === null)) e.memoizedState = h;
    else {
      t = c.next;
      var j = (y = null),
        R = null,
        D = t,
        Z = !1;
      do {
        var P = D.lane & -536870913;
        if (P !== D.lane ? (Xe & P) === P : (Yi & P) === P) {
          var B = D.revertLane;
          if (B === 0)
            R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              P === xr && (Z = !0);
          else if ((Yi & B) === B) {
            (D = D.next), B === xr && (Z = !0);
            continue;
          } else
            (P = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              R === null ? ((j = R = P), (y = h)) : (R = R.next = P),
              (Re.lanes |= B),
              (Pi |= B);
          (P = D.action),
            Ra && n(h, P),
            (h = D.hasEagerState ? D.eagerState : n(h, P));
        } else
          (B = {
            lane: P,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            R === null ? ((j = R = B), (y = h)) : (R = R.next = B),
            (Re.lanes |= P),
            (Pi |= P);
        D = D.next;
      } while (D !== null && D !== t);
      if (
        (R === null ? (y = h) : (R.next = j),
        !Vn(h, e.memoizedState) && (($t = !0), Z && ((n = br), n !== null)))
      )
        throw n;
      (e.memoizedState = h),
        (e.baseState = y),
        (e.baseQueue = R),
        (r.lastRenderedState = h);
    }
    return c === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function Nf(e) {
    var t = kt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      c = n.pending,
      h = t.memoizedState;
    if (c !== null) {
      n.pending = null;
      var y = (c = c.next);
      do (h = e(h, y.action)), (y = y.next);
      while (y !== c);
      Vn(h, t.memoizedState) || ($t = !0),
        (t.memoizedState = h),
        t.baseQueue === null && (t.baseState = h),
        (n.lastRenderedState = h);
    }
    return [h, r];
  }
  function T0(e, t, n) {
    var r = Re,
      c = kt(),
      h = Ze;
    if (h) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = t();
    var y = !Vn((We || c).memoizedState, n);
    if (
      (y && ((c.memoizedState = n), ($t = !0)),
      (c = c.queue),
      Cf(N0.bind(null, r, c, e), [e]),
      c.getSnapshot !== t || y || (zt !== null && zt.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Tr(9, E0.bind(null, r, c, n, t), { destroy: void 0 }, null),
        it === null)
      )
        throw Error(i(349));
      h || (Yi & 60) !== 0 || w0(r, t, n);
    }
    return n;
  }
  function w0(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Re.updateQueue),
      t === null
        ? ((t = dc()), (Re.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function E0(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), R0(t) && A0(e);
  }
  function N0(e, t, n) {
    return n(function () {
      R0(t) && A0(e);
    });
  }
  function R0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vn(e, n);
    } catch {
      return !0;
    }
  }
  function A0(e) {
    var t = Ui(e, 2);
    t !== null && jn(t, e, 2);
  }
  function Rf(e) {
    var t = Dn();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Ra)) {
        xn(!0);
        try {
          n();
        } finally {
          xn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: e,
      }),
      t
    );
  }
  function C0(e, t, n, r) {
    return (e.baseState = n), Ef(e, We, typeof r == "function" ? r : oi);
  }
  function U_(e, t, n, r, c) {
    if (vc(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var h = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          h.listeners.push(y);
        },
      };
      L.T !== null ? n(!0) : (h.isTransition = !1),
        r(h),
        (n = t.pending),
        n === null
          ? ((h.next = t.pending = h), M0(t, h))
          : ((h.next = n.next), (t.pending = n.next = h));
    }
  }
  function M0(e, t) {
    var n = t.action,
      r = t.payload,
      c = e.state;
    if (t.isTransition) {
      var h = L.T,
        y = {};
      L.T = y;
      try {
        var j = n(c, r),
          R = L.S;
        R !== null && R(y, j), O0(e, t, j);
      } catch (D) {
        Af(e, t, D);
      } finally {
        L.T = h;
      }
    } else
      try {
        (h = n(c, r)), O0(e, t, h);
      } catch (D) {
        Af(e, t, D);
      }
  }
  function O0(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (r) {
            D0(e, t, r);
          },
          function (r) {
            return Af(e, t, r);
          }
        )
      : D0(e, t, n);
  }
  function D0(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      z0(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), M0(e, n)));
  }
  function Af(e, t, n) {
    var r = e.pending;
    if (((e.pending = null), r !== null)) {
      r = r.next;
      do (t.status = "rejected"), (t.reason = n), z0(t), (t = t.next);
      while (t !== r);
    }
    e.action = null;
  }
  function z0(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function k0(e, t) {
    return t;
  }
  function L0(e, t) {
    if (Ze) {
      var n = it.formState;
      if (n !== null) {
        e: {
          var r = Re;
          if (Ze) {
            if (en) {
              t: {
                for (var c = en, h = Bl; c.nodeType !== 8; ) {
                  if (!h) {
                    c = null;
                    break t;
                  }
                  if (((c = kl(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (h = c.data), (c = h === "F!" || h === "F" ? c : null);
              }
              if (c) {
                (en = kl(c.nextSibling)), (r = c.data === "F!");
                break e;
              }
            }
            wa(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return (
      (n = Dn()),
      (n.memoizedState = n.baseState = t),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: k0,
        lastRenderedState: t,
      }),
      (n.queue = r),
      (n = ep.bind(null, Re, r)),
      (r.dispatch = n),
      (r = Rf(!1)),
      (h = kf.bind(null, Re, !1, r.queue)),
      (r = Dn()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (r.queue = c),
      (n = U_.bind(null, Re, c, h, n)),
      (c.dispatch = n),
      (r.memoizedState = e),
      [t, n, !1]
    );
  }
  function U0(e) {
    var t = kt();
    return H0(t, We, e);
  }
  function H0(e, t, n) {
    (t = Ef(e, t, k0)[0]),
      (e = mc(oi)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? Ns(t)
          : t);
    var r = kt(),
      c = r.queue,
      h = c.dispatch;
    return (
      n !== r.memoizedState &&
        ((Re.flags |= 2048),
        Tr(9, H_.bind(null, c, n), { destroy: void 0 }, null)),
      [t, h, e]
    );
  }
  function H_(e, t) {
    e.action = t;
  }
  function B0(e) {
    var t = kt(),
      n = We;
    if (n !== null) return H0(t, n, e);
    kt(), (t = t.memoizedState), (n = kt());
    var r = n.queue.dispatch;
    return (n.memoizedState = e), [t, r, !1];
  }
  function Tr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, inst: n, deps: r, next: null }),
      (t = Re.updateQueue),
      t === null && ((t = dc()), (Re.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function Y0() {
    return kt().memoizedState;
  }
  function pc(e, t, n, r) {
    var c = Dn();
    (Re.flags |= e),
      (c.memoizedState = Tr(
        1 | t,
        n,
        { destroy: void 0 },
        r === void 0 ? null : r
      ));
  }
  function gc(e, t, n, r) {
    var c = kt();
    r = r === void 0 ? null : r;
    var h = c.memoizedState.inst;
    We !== null && r !== null && xf(r, We.memoizedState.deps)
      ? (c.memoizedState = Tr(t, n, h, r))
      : ((Re.flags |= e), (c.memoizedState = Tr(1 | t, n, h, r)));
  }
  function q0(e, t) {
    pc(8390656, 8, e, t);
  }
  function Cf(e, t) {
    gc(2048, 8, e, t);
  }
  function X0(e, t) {
    return gc(4, 2, e, t);
  }
  function G0(e, t) {
    return gc(4, 4, e, t);
  }
  function V0(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Q0(e, t, n) {
    (n = n != null ? n.concat([e]) : null), gc(4, 4, V0.bind(null, t, e), n);
  }
  function Mf() {}
  function Z0(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && xf(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function K0(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    if (t !== null && xf(t, r[1])) return r[0];
    if (((r = e()), Ra)) {
      xn(!0);
      try {
        e();
      } finally {
        xn(!1);
      }
    }
    return (n.memoizedState = [r, t]), r;
  }
  function Of(e, t, n) {
    return n === void 0 || (Yi & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Fp()), (Re.lanes |= e), (Pi |= e), n);
  }
  function $0(e, t, n, r) {
    return Vn(n, t)
      ? n
      : _r.current !== null
      ? ((e = Of(e, n, r)), Vn(e, t) || ($t = !0), e)
      : (Yi & 42) === 0
      ? (($t = !0), (e.memoizedState = n))
      : ((e = Fp()), (Re.lanes |= e), (Pi |= e), t);
  }
  function F0(e, t, n, r, c) {
    var h = W.p;
    W.p = h !== 0 && 8 > h ? h : 8;
    var y = L.T,
      j = {};
    (L.T = j), kf(e, !1, t, n);
    try {
      var R = c(),
        D = L.S;
      if (
        (D !== null && D(j, R),
        R !== null && typeof R == "object" && typeof R.then == "function")
      ) {
        var Z = z_(R, r);
        Rs(e, t, Z, $n(e));
      } else Rs(e, t, r, $n(e));
    } catch (P) {
      Rs(e, t, { then: function () {}, status: "rejected", reason: P }, $n());
    } finally {
      (W.p = h), (L.T = y);
    }
  }
  function B_() {}
  function Df(e, t, n, r) {
    if (e.tag !== 5) throw Error(i(476));
    var c = P0(e).queue;
    F0(
      e,
      c,
      t,
      pe,
      n === null
        ? B_
        : function () {
            return J0(e), n(r);
          }
    );
  }
  function P0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: pe,
      baseState: pe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: pe,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: oi,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function J0(e) {
    var t = P0(e).next.queue;
    Rs(e, t, {}, $n());
  }
  function zf() {
    return fn($s);
  }
  function W0() {
    return kt().memoizedState;
  }
  function I0() {
    return kt().memoizedState;
  }
  function Y_(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = $n();
          e = Vi(n);
          var r = Qi(t, e, n);
          r !== null && (jn(r, t, n), Ms(r, t, n)),
            (t = { cache: vf() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function q_(e, t, n) {
    var r = $n();
    (n = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vc(e)
        ? tp(t, n)
        : ((n = of(e, t, n, r)), n !== null && (jn(n, e, r), np(n, t, r)));
  }
  function ep(e, t, n) {
    var r = $n();
    Rs(e, t, n, r);
  }
  function Rs(e, t, n, r) {
    var c = {
      lane: r,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vc(e)) tp(t, c);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = t.lastRenderedReducer), h !== null)
      )
        try {
          var y = t.lastRenderedState,
            j = h(y, n);
          if (((c.hasEagerState = !0), (c.eagerState = j), Vn(j, y)))
            return ec(e, t, c, 0), it === null && Iu(), !1;
        } catch {
        } finally {
        }
      if (((n = of(e, t, c, r)), n !== null))
        return jn(n, e, r), np(n, t, r), !0;
    }
    return !1;
  }
  function kf(e, t, n, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: Td(),
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vc(e))
    ) {
      if (t) throw Error(i(479));
    } else (t = of(e, n, r, 2)), t !== null && jn(t, e, 2);
  }
  function vc(e) {
    var t = e.alternate;
    return e === Re || (t !== null && t === Re);
  }
  function tp(e, t) {
    Sr = oc = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function np(e, t, n) {
    if ((n & 4194176) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), fe(e, n);
    }
  }
  var ql = {
    readContext: fn,
    use: hc,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
  };
  (ql.useCacheRefresh = Rt),
    (ql.useMemoCache = Rt),
    (ql.useHostTransitionStatus = Rt),
    (ql.useFormState = Rt),
    (ql.useActionState = Rt),
    (ql.useOptimistic = Rt);
  var Aa = {
    readContext: fn,
    use: hc,
    useCallback: function (e, t) {
      return (Dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: fn,
    useEffect: q0,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null),
        pc(4194308, 4, V0.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return pc(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      pc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dn();
      t = t === void 0 ? null : t;
      var r = e();
      if (Ra) {
        xn(!0);
        try {
          e();
        } finally {
          xn(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    },
    useReducer: function (e, t, n) {
      var r = Dn();
      if (n !== void 0) {
        var c = n(t);
        if (Ra) {
          xn(!0);
          try {
            n(t);
          } finally {
            xn(!1);
          }
        }
      } else c = t;
      return (
        (r.memoizedState = r.baseState = c),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: c,
        }),
        (r.queue = e),
        (e = e.dispatch = q_.bind(null, Re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Rf(e);
      var t = e.queue,
        n = ep.bind(null, Re, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: Mf,
    useDeferredValue: function (e, t) {
      var n = Dn();
      return Of(n, e, t);
    },
    useTransition: function () {
      var e = Rf(!1);
      return (
        (e = F0.bind(null, Re, e.queue, !0, !1)),
        (Dn().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, n) {
      var r = Re,
        c = Dn();
      if (Ze) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else {
        if (((n = t()), it === null)) throw Error(i(349));
        (Xe & 60) !== 0 || w0(r, t, n);
      }
      c.memoizedState = n;
      var h = { value: n, getSnapshot: t };
      return (
        (c.queue = h),
        q0(N0.bind(null, r, h, e), [e]),
        (r.flags |= 2048),
        Tr(9, E0.bind(null, r, h, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = Dn(),
        t = it.identifierPrefix;
      if (Ze) {
        var n = ui,
          r = si;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = fc++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = k_++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Dn().memoizedState = Y_.bind(null, Re));
    },
  };
  (Aa.useMemoCache = wf),
    (Aa.useHostTransitionStatus = zf),
    (Aa.useFormState = L0),
    (Aa.useActionState = L0),
    (Aa.useOptimistic = function (e) {
      var t = Dn();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = n), (t = kf.bind(null, Re, !0, n)), (n.dispatch = t), [e, t]
      );
    });
  var qi = {
    readContext: fn,
    use: hc,
    useCallback: Z0,
    useContext: fn,
    useEffect: Cf,
    useImperativeHandle: Q0,
    useInsertionEffect: X0,
    useLayoutEffect: G0,
    useMemo: K0,
    useReducer: mc,
    useRef: Y0,
    useState: function () {
      return mc(oi);
    },
    useDebugValue: Mf,
    useDeferredValue: function (e, t) {
      var n = kt();
      return $0(n, We.memoizedState, e, t);
    },
    useTransition: function () {
      var e = mc(oi)[0],
        t = kt().memoizedState;
      return [typeof e == "boolean" ? e : Ns(e), t];
    },
    useSyncExternalStore: T0,
    useId: W0,
  };
  (qi.useCacheRefresh = I0),
    (qi.useMemoCache = wf),
    (qi.useHostTransitionStatus = zf),
    (qi.useFormState = U0),
    (qi.useActionState = U0),
    (qi.useOptimistic = function (e, t) {
      var n = kt();
      return C0(n, We, e, t);
    });
  var Ca = {
    readContext: fn,
    use: hc,
    useCallback: Z0,
    useContext: fn,
    useEffect: Cf,
    useImperativeHandle: Q0,
    useInsertionEffect: X0,
    useLayoutEffect: G0,
    useMemo: K0,
    useReducer: Nf,
    useRef: Y0,
    useState: function () {
      return Nf(oi);
    },
    useDebugValue: Mf,
    useDeferredValue: function (e, t) {
      var n = kt();
      return We === null ? Of(n, e, t) : $0(n, We.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Nf(oi)[0],
        t = kt().memoizedState;
      return [typeof e == "boolean" ? e : Ns(e), t];
    },
    useSyncExternalStore: T0,
    useId: W0,
  };
  (Ca.useCacheRefresh = I0),
    (Ca.useMemoCache = wf),
    (Ca.useHostTransitionStatus = zf),
    (Ca.useFormState = B0),
    (Ca.useActionState = B0),
    (Ca.useOptimistic = function (e, t) {
      var n = kt();
      return We !== null
        ? C0(n, We, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    });
  function Lf(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : G({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Uf = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ee(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = $n(),
        c = Vi(r);
      (c.payload = t),
        n != null && (c.callback = n),
        (t = Qi(e, c, r)),
        t !== null && (jn(t, e, r), Ms(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = $n(),
        c = Vi(r);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = Qi(e, c, r)),
        t !== null && (jn(t, e, r), Ms(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = $n(),
        r = Vi(n);
      (r.tag = 2),
        t != null && (r.callback = t),
        (t = Qi(e, r, n)),
        t !== null && (jn(t, e, n), Ms(t, e, n));
    },
  };
  function lp(e, t, n, r, c, h, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, h, y)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ps(n, r) || !ps(c, h)
        : !0
    );
  }
  function ip(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Uf.enqueueReplaceState(t, t.state, null);
  }
  function Ma(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var r in t) r !== "ref" && (n[r] = t[r]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = G({}, n));
      for (var c in e) n[c] === void 0 && (n[c] = e[c]);
    }
    return n;
  }
  var yc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function ap(e) {
    yc(e);
  }
  function rp(e) {
    console.error(e);
  }
  function sp(e) {
    yc(e);
  }
  function _c(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function up(e, t, n) {
    try {
      var r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Hf(e, t, n) {
    return (
      (n = Vi(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        _c(e, t);
      }),
      n
    );
  }
  function cp(e) {
    return (e = Vi(e)), (e.tag = 3), e;
  }
  function op(e, t, n, r) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var h = r.value;
      (e.payload = function () {
        return c(h);
      }),
        (e.callback = function () {
          up(t, n, r);
        });
    }
    var y = n.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (e.callback = function () {
        up(t, n, r),
          typeof c != "function" &&
            (Ji === null ? (Ji = new Set([this])) : Ji.add(this));
        var j = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: j !== null ? j : "",
        });
      });
  }
  function X_(e, t, n, r, c) {
    if (
      ((n.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Cs(t, n, c, !0),
        (n = gl.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Yl === null ? _d() : n.alternate === null && jt === 0 && (jt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              r === mf
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                  bd(e, r, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              r === mf
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                  bd(e, r, c)),
              !1
            );
        }
        throw Error(i(435, n.tag));
      }
      return bd(e, r, c), _d(), !1;
    }
    if (Ze)
      return (
        (t = gl.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            r !== hf && ((e = Error(i(422), { cause: r })), _s(hl(e, n))))
          : (r !== hf && ((t = Error(i(423), { cause: r })), _s(hl(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (r = hl(r, n)),
            (c = Hf(e.stateNode, r, c)),
            If(e, c),
            jt !== 4 && (jt = 2)),
        !1
      );
    var h = Error(i(520), { cause: r });
    if (
      ((h = hl(h, n)),
      Bs === null ? (Bs = [h]) : Bs.push(h),
      jt !== 4 && (jt = 2),
      t === null)
    )
      return !0;
    (r = hl(r, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = c & -c),
            (n.lanes |= e),
            (e = Hf(n.stateNode, r, e)),
            If(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (h = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  (Ji === null || !Ji.has(h)))))
          )
            return (
              (n.flags |= 65536),
              (c &= -c),
              (n.lanes |= c),
              (c = cp(c)),
              op(c, e, n, r),
              If(n, c),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var fp = Error(i(461)),
    $t = !1;
  function tn(e, t, n, r) {
    t.child = e === null ? g0(t, null, n, r) : Ea(t, e.child, n, r);
  }
  function dp(e, t, n, r, c) {
    n = n.render;
    var h = t.ref;
    if ("ref" in r) {
      var y = {};
      for (var j in r) j !== "ref" && (y[j] = r[j]);
    } else y = r;
    return (
      Da(t),
      (r = bf(e, t, n, y, h, c)),
      (j = Sf()),
      e !== null && !$t
        ? (jf(e, t, c), fi(e, t, c))
        : (Ze && j && ff(t), (t.flags |= 1), tn(e, t, r, c), t.child)
    );
  }
  function hp(e, t, n, r, c) {
    if (e === null) {
      var h = n.type;
      return typeof h == "function" &&
        !sd(h) &&
        h.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = h), mp(e, t, h, r, c))
        : ((e = Tc(n.type, null, r, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((h = e.child), !Kf(e, c))) {
      var y = h.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ps), n(y, r) && e.ref === t.ref)
      )
        return fi(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = Fi(h, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function mp(e, t, n, r, c) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (ps(h, r) && e.ref === t.ref)
        if ((($t = !1), (t.pendingProps = r = h), Kf(e, c)))
          (e.flags & 131072) !== 0 && ($t = !0);
        else return (t.lanes = e.lanes), fi(e, t, c);
    }
    return Bf(e, t, n, r, c);
  }
  function pp(e, t, n) {
    var r = t.pendingProps,
      c = r.children,
      h = (t.stateNode._pendingVisibility & 2) !== 0,
      y = e !== null ? e.memoizedState : null;
    if ((As(e, t), r.mode === "hidden" || h)) {
      if ((t.flags & 128) !== 0) {
        if (((r = y !== null ? y.baseLanes | n : n), e !== null)) {
          for (c = t.child = e.child, h = 0; c !== null; )
            (h = h | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = h & ~r;
        } else (t.childLanes = 0), (t.child = null);
        return gp(e, t, r, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && cc(t, y !== null ? y.cachePool : null),
          y !== null ? v0(t, y) : pf(),
          y0(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          gp(e, t, y !== null ? y.baseLanes | n : n, n)
        );
    } else
      y !== null
        ? (cc(t, y.cachePool), v0(t, y), Bi(), (t.memoizedState = null))
        : (e !== null && cc(t, null), pf(), Bi());
    return tn(e, t, c, n), t.child;
  }
  function gp(e, t, n, r) {
    var c = _f();
    return (
      (c = c === null ? null : { parent: Gt._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: n, cachePool: c }),
      e !== null && cc(t, null),
      pf(),
      y0(t),
      e !== null && Cs(e, t, r, !0),
      null
    );
  }
  function As(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(i(284));
      (e === null || e.ref !== n) && (t.flags |= 2097664);
    }
  }
  function Bf(e, t, n, r, c) {
    return (
      Da(t),
      (n = bf(e, t, n, r, void 0, c)),
      (r = Sf()),
      e !== null && !$t
        ? (jf(e, t, c), fi(e, t, c))
        : (Ze && r && ff(t), (t.flags |= 1), tn(e, t, n, c), t.child)
    );
  }
  function vp(e, t, n, r, c, h) {
    return (
      Da(t),
      (t.updateQueue = null),
      (n = j0(t, r, n, c)),
      S0(e),
      (r = Sf()),
      e !== null && !$t
        ? (jf(e, t, h), fi(e, t, h))
        : (Ze && r && ff(t), (t.flags |= 1), tn(e, t, n, h), t.child)
    );
  }
  function yp(e, t, n, r, c) {
    if ((Da(t), t.stateNode === null)) {
      var h = pr,
        y = n.contextType;
      typeof y == "object" && y !== null && (h = fn(y)),
        (h = new n(r, h)),
        (t.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Uf),
        (t.stateNode = h),
        (h._reactInternals = t),
        (h = t.stateNode),
        (h.props = r),
        (h.state = t.memoizedState),
        (h.refs = {}),
        Jf(t),
        (y = n.contextType),
        (h.context = typeof y == "object" && y !== null ? fn(y) : pr),
        (h.state = t.memoizedState),
        (y = n.getDerivedStateFromProps),
        typeof y == "function" && (Lf(t, n, y, r), (h.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((y = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          y !== h.state && Uf.enqueueReplaceState(h, h.state, null),
          Ds(t, r, h, c),
          Os(),
          (h.state = t.memoizedState)),
        typeof h.componentDidMount == "function" && (t.flags |= 4194308),
        (r = !0);
    } else if (e === null) {
      h = t.stateNode;
      var j = t.memoizedProps,
        R = Ma(n, j);
      h.props = R;
      var D = h.context,
        Z = n.contextType;
      (y = pr), typeof Z == "object" && Z !== null && (y = fn(Z));
      var P = n.getDerivedStateFromProps;
      (Z =
        typeof P == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (j = t.pendingProps !== j),
        Z ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((j || D !== y) && ip(t, h, r, y)),
        (Gi = !1);
      var B = t.memoizedState;
      (h.state = B),
        Ds(t, r, h, c),
        Os(),
        (D = t.memoizedState),
        j || B !== D || Gi
          ? (typeof P == "function" && (Lf(t, n, P, r), (D = t.memoizedState)),
            (R = Gi || lp(t, n, R, r, B, D, y))
              ? (Z ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = D)),
            (h.props = r),
            (h.state = D),
            (h.context = y),
            (r = R))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (h = t.stateNode),
        Wf(e, t),
        (y = t.memoizedProps),
        (Z = Ma(n, y)),
        (h.props = Z),
        (P = t.pendingProps),
        (B = h.context),
        (D = n.contextType),
        (R = pr),
        typeof D == "object" && D !== null && (R = fn(D)),
        (j = n.getDerivedStateFromProps),
        (D =
          typeof j == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((y !== P || B !== R) && ip(t, h, r, R)),
        (Gi = !1),
        (B = t.memoizedState),
        (h.state = B),
        Ds(t, r, h, c),
        Os();
      var Q = t.memoizedState;
      y !== P ||
      B !== Q ||
      Gi ||
      (e !== null && e.dependencies !== null && xc(e.dependencies))
        ? (typeof j == "function" && (Lf(t, n, j, r), (Q = t.memoizedState)),
          (Z =
            Gi ||
            lp(t, n, Z, r, B, Q, R) ||
            (e !== null && e.dependencies !== null && xc(e.dependencies)))
            ? (D ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(r, Q, R),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(r, Q, R)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (y === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Q)),
          (h.props = r),
          (h.state = Q),
          (h.context = R),
          (r = Z))
        : (typeof h.componentDidUpdate != "function" ||
            (y === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return (
      (h = r),
      As(e, t),
      (r = (t.flags & 128) !== 0),
      h || r
        ? ((h = t.stateNode),
          (n =
            r && typeof n.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (t.flags |= 1),
          e !== null && r
            ? ((t.child = Ea(t, e.child, null, c)),
              (t.child = Ea(t, null, n, c)))
            : tn(e, t, n, c),
          (t.memoizedState = h.state),
          (e = t.child))
        : (e = fi(e, t, c)),
      e
    );
  }
  function _p(e, t, n, r) {
    return ys(), (t.flags |= 256), tn(e, t, n, r), t.child;
  }
  var Yf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qf(e) {
    return { baseLanes: e, cachePool: b0() };
  }
  function Xf(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= xl), e;
  }
  function xp(e, t, n) {
    var r = t.pendingProps,
      c = !1,
      h = (t.flags & 128) !== 0,
      y;
    if (
      ((y = h) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
      y && ((c = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ze) {
        if ((c ? Hi(t) : Bi(), Ze)) {
          var j = en,
            R;
          if ((R = j)) {
            e: {
              for (R = j, j = Bl; R.nodeType !== 8; ) {
                if (!j) {
                  j = null;
                  break e;
                }
                if (((R = kl(R.nextSibling)), R === null)) {
                  j = null;
                  break e;
                }
              }
              j = R;
            }
            j !== null
              ? ((t.memoizedState = {
                  dehydrated: j,
                  treeContext: ja !== null ? { id: si, overflow: ui } : null,
                  retryLane: 536870912,
                }),
                (R = _l(18, null, null, 0)),
                (R.stateNode = j),
                (R.return = t),
                (t.child = R),
                (Sn = t),
                (en = null),
                (R = !0))
              : (R = !1);
          }
          R || wa(t);
        }
        if (
          ((j = t.memoizedState),
          j !== null && ((j = j.dehydrated), j !== null))
        )
          return j.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        ci(t);
      }
      return (
        (j = r.children),
        (r = r.fallback),
        c
          ? (Bi(),
            (c = t.mode),
            (j = Vf({ mode: "hidden", children: j }, c)),
            (r = ka(r, c, n, null)),
            (j.return = t),
            (r.return = t),
            (j.sibling = r),
            (t.child = j),
            (c = t.child),
            (c.memoizedState = qf(n)),
            (c.childLanes = Xf(e, y, n)),
            (t.memoizedState = Yf),
            r)
          : (Hi(t), Gf(t, j))
      );
    }
    if (
      ((R = e.memoizedState), R !== null && ((j = R.dehydrated), j !== null))
    ) {
      if (h)
        t.flags & 256
          ? (Hi(t), (t.flags &= -257), (t = Qf(e, t, n)))
          : t.memoizedState !== null
          ? (Bi(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Bi(),
            (c = r.fallback),
            (j = t.mode),
            (r = Vf({ mode: "visible", children: r.children }, j)),
            (c = ka(c, j, n, null)),
            (c.flags |= 2),
            (r.return = t),
            (c.return = t),
            (r.sibling = c),
            (t.child = r),
            Ea(t, e.child, null, n),
            (r = t.child),
            (r.memoizedState = qf(n)),
            (r.childLanes = Xf(e, y, n)),
            (t.memoizedState = Yf),
            (t = c));
      else if ((Hi(t), j.data === "$!")) {
        if (((y = j.nextSibling && j.nextSibling.dataset), y)) var D = y.dgst;
        (y = D),
          (r = Error(i(419))),
          (r.stack = ""),
          (r.digest = y),
          _s({ value: r, source: null, stack: null }),
          (t = Qf(e, t, n));
      } else if (
        ($t || Cs(e, t, n, !1), (y = (n & e.childLanes) !== 0), $t || y)
      ) {
        if (((y = it), y !== null)) {
          if (((r = n & -n), (r & 42) !== 0)) r = 1;
          else
            switch (r) {
              case 2:
                r = 1;
                break;
              case 8:
                r = 4;
                break;
              case 32:
                r = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                r = 64;
                break;
              case 268435456:
                r = 134217728;
                break;
              default:
                r = 0;
            }
          if (
            ((r = (r & (y.suspendedLanes | n)) !== 0 ? 0 : r),
            r !== 0 && r !== R.retryLane)
          )
            throw ((R.retryLane = r), Ui(e, r), jn(y, e, r), fp);
        }
        j.data === "$?" || _d(), (t = Qf(e, t, n));
      } else
        j.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = lx.bind(null, e)),
            (j._reactRetry = t),
            (t = null))
          : ((e = R.treeContext),
            (en = kl(j.nextSibling)),
            (Sn = t),
            (Ze = !0),
            (Dl = null),
            (Bl = !1),
            e !== null &&
              ((ml[pl++] = si),
              (ml[pl++] = ui),
              (ml[pl++] = ja),
              (si = e.id),
              (ui = e.overflow),
              (ja = t)),
            (t = Gf(t, r.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (Bi(),
        (c = r.fallback),
        (j = t.mode),
        (R = e.child),
        (D = R.sibling),
        (r = Fi(R, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = R.subtreeFlags & 31457280),
        D !== null ? (c = Fi(D, c)) : ((c = ka(c, j, n, null)), (c.flags |= 2)),
        (c.return = t),
        (r.return = t),
        (r.sibling = c),
        (t.child = r),
        (r = c),
        (c = t.child),
        (j = e.child.memoizedState),
        j === null
          ? (j = qf(n))
          : ((R = j.cachePool),
            R !== null
              ? ((D = Gt._currentValue),
                (R = R.parent !== D ? { parent: D, pool: D } : R))
              : (R = b0()),
            (j = { baseLanes: j.baseLanes | n, cachePool: R })),
        (c.memoizedState = j),
        (c.childLanes = Xf(e, y, n)),
        (t.memoizedState = Yf),
        r)
      : (Hi(t),
        (n = e.child),
        (e = n.sibling),
        (n = Fi(n, { mode: "visible", children: r.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((y = t.deletions),
          y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Gf(e, t) {
    return (
      (t = Vf({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Vf(e, t) {
    return Zp(e, t, 0, null);
  }
  function Qf(e, t, n) {
    return (
      Ea(t, e.child, null, n),
      (e = Gf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function bp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ff(e.return, t, n);
  }
  function Zf(e, t, n, r, c) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: c,
        })
      : ((h.isBackwards = t),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = r),
        (h.tail = n),
        (h.tailMode = c));
  }
  function Sp(e, t, n) {
    var r = t.pendingProps,
      c = r.revealOrder,
      h = r.tail;
    if ((tn(e, t, r.children, n), (r = Xt.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && bp(e, n, t);
          else if (e.tag === 19) bp(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    switch ((Ve(Xt, r), c)) {
      case "forwards":
        for (n = t.child, c = null; n !== null; )
          (e = n.alternate),
            e !== null && uc(e) === null && (c = n),
            (n = n.sibling);
        (n = c),
          n === null
            ? ((c = t.child), (t.child = null))
            : ((c = n.sibling), (n.sibling = null)),
          Zf(t, !1, c, n, h);
        break;
      case "backwards":
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && uc(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = n), (n = c), (c = e);
        }
        Zf(t, !0, n, null, h);
        break;
      case "together":
        Zf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fi(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Pi |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Cs(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Fi(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Fi(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Kf(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && xc(e)));
  }
  function G_(e, t, n) {
    switch (t.tag) {
      case 3:
        Yt(t, t.stateNode.containerInfo),
          Xi(t, Gt, e.memoizedState.cache),
          ys();
        break;
      case 27:
      case 5:
        X(t);
        break;
      case 4:
        Yt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xi(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (Hi(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? xp(e, t, n)
            : (Hi(t), (e = fi(e, t, n)), e !== null ? e.sibling : null);
        Hi(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((r = (n & t.childLanes) !== 0),
          r || (Cs(e, t, n, !1), (r = (n & t.childLanes) !== 0)),
          c)
        ) {
          if (r) return Sp(e, t, n);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Ve(Xt, Xt.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), pp(e, t, n);
      case 24:
        Xi(t, Gt, e.memoizedState.cache);
    }
    return fi(e, t, n);
  }
  function jp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) $t = !0;
      else {
        if (!Kf(e, n) && (t.flags & 128) === 0) return ($t = !1), G_(e, t, n);
        $t = (e.flags & 131072) !== 0;
      }
    else ($t = !1), Ze && (t.flags & 1048576) !== 0 && s0(t, lc, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType,
            c = r._init;
          if (((r = c(r._payload)), (t.type = r), typeof r == "function"))
            sd(r)
              ? ((e = Ma(r, e)), (t.tag = 1), (t = yp(null, t, r, e, n)))
              : ((t.tag = 0), (t = Bf(null, t, r, e, n)));
          else {
            if (r != null) {
              if (((c = r.$$typeof), c === w)) {
                (t.tag = 11), (t = dp(null, t, r, e, n));
                break e;
              } else if (c === A) {
                (t.tag = 14), (t = hp(null, t, r, e, n));
                break e;
              }
            }
            throw ((t = Y(r) || r), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return Bf(e, t, t.type, t.pendingProps, n);
      case 1:
        return (r = t.type), (c = Ma(r, t.pendingProps)), yp(e, t, r, c, n);
      case 3:
        e: {
          if ((Yt(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          var h = t.pendingProps;
          (c = t.memoizedState), (r = c.element), Wf(e, t), Ds(t, h, null, n);
          var y = t.memoizedState;
          if (
            ((h = y.cache),
            Xi(t, Gt, h),
            h !== c.cache && Pf(t, [Gt], n, !0),
            Os(),
            (h = y.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: h, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = _p(e, t, h, n);
              break e;
            } else if (h !== r) {
              (r = hl(Error(i(424)), t)), _s(r), (t = _p(e, t, h, n));
              break e;
            } else
              for (
                en = kl(t.stateNode.containerInfo.firstChild),
                  Sn = t,
                  Ze = !0,
                  Dl = null,
                  Bl = !0,
                  n = g0(t, null, h, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((ys(), h === r)) {
              t = fi(e, t, n);
              break e;
            }
            tn(e, t, h, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          As(e, t),
          e === null
            ? (n = Eg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ze ||
                ((n = t.type),
                (e = t.pendingProps),
                (r = Lc(we.current).createElement(n)),
                (r[Qe] = t),
                (r[Le] = e),
                nn(r, n, e),
                Be(r),
                (t.stateNode = r))
            : (t.memoizedState = Eg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          X(t),
          e === null &&
            Ze &&
            ((r = t.stateNode = jg(t.type, t.pendingProps, we.current)),
            (Sn = t),
            (Bl = !0),
            (en = kl(r.firstChild))),
          (r = t.pendingProps.children),
          e !== null || Ze ? tn(e, t, r, n) : (t.child = Ea(t, null, r, n)),
          As(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ze &&
            ((c = r = en) &&
              ((r = _x(r, t.type, t.pendingProps, Bl)),
              r !== null
                ? ((t.stateNode = r),
                  (Sn = t),
                  (en = kl(r.firstChild)),
                  (Bl = !1),
                  (c = !0))
                : (c = !1)),
            c || wa(t)),
          X(t),
          (c = t.type),
          (h = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (r = h.children),
          Dd(c, h) ? (r = null) : y !== null && Dd(c, y) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((c = bf(e, t, L_, null, null, n)), ($s._currentValue = c)),
          As(e, t),
          tn(e, t, r, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ze &&
            ((e = n = en) &&
              ((n = xx(n, t.pendingProps, Bl)),
              n !== null
                ? ((t.stateNode = n), (Sn = t), (en = null), (e = !0))
                : (e = !1)),
            e || wa(t)),
          null
        );
      case 13:
        return xp(e, t, n);
      case 4:
        return (
          Yt(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ea(t, null, r, n)) : tn(e, t, r, n),
          t.child
        );
      case 11:
        return dp(e, t, t.type, t.pendingProps, n);
      case 7:
        return tn(e, t, t.pendingProps, n), t.child;
      case 8:
        return tn(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return tn(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (r = t.pendingProps),
          Xi(t, t.type, r.value),
          tn(e, t, r.children, n),
          t.child
        );
      case 9:
        return (
          (c = t.type._context),
          (r = t.pendingProps.children),
          Da(t),
          (c = fn(c)),
          (r = r(c)),
          (t.flags |= 1),
          tn(e, t, r, n),
          t.child
        );
      case 14:
        return hp(e, t, t.type, t.pendingProps, n);
      case 15:
        return mp(e, t, t.type, t.pendingProps, n);
      case 19:
        return Sp(e, t, n);
      case 22:
        return pp(e, t, n);
      case 24:
        return (
          Da(t),
          (r = fn(Gt)),
          e === null
            ? ((c = _f()),
              c === null &&
                ((c = it),
                (h = vf()),
                (c.pooledCache = h),
                h.refCount++,
                h !== null && (c.pooledCacheLanes |= n),
                (c = h)),
              (t.memoizedState = { parent: r, cache: c }),
              Jf(t),
              Xi(t, Gt, c))
            : ((e.lanes & n) !== 0 && (Wf(e, t), Ds(t, null, null, n), Os()),
              (c = e.memoizedState),
              (h = t.memoizedState),
              c.parent !== r
                ? ((c = { parent: r, cache: r }),
                  (t.memoizedState = c),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = c),
                  Xi(t, Gt, r))
                : ((r = h.cache),
                  Xi(t, Gt, r),
                  r !== c.cache && Pf(t, [Gt], n, !0))),
          tn(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  var $f = xe(null),
    Oa = null,
    di = null;
  function Xi(e, t, n) {
    Ve($f, t._currentValue), (t._currentValue = n);
  }
  function hi(e) {
    (e._currentValue = $f.current), De($f);
  }
  function Ff(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Pf(e, t, n, r) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var h = c.dependencies;
      if (h !== null) {
        var y = c.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var j = h;
          h = c;
          for (var R = 0; R < t.length; R++)
            if (j.context === t[R]) {
              (h.lanes |= n),
                (j = h.alternate),
                j !== null && (j.lanes |= n),
                Ff(h.return, n, e),
                r || (y = null);
              break e;
            }
          h = j.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(i(341));
        (y.lanes |= n),
          (h = y.alternate),
          h !== null && (h.lanes |= n),
          Ff(y, n, e),
          (y = null);
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            (c.return = y.return), (y = c);
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Cs(e, t, n, r) {
    e = null;
    for (var c = t, h = !1; c !== null; ) {
      if (!h) {
        if ((c.flags & 524288) !== 0) h = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(i(387));
        if (((y = y.memoizedProps), y !== null)) {
          var j = c.type;
          Vn(c.pendingProps.value, y.value) ||
            (e !== null ? e.push(j) : (e = [j]));
        }
      } else if (c === lt.current) {
        if (((y = c.alternate), y === null)) throw Error(i(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push($s) : (e = [$s]));
      }
      c = c.return;
    }
    e !== null && Pf(t, e, n, r), (t.flags |= 262144);
  }
  function xc(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Vn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Da(e) {
    (Oa = e),
      (di = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function fn(e) {
    return Tp(Oa, e);
  }
  function bc(e, t) {
    return Oa === null && Da(e), Tp(e, t);
  }
  function Tp(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), di === null)) {
      if (e === null) throw Error(i(308));
      (di = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else di = di.next = t;
    return n;
  }
  var Gi = !1;
  function Jf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Wf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Vi(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qi(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (pt & 2) !== 0)) {
      var c = r.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (r.pending = t),
        (t = tc(e)),
        a0(e, null, n),
        t
      );
    }
    return ec(e, r, t, n), tc(e);
  }
  function Ms(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), fe(e, n);
    }
  }
  function If(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var c = null,
        h = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var y = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          h === null ? (c = h = y) : (h = h.next = y), (n = n.next);
        } while (n !== null);
        h === null ? (c = h = t) : (h = h.next = t);
      } else c = h = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: h,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var ed = !1;
  function Os() {
    if (ed) {
      var e = br;
      if (e !== null) throw e;
    }
  }
  function Ds(e, t, n, r) {
    ed = !1;
    var c = e.updateQueue;
    Gi = !1;
    var h = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      j = c.shared.pending;
    if (j !== null) {
      c.shared.pending = null;
      var R = j,
        D = R.next;
      (R.next = null), y === null ? (h = D) : (y.next = D), (y = R);
      var Z = e.alternate;
      Z !== null &&
        ((Z = Z.updateQueue),
        (j = Z.lastBaseUpdate),
        j !== y &&
          (j === null ? (Z.firstBaseUpdate = D) : (j.next = D),
          (Z.lastBaseUpdate = R)));
    }
    if (h !== null) {
      var P = c.baseState;
      (y = 0), (Z = D = R = null), (j = h);
      do {
        var B = j.lane & -536870913,
          Q = B !== j.lane;
        if (Q ? (Xe & B) === B : (r & B) === B) {
          B !== 0 && B === xr && (ed = !0),
            Z !== null &&
              (Z = Z.next =
                {
                  lane: 0,
                  tag: j.tag,
                  payload: j.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ue = e,
              Te = j;
            B = t;
            var Tt = n;
            switch (Te.tag) {
              case 1:
                if (((ue = Te.payload), typeof ue == "function")) {
                  P = ue.call(Tt, P, B);
                  break e;
                }
                P = ue;
                break e;
              case 3:
                ue.flags = (ue.flags & -65537) | 128;
              case 0:
                if (
                  ((ue = Te.payload),
                  (B = typeof ue == "function" ? ue.call(Tt, P, B) : ue),
                  B == null)
                )
                  break e;
                P = G({}, P, B);
                break e;
              case 2:
                Gi = !0;
            }
          }
          (B = j.callback),
            B !== null &&
              ((e.flags |= 64),
              Q && (e.flags |= 8192),
              (Q = c.callbacks),
              Q === null ? (c.callbacks = [B]) : Q.push(B));
        } else
          (Q = {
            lane: B,
            tag: j.tag,
            payload: j.payload,
            callback: j.callback,
            next: null,
          }),
            Z === null ? ((D = Z = Q), (R = P)) : (Z = Z.next = Q),
            (y |= B);
        if (((j = j.next), j === null)) {
          if (((j = c.shared.pending), j === null)) break;
          (Q = j),
            (j = Q.next),
            (Q.next = null),
            (c.lastBaseUpdate = Q),
            (c.shared.pending = null);
        }
      } while (!0);
      Z === null && (R = P),
        (c.baseState = R),
        (c.firstBaseUpdate = D),
        (c.lastBaseUpdate = Z),
        h === null && (c.shared.lanes = 0),
        (Pi |= y),
        (e.lanes = y),
        (e.memoizedState = P);
    }
  }
  function wp(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function Ep(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) wp(n[e], t);
  }
  function zs(e, t) {
    try {
      var n = t.updateQueue,
        r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var c = r.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var h = n.create,
              y = n.inst;
            (r = h()), (y.destroy = r);
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (j) {
      et(t, t.return, j);
    }
  }
  function Zi(e, t, n) {
    try {
      var r = t.updateQueue,
        c = r !== null ? r.lastEffect : null;
      if (c !== null) {
        var h = c.next;
        r = h;
        do {
          if ((r.tag & e) === e) {
            var y = r.inst,
              j = y.destroy;
            if (j !== void 0) {
              (y.destroy = void 0), (c = t);
              var R = n;
              try {
                j();
              } catch (D) {
                et(c, R, D);
              }
            }
          }
          r = r.next;
        } while (r !== h);
      }
    } catch (D) {
      et(t, t.return, D);
    }
  }
  function Np(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Ep(t, n);
      } catch (r) {
        et(e, e.return, r);
      }
    }
  }
  function Rp(e, t, n) {
    (n.props = Ma(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (r) {
      et(e, t, r);
    }
  }
  function za(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        var r = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var c = r;
            break;
          default:
            c = r;
        }
        typeof n == "function" ? (e.refCleanup = n(c)) : (n.current = c);
      }
    } catch (h) {
      et(e, t, h);
    }
  }
  function Qn(e, t) {
    var n = e.ref,
      r = e.refCleanup;
    if (n !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (c) {
          et(e, t, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (c) {
          et(e, t, c);
        }
      else n.current = null;
  }
  function Ap(e) {
    var t = e.type,
      n = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function Cp(e, t, n) {
    try {
      var r = e.stateNode;
      mx(r, e.type, n, t), (r[Le] = t);
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function Mp(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function td(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = kc));
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (nd(e, t, n), e = e.sibling; e !== null; )
        nd(e, t, n), (e = e.sibling);
  }
  function Sc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (Sc(e, t, n), e = e.sibling; e !== null; )
        Sc(e, t, n), (e = e.sibling);
  }
  var mi = !1,
    St = !1,
    ld = !1,
    Op = typeof WeakSet == "function" ? WeakSet : Set,
    Ft = null,
    Dp = !1;
  function V_(e, t) {
    if (((e = e.containerInfo), (Md = Xc), (e = Pm(e)), af(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var c = r.anchorOffset,
              h = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, h.nodeType;
            } catch {
              n = null;
              break e;
            }
            var y = 0,
              j = -1,
              R = -1,
              D = 0,
              Z = 0,
              P = e,
              B = null;
            t: for (;;) {
              for (
                var Q;
                P !== n || (c !== 0 && P.nodeType !== 3) || (j = y + c),
                  P !== h || (r !== 0 && P.nodeType !== 3) || (R = y + r),
                  P.nodeType === 3 && (y += P.nodeValue.length),
                  (Q = P.firstChild) !== null;

              )
                (B = P), (P = Q);
              for (;;) {
                if (P === e) break t;
                if (
                  (B === n && ++D === c && (j = y),
                  B === h && ++Z === r && (R = y),
                  (Q = P.nextSibling) !== null)
                )
                  break;
                (P = B), (B = P.parentNode);
              }
              P = Q;
            }
            n = j === -1 || R === -1 ? null : { start: j, end: R };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Od = { focusedElem: e, selectionRange: n }, Xc = !1, Ft = t;
      Ft !== null;

    )
      if (
        ((t = Ft), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Ft = e);
      else
        for (; Ft !== null; ) {
          switch (((t = Ft), (h = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && h !== null) {
                (e = void 0),
                  (n = t),
                  (c = h.memoizedProps),
                  (h = h.memoizedState),
                  (r = n.stateNode);
                try {
                  var ue = Ma(n.type, c, n.elementType === n.type);
                  (e = r.getSnapshotBeforeUpdate(ue, h)),
                    (r.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Te) {
                  et(n, n.return, Te);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Ld(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ld(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ft = e);
            break;
          }
          Ft = t.return;
        }
    return (ue = Dp), (Dp = !1), ue;
  }
  function zp(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gi(e, n), r & 4 && zs(5, n);
        break;
      case 1:
        if ((gi(e, n), r & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (j) {
              et(n, n.return, j);
            }
          else {
            var c = Ma(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (j) {
              et(n, n.return, j);
            }
          }
        r & 64 && Np(n), r & 512 && za(n, n.return);
        break;
      case 3:
        if ((gi(e, n), r & 64 && ((r = n.updateQueue), r !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Ep(r, e);
          } catch (j) {
            et(n, n.return, j);
          }
        }
        break;
      case 26:
        gi(e, n), r & 512 && za(n, n.return);
        break;
      case 27:
      case 5:
        gi(e, n), t === null && r & 4 && Ap(n), r & 512 && za(n, n.return);
        break;
      case 12:
        gi(e, n);
        break;
      case 13:
        gi(e, n), r & 4 && Up(e, n);
        break;
      case 22:
        if (((c = n.memoizedState !== null || mi), !c)) {
          t = (t !== null && t.memoizedState !== null) || St;
          var h = mi,
            y = St;
          (mi = c),
            (St = t) && !y ? Ki(e, n, (n.subtreeFlags & 8772) !== 0) : gi(e, n),
            (mi = h),
            (St = y);
        }
        r & 512 &&
          (n.memoizedProps.mode === "manual"
            ? za(n, n.return)
            : Qn(n, n.return));
        break;
      default:
        gi(e, n);
    }
  }
  function kp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), kp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Nt(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Lt = null,
    Zn = !1;
  function pi(e, t, n) {
    for (n = n.child; n !== null; ) Lp(e, t, n), (n = n.sibling);
  }
  function Lp(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Hl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        St || Qn(n, t),
          pi(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        St || Qn(n, t);
        var r = Lt,
          c = Zn;
        for (
          Lt = n.stateNode, pi(e, t, n), n = n.stateNode, t = n.attributes;
          t.length;

        )
          n.removeAttributeNode(t[0]);
        Nt(n), (Lt = r), (Zn = c);
        break;
      case 5:
        St || Qn(n, t);
      case 6:
        c = Lt;
        var h = Zn;
        if (((Lt = null), pi(e, t, n), (Lt = c), (Zn = h), Lt !== null))
          if (Zn)
            try {
              (e = Lt),
                (r = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r);
            } catch (y) {
              et(n, t, y);
            }
          else
            try {
              Lt.removeChild(n.stateNode);
            } catch (y) {
              et(n, t, y);
            }
        break;
      case 18:
        Lt !== null &&
          (Zn
            ? ((t = Lt),
              (n = n.stateNode),
              t.nodeType === 8
                ? kd(t.parentNode, n)
                : t.nodeType === 1 && kd(t, n),
              Ws(t))
            : kd(Lt, n.stateNode));
        break;
      case 4:
        (r = Lt),
          (c = Zn),
          (Lt = n.stateNode.containerInfo),
          (Zn = !0),
          pi(e, t, n),
          (Lt = r),
          (Zn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        St || Zi(2, n, t), St || Zi(4, n, t), pi(e, t, n);
        break;
      case 1:
        St ||
          (Qn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function" && Rp(n, t, r)),
          pi(e, t, n);
        break;
      case 21:
        pi(e, t, n);
        break;
      case 22:
        St || Qn(n, t),
          (St = (r = St) || n.memoizedState !== null),
          pi(e, t, n),
          (St = r);
        break;
      default:
        pi(e, t, n);
    }
  }
  function Up(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ws(e);
      } catch (n) {
        et(t, t.return, n);
      }
  }
  function Q_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Op()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Op()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function id(e, t) {
    var n = Q_(e);
    t.forEach(function (r) {
      var c = ix.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(c, c));
    });
  }
  function vl(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var c = n[r],
          h = e,
          y = t,
          j = y;
        e: for (; j !== null; ) {
          switch (j.tag) {
            case 27:
            case 5:
              (Lt = j.stateNode), (Zn = !1);
              break e;
            case 3:
              (Lt = j.stateNode.containerInfo), (Zn = !0);
              break e;
            case 4:
              (Lt = j.stateNode.containerInfo), (Zn = !0);
              break e;
          }
          j = j.return;
        }
        if (Lt === null) throw Error(i(160));
        Lp(h, y, c),
          (Lt = null),
          (Zn = !1),
          (h = c.alternate),
          h !== null && (h.return = null),
          (c.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Hp(t, e), (t = t.sibling);
  }
  var zl = null;
  function Hp(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vl(t, e),
          yl(e),
          r & 4 && (Zi(3, e, e.return), zs(3, e), Zi(5, e, e.return));
        break;
      case 1:
        vl(t, e),
          yl(e),
          r & 512 && (St || n === null || Qn(n, n.return)),
          r & 64 &&
            mi &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? r : n.concat(r)))));
        break;
      case 26:
        var c = zl;
        if (
          (vl(t, e),
          yl(e),
          r & 512 && (St || n === null || Qn(n, n.return)),
          r & 4)
        ) {
          var h = n !== null ? n.memoizedState : null;
          if (((r = e.memoizedState), n === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  (r = e.type),
                    (n = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (r) {
                    case "title":
                      (h = c.getElementsByTagName("title")[0]),
                        (!h ||
                          h[on] ||
                          h[Qe] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = c.createElement(r)),
                          c.head.insertBefore(
                            h,
                            c.querySelector("head > title")
                          )),
                        nn(h, r, n),
                        (h[Qe] = e),
                        Be(h),
                        (r = h);
                      break e;
                    case "link":
                      var y = Ag("link", "href", c).get(r + (n.href || ""));
                      if (y) {
                        for (var j = 0; j < y.length; j++)
                          if (
                            ((h = y[j]),
                            h.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              h.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              h.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              h.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            y.splice(j, 1);
                            break t;
                          }
                      }
                      (h = c.createElement(r)),
                        nn(h, r, n),
                        c.head.appendChild(h);
                      break;
                    case "meta":
                      if (
                        (y = Ag("meta", "content", c).get(
                          r + (n.content || "")
                        ))
                      ) {
                        for (j = 0; j < y.length; j++)
                          if (
                            ((h = y[j]),
                            h.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              h.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              h.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              h.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            y.splice(j, 1);
                            break t;
                          }
                      }
                      (h = c.createElement(r)),
                        nn(h, r, n),
                        c.head.appendChild(h);
                      break;
                    default:
                      throw Error(i(468, r));
                  }
                  (h[Qe] = e), Be(h), (r = h);
                }
                e.stateNode = r;
              } else Cg(c, e.type, e.stateNode);
            else e.stateNode = Rg(c, r, e.memoizedProps);
          else
            h !== r
              ? (h === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : h.count--,
                r === null
                  ? Cg(c, e.type, e.stateNode)
                  : Rg(c, r, e.memoizedProps))
              : r === null &&
                e.stateNode !== null &&
                Cp(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (r & 4 && e.alternate === null) {
          (c = e.stateNode), (h = e.memoizedProps);
          try {
            for (var R = c.firstChild; R; ) {
              var D = R.nextSibling,
                Z = R.nodeName;
              R[on] ||
                Z === "HEAD" ||
                Z === "BODY" ||
                Z === "SCRIPT" ||
                Z === "STYLE" ||
                (Z === "LINK" && R.rel.toLowerCase() === "stylesheet") ||
                c.removeChild(R),
                (R = D);
            }
            for (var P = e.type, B = c.attributes; B.length; )
              c.removeAttributeNode(B[0]);
            nn(c, P, h), (c[Qe] = e), (c[Le] = h);
          } catch (ue) {
            et(e, e.return, ue);
          }
        }
      case 5:
        if (
          (vl(t, e),
          yl(e),
          r & 512 && (St || n === null || Qn(n, n.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            ur(c, "");
          } catch (ue) {
            et(e, e.return, ue);
          }
        }
        r & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), Cp(e, c, n !== null ? n.memoizedProps : c)),
          r & 1024 && (ld = !0);
        break;
      case 6:
        if ((vl(t, e), yl(e), r & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (r = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = r;
          } catch (ue) {
            et(e, e.return, ue);
          }
        }
        break;
      case 3:
        if (
          ((Bc = null),
          (c = zl),
          (zl = Uc(t.containerInfo)),
          vl(t, e),
          (zl = c),
          yl(e),
          r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ws(t.containerInfo);
          } catch (ue) {
            et(e, e.return, ue);
          }
        ld && ((ld = !1), Bp(e));
        break;
      case 4:
        (r = zl),
          (zl = Uc(e.stateNode.containerInfo)),
          vl(t, e),
          yl(e),
          (zl = r);
        break;
      case 12:
        vl(t, e), yl(e);
        break;
      case 13:
        vl(t, e),
          yl(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (hd = Kt()),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), id(e, r)));
        break;
      case 22:
        if (
          (r & 512 && (St || n === null || Qn(n, n.return)),
          (R = e.memoizedState !== null),
          (D = n !== null && n.memoizedState !== null),
          (Z = mi),
          (P = St),
          (mi = Z || R),
          (St = P || D),
          vl(t, e),
          (St = P),
          (mi = Z),
          yl(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          r & 8192 &&
            ((t._visibility = R ? t._visibility & -2 : t._visibility | 1),
            R && ((t = mi || St), n === null || D || t || wr(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (n === null) {
                D = n = t;
                try {
                  if (((c = D.stateNode), R))
                    (h = c.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none");
                  else {
                    (y = D.stateNode), (j = D.memoizedProps.style);
                    var Q =
                      j != null && j.hasOwnProperty("display")
                        ? j.display
                        : null;
                    y.style.display =
                      Q == null || typeof Q == "boolean" ? "" : ("" + Q).trim();
                  }
                } catch (ue) {
                  et(D, D.return, ue);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                D = t;
                try {
                  D.stateNode.nodeValue = R ? "" : D.memoizedProps;
                } catch (ue) {
                  et(D, D.return, ue);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null &&
            ((n = r.retryQueue),
            n !== null && ((r.retryQueue = null), id(e, n))));
        break;
      case 19:
        vl(t, e),
          yl(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), id(e, r)));
        break;
      case 21:
        break;
      default:
        vl(t, e), yl(e);
    }
  }
  function yl(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var n = e.return; n !== null; ) {
              if (Mp(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(i(160));
          }
          switch (r.tag) {
            case 27:
              var c = r.stateNode,
                h = td(e);
              Sc(e, h, c);
              break;
            case 5:
              var y = r.stateNode;
              r.flags & 32 && (ur(y, ""), (r.flags &= -33));
              var j = td(e);
              Sc(e, j, y);
              break;
            case 3:
            case 4:
              var R = r.stateNode.containerInfo,
                D = td(e);
              nd(e, D, R);
              break;
            default:
              throw Error(i(161));
          }
        }
      } catch (Z) {
        et(e, e.return, Z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Bp(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function gi(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) zp(e, t.alternate, t), (t = t.sibling);
  }
  function wr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zi(4, t, t.return), wr(t);
          break;
        case 1:
          Qn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Rp(t, t.return, n),
            wr(t);
          break;
        case 26:
        case 27:
        case 5:
          Qn(t, t.return), wr(t);
          break;
        case 22:
          Qn(t, t.return), t.memoizedState === null && wr(t);
          break;
        default:
          wr(t);
      }
      e = e.sibling;
    }
  }
  function Ki(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate,
        c = e,
        h = t,
        y = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Ki(c, h, n), zs(4, h);
          break;
        case 1:
          if (
            (Ki(c, h, n),
            (r = h),
            (c = r.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (D) {
              et(r, r.return, D);
            }
          if (((r = h), (c = r.updateQueue), c !== null)) {
            var j = r.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  wp(R[c], j);
            } catch (D) {
              et(r, r.return, D);
            }
          }
          n && y & 64 && Np(h), za(h, h.return);
          break;
        case 26:
        case 27:
        case 5:
          Ki(c, h, n), n && r === null && y & 4 && Ap(h), za(h, h.return);
          break;
        case 12:
          Ki(c, h, n);
          break;
        case 13:
          Ki(c, h, n), n && y & 4 && Up(c, h);
          break;
        case 22:
          h.memoizedState === null && Ki(c, h, n), za(h, h.return);
          break;
        default:
          Ki(c, h, n);
      }
      t = t.sibling;
    }
  }
  function ad(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Ts(n));
  }
  function rd(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ts(e));
  }
  function $i(e, t, n, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Yp(e, t, n, r), (t = t.sibling);
  }
  function Yp(e, t, n, r) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $i(e, t, n, r), c & 2048 && zs(9, t);
        break;
      case 3:
        $i(e, t, n, r),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ts(e)));
        break;
      case 12:
        if (c & 2048) {
          $i(e, t, n, r), (e = t.stateNode);
          try {
            var h = t.memoizedProps,
              y = h.id,
              j = h.onPostCommit;
            typeof j == "function" &&
              j(
                y,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (R) {
            et(t, t.return, R);
          }
        } else $i(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        (h = t.stateNode),
          t.memoizedState !== null
            ? h._visibility & 4
              ? $i(e, t, n, r)
              : ks(e, t)
            : h._visibility & 4
            ? $i(e, t, n, r)
            : ((h._visibility |= 4),
              Er(e, t, n, r, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && ad(t.alternate, t);
        break;
      case 24:
        $i(e, t, n, r), c & 2048 && rd(t.alternate, t);
        break;
      default:
        $i(e, t, n, r);
    }
  }
  function Er(e, t, n, r, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var h = e,
        y = t,
        j = n,
        R = r,
        D = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Er(h, y, j, R, c), zs(8, y);
          break;
        case 23:
          break;
        case 22:
          var Z = y.stateNode;
          y.memoizedState !== null
            ? Z._visibility & 4
              ? Er(h, y, j, R, c)
              : ks(h, y)
            : ((Z._visibility |= 4), Er(h, y, j, R, c)),
            c && D & 2048 && ad(y.alternate, y);
          break;
        case 24:
          Er(h, y, j, R, c), c && D & 2048 && rd(y.alternate, y);
          break;
        default:
          Er(h, y, j, R, c);
      }
      t = t.sibling;
    }
  }
  function ks(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          r = t,
          c = r.flags;
        switch (r.tag) {
          case 22:
            ks(n, r), c & 2048 && ad(r.alternate, r);
            break;
          case 24:
            ks(n, r), c & 2048 && rd(r.alternate, r);
            break;
          default:
            ks(n, r);
        }
        t = t.sibling;
      }
  }
  var Ls = 8192;
  function Nr(e) {
    if (e.subtreeFlags & Ls)
      for (e = e.child; e !== null; ) qp(e), (e = e.sibling);
  }
  function qp(e) {
    switch (e.tag) {
      case 26:
        Nr(e),
          e.flags & Ls &&
            e.memoizedState !== null &&
            Dx(zl, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Nr(e);
        break;
      case 3:
      case 4:
        var t = zl;
        (zl = Uc(e.stateNode.containerInfo)), Nr(e), (zl = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ls), (Ls = 16777216), Nr(e), (Ls = t))
            : Nr(e));
        break;
      default:
        Nr(e);
    }
  }
  function Xp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Us(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (Ft = r), Vp(r, e);
        }
      Xp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Gp(e), (e = e.sibling);
  }
  function Gp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Us(e), e.flags & 2048 && Zi(9, e, e.return);
        break;
      case 3:
        Us(e);
        break;
      case 12:
        Us(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), jc(e))
          : Us(e);
        break;
      default:
        Us(e);
    }
  }
  function jc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (Ft = r), Vp(r, e);
        }
      Xp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Zi(8, t, t.return), jc(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), jc(t));
          break;
        default:
          jc(t);
      }
      e = e.sibling;
    }
  }
  function Vp(e, t) {
    for (; Ft !== null; ) {
      var n = Ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Zi(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Ts(n.memoizedState.cache);
      }
      if (((r = n.child), r !== null)) (r.return = n), (Ft = r);
      else
        e: for (n = e; Ft !== null; ) {
          r = Ft;
          var c = r.sibling,
            h = r.return;
          if ((kp(r), r === n)) {
            Ft = null;
            break e;
          }
          if (c !== null) {
            (c.return = h), (Ft = c);
            break e;
          }
          Ft = h;
        }
    }
  }
  function Z_(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _l(e, t, n, r) {
    return new Z_(e, t, n, r);
  }
  function sd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Fi(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = _l(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 31457280),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Qp(e, t) {
    e.flags &= 31457282;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Tc(e, t, n, r, c, h) {
    var y = 0;
    if (((r = e), typeof e == "function")) sd(e) && (y = 1);
    else if (typeof e == "string")
      y = Mx(e, n, nt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case g:
          return ka(n.children, c, h, t);
        case p:
          (y = 8), (c |= 24);
          break;
        case v:
          return (
            (e = _l(12, n, t, c | 2)), (e.elementType = v), (e.lanes = h), e
          );
        case T:
          return (e = _l(13, n, t, c)), (e.elementType = T), (e.lanes = h), e;
        case E:
          return (e = _l(19, n, t, c)), (e.elementType = E), (e.lanes = h), e;
        case z:
          return Zp(n, c, h, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case b:
              case _:
                y = 10;
                break e;
              case x:
                y = 9;
                break e;
              case w:
                y = 11;
                break e;
              case A:
                y = 14;
                break e;
              case O:
                (y = 16), (r = null);
                break e;
            }
          (y = 29),
            (n = Error(i(130, e === null ? "null" : typeof e, ""))),
            (r = null);
      }
    return (
      (t = _l(y, n, t, c)), (t.elementType = e), (t.type = r), (t.lanes = h), t
    );
  }
  function ka(e, t, n, r) {
    return (e = _l(7, e, r, t)), (e.lanes = n), e;
  }
  function Zp(e, t, n, r) {
    (e = _l(22, e, r, t)), (e.elementType = z), (e.lanes = n);
    var c = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var h = c._current;
        if (h === null) throw Error(i(456));
        if ((c._pendingVisibility & 2) === 0) {
          var y = Ui(h, 2);
          y !== null && ((c._pendingVisibility |= 2), jn(y, h, 2));
        }
      },
      attach: function () {
        var h = c._current;
        if (h === null) throw Error(i(456));
        if ((c._pendingVisibility & 2) !== 0) {
          var y = Ui(h, 2);
          y !== null && ((c._pendingVisibility &= -3), jn(y, h, 2));
        }
      },
    };
    return (e.stateNode = c), e;
  }
  function ud(e, t, n) {
    return (e = _l(6, e, null, t)), (e.lanes = n), e;
  }
  function cd(e, t, n) {
    return (
      (t = _l(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function vi(e) {
    e.flags |= 4;
  }
  function Kp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Mg(t))) {
      if (
        ((t = gl.current),
        t !== null &&
          ((Xe & 4194176) === Xe
            ? Yl !== null
            : ((Xe & 62914560) !== Xe && (Xe & 536870912) === 0) || t !== Yl))
      )
        throw ((bs = mf), o0);
      e.flags |= 8192;
    }
  }
  function wc(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? je() : 536870912), (e.lanes |= t), (Ar |= t));
  }
  function Hs(e, t) {
    if (!Ze)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function mt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (r |= c.subtreeFlags & 31457280),
          (r |= c.flags & 31457280),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (n |= c.lanes | c.childLanes),
          (r |= c.subtreeFlags),
          (r |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function K_(e, t, n) {
    var r = t.pendingProps;
    switch ((df(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return mt(t), null;
      case 1:
        return mt(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          hi(Gt),
          Ot(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (vs(t)
              ? vi(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Dl !== null && (vd(Dl), (Dl = null)))),
          mt(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (vi(t),
              n !== null ? (mt(t), Kp(t, n)) : (mt(t), (t.flags &= -16777217)))
            : n
            ? n !== e.memoizedState
              ? (vi(t), mt(t), Kp(t, n))
              : (mt(t), (t.flags &= -16777217))
            : (e.memoizedProps !== r && vi(t), mt(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Zt(t), (n = we.current);
        var c = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== r && vi(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return mt(t), null;
          }
          (e = nt.current),
            vs(t) ? u0(t) : ((e = jg(c, r, n)), (t.stateNode = e), vi(t));
        }
        return mt(t), null;
      case 5:
        if ((Zt(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== r && vi(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return mt(t), null;
          }
          if (((e = nt.current), vs(t))) u0(t);
          else {
            switch (((c = Lc(we.current)), e)) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (e = c.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof r.is == "string"
                        ? c.createElement("select", { is: r.is })
                        : c.createElement("select")),
                      r.multiple
                        ? (e.multiple = !0)
                        : r.size && (e.size = r.size);
                    break;
                  default:
                    e =
                      typeof r.is == "string"
                        ? c.createElement(n, { is: r.is })
                        : c.createElement(n);
                }
            }
            (e[Qe] = t), (e[Le] = r);
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            t.stateNode = e;
            e: switch ((nn(e, n, r), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!r.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && vi(t);
          }
        }
        return mt(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && vi(t);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = we.current), vs(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (r = null),
              (c = Sn),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  r = c.memoizedProps;
              }
            (e[Qe] = t),
              (e = !!(
                e.nodeValue === n ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                vg(e.nodeValue, n)
              )),
              e || wa(t);
          } else (e = Lc(e).createTextNode(r)), (e[Qe] = t), (t.stateNode = e);
        }
        return mt(t), null;
      case 13:
        if (
          ((r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = vs(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(i(317));
              c[Qe] = t;
            } else
              ys(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            mt(t), (c = !1);
          } else Dl !== null && (vd(Dl), (Dl = null)), (c = !0);
          if (!c) return t.flags & 256 ? (ci(t), t) : (ci(t), null);
        }
        if ((ci(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (
          ((n = r !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          (r = t.child),
            (c = null),
            r.alternate !== null &&
              r.alternate.memoizedState !== null &&
              r.alternate.memoizedState.cachePool !== null &&
              (c = r.alternate.memoizedState.cachePool.pool);
          var h = null;
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (h = r.memoizedState.cachePool.pool),
            h !== c && (r.flags |= 2048);
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          wc(t, t.updateQueue),
          mt(t),
          null
        );
      case 4:
        return Ot(), e === null && Rd(t.stateNode.containerInfo), mt(t), null;
      case 10:
        return hi(t.type), mt(t), null;
      case 19:
        if ((De(Xt), (c = t.memoizedState), c === null)) return mt(t), null;
        if (((r = (t.flags & 128) !== 0), (h = c.rendering), h === null))
          if (r) Hs(c, !1);
          else {
            if (jt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = uc(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Hs(c, !1),
                      e = h.updateQueue,
                      t.updateQueue = e,
                      wc(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Qp(n, e), (n = n.sibling);
                  return Ve(Xt, (Xt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Kt() > Ec &&
              ((t.flags |= 128), (r = !0), Hs(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = uc(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                wc(t, e),
                Hs(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !h.alternate &&
                  !Ze)
              )
                return mt(t), null;
            } else
              2 * Kt() - c.renderingStartTime > Ec &&
                n !== 536870912 &&
                ((t.flags |= 128), (r = !0), Hs(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((e = c.last),
              e !== null ? (e.sibling = h) : (t.child = h),
              (c.last = h));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Kt()),
            (t.sibling = null),
            (e = Xt.current),
            Ve(Xt, r ? (e & 1) | 2 : e & 1),
            t)
          : (mt(t), null);
      case 22:
      case 23:
        return (
          ci(t),
          gf(),
          (r = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
            : r && (t.flags |= 8192),
          r
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : mt(t),
          (n = t.updateQueue),
          n !== null && wc(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (r = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          r !== n && (t.flags |= 2048),
          e !== null && De(Na),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          hi(Gt),
          mt(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function $_(e, t) {
    switch ((df(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          hi(Gt),
          Ot(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Zt(t), null;
      case 13:
        if (
          (ci(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          ys();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return De(Xt), null;
      case 4:
        return Ot(), null;
      case 10:
        return hi(t.type), null;
      case 22:
      case 23:
        return (
          ci(t),
          gf(),
          e !== null && De(Na),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return hi(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $p(e, t) {
    switch ((df(t), t.tag)) {
      case 3:
        hi(Gt), Ot();
        break;
      case 26:
      case 27:
      case 5:
        Zt(t);
        break;
      case 4:
        Ot();
        break;
      case 13:
        ci(t);
        break;
      case 19:
        De(Xt);
        break;
      case 10:
        hi(t.type);
        break;
      case 22:
      case 23:
        ci(t), gf(), e !== null && De(Na);
        break;
      case 24:
        hi(Gt);
    }
  }
  var F_ = {
      getCacheForType: function (e) {
        var t = fn(Gt),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    P_ = typeof WeakMap == "function" ? WeakMap : Map,
    pt = 0,
    it = null,
    Ue = null,
    Xe = 0,
    at = 0,
    Kn = null,
    yi = !1,
    Rr = !1,
    od = !1,
    _i = 0,
    jt = 0,
    Pi = 0,
    La = 0,
    fd = 0,
    xl = 0,
    Ar = 0,
    Bs = null,
    Xl = null,
    dd = !1,
    hd = 0,
    Ec = 1 / 0,
    Nc = null,
    Ji = null,
    Rc = !1,
    Ua = null,
    Ys = 0,
    md = 0,
    pd = null,
    qs = 0,
    gd = null;
  function $n() {
    if ((pt & 2) !== 0 && Xe !== 0) return Xe & -Xe;
    if (L.T !== null) {
      var e = xr;
      return e !== 0 ? e : Td();
    }
    return Et();
  }
  function Fp() {
    xl === 0 && (xl = (Xe & 536870912) === 0 || Ze ? zi() : 536870912);
    var e = gl.current;
    return e !== null && (e.flags |= 32), xl;
  }
  function jn(e, t, n) {
    ((e === it && at === 2) || e.cancelPendingCommit !== null) &&
      (Cr(e, 0), xi(e, Xe, xl, !1)),
      ze(e, n),
      ((pt & 2) === 0 || e !== it) &&
        (e === it &&
          ((pt & 2) === 0 && (La |= n), jt === 4 && xi(e, Xe, xl, !1)),
        Gl(e));
  }
  function Pp(e, t, n) {
    if ((pt & 6) !== 0) throw Error(i(327));
    var r = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || ul(e, t),
      c = r ? I_(e, t) : xd(e, t, !0),
      h = r;
    do {
      if (c === 0) {
        Rr && !r && xi(e, t, 0, !1);
        break;
      } else if (c === 6) xi(e, t, 0, !yi);
      else {
        if (((n = e.current.alternate), h && !J_(n))) {
          (c = xd(e, t, !1)), (h = !1);
          continue;
        }
        if (c === 2) {
          if (((h = t), e.errorRecoveryDisabledLanes & h)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            t = y;
            e: {
              var j = e;
              c = Bs;
              var R = j.current.memoizedState.isDehydrated;
              if ((R && (Cr(j, y).flags |= 256), (y = xd(j, y, !1)), y !== 2)) {
                if (od && !R) {
                  (j.errorRecoveryDisabledLanes |= h), (La |= h), (c = 4);
                  break e;
                }
                (h = Xl), (Xl = c), h !== null && vd(h);
              }
              c = y;
            }
            if (((h = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Cr(e, 0), xi(e, t, 0, !0);
          break;
        }
        e: {
          switch (((r = e), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194176) === t) {
                xi(r, t, xl, !yi);
                break e;
              }
              break;
            case 2:
              Xl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if (
            ((r.finishedWork = n),
            (r.finishedLanes = t),
            (t & 62914560) === t && ((h = hd + 300 - Kt()), 10 < h))
          ) {
            if ((xi(r, t, xl, !yi), sl(r, 0) !== 0)) break e;
            r.timeoutHandle = xg(
              Jp.bind(null, r, n, Xl, Nc, dd, t, xl, La, Ar, yi, 2, -0, 0),
              h
            );
            break e;
          }
          Jp(r, n, Xl, Nc, dd, t, xl, La, Ar, yi, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Gl(e);
  }
  function vd(e) {
    Xl === null ? (Xl = e) : Xl.push.apply(Xl, e);
  }
  function Jp(e, t, n, r, c, h, y, j, R, D, Z, P, B) {
    var Q = t.subtreeFlags;
    if (
      (Q & 8192 || (Q & 16785408) === 16785408) &&
      ((Ks = { stylesheets: null, count: 0, unsuspend: Ox }),
      qp(t),
      (t = zx()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(ig.bind(null, e, n, r, c, y, j, R, 1, P, B))),
        xi(e, h, y, !D);
      return;
    }
    ig(e, n, r, c, y, j, R, Z, P, B);
  }
  function J_(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var r = 0; r < n.length; r++) {
          var c = n[r],
            h = c.getSnapshot;
          c = c.value;
          try {
            if (!Vn(h(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function xi(e, t, n, r) {
    (t &= ~fd),
      (t &= ~La),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      r && (e.warmLanes |= t),
      (r = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var h = 31 - xt(c),
        y = 1 << h;
      (r[h] = -1), (c &= ~y);
    }
    n !== 0 && be(e, n, t);
  }
  function Ac() {
    return (pt & 6) === 0 ? (Xs(0), !1) : !0;
  }
  function yd() {
    if (Ue !== null) {
      if (at === 0) var e = Ue.return;
      else (e = Ue), (di = Oa = null), Tf(e), (yr = null), (Ss = 0), (e = Ue);
      for (; e !== null; ) $p(e.alternate, e), (e = e.return);
      Ue = null;
    }
  }
  function Cr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), gx(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      yd(),
      (it = e),
      (Ue = n = Fi(e.current, null)),
      (Xe = t),
      (at = 0),
      (Kn = null),
      (yi = !1),
      (Rr = ul(e, t)),
      (od = !1),
      (Ar = xl = fd = La = Pi = jt = 0),
      (Xl = Bs = null),
      (dd = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var c = 31 - xt(r),
          h = 1 << c;
        (t |= e[c]), (r &= ~h);
      }
    return (_i = t), Iu(), n;
  }
  function Wp(e, t) {
    (Re = null),
      (L.H = ql),
      t === xs
        ? ((t = h0()), (at = 3))
        : t === o0
        ? ((t = h0()), (at = 4))
        : (at =
            t === fp
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Kn = t),
      Ue === null && ((jt = 1), _c(e, hl(t, e.current)));
  }
  function Ip() {
    var e = L.H;
    return (L.H = ql), e === null ? ql : e;
  }
  function eg() {
    var e = L.A;
    return (L.A = F_), e;
  }
  function _d() {
    (jt = 4),
      yi || ((Xe & 4194176) !== Xe && gl.current !== null) || (Rr = !0),
      ((Pi & 134217727) === 0 && (La & 134217727) === 0) ||
        it === null ||
        xi(it, Xe, xl, !1);
  }
  function xd(e, t, n) {
    var r = pt;
    pt |= 2;
    var c = Ip(),
      h = eg();
    (it !== e || Xe !== t) && ((Nc = null), Cr(e, t)), (t = !1);
    var y = jt;
    e: do
      try {
        if (at !== 0 && Ue !== null) {
          var j = Ue,
            R = Kn;
          switch (at) {
            case 8:
              yd(), (y = 6);
              break e;
            case 3:
            case 2:
            case 6:
              gl.current === null && (t = !0);
              var D = at;
              if (((at = 0), (Kn = null), Mr(e, j, R, D), n && Rr)) {
                y = 0;
                break e;
              }
              break;
            default:
              (D = at), (at = 0), (Kn = null), Mr(e, j, R, D);
          }
        }
        W_(), (y = jt);
        break;
      } catch (Z) {
        Wp(e, Z);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (di = Oa = null),
      (pt = r),
      (L.H = c),
      (L.A = h),
      Ue === null && ((it = null), (Xe = 0), Iu()),
      y
    );
  }
  function W_() {
    for (; Ue !== null; ) tg(Ue);
  }
  function I_(e, t) {
    var n = pt;
    pt |= 2;
    var r = Ip(),
      c = eg();
    it !== e || Xe !== t
      ? ((Nc = null), (Ec = Kt() + 500), Cr(e, t))
      : (Rr = ul(e, t));
    e: do
      try {
        if (at !== 0 && Ue !== null) {
          t = Ue;
          var h = Kn;
          t: switch (at) {
            case 1:
              (at = 0), (Kn = null), Mr(e, t, h, 1);
              break;
            case 2:
              if (f0(h)) {
                (at = 0), (Kn = null), ng(t);
                break;
              }
              (t = function () {
                at === 2 && it === e && (at = 7), Gl(e);
              }),
                h.then(t, t);
              break e;
            case 3:
              at = 7;
              break e;
            case 4:
              at = 5;
              break e;
            case 7:
              f0(h)
                ? ((at = 0), (Kn = null), ng(t))
                : ((at = 0), (Kn = null), Mr(e, t, h, 7));
              break;
            case 5:
              var y = null;
              switch (Ue.tag) {
                case 26:
                  y = Ue.memoizedState;
                case 5:
                case 27:
                  var j = Ue;
                  if (!y || Mg(y)) {
                    (at = 0), (Kn = null);
                    var R = j.sibling;
                    if (R !== null) Ue = R;
                    else {
                      var D = j.return;
                      D !== null ? ((Ue = D), Cc(D)) : (Ue = null);
                    }
                    break t;
                  }
              }
              (at = 0), (Kn = null), Mr(e, t, h, 5);
              break;
            case 6:
              (at = 0), (Kn = null), Mr(e, t, h, 6);
              break;
            case 8:
              yd(), (jt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        ex();
        break;
      } catch (Z) {
        Wp(e, Z);
      }
    while (!0);
    return (
      (di = Oa = null),
      (L.H = r),
      (L.A = c),
      (pt = n),
      Ue !== null ? 0 : ((it = null), (Xe = 0), Iu(), jt)
    );
  }
  function ex() {
    for (; Ue !== null && !Nl(); ) tg(Ue);
  }
  function tg(e) {
    var t = jp(e.alternate, e, _i);
    (e.memoizedProps = e.pendingProps), t === null ? Cc(e) : (Ue = t);
  }
  function ng(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = vp(n, t, t.pendingProps, t.type, void 0, Xe);
        break;
      case 11:
        t = vp(n, t, t.pendingProps, t.type.render, t.ref, Xe);
        break;
      case 5:
        Tf(t);
      default:
        $p(n, t), (t = Ue = Qp(t, _i)), (t = jp(n, t, _i));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Cc(e) : (Ue = t);
  }
  function Mr(e, t, n, r) {
    (di = Oa = null), Tf(t), (yr = null), (Ss = 0);
    var c = t.return;
    try {
      if (X_(e, c, t, n, Xe)) {
        (jt = 1), _c(e, hl(n, e.current)), (Ue = null);
        return;
      }
    } catch (h) {
      if (c !== null) throw ((Ue = c), h);
      (jt = 1), _c(e, hl(n, e.current)), (Ue = null);
      return;
    }
    t.flags & 32768
      ? (Ze || r === 1
          ? (e = !0)
          : Rr || (Xe & 536870912) !== 0
          ? (e = !1)
          : ((yi = e = !0),
            (r === 2 || r === 3 || r === 6) &&
              ((r = gl.current),
              r !== null && r.tag === 13 && (r.flags |= 16384))),
        lg(t, e))
      : Cc(t);
  }
  function Cc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lg(t, yi);
        return;
      }
      e = t.return;
      var n = K_(t.alternate, t, _i);
      if (n !== null) {
        Ue = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ue = t;
        return;
      }
      Ue = t = e;
    } while (t !== null);
    jt === 0 && (jt = 5);
  }
  function lg(e, t) {
    do {
      var n = $_(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (Ue = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ue = e;
        return;
      }
      Ue = e = n;
    } while (e !== null);
    (jt = 6), (Ue = null);
  }
  function ig(e, t, n, r, c, h, y, j, R, D) {
    var Z = L.T,
      P = W.p;
    try {
      (W.p = 2), (L.T = null), tx(e, t, n, r, P, c, h, y, j, R, D);
    } finally {
      (L.T = Z), (W.p = P);
    }
  }
  function tx(e, t, n, r, c, h, y, j) {
    do Or();
    while (Ua !== null);
    if ((pt & 6) !== 0) throw Error(i(327));
    var R = e.finishedWork;
    if (((r = e.finishedLanes), R === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), R === e.current))
      throw Error(i(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var D = R.lanes | R.childLanes;
    if (
      ((D |= cf),
      te(e, r, D, h, y, j),
      e === it && ((Ue = it = null), (Xe = 0)),
      ((R.subtreeFlags & 10256) === 0 && (R.flags & 10256) === 0) ||
        Rc ||
        ((Rc = !0),
        (md = D),
        (pd = n),
        ax(rn, function () {
          return Or(), null;
        })),
      (n = (R.flags & 15990) !== 0),
      (R.subtreeFlags & 15990) !== 0 || n
        ? ((n = L.T),
          (L.T = null),
          (h = W.p),
          (W.p = 2),
          (y = pt),
          (pt |= 4),
          V_(e, R),
          Hp(R, e),
          w_(Od, e.containerInfo),
          (Xc = !!Md),
          (Od = Md = null),
          (e.current = R),
          zp(e, R.alternate, R),
          Ul(),
          (pt = y),
          (W.p = h),
          (L.T = n))
        : (e.current = R),
      Rc ? ((Rc = !1), (Ua = e), (Ys = r)) : ag(e, D),
      (D = e.pendingLanes),
      D === 0 && (Ji = null),
      Di(R.stateNode),
      Gl(e),
      t !== null)
    )
      for (c = e.onRecoverableError, R = 0; R < t.length; R++)
        (D = t[R]), c(D.value, { componentStack: D.stack });
    return (
      (Ys & 3) !== 0 && Or(),
      (D = e.pendingLanes),
      (r & 4194218) !== 0 && (D & 42) !== 0
        ? e === gd
          ? qs++
          : ((qs = 0), (gd = e))
        : (qs = 0),
      Xs(0),
      null
    );
  }
  function ag(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ts(t)));
  }
  function Or() {
    if (Ua !== null) {
      var e = Ua,
        t = md;
      md = 0;
      var n = Se(Ys),
        r = L.T,
        c = W.p;
      try {
        if (((W.p = 32 > n ? 32 : n), (L.T = null), Ua === null)) var h = !1;
        else {
          (n = pd), (pd = null);
          var y = Ua,
            j = Ys;
          if (((Ua = null), (Ys = 0), (pt & 6) !== 0)) throw Error(i(331));
          var R = pt;
          if (
            ((pt |= 4),
            Gp(y.current),
            Yp(y, y.current, j, n),
            (pt = R),
            Xs(0, !1),
            dt && typeof dt.onPostCommitFiberRoot == "function")
          )
            try {
              dt.onPostCommitFiberRoot(Hl, y);
            } catch {}
          h = !0;
        }
        return h;
      } finally {
        (W.p = c), (L.T = r), ag(e, t);
      }
    }
    return !1;
  }
  function rg(e, t, n) {
    (t = hl(n, t)),
      (t = Hf(e.stateNode, t, 2)),
      (e = Qi(e, t, 2)),
      e !== null && (ze(e, 2), Gl(e));
  }
  function et(e, t, n) {
    if (e.tag === 3) rg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rg(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Ji === null || !Ji.has(r)))
          ) {
            (e = hl(n, e)),
              (n = cp(2)),
              (r = Qi(t, n, 2)),
              r !== null && (op(n, r, t, e), ze(r, 2), Gl(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function bd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new P_();
      var c = new Set();
      r.set(t, c);
    } else (c = r.get(t)), c === void 0 && ((c = new Set()), r.set(t, c));
    c.has(n) ||
      ((od = !0), c.add(n), (e = nx.bind(null, e, t, n)), t.then(e, e));
  }
  function nx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      it === e &&
        (Xe & n) === n &&
        (jt === 4 || (jt === 3 && (Xe & 62914560) === Xe && 300 > Kt() - hd)
          ? (pt & 2) === 0 && Cr(e, 0)
          : (fd |= n),
        Ar === Xe && (Ar = 0)),
      Gl(e);
  }
  function sg(e, t) {
    t === 0 && (t = je()), (e = Ui(e, t)), e !== null && (ze(e, t), Gl(e));
  }
  function lx(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), sg(e, n);
  }
  function ix(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          c = e.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    r !== null && r.delete(t), sg(e, n);
  }
  function ax(e, t) {
    return al(e, t);
  }
  var Mc = null,
    Dr = null,
    Sd = !1,
    Oc = !1,
    jd = !1,
    Ha = 0;
  function Gl(e) {
    e !== Dr &&
      e.next === null &&
      (Dr === null ? (Mc = Dr = e) : (Dr = Dr.next = e)),
      (Oc = !0),
      Sd || ((Sd = !0), sx(rx));
  }
  function Xs(e, t) {
    if (!jd && Oc) {
      jd = !0;
      do
        for (var n = !1, r = Mc; r !== null; ) {
          if (e !== 0) {
            var c = r.pendingLanes;
            if (c === 0) var h = 0;
            else {
              var y = r.suspendedLanes,
                j = r.pingedLanes;
              (h = (1 << (31 - xt(42 | e) + 1)) - 1),
                (h &= c & ~(y & ~j)),
                (h = h & 201326677 ? (h & 201326677) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((n = !0), og(r, h));
          } else
            (h = Xe),
              (h = sl(r, r === it ? h : 0)),
              (h & 3) === 0 || ul(r, h) || ((n = !0), og(r, h));
          r = r.next;
        }
      while (n);
      jd = !1;
    }
  }
  function rx() {
    Oc = Sd = !1;
    var e = 0;
    Ha !== 0 && (px() && (e = Ha), (Ha = 0));
    for (var t = Kt(), n = null, r = Mc; r !== null; ) {
      var c = r.next,
        h = ug(r, t);
      h === 0
        ? ((r.next = null),
          n === null ? (Mc = c) : (n.next = c),
          c === null && (Dr = n))
        : ((n = r), (e !== 0 || (h & 3) !== 0) && (Oc = !0)),
        (r = c);
    }
    Xs(e);
  }
  function ug(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        c = e.expirationTimes,
        h = e.pendingLanes & -62914561;
      0 < h;

    ) {
      var y = 31 - xt(h),
        j = 1 << y,
        R = c[y];
      R === -1
        ? ((j & n) === 0 || (j & r) !== 0) && (c[y] = Al(j, t))
        : R <= t && (e.expiredLanes |= j),
        (h &= ~j);
    }
    if (
      ((t = it),
      (n = Xe),
      (n = sl(e, e === t ? n : 0)),
      (r = e.callbackNode),
      n === 0 || (e === t && at === 2) || e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && st(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ul(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((r !== null && st(r), Se(n))) {
        case 2:
        case 8:
          n = ot;
          break;
        case 32:
          n = rn;
          break;
        case 268435456:
          n = rl;
          break;
        default:
          n = rn;
      }
      return (
        (r = cg.bind(null, e)),
        (n = al(n, r)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      r !== null && r !== null && st(r),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function cg(e, t) {
    var n = e.callbackNode;
    if (Or() && e.callbackNode !== n) return null;
    var r = Xe;
    return (
      (r = sl(e, e === it ? r : 0)),
      r === 0
        ? null
        : (Pp(e, r, t),
          ug(e, Kt()),
          e.callbackNode != null && e.callbackNode === n
            ? cg.bind(null, e)
            : null)
    );
  }
  function og(e, t) {
    if (Or()) return null;
    Pp(e, t, !0);
  }
  function sx(e) {
    vx(function () {
      (pt & 6) !== 0 ? al(Rl, e) : e();
    });
  }
  function Td() {
    return Ha === 0 && (Ha = zi()), Ha;
  }
  function fg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Zu("" + e);
  }
  function dg(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function ux(e, t, n, r, c) {
    if (t === "submit" && n && n.stateNode === c) {
      var h = fg((c[Le] || null).action),
        y = r.submitter;
      y &&
        ((t = (t = y[Le] || null)
          ? fg(t.formAction)
          : y.getAttribute("formAction")),
        t !== null && ((h = t), (y = null)));
      var j = new Pu("action", "action", null, r, c);
      e.push({
        event: j,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (Ha !== 0) {
                  var R = y ? dg(c, y) : new FormData(c);
                  Df(
                    n,
                    { pending: !0, data: R, method: c.method, action: h },
                    null,
                    R
                  );
                }
              } else
                typeof h == "function" &&
                  (j.preventDefault(),
                  (R = y ? dg(c, y) : new FormData(c)),
                  Df(
                    n,
                    { pending: !0, data: R, method: c.method, action: h },
                    h,
                    R
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var wd = 0; wd < i0.length; wd++) {
    var Ed = i0[wd],
      cx = Ed.toLowerCase(),
      ox = Ed[0].toUpperCase() + Ed.slice(1);
    Ol(cx, "on" + ox);
  }
  Ol(Im, "onAnimationEnd"),
    Ol(e0, "onAnimationIteration"),
    Ol(t0, "onAnimationStart"),
    Ol("dblclick", "onDoubleClick"),
    Ol("focusin", "onFocus"),
    Ol("focusout", "onBlur"),
    Ol(N_, "onTransitionRun"),
    Ol(R_, "onTransitionStart"),
    Ol(A_, "onTransitionCancel"),
    Ol(n0, "onTransitionEnd"),
    ai("onMouseEnter", ["mouseout", "mouseover"]),
    ai("onMouseLeave", ["mouseout", "mouseover"]),
    ai("onPointerEnter", ["pointerout", "pointerover"]),
    ai("onPointerLeave", ["pointerout", "pointerover"]),
    Ml(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ml(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ml("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ml(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ml(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ml(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Gs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    fx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Gs)
    );
  function hg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        c = r.event;
      r = r.listeners;
      e: {
        var h = void 0;
        if (t)
          for (var y = r.length - 1; 0 <= y; y--) {
            var j = r[y],
              R = j.instance,
              D = j.currentTarget;
            if (((j = j.listener), R !== h && c.isPropagationStopped()))
              break e;
            (h = j), (c.currentTarget = D);
            try {
              h(c);
            } catch (Z) {
              yc(Z);
            }
            (c.currentTarget = null), (h = R);
          }
        else
          for (y = 0; y < r.length; y++) {
            if (
              ((j = r[y]),
              (R = j.instance),
              (D = j.currentTarget),
              (j = j.listener),
              R !== h && c.isPropagationStopped())
            )
              break e;
            (h = j), (c.currentTarget = D);
            try {
              h(c);
            } catch (Z) {
              yc(Z);
            }
            (c.currentTarget = null), (h = R);
          }
      }
    }
  }
  function Ye(e, t) {
    var n = t[Fe];
    n === void 0 && (n = t[Fe] = new Set());
    var r = e + "__bubble";
    n.has(r) || (mg(t, e, 2, !1), n.add(r));
  }
  function Nd(e, t, n) {
    var r = 0;
    t && (r |= 4), mg(n, e, r, t);
  }
  var Dc = "_reactListening" + Math.random().toString(36).slice(2);
  function Rd(e) {
    if (!e[Dc]) {
      (e[Dc] = !0),
        bt.forEach(function (n) {
          n !== "selectionchange" && (fx.has(n) || Nd(n, !1, e), Nd(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Dc] || ((t[Dc] = !0), Nd("selectionchange", !1, t));
    }
  }
  function mg(e, t, n, r) {
    switch (Ug(t)) {
      case 2:
        var c = Ux;
        break;
      case 8:
        c = Hx;
        break;
      default:
        c = qd;
    }
    (n = c.bind(null, t, n, e)),
      (c = void 0),
      !Fo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      r
        ? c !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: c })
          : e.addEventListener(t, n, !0)
        : c !== void 0
        ? e.addEventListener(t, n, { passive: c })
        : e.addEventListener(t, n, !1);
  }
  function Ad(e, t, n, r, c) {
    var h = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var j = r.stateNode.containerInfo;
          if (j === c || (j.nodeType === 8 && j.parentNode === c)) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var R = y.tag;
              if (
                (R === 3 || R === 4) &&
                ((R = y.stateNode.containerInfo),
                R === c || (R.nodeType === 8 && R.parentNode === c))
              )
                return;
              y = y.return;
            }
          for (; j !== null; ) {
            if (((y = ct(j)), y === null)) return;
            if (((R = y.tag), R === 5 || R === 6 || R === 26 || R === 27)) {
              r = h = y;
              continue e;
            }
            j = j.parentNode;
          }
        }
        r = r.return;
      }
    Am(function () {
      var D = h,
        Z = Ko(n),
        P = [];
      e: {
        var B = l0.get(e);
        if (B !== void 0) {
          var Q = Pu,
            ue = e;
          switch (e) {
            case "keypress":
              if ($u(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = i_;
              break;
            case "focusin":
              (ue = "focus"), (Q = Io);
              break;
            case "focusout":
              (ue = "blur"), (Q = Io);
              break;
            case "beforeblur":
            case "afterblur":
              Q = Io;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Om;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Zy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = s_;
              break;
            case Im:
            case e0:
            case t0:
              Q = Fy;
              break;
            case n0:
              Q = c_;
              break;
            case "scroll":
            case "scrollend":
              Q = Vy;
              break;
            case "wheel":
              Q = f_;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Jy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = zm;
              break;
            case "toggle":
            case "beforetoggle":
              Q = h_;
          }
          var Te = (t & 4) !== 0,
            Tt = !Te && (e === "scroll" || e === "scrollend"),
            k = Te ? (B !== null ? B + "Capture" : null) : B;
          Te = [];
          for (var M = D, H; M !== null; ) {
            var $ = M;
            if (
              ((H = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                H === null ||
                k === null ||
                (($ = us(M, k)), $ != null && Te.push(Vs(M, $, H))),
              Tt)
            )
              break;
            M = M.return;
          }
          0 < Te.length &&
            ((B = new Q(B, ue, null, n, Z)),
            P.push({ event: B, listeners: Te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            B &&
              n !== Zo &&
              (ue = n.relatedTarget || n.fromElement) &&
              (ct(ue) || ue[$e]))
          )
            break e;
          if (
            (Q || B) &&
            ((B =
              Z.window === Z
                ? Z
                : (B = Z.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            Q
              ? ((ue = n.relatedTarget || n.toElement),
                (Q = D),
                (ue = ue ? ct(ue) : null),
                ue !== null &&
                  ((Tt = ee(ue)),
                  (Te = ue.tag),
                  ue !== Tt || (Te !== 5 && Te !== 27 && Te !== 6)) &&
                  (ue = null))
              : ((Q = null), (ue = D)),
            Q !== ue)
          ) {
            if (
              ((Te = Om),
              ($ = "onMouseLeave"),
              (k = "onMouseEnter"),
              (M = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Te = zm),
                ($ = "onPointerLeave"),
                (k = "onPointerEnter"),
                (M = "pointer")),
              (Tt = Q == null ? B : Xn(Q)),
              (H = ue == null ? B : Xn(ue)),
              (B = new Te($, M + "leave", Q, n, Z)),
              (B.target = Tt),
              (B.relatedTarget = H),
              ($ = null),
              ct(Z) === D &&
                ((Te = new Te(k, M + "enter", ue, n, Z)),
                (Te.target = H),
                (Te.relatedTarget = Tt),
                ($ = Te)),
              (Tt = $),
              Q && ue)
            )
              t: {
                for (Te = Q, k = ue, M = 0, H = Te; H; H = zr(H)) M++;
                for (H = 0, $ = k; $; $ = zr($)) H++;
                for (; 0 < M - H; ) (Te = zr(Te)), M--;
                for (; 0 < H - M; ) (k = zr(k)), H--;
                for (; M--; ) {
                  if (Te === k || (k !== null && Te === k.alternate)) break t;
                  (Te = zr(Te)), (k = zr(k));
                }
                Te = null;
              }
            else Te = null;
            Q !== null && pg(P, B, Q, Te, !1),
              ue !== null && Tt !== null && pg(P, Tt, ue, Te, !0);
          }
        }
        e: {
          if (
            ((B = D ? Xn(D) : window),
            (Q = B.nodeName && B.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && B.type === "file"))
          )
            var ae = Xm;
          else if (Ym(B))
            if (Gm) ae = j_;
            else {
              ae = b_;
              var Ce = x_;
            }
          else
            (Q = B.nodeName),
              !Q ||
              Q.toLowerCase() !== "input" ||
              (B.type !== "checkbox" && B.type !== "radio")
                ? D && Qo(D.elementType) && (ae = Xm)
                : (ae = S_);
          if (ae && (ae = ae(e, D))) {
            qm(P, ae, n, Z);
            break e;
          }
          Ce && Ce(e, B, D),
            e === "focusout" &&
              D &&
              B.type === "number" &&
              D.memoizedProps.value != null &&
              Vo(B, "number", B.value);
        }
        switch (((Ce = D ? Xn(D) : window), e)) {
          case "focusin":
            (Ym(Ce) || Ce.contentEditable === "true") &&
              ((dr = Ce), (rf = D), (gs = null));
            break;
          case "focusout":
            gs = rf = dr = null;
            break;
          case "mousedown":
            sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (sf = !1), Jm(P, n, Z);
            break;
          case "selectionchange":
            if (E_) break;
          case "keydown":
          case "keyup":
            Jm(P, n, Z);
        }
        var ce;
        if (tf)
          e: {
            switch (e) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          fr
            ? Hm(e, n) && (ge = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ge = "onCompositionStart");
        ge &&
          (km &&
            n.locale !== "ko" &&
            (fr || ge !== "onCompositionStart"
              ? ge === "onCompositionEnd" && fr && (ce = Cm())
              : ((Li = Z),
                (Po = "value" in Li ? Li.value : Li.textContent),
                (fr = !0))),
          (Ce = zc(D, ge)),
          0 < Ce.length &&
            ((ge = new Dm(ge, e, null, n, Z)),
            P.push({ event: ge, listeners: Ce }),
            ce
              ? (ge.data = ce)
              : ((ce = Bm(n)), ce !== null && (ge.data = ce)))),
          (ce = p_ ? g_(e, n) : v_(e, n)) &&
            ((ge = zc(D, "onBeforeInput")),
            0 < ge.length &&
              ((Ce = new Dm("onBeforeInput", "beforeinput", null, n, Z)),
              P.push({ event: Ce, listeners: ge }),
              (Ce.data = ce))),
          ux(P, e, D, n, Z);
      }
      hg(P, t);
    });
  }
  function Vs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function zc(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var c = e,
        h = c.stateNode;
      (c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          h === null ||
          ((c = us(e, n)),
          c != null && r.unshift(Vs(e, c, h)),
          (c = us(e, t)),
          c != null && r.push(Vs(e, c, h))),
        (e = e.return);
    }
    return r;
  }
  function zr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function pg(e, t, n, r, c) {
    for (var h = t._reactName, y = []; n !== null && n !== r; ) {
      var j = n,
        R = j.alternate,
        D = j.stateNode;
      if (((j = j.tag), R !== null && R === r)) break;
      (j !== 5 && j !== 26 && j !== 27) ||
        D === null ||
        ((R = D),
        c
          ? ((D = us(n, h)), D != null && y.unshift(Vs(n, D, R)))
          : c || ((D = us(n, h)), D != null && y.push(Vs(n, D, R)))),
        (n = n.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var dx = /\r\n?/g,
    hx = /\u0000|\uFFFD/g;
  function gg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        dx,
        `
`
      )
      .replace(hx, "");
  }
  function vg(e, t) {
    return (t = gg(t)), gg(e) === t;
  }
  function kc() {}
  function Ie(e, t, n, r, c, h) {
    switch (n) {
      case "children":
        typeof r == "string"
          ? t === "body" || (t === "textarea" && r === "") || ur(e, r)
          : (typeof r == "number" || typeof r == "bigint") &&
            t !== "body" &&
            ur(e, "" + r);
        break;
      case "className":
        Gu(e, "class", r);
        break;
      case "tabIndex":
        Gu(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gu(e, n, r);
        break;
      case "style":
        Nm(e, r, h);
        break;
      case "data":
        if (t !== "object") {
          Gu(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (r = Zu("" + r)), e.setAttribute(n, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof h == "function" &&
            (n === "formAction"
              ? (t !== "input" && Ie(e, t, "name", c.name, c, null),
                Ie(e, t, "formEncType", c.formEncType, c, null),
                Ie(e, t, "formMethod", c.formMethod, c, null),
                Ie(e, t, "formTarget", c.formTarget, c, null))
              : (Ie(e, t, "encType", c.encType, c, null),
                Ie(e, t, "method", c.method, c, null),
                Ie(e, t, "target", c.target, c, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (r = Zu("" + r)), e.setAttribute(n, r);
        break;
      case "onClick":
        r != null && (e.onclick = kc);
        break;
      case "onScroll":
        r != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
          if (((n = r.__html), n != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Zu("" + r)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "" + r)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0
          ? e.setAttribute(n, "")
          : r !== !1 &&
            r != null &&
            typeof r != "function" &&
            typeof r != "symbol"
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(n, r)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? e.removeAttribute(n)
          : e.setAttribute(n, r);
        break;
      case "popover":
        Ye("beforetoggle", e), Ye("toggle", e), Xu(e, "popover", r);
        break;
      case "xlinkActuate":
        ri(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        ri(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        ri(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        ri(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        ri(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        ri(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        ri(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        ri(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        ri(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        Xu(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Xy.get(n) || n), Xu(e, n, r));
    }
  }
  function Cd(e, t, n, r, c, h) {
    switch (n) {
      case "style":
        Nm(e, r, h);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
          if (((n = r.__html), n != null)) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof r == "string"
          ? ur(e, r)
          : (typeof r == "number" || typeof r == "bigint") && ur(e, "" + r);
        break;
      case "onScroll":
        r != null && Ye("scroll", e);
        break;
      case "onScrollEnd":
        r != null && Ye("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = kc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gn.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((c = n.endsWith("Capture")),
              (t = n.slice(2, c ? n.length - 7 : void 0)),
              (h = e[Le] || null),
              (h = h != null ? h[n] : null),
              typeof h == "function" && e.removeEventListener(t, h, c),
              typeof r == "function")
            ) {
              typeof h != "function" &&
                h !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, r, c);
              break e;
            }
            n in e
              ? (e[n] = r)
              : r === !0
              ? e.setAttribute(n, "")
              : Xu(e, n, r);
          }
    }
  }
  function nn(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ye("error", e), Ye("load", e);
        var r = !1,
          c = !1,
          h;
        for (h in n)
          if (n.hasOwnProperty(h)) {
            var y = n[h];
            if (y != null)
              switch (h) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Ie(e, t, h, y, n, null);
              }
          }
        c && Ie(e, t, "srcSet", n.srcSet, n, null),
          r && Ie(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ye("invalid", e);
        var j = (h = y = c = null),
          R = null,
          D = null;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var Z = n[r];
            if (Z != null)
              switch (r) {
                case "name":
                  c = Z;
                  break;
                case "type":
                  y = Z;
                  break;
                case "checked":
                  R = Z;
                  break;
                case "defaultChecked":
                  D = Z;
                  break;
                case "value":
                  h = Z;
                  break;
                case "defaultValue":
                  j = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null) throw Error(i(137, t));
                  break;
                default:
                  Ie(e, t, r, Z, n, null);
              }
          }
        jm(e, h, j, R, D, y, c, !1), Vu(e);
        return;
      case "select":
        Ye("invalid", e), (r = y = h = null);
        for (c in n)
          if (n.hasOwnProperty(c) && ((j = n[c]), j != null))
            switch (c) {
              case "value":
                h = j;
                break;
              case "defaultValue":
                y = j;
                break;
              case "multiple":
                r = j;
              default:
                Ie(e, t, c, j, n, null);
            }
        (t = h),
          (n = y),
          (e.multiple = !!r),
          t != null ? sr(e, !!r, t, !1) : n != null && sr(e, !!r, n, !0);
        return;
      case "textarea":
        Ye("invalid", e), (h = c = r = null);
        for (y in n)
          if (n.hasOwnProperty(y) && ((j = n[y]), j != null))
            switch (y) {
              case "value":
                r = j;
                break;
              case "defaultValue":
                c = j;
                break;
              case "children":
                h = j;
                break;
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(i(91));
                break;
              default:
                Ie(e, t, y, j, n, null);
            }
        wm(e, r, c, h), Vu(e);
        return;
      case "option":
        for (R in n)
          if (n.hasOwnProperty(R) && ((r = n[R]), r != null))
            switch (R) {
              case "selected":
                e.selected =
                  r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                Ie(e, t, R, r, n, null);
            }
        return;
      case "dialog":
        Ye("cancel", e), Ye("close", e);
        break;
      case "iframe":
      case "object":
        Ye("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Gs.length; r++) Ye(Gs[r], e);
        break;
      case "image":
        Ye("error", e), Ye("load", e);
        break;
      case "details":
        Ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ye("error", e), Ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((r = n[D]), r != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Ie(e, t, D, r, n, null);
            }
        return;
      default:
        if (Qo(t)) {
          for (Z in n)
            n.hasOwnProperty(Z) &&
              ((r = n[Z]), r !== void 0 && Cd(e, t, Z, r, n, void 0));
          return;
        }
    }
    for (j in n)
      n.hasOwnProperty(j) && ((r = n[j]), r != null && Ie(e, t, j, r, n, null));
  }
  function mx(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          h = null,
          y = null,
          j = null,
          R = null,
          D = null,
          Z = null;
        for (Q in n) {
          var P = n[Q];
          if (n.hasOwnProperty(Q) && P != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = P;
              default:
                r.hasOwnProperty(Q) || Ie(e, t, Q, null, r, P);
            }
        }
        for (var B in r) {
          var Q = r[B];
          if (((P = n[B]), r.hasOwnProperty(B) && (Q != null || P != null)))
            switch (B) {
              case "type":
                h = Q;
                break;
              case "name":
                c = Q;
                break;
              case "checked":
                D = Q;
                break;
              case "defaultChecked":
                Z = Q;
                break;
              case "value":
                y = Q;
                break;
              case "defaultValue":
                j = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(i(137, t));
                break;
              default:
                Q !== P && Ie(e, t, B, Q, r, P);
            }
        }
        Go(e, y, j, R, D, Z, h, c);
        return;
      case "select":
        Q = y = j = B = null;
        for (h in n)
          if (((R = n[h]), n.hasOwnProperty(h) && R != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                Q = R;
              default:
                r.hasOwnProperty(h) || Ie(e, t, h, null, r, R);
            }
        for (c in r)
          if (
            ((h = r[c]),
            (R = n[c]),
            r.hasOwnProperty(c) && (h != null || R != null))
          )
            switch (c) {
              case "value":
                B = h;
                break;
              case "defaultValue":
                j = h;
                break;
              case "multiple":
                y = h;
              default:
                h !== R && Ie(e, t, c, h, r, R);
            }
        (t = j),
          (n = y),
          (r = Q),
          B != null
            ? sr(e, !!n, B, !1)
            : !!r != !!n &&
              (t != null ? sr(e, !!n, t, !0) : sr(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        Q = B = null;
        for (j in n)
          if (
            ((c = n[j]),
            n.hasOwnProperty(j) && c != null && !r.hasOwnProperty(j))
          )
            switch (j) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ie(e, t, j, null, r, c);
            }
        for (y in r)
          if (
            ((c = r[y]),
            (h = n[y]),
            r.hasOwnProperty(y) && (c != null || h != null))
          )
            switch (y) {
              case "value":
                B = c;
                break;
              case "defaultValue":
                Q = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(i(91));
                break;
              default:
                c !== h && Ie(e, t, y, c, r, h);
            }
        Tm(e, B, Q);
        return;
      case "option":
        for (var ue in n)
          if (
            ((B = n[ue]),
            n.hasOwnProperty(ue) && B != null && !r.hasOwnProperty(ue))
          )
            switch (ue) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ie(e, t, ue, null, r, B);
            }
        for (R in r)
          if (
            ((B = r[R]),
            (Q = n[R]),
            r.hasOwnProperty(R) && B !== Q && (B != null || Q != null))
          )
            switch (R) {
              case "selected":
                e.selected =
                  B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Ie(e, t, R, B, r, Q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Te in n)
          (B = n[Te]),
            n.hasOwnProperty(Te) &&
              B != null &&
              !r.hasOwnProperty(Te) &&
              Ie(e, t, Te, null, r, B);
        for (D in r)
          if (
            ((B = r[D]),
            (Q = n[D]),
            r.hasOwnProperty(D) && B !== Q && (B != null || Q != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(i(137, t));
                break;
              default:
                Ie(e, t, D, B, r, Q);
            }
        return;
      default:
        if (Qo(t)) {
          for (var Tt in n)
            (B = n[Tt]),
              n.hasOwnProperty(Tt) &&
                B !== void 0 &&
                !r.hasOwnProperty(Tt) &&
                Cd(e, t, Tt, void 0, r, B);
          for (Z in r)
            (B = r[Z]),
              (Q = n[Z]),
              !r.hasOwnProperty(Z) ||
                B === Q ||
                (B === void 0 && Q === void 0) ||
                Cd(e, t, Z, B, r, Q);
          return;
        }
    }
    for (var k in n)
      (B = n[k]),
        n.hasOwnProperty(k) &&
          B != null &&
          !r.hasOwnProperty(k) &&
          Ie(e, t, k, null, r, B);
    for (P in r)
      (B = r[P]),
        (Q = n[P]),
        !r.hasOwnProperty(P) ||
          B === Q ||
          (B == null && Q == null) ||
          Ie(e, t, P, B, r, Q);
  }
  var Md = null,
    Od = null;
  function Lc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function yg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _g(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Dd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var zd = null;
  function px() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === zd
        ? !1
        : ((zd = e), !0)
      : ((zd = null), !1);
  }
  var xg = typeof setTimeout == "function" ? setTimeout : void 0,
    gx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bg = typeof Promise == "function" ? Promise : void 0,
    vx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof bg < "u"
        ? function (e) {
            return bg.resolve(null).then(e).catch(yx);
          }
        : xg;
  function yx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function kd(e, t) {
    var n = t,
      r = 0;
    do {
      var c = n.nextSibling;
      if ((e.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(c), Ws(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = c;
    } while (n);
    Ws(t);
  }
  function Ld(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ld(n), Nt(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function _x(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var c = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[on])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((h = e.getAttribute("rel")),
                h === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== c.rel ||
                e.getAttribute("href") !== (c.href == null ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((h = e.getAttribute("src")),
                (h !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  h &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var h = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === h) return e;
      } else return e;
      if (((e = kl(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function xx(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = kl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function kl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Sg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function jg(e, t, n) {
    switch (((t = Lc(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  var bl = new Map(),
    Tg = new Set();
  function Uc(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var bi = W.d;
  W.d = { f: bx, r: Sx, D: jx, C: Tx, L: wx, m: Ex, X: Rx, S: Nx, M: Ax };
  function bx() {
    var e = bi.f(),
      t = Ac();
    return e || t;
  }
  function Sx(e) {
    var t = ht(e);
    t !== null && t.tag === 5 && t.type === "form" ? J0(t) : bi.r(e);
  }
  var kr = typeof document > "u" ? null : document;
  function wg(e, t, n) {
    var r = kr;
    if (r && typeof t == "string" && t) {
      var c = fl(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof n == "string" && (c += '[crossorigin="' + n + '"]'),
        Tg.has(c) ||
          (Tg.add(c),
          (e = { rel: e, crossOrigin: n, href: t }),
          r.querySelector(c) === null &&
            ((t = r.createElement("link")),
            nn(t, "link", e),
            Be(t),
            r.head.appendChild(t)));
    }
  }
  function jx(e) {
    bi.D(e), wg("dns-prefetch", e, null);
  }
  function Tx(e, t) {
    bi.C(e, t), wg("preconnect", e, t);
  }
  function wx(e, t, n) {
    bi.L(e, t, n);
    var r = kr;
    if (r && e && t) {
      var c = 'link[rel="preload"][as="' + fl(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + fl(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (c += '[imagesizes="' + fl(n.imageSizes) + '"]'))
        : (c += '[href="' + fl(e) + '"]');
      var h = c;
      switch (t) {
        case "style":
          h = Lr(e);
          break;
        case "script":
          h = Ur(e);
      }
      bl.has(h) ||
        ((e = G(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        bl.set(h, e),
        r.querySelector(c) !== null ||
          (t === "style" && r.querySelector(Qs(h))) ||
          (t === "script" && r.querySelector(Zs(h))) ||
          ((t = r.createElement("link")),
          nn(t, "link", e),
          Be(t),
          r.head.appendChild(t)));
    }
  }
  function Ex(e, t) {
    bi.m(e, t);
    var n = kr;
    if (n && e) {
      var r = t && typeof t.as == "string" ? t.as : "script",
        c =
          'link[rel="modulepreload"][as="' + fl(r) + '"][href="' + fl(e) + '"]',
        h = c;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = Ur(e);
      }
      if (
        !bl.has(h) &&
        ((e = G({ rel: "modulepreload", href: e }, t)),
        bl.set(h, e),
        n.querySelector(c) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Zs(h))) return;
        }
        (r = n.createElement("link")),
          nn(r, "link", e),
          Be(r),
          n.head.appendChild(r);
      }
    }
  }
  function Nx(e, t, n) {
    bi.S(e, t, n);
    var r = kr;
    if (r && e) {
      var c = Cl(r).hoistableStyles,
        h = Lr(e);
      t = t || "default";
      var y = c.get(h);
      if (!y) {
        var j = { loading: 0, preload: null };
        if ((y = r.querySelector(Qs(h)))) j.loading = 5;
        else {
          (e = G({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = bl.get(h)) && Ud(e, n);
          var R = (y = r.createElement("link"));
          Be(R),
            nn(R, "link", e),
            (R._p = new Promise(function (D, Z) {
              (R.onload = D), (R.onerror = Z);
            })),
            R.addEventListener("load", function () {
              j.loading |= 1;
            }),
            R.addEventListener("error", function () {
              j.loading |= 2;
            }),
            (j.loading |= 4),
            Hc(y, t, r);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: j }),
          c.set(h, y);
      }
    }
  }
  function Rx(e, t) {
    bi.X(e, t);
    var n = kr;
    if (n && e) {
      var r = Cl(n).hoistableScripts,
        c = Ur(e),
        h = r.get(c);
      h ||
        ((h = n.querySelector(Zs(c))),
        h ||
          ((e = G({ src: e, async: !0 }, t)),
          (t = bl.get(c)) && Hd(e, t),
          (h = n.createElement("script")),
          Be(h),
          nn(h, "link", e),
          n.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        r.set(c, h));
    }
  }
  function Ax(e, t) {
    bi.M(e, t);
    var n = kr;
    if (n && e) {
      var r = Cl(n).hoistableScripts,
        c = Ur(e),
        h = r.get(c);
      h ||
        ((h = n.querySelector(Zs(c))),
        h ||
          ((e = G({ src: e, async: !0, type: "module" }, t)),
          (t = bl.get(c)) && Hd(e, t),
          (h = n.createElement("script")),
          Be(h),
          nn(h, "link", e),
          n.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        r.set(c, h));
    }
  }
  function Eg(e, t, n, r) {
    var c = (c = we.current) ? Uc(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Lr(n.href)),
            (n = Cl(c).hoistableStyles),
            (r = n.get(t)),
            r ||
              ((r = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Lr(n.href);
          var h = Cl(c).hoistableStyles,
            y = h.get(e);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(e, y),
              (h = c.querySelector(Qs(e))) &&
                !h._p &&
                ((y.instance = h), (y.state.loading = 5)),
              bl.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                bl.set(e, n),
                h || Cx(c, e, n, y.state))),
            t && r === null)
          )
            throw Error(i(528, ""));
          return y;
        }
        if (t && r !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ur(n)),
              (n = Cl(c).hoistableScripts),
              (r = n.get(t)),
              r ||
                ((r = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Lr(e) {
    return 'href="' + fl(e) + '"';
  }
  function Qs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ng(e) {
    return G({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Cx(e, t, n, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (r.loading = 1)
      : ((t = e.createElement("link")),
        (r.preload = t),
        t.addEventListener("load", function () {
          return (r.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (r.loading |= 2);
        }),
        nn(t, "link", n),
        Be(t),
        e.head.appendChild(t));
  }
  function Ur(e) {
    return '[src="' + fl(e) + '"]';
  }
  function Zs(e) {
    return "script[async]" + e;
  }
  function Rg(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var r = e.querySelector('style[data-href~="' + fl(n.href) + '"]');
          if (r) return (t.instance = r), Be(r), r;
          var c = G({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement("style")),
            Be(r),
            nn(r, "style", c),
            Hc(r, n.precedence, e),
            (t.instance = r)
          );
        case "stylesheet":
          c = Lr(n.href);
          var h = e.querySelector(Qs(c));
          if (h) return (t.state.loading |= 4), (t.instance = h), Be(h), h;
          (r = Ng(n)),
            (c = bl.get(c)) && Ud(r, c),
            (h = (e.ownerDocument || e).createElement("link")),
            Be(h);
          var y = h;
          return (
            (y._p = new Promise(function (j, R) {
              (y.onload = j), (y.onerror = R);
            })),
            nn(h, "link", r),
            (t.state.loading |= 4),
            Hc(h, n.precedence, e),
            (t.instance = h)
          );
        case "script":
          return (
            (h = Ur(n.src)),
            (c = e.querySelector(Zs(h)))
              ? ((t.instance = c), Be(c), c)
              : ((r = n),
                (c = bl.get(h)) && ((r = G({}, n)), Hd(r, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                Be(c),
                nn(c, "link", r),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((r = t.instance), (t.state.loading |= 4), Hc(r, n.precedence, e));
    return t.instance;
  }
  function Hc(e, t, n) {
    for (
      var r = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = r.length ? r[r.length - 1] : null,
        h = c,
        y = 0;
      y < r.length;
      y++
    ) {
      var j = r[y];
      if (j.dataset.precedence === t) h = j;
      else if (h !== c) break;
    }
    h
      ? h.parentNode.insertBefore(e, h.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Ud(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Hd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Bc = null;
  function Ag(e, t, n) {
    if (Bc === null) {
      var r = new Map(),
        c = (Bc = new Map());
      c.set(n, r);
    } else (c = Bc), (r = c.get(n)), r || ((r = new Map()), c.set(n, r));
    if (r.has(e)) return r;
    for (
      r.set(e, null), n = n.getElementsByTagName(e), c = 0;
      c < n.length;
      c++
    ) {
      var h = n[c];
      if (
        !(
          h[on] ||
          h[Qe] ||
          (e === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = h.getAttribute(t) || "";
        y = e + y;
        var j = r.get(y);
        j ? j.push(h) : r.set(y, [h]);
      }
    }
    return r;
  }
  function Cg(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function Mx(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Mg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ks = null;
  function Ox() {}
  function Dx(e, t, n) {
    if (Ks === null) throw Error(i(475));
    var r = Ks;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = Lr(n.href),
          h = e.querySelector(Qs(c));
        if (h) {
          (e = h._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (r.count++, (r = Yc.bind(r)), e.then(r, r)),
            (t.state.loading |= 4),
            (t.instance = h),
            Be(h);
          return;
        }
        (h = e.ownerDocument || e),
          (n = Ng(n)),
          (c = bl.get(c)) && Ud(n, c),
          (h = h.createElement("link")),
          Be(h);
        var y = h;
        (y._p = new Promise(function (j, R) {
          (y.onload = j), (y.onerror = R);
        })),
          nn(h, "link", n),
          (t.instance = h);
      }
      r.stylesheets === null && (r.stylesheets = new Map()),
        r.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (r.count++,
          (t = Yc.bind(r)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function zx() {
    if (Ks === null) throw Error(i(475));
    var e = Ks;
    return (
      e.stylesheets && e.count === 0 && Bd(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Bd(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                (e.unsuspend = null), r();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Yc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Bd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var qc = null;
  function Bd(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (qc = new Map()),
        t.forEach(kx, e),
        (qc = null),
        Yc.call(e));
  }
  function kx(e, t) {
    if (!(t.state.loading & 4)) {
      var n = qc.get(e);
      if (n) var r = n.get(null);
      else {
        (n = new Map()), qc.set(e, n);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            h = 0;
          h < c.length;
          h++
        ) {
          var y = c[h];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (n.set(y.dataset.precedence, y), (r = y));
        }
        r && n.set(null, r);
      }
      (c = t.instance),
        (y = c.getAttribute("data-precedence")),
        (h = n.get(y) || r),
        h === r && n.set(null, c),
        n.set(y, c),
        this.count++,
        (r = Yc.bind(this)),
        c.addEventListener("load", r),
        c.addEventListener("error", r),
        h
          ? h.parentNode.insertBefore(c, h.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var $s = {
    $$typeof: _,
    Provider: null,
    Consumer: null,
    _currentValue: pe,
    _currentValue2: pe,
    _threadCount: 0,
  };
  function Lx(e, t, n, r, c, h, y, j) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = he(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = he(0)),
      (this.hiddenUpdates = he(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = c),
      (this.onCaughtError = h),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.incompleteTransitions = new Map());
  }
  function Og(e, t, n, r, c, h, y, j, R, D, Z, P) {
    return (
      (e = new Lx(e, t, n, y, j, R, D, P)),
      (t = 1),
      h === !0 && (t |= 24),
      (h = _l(3, null, null, t)),
      (e.current = h),
      (h.stateNode = e),
      (t = vf()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (h.memoizedState = { element: r, isDehydrated: n, cache: t }),
      Jf(h),
      e
    );
  }
  function Dg(e) {
    return e ? ((e = pr), e) : pr;
  }
  function zg(e, t, n, r, c, h) {
    (c = Dg(c)),
      r.context === null ? (r.context = c) : (r.pendingContext = c),
      (r = Vi(t)),
      (r.payload = { element: n }),
      (h = h === void 0 ? null : h),
      h !== null && (r.callback = h),
      (n = Qi(e, r, t)),
      n !== null && (jn(n, e, t), Ms(n, e, t));
  }
  function kg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yd(e, t) {
    kg(e, t), (e = e.alternate) && kg(e, t);
  }
  function Lg(e) {
    if (e.tag === 13) {
      var t = Ui(e, 67108864);
      t !== null && jn(t, e, 67108864), Yd(e, 67108864);
    }
  }
  var Xc = !0;
  function Ux(e, t, n, r) {
    var c = L.T;
    L.T = null;
    var h = W.p;
    try {
      (W.p = 2), qd(e, t, n, r);
    } finally {
      (W.p = h), (L.T = c);
    }
  }
  function Hx(e, t, n, r) {
    var c = L.T;
    L.T = null;
    var h = W.p;
    try {
      (W.p = 8), qd(e, t, n, r);
    } finally {
      (W.p = h), (L.T = c);
    }
  }
  function qd(e, t, n, r) {
    if (Xc) {
      var c = Xd(r);
      if (c === null) Ad(e, t, r, Gc, n), Hg(e, r);
      else if (Yx(c, e, t, n, r)) r.stopPropagation();
      else if ((Hg(e, r), t & 4 && -1 < Bx.indexOf(e))) {
        for (; c !== null; ) {
          var h = ht(c);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var y = qt(h.pendingLanes);
                  if (y !== 0) {
                    var j = h;
                    for (j.pendingLanes |= 2, j.entangledLanes |= 2; y; ) {
                      var R = 1 << (31 - xt(y));
                      (j.entanglements[1] |= R), (y &= ~R);
                    }
                    Gl(h), (pt & 6) === 0 && ((Ec = Kt() + 500), Xs(0));
                  }
                }
                break;
              case 13:
                (j = Ui(h, 2)), j !== null && jn(j, h, 2), Ac(), Yd(h, 2);
            }
          if (((h = Xd(r)), h === null && Ad(e, t, r, Gc, n), h === c)) break;
          c = h;
        }
        c !== null && r.stopPropagation();
      } else Ad(e, t, r, null, n);
    }
  }
  function Xd(e) {
    return (e = Ko(e)), Gd(e);
  }
  var Gc = null;
  function Gd(e) {
    if (((Gc = null), (e = ct(e)), e !== null)) {
      var t = ee(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = me(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Gc = e), null;
  }
  function Ug(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dt()) {
          case Rl:
            return 2;
          case ot:
            return 8;
          case rn:
          case Mn:
            return 32;
          case rl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vd = !1,
    Wi = null,
    Ii = null,
    ea = null,
    Fs = new Map(),
    Ps = new Map(),
    ta = [],
    Bx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Hg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wi = null;
        break;
      case "dragenter":
      case "dragleave":
        Ii = null;
        break;
      case "mouseover":
      case "mouseout":
        ea = null;
        break;
      case "pointerover":
      case "pointerout":
        Fs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ps.delete(t.pointerId);
    }
  }
  function Js(e, t, n, r, c, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: h,
          targetContainers: [c],
        }),
        t !== null && ((t = ht(t)), t !== null && Lg(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function Yx(e, t, n, r, c) {
    switch (t) {
      case "focusin":
        return (Wi = Js(Wi, e, t, n, r, c)), !0;
      case "dragenter":
        return (Ii = Js(Ii, e, t, n, r, c)), !0;
      case "mouseover":
        return (ea = Js(ea, e, t, n, r, c)), !0;
      case "pointerover":
        var h = c.pointerId;
        return Fs.set(h, Js(Fs.get(h) || null, e, t, n, r, c)), !0;
      case "gotpointercapture":
        return (
          (h = c.pointerId), Ps.set(h, Js(Ps.get(h) || null, e, t, n, r, c)), !0
        );
    }
    return !1;
  }
  function Bg(e) {
    var t = ct(e.target);
    if (t !== null) {
      var n = ee(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = me(n)), t !== null)) {
            (e.blockedOn = t),
              ke(e.priority, function () {
                if (n.tag === 13) {
                  var r = $n(),
                    c = Ui(n, r);
                  c !== null && jn(c, n, r), Yd(n, r);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Xd(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Zo = r), n.target.dispatchEvent(r), (Zo = null);
      } else return (t = ht(n)), t !== null && Lg(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Yg(e, t, n) {
    Vc(e) && n.delete(t);
  }
  function qx() {
    (Vd = !1),
      Wi !== null && Vc(Wi) && (Wi = null),
      Ii !== null && Vc(Ii) && (Ii = null),
      ea !== null && Vc(ea) && (ea = null),
      Fs.forEach(Yg),
      Ps.forEach(Yg);
  }
  function Qc(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vd ||
        ((Vd = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, qx)));
  }
  var Zc = null;
  function qg(e) {
    Zc !== e &&
      ((Zc = e),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        Zc === e && (Zc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            r = e[t + 1],
            c = e[t + 2];
          if (typeof r != "function") {
            if (Gd(r || n) === null) continue;
            break;
          }
          var h = ht(n);
          h !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Df(h, { pending: !0, data: c, method: n.method, action: r }, r, c));
        }
      }));
  }
  function Ws(e) {
    function t(R) {
      return Qc(R, e);
    }
    Wi !== null && Qc(Wi, e),
      Ii !== null && Qc(Ii, e),
      ea !== null && Qc(ea, e),
      Fs.forEach(t),
      Ps.forEach(t);
    for (var n = 0; n < ta.length; n++) {
      var r = ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ta.length && ((n = ta[0]), n.blockedOn === null); )
      Bg(n), n.blockedOn === null && ta.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (r = 0; r < n.length; r += 3) {
        var c = n[r],
          h = n[r + 1],
          y = c[Le] || null;
        if (typeof h == "function") y || qg(n);
        else if (y) {
          var j = null;
          if (h && h.hasAttribute("formAction")) {
            if (((c = h), (y = h[Le] || null))) j = y.formAction;
            else if (Gd(c) !== null) continue;
          } else j = y.action;
          typeof j == "function" ? (n[r + 1] = j) : (n.splice(r, 3), (r -= 3)),
            qg(n);
        }
      }
  }
  function Qd(e) {
    this._internalRoot = e;
  }
  (Kc.prototype.render = Qd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var n = t.current,
        r = $n();
      zg(n, r, e, t, null, null);
    }),
    (Kc.prototype.unmount = Qd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Or(),
            zg(e.current, 2, null, e, null, null),
            Ac(),
            (t[$e] = null);
        }
      });
  function Kc(e) {
    this._internalRoot = e;
  }
  Kc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Et();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ta.length && t !== 0 && t < ta[n].priority; n++);
      ta.splice(n, 0, e), n === 0 && Bg(e);
    }
  };
  var Xg = l.version;
  if (Xg !== "19.0.0") throw Error(i(527, Xg, "19.0.0"));
  W.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = K(t)),
      (e = e !== null ? le(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Xx = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    findFiberByHostInstance: ct,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $c = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$c.isDisabled && $c.supportsFiber)
      try {
        (Hl = $c.inject(Xx)), (dt = $c);
      } catch {}
  }
  return (
    (eu.createRoot = function (e, t) {
      if (!s(e)) throw Error(i(299));
      var n = !1,
        r = "",
        c = ap,
        h = rp,
        y = sp,
        j = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (h = t.onCaughtError),
          t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (j = t.unstable_transitionCallbacks)),
        (t = Og(e, 1, !1, null, null, n, r, c, h, y, j, null)),
        (e[$e] = t.current),
        Rd(e.nodeType === 8 ? e.parentNode : e),
        new Qd(t)
      );
    }),
    (eu.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(i(299));
      var r = !1,
        c = "",
        h = ap,
        y = rp,
        j = sp,
        R = null,
        D = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (h = n.onUncaughtError),
          n.onCaughtError !== void 0 && (y = n.onCaughtError),
          n.onRecoverableError !== void 0 && (j = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (R = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (D = n.formState)),
        (t = Og(e, 1, !0, t, n ?? null, r, c, h, y, j, R, D)),
        (t.context = Dg(null)),
        (n = t.current),
        (r = $n()),
        (c = Vi(r)),
        (c.callback = null),
        Qi(n, c, r),
        (t.current.lanes = r),
        ze(t, r),
        Gl(t),
        (e[$e] = t.current),
        Rd(e),
        new Kc(t)
      );
    }),
    (eu.version = "19.0.0"),
    eu
  );
}
var Wg;
function Ix() {
  if (Wg) return $d.exports;
  Wg = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (l) {
        console.error(l);
      }
  }
  return u(), ($d.exports = Wx()), $d.exports;
}
var e2 = Ix();
const t2 = Vx(e2);
var tu = {},
  Ig;
function n2() {
  if (Ig) return tu;
  (Ig = 1),
    Object.defineProperty(tu, "__esModule", { value: !0 }),
    (tu.parse = f),
    (tu.serialize = p);
  const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    l = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    o = (() => {
      const x = function () {};
      return (x.prototype = Object.create(null)), x;
    })();
  function f(x, _) {
    const w = new o(),
      T = x.length;
    if (T < 2) return w;
    const E = (_ == null ? void 0 : _.decode) || v;
    let A = 0;
    do {
      const O = x.indexOf("=", A);
      if (O === -1) break;
      const z = x.indexOf(";", A),
        C = z === -1 ? T : z;
      if (O > C) {
        A = x.lastIndexOf(";", O - 1) + 1;
        continue;
      }
      const U = m(x, A, O),
        V = g(x, O, U),
        q = x.slice(U, V);
      if (w[q] === void 0) {
        let Y = m(x, O + 1, C),
          L = g(x, C, Y);
        const G = E(x.slice(Y, L));
        w[q] = G;
      }
      A = C + 1;
    } while (A < T);
    return w;
  }
  function m(x, _, w) {
    do {
      const T = x.charCodeAt(_);
      if (T !== 32 && T !== 9) return _;
    } while (++_ < w);
    return w;
  }
  function g(x, _, w) {
    for (; _ > w; ) {
      const T = x.charCodeAt(--_);
      if (T !== 32 && T !== 9) return _ + 1;
    }
    return w;
  }
  function p(x, _, w) {
    const T = (w == null ? void 0 : w.encode) || encodeURIComponent;
    if (!u.test(x)) throw new TypeError(`argument name is invalid: ${x}`);
    const E = T(_);
    if (!l.test(E)) throw new TypeError(`argument val is invalid: ${_}`);
    let A = x + "=" + E;
    if (!w) return A;
    if (w.maxAge !== void 0) {
      if (!Number.isInteger(w.maxAge))
        throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
      A += "; Max-Age=" + w.maxAge;
    }
    if (w.domain) {
      if (!a.test(w.domain))
        throw new TypeError(`option domain is invalid: ${w.domain}`);
      A += "; Domain=" + w.domain;
    }
    if (w.path) {
      if (!i.test(w.path))
        throw new TypeError(`option path is invalid: ${w.path}`);
      A += "; Path=" + w.path;
    }
    if (w.expires) {
      if (!b(w.expires) || !Number.isFinite(w.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${w.expires}`);
      A += "; Expires=" + w.expires.toUTCString();
    }
    if (
      (w.httpOnly && (A += "; HttpOnly"),
      w.secure && (A += "; Secure"),
      w.partitioned && (A += "; Partitioned"),
      w.priority)
    )
      switch (
        typeof w.priority == "string" ? w.priority.toLowerCase() : void 0
      ) {
        case "low":
          A += "; Priority=Low";
          break;
        case "medium":
          A += "; Priority=Medium";
          break;
        case "high":
          A += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${w.priority}`);
      }
    if (w.sameSite)
      switch (
        typeof w.sameSite == "string" ? w.sameSite.toLowerCase() : w.sameSite
      ) {
        case !0:
        case "strict":
          A += "; SameSite=Strict";
          break;
        case "lax":
          A += "; SameSite=Lax";
          break;
        case "none":
          A += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${w.sameSite}`);
      }
    return A;
  }
  function v(x) {
    if (x.indexOf("%") === -1) return x;
    try {
      return decodeURIComponent(x);
    } catch {
      return x;
    }
  }
  function b(x) {
    return s.call(x) === "[object Date]";
  }
  return tu;
}
n2();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var e1 = "popstate";
function l2(u = {}) {
  function l(i, s) {
    let { pathname: o, search: f, hash: m } = i.location;
    return ph(
      "",
      { pathname: o, search: f, hash: m },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function a(i, s) {
    return typeof s == "string" ? s : wu(s);
  }
  return a2(l, a, null, u);
}
function yt(u, l) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(l);
}
function Il(u, l) {
  if (!u) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function i2() {
  return Math.random().toString(36).substring(2, 10);
}
function t1(u, l) {
  return { usr: u.state, key: u.key, idx: l };
}
function ph(u, l, a = null, i) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...(typeof l == "string" ? rs(l) : l),
    state: a,
    key: (l && l.key) || i || i2(),
  };
}
function wu({ pathname: u = "/", search: l = "", hash: a = "" }) {
  return (
    l && l !== "?" && (u += l.charAt(0) === "?" ? l : "?" + l),
    a && a !== "#" && (u += a.charAt(0) === "#" ? a : "#" + a),
    u
  );
}
function rs(u) {
  let l = {};
  if (u) {
    let a = u.indexOf("#");
    a >= 0 && ((l.hash = u.substring(a)), (u = u.substring(0, a)));
    let i = u.indexOf("?");
    i >= 0 && ((l.search = u.substring(i)), (u = u.substring(0, i))),
      u && (l.pathname = u);
  }
  return l;
}
function a2(u, l, a, i = {}) {
  let { window: s = document.defaultView, v5Compat: o = !1 } = i,
    f = s.history,
    m = "POP",
    g = null,
    p = v();
  p == null && ((p = 0), f.replaceState({ ...f.state, idx: p }, ""));
  function v() {
    return (f.state || { idx: null }).idx;
  }
  function b() {
    m = "POP";
    let E = v(),
      A = E == null ? null : E - p;
    (p = E), g && g({ action: m, location: T.location, delta: A });
  }
  function x(E, A) {
    m = "PUSH";
    let O = ph(T.location, E, A);
    p = v() + 1;
    let z = t1(O, p),
      C = T.createHref(O);
    try {
      f.pushState(z, "", C);
    } catch (U) {
      if (U instanceof DOMException && U.name === "DataCloneError") throw U;
      s.location.assign(C);
    }
    o && g && g({ action: m, location: T.location, delta: 1 });
  }
  function _(E, A) {
    m = "REPLACE";
    let O = ph(T.location, E, A);
    p = v();
    let z = t1(O, p),
      C = T.createHref(O);
    f.replaceState(z, "", C),
      o && g && g({ action: m, location: T.location, delta: 0 });
  }
  function w(E) {
    let A = s.location.origin !== "null" ? s.location.origin : s.location.href,
      O = typeof E == "string" ? E : wu(E);
    return (
      (O = O.replace(/ $/, "%20")),
      yt(
        A,
        `No window.location.(origin|href) available to create URL for href: ${O}`
      ),
      new URL(O, A)
    );
  }
  let T = {
    get action() {
      return m;
    },
    get location() {
      return u(s, f);
    },
    listen(E) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(e1, b),
        (g = E),
        () => {
          s.removeEventListener(e1, b), (g = null);
        }
      );
    },
    createHref(E) {
      return l(s, E);
    },
    createURL: w,
    encodeLocation(E) {
      let A = w(E);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: x,
    replace: _,
    go(E) {
      return f.go(E);
    },
  };
  return T;
}
function Z1(u, l, a = "/") {
  return r2(u, l, a, !1);
}
function r2(u, l, a, i) {
  let s = typeof l == "string" ? rs(l) : l,
    o = Ci(s.pathname || "/", a);
  if (o == null) return null;
  let f = K1(u);
  s2(f);
  let m = null;
  for (let g = 0; m == null && g < f.length; ++g) {
    let p = y2(o);
    m = g2(f[g], p, i);
  }
  return m;
}
function K1(u, l = [], a = [], i = "") {
  let s = (o, f, m) => {
    let g = {
      relativePath: m === void 0 ? o.path || "" : m,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: f,
      route: o,
    };
    g.relativePath.startsWith("/") &&
      (yt(
        g.relativePath.startsWith(i),
        `Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (g.relativePath = g.relativePath.slice(i.length)));
    let p = Ni([i, g.relativePath]),
      v = a.concat(g);
    o.children &&
      o.children.length > 0 &&
      (yt(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      K1(o.children, l, v, p)),
      !(o.path == null && !o.index) &&
        l.push({ path: p, score: m2(p, o.index), routesMeta: v });
  };
  return (
    u.forEach((o, f) => {
      var m;
      if (o.path === "" || !((m = o.path) != null && m.includes("?"))) s(o, f);
      else for (let g of $1(o.path)) s(o, f, g);
    }),
    l
  );
}
function $1(u) {
  let l = u.split("/");
  if (l.length === 0) return [];
  let [a, ...i] = l,
    s = a.endsWith("?"),
    o = a.replace(/\?$/, "");
  if (i.length === 0) return s ? [o, ""] : [o];
  let f = $1(i.join("/")),
    m = [];
  return (
    m.push(...f.map((g) => (g === "" ? o : [o, g].join("/")))),
    s && m.push(...f),
    m.map((g) => (u.startsWith("/") && g === "" ? "/" : g))
  );
}
function s2(u) {
  u.sort((l, a) =>
    l.score !== a.score
      ? a.score - l.score
      : p2(
          l.routesMeta.map((i) => i.childrenIndex),
          a.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var u2 = /^:[\w-]+$/,
  c2 = 3,
  o2 = 2,
  f2 = 1,
  d2 = 10,
  h2 = -2,
  n1 = (u) => u === "*";
function m2(u, l) {
  let a = u.split("/"),
    i = a.length;
  return (
    a.some(n1) && (i += h2),
    l && (i += o2),
    a
      .filter((s) => !n1(s))
      .reduce((s, o) => s + (u2.test(o) ? c2 : o === "" ? f2 : d2), i)
  );
}
function p2(u, l) {
  return u.length === l.length && u.slice(0, -1).every((i, s) => i === l[s])
    ? u[u.length - 1] - l[l.length - 1]
    : 0;
}
function g2(u, l, a = !1) {
  let { routesMeta: i } = u,
    s = {},
    o = "/",
    f = [];
  for (let m = 0; m < i.length; ++m) {
    let g = i[m],
      p = m === i.length - 1,
      v = o === "/" ? l : l.slice(o.length) || "/",
      b = jo(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: p },
        v
      ),
      x = g.route;
    if (
      (!b &&
        p &&
        a &&
        !i[i.length - 1].route.index &&
        (b = jo(
          { path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 },
          v
        )),
      !b)
    )
      return null;
    Object.assign(s, b.params),
      f.push({
        params: s,
        pathname: Ni([o, b.pathname]),
        pathnameBase: S2(Ni([o, b.pathnameBase])),
        route: x,
      }),
      b.pathnameBase !== "/" && (o = Ni([o, b.pathnameBase]));
  }
  return f;
}
function jo(u, l) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [a, i] = v2(u.path, u.caseSensitive, u.end),
    s = l.match(a);
  if (!s) return null;
  let o = s[0],
    f = o.replace(/(.)\/+$/, "$1"),
    m = s.slice(1);
  return {
    params: i.reduce((p, { paramName: v, isOptional: b }, x) => {
      if (v === "*") {
        let w = m[x] || "";
        f = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const _ = m[x];
      return (
        b && !_ ? (p[v] = void 0) : (p[v] = (_ || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: o,
    pathnameBase: f,
    pattern: u,
  };
}
function v2(u, l = !1, a = !0) {
  Il(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    s =
      "^" +
      u
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, m, g) => (
            i.push({ paramName: m, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    u.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (s += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (s += "\\/*$")
      : u !== "" && u !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, l ? void 0 : "i"), i]
  );
}
function y2(u) {
  try {
    return u
      .split("/")
      .map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
      .join("/");
  } catch (l) {
    return (
      Il(
        !1,
        `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
      ),
      u
    );
  }
}
function Ci(u, l) {
  if (l === "/") return u;
  if (!u.toLowerCase().startsWith(l.toLowerCase())) return null;
  let a = l.endsWith("/") ? l.length - 1 : l.length,
    i = u.charAt(a);
  return i && i !== "/" ? null : u.slice(a) || "/";
}
function _2(u, l = "/") {
  let {
    pathname: a,
    search: i = "",
    hash: s = "",
  } = typeof u == "string" ? rs(u) : u;
  return {
    pathname: a ? (a.startsWith("/") ? a : x2(a, l)) : l,
    search: j2(i),
    hash: T2(s),
  };
}
function x2(u, l) {
  let a = l.replace(/\/+$/, "").split("/");
  return (
    u.split("/").forEach((s) => {
      s === ".." ? a.length > 1 && a.pop() : s !== "." && a.push(s);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Wd(u, l, a, i) {
  return `Cannot include a '${u}' character in a manually specified \`to.${l}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function b2(u) {
  return u.filter(
    (l, a) => a === 0 || (l.route.path && l.route.path.length > 0)
  );
}
function F1(u) {
  let l = b2(u);
  return l.map((a, i) => (i === l.length - 1 ? a.pathname : a.pathnameBase));
}
function P1(u, l, a, i = !1) {
  let s;
  typeof u == "string"
    ? (s = rs(u))
    : ((s = { ...u }),
      yt(
        !s.pathname || !s.pathname.includes("?"),
        Wd("?", "pathname", "search", s)
      ),
      yt(
        !s.pathname || !s.pathname.includes("#"),
        Wd("#", "pathname", "hash", s)
      ),
      yt(!s.search || !s.search.includes("#"), Wd("#", "search", "hash", s)));
  let o = u === "" || s.pathname === "",
    f = o ? "/" : s.pathname,
    m;
  if (f == null) m = a;
  else {
    let b = l.length - 1;
    if (!i && f.startsWith("..")) {
      let x = f.split("/");
      for (; x[0] === ".."; ) x.shift(), (b -= 1);
      s.pathname = x.join("/");
    }
    m = b >= 0 ? l[b] : "/";
  }
  let g = _2(s, m),
    p = f && f !== "/" && f.endsWith("/"),
    v = (o || f === ".") && a.endsWith("/");
  return !g.pathname.endsWith("/") && (p || v) && (g.pathname += "/"), g;
}
var Ni = (u) => u.join("/").replace(/\/\/+/g, "/"),
  S2 = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
  j2 = (u) => (!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u),
  T2 = (u) => (!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u);
function w2(u) {
  return (
    u != null &&
    typeof u.status == "number" &&
    typeof u.statusText == "string" &&
    typeof u.internal == "boolean" &&
    "data" in u
  );
}
var J1 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(J1);
var E2 = ["GET", ...J1];
new Set(E2);
var ss = N.createContext(null);
ss.displayName = "DataRouter";
var Lo = N.createContext(null);
Lo.displayName = "DataRouterState";
var W1 = N.createContext({ isTransitioning: !1 });
W1.displayName = "ViewTransition";
var N2 = N.createContext(new Map());
N2.displayName = "Fetchers";
var R2 = N.createContext(null);
R2.displayName = "Await";
var ti = N.createContext(null);
ti.displayName = "Navigation";
var Hu = N.createContext(null);
Hu.displayName = "Location";
var ni = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ni.displayName = "Route";
var Vh = N.createContext(null);
Vh.displayName = "RouteError";
function A2(u, { relative: l } = {}) {
  yt(
    Bu(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: i } = N.useContext(ti),
    { hash: s, pathname: o, search: f } = Yu(u, { relative: l }),
    m = o;
  return (
    a !== "/" && (m = o === "/" ? a : Ni([a, o])),
    i.createHref({ pathname: m, search: f, hash: s })
  );
}
function Bu() {
  return N.useContext(Hu) != null;
}
function ir() {
  return (
    yt(
      Bu(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    N.useContext(Hu).location
  );
}
var I1 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ev(u) {
  N.useContext(ti).static || N.useLayoutEffect(u);
}
function Qh() {
  let { isDataRoute: u } = N.useContext(ni);
  return u ? G2() : C2();
}
function C2() {
  yt(
    Bu(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = N.useContext(ss),
    { basename: l, navigator: a } = N.useContext(ti),
    { matches: i } = N.useContext(ni),
    { pathname: s } = ir(),
    o = JSON.stringify(F1(i)),
    f = N.useRef(!1);
  return (
    ev(() => {
      f.current = !0;
    }),
    N.useCallback(
      (g, p = {}) => {
        if ((Il(f.current, I1), !f.current)) return;
        if (typeof g == "number") {
          a.go(g);
          return;
        }
        let v = P1(g, JSON.parse(o), s, p.relative === "path");
        u == null &&
          l !== "/" &&
          (v.pathname = v.pathname === "/" ? l : Ni([l, v.pathname])),
          (p.replace ? a.replace : a.push)(v, p.state, p);
      },
      [l, a, o, s, u]
    )
  );
}
N.createContext(null);
function M2() {
  let { matches: u } = N.useContext(ni),
    l = u[u.length - 1];
  return l ? l.params : {};
}
function Yu(u, { relative: l } = {}) {
  let { matches: a } = N.useContext(ni),
    { pathname: i } = ir(),
    s = JSON.stringify(F1(a));
  return N.useMemo(() => P1(u, JSON.parse(s), i, l === "path"), [u, s, i, l]);
}
function O2(u, l) {
  return tv(u, l);
}
function tv(u, l, a, i) {
  var O;
  yt(
    Bu(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s, static: o } = N.useContext(ti),
    { matches: f } = N.useContext(ni),
    m = f[f.length - 1],
    g = m ? m.params : {},
    p = m ? m.pathname : "/",
    v = m ? m.pathnameBase : "/",
    b = m && m.route;
  {
    let z = (b && b.path) || "";
    nv(
      p,
      !b || z.endsWith("*") || z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${
        z === "/" ? "*" : `${z}/*`
      }">.`
    );
  }
  let x = ir(),
    _;
  if (l) {
    let z = typeof l == "string" ? rs(l) : l;
    yt(
      v === "/" || ((O = z.pathname) == null ? void 0 : O.startsWith(v)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${z.pathname}" was given in the \`location\` prop.`
    ),
      (_ = z);
  } else _ = x;
  let w = _.pathname || "/",
    T = w;
  if (v !== "/") {
    let z = v.replace(/^\//, "").split("/");
    T = "/" + w.replace(/^\//, "").split("/").slice(z.length).join("/");
  }
  let E =
    !o && a && a.matches && a.matches.length > 0
      ? a.matches
      : Z1(u, { pathname: T });
  Il(
    b || E != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ),
    Il(
      E == null ||
        E[E.length - 1].route.element !== void 0 ||
        E[E.length - 1].route.Component !== void 0 ||
        E[E.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let A = U2(
    E &&
      E.map((z) =>
        Object.assign({}, z, {
          params: Object.assign({}, g, z.params),
          pathname: Ni([
            v,
            s.encodeLocation
              ? s.encodeLocation(z.pathname).pathname
              : z.pathname,
          ]),
          pathnameBase:
            z.pathnameBase === "/"
              ? v
              : Ni([
                  v,
                  s.encodeLocation
                    ? s.encodeLocation(z.pathnameBase).pathname
                    : z.pathnameBase,
                ]),
        })
      ),
    f,
    a,
    i
  );
  return l && A
    ? N.createElement(
        Hu.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ..._,
            },
            navigationType: "POP",
          },
        },
        A
      )
    : A;
}
function D2() {
  let u = X2(),
    l = w2(u)
      ? `${u.status} ${u.statusText}`
      : u instanceof Error
      ? u.message
      : JSON.stringify(u),
    a = u instanceof Error ? u.stack : null,
    i = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: i },
    o = { padding: "2px 4px", backgroundColor: i },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", u),
    (f = N.createElement(
      N.Fragment,
      null,
      N.createElement("p", null, "💿 Hey developer 👋"),
      N.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        N.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        N.createElement("code", { style: o }, "errorElement"),
        " prop on your route."
      )
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement("h2", null, "Unexpected Application Error!"),
      N.createElement("h3", { style: { fontStyle: "italic" } }, l),
      a ? N.createElement("pre", { style: s }, a) : null,
      f
    )
  );
}
var z2 = N.createElement(D2, null),
  k2 = class extends N.Component {
    constructor(u) {
      super(u),
        (this.state = {
          location: u.location,
          revalidation: u.revalidation,
          error: u.error,
        });
    }
    static getDerivedStateFromError(u) {
      return { error: u };
    }
    static getDerivedStateFromProps(u, l) {
      return l.location !== u.location ||
        (l.revalidation !== "idle" && u.revalidation === "idle")
        ? { error: u.error, location: u.location, revalidation: u.revalidation }
        : {
            error: u.error !== void 0 ? u.error : l.error,
            location: l.location,
            revalidation: u.revalidation || l.revalidation,
          };
    }
    componentDidCatch(u, l) {
      console.error(
        "React Router caught the following error during render",
        u,
        l
      );
    }
    render() {
      return this.state.error !== void 0
        ? N.createElement(
            ni.Provider,
            { value: this.props.routeContext },
            N.createElement(Vh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function L2({ routeContext: u, match: l, children: a }) {
  let i = N.useContext(ss);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = l.route.id),
    N.createElement(ni.Provider, { value: u }, a)
  );
}
function U2(u, l = [], a = null, i = null) {
  if (u == null) {
    if (!a) return null;
    if (a.errors) u = a.matches;
    else if (l.length === 0 && !a.initialized && a.matches.length > 0)
      u = a.matches;
    else return null;
  }
  let s = u,
    o = a == null ? void 0 : a.errors;
  if (o != null) {
    let g = s.findIndex(
      (p) => p.route.id && (o == null ? void 0 : o[p.route.id]) !== void 0
    );
    yt(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ),
      (s = s.slice(0, Math.min(s.length, g + 1)));
  }
  let f = !1,
    m = -1;
  if (a)
    for (let g = 0; g < s.length; g++) {
      let p = s[g];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (m = g),
        p.route.id)
      ) {
        let { loaderData: v, errors: b } = a,
          x =
            p.route.loader &&
            !v.hasOwnProperty(p.route.id) &&
            (!b || b[p.route.id] === void 0);
        if (p.route.lazy || x) {
          (f = !0), m >= 0 ? (s = s.slice(0, m + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((g, p, v) => {
    let b,
      x = !1,
      _ = null,
      w = null;
    a &&
      ((b = o && p.route.id ? o[p.route.id] : void 0),
      (_ = p.route.errorElement || z2),
      f &&
        (m < 0 && v === 0
          ? (nv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (x = !0),
            (w = null))
          : m === v &&
            ((x = !0), (w = p.route.hydrateFallbackElement || null))));
    let T = l.concat(s.slice(0, v + 1)),
      E = () => {
        let A;
        return (
          b
            ? (A = _)
            : x
            ? (A = w)
            : p.route.Component
            ? (A = N.createElement(p.route.Component, null))
            : p.route.element
            ? (A = p.route.element)
            : (A = g),
          N.createElement(L2, {
            match: p,
            routeContext: { outlet: g, matches: T, isDataRoute: a != null },
            children: A,
          })
        );
      };
    return a && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
      ? N.createElement(k2, {
          location: a.location,
          revalidation: a.revalidation,
          component: _,
          error: b,
          children: E(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function Zh(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function H2(u) {
  let l = N.useContext(ss);
  return yt(l, Zh(u)), l;
}
function B2(u) {
  let l = N.useContext(Lo);
  return yt(l, Zh(u)), l;
}
function Y2(u) {
  let l = N.useContext(ni);
  return yt(l, Zh(u)), l;
}
function Kh(u) {
  let l = Y2(u),
    a = l.matches[l.matches.length - 1];
  return (
    yt(
      a.route.id,
      `${u} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function q2() {
  return Kh("useRouteId");
}
function X2() {
  var i;
  let u = N.useContext(Vh),
    l = B2("useRouteError"),
    a = Kh("useRouteError");
  return u !== void 0 ? u : (i = l.errors) == null ? void 0 : i[a];
}
function G2() {
  let { router: u } = H2("useNavigate"),
    l = Kh("useNavigate"),
    a = N.useRef(!1);
  return (
    ev(() => {
      a.current = !0;
    }),
    N.useCallback(
      async (s, o = {}) => {
        Il(a.current, I1),
          a.current &&
            (typeof s == "number"
              ? u.navigate(s)
              : await u.navigate(s, { fromRouteId: l, ...o }));
      },
      [u, l]
    )
  );
}
var l1 = {};
function nv(u, l, a) {
  !l && !l1[u] && ((l1[u] = !0), Il(!1, a));
}
N.memo(V2);
function V2({ routes: u, future: l, state: a }) {
  return tv(u, void 0, a, l);
}
function Si(u) {
  yt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Q2({
  basename: u = "/",
  children: l = null,
  location: a,
  navigationType: i = "POP",
  navigator: s,
  static: o = !1,
}) {
  yt(
    !Bu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = u.replace(/^\/*/, "/"),
    m = N.useMemo(
      () => ({ basename: f, navigator: s, static: o, future: {} }),
      [f, s, o]
    );
  typeof a == "string" && (a = rs(a));
  let {
      pathname: g = "/",
      search: p = "",
      hash: v = "",
      state: b = null,
      key: x = "default",
    } = a,
    _ = N.useMemo(() => {
      let w = Ci(g, f);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: v, state: b, key: x },
            navigationType: i,
          };
    }, [f, g, p, v, b, x, i]);
  return (
    Il(
      _ != null,
      `<Router basename="${f}"> is not able to match the URL "${g}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    _ == null
      ? null
      : N.createElement(
          ti.Provider,
          { value: m },
          N.createElement(Hu.Provider, { children: l, value: _ })
        )
  );
}
function Z2({ children: u, location: l }) {
  return O2(gh(u), l);
}
function gh(u, l = []) {
  let a = [];
  return (
    N.Children.forEach(u, (i, s) => {
      if (!N.isValidElement(i)) return;
      let o = [...l, s];
      if (i.type === N.Fragment) {
        a.push.apply(a, gh(i.props.children, o));
        return;
      }
      yt(
        i.type === Si,
        `[${
          typeof i.type == "string" ? i.type : i.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        yt(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes."
        );
      let f = {
        id: i.props.id || o.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (f.children = gh(i.props.children, o)), a.push(f);
    }),
    a
  );
}
var fo = "get",
  ho = "application/x-www-form-urlencoded";
function Uo(u) {
  return u != null && typeof u.tagName == "string";
}
function K2(u) {
  return Uo(u) && u.tagName.toLowerCase() === "button";
}
function $2(u) {
  return Uo(u) && u.tagName.toLowerCase() === "form";
}
function F2(u) {
  return Uo(u) && u.tagName.toLowerCase() === "input";
}
function P2(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function J2(u, l) {
  return u.button === 0 && (!l || l === "_self") && !P2(u);
}
var Fc = null;
function W2() {
  if (Fc === null)
    try {
      new FormData(document.createElement("form"), 0), (Fc = !1);
    } catch {
      Fc = !0;
    }
  return Fc;
}
var I2 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Id(u) {
  return u != null && !I2.has(u)
    ? (Il(
        !1,
        `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ho}"`
      ),
      null)
    : u;
}
function eb(u, l) {
  let a, i, s, o, f;
  if ($2(u)) {
    let m = u.getAttribute("action");
    (i = m ? Ci(m, l) : null),
      (a = u.getAttribute("method") || fo),
      (s = Id(u.getAttribute("enctype")) || ho),
      (o = new FormData(u));
  } else if (K2(u) || (F2(u) && (u.type === "submit" || u.type === "image"))) {
    let m = u.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = u.getAttribute("formaction") || m.getAttribute("action");
    if (
      ((i = g ? Ci(g, l) : null),
      (a = u.getAttribute("formmethod") || m.getAttribute("method") || fo),
      (s =
        Id(u.getAttribute("formenctype")) ||
        Id(m.getAttribute("enctype")) ||
        ho),
      (o = new FormData(m, u)),
      !W2())
    ) {
      let { name: p, type: v, value: b } = u;
      if (v === "image") {
        let x = p ? `${p}.` : "";
        o.append(`${x}x`, "0"), o.append(`${x}y`, "0");
      } else p && o.append(p, b);
    }
  } else {
    if (Uo(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = fo), (i = null), (s = ho), (f = u);
  }
  return (
    o && s === "text/plain" && ((f = o), (o = void 0)),
    { action: i, method: a.toLowerCase(), encType: s, formData: o, body: f }
  );
}
function $h(u, l) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(l);
}
async function tb(u, l) {
  if (u.id in l) return l[u.id];
  try {
    let a = await import(/* @vite-ignore */ u.module);
    return (l[u.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${u.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function nb(u) {
  return u == null
    ? !1
    : u.href == null
    ? u.rel === "preload" &&
      typeof u.imageSrcSet == "string" &&
      typeof u.imageSizes == "string"
    : typeof u.rel == "string" && typeof u.href == "string";
}
async function lb(u, l, a) {
  let i = await Promise.all(
    u.map(async (s) => {
      let o = l.routes[s.route.id];
      if (o) {
        let f = await tb(o, a);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return sb(
    i
      .flat(1)
      .filter(nb)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" }
      )
  );
}
function i1(u, l, a, i, s, o) {
  let f = (g, p) => (a[p] ? g.route.id !== a[p].route.id : !0),
    m = (g, p) => {
      var v;
      return (
        a[p].pathname !== g.pathname ||
        (((v = a[p].route.path) == null ? void 0 : v.endsWith("*")) &&
          a[p].params["*"] !== g.params["*"])
      );
    };
  return o === "assets"
    ? l.filter((g, p) => f(g, p) || m(g, p))
    : o === "data"
    ? l.filter((g, p) => {
        var b;
        let v = i.routes[g.route.id];
        if (!v || !v.hasLoader) return !1;
        if (f(g, p) || m(g, p)) return !0;
        if (g.route.shouldRevalidate) {
          let x = g.route.shouldRevalidate({
            currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
            currentParams: ((b = a[0]) == null ? void 0 : b.params) || {},
            nextUrl: new URL(u, window.origin),
            nextParams: g.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof x == "boolean") return x;
        }
        return !0;
      })
    : [];
}
function ib(u, l, { includeHydrateFallback: a } = {}) {
  return ab(
    u
      .map((i) => {
        let s = l.routes[i.route.id];
        if (!s) return [];
        let o = [s.module];
        return (
          s.clientActionModule && (o = o.concat(s.clientActionModule)),
          s.clientLoaderModule && (o = o.concat(s.clientLoaderModule)),
          a &&
            s.hydrateFallbackModule &&
            (o = o.concat(s.hydrateFallbackModule)),
          s.imports && (o = o.concat(s.imports)),
          o
        );
      })
      .flat(1)
  );
}
function ab(u) {
  return [...new Set(u)];
}
function rb(u) {
  let l = {},
    a = Object.keys(u).sort();
  for (let i of a) l[i] = u[i];
  return l;
}
function sb(u, l) {
  let a = new Set();
  return (
    new Set(l),
    u.reduce((i, s) => {
      let o = JSON.stringify(rb(s));
      return a.has(o) || (a.add(o), i.push({ key: o, link: s })), i;
    }, [])
  );
}
function ub(u, l) {
  let a =
    typeof u == "string"
      ? new URL(
          u,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : u;
  return (
    a.pathname === "/"
      ? (a.pathname = "_root.data")
      : l && Ci(a.pathname, l) === "/"
      ? (a.pathname = `${l.replace(/\/$/, "")}/_root.data`)
      : (a.pathname = `${a.pathname.replace(/\/$/, "")}.data`),
    a
  );
}
function lv() {
  let u = N.useContext(ss);
  return (
    $h(
      u,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    u
  );
}
function cb() {
  let u = N.useContext(Lo);
  return (
    $h(
      u,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    u
  );
}
var Fh = N.createContext(void 0);
Fh.displayName = "FrameworkContext";
function iv() {
  let u = N.useContext(Fh);
  return (
    $h(u, "You must render this element inside a <HydratedRouter> element"), u
  );
}
function ob(u, l) {
  let a = N.useContext(Fh),
    [i, s] = N.useState(!1),
    [o, f] = N.useState(!1),
    {
      onFocus: m,
      onBlur: g,
      onMouseEnter: p,
      onMouseLeave: v,
      onTouchStart: b,
    } = l,
    x = N.useRef(null);
  N.useEffect(() => {
    if ((u === "render" && f(!0), u === "viewport")) {
      let T = (A) => {
          A.forEach((O) => {
            f(O.isIntersecting);
          });
        },
        E = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        x.current && E.observe(x.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [u]),
    N.useEffect(() => {
      if (i) {
        let T = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [i]);
  let _ = () => {
      s(!0);
    },
    w = () => {
      s(!1), f(!1);
    };
  return a
    ? u !== "intent"
      ? [o, x, {}]
      : [
          o,
          x,
          {
            onFocus: nu(m, _),
            onBlur: nu(g, w),
            onMouseEnter: nu(p, _),
            onMouseLeave: nu(v, w),
            onTouchStart: nu(b, _),
          },
        ]
    : [!1, x, {}];
}
function nu(u, l) {
  return (a) => {
    u && u(a), a.defaultPrevented || l(a);
  };
}
function fb({ page: u, ...l }) {
  let { router: a } = lv(),
    i = N.useMemo(() => Z1(a.routes, u, a.basename), [a.routes, u, a.basename]);
  return i ? N.createElement(hb, { page: u, matches: i, ...l }) : null;
}
function db(u) {
  let { manifest: l, routeModules: a } = iv(),
    [i, s] = N.useState([]);
  return (
    N.useEffect(() => {
      let o = !1;
      return (
        lb(u, l, a).then((f) => {
          o || s(f);
        }),
        () => {
          o = !0;
        }
      );
    }, [u, l, a]),
    i
  );
}
function hb({ page: u, matches: l, ...a }) {
  let i = ir(),
    { manifest: s, routeModules: o } = iv(),
    { basename: f } = lv(),
    { loaderData: m, matches: g } = cb(),
    p = N.useMemo(() => i1(u, l, g, s, i, "data"), [u, l, g, s, i]),
    v = N.useMemo(() => i1(u, l, g, s, i, "assets"), [u, l, g, s, i]),
    b = N.useMemo(() => {
      if (u === i.pathname + i.search + i.hash) return [];
      let w = new Set(),
        T = !1;
      if (
        (l.forEach((A) => {
          var z;
          let O = s.routes[A.route.id];
          !O ||
            !O.hasLoader ||
            ((!p.some((C) => C.route.id === A.route.id) &&
              A.route.id in m &&
              (z = o[A.route.id]) != null &&
              z.shouldRevalidate) ||
            O.hasClientLoader
              ? (T = !0)
              : w.add(A.route.id));
        }),
        w.size === 0)
      )
        return [];
      let E = ub(u, f);
      return (
        T &&
          w.size > 0 &&
          E.searchParams.set(
            "_routes",
            l
              .filter((A) => w.has(A.route.id))
              .map((A) => A.route.id)
              .join(",")
          ),
        [E.pathname + E.search]
      );
    }, [f, m, i, s, p, l, u, o]),
    x = N.useMemo(() => ib(v, s), [v, s]),
    _ = db(v);
  return N.createElement(
    N.Fragment,
    null,
    b.map((w) =>
      N.createElement("link", {
        key: w,
        rel: "prefetch",
        as: "fetch",
        href: w,
        ...a,
      })
    ),
    x.map((w) =>
      N.createElement("link", { key: w, rel: "modulepreload", href: w, ...a })
    ),
    _.map(({ key: w, link: T }) => N.createElement("link", { key: w, ...T }))
  );
}
function mb(...u) {
  return (l) => {
    u.forEach((a) => {
      typeof a == "function" ? a(l) : a != null && (a.current = l);
    });
  };
}
var av =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  av && (window.__reactRouterVersion = "7.5.0");
} catch {}
function pb({ basename: u, children: l, window: a }) {
  let i = N.useRef();
  i.current == null && (i.current = l2({ window: a, v5Compat: !0 }));
  let s = i.current,
    [o, f] = N.useState({ action: s.action, location: s.location }),
    m = N.useCallback(
      (g) => {
        N.startTransition(() => f(g));
      },
      [f]
    );
  return (
    N.useLayoutEffect(() => s.listen(m), [s, m]),
    N.createElement(Q2, {
      basename: u,
      children: l,
      location: o.location,
      navigationType: o.action,
      navigator: s,
    })
  );
}
var rv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ge = N.forwardRef(function (
    {
      onClick: l,
      discover: a = "render",
      prefetch: i = "none",
      relative: s,
      reloadDocument: o,
      replace: f,
      state: m,
      target: g,
      to: p,
      preventScrollReset: v,
      viewTransition: b,
      ...x
    },
    _
  ) {
    let { basename: w } = N.useContext(ti),
      T = typeof p == "string" && rv.test(p),
      E,
      A = !1;
    if (typeof p == "string" && T && ((E = p), av))
      try {
        let L = new URL(window.location.href),
          G = p.startsWith("//") ? new URL(L.protocol + p) : new URL(p),
          se = Ci(G.pathname, w);
        G.origin === L.origin && se != null
          ? (p = se + G.search + G.hash)
          : (A = !0);
      } catch {
        Il(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let O = A2(p, { relative: s }),
      [z, C, U] = ob(i, x),
      V = _b(p, {
        replace: f,
        state: m,
        target: g,
        preventScrollReset: v,
        relative: s,
        viewTransition: b,
      });
    function q(L) {
      l && l(L), L.defaultPrevented || V(L);
    }
    let Y = N.createElement("a", {
      ...x,
      ...U,
      href: E || O,
      onClick: A || o ? l : q,
      ref: mb(_, C),
      target: g,
      "data-discover": !T && a === "render" ? "true" : void 0,
    });
    return z && !T
      ? N.createElement(N.Fragment, null, Y, N.createElement(fb, { page: O }))
      : Y;
  });
Ge.displayName = "Link";
var gb = N.forwardRef(function (
  {
    "aria-current": l = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: s = !1,
    style: o,
    to: f,
    viewTransition: m,
    children: g,
    ...p
  },
  v
) {
  let b = Yu(f, { relative: p.relative }),
    x = ir(),
    _ = N.useContext(Lo),
    { navigator: w, basename: T } = N.useContext(ti),
    E = _ != null && Tb(b) && m === !0,
    A = w.encodeLocation ? w.encodeLocation(b).pathname : b.pathname,
    O = x.pathname,
    z =
      _ && _.navigation && _.navigation.location
        ? _.navigation.location.pathname
        : null;
  a ||
    ((O = O.toLowerCase()),
    (z = z ? z.toLowerCase() : null),
    (A = A.toLowerCase())),
    z && T && (z = Ci(z, T) || z);
  const C = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let U = O === A || (!s && O.startsWith(A) && O.charAt(C) === "/"),
    V =
      z != null &&
      (z === A || (!s && z.startsWith(A) && z.charAt(A.length) === "/")),
    q = { isActive: U, isPending: V, isTransitioning: E },
    Y = U ? l : void 0,
    L;
  typeof i == "function"
    ? (L = i(q))
    : (L = [
        i,
        U ? "active" : null,
        V ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let G = typeof o == "function" ? o(q) : o;
  return N.createElement(
    Ge,
    {
      ...p,
      "aria-current": Y,
      className: L,
      ref: v,
      style: G,
      to: f,
      viewTransition: m,
    },
    typeof g == "function" ? g(q) : g
  );
});
gb.displayName = "NavLink";
var vb = N.forwardRef(
  (
    {
      discover: u = "render",
      fetcherKey: l,
      navigate: a,
      reloadDocument: i,
      replace: s,
      state: o,
      method: f = fo,
      action: m,
      onSubmit: g,
      relative: p,
      preventScrollReset: v,
      viewTransition: b,
      ...x
    },
    _
  ) => {
    let w = Sb(),
      T = jb(m, { relative: p }),
      E = f.toLowerCase() === "get" ? "get" : "post",
      A = typeof m == "string" && rv.test(m),
      O = (z) => {
        if ((g && g(z), z.defaultPrevented)) return;
        z.preventDefault();
        let C = z.nativeEvent.submitter,
          U = (C == null ? void 0 : C.getAttribute("formmethod")) || f;
        w(C || z.currentTarget, {
          fetcherKey: l,
          method: U,
          navigate: a,
          replace: s,
          state: o,
          relative: p,
          preventScrollReset: v,
          viewTransition: b,
        });
      };
    return N.createElement("form", {
      ref: _,
      method: E,
      action: T,
      onSubmit: i ? g : O,
      ...x,
      "data-discover": !A && u === "render" ? "true" : void 0,
    });
  }
);
vb.displayName = "Form";
function yb(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sv(u) {
  let l = N.useContext(ss);
  return yt(l, yb(u)), l;
}
function _b(
  u,
  {
    target: l,
    replace: a,
    state: i,
    preventScrollReset: s,
    relative: o,
    viewTransition: f,
  } = {}
) {
  let m = Qh(),
    g = ir(),
    p = Yu(u, { relative: o });
  return N.useCallback(
    (v) => {
      if (J2(v, l)) {
        v.preventDefault();
        let b = a !== void 0 ? a : wu(g) === wu(p);
        m(u, {
          replace: b,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: f,
        });
      }
    },
    [g, m, p, a, i, l, u, s, o, f]
  );
}
var xb = 0,
  bb = () => `__${String(++xb)}__`;
function Sb() {
  let { router: u } = sv("useSubmit"),
    { basename: l } = N.useContext(ti),
    a = q2();
  return N.useCallback(
    async (i, s = {}) => {
      let { action: o, method: f, encType: m, formData: g, body: p } = eb(i, l);
      if (s.navigate === !1) {
        let v = s.fetcherKey || bb();
        await u.fetch(v, a, s.action || o, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: p,
          formMethod: s.method || f,
          formEncType: s.encType || m,
          flushSync: s.flushSync,
        });
      } else
        await u.navigate(s.action || o, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: p,
          formMethod: s.method || f,
          formEncType: s.encType || m,
          replace: s.replace,
          state: s.state,
          fromRouteId: a,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [u, l, a]
  );
}
function jb(u, { relative: l } = {}) {
  let { basename: a } = N.useContext(ti),
    i = N.useContext(ni);
  yt(i, "useFormAction must be used inside a RouteContext");
  let [s] = i.matches.slice(-1),
    o = { ...Yu(u || ".", { relative: l }) },
    f = ir();
  if (u == null) {
    o.search = f.search;
    let m = new URLSearchParams(o.search),
      g = m.getAll("index");
    if (g.some((v) => v === "")) {
      m.delete("index"),
        g.filter((b) => b).forEach((b) => m.append("index", b));
      let v = m.toString();
      o.search = v ? `?${v}` : "";
    }
  }
  return (
    (!u || u === ".") &&
      s.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (o.pathname = o.pathname === "/" ? a : Ni([a, o.pathname])),
    wu(o)
  );
}
function Tb(u, l = {}) {
  let a = N.useContext(W1);
  yt(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = sv("useViewTransitionState"),
    s = Yu(u, { relative: l.relative });
  if (!a.isTransitioning) return !1;
  let o = Ci(a.currentLocation.pathname, i) || a.currentLocation.pathname,
    f = Ci(a.nextLocation.pathname, i) || a.nextLocation.pathname;
  return jo(s.pathname, f) != null || jo(s.pathname, o) != null;
}
new TextEncoder();
function ji(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function uv(u, l) {
  (u.prototype = Object.create(l.prototype)),
    (u.prototype.constructor = u),
    (u.__proto__ = l);
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var nl = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Ir = { duration: 0.5, overwrite: !1, delay: 0 },
  Ph,
  an,
  ft,
  Pl = 1e8,
  yn = 1 / Pl,
  vh = Math.PI * 2,
  wb = vh / 4,
  Eb = 0,
  cv = Math.sqrt,
  Nb = Math.cos,
  Rb = Math.sin,
  It = function (l) {
    return typeof l == "string";
  },
  wt = function (l) {
    return typeof l == "function";
  },
  Mi = function (l) {
    return typeof l == "number";
  },
  Jh = function (l) {
    return typeof l > "u";
  },
  ei = function (l) {
    return typeof l == "object";
  },
  kn = function (l) {
    return l !== !1;
  },
  Wh = function () {
    return typeof window < "u";
  },
  Pc = function (l) {
    return wt(l) || It(l);
  },
  ov =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  _n = Array.isArray,
  yh = /(?:-?\.?\d|\.)+/gi,
  fv = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Gr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  eh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  dv = /[+-]=-?[.\d]+/,
  hv = /[^,'"\[\]\s]+/gi,
  Ab = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  gt,
  Vl,
  _h,
  Ih,
  ll = {},
  To = {},
  mv,
  pv = function (l) {
    return (To = es(l, ll)) && Bn;
  },
  em = function (l, a) {
    return console.warn(
      "Invalid property",
      l,
      "set to",
      a,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Eu = function (l, a) {
    return !a && console.warn(l);
  },
  gv = function (l, a) {
    return (l && (ll[l] = a) && To && (To[l] = a)) || ll;
  },
  Nu = function () {
    return 0;
  },
  Cb = { suppressEvents: !0, isStart: !0, kill: !1 },
  mo = { suppressEvents: !0, kill: !1 },
  Mb = { suppressEvents: !0 },
  tm = {},
  ca = [],
  xh = {},
  vv,
  Jn = {},
  th = {},
  a1 = 30,
  po = [],
  nm = "",
  lm = function (l) {
    var a = l[0],
      i,
      s;
    if ((ei(a) || wt(a) || (l = [l]), !(i = (a._gsap || {}).harness))) {
      for (s = po.length; s-- && !po[s].targetTest(a); );
      i = po[s];
    }
    for (s = l.length; s--; )
      (l[s] && (l[s]._gsap || (l[s]._gsap = new qv(l[s], i)))) ||
        l.splice(s, 1);
    return l;
  },
  Za = function (l) {
    return l._gsap || lm(wl(l))[0]._gsap;
  },
  yv = function (l, a, i) {
    return (i = l[a]) && wt(i)
      ? l[a]()
      : (Jh(i) && l.getAttribute && l.getAttribute(a)) || i;
  },
  Ln = function (l, a) {
    return (l = l.split(",")).forEach(a) || l;
  },
  At = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  Bt = function (l) {
    return Math.round(l * 1e7) / 1e7 || 0;
  },
  Zr = function (l, a) {
    var i = a.charAt(0),
      s = parseFloat(a.substr(2));
    return (
      (l = parseFloat(l)),
      i === "+" ? l + s : i === "-" ? l - s : i === "*" ? l * s : l / s
    );
  },
  Ob = function (l, a) {
    for (var i = a.length, s = 0; l.indexOf(a[s]) < 0 && ++s < i; );
    return s < i;
  },
  wo = function () {
    var l = ca.length,
      a = ca.slice(0),
      i,
      s;
    for (xh = {}, ca.length = 0, i = 0; i < l; i++)
      (s = a[i]),
        s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
  },
  _v = function (l, a, i, s) {
    ca.length && !an && wo(),
      l.render(a, i, an && a < 0 && (l._initted || l._startAt)),
      ca.length && !an && wo();
  },
  xv = function (l) {
    var a = parseFloat(l);
    return (a || a === 0) && (l + "").match(hv).length < 2
      ? a
      : It(l)
      ? l.trim()
      : l;
  },
  bv = function (l) {
    return l;
  },
  il = function (l, a) {
    for (var i in a) i in l || (l[i] = a[i]);
    return l;
  },
  Db = function (l) {
    return function (a, i) {
      for (var s in i)
        s in a || (s === "duration" && l) || s === "ease" || (a[s] = i[s]);
    };
  },
  es = function (l, a) {
    for (var i in a) l[i] = a[i];
    return l;
  },
  r1 = function u(l, a) {
    for (var i in a)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (l[i] = ei(a[i]) ? u(l[i] || (l[i] = {}), a[i]) : a[i]);
    return l;
  },
  Eo = function (l, a) {
    var i = {},
      s;
    for (s in l) s in a || (i[s] = l[s]);
    return i;
  },
  hu = function (l) {
    var a = l.parent || gt,
      i = l.keyframes ? Db(_n(l.keyframes)) : il;
    if (kn(l.inherit))
      for (; a; ) i(l, a.vars.defaults), (a = a.parent || a._dp);
    return l;
  },
  zb = function (l, a) {
    for (var i = l.length, s = i === a.length; s && i-- && l[i] === a[i]; );
    return i < 0;
  },
  Sv = function (l, a, i, s, o) {
    var f = l[s],
      m;
    if (o) for (m = a[o]; f && f[o] > m; ) f = f._prev;
    return (
      f ? ((a._next = f._next), (f._next = a)) : ((a._next = l[i]), (l[i] = a)),
      a._next ? (a._next._prev = a) : (l[s] = a),
      (a._prev = f),
      (a.parent = a._dp = l),
      a
    );
  },
  Ho = function (l, a, i, s) {
    i === void 0 && (i = "_first"), s === void 0 && (s = "_last");
    var o = a._prev,
      f = a._next;
    o ? (o._next = f) : l[i] === a && (l[i] = f),
      f ? (f._prev = o) : l[s] === a && (l[s] = o),
      (a._next = a._prev = a.parent = null);
  },
  ha = function (l, a) {
    l.parent &&
      (!a || l.parent.autoRemoveChildren) &&
      l.parent.remove &&
      l.parent.remove(l),
      (l._act = 0);
  },
  Ka = function (l, a) {
    if (l && (!a || a._end > l._dur || a._start < 0))
      for (var i = l; i; ) (i._dirty = 1), (i = i.parent);
    return l;
  },
  kb = function (l) {
    for (var a = l.parent; a && a.parent; )
      (a._dirty = 1), a.totalDuration(), (a = a.parent);
    return l;
  },
  bh = function (l, a, i, s) {
    return (
      l._startAt &&
      (an
        ? l._startAt.revert(mo)
        : (l.vars.immediateRender && !l.vars.autoRevert) ||
          l._startAt.render(a, !0, s))
    );
  },
  Lb = function u(l) {
    return !l || (l._ts && u(l.parent));
  },
  s1 = function (l) {
    return l._repeat ? ts(l._tTime, (l = l.duration() + l._rDelay)) * l : 0;
  },
  ts = function (l, a) {
    var i = Math.floor((l = Bt(l / a)));
    return l && i === l ? i - 1 : i;
  },
  No = function (l, a) {
    return (
      (l - a._start) * a._ts +
      (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur)
    );
  },
  Bo = function (l) {
    return (l._end = Bt(
      l._start + (l._tDur / Math.abs(l._ts || l._rts || yn) || 0)
    ));
  },
  Yo = function (l, a) {
    var i = l._dp;
    return (
      i &&
        i.smoothChildTiming &&
        l._ts &&
        ((l._start = Bt(
          i._time -
            (l._ts > 0
              ? a / l._ts
              : ((l._dirty ? l.totalDuration() : l._tDur) - a) / -l._ts)
        )),
        Bo(l),
        i._dirty || Ka(i, l)),
      l
    );
  },
  jv = function (l, a) {
    var i;
    if (
      ((a._time ||
        (!a._dur && a._initted) ||
        (a._start < l._time && (a._dur || !a.add))) &&
        ((i = No(l.rawTime(), a)),
        (!a._dur || qu(0, a.totalDuration(), i) - a._tTime > yn) &&
          a.render(i, !0)),
      Ka(l, a)._dp && l._initted && l._time >= l._dur && l._ts)
    ) {
      if (l._dur < l.duration())
        for (i = l; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      l._zTime = -1e-8;
    }
  },
  Zl = function (l, a, i, s) {
    return (
      a.parent && ha(a),
      (a._start = Bt(
        (Mi(i) ? i : i || l !== gt ? Sl(l, i, a) : l._time) + a._delay
      )),
      (a._end = Bt(
        a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)
      )),
      Sv(l, a, "_first", "_last", l._sort ? "_start" : 0),
      Sh(a) || (l._recent = a),
      s || jv(l, a),
      l._ts < 0 && Yo(l, l._tTime),
      l
    );
  },
  Tv = function (l, a) {
    return (
      (ll.ScrollTrigger || em("scrollTrigger", a)) &&
      ll.ScrollTrigger.create(a, l)
    );
  },
  wv = function (l, a, i, s, o) {
    if ((am(l, a, o), !l._initted)) return 1;
    if (
      !i &&
      l._pt &&
      !an &&
      ((l._dur && l.vars.lazy !== !1) || (!l._dur && l.vars.lazy)) &&
      vv !== In.frame
    )
      return ca.push(l), (l._lazy = [o, s]), 1;
  },
  Ub = function u(l) {
    var a = l.parent;
    return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || u(a));
  },
  Sh = function (l) {
    var a = l.data;
    return a === "isFromStart" || a === "isStart";
  },
  Hb = function (l, a, i, s) {
    var o = l.ratio,
      f =
        a < 0 ||
        (!a &&
          ((!l._start && Ub(l) && !(!l._initted && Sh(l))) ||
            ((l._ts < 0 || l._dp._ts < 0) && !Sh(l))))
          ? 0
          : 1,
      m = l._rDelay,
      g = 0,
      p,
      v,
      b;
    if (
      (m &&
        l._repeat &&
        ((g = qu(0, l._tDur, a)),
        (v = ts(g, m)),
        l._yoyo && v & 1 && (f = 1 - f),
        v !== ts(l._tTime, m) &&
          ((o = 1 - f), l.vars.repeatRefresh && l._initted && l.invalidate())),
      f !== o || an || s || l._zTime === yn || (!a && l._zTime))
    ) {
      if (!l._initted && wv(l, a, s, i, g)) return;
      for (
        b = l._zTime,
          l._zTime = a || (i ? yn : 0),
          i || (i = a && !b),
          l.ratio = f,
          l._from && (f = 1 - f),
          l._time = 0,
          l._tTime = g,
          p = l._pt;
        p;

      )
        p.r(f, p.d), (p = p._next);
      a < 0 && bh(l, a, i, !0),
        l._onUpdate && !i && tl(l, "onUpdate"),
        g && l._repeat && !i && l.parent && tl(l, "onRepeat"),
        (a >= l._tDur || a < 0) &&
          l.ratio === f &&
          (f && ha(l, 1),
          !i &&
            !an &&
            (tl(l, f ? "onComplete" : "onReverseComplete", !0),
            l._prom && l._prom()));
    } else l._zTime || (l._zTime = a);
  },
  Bb = function (l, a, i) {
    var s;
    if (i > a)
      for (s = l._first; s && s._start <= i; ) {
        if (s.data === "isPause" && s._start > a) return s;
        s = s._next;
      }
    else
      for (s = l._last; s && s._start >= i; ) {
        if (s.data === "isPause" && s._start < a) return s;
        s = s._prev;
      }
  },
  ns = function (l, a, i, s) {
    var o = l._repeat,
      f = Bt(a) || 0,
      m = l._tTime / l._tDur;
    return (
      m && !s && (l._time *= f / l._dur),
      (l._dur = f),
      (l._tDur = o ? (o < 0 ? 1e10 : Bt(f * (o + 1) + l._rDelay * o)) : f),
      m > 0 && !s && Yo(l, (l._tTime = l._tDur * m)),
      l.parent && Bo(l),
      i || Ka(l.parent, l),
      l
    );
  },
  u1 = function (l) {
    return l instanceof An ? Ka(l) : ns(l, l._dur);
  },
  Yb = { _start: 0, endTime: Nu, totalDuration: Nu },
  Sl = function u(l, a, i) {
    var s = l.labels,
      o = l._recent || Yb,
      f = l.duration() >= Pl ? o.endTime(!1) : l._dur,
      m,
      g,
      p;
    return It(a) && (isNaN(a) || a in s)
      ? ((g = a.charAt(0)),
        (p = a.substr(-1) === "%"),
        (m = a.indexOf("=")),
        g === "<" || g === ">"
          ? (m >= 0 && (a = a.replace(/=/, "")),
            (g === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(a.substr(1)) || 0) *
                (p ? (m < 0 ? o : i).totalDuration() / 100 : 1))
          : m < 0
          ? (a in s || (s[a] = f), s[a])
          : ((g = parseFloat(a.charAt(m - 1) + a.substr(m + 1))),
            p && i && (g = (g / 100) * (_n(i) ? i[0] : i).totalDuration()),
            m > 1 ? u(l, a.substr(0, m - 1), i) + g : f + g))
      : a == null
      ? f
      : +a;
  },
  mu = function (l, a, i) {
    var s = Mi(a[1]),
      o = (s ? 2 : 1) + (l < 2 ? 0 : 1),
      f = a[o],
      m,
      g;
    if ((s && (f.duration = a[1]), (f.parent = i), l)) {
      for (m = f, g = i; g && !("immediateRender" in m); )
        (m = g.vars.defaults || {}), (g = kn(g.vars.inherit) && g.parent);
      (f.immediateRender = kn(m.immediateRender)),
        l < 2 ? (f.runBackwards = 1) : (f.startAt = a[o - 1]);
    }
    return new Ht(a[0], f, a[o + 1]);
  },
  ga = function (l, a) {
    return l || l === 0 ? a(l) : a;
  },
  qu = function (l, a, i) {
    return i < l ? l : i > a ? a : i;
  },
  pn = function (l, a) {
    return !It(l) || !(a = Ab.exec(l)) ? "" : a[1];
  },
  qb = function (l, a, i) {
    return ga(i, function (s) {
      return qu(l, a, s);
    });
  },
  jh = [].slice,
  Ev = function (l, a) {
    return (
      l &&
      ei(l) &&
      "length" in l &&
      ((!a && !l.length) || (l.length - 1 in l && ei(l[0]))) &&
      !l.nodeType &&
      l !== Vl
    );
  },
  Xb = function (l, a, i) {
    return (
      i === void 0 && (i = []),
      l.forEach(function (s) {
        var o;
        return (It(s) && !a) || Ev(s, 1)
          ? (o = i).push.apply(o, wl(s))
          : i.push(s);
      }) || i
    );
  },
  wl = function (l, a, i) {
    return ft && !a && ft.selector
      ? ft.selector(l)
      : It(l) && !i && (_h || !ls())
      ? jh.call((a || Ih).querySelectorAll(l), 0)
      : _n(l)
      ? Xb(l, i)
      : Ev(l)
      ? jh.call(l, 0)
      : l
      ? [l]
      : [];
  },
  Th = function (l) {
    return (
      (l = wl(l)[0] || Eu("Invalid scope") || {}),
      function (a) {
        var i = l.current || l.nativeElement || l;
        return wl(
          a,
          i.querySelectorAll
            ? i
            : i === l
            ? Eu("Invalid scope") || Ih.createElement("div")
            : l
        );
      }
    );
  },
  Nv = function (l) {
    return l.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Rv = function (l) {
    if (wt(l)) return l;
    var a = ei(l) ? l : { each: l },
      i = $a(a.ease),
      s = a.from || 0,
      o = parseFloat(a.base) || 0,
      f = {},
      m = s > 0 && s < 1,
      g = isNaN(s) || m,
      p = a.axis,
      v = s,
      b = s;
    return (
      It(s)
        ? (v = b = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
        : !m && g && ((v = s[0]), (b = s[1])),
      function (x, _, w) {
        var T = (w || a).length,
          E = f[T],
          A,
          O,
          z,
          C,
          U,
          V,
          q,
          Y,
          L;
        if (!E) {
          if (((L = a.grid === "auto" ? 0 : (a.grid || [1, Pl])[1]), !L)) {
            for (
              q = -1e8;
              q < (q = w[L++].getBoundingClientRect().left) && L < T;

            );
            L < T && L--;
          }
          for (
            E = f[T] = [],
              A = g ? Math.min(L, T) * v - 0.5 : s % L,
              O = L === Pl ? 0 : g ? (T * b) / L - 0.5 : (s / L) | 0,
              q = 0,
              Y = Pl,
              V = 0;
            V < T;
            V++
          )
            (z = (V % L) - A),
              (C = O - ((V / L) | 0)),
              (E[V] = U = p ? Math.abs(p === "y" ? C : z) : cv(z * z + C * C)),
              U > q && (q = U),
              U < Y && (Y = U);
          s === "random" && Nv(E),
            (E.max = q - Y),
            (E.min = Y),
            (E.v = T =
              (parseFloat(a.amount) ||
                parseFloat(a.each) *
                  (L > T
                    ? T - 1
                    : p
                    ? p === "y"
                      ? T / L
                      : L
                    : Math.max(L, T / L)) ||
                0) * (s === "edges" ? -1 : 1)),
            (E.b = T < 0 ? o - T : o),
            (E.u = pn(a.amount || a.each) || 0),
            (i = i && T < 0 ? Hv(i) : i);
        }
        return (
          (T = (E[x] - E.min) / E.max || 0),
          Bt(E.b + (i ? i(T) : T) * E.v) + E.u
        );
      }
    );
  },
  wh = function (l) {
    var a = Math.pow(10, ((l + "").split(".")[1] || "").length);
    return function (i) {
      var s = Bt(Math.round(parseFloat(i) / l) * l * a);
      return (s - (s % 1)) / a + (Mi(i) ? 0 : pn(i));
    };
  },
  Av = function (l, a) {
    var i = _n(l),
      s,
      o;
    return (
      !i &&
        ei(l) &&
        ((s = i = l.radius || Pl),
        l.values
          ? ((l = wl(l.values)), (o = !Mi(l[0])) && (s *= s))
          : (l = wh(l.increment))),
      ga(
        a,
        i
          ? wt(l)
            ? function (f) {
                return (o = l(f)), Math.abs(o - f) <= s ? o : f;
              }
            : function (f) {
                for (
                  var m = parseFloat(o ? f.x : f),
                    g = parseFloat(o ? f.y : 0),
                    p = Pl,
                    v = 0,
                    b = l.length,
                    x,
                    _;
                  b--;

                )
                  o
                    ? ((x = l[b].x - m), (_ = l[b].y - g), (x = x * x + _ * _))
                    : (x = Math.abs(l[b] - m)),
                    x < p && ((p = x), (v = b));
                return (
                  (v = !s || p <= s ? l[v] : f),
                  o || v === f || Mi(f) ? v : v + pn(f)
                );
              }
          : wh(l)
      )
    );
  },
  Cv = function (l, a, i, s) {
    return ga(_n(l) ? !a : i === !0 ? !!(i = 0) : !s, function () {
      return _n(l)
        ? l[~~(Math.random() * l.length)]
        : (i = i || 1e-5) &&
            (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((l - i / 2 + Math.random() * (a - l + i * 0.99)) / i) *
                i *
                s
            ) / s;
    });
  },
  Gb = function () {
    for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
      a[i] = arguments[i];
    return function (s) {
      return a.reduce(function (o, f) {
        return f(o);
      }, s);
    };
  },
  Vb = function (l, a) {
    return function (i) {
      return l(parseFloat(i)) + (a || pn(i));
    };
  },
  Qb = function (l, a, i) {
    return Ov(l, a, 0, 1, i);
  },
  Mv = function (l, a, i) {
    return ga(i, function (s) {
      return l[~~a(s)];
    });
  },
  Zb = function u(l, a, i) {
    var s = a - l;
    return _n(l)
      ? Mv(l, u(0, l.length), a)
      : ga(i, function (o) {
          return ((s + ((o - l) % s)) % s) + l;
        });
  },
  Kb = function u(l, a, i) {
    var s = a - l,
      o = s * 2;
    return _n(l)
      ? Mv(l, u(0, l.length - 1), a)
      : ga(i, function (f) {
          return (f = (o + ((f - l) % o)) % o || 0), l + (f > s ? o - f : f);
        });
  },
  Ru = function (l) {
    for (var a = 0, i = "", s, o, f, m; ~(s = l.indexOf("random(", a)); )
      (f = l.indexOf(")", s)),
        (m = l.charAt(s + 7) === "["),
        (o = l.substr(s + 7, f - s - 7).match(m ? hv : yh)),
        (i +=
          l.substr(a, s - a) + Cv(m ? o : +o[0], m ? 0 : +o[1], +o[2] || 1e-5)),
        (a = f + 1);
    return i + l.substr(a, l.length - a);
  },
  Ov = function (l, a, i, s, o) {
    var f = a - l,
      m = s - i;
    return ga(o, function (g) {
      return i + (((g - l) / f) * m || 0);
    });
  },
  $b = function u(l, a, i, s) {
    var o = isNaN(l + a)
      ? 0
      : function (_) {
          return (1 - _) * l + _ * a;
        };
    if (!o) {
      var f = It(l),
        m = {},
        g,
        p,
        v,
        b,
        x;
      if ((i === !0 && (s = 1) && (i = null), f))
        (l = { p: l }), (a = { p: a });
      else if (_n(l) && !_n(a)) {
        for (v = [], b = l.length, x = b - 2, p = 1; p < b; p++)
          v.push(u(l[p - 1], l[p]));
        b--,
          (o = function (w) {
            w *= b;
            var T = Math.min(x, ~~w);
            return v[T](w - T);
          }),
          (i = a);
      } else s || (l = es(_n(l) ? [] : {}, l));
      if (!v) {
        for (g in a) im.call(m, l, g, "get", a[g]);
        o = function (w) {
          return um(w, m) || (f ? l.p : l);
        };
      }
    }
    return ga(i, o);
  },
  c1 = function (l, a, i) {
    var s = l.labels,
      o = Pl,
      f,
      m,
      g;
    for (f in s)
      (m = s[f] - a),
        m < 0 == !!i && m && o > (m = Math.abs(m)) && ((g = f), (o = m));
    return g;
  },
  tl = function (l, a, i) {
    var s = l.vars,
      o = s[a],
      f = ft,
      m = l._ctx,
      g,
      p,
      v;
    if (o)
      return (
        (g = s[a + "Params"]),
        (p = s.callbackScope || l),
        i && ca.length && wo(),
        m && (ft = m),
        (v = g ? o.apply(p, g) : o.call(p)),
        (ft = f),
        v
      );
  },
  ru = function (l) {
    return (
      ha(l),
      l.scrollTrigger && l.scrollTrigger.kill(!!an),
      l.progress() < 1 && tl(l, "onInterrupt"),
      l
    );
  },
  Vr,
  Dv = [],
  zv = function (l) {
    if (l)
      if (((l = (!l.name && l.default) || l), Wh() || l.headless)) {
        var a = l.name,
          i = wt(l),
          s =
            a && !i && l.init
              ? function () {
                  this._props = [];
                }
              : l,
          o = {
            init: Nu,
            render: um,
            add: im,
            kill: oS,
            modifier: cS,
            rawVars: 0,
          },
          f = {
            targetTest: 0,
            get: 0,
            getSetter: sm,
            aliases: {},
            register: 0,
          };
        if ((ls(), l !== s)) {
          if (Jn[a]) return;
          il(s, il(Eo(l, o), f)),
            es(s.prototype, es(o, Eo(l, f))),
            (Jn[(s.prop = a)] = s),
            l.targetTest && (po.push(s), (tm[a] = 1)),
            (a =
              (a === "css" ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) +
              "Plugin");
        }
        gv(a, s), l.register && l.register(Bn, s, Un);
      } else Dv.push(l);
  },
  tt = 255,
  su = {
    aqua: [0, tt, tt],
    lime: [0, tt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, tt],
    navy: [0, 0, 128],
    white: [tt, tt, tt],
    olive: [128, 128, 0],
    yellow: [tt, tt, 0],
    orange: [tt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [tt, 0, 0],
    pink: [tt, 192, 203],
    cyan: [0, tt, tt],
    transparent: [tt, tt, tt, 0],
  },
  nh = function (l, a, i) {
    return (
      (l += l < 0 ? 1 : l > 1 ? -1 : 0),
      ((l * 6 < 1
        ? a + (i - a) * l * 6
        : l < 0.5
        ? i
        : l * 3 < 2
        ? a + (i - a) * (2 / 3 - l) * 6
        : a) *
        tt +
        0.5) |
        0
    );
  },
  kv = function (l, a, i) {
    var s = l ? (Mi(l) ? [l >> 16, (l >> 8) & tt, l & tt] : 0) : su.black,
      o,
      f,
      m,
      g,
      p,
      v,
      b,
      x,
      _,
      w;
    if (!s) {
      if ((l.substr(-1) === "," && (l = l.substr(0, l.length - 1)), su[l]))
        s = su[l];
      else if (l.charAt(0) === "#") {
        if (
          (l.length < 6 &&
            ((o = l.charAt(1)),
            (f = l.charAt(2)),
            (m = l.charAt(3)),
            (l =
              "#" +
              o +
              o +
              f +
              f +
              m +
              m +
              (l.length === 5 ? l.charAt(4) + l.charAt(4) : ""))),
          l.length === 9)
        )
          return (
            (s = parseInt(l.substr(1, 6), 16)),
            [s >> 16, (s >> 8) & tt, s & tt, parseInt(l.substr(7), 16) / 255]
          );
        (l = parseInt(l.substr(1), 16)), (s = [l >> 16, (l >> 8) & tt, l & tt]);
      } else if (l.substr(0, 3) === "hsl") {
        if (((s = w = l.match(yh)), !a))
          (g = (+s[0] % 360) / 360),
            (p = +s[1] / 100),
            (v = +s[2] / 100),
            (f = v <= 0.5 ? v * (p + 1) : v + p - v * p),
            (o = v * 2 - f),
            s.length > 3 && (s[3] *= 1),
            (s[0] = nh(g + 1 / 3, o, f)),
            (s[1] = nh(g, o, f)),
            (s[2] = nh(g - 1 / 3, o, f));
        else if (~l.indexOf("="))
          return (s = l.match(fv)), i && s.length < 4 && (s[3] = 1), s;
      } else s = l.match(yh) || su.transparent;
      s = s.map(Number);
    }
    return (
      a &&
        !w &&
        ((o = s[0] / tt),
        (f = s[1] / tt),
        (m = s[2] / tt),
        (b = Math.max(o, f, m)),
        (x = Math.min(o, f, m)),
        (v = (b + x) / 2),
        b === x
          ? (g = p = 0)
          : ((_ = b - x),
            (p = v > 0.5 ? _ / (2 - b - x) : _ / (b + x)),
            (g =
              b === o
                ? (f - m) / _ + (f < m ? 6 : 0)
                : b === f
                ? (m - o) / _ + 2
                : (o - f) / _ + 4),
            (g *= 60)),
        (s[0] = ~~(g + 0.5)),
        (s[1] = ~~(p * 100 + 0.5)),
        (s[2] = ~~(v * 100 + 0.5))),
      i && s.length < 4 && (s[3] = 1),
      s
    );
  },
  Lv = function (l) {
    var a = [],
      i = [],
      s = -1;
    return (
      l.split(oa).forEach(function (o) {
        var f = o.match(Gr) || [];
        a.push.apply(a, f), i.push((s += f.length + 1));
      }),
      (a.c = i),
      a
    );
  },
  o1 = function (l, a, i) {
    var s = "",
      o = (l + s).match(oa),
      f = a ? "hsla(" : "rgba(",
      m = 0,
      g,
      p,
      v,
      b;
    if (!o) return l;
    if (
      ((o = o.map(function (x) {
        return (
          (x = kv(x, a, 1)) &&
          f +
            (a ? x[0] + "," + x[1] + "%," + x[2] + "%," + x[3] : x.join(",")) +
            ")"
        );
      })),
      i && ((v = Lv(l)), (g = i.c), g.join(s) !== v.c.join(s)))
    )
      for (p = l.replace(oa, "1").split(Gr), b = p.length - 1; m < b; m++)
        s +=
          p[m] +
          (~g.indexOf(m)
            ? o.shift() || f + "0,0,0,0)"
            : (v.length ? v : o.length ? o : i).shift());
    if (!p)
      for (p = l.split(oa), b = p.length - 1; m < b; m++) s += p[m] + o[m];
    return s + p[b];
  },
  oa = (function () {
    var u =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      l;
    for (l in su) u += "|" + l + "\\b";
    return new RegExp(u + ")", "gi");
  })(),
  Fb = /hsl[a]?\(/,
  Uv = function (l) {
    var a = l.join(" "),
      i;
    if (((oa.lastIndex = 0), oa.test(a)))
      return (
        (i = Fb.test(a)),
        (l[1] = o1(l[1], i)),
        (l[0] = o1(l[0], i, Lv(l[1]))),
        !0
      );
  },
  Au,
  In = (function () {
    var u = Date.now,
      l = 500,
      a = 33,
      i = u(),
      s = i,
      o = 1e3 / 240,
      f = o,
      m = [],
      g,
      p,
      v,
      b,
      x,
      _,
      w = function T(E) {
        var A = u() - s,
          O = E === !0,
          z,
          C,
          U,
          V;
        if (
          ((A > l || A < 0) && (i += A - a),
          (s += A),
          (U = s - i),
          (z = U - f),
          (z > 0 || O) &&
            ((V = ++b.frame),
            (x = U - b.time * 1e3),
            (b.time = U = U / 1e3),
            (f += z + (z >= o ? 4 : o - z)),
            (C = 1)),
          O || (g = p(T)),
          C)
        )
          for (_ = 0; _ < m.length; _++) m[_](U, x, V, E);
      };
    return (
      (b = {
        time: 0,
        frame: 0,
        tick: function () {
          w(!0);
        },
        deltaRatio: function (E) {
          return x / (1e3 / (E || 60));
        },
        wake: function () {
          mv &&
            (!_h &&
              Wh() &&
              ((Vl = _h = window),
              (Ih = Vl.document || {}),
              (ll.gsap = Bn),
              (Vl.gsapVersions || (Vl.gsapVersions = [])).push(Bn.version),
              pv(To || Vl.GreenSockGlobals || (!Vl.gsap && Vl) || {}),
              Dv.forEach(zv)),
            (v = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            g && b.sleep(),
            (p =
              v ||
              function (E) {
                return setTimeout(E, (f - b.time * 1e3 + 1) | 0);
              }),
            (Au = 1),
            w(2));
        },
        sleep: function () {
          (v ? cancelAnimationFrame : clearTimeout)(g), (Au = 0), (p = Nu);
        },
        lagSmoothing: function (E, A) {
          (l = E || 1 / 0), (a = Math.min(A || 33, l));
        },
        fps: function (E) {
          (o = 1e3 / (E || 240)), (f = b.time * 1e3 + o);
        },
        add: function (E, A, O) {
          var z = A
            ? function (C, U, V, q) {
                E(C, U, V, q), b.remove(z);
              }
            : E;
          return b.remove(E), m[O ? "unshift" : "push"](z), ls(), z;
        },
        remove: function (E, A) {
          ~(A = m.indexOf(E)) && m.splice(A, 1) && _ >= A && _--;
        },
        _listeners: m,
      }),
      b
    );
  })(),
  ls = function () {
    return !Au && In.wake();
  },
  qe = {},
  Pb = /^[\d.\-M][\d.\-,\s]/,
  Jb = /["']/g,
  Wb = function (l) {
    for (
      var a = {},
        i = l.substr(1, l.length - 3).split(":"),
        s = i[0],
        o = 1,
        f = i.length,
        m,
        g,
        p;
      o < f;
      o++
    )
      (g = i[o]),
        (m = o !== f - 1 ? g.lastIndexOf(",") : g.length),
        (p = g.substr(0, m)),
        (a[s] = isNaN(p) ? p.replace(Jb, "").trim() : +p),
        (s = g.substr(m + 1).trim());
    return a;
  },
  Ib = function (l) {
    var a = l.indexOf("(") + 1,
      i = l.indexOf(")"),
      s = l.indexOf("(", a);
    return l.substring(a, ~s && s < i ? l.indexOf(")", i + 1) : i);
  },
  eS = function (l) {
    var a = (l + "").split("("),
      i = qe[a[0]];
    return i && a.length > 1 && i.config
      ? i.config.apply(
          null,
          ~l.indexOf("{") ? [Wb(a[1])] : Ib(l).split(",").map(xv)
        )
      : qe._CE && Pb.test(l)
      ? qe._CE("", l)
      : i;
  },
  Hv = function (l) {
    return function (a) {
      return 1 - l(1 - a);
    };
  },
  Bv = function u(l, a) {
    for (var i = l._first, s; i; )
      i instanceof An
        ? u(i, a)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== a &&
          (i.timeline
            ? u(i.timeline, a)
            : ((s = i._ease),
              (i._ease = i._yEase),
              (i._yEase = s),
              (i._yoyo = a))),
        (i = i._next);
  },
  $a = function (l, a) {
    return (l && (wt(l) ? l : qe[l] || eS(l))) || a;
  },
  ar = function (l, a, i, s) {
    i === void 0 &&
      (i = function (g) {
        return 1 - a(1 - g);
      }),
      s === void 0 &&
        (s = function (g) {
          return g < 0.5 ? a(g * 2) / 2 : 1 - a((1 - g) * 2) / 2;
        });
    var o = { easeIn: a, easeOut: i, easeInOut: s },
      f;
    return (
      Ln(l, function (m) {
        (qe[m] = ll[m] = o), (qe[(f = m.toLowerCase())] = i);
        for (var g in o)
          qe[
            f + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")
          ] = qe[m + "." + g] = o[g];
      }),
      o
    );
  },
  Yv = function (l) {
    return function (a) {
      return a < 0.5 ? (1 - l(1 - a * 2)) / 2 : 0.5 + l((a - 0.5) * 2) / 2;
    };
  },
  lh = function u(l, a, i) {
    var s = a >= 1 ? a : 1,
      o = (i || (l ? 0.3 : 0.45)) / (a < 1 ? a : 1),
      f = (o / vh) * (Math.asin(1 / s) || 0),
      m = function (v) {
        return v === 1 ? 1 : s * Math.pow(2, -10 * v) * Rb((v - f) * o) + 1;
      },
      g =
        l === "out"
          ? m
          : l === "in"
          ? function (p) {
              return 1 - m(1 - p);
            }
          : Yv(m);
    return (
      (o = vh / o),
      (g.config = function (p, v) {
        return u(l, p, v);
      }),
      g
    );
  },
  ih = function u(l, a) {
    a === void 0 && (a = 1.70158);
    var i = function (f) {
        return f ? --f * f * ((a + 1) * f + a) + 1 : 0;
      },
      s =
        l === "out"
          ? i
          : l === "in"
          ? function (o) {
              return 1 - i(1 - o);
            }
          : Yv(i);
    return (
      (s.config = function (o) {
        return u(l, o);
      }),
      s
    );
  };
Ln("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, l) {
  var a = l < 5 ? l + 1 : l;
  ar(
    u + ",Power" + (a - 1),
    l
      ? function (i) {
          return Math.pow(i, a);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, a);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, a) / 2
        : 1 - Math.pow((1 - i) * 2, a) / 2;
    }
  );
});
qe.Linear.easeNone = qe.none = qe.Linear.easeIn;
ar("Elastic", lh("in"), lh("out"), lh());
(function (u, l) {
  var a = 1 / l,
    i = 2 * a,
    s = 2.5 * a,
    o = function (m) {
      return m < a
        ? u * m * m
        : m < i
        ? u * Math.pow(m - 1.5 / l, 2) + 0.75
        : m < s
        ? u * (m -= 2.25 / l) * m + 0.9375
        : u * Math.pow(m - 2.625 / l, 2) + 0.984375;
    };
  ar(
    "Bounce",
    function (f) {
      return 1 - o(1 - f);
    },
    o
  );
})(7.5625, 2.75);
ar("Expo", function (u) {
  return Math.pow(2, 10 * (u - 1)) * u + u * u * u * u * u * u * (1 - u);
});
ar("Circ", function (u) {
  return -(cv(1 - u * u) - 1);
});
ar("Sine", function (u) {
  return u === 1 ? 1 : -Nb(u * wb) + 1;
});
ar("Back", ih("in"), ih("out"), ih());
qe.SteppedEase =
  qe.steps =
  ll.SteppedEase =
    {
      config: function (l, a) {
        l === void 0 && (l = 1);
        var i = 1 / l,
          s = l + (a ? 0 : 1),
          o = a ? 1 : 0,
          f = 1 - yn;
        return function (m) {
          return (((s * qu(0, f, m)) | 0) + o) * i;
        };
      },
    };
Ir.ease = qe["quad.out"];
Ln(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (u) {
    return (nm += u + "," + u + "Params,");
  }
);
var qv = function (l, a) {
    (this.id = Eb++),
      (l._gsap = this),
      (this.target = l),
      (this.harness = a),
      (this.get = a ? a.get : yv),
      (this.set = a ? a.getSetter : sm);
  },
  Cu = (function () {
    function u(a) {
      (this.vars = a),
        (this._delay = +a.delay || 0),
        (this._repeat = a.repeat === 1 / 0 ? -2 : a.repeat || 0) &&
          ((this._rDelay = a.repeatDelay || 0),
          (this._yoyo = !!a.yoyo || !!a.yoyoEase)),
        (this._ts = 1),
        ns(this, +a.duration, 1, 1),
        (this.data = a.data),
        ft && ((this._ctx = ft), ft.data.push(this)),
        Au || In.wake();
    }
    var l = u.prototype;
    return (
      (l.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (l.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (l.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            ns(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (l.totalTime = function (i, s) {
        if ((ls(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (Yo(this, i), !o._dp || o.parent || jv(o, this); o && o.parent; )
            o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            Zl(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !s) ||
            (this._initted && Math.abs(this._zTime) === yn) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), _v(this, i, s)),
          this
        );
      }),
      (l.time = function (i, s) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + s1(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              s
            )
          : this._time;
      }),
      (l.totalProgress = function (i, s) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, s)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (l.progress = function (i, s) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                s1(this),
              s
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (l.iteration = function (i, s) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * o, s)
          : this._repeat
          ? ts(this._tTime, o) + 1
          : 1;
      }),
      (l.timeScale = function (i, s) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var o =
          this.parent && this._ts ? No(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(qu(-Math.abs(this._delay), this._tDur, o), s !== !1),
          Bo(this),
          kb(this)
        );
      }),
      (l.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ls(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== yn &&
                      (this._tTime -= yn)
                  ))),
            this)
          : this._ps;
      }),
      (l.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var s = this.parent || this._dp;
          return (
            s && (s._sort || !this.parent) && Zl(s, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (l.endTime = function (i) {
        return (
          this._start +
          (kn(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (l.rawTime = function (i) {
        var s = this.parent || this._dp;
        return s
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? No(s.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (l.revert = function (i) {
        i === void 0 && (i = Mb);
        var s = an;
        return (
          (an = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (an = s),
          this
        );
      }),
      (l.globalTime = function (i) {
        for (var s = this, o = arguments.length ? i : s.rawTime(); s; )
          (o = s._start + o / (Math.abs(s._ts) || 1)), (s = s._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : o;
      }),
      (l.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), u1(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (l.repeatDelay = function (i) {
        if (arguments.length) {
          var s = this._time;
          return (this._rDelay = i), u1(this), s ? this.time(s) : this;
        }
        return this._rDelay;
      }),
      (l.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (l.seek = function (i, s) {
        return this.totalTime(Sl(this, i), kn(s));
      }),
      (l.restart = function (i, s) {
        return (
          this.play().totalTime(i ? -this._delay : 0, kn(s)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }),
      (l.play = function (i, s) {
        return i != null && this.seek(i, s), this.reversed(!1).paused(!1);
      }),
      (l.reverse = function (i, s) {
        return (
          i != null && this.seek(i || this.totalDuration(), s),
          this.reversed(!0).paused(!1)
        );
      }),
      (l.pause = function (i, s) {
        return i != null && this.seek(i, s), this.paused(!0);
      }),
      (l.resume = function () {
        return this.paused(!1);
      }),
      (l.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (l.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (l.isActive = function () {
        var i = this.parent || this._dp,
          s = this._start,
          o;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (o = i.rawTime(!0)) >= s &&
            o < this.endTime(!0) - yn)
        );
      }),
      (l.eventCallback = function (i, s, o) {
        var f = this.vars;
        return arguments.length > 1
          ? (s
              ? ((f[i] = s),
                o && (f[i + "Params"] = o),
                i === "onUpdate" && (this._onUpdate = s))
              : delete f[i],
            this)
          : f[i];
      }),
      (l.then = function (i) {
        var s = this;
        return new Promise(function (o) {
          var f = wt(i) ? i : bv,
            m = function () {
              var p = s.then;
              (s.then = null),
                wt(f) && (f = f(s)) && (f.then || f === s) && (s.then = p),
                o(f),
                (s.then = p);
            };
          (s._initted && s.totalProgress() === 1 && s._ts >= 0) ||
          (!s._tTime && s._ts < 0)
            ? m()
            : (s._prom = m);
        });
      }),
      (l.kill = function () {
        ru(this);
      }),
      u
    );
  })();
il(Cu.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var An = (function (u) {
  uv(l, u);
  function l(i, s) {
    var o;
    return (
      i === void 0 && (i = {}),
      (o = u.call(this, i) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!i.smoothChildTiming),
      (o.autoRemoveChildren = !!i.autoRemoveChildren),
      (o._sort = kn(i.sortChildren)),
      gt && Zl(i.parent || gt, ji(o), s),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      i.scrollTrigger && Tv(ji(o), i.scrollTrigger),
      o
    );
  }
  var a = l.prototype;
  return (
    (a.to = function (s, o, f) {
      return mu(0, arguments, this), this;
    }),
    (a.from = function (s, o, f) {
      return mu(1, arguments, this), this;
    }),
    (a.fromTo = function (s, o, f, m) {
      return mu(2, arguments, this), this;
    }),
    (a.set = function (s, o, f) {
      return (
        (o.duration = 0),
        (o.parent = this),
        hu(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Ht(s, o, Sl(this, f), 1),
        this
      );
    }),
    (a.call = function (s, o, f) {
      return Zl(this, Ht.delayedCall(0, s, o), f);
    }),
    (a.staggerTo = function (s, o, f, m, g, p, v) {
      return (
        (f.duration = o),
        (f.stagger = f.stagger || m),
        (f.onComplete = p),
        (f.onCompleteParams = v),
        (f.parent = this),
        new Ht(s, f, Sl(this, g)),
        this
      );
    }),
    (a.staggerFrom = function (s, o, f, m, g, p, v) {
      return (
        (f.runBackwards = 1),
        (hu(f).immediateRender = kn(f.immediateRender)),
        this.staggerTo(s, o, f, m, g, p, v)
      );
    }),
    (a.staggerFromTo = function (s, o, f, m, g, p, v, b) {
      return (
        (m.startAt = f),
        (hu(m).immediateRender = kn(m.immediateRender)),
        this.staggerTo(s, o, m, g, p, v, b)
      );
    }),
    (a.render = function (s, o, f) {
      var m = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        v = s <= 0 ? 0 : Bt(s),
        b = this._zTime < 0 != s < 0 && (this._initted || !p),
        x,
        _,
        w,
        T,
        E,
        A,
        O,
        z,
        C,
        U,
        V,
        q;
      if (
        (this !== gt && v > g && s >= 0 && (v = g), v !== this._tTime || f || b)
      ) {
        if (
          (m !== this._time &&
            p &&
            ((v += this._time - m), (s += this._time - m)),
          (x = v),
          (C = this._start),
          (z = this._ts),
          (A = !z),
          b && (p || (m = this._zTime), (s || !o) && (this._zTime = s)),
          this._repeat)
        ) {
          if (
            ((V = this._yoyo),
            (E = p + this._rDelay),
            this._repeat < -1 && s < 0)
          )
            return this.totalTime(E * 100 + s, o, f);
          if (
            ((x = Bt(v % E)),
            v === g
              ? ((T = this._repeat), (x = p))
              : ((U = Bt(v / E)),
                (T = ~~U),
                T && T === U && ((x = p), T--),
                x > p && (x = p)),
            (U = ts(this._tTime, E)),
            !m &&
              this._tTime &&
              U !== T &&
              this._tTime - U * E - this._dur <= 0 &&
              (U = T),
            V && T & 1 && ((x = p - x), (q = 1)),
            T !== U && !this._lock)
          ) {
            var Y = V && U & 1,
              L = Y === (V && T & 1);
            if (
              (T < U && (Y = !Y),
              (m = Y ? 0 : v % p ? p : v),
              (this._lock = 1),
              (this.render(m || (q ? 0 : Bt(T * E)), o, !p)._lock = 0),
              (this._tTime = v),
              !o && this.parent && tl(this, "onRepeat"),
              this.vars.repeatRefresh && !q && (this.invalidate()._lock = 1),
              (m && m !== this._time) ||
                A !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((p = this._dur),
              (g = this._tDur),
              L &&
                ((this._lock = 2),
                (m = Y ? p : -1e-4),
                this.render(m, !0),
                this.vars.repeatRefresh && !q && this.invalidate()),
              (this._lock = 0),
              !this._ts && !A)
            )
              return this;
            Bv(this, q);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((O = Bb(this, Bt(m), Bt(x))), O && (v -= x - (x = O._start))),
          (this._tTime = v),
          (this._time = x),
          (this._act = !z),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = s),
            (m = 0)),
          !m && x && !o && !T && (tl(this, "onStart"), this._tTime !== v))
        )
          return this;
        if (x >= m && s >= 0)
          for (_ = this._first; _; ) {
            if (
              ((w = _._next), (_._act || x >= _._start) && _._ts && O !== _)
            ) {
              if (_.parent !== this) return this.render(s, o, f);
              if (
                (_.render(
                  _._ts > 0
                    ? (x - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (x - _._start) * _._ts,
                  o,
                  f
                ),
                x !== this._time || (!this._ts && !A))
              ) {
                (O = 0), w && (v += this._zTime = -1e-8);
                break;
              }
            }
            _ = w;
          }
        else {
          _ = this._last;
          for (var G = s < 0 ? s : x; _; ) {
            if (((w = _._prev), (_._act || G <= _._end) && _._ts && O !== _)) {
              if (_.parent !== this) return this.render(s, o, f);
              if (
                (_.render(
                  _._ts > 0
                    ? (G - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (G - _._start) * _._ts,
                  o,
                  f || (an && (_._initted || _._startAt))
                ),
                x !== this._time || (!this._ts && !A))
              ) {
                (O = 0), w && (v += this._zTime = G ? -1e-8 : yn);
                break;
              }
            }
            _ = w;
          }
        }
        if (
          O &&
          !o &&
          (this.pause(),
          (O.render(x >= m ? 0 : -1e-8)._zTime = x >= m ? 1 : -1),
          this._ts)
        )
          return (this._start = C), Bo(this), this.render(s, o, f);
        this._onUpdate && !o && tl(this, "onUpdate", !0),
          ((v === g && this._tTime >= this.totalDuration()) || (!v && m)) &&
            (C === this._start || Math.abs(z) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((s || !p) &&
                ((v === g && this._ts > 0) || (!v && this._ts < 0)) &&
                ha(this, 1),
              !o &&
                !(s < 0 && !m) &&
                (v || m || !g) &&
                (tl(
                  this,
                  v === g && s >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(v < g && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (a.add = function (s, o) {
      var f = this;
      if ((Mi(o) || (o = Sl(this, o, s)), !(s instanceof Cu))) {
        if (_n(s))
          return (
            s.forEach(function (m) {
              return f.add(m, o);
            }),
            this
          );
        if (It(s)) return this.addLabel(s, o);
        if (wt(s)) s = Ht.delayedCall(0, s);
        else return this;
      }
      return this !== s ? Zl(this, s, o) : this;
    }),
    (a.getChildren = function (s, o, f, m) {
      s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        f === void 0 && (f = !0),
        m === void 0 && (m = -1e8);
      for (var g = [], p = this._first; p; )
        p._start >= m &&
          (p instanceof Ht
            ? o && g.push(p)
            : (f && g.push(p), s && g.push.apply(g, p.getChildren(!0, o, f)))),
          (p = p._next);
      return g;
    }),
    (a.getById = function (s) {
      for (var o = this.getChildren(1, 1, 1), f = o.length; f--; )
        if (o[f].vars.id === s) return o[f];
    }),
    (a.remove = function (s) {
      return It(s)
        ? this.removeLabel(s)
        : wt(s)
        ? this.killTweensOf(s)
        : (s.parent === this && Ho(this, s),
          s === this._recent && (this._recent = this._last),
          Ka(this));
    }),
    (a.totalTime = function (s, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Bt(
              In.time -
                (this._ts > 0
                  ? s / this._ts
                  : (this.totalDuration() - s) / -this._ts)
            )),
          u.prototype.totalTime.call(this, s, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (a.addLabel = function (s, o) {
      return (this.labels[s] = Sl(this, o)), this;
    }),
    (a.removeLabel = function (s) {
      return delete this.labels[s], this;
    }),
    (a.addPause = function (s, o, f) {
      var m = Ht.delayedCall(0, o || Nu, f);
      return (
        (m.data = "isPause"), (this._hasPause = 1), Zl(this, m, Sl(this, s))
      );
    }),
    (a.removePause = function (s) {
      var o = this._first;
      for (s = Sl(this, s); o; )
        o._start === s && o.data === "isPause" && ha(o), (o = o._next);
    }),
    (a.killTweensOf = function (s, o, f) {
      for (var m = this.getTweensOf(s, f), g = m.length; g--; )
        ia !== m[g] && m[g].kill(s, o);
      return this;
    }),
    (a.getTweensOf = function (s, o) {
      for (var f = [], m = wl(s), g = this._first, p = Mi(o), v; g; )
        g instanceof Ht
          ? Ob(g._targets, m) &&
            (p
              ? (!ia || (g._initted && g._ts)) &&
                g.globalTime(0) <= o &&
                g.globalTime(g.totalDuration()) > o
              : !o || g.isActive()) &&
            f.push(g)
          : (v = g.getTweensOf(m, o)).length && f.push.apply(f, v),
          (g = g._next);
      return f;
    }),
    (a.tweenTo = function (s, o) {
      o = o || {};
      var f = this,
        m = Sl(f, s),
        g = o,
        p = g.startAt,
        v = g.onStart,
        b = g.onStartParams,
        x = g.immediateRender,
        _,
        w = Ht.to(
          f,
          il(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: m,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (m - (p && "time" in p ? p.time : f._time)) / f.timeScale()
                ) ||
                yn,
              onStart: function () {
                if ((f.pause(), !_)) {
                  var E =
                    o.duration ||
                    Math.abs(
                      (m - (p && "time" in p ? p.time : f._time)) /
                        f.timeScale()
                    );
                  w._dur !== E && ns(w, E, 0, 1).render(w._time, !0, !0),
                    (_ = 1);
                }
                v && v.apply(w, b || []);
              },
            },
            o
          )
        );
      return x ? w.render(0) : w;
    }),
    (a.tweenFromTo = function (s, o, f) {
      return this.tweenTo(o, il({ startAt: { time: Sl(this, s) } }, f));
    }),
    (a.recent = function () {
      return this._recent;
    }),
    (a.nextLabel = function (s) {
      return s === void 0 && (s = this._time), c1(this, Sl(this, s));
    }),
    (a.previousLabel = function (s) {
      return s === void 0 && (s = this._time), c1(this, Sl(this, s), 1);
    }),
    (a.currentLabel = function (s) {
      return arguments.length
        ? this.seek(s, !0)
        : this.previousLabel(this._time + yn);
    }),
    (a.shiftChildren = function (s, o, f) {
      f === void 0 && (f = 0);
      for (var m = this._first, g = this.labels, p; m; )
        m._start >= f && ((m._start += s), (m._end += s)), (m = m._next);
      if (o) for (p in g) g[p] >= f && (g[p] += s);
      return Ka(this);
    }),
    (a.invalidate = function (s) {
      var o = this._first;
      for (this._lock = 0; o; ) o.invalidate(s), (o = o._next);
      return u.prototype.invalidate.call(this, s);
    }),
    (a.clear = function (s) {
      s === void 0 && (s = !0);
      for (var o = this._first, f; o; ) (f = o._next), this.remove(o), (o = f);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        s && (this.labels = {}),
        Ka(this)
      );
    }),
    (a.totalDuration = function (s) {
      var o = 0,
        f = this,
        m = f._last,
        g = Pl,
        p,
        v,
        b;
      if (arguments.length)
        return f.timeScale(
          (f._repeat < 0 ? f.duration() : f.totalDuration()) /
            (f.reversed() ? -s : s)
        );
      if (f._dirty) {
        for (b = f.parent; m; )
          (p = m._prev),
            m._dirty && m.totalDuration(),
            (v = m._start),
            v > g && f._sort && m._ts && !f._lock
              ? ((f._lock = 1), (Zl(f, m, v - m._delay, 1)._lock = 0))
              : (g = v),
            v < 0 &&
              m._ts &&
              ((o -= v),
              ((!b && !f._dp) || (b && b.smoothChildTiming)) &&
                ((f._start += v / f._ts), (f._time -= v), (f._tTime -= v)),
              f.shiftChildren(-v, !1, -1 / 0),
              (g = 0)),
            m._end > o && m._ts && (o = m._end),
            (m = p);
        ns(f, f === gt && f._time > o ? f._time : o, 1, 1), (f._dirty = 0);
      }
      return f._tDur;
    }),
    (l.updateRoot = function (s) {
      if ((gt._ts && (_v(gt, No(s, gt)), (vv = In.frame)), In.frame >= a1)) {
        a1 += nl.autoSleep || 120;
        var o = gt._first;
        if ((!o || !o._ts) && nl.autoSleep && In._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || In.sleep();
        }
      }
    }),
    l
  );
})(Cu);
il(An.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var tS = function (l, a, i, s, o, f, m) {
    var g = new Un(this._pt, l, a, 0, 1, Kv, null, o),
      p = 0,
      v = 0,
      b,
      x,
      _,
      w,
      T,
      E,
      A,
      O;
    for (
      g.b = i,
        g.e = s,
        i += "",
        s += "",
        (A = ~s.indexOf("random(")) && (s = Ru(s)),
        f && ((O = [i, s]), f(O, l, a), (i = O[0]), (s = O[1])),
        x = i.match(eh) || [];
      (b = eh.exec(s));

    )
      (w = b[0]),
        (T = s.substring(p, b.index)),
        _ ? (_ = (_ + 1) % 5) : T.substr(-5) === "rgba(" && (_ = 1),
        w !== x[v++] &&
          ((E = parseFloat(x[v - 1]) || 0),
          (g._pt = {
            _next: g._pt,
            p: T || v === 1 ? T : ",",
            s: E,
            c: w.charAt(1) === "=" ? Zr(E, w) - E : parseFloat(w) - E,
            m: _ && _ < 4 ? Math.round : 0,
          }),
          (p = eh.lastIndex));
    return (
      (g.c = p < s.length ? s.substring(p, s.length) : ""),
      (g.fp = m),
      (dv.test(s) || A) && (g.e = 0),
      (this._pt = g),
      g
    );
  },
  im = function (l, a, i, s, o, f, m, g, p, v) {
    wt(s) && (s = s(o || 0, l, f));
    var b = l[a],
      x =
        i !== "get"
          ? i
          : wt(b)
          ? p
            ? l[
                a.indexOf("set") || !wt(l["get" + a.substr(3)])
                  ? a
                  : "get" + a.substr(3)
              ](p)
            : l[a]()
          : b,
      _ = wt(b) ? (p ? rS : Qv) : rm,
      w;
    if (
      (It(s) &&
        (~s.indexOf("random(") && (s = Ru(s)),
        s.charAt(1) === "=" &&
          ((w = Zr(x, s) + (pn(x) || 0)), (w || w === 0) && (s = w))),
      !v || x !== s || Eh)
    )
      return !isNaN(x * s) && s !== ""
        ? ((w = new Un(
            this._pt,
            l,
            a,
            +x || 0,
            s - (x || 0),
            typeof b == "boolean" ? uS : Zv,
            0,
            _
          )),
          p && (w.fp = p),
          m && w.modifier(m, this, l),
          (this._pt = w))
        : (!b && !(a in l) && em(a, s),
          tS.call(this, l, a, x, s, _, g || nl.stringFilter, p));
  },
  nS = function (l, a, i, s, o) {
    if (
      (wt(l) && (l = pu(l, o, a, i, s)),
      !ei(l) || (l.style && l.nodeType) || _n(l) || ov(l))
    )
      return It(l) ? pu(l, o, a, i, s) : l;
    var f = {},
      m;
    for (m in l) f[m] = pu(l[m], o, a, i, s);
    return f;
  },
  Xv = function (l, a, i, s, o, f) {
    var m, g, p, v;
    if (
      Jn[l] &&
      (m = new Jn[l]()).init(
        o,
        m.rawVars ? a[l] : nS(a[l], s, o, f, i),
        i,
        s,
        f
      ) !== !1 &&
      ((i._pt = g = new Un(i._pt, o, l, 0, 1, m.render, m, 0, m.priority)),
      i !== Vr)
    )
      for (p = i._ptLookup[i._targets.indexOf(o)], v = m._props.length; v--; )
        p[m._props[v]] = g;
    return m;
  },
  ia,
  Eh,
  am = function u(l, a, i) {
    var s = l.vars,
      o = s.ease,
      f = s.startAt,
      m = s.immediateRender,
      g = s.lazy,
      p = s.onUpdate,
      v = s.runBackwards,
      b = s.yoyoEase,
      x = s.keyframes,
      _ = s.autoRevert,
      w = l._dur,
      T = l._startAt,
      E = l._targets,
      A = l.parent,
      O = A && A.data === "nested" ? A.vars.targets : E,
      z = l._overwrite === "auto" && !Ph,
      C = l.timeline,
      U,
      V,
      q,
      Y,
      L,
      G,
      se,
      I,
      ye,
      _e,
      ve,
      F,
      J;
    if (
      (C && (!x || !o) && (o = "none"),
      (l._ease = $a(o, Ir.ease)),
      (l._yEase = b ? Hv($a(b === !0 ? o : b, Ir.ease)) : 0),
      b &&
        l._yoyo &&
        !l._repeat &&
        ((b = l._yEase), (l._yEase = l._ease), (l._ease = b)),
      (l._from = !C && !!s.runBackwards),
      !C || (x && !s.stagger))
    ) {
      if (
        ((I = E[0] ? Za(E[0]).harness : 0),
        (F = I && s[I.prop]),
        (U = Eo(s, tm)),
        T &&
          (T._zTime < 0 && T.progress(1),
          a < 0 && v && m && !_ ? T.render(-1, !0) : T.revert(v && w ? mo : Cb),
          (T._lazy = 0)),
        f)
      ) {
        if (
          (ha(
            (l._startAt = Ht.set(
              E,
              il(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: A,
                  immediateRender: !0,
                  lazy: !T && kn(g),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    p &&
                    function () {
                      return tl(l, "onUpdate");
                    },
                  stagger: 0,
                },
                f
              )
            ))
          ),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          a < 0 && (an || (!m && !_)) && l._startAt.revert(mo),
          m && w && a <= 0 && i <= 0)
        ) {
          a && (l._zTime = a);
          return;
        }
      } else if (v && w && !T) {
        if (
          (a && (m = !1),
          (q = il(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: m && !T && kn(g),
              immediateRender: m,
              stagger: 0,
              parent: A,
            },
            U
          )),
          F && (q[I.prop] = F),
          ha((l._startAt = Ht.set(E, q))),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          a < 0 && (an ? l._startAt.revert(mo) : l._startAt.render(-1, !0)),
          (l._zTime = a),
          !m)
        )
          u(l._startAt, yn, yn);
        else if (!a) return;
      }
      for (
        l._pt = l._ptCache = 0, g = (w && kn(g)) || (g && !w), V = 0;
        V < E.length;
        V++
      ) {
        if (
          ((L = E[V]),
          (se = L._gsap || lm(E)[V]._gsap),
          (l._ptLookup[V] = _e = {}),
          xh[se.id] && ca.length && wo(),
          (ve = O === E ? V : O.indexOf(L)),
          I &&
            (ye = new I()).init(L, F || U, l, ve, O) !== !1 &&
            ((l._pt = Y =
              new Un(l._pt, L, ye.name, 0, 1, ye.render, ye, 0, ye.priority)),
            ye._props.forEach(function (ee) {
              _e[ee] = Y;
            }),
            ye.priority && (G = 1)),
          !I || F)
        )
          for (q in U)
            Jn[q] && (ye = Xv(q, U, l, ve, L, O))
              ? ye.priority && (G = 1)
              : (_e[q] = Y =
                  im.call(l, L, q, "get", U[q], ve, O, 0, s.stringFilter));
        l._op && l._op[V] && l.kill(L, l._op[V]),
          z &&
            l._pt &&
            ((ia = l),
            gt.killTweensOf(L, _e, l.globalTime(a)),
            (J = !l.parent),
            (ia = 0)),
          l._pt && g && (xh[se.id] = 1);
      }
      G && $v(l), l._onInit && l._onInit(l);
    }
    (l._onUpdate = p),
      (l._initted = (!l._op || l._pt) && !J),
      x && a <= 0 && C.render(Pl, !0, !0);
  },
  lS = function (l, a, i, s, o, f, m, g) {
    var p = ((l._pt && l._ptCache) || (l._ptCache = {}))[a],
      v,
      b,
      x,
      _;
    if (!p)
      for (
        p = l._ptCache[a] = [], x = l._ptLookup, _ = l._targets.length;
        _--;

      ) {
        if (((v = x[_][a]), v && v.d && v.d._pt))
          for (v = v.d._pt; v && v.p !== a && v.fp !== a; ) v = v._next;
        if (!v)
          return (
            (Eh = 1),
            (l.vars[a] = "+=0"),
            am(l, m),
            (Eh = 0),
            g ? Eu(a + " not eligible for reset") : 1
          );
        p.push(v);
      }
    for (_ = p.length; _--; )
      (b = p[_]),
        (v = b._pt || b),
        (v.s = (s || s === 0) && !o ? s : v.s + (s || 0) + f * v.c),
        (v.c = i - v.s),
        b.e && (b.e = At(i) + pn(b.e)),
        b.b && (b.b = v.s + pn(b.b));
  },
  iS = function (l, a) {
    var i = l[0] ? Za(l[0]).harness : 0,
      s = i && i.aliases,
      o,
      f,
      m,
      g;
    if (!s) return a;
    o = es({}, a);
    for (f in s)
      if (f in o) for (g = s[f].split(","), m = g.length; m--; ) o[g[m]] = o[f];
    return o;
  },
  aS = function (l, a, i, s) {
    var o = a.ease || s || "power1.inOut",
      f,
      m;
    if (_n(a))
      (m = i[l] || (i[l] = [])),
        a.forEach(function (g, p) {
          return m.push({ t: (p / (a.length - 1)) * 100, v: g, e: o });
        });
    else
      for (f in a)
        (m = i[f] || (i[f] = [])),
          f === "ease" || m.push({ t: parseFloat(l), v: a[f], e: o });
  },
  pu = function (l, a, i, s, o) {
    return wt(l)
      ? l.call(a, i, s, o)
      : It(l) && ~l.indexOf("random(")
      ? Ru(l)
      : l;
  },
  Gv = nm + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Vv = {};
Ln(Gv + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
  return (Vv[u] = 1);
});
var Ht = (function (u) {
  uv(l, u);
  function l(i, s, o, f) {
    var m;
    typeof s == "number" && ((o.duration = s), (s = o), (o = null)),
      (m = u.call(this, f ? s : hu(s)) || this);
    var g = m.vars,
      p = g.duration,
      v = g.delay,
      b = g.immediateRender,
      x = g.stagger,
      _ = g.overwrite,
      w = g.keyframes,
      T = g.defaults,
      E = g.scrollTrigger,
      A = g.yoyoEase,
      O = s.parent || gt,
      z = (_n(i) || ov(i) ? Mi(i[0]) : "length" in s) ? [i] : wl(i),
      C,
      U,
      V,
      q,
      Y,
      L,
      G,
      se;
    if (
      ((m._targets = z.length
        ? lm(z)
        : Eu(
            "GSAP target " + i + " not found. https://gsap.com",
            !nl.nullTargetWarn
          ) || []),
      (m._ptLookup = []),
      (m._overwrite = _),
      w || x || Pc(p) || Pc(v))
    ) {
      if (
        ((s = m.vars),
        (C = m.timeline =
          new An({
            data: "nested",
            defaults: T || {},
            targets: O && O.data === "nested" ? O.vars.targets : z,
          })),
        C.kill(),
        (C.parent = C._dp = ji(m)),
        (C._start = 0),
        x || Pc(p) || Pc(v))
      ) {
        if (((q = z.length), (G = x && Rv(x)), ei(x)))
          for (Y in x) ~Gv.indexOf(Y) && (se || (se = {}), (se[Y] = x[Y]));
        for (U = 0; U < q; U++)
          (V = Eo(s, Vv)),
            (V.stagger = 0),
            A && (V.yoyoEase = A),
            se && es(V, se),
            (L = z[U]),
            (V.duration = +pu(p, ji(m), U, L, z)),
            (V.delay = (+pu(v, ji(m), U, L, z) || 0) - m._delay),
            !x &&
              q === 1 &&
              V.delay &&
              ((m._delay = v = V.delay), (m._start += v), (V.delay = 0)),
            C.to(L, V, G ? G(U, L, z) : 0),
            (C._ease = qe.none);
        C.duration() ? (p = v = 0) : (m.timeline = 0);
      } else if (w) {
        hu(il(C.vars.defaults, { ease: "none" })),
          (C._ease = $a(w.ease || s.ease || "none"));
        var I = 0,
          ye,
          _e,
          ve;
        if (_n(w))
          w.forEach(function (F) {
            return C.to(z, F, ">");
          }),
            C.duration();
        else {
          V = {};
          for (Y in w)
            Y === "ease" || Y === "easeEach" || aS(Y, w[Y], V, w.easeEach);
          for (Y in V)
            for (
              ye = V[Y].sort(function (F, J) {
                return F.t - J.t;
              }),
                I = 0,
                U = 0;
              U < ye.length;
              U++
            )
              (_e = ye[U]),
                (ve = {
                  ease: _e.e,
                  duration: ((_e.t - (U ? ye[U - 1].t : 0)) / 100) * p,
                }),
                (ve[Y] = _e.v),
                C.to(z, ve, I),
                (I += ve.duration);
          C.duration() < p && C.to({}, { duration: p - C.duration() });
        }
      }
      p || m.duration((p = C.duration()));
    } else m.timeline = 0;
    return (
      _ === !0 && !Ph && ((ia = ji(m)), gt.killTweensOf(z), (ia = 0)),
      Zl(O, ji(m), o),
      s.reversed && m.reverse(),
      s.paused && m.paused(!0),
      (b ||
        (!p &&
          !w &&
          m._start === Bt(O._time) &&
          kn(b) &&
          Lb(ji(m)) &&
          O.data !== "nested")) &&
        ((m._tTime = -1e-8), m.render(Math.max(0, -v) || 0)),
      E && Tv(ji(m), E),
      m
    );
  }
  var a = l.prototype;
  return (
    (a.render = function (s, o, f) {
      var m = this._time,
        g = this._tDur,
        p = this._dur,
        v = s < 0,
        b = s > g - yn && !v ? g : s < yn ? 0 : s,
        x,
        _,
        w,
        T,
        E,
        A,
        O,
        z,
        C;
      if (!p) Hb(this, s, o, f);
      else if (
        b !== this._tTime ||
        !s ||
        f ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== v) ||
        this._lazy
      ) {
        if (((x = b), (z = this.timeline), this._repeat)) {
          if (((T = p + this._rDelay), this._repeat < -1 && v))
            return this.totalTime(T * 100 + s, o, f);
          if (
            ((x = Bt(b % T)),
            b === g
              ? ((w = this._repeat), (x = p))
              : ((E = Bt(b / T)),
                (w = ~~E),
                w && w === E ? ((x = p), w--) : x > p && (x = p)),
            (A = this._yoyo && w & 1),
            A && ((C = this._yEase), (x = p - x)),
            (E = ts(this._tTime, T)),
            x === m && !f && this._initted && w === E)
          )
            return (this._tTime = b), this;
          w !== E &&
            (z && this._yEase && Bv(z, A),
            this.vars.repeatRefresh &&
              !A &&
              !this._lock &&
              x !== T &&
              this._initted &&
              ((this._lock = f = 1),
              (this.render(Bt(T * w), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (wv(this, v ? s : x, f, o, b)) return (this._tTime = 0), this;
          if (m !== this._time && !(f && this.vars.repeatRefresh && w !== E))
            return this;
          if (p !== this._dur) return this.render(s, o, f);
        }
        if (
          ((this._tTime = b),
          (this._time = x),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = O = (C || this._ease)(x / p)),
          this._from && (this.ratio = O = 1 - O),
          x && !m && !o && !w && (tl(this, "onStart"), this._tTime !== b))
        )
          return this;
        for (_ = this._pt; _; ) _.r(O, _.d), (_ = _._next);
        (z && z.render(s < 0 ? s : z._dur * z._ease(x / this._dur), o, f)) ||
          (this._startAt && (this._zTime = s)),
          this._onUpdate &&
            !o &&
            (v && bh(this, s, o, f), tl(this, "onUpdate")),
          this._repeat &&
            w !== E &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            tl(this, "onRepeat"),
          (b === this._tDur || !b) &&
            this._tTime === b &&
            (v && !this._onUpdate && bh(this, s, !0, !0),
            (s || !p) &&
              ((b === this._tDur && this._ts > 0) || (!b && this._ts < 0)) &&
              ha(this, 1),
            !o &&
              !(v && !m) &&
              (b || m || A) &&
              (tl(this, b === g ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(b < g && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (a.targets = function () {
      return this._targets;
    }),
    (a.invalidate = function (s) {
      return (
        (!s || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(s),
        u.prototype.invalidate.call(this, s)
      );
    }),
    (a.resetTo = function (s, o, f, m, g) {
      Au || In.wake(), this._ts || this.play();
      var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        v;
      return (
        this._initted || am(this, p),
        (v = this._ease(p / this._dur)),
        lS(this, s, o, f, m, v, p, g)
          ? this.resetTo(s, o, f, m, 1)
          : (Yo(this, 0),
            this.parent ||
              Sv(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (a.kill = function (s, o) {
      if ((o === void 0 && (o = "all"), !s && (!o || o === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? ru(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!an),
          this
        );
      if (this.timeline) {
        var f = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(s, o, ia && ia.vars.overwrite !== !0)
            ._first || ru(this),
          this.parent &&
            f !== this.timeline.totalDuration() &&
            ns(this, (this._dur * this.timeline._tDur) / f, 0, 1),
          this
        );
      }
      var m = this._targets,
        g = s ? wl(s) : m,
        p = this._ptLookup,
        v = this._pt,
        b,
        x,
        _,
        w,
        T,
        E,
        A;
      if ((!o || o === "all") && zb(m, g))
        return o === "all" && (this._pt = 0), ru(this);
      for (
        b = this._op = this._op || [],
          o !== "all" &&
            (It(o) &&
              ((T = {}),
              Ln(o, function (O) {
                return (T[O] = 1);
              }),
              (o = T)),
            (o = iS(m, o))),
          A = m.length;
        A--;

      )
        if (~g.indexOf(m[A])) {
          (x = p[A]),
            o === "all"
              ? ((b[A] = o), (w = x), (_ = {}))
              : ((_ = b[A] = b[A] || {}), (w = o));
          for (T in w)
            (E = x && x[T]),
              E &&
                ((!("kill" in E.d) || E.d.kill(T) === !0) && Ho(this, E, "_pt"),
                delete x[T]),
              _ !== "all" && (_[T] = 1);
        }
      return this._initted && !this._pt && v && ru(this), this;
    }),
    (l.to = function (s, o) {
      return new l(s, o, arguments[2]);
    }),
    (l.from = function (s, o) {
      return mu(1, arguments);
    }),
    (l.delayedCall = function (s, o, f, m) {
      return new l(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: s,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: f,
        onReverseCompleteParams: f,
        callbackScope: m,
      });
    }),
    (l.fromTo = function (s, o, f) {
      return mu(2, arguments);
    }),
    (l.set = function (s, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new l(s, o);
    }),
    (l.killTweensOf = function (s, o, f) {
      return gt.killTweensOf(s, o, f);
    }),
    l
  );
})(Cu);
il(Ht.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Ln("staggerTo,staggerFrom,staggerFromTo", function (u) {
  Ht[u] = function () {
    var l = new An(),
      a = jh.call(arguments, 0);
    return a.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), l[u].apply(l, a);
  };
});
var rm = function (l, a, i) {
    return (l[a] = i);
  },
  Qv = function (l, a, i) {
    return l[a](i);
  },
  rS = function (l, a, i, s) {
    return l[a](s.fp, i);
  },
  sS = function (l, a, i) {
    return l.setAttribute(a, i);
  },
  sm = function (l, a) {
    return wt(l[a]) ? Qv : Jh(l[a]) && l.setAttribute ? sS : rm;
  },
  Zv = function (l, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * l) * 1e6) / 1e6, a);
  },
  uS = function (l, a) {
    return a.set(a.t, a.p, !!(a.s + a.c * l), a);
  },
  Kv = function (l, a) {
    var i = a._pt,
      s = "";
    if (!l && a.b) s = a.b;
    else if (l === 1 && a.e) s = a.e;
    else {
      for (; i; )
        (s =
          i.p +
          (i.m ? i.m(i.s + i.c * l) : Math.round((i.s + i.c * l) * 1e4) / 1e4) +
          s),
          (i = i._next);
      s += a.c;
    }
    a.set(a.t, a.p, s, a);
  },
  um = function (l, a) {
    for (var i = a._pt; i; ) i.r(l, i.d), (i = i._next);
  },
  cS = function (l, a, i, s) {
    for (var o = this._pt, f; o; )
      (f = o._next), o.p === s && o.modifier(l, a, i), (o = f);
  },
  oS = function (l) {
    for (var a = this._pt, i, s; a; )
      (s = a._next),
        (a.p === l && !a.op) || a.op === l
          ? Ho(this, a, "_pt")
          : a.dep || (i = 1),
        (a = s);
    return !i;
  },
  fS = function (l, a, i, s) {
    s.mSet(l, a, s.m.call(s.tween, i, s.mt), s);
  },
  $v = function (l) {
    for (var a = l._pt, i, s, o, f; a; ) {
      for (i = a._next, s = o; s && s.pr > a.pr; ) s = s._next;
      (a._prev = s ? s._prev : f) ? (a._prev._next = a) : (o = a),
        (a._next = s) ? (s._prev = a) : (f = a),
        (a = i);
    }
    l._pt = o;
  },
  Un = (function () {
    function u(a, i, s, o, f, m, g, p, v) {
      (this.t = i),
        (this.s = o),
        (this.c = f),
        (this.p = s),
        (this.r = m || Zv),
        (this.d = g || this),
        (this.set = p || rm),
        (this.pr = v || 0),
        (this._next = a),
        a && (a._prev = this);
    }
    var l = u.prototype;
    return (
      (l.modifier = function (i, s, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = fS),
          (this.m = i),
          (this.mt = o),
          (this.tween = s);
      }),
      u
    );
  })();
Ln(
  nm +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (u) {
    return (tm[u] = 1);
  }
);
ll.TweenMax = ll.TweenLite = Ht;
ll.TimelineLite = ll.TimelineMax = An;
gt = new An({
  sortChildren: !1,
  defaults: Ir,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
nl.stringFilter = Uv;
var Fa = [],
  go = {},
  dS = [],
  f1 = 0,
  hS = 0,
  ah = function (l) {
    return (go[l] || dS).map(function (a) {
      return a();
    });
  },
  Nh = function () {
    var l = Date.now(),
      a = [];
    l - f1 > 2 &&
      (ah("matchMediaInit"),
      Fa.forEach(function (i) {
        var s = i.queries,
          o = i.conditions,
          f,
          m,
          g,
          p;
        for (m in s)
          (f = Vl.matchMedia(s[m]).matches),
            f && (g = 1),
            f !== o[m] && ((o[m] = f), (p = 1));
        p && (i.revert(), g && a.push(i));
      }),
      ah("matchMediaRevert"),
      a.forEach(function (i) {
        return i.onMatch(i, function (s) {
          return i.add(null, s);
        });
      }),
      (f1 = l),
      ah("matchMedia"));
  },
  Fv = (function () {
    function u(a, i) {
      (this.selector = i && Th(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = hS++),
        a && this.add(a);
    }
    var l = u.prototype;
    return (
      (l.add = function (i, s, o) {
        wt(i) && ((o = s), (s = i), (i = wt));
        var f = this,
          m = function () {
            var p = ft,
              v = f.selector,
              b;
            return (
              p && p !== f && p.data.push(f),
              o && (f.selector = Th(o)),
              (ft = f),
              (b = s.apply(f, arguments)),
              wt(b) && f._r.push(b),
              (ft = p),
              (f.selector = v),
              (f.isReverted = !1),
              b
            );
          };
        return (
          (f.last = m),
          i === wt
            ? m(f, function (g) {
                return f.add(null, g);
              })
            : i
            ? (f[i] = m)
            : m
        );
      }),
      (l.ignore = function (i) {
        var s = ft;
        (ft = null), i(this), (ft = s);
      }),
      (l.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (s) {
            return s instanceof u
              ? i.push.apply(i, s.getTweens())
              : s instanceof Ht &&
                  !(s.parent && s.parent.data === "nested") &&
                  i.push(s);
          }),
          i
        );
      }),
      (l.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (l.kill = function (i, s) {
        var o = this;
        if (
          (i
            ? (function () {
                for (var m = o.getTweens(), g = o.data.length, p; g--; )
                  (p = o.data[g]),
                    p.data === "isFlip" &&
                      (p.revert(),
                      p.getChildren(!0, !0, !1).forEach(function (v) {
                        return m.splice(m.indexOf(v), 1);
                      }));
                for (
                  m
                    .map(function (v) {
                      return {
                        g:
                          v._dur ||
                          v._delay ||
                          (v._sat && !v._sat.vars.immediateRender)
                            ? v.globalTime(0)
                            : -1 / 0,
                        t: v,
                      };
                    })
                    .sort(function (v, b) {
                      return b.g - v.g || -1 / 0;
                    })
                    .forEach(function (v) {
                      return v.t.revert(i);
                    }),
                    g = o.data.length;
                  g--;

                )
                  (p = o.data[g]),
                    p instanceof An
                      ? p.data !== "nested" &&
                        (p.scrollTrigger && p.scrollTrigger.revert(), p.kill())
                      : !(p instanceof Ht) && p.revert && p.revert(i);
                o._r.forEach(function (v) {
                  return v(i, o);
                }),
                  (o.isReverted = !0);
              })()
            : this.data.forEach(function (m) {
                return m.kill && m.kill();
              }),
          this.clear(),
          s)
        )
          for (var f = Fa.length; f--; )
            Fa[f].id === this.id && Fa.splice(f, 1);
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      u
    );
  })(),
  mS = (function () {
    function u(a) {
      (this.contexts = []), (this.scope = a), ft && ft.data.push(this);
    }
    var l = u.prototype;
    return (
      (l.add = function (i, s, o) {
        ei(i) || (i = { matches: i });
        var f = new Fv(0, o || this.scope),
          m = (f.conditions = {}),
          g,
          p,
          v;
        ft && !f.selector && (f.selector = ft.selector),
          this.contexts.push(f),
          (s = f.add("onMatch", s)),
          (f.queries = i);
        for (p in i)
          p === "all"
            ? (v = 1)
            : ((g = Vl.matchMedia(i[p])),
              g &&
                (Fa.indexOf(f) < 0 && Fa.push(f),
                (m[p] = g.matches) && (v = 1),
                g.addListener
                  ? g.addListener(Nh)
                  : g.addEventListener("change", Nh)));
        return (
          v &&
            s(f, function (b) {
              return f.add(null, b);
            }),
          this
        );
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      (l.kill = function (i) {
        this.contexts.forEach(function (s) {
          return s.kill(i, !0);
        });
      }),
      u
    );
  })(),
  Ro = {
    registerPlugin: function () {
      for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
        a[i] = arguments[i];
      a.forEach(function (s) {
        return zv(s);
      });
    },
    timeline: function (l) {
      return new An(l);
    },
    getTweensOf: function (l, a) {
      return gt.getTweensOf(l, a);
    },
    getProperty: function (l, a, i, s) {
      It(l) && (l = wl(l)[0]);
      var o = Za(l || {}).get,
        f = i ? bv : xv;
      return (
        i === "native" && (i = ""),
        l &&
          (a
            ? f(((Jn[a] && Jn[a].get) || o)(l, a, i, s))
            : function (m, g, p) {
                return f(((Jn[m] && Jn[m].get) || o)(l, m, g, p));
              })
      );
    },
    quickSetter: function (l, a, i) {
      if (((l = wl(l)), l.length > 1)) {
        var s = l.map(function (v) {
            return Bn.quickSetter(v, a, i);
          }),
          o = s.length;
        return function (v) {
          for (var b = o; b--; ) s[b](v);
        };
      }
      l = l[0] || {};
      var f = Jn[a],
        m = Za(l),
        g = (m.harness && (m.harness.aliases || {})[a]) || a,
        p = f
          ? function (v) {
              var b = new f();
              (Vr._pt = 0),
                b.init(l, i ? v + i : v, Vr, 0, [l]),
                b.render(1, b),
                Vr._pt && um(1, Vr);
            }
          : m.set(l, g);
      return f
        ? p
        : function (v) {
            return p(l, g, i ? v + i : v, m, 1);
          };
    },
    quickTo: function (l, a, i) {
      var s,
        o = Bn.to(
          l,
          il(
            ((s = {}), (s[a] = "+=0.1"), (s.paused = !0), (s.stagger = 0), s),
            i || {}
          )
        ),
        f = function (g, p, v) {
          return o.resetTo(a, g, p, v);
        };
      return (f.tween = o), f;
    },
    isTweening: function (l) {
      return gt.getTweensOf(l, !0).length > 0;
    },
    defaults: function (l) {
      return l && l.ease && (l.ease = $a(l.ease, Ir.ease)), r1(Ir, l || {});
    },
    config: function (l) {
      return r1(nl, l || {});
    },
    registerEffect: function (l) {
      var a = l.name,
        i = l.effect,
        s = l.plugins,
        o = l.defaults,
        f = l.extendTimeline;
      (s || "").split(",").forEach(function (m) {
        return (
          m && !Jn[m] && !ll[m] && Eu(a + " effect requires " + m + " plugin.")
        );
      }),
        (th[a] = function (m, g, p) {
          return i(wl(m), il(g || {}, o), p);
        }),
        f &&
          (An.prototype[a] = function (m, g, p) {
            return this.add(th[a](m, ei(g) ? g : (p = g) && {}, this), p);
          });
    },
    registerEase: function (l, a) {
      qe[l] = $a(a);
    },
    parseEase: function (l, a) {
      return arguments.length ? $a(l, a) : qe;
    },
    getById: function (l) {
      return gt.getById(l);
    },
    exportRoot: function (l, a) {
      l === void 0 && (l = {});
      var i = new An(l),
        s,
        o;
      for (
        i.smoothChildTiming = kn(l.smoothChildTiming),
          gt.remove(i),
          i._dp = 0,
          i._time = i._tTime = gt._time,
          s = gt._first;
        s;

      )
        (o = s._next),
          (a ||
            !(
              !s._dur &&
              s instanceof Ht &&
              s.vars.onComplete === s._targets[0]
            )) &&
            Zl(i, s, s._start - s._delay),
          (s = o);
      return Zl(gt, i, 0), i;
    },
    context: function (l, a) {
      return l ? new Fv(l, a) : ft;
    },
    matchMedia: function (l) {
      return new mS(l);
    },
    matchMediaRefresh: function () {
      return (
        Fa.forEach(function (l) {
          var a = l.conditions,
            i,
            s;
          for (s in a) a[s] && ((a[s] = !1), (i = 1));
          i && l.revert();
        }) || Nh()
      );
    },
    addEventListener: function (l, a) {
      var i = go[l] || (go[l] = []);
      ~i.indexOf(a) || i.push(a);
    },
    removeEventListener: function (l, a) {
      var i = go[l],
        s = i && i.indexOf(a);
      s >= 0 && i.splice(s, 1);
    },
    utils: {
      wrap: Zb,
      wrapYoyo: Kb,
      distribute: Rv,
      random: Cv,
      snap: Av,
      normalize: Qb,
      getUnit: pn,
      clamp: qb,
      splitColor: kv,
      toArray: wl,
      selector: Th,
      mapRange: Ov,
      pipe: Gb,
      unitize: Vb,
      interpolate: $b,
      shuffle: Nv,
    },
    install: pv,
    effects: th,
    ticker: In,
    updateRoot: An.updateRoot,
    plugins: Jn,
    globalTimeline: gt,
    core: {
      PropTween: Un,
      globals: gv,
      Tween: Ht,
      Timeline: An,
      Animation: Cu,
      getCache: Za,
      _removeLinkedListItem: Ho,
      reverting: function () {
        return an;
      },
      context: function (l) {
        return l && ft && (ft.data.push(l), (l._ctx = ft)), ft;
      },
      suppressOverwrites: function (l) {
        return (Ph = l);
      },
    },
  };
Ln("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
  return (Ro[u] = Ht[u]);
});
In.add(An.updateRoot);
Vr = Ro.to({}, { duration: 0 });
var pS = function (l, a) {
    for (var i = l._pt; i && i.p !== a && i.op !== a && i.fp !== a; )
      i = i._next;
    return i;
  },
  gS = function (l, a) {
    var i = l._targets,
      s,
      o,
      f;
    for (s in a)
      for (o = i.length; o--; )
        (f = l._ptLookup[o][s]),
          f &&
            (f = f.d) &&
            (f._pt && (f = pS(f, s)),
            f && f.modifier && f.modifier(a[s], l, i[o], s));
  },
  rh = function (l, a) {
    return {
      name: l,
      rawVars: 1,
      init: function (s, o, f) {
        f._onInit = function (m) {
          var g, p;
          if (
            (It(o) &&
              ((g = {}),
              Ln(o, function (v) {
                return (g[v] = 1);
              }),
              (o = g)),
            a)
          ) {
            g = {};
            for (p in o) g[p] = a(o[p]);
            o = g;
          }
          gS(m, o);
        };
      },
    };
  },
  Bn =
    Ro.registerPlugin(
      {
        name: "attr",
        init: function (l, a, i, s, o) {
          var f, m, g;
          this.tween = i;
          for (f in a)
            (g = l.getAttribute(f) || ""),
              (m = this.add(
                l,
                "setAttribute",
                (g || 0) + "",
                a[f],
                s,
                o,
                0,
                0,
                f
              )),
              (m.op = f),
              (m.b = g),
              this._props.push(f);
        },
        render: function (l, a) {
          for (var i = a._pt; i; )
            an ? i.set(i.t, i.p, i.b, i) : i.r(l, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (l, a) {
          for (var i = a.length; i--; )
            this.add(l, i, l[i] || 0, a[i], 0, 0, 0, 0, 0, 1);
        },
      },
      rh("roundProps", wh),
      rh("modifiers"),
      rh("snap", Av)
    ) || Ro;
Ht.version = An.version = Bn.version = "3.12.7";
mv = 1;
Wh() && ls();
qe.Power0;
qe.Power1;
qe.Power2;
qe.Power3;
qe.Power4;
qe.Linear;
qe.Quad;
qe.Cubic;
qe.Quart;
qe.Quint;
qe.Strong;
qe.Elastic;
qe.Back;
qe.SteppedEase;
qe.Bounce;
qe.Sine;
qe.Expo;
qe.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var d1,
  aa,
  Kr,
  cm,
  Va,
  h1,
  om,
  vS = function () {
    return typeof window < "u";
  },
  Oi = {},
  qa = 180 / Math.PI,
  $r = Math.PI / 180,
  Hr = Math.atan2,
  m1 = 1e8,
  fm = /([A-Z])/g,
  yS = /(left|right|width|margin|padding|x)/i,
  _S = /[\s,\(]\S/,
  Kl = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Rh = function (l, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * l) * 1e4) / 1e4 + a.u, a);
  },
  xS = function (l, a) {
    return a.set(
      a.t,
      a.p,
      l === 1 ? a.e : Math.round((a.s + a.c * l) * 1e4) / 1e4 + a.u,
      a
    );
  },
  bS = function (l, a) {
    return a.set(
      a.t,
      a.p,
      l ? Math.round((a.s + a.c * l) * 1e4) / 1e4 + a.u : a.b,
      a
    );
  },
  SS = function (l, a) {
    var i = a.s + a.c * l;
    a.set(a.t, a.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + a.u, a);
  },
  Pv = function (l, a) {
    return a.set(a.t, a.p, l ? a.e : a.b, a);
  },
  Jv = function (l, a) {
    return a.set(a.t, a.p, l !== 1 ? a.b : a.e, a);
  },
  jS = function (l, a, i) {
    return (l.style[a] = i);
  },
  TS = function (l, a, i) {
    return l.style.setProperty(a, i);
  },
  wS = function (l, a, i) {
    return (l._gsap[a] = i);
  },
  ES = function (l, a, i) {
    return (l._gsap.scaleX = l._gsap.scaleY = i);
  },
  NS = function (l, a, i, s, o) {
    var f = l._gsap;
    (f.scaleX = f.scaleY = i), f.renderTransform(o, f);
  },
  RS = function (l, a, i, s, o) {
    var f = l._gsap;
    (f[a] = i), f.renderTransform(o, f);
  },
  vt = "transform",
  Hn = vt + "Origin",
  AS = function u(l, a) {
    var i = this,
      s = this.target,
      o = s.style,
      f = s._gsap;
    if (l in Oi && o) {
      if (((this.tfm = this.tfm || {}), l !== "transform"))
        (l = Kl[l] || l),
          ~l.indexOf(",")
            ? l.split(",").forEach(function (m) {
                return (i.tfm[m] = Ti(s, m));
              })
            : (this.tfm[l] = f.x ? f[l] : Ti(s, l)),
          l === Hn && (this.tfm.zOrigin = f.zOrigin);
      else
        return Kl.transform.split(",").forEach(function (m) {
          return u.call(i, m, a);
        });
      if (this.props.indexOf(vt) >= 0) return;
      f.svg &&
        ((this.svgo = s.getAttribute("data-svg-origin")),
        this.props.push(Hn, a, "")),
        (l = vt);
    }
    (o || a) && this.props.push(l, a, o[l]);
  },
  Wv = function (l) {
    l.translate &&
      (l.removeProperty("translate"),
      l.removeProperty("scale"),
      l.removeProperty("rotate"));
  },
  CS = function () {
    var l = this.props,
      a = this.target,
      i = a.style,
      s = a._gsap,
      o,
      f;
    for (o = 0; o < l.length; o += 3)
      l[o + 1]
        ? l[o + 1] === 2
          ? a[l[o]](l[o + 2])
          : (a[l[o]] = l[o + 2])
        : l[o + 2]
        ? (i[l[o]] = l[o + 2])
        : i.removeProperty(
            l[o].substr(0, 2) === "--"
              ? l[o]
              : l[o].replace(fm, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (f in this.tfm) s[f] = this.tfm[f];
      s.svg &&
        (s.renderTransform(),
        a.setAttribute("data-svg-origin", this.svgo || "")),
        (o = om()),
        (!o || !o.isStart) &&
          !i[vt] &&
          (Wv(i),
          s.zOrigin &&
            i[Hn] &&
            ((i[Hn] += " " + s.zOrigin + "px"),
            (s.zOrigin = 0),
            s.renderTransform()),
          (s.uncache = 1));
    }
  },
  Iv = function (l, a) {
    var i = { target: l, props: [], revert: CS, save: AS };
    return (
      l._gsap || Bn.core.getCache(l),
      a &&
        l.style &&
        l.nodeType &&
        a.split(",").forEach(function (s) {
          return i.save(s);
        }),
      i
    );
  },
  ey,
  Ah = function (l, a) {
    var i = aa.createElementNS
      ? aa.createElementNS(
          (a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          l
        )
      : aa.createElement(l);
    return i && i.style ? i : aa.createElement(l);
  },
  Jl = function u(l, a, i) {
    var s = getComputedStyle(l);
    return (
      s[a] ||
      s.getPropertyValue(a.replace(fm, "-$1").toLowerCase()) ||
      s.getPropertyValue(a) ||
      (!i && u(l, is(a) || a, 1)) ||
      ""
    );
  },
  p1 = "O,Moz,ms,Ms,Webkit".split(","),
  is = function (l, a, i) {
    var s = a || Va,
      o = s.style,
      f = 5;
    if (l in o && !i) return l;
    for (
      l = l.charAt(0).toUpperCase() + l.substr(1);
      f-- && !(p1[f] + l in o);

    );
    return f < 0 ? null : (f === 3 ? "ms" : f >= 0 ? p1[f] : "") + l;
  },
  Ch = function () {
    vS() &&
      window.document &&
      ((d1 = window),
      (aa = d1.document),
      (Kr = aa.documentElement),
      (Va = Ah("div") || { style: {} }),
      Ah("div"),
      (vt = is(vt)),
      (Hn = vt + "Origin"),
      (Va.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (ey = !!is("perspective")),
      (om = Bn.core.reverting),
      (cm = 1));
  },
  g1 = function (l) {
    var a = l.ownerSVGElement,
      i = Ah(
        "svg",
        (a && a.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      s = l.cloneNode(!0),
      o;
    (s.style.display = "block"), i.appendChild(s), Kr.appendChild(i);
    try {
      o = s.getBBox();
    } catch {}
    return i.removeChild(s), Kr.removeChild(i), o;
  },
  v1 = function (l, a) {
    for (var i = a.length; i--; )
      if (l.hasAttribute(a[i])) return l.getAttribute(a[i]);
  },
  ty = function (l) {
    var a, i;
    try {
      a = l.getBBox();
    } catch {
      (a = g1(l)), (i = 1);
    }
    return (
      (a && (a.width || a.height)) || i || (a = g1(l)),
      a && !a.width && !a.x && !a.y
        ? {
            x: +v1(l, ["x", "cx", "x1"]) || 0,
            y: +v1(l, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : a
    );
  },
  ny = function (l) {
    return !!(l.getCTM && (!l.parentNode || l.ownerSVGElement) && ty(l));
  },
  er = function (l, a) {
    if (a) {
      var i = l.style,
        s;
      a in Oi && a !== Hn && (a = vt),
        i.removeProperty
          ? ((s = a.substr(0, 2)),
            (s === "ms" || a.substr(0, 6) === "webkit") && (a = "-" + a),
            i.removeProperty(
              s === "--" ? a : a.replace(fm, "-$1").toLowerCase()
            ))
          : i.removeAttribute(a);
    }
  },
  ra = function (l, a, i, s, o, f) {
    var m = new Un(l._pt, a, i, 0, 1, f ? Jv : Pv);
    return (l._pt = m), (m.b = s), (m.e = o), l._props.push(i), m;
  },
  y1 = { deg: 1, rad: 1, turn: 1 },
  MS = { grid: 1, flex: 1 },
  ma = function u(l, a, i, s) {
    var o = parseFloat(i) || 0,
      f = (i + "").trim().substr((o + "").length) || "px",
      m = Va.style,
      g = yS.test(a),
      p = l.tagName.toLowerCase() === "svg",
      v = (p ? "client" : "offset") + (g ? "Width" : "Height"),
      b = 100,
      x = s === "px",
      _ = s === "%",
      w,
      T,
      E,
      A;
    if (s === f || !o || y1[s] || y1[f]) return o;
    if (
      (f !== "px" && !x && (o = u(l, a, i, "px")),
      (A = l.getCTM && ny(l)),
      (_ || f === "%") && (Oi[a] || ~a.indexOf("adius")))
    )
      return (
        (w = A ? l.getBBox()[g ? "width" : "height"] : l[v]),
        At(_ ? (o / w) * b : (o / 100) * w)
      );
    if (
      ((m[g ? "width" : "height"] = b + (x ? f : s)),
      (T =
        (s !== "rem" && ~a.indexOf("adius")) ||
        (s === "em" && l.appendChild && !p)
          ? l
          : l.parentNode),
      A && (T = (l.ownerSVGElement || {}).parentNode),
      (!T || T === aa || !T.appendChild) && (T = aa.body),
      (E = T._gsap),
      E && _ && E.width && g && E.time === In.time && !E.uncache)
    )
      return At((o / E.width) * b);
    if (_ && (a === "height" || a === "width")) {
      var O = l.style[a];
      (l.style[a] = b + s), (w = l[v]), O ? (l.style[a] = O) : er(l, a);
    } else
      (_ || f === "%") &&
        !MS[Jl(T, "display")] &&
        (m.position = Jl(l, "position")),
        T === l && (m.position = "static"),
        T.appendChild(Va),
        (w = Va[v]),
        T.removeChild(Va),
        (m.position = "absolute");
    return (
      g && _ && ((E = Za(T)), (E.time = In.time), (E.width = T[v])),
      At(x ? (w * o) / b : w && o ? (b / w) * o : 0)
    );
  },
  Ti = function (l, a, i, s) {
    var o;
    return (
      cm || Ch(),
      a in Kl &&
        a !== "transform" &&
        ((a = Kl[a]), ~a.indexOf(",") && (a = a.split(",")[0])),
      Oi[a] && a !== "transform"
        ? ((o = Ou(l, s)),
          (o =
            a !== "transformOrigin"
              ? o[a]
              : o.svg
              ? o.origin
              : Co(Jl(l, Hn)) + " " + o.zOrigin + "px"))
        : ((o = l.style[a]),
          (!o || o === "auto" || s || ~(o + "").indexOf("calc(")) &&
            (o =
              (Ao[a] && Ao[a](l, a, i)) ||
              Jl(l, a) ||
              yv(l, a) ||
              (a === "opacity" ? 1 : 0))),
      i && !~(o + "").trim().indexOf(" ") ? ma(l, a, o, i) + i : o
    );
  },
  OS = function (l, a, i, s) {
    if (!i || i === "none") {
      var o = is(a, l, 1),
        f = o && Jl(l, o, 1);
      f && f !== i
        ? ((a = o), (i = f))
        : a === "borderColor" && (i = Jl(l, "borderTopColor"));
    }
    var m = new Un(this._pt, l.style, a, 0, 1, Kv),
      g = 0,
      p = 0,
      v,
      b,
      x,
      _,
      w,
      T,
      E,
      A,
      O,
      z,
      C,
      U;
    if (
      ((m.b = i),
      (m.e = s),
      (i += ""),
      (s += ""),
      s === "auto" &&
        ((T = l.style[a]),
        (l.style[a] = s),
        (s = Jl(l, a) || s),
        T ? (l.style[a] = T) : er(l, a)),
      (v = [i, s]),
      Uv(v),
      (i = v[0]),
      (s = v[1]),
      (x = i.match(Gr) || []),
      (U = s.match(Gr) || []),
      U.length)
    ) {
      for (; (b = Gr.exec(s)); )
        (E = b[0]),
          (O = s.substring(g, b.index)),
          w
            ? (w = (w + 1) % 5)
            : (O.substr(-5) === "rgba(" || O.substr(-5) === "hsla(") && (w = 1),
          E !== (T = x[p++] || "") &&
            ((_ = parseFloat(T) || 0),
            (C = T.substr((_ + "").length)),
            E.charAt(1) === "=" && (E = Zr(_, E) + C),
            (A = parseFloat(E)),
            (z = E.substr((A + "").length)),
            (g = Gr.lastIndex - z.length),
            z ||
              ((z = z || nl.units[a] || C),
              g === s.length && ((s += z), (m.e += z))),
            C !== z && (_ = ma(l, a, T, z) || 0),
            (m._pt = {
              _next: m._pt,
              p: O || p === 1 ? O : ",",
              s: _,
              c: A - _,
              m: (w && w < 4) || a === "zIndex" ? Math.round : 0,
            }));
      m.c = g < s.length ? s.substring(g, s.length) : "";
    } else m.r = a === "display" && s === "none" ? Jv : Pv;
    return dv.test(s) && (m.e = 0), (this._pt = m), m;
  },
  _1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  DS = function (l) {
    var a = l.split(" "),
      i = a[0],
      s = a[1] || "50%";
    return (
      (i === "top" || i === "bottom" || s === "left" || s === "right") &&
        ((l = i), (i = s), (s = l)),
      (a[0] = _1[i] || i),
      (a[1] = _1[s] || s),
      a.join(" ")
    );
  },
  zS = function (l, a) {
    if (a.tween && a.tween._time === a.tween._dur) {
      var i = a.t,
        s = i.style,
        o = a.u,
        f = i._gsap,
        m,
        g,
        p;
      if (o === "all" || o === !0) (s.cssText = ""), (g = 1);
      else
        for (o = o.split(","), p = o.length; --p > -1; )
          (m = o[p]),
            Oi[m] && ((g = 1), (m = m === "transformOrigin" ? Hn : vt)),
            er(i, m);
      g &&
        (er(i, vt),
        f &&
          (f.svg && i.removeAttribute("transform"),
          (s.scale = s.rotate = s.translate = "none"),
          Ou(i, 1),
          (f.uncache = 1),
          Wv(s)));
    }
  },
  Ao = {
    clearProps: function (l, a, i, s, o) {
      if (o.data !== "isFromStart") {
        var f = (l._pt = new Un(l._pt, a, i, 0, 0, zS));
        return (f.u = s), (f.pr = -10), (f.tween = o), l._props.push(i), 1;
      }
    },
  },
  Mu = [1, 0, 0, 1, 0, 0],
  ly = {},
  iy = function (l) {
    return l === "matrix(1, 0, 0, 1, 0, 0)" || l === "none" || !l;
  },
  x1 = function (l) {
    var a = Jl(l, vt);
    return iy(a) ? Mu : a.substr(7).match(fv).map(At);
  },
  dm = function (l, a) {
    var i = l._gsap || Za(l),
      s = l.style,
      o = x1(l),
      f,
      m,
      g,
      p;
    return i.svg && l.getAttribute("transform")
      ? ((g = l.transform.baseVal.consolidate().matrix),
        (o = [g.a, g.b, g.c, g.d, g.e, g.f]),
        o.join(",") === "1,0,0,1,0,0" ? Mu : o)
      : (o === Mu &&
          !l.offsetParent &&
          l !== Kr &&
          !i.svg &&
          ((g = s.display),
          (s.display = "block"),
          (f = l.parentNode),
          (!f || (!l.offsetParent && !l.getBoundingClientRect().width)) &&
            ((p = 1), (m = l.nextElementSibling), Kr.appendChild(l)),
          (o = x1(l)),
          g ? (s.display = g) : er(l, "display"),
          p &&
            (m
              ? f.insertBefore(l, m)
              : f
              ? f.appendChild(l)
              : Kr.removeChild(l))),
        a && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  Mh = function (l, a, i, s, o, f) {
    var m = l._gsap,
      g = o || dm(l, !0),
      p = m.xOrigin || 0,
      v = m.yOrigin || 0,
      b = m.xOffset || 0,
      x = m.yOffset || 0,
      _ = g[0],
      w = g[1],
      T = g[2],
      E = g[3],
      A = g[4],
      O = g[5],
      z = a.split(" "),
      C = parseFloat(z[0]) || 0,
      U = parseFloat(z[1]) || 0,
      V,
      q,
      Y,
      L;
    i
      ? g !== Mu &&
        (q = _ * E - w * T) &&
        ((Y = C * (E / q) + U * (-T / q) + (T * O - E * A) / q),
        (L = C * (-w / q) + U * (_ / q) - (_ * O - w * A) / q),
        (C = Y),
        (U = L))
      : ((V = ty(l)),
        (C = V.x + (~z[0].indexOf("%") ? (C / 100) * V.width : C)),
        (U = V.y + (~(z[1] || z[0]).indexOf("%") ? (U / 100) * V.height : U))),
      s || (s !== !1 && m.smooth)
        ? ((A = C - p),
          (O = U - v),
          (m.xOffset = b + (A * _ + O * T) - A),
          (m.yOffset = x + (A * w + O * E) - O))
        : (m.xOffset = m.yOffset = 0),
      (m.xOrigin = C),
      (m.yOrigin = U),
      (m.smooth = !!s),
      (m.origin = a),
      (m.originIsAbsolute = !!i),
      (l.style[Hn] = "0px 0px"),
      f &&
        (ra(f, m, "xOrigin", p, C),
        ra(f, m, "yOrigin", v, U),
        ra(f, m, "xOffset", b, m.xOffset),
        ra(f, m, "yOffset", x, m.yOffset)),
      l.setAttribute("data-svg-origin", C + " " + U);
  },
  Ou = function (l, a) {
    var i = l._gsap || new qv(l);
    if ("x" in i && !a && !i.uncache) return i;
    var s = l.style,
      o = i.scaleX < 0,
      f = "px",
      m = "deg",
      g = getComputedStyle(l),
      p = Jl(l, Hn) || "0",
      v,
      b,
      x,
      _,
      w,
      T,
      E,
      A,
      O,
      z,
      C,
      U,
      V,
      q,
      Y,
      L,
      G,
      se,
      I,
      ye,
      _e,
      ve,
      F,
      J,
      ee,
      me,
      S,
      K,
      le,
      re,
      W,
      pe;
    return (
      (v = b = x = T = E = A = O = z = C = 0),
      (_ = w = 1),
      (i.svg = !!(l.getCTM && ny(l))),
      g.translate &&
        ((g.translate !== "none" ||
          g.scale !== "none" ||
          g.rotate !== "none") &&
          (s[vt] =
            (g.translate !== "none"
              ? "translate3d(" +
                (g.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (g.rotate !== "none" ? "rotate(" + g.rotate + ") " : "") +
            (g.scale !== "none"
              ? "scale(" + g.scale.split(" ").join(",") + ") "
              : "") +
            (g[vt] !== "none" ? g[vt] : "")),
        (s.scale = s.rotate = s.translate = "none")),
      (q = dm(l, i.svg)),
      i.svg &&
        (i.uncache
          ? ((ee = l.getBBox()),
            (p = i.xOrigin - ee.x + "px " + (i.yOrigin - ee.y) + "px"),
            (J = ""))
          : (J = !a && l.getAttribute("data-svg-origin")),
        Mh(l, J || p, !!J || i.originIsAbsolute, i.smooth !== !1, q)),
      (U = i.xOrigin || 0),
      (V = i.yOrigin || 0),
      q !== Mu &&
        ((se = q[0]),
        (I = q[1]),
        (ye = q[2]),
        (_e = q[3]),
        (v = ve = q[4]),
        (b = F = q[5]),
        q.length === 6
          ? ((_ = Math.sqrt(se * se + I * I)),
            (w = Math.sqrt(_e * _e + ye * ye)),
            (T = se || I ? Hr(I, se) * qa : 0),
            (O = ye || _e ? Hr(ye, _e) * qa + T : 0),
            O && (w *= Math.abs(Math.cos(O * $r))),
            i.svg &&
              ((v -= U - (U * se + V * ye)), (b -= V - (U * I + V * _e))))
          : ((pe = q[6]),
            (re = q[7]),
            (S = q[8]),
            (K = q[9]),
            (le = q[10]),
            (W = q[11]),
            (v = q[12]),
            (b = q[13]),
            (x = q[14]),
            (Y = Hr(pe, le)),
            (E = Y * qa),
            Y &&
              ((L = Math.cos(-Y)),
              (G = Math.sin(-Y)),
              (J = ve * L + S * G),
              (ee = F * L + K * G),
              (me = pe * L + le * G),
              (S = ve * -G + S * L),
              (K = F * -G + K * L),
              (le = pe * -G + le * L),
              (W = re * -G + W * L),
              (ve = J),
              (F = ee),
              (pe = me)),
            (Y = Hr(-ye, le)),
            (A = Y * qa),
            Y &&
              ((L = Math.cos(-Y)),
              (G = Math.sin(-Y)),
              (J = se * L - S * G),
              (ee = I * L - K * G),
              (me = ye * L - le * G),
              (W = _e * G + W * L),
              (se = J),
              (I = ee),
              (ye = me)),
            (Y = Hr(I, se)),
            (T = Y * qa),
            Y &&
              ((L = Math.cos(Y)),
              (G = Math.sin(Y)),
              (J = se * L + I * G),
              (ee = ve * L + F * G),
              (I = I * L - se * G),
              (F = F * L - ve * G),
              (se = J),
              (ve = ee)),
            E &&
              Math.abs(E) + Math.abs(T) > 359.9 &&
              ((E = T = 0), (A = 180 - A)),
            (_ = At(Math.sqrt(se * se + I * I + ye * ye))),
            (w = At(Math.sqrt(F * F + pe * pe))),
            (Y = Hr(ve, F)),
            (O = Math.abs(Y) > 2e-4 ? Y * qa : 0),
            (C = W ? 1 / (W < 0 ? -W : W) : 0)),
        i.svg &&
          ((J = l.getAttribute("transform")),
          (i.forceCSS = l.setAttribute("transform", "") || !iy(Jl(l, vt))),
          J && l.setAttribute("transform", J))),
      Math.abs(O) > 90 &&
        Math.abs(O) < 270 &&
        (o
          ? ((_ *= -1), (O += T <= 0 ? 180 : -180), (T += T <= 0 ? 180 : -180))
          : ((w *= -1), (O += O <= 0 ? 180 : -180))),
      (a = a || i.uncache),
      (i.x =
        v -
        ((i.xPercent =
          v &&
          ((!a && i.xPercent) ||
            (Math.round(l.offsetWidth / 2) === Math.round(-v) ? -50 : 0)))
          ? (l.offsetWidth * i.xPercent) / 100
          : 0) +
        f),
      (i.y =
        b -
        ((i.yPercent =
          b &&
          ((!a && i.yPercent) ||
            (Math.round(l.offsetHeight / 2) === Math.round(-b) ? -50 : 0)))
          ? (l.offsetHeight * i.yPercent) / 100
          : 0) +
        f),
      (i.z = x + f),
      (i.scaleX = At(_)),
      (i.scaleY = At(w)),
      (i.rotation = At(T) + m),
      (i.rotationX = At(E) + m),
      (i.rotationY = At(A) + m),
      (i.skewX = O + m),
      (i.skewY = z + m),
      (i.transformPerspective = C + f),
      (i.zOrigin = parseFloat(p.split(" ")[2]) || (!a && i.zOrigin) || 0) &&
        (s[Hn] = Co(p)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = nl.force3D),
      (i.renderTransform = i.svg ? LS : ey ? ay : kS),
      (i.uncache = 0),
      i
    );
  },
  Co = function (l) {
    return (l = l.split(" "))[0] + " " + l[1];
  },
  sh = function (l, a, i) {
    var s = pn(a);
    return At(parseFloat(a) + parseFloat(ma(l, "x", i + "px", s))) + s;
  },
  kS = function (l, a) {
    (a.z = "0px"),
      (a.rotationY = a.rotationX = "0deg"),
      (a.force3D = 0),
      ay(l, a);
  },
  Ba = "0deg",
  lu = "0px",
  Ya = ") ",
  ay = function (l, a) {
    var i = a || this,
      s = i.xPercent,
      o = i.yPercent,
      f = i.x,
      m = i.y,
      g = i.z,
      p = i.rotation,
      v = i.rotationY,
      b = i.rotationX,
      x = i.skewX,
      _ = i.skewY,
      w = i.scaleX,
      T = i.scaleY,
      E = i.transformPerspective,
      A = i.force3D,
      O = i.target,
      z = i.zOrigin,
      C = "",
      U = (A === "auto" && l && l !== 1) || A === !0;
    if (z && (b !== Ba || v !== Ba)) {
      var V = parseFloat(v) * $r,
        q = Math.sin(V),
        Y = Math.cos(V),
        L;
      (V = parseFloat(b) * $r),
        (L = Math.cos(V)),
        (f = sh(O, f, q * L * -z)),
        (m = sh(O, m, -Math.sin(V) * -z)),
        (g = sh(O, g, Y * L * -z + z));
    }
    E !== lu && (C += "perspective(" + E + Ya),
      (s || o) && (C += "translate(" + s + "%, " + o + "%) "),
      (U || f !== lu || m !== lu || g !== lu) &&
        (C +=
          g !== lu || U
            ? "translate3d(" + f + ", " + m + ", " + g + ") "
            : "translate(" + f + ", " + m + Ya),
      p !== Ba && (C += "rotate(" + p + Ya),
      v !== Ba && (C += "rotateY(" + v + Ya),
      b !== Ba && (C += "rotateX(" + b + Ya),
      (x !== Ba || _ !== Ba) && (C += "skew(" + x + ", " + _ + Ya),
      (w !== 1 || T !== 1) && (C += "scale(" + w + ", " + T + Ya),
      (O.style[vt] = C || "translate(0, 0)");
  },
  LS = function (l, a) {
    var i = a || this,
      s = i.xPercent,
      o = i.yPercent,
      f = i.x,
      m = i.y,
      g = i.rotation,
      p = i.skewX,
      v = i.skewY,
      b = i.scaleX,
      x = i.scaleY,
      _ = i.target,
      w = i.xOrigin,
      T = i.yOrigin,
      E = i.xOffset,
      A = i.yOffset,
      O = i.forceCSS,
      z = parseFloat(f),
      C = parseFloat(m),
      U,
      V,
      q,
      Y,
      L;
    (g = parseFloat(g)),
      (p = parseFloat(p)),
      (v = parseFloat(v)),
      v && ((v = parseFloat(v)), (p += v), (g += v)),
      g || p
        ? ((g *= $r),
          (p *= $r),
          (U = Math.cos(g) * b),
          (V = Math.sin(g) * b),
          (q = Math.sin(g - p) * -x),
          (Y = Math.cos(g - p) * x),
          p &&
            ((v *= $r),
            (L = Math.tan(p - v)),
            (L = Math.sqrt(1 + L * L)),
            (q *= L),
            (Y *= L),
            v &&
              ((L = Math.tan(v)),
              (L = Math.sqrt(1 + L * L)),
              (U *= L),
              (V *= L))),
          (U = At(U)),
          (V = At(V)),
          (q = At(q)),
          (Y = At(Y)))
        : ((U = b), (Y = x), (V = q = 0)),
      ((z && !~(f + "").indexOf("px")) || (C && !~(m + "").indexOf("px"))) &&
        ((z = ma(_, "x", f, "px")), (C = ma(_, "y", m, "px"))),
      (w || T || E || A) &&
        ((z = At(z + w - (w * U + T * q) + E)),
        (C = At(C + T - (w * V + T * Y) + A))),
      (s || o) &&
        ((L = _.getBBox()),
        (z = At(z + (s / 100) * L.width)),
        (C = At(C + (o / 100) * L.height))),
      (L =
        "matrix(" + U + "," + V + "," + q + "," + Y + "," + z + "," + C + ")"),
      _.setAttribute("transform", L),
      O && (_.style[vt] = L);
  },
  US = function (l, a, i, s, o) {
    var f = 360,
      m = It(o),
      g = parseFloat(o) * (m && ~o.indexOf("rad") ? qa : 1),
      p = g - s,
      v = s + p + "deg",
      b,
      x;
    return (
      m &&
        ((b = o.split("_")[1]),
        b === "short" &&
          ((p %= f), p !== p % (f / 2) && (p += p < 0 ? f : -360)),
        b === "cw" && p < 0
          ? (p = ((p + f * m1) % f) - ~~(p / f) * f)
          : b === "ccw" && p > 0 && (p = ((p - f * m1) % f) - ~~(p / f) * f)),
      (l._pt = x = new Un(l._pt, a, i, s, p, xS)),
      (x.e = v),
      (x.u = "deg"),
      l._props.push(i),
      x
    );
  },
  b1 = function (l, a) {
    for (var i in a) l[i] = a[i];
    return l;
  },
  HS = function (l, a, i) {
    var s = b1({}, i._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      f = i.style,
      m,
      g,
      p,
      v,
      b,
      x,
      _,
      w;
    s.svg
      ? ((p = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (f[vt] = a),
        (m = Ou(i, 1)),
        er(i, vt),
        i.setAttribute("transform", p))
      : ((p = getComputedStyle(i)[vt]),
        (f[vt] = a),
        (m = Ou(i, 1)),
        (f[vt] = p));
    for (g in Oi)
      (p = s[g]),
        (v = m[g]),
        p !== v &&
          o.indexOf(g) < 0 &&
          ((_ = pn(p)),
          (w = pn(v)),
          (b = _ !== w ? ma(i, g, p, w) : parseFloat(p)),
          (x = parseFloat(v)),
          (l._pt = new Un(l._pt, m, g, b, x - b, Rh)),
          (l._pt.u = w || 0),
          l._props.push(g));
    b1(m, s);
  };
Ln("padding,margin,Width,Radius", function (u, l) {
  var a = "Top",
    i = "Right",
    s = "Bottom",
    o = "Left",
    f = (l < 3 ? [a, i, s, o] : [a + o, a + i, s + i, s + o]).map(function (m) {
      return l < 2 ? u + m : "border" + m + u;
    });
  Ao[l > 1 ? "border" + u : u] = function (m, g, p, v, b) {
    var x, _;
    if (arguments.length < 4)
      return (
        (x = f.map(function (w) {
          return Ti(m, w, p);
        })),
        (_ = x.join(" ")),
        _.split(x[0]).length === 5 ? x[0] : _
      );
    (x = (v + "").split(" ")),
      (_ = {}),
      f.forEach(function (w, T) {
        return (_[w] = x[T] = x[T] || x[((T - 1) / 2) | 0]);
      }),
      m.init(g, _, b);
  };
});
var ry = {
  name: "css",
  register: Ch,
  targetTest: function (l) {
    return l.style && l.nodeType;
  },
  init: function (l, a, i, s, o) {
    var f = this._props,
      m = l.style,
      g = i.vars.startAt,
      p,
      v,
      b,
      x,
      _,
      w,
      T,
      E,
      A,
      O,
      z,
      C,
      U,
      V,
      q,
      Y;
    cm || Ch(),
      (this.styles = this.styles || Iv(l)),
      (Y = this.styles.props),
      (this.tween = i);
    for (T in a)
      if (T !== "autoRound" && ((v = a[T]), !(Jn[T] && Xv(T, a, i, s, l, o)))) {
        if (
          ((_ = typeof v),
          (w = Ao[T]),
          _ === "function" && ((v = v.call(i, s, l, o)), (_ = typeof v)),
          _ === "string" && ~v.indexOf("random(") && (v = Ru(v)),
          w)
        )
          w(this, l, T, v, i) && (q = 1);
        else if (T.substr(0, 2) === "--")
          (p = (getComputedStyle(l).getPropertyValue(T) + "").trim()),
            (v += ""),
            (oa.lastIndex = 0),
            oa.test(p) || ((E = pn(p)), (A = pn(v))),
            A ? E !== A && (p = ma(l, T, p, A) + A) : E && (v += E),
            this.add(m, "setProperty", p, v, s, o, 0, 0, T),
            f.push(T),
            Y.push(T, 0, m[T]);
        else if (_ !== "undefined") {
          if (
            (g && T in g
              ? ((p = typeof g[T] == "function" ? g[T].call(i, s, l, o) : g[T]),
                It(p) && ~p.indexOf("random(") && (p = Ru(p)),
                pn(p + "") ||
                  p === "auto" ||
                  (p += nl.units[T] || pn(Ti(l, T)) || ""),
                (p + "").charAt(1) === "=" && (p = Ti(l, T)))
              : (p = Ti(l, T)),
            (x = parseFloat(p)),
            (O = _ === "string" && v.charAt(1) === "=" && v.substr(0, 2)),
            O && (v = v.substr(2)),
            (b = parseFloat(v)),
            T in Kl &&
              (T === "autoAlpha" &&
                (x === 1 && Ti(l, "visibility") === "hidden" && b && (x = 0),
                Y.push("visibility", 0, m.visibility),
                ra(
                  this,
                  m,
                  "visibility",
                  x ? "inherit" : "hidden",
                  b ? "inherit" : "hidden",
                  !b
                )),
              T !== "scale" &&
                T !== "transform" &&
                ((T = Kl[T]), ~T.indexOf(",") && (T = T.split(",")[0]))),
            (z = T in Oi),
            z)
          ) {
            if (
              (this.styles.save(T),
              C ||
                ((U = l._gsap),
                (U.renderTransform && !a.parseTransform) ||
                  Ou(l, a.parseTransform),
                (V = a.smoothOrigin !== !1 && U.smooth),
                (C = this._pt =
                  new Un(this._pt, m, vt, 0, 1, U.renderTransform, U, 0, -1)),
                (C.dep = 1)),
              T === "scale")
            )
              (this._pt = new Un(
                this._pt,
                U,
                "scaleY",
                U.scaleY,
                (O ? Zr(U.scaleY, O + b) : b) - U.scaleY || 0,
                Rh
              )),
                (this._pt.u = 0),
                f.push("scaleY", T),
                (T += "X");
            else if (T === "transformOrigin") {
              Y.push(Hn, 0, m[Hn]),
                (v = DS(v)),
                U.svg
                  ? Mh(l, v, 0, V, 0, this)
                  : ((A = parseFloat(v.split(" ")[2]) || 0),
                    A !== U.zOrigin && ra(this, U, "zOrigin", U.zOrigin, A),
                    ra(this, m, T, Co(p), Co(v)));
              continue;
            } else if (T === "svgOrigin") {
              Mh(l, v, 1, V, 0, this);
              continue;
            } else if (T in ly) {
              US(this, U, T, x, O ? Zr(x, O + v) : v);
              continue;
            } else if (T === "smoothOrigin") {
              ra(this, U, "smooth", U.smooth, v);
              continue;
            } else if (T === "force3D") {
              U[T] = v;
              continue;
            } else if (T === "transform") {
              HS(this, v, l);
              continue;
            }
          } else T in m || (T = is(T) || T);
          if (z || ((b || b === 0) && (x || x === 0) && !_S.test(v) && T in m))
            (E = (p + "").substr((x + "").length)),
              b || (b = 0),
              (A = pn(v) || (T in nl.units ? nl.units[T] : E)),
              E !== A && (x = ma(l, T, p, A)),
              (this._pt = new Un(
                this._pt,
                z ? U : m,
                T,
                x,
                (O ? Zr(x, O + b) : b) - x,
                !z && (A === "px" || T === "zIndex") && a.autoRound !== !1
                  ? SS
                  : Rh
              )),
              (this._pt.u = A || 0),
              E !== A && A !== "%" && ((this._pt.b = p), (this._pt.r = bS));
          else if (T in m) OS.call(this, l, T, p, O ? O + v : v);
          else if (T in l) this.add(l, T, p || l[T], O ? O + v : v, s, o);
          else if (T !== "parseTransform") {
            em(T, v);
            continue;
          }
          z ||
            (T in m
              ? Y.push(T, 0, m[T])
              : typeof l[T] == "function"
              ? Y.push(T, 2, l[T]())
              : Y.push(T, 1, p || l[T])),
            f.push(T);
        }
      }
    q && $v(this);
  },
  render: function (l, a) {
    if (a.tween._time || !om())
      for (var i = a._pt; i; ) i.r(l, i.d), (i = i._next);
    else a.styles.revert();
  },
  get: Ti,
  aliases: Kl,
  getSetter: function (l, a, i) {
    var s = Kl[a];
    return (
      s && s.indexOf(",") < 0 && (a = s),
      a in Oi && a !== Hn && (l._gsap.x || Ti(l, "x"))
        ? i && h1 === i
          ? a === "scale"
            ? ES
            : wS
          : (h1 = i || {}) && (a === "scale" ? NS : RS)
        : l.style && !Jh(l.style[a])
        ? jS
        : ~a.indexOf("-")
        ? TS
        : sm(l, a)
    );
  },
  core: { _removeProperty: er, _getMatrix: dm },
};
Bn.utils.checkPrefix = is;
Bn.core.getStyleSaver = Iv;
(function (u, l, a, i) {
  var s = Ln(u + "," + l + "," + a, function (o) {
    Oi[o] = 1;
  });
  Ln(l, function (o) {
    (nl.units[o] = "deg"), (ly[o] = 1);
  }),
    (Kl[s[13]] = u + "," + l),
    Ln(i, function (o) {
      var f = o.split(":");
      Kl[f[1]] = s[f[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Ln(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (u) {
    nl.units[u] = "px";
  }
);
Bn.registerPlugin(ry);
var ne = Bn.registerPlugin(ry) || Bn;
ne.core.Tween;
function BS(u, l) {
  for (var a = 0; a < l.length; a++) {
    var i = l[a];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(u, i.key, i);
  }
}
function YS(u, l, a) {
  return l && BS(u.prototype, l), u;
}
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ln,
  vo,
  el,
  sa,
  ua,
  Fr,
  sy,
  Xa,
  gu,
  uy,
  Ei,
  Ll,
  cy,
  oy = function () {
    return (
      ln ||
      (typeof window < "u" && (ln = window.gsap) && ln.registerPlugin && ln)
    );
  },
  fy = 1,
  Qr = [],
  Oe = [],
  Wl = [],
  vu = Date.now,
  Oh = function (l, a) {
    return a;
  },
  qS = function () {
    var l = gu.core,
      a = l.bridge || {},
      i = l._scrollers,
      s = l._proxies;
    i.push.apply(i, Oe),
      s.push.apply(s, Wl),
      (Oe = i),
      (Wl = s),
      (Oh = function (f, m) {
        return a[f](m);
      });
  },
  fa = function (l, a) {
    return ~Wl.indexOf(l) && Wl[Wl.indexOf(l) + 1][a];
  },
  yu = function (l) {
    return !!~uy.indexOf(l);
  },
  wn = function (l, a, i, s, o) {
    return l.addEventListener(a, i, { passive: s !== !1, capture: !!o });
  },
  Tn = function (l, a, i, s) {
    return l.removeEventListener(a, i, !!s);
  },
  Jc = "scrollLeft",
  Wc = "scrollTop",
  Dh = function () {
    return (Ei && Ei.isPressed) || Oe.cache++;
  },
  Mo = function (l, a) {
    var i = function s(o) {
      if (o || o === 0) {
        fy && (el.history.scrollRestoration = "manual");
        var f = Ei && Ei.isPressed;
        (o = s.v = Math.round(o) || (Ei && Ei.iOS ? 1 : 0)),
          l(o),
          (s.cacheID = Oe.cache),
          f && Oh("ss", o);
      } else
        (a || Oe.cache !== s.cacheID || Oh("ref")) &&
          ((s.cacheID = Oe.cache), (s.v = l()));
      return s.v + s.offset;
    };
    return (i.offset = 0), l && i;
  },
  Cn = {
    s: Jc,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Mo(function (u) {
      return arguments.length
        ? el.scrollTo(u, Qt.sc())
        : el.pageXOffset || sa[Jc] || ua[Jc] || Fr[Jc] || 0;
    }),
  },
  Qt = {
    s: Wc,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Cn,
    sc: Mo(function (u) {
      return arguments.length
        ? el.scrollTo(Cn.sc(), u)
        : el.pageYOffset || sa[Wc] || ua[Wc] || Fr[Wc] || 0;
    }),
  },
  zn = function (l, a) {
    return (
      ((a && a._ctx && a._ctx.selector) || ln.utils.toArray)(l)[0] ||
      (typeof l == "string" && ln.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", l)
        : null)
    );
  },
  pa = function (l, a) {
    var i = a.s,
      s = a.sc;
    yu(l) && (l = sa.scrollingElement || ua);
    var o = Oe.indexOf(l),
      f = s === Qt.sc ? 1 : 2;
    !~o && (o = Oe.push(l) - 1), Oe[o + f] || wn(l, "scroll", Dh);
    var m = Oe[o + f],
      g =
        m ||
        (Oe[o + f] =
          Mo(fa(l, i), !0) ||
          (yu(l)
            ? s
            : Mo(function (p) {
                return arguments.length ? (l[i] = p) : l[i];
              })));
    return (
      (g.target = l),
      m || (g.smooth = ln.getProperty(l, "scrollBehavior") === "smooth"),
      g
    );
  },
  zh = function (l, a, i) {
    var s = l,
      o = l,
      f = vu(),
      m = f,
      g = a || 50,
      p = Math.max(500, g * 3),
      v = function (w, T) {
        var E = vu();
        T || E - f > g
          ? ((o = s), (s = w), (m = f), (f = E))
          : i
          ? (s += w)
          : (s = o + ((w - o) / (E - m)) * (f - m));
      },
      b = function () {
        (o = s = i ? 0 : s), (m = f = 0);
      },
      x = function (w) {
        var T = m,
          E = o,
          A = vu();
        return (
          (w || w === 0) && w !== s && v(w),
          f === m || A - m > p
            ? 0
            : ((s + (i ? E : -E)) / ((i ? A : f) - T)) * 1e3
        );
      };
    return { update: v, reset: b, getVelocity: x };
  },
  iu = function (l, a) {
    return (
      a && !l._gsapAllow && l.preventDefault(),
      l.changedTouches ? l.changedTouches[0] : l
    );
  },
  S1 = function (l) {
    var a = Math.max.apply(Math, l),
      i = Math.min.apply(Math, l);
    return Math.abs(a) >= Math.abs(i) ? a : i;
  },
  dy = function () {
    (gu = ln.core.globals().ScrollTrigger), gu && gu.core && qS();
  },
  hy = function (l) {
    return (
      (ln = l || oy()),
      !vo &&
        ln &&
        typeof document < "u" &&
        document.body &&
        ((el = window),
        (sa = document),
        (ua = sa.documentElement),
        (Fr = sa.body),
        (uy = [el, sa, ua, Fr]),
        ln.utils.clamp,
        (cy = ln.core.context || function () {}),
        (Xa = "onpointerenter" in Fr ? "pointer" : "mouse"),
        (sy = Ct.isTouch =
          el.matchMedia &&
          el.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in el ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Ll = Ct.eventTypes =
          (
            "ontouchstart" in ua
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ua
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (fy = 0);
        }, 500),
        dy(),
        (vo = 1)),
      vo
    );
  };
Cn.op = Qt;
Oe.cache = 0;
var Ct = (function () {
  function u(a) {
    this.init(a);
  }
  var l = u.prototype;
  return (
    (l.init = function (i) {
      vo || hy(ln) || console.warn("Please gsap.registerPlugin(Observer)"),
        gu || dy();
      var s = i.tolerance,
        o = i.dragMinimum,
        f = i.type,
        m = i.target,
        g = i.lineHeight,
        p = i.debounce,
        v = i.preventDefault,
        b = i.onStop,
        x = i.onStopDelay,
        _ = i.ignore,
        w = i.wheelSpeed,
        T = i.event,
        E = i.onDragStart,
        A = i.onDragEnd,
        O = i.onDrag,
        z = i.onPress,
        C = i.onRelease,
        U = i.onRight,
        V = i.onLeft,
        q = i.onUp,
        Y = i.onDown,
        L = i.onChangeX,
        G = i.onChangeY,
        se = i.onChange,
        I = i.onToggleX,
        ye = i.onToggleY,
        _e = i.onHover,
        ve = i.onHoverEnd,
        F = i.onMove,
        J = i.ignoreCheck,
        ee = i.isNormalizer,
        me = i.onGestureStart,
        S = i.onGestureEnd,
        K = i.onWheel,
        le = i.onEnable,
        re = i.onDisable,
        W = i.onClick,
        pe = i.scrollSpeed,
        oe = i.capture,
        He = i.allowClicks,
        xe = i.lockAxis,
        De = i.onLockAxis;
      (this.target = m = zn(m) || ua),
        (this.vars = i),
        _ && (_ = ln.utils.toArray(_)),
        (s = s || 1e-9),
        (o = o || 0),
        (w = w || 1),
        (pe = pe || 1),
        (f = f || "wheel,touch,pointer"),
        (p = p !== !1),
        g || (g = parseFloat(el.getComputedStyle(Fr).lineHeight) || 22);
      var Ve,
        nt,
        Mt,
        we,
        lt,
        Yt,
        Ot,
        X = this,
        Zt = 0,
        Yn = 0,
        al = i.passive || (!v && i.passive !== !1),
        st = pa(m, Cn),
        Nl = pa(m, Qt),
        Ul = st(),
        Kt = Nl(),
        Dt =
          ~f.indexOf("touch") &&
          !~f.indexOf("pointer") &&
          Ll[0] === "pointerdown",
        Rl = yu(m),
        ot = m.ownerDocument || sa,
        rn = [0, 0, 0],
        Mn = [0, 0, 0],
        rl = 0,
        va = function () {
          return (rl = vu());
        },
        _t = function (he, ze) {
          return (
            ((X.event = he) && _ && ~_.indexOf(he.target)) ||
            (ze && Dt && he.pointerType !== "touch") ||
            (J && J(he, ze))
          );
        },
        Hl = function () {
          X._vx.reset(), X._vy.reset(), nt.pause(), b && b(X);
        },
        dt = function () {
          var he = (X.deltaX = S1(rn)),
            ze = (X.deltaY = S1(Mn)),
            te = Math.abs(he) >= s,
            be = Math.abs(ze) >= s;
          se && (te || be) && se(X, he, ze, rn, Mn),
            te &&
              (U && X.deltaX > 0 && U(X),
              V && X.deltaX < 0 && V(X),
              L && L(X),
              I && X.deltaX < 0 != Zt < 0 && I(X),
              (Zt = X.deltaX),
              (rn[0] = rn[1] = rn[2] = 0)),
            be &&
              (Y && X.deltaY > 0 && Y(X),
              q && X.deltaY < 0 && q(X),
              G && G(X),
              ye && X.deltaY < 0 != Yn < 0 && ye(X),
              (Yn = X.deltaY),
              (Mn[0] = Mn[1] = Mn[2] = 0)),
            (we || Mt) &&
              (F && F(X),
              Mt && (E && Mt === 1 && E(X), O && O(X), (Mt = 0)),
              (we = !1)),
            Yt && !(Yt = !1) && De && De(X),
            lt && (K(X), (lt = !1)),
            (Ve = 0);
        },
        Di = function (he, ze, te) {
          (rn[te] += he),
            (Mn[te] += ze),
            X._vx.update(he),
            X._vy.update(ze),
            p ? Ve || (Ve = requestAnimationFrame(dt)) : dt();
        },
        xn = function (he, ze) {
          xe &&
            !Ot &&
            ((X.axis = Ot = Math.abs(he) > Math.abs(ze) ? "x" : "y"),
            (Yt = !0)),
            Ot !== "y" && ((rn[2] += he), X._vx.update(he, !0)),
            Ot !== "x" && ((Mn[2] += ze), X._vy.update(ze, !0)),
            p ? Ve || (Ve = requestAnimationFrame(dt)) : dt();
        },
        xt = function (he) {
          if (!_t(he, 1)) {
            he = iu(he, v);
            var ze = he.clientX,
              te = he.clientY,
              be = ze - X.x,
              fe = te - X.y,
              Se = X.isDragging;
            (X.x = ze),
              (X.y = te),
              (Se ||
                ((be || fe) &&
                  (Math.abs(X.startX - ze) >= o ||
                    Math.abs(X.startY - te) >= o))) &&
                ((Mt = Se ? 2 : 1), Se || (X.isDragging = !0), xn(be, fe));
          }
        },
        li = (X.onPress = function (je) {
          _t(je, 1) ||
            (je && je.button) ||
            ((X.axis = Ot = null),
            nt.pause(),
            (X.isPressed = !0),
            (je = iu(je)),
            (Zt = Yn = 0),
            (X.startX = X.x = je.clientX),
            (X.startY = X.y = je.clientY),
            X._vx.reset(),
            X._vy.reset(),
            wn(ee ? m : ot, Ll[1], xt, al, !0),
            (X.deltaX = X.deltaY = 0),
            z && z(X));
        }),
        Ne = (X.onRelease = function (je) {
          if (!_t(je, 1)) {
            Tn(ee ? m : ot, Ll[1], xt, !0);
            var he = !isNaN(X.y - X.startY),
              ze = X.isDragging,
              te =
                ze &&
                (Math.abs(X.x - X.startX) > 3 || Math.abs(X.y - X.startY) > 3),
              be = iu(je);
            !te &&
              he &&
              (X._vx.reset(),
              X._vy.reset(),
              v &&
                He &&
                ln.delayedCall(0.08, function () {
                  if (vu() - rl > 300 && !je.defaultPrevented) {
                    if (je.target.click) je.target.click();
                    else if (ot.createEvent) {
                      var fe = ot.createEvent("MouseEvents");
                      fe.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        el,
                        1,
                        be.screenX,
                        be.screenY,
                        be.clientX,
                        be.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        je.target.dispatchEvent(fe);
                    }
                  }
                })),
              (X.isDragging = X.isGesturing = X.isPressed = !1),
              b && ze && !ee && nt.restart(!0),
              Mt && dt(),
              A && ze && A(X),
              C && C(X, te);
          }
        }),
        ii = function (he) {
          return (
            he.touches &&
            he.touches.length > 1 &&
            (X.isGesturing = !0) &&
            me(he, X.isDragging)
          );
        },
        sn = function () {
          return (X.isGesturing = !1) || S(X);
        },
        un = function (he) {
          if (!_t(he)) {
            var ze = st(),
              te = Nl();
            Di((ze - Ul) * pe, (te - Kt) * pe, 1),
              (Ul = ze),
              (Kt = te),
              b && nt.restart(!0);
          }
        },
        qt = function (he) {
          if (!_t(he)) {
            (he = iu(he, v)), K && (lt = !0);
            var ze =
              (he.deltaMode === 1
                ? g
                : he.deltaMode === 2
                ? el.innerHeight
                : 1) * w;
            Di(he.deltaX * ze, he.deltaY * ze, 0), b && !ee && nt.restart(!0);
          }
        },
        sl = function (he) {
          if (!_t(he)) {
            var ze = he.clientX,
              te = he.clientY,
              be = ze - X.x,
              fe = te - X.y;
            (X.x = ze),
              (X.y = te),
              (we = !0),
              b && nt.restart(!0),
              (be || fe) && xn(be, fe);
          }
        },
        ul = function (he) {
          (X.event = he), _e(X);
        },
        Al = function (he) {
          (X.event = he), ve(X);
        },
        zi = function (he) {
          return _t(he) || (iu(he, v) && W(X));
        };
      (nt = X._dc = ln.delayedCall(x || 0.25, Hl).pause()),
        (X.deltaX = X.deltaY = 0),
        (X._vx = zh(0, 50, !0)),
        (X._vy = zh(0, 50, !0)),
        (X.scrollX = st),
        (X.scrollY = Nl),
        (X.isDragging = X.isGesturing = X.isPressed = !1),
        cy(this),
        (X.enable = function (je) {
          return (
            X.isEnabled ||
              (wn(Rl ? ot : m, "scroll", Dh),
              f.indexOf("scroll") >= 0 && wn(Rl ? ot : m, "scroll", un, al, oe),
              f.indexOf("wheel") >= 0 && wn(m, "wheel", qt, al, oe),
              ((f.indexOf("touch") >= 0 && sy) || f.indexOf("pointer") >= 0) &&
                (wn(m, Ll[0], li, al, oe),
                wn(ot, Ll[2], Ne),
                wn(ot, Ll[3], Ne),
                He && wn(m, "click", va, !0, !0),
                W && wn(m, "click", zi),
                me && wn(ot, "gesturestart", ii),
                S && wn(ot, "gestureend", sn),
                _e && wn(m, Xa + "enter", ul),
                ve && wn(m, Xa + "leave", Al),
                F && wn(m, Xa + "move", sl)),
              (X.isEnabled = !0),
              (X.isDragging = X.isGesturing = X.isPressed = we = Mt = !1),
              X._vx.reset(),
              X._vy.reset(),
              (Ul = st()),
              (Kt = Nl()),
              je && je.type && li(je),
              le && le(X)),
            X
          );
        }),
        (X.disable = function () {
          X.isEnabled &&
            (Qr.filter(function (je) {
              return je !== X && yu(je.target);
            }).length || Tn(Rl ? ot : m, "scroll", Dh),
            X.isPressed &&
              (X._vx.reset(), X._vy.reset(), Tn(ee ? m : ot, Ll[1], xt, !0)),
            Tn(Rl ? ot : m, "scroll", un, oe),
            Tn(m, "wheel", qt, oe),
            Tn(m, Ll[0], li, oe),
            Tn(ot, Ll[2], Ne),
            Tn(ot, Ll[3], Ne),
            Tn(m, "click", va, !0),
            Tn(m, "click", zi),
            Tn(ot, "gesturestart", ii),
            Tn(ot, "gestureend", sn),
            Tn(m, Xa + "enter", ul),
            Tn(m, Xa + "leave", Al),
            Tn(m, Xa + "move", sl),
            (X.isEnabled = X.isPressed = X.isDragging = !1),
            re && re(X));
        }),
        (X.kill = X.revert =
          function () {
            X.disable();
            var je = Qr.indexOf(X);
            je >= 0 && Qr.splice(je, 1), Ei === X && (Ei = 0);
          }),
        Qr.push(X),
        ee && yu(m) && (Ei = X),
        X.enable(T);
    }),
    YS(u, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    u
  );
})();
Ct.version = "3.12.7";
Ct.create = function (u) {
  return new Ct(u);
};
Ct.register = hy;
Ct.getAll = function () {
  return Qr.slice();
};
Ct.getById = function (u) {
  return Qr.filter(function (l) {
    return l.vars.id === u;
  })[0];
};
oy() && ln.registerPlugin(Ct);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ie,
  qr,
  Me,
  rt,
  Wn,
  Je,
  hm,
  Oo,
  Du,
  _u,
  uu,
  Ic,
  hn,
  qo,
  kh,
  Nn,
  j1,
  T1,
  Xr,
  my,
  uh,
  py,
  En,
  Lh,
  gy,
  vy,
  la,
  Uh,
  mm,
  Pr,
  pm,
  Do,
  Hh,
  ch,
  eo = 1,
  mn = Date.now,
  oh = mn(),
  El = 0,
  cu = 0,
  w1 = function (l, a, i) {
    var s = Pn(l) && (l.substr(0, 6) === "clamp(" || l.indexOf("max") > -1);
    return (i["_" + a + "Clamp"] = s), s ? l.substr(6, l.length - 7) : l;
  },
  E1 = function (l, a) {
    return a && (!Pn(l) || l.substr(0, 6) !== "clamp(")
      ? "clamp(" + l + ")"
      : l;
  },
  XS = function u() {
    return cu && requestAnimationFrame(u);
  },
  N1 = function () {
    return (qo = 1);
  },
  R1 = function () {
    return (qo = 0);
  },
  Ql = function (l) {
    return l;
  },
  ou = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  yy = function () {
    return typeof window < "u";
  },
  _y = function () {
    return ie || (yy() && (ie = window.gsap) && ie.registerPlugin && ie);
  },
  tr = function (l) {
    return !!~hm.indexOf(l);
  },
  xy = function (l) {
    return (
      (l === "Height" ? pm : Me["inner" + l]) ||
      Wn["client" + l] ||
      Je["client" + l]
    );
  },
  by = function (l) {
    return (
      fa(l, "getBoundingClientRect") ||
      (tr(l)
        ? function () {
            return (So.width = Me.innerWidth), (So.height = pm), So;
          }
        : function () {
            return wi(l);
          })
    );
  },
  GS = function (l, a, i) {
    var s = i.d,
      o = i.d2,
      f = i.a;
    return (f = fa(l, "getBoundingClientRect"))
      ? function () {
          return f()[s];
        }
      : function () {
          return (a ? xy(o) : l["client" + o]) || 0;
        };
  },
  VS = function (l, a) {
    return !a || ~Wl.indexOf(l)
      ? by(l)
      : function () {
          return So;
        };
  },
  $l = function (l, a) {
    var i = a.s,
      s = a.d2,
      o = a.d,
      f = a.a;
    return Math.max(
      0,
      (i = "scroll" + s) && (f = fa(l, i))
        ? f() - by(l)()[o]
        : tr(l)
        ? (Wn[i] || Je[i]) - xy(s)
        : l[i] - l["offset" + s]
    );
  },
  to = function (l, a) {
    for (var i = 0; i < Xr.length; i += 3)
      (!a || ~a.indexOf(Xr[i + 1])) && l(Xr[i], Xr[i + 1], Xr[i + 2]);
  },
  Pn = function (l) {
    return typeof l == "string";
  },
  gn = function (l) {
    return typeof l == "function";
  },
  fu = function (l) {
    return typeof l == "number";
  },
  Ga = function (l) {
    return typeof l == "object";
  },
  au = function (l, a, i) {
    return l && l.progress(a ? 0 : 1) && i && l.pause();
  },
  fh = function (l, a) {
    if (l.enabled) {
      var i = l._ctx
        ? l._ctx.add(function () {
            return a(l);
          })
        : a(l);
      i && i.totalTime && (l.callbackAnimation = i);
    }
  },
  Br = Math.abs,
  Sy = "left",
  jy = "top",
  gm = "right",
  vm = "bottom",
  Pa = "width",
  Ja = "height",
  xu = "Right",
  bu = "Left",
  Su = "Top",
  ju = "Bottom",
  Ut = "padding",
  jl = "margin",
  as = "Width",
  ym = "Height",
  Vt = "px",
  Tl = function (l) {
    return Me.getComputedStyle(l);
  },
  QS = function (l) {
    var a = Tl(l).position;
    l.style.position = a === "absolute" || a === "fixed" ? a : "relative";
  },
  A1 = function (l, a) {
    for (var i in a) i in l || (l[i] = a[i]);
    return l;
  },
  wi = function (l, a) {
    var i =
        a &&
        Tl(l)[kh] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ie
          .to(l, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      s = l.getBoundingClientRect();
    return i && i.progress(0).kill(), s;
  },
  zo = function (l, a) {
    var i = a.d2;
    return l["offset" + i] || l["client" + i] || 0;
  },
  Ty = function (l) {
    var a = [],
      i = l.labels,
      s = l.duration(),
      o;
    for (o in i) a.push(i[o] / s);
    return a;
  },
  ZS = function (l) {
    return function (a) {
      return ie.utils.snap(Ty(l), a);
    };
  },
  _m = function (l) {
    var a = ie.utils.snap(l),
      i =
        Array.isArray(l) &&
        l.slice(0).sort(function (s, o) {
          return s - o;
        });
    return i
      ? function (s, o, f) {
          f === void 0 && (f = 0.001);
          var m;
          if (!o) return a(s);
          if (o > 0) {
            for (s -= f, m = 0; m < i.length; m++) if (i[m] >= s) return i[m];
            return i[m - 1];
          } else for (m = i.length, s += f; m--; ) if (i[m] <= s) return i[m];
          return i[0];
        }
      : function (s, o, f) {
          f === void 0 && (f = 0.001);
          var m = a(s);
          return !o || Math.abs(m - s) < f || m - s < 0 == o < 0
            ? m
            : a(o < 0 ? s - l : s + l);
        };
  },
  KS = function (l) {
    return function (a, i) {
      return _m(Ty(l))(a, i.direction);
    };
  },
  no = function (l, a, i, s) {
    return i.split(",").forEach(function (o) {
      return l(a, o, s);
    });
  },
  Wt = function (l, a, i, s, o) {
    return l.addEventListener(a, i, { passive: !s, capture: !!o });
  },
  Jt = function (l, a, i, s) {
    return l.removeEventListener(a, i, !!s);
  },
  lo = function (l, a, i) {
    (i = i && i.wheelHandler), i && (l(a, "wheel", i), l(a, "touchmove", i));
  },
  C1 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  io = { toggleActions: "play", anticipatePin: 0 },
  ko = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  yo = function (l, a) {
    if (Pn(l)) {
      var i = l.indexOf("="),
        s = ~i ? +(l.charAt(i - 1) + 1) * parseFloat(l.substr(i + 1)) : 0;
      ~i && (l.indexOf("%") > i && (s *= a / 100), (l = l.substr(0, i - 1))),
        (l =
          s +
          (l in ko
            ? ko[l] * a
            : ~l.indexOf("%")
            ? (parseFloat(l) * a) / 100
            : parseFloat(l) || 0));
    }
    return l;
  },
  ao = function (l, a, i, s, o, f, m, g) {
    var p = o.startColor,
      v = o.endColor,
      b = o.fontSize,
      x = o.indent,
      _ = o.fontWeight,
      w = rt.createElement("div"),
      T = tr(i) || fa(i, "pinType") === "fixed",
      E = l.indexOf("scroller") !== -1,
      A = T ? Je : i,
      O = l.indexOf("start") !== -1,
      z = O ? p : v,
      C =
        "border-color:" +
        z +
        ";font-size:" +
        b +
        ";color:" +
        z +
        ";font-weight:" +
        _ +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (C += "position:" + ((E || g) && T ? "fixed;" : "absolute;")),
      (E || g || !T) &&
        (C += (s === Qt ? gm : vm) + ":" + (f + parseFloat(x)) + "px;"),
      m &&
        (C +=
          "box-sizing:border-box;text-align:left;width:" +
          m.offsetWidth +
          "px;"),
      (w._isStart = O),
      w.setAttribute("class", "gsap-marker-" + l + (a ? " marker-" + a : "")),
      (w.style.cssText = C),
      (w.innerText = a || a === 0 ? l + "-" + a : l),
      A.children[0] ? A.insertBefore(w, A.children[0]) : A.appendChild(w),
      (w._offset = w["offset" + s.op.d2]),
      _o(w, 0, s, O),
      w
    );
  },
  _o = function (l, a, i, s) {
    var o = { display: "block" },
      f = i[s ? "os2" : "p2"],
      m = i[s ? "p2" : "os2"];
    (l._isFlipped = s),
      (o[i.a + "Percent"] = s ? -100 : 0),
      (o[i.a] = s ? "1px" : 0),
      (o["border" + f + as] = 1),
      (o["border" + m + as] = 0),
      (o[i.p] = a + "px"),
      ie.set(l, o);
  },
  Ae = [],
  Bh = {},
  zu,
  M1 = function () {
    return mn() - El > 34 && (zu || (zu = requestAnimationFrame(Ri)));
  },
  Yr = function () {
    (!En || !En.isPressed || En.startX > Je.clientWidth) &&
      (Oe.cache++,
      En ? zu || (zu = requestAnimationFrame(Ri)) : Ri(),
      El || lr("scrollStart"),
      (El = mn()));
  },
  dh = function () {
    (vy = Me.innerWidth), (gy = Me.innerHeight);
  },
  du = function (l) {
    Oe.cache++,
      (l === !0 ||
        (!hn &&
          !py &&
          !rt.fullscreenElement &&
          !rt.webkitFullscreenElement &&
          (!Lh ||
            vy !== Me.innerWidth ||
            Math.abs(Me.innerHeight - gy) > Me.innerHeight * 0.25))) &&
        Oo.restart(!0);
  },
  nr = {},
  $S = [],
  wy = function u() {
    return Jt(de, "scrollEnd", u) || Qa(!0);
  },
  lr = function (l) {
    return (
      (nr[l] &&
        nr[l].map(function (a) {
          return a();
        })) ||
      $S
    );
  },
  Fn = [],
  Ey = function (l) {
    for (var a = 0; a < Fn.length; a += 5)
      (!l || (Fn[a + 4] && Fn[a + 4].query === l)) &&
        ((Fn[a].style.cssText = Fn[a + 1]),
        Fn[a].getBBox && Fn[a].setAttribute("transform", Fn[a + 2] || ""),
        (Fn[a + 3].uncache = 1));
  },
  xm = function (l, a) {
    var i;
    for (Nn = 0; Nn < Ae.length; Nn++)
      (i = Ae[Nn]),
        i && (!a || i._ctx === a) && (l ? i.kill(1) : i.revert(!0, !0));
    (Do = !0), a && Ey(a), a || lr("revert");
  },
  Ny = function (l, a) {
    Oe.cache++,
      (a || !Rn) &&
        Oe.forEach(function (i) {
          return gn(i) && i.cacheID++ && (i.rec = 0);
        }),
      Pn(l) && (Me.history.scrollRestoration = mm = l);
  },
  Rn,
  Wa = 0,
  O1,
  FS = function () {
    if (O1 !== Wa) {
      var l = (O1 = Wa);
      requestAnimationFrame(function () {
        return l === Wa && Qa(!0);
      });
    }
  },
  Ry = function () {
    Je.appendChild(Pr),
      (pm = (!En && Pr.offsetHeight) || Me.innerHeight),
      Je.removeChild(Pr);
  },
  D1 = function (l) {
    return Du(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (a) {
      return (a.style.display = l ? "none" : "block");
    });
  },
  Qa = function (l, a) {
    if (
      ((Wn = rt.documentElement),
      (Je = rt.body),
      (hm = [Me, rt, Wn, Je]),
      El && !l && !Do)
    ) {
      Wt(de, "scrollEnd", wy);
      return;
    }
    Ry(),
      (Rn = de.isRefreshing = !0),
      Oe.forEach(function (s) {
        return gn(s) && ++s.cacheID && (s.rec = s());
      });
    var i = lr("refreshInit");
    my && de.sort(),
      a || xm(),
      Oe.forEach(function (s) {
        gn(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"), s(0));
      }),
      Ae.slice(0).forEach(function (s) {
        return s.refresh();
      }),
      (Do = !1),
      Ae.forEach(function (s) {
        if (s._subPinOffset && s.pin) {
          var o = s.vars.horizontal ? "offsetWidth" : "offsetHeight",
            f = s.pin[o];
          s.revert(!0, 1), s.adjustPinSpacing(s.pin[o] - f), s.refresh();
        }
      }),
      (Hh = 1),
      D1(!0),
      Ae.forEach(function (s) {
        var o = $l(s.scroller, s._dir),
          f = s.vars.end === "max" || (s._endClamp && s.end > o),
          m = s._startClamp && s.start >= o;
        (f || m) &&
          s.setPositions(
            m ? o - 1 : s.start,
            f ? Math.max(m ? o : s.start + 1, o) : s.end,
            !0
          );
      }),
      D1(!1),
      (Hh = 0),
      i.forEach(function (s) {
        return s && s.render && s.render(-1);
      }),
      Oe.forEach(function (s) {
        gn(s) &&
          (s.smooth &&
            requestAnimationFrame(function () {
              return (s.target.style.scrollBehavior = "smooth");
            }),
          s.rec && s(s.rec));
      }),
      Ny(mm, 1),
      Oo.pause(),
      Wa++,
      (Rn = 2),
      Ri(2),
      Ae.forEach(function (s) {
        return gn(s.vars.onRefresh) && s.vars.onRefresh(s);
      }),
      (Rn = de.isRefreshing = !1),
      lr("refresh");
  },
  Yh = 0,
  xo = 1,
  Tu,
  Ri = function (l) {
    if (l === 2 || (!Rn && !Do)) {
      (de.isUpdating = !0), Tu && Tu.update(0);
      var a = Ae.length,
        i = mn(),
        s = i - oh >= 50,
        o = a && Ae[0].scroll();
      if (
        ((xo = Yh > o ? -1 : 1),
        Rn || (Yh = o),
        s &&
          (El && !qo && i - El > 200 && ((El = 0), lr("scrollEnd")),
          (uu = oh),
          (oh = i)),
        xo < 0)
      ) {
        for (Nn = a; Nn-- > 0; ) Ae[Nn] && Ae[Nn].update(0, s);
        xo = 1;
      } else for (Nn = 0; Nn < a; Nn++) Ae[Nn] && Ae[Nn].update(0, s);
      de.isUpdating = !1;
    }
    zu = 0;
  },
  qh = [
    Sy,
    jy,
    vm,
    gm,
    jl + ju,
    jl + xu,
    jl + Su,
    jl + bu,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  bo = qh.concat([
    Pa,
    Ja,
    "boxSizing",
    "max" + as,
    "max" + ym,
    "position",
    jl,
    Ut,
    Ut + Su,
    Ut + xu,
    Ut + ju,
    Ut + bu,
  ]),
  PS = function (l, a, i) {
    Jr(i);
    var s = l._gsap;
    if (s.spacerIsNative) Jr(s.spacerState);
    else if (l._gsap.swappedIn) {
      var o = a.parentNode;
      o && (o.insertBefore(l, a), o.removeChild(a));
    }
    l._gsap.swappedIn = !1;
  },
  hh = function (l, a, i, s) {
    if (!l._gsap.swappedIn) {
      for (var o = qh.length, f = a.style, m = l.style, g; o--; )
        (g = qh[o]), (f[g] = i[g]);
      (f.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (f.display = "inline-block"),
        (m[vm] = m[gm] = "auto"),
        (f.flexBasis = i.flexBasis || "auto"),
        (f.overflow = "visible"),
        (f.boxSizing = "border-box"),
        (f[Pa] = zo(l, Cn) + Vt),
        (f[Ja] = zo(l, Qt) + Vt),
        (f[Ut] = m[jl] = m[jy] = m[Sy] = "0"),
        Jr(s),
        (m[Pa] = m["max" + as] = i[Pa]),
        (m[Ja] = m["max" + ym] = i[Ja]),
        (m[Ut] = i[Ut]),
        l.parentNode !== a &&
          (l.parentNode.insertBefore(a, l), a.appendChild(l)),
        (l._gsap.swappedIn = !0);
    }
  },
  JS = /([A-Z])/g,
  Jr = function (l) {
    if (l) {
      var a = l.t.style,
        i = l.length,
        s = 0,
        o,
        f;
      for ((l.t._gsap || ie.core.getCache(l.t)).uncache = 1; s < i; s += 2)
        (f = l[s + 1]),
          (o = l[s]),
          f
            ? (a[o] = f)
            : a[o] && a.removeProperty(o.replace(JS, "-$1").toLowerCase());
    }
  },
  ro = function (l) {
    for (var a = bo.length, i = l.style, s = [], o = 0; o < a; o++)
      s.push(bo[o], i[bo[o]]);
    return (s.t = l), s;
  },
  WS = function (l, a, i) {
    for (var s = [], o = l.length, f = i ? 8 : 0, m; f < o; f += 2)
      (m = l[f]), s.push(m, m in a ? a[m] : l[f + 1]);
    return (s.t = l.t), s;
  },
  So = { left: 0, top: 0 },
  z1 = function (l, a, i, s, o, f, m, g, p, v, b, x, _, w) {
    gn(l) && (l = l(g)),
      Pn(l) &&
        l.substr(0, 3) === "max" &&
        (l = x + (l.charAt(4) === "=" ? yo("0" + l.substr(3), i) : 0));
    var T = _ ? _.time() : 0,
      E,
      A,
      O;
    if ((_ && _.seek(0), isNaN(l) || (l = +l), fu(l)))
      _ &&
        (l = ie.utils.mapRange(
          _.scrollTrigger.start,
          _.scrollTrigger.end,
          0,
          x,
          l
        )),
        m && _o(m, i, s, !0);
    else {
      gn(a) && (a = a(g));
      var z = (l || "0").split(" "),
        C,
        U,
        V,
        q;
      (O = zn(a, g) || Je),
        (C = wi(O) || {}),
        (!C || (!C.left && !C.top)) &&
          Tl(O).display === "none" &&
          ((q = O.style.display),
          (O.style.display = "block"),
          (C = wi(O)),
          q ? (O.style.display = q) : O.style.removeProperty("display")),
        (U = yo(z[0], C[s.d])),
        (V = yo(z[1] || "0", i)),
        (l = C[s.p] - p[s.p] - v + U + o - V),
        m && _o(m, V, s, i - V < 20 || (m._isStart && V > 20)),
        (i -= i - V);
    }
    if ((w && ((g[w] = l || -0.001), l < 0 && (l = 0)), f)) {
      var Y = l + i,
        L = f._isStart;
      (E = "scroll" + s.d2),
        _o(
          f,
          Y,
          s,
          (L && Y > 20) ||
            (!L && (b ? Math.max(Je[E], Wn[E]) : f.parentNode[E]) <= Y + 1)
        ),
        b &&
          ((p = wi(m)),
          b && (f.style[s.op.p] = p[s.op.p] - s.op.m - f._offset + Vt));
    }
    return (
      _ &&
        O &&
        ((E = wi(O)),
        _.seek(x),
        (A = wi(O)),
        (_._caScrollDist = E[s.p] - A[s.p]),
        (l = (l / _._caScrollDist) * x)),
      _ && _.seek(T),
      _ ? l : Math.round(l)
    );
  },
  IS = /(webkit|moz|length|cssText|inset)/i,
  k1 = function (l, a, i, s) {
    if (l.parentNode !== a) {
      var o = l.style,
        f,
        m;
      if (a === Je) {
        (l._stOrig = o.cssText), (m = Tl(l));
        for (f in m)
          !+f &&
            !IS.test(f) &&
            m[f] &&
            typeof o[f] == "string" &&
            f !== "0" &&
            (o[f] = m[f]);
        (o.top = i), (o.left = s);
      } else o.cssText = l._stOrig;
      (ie.core.getCache(l).uncache = 1), a.appendChild(l);
    }
  },
  Ay = function (l, a, i) {
    var s = a,
      o = s;
    return function (f) {
      var m = Math.round(l());
      return (
        m !== s &&
          m !== o &&
          Math.abs(m - s) > 3 &&
          Math.abs(m - o) > 3 &&
          ((f = m), i && i()),
        (o = s),
        (s = Math.round(f)),
        s
      );
    };
  },
  so = function (l, a, i) {
    var s = {};
    (s[a.p] = "+=" + i), ie.set(l, s);
  },
  L1 = function (l, a) {
    var i = pa(l, a),
      s = "_scroll" + a.p2,
      o = function f(m, g, p, v, b) {
        var x = f.tween,
          _ = g.onComplete,
          w = {};
        p = p || i();
        var T = Ay(i, p, function () {
          x.kill(), (f.tween = 0);
        });
        return (
          (b = (v && b) || 0),
          (v = v || m - p),
          x && x.kill(),
          (g[s] = m),
          (g.inherit = !1),
          (g.modifiers = w),
          (w[s] = function () {
            return T(p + v * x.ratio + b * x.ratio * x.ratio);
          }),
          (g.onUpdate = function () {
            Oe.cache++, f.tween && Ri();
          }),
          (g.onComplete = function () {
            (f.tween = 0), _ && _.call(x);
          }),
          (x = f.tween = ie.to(l, g)),
          x
        );
      };
    return (
      (l[s] = i),
      (i.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      Wt(l, "wheel", i.wheelHandler),
      de.isTouch && Wt(l, "touchmove", i.wheelHandler),
      o
    );
  },
  de = (function () {
    function u(a, i) {
      qr ||
        u.register(ie) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Uh(this),
        this.init(a, i);
    }
    var l = u.prototype;
    return (
      (l.init = function (i, s) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !cu)
        ) {
          this.update = this.refresh = this.kill = Ql;
          return;
        }
        i = A1(Pn(i) || fu(i) || i.nodeType ? { trigger: i } : i, io);
        var o = i,
          f = o.onUpdate,
          m = o.toggleClass,
          g = o.id,
          p = o.onToggle,
          v = o.onRefresh,
          b = o.scrub,
          x = o.trigger,
          _ = o.pin,
          w = o.pinSpacing,
          T = o.invalidateOnRefresh,
          E = o.anticipatePin,
          A = o.onScrubComplete,
          O = o.onSnapComplete,
          z = o.once,
          C = o.snap,
          U = o.pinReparent,
          V = o.pinSpacer,
          q = o.containerAnimation,
          Y = o.fastScrollEnd,
          L = o.preventOverlaps,
          G =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Cn
              : Qt,
          se = !b && b !== 0,
          I = zn(i.scroller || Me),
          ye = ie.core.getCache(I),
          _e = tr(I),
          ve =
            ("pinType" in i
              ? i.pinType
              : fa(I, "pinType") || (_e && "fixed")) === "fixed",
          F = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          J = se && i.toggleActions.split(" "),
          ee = "markers" in i ? i.markers : io.markers,
          me = _e ? 0 : parseFloat(Tl(I)["border" + G.p2 + as]) || 0,
          S = this,
          K =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(S);
            },
          le = GS(I, _e, G),
          re = VS(I, _e),
          W = 0,
          pe = 0,
          oe = 0,
          He = pa(I, G),
          xe,
          De,
          Ve,
          nt,
          Mt,
          we,
          lt,
          Yt,
          Ot,
          X,
          Zt,
          Yn,
          al,
          st,
          Nl,
          Ul,
          Kt,
          Dt,
          Rl,
          ot,
          rn,
          Mn,
          rl,
          va,
          _t,
          Hl,
          dt,
          Di,
          xn,
          xt,
          li,
          Ne,
          ii,
          sn,
          un,
          qt,
          sl,
          ul,
          Al;
        if (
          ((S._startClamp = S._endClamp = !1),
          (S._dir = G),
          (E *= 45),
          (S.scroller = I),
          (S.scroll = q ? q.time.bind(q) : He),
          (nt = He()),
          (S.vars = i),
          (s = s || i.animation),
          "refreshPriority" in i &&
            ((my = 1), i.refreshPriority === -9999 && (Tu = S)),
          (ye.tweenScroll = ye.tweenScroll || {
            top: L1(I, Qt),
            left: L1(I, Cn),
          }),
          (S.tweenTo = xe = ye.tweenScroll[G.p]),
          (S.scrubDuration = function (te) {
            (ii = fu(te) && te),
              ii
                ? Ne
                  ? Ne.duration(te)
                  : (Ne = ie.to(s, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: ii,
                      paused: !0,
                      onComplete: function () {
                        return A && A(S);
                      },
                    }))
                : (Ne && Ne.progress(1).kill(), (Ne = 0));
          }),
          s &&
            ((s.vars.lazy = !1),
            (s._initted && !S.isReverted) ||
              (s.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                s.duration() &&
                s.render(0, !0, !0)),
            (S.animation = s.pause()),
            (s.scrollTrigger = S),
            S.scrubDuration(b),
            (xt = 0),
            g || (g = s.vars.id)),
          C &&
            ((!Ga(C) || C.push) && (C = { snapTo: C }),
            "scrollBehavior" in Je.style &&
              ie.set(_e ? [Je, Wn] : I, { scrollBehavior: "auto" }),
            Oe.forEach(function (te) {
              return (
                gn(te) &&
                te.target === (_e ? rt.scrollingElement || Wn : I) &&
                (te.smooth = !1)
              );
            }),
            (Ve = gn(C.snapTo)
              ? C.snapTo
              : C.snapTo === "labels"
              ? ZS(s)
              : C.snapTo === "labelsDirectional"
              ? KS(s)
              : C.directional !== !1
              ? function (te, be) {
                  return _m(C.snapTo)(te, mn() - pe < 500 ? 0 : be.direction);
                }
              : ie.utils.snap(C.snapTo)),
            (sn = C.duration || { min: 0.1, max: 2 }),
            (sn = Ga(sn) ? _u(sn.min, sn.max) : _u(sn, sn)),
            (un = ie
              .delayedCall(C.delay || ii / 2 || 0.1, function () {
                var te = He(),
                  be = mn() - pe < 500,
                  fe = xe.tween;
                if (
                  (be || Math.abs(S.getVelocity()) < 10) &&
                  !fe &&
                  !qo &&
                  W !== te
                ) {
                  var Se = (te - we) / st,
                    Et = s && !se ? s.totalProgress() : Se,
                    ke = be ? 0 : ((Et - li) / (mn() - uu)) * 1e3 || 0,
                    Pe = ie.utils.clamp(-Se, 1 - Se, (Br(ke / 2) * ke) / 0.185),
                    Qe = Se + (C.inertia === !1 ? 0 : Pe),
                    Le,
                    $e,
                    Fe = C,
                    qn = Fe.onStart,
                    ut = Fe.onInterrupt,
                    cn = Fe.onComplete;
                  if (
                    ((Le = Ve(Qe, S)),
                    fu(Le) || (Le = Qe),
                    ($e = Math.max(0, Math.round(we + Le * st))),
                    te <= lt && te >= we && $e !== te)
                  ) {
                    if (fe && !fe._initted && fe.data <= Br($e - te)) return;
                    C.inertia === !1 && (Pe = Le - Se),
                      xe(
                        $e,
                        {
                          duration: sn(
                            Br(
                              (Math.max(Br(Qe - Et), Br(Le - Et)) * 0.185) /
                                ke /
                                0.05 || 0
                            )
                          ),
                          ease: C.ease || "power3",
                          data: Br($e - te),
                          onInterrupt: function () {
                            return un.restart(!0) && ut && ut(S);
                          },
                          onComplete: function () {
                            S.update(),
                              (W = He()),
                              s &&
                                !se &&
                                (Ne
                                  ? Ne.resetTo(
                                      "totalProgress",
                                      Le,
                                      s._tTime / s._tDur
                                    )
                                  : s.progress(Le)),
                              (xt = li =
                                s && !se ? s.totalProgress() : S.progress),
                              O && O(S),
                              cn && cn(S);
                          },
                        },
                        te,
                        Pe * st,
                        $e - te - Pe * st
                      ),
                      qn && qn(S, xe.tween);
                  }
                } else S.isActive && W !== te && un.restart(!0);
              })
              .pause())),
          g && (Bh[g] = S),
          (x = S.trigger = zn(x || (_ !== !0 && _))),
          (Al = x && x._gsap && x._gsap.stRevert),
          Al && (Al = Al(S)),
          (_ = _ === !0 ? x : zn(_)),
          Pn(m) && (m = { targets: x, className: m }),
          _ &&
            (w === !1 ||
              w === jl ||
              (w =
                !w &&
                _.parentNode &&
                _.parentNode.style &&
                Tl(_.parentNode).display === "flex"
                  ? !1
                  : Ut),
            (S.pin = _),
            (De = ie.core.getCache(_)),
            De.spacer
              ? (Nl = De.pinState)
              : (V &&
                  ((V = zn(V)),
                  V && !V.nodeType && (V = V.current || V.nativeElement),
                  (De.spacerIsNative = !!V),
                  V && (De.spacerState = ro(V))),
                (De.spacer = Dt = V || rt.createElement("div")),
                Dt.classList.add("pin-spacer"),
                g && Dt.classList.add("pin-spacer-" + g),
                (De.pinState = Nl = ro(_))),
            i.force3D !== !1 && ie.set(_, { force3D: !0 }),
            (S.spacer = Dt = De.spacer),
            (xn = Tl(_)),
            (va = xn[w + G.os2]),
            (ot = ie.getProperty(_)),
            (rn = ie.quickSetter(_, G.a, Vt)),
            hh(_, Dt, xn),
            (Kt = ro(_))),
          ee)
        ) {
          (Yn = Ga(ee) ? A1(ee, C1) : C1),
            (X = ao("scroller-start", g, I, G, Yn, 0)),
            (Zt = ao("scroller-end", g, I, G, Yn, 0, X)),
            (Rl = X["offset" + G.op.d2]);
          var zi = zn(fa(I, "content") || I);
          (Yt = this.markerStart = ao("start", g, zi, G, Yn, Rl, 0, q)),
            (Ot = this.markerEnd = ao("end", g, zi, G, Yn, Rl, 0, q)),
            q && (ul = ie.quickSetter([Yt, Ot], G.a, Vt)),
            !ve &&
              !(Wl.length && fa(I, "fixedMarkers") === !0) &&
              (QS(_e ? Je : I),
              ie.set([X, Zt], { force3D: !0 }),
              (Hl = ie.quickSetter(X, G.a, Vt)),
              (Di = ie.quickSetter(Zt, G.a, Vt)));
        }
        if (q) {
          var je = q.vars.onUpdate,
            he = q.vars.onUpdateParams;
          q.eventCallback("onUpdate", function () {
            S.update(0, 0, 1), je && je.apply(q, he || []);
          });
        }
        if (
          ((S.previous = function () {
            return Ae[Ae.indexOf(S) - 1];
          }),
          (S.next = function () {
            return Ae[Ae.indexOf(S) + 1];
          }),
          (S.revert = function (te, be) {
            if (!be) return S.kill(!0);
            var fe = te !== !1 || !S.enabled,
              Se = hn;
            fe !== S.isReverted &&
              (fe &&
                ((qt = Math.max(He(), S.scroll.rec || 0)),
                (oe = S.progress),
                (sl = s && s.progress())),
              Yt &&
                [Yt, Ot, X, Zt].forEach(function (Et) {
                  return (Et.style.display = fe ? "none" : "block");
                }),
              fe && ((hn = S), S.update(fe)),
              _ &&
                (!U || !S.isActive) &&
                (fe ? PS(_, Dt, Nl) : hh(_, Dt, Tl(_), _t)),
              fe || S.update(fe),
              (hn = Se),
              (S.isReverted = fe));
          }),
          (S.refresh = function (te, be, fe, Se) {
            if (!((hn || !S.enabled) && !be)) {
              if (_ && te && El) {
                Wt(u, "scrollEnd", wy);
                return;
              }
              !Rn && K && K(S),
                (hn = S),
                xe.tween && !fe && (xe.tween.kill(), (xe.tween = 0)),
                Ne && Ne.pause(),
                T && s && s.revert({ kill: !1 }).invalidate(),
                S.isReverted || S.revert(!0, !0),
                (S._subPinOffset = !1);
              var Et = le(),
                ke = re(),
                Pe = q ? q.duration() : $l(I, G),
                Qe = st <= 0.01,
                Le = 0,
                $e = Se || 0,
                Fe = Ga(fe) ? fe.end : i.end,
                qn = i.endTrigger || x,
                ut = Ga(fe)
                  ? fe.start
                  : i.start || (i.start === 0 || !x ? 0 : _ ? "0 0" : "0 100%"),
                cn = (S.pinnedContainer =
                  i.pinnedContainer && zn(i.pinnedContainer, S)),
                on = (x && Math.max(0, Ae.indexOf(S))) || 0,
                Nt = on,
                ct,
                ht,
                Xn,
                Cl,
                Be,
                bt,
                Gn,
                Ml,
                ai,
                bn,
                cl,
                ki,
                ya;
              for (
                ee &&
                Ga(fe) &&
                ((ki = ie.getProperty(X, G.p)), (ya = ie.getProperty(Zt, G.p)));
                Nt-- > 0;

              )
                (bt = Ae[Nt]),
                  bt.end || bt.refresh(0, 1) || (hn = S),
                  (Gn = bt.pin),
                  Gn &&
                    (Gn === x || Gn === _ || Gn === cn) &&
                    !bt.isReverted &&
                    (bn || (bn = []), bn.unshift(bt), bt.revert(!0, !0)),
                  bt !== Ae[Nt] && (on--, Nt--);
              for (
                gn(ut) && (ut = ut(S)),
                  ut = w1(ut, "start", S),
                  we =
                    z1(
                      ut,
                      x,
                      Et,
                      G,
                      He(),
                      Yt,
                      X,
                      S,
                      ke,
                      me,
                      ve,
                      Pe,
                      q,
                      S._startClamp && "_startClamp"
                    ) || (_ ? -0.001 : 0),
                  gn(Fe) && (Fe = Fe(S)),
                  Pn(Fe) &&
                    !Fe.indexOf("+=") &&
                    (~Fe.indexOf(" ")
                      ? (Fe = (Pn(ut) ? ut.split(" ")[0] : "") + Fe)
                      : ((Le = yo(Fe.substr(2), Et)),
                        (Fe = Pn(ut)
                          ? ut
                          : (q
                              ? ie.utils.mapRange(
                                  0,
                                  q.duration(),
                                  q.scrollTrigger.start,
                                  q.scrollTrigger.end,
                                  we
                                )
                              : we) + Le),
                        (qn = x))),
                  Fe = w1(Fe, "end", S),
                  lt =
                    Math.max(
                      we,
                      z1(
                        Fe || (qn ? "100% 0" : Pe),
                        qn,
                        Et,
                        G,
                        He() + Le,
                        Ot,
                        Zt,
                        S,
                        ke,
                        me,
                        ve,
                        Pe,
                        q,
                        S._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Le = 0,
                  Nt = on;
                Nt--;

              )
                (bt = Ae[Nt]),
                  (Gn = bt.pin),
                  Gn &&
                    bt.start - bt._pinPush <= we &&
                    !q &&
                    bt.end > 0 &&
                    ((ct =
                      bt.end -
                      (S._startClamp ? Math.max(0, bt.start) : bt.start)),
                    ((Gn === x && bt.start - bt._pinPush < we) || Gn === cn) &&
                      isNaN(ut) &&
                      (Le += ct * (1 - bt.progress)),
                    Gn === _ && ($e += ct));
              if (
                ((we += Le),
                (lt += Le),
                S._startClamp && (S._startClamp += Le),
                S._endClamp &&
                  !Rn &&
                  ((S._endClamp = lt || -0.001), (lt = Math.min(lt, $l(I, G)))),
                (st = lt - we || ((we -= 0.01) && 0.001)),
                Qe &&
                  (oe = ie.utils.clamp(0, 1, ie.utils.normalize(we, lt, qt))),
                (S._pinPush = $e),
                Yt &&
                  Le &&
                  ((ct = {}),
                  (ct[G.a] = "+=" + Le),
                  cn && (ct[G.p] = "-=" + He()),
                  ie.set([Yt, Ot], ct)),
                _ && !(Hh && S.end >= $l(I, G)))
              )
                (ct = Tl(_)),
                  (Cl = G === Qt),
                  (Xn = He()),
                  (Mn = parseFloat(ot(G.a)) + $e),
                  !Pe &&
                    lt > 1 &&
                    ((cl = (_e ? rt.scrollingElement || Wn : I).style),
                    (cl = {
                      style: cl,
                      value: cl["overflow" + G.a.toUpperCase()],
                    }),
                    _e &&
                      Tl(Je)["overflow" + G.a.toUpperCase()] !== "scroll" &&
                      (cl.style["overflow" + G.a.toUpperCase()] = "scroll")),
                  hh(_, Dt, ct),
                  (Kt = ro(_)),
                  (ht = wi(_, !0)),
                  (Ml = ve && pa(I, Cl ? Cn : Qt)()),
                  w
                    ? ((_t = [w + G.os2, st + $e + Vt]),
                      (_t.t = Dt),
                      (Nt = w === Ut ? zo(_, G) + st + $e : 0),
                      Nt &&
                        (_t.push(G.d, Nt + Vt),
                        Dt.style.flexBasis !== "auto" &&
                          (Dt.style.flexBasis = Nt + Vt)),
                      Jr(_t),
                      cn &&
                        Ae.forEach(function (_a) {
                          _a.pin === cn &&
                            _a.vars.pinSpacing !== !1 &&
                            (_a._subPinOffset = !0);
                        }),
                      ve && He(qt))
                    : ((Nt = zo(_, G)),
                      Nt &&
                        Dt.style.flexBasis !== "auto" &&
                        (Dt.style.flexBasis = Nt + Vt)),
                  ve &&
                    ((Be = {
                      top: ht.top + (Cl ? Xn - we : Ml) + Vt,
                      left: ht.left + (Cl ? Ml : Xn - we) + Vt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Be[Pa] = Be["max" + as] = Math.ceil(ht.width) + Vt),
                    (Be[Ja] = Be["max" + ym] = Math.ceil(ht.height) + Vt),
                    (Be[jl] =
                      Be[jl + Su] =
                      Be[jl + xu] =
                      Be[jl + ju] =
                      Be[jl + bu] =
                        "0"),
                    (Be[Ut] = ct[Ut]),
                    (Be[Ut + Su] = ct[Ut + Su]),
                    (Be[Ut + xu] = ct[Ut + xu]),
                    (Be[Ut + ju] = ct[Ut + ju]),
                    (Be[Ut + bu] = ct[Ut + bu]),
                    (Ul = WS(Nl, Be, U)),
                    Rn && He(0)),
                  s
                    ? ((ai = s._initted),
                      uh(1),
                      s.render(s.duration(), !0, !0),
                      (rl = ot(G.a) - Mn + st + $e),
                      (dt = Math.abs(st - rl) > 1),
                      ve && dt && Ul.splice(Ul.length - 2, 2),
                      s.render(0, !0, !0),
                      ai || s.invalidate(!0),
                      s.parent || s.totalTime(s.totalTime()),
                      uh(0))
                    : (rl = st),
                  cl &&
                    (cl.value
                      ? (cl.style["overflow" + G.a.toUpperCase()] = cl.value)
                      : cl.style.removeProperty("overflow-" + G.a));
              else if (x && He() && !q)
                for (ht = x.parentNode; ht && ht !== Je; )
                  ht._pinOffset &&
                    ((we -= ht._pinOffset), (lt -= ht._pinOffset)),
                    (ht = ht.parentNode);
              bn &&
                bn.forEach(function (_a) {
                  return _a.revert(!1, !0);
                }),
                (S.start = we),
                (S.end = lt),
                (nt = Mt = Rn ? qt : He()),
                !q && !Rn && (nt < qt && He(qt), (S.scroll.rec = 0)),
                S.revert(!1, !0),
                (pe = mn()),
                un && ((W = -1), un.restart(!0)),
                (hn = 0),
                s &&
                  se &&
                  (s._initted || sl) &&
                  s.progress() !== sl &&
                  s.progress(sl || 0, !0).render(s.time(), !0, !0),
                (Qe || oe !== S.progress || q || T || (s && !s._initted)) &&
                  (s &&
                    !se &&
                    s.totalProgress(
                      q && we < -0.001 && !oe
                        ? ie.utils.normalize(we, lt, 0)
                        : oe,
                      !0
                    ),
                  (S.progress = Qe || (nt - we) / st === oe ? 0 : oe)),
                _ && w && (Dt._pinOffset = Math.round(S.progress * rl)),
                Ne && Ne.invalidate(),
                isNaN(ki) ||
                  ((ki -= ie.getProperty(X, G.p)),
                  (ya -= ie.getProperty(Zt, G.p)),
                  so(X, G, ki),
                  so(Yt, G, ki - (Se || 0)),
                  so(Zt, G, ya),
                  so(Ot, G, ya - (Se || 0))),
                Qe && !Rn && S.update(),
                v && !Rn && !al && ((al = !0), v(S), (al = !1));
            }
          }),
          (S.getVelocity = function () {
            return ((He() - Mt) / (mn() - uu)) * 1e3 || 0;
          }),
          (S.endAnimation = function () {
            au(S.callbackAnimation),
              s &&
                (Ne
                  ? Ne.progress(1)
                  : s.paused()
                  ? se || au(s, S.direction < 0, 1)
                  : au(s, s.reversed()));
          }),
          (S.labelToScroll = function (te) {
            return (
              (s &&
                s.labels &&
                (we || S.refresh() || we) +
                  (s.labels[te] / s.duration()) * st) ||
              0
            );
          }),
          (S.getTrailing = function (te) {
            var be = Ae.indexOf(S),
              fe =
                S.direction > 0 ? Ae.slice(0, be).reverse() : Ae.slice(be + 1);
            return (
              Pn(te)
                ? fe.filter(function (Se) {
                    return Se.vars.preventOverlaps === te;
                  })
                : fe
            ).filter(function (Se) {
              return S.direction > 0 ? Se.end <= we : Se.start >= lt;
            });
          }),
          (S.update = function (te, be, fe) {
            if (!(q && !fe && !te)) {
              var Se = Rn === !0 ? qt : S.scroll(),
                Et = te ? 0 : (Se - we) / st,
                ke = Et < 0 ? 0 : Et > 1 ? 1 : Et || 0,
                Pe = S.progress,
                Qe,
                Le,
                $e,
                Fe,
                qn,
                ut,
                cn,
                on;
              if (
                (be &&
                  ((Mt = nt),
                  (nt = q ? He() : Se),
                  C && ((li = xt), (xt = s && !se ? s.totalProgress() : ke))),
                E &&
                  _ &&
                  !hn &&
                  !eo &&
                  El &&
                  (!ke && we < Se + ((Se - Mt) / (mn() - uu)) * E
                    ? (ke = 1e-4)
                    : ke === 1 &&
                      lt > Se + ((Se - Mt) / (mn() - uu)) * E &&
                      (ke = 0.9999)),
                ke !== Pe && S.enabled)
              ) {
                if (
                  ((Qe = S.isActive = !!ke && ke < 1),
                  (Le = !!Pe && Pe < 1),
                  (ut = Qe !== Le),
                  (qn = ut || !!ke != !!Pe),
                  (S.direction = ke > Pe ? 1 : -1),
                  (S.progress = ke),
                  qn &&
                    !hn &&
                    (($e = ke && !Pe ? 0 : ke === 1 ? 1 : Pe === 1 ? 2 : 3),
                    se &&
                      ((Fe =
                        (!ut && J[$e + 1] !== "none" && J[$e + 1]) || J[$e]),
                      (on =
                        s &&
                        (Fe === "complete" || Fe === "reset" || Fe in s)))),
                  L &&
                    (ut || on) &&
                    (on || b || !s) &&
                    (gn(L)
                      ? L(S)
                      : S.getTrailing(L).forEach(function (Xn) {
                          return Xn.endAnimation();
                        })),
                  se ||
                    (Ne && !hn && !eo
                      ? (Ne._dp._time - Ne._start !== Ne._time &&
                          Ne.render(Ne._dp._time - Ne._start),
                        Ne.resetTo
                          ? Ne.resetTo("totalProgress", ke, s._tTime / s._tDur)
                          : ((Ne.vars.totalProgress = ke),
                            Ne.invalidate().restart()))
                      : s && s.totalProgress(ke, !!(hn && (pe || te)))),
                  _)
                ) {
                  if ((te && w && (Dt.style[w + G.os2] = va), !ve))
                    rn(ou(Mn + rl * ke));
                  else if (qn) {
                    if (
                      ((cn =
                        !te && ke > Pe && lt + 1 > Se && Se + 1 >= $l(I, G)),
                      U)
                    )
                      if (!te && (Qe || cn)) {
                        var Nt = wi(_, !0),
                          ct = Se - we;
                        k1(
                          _,
                          Je,
                          Nt.top + (G === Qt ? ct : 0) + Vt,
                          Nt.left + (G === Qt ? 0 : ct) + Vt
                        );
                      } else k1(_, Dt);
                    Jr(Qe || cn ? Ul : Kt),
                      (dt && ke < 1 && Qe) ||
                        rn(Mn + (ke === 1 && !cn ? rl : 0));
                  }
                }
                C && !xe.tween && !hn && !eo && un.restart(!0),
                  m &&
                    (ut || (z && ke && (ke < 1 || !ch))) &&
                    Du(m.targets).forEach(function (Xn) {
                      return Xn.classList[Qe || z ? "add" : "remove"](
                        m.className
                      );
                    }),
                  f && !se && !te && f(S),
                  qn && !hn
                    ? (se &&
                        (on &&
                          (Fe === "complete"
                            ? s.pause().totalProgress(1)
                            : Fe === "reset"
                            ? s.restart(!0).pause()
                            : Fe === "restart"
                            ? s.restart(!0)
                            : s[Fe]()),
                        f && f(S)),
                      (ut || !ch) &&
                        (p && ut && fh(S, p),
                        F[$e] && fh(S, F[$e]),
                        z && (ke === 1 ? S.kill(!1, 1) : (F[$e] = 0)),
                        ut || (($e = ke === 1 ? 1 : 3), F[$e] && fh(S, F[$e]))),
                      Y &&
                        !Qe &&
                        Math.abs(S.getVelocity()) > (fu(Y) ? Y : 2500) &&
                        (au(S.callbackAnimation),
                        Ne
                          ? Ne.progress(1)
                          : au(s, Fe === "reverse" ? 1 : !ke, 1)))
                    : se && f && !hn && f(S);
              }
              if (Di) {
                var ht = q ? (Se / q.duration()) * (q._caScrollDist || 0) : Se;
                Hl(ht + (X._isFlipped ? 1 : 0)), Di(ht);
              }
              ul && ul((-Se / q.duration()) * (q._caScrollDist || 0));
            }
          }),
          (S.enable = function (te, be) {
            S.enabled ||
              ((S.enabled = !0),
              Wt(I, "resize", du),
              _e || Wt(I, "scroll", Yr),
              K && Wt(u, "refreshInit", K),
              te !== !1 && ((S.progress = oe = 0), (nt = Mt = W = He())),
              be !== !1 && S.refresh());
          }),
          (S.getTween = function (te) {
            return te && xe ? xe.tween : Ne;
          }),
          (S.setPositions = function (te, be, fe, Se) {
            if (q) {
              var Et = q.scrollTrigger,
                ke = q.duration(),
                Pe = Et.end - Et.start;
              (te = Et.start + (Pe * te) / ke),
                (be = Et.start + (Pe * be) / ke);
            }
            S.refresh(
              !1,
              !1,
              {
                start: E1(te, fe && !!S._startClamp),
                end: E1(be, fe && !!S._endClamp),
              },
              Se
            ),
              S.update();
          }),
          (S.adjustPinSpacing = function (te) {
            if (_t && te) {
              var be = _t.indexOf(G.d) + 1;
              (_t[be] = parseFloat(_t[be]) + te + Vt),
                (_t[1] = parseFloat(_t[1]) + te + Vt),
                Jr(_t);
            }
          }),
          (S.disable = function (te, be) {
            if (
              S.enabled &&
              (te !== !1 && S.revert(!0, !0),
              (S.enabled = S.isActive = !1),
              be || (Ne && Ne.pause()),
              (qt = 0),
              De && (De.uncache = 1),
              K && Jt(u, "refreshInit", K),
              un && (un.pause(), xe.tween && xe.tween.kill() && (xe.tween = 0)),
              !_e)
            ) {
              for (var fe = Ae.length; fe--; )
                if (Ae[fe].scroller === I && Ae[fe] !== S) return;
              Jt(I, "resize", du), _e || Jt(I, "scroll", Yr);
            }
          }),
          (S.kill = function (te, be) {
            S.disable(te, be), Ne && !be && Ne.kill(), g && delete Bh[g];
            var fe = Ae.indexOf(S);
            fe >= 0 && Ae.splice(fe, 1),
              fe === Nn && xo > 0 && Nn--,
              (fe = 0),
              Ae.forEach(function (Se) {
                return Se.scroller === S.scroller && (fe = 1);
              }),
              fe || Rn || (S.scroll.rec = 0),
              s &&
                ((s.scrollTrigger = null),
                te && s.revert({ kill: !1 }),
                be || s.kill()),
              Yt &&
                [Yt, Ot, X, Zt].forEach(function (Se) {
                  return Se.parentNode && Se.parentNode.removeChild(Se);
                }),
              Tu === S && (Tu = 0),
              _ &&
                (De && (De.uncache = 1),
                (fe = 0),
                Ae.forEach(function (Se) {
                  return Se.pin === _ && fe++;
                }),
                fe || (De.spacer = 0)),
              i.onKill && i.onKill(S);
          }),
          Ae.push(S),
          S.enable(!1, !1),
          Al && Al(S),
          s && s.add && !st)
        ) {
          var ze = S.update;
          (S.update = function () {
            (S.update = ze), Oe.cache++, we || lt || S.refresh();
          }),
            ie.delayedCall(0.01, S.update),
            (st = 0.01),
            (we = lt = 0);
        } else S.refresh();
        _ && FS();
      }),
      (u.register = function (i) {
        return (
          qr ||
            ((ie = i || _y()),
            yy() && window.document && u.enable(),
            (qr = cu)),
          qr
        );
      }),
      (u.defaults = function (i) {
        if (i) for (var s in i) io[s] = i[s];
        return io;
      }),
      (u.disable = function (i, s) {
        (cu = 0),
          Ae.forEach(function (f) {
            return f[s ? "kill" : "disable"](i);
          }),
          Jt(Me, "wheel", Yr),
          Jt(rt, "scroll", Yr),
          clearInterval(Ic),
          Jt(rt, "touchcancel", Ql),
          Jt(Je, "touchstart", Ql),
          no(Jt, rt, "pointerdown,touchstart,mousedown", N1),
          no(Jt, rt, "pointerup,touchend,mouseup", R1),
          Oo.kill(),
          to(Jt);
        for (var o = 0; o < Oe.length; o += 3)
          lo(Jt, Oe[o], Oe[o + 1]), lo(Jt, Oe[o], Oe[o + 2]);
      }),
      (u.enable = function () {
        if (
          ((Me = window),
          (rt = document),
          (Wn = rt.documentElement),
          (Je = rt.body),
          ie &&
            ((Du = ie.utils.toArray),
            (_u = ie.utils.clamp),
            (Uh = ie.core.context || Ql),
            (uh = ie.core.suppressOverwrites || Ql),
            (mm = Me.history.scrollRestoration || "auto"),
            (Yh = Me.pageYOffset || 0),
            ie.core.globals("ScrollTrigger", u),
            Je))
        ) {
          (cu = 1),
            (Pr = document.createElement("div")),
            (Pr.style.height = "100vh"),
            (Pr.style.position = "absolute"),
            Ry(),
            XS(),
            Ct.register(ie),
            (u.isTouch = Ct.isTouch),
            (la =
              Ct.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Lh = Ct.isTouch === 1),
            Wt(Me, "wheel", Yr),
            (hm = [Me, rt, Wn, Je]),
            ie.matchMedia
              ? ((u.matchMedia = function (p) {
                  var v = ie.matchMedia(),
                    b;
                  for (b in p) v.add(b, p[b]);
                  return v;
                }),
                ie.addEventListener("matchMediaInit", function () {
                  return xm();
                }),
                ie.addEventListener("matchMediaRevert", function () {
                  return Ey();
                }),
                ie.addEventListener("matchMedia", function () {
                  Qa(0, 1), lr("matchMedia");
                }),
                ie.matchMedia().add("(orientation: portrait)", function () {
                  return dh(), dh;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            dh(),
            Wt(rt, "scroll", Yr);
          var i = Je.hasAttribute("style"),
            s = Je.style,
            o = s.borderTopStyle,
            f = ie.core.Animation.prototype,
            m,
            g;
          for (
            f.revert ||
              Object.defineProperty(f, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              s.borderTopStyle = "solid",
              m = wi(Je),
              Qt.m = Math.round(m.top + Qt.sc()) || 0,
              Cn.m = Math.round(m.left + Cn.sc()) || 0,
              o ? (s.borderTopStyle = o) : s.removeProperty("border-top-style"),
              i || (Je.setAttribute("style", ""), Je.removeAttribute("style")),
              Ic = setInterval(M1, 250),
              ie.delayedCall(0.5, function () {
                return (eo = 0);
              }),
              Wt(rt, "touchcancel", Ql),
              Wt(Je, "touchstart", Ql),
              no(Wt, rt, "pointerdown,touchstart,mousedown", N1),
              no(Wt, rt, "pointerup,touchend,mouseup", R1),
              kh = ie.utils.checkPrefix("transform"),
              bo.push(kh),
              qr = mn(),
              Oo = ie.delayedCall(0.2, Qa).pause(),
              Xr = [
                rt,
                "visibilitychange",
                function () {
                  var p = Me.innerWidth,
                    v = Me.innerHeight;
                  rt.hidden
                    ? ((j1 = p), (T1 = v))
                    : (j1 !== p || T1 !== v) && du();
                },
                rt,
                "DOMContentLoaded",
                Qa,
                Me,
                "load",
                Qa,
                Me,
                "resize",
                du,
              ],
              to(Wt),
              Ae.forEach(function (p) {
                return p.enable(0, 1);
              }),
              g = 0;
            g < Oe.length;
            g += 3
          )
            lo(Jt, Oe[g], Oe[g + 1]), lo(Jt, Oe[g], Oe[g + 2]);
        }
      }),
      (u.config = function (i) {
        "limitCallbacks" in i && (ch = !!i.limitCallbacks);
        var s = i.syncInterval;
        (s && clearInterval(Ic)) || ((Ic = s) && setInterval(M1, s)),
          "ignoreMobileResize" in i &&
            (Lh = u.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (to(Jt) || to(Wt, i.autoRefreshEvents || "none"),
            (py = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (u.scrollerProxy = function (i, s) {
        var o = zn(i),
          f = Oe.indexOf(o),
          m = tr(o);
        ~f && Oe.splice(f, m ? 6 : 2),
          s && (m ? Wl.unshift(Me, s, Je, s, Wn, s) : Wl.unshift(o, s));
      }),
      (u.clearMatchMedia = function (i) {
        Ae.forEach(function (s) {
          return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0);
        });
      }),
      (u.isInViewport = function (i, s, o) {
        var f = (Pn(i) ? zn(i) : i).getBoundingClientRect(),
          m = f[o ? Pa : Ja] * s || 0;
        return o
          ? f.right - m > 0 && f.left + m < Me.innerWidth
          : f.bottom - m > 0 && f.top + m < Me.innerHeight;
      }),
      (u.positionInViewport = function (i, s, o) {
        Pn(i) && (i = zn(i));
        var f = i.getBoundingClientRect(),
          m = f[o ? Pa : Ja],
          g =
            s == null
              ? m / 2
              : s in ko
              ? ko[s] * m
              : ~s.indexOf("%")
              ? (parseFloat(s) * m) / 100
              : parseFloat(s) || 0;
        return o ? (f.left + g) / Me.innerWidth : (f.top + g) / Me.innerHeight;
      }),
      (u.killAll = function (i) {
        if (
          (Ae.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
          i !== !0)
        ) {
          var s = nr.killAll || [];
          (nr = {}),
            s.forEach(function (o) {
              return o();
            });
        }
      }),
      u
    );
  })();
de.version = "3.12.7";
de.saveStyles = function (u) {
  return u
    ? Du(u).forEach(function (l) {
        if (l && l.style) {
          var a = Fn.indexOf(l);
          a >= 0 && Fn.splice(a, 5),
            Fn.push(
              l,
              l.style.cssText,
              l.getBBox && l.getAttribute("transform"),
              ie.core.getCache(l),
              Uh()
            );
        }
      })
    : Fn;
};
de.revert = function (u, l) {
  return xm(!u, l);
};
de.create = function (u, l) {
  return new de(u, l);
};
de.refresh = function (u) {
  return u ? du(!0) : (qr || de.register()) && Qa(!0);
};
de.update = function (u) {
  return ++Oe.cache && Ri(u === !0 ? 2 : 0);
};
de.clearScrollMemory = Ny;
de.maxScroll = function (u, l) {
  return $l(u, l ? Cn : Qt);
};
de.getScrollFunc = function (u, l) {
  return pa(zn(u), l ? Cn : Qt);
};
de.getById = function (u) {
  return Bh[u];
};
de.getAll = function () {
  return Ae.filter(function (u) {
    return u.vars.id !== "ScrollSmoother";
  });
};
de.isScrolling = function () {
  return !!El;
};
de.snapDirectional = _m;
de.addEventListener = function (u, l) {
  var a = nr[u] || (nr[u] = []);
  ~a.indexOf(l) || a.push(l);
};
de.removeEventListener = function (u, l) {
  var a = nr[u],
    i = a && a.indexOf(l);
  i >= 0 && a.splice(i, 1);
};
de.batch = function (u, l) {
  var a = [],
    i = {},
    s = l.interval || 0.016,
    o = l.batchMax || 1e9,
    f = function (p, v) {
      var b = [],
        x = [],
        _ = ie
          .delayedCall(s, function () {
            v(b, x), (b = []), (x = []);
          })
          .pause();
      return function (w) {
        b.length || _.restart(!0),
          b.push(w.trigger),
          x.push(w),
          o <= b.length && _.progress(1);
      };
    },
    m;
  for (m in l)
    i[m] =
      m.substr(0, 2) === "on" && gn(l[m]) && m !== "onRefreshInit"
        ? f(m, l[m])
        : l[m];
  return (
    gn(o) &&
      ((o = o()),
      Wt(de, "refresh", function () {
        return (o = l.batchMax());
      })),
    Du(u).forEach(function (g) {
      var p = {};
      for (m in i) p[m] = i[m];
      (p.trigger = g), a.push(de.create(p));
    }),
    a
  );
};
var U1 = function (l, a, i, s) {
    return (
      a > s ? l(s) : a < 0 && l(0),
      i > s ? (s - a) / (i - a) : i < 0 ? a / (a - i) : 1
    );
  },
  mh = function u(l, a) {
    a === !0
      ? l.style.removeProperty("touch-action")
      : (l.style.touchAction =
          a === !0
            ? "auto"
            : a
            ? "pan-" + a + (Ct.isTouch ? " pinch-zoom" : "")
            : "none"),
      l === Wn && u(Je, a);
  },
  uo = { auto: 1, scroll: 1 },
  ej = function (l) {
    var a = l.event,
      i = l.target,
      s = l.axis,
      o = (a.changedTouches ? a.changedTouches[0] : a).target,
      f = o._gsap || ie.core.getCache(o),
      m = mn(),
      g;
    if (!f._isScrollT || m - f._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== Je &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(uo[(g = Tl(o)).overflowY] || uo[g.overflowX]));

      )
        o = o.parentNode;
      (f._isScroll =
        o &&
        o !== i &&
        !tr(o) &&
        (uo[(g = Tl(o)).overflowY] || uo[g.overflowX])),
        (f._isScrollT = m);
    }
    (f._isScroll || s === "x") && (a.stopPropagation(), (a._gsapAllow = !0));
  },
  Cy = function (l, a, i, s) {
    return Ct.create({
      target: l,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: a,
      onWheel: (s = s && ej),
      onPress: s,
      onDrag: s,
      onScroll: s,
      onEnable: function () {
        return i && Wt(rt, Ct.eventTypes[0], B1, !1, !0);
      },
      onDisable: function () {
        return Jt(rt, Ct.eventTypes[0], B1, !0);
      },
    });
  },
  tj = /(input|label|select|textarea)/i,
  H1,
  B1 = function (l) {
    var a = tj.test(l.target.tagName);
    (a || H1) && ((l._gsapAllow = !0), (H1 = a));
  },
  nj = function (l) {
    Ga(l) || (l = {}),
      (l.preventDefault = l.isNormalizer = l.allowClicks = !0),
      l.type || (l.type = "wheel,touch"),
      (l.debounce = !!l.debounce),
      (l.id = l.id || "normalizer");
    var a = l,
      i = a.normalizeScrollX,
      s = a.momentum,
      o = a.allowNestedScroll,
      f = a.onRelease,
      m,
      g,
      p = zn(l.target) || Wn,
      v = ie.core.globals().ScrollSmoother,
      b = v && v.get(),
      x =
        la &&
        ((l.content && zn(l.content)) ||
          (b && l.content !== !1 && !b.smooth() && b.content())),
      _ = pa(p, Qt),
      w = pa(p, Cn),
      T = 1,
      E =
        (Ct.isTouch && Me.visualViewport
          ? Me.visualViewport.scale * Me.visualViewport.width
          : Me.outerWidth) / Me.innerWidth,
      A = 0,
      O = gn(s)
        ? function () {
            return s(m);
          }
        : function () {
            return s || 2.8;
          },
      z,
      C,
      U = Cy(p, l.type, !0, o),
      V = function () {
        return (C = !1);
      },
      q = Ql,
      Y = Ql,
      L = function () {
        (g = $l(p, Qt)),
          (Y = _u(la ? 1 : 0, g)),
          i && (q = _u(0, $l(p, Cn))),
          (z = Wa);
      },
      G = function () {
        (x._gsap.y = ou(parseFloat(x._gsap.y) + _.offset) + "px"),
          (x.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(x._gsap.y) +
            ", 0, 1)"),
          (_.offset = _.cacheID = 0);
      },
      se = function () {
        if (C) {
          requestAnimationFrame(V);
          var ee = ou(m.deltaY / 2),
            me = Y(_.v - ee);
          if (x && me !== _.v + _.offset) {
            _.offset = me - _.v;
            var S = ou((parseFloat(x && x._gsap.y) || 0) - _.offset);
            (x.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              S +
              ", 0, 1)"),
              (x._gsap.y = S + "px"),
              (_.cacheID = Oe.cache),
              Ri();
          }
          return !0;
        }
        _.offset && G(), (C = !0);
      },
      I,
      ye,
      _e,
      ve,
      F = function () {
        L(),
          I.isActive() &&
            I.vars.scrollY > g &&
            (_() > g ? I.progress(1) && _(g) : I.resetTo("scrollY", g));
      };
    return (
      x && ie.set(x, { y: "+=0" }),
      (l.ignoreCheck = function (J) {
        return (
          (la && J.type === "touchmove" && se()) ||
          (T > 1.05 && J.type !== "touchstart") ||
          m.isGesturing ||
          (J.touches && J.touches.length > 1)
        );
      }),
      (l.onPress = function () {
        C = !1;
        var J = T;
        (T = ou(((Me.visualViewport && Me.visualViewport.scale) || 1) / E)),
          I.pause(),
          J !== T && mh(p, T > 1.01 ? !0 : i ? !1 : "x"),
          (ye = w()),
          (_e = _()),
          L(),
          (z = Wa);
      }),
      (l.onRelease = l.onGestureStart =
        function (J, ee) {
          if ((_.offset && G(), !ee)) ve.restart(!0);
          else {
            Oe.cache++;
            var me = O(),
              S,
              K;
            i &&
              ((S = w()),
              (K = S + (me * 0.05 * -J.velocityX) / 0.227),
              (me *= U1(w, S, K, $l(p, Cn))),
              (I.vars.scrollX = q(K))),
              (S = _()),
              (K = S + (me * 0.05 * -J.velocityY) / 0.227),
              (me *= U1(_, S, K, $l(p, Qt))),
              (I.vars.scrollY = Y(K)),
              I.invalidate().duration(me).play(0.01),
              ((la && I.vars.scrollY >= g) || S >= g - 1) &&
                ie.to({}, { onUpdate: F, duration: me });
          }
          f && f(J);
        }),
      (l.onWheel = function () {
        I._ts && I.pause(), mn() - A > 1e3 && ((z = 0), (A = mn()));
      }),
      (l.onChange = function (J, ee, me, S, K) {
        if (
          (Wa !== z && L(),
          ee &&
            i &&
            w(q(S[2] === ee ? ye + (J.startX - J.x) : w() + ee - S[1])),
          me)
        ) {
          _.offset && G();
          var le = K[2] === me,
            re = le ? _e + J.startY - J.y : _() + me - K[1],
            W = Y(re);
          le && re !== W && (_e += W - re), _(W);
        }
        (me || ee) && Ri();
      }),
      (l.onEnable = function () {
        mh(p, i ? !1 : "x"),
          de.addEventListener("refresh", F),
          Wt(Me, "resize", F),
          _.smooth &&
            ((_.target.style.scrollBehavior = "auto"),
            (_.smooth = w.smooth = !1)),
          U.enable();
      }),
      (l.onDisable = function () {
        mh(p, !0),
          Jt(Me, "resize", F),
          de.removeEventListener("refresh", F),
          U.kill();
      }),
      (l.lockAxis = l.lockAxis !== !1),
      (m = new Ct(l)),
      (m.iOS = la),
      la && !_() && _(1),
      la && ie.ticker.add(Ql),
      (ve = m._dc),
      (I = ie.to(m, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Ay(_, _(), function () {
            return I.pause();
          }),
        },
        onUpdate: Ri,
        onComplete: ve.vars.onComplete,
      })),
      m
    );
  };
de.sort = function (u) {
  if (gn(u)) return Ae.sort(u);
  var l = Me.pageYOffset || 0;
  return (
    de.getAll().forEach(function (a) {
      return (a._sortY = a.trigger
        ? l + a.trigger.getBoundingClientRect().top
        : a.start + Me.innerHeight);
    }),
    Ae.sort(
      u ||
        function (a, i) {
          return (
            (a.vars.refreshPriority || 0) * -1e6 +
            (a.vars.containerAnimation ? 1e6 : a._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
de.observe = function (u) {
  return new Ct(u);
};
de.normalizeScroll = function (u) {
  if (typeof u > "u") return En;
  if (u === !0 && En) return En.enable();
  if (u === !1) {
    En && En.kill(), (En = u);
    return;
  }
  var l = u instanceof Ct ? u : nj(u);
  return En && En.target === l.target && En.kill(), tr(l.target) && (En = l), l;
};
de.core = {
  _getVelocityProp: zh,
  _inputObserver: Cy,
  _scrollers: Oe,
  _proxies: Wl,
  bridge: {
    ss: function () {
      El || lr("scrollStart"), (El = mn());
    },
    ref: function () {
      return hn;
    },
  },
};
_y() && ie.registerPlugin(de);
/*!
 * ScrollToPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var vn,
  My,
  Ai,
  Fl,
  da,
  Oy,
  Wr,
  co,
  Dy = function () {
    return typeof window < "u";
  },
  zy = function () {
    return vn || (Dy() && (vn = window.gsap) && vn.registerPlugin && vn);
  },
  ky = function (l) {
    return typeof l == "string";
  },
  Y1 = function (l) {
    return typeof l == "function";
  },
  ku = function (l, a) {
    var i = a === "x" ? "Width" : "Height",
      s = "scroll" + i,
      o = "client" + i;
    return l === Ai || l === Fl || l === da
      ? Math.max(Fl[s], da[s]) - (Ai["inner" + i] || Fl[o] || da[o])
      : l[s] - l["offset" + i];
  },
  Lu = function (l, a) {
    var i = "scroll" + (a === "x" ? "Left" : "Top");
    return (
      l === Ai &&
        (l.pageXOffset != null
          ? (i = "page" + a.toUpperCase() + "Offset")
          : (l = Fl[i] != null ? Fl : da)),
      function () {
        return l[i];
      }
    );
  },
  lj = function (l, a, i, s) {
    if ((Y1(l) && (l = l(a, i, s)), typeof l != "object"))
      return ky(l) && l !== "max" && l.charAt(1) !== "="
        ? { x: l, y: l }
        : { y: l };
    if (l.nodeType) return { y: l, x: l };
    var o = {},
      f;
    for (f in l) o[f] = f !== "onAutoKill" && Y1(l[f]) ? l[f](a, i, s) : l[f];
    return o;
  },
  Ly = function (l, a) {
    if (((l = Oy(l)[0]), !l || !l.getBoundingClientRect))
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var i = l.getBoundingClientRect(),
      s = !a || a === Ai || a === da,
      o = s
        ? {
            top:
              Fl.clientTop -
              (Ai.pageYOffset || Fl.scrollTop || da.scrollTop || 0),
            left:
              Fl.clientLeft -
              (Ai.pageXOffset || Fl.scrollLeft || da.scrollLeft || 0),
          }
        : a.getBoundingClientRect(),
      f = { x: i.left - o.left, y: i.top - o.top };
    return !s && a && ((f.x += Lu(a, "x")()), (f.y += Lu(a, "y")())), f;
  },
  q1 = function (l, a, i, s, o) {
    return !isNaN(l) && typeof l != "object"
      ? parseFloat(l) - o
      : ky(l) && l.charAt(1) === "="
      ? parseFloat(l.substr(2)) * (l.charAt(0) === "-" ? -1 : 1) + s - o
      : l === "max"
      ? ku(a, i) - o
      : Math.min(ku(a, i), Ly(l, a)[i] - o);
  },
  Xh = function () {
    (vn = zy()),
      Dy() &&
        vn &&
        typeof document < "u" &&
        document.body &&
        ((Ai = window),
        (da = document.body),
        (Fl = document.documentElement),
        (Oy = vn.utils.toArray),
        vn.config({ autoKillThreshold: 7 }),
        (Wr = vn.config()),
        (My = 1));
  },
  rr = {
    version: "3.12.7",
    name: "scrollTo",
    rawVars: 1,
    register: function (l) {
      (vn = l), Xh();
    },
    init: function (l, a, i, s, o) {
      My || Xh();
      var f = this,
        m = vn.getProperty(l, "scrollSnapType");
      (f.isWin = l === Ai),
        (f.target = l),
        (f.tween = i),
        (a = lj(a, s, l, o)),
        (f.vars = a),
        (f.autoKill = !!("autoKill" in a ? a : Wr).autoKill),
        (f.getX = Lu(l, "x")),
        (f.getY = Lu(l, "y")),
        (f.x = f.xPrev = f.getX()),
        (f.y = f.yPrev = f.getY()),
        co || (co = vn.core.globals().ScrollTrigger),
        vn.getProperty(l, "scrollBehavior") === "smooth" &&
          vn.set(l, { scrollBehavior: "auto" }),
        m &&
          m !== "none" &&
          ((f.snap = 1),
          (f.snapInline = l.style.scrollSnapType),
          (l.style.scrollSnapType = "none")),
        a.x != null
          ? (f.add(f, "x", f.x, q1(a.x, l, "x", f.x, a.offsetX || 0), s, o),
            f._props.push("scrollTo_x"))
          : (f.skipX = 1),
        a.y != null
          ? (f.add(f, "y", f.y, q1(a.y, l, "y", f.y, a.offsetY || 0), s, o),
            f._props.push("scrollTo_y"))
          : (f.skipY = 1);
    },
    render: function (l, a) {
      for (
        var i = a._pt,
          s = a.target,
          o = a.tween,
          f = a.autoKill,
          m = a.xPrev,
          g = a.yPrev,
          p = a.isWin,
          v = a.snap,
          b = a.snapInline,
          x,
          _,
          w,
          T,
          E;
        i;

      )
        i.r(l, i.d), (i = i._next);
      (x = p || !a.skipX ? a.getX() : m),
        (_ = p || !a.skipY ? a.getY() : g),
        (w = _ - g),
        (T = x - m),
        (E = Wr.autoKillThreshold),
        a.x < 0 && (a.x = 0),
        a.y < 0 && (a.y = 0),
        f &&
          (!a.skipX && (T > E || T < -E) && x < ku(s, "x") && (a.skipX = 1),
          !a.skipY && (w > E || w < -E) && _ < ku(s, "y") && (a.skipY = 1),
          a.skipX &&
            a.skipY &&
            (o.kill(),
            a.vars.onAutoKill &&
              a.vars.onAutoKill.apply(o, a.vars.onAutoKillParams || []))),
        p
          ? Ai.scrollTo(a.skipX ? x : a.x, a.skipY ? _ : a.y)
          : (a.skipY || (s.scrollTop = a.y), a.skipX || (s.scrollLeft = a.x)),
        v &&
          (l === 1 || l === 0) &&
          ((_ = s.scrollTop),
          (x = s.scrollLeft),
          b
            ? (s.style.scrollSnapType = b)
            : s.style.removeProperty("scroll-snap-type"),
          (s.scrollTop = _ + 1),
          (s.scrollLeft = x + 1),
          (s.scrollTop = _),
          (s.scrollLeft = x)),
        (a.xPrev = a.x),
        (a.yPrev = a.y),
        co && co.update();
    },
    kill: function (l) {
      var a = l === "scrollTo",
        i = this._props.indexOf(l);
      return (
        (a || l === "scrollTo_x") && (this.skipX = 1),
        (a || l === "scrollTo_y") && (this.skipY = 1),
        i > -1 && this._props.splice(i, 1),
        !this._props.length
      );
    },
  };
rr.max = ku;
rr.getOffset = Ly;
rr.buildGetter = Lu;
rr.config = function (u) {
  Wr || Xh() || (Wr = vn.config());
  for (var l in u) Wr[l] = u[l];
};
zy() && vn.registerPlugin(rr);
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let X1 = typeof document < "u" ? N.useLayoutEffect : N.useEffect,
  G1 = (u) => u && !Array.isArray(u) && typeof u == "object",
  oo = [],
  ij = {},
  Uy = ne;
const Xo = (u, l = oo) => {
  let a = ij;
  G1(u)
    ? ((a = u), (u = null), (l = "dependencies" in a ? a.dependencies : oo))
    : G1(l) && ((a = l), (l = "dependencies" in a ? a.dependencies : oo)),
    u &&
      typeof u != "function" &&
      console.warn("First parameter must be a function or config object");
  const { scope: i, revertOnUpdate: s } = a,
    o = N.useRef(!1),
    f = N.useRef(Uy.context(() => {}, i)),
    m = N.useRef((p) => f.current.add(null, p)),
    g = l && l.length && !s;
  return (
    g && X1(() => ((o.current = !0), () => f.current.revert()), oo),
    X1(() => {
      if ((u && f.current.add(u, i), !g || !o.current))
        return () => f.current.revert();
    }, l),
    { context: f.current, contextSafe: m.current }
  );
};
Xo.register = (u) => {
  Uy = u;
};
Xo.headless = !0;
const aj = "/assets/bedandpillow-CdEoO1M2.png",
  rj = "/assets/bedandpillow2-APkNoH3g.jpg",
  sj = "/assets/pillow-blue-DKShnybe.png",
  uj = "/assets/pillow-white-aTgkh62Y.png",
  cj = "/assets/bed-spreed-BuaLU-j5.png",
  oj = "/assets/bed-spreed2-DtdMVjUo.jpg",
  fj = "/assets/pillow0-DrU6DX7E.png",
  Hy = "/assets/pillow-blue2-BEoE54qo.jpg",
  V1 = "/assets/bedroom-blue-DF-gVeLx.jpg",
  Ia = [
    {
      id: 1,
      name: "Bubble Pillow",
      price: 57,
      image: aj,
      alternateImage: rj,
      link: "/product/1",
      description:
        "Luxury handcrafted bubble pillow with premium cotton cover, perfect for any modern bedroom.",
      features: [
        "100% organic cotton",
        "Hypoallergenic",
        "Machine washable",
        "Available in multiple colors",
      ],
      colors: [
        { name: "white", label: "White", code: "#ffffff" },
        { name: "cream", label: "Cream", code: "#f5f5dc" },
        { name: "gray", label: "Gray", code: "#808080" },
      ],
      sizes: [
        { name: "s", label: "Small", dimensions: '16" x 16"', price: 47 },
        { name: "m", label: "Medium", dimensions: '18" x 18"', price: 57 },
        { name: "l", label: "Large", dimensions: '20" x 20"', price: 67 },
      ],
      category: "pillows",
      inStock: !0,
      featured: !0,
    },
    {
      id: 2,
      name: "Blue Pillow",
      price: 49,
      image: sj,
      alternateImage: uj,
      link: "/product/2",
      description:
        "Elegant blue pillow with soft texture and vibrant color, designed to complement any living space.",
      features: [
        "Soft microfiber cover",
        "Stain resistant",
        "Dense filling for comfort",
        "Zipper closure",
      ],
      colors: [
        { name: "blue", label: "Blue", code: "#1e3a8a" },
        { name: "navy", label: "Navy", code: "#172554" },
        { name: "white", label: "White", code: "#ffffff" },
      ],
      sizes: [
        { name: "s", label: "Small", dimensions: '16" x 16"', price: 39 },
        { name: "m", label: "Medium", dimensions: '18" x 18"', price: 49 },
        { name: "l", label: "Large", dimensions: '20" x 20"', price: 59 },
      ],
      category: "pillows",
      inStock: !0,
      featured: !0,
    },
    {
      id: 3,
      name: "Luxury Bedspread",
      price: 129,
      image: cj,
      alternateImage: oj,
      link: "/product/3",
      description:
        "Premium bedspread with elegant design and exceptional craftsmanship for a sophisticated bedroom.",
      features: [
        "100% Egyptian cotton",
        "Hotel quality",
        "Wrinkle resistant",
        "Detailed stitching",
      ],
      colors: [
        { name: "white", label: "White", code: "#ffffff" },
        { name: "beige", label: "Beige", code: "#f5f5dc" },
        { name: "gray", label: "Gray", code: "#808080" },
      ],
      sizes: [
        { name: "twin", label: "Twin", dimensions: '68" x 88"', price: 129 },
        { name: "queen", label: "Queen", dimensions: '88" x 92"', price: 149 },
        { name: "king", label: "King", dimensions: '102" x 92"', price: 169 },
      ],
      category: "bedspreads",
      inStock: !0,
      featured: !0,
    },
    {
      id: 4,
      name: "Decorative Pillow Set",
      price: 89,
      image: fj,
      alternateImage: Hy,
      link: "/product/4",
      description:
        "Set of 2 decorative pillows with exquisite patterns, perfect for adding a touch of elegance to your home.",
      features: [
        "Set of 2 matching pillows",
        "Premium fabric cover",
        "Hidden zipper closure",
        "Fade resistant",
      ],
      colors: [
        { name: "mixed", label: "Mixed Pattern", code: "#ffffff" },
        { name: "blue", label: "Blue Pattern", code: "#1e3a8a" },
      ],
      sizes: [
        { name: "s", label: "Small", dimensions: '16" x 16"', price: 79 },
        { name: "m", label: "Medium", dimensions: '18" x 18"', price: 89 },
      ],
      category: "pillows",
      inStock: !0,
      featured: !1,
    },
    {
      id: 5,
      name: "Complete Bedroom Set",
      price: 299,
      image: V1,
      alternateImage: V1,
      link: "/product/5",
      description:
        "Complete luxury bedroom set including duvet cover, sheet set, and decorative pillows for a coordinated look.",
      features: [
        "100% cotton",
        "Includes duvet cover, sheet set, and 2 pillow shams",
        "Machine washable",
        "Fade resistant",
      ],
      colors: [
        { name: "blue", label: "Blue", code: "#1e3a8a" },
        { name: "white", label: "White", code: "#ffffff" },
        { name: "gray", label: "Gray", code: "#808080" },
      ],
      sizes: [
        {
          name: "queen",
          label: "Queen",
          dimensions: "Standard Queen Size",
          price: 299,
        },
        {
          name: "king",
          label: "King",
          dimensions: "Standard King Size",
          price: 349,
        },
      ],
      category: "bedroom-sets",
      inStock: !0,
      featured: !0,
    },
  ],
  dj = ({ inline: u = !1 }) => {
    const [l, a] = N.useState(""),
      [i, s] = N.useState([]),
      [o, f] = N.useState([]),
      [m, g] = N.useState([]),
      [p, v] = N.useState(!1),
      [b, x] = N.useState(!1),
      [_, w] = N.useState(!1),
      T = N.useRef(null),
      E = N.useRef(null),
      A = N.useRef(null),
      O = Qh();
    Xo(() => {
      p
        ? ne.to(T.current, {
            width: u ? "100%" : "320px",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              !u && E.current && E.current.focus();
            },
          })
        : u ||
          ne.to(T.current, { width: "40px", duration: 0.3, ease: "power2.in" }),
        (i.length > 0 || o.length > 0 || (m.length > 0 && _)) &&
          b &&
          ne.fromTo(
            A.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
          );
    }, [p, i.length, o.length, b, _, m.length, u]),
      N.useEffect(() => {
        if (l.trim() === "") {
          f([]), w(!0);
          return;
        }
        w(!1);
        const Y = generateSearchSuggestions(l, Ia);
        f(Y);
      }, [l]),
      N.useEffect(() => {
        if (l.trim() === "") {
          s([]);
          return;
        }
        const Y = l.toLowerCase(),
          L = Ia.filter(
            (G) =>
              G.name.toLowerCase().includes(Y) ||
              G.description.toLowerCase().includes(Y) ||
              (G.category && G.category.toLowerCase().includes(Y))
          );
        s(L.slice(0, 4));
      }, [l]),
      N.useEffect(() => {
        const Y = (L) => {
          T.current &&
            !T.current.contains(L.target) &&
            (x(!1), !u && l === "" && v(!1));
        };
        return (
          document.addEventListener("mousedown", Y),
          () => {
            document.removeEventListener("mousedown", Y);
          }
        );
      }, [u, l]),
      N.useEffect(() => {
        const Y = (L) => {
          L.key === "Escape" && (x(!1), u || v(!1));
        };
        return (
          document.addEventListener("keydown", Y),
          () => {
            document.removeEventListener("keydown", Y);
          }
        );
      }, [u]);
    const z = (Y) => {
        O(`/product/${Y}`), a(""), x(!1), v(!1);
      },
      C = (Y) => {
        Y && Y.preventDefault(),
          l.trim() &&
            (saveSearchQuery(l),
            g(getSearchHistory()),
            O(`/shop?search=${encodeURIComponent(l)}`),
            x(!1),
            u || v(!1));
      },
      U = (Y) => {
        a(Y),
          saveSearchQuery(Y),
          g(getSearchHistory()),
          O(`/shop?search=${encodeURIComponent(Y)}`),
          x(!1),
          u || v(!1);
      },
      V = (Y) => {
        a(Y),
          saveSearchQuery(Y),
          g(getSearchHistory()),
          O(`/shop?search=${encodeURIComponent(Y)}`),
          x(!1),
          u || v(!1);
      },
      q = () => {
        v(!p), p ? x(!1) : (x(!0), w(!0));
      };
    return d.jsxs("div", {
      ref: T,
      className: `relative search-bar-container${
        u
          ? "search-bar-full-widthl"
          : p
          ? "search-bar-expanded "
          : "search-bar-collapsed"
      } transition-all`,
      children: [
        !u &&
          d.jsx("button", {
            type: "button",
            onClick: q,
            className: "search-icon-button",
            "aria-label": "Search",
            children: d.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "search-icon",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: d.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
              }),
            }),
          }),
        d.jsxs("form", {
          onSubmit: C,
          className: `${
            !u && !p ? "search-form search-form-hidden" : "search-form-visible"
          } transition-opacity duration-300`,
          children: [
            u &&
              d.jsx("div", {
                className: "search-icon-container ",
                children: d.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-5 w-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: d.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                  }),
                }),
              }),
            d.jsx("input", {
              ref: E,
              type: "text",
              placeholder: "Search products...",
              value: l,
              onChange: (Y) => a(Y.target.value),
              onFocus: () => {
                x(!0), w(l.trim() === "");
              },
              className: `
            search-input
          `,
            }),
            l.trim() !== "" &&
              d.jsx("button", {
                type: "button",
                onClick: () => {
                  a(""), x(!0), w(!0), E.current.focus();
                },
                className: "clear-button",
                children: d.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "clear-icon",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: d.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12",
                  }),
                }),
              }),
            d.jsx("button", {
              type: "submit",
              className: "submit-button",
              children: d.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "submit-icon",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: d.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                }),
              }),
            }),
          ],
        }),
        b &&
          (i.length > 0 || o.length > 0 || (m.length > 0 && _)) &&
          d.jsx("div", {
            ref: A,
            className: "search-results-dropdown",
            children: d.jsxs("ul", {
              className: "py-2",
              children: [
                i.length > 0 &&
                  d.jsxs(d.Fragment, {
                    children: [
                      d.jsx("li", {
                        className: "results-list",
                        children: "Products",
                      }),
                      i.map((Y) =>
                        d.jsx(
                          "li",
                          {
                            className: "results-header result-item",
                            children: d.jsxs("button", {
                              onClick: () => z(Y.slug),
                              className:
                                "flex items-center w-full px-4 py-2 text-left",
                              children: [
                                d.jsx("div", {
                                  className: "product-result-item",
                                  children: d.jsx("img", {
                                    src: Y.image,
                                    alt: Y.name,
                                    className:
                                      "h-full w-full object-cover rounded",
                                  }),
                                }),
                                d.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    d.jsx("p", {
                                      className: "text-sm font-medium",
                                      children: Y.name,
                                    }),
                                    d.jsxs("p", {
                                      className: "text-xs text-gray-500",
                                      children: ["$", Y.price.toFixed(2)],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          Y.id
                        )
                      ),
                    ],
                  }),
                o.length > 0 &&
                  d.jsxs(d.Fragment, {
                    children: [
                      d.jsx("li", {
                        className:
                          "px-4 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50",
                        children: "Suggestions",
                      }),
                      o.map((Y, L) =>
                        d.jsx(
                          "li",
                          {
                            className: "hover:bg-gray-100",
                            children: d.jsxs("button", {
                              onClick: () => U(Y),
                              className:
                                "flex items-center w-full px-4 py-2 text-left",
                              children: [
                                d.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-4 w-4 text-gray-400 mr-2",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: d.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                  }),
                                }),
                                d.jsx("span", {
                                  className: "text-sm",
                                  children: Y,
                                }),
                              ],
                            }),
                          },
                          L
                        )
                      ),
                    ],
                  }),
                m.length > 0 &&
                  _ &&
                  d.jsxs(d.Fragment, {
                    children: [
                      d.jsx("li", {
                        className:
                          "px-4 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50",
                        children: "Recent Searches",
                      }),
                      m.slice(0, 5).map((Y, L) =>
                        d.jsx(
                          "li",
                          {
                            className: "hover:bg-gray-100",
                            children: d.jsxs("button", {
                              onClick: () => V(Y),
                              className:
                                "flex items-center w-full px-4 py-2 text-left",
                              children: [
                                d.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-4 w-4 text-gray-400 mr-2",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: d.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                  }),
                                }),
                                d.jsx("span", {
                                  className: "text-sm",
                                  children: Y,
                                }),
                              ],
                            }),
                          },
                          L
                        )
                      ),
                    ],
                  }),
                l.trim() !== "" &&
                  d.jsx("li", {
                    className: "border-t border-gray-200 mt-2 pt-2",
                    children: d.jsxs("button", {
                      onClick: C,
                      className:
                        "w-full px-4 py-2 text-sm text-primary-600 hover:bg-gray-100 text-left",
                      children: ['See all results for "', l, '"'],
                    }),
                  }),
              ],
            }),
          }),
      ],
    });
  },
  hj = ({ cartItemsCount: u }) => {
    const l = N.useRef(null),
      a = N.useRef(null),
      i = N.useRef(null),
      s = N.useRef(null),
      o = N.useRef(null),
      f = N.useRef(null),
      m = N.useRef(null);
    N.useEffect(() => {
      if (!i.current) return;
      const p = [s.current, o.current, f.current, m.current];
      ne.set(p, { opacity: 0, scale: 0 });
      const v = ne.timeline({ paused: !0 });
      v.to(p, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.05,
        ease: "back.out(1.5)",
      });
      const b = i.current,
        x = () => {
          v.play();
        },
        _ = () => {
          v.reverse();
        };
      return (
        b.addEventListener("mouseenter", x),
        b.addEventListener("mouseleave", _),
        () => {
          b.removeEventListener("mouseenter", x),
            b.removeEventListener("mouseleave", _);
        }
      );
    }, []),
      N.useEffect(() => {
        const p = ne.timeline();
        p.from(a.current, {
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
        const v = ne.timeline({ delay: 0.2 });
        return (
          v.from(
            l.current.querySelectorAll(
              ".nav-item, .logo, .search-icon, .account-icon, .cart-icon"
            ),
            {
              y: -20,
              opacity: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: "power3.out",
            }
          ),
          () => {
            p.kill(), v.kill();
          }
        );
      }, []);
    const g = () => {
      const p = a.current;
      ne.to(p, {
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.3,
        onComplete: () => {
          p.style.display = "none";
        },
      });
    };
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx("div", {
          className: "top-banner",
          ref: a,
          children: d.jsxs("div", {
            className: "container banner-content",
            children: [
              d.jsx("span", { children: " Free" }),
              d.jsx("p", {
                children:
                  "The best things in life are free, now including .....",
              }),
              d.jsx(Ge, {
                to: "#",
                className: "learn-more",
                children: "Learn more",
              }),
              d.jsx("button", {
                className: "close-banner",
                onClick: g,
                children: "×",
              }),
            ],
          }),
        }),
        d.jsx("header", {
          className: "site-header",
          ref: l,
          children: d.jsxs("div", {
            className: "container header-container",
            children: [
              d.jsx("nav", {
                className: "main-nav",
                children: d.jsxs("ul", {
                  className: "nav-list",
                  children: [
                    d.jsxs("div", {
                      className: "button-container",
                      ref: i,
                      children: [
                        d.jsx("div", { className: "corner top-left", ref: s }),
                        d.jsx("div", { className: "corner top-right", ref: o }),
                        d.jsx("div", {
                          className: "corner bottom-left",
                          ref: f,
                        }),
                        d.jsx("div", {
                          className: "corner bottom-right",
                          ref: m,
                        }),
                        d.jsx("li", {
                          className: "nav-item touch-nav",
                          children: d.jsx(Ge, {
                            to: "/shop",
                            children: "All Products",
                          }),
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "button-container",
                      ref: i,
                      children: [
                        d.jsx("div", { className: "corner top-left", ref: s }),
                        d.jsx("div", { className: "corner top-right", ref: o }),
                        d.jsx("div", {
                          className: "corner bottom-left",
                          ref: f,
                        }),
                        d.jsx("div", {
                          className: "corner bottom-right",
                          ref: m,
                        }),
                        d.jsx("li", {
                          className: "nav-item touch-nav",
                          children: d.jsx(Ge, {
                            to: "/shop",
                            children: "Collectibles",
                          }),
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "button-container",
                      ref: i,
                      children: [
                        d.jsx("div", { className: "corner top-left", ref: s }),
                        d.jsx("div", { className: "corner top-right", ref: o }),
                        d.jsx("div", {
                          className: "corner bottom-left",
                          ref: f,
                        }),
                        d.jsx("div", {
                          className: "corner bottom-right",
                          ref: m,
                        }),
                        d.jsx("li", {
                          className: "nav-item touch-nav",
                          children: d.jsx(Ge, {
                            to: "/shop",
                            children: "Lifestyle",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              d.jsx(Ge, {
                to: "/",
                className: "logo",
                children: d.jsx("span", { children: "MaisonTissu" }),
              }),
              d.jsxs("div", {
                className: "header-actions",
                children: [
                  d.jsx(dj, {}),
                  d.jsx(Ge, {
                    to: "/login",
                    className: "icon-btn account-icon",
                    children: d.jsx("svg", {
                      "aria-hidden": "true",
                      height: "16",
                      viewBox: "0 0 16 16",
                      version: "1.1",
                      width: "16",
                      "data-view-component": "true",
                      children: d.jsx("path", {
                        d: "M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
                      }),
                    }),
                  }),
                  d.jsxs(Ge, {
                    to: "/cart",
                    className: "icon-btn account-icon ",
                    children: [
                      d.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "bag-icon",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: d.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                        }),
                      }),
                      u > 0 &&
                        d.jsx("span", {
                          className: "badge-notification",
                          children: u,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Uu =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-chevron-right'%3e%3cpolyline%20points='9%2018%2015%2012%209%206'%3e%3c/polyline%3e%3c/svg%3e";
ne.registerPlugin(de);
const mj = () => {
  const u = N.useRef(null),
    l = N.useRef(null),
    a = N.useRef(null),
    i = N.useRef(null),
    s = N.useRef(null),
    o = N.useRef(null),
    f = N.useRef(null),
    m = N.useRef(null),
    g = N.useRef(null);
  return (
    N.useEffect(() => {
      if (!s.current) return;
      const p = [o.current, f.current, m.current, g.current];
      ne.set(p, { opacity: 0, scale: 0 });
      const v = ne.timeline({ paused: !0 });
      v.to(p, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.05,
        ease: "back.out(1.5)",
      });
      const b = s.current,
        x = () => {
          v.play();
        },
        _ = () => {
          v.reverse();
        };
      return (
        b.addEventListener("mouseenter", x),
        b.addEventListener("mouseleave", _),
        () => {
          b.removeEventListener("mouseenter", x),
            b.removeEventListener("mouseleave", _);
        }
      );
    }, []),
    N.useEffect(() => {
      const p = ne.timeline({
        scrollTrigger: {
          trigger: u.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
      return (
        p
          .from(l.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .from(
            a.current,
            { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
          )
          .from(
            s.current,
            { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          )
          .from(
            i.current,
            { scale: 0.9, opacity: 0, duration: 1, ease: "power3.out" },
            "-=0.6"
          ),
        () => {
          p.scrollTrigger && p.scrollTrigger.kill();
        }
      );
    }, []),
    d.jsx("section", {
      className: "hero-section",
      ref: u,
      children: d.jsx("div", {
        className: "container hero-container",
        children: d.jsxs("div", {
          className: "hero-content",
          children: [
            d.jsxs("h1", {
              ref: l,
              children: [
                "Wrap ",
                d.jsx("span", { children: "Your Home " }),
                "in Elegance & Comfort",
              ],
            }),
            d.jsx("p", {
              ref: a,
              children:
                "Premium home textiles crafted with the finest materials to bring luxury and comfort to every room in your home",
            }),
            d.jsx(Ge, {
              to: "/shop",
              children: d.jsxs("div", {
                className: "button-containers",
                ref: s,
                children: [
                  d.jsx("div", { className: "corner2 top-left", ref: o }),
                  d.jsx("div", { className: "corner2 top-right", ref: f }),
                  d.jsx("div", { className: "corner2 bottom-left", ref: m }),
                  d.jsx("div", { className: "corner2 bottom-right", ref: g }),
                  d.jsxs("button", {
                    className: "touch-button",
                    children: [
                      "SHOP NOW",
                      d.jsx("img", {
                        src: Uu,
                        alt: "",
                        className: "arrow-icon",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    })
  );
};
ne.registerPlugin(de);
const pj = ({ product: u }) => {
    const [l, a] = N.useState(u.image);
    return d.jsx("div", {
      className: "productcard product-card",
      children: d.jsxs(Ge, {
        to: `/product/${u.id}`,
        className: "product-link",
        children: [
          d.jsx("div", {
            className: "product-image",
            onMouseEnter: () => a(u.alternateImage),
            onMouseLeave: () => a(u.image),
            children: d.jsx("img", { src: l, alt: u.name }),
          }),
          d.jsxs("div", {
            className: "productinfo",
            children: [
              d.jsx("h3", { className: "productname", children: u.name }),
              d.jsxs("p", {
                className: "productprice",
                children: ["Price $", u.price.toFixed(2)],
              }),
            ],
          }),
        ],
      }),
    });
  },
  gj = () => {
    const u = N.useRef(null),
      l = N.useRef(null),
      a = N.useRef(null);
    N.useEffect(() => {
      ne.from(l.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: l.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
      const s = a.current.querySelectorAll(".product-card");
      return (
        ne.from(s, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: a.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }),
        () => {
          de.getAll().forEach((o) => o.kill());
        }
      );
    }, []);
    const i = Ia.filter((s) => s.featured);
    return d.jsx("section", {
      className: "featured-section",
      ref: u,
      children: d.jsxs("div", {
        className: "container",
        children: [
          d.jsx("h2", {
            className: "section-title",
            ref: l,
            children: "Featured Products",
          }),
          d.jsx("div", {
            className: "products-grid",
            ref: a,
            children: i.map((s) => d.jsx(pj, { product: s }, s.id)),
          }),
        ],
      }),
    });
  },
  vj = ({ onColorChange: u, currentColor: l = "purple" }) => {
    const a = [
        { id: "black", label: "black", hex: "black" },
        { id: "white", label: "white", hex: "white" },
        { id: "lightblue", label: "lightblue", hex: "lightblue" },
        { id: "red", label: "Red", hex: "#574b63" },
      ],
      i = N.useRef([]);
    N.useEffect(() => {
      ne.fromTo(
        i.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.5,
        }
      ),
        s();
    }, []),
      N.useEffect(() => {
        s();
      }, [l]);
    const s = () => {
        ne.to(i.current, { scale: 1, duration: 0.3 });
        const f = a.findIndex((m) => m.id === l);
        f >= 0 &&
          i.current[f] &&
          ne.to(i.current[f], {
            scale: 1.2,
            boxShadow: `0 0 0 3px ${a[f].hex}, 0 0 10px rgba(0, 0, 0, 0.3)`,
            duration: 0.3,
          });
      },
      o = (f) => {
        u(f);
      };
    return d.jsx("div", {
      className: "color-switch",
      children: d.jsx("div", {
        className: "color-options",
        children: a.map((f, m) =>
          d.jsx(
            "button",
            {
              ref: (g) => (i.current[m] = g),
              className: `color-option ${l === f.id ? "active" : ""}`,
              style: { backgroundColor: f.hex },
              onClick: () => o(f.id),
              "aria-label": `Switch to ${f.label}`,
              title: f.label,
            },
            f.id
          )
        ),
      }),
    });
  },
  yj = () => {
    const [u, l] = N.useState(0),
      [a, i] = N.useState("black"),
      s = N.useRef(null),
      o = N.useRef([]),
      f = N.useRef([]);
    N.useRef(null);
    const m = N.useRef(!1),
      g = [
        {
          id: 1,
          colors: {
            black: new URL("/assets/bedroom-b-DvrvtQGS.jpg", import.meta.url)
              .href,
            white: new URL("/assets/bedroom-w-DQ8os4hn.jpg", import.meta.url)
              .href,
            lightblue: new URL(
              "/assets/bedroom-blue-DF-gVeLx.jpg",
              import.meta.url
            ).href,
            purple: new URL("/assets/bedroom-p-DRjHMHXT.jpg", import.meta.url)
              .href,
          },
        },
        {
          id: 2,
          colors: {
            black: new URL("/assets/livingroom-b-DmnS9lK0.jpg", import.meta.url)
              .href,
            white: new URL("/assets/livingroom-w-DkjOI3qx.jpg", import.meta.url)
              .href,
            lightblue: new URL(
              "/assets/livingroom-blue-BY4s8cbc.jpg",
              import.meta.url
            ).href,
            purple: new URL(
              "/assets/livingroom-pr-Sr1Ovi_Q.jpg",
              import.meta.url
            ).href,
          },
        },
        {
          id: 3,
          colors: {
            black: new URL("/assets/bg2-BLQy1KEA.png", import.meta.url).href,
            blue: new URL("/assets/bg2-BLQy1KEA.png", import.meta.url).href,
            green: new URL("/assets/bg2-BLQy1KEA.png", import.meta.url).href,
            red: new URL("/assets/bg2-BLQy1KEA.png", import.meta.url).href,
          },
        },
      ],
      p = g.map((E) => ({ ...E, image: E.colors[a] }));
    N.useEffect(() => {
      (o.current = o.current.slice(0, p.length)),
        (f.current = f.current.slice(0, p.length)),
        ne.set(o.current, { opacity: 0, scale: 0.8, x: "100%" });
      const E = ne.timeline();
      return (
        E.to(o.current[u], {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        }),
        E.to(
          o.current[u].querySelector("img"),
          {
            y: "-10px",
            duration: 0.5,
            ease: "power2.out",
            yoyo: !0,
            repeat: 1,
          },
          "-=0.5"
        ),
        () => clearInterval(interval)
      );
    }, []),
      N.useEffect(() => {
        if (o.current[u]) {
          const E = o.current[u].querySelector("img");
          ne.to(E, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              (E.src = g[u].colors[a]),
                ne.to(E, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.4,
                  ease: "power2.out",
                });
            },
          }),
            document.documentElement.style.setProperty("black", v(a));
        }
      }, [a]);
    const v = (E) => {
        const A = {
          black: "black",
          white: "white",
          lightblue: "lightblue",
          red: "#ef4444",
        };
        return A[E] || A.purple;
      },
      b = (E) => {
        ne.to(f.current, { backgroundColor: "#ccc", scale: 1, duration: 0.3 }),
          ne.to(f.current[E], {
            backgroundColor: v(a),
            scale: 1.3,
            duration: 0.3,
          });
      },
      x = (E) => {
        if (E === u || m.current) return;
        m.current = !0;
        const A = ne.timeline({
            onComplete: () => {
              (m.current = !1), l(E);
            },
          }),
          O = E > u ? 1 : -1;
        A.to(o.current[u], {
          opacity: 0,
          scale: 0.8,
          x: -100 * O + "%",
          duration: 0.7,
          ease: "power3.in",
        }),
          A.set(o.current[E], { x: 100 * O + "%", opacity: 0, scale: 0.8 }, 0),
          A.to(o.current[E], {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          }),
          b(E);
      },
      _ = () => {
        const E = (u + 1) % p.length;
        x(E);
      },
      w = () => {
        const E = (u - 1 + p.length) % p.length;
        x(E);
      },
      T = (E) => {
        i(E);
      };
    return d.jsxs("div", {
      className: "carousel-container",
      children: [
        d.jsxs("div", {
          ref: s,
          className: "carousel",
          children: [
            p.map((E, A) =>
              d.jsx(
                "div",
                {
                  ref: (O) => (o.current[A] = O),
                  className: "slide",
                  children: d.jsx("div", {
                    className: "chair-image",
                    children: d.jsx("img", { src: E.image, alt: E.title }),
                  }),
                },
                E.id
              )
            ),
            d.jsx(vj, {
              className: "chair-info",
              onColorChange: T,
              currentColor: a,
            }),
          ],
        }),
        d.jsxs("div", {
          className: "carousel-controls",
          children: [
            d.jsx("button", {
              className: "control-button prev",
              onClick: w,
              children: d.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                className: "prevsvg",
                children: d.jsx("polyline", { points: "15 18 9 12 15 6" }),
              }),
            }),
            d.jsx("button", {
              className: "control-button next",
              onClick: _,
              children: d.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: d.jsx("polyline", { points: "9 18 15 12 9 6" }),
              }),
            }),
          ],
        }),
      ],
    });
  };
ne.registerPlugin(de);
const _j = () => {
    const u = N.useRef(null),
      l = N.useRef(null),
      a = N.useRef(null),
      i = N.useRef(null),
      s = N.useRef(null),
      o = N.useRef(null),
      f = N.useRef(null),
      m = N.useRef(null),
      g = N.useRef(null),
      p = N.useRef(null),
      v = N.useRef(null);
    return (
      N.useEffect(() => {
        if (!f.current) return;
        const b = [m.current, g.current, p.current, v.current];
        ne.set(b, { opacity: 0, scale: 0 });
        const x = ne.timeline({ paused: !0 });
        x.to(b, {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          stagger: 0.05,
          ease: "back.out(1.5)",
        });
        const _ = f.current,
          w = () => {
            x.play();
          },
          T = () => {
            x.reverse();
          };
        return (
          _.addEventListener("mouseenter", w),
          _.addEventListener("mouseleave", T),
          () => {
            _.removeEventListener("mouseenter", w),
              _.removeEventListener("mouseleave", T);
          }
        );
      }, []),
      N.useEffect(() => {
        const b = ne.timeline({
          scrollTrigger: {
            trigger: u.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
        return (
          b.from(a.current, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          }),
          b.from(
            [i.current, s.current, f.current],
            {
              y: 40,
              opacity: 0,
              stagger: 0.2,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.3"
          ),
          b.from(
            o.current,
            { x: 100, opacity: 0, duration: 1, ease: "power3.out" },
            "-=0.8"
          ),
          () => {
            b.scrollTrigger && b.scrollTrigger.kill();
          }
        );
      }, []),
      d.jsx("section", {
        className: "promo-section",
        ref: u,
        children: d.jsxs("div", {
          className: "container promo-container",
          children: [
            d.jsxs("div", {
              className: "promo-content",
              ref: l,
              children: [
                d.jsx("div", {
                  className: "promo-badge",
                  ref: a,
                  children: "New",
                }),
                d.jsx("h2", { ref: i, children: "Design your dream Home" }),
                d.jsx("p", {
                  ref: s,
                  children:
                    "This Octocat has some new tricks! Play your best hand (or tentacle!) with this deck of custom playing cards.",
                }),
                d.jsxs("div", {
                  className: "button-container",
                  ref: f,
                  children: [
                    d.jsx("div", { className: "corner2 top-left", ref: m }),
                    d.jsx("div", { className: "corner2 top-right", ref: g }),
                    d.jsx("div", { className: "corner2 bottom-left", ref: p }),
                    d.jsx("div", { className: "corner2 bottom-right", ref: v }),
                    d.jsxs("button", {
                      className: "touch-button",
                      children: [
                        "SHOP NOW",
                        d.jsx("img", {
                          src: Uu,
                          alt: "",
                          className: "arrow-icon",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            d.jsx(yj, {}),
          ],
        }),
      })
    );
  },
  xj = "/assets/bed-DQyi6Gzp.jpg",
  bj = "/assets/bb1-L3HYp59R.jpg";
ne.registerPlugin(de);
const Sj = () => {
  const u = N.useRef(null),
    l = N.useRef(null),
    a = N.useRef(null),
    i = N.useRef(null),
    s = N.useRef(null),
    o = N.useRef(null),
    f = N.useRef(null),
    m = N.useRef(null),
    g = N.useRef(null);
  N.useEffect(() => {
    if (!s.current) return;
    const v = [o.current, f.current, m.current, g.current];
    ne.set(v, { opacity: 0, scale: 0 });
    const b = ne.timeline({ paused: !0 });
    b.to(v, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      stagger: 0.05,
      ease: "back.out(1.5)",
    });
    const x = s.current,
      _ = () => {
        b.play();
      },
      w = () => {
        b.reverse();
      };
    return (
      x.addEventListener("mouseenter", _),
      x.addEventListener("mouseleave", w),
      () => {
        x.removeEventListener("mouseenter", _),
          x.removeEventListener("mouseleave", w);
      }
    );
  }, []),
    N.useEffect(() => {
      ne.timeline({
        scrollTrigger: {
          trigger: l.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
        .from(l.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          a.current,
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          s.current,
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
      const b = i.current.querySelectorAll(".category-card");
      return (
        ne.from(b, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: i.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }),
        () => {
          de.getAll().forEach((x) => x.kill());
        }
      );
    }, []);
  const p = [
    {
      id: 1,
      name: "Bedspreads",
      image: xj,
      link: "/shop",
      category: "bedspreads",
    },
    { id: 2, name: "Blankets", image: bj, link: "/shop", category: "blankets" },
    { id: 3, name: "Pillows", image: Hy, link: "/shop", category: "pillows" },
  ];
  return d.jsx("section", {
    className: "category-section",
    ref: u,
    children: d.jsxs("div", {
      className: "container",
      children: [
        d.jsxs("div", {
          className: "category-header",
          children: [
            d.jsx("h2", { ref: l, children: "Shop by category" }),
            d.jsx("p", {
              ref: a,
              children:
                "Explore our premium textile collection to transform your home: from luxurious bedspreads and cozy blankets to stylish decorative pillows.",
            }),
            d.jsx(Ge, {
              to: "/shop",
              children: d.jsxs("div", {
                className: "button-container",
                ref: s,
                children: [
                  d.jsx("div", { className: "corner2 top-left", ref: o }),
                  d.jsx("div", { className: "corner2 top-right", ref: f }),
                  d.jsx("div", { className: "corner2 bottom-left", ref: m }),
                  d.jsx("div", { className: "corner2 bottom-right", ref: g }),
                  d.jsxs("button", {
                    className: "touch-button",
                    children: [
                      "SHOP ALL",
                      d.jsx("img", {
                        src: Uu,
                        alt: "",
                        className: "arrow-icon",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        d.jsx("div", {
          className: "categories-grid",
          ref: i,
          children: p.map((v) =>
            d.jsxs(
              Ge,
              {
                to: v.link,
                className: "category-card",
                children: [
                  d.jsx("div", {
                    className: "category-image",
                    children: d.jsx("img", { src: v.image, alt: v.name }),
                  }),
                  d.jsxs("div", {
                    className: "category-name",
                    children: [
                      v.name,
                      d.jsx("img", {
                        src: Uu,
                        alt: "",
                        className: "category-arrow",
                      }),
                    ],
                  }),
                ],
              },
              v.id
            )
          ),
        }),
      ],
    }),
  });
};
ne.registerPlugin(de);
const jj = () => {
    const u = N.useRef(null),
      l = N.useRef(null),
      a = N.useRef(null),
      i = N.useRef(null),
      s = N.useRef(null),
      o = N.useRef(null),
      f = N.useRef(null);
    return (
      N.useEffect(() => {
        const m = ne.timeline({
          scrollTrigger: {
            trigger: u.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
        return (
          m
            .from(l.current, {
              y: 30,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            })
            .from(
              [a.current, i.current],
              {
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                ease: "power3.out",
              },
              "-=0.3"
            ),
          m.from(
            s.current.querySelectorAll("li"),
            {
              y: 15,
              opacity: 0,
              stagger: 0.1,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.3"
          ),
          m.from(
            f.current.querySelectorAll("div"),
            {
              y: 15,
              opacity: 0,
              stagger: 0.1,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.3"
          ),
          m.from(
            o.current.querySelectorAll("a"),
            {
              scale: 0,
              opacity: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          ),
          () => {
            m.scrollTrigger && m.scrollTrigger.kill();
          }
        );
      }, []),
      d.jsxs("footer", {
        className: "site-footer",
        ref: u,
        children: [
          d.jsxs("div", {
            className: "footer-main",
            children: [
              d.jsxs("div", {
                className: "container footer-container",
                children: [
                  d.jsxs("div", {
                    className: "footer-links",
                    ref: s,
                    children: [
                      d.jsxs("ul", {
                        children: [
                          d.jsx("li", {
                            children: d.jsx("a", {
                              href: "/collections/apparel",
                              children: "Apparel",
                            }),
                          }),
                          d.jsx("li", {
                            children: d.jsx("a", {
                              href: "/collections/lifestyle",
                              children: "Lifestyle",
                            }),
                          }),
                          d.jsx("li", {
                            children: d.jsx("a", {
                              href: "/collections/collectibles",
                              children: "Collectibles",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("ul", {
                        children: [
                          d.jsx("li", {
                            children: d.jsx(Ge, {
                              to: "/shoppinginfo",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: "FAQ",
                            }),
                          }),
                          d.jsx("li", {
                            children: d.jsx(Ge, {
                              to: "/contact",
                              className:
                                "text-gray-400 hover:text-white transition-colors",
                              children: "Contact Us",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "footer-newsletter",
                    children: [
                      d.jsx("p", {
                        ref: l,
                        children: "Sign up for deals and new collections.",
                      }),
                      d.jsxs("div", {
                        className: "newsletter-form",
                        children: [
                          d.jsx("input", {
                            type: "email",
                            placeholder: "Enter email address",
                            ref: a,
                          }),
                          d.jsx("button", {
                            type: "submit",
                            ref: i,
                            children: "Submit",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              d.jsx("div", {
                ref: f,
                className: "footer-background-text",
                children: "MAISONTISSU",
              }),
            ],
          }),
          d.jsx("div", {
            className: "footer-bottom",
            children: d.jsx("div", {
              className: "container",
              children: d.jsxs("div", {
                className: "footer-bottom-content",
                children: [
                  d.jsx("div", {
                    className: "footer-legal",
                    children: d.jsxs("ul", {
                      children: [
                        d.jsx("li", {
                          children: d.jsx("a", {
                            href: "/pages/terms",
                            children: "Terms",
                          }),
                        }),
                        d.jsx("li", {
                          children: d.jsx("a", {
                            href: "/pages/privacy-policy",
                            children: "Privacy",
                          }),
                        }),
                        d.jsx("li", {
                          children: d.jsx("span", {
                            children: "© 2025 Maison Tissu, Inc.",
                          }),
                        }),
                      ],
                    }),
                  }),
                  d.jsxs("div", {
                    className: "footer-socials",
                    ref: o,
                    children: [
                      d.jsx("a", {
                        href: "https://www.linkedin.com/company/github",
                        "aria-label": "LinkedIn",
                        children: d.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: d.jsx("path", {
                            d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
                          }),
                        }),
                      }),
                      d.jsx("a", {
                        href: "https://www.instagram.com/github/",
                        "aria-label": "Instagram",
                        children: d.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: d.jsx("path", {
                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                          }),
                        }),
                      }),
                      d.jsx("a", {
                        href: "https://www.youtube.com/github",
                        "aria-label": "YouTube",
                        children: d.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: d.jsx("path", {
                            d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                          }),
                        }),
                      }),
                      d.jsx("a", {
                        href: "https://twitter.com/github",
                        "aria-label": "Twitter",
                        children: d.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: d.jsx("path", {
                            d: "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.936 13.936 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616v.061a4.917 4.917 0 0 0 3.95 4.827 4.93 4.93 0 0 1-2.224.084 4.919 4.919 0 0 0 4.6 3.42A9.89 9.89 0 0 1 0 19.288a13.94 13.94 0 0 0 7.548 2.209c9.054 0 14.004-7.5 14.004-14.001 0-.21-.005-.42-.013-.63A9.936 9.936 0 0 0 24 4.557z",
                          }),
                        }),
                      }),
                      d.jsx("a", {
                        href: "https://github.com/github",
                        "aria-label": "GitHub",
                        children: d.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: d.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      })
    );
  },
  Tj = ({ item: u, removeFromCart: l, updateQuantity: a }) =>
    d.jsxs("div", {
      className: "cart-item",
      children: [
        d.jsx("div", {
          className: "cart-item-image",
          children: d.jsx(Ge, {
            to: `/product/${u.id}`,
            children: d.jsx("img", { src: u.image, alt: u.name }),
          }),
        }),
        d.jsxs("div", {
          className: "cart-item-details",
          children: [
            d.jsx("h3", {
              children: d.jsx(Ge, { to: `/product/${u.id}`, children: u.name }),
            }),
            u.selectedColor &&
              d.jsxs("p", {
                children: [
                  "Color: ",
                  d.jsx("span", {
                    className: "font-medium",
                    children: u.selectedColor,
                  }),
                ],
              }),
            u.selectedSize &&
              d.jsxs("p", {
                children: [
                  "Size: ",
                  d.jsx("span", {
                    className: "font-medium",
                    children: u.selectedSize,
                  }),
                ],
              }),
          ],
        }),
        d.jsxs("div", {
          className: "quantity-control",
          children: [
            d.jsx("button", {
              onClick: () => a(u.id, Math.max(1, u.quantity - 1)),
              children: "-",
            }),
            d.jsx("input", {
              type: "number",
              min: "1",
              value: u.quantity,
              onChange: (i) =>
                a(u.id, Math.max(1, parseInt(i.target.value) || 1)),
            }),
            d.jsx("button", {
              onClick: () => a(u.id, u.quantity + 1),
              children: "+",
            }),
          ],
        }),
        d.jsxs("div", {
          className: "cart-item-price",
          children: ["$", (u.price * u.quantity).toFixed(2)],
        }),
        d.jsx("div", {
          children: d.jsx("button", {
            onClick: () => l(u.id),
            className: "remove-button",
            "aria-label": "Remove item",
            children: d.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "remove-icon",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: d.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12",
              }),
            }),
          }),
        }),
      ],
    }),
  wj = ({
    cartItems: u,
    removeFromCart: l,
    updateQuantity: a,
    cartTotal: i,
  }) => {
    if (
      (Xo(() => {
        ne.from(".cart-item", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
          ease: "power1.out",
        }),
          ne.from(".cart-summary", {
            opacity: 0,
            x: 30,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
          });
      }, [u.length]),
      u.length === 0)
    )
      return d.jsxs("div", {
        className: "empty-cart",
        children: [
          d.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: d.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
            }),
          }),
          d.jsx("h2", { children: "Your Cart is Empty" }),
          d.jsx("p", {
            children:
              "Looks like you haven't added any products to your cart yet.",
          }),
          d.jsx(Ge, {
            to: "/shop",
            className: "shop-button",
            children: "Start Shopping",
          }),
        ],
      });
    const s = i * 0.07,
      o = i + s;
    return d.jsxs("div", {
      className: "cart-container",
      children: [
        d.jsx("div", {
          className: "cart-header",
          children: d.jsx("h1", { children: "Your Cart" }),
        }),
        d.jsxs("div", {
          className: "cart-grid",
          children: [
            d.jsxs("div", {
              className: "cart-items-container",
              children: [
                d.jsxs("div", {
                  className: "cart-table-header",
                  children: [
                    d.jsx("div", { children: "Product" }),
                    d.jsx("div", { children: "Details" }),
                    d.jsx("div", { children: "Quantity" }),
                    d.jsx("div", { children: "Price" }),
                    d.jsx("div", {}),
                  ],
                }),
                d.jsx("div", {
                  children: u.map((f) =>
                    d.jsx(
                      Tj,
                      { item: f, removeFromCart: l, updateQuantity: a },
                      `${f.id}-${f.selectedColor}-${f.selectedSize}`
                    )
                  ),
                }),
                d.jsx("div", {
                  className: "continue-shopping",
                  children: d.jsxs(Ge, {
                    to: "/shop",
                    children: [
                      d.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: d.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M10 19l-7-7m0 0l7-7m-7 7h18",
                        }),
                      }),
                      "Continue Shopping",
                    ],
                  }),
                }),
              ],
            }),
            d.jsxs("div", {
              className: "cart-summary",
              children: [
                d.jsx("h2", { children: "Order Summary" }),
                d.jsxs("div", {
                  className: "summary-row",
                  children: [
                    d.jsx("span", { className: "label", children: "Subtotal" }),
                    d.jsxs("span", {
                      className: "value",
                      children: ["$", i.toFixed(2)],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "summary-row",
                  children: [
                    d.jsx("span", { className: "label", children: "Shipping" }),
                    d.jsx("span", { className: "value", children: "Free" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "summary-row",
                  children: [
                    d.jsx("span", { className: "label", children: "Tax (7%)" }),
                    d.jsxs("span", {
                      className: "value",
                      children: ["$", s.toFixed(2)],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "summary-row total",
                  children: [
                    d.jsx("span", { className: "label", children: "Total" }),
                    d.jsxs("span", {
                      className: "value",
                      children: ["$", o.toFixed(2)],
                    }),
                  ],
                }),
                d.jsx(Ge, {
                  to: "/checkout",
                  className: "checkout-button",
                  children: "Proceed to Checkout",
                }),
                d.jsxs("div", {
                  className: "payment-methods",
                  children: [
                    d.jsx("p", { children: "We accept" }),
                    d.jsxs("div", {
                      className: "payment-icons",
                      children: [
                        d.jsx("div", { className: "payment-icon visa" }),
                        d.jsx("div", { className: "payment-icon mastercard" }),
                        d.jsx("div", { className: "payment-icon amex" }),
                        d.jsx("div", { className: "payment-icon paypal" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Q1 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.82054%2020.7313C8.21107%2021.1218%208.84423%2021.1218%209.23476%2020.7313L15.8792%2014.0868C17.0505%2012.9155%2017.0508%2011.0167%2015.88%209.84497L9.3097%203.26958C8.91918%202.87905%208.28601%202.87905%207.89549%203.26958C7.50497%203.6601%207.50497%204.29327%207.89549%204.68379L14.4675%2011.2558C14.8581%2011.6464%2014.8581%2012.2795%2014.4675%2012.67L7.82054%2019.317C7.43002%2019.7076%207.43002%2020.3407%207.82054%2020.7313Z'%20fill='%230F0F0F'/%3e%3c/svg%3e",
  Ej = ({ addToCart: u }) => {
    const l = N.useRef(null),
      a = N.useRef(null),
      i = N.useRef(null),
      s = N.useRef(null),
      [o, f] = N.useState("featured"),
      [m, g] = N.useState(!1),
      [p, v] = N.useState(!1),
      [b, x] = N.useState([]),
      [_, w] = N.useState("all");
    N.useEffect(() => {
      let C = [...Ia];
      _ !== "all" && (C = C.filter((U) => U.category === _)),
        o === "price-low"
          ? C.sort((U, V) => U.price - V.price)
          : o === "price-high"
          ? C.sort((U, V) => V.price - U.price)
          : o === "newest" && C.sort((U, V) => V.id - U.id),
        x(C);
    }, [o, _]),
      N.useEffect(() => {
        window.scrollTo(0, 0),
          de.refresh(),
          ne.fromTo(
            a.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          ),
          ne.fromTo(
            i.current,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", delay: 0.2 }
          );
        const C = s.current.querySelectorAll(".product-card");
        return (
          ne.fromTo(
            C,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
              delay: 0.4,
              scrollTrigger: {
                trigger: s.current,
                start: "top bottom-=100",
                toggleActions: "play none none none",
              },
            }
          ),
          x(Ia),
          () => {
            de.getAll().forEach((U) => U.kill());
          }
        );
      }, []);
    const T = () => {
        g(!m);
      },
      E = () => {
        v(!p);
      },
      A = (C) => {
        f(C), g(!1);
      },
      O = (C) => {
        u(C),
          ne.to(`#add-to-cart-${C.id}`, {
            scale: 1.1,
            duration: 0.2,
            yoyo: !0,
            repeat: 1,
          });
      },
      z = ["all", ...new Set(Ia.map((C) => C.category))];
    return d.jsx("div", {
      ref: l,
      className: "products-page",
      children: d.jsxs("div", {
        className: "shop-container",
        children: [
          d.jsxs("div", {
            ref: a,
            className: "products-header",
            children: [
              d.jsxs("div", {
                className: "breadcrumb",
                children: [
                  d.jsx(Ge, { to: "/", children: "HOME" }),
                  " / ",
                  d.jsx(Ge, { to: "/shop", children: "SHOP" }),
                  " /",
                  d.jsx("span", {
                    children:
                      _ === "all" ? " ALL PRODUCTS" : ` ${_.toUpperCase()}`,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "products-sorting",
                children: [
                  d.jsxs("div", {
                    className: "sort-by",
                    children: [
                      d.jsx("span", {
                        className: "sort-label",
                        children: "SORT BY:",
                      }),
                      d.jsxs("div", {
                        className: "sort-dropdown-container",
                        children: [
                          d.jsxs("button", {
                            className: "sort-dropdown-btn",
                            onClick: T,
                            children: [
                              o === "featured"
                                ? "FEATURED"
                                : o === "price-low"
                                ? "PRICE: LOW TO HIGH"
                                : o === "price-high"
                                ? "PRICE: HIGH TO LOW"
                                : o === "newest"
                                ? "NEWEST"
                                : "FEATURED",
                              d.jsx("img", {
                                src: Q1,
                                alt: "",
                                className: "arrow-icon",
                              }),
                            ],
                          }),
                          m &&
                            d.jsxs("div", {
                              className: "sort-dropdown-menu",
                              children: [
                                d.jsx("button", {
                                  className: `sort-option ${
                                    o === "featured" ? "active" : ""
                                  }`,
                                  onClick: () => A("featured"),
                                  children: "FEATURED",
                                }),
                                d.jsx("button", {
                                  className: `sort-option ${
                                    o === "price-low" ? "active" : ""
                                  }`,
                                  onClick: () => A("price-low"),
                                  children: "PRICE: LOW TO HIGH",
                                }),
                                d.jsx("button", {
                                  className: `sort-option ${
                                    o === "price-high" ? "active" : ""
                                  }`,
                                  onClick: () => A("price-high"),
                                  children: "PRICE: HIGH TO LOW",
                                }),
                                d.jsx("button", {
                                  className: `sort-option ${
                                    o === "newest" ? "active" : ""
                                  }`,
                                  onClick: () => A("newest"),
                                  children: "NEWEST",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "features-filter",
                    children: [
                      d.jsxs("button", {
                        className: "feature-dropdown-btn",
                        onClick: E,
                        children: [
                          "FEATURES ",
                          d.jsx("img", {
                            src: Q1,
                            alt: "",
                            className: "arrow-icon",
                          }),
                        ],
                      }),
                      p &&
                        d.jsxs("div", {
                          className: "feature-dropdown-menu",
                          children: [
                            d.jsxs("div", {
                              className: "feature-option",
                              children: [
                                d.jsx("input", {
                                  type: "checkbox",
                                  id: "feature-new",
                                }),
                                d.jsx("label", {
                                  htmlFor: "feature-new",
                                  children: "New Arrivals",
                                }),
                              ],
                            }),
                            d.jsxs("div", {
                              className: "feature-option",
                              children: [
                                d.jsx("input", {
                                  type: "checkbox",
                                  id: "feature-sale",
                                }),
                                d.jsx("label", {
                                  htmlFor: "feature-sale",
                                  children: "On Sale",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.jsxs("div", {
            className: "products-container",
            children: [
              d.jsxs("div", {
                ref: i,
                className: "products-sidebar",
                children: [
                  d.jsxs("div", {
                    className: "sidebar-section",
                    children: [
                      d.jsx("h3", {
                        className: "sidebar-title",
                        children: "All Products",
                      }),
                      d.jsxs("ul", {
                        className: "category-list",
                        children: [
                          z.map((C) =>
                            d.jsx(
                              "li",
                              {
                                className: `category-item ${
                                  _ === C ? "active" : ""
                                }`,
                                children: d.jsx("button", {
                                  className: "category-link-button",
                                  onClick: () => w(C),
                                  children:
                                    C === "all"
                                      ? "All Products"
                                      : C.charAt(0).toUpperCase() + C.slice(1),
                                }),
                              },
                              C
                            )
                          ),
                          d.jsx("li", {
                            className: "category-item",
                            children: d.jsx(Ge, {
                              to: "/shop",
                              className: "category-link",
                              children: "New Arrivals",
                            }),
                          }),
                          d.jsx("li", {
                            className: "category-item",
                            children: d.jsx(Ge, {
                              to: "/shop",
                              className: "category-link",
                              children: "Sale",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "sidebar-section",
                    children: [
                      d.jsx("h3", {
                        className: "sidebar-title",
                        children: "COLLECTION",
                      }),
                      d.jsxs("ul", {
                        className: "collection-list",
                        children: [
                          d.jsx("li", {
                            className: "collection-item",
                            children: d.jsx(Ge, {
                              to: "/shop",
                              className: "collection-link",
                              children: "Bedroom",
                            }),
                          }),
                          d.jsx("li", {
                            className: "collection-item",
                            children: d.jsx(Ge, {
                              to: "/shop",
                              className: "collection-link",
                              children: "Living Room",
                            }),
                          }),
                          d.jsx("li", {
                            className: "collection-item",
                            children: d.jsx(Ge, {
                              to: "/shop",
                              className: "collection-link",
                              children: "Dining",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "sidebar-section",
                    children: [
                      d.jsx("h3", {
                        className: "sidebar-title",
                        children: "COLOR",
                      }),
                      d.jsxs("div", {
                        className: "color-options",
                        children: [
                          d.jsx("button", {
                            className: "color-option",
                            style: { backgroundColor: "#ffffff" },
                            title: "White",
                          }),
                          d.jsx("button", {
                            className: "color-option",
                            style: { backgroundColor: "#f5f5dc" },
                            title: "Beige",
                          }),
                          d.jsx("button", {
                            className: "color-option",
                            style: { backgroundColor: "#808080" },
                            title: "Gray",
                          }),
                          d.jsx("button", {
                            className: "color-option",
                            style: { backgroundColor: "#1e3a8a" },
                            title: "Blue",
                          }),
                          d.jsx("button", {
                            className: "color-option",
                            style: { backgroundColor: "#172554" },
                            title: "Navy",
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "sidebar-section",
                    children: [
                      d.jsx("h3", {
                        className: "sidebar-title",
                        children: "SIZE",
                      }),
                      d.jsxs("div", {
                        className: "size-options",
                        children: [
                          d.jsx("button", {
                            className: "size-option",
                            children: "S",
                          }),
                          d.jsx("button", {
                            className: "size-option",
                            children: "M",
                          }),
                          d.jsx("button", {
                            className: "size-option",
                            children: "L",
                          }),
                          d.jsx("button", {
                            className: "size-option",
                            children: "Twin",
                          }),
                          d.jsx("button", {
                            className: "size-option",
                            children: "Queen",
                          }),
                          d.jsx("button", {
                            className: "size-option",
                            children: "King",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              d.jsx("div", {
                ref: s,
                className: "products-grid",
                children:
                  b.length > 0
                    ? b.map((C) =>
                        d.jsxs(
                          "div",
                          {
                            className: "product-card",
                            children: [
                              d.jsx("div", {
                                className: "product-image",
                                children: d.jsxs(Ge, {
                                  to: `/product/${C.id}`,
                                  children: [
                                    d.jsx("img", { src: C.image, alt: C.name }),
                                    C.isNew &&
                                      d.jsx("span", {
                                        className: "badge new-badge",
                                        children: "NEW",
                                      }),
                                    C.isOnSale &&
                                      d.jsx("span", {
                                        className: "badge sale-badge",
                                        children: "SALE",
                                      }),
                                  ],
                                }),
                              }),
                              d.jsxs("div", {
                                className: "product-info",
                                children: [
                                  d.jsx("h3", {
                                    className: "product-name",
                                    children: d.jsx(Ge, {
                                      to: `/product/${C.id}`,
                                      children: C.name,
                                    }),
                                  }),
                                  d.jsx("div", {
                                    className: "product-price",
                                    children: d.jsxs("span", {
                                      children: ["$", C.price.toFixed(2)],
                                    }),
                                  }),
                                  d.jsx("button", {
                                    id: `add-to-cart-${C.id}`,
                                    className: "add-to-cart-btn",
                                    onClick: () => O(C),
                                    children: "Add to Cart",
                                  }),
                                ],
                              }),
                            ],
                          },
                          C.id
                        )
                      )
                    : d.jsx("div", {
                        className: "no-products-message",
                        children: d.jsx("p", {
                          children:
                            "No products found in this category. Try a different filter.",
                        }),
                      }),
              }),
            ],
          }),
        ],
      }),
    });
  };
ne.registerPlugin(de, rr);
function Nj() {
  const u = N.useRef(null),
    l = N.useRef(null),
    a = N.useRef(null),
    i = N.useRef(null),
    s = N.useRef(null),
    o = N.useRef(null),
    f = N.useRef(null),
    m = N.useRef(null);
  return (
    N.useEffect(() => {
      if (!i.current) return;
      const g = [s.current, o.current, f.current, m.current];
      ne.set(g, { opacity: 0, scale: 0 });
      const p = ne.timeline({ paused: !0 });
      p.to(g, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.05,
        ease: "back.out(1.5)",
      });
      const v = i.current,
        b = () => {
          p.play();
        },
        x = () => {
          p.reverse();
        };
      v.addEventListener("mouseenter", b),
        v.addEventListener("mouseleave", x),
        ne.timeline({ defaults: { ease: "power3.out" } }),
        ne.fromTo(
          a.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1 }
        ),
        ne.fromTo(
          u.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: u.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      const _ = u.current.querySelectorAll(".form-element");
      return (
        ne.fromTo(
          _,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: u.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        ),
        l.current.querySelectorAll(".contact-item").forEach((T, E) => {
          const A = T.querySelector(".contact-icon"),
            O = T.querySelector(".contact-details");
          ne.timeline({
            scrollTrigger: {
              trigger: T,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          })
            .fromTo(
              A,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
            )
            .fromTo(
              O,
              { x: -30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
              "-=0.3"
            );
        }),
        () => {
          de.getAll().forEach((T) => T.kill());
        }
      );
    }, []),
    d.jsx("div", {
      className: "Contactpage",
      children: d.jsx("main", {
        className: "main-content",
        children: d.jsxs("div", {
          className: "contact-container",
          children: [
            d.jsxs("div", {
              className: "contact-header",
              ref: a,
              children: [
                d.jsx("h1", { children: "Contact Us" }),
                d.jsx("p", {
                  children:
                    "If you would like to contact the The Masion Tissu Shop with questions, comments, or suggestions, simply complete and submit the form. If you need help with a specific order, please include the order number in your message.",
                }),
              ],
            }),
            d.jsxs("form", {
              className: "contact-form",
              ref: u,
              children: [
                d.jsxs("div", {
                  className: "form-element",
                  children: [
                    d.jsx("label", { htmlFor: "name", children: "Name" }),
                    d.jsx("input", {
                      type: "text",
                      id: "name",
                      name: "name",
                      required: !0,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "form-element",
                  children: [
                    d.jsx("label", { htmlFor: "email", children: "Email" }),
                    d.jsx("input", {
                      type: "email",
                      id: "email",
                      name: "email",
                      required: !0,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "form-element",
                  children: [
                    d.jsx("label", {
                      htmlFor: "phone",
                      children: "Phone number",
                    }),
                    d.jsx("input", { type: "tel", id: "phone", name: "phone" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "form-element",
                  children: [
                    d.jsx("label", {
                      htmlFor: "message",
                      children: "How can we help?",
                    }),
                    d.jsx("textarea", {
                      id: "message",
                      name: "message",
                      rows: "6",
                      required: !0,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "button-container form-element",
                  ref: i,
                  children: [
                    d.jsx("div", { className: "corner2 top-left", ref: s }),
                    d.jsx("div", { className: "corner2 top-right", ref: o }),
                    d.jsx("div", { className: "corner2 bottom-left", ref: f }),
                    d.jsx("div", { className: "corner2 bottom-right", ref: m }),
                    d.jsx("button", {
                      className: "touch-button",
                      children: "SUBMIT",
                    }),
                  ],
                }),
              ],
            }),
            d.jsx("hr", { className: "divider" }),
            d.jsxs("div", {
              className: "contact-info",
              ref: l,
              children: [
                d.jsxs("div", {
                  className: "contact-item",
                  children: [
                    d.jsx("div", {
                      className: "contact-icon",
                      children: d.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: d.jsx("path", {
                          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                        }),
                      }),
                    }),
                    d.jsxs("div", {
                      className: "contact-details",
                      children: [
                        d.jsx("h3", { children: "Phone" }),
                        d.jsx("p", {
                          className: "phone-number",
                          children: "1-888-250-6439",
                        }),
                        d.jsxs("p", {
                          className: "contact-time",
                          children: [
                            "Call us toll-free",
                            d.jsx("br", {}),
                            "5:00 a.m. – 5:00 p.m. PST",
                            d.jsx("br", {}),
                            "Monday – Friday",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "contact-item",
                  children: [
                    d.jsx("div", {
                      className: "contact-icon",
                      children: d.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          d.jsx("path", {
                            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                          }),
                          d.jsx("polyline", { points: "22,6 12,13 2,6" }),
                        ],
                      }),
                    }),
                    d.jsxs("div", {
                      className: "contact-details",
                      children: [
                        d.jsx("h3", { children: "Email" }),
                        d.jsx("p", {
                          className: "email",
                          children: d.jsx("a", {
                            href: "mailto:shop@github.com",
                            children: "shop@MAISONTISSU.com",
                          }),
                        }),
                        d.jsxs("p", {
                          className: "contact-time",
                          children: [
                            "8:00 a.m. – 5:00 p.m. PST",
                            d.jsx("br", {}),
                            "Monday – Friday",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "contact-item",
                  children: [
                    d.jsx("div", {
                      className: "contact-icon",
                      children: d.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          d.jsx("path", {
                            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
                          }),
                          d.jsx("circle", { cx: "12", cy: "10", r: "3" }),
                        ],
                      }),
                    }),
                    d.jsxs("div", {
                      className: "contact-details",
                      children: [
                        d.jsx("h3", { children: "Mailing Address" }),
                        d.jsxs("p", {
                          className: "address",
                          children: [
                            "The GitHub Shop",
                            d.jsx("br", {}),
                            "C/O Bensussen, Deutsch & Associates, LLC:15525",
                            d.jsx("br", {}),
                            "Woodinville - Redmond Road NE Woodinville,",
                            d.jsx("br", {}),
                            "Washington 98072-8577",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
const Rj = () => {
    const u = N.useRef(null),
      l = N.useRef([]);
    N.useEffect(
      () => (
        window.scrollTo(0, 0),
        de.refresh(),
        ne.fromTo(u.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }),
        l.current.forEach((i, s) => {
          ne.fromTo(
            i,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: i,
                start: "top bottom-=100",
                toggleActions: "play none none none",
              },
            }
          );
        }),
        () => {
          de.getAll().forEach((i) => i.kill());
        }
      ),
      []
    );
    const a = (i) => {
      i && !l.current.includes(i) && l.current.push(i);
    };
    return d.jsx("div", {
      ref: u,
      className: "shopping-info-page",
      children: d.jsx("div", {
        className: "container",
        children: d.jsxs("div", {
          className: "shopping-info-grid",
          children: [
            d.jsx("aside", {
              className: "shopping-info-sidebar",
              children: d.jsxs("nav", {
                className: "sidebar-nav",
                children: [
                  d.jsx("h3", {
                    className: "sidebar-title",
                    children: "Shopping Info",
                  }),
                  d.jsxs("ul", {
                    className: "sidebar-nav-list",
                    children: [
                      d.jsx("li", {
                        className: "sidebar-nav-item",
                        children: d.jsx("a", {
                          href: "#time-to-process",
                          className: "sidebar-nav-link",
                          children: "Time to process",
                        }),
                      }),
                      d.jsx("li", {
                        className: "sidebar-nav-item",
                        children: d.jsx("a", {
                          href: "#transit-time",
                          className: "sidebar-nav-link",
                          children: "Transit time",
                        }),
                      }),
                      d.jsx("li", {
                        className: "sidebar-nav-item",
                        children: d.jsx("a", {
                          href: "#size-and-availability",
                          className: "sidebar-nav-link",
                          children: "Size and availability",
                        }),
                      }),
                      d.jsx("li", {
                        className: "sidebar-nav-item",
                        children: d.jsx("a", {
                          href: "#shipping",
                          className: "sidebar-nav-link",
                          children: "Shipping",
                        }),
                      }),
                      d.jsx("li", {
                        className: "sidebar-nav-item",
                        children: d.jsx("a", {
                          href: "#returns",
                          className: "sidebar-nav-link",
                          children: "Returns",
                        }),
                      }),
                      d.jsx("li", {
                        className: "sidebar-nav-item",
                        children: d.jsx("a", {
                          href: "#size-chart",
                          className: "sidebar-nav-link",
                          children: "Size chart",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsxs("div", {
              className: "shopping-info-content",
              children: [
                d.jsx("h1", {
                  className: "page-title",
                  children: "Shopping Info",
                }),
                d.jsxs("section", {
                  ref: a,
                  id: "time-to-process",
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Time to process",
                    }),
                    d.jsx("p", {
                      children:
                        "We fulfill all orders Monday through Friday, 9am-5pm ET. Orders take approximately 2-3 business days (Monday to Friday) to process once the order has been placed. Orders placed on Fridays, weekends, and holidays will begin processing the following business day. During the holiday season, processing times may be longer than usual.",
                    }),
                    d.jsx("p", {
                      children:
                        "Please note that all delivery dates provided at checkout are estimates and are not guaranteed. Delivery dates can vary depending on the country of delivery, shipping carrier delays, and customs processes.",
                    }),
                    d.jsxs("p", {
                      children: [
                        "If you're interested in placing a large group or bulk order, please contact us at",
                        " ",
                        d.jsx("a", {
                          href: "mailto:shop@github.com",
                          children: "shop@github.com",
                        }),
                        " and tell us how many items you're looking to order, and we can give you delivery expectations.",
                      ],
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  id: "transit-time",
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Transit time & availability",
                    }),
                    d.jsx("p", {
                      children:
                        "Our distribution center is located in the United States. Once your order has been processed and packaged, it'll be passed to the courier. Transit time will depend on the delivery address location.",
                    }),
                    d.jsxs("p", {
                      children: [
                        "We ship internationally and can deliver to most countries. If your country is not listed at checkout, please contact us at",
                        " ",
                        d.jsx("a", {
                          href: "mailto:shop@github.com",
                          children: "shop@github.com",
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  id: "size-and-availability",
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Size and availability",
                    }),
                    d.jsx("p", {
                      children:
                        "All inventory shown on the site is up to date. If you're looking for a size that's not currently listed on the product page, please check back later as we restock frequently.",
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  id: "shipping",
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Shipping",
                    }),
                    d.jsx("p", {
                      children:
                        "The GitHub Shop ships to most countries worldwide. Shipping costs are calculated at checkout based on your location and the items in your order.",
                    }),
                    d.jsxs("table", {
                      className: "shipping-table",
                      children: [
                        d.jsx("thead", {
                          children: d.jsxs("tr", {
                            children: [
                              d.jsx("th", { children: "Delivery Times" }),
                              d.jsx("th", { children: "Continental U.S." }),
                              d.jsx("th", {
                                children: "Hawaii, Alaska, U.S. territories",
                              }),
                              d.jsx("th", { children: "Canada" }),
                              d.jsx("th", { children: "International" }),
                            ],
                          }),
                        }),
                        d.jsxs("tbody", {
                          children: [
                            d.jsxs("tr", {
                              children: [
                                d.jsx("td", { children: "Standard" }),
                                d.jsx("td", { children: "3-7 days" }),
                                d.jsx("td", { children: "5-10 days" }),
                                d.jsx("td", { children: "5-10 days" }),
                                d.jsx("td", { children: "7-21 days" }),
                              ],
                            }),
                            d.jsxs("tr", {
                              children: [
                                d.jsx("td", { children: "Express" }),
                                d.jsx("td", { children: "2-3 days" }),
                                d.jsx("td", { children: "3-5 days" }),
                                d.jsx("td", { children: "3-5 days" }),
                                d.jsx("td", { children: "5-7 days" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsx("p", {
                      className: "info-note",
                      children:
                        "* Please note that delivery times are estimates and are not guaranteed. International shipments may be subject to customs delays, which are beyond our control.",
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  id: "returns",
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Returns",
                    }),
                    d.jsx("p", {
                      children:
                        "Our goal is your complete satisfaction with your GitHub Shop purchase. If you're not entirely satisfied, we're here to help.",
                    }),
                    d.jsxs("p", {
                      children: [
                        "You may return or exchange unworn, unwashed, or defective merchandise within 30 days of receiving your order. To initiate a return, please email",
                        " ",
                        d.jsx("a", {
                          href: "mailto:shop@github.com",
                          children: "shop@github.com",
                        }),
                        " with your order number and reason for return.",
                      ],
                    }),
                    d.jsx("p", {
                      children:
                        "Once your return is approved, you will receive return instructions. Return shipping costs are the responsibility of the customer unless the return is due to a defect or error on our part.",
                    }),
                    d.jsx("p", {
                      children:
                        "Unfortunately, we cannot accept returns on customized items, unless they are defective or damaged upon receipt.",
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  id: "size-chart",
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Size Chart",
                    }),
                    d.jsx("p", {
                      children:
                        "Finding the right fit is important. Use our size charts below as a guide to help you select the best size for your needs.",
                    }),
                    d.jsx("h3", {
                      className: "subsection-title",
                      children: "T-Shirts",
                    }),
                    d.jsxs("table", {
                      className: "size-table",
                      children: [
                        d.jsx("thead", {
                          children: d.jsxs("tr", {
                            children: [
                              d.jsx("th", {}),
                              d.jsx("th", { children: "XS" }),
                              d.jsx("th", { children: "S" }),
                              d.jsx("th", { children: "M" }),
                              d.jsx("th", { children: "L" }),
                              d.jsx("th", { children: "XL" }),
                              d.jsx("th", { children: "2XL" }),
                            ],
                          }),
                        }),
                        d.jsxs("tbody", {
                          children: [
                            d.jsxs("tr", {
                              children: [
                                d.jsx("td", { children: "Chest (inches)" }),
                                d.jsx("td", { children: "31-33" }),
                                d.jsx("td", { children: "34-36" }),
                                d.jsx("td", { children: "37-39" }),
                                d.jsx("td", { children: "40-42" }),
                                d.jsx("td", { children: "43-45" }),
                                d.jsx("td", { children: "46-48" }),
                              ],
                            }),
                            d.jsxs("tr", {
                              children: [
                                d.jsx("td", { children: "Chest (cm)" }),
                                d.jsx("td", { children: "79-84" }),
                                d.jsx("td", { children: "86-91" }),
                                d.jsx("td", { children: "94-99" }),
                                d.jsx("td", { children: "102-107" }),
                                d.jsx("td", { children: "109-114" }),
                                d.jsx("td", { children: "117-122" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsx("h3", {
                      className: "subsection-title",
                      children: "Hoodies",
                    }),
                    d.jsxs("table", {
                      className: "size-table",
                      children: [
                        d.jsx("thead", {
                          children: d.jsxs("tr", {
                            children: [
                              d.jsx("th", {}),
                              d.jsx("th", { children: "XS" }),
                              d.jsx("th", { children: "S" }),
                              d.jsx("th", { children: "M" }),
                              d.jsx("th", { children: "L" }),
                              d.jsx("th", { children: "XL" }),
                              d.jsx("th", { children: "2XL" }),
                            ],
                          }),
                        }),
                        d.jsxs("tbody", {
                          children: [
                            d.jsxs("tr", {
                              children: [
                                d.jsx("td", { children: "Chest (inches)" }),
                                d.jsx("td", { children: "33-35" }),
                                d.jsx("td", { children: "36-38" }),
                                d.jsx("td", { children: "39-41" }),
                                d.jsx("td", { children: "42-44" }),
                                d.jsx("td", { children: "45-47" }),
                                d.jsx("td", { children: "48-50" }),
                              ],
                            }),
                            d.jsxs("tr", {
                              children: [
                                d.jsx("td", { children: "Chest (cm)" }),
                                d.jsx("td", { children: "84-89" }),
                                d.jsx("td", { children: "91-97" }),
                                d.jsx("td", { children: "99-104" }),
                                d.jsx("td", { children: "107-112" }),
                                d.jsx("td", { children: "114-119" }),
                                d.jsx("td", { children: "122-127" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsx("p", {
                      className: "info-note",
                      children:
                        "* For fitted styles, we recommend sizing up if you prefer a more relaxed fit.",
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Customer Support",
                    }),
                    d.jsx("p", {
                      children:
                        "Have questions or need assistance? Our team is here to help!",
                    }),
                    d.jsxs("ul", {
                      className: "contact-list",
                      children: [
                        d.jsxs("li", {
                          children: [
                            d.jsx("strong", { children: "Email:" }),
                            " ",
                            d.jsx("a", {
                              href: "mailto:shop@github.com",
                              children: "shop@github.com",
                            }),
                          ],
                        }),
                        d.jsxs("li", {
                          children: [
                            d.jsx("strong", { children: "Hours:" }),
                            " Monday-Friday, 9am-5pm ET",
                          ],
                        }),
                        d.jsxs("li", {
                          children: [
                            d.jsx("strong", { children: "Response Time:" }),
                            " Within 1-2 business days",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Reviews",
                    }),
                    d.jsx("p", {
                      children:
                        "We love hearing from our customers! Reviews help us improve our products and service. After receiving your order, you'll receive an invitation to leave a product review via email.",
                    }),
                    d.jsxs("p", {
                      children: [
                        "If you have any questions about products before purchasing, feel free to contact us at",
                        " ",
                        d.jsx("a", {
                          href: "mailto:shop@github.com",
                          children: "shop@github.com",
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
                d.jsxs("section", {
                  ref: a,
                  className: "info-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "FAQs",
                    }),
                    d.jsxs("div", {
                      className: "faq-item",
                      children: [
                        d.jsx("h3", {
                          className: "faq-question",
                          children: "Do you ship internationally?",
                        }),
                        d.jsx("p", {
                          className: "faq-answer",
                          children:
                            "Yes, we ship to most countries around the world. Shipping costs and delivery times vary by location. If your country is not listed during checkout, please contact us.",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "faq-item",
                      children: [
                        d.jsx("h3", {
                          className: "faq-question",
                          children: "How much does shipping cost?",
                        }),
                        d.jsx("p", {
                          className: "faq-answer",
                          children:
                            "Shipping costs are calculated at checkout based on destination, weight, and selected shipping method. You'll see the exact cost before completing your purchase.",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "faq-item",
                      children: [
                        d.jsx("h3", {
                          className: "faq-question",
                          children: "Can I modify my order after it's placed?",
                        }),
                        d.jsx("p", {
                          className: "faq-answer",
                          children:
                            "We aim to process orders quickly, so we have limited ability to modify orders once placed. Please contact customer service immediately if you need to make changes.",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "faq-item",
                      children: [
                        d.jsx("h3", {
                          className: "faq-question",
                          children: "What is your return policy?",
                        }),
                        d.jsx("p", {
                          className: "faq-answer",
                          children:
                            "We accept returns within 30 days of purchase for unworn, unwashed items in original condition. Return shipping is the customer's responsibility unless the item is defective.",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "faq-item",
                      children: [
                        d.jsx("h3", {
                          className: "faq-question",
                          children:
                            "Where is my order? I haven't received a tracking number.",
                        }),
                        d.jsx("p", {
                          className: "faq-answer",
                          children:
                            "Tracking numbers are sent via email once orders are shipped. Please check your spam folder. If you still can't find it, please contact us with your order number.",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "faq-item",
                      children: [
                        d.jsx("h3", {
                          className: "faq-question",
                          children:
                            "Are GitHub Shop items different from GitHub Marketplace apparel?",
                        }),
                        d.jsx("p", {
                          className: "faq-answer",
                          children:
                            "Yes, GitHub Shop offers official merchandise from GitHub itself, while GitHub Marketplace apparel may be sold by third-party developers. Our shop items are designed and quality-checked by the GitHub team.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Aj = () => {
    const u = N.useRef(null),
      l = N.useRef(null),
      a = N.useRef(null),
      i = N.useRef(null),
      s = N.useRef(null),
      o = N.useRef(null),
      f = N.useRef(null),
      m = N.useRef(null),
      g = N.useRef(null);
    N.useEffect(() => {
      if (!s.current) return;
      const v = [o.current, f.current, m.current, g.current];
      ne.set(v, { opacity: 0, scale: 0 });
      const b = ne.timeline({ paused: !0 });
      b.to(v, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.05,
        ease: "back.out(1.5)",
      });
      const x = s.current,
        _ = () => {
          b.play();
        },
        w = () => {
          b.reverse();
        };
      return (
        x.addEventListener("mouseenter", _),
        x.addEventListener("mouseleave", w),
        () => {
          x.removeEventListener("mouseenter", _),
            x.removeEventListener("mouseleave", w);
        }
      );
    }, []),
      N.useEffect(
        () => (
          window.scrollTo(0, 0),
          de.refresh(),
          ne.fromTo(u.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }),
          ne.fromTo(
            l.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
          ),
          ne.fromTo(
            a.current.querySelectorAll("input, button, a"),
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              delay: 0.4,
            }
          ),
          ne.fromTo(
            i.current,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: "elastic.out(1, 0.5)",
              delay: 0.8,
            }
          ),
          () => {
            de.getAll().forEach((v) => v.kill());
          }
        ),
        []
      );
    const p = (v) => {
      v.preventDefault(), console.log("Login submitted");
    };
    return d.jsx("div", {
      ref: u,
      className: "login-page",
      children: d.jsx("div", {
        className: "container",
        children: d.jsxs("div", {
          ref: l,
          className: "login-content",
          children: [
            d.jsx("h1", {
              className: "login-title",
              children: "Sign into GitHub Shop",
            }),
            d.jsx("p", {
              className: "login-subtitle",
              children: "Use your email to access your account.",
            }),
            d.jsxs("div", {
              className: "new-account-prompt",
              children: [
                d.jsx("span", {
                  className: "new-account-text",
                  children: "New here?",
                }),
                d.jsx(Ge, {
                  to: "/",
                  className: "create-account-link",
                  children: "Create an account",
                }),
              ],
            }),
            d.jsxs("form", {
              ref: a,
              className: "login-form",
              onSubmit: p,
              children: [
                d.jsxs("div", {
                  className: "form-group",
                  children: [
                    d.jsx("label", {
                      htmlFor: "email",
                      className: "form-label",
                      children: "Email",
                    }),
                    d.jsx("input", {
                      type: "email",
                      id: "email",
                      className: "form-control",
                      placeholder: "Email",
                      required: !0,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "form-group",
                  children: [
                    d.jsxs("div", {
                      className: "password-header",
                      children: [
                        d.jsx("label", {
                          htmlFor: "password",
                          className: "form-label",
                          children: "Password",
                        }),
                        d.jsx(Ge, {
                          to: "/",
                          className: "forgot-password-link",
                          children: "Forgot your password?",
                        }),
                      ],
                    }),
                    d.jsx("input", {
                      type: "password",
                      id: "password",
                      className: "form-control",
                      placeholder: "Password",
                      required: !0,
                    }),
                  ],
                }),
                d.jsx(Ge, {
                  to: "/shop",
                  children: d.jsxs("div", {
                    className: "buttoncontainers",
                    ref: s,
                    children: [
                      d.jsx("div", { className: "corner2 top-left", ref: o }),
                      d.jsx("div", { className: "corner2 top-right", ref: f }),
                      d.jsx("div", {
                        className: "corner2 bottom-left",
                        ref: m,
                      }),
                      d.jsx("div", {
                        className: "corner2 bottom-right",
                        ref: g,
                      }),
                      d.jsx("button", {
                        type: "submit",
                        className: "touchbutton",
                        children: "LOGIN",
                      }),
                    ],
                  }),
                }),
                d.jsx("div", {
                  className: "sso-option",
                  children: d.jsxs("p", {
                    className: "sso-text",
                    children: [
                      "Have SSO credentials?",
                      " ",
                      d.jsx(Ge, {
                        to: "/",
                        className: "sso-link",
                        children: "Sign-in here",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Cj = ({ selectedColor: u }) => {
    const l = N.useRef(null),
      a = N.useRef(null),
      [i, s] = N.useState(0),
      [o, f] = N.useState(!1),
      [m, g] = N.useState(u),
      p = () => {
        switch (u) {
          case "blue":
            return "/src/assets/pillows/pillow-blue.png";
          case "mint":
            return "/src/assets/pillows/pillow-mint.png";
          case "decorative":
            return "/src/assets/pillows/pillow-decorative-set.png";
          case "monogram":
            return "/src/assets/pillows/pillow-decorative-e.png";
          default:
            return "/src/assets/pillows/pillow-white.png";
        }
      },
      v = [
        {
          name: "Front",
          rotation: { x: 0, y: 0 },
          scale: 1,
          position: { x: 0, y: 0 },
        },
        {
          name: "Side",
          rotation: { x: 5, y: 30 },
          scale: 0.95,
          position: { x: -20, y: 0 },
        },
        {
          name: "Closeup",
          rotation: { x: -5, y: -10 },
          scale: 1.3,
          position: { x: 30, y: -10 },
        },
        {
          name: "Material",
          rotation: { x: 10, y: -20 },
          scale: 1.1,
          position: { x: 10, y: 20 },
        },
      ];
    return (
      N.useEffect(() => {
        if (!l.current || m === u) return;
        f(!0),
          ne
            .timeline({
              onComplete: () => {
                f(!1), g(u);
              },
            })
            .to(l.current, {
              scale: 0.9,
              opacity: 0.7,
              duration: 0.3,
              ease: "power2.in",
            })
            .to(l.current, {
              scale: v[i].scale,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
            });
      }, [u]),
      N.useEffect(() => {
        if (!l.current) return;
        ne.set(l.current, {
          rotateX: 15,
          rotateY: -15,
          scale: 0.9,
          opacity: 0,
          y: 30,
        }),
          ne.to(l.current, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.75)",
            delay: 0.2,
          }),
          ne
            .timeline({ repeat: -1, yoyo: !0 })
            .to(l.current, { y: -10, duration: 2, ease: "sine.inOut" });
      }, []),
      N.useEffect(() => {
        if (!l.current) return;
        f(!0);
        const b = v[i];
        ne.to(l.current, {
          rotateX: b.rotation.x,
          rotateY: b.rotation.y,
          scale: b.scale,
          x: b.position.x,
          y: b.position.y,
          duration: 1.2,
          ease: "power3.out",
          onComplete: () => f(!1),
        });
      }, [i]),
      N.useEffect(() => {
        if (!a.current || !l.current) return;
        const b = a.current,
          x = (_) => {
            if (o) return;
            const {
                left: w,
                top: T,
                width: E,
                height: A,
              } = b.getBoundingClientRect(),
              O = (_.clientX - w) / E - 0.5,
              z = (_.clientY - T) / A - 0.5;
            ne.to(l.current, {
              rotateY: v[i].rotation.y + O * 10,
              rotateX: v[i].rotation.x - z * 10,
              duration: 0.5,
              ease: "power2.out",
            });
          };
        return (
          b.addEventListener("mousemove", x),
          () => {
            b.removeEventListener("mousemove", x);
          }
        );
      }, [i, o]),
      d.jsxs("div", {
        className: "product-viewer",
        children: [
          d.jsx("div", {
            className: "product-viewer-container",
            ref: a,
            children: d.jsx("div", {
              className: "product-image-wrapper",
              children: d.jsx("div", {
                className: "product-images",
                ref: l,
                children: d.jsx("img", { src: p(), alt: "Luxury Pillow" }),
              }),
            }),
          }),
          d.jsx("div", {
            className: "product-thumbnails",
            children: v.map((b, x) =>
              d.jsx(
                "button",
                {
                  className: `thumbnail ${i === x ? "active" : ""}`,
                  onClick: () => !o && s(x),
                  children: d.jsx("span", { children: b.name }),
                },
                x
              )
            ),
          }),
        ],
      })
    );
  },
  Mj = ({ colors: u, selectedColor: l, onSelectColor: a }) => {
    const i = (s) => {
      switch (s) {
        case "white":
          return "#ffffff";
        case "blue":
          return "#3b5998";
        case "mint":
          return "#a7e8bd";
        case "gray":
          return "#7d8491";
        case "beige":
          return "#e8d2b7";
        case "decorative":
          return "linear-gradient(45deg, #3b5998 25%, #a7e8bd 25%, #a7e8bd 50%, #7d8491 50%, #7d8491 75%, #e8d2b7 75%)";
        case "monogram":
          return "linear-gradient(45deg, #ffffff 50%, #000000 50%)";
        default:
          return "#ffffff";
      }
    };
    return d.jsx("div", {
      className: "color-selector",
      children: u.map((s) =>
        d.jsx(
          "button",
          {
            className: `coloroption ${l === s.name ? "active" : ""}`,
            style: {
              background: i(s.name),
              border: s.name === "white" ? "1px solid #e0e0e0" : "none",
            },
            onClick: () => a(s.name),
            "aria-label": `Select ${s.label}`,
            title: s.label,
          },
          s.name
        )
      ),
    });
  },
  Oj = ({ sizes: u, selectedSize: l, onSelectSize: a }) =>
    d.jsx("div", {
      className: "size-selector",
      children: u.map((i) =>
        d.jsx(
          "button",
          {
            className: `size-option ${l === i.name ? "active" : ""}`,
            onClick: () => a(i.name),
            children: i.label,
          },
          i.name
        )
      ),
    }),
  Dj = ({ quantity: u, onQuantityChange: l }) => {
    const a = () => {
        u > 1 && l(u - 1);
      },
      i = () => {
        l(u + 1);
      };
    return d.jsxs("div", {
      className: "quantity-selector",
      children: [
        d.jsx("button", {
          className: "quantity-btn decrease",
          onClick: a,
          disabled: u <= 1,
          "aria-label": "Decrease quantity",
          children: d.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: d.jsx("path", {
              d: "M5 12H19",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        }),
        d.jsx("div", { className: "quantity", children: u }),
        d.jsx("button", {
          className: "quantity-btn increase",
          onClick: i,
          "aria-label": "Increase quantity",
          children: d.jsxs("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              d.jsx("path", {
                d: "M12 5V19",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              d.jsx("path", {
                d: "M5 12H19",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        }),
      ],
    });
  },
  zj = ({
    product: u,
    selectedColor: l,
    setSelectedColor: a,
    selectedSize: i,
    setSelectedSize: s,
    quantity: o,
    setQuantity: f,
    onAddToCart: m,
  }) => {
    const g = u.colors && u.colors.find((E) => E.name === l),
      p = u.sizes && u.sizes.find((E) => E.name === i),
      v = N.useRef(null),
      b = N.useRef(null),
      x = N.useRef(null),
      _ = N.useRef(null),
      w = N.useRef(null);
    N.useEffect(() => {
      if (!v.current) return;
      const E = [b.current, x.current, _.current, w.current];
      ne.set(E, { opacity: 0, scale: 0 });
      const A = ne.timeline({ paused: !0 });
      A.to(E, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.05,
        ease: "back.out(1.5)",
      });
      const O = v.current,
        z = () => {
          A.play();
        },
        C = () => {
          A.reverse();
        };
      return (
        O.addEventListener("mouseenter", z),
        O.addEventListener("mouseleave", C),
        () => {
          O.removeEventListener("mouseenter", z),
            O.removeEventListener("mouseleave", C);
        }
      );
    }, []);
    const T = () => {
      if (m) {
        m();
        const E = (g == null ? void 0 : g.label) || l,
          A = (p == null ? void 0 : p.label) || i;
        alert(`Added to cart: ${o} ${E} ${u.name} (${A})`);
      }
    };
    return d.jsxs("div", {
      className: "product-info",
      children: [
        d.jsx("div", { className: "product-brand", children: "Maison Tissu" }),
        d.jsx("h2", { className: "product-name", children: u.name }),
        d.jsxs("div", {
          className: "product-price",
          children: ["$", u.price.toFixed(2)],
        }),
        d.jsx("div", {
          className: "product-rating",
          children: [1, 2, 3, 4, 5].map((E) =>
            d.jsx("span", { className: "star", children: "★" }, E)
          ),
        }),
        d.jsx("p", {
          className: "product-description",
          children: u.description,
        }),
        d.jsx("ul", {
          className: "product-features",
          children:
            u.features &&
            u.features.map((E, A) => d.jsx("li", { children: E }, A)),
        }),
        u.colors &&
          u.colors.length > 0 &&
          d.jsxs("div", {
            className: "product-color-section",
            children: [
              d.jsxs("h3", {
                children: [
                  "Color ",
                  d.jsx("span", {
                    children: (g == null ? void 0 : g.label) || l,
                  }),
                ],
              }),
              d.jsx(Mj, {
                colors: u.colors,
                selectedColor: l,
                onSelectColor: a,
              }),
            ],
          }),
        u.sizes &&
          u.sizes.length > 0 &&
          d.jsxs("div", {
            className: "product-size-section",
            children: [
              d.jsxs("h3", {
                children: [
                  "Size ",
                  d.jsx("span", {
                    children: (p == null ? void 0 : p.dimensions) || i,
                  }),
                ],
              }),
              d.jsx(Oj, { sizes: u.sizes, selectedSize: i, onSelectSize: s }),
            ],
          }),
        d.jsxs("div", {
          className: "product-quantity-section",
          children: [
            d.jsx("h3", { children: "Quantity" }),
            d.jsx(Dj, { quantity: o, onQuantityChange: f }),
          ],
        }),
        d.jsxs("div", {
          className: "button-container button-add",
          ref: v,
          children: [
            d.jsx("div", { className: "corner2 top-left", ref: b }),
            d.jsx("div", { className: "corner2 top-right", ref: x }),
            d.jsx("div", { className: "corner2 bottom-left", ref: _ }),
            d.jsx("div", { className: "corner2 bottom-right", ref: w }),
            d.jsxs("button", {
              className: "touch-button",
              onClick: T,
              children: [
                "Add To Cart",
                d.jsx("img", { src: Uu, alt: "", className: "arrow-icon" }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function kj({ addToCart: u }) {
  const [l, a] = N.useState("white"),
    [i, s] = N.useState("standard"),
    [o, f] = N.useState(1),
    m = Qh(),
    { id: g } = M2(),
    p = Ia.find((b) => b.id === parseInt(g));
  if (
    (N.useEffect(() => {
      p || m("/shop");
    }, [p, m]),
    !p)
  )
    return d.jsxs("div", {
      className: "container py-32 text-center",
      children: [
        d.jsx("h2", { children: "Product not found" }),
        d.jsx("p", {
          children: "We couldn't find the product you're looking for.",
        }),
      ],
    });
  N.useEffect(() => {
    p &&
      (p.colors && p.colors.length > 0 && a(p.colors[0].name),
      p.sizes && p.sizes.length > 0 && s(p.sizes[0].name));
  }, [p]);
  const v = () => {
    const b = p.sizes && p.sizes.find((w) => w.name === i),
      x = b ? b.price : p.price,
      _ = { ...p, selectedColor: l, selectedSize: i, price: x };
    u(_, o);
  };
  return d.jsx("div", {
    className: "heroproduct",
    children: d.jsxs("main", {
      className: "product-container",
      children: [
        d.jsx(Cj, { selectedColor: l, product: p }),
        d.jsx(zj, {
          product: p,
          selectedColor: l,
          setSelectedColor: a,
          selectedSize: i,
          setSelectedSize: s,
          quantity: o,
          setQuantity: f,
          onAddToCart: v,
        }),
      ],
    }),
  });
}
const Lj = () => {
  const u = N.useRef(null),
    l = N.useRef(null),
    a = N.useRef(null);
  return (
    N.useEffect(() => {
      window.scrollTo(0, 0), de.refresh();
      const i = ne.timeline();
      return (
        i.fromTo(
          l.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        ),
        i.fromTo(
          a.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        ),
        ne.utils.toArray(".checkout-section").forEach((s, o) => {
          ne.fromTo(
            s,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: 0.2 * o,
              scrollTrigger: {
                trigger: s,
                start: "top bottom-=100",
                toggleActions: "play none none none",
              },
            }
          );
        }),
        () => {
          i.kill(), de.getAll().forEach((s) => s.kill());
        }
      );
    }, []),
    d.jsx("div", {
      ref: u,
      className: "checkout-page",
      children: d.jsx("div", {
        className: "container",
        children: d.jsxs("div", {
          className: "checkout-grid",
          children: [
            d.jsxs("div", {
              ref: l,
              className: "checkout-form",
              children: [
                d.jsx("h1", {
                  className: "checkout-title",
                  children: "Express checkout",
                }),
                d.jsxs("button", {
                  className: "shop-pay-button",
                  children: [
                    d.jsx("span", {
                      className: "shop-pay-text",
                      children: "Shop",
                    }),
                    d.jsx("span", {
                      className: "shop-pay-icon",
                      children: "Pay",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "checkout-divider",
                  children: [
                    d.jsx("span", { className: "divider-line" }),
                    d.jsx("span", {
                      className: "divider-text",
                      children: "OR",
                    }),
                    d.jsx("span", { className: "divider-line" }),
                  ],
                }),
                d.jsxs("section", {
                  className: "checkout-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Contact",
                    }),
                    d.jsx("div", {
                      className: "login-link-container",
                      children: d.jsx(Ge, {
                        to: "/login",
                        className: "login-link",
                        children: "Log in",
                      }),
                    }),
                    d.jsx("div", {
                      className: "form-group",
                      children: d.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Email or mobile phone number",
                      }),
                    }),
                    d.jsxs("div", {
                      className: "form-checkbox",
                      children: [
                        d.jsx("input", {
                          type: "checkbox",
                          id: "newsletter",
                          className: "checkbox-input",
                        }),
                        d.jsx("label", {
                          htmlFor: "newsletter",
                          className: "checkbox-label",
                          children: "Email me with news and offers",
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("section", {
                  className: "checkout-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Delivery",
                    }),
                    d.jsx("div", {
                      className: "form-group",
                      children: d.jsx("div", {
                        className: "select-wrapper",
                        children: d.jsxs("select", {
                          className: "form-control",
                          children: [
                            d.jsx("option", {
                              value: "AF",
                              children: "Afghanistan",
                            }),
                            d.jsx("option", {
                              value: "AL",
                              children: "Albania",
                            }),
                            d.jsx("option", {
                              value: "DZ",
                              children: "Algeria",
                            }),
                            d.jsx("option", {
                              value: "AS",
                              children: "American Samoa",
                            }),
                          ],
                        }),
                      }),
                    }),
                    d.jsxs("div", {
                      className: "form-row",
                      children: [
                        d.jsx("div", {
                          className: "form-group",
                          children: d.jsx("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "First name",
                          }),
                        }),
                        d.jsx("div", {
                          className: "form-group",
                          children: d.jsx("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Last name",
                          }),
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "form-group",
                      children: d.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Company (optional)",
                      }),
                    }),
                    d.jsx("div", {
                      className: "form-group",
                      children: d.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Address",
                      }),
                    }),
                    d.jsx("div", {
                      className: "form-group",
                      children: d.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Apartment, suite, etc. (optional)",
                      }),
                    }),
                    d.jsxs("div", {
                      className: "form-row",
                      children: [
                        d.jsx("div", {
                          className: "form-group",
                          children: d.jsx("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "City",
                          }),
                        }),
                        d.jsx("div", {
                          className: "form-group",
                          children: d.jsx("input", {
                            type: "text",
                            className: "form-control",
                            placeholder: "Postal code (optional)",
                          }),
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "form-group",
                      children: d.jsx("div", {
                        className: "input-with-icon",
                        children: d.jsx("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Phone",
                        }),
                      }),
                    }),
                  ],
                }),
                d.jsxs("section", {
                  className: "checkout-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Shipping method",
                    }),
                    d.jsxs("div", {
                      className: "shipping-info-box",
                      children: [
                        d.jsx("div", { className: "shipping-info-icon" }),
                        d.jsx("p", {
                          className: "shipping-info-text",
                          children:
                            "Order processing times: Please allow 2-3 business days for orders shipping within the United States and 5-7 business days for orders shipping outside of the United States, followed by shipping times. All orders ship from the United States.",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "shipping-method-placeholder",
                      children: d.jsx("p", {
                        className: "shipping-method-text",
                        children:
                          "Enter your shipping address to view available shipping methods.",
                      }),
                    }),
                  ],
                }),
                d.jsxs("section", {
                  className: "checkout-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Payment",
                    }),
                    d.jsx("p", {
                      className: "payment-secure-text",
                      children: "All transactions are secure and encrypted.",
                    }),
                    d.jsxs("div", {
                      className: "payment-option",
                      children: [
                        d.jsxs("div", {
                          className: "payment-option-header",
                          children: [
                            d.jsxs("div", {
                              className: "radio-group",
                              children: [
                                d.jsx("input", {
                                  type: "radio",
                                  id: "credit-card",
                                  name: "payment-method",
                                  className: "radio-input",
                                  checked: !0,
                                  readOnly: !0,
                                }),
                                d.jsx("label", {
                                  htmlFor: "credit-card",
                                  className: "radio-label",
                                  children: "Credit card",
                                }),
                              ],
                            }),
                            d.jsxs("div", {
                              className: "credit-card-icons",
                              children: [
                                d.jsx("span", {
                                  className: "card-icon visa",
                                  children: "visa",
                                }),
                                d.jsx("span", {
                                  className: "card-icon mastercard",
                                  children: "mastercard",
                                }),
                                d.jsx("span", {
                                  className: "card-icon amex",
                                  children: "amex",
                                }),
                                d.jsx("span", {
                                  className: "card-icon discover",
                                  children: "discover",
                                }),
                                d.jsx("span", {
                                  className: "card-icon more",
                                  children: "+3",
                                }),
                              ],
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          className: "credit-card-form",
                          children: [
                            d.jsx("div", {
                              className: "form-group",
                              children: d.jsxs("div", {
                                className: "input-with-icon card-number-input",
                                children: [
                                  d.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Card number",
                                  }),
                                  d.jsx("span", { className: "lock-icon" }),
                                ],
                              }),
                            }),
                            d.jsxs("div", {
                              className: "form-row",
                              children: [
                                d.jsx("div", {
                                  className: "form-group",
                                  children: d.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Expiration date (MM / YY)",
                                  }),
                                }),
                                d.jsx("div", {
                                  className: "form-group",
                                  children: d.jsx("div", {
                                    className: "input-with-icon",
                                    children: d.jsx("input", {
                                      type: "text",
                                      className: "form-control",
                                      placeholder: "Security code",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            d.jsx("div", {
                              className: "form-group",
                              children: d.jsx("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Name on card",
                              }),
                            }),
                            d.jsxs("div", {
                              className: "form-checkbox",
                              children: [
                                d.jsx("input", {
                                  type: "checkbox",
                                  id: "billing-address",
                                  className: "checkbox-input",
                                  checked: !0,
                                  readOnly: !0,
                                }),
                                d.jsx("label", {
                                  htmlFor: "billing-address",
                                  className: "checkbox-label",
                                  children:
                                    "Use shipping address as billing address",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("section", {
                  className: "checkout-section",
                  children: [
                    d.jsx("h2", {
                      className: "section-title",
                      children: "Remember me",
                    }),
                    d.jsxs("div", {
                      className: "form-checkbox",
                      children: [
                        d.jsx("input", {
                          type: "checkbox",
                          id: "save-info",
                          className: "checkbox-input",
                          checked: !0,
                          readOnly: !0,
                        }),
                        d.jsx("label", {
                          htmlFor: "save-info",
                          className: "checkbox-label",
                          children:
                            "Save my information for a faster checkout with a Shop account",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "mobile-input-container",
                      children: [
                        d.jsx("div", {
                          className: "country-code",
                          children: "+93",
                        }),
                        d.jsx("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "Mobile phone number",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "secure-info",
                      children: [
                        d.jsx("span", { className: "secure-icon" }),
                        d.jsx("span", {
                          className: "secure-text",
                          children: "Secure and encrypted",
                        }),
                        d.jsx("span", {
                          className: "shop-logo",
                          children: "shop",
                        }),
                      ],
                    }),
                    d.jsx("button", {
                      className: "pay-button",
                      children: "Pay now",
                    }),
                    d.jsxs("p", {
                      className: "terms-text",
                      children: [
                        "Your info will be saved to a Shop account. By continuing, you agree to Shop's",
                        " ",
                        d.jsx("a", {
                          href: "#",
                          className: "terms-link",
                          children: "Terms of Service",
                        }),
                        " ",
                        "and acknowledge the",
                        " ",
                        d.jsx("a", {
                          href: "#",
                          className: "terms-link",
                          children: "Privacy Policy",
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "policy-links",
                  children: [
                    d.jsx("a", {
                      href: "#",
                      className: "policy-link",
                      children: "Refund policy",
                    }),
                    d.jsx("a", {
                      href: "#",
                      className: "policy-link",
                      children: "Shipping policy",
                    }),
                    d.jsx("a", {
                      href: "#",
                      className: "policy-link",
                      children: "Privacy policy",
                    }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              ref: a,
              className: "checkout-summary",
              children: d.jsxs("div", {
                className: "checkout-cart",
                children: [
                  d.jsxs("div", {
                    className: "cart-item",
                    children: [
                      d.jsx("div", {
                        className: "cart-item-image",
                        children: d.jsx("img", {
                          src: "https://github-shop.s3.us-west-2.amazonaws.com/product-tshirt.jpeg",
                          alt: "Invertocat 4.0 Shirt",
                        }),
                      }),
                      d.jsxs("div", {
                        className: "cart-item-details",
                        children: [
                          d.jsx("div", {
                            className: "cart-item-title",
                            children: "Invertocat 4.0 Shirt - Fitted",
                          }),
                          d.jsx("div", {
                            className: "cart-item-options",
                            children: "Black / XS / Consumer",
                          }),
                        ],
                      }),
                      d.jsx("div", {
                        className: "cart-item-price",
                        children: "$25.00",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "cart-item",
                    children: [
                      d.jsx("div", {
                        className: "cart-item-image",
                        children: d.jsx("img", {
                          src: "https://github-shop.s3.us-west-2.amazonaws.com/product-jacket.jpeg",
                          alt: "Mona Varsity Jacket",
                        }),
                      }),
                      d.jsxs("div", {
                        className: "cart-item-details",
                        children: [
                          d.jsx("div", {
                            className: "cart-item-title",
                            children: "Mona Varsity Jacket",
                          }),
                          d.jsx("div", {
                            className: "cart-item-options",
                            children: "S / Consumer",
                          }),
                        ],
                      }),
                      d.jsx("div", {
                        className: "cart-item-price",
                        children: "$100.00",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "discount-code-container",
                    children: [
                      d.jsx("input", {
                        type: "text",
                        className: "discount-code-input",
                        placeholder: "Discount code",
                      }),
                      d.jsx("button", {
                        className: "discount-code-button",
                        children: "Apply",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "cart-subtotal",
                    children: [
                      d.jsx("div", {
                        className: "subtotal-label",
                        children: "Subtotal · 2 items",
                      }),
                      d.jsx("div", {
                        className: "subtotal-amount",
                        children: "$125.00",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "cart-shipping",
                    children: [
                      d.jsx("div", {
                        className: "shipping-label",
                        children: "Shipping",
                      }),
                      d.jsx("div", {
                        className: "shipping-amount",
                        children: "Enter shipping address",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "cart-total",
                    children: [
                      d.jsx("div", {
                        className: "total-label",
                        children: "Total",
                      }),
                      d.jsxs("div", {
                        className: "total-amount",
                        children: [
                          d.jsx("span", {
                            className: "currency",
                            children: "USD",
                          }),
                          d.jsx("span", {
                            className: "amount",
                            children: "$125.00",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    })
  );
};
ne.registerPlugin(de, rr);
function Uj() {
  const [u, l] = N.useState([]),
    a = (f, m = 1) => {
      l((g) =>
        g.find((v) => v.id === f.id)
          ? g.map((v) =>
              v.id === f.id ? { ...v, quantity: v.quantity + m } : v
            )
          : [...g, { ...f, quantity: m }]
      );
    },
    i = (f) => {
      l((m) => m.filter((g) => g.id !== f));
    },
    s = (f, m) => {
      m < 1 || l((g) => g.map((p) => (p.id === f ? { ...p, quantity: m } : p)));
    },
    o = u.reduce((f, m) => f + m.price * m.quantity, 0);
  return (
    N.useEffect(() => {
      const f = document.querySelectorAll('a[href^="#"]');
      return (
        f.forEach((m) => {
          m.addEventListener("click", (g) => {
            g.preventDefault();
            const p = m.getAttribute("href");
            p !== "#" &&
              ne.to(window, {
                duration: 1,
                scrollTo: { y: p, offsetY: 100 },
                ease: "power3.inOut",
              });
          });
        }),
        () => {
          f.forEach((m) => {
            m.removeEventListener("click", () => {});
          });
        }
      );
    }, []),
    d.jsxs("div", {
      className: "app",
      children: [
        d.jsx(hj, { cartItemsCount: u.length }),
        d.jsxs(Z2, {
          children: [
            d.jsx(Si, {
              path: "/",
              element: d.jsxs(d.Fragment, {
                children: [
                  d.jsx(mj, {}),
                  d.jsx(gj, {}),
                  d.jsx(_j, {}),
                  d.jsx(Sj, {}),
                ],
              }),
            }),
            d.jsx(Si, {
              path: "/product/:id",
              element: d.jsx(kj, { addToCart: a }),
            }),
            d.jsx(Si, {
              path: "/cart",
              element: d.jsx(wj, {
                cartItems: u,
                removeFromCart: i,
                updateQuantity: s,
                cartTotal: o,
              }),
            }),
            d.jsx(Si, { path: "/login", element: d.jsx(Aj, {}) }),
            d.jsx(Si, { path: "/shop", element: d.jsx(Ej, { addToCart: a }) }),
            d.jsx(Si, { path: "/contact", element: d.jsx(Nj, {}) }),
            d.jsx(Si, { path: "/shoppinginfo", element: d.jsx(Rj, {}) }),
            d.jsx(Si, { path: "/checkout", element: d.jsx(Lj, {}) }),
          ],
        }),
        d.jsx(jj, {}),
      ],
    })
  );
}
t2.createRoot(document.getElementById("root")).render(
  d.jsx(pb, { children: d.jsx(Uj, {}) })
);
