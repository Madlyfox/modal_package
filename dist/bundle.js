/*! For license information please see bundle.js.LICENSE.txt */
!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var r = t();
    for (var n in r) ("object" == typeof exports ? exports : e)[n] = r[n];
  }
})(this, () =>
  (() => {
    "use strict";
    var e = {
        408: (e, t) => {
          var r = Symbol.for("react.element"),
            n = Symbol.for("react.portal"),
            o = Symbol.for("react.fragment"),
            u = Symbol.for("react.strict_mode"),
            a = Symbol.for("react.profiler"),
            c = Symbol.for("react.provider"),
            l = Symbol.for("react.context"),
            s = Symbol.for("react.forward_ref"),
            i = Symbol.for("react.suspense"),
            f = Symbol.for("react.memo"),
            p = Symbol.for("react.lazy"),
            y = Symbol.iterator,
            d = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            m = Object.assign,
            v = {};
          function b(e, t, r) {
            (this.props = e),
              (this.context = t),
              (this.refs = v),
              (this.updater = r || d);
          }
          function _() {}
          function h(e, t, r) {
            (this.props = e),
              (this.context = t),
              (this.refs = v),
              (this.updater = r || d);
          }
          (b.prototype.isReactComponent = {}),
            (b.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (b.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (_.prototype = b.prototype);
          var S = (h.prototype = new _());
          (S.constructor = h), m(S, b.prototype), (S.isPureReactComponent = !0);
          var E = Array.isArray,
            k = Object.prototype.hasOwnProperty,
            C = { current: null },
            w = { key: !0, ref: !0, __self: !0, __source: !0 };
          function g(e, t, n) {
            var o,
              u = {},
              a = null,
              c = null;
            if (null != t)
              for (o in (void 0 !== t.ref && (c = t.ref),
              void 0 !== t.key && (a = "" + t.key),
              t))
                k.call(t, o) && !w.hasOwnProperty(o) && (u[o] = t[o]);
            var l = arguments.length - 2;
            if (1 === l) u.children = n;
            else if (1 < l) {
              for (var s = Array(l), i = 0; i < l; i++) s[i] = arguments[i + 2];
              u.children = s;
            }
            if (e && e.defaultProps)
              for (o in (l = e.defaultProps)) void 0 === u[o] && (u[o] = l[o]);
            return {
              $$typeof: r,
              type: e,
              key: a,
              ref: c,
              props: u,
              _owner: C.current,
            };
          }
          function $(e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }
          var j = /\/+/g;
          function x(e, t) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var t = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    e.replace(/[=:]/g, function (e) {
                      return t[e];
                    })
                  );
                })("" + e.key)
              : t.toString(36);
          }
          function R(e, t, o, u, a) {
            var c = typeof e;
            ("undefined" !== c && "boolean" !== c) || (e = null);
            var l = !1;
            if (null === e) l = !0;
            else
              switch (c) {
                case "string":
                case "number":
                  l = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case r:
                    case n:
                      l = !0;
                  }
              }
            if (l)
              return (
                (a = a((l = e))),
                (e = "" === u ? "." + x(l, 0) : u),
                E(a)
                  ? ((o = ""),
                    null != e && (o = e.replace(j, "$&/") + "/"),
                    R(a, t, o, "", function (e) {
                      return e;
                    }))
                  : null != a &&
                    ($(a) &&
                      (a = (function (e, t) {
                        return {
                          $$typeof: r,
                          type: e.type,
                          key: t,
                          ref: e.ref,
                          props: e.props,
                          _owner: e._owner,
                        };
                      })(
                        a,
                        o +
                          (!a.key || (l && l.key === a.key)
                            ? ""
                            : ("" + a.key).replace(j, "$&/") + "/") +
                          e
                      )),
                    t.push(a)),
                1
              );
            if (((l = 0), (u = "" === u ? "." : u + ":"), E(e)))
              for (var s = 0; s < e.length; s++) {
                var i = u + x((c = e[s]), s);
                l += R(c, t, o, i, a);
              }
            else if (
              ((i = (function (e) {
                return null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (e = (y && e[y]) || e["@@iterator"])
                  ? e
                  : null;
              })(e)),
              "function" == typeof i)
            )
              for (e = i.call(e), s = 0; !(c = e.next()).done; )
                l += R((c = c.value), t, o, (i = u + x(c, s++)), a);
            else if ("object" === c)
              throw (
                ((t = String(e)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    ("[object Object]" === t
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : t) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
              );
            return l;
          }
          function O(e, t, r) {
            if (null == e) return e;
            var n = [],
              o = 0;
            return (
              R(e, n, "", "", function (e) {
                return t.call(r, e, o++);
              }),
              n
            );
          }
          function P(e) {
            if (-1 === e._status) {
              var t = e._result;
              (t = t()).then(
                function (t) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 1), (e._result = t));
                },
                function (t) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 2), (e._result = t));
                }
              ),
                -1 === e._status && ((e._status = 0), (e._result = t));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
          }
          var I = { current: null },
            T = { transition: null },
            N = {
              ReactCurrentDispatcher: I,
              ReactCurrentBatchConfig: T,
              ReactCurrentOwner: C,
            };
          (t.Children = {
            map: O,
            forEach: function (e, t, r) {
              O(
                e,
                function () {
                  t.apply(this, arguments);
                },
                r
              );
            },
            count: function (e) {
              var t = 0;
              return (
                O(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                O(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!$(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child."
                );
              return e;
            },
          }),
            (t.Component = b),
            (t.Fragment = o),
            (t.Profiler = a),
            (t.PureComponent = h),
            (t.StrictMode = u),
            (t.Suspense = i),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
            (t.cloneElement = function (e, t, n) {
              if (null == e)
                throw Error(
                  "React.cloneElement(...): The argument must be a React element, but you passed " +
                    e +
                    "."
                );
              var o = m({}, e.props),
                u = e.key,
                a = e.ref,
                c = e._owner;
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((a = t.ref), (c = C.current)),
                  void 0 !== t.key && (u = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var l = e.type.defaultProps;
                for (s in t)
                  k.call(t, s) &&
                    !w.hasOwnProperty(s) &&
                    (o[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
              }
              var s = arguments.length - 2;
              if (1 === s) o.children = n;
              else if (1 < s) {
                l = Array(s);
                for (var i = 0; i < s; i++) l[i] = arguments[i + 2];
                o.children = l;
              }
              return {
                $$typeof: r,
                type: e.type,
                key: u,
                ref: a,
                props: o,
                _owner: c,
              };
            }),
            (t.createContext = function (e) {
              return (
                ((e = {
                  $$typeof: l,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null,
                }).Provider = { $$typeof: c, _context: e }),
                (e.Consumer = e)
              );
            }),
            (t.createElement = g),
            (t.createFactory = function (e) {
              var t = g.bind(null, e);
              return (t.type = e), t;
            }),
            (t.createRef = function () {
              return { current: null };
            }),
            (t.forwardRef = function (e) {
              return { $$typeof: s, render: e };
            }),
            (t.isValidElement = $),
            (t.lazy = function (e) {
              return {
                $$typeof: p,
                _payload: { _status: -1, _result: e },
                _init: P,
              };
            }),
            (t.memo = function (e, t) {
              return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
            }),
            (t.startTransition = function (e) {
              var t = T.transition;
              T.transition = {};
              try {
                e();
              } finally {
                T.transition = t;
              }
            }),
            (t.unstable_act = function () {
              throw Error(
                "act(...) is not supported in production builds of React."
              );
            }),
            (t.useCallback = function (e, t) {
              return I.current.useCallback(e, t);
            }),
            (t.useContext = function (e) {
              return I.current.useContext(e);
            }),
            (t.useDebugValue = function () {}),
            (t.useDeferredValue = function (e) {
              return I.current.useDeferredValue(e);
            }),
            (t.useEffect = function (e, t) {
              return I.current.useEffect(e, t);
            }),
            (t.useId = function () {
              return I.current.useId();
            }),
            (t.useImperativeHandle = function (e, t, r) {
              return I.current.useImperativeHandle(e, t, r);
            }),
            (t.useInsertionEffect = function (e, t) {
              return I.current.useInsertionEffect(e, t);
            }),
            (t.useLayoutEffect = function (e, t) {
              return I.current.useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
              return I.current.useMemo(e, t);
            }),
            (t.useReducer = function (e, t, r) {
              return I.current.useReducer(e, t, r);
            }),
            (t.useRef = function (e) {
              return I.current.useRef(e);
            }),
            (t.useState = function (e) {
              return I.current.useState(e);
            }),
            (t.useSyncExternalStore = function (e, t, r) {
              return I.current.useSyncExternalStore(e, t, r);
            }),
            (t.useTransition = function () {
              return I.current.useTransition();
            }),
            (t.version = "18.2.0");
        },
        294: (e, t, r) => {
          e.exports = r(408);
        },
      },
      t = {};
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var u = (t[n] = { exports: {} });
      return e[n](u, u.exports, r), u.exports;
    }
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        r.r(n), r.d(n, { default: () => t });
        var e = r(294);
        const t = ({
          triggerElement: t,
          closeExisting: r = !0,
          escapeClose: n = !0,
          closeText: o,
          content: u,
          closeClass: a,
          modalClass: c = "modal",
          blockerClass: l = "real-modal",
          showClose: s = !0,
        }) => {
          const [i, f] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const e = (e) => {
              i && n && 27 === e.keyCode && p();
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, [i]);
          const p = () => {
              f(!1);
            },
            y = e.createElement(
              "div",
              { className: c },
              s &&
                e.createElement(
                  "a",
                  {
                    href: "#close-modal",
                    onClick: p,
                    className: `close-modal ${a}`,
                  },
                  o
                ),
              u
            );
          return i
            ? e.createElement(
                "div",
                null,
                e.createElement(
                  "div",
                  { className: l },
                  e.createElement("div", {
                    className: "blocker " + (i ? "current" : ""),
                  })
                ),
                y
              )
            : e.createElement(
                "span",
                {
                  onClick: () => {
                    r && p(), f(!0);
                  },
                },
                t
              );
        };
      })(),
      n
    );
  })()
);
