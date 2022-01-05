var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/_snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// build/_snowpack/pkg/common/index-210ebed7.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
      return test2[n3];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n3 = 60103, p3 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q3 = 60109, r3 = 60110, t3 = 60112;
  exports.Suspense = 60113;
  var u = 60115, v2 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w2 = Symbol.for;
    n3 = w2("react.element");
    p3 = w2("react.portal");
    exports.Fragment = w2("react.fragment");
    exports.StrictMode = w2("react.strict_mode");
    exports.Profiler = w2("react.profiler");
    q3 = w2("react.provider");
    r3 = w2("react.context");
    t3 = w2("react.forward_ref");
    exports.Suspense = w2("react.suspense");
    u = w2("react.memo");
    v2 = w2("react.lazy");
  }
  var x3 = typeof Symbol === "function" && Symbol.iterator;
  function y4(a2) {
    if (a2 === null || typeof a2 !== "object")
      return null;
    a2 = x3 && a2[x3] || a2["@@iterator"];
    return typeof a2 === "function" ? a2 : null;
  }
  function z3(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
      b2 += "&args[]=" + encodeURIComponent(arguments[c3]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A3 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B3 = {};
  function C2(a2, b2, c3) {
    this.props = a2;
    this.context = b2;
    this.refs = B3;
    this.updater = c3 || A3;
  }
  C2.prototype.isReactComponent = {};
  C2.prototype.setState = function(a2, b2) {
    if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  C2.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function D3() {
  }
  D3.prototype = C2.prototype;
  function E2(a2, b2, c3) {
    this.props = a2;
    this.context = b2;
    this.refs = B3;
    this.updater = c3 || A3;
  }
  var F3 = E2.prototype = new D3();
  F3.constructor = E2;
  objectAssign(F3, C2.prototype);
  F3.isPureReactComponent = true;
  var G3 = {current: null}, H3 = Object.prototype.hasOwnProperty, I3 = {key: true, ref: true, __self: true, __source: true};
  function J2(a2, b2, c3) {
    var e3, d3 = {}, k3 = null, h2 = null;
    if (b2 != null)
      for (e3 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k3 = "" + b2.key), b2)
        H3.call(b2, e3) && !I3.hasOwnProperty(e3) && (d3[e3] = b2[e3]);
    var g3 = arguments.length - 2;
    if (g3 === 1)
      d3.children = c3;
    else if (1 < g3) {
      for (var f2 = Array(g3), m3 = 0; m3 < g3; m3++)
        f2[m3] = arguments[m3 + 2];
      d3.children = f2;
    }
    if (a2 && a2.defaultProps)
      for (e3 in g3 = a2.defaultProps, g3)
        d3[e3] === void 0 && (d3[e3] = g3[e3]);
    return {$$typeof: n3, type: a2, key: k3, ref: h2, props: d3, _owner: G3.current};
  }
  function K2(a2, b2) {
    return {$$typeof: n3, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner};
  }
  function L2(a2) {
    return typeof a2 === "object" && a2 !== null && a2.$$typeof === n3;
  }
  function escape3(a2) {
    var b2 = {"=": "=0", ":": "=2"};
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var M3 = /\/+/g;
  function N3(a2, b2) {
    return typeof a2 === "object" && a2 !== null && a2.key != null ? escape3("" + a2.key) : b2.toString(36);
  }
  function O3(a2, b2, c3, e3, d3) {
    var k3 = typeof a2;
    if (k3 === "undefined" || k3 === "boolean")
      a2 = null;
    var h2 = false;
    if (a2 === null)
      h2 = true;
    else
      switch (k3) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a2.$$typeof) {
            case n3:
            case p3:
              h2 = true;
          }
      }
    if (h2)
      return h2 = a2, d3 = d3(h2), a2 = e3 === "" ? "." + N3(h2, 0) : e3, Array.isArray(d3) ? (c3 = "", a2 != null && (c3 = a2.replace(M3, "$&/") + "/"), O3(d3, b2, c3, "", function(a3) {
        return a3;
      })) : d3 != null && (L2(d3) && (d3 = K2(d3, c3 + (!d3.key || h2 && h2.key === d3.key ? "" : ("" + d3.key).replace(M3, "$&/") + "/") + a2)), b2.push(d3)), 1;
    h2 = 0;
    e3 = e3 === "" ? "." : e3 + ":";
    if (Array.isArray(a2))
      for (var g3 = 0; g3 < a2.length; g3++) {
        k3 = a2[g3];
        var f2 = e3 + N3(k3, g3);
        h2 += O3(k3, b2, c3, f2, d3);
      }
    else if (f2 = y4(a2), typeof f2 === "function")
      for (a2 = f2.call(a2), g3 = 0; !(k3 = a2.next()).done; )
        k3 = k3.value, f2 = e3 + N3(k3, g3++), h2 += O3(k3, b2, c3, f2, d3);
    else if (k3 === "object")
      throw b2 = "" + a2, Error(z3(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
    return h2;
  }
  function P3(a2, b2, c3) {
    if (a2 == null)
      return a2;
    var e3 = [], d3 = 0;
    O3(a2, e3, "", "", function(a3) {
      return b2.call(c3, a3, d3++);
    });
    return e3;
  }
  function Q2(a2) {
    if (a2._status === -1) {
      var b2 = a2._result;
      b2 = b2();
      a2._status = 0;
      a2._result = b2;
      b2.then(function(b3) {
        a2._status === 0 && (b3 = b3.default, a2._status = 1, a2._result = b3);
      }, function(b3) {
        a2._status === 0 && (a2._status = 2, a2._result = b3);
      });
    }
    if (a2._status === 1)
      return a2._result;
    throw a2._result;
  }
  var R3 = {current: null};
  function S3() {
    var a2 = R3.current;
    if (a2 === null)
      throw Error(z3(321));
    return a2;
  }
  var T3 = {ReactCurrentDispatcher: R3, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G3, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P3, forEach: function(a2, b2, c3) {
    P3(a2, function() {
      b2.apply(this, arguments);
    }, c3);
  }, count: function(a2) {
    var b2 = 0;
    P3(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return P3(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!L2(a2))
      throw Error(z3(143));
    return a2;
  }};
  exports.Component = C2;
  exports.PureComponent = E2;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T3;
  exports.cloneElement = function(a2, b2, c3) {
    if (a2 === null || a2 === void 0)
      throw Error(z3(267, a2));
    var e3 = objectAssign({}, a2.props), d3 = a2.key, k3 = a2.ref, h2 = a2._owner;
    if (b2 != null) {
      b2.ref !== void 0 && (k3 = b2.ref, h2 = G3.current);
      b2.key !== void 0 && (d3 = "" + b2.key);
      if (a2.type && a2.type.defaultProps)
        var g3 = a2.type.defaultProps;
      for (f2 in b2)
        H3.call(b2, f2) && !I3.hasOwnProperty(f2) && (e3[f2] = b2[f2] === void 0 && g3 !== void 0 ? g3[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (f2 === 1)
      e3.children = c3;
    else if (1 < f2) {
      g3 = Array(f2);
      for (var m3 = 0; m3 < f2; m3++)
        g3[m3] = arguments[m3 + 2];
      e3.children = g3;
    }
    return {
      $$typeof: n3,
      type: a2.type,
      key: d3,
      ref: k3,
      props: e3,
      _owner: h2
    };
  };
  exports.createContext = function(a2, b2) {
    b2 === void 0 && (b2 = null);
    a2 = {$$typeof: r3, _calculateChangedBits: b2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null};
    a2.Provider = {$$typeof: q3, _context: a2};
    return a2.Consumer = a2;
  };
  exports.createElement = J2;
  exports.createFactory = function(a2) {
    var b2 = J2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a2) {
    return {$$typeof: t3, render: a2};
  };
  exports.isValidElement = L2;
  exports.lazy = function(a2) {
    return {$$typeof: v2, _payload: {_status: -1, _result: a2}, _init: Q2};
  };
  exports.memo = function(a2, b2) {
    return {$$typeof: u, type: a2, compare: b2 === void 0 ? null : b2};
  };
  exports.useCallback = function(a2, b2) {
    return S3().useCallback(a2, b2);
  };
  exports.useContext = function(a2, b2) {
    return S3().useContext(a2, b2);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a2, b2) {
    return S3().useEffect(a2, b2);
  };
  exports.useImperativeHandle = function(a2, b2, c3) {
    return S3().useImperativeHandle(a2, b2, c3);
  };
  exports.useLayoutEffect = function(a2, b2) {
    return S3().useLayoutEffect(a2, b2);
  };
  exports.useMemo = function(a2, b2) {
    return S3().useMemo(a2, b2);
  };
  exports.useReducer = function(a2, b2, c3) {
    return S3().useReducer(a2, b2, c3);
  };
  exports.useRef = function(a2) {
    return S3().useRef(a2);
  };
  exports.useState = function(a2) {
    return S3().useState(a2);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/_snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f2, g3, h2, k3;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p3 = Date, q3 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q3;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t3 = null, u = null, w2 = function() {
      if (t3 !== null)
        try {
          var a2 = exports.unstable_now();
          t3(true, a2);
          t3 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a2) {
      t3 !== null ? setTimeout(f2, 0, a2) : (t3 = a2, setTimeout(w2, 0));
    };
    g3 = function(a2, b2) {
      u = setTimeout(a2, b2);
    };
    h2 = function() {
      clearTimeout(u);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k3 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x3 = window.setTimeout, y4 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z3 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A3 = false, B3 = null, C2 = -1, D3 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k3 = function() {
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D3 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F3 = new MessageChannel(), G3 = F3.port2;
    F3.port1.onmessage = function() {
      if (B3 !== null) {
        var a2 = exports.unstable_now();
        E2 = a2 + D3;
        try {
          B3(true, a2) ? G3.postMessage(null) : (A3 = false, B3 = null);
        } catch (b2) {
          throw G3.postMessage(null), b2;
        }
      } else
        A3 = false;
    };
    f2 = function(a2) {
      B3 = a2;
      A3 || (A3 = true, G3.postMessage(null));
    };
    g3 = function(a2, b2) {
      C2 = x3(function() {
        a2(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y4(C2);
      C2 = -1;
    };
  }
  function H3(a2, b2) {
    var c3 = a2.length;
    a2.push(b2);
    a:
      for (; ; ) {
        var d3 = c3 - 1 >>> 1, e3 = a2[d3];
        if (e3 !== void 0 && 0 < I3(e3, b2))
          a2[d3] = b2, a2[c3] = e3, c3 = d3;
        else
          break a;
      }
  }
  function J2(a2) {
    a2 = a2[0];
    return a2 === void 0 ? null : a2;
  }
  function K2(a2) {
    var b2 = a2[0];
    if (b2 !== void 0) {
      var c3 = a2.pop();
      if (c3 !== b2) {
        a2[0] = c3;
        a:
          for (var d3 = 0, e3 = a2.length; d3 < e3; ) {
            var m3 = 2 * (d3 + 1) - 1, n3 = a2[m3], v2 = m3 + 1, r3 = a2[v2];
            if (n3 !== void 0 && 0 > I3(n3, c3))
              r3 !== void 0 && 0 > I3(r3, n3) ? (a2[d3] = r3, a2[v2] = c3, d3 = v2) : (a2[d3] = n3, a2[m3] = c3, d3 = m3);
            else if (r3 !== void 0 && 0 > I3(r3, c3))
              a2[d3] = r3, a2[v2] = c3, d3 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I3(a2, b2) {
    var c3 = a2.sortIndex - b2.sortIndex;
    return c3 !== 0 ? c3 : a2.id - b2.id;
  }
  var L2 = [], M3 = [], N3 = 1, O3 = null, P3 = 3, Q2 = false, R3 = false, S3 = false;
  function T3(a2) {
    for (var b2 = J2(M3); b2 !== null; ) {
      if (b2.callback === null)
        K2(M3);
      else if (b2.startTime <= a2)
        K2(M3), b2.sortIndex = b2.expirationTime, H3(L2, b2);
      else
        break;
      b2 = J2(M3);
    }
  }
  function U3(a2) {
    S3 = false;
    T3(a2);
    if (!R3)
      if (J2(L2) !== null)
        R3 = true, f2(V3);
      else {
        var b2 = J2(M3);
        b2 !== null && g3(U3, b2.startTime - a2);
      }
  }
  function V3(a2, b2) {
    R3 = false;
    S3 && (S3 = false, h2());
    Q2 = true;
    var c3 = P3;
    try {
      T3(b2);
      for (O3 = J2(L2); O3 !== null && (!(O3.expirationTime > b2) || a2 && !exports.unstable_shouldYield()); ) {
        var d3 = O3.callback;
        if (typeof d3 === "function") {
          O3.callback = null;
          P3 = O3.priorityLevel;
          var e3 = d3(O3.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e3 === "function" ? O3.callback = e3 : O3 === J2(L2) && K2(L2);
          T3(b2);
        } else
          K2(L2);
        O3 = J2(L2);
      }
      if (O3 !== null)
        var m3 = true;
      else {
        var n3 = J2(M3);
        n3 !== null && g3(U3, n3.startTime - b2);
        m3 = false;
      }
      return m3;
    } finally {
      O3 = null, P3 = c3, Q2 = false;
    }
  }
  var W2 = k3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R3 || Q2 || (R3 = true, f2(V3));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P3;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a2) {
    switch (P3) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P3;
    }
    var c3 = P3;
    P3 = b2;
    try {
      return a2();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c3 = P3;
    P3 = a2;
    try {
      return b2();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c3) {
    var d3 = exports.unstable_now();
    typeof c3 === "object" && c3 !== null ? (c3 = c3.delay, c3 = typeof c3 === "number" && 0 < c3 ? d3 + c3 : d3) : c3 = d3;
    switch (a2) {
      case 1:
        var e3 = -1;
        break;
      case 2:
        e3 = 250;
        break;
      case 5:
        e3 = 1073741823;
        break;
      case 4:
        e3 = 1e4;
        break;
      default:
        e3 = 5e3;
    }
    e3 = c3 + e3;
    a2 = {id: N3++, callback: b2, priorityLevel: a2, startTime: c3, expirationTime: e3, sortIndex: -1};
    c3 > d3 ? (a2.sortIndex = c3, H3(M3, a2), J2(L2) === null && a2 === J2(M3) && (S3 ? h2() : S3 = true, g3(U3, c3 - d3))) : (a2.sortIndex = e3, H3(L2, a2), R3 || Q2 || (R3 = true, f2(V3)));
    return a2;
  };
  exports.unstable_wrapCallback = function(a2) {
    var b2 = P3;
    return function() {
      var c3 = P3;
      P3 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        P3 = c3;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c3]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a2, b2) {
  ea(a2, b2);
  ea(a2 + "Capture", b2);
}
function ea(a2, b2) {
  ca[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ba.add(b2[a2]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b2, c3, d3) {
  if (c3 !== null && c3.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d3)
        return false;
      if (c3 !== null)
        return !c3.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function na(a2, b2, c3, d3) {
  if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c3, d3))
    return true;
  if (d3)
    return false;
  if (c3 !== null)
    switch (c3.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B(a2, b2, c3, d3, e3, f2, g3) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d3;
  this.attributeNamespace = e3;
  this.mustUseProperty = c3;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g3;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  D[b2] = new B(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D[a2] = new B(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D[a2] = new B(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D[a2] = new B(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b2, c3, d3) {
  var e3 = D.hasOwnProperty(b2) ? D[b2] : null;
  var f2 = e3 !== null ? e3.type === 0 : d3 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c3, e3, d3) && (c3 = null), d3 || e3 === null ? la(b2) && (c3 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c3)) : e3.mustUseProperty ? a2[e3.propertyName] = c3 === null ? e3.type === 3 ? false : "" : c3 : (b2 = e3.attributeName, d3 = e3.attributeNamespace, c3 === null ? a2.removeAttribute(b2) : (e3 = e3.type, c3 = e3 === 3 || e3 === 4 && c3 === true ? "" : "" + c3, d3 ? a2.setAttributeNS(d3, b2, c3) : a2.setAttribute(b2, c3))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E2 = Symbol.for;
  sa = E2("react.element");
  ta = E2("react.portal");
  ua = E2("react.fragment");
  wa = E2("react.strict_mode");
  xa = E2("react.profiler");
  ya = E2("react.provider");
  za = E2("react.context");
  Aa = E2("react.forward_ref");
  Ba = E2("react.suspense");
  Ca = E2("react.suspense_list");
  Da = E2("react.memo");
  Ea = E2("react.lazy");
  Fa = E2("react.block");
  E2("react.scope");
  Ga = E2("react.opaque.id");
  Ha = E2("react.debug_trace_mode");
  Ia = E2("react.offscreen");
  Ja = E2("react.legacy_hidden");
}
var E2;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var Ma;
function Na(a2) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c3) {
      var b2 = c3.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b2) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c3 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k3) {
          var d3 = k3;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (k3) {
          d3 = k3;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k3) {
        d3 = k3;
      }
      a2();
    }
  } catch (k3) {
    if (k3 && d3 && typeof k3.stack === "string") {
      for (var e3 = k3.stack.split("\n"), f2 = d3.stack.split("\n"), g3 = e3.length - 1, h2 = f2.length - 1; 1 <= g3 && 0 <= h2 && e3[g3] !== f2[h2]; )
        h2--;
      for (; 1 <= g3 && 0 <= h2; g3--, h2--)
        if (e3[g3] !== f2[h2]) {
          if (g3 !== 1 || h2 !== 1) {
            do
              if (g3--, h2--, 0 > h2 || e3[g3] !== f2[h2])
                return "\n" + e3[g3].replace(" at new ", " at ");
            while (1 <= g3 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c3;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a2.render;
        b2 = b2.displayName || b2.name || "";
        return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b2));
        } catch (c3) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d3 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c3 !== "undefined" && typeof c3.get === "function" && typeof c3.set === "function") {
    var e3 = c3.get, f2 = c3.set;
    Object.defineProperty(a2, b2, {configurable: true, get: function() {
      return e3.call(this);
    }, set: function(a3) {
      d3 = "" + a3;
      f2.call(this, a3);
    }});
    Object.defineProperty(a2, b2, {enumerable: c3.enumerable});
    return {getValue: function() {
      return d3;
    }, setValue: function(a3) {
      d3 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    }};
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c3 = b2.getValue();
  var d3 = "";
  a2 && (d3 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d3;
  return a2 !== c3 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c3 = b2.checked;
  return objectAssign({}, b2, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c3 != null ? c3 : a2._wrapperState.initialChecked});
}
function Za(a2, b2) {
  var c3 = b2.defaultValue == null ? "" : b2.defaultValue, d3 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c3 = Sa(b2.value != null ? b2.value : c3);
  a2._wrapperState = {initialChecked: d3, initialValue: c3, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null};
}
function $a(a2, b2) {
  b2 = b2.checked;
  b2 != null && qa(a2, "checked", b2, false);
}
function ab(a2, b2) {
  $a(a2, b2);
  var c3 = Sa(b2.value), d3 = b2.type;
  if (c3 != null)
    if (d3 === "number") {
      if (c3 === 0 && a2.value === "" || a2.value != c3)
        a2.value = "" + c3;
    } else
      a2.value !== "" + c3 && (a2.value = "" + c3);
  else if (d3 === "submit" || d3 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c3) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c3) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d3 = b2.type;
    if (!(d3 !== "submit" && d3 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c3 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c3 = a2.name;
  c3 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c3 !== "" && (a2.name = c3);
}
function bb(a2, b2, c3) {
  if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
    c3 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c3 && (a2.defaultValue = "" + c3);
}
function db(a2) {
  var b2 = "";
  react.Children.forEach(a2, function(a3) {
    a3 != null && (b2 += a3);
  });
  return b2;
}
function eb(a2, b2) {
  a2 = objectAssign({children: void 0}, b2);
  if (b2 = db(b2.children))
    a2.children = b2;
  return a2;
}
function fb(a2, b2, c3, d3) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e3 = 0; e3 < c3.length; e3++)
      b2["$" + c3[e3]] = true;
    for (c3 = 0; c3 < a2.length; c3++)
      e3 = b2.hasOwnProperty("$" + a2[c3].value), a2[c3].selected !== e3 && (a2[c3].selected = e3), e3 && d3 && (a2[c3].defaultSelected = true);
  } else {
    c3 = "" + Sa(c3);
    b2 = null;
    for (e3 = 0; e3 < a2.length; e3++) {
      if (a2[e3].value === c3) {
        a2[e3].selected = true;
        d3 && (a2[e3].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e3].disabled || (b2 = a2[e3]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b2, {value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue});
}
function hb(a2, b2) {
  var c3 = b2.value;
  if (c3 == null) {
    c3 = b2.children;
    b2 = b2.defaultValue;
    if (c3 != null) {
      if (b2 != null)
        throw Error(y(92));
      if (Array.isArray(c3)) {
        if (!(1 >= c3.length))
          throw Error(y(93));
        c3 = c3[0];
      }
      b2 = c3;
    }
    b2 == null && (b2 = "");
    c3 = b2;
  }
  a2._wrapperState = {initialValue: Sa(c3)};
}
function ib(a2, b2) {
  var c3 = Sa(b2.value), d3 = Sa(b2.defaultValue);
  c3 != null && (c3 = "" + c3, c3 !== a2.value && (a2.value = c3), b2.defaultValue == null && a2.defaultValue !== c3 && (a2.defaultValue = c3));
  d3 != null && (a2.defaultValue = "" + d3);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb;
var ob = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c3, d3, e3) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c3, d3, e3);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function pb(a2, b2) {
  if (b2) {
    var c3 = a2.firstChild;
    if (c3 && c3 === a2.lastChild && c3.nodeType === 3) {
      c3.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b2] = qb[a2];
  });
});
function sb(a2, b2, c3) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c3 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
}
function tb(a2, b2) {
  a2 = a2.style;
  for (var c3 in b2)
    if (b2.hasOwnProperty(c3)) {
      var d3 = c3.indexOf("--") === 0, e3 = sb(c3, b2[c3], d3);
      c3 === "float" && (c3 = "cssFloat");
      d3 ? a2.setProperty(c3, e3) : a2[c3] = e3;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a2, b2) {
  if (b2) {
    if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y(62));
  }
}
function wb(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb(a2, b2, c3, d3, e3) {
  return a2(b2, c3, d3, e3);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a2, b2, c3) {
  if (Lb)
    return a2(b2, c3);
  Lb = true;
  try {
    return Jb(a2, b2, c3);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b2) {
  var c3 = a2.stateNode;
  if (c3 === null)
    return null;
  var d3 = Db(c3);
  if (d3 === null)
    return null;
  c3 = d3[b2];
  a:
    switch (b2) {
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
        (d3 = !d3.disabled) || (a2 = a2.type, d3 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d3;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c3 && typeof c3 !== "function")
    throw Error(y(231, b2, typeof c3));
  return c3;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
var Qb;
function Rb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c3, l2);
  } catch (n3) {
    this.onError(n3);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a2) {
  Sb = true;
  Tb = a2;
}};
function Xb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b2 = a2, c3 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 1026) !== 0 && (c3 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c3 : null;
}
function $b(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y(188));
}
function bc(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Zb(a2);
    if (b2 === null)
      throw Error(y(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c3 = a2, d3 = b2; ; ) {
    var e3 = c3.return;
    if (e3 === null)
      break;
    var f2 = e3.alternate;
    if (f2 === null) {
      d3 = e3.return;
      if (d3 !== null) {
        c3 = d3;
        continue;
      }
      break;
    }
    if (e3.child === f2.child) {
      for (f2 = e3.child; f2; ) {
        if (f2 === c3)
          return ac(e3), a2;
        if (f2 === d3)
          return ac(e3), b2;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c3.return !== d3.return)
      c3 = e3, d3 = f2;
    else {
      for (var g3 = false, h2 = e3.child; h2; ) {
        if (h2 === c3) {
          g3 = true;
          c3 = e3;
          d3 = f2;
          break;
        }
        if (h2 === d3) {
          g3 = true;
          d3 = e3;
          c3 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g3) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c3) {
            g3 = true;
            c3 = f2;
            d3 = e3;
            break;
          }
          if (h2 === d3) {
            g3 = true;
            d3 = f2;
            c3 = e3;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g3)
          throw Error(y(189));
      }
    }
    if (c3.alternate !== d3)
      throw Error(y(190));
  }
  if (c3.tag !== 3)
    throw Error(y(188));
  return c3.stateNode.current === c3 ? a2 : b2;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b2 = a2; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a2)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a2, b2) {
  for (var c3 = a2.alternate; b2 !== null; ) {
    if (b2 === a2 || b2 === c3)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a2, b2, c3, d3, e3) {
  return {blockedOn: a2, domEventName: b2, eventSystemFlags: c3 | 16, nativeEvent: e3, targetContainers: [d3]};
}
function sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a2, b2, c3, d3, e3, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = rc(b2, c3, d3, e3, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
  a2.eventSystemFlags |= d3;
  b2 = a2.targetContainers;
  e3 !== null && b2.indexOf(e3) === -1 && b2.push(e3);
  return a2;
}
function uc(a2, b2, c3, d3, e3) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a2, b2, c3, d3, e3), true;
    case "dragenter":
      return lc = tc(lc, a2, b2, c3, d3, e3), true;
    case "mouseover":
      return mc = tc(mc, a2, b2, c3, d3, e3), true;
    case "pointerover":
      var f2 = e3.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a2, b2, c3, d3, e3));
      return true;
    case "gotpointercapture":
      return f2 = e3.pointerId, oc.set(f2, tc(oc.get(f2) || null, a2, b2, c3, d3, e3)), true;
  }
  return false;
}
function vc(a2) {
  var b2 = wc(a2.target);
  if (b2 !== null) {
    var c3 = Zb(b2);
    if (c3 !== null) {
      if (b2 = c3.tag, b2 === 13) {
        if (b2 = $b(c3), b2 !== null) {
          a2.blockedOn = b2;
          hc(a2.lanePriority, function() {
            scheduler.unstable_runWithPriority(a2.priority, function() {
              gc(c3);
            });
          });
          return;
        }
      } else if (b2 === 3 && c3.stateNode.hydrate) {
        a2.blockedOn = c3.tag === 3 ? c3.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c3 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c3 !== null)
      return b2 = Cb(c3), b2 !== null && fc(b2), a2.blockedOn = c3, false;
    b2.shift();
  }
  return true;
}
function zc(a2, b2, c3) {
  xc(a2) && c3.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (a2.blockedOn !== null) {
      a2 = Cb(a2.blockedOn);
      a2 !== null && ec(a2);
      break;
    }
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c3 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (c3 !== null) {
        a2.blockedOn = c3;
        break;
      }
      b2.shift();
    }
    a2.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b2(b3) {
    return Bc(b3, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c3 = 1; c3 < jc.length; c3++) {
      var d3 = jc[c3];
      d3.blockedOn === a2 && (d3.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a2);
  lc !== null && Bc(lc, a2);
  mc !== null && Bc(mc, a2);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c3 = 0; c3 < pc.length; c3++)
    d3 = pc[c3], d3.blockedOn === a2 && (d3.blockedOn = null);
  for (; 0 < pc.length && (c3 = pc[0], c3.blockedOn === null); )
    vc(c3), c3.blockedOn === null && pc.shift();
}
function Dc(a2, b2) {
  var c3 = {};
  c3[a2.toLowerCase()] = b2.toLowerCase();
  c3["Webkit" + a2] = "webkit" + b2;
  c3["Moz" + a2] = "moz" + b2;
  return c3;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b2 = Ec[a2], c3;
  for (c3 in b2)
    if (b2.hasOwnProperty(c3) && c3 in Gc)
      return Fc[a2] = b2[c3];
  return a2;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a2, b2) {
  for (var c3 = 0; c3 < a2.length; c3 += 2) {
    var d3 = a2[c3], e3 = a2[c3 + 1];
    e3 = "on" + (e3[0].toUpperCase() + e3.slice(1));
    Nc.set(d3, b2);
    Mc.set(d3, e3);
    da(e3, [d3]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a2) {
  if ((1 & a2) !== 0)
    return F = 15, 1;
  if ((2 & a2) !== 0)
    return F = 14, 2;
  if ((4 & a2) !== 0)
    return F = 13, 4;
  var b2 = 24 & a2;
  if (b2 !== 0)
    return F = 12, b2;
  if ((a2 & 32) !== 0)
    return F = 11, 32;
  b2 = 192 & a2;
  if (b2 !== 0)
    return F = 10, b2;
  if ((a2 & 256) !== 0)
    return F = 9, 256;
  b2 = 3584 & a2;
  if (b2 !== 0)
    return F = 8, b2;
  if ((a2 & 4096) !== 0)
    return F = 7, 4096;
  b2 = 4186112 & a2;
  if (b2 !== 0)
    return F = 6, b2;
  b2 = 62914560 & a2;
  if (b2 !== 0)
    return F = 5, b2;
  if (a2 & 67108864)
    return F = 4, 67108864;
  if ((a2 & 134217728) !== 0)
    return F = 3, 134217728;
  b2 = 805306368 & a2;
  if (b2 !== 0)
    return F = 2, b2;
  if ((1073741824 & a2) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a2) {
  switch (a2) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a2));
  }
}
function Uc(a2, b2) {
  var c3 = a2.pendingLanes;
  if (c3 === 0)
    return F = 0;
  var d3 = 0, e3 = 0, f2 = a2.expiredLanes, g3 = a2.suspendedLanes, h2 = a2.pingedLanes;
  if (f2 !== 0)
    d3 = f2, e3 = F = 15;
  else if (f2 = c3 & 134217727, f2 !== 0) {
    var k3 = f2 & ~g3;
    k3 !== 0 ? (d3 = Rc(k3), e3 = F) : (h2 &= f2, h2 !== 0 && (d3 = Rc(h2), e3 = F));
  } else
    f2 = c3 & ~g3, f2 !== 0 ? (d3 = Rc(f2), e3 = F) : h2 !== 0 && (d3 = Rc(h2), e3 = F);
  if (d3 === 0)
    return 0;
  d3 = 31 - Vc(d3);
  d3 = c3 & ((0 > d3 ? 0 : 1 << d3) << 1) - 1;
  if (b2 !== 0 && b2 !== d3 && (b2 & g3) === 0) {
    Rc(b2);
    if (e3 <= F)
      return b2;
    F = e3;
  }
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d3; 0 < b2; )
      c3 = 31 - Vc(b2), e3 = 1 << c3, d3 |= a2[c3], b2 &= ~e3;
  return d3;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b2) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
    case 10:
      return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
    case 8:
      return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b2 = [], c3 = 0; 31 > c3; c3++)
    b2.push(a2);
  return b2;
}
function $c(a2, b2, c3) {
  a2.pendingLanes |= b2;
  var d3 = b2 - 1;
  a2.suspendedLanes &= d3;
  a2.pingedLanes &= d3;
  a2 = a2.eventTimes;
  b2 = 31 - Vc(b2);
  a2[b2] = c3;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a2) {
  return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a2, b2, c3, d3) {
  Kb || Ib();
  var e3 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e3, a2, b2, c3, d3);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a2, b2, c3, d3) {
  ed(dd, hd.bind(null, a2, b2, c3, d3));
}
function hd(a2, b2, c3, d3) {
  if (fd) {
    var e3;
    if ((e3 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b2, c3, d3), jc.push(a2);
    else {
      var f2 = yc(a2, b2, c3, d3);
      if (f2 === null)
        e3 && sc(a2, d3);
      else {
        if (e3) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f2, a2, b2, c3, d3);
            jc.push(a2);
            return;
          }
          if (uc(f2, a2, b2, c3, d3))
            return;
          sc(a2, d3);
        }
        jd(a2, b2, d3, null, c3);
      }
    }
  }
}
function yc(a2, b2, c3, d3) {
  var e3 = xb(d3);
  e3 = wc(e3);
  if (e3 !== null) {
    var f2 = Zb(e3);
    if (f2 === null)
      e3 = null;
    else {
      var g3 = f2.tag;
      if (g3 === 13) {
        e3 = $b(f2);
        if (e3 !== null)
          return e3;
        e3 = null;
      } else if (g3 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e3 = null;
      } else
        f2 !== e3 && (e3 = null);
    }
  }
  jd(a2, b2, d3, e3, c3);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c3 = b2.length, d3, e3 = "value" in kd ? kd.value : kd.textContent, f2 = e3.length;
  for (a2 = 0; a2 < c3 && b2[a2] === e3[a2]; a2++)
    ;
  var g3 = c3 - a2;
  for (d3 = 1; d3 <= g3 && b2[c3 - d3] === e3[f2 - d3]; d3++)
    ;
  return md = e3.slice(a2, 1 < d3 ? 1 - d3 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d3, e3, f2, g3) {
    this._reactName = b3;
    this._targetInst = e3;
    this.type = d3;
    this.nativeEvent = f2;
    this.target = g3;
    this.currentTarget = null;
    for (var c3 in a2)
      a2.hasOwnProperty(c3) && (b3 = a2[c3], this[c3] = b3 ? b3(f2) : f2[c3]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b2.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b2;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
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
  MozPrintableKey: "Unidentified"
};
var Nd = {
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
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return a2.type === "keypress" ? od(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return a2 === "compositionend" || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!le[a2.type] : b2 === "textarea" ? true : false;
}
function ne(a2, b2, c3, d3) {
  Eb(d3);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c3 = new td("onChange", "change", null, c3, d3), a2.push({event: c3, listeners: b2}));
}
var pe = null;
var qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if (a2 === "change")
    return b2;
}
var we = false;
if (fa) {
  if (fa) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if (a2.propertyName === "value" && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    a2 = re;
    if (Kb)
      a2(b2);
    else {
      Kb = true;
      try {
        Gb(a2, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b2, c3) {
  a2 === "focusin" ? (Ae(), pe = b2, qe = c3, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te(qe);
}
function Ee(a2, b2) {
  if (a2 === "click")
    return te(b2);
}
function Fe(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a2, b2) {
  if (He(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c3 = Object.keys(a2), d3 = Object.keys(b2);
  if (c3.length !== d3.length)
    return false;
  for (d3 = 0; d3 < c3.length; d3++)
    if (!Ie.call(b2, c3[d3]) || !He(a2[c3[d3]], b2[c3[d3]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b2) {
  var c3 = Ke(a2);
  a2 = 0;
  for (var d3; c3; ) {
    if (c3.nodeType === 3) {
      d3 = a2 + c3.textContent.length;
      if (a2 <= b2 && d3 >= b2)
        return {node: c3, offset: b2 - a2};
      a2 = d3;
    }
    a: {
      for (; c3; ) {
        if (c3.nextSibling) {
          c3 = c3.nextSibling;
          break a;
        }
        c3 = c3.parentNode;
      }
      c3 = void 0;
    }
    c3 = Ke(c3);
  }
}
function Me(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c3 = typeof b2.contentWindow.location.href === "string";
    } catch (d3) {
      c3 = false;
    }
    if (c3)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Oe(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a2, b2, c3) {
  var d3 = c3.window === c3 ? c3.document : c3.nodeType === 9 ? c3 : c3.ownerDocument;
  Te || Qe == null || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Oe(d3) ? d3 = {start: d3.selectionStart, end: d3.selectionEnd} : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = {anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset}), Se && Je(Se, d3) || (Se = d3, d3 = oe(Re, "onSelect"), 0 < d3.length && (b2 = new td("onSelect", "select", null, b2, c3), a2.push({event: b2, listeners: d3}), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a2, b2, c3) {
  var d3 = a2.type || "unknown-event";
  a2.currentTarget = c3;
  Yb(d3, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c3 = 0; c3 < a2.length; c3++) {
    var d3 = a2[c3], e3 = d3.event;
    d3 = d3.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g3 = d3.length - 1; 0 <= g3; g3--) {
          var h2 = d3[g3], k3 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k3 !== f2 && e3.isPropagationStopped())
            break a;
          Ze(e3, h2, l2);
          f2 = k3;
        }
      else
        for (g3 = 0; g3 < d3.length; g3++) {
          h2 = d3[g3];
          k3 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k3 !== f2 && e3.isPropagationStopped())
            break a;
          Ze(e3, h2, l2);
          f2 = k3;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G(a2, b2) {
  var c3 = $e(b2), d3 = a2 + "__bubble";
  c3.has(d3) || (af(b2, a2, 2, false), c3.add(d3));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a2, null);
    df(b2, true, a2, null);
  }));
}
function df(a2, b2, c3, d3) {
  var e3 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c3;
  a2 === "selectionchange" && c3.nodeType !== 9 && (f2 = c3.ownerDocument);
  if (d3 !== null && !b2 && Ye.has(a2)) {
    if (a2 !== "scroll")
      return;
    e3 |= 2;
    f2 = d3;
  }
  var g3 = $e(f2), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
  g3.has(h2) || (b2 && (e3 |= 4), af(f2, a2, e3, b2), g3.add(h2));
}
function af(a2, b2, c3, d3) {
  var e3 = Nc.get(b2);
  switch (e3 === void 0 ? 2 : e3) {
    case 0:
      e3 = gd;
      break;
    case 1:
      e3 = id;
      break;
    default:
      e3 = hd;
  }
  c3 = e3.bind(null, b2, c3, a2);
  e3 = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e3 = true);
  d3 ? e3 !== void 0 ? a2.addEventListener(b2, c3, {capture: true, passive: e3}) : a2.addEventListener(b2, c3, true) : e3 !== void 0 ? a2.addEventListener(b2, c3, {passive: e3}) : a2.addEventListener(b2, c3, false);
}
function jd(a2, b2, c3, d3, e3) {
  var f2 = d3;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d3 !== null)
    a:
      for (; ; ) {
        if (d3 === null)
          return;
        var g3 = d3.tag;
        if (g3 === 3 || g3 === 4) {
          var h2 = d3.stateNode.containerInfo;
          if (h2 === e3 || h2.nodeType === 8 && h2.parentNode === e3)
            break;
          if (g3 === 4)
            for (g3 = d3.return; g3 !== null; ) {
              var k3 = g3.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g3.stateNode.containerInfo, k3 === e3 || k3.nodeType === 8 && k3.parentNode === e3)
                  return;
              }
              g3 = g3.return;
            }
          for (; h2 !== null; ) {
            g3 = wc(h2);
            if (g3 === null)
              return;
            k3 = g3.tag;
            if (k3 === 5 || k3 === 6) {
              d3 = f2 = g3;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d3 = d3.return;
      }
  Nb(function() {
    var d4 = f2, e4 = xb(c3), g4 = [];
    a: {
      var h3 = Mc.get(a2);
      if (h3 !== void 0) {
        var k4 = td, x3 = a2;
        switch (a2) {
          case "keypress":
            if (od(c3) === 0)
              break a;
          case "keydown":
          case "keyup":
            k4 = Rd;
            break;
          case "focusin":
            x3 = "focus";
            k4 = Fd;
            break;
          case "focusout":
            x3 = "blur";
            k4 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k4 = Fd;
            break;
          case "click":
            if (c3.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k4 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k4 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k4 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k4 = Hd;
            break;
          case Lc:
            k4 = Xd;
            break;
          case "scroll":
            k4 = vd;
            break;
          case "wheel":
            k4 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k4 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k4 = Td;
        }
        var w2 = (b2 & 4) !== 0, z3 = !w2 && a2 === "scroll", u = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t3 = d4, q3; t3 !== null; ) {
          q3 = t3;
          var v2 = q3.stateNode;
          q3.tag === 5 && v2 !== null && (q3 = v2, u !== null && (v2 = Ob(t3, u), v2 != null && w2.push(ef(t3, v2, q3))));
          if (z3)
            break;
          t3 = t3.return;
        }
        0 < w2.length && (h3 = new k4(h3, x3, null, c3, e4), g4.push({event: h3, listeners: w2}));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k4 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x3 = c3.relatedTarget || c3.fromElement) && (wc(x3) || x3[ff]))
          break a;
        if (k4 || h3) {
          h3 = e4.window === e4 ? e4 : (h3 = e4.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k4) {
            if (x3 = c3.relatedTarget || c3.toElement, k4 = d4, x3 = x3 ? wc(x3) : null, x3 !== null && (z3 = Zb(x3), x3 !== z3 || x3.tag !== 5 && x3.tag !== 6))
              x3 = null;
          } else
            k4 = null, x3 = d4;
          if (k4 !== x3) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u = "onMouseEnter";
            t3 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u = "onPointerEnter", t3 = "pointer";
            z3 = k4 == null ? h3 : ue(k4);
            q3 = x3 == null ? h3 : ue(x3);
            h3 = new w2(v2, t3 + "leave", k4, c3, e4);
            h3.target = z3;
            h3.relatedTarget = q3;
            v2 = null;
            wc(e4) === d4 && (w2 = new w2(u, t3 + "enter", x3, c3, e4), w2.target = q3, w2.relatedTarget = z3, v2 = w2);
            z3 = v2;
            if (k4 && x3)
              b: {
                w2 = k4;
                u = x3;
                t3 = 0;
                for (q3 = w2; q3; q3 = gf(q3))
                  t3++;
                q3 = 0;
                for (v2 = u; v2; v2 = gf(v2))
                  q3++;
                for (; 0 < t3 - q3; )
                  w2 = gf(w2), t3--;
                for (; 0 < q3 - t3; )
                  u = gf(u), q3--;
                for (; t3--; ) {
                  if (w2 === u || u !== null && w2 === u.alternate)
                    break b;
                  w2 = gf(w2);
                  u = gf(u);
                }
                w2 = null;
              }
            else
              w2 = null;
            k4 !== null && hf(g4, h3, k4, w2, false);
            x3 !== null && z3 !== null && hf(g4, z3, x3, w2, true);
          }
        }
      }
      a: {
        h3 = d4 ? ue(d4) : window;
        k4 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k4 === "select" || k4 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k4 = h3.nodeName) && k4.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a2, d4))) {
          ne(g4, J2, c3, e4);
          break a;
        }
        K2 && K2(a2, h3, d4);
        a2 === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d4 ? ue(d4) : window;
      switch (a2) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d4, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g4, c3, e4);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g4, c3, e4);
      }
      var Q2;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a2, c3) && (L2 = "onCompositionEnd") : a2 === "keydown" && c3.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c3.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e4, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d4, L2), 0 < K2.length && (L2 = new Ld(L2, a2, null, c3, e4), g4.push({event: L2, listeners: K2}), Q2 ? L2.data = Q2 : (Q2 = he(c3), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a2, c3) : ke(a2, c3))
        d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e4 = new Ld("onBeforeInput", "beforeinput", null, c3, e4), g4.push({event: e4, listeners: d4}), e4.data = Q2);
    }
    se(g4, b2);
  });
}
function ef(a2, b2, c3) {
  return {instance: a2, listener: b2, currentTarget: c3};
}
function oe(a2, b2) {
  for (var c3 = b2 + "Capture", d3 = []; a2 !== null; ) {
    var e3 = a2, f2 = e3.stateNode;
    e3.tag === 5 && f2 !== null && (e3 = f2, f2 = Ob(a2, c3), f2 != null && d3.unshift(ef(a2, f2, e3)), f2 = Ob(a2, b2), f2 != null && d3.push(ef(a2, f2, e3)));
    a2 = a2.return;
  }
  return d3;
}
function gf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function hf(a2, b2, c3, d3, e3) {
  for (var f2 = b2._reactName, g3 = []; c3 !== null && c3 !== d3; ) {
    var h2 = c3, k3 = h2.alternate, l2 = h2.stateNode;
    if (k3 !== null && k3 === d3)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e3 ? (k3 = Ob(c3, f2), k3 != null && g3.unshift(ef(c3, k3, h2))) : e3 || (k3 = Ob(c3, f2), k3 != null && g3.push(ef(c3, k3, h2))));
    c3 = c3.return;
  }
  g3.length !== 0 && a2.push({event: b2, listeners: g3});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a2, b2) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a2, b2) {
  return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a2) {
  a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
}
function rf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c3 = a2.data;
      if (c3 === "$" || c3 === "$!" || c3 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c3 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return {$$typeof: Ga, toString: a2, valueOf: a2};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a2) {
  var b2 = a2[wf];
  if (b2)
    return b2;
  for (var c3 = a2.parentNode; c3; ) {
    if (b2 = c3[ff] || c3[wf]) {
      c3 = b2.alternate;
      if (b2.child !== null || c3 !== null && c3.child !== null)
        for (a2 = sf(a2); a2 !== null; ) {
          if (c3 = a2[wf])
            return c3;
          a2 = sf(a2);
        }
      return b2;
    }
    a2 = c3;
    c3 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(y(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b2 = a2[yf];
  b2 === void 0 && (b2 = a2[yf] = new Set());
  return b2;
}
var zf = [];
var Af = -1;
function Bf(a2) {
  return {current: a2};
}
function H(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I(a2, b2) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b2;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a2, b2) {
  var c3 = a2.type.contextTypes;
  if (!c3)
    return Cf;
  var d3 = a2.stateNode;
  if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d3.__reactInternalMemoizedMaskedChildContext;
  var e3 = {}, f2;
  for (f2 in c3)
    e3[f2] = b2[f2];
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e3);
  return e3;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a2, b2, c3) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b2);
  I(N, c3);
}
function If(a2, b2, c3) {
  var d3 = a2.stateNode;
  a2 = b2.childContextTypes;
  if (typeof d3.getChildContext !== "function")
    return c3;
  d3 = d3.getChildContext();
  for (var e3 in d3)
    if (!(e3 in a2))
      throw Error(y(108, Ra(b2) || "Unknown", e3));
  return objectAssign({}, c3, d3);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a2);
  I(N, N.current);
  return true;
}
function Kf(a2, b2, c3) {
  var d3 = a2.stateNode;
  if (!d3)
    throw Error(y(169));
  c3 ? (a2 = If(a2, b2, Df), d3.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
  I(N, c3);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a2) {
  switch (a2) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a2, b2) {
  a2 = fg(a2);
  return Nf(a2, b2);
}
function hg(a2, b2, c3) {
  a2 = fg(a2);
  return Of(a2, b2, c3);
}
function ig() {
  if (bg !== null) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a2 = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a2 < b2.length; a2++) {
          var c3 = b2[a2];
          do
            c3 = c3(true);
          while (c3 !== null);
        }
      });
      ag = null;
    } catch (c3) {
      throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c3;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = objectAssign({}, b2);
    a2 = a2.defaultProps;
    for (var c3 in a2)
      b2[c3] === void 0 && (b2[c3] = a2[c3]);
    return b2;
  }
  return b2;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b2 = mg.current;
  H(mg);
  a2.type._context._currentValue = b2;
}
function sg(a2, b2) {
  for (; a2 !== null; ) {
    var c3 = a2.alternate;
    if ((a2.childLanes & b2) === b2)
      if (c3 === null || (c3.childLanes & b2) === b2)
        break;
      else
        c3.childLanes |= b2;
    else
      a2.childLanes |= b2, c3 !== null && (c3.childLanes |= b2);
    a2 = a2.return;
  }
}
function tg(a2, b2) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
}
function vg(a2, b2) {
  if (pg !== a2 && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a2, b2 = 1073741823;
    b2 = {context: a2, observedBits: b2, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b2;
      ng.dependencies = {lanes: 0, firstContext: b2, responders: null};
    } else
      og = og.next = b2;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = {baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = {baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects});
}
function zg(a2, b2) {
  return {eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a2, b2) {
  a2 = a2.updateQueue;
  if (a2 !== null) {
    a2 = a2.shared;
    var c3 = a2.pending;
    c3 === null ? b2.next = b2 : (b2.next = c3.next, c3.next = b2);
    a2.pending = b2;
  }
}
function Bg(a2, b2) {
  var c3 = a2.updateQueue, d3 = a2.alternate;
  if (d3 !== null && (d3 = d3.updateQueue, c3 === d3)) {
    var e3 = null, f2 = null;
    c3 = c3.firstBaseUpdate;
    if (c3 !== null) {
      do {
        var g3 = {eventTime: c3.eventTime, lane: c3.lane, tag: c3.tag, payload: c3.payload, callback: c3.callback, next: null};
        f2 === null ? e3 = f2 = g3 : f2 = f2.next = g3;
        c3 = c3.next;
      } while (c3 !== null);
      f2 === null ? e3 = f2 = b2 : f2 = f2.next = b2;
    } else
      e3 = f2 = b2;
    c3 = {baseState: d3.baseState, firstBaseUpdate: e3, lastBaseUpdate: f2, shared: d3.shared, effects: d3.effects};
    a2.updateQueue = c3;
    return;
  }
  a2 = c3.lastBaseUpdate;
  a2 === null ? c3.firstBaseUpdate = b2 : a2.next = b2;
  c3.lastBaseUpdate = b2;
}
function Cg(a2, b2, c3, d3) {
  var e3 = a2.updateQueue;
  wg = false;
  var f2 = e3.firstBaseUpdate, g3 = e3.lastBaseUpdate, h2 = e3.shared.pending;
  if (h2 !== null) {
    e3.shared.pending = null;
    var k3 = h2, l2 = k3.next;
    k3.next = null;
    g3 === null ? f2 = l2 : g3.next = l2;
    g3 = k3;
    var n3 = a2.alternate;
    if (n3 !== null) {
      n3 = n3.updateQueue;
      var A3 = n3.lastBaseUpdate;
      A3 !== g3 && (A3 === null ? n3.firstBaseUpdate = l2 : A3.next = l2, n3.lastBaseUpdate = k3);
    }
  }
  if (f2 !== null) {
    A3 = e3.baseState;
    g3 = 0;
    n3 = l2 = k3 = null;
    do {
      h2 = f2.lane;
      var p3 = f2.eventTime;
      if ((d3 & h2) === h2) {
        n3 !== null && (n3 = n3.next = {
          eventTime: p3,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a2, x3 = f2;
          h2 = b2;
          p3 = c3;
          switch (x3.tag) {
            case 1:
              C2 = x3.payload;
              if (typeof C2 === "function") {
                A3 = C2.call(p3, A3, h2);
                break a;
              }
              A3 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x3.payload;
              h2 = typeof C2 === "function" ? C2.call(p3, A3, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A3 = objectAssign({}, A3, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a2.flags |= 32, h2 = e3.effects, h2 === null ? e3.effects = [f2] : h2.push(f2));
      } else
        p3 = {eventTime: p3, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null}, n3 === null ? (l2 = n3 = p3, k3 = A3) : n3 = n3.next = p3, g3 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e3.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e3.lastBaseUpdate = h2, e3.shared.pending = null;
    } while (1);
    n3 === null && (k3 = A3);
    e3.baseState = k3;
    e3.firstBaseUpdate = l2;
    e3.lastBaseUpdate = n3;
    Dg |= g3;
    a2.lanes = g3;
    a2.memoizedState = A3;
  }
}
function Eg(a2, b2, c3) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d3 = a2[b2], e3 = d3.callback;
      if (e3 !== null) {
        d3.callback = null;
        d3 = c3;
        if (typeof e3 !== "function")
          throw Error(y(191, e3));
        e3.call(d3);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a2, b2, c3, d3) {
  b2 = a2.memoizedState;
  c3 = c3(d3, b2);
  c3 = c3 === null || c3 === void 0 ? b2 : objectAssign({}, b2, c3);
  a2.memoizedState = c3;
  a2.lanes === 0 && (a2.updateQueue.baseState = c3);
}
var Kg = {isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c3) {
  a2 = a2._reactInternals;
  var d3 = Hg(), e3 = Ig(a2), f2 = zg(d3, e3);
  f2.payload = b2;
  c3 !== void 0 && c3 !== null && (f2.callback = c3);
  Ag(a2, f2);
  Jg(a2, e3, d3);
}, enqueueReplaceState: function(a2, b2, c3) {
  a2 = a2._reactInternals;
  var d3 = Hg(), e3 = Ig(a2), f2 = zg(d3, e3);
  f2.tag = 1;
  f2.payload = b2;
  c3 !== void 0 && c3 !== null && (f2.callback = c3);
  Ag(a2, f2);
  Jg(a2, e3, d3);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c3 = Hg(), d3 = Ig(a2), e3 = zg(c3, d3);
  e3.tag = 2;
  b2 !== void 0 && b2 !== null && (e3.callback = b2);
  Ag(a2, e3);
  Jg(a2, d3, c3);
}};
function Lg(a2, b2, c3, d3, e3, f2, g3) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d3, f2, g3) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c3, d3) || !Je(e3, f2) : true;
}
function Mg(a2, b2, c3) {
  var d3 = false, e3 = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e3 = Ff(b2) ? Df : M.current, d3 = b2.contextTypes, f2 = (d3 = d3 !== null && d3 !== void 0) ? Ef(a2, e3) : Cf);
  b2 = new b2(c3, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e3, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a2, b2, c3, d3) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c3, d3);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c3, d3);
  b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a2, b2, c3, d3) {
  var e3 = a2.stateNode;
  e3.props = c3;
  e3.state = a2.memoizedState;
  e3.refs = Fg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e3.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e3.context = Ef(a2, f2));
  Cg(a2, c3, e3, d3);
  e3.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a2, b2, f2, c3), e3.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e3.getSnapshotBeforeUpdate === "function" || typeof e3.UNSAFE_componentWillMount !== "function" && typeof e3.componentWillMount !== "function" || (b2 = e3.state, typeof e3.componentWillMount === "function" && e3.componentWillMount(), typeof e3.UNSAFE_componentWillMount === "function" && e3.UNSAFE_componentWillMount(), b2 !== e3.state && Kg.enqueueReplaceState(e3, e3.state, null), Cg(a2, c3, e3, d3), e3.state = a2.memoizedState);
  typeof e3.componentDidMount === "function" && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b2, c3) {
  a2 = c3.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c3._owner) {
      c3 = c3._owner;
      if (c3) {
        if (c3.tag !== 1)
          throw Error(y(309));
        var d3 = c3.stateNode;
      }
      if (!d3)
        throw Error(y(147, a2));
      var e3 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e3)
        return b2.ref;
      b2 = function(a3) {
        var b3 = d3.refs;
        b3 === Fg && (b3 = d3.refs = {});
        a3 === null ? delete b3[e3] : b3[e3] = a3;
      };
      b2._stringRef = e3;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(y(284));
    if (!c3._owner)
      throw Error(y(290, a2));
  }
  return a2;
}
function Rg(a2, b2) {
  if (a2.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a2) {
  function b2(b3, c4) {
    if (a2) {
      var d4 = b3.lastEffect;
      d4 !== null ? (d4.nextEffect = c4, b3.lastEffect = c4) : b3.firstEffect = b3.lastEffect = c4;
      c4.nextEffect = null;
      c4.flags = 8;
    }
  }
  function c3(c4, d4) {
    if (!a2)
      return null;
    for (; d4 !== null; )
      b2(c4, d4), d4 = d4.sibling;
    return null;
  }
  function d3(a3, b3) {
    for (a3 = new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e3(a3, b3) {
    a3 = Tg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c4, d4) {
    b3.index = d4;
    if (!a2)
      return c4;
    d4 = b3.alternate;
    if (d4 !== null)
      return d4 = d4.index, d4 < c4 ? (b3.flags = 2, c4) : d4;
    b3.flags = 2;
    return c4;
  }
  function g3(b3) {
    a2 && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a3, b3, c4, d4) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c4, a3.mode, d4), b3.return = a3, b3;
    b3 = e3(b3, c4);
    b3.return = a3;
    return b3;
  }
  function k3(a3, b3, c4, d4) {
    if (b3 !== null && b3.elementType === c4.type)
      return d4 = e3(b3, c4.props), d4.ref = Qg(a3, b3, c4), d4.return = a3, d4;
    d4 = Vg(c4.type, c4.key, c4.props, null, a3.mode, d4);
    d4.ref = Qg(a3, b3, c4);
    d4.return = a3;
    return d4;
  }
  function l2(a3, b3, c4, d4) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c4.containerInfo || b3.stateNode.implementation !== c4.implementation)
      return b3 = Wg(c4, a3.mode, d4), b3.return = a3, b3;
    b3 = e3(b3, c4.children || []);
    b3.return = a3;
    return b3;
  }
  function n3(a3, b3, c4, d4, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c4, a3.mode, d4, f3), b3.return = a3, b3;
    b3 = e3(b3, c4);
    b3.return = a3;
    return b3;
  }
  function A3(a3, b3, c4) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a3.mode, c4), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c4 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c4), c4.ref = Qg(a3, null, b3), c4.return = a3, c4;
        case ta:
          return b3 = Wg(b3, a3.mode, c4), b3.return = a3, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a3.mode, c4, null), b3.return = a3, b3;
      Rg(a3, b3);
    }
    return null;
  }
  function p3(a3, b3, c4, d4) {
    var e4 = b3 !== null ? b3.key : null;
    if (typeof c4 === "string" || typeof c4 === "number")
      return e4 !== null ? null : h2(a3, b3, "" + c4, d4);
    if (typeof c4 === "object" && c4 !== null) {
      switch (c4.$$typeof) {
        case sa:
          return c4.key === e4 ? c4.type === ua ? n3(a3, b3, c4.props.children, d4, e4) : k3(a3, b3, c4, d4) : null;
        case ta:
          return c4.key === e4 ? l2(a3, b3, c4, d4) : null;
      }
      if (Pg(c4) || La(c4))
        return e4 !== null ? null : n3(a3, b3, c4, d4, null);
      Rg(a3, c4);
    }
    return null;
  }
  function C2(a3, b3, c4, d4, e4) {
    if (typeof d4 === "string" || typeof d4 === "number")
      return a3 = a3.get(c4) || null, h2(b3, a3, "" + d4, e4);
    if (typeof d4 === "object" && d4 !== null) {
      switch (d4.$$typeof) {
        case sa:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, d4.type === ua ? n3(b3, a3, d4.props.children, e4, d4.key) : k3(b3, a3, d4, e4);
        case ta:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, l2(b3, a3, d4, e4);
      }
      if (Pg(d4) || La(d4))
        return a3 = a3.get(c4) || null, n3(b3, a3, d4, e4, null);
      Rg(b3, d4);
    }
    return null;
  }
  function x3(e4, g4, h3, k4) {
    for (var l3 = null, t3 = null, u = g4, z3 = g4 = 0, q3 = null; u !== null && z3 < h3.length; z3++) {
      u.index > z3 ? (q3 = u, u = null) : q3 = u.sibling;
      var n4 = p3(e4, u, h3[z3], k4);
      if (n4 === null) {
        u === null && (u = q3);
        break;
      }
      a2 && u && n4.alternate === null && b2(e4, u);
      g4 = f2(n4, g4, z3);
      t3 === null ? l3 = n4 : t3.sibling = n4;
      t3 = n4;
      u = q3;
    }
    if (z3 === h3.length)
      return c3(e4, u), l3;
    if (u === null) {
      for (; z3 < h3.length; z3++)
        u = A3(e4, h3[z3], k4), u !== null && (g4 = f2(u, g4, z3), t3 === null ? l3 = u : t3.sibling = u, t3 = u);
      return l3;
    }
    for (u = d3(e4, u); z3 < h3.length; z3++)
      q3 = C2(u, e4, z3, h3[z3], k4), q3 !== null && (a2 && q3.alternate !== null && u.delete(q3.key === null ? z3 : q3.key), g4 = f2(q3, g4, z3), t3 === null ? l3 = q3 : t3.sibling = q3, t3 = q3);
    a2 && u.forEach(function(a3) {
      return b2(e4, a3);
    });
    return l3;
  }
  function w2(e4, g4, h3, k4) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y(151));
    for (var t3 = l3 = null, u = g4, z3 = g4 = 0, q3 = null, n4 = h3.next(); u !== null && !n4.done; z3++, n4 = h3.next()) {
      u.index > z3 ? (q3 = u, u = null) : q3 = u.sibling;
      var w3 = p3(e4, u, n4.value, k4);
      if (w3 === null) {
        u === null && (u = q3);
        break;
      }
      a2 && u && w3.alternate === null && b2(e4, u);
      g4 = f2(w3, g4, z3);
      t3 === null ? l3 = w3 : t3.sibling = w3;
      t3 = w3;
      u = q3;
    }
    if (n4.done)
      return c3(e4, u), l3;
    if (u === null) {
      for (; !n4.done; z3++, n4 = h3.next())
        n4 = A3(e4, n4.value, k4), n4 !== null && (g4 = f2(n4, g4, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
      return l3;
    }
    for (u = d3(e4, u); !n4.done; z3++, n4 = h3.next())
      n4 = C2(u, e4, z3, n4.value, k4), n4 !== null && (a2 && n4.alternate !== null && u.delete(n4.key === null ? z3 : n4.key), g4 = f2(n4, g4, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
    a2 && u.forEach(function(a3) {
      return b2(e4, a3);
    });
    return l3;
  }
  return function(a3, d4, f3, h3) {
    var k4 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k4 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k4 = d4; k4 !== null; ) {
              if (k4.key === l3) {
                switch (k4.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c3(a3, k4.sibling);
                      d4 = e3(k4, f3.props.children);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                    break;
                  default:
                    if (k4.elementType === f3.type) {
                      c3(a3, k4.sibling);
                      d4 = e3(k4, f3.props);
                      d4.ref = Qg(a3, k4, f3);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                }
                c3(a3, k4);
                break;
              } else
                b2(a3, k4);
              k4 = k4.sibling;
            }
            f3.type === ua ? (d4 = Xg(f3.props.children, a3.mode, h3, f3.key), d4.return = a3, a3 = d4) : (h3 = Vg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Qg(a3, d4, f3), h3.return = a3, a3 = h3);
          }
          return g3(a3);
        case ta:
          a: {
            for (k4 = f3.key; d4 !== null; ) {
              if (d4.key === k4)
                if (d4.tag === 4 && d4.stateNode.containerInfo === f3.containerInfo && d4.stateNode.implementation === f3.implementation) {
                  c3(a3, d4.sibling);
                  d4 = e3(d4, f3.children || []);
                  d4.return = a3;
                  a3 = d4;
                  break a;
                } else {
                  c3(a3, d4);
                  break;
                }
              else
                b2(a3, d4);
              d4 = d4.sibling;
            }
            d4 = Wg(f3, a3.mode, h3);
            d4.return = a3;
            a3 = d4;
          }
          return g3(a3);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d4 !== null && d4.tag === 6 ? (c3(a3, d4.sibling), d4 = e3(d4, f3), d4.return = a3, a3 = d4) : (c3(a3, d4), d4 = Ug(f3, a3.mode, h3), d4.return = a3, a3 = d4), g3(a3);
    if (Pg(f3))
      return x3(a3, d4, f3, h3);
    if (La(f3))
      return w2(a3, d4, f3, h3);
    l3 && Rg(a3, f3);
    if (typeof f3 === "undefined" && !k4)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a3.type) || "Component"));
      }
    return c3(a3, d4);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y(174));
  return a2;
}
function eh(a2, b2) {
  I(ch, b2);
  I(bh, a2);
  I(ah, $g);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
  }
  H(ah);
  I(ah, b2);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a2) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c3 = mb(b2, a2.type);
  b2 !== c3 && (I(bh, a2), I(ah, c3));
}
function hh(a2) {
  bh.current === a2 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c3 = b2.memoizedState;
      if (c3 !== null && (c3 = c3.dehydrated, c3 === null || c3.data === "$?" || c3.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a2, b2) {
  var c3 = nh(5, null, null, 0);
  c3.elementType = "DELETED";
  c3.type = "DELETED";
  c3.stateNode = b2;
  c3.return = a2;
  c3.flags = 8;
  a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c3, a2.lastEffect = c3) : a2.firstEffect = a2.lastEffect = c3;
}
function oh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c3 = a2.type;
      b2 = b2.nodeType !== 1 || c3.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c3 = b2;
      if (!oh(a2, b2)) {
        b2 = rf(c3.nextSibling);
        if (!b2 || !oh(a2, b2)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c3);
      }
      jh = a2;
      kh = rf(b2.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b2 = a2.type;
  if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
    for (b2 = kh; b2; )
      mh(a2, b2), b2 = rf(b2.nextSibling);
  qh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(y(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c3 = a2.data;
          if (c3 === "/$") {
            if (b2 === 0) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c3 !== "$" && c3 !== "$!" && c3 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a2, b2) {
  if (b2 === null)
    return false;
  for (var c3 = 0; c3 < b2.length && c3 < a2.length; c3++)
    if (!He(a2[c3], b2[c3]))
      return false;
  return true;
}
function Ch(a2, b2, c3, d3, e3, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
  a2 = c3(d3, e3);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a2 = c3(d3, e3);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y(300));
  return a2;
}
function Hh() {
  var a2 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  return T;
}
function Ih() {
  if (S === null) {
    var a2 = R.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = S.next;
  var b2 = T === null ? R.memoizedState : T.next;
  if (b2 !== null)
    T = b2, S = a2;
  else {
    if (a2 === null)
      throw Error(y(310));
    S = a2;
    a2 = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  }
  return T;
}
function Jh(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function Kh(a2) {
  var b2 = Ih(), c3 = b2.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = S, e3 = d3.baseQueue, f2 = c3.pending;
  if (f2 !== null) {
    if (e3 !== null) {
      var g3 = e3.next;
      e3.next = f2.next;
      f2.next = g3;
    }
    d3.baseQueue = e3 = f2;
    c3.pending = null;
  }
  if (e3 !== null) {
    e3 = e3.next;
    d3 = d3.baseState;
    var h2 = g3 = f2 = null, k3 = e3;
    do {
      var l2 = k3.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = {lane: 0, action: k3.action, eagerReducer: k3.eagerReducer, eagerState: k3.eagerState, next: null}), d3 = k3.eagerReducer === a2 ? k3.eagerState : a2(d3, k3.action);
      else {
        var n3 = {
          lane: l2,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        };
        h2 === null ? (g3 = h2 = n3, f2 = d3) : h2 = h2.next = n3;
        R.lanes |= l2;
        Dg |= l2;
      }
      k3 = k3.next;
    } while (k3 !== null && k3 !== e3);
    h2 === null ? f2 = d3 : h2.next = g3;
    He(d3, b2.memoizedState) || (ug = true);
    b2.memoizedState = d3;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c3.lastRenderedState = d3;
  }
  return [b2.memoizedState, c3.dispatch];
}
function Lh(a2) {
  var b2 = Ih(), c3 = b2.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = c3.dispatch, e3 = c3.pending, f2 = b2.memoizedState;
  if (e3 !== null) {
    c3.pending = null;
    var g3 = e3 = e3.next;
    do
      f2 = a2(f2, g3.action), g3 = g3.next;
    while (g3 !== e3);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c3.lastRenderedState = f2;
  }
  return [f2, d3];
}
function Mh(a2, b2, c3) {
  var d3 = b2._getVersion;
  d3 = d3(b2._source);
  var e3 = b2._workInProgressVersionPrimary;
  if (e3 !== null)
    a2 = e3 === d3;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b2._workInProgressVersionPrimary = d3, th.push(b2);
  if (a2)
    return c3(b2._source);
  th.push(b2);
  throw Error(y(350));
}
function Nh(a2, b2, c3, d3) {
  var e3 = U;
  if (e3 === null)
    throw Error(y(349));
  var f2 = b2._getVersion, g3 = f2(b2._source), h2 = vh.current, k3 = h2.useState(function() {
    return Mh(e3, b2, c3);
  }), l2 = k3[1], n3 = k3[0];
  k3 = T;
  var A3 = a2.memoizedState, p3 = A3.refs, C2 = p3.getSnapshot, x3 = A3.source;
  A3 = A3.subscribe;
  var w2 = R;
  a2.memoizedState = {refs: p3, source: b2, subscribe: d3};
  h2.useEffect(function() {
    p3.getSnapshot = c3;
    p3.setSnapshot = l2;
    var a3 = f2(b2._source);
    if (!He(g3, a3)) {
      a3 = c3(b2._source);
      He(n3, a3) || (l2(a3), a3 = Ig(w2), e3.mutableReadLanes |= a3 & e3.pendingLanes);
      a3 = e3.mutableReadLanes;
      e3.entangledLanes |= a3;
      for (var d4 = e3.entanglements, h3 = a3; 0 < h3; ) {
        var k4 = 31 - Vc(h3), v2 = 1 << k4;
        d4[k4] |= a3;
        h3 &= ~v2;
      }
    }
  }, [c3, b2, d3]);
  h2.useEffect(function() {
    return d3(b2._source, function() {
      var a3 = p3.getSnapshot, c4 = p3.setSnapshot;
      try {
        c4(a3(b2._source));
        var d4 = Ig(w2);
        e3.mutableReadLanes |= d4 & e3.pendingLanes;
      } catch (q3) {
        c4(function() {
          throw q3;
        });
      }
    });
  }, [b2, d3]);
  He(C2, c3) && He(x3, b2) && He(A3, d3) || (a2 = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n3}, a2.dispatch = l2 = Oh.bind(null, R, a2), k3.queue = a2, k3.baseQueue = null, n3 = Mh(e3, b2, c3), k3.memoizedState = k3.baseState = n3);
  return n3;
}
function Ph(a2, b2, c3) {
  var d3 = Ih();
  return Nh(d3, a2, b2, c3);
}
function Qh(a2) {
  var b2 = Hh();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = b2.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2};
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [b2.memoizedState, a2];
}
function Rh(a2, b2, c3, d3) {
  a2 = {tag: a2, create: b2, destroy: c3, deps: d3, next: null};
  b2 = R.updateQueue;
  b2 === null ? (b2 = {lastEffect: null}, R.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c3 = b2.lastEffect, c3 === null ? b2.lastEffect = a2.next = a2 : (d3 = c3.next, c3.next = a2, a2.next = d3, b2.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b2 = Hh();
  a2 = {current: a2};
  return b2.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b2, c3, d3) {
  var e3 = Hh();
  R.flags |= a2;
  e3.memoizedState = Rh(1 | b2, c3, void 0, d3 === void 0 ? null : d3);
}
function Vh(a2, b2, c3, d3) {
  var e3 = Ih();
  d3 = d3 === void 0 ? null : d3;
  var f2 = void 0;
  if (S !== null) {
    var g3 = S.memoizedState;
    f2 = g3.destroy;
    if (d3 !== null && Bh(d3, g3.deps)) {
      Rh(b2, c3, f2, d3);
      return;
    }
  }
  R.flags |= a2;
  e3.memoizedState = Rh(1 | b2, c3, f2, d3);
}
function Wh(a2, b2) {
  return Uh(516, 4, a2, b2);
}
function Xh(a2, b2) {
  return Vh(516, 4, a2, b2);
}
function Yh(a2, b2) {
  return Vh(4, 2, a2, b2);
}
function Zh(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function $h(a2, b2, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a2), c3);
}
function ai() {
}
function bi(a2, b2) {
  var c3 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d3 = c3.memoizedState;
  if (d3 !== null && b2 !== null && Bh(b2, d3[1]))
    return d3[0];
  c3.memoizedState = [a2, b2];
  return a2;
}
function ci(a2, b2) {
  var c3 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d3 = c3.memoizedState;
  if (d3 !== null && b2 !== null && Bh(b2, d3[1]))
    return d3[0];
  a2 = a2();
  c3.memoizedState = [a2, b2];
  return a2;
}
function di(a2, b2) {
  var c3 = eg();
  gg(98 > c3 ? 98 : c3, function() {
    a2(true);
  });
  gg(97 < c3 ? 97 : c3, function() {
    var c4 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b2();
    } finally {
      wh.transition = c4;
    }
  });
}
function Oh(a2, b2, c3) {
  var d3 = Hg(), e3 = Ig(a2), f2 = {lane: e3, action: c3, eagerReducer: null, eagerState: null, next: null}, g3 = b2.pending;
  g3 === null ? f2.next = f2 : (f2.next = g3.next, g3.next = f2);
  b2.pending = f2;
  g3 = a2.alternate;
  if (a2 === R || g3 !== null && g3 === R)
    zh = yh = true;
  else {
    if (a2.lanes === 0 && (g3 === null || g3.lanes === 0) && (g3 = b2.lastRenderedReducer, g3 !== null))
      try {
        var h2 = b2.lastRenderedState, k3 = g3(h2, c3);
        f2.eagerReducer = g3;
        f2.eagerState = k3;
        if (He(k3, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e3, d3);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a2, b2) {
  Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
  return Uh(4, 2, Zh.bind(null, b2, a2), c3);
}, useLayoutEffect: function(a2, b2) {
  return Uh(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c3 = Hh();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c3.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c3) {
  var d3 = Hh();
  b2 = c3 !== void 0 ? c3(b2) : b2;
  d3.memoizedState = d3.baseState = b2;
  a2 = d3.queue = {pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2};
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [d3.memoizedState, a2];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Qh(a2), c3 = b2[0], d3 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Qh(false), b2 = a2[0];
  a2 = di.bind(null, a2[1]);
  Sh(a2);
  return [a2, b2];
}, useMutableSource: function(a2, b2, c3) {
  var d3 = Hh();
  d3.memoizedState = {refs: {getSnapshot: b2, setSnapshot: null}, source: a2, subscribe: c3};
  return Nh(d3, a2, b2, c3);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a2 = false, b2 = uf(function() {
      a2 || (a2 = true, c3("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c3 = Qh(b2)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c3("r:" + (tf++).toString(36));
    }, void 0, null));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Kh(Jh), c3 = b2[0], d3 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Kh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Lh(Jh), c3 = b2[0], d3 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Lh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a2, b2, c3, d3) {
  b2.child = a2 === null ? Zg(b2, null, c3, d3) : Yg(b2, a2.child, c3, d3);
}
function gi(a2, b2, c3, d3, e3) {
  c3 = c3.render;
  var f2 = b2.ref;
  tg(b2, e3);
  d3 = Ch(a2, b2, c3, d3, f2, e3);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e3, hi(a2, b2, e3);
  b2.flags |= 1;
  fi(a2, b2, d3, e3);
  return b2.child;
}
function ii(a2, b2, c3, d3, e3, f2) {
  if (a2 === null) {
    var g3 = c3.type;
    if (typeof g3 === "function" && !ji(g3) && g3.defaultProps === void 0 && c3.compare === null && c3.defaultProps === void 0)
      return b2.tag = 15, b2.type = g3, ki(a2, b2, g3, d3, e3, f2);
    a2 = Vg(c3.type, null, d3, b2, b2.mode, f2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  g3 = a2.child;
  if ((e3 & f2) === 0 && (e3 = g3.memoizedProps, c3 = c3.compare, c3 = c3 !== null ? c3 : Je, c3(e3, d3) && a2.ref === b2.ref))
    return hi(a2, b2, f2);
  b2.flags |= 1;
  a2 = Tg(g3, d3);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function ki(a2, b2, c3, d3, e3, f2) {
  if (a2 !== null && Je(a2.memoizedProps, d3) && a2.ref === b2.ref)
    if (ug = false, (f2 & e3) !== 0)
      (a2.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a2.lanes, hi(a2, b2, f2);
  return li(a2, b2, c3, d3, f2);
}
function mi(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = d3.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d3.mode === "hidden" || d3.mode === "unstable-defer-without-hiding")
    if ((b2.mode & 4) === 0)
      b2.memoizedState = {baseLanes: 0}, ni(b2, c3);
    else if ((c3 & 1073741824) !== 0)
      b2.memoizedState = {baseLanes: 0}, ni(b2, f2 !== null ? f2.baseLanes : c3);
    else
      return a2 = f2 !== null ? f2.baseLanes | c3 : c3, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = {baseLanes: a2}, ni(b2, a2), null;
  else
    f2 !== null ? (d3 = f2.baseLanes | c3, b2.memoizedState = null) : d3 = c3, ni(b2, d3);
  fi(a2, b2, e3, c3);
  return b2.child;
}
function oi(a2, b2) {
  var c3 = b2.ref;
  if (a2 === null && c3 !== null || a2 !== null && a2.ref !== c3)
    b2.flags |= 128;
}
function li(a2, b2, c3, d3, e3) {
  var f2 = Ff(c3) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e3);
  c3 = Ch(a2, b2, c3, d3, f2, e3);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e3, hi(a2, b2, e3);
  b2.flags |= 1;
  fi(a2, b2, c3, e3);
  return b2.child;
}
function pi(a2, b2, c3, d3, e3) {
  if (Ff(c3)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e3);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c3, d3), Og(b2, c3, d3, e3), d3 = true;
  else if (a2 === null) {
    var g3 = b2.stateNode, h2 = b2.memoizedProps;
    g3.props = h2;
    var k3 = g3.context, l2 = c3.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c3) ? Df : M.current, l2 = Ef(b2, l2));
    var n3 = c3.getDerivedStateFromProps, A3 = typeof n3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function";
    A3 || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h2 !== d3 || k3 !== l2) && Ng(b2, g3, d3, l2);
    wg = false;
    var p3 = b2.memoizedState;
    g3.state = p3;
    Cg(b2, d3, g3, e3);
    k3 = b2.memoizedState;
    h2 !== d3 || p3 !== k3 || N.current || wg ? (typeof n3 === "function" && (Gg(b2, c3, n3, d3), k3 = b2.memoizedState), (h2 = wg || Lg(b2, c3, h2, d3, p3, k3, l2)) ? (A3 || typeof g3.UNSAFE_componentWillMount !== "function" && typeof g3.componentWillMount !== "function" || (typeof g3.componentWillMount === "function" && g3.componentWillMount(), typeof g3.UNSAFE_componentWillMount === "function" && g3.UNSAFE_componentWillMount()), typeof g3.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g3.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d3, b2.memoizedState = k3), g3.props = d3, g3.state = k3, g3.context = l2, d3 = h2) : (typeof g3.componentDidMount === "function" && (b2.flags |= 4), d3 = false);
  } else {
    g3 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g3.props = l2;
    A3 = b2.pendingProps;
    p3 = g3.context;
    k3 = c3.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c3) ? Df : M.current, k3 = Ef(b2, k3));
    var C2 = c3.getDerivedStateFromProps;
    (n3 = typeof C2 === "function" || typeof g3.getSnapshotBeforeUpdate === "function") || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h2 !== A3 || p3 !== k3) && Ng(b2, g3, d3, k3);
    wg = false;
    p3 = b2.memoizedState;
    g3.state = p3;
    Cg(b2, d3, g3, e3);
    var x3 = b2.memoizedState;
    h2 !== A3 || p3 !== x3 || N.current || wg ? (typeof C2 === "function" && (Gg(b2, c3, C2, d3), x3 = b2.memoizedState), (l2 = wg || Lg(b2, c3, l2, d3, p3, x3, k3)) ? (n3 || typeof g3.UNSAFE_componentWillUpdate !== "function" && typeof g3.componentWillUpdate !== "function" || (typeof g3.componentWillUpdate === "function" && g3.componentWillUpdate(d3, x3, k3), typeof g3.UNSAFE_componentWillUpdate === "function" && g3.UNSAFE_componentWillUpdate(d3, x3, k3)), typeof g3.componentDidUpdate === "function" && (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g3.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d3, b2.memoizedState = x3), g3.props = d3, g3.state = x3, g3.context = k3, d3 = l2) : (typeof g3.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 256), d3 = false);
  }
  return qi(a2, b2, c3, d3, f2, e3);
}
function qi(a2, b2, c3, d3, e3, f2) {
  oi(a2, b2);
  var g3 = (b2.flags & 64) !== 0;
  if (!d3 && !g3)
    return e3 && Kf(b2, c3, false), hi(a2, b2, f2);
  d3 = b2.stateNode;
  ei.current = b2;
  var h2 = g3 && typeof c3.getDerivedStateFromError !== "function" ? null : d3.render();
  b2.flags |= 1;
  a2 !== null && g3 ? (b2.child = Yg(b2, a2.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a2, b2, h2, f2);
  b2.memoizedState = d3.state;
  e3 && Kf(b2, c3, true);
  return b2.child;
}
function ri(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
  eh(a2, b2.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = P.current, f2 = false, g3;
  (g3 = (b2.flags & 64) !== 0) || (g3 = a2 !== null && a2.memoizedState === null ? false : (e3 & 2) !== 0);
  g3 ? (f2 = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d3.fallback === void 0 || d3.unstable_avoidThisFallback === true || (e3 |= 1);
  I(P, e3 & 1);
  if (a2 === null) {
    d3.fallback !== void 0 && ph(b2);
    a2 = d3.children;
    e3 = d3.fallback;
    if (f2)
      return a2 = ui(b2, a2, e3, c3), b2.child.memoizedState = {baseLanes: c3}, b2.memoizedState = si, a2;
    if (typeof d3.unstable_expectedLoadTime === "number")
      return a2 = ui(b2, a2, e3, c3), b2.child.memoizedState = {baseLanes: c3}, b2.memoizedState = si, b2.lanes = 33554432, a2;
    c3 = vi({mode: "visible", children: a2}, b2.mode, c3, null);
    c3.return = b2;
    return b2.child = c3;
  }
  if (a2.memoizedState !== null) {
    if (f2)
      return d3 = wi(a2, b2, d3.children, d3.fallback, c3), f2 = b2.child, e3 = a2.child.memoizedState, f2.memoizedState = e3 === null ? {baseLanes: c3} : {baseLanes: e3.baseLanes | c3}, f2.childLanes = a2.childLanes & ~c3, b2.memoizedState = si, d3;
    c3 = xi(a2, b2, d3.children, c3);
    b2.memoizedState = null;
    return c3;
  }
  if (f2)
    return d3 = wi(a2, b2, d3.children, d3.fallback, c3), f2 = b2.child, e3 = a2.child.memoizedState, f2.memoizedState = e3 === null ? {baseLanes: c3} : {baseLanes: e3.baseLanes | c3}, f2.childLanes = a2.childLanes & ~c3, b2.memoizedState = si, d3;
  c3 = xi(a2, b2, d3.children, c3);
  b2.memoizedState = null;
  return c3;
}
function ui(a2, b2, c3, d3) {
  var e3 = a2.mode, f2 = a2.child;
  b2 = {mode: "hidden", children: b2};
  (e3 & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e3, 0, null);
  c3 = Xg(c3, e3, d3, null);
  f2.return = a2;
  c3.return = a2;
  f2.sibling = c3;
  a2.child = f2;
  return c3;
}
function xi(a2, b2, c3, d3) {
  var e3 = a2.child;
  a2 = e3.sibling;
  c3 = Tg(e3, {mode: "visible", children: c3});
  (b2.mode & 2) === 0 && (c3.lanes = d3);
  c3.return = b2;
  c3.sibling = null;
  a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
  return b2.child = c3;
}
function wi(a2, b2, c3, d3, e3) {
  var f2 = b2.mode, g3 = a2.child;
  a2 = g3.sibling;
  var h2 = {mode: "hidden", children: c3};
  (f2 & 2) === 0 && b2.child !== g3 ? (c3 = b2.child, c3.childLanes = 0, c3.pendingProps = h2, g3 = c3.lastEffect, g3 !== null ? (b2.firstEffect = c3.firstEffect, b2.lastEffect = g3, g3.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c3 = Tg(g3, h2);
  a2 !== null ? d3 = Tg(a2, d3) : (d3 = Xg(d3, f2, e3, null), d3.flags |= 2);
  d3.return = b2;
  c3.return = b2;
  c3.sibling = d3;
  b2.child = c3;
  return d3;
}
function yi(a2, b2) {
  a2.lanes |= b2;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b2);
  sg(a2.return, b2);
}
function zi(a2, b2, c3, d3, e3, f2) {
  var g3 = a2.memoizedState;
  g3 === null ? a2.memoizedState = {isBackwards: b2, rendering: null, renderingStartTime: 0, last: d3, tail: c3, tailMode: e3, lastEffect: f2} : (g3.isBackwards = b2, g3.rendering = null, g3.renderingStartTime = 0, g3.last = d3, g3.tail = c3, g3.tailMode = e3, g3.lastEffect = f2);
}
function Ai(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = d3.revealOrder, f2 = d3.tail;
  fi(a2, b2, d3.children, c3);
  d3 = P.current;
  if ((d3 & 2) !== 0)
    d3 = d3 & 1 | 2, b2.flags |= 64;
  else {
    if (a2 !== null && (a2.flags & 64) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && yi(a2, c3);
          else if (a2.tag === 19)
            yi(a2, c3);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d3 &= 1;
  }
  I(P, d3);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e3) {
      case "forwards":
        c3 = b2.child;
        for (e3 = null; c3 !== null; )
          a2 = c3.alternate, a2 !== null && ih(a2) === null && (e3 = c3), c3 = c3.sibling;
        c3 = e3;
        c3 === null ? (e3 = b2.child, b2.child = null) : (e3 = c3.sibling, c3.sibling = null);
        zi(b2, false, e3, c3, f2, b2.lastEffect);
        break;
      case "backwards":
        c3 = null;
        e3 = b2.child;
        for (b2.child = null; e3 !== null; ) {
          a2 = e3.alternate;
          if (a2 !== null && ih(a2) === null) {
            b2.child = e3;
            break;
          }
          a2 = e3.sibling;
          e3.sibling = c3;
          c3 = e3;
          e3 = a2;
        }
        zi(b2, true, c3, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a2, b2, c3) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Dg |= b2.lanes;
  if ((c3 & b2.childLanes) !== 0) {
    if (a2 !== null && b2.child !== a2.child)
      throw Error(y(153));
    if (b2.child !== null) {
      a2 = b2.child;
      c3 = Tg(a2, a2.pendingProps);
      b2.child = c3;
      for (c3.return = b2; a2.sibling !== null; )
        a2 = a2.sibling, c3 = c3.sibling = Tg(a2, a2.pendingProps), c3.return = b2;
      c3.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a2, b2) {
  for (var c3 = b2.child; c3 !== null; ) {
    if (c3.tag === 5 || c3.tag === 6)
      a2.appendChild(c3.stateNode);
    else if (c3.tag !== 4 && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b2)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b2, c3, d3) {
  var e3 = a2.memoizedProps;
  if (e3 !== d3) {
    a2 = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c3) {
      case "input":
        e3 = Ya(a2, e3);
        d3 = Ya(a2, d3);
        f2 = [];
        break;
      case "option":
        e3 = eb(a2, e3);
        d3 = eb(a2, d3);
        f2 = [];
        break;
      case "select":
        e3 = objectAssign({}, e3, {value: void 0});
        d3 = objectAssign({}, d3, {value: void 0});
        f2 = [];
        break;
      case "textarea":
        e3 = gb(a2, e3);
        d3 = gb(a2, d3);
        f2 = [];
        break;
      default:
        typeof e3.onClick !== "function" && typeof d3.onClick === "function" && (a2.onclick = jf);
    }
    vb(c3, d3);
    var g3;
    c3 = null;
    for (l2 in e3)
      if (!d3.hasOwnProperty(l2) && e3.hasOwnProperty(l2) && e3[l2] != null)
        if (l2 === "style") {
          var h2 = e3[l2];
          for (g3 in h2)
            h2.hasOwnProperty(g3) && (c3 || (c3 = {}), c3[g3] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d3) {
      var k3 = d3[l2];
      h2 = e3 != null ? e3[l2] : void 0;
      if (d3.hasOwnProperty(l2) && k3 !== h2 && (k3 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g3 in h2)
              !h2.hasOwnProperty(g3) || k3 && k3.hasOwnProperty(g3) || (c3 || (c3 = {}), c3[g3] = "");
            for (g3 in k3)
              k3.hasOwnProperty(g3) && h2[g3] !== k3[g3] && (c3 || (c3 = {}), c3[g3] = k3[g3]);
          } else
            c3 || (f2 || (f2 = []), f2.push(l2, c3)), c3 = k3;
        else
          l2 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h2 = h2 ? h2.__html : void 0, k3 != null && h2 !== k3 && (f2 = f2 || []).push(l2, k3)) : l2 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f2 = f2 || []).push(l2, "" + k3) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k3 != null && l2 === "onScroll" && G("scroll", a2), f2 || h2 === k3 || (f2 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f2 = f2 || []).push(l2, k3));
    }
    c3 && (f2 = f2 || []).push("style", c3);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a2, b2, c3, d3) {
  c3 !== d3 && (b2.flags |= 4);
};
function Fi(a2, b2) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c3 = null; b2 !== null; )
          b2.alternate !== null && (c3 = b2), b2 = b2.sibling;
        c3 === null ? a2.tail = null : c3.sibling = null;
        break;
      case "collapsed":
        c3 = a2.tail;
        for (var d3 = null; c3 !== null; )
          c3.alternate !== null && (d3 = c3), c3 = c3.sibling;
        d3 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d3.sibling = null;
    }
}
function Gi(a2, b2, c3) {
  var d3 = b2.pendingProps;
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d3 = b2.stateNode;
      d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
      if (a2 === null || a2.child === null)
        rh(b2) ? b2.flags |= 4 : d3.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e3 = dh(ch.current);
      c3 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Di(a2, b2, c3, d3, e3), a2.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d3) {
          if (b2.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b2)) {
          d3 = b2.stateNode;
          c3 = b2.type;
          var f2 = b2.memoizedProps;
          d3[wf] = b2;
          d3[xf] = f2;
          switch (c3) {
            case "dialog":
              G("cancel", d3);
              G("close", d3);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d3);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G(Xe[a2], d3);
              break;
            case "source":
              G("error", d3);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d3);
              G("load", d3);
              break;
            case "details":
              G("toggle", d3);
              break;
            case "input":
              Za(d3, f2);
              G("invalid", d3);
              break;
            case "select":
              d3._wrapperState = {wasMultiple: !!f2.multiple};
              G("invalid", d3);
              break;
            case "textarea":
              hb(d3, f2), G("invalid", d3);
          }
          vb(c3, f2);
          a2 = null;
          for (var g3 in f2)
            f2.hasOwnProperty(g3) && (e3 = f2[g3], g3 === "children" ? typeof e3 === "string" ? d3.textContent !== e3 && (a2 = ["children", e3]) : typeof e3 === "number" && d3.textContent !== "" + e3 && (a2 = ["children", "" + e3]) : ca.hasOwnProperty(g3) && e3 != null && g3 === "onScroll" && G("scroll", d3));
          switch (c3) {
            case "input":
              Va(d3);
              cb(d3, f2, true);
              break;
            case "textarea":
              Va(d3);
              jb(d3);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d3.onclick = jf);
          }
          d3 = a2;
          b2.updateQueue = d3;
          d3 !== null && (b2.flags |= 4);
        } else {
          g3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
          a2 === kb.html && (a2 = lb(c3));
          a2 === kb.html ? c3 === "script" ? (a2 = g3.createElement("div"), a2.innerHTML = "<script></script>", a2 = a2.removeChild(a2.firstChild)) : typeof d3.is === "string" ? a2 = g3.createElement(c3, {is: d3.is}) : (a2 = g3.createElement(c3), c3 === "select" && (g3 = a2, d3.multiple ? g3.multiple = true : d3.size && (g3.size = d3.size))) : a2 = g3.createElementNS(a2, c3);
          a2[wf] = b2;
          a2[xf] = d3;
          Bi(a2, b2, false, false);
          b2.stateNode = a2;
          g3 = wb(c3, d3);
          switch (c3) {
            case "dialog":
              G("cancel", a2);
              G("close", a2);
              e3 = d3;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a2);
              e3 = d3;
              break;
            case "video":
            case "audio":
              for (e3 = 0; e3 < Xe.length; e3++)
                G(Xe[e3], a2);
              e3 = d3;
              break;
            case "source":
              G("error", a2);
              e3 = d3;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a2);
              G("load", a2);
              e3 = d3;
              break;
            case "details":
              G("toggle", a2);
              e3 = d3;
              break;
            case "input":
              Za(a2, d3);
              e3 = Ya(a2, d3);
              G("invalid", a2);
              break;
            case "option":
              e3 = eb(a2, d3);
              break;
            case "select":
              a2._wrapperState = {wasMultiple: !!d3.multiple};
              e3 = objectAssign({}, d3, {value: void 0});
              G("invalid", a2);
              break;
            case "textarea":
              hb(a2, d3);
              e3 = gb(a2, d3);
              G("invalid", a2);
              break;
            default:
              e3 = d3;
          }
          vb(c3, e3);
          var h2 = e3;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k3 = h2[f2];
              f2 === "style" ? tb(a2, k3) : f2 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a2, k3)) : f2 === "children" ? typeof k3 === "string" ? (c3 !== "textarea" || k3 !== "") && pb(a2, k3) : typeof k3 === "number" && pb(a2, "" + k3) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k3 != null && f2 === "onScroll" && G("scroll", a2) : k3 != null && qa(a2, f2, k3, g3));
            }
          switch (c3) {
            case "input":
              Va(a2);
              cb(a2, d3, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              d3.value != null && a2.setAttribute("value", "" + Sa(d3.value));
              break;
            case "select":
              a2.multiple = !!d3.multiple;
              f2 = d3.value;
              f2 != null ? fb(a2, !!d3.multiple, f2, false) : d3.defaultValue != null && fb(a2, !!d3.multiple, d3.defaultValue, true);
              break;
            default:
              typeof e3.onClick === "function" && (a2.onclick = jf);
          }
          mf(c3, d3) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Ei(a2, b2, a2.memoizedProps, d3);
      else {
        if (typeof d3 !== "string" && b2.stateNode === null)
          throw Error(y(166));
        c3 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d3 = b2.stateNode, c3 = b2.memoizedProps, d3[wf] = b2, d3.nodeValue !== c3 && (b2.flags |= 4)) : (d3 = (c3.nodeType === 9 ? c3 : c3.ownerDocument).createTextNode(d3), d3[wf] = b2, b2.stateNode = d3);
      }
      return null;
    case 13:
      H(P);
      d3 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c3, b2;
      d3 = d3 !== null;
      c3 = false;
      a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c3 = a2.memoizedState !== null;
      if (d3 && !c3 && (b2.mode & 2) !== 0)
        if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d3 || c3)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H(P);
      d3 = b2.memoizedState;
      if (d3 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g3 = d3.rendering;
      if (g3 === null)
        if (f2)
          Fi(d3, false);
        else {
          if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g3 = ih(a2);
              if (g3 !== null) {
                b2.flags |= 64;
                Fi(d3, false);
                f2 = g3.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d3.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d3.lastEffect;
                d3 = c3;
                for (c3 = b2.child; c3 !== null; )
                  f2 = c3, a2 = d3, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g3 = f2.alternate, g3 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g3.childLanes, f2.lanes = g3.lanes, f2.child = g3.child, f2.memoizedProps = g3.memoizedProps, f2.memoizedState = g3.memoizedState, f2.updateQueue = g3.updateQueue, f2.type = g3.type, a2 = g3.dependencies, f2.dependencies = a2 === null ? null : {lanes: a2.lanes, firstContext: a2.firstContext}), c3 = c3.sibling;
                I(P, P.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          d3.tail !== null && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d3, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a2 = ih(g3), a2 !== null) {
            if (b2.flags |= 64, f2 = true, c3 = a2.updateQueue, c3 !== null && (b2.updateQueue = c3, b2.flags |= 4), Fi(d3, true), d3.tail === null && d3.tailMode === "hidden" && !g3.alternate && !lh)
              return b2 = b2.lastEffect = d3.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O() - d3.renderingStartTime > Ji && c3 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d3, false), b2.lanes = 33554432);
        d3.isBackwards ? (g3.sibling = b2.child, b2.child = g3) : (c3 = d3.last, c3 !== null ? c3.sibling = g3 : b2.child = g3, d3.last = g3);
      }
      return d3.tail !== null ? (c3 = d3.tail, d3.rendering = c3, d3.tail = c3.sibling, d3.lastEffect = b2.lastEffect, d3.renderingStartTime = O(), c3.sibling = null, b2 = P.current, I(P, f2 ? b2 & 1 | 2 : b2 & 1), c3) : null;
    case 23:
    case 24:
      return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d3.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y(156, b2.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b2 = a2.flags;
      return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b2 = a2.flags;
      if ((b2 & 64) !== 0)
        throw Error(y(285));
      a2.flags = b2 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H(P), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b2) {
  try {
    var c3 = "", d3 = b2;
    do
      c3 += Qa(d3), d3 = d3.return;
    while (d3);
    var e3 = c3;
  } catch (f2) {
    e3 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return {value: a2, source: b2, stack: e3};
}
function Ni(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c3) {
    setTimeout(function() {
      throw c3;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a2, b2, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  c3.payload = {element: null};
  var d3 = b2.value;
  c3.callback = function() {
    Qi || (Qi = true, Ri = d3);
    Ni(a2, b2);
  };
  return c3;
}
function Si(a2, b2, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  var d3 = a2.type.getDerivedStateFromError;
  if (typeof d3 === "function") {
    var e3 = b2.value;
    c3.payload = function() {
      Ni(a2, b2);
      return d3(e3);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c3.callback = function() {
    typeof d3 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b2));
    var c4 = b2.stack;
    this.componentDidCatch(b2.value, {componentStack: c4 !== null ? c4 : ""});
  });
  return c3;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a2) {
  var b2 = a2.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c3) {
        Wi(a2, c3);
      }
    else
      b2.current = null;
}
function Xi(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a2 !== null) {
        var c3 = a2.memoizedProps, d3 = a2.memoizedState;
        a2 = b2.stateNode;
        b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c3 : lg(b2.type, c3), d3);
        a2.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a2, b2, c3) {
  switch (c3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c3.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          if ((a2.tag & 3) === 3) {
            var d3 = a2.create;
            a2.destroy = d3();
          }
          a2 = a2.next;
        } while (a2 !== b2);
      }
      b2 = c3.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          var e3 = a2;
          d3 = e3.next;
          e3 = e3.tag;
          (e3 & 4) !== 0 && (e3 & 1) !== 0 && (Zi(c3, a2), $i(c3, a2));
          a2 = d3;
        } while (a2 !== b2);
      }
      return;
    case 1:
      a2 = c3.stateNode;
      c3.flags & 4 && (b2 === null ? a2.componentDidMount() : (d3 = c3.elementType === c3.type ? b2.memoizedProps : lg(c3.type, b2.memoizedProps), a2.componentDidUpdate(d3, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
      b2 = c3.updateQueue;
      b2 !== null && Eg(c3, b2, a2);
      return;
    case 3:
      b2 = c3.updateQueue;
      if (b2 !== null) {
        a2 = null;
        if (c3.child !== null)
          switch (c3.child.tag) {
            case 5:
              a2 = c3.child.stateNode;
              break;
            case 1:
              a2 = c3.child.stateNode;
          }
        Eg(c3, b2, a2);
      }
      return;
    case 5:
      a2 = c3.stateNode;
      b2 === null && c3.flags & 4 && mf(c3.type, c3.memoizedProps) && a2.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c3.memoizedState === null && (c3 = c3.alternate, c3 !== null && (c3 = c3.memoizedState, c3 !== null && (c3 = c3.dehydrated, c3 !== null && Cc(c3))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a2, b2) {
  for (var c3 = a2; ; ) {
    if (c3.tag === 5) {
      var d3 = c3.stateNode;
      if (b2)
        d3 = d3.style, typeof d3.setProperty === "function" ? d3.setProperty("display", "none", "important") : d3.display = "none";
      else {
        d3 = c3.stateNode;
        var e3 = c3.memoizedProps.style;
        e3 = e3 !== void 0 && e3 !== null && e3.hasOwnProperty("display") ? e3.display : null;
        d3.style.display = sb("display", e3);
      }
    } else if (c3.tag === 6)
      c3.stateNode.nodeValue = b2 ? "" : c3.memoizedProps;
    else if ((c3.tag !== 23 && c3.tag !== 24 || c3.memoizedState === null || c3 === a2) && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === a2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === a2)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function bj(a2, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b2.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var c3 = a2 = a2.next;
        do {
          var d3 = c3, e3 = d3.destroy;
          d3 = d3.tag;
          if (e3 !== void 0)
            if ((d3 & 4) !== 0)
              Zi(b2, c3);
            else {
              d3 = b2;
              try {
                e3();
              } catch (f2) {
                Wi(d3, f2);
              }
            }
          c3 = c3.next;
        } while (c3 !== a2);
      }
      break;
    case 1:
      Vi(b2);
      a2 = b2.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a2, b2);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function fj(a2) {
  a: {
    for (var b2 = a2.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y(160));
  }
  var c3 = b2;
  b2 = c3.stateNode;
  switch (c3.tag) {
    case 5:
      var d3 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d3 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d3 = true;
      break;
    default:
      throw Error(y(161));
  }
  c3.flags & 16 && (pb(b2, ""), c3.flags &= -17);
  a:
    b:
      for (c3 = a2; ; ) {
        for (; c3.sibling === null; ) {
          if (c3.return === null || ej(c3.return)) {
            c3 = null;
            break a;
          }
          c3 = c3.return;
        }
        c3.sibling.return = c3.return;
        for (c3 = c3.sibling; c3.tag !== 5 && c3.tag !== 6 && c3.tag !== 18; ) {
          if (c3.flags & 2)
            continue b;
          if (c3.child === null || c3.tag === 4)
            continue b;
          else
            c3.child.return = c3, c3 = c3.child;
        }
        if (!(c3.flags & 2)) {
          c3 = c3.stateNode;
          break a;
        }
      }
  d3 ? gj(a2, c3, b2) : hj(a2, c3, b2);
}
function gj(a2, b2, c3) {
  var d3 = a2.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a2 = e3 ? a2.stateNode : a2.stateNode.instance, b2 ? c3.nodeType === 8 ? c3.parentNode.insertBefore(a2, b2) : c3.insertBefore(a2, b2) : (c3.nodeType === 8 ? (b2 = c3.parentNode, b2.insertBefore(a2, c3)) : (b2 = c3, b2.appendChild(a2)), c3 = c3._reactRootContainer, c3 !== null && c3 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (gj(a2, b2, c3), a2 = a2.sibling; a2 !== null; )
      gj(a2, b2, c3), a2 = a2.sibling;
}
function hj(a2, b2, c3) {
  var d3 = a2.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a2 = e3 ? a2.stateNode : a2.stateNode.instance, b2 ? c3.insertBefore(a2, b2) : c3.appendChild(a2);
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (hj(a2, b2, c3), a2 = a2.sibling; a2 !== null; )
      hj(a2, b2, c3), a2 = a2.sibling;
}
function cj(a2, b2) {
  for (var c3 = b2, d3 = false, e3, f2; ; ) {
    if (!d3) {
      d3 = c3.return;
      a:
        for (; ; ) {
          if (d3 === null)
            throw Error(y(160));
          e3 = d3.stateNode;
          switch (d3.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e3 = e3.containerInfo;
              f2 = true;
              break a;
            case 4:
              e3 = e3.containerInfo;
              f2 = true;
              break a;
          }
          d3 = d3.return;
        }
      d3 = true;
    }
    if (c3.tag === 5 || c3.tag === 6) {
      a:
        for (var g3 = a2, h2 = c3, k3 = h2; ; )
          if (bj(g3, k3), k3.child !== null && k3.tag !== 4)
            k3.child.return = k3, k3 = k3.child;
          else {
            if (k3 === h2)
              break a;
            for (; k3.sibling === null; ) {
              if (k3.return === null || k3.return === h2)
                break a;
              k3 = k3.return;
            }
            k3.sibling.return = k3.return;
            k3 = k3.sibling;
          }
      f2 ? (g3 = e3, h2 = c3.stateNode, g3.nodeType === 8 ? g3.parentNode.removeChild(h2) : g3.removeChild(h2)) : e3.removeChild(c3.stateNode);
    } else if (c3.tag === 4) {
      if (c3.child !== null) {
        e3 = c3.stateNode.containerInfo;
        f2 = true;
        c3.child.return = c3;
        c3 = c3.child;
        continue;
      }
    } else if (bj(a2, c3), c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b2)
        return;
      c3 = c3.return;
      c3.tag === 4 && (d3 = false);
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function ij(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c3 = b2.updateQueue;
      c3 = c3 !== null ? c3.lastEffect : null;
      if (c3 !== null) {
        var d3 = c3 = c3.next;
        do
          (d3.tag & 3) === 3 && (a2 = d3.destroy, d3.destroy = void 0, a2 !== void 0 && a2()), d3 = d3.next;
        while (d3 !== c3);
      }
      return;
    case 1:
      return;
    case 5:
      c3 = b2.stateNode;
      if (c3 != null) {
        d3 = b2.memoizedProps;
        var e3 = a2 !== null ? a2.memoizedProps : d3;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c3[xf] = d3;
          a2 === "input" && d3.type === "radio" && d3.name != null && $a(c3, d3);
          wb(a2, e3);
          b2 = wb(a2, d3);
          for (e3 = 0; e3 < f2.length; e3 += 2) {
            var g3 = f2[e3], h2 = f2[e3 + 1];
            g3 === "style" ? tb(c3, h2) : g3 === "dangerouslySetInnerHTML" ? ob(c3, h2) : g3 === "children" ? pb(c3, h2) : qa(c3, g3, h2, b2);
          }
          switch (a2) {
            case "input":
              ab(c3, d3);
              break;
            case "textarea":
              ib(c3, d3);
              break;
            case "select":
              a2 = c3._wrapperState.wasMultiple, c3._wrapperState.wasMultiple = !!d3.multiple, f2 = d3.value, f2 != null ? fb(c3, !!d3.multiple, f2, false) : a2 !== !!d3.multiple && (d3.defaultValue != null ? fb(c3, !!d3.multiple, d3.defaultValue, true) : fb(c3, !!d3.multiple, d3.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c3 = b2.stateNode;
      c3.hydrate && (c3.hydrate = false, Cc(c3.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c3 = a2.stateNode;
    c3 === null && (c3 = a2.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d3 = lj.bind(null, a2, b3);
      c3.has(b3) || (c3.add(b3), b3.then(d3, d3));
    });
  }
}
function mj(a2, b2) {
  return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a2) {
  a2 = a2.mode;
  if ((a2 & 2) === 0)
    return 1;
  if ((a2 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a2 = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a2 = eg();
  (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b2, c3) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a2 = Kj(a2, b2);
  if (a2 === null)
    return null;
  $c(a2, b2, c3);
  a2 === U && (Hi |= b2, V === 4 && Ii(a2, W));
  var d3 = eg();
  b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c3), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d3 !== 98 && d3 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c3));
  vj = a2;
}
function Kj(a2, b2) {
  a2.lanes |= b2;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b2);
  c3 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c3 = a2.alternate, c3 !== null && (c3.childLanes |= b2), c3 = a2, a2 = a2.return;
  return c3.tag === 3 ? c3.stateNode : null;
}
function Mj(a2, b2) {
  for (var c3 = a2.callbackNode, d3 = a2.suspendedLanes, e3 = a2.pingedLanes, f2 = a2.expirationTimes, g3 = a2.pendingLanes; 0 < g3; ) {
    var h2 = 31 - Vc(g3), k3 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k3 & d3) === 0 || (k3 & e3) !== 0) {
        l2 = b2;
        Rc(k3);
        var n3 = F;
        f2[h2] = 10 <= n3 ? l2 + 250 : 6 <= n3 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a2.expiredLanes |= k3);
    g3 &= ~k3;
  }
  d3 = Uc(a2, a2 === U ? W : 0);
  b2 = F;
  if (d3 === 0)
    c3 !== null && (c3 !== Zf && Pf(c3), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (c3 !== null) {
      if (a2.callbackPriority === b2)
        return;
      c3 !== Zf && Pf(c3);
    }
    b2 === 15 ? (c3 = Lj.bind(null, a2), ag === null ? (ag = [c3], bg = Of(Uf, jg)) : ag.push(c3), c3 = Zf) : b2 === 14 ? c3 = hg(99, Lj.bind(null, a2)) : (c3 = Tc(b2), c3 = hg(c3, Nj.bind(null, a2)));
    a2.callbackPriority = b2;
    a2.callbackNode = c3;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b2 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b2)
    return null;
  var c3 = Uc(a2, a2 === U ? W : 0);
  if (c3 === 0)
    return null;
  var d3 = c3;
  var e3 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a2 || W !== d3)
    wj(), Qj(a2, d3);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a2, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e3;
  Y !== null ? d3 = 0 : (U = null, W = 0, d3 = V);
  if ((tj & Hi) !== 0)
    Qj(a2, 0);
  else if (d3 !== 0) {
    d3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c3 = Wc(a2), c3 !== 0 && (d3 = Tj(a2, c3)));
    if (d3 === 1)
      throw b2 = sj, Qj(a2, 0), Ii(a2, c3), Mj(a2, O()), b2;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c3;
    switch (d3) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c3);
        if ((c3 & 62914560) === c3 && (d3 = jj + 500 - O(), 10 < d3)) {
          if (Uc(a2, 0) !== 0)
            break;
          e3 = a2.suspendedLanes;
          if ((e3 & c3) !== c3) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e3;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d3);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c3);
        if ((c3 & 4186112) === c3)
          break;
        d3 = a2.eventTimes;
        for (e3 = -1; 0 < c3; ) {
          var g3 = 31 - Vc(c3);
          f2 = 1 << g3;
          g3 = d3[g3];
          g3 > e3 && (e3 = g3);
          c3 &= ~f2;
        }
        c3 = e3;
        c3 = O() - c3;
        c3 = (120 > c3 ? 120 : 480 > c3 ? 480 : 1080 > c3 ? 1080 : 1920 > c3 ? 1920 : 3e3 > c3 ? 3e3 : 4320 > c3 ? 4320 : 1960 * nj(c3 / 1960)) - c3;
        if (10 < c3) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c3);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a2, O());
  return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c3 = 31 - Vc(b2), d3 = 1 << c3;
    a2[c3] = -1;
    b2 &= ~d3;
  }
}
function Lj(a2) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a2 === U && (a2.expiredLanes & W) !== 0) {
    var b2 = W;
    var c3 = Tj(a2, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c3 = Tj(a2, b2));
  } else
    b2 = Uc(a2, 0), c3 = Tj(a2, b2);
  a2.tag !== 0 && c3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c3 = Tj(a2, b2)));
  if (c3 === 1)
    throw c3 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O()), c3;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Uj(a2);
  Mj(a2, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O());
    });
  }
  ig();
}
function Wj(a2, b2) {
  var c3 = X;
  X |= 1;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function Xj(a2, b2) {
  var c3 = X;
  X &= -2;
  X |= 8;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function ni(a2, b2) {
  I(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c3 = a2.timeoutHandle;
  c3 !== -1 && (a2.timeoutHandle = -1, pf(c3));
  if (Y !== null)
    for (c3 = Y.return; c3 !== null; ) {
      var d3 = c3;
      switch (d3.tag) {
        case 1:
          d3 = d3.type.childContextTypes;
          d3 !== null && d3 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d3);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d3);
          break;
        case 23:
        case 24:
          Ki();
      }
      c3 = c3.return;
    }
  U = a2;
  Y = Tg(a2.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b2) {
  do {
    var c3 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d3 = R.memoizedState; d3 !== null; ) {
          var e3 = d3.queue;
          e3 !== null && (e3.pending = null);
          d3 = d3.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c3 === null || c3.return === null) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g3 = c3.return, h2 = c3, k3 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l2 = k3;
          if ((h2.mode & 2) === 0) {
            var n3 = h2.alternate;
            n3 ? (h2.updateQueue = n3.updateQueue, h2.memoizedState = n3.memoizedState, h2.lanes = n3.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A3 = (P.current & 1) !== 0, p3 = g3;
          do {
            var C2;
            if (C2 = p3.tag === 13) {
              var x3 = p3.memoizedState;
              if (x3 !== null)
                C2 = x3.dehydrated !== null ? true : false;
              else {
                var w2 = p3.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A3 ? false : true;
              }
            }
            if (C2) {
              var z3 = p3.updateQueue;
              if (z3 === null) {
                var u = new Set();
                u.add(l2);
                p3.updateQueue = u;
              } else
                z3.add(l2);
              if ((p3.mode & 2) === 0) {
                p3.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t3 = zg(-1, 1);
                    t3.tag = 2;
                    Ag(h2, t3);
                  }
                h2.lanes |= 1;
                break a;
              }
              k3 = void 0;
              h2 = b2;
              var q3 = f2.pingCache;
              q3 === null ? (q3 = f2.pingCache = new Oi(), k3 = new Set(), q3.set(l2, k3)) : (k3 = q3.get(l2), k3 === void 0 && (k3 = new Set(), q3.set(l2, k3)));
              if (!k3.has(h2)) {
                k3.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p3.flags |= 4096;
              p3.lanes = b2;
              break a;
            }
            p3 = p3.return;
          } while (p3 !== null);
          k3 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k3 = Mi(k3, h2);
        p3 = g3;
        do {
          switch (p3.tag) {
            case 3:
              f2 = k3;
              p3.flags |= 4096;
              b2 &= -b2;
              p3.lanes |= b2;
              var J2 = Pi(p3, f2, b2);
              Bg(p3, J2);
              break a;
            case 1:
              f2 = k3;
              var K2 = p3.type, Q2 = p3.stateNode;
              if ((p3.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p3.flags |= 4096;
                b2 &= -b2;
                p3.lanes |= b2;
                var L2 = Si(p3, f2, b2);
                Bg(p3, L2);
                break a;
              }
          }
          p3 = p3.return;
        } while (p3 !== null);
      }
      Zj(c3);
    } catch (va) {
      b2 = va;
      Y === c3 && c3 !== null && (Y = c3 = c3.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return a2 === null ? Gh : a2;
}
function Tj(a2, b2) {
  var c3 = X;
  X |= 16;
  var d3 = Pj();
  U === a2 && W === b2 || Qj(a2, b2);
  do
    try {
      ak();
      break;
    } catch (e3) {
      Sj(a2, e3);
    }
  while (1);
  qg();
  X = c3;
  oj.current = d3;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a2) {
  var b2 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Zj(a2) : Y = b2;
  pj.current = null;
}
function Zj(a2) {
  var b2 = a2;
  do {
    var c3 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 2048) === 0) {
      c3 = Gi(c3, b2, qj);
      if (c3 !== null) {
        Y = c3;
        return;
      }
      c3 = b2;
      if (c3.tag !== 24 && c3.tag !== 23 || c3.memoizedState === null || (qj & 1073741824) !== 0 || (c3.mode & 4) === 0) {
        for (var d3 = 0, e3 = c3.child; e3 !== null; )
          d3 |= e3.lanes | e3.childLanes, e3 = e3.sibling;
        c3.childLanes = d3;
      }
      a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
    } else {
      c3 = Li(b2);
      if (c3 !== null) {
        c3.flags &= 2047;
        Y = c3;
        return;
      }
      a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (b2 !== null);
  V === 0 && (V = 5);
}
function Uj(a2) {
  var b2 = eg();
  gg(99, dk.bind(null, a2, b2));
  return null;
}
function dk(a2, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c3 = a2.finishedWork;
  if (c3 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c3 === a2.current)
    throw Error(y(177));
  a2.callbackNode = null;
  var d3 = c3.lanes | c3.childLanes, e3 = d3, f2 = a2.pendingLanes & ~e3;
  a2.pendingLanes = e3;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e3;
  a2.mutableReadLanes &= e3;
  a2.entangledLanes &= e3;
  e3 = a2.entanglements;
  for (var g3 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f2; ) {
    var k3 = 31 - Vc(f2), l2 = 1 << k3;
    e3[k3] = 0;
    g3[k3] = -1;
    h2[k3] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d3 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
  a2 === U && (Y = U = null, W = 0);
  1 < c3.flags ? c3.lastEffect !== null ? (c3.lastEffect.nextEffect = c3, d3 = c3.firstEffect) : d3 = c3 : d3 = c3.firstEffect;
  if (d3 !== null) {
    e3 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g3 = Ne();
    if (Oe(g3)) {
      if ("selectionStart" in g3)
        h2 = {start: g3.selectionStart, end: g3.selectionEnd};
      else
        a:
          if (h2 = (h2 = g3.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k3 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k3.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n3 = 0, A3 = -1, p3 = -1, C2 = 0, x3 = 0, w2 = g3, z3 = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A3 = n3 + f2);
                  w2 !== k3 || l2 !== 0 && w2.nodeType !== 3 || (p3 = n3 + l2);
                  w2.nodeType === 3 && (n3 += w2.nodeValue.length);
                  if ((u = w2.firstChild) === null)
                    break;
                  z3 = w2;
                  w2 = u;
                }
                for (; ; ) {
                  if (w2 === g3)
                    break b;
                  z3 === h2 && ++C2 === f2 && (A3 = n3);
                  z3 === k3 && ++x3 === l2 && (p3 = n3);
                  if ((u = w2.nextSibling) !== null)
                    break;
                  w2 = z3;
                  z3 = w2.parentNode;
                }
                w2 = u;
              }
            h2 = A3 === -1 || p3 === -1 ? null : {start: A3, end: p3};
          } else
            h2 = null;
      h2 = h2 || {start: 0, end: 0};
    } else
      h2 = null;
    lf = {focusedElem: g3, selectionRange: h2};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d3;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d3;
    do
      try {
        for (g3 = a2; Z !== null; ) {
          var t3 = Z.flags;
          t3 & 16 && pb(Z.stateNode, "");
          if (t3 & 128) {
            var q3 = Z.alternate;
            if (q3 !== null) {
              var v2 = q3.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t3 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g3, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q3 = Ne();
    t3 = v2.focusedElem;
    g3 = v2.selectionRange;
    if (q3 !== t3 && t3 && t3.ownerDocument && Me(t3.ownerDocument.documentElement, t3)) {
      g3 !== null && Oe(t3) && (q3 = g3.start, v2 = g3.end, v2 === void 0 && (v2 = q3), "selectionStart" in t3 ? (t3.selectionStart = q3, t3.selectionEnd = Math.min(v2, t3.value.length)) : (v2 = (q3 = t3.ownerDocument || document) && q3.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t3.textContent.length, J2 = Math.min(g3.start, h2), g3 = g3.end === void 0 ? J2 : Math.min(g3.end, h2), !v2.extend && J2 > g3 && (h2 = g3, g3 = J2, J2 = h2), h2 = Le(t3, J2), f2 = Le(t3, g3), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q3 = q3.createRange(), q3.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g3 ? (v2.addRange(q3), v2.extend(f2.node, f2.offset)) : (q3.setEnd(f2.node, f2.offset), v2.addRange(q3))))));
      q3 = [];
      for (v2 = t3; v2 = v2.parentNode; )
        v2.nodeType === 1 && q3.push({element: v2, left: v2.scrollLeft, top: v2.scrollTop});
      typeof t3.focus === "function" && t3.focus();
      for (t3 = 0; t3 < q3.length; t3++)
        v2 = q3[t3], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c3;
    Z = d3;
    do
      try {
        for (t3 = a2; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t3, Z.alternate, Z);
          if (K2 & 128) {
            q3 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q3 = L2;
                  break;
                default:
                  q3 = L2;
              }
              typeof Q2 === "function" ? Q2(q3) : Q2.current = q3;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e3;
  } else
    a2.current = c3;
  if (xj)
    xj = false, yj = a2, zj = b2;
  else
    for (Z = d3; Z !== null; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d3 = a2.pendingLanes;
  d3 === 0 && (Ti = null);
  d3 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c3 = c3.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c3, void 0, (c3.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a2, O());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a2 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    (b2 & 256) !== 0 && Xi(a2, Z);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b2) {
  Aj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b2) {
  Bj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a2 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b2 = X;
  X |= 32;
  var c3 = Bj;
  Bj = [];
  for (var d3 = 0; d3 < c3.length; d3 += 2) {
    var e3 = c3[d3], f2 = c3[d3 + 1], g3 = e3.destroy;
    e3.destroy = void 0;
    if (typeof g3 === "function")
      try {
        g3();
      } catch (k3) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k3);
      }
  }
  c3 = Aj;
  Aj = [];
  for (d3 = 0; d3 < c3.length; d3 += 2) {
    e3 = c3[d3];
    f2 = c3[d3 + 1];
    try {
      var h2 = e3.create;
      e3.destroy = h2();
    } catch (k3) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k3);
    }
  }
  for (h2 = a2.current.firstEffect; h2 !== null; )
    a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
  X = b2;
  ig();
  return true;
}
function gk(a2, b2, c3) {
  b2 = Mi(c3, b2);
  b2 = Pi(a2, b2, 1);
  Ag(a2, b2);
  b2 = Hg();
  a2 = Kj(a2, 1);
  a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
}
function Wi(a2, b2) {
  if (a2.tag === 3)
    gk(a2, a2, b2);
  else
    for (var c3 = a2.return; c3 !== null; ) {
      if (c3.tag === 3) {
        gk(c3, a2, b2);
        break;
      } else if (c3.tag === 1) {
        var d3 = c3.stateNode;
        if (typeof c3.type.getDerivedStateFromError === "function" || typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3))) {
          a2 = Mi(b2, a2);
          var e3 = Si(c3, a2, 1);
          Ag(c3, e3);
          e3 = Hg();
          c3 = Kj(c3, 1);
          if (c3 !== null)
            $c(c3, 1, e3), Mj(c3, e3);
          else if (typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3)))
            try {
              d3.componentDidCatch(b2, a2);
            } catch (f2) {
            }
          break;
        }
      }
      c3 = c3.return;
    }
}
function Yj(a2, b2, c3) {
  var d3 = a2.pingCache;
  d3 !== null && d3.delete(b2);
  b2 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c3;
  U === a2 && (W & c3) === c3 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c3);
  Mj(a2, b2);
}
function lj(a2, b2) {
  var c3 = a2.stateNode;
  c3 !== null && c3.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c3 = Hg();
  a2 = Kj(a2, b2);
  a2 !== null && ($c(a2, b2, c3), Mj(a2, c3));
}
var ck;
ck = function(a2, b2, c3) {
  var d3 = b2.lanes;
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if ((c3 & d3) !== 0)
      ug = (a2.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d3 = b2.memoizedProps.value;
          var e3 = b2.type._context;
          I(mg, e3._currentValue);
          e3._currentValue = d3;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c3 & b2.child.childLanes) !== 0)
              return ti(a2, b2, c3);
            I(P, P.current & 1);
            b2 = hi(a2, b2, c3);
            return b2 !== null ? b2.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d3 = (c3 & b2.childLanes) !== 0;
          if ((a2.flags & 64) !== 0) {
            if (d3)
              return Ai(a2, b2, c3);
            b2.flags |= 64;
          }
          e3 = b2.memoizedState;
          e3 !== null && (e3.rendering = null, e3.tail = null, e3.lastEffect = null);
          I(P, P.current);
          if (d3)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a2, b2, c3);
      }
      return hi(a2, b2, c3);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d3 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      e3 = Ef(b2, M.current);
      tg(b2, c3);
      e3 = Ch(null, b2, d3, a2, e3, c3);
      b2.flags |= 1;
      if (typeof e3 === "object" && e3 !== null && typeof e3.render === "function" && e3.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d3)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e3.state !== null && e3.state !== void 0 ? e3.state : null;
        xg(b2);
        var g3 = d3.getDerivedStateFromProps;
        typeof g3 === "function" && Gg(b2, d3, g3, a2);
        e3.updater = Kg;
        b2.stateNode = e3;
        e3._reactInternals = b2;
        Og(b2, d3, a2, c3);
        b2 = qi(null, b2, d3, true, f2, c3);
      } else
        b2.tag = 0, fi(null, b2, e3, c3), b2 = b2.child;
      return b2;
    case 16:
      e3 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        f2 = e3._init;
        e3 = f2(e3._payload);
        b2.type = e3;
        f2 = b2.tag = hk(e3);
        a2 = lg(e3, a2);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e3, a2, c3);
            break a;
          case 1:
            b2 = pi(null, b2, e3, a2, c3);
            break a;
          case 11:
            b2 = gi(null, b2, e3, a2, c3);
            break a;
          case 14:
            b2 = ii(null, b2, e3, lg(e3.type, a2), d3, c3);
            break a;
        }
        throw Error(y(306, e3, ""));
      }
      return b2;
    case 0:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), li(a2, b2, d3, e3, c3);
    case 1:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), pi(a2, b2, d3, e3, c3);
    case 3:
      ri(b2);
      d3 = b2.updateQueue;
      if (a2 === null || d3 === null)
        throw Error(y(282));
      d3 = b2.pendingProps;
      e3 = b2.memoizedState;
      e3 = e3 !== null ? e3.element : null;
      yg(a2, b2);
      Cg(b2, d3, null, c3);
      d3 = b2.memoizedState.element;
      if (d3 === e3)
        sh(), b2 = hi(a2, b2, c3);
      else {
        e3 = b2.stateNode;
        if (f2 = e3.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a2 = e3.mutableSourceEagerHydrationData;
          if (a2 != null)
            for (e3 = 0; e3 < a2.length; e3 += 2)
              f2 = a2[e3], f2._workInProgressVersionPrimary = a2[e3 + 1], th.push(f2);
          c3 = Zg(b2, null, d3, c3);
          for (b2.child = c3; c3; )
            c3.flags = c3.flags & -3 | 1024, c3 = c3.sibling;
        } else
          fi(a2, b2, d3, c3), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a2 === null && ph(b2), d3 = b2.type, e3 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g3 = e3.children, nf(d3, e3) ? g3 = null : f2 !== null && nf(d3, f2) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g3, c3), b2.child;
    case 6:
      return a2 === null && ph(b2), null;
    case 13:
      return ti(a2, b2, c3);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d3 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d3, c3) : fi(a2, b2, d3, c3), b2.child;
    case 11:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), gi(a2, b2, d3, e3, c3);
    case 7:
      return fi(a2, b2, b2.pendingProps, c3), b2.child;
    case 8:
      return fi(a2, b2, b2.pendingProps.children, c3), b2.child;
    case 12:
      return fi(a2, b2, b2.pendingProps.children, c3), b2.child;
    case 10:
      a: {
        d3 = b2.type._context;
        e3 = b2.pendingProps;
        g3 = b2.memoizedProps;
        f2 = e3.value;
        var h2 = b2.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g3 !== null)
          if (h2 = g3.value, f2 = He(h2, f2) ? 0 : (typeof d3._calculateChangedBits === "function" ? d3._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g3.children === e3.children && !N.current) {
              b2 = hi(a2, b2, c3);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k3 = h2.dependencies;
              if (k3 !== null) {
                g3 = h2.child;
                for (var l2 = k3.firstContext; l2 !== null; ) {
                  if (l2.context === d3 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c3 & -c3), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c3;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c3);
                    sg(h2.return, c3);
                    k3.lanes |= c3;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g3 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g3 !== null)
                g3.return = h2;
              else
                for (g3 = h2; g3 !== null; ) {
                  if (g3 === b2) {
                    g3 = null;
                    break;
                  }
                  h2 = g3.sibling;
                  if (h2 !== null) {
                    h2.return = g3.return;
                    g3 = h2;
                    break;
                  }
                  g3 = g3.return;
                }
              h2 = g3;
            }
        fi(a2, b2, e3.children, c3);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e3 = b2.type, f2 = b2.pendingProps, d3 = f2.children, tg(b2, c3), e3 = vg(e3, f2.unstable_observedBits), d3 = d3(e3), b2.flags |= 1, fi(a2, b2, d3, c3), b2.child;
    case 14:
      return e3 = b2.type, f2 = lg(e3, b2.pendingProps), f2 = lg(e3.type, f2), ii(a2, b2, e3, f2, d3, c3);
    case 15:
      return ki(a2, b2, b2.type, b2.pendingProps, d3, c3);
    case 17:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d3) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c3), Mg(b2, d3, e3), Og(b2, d3, e3, c3), qi(null, b2, d3, true, a2, c3);
    case 19:
      return Ai(a2, b2, c3);
    case 23:
      return mi(a2, b2, c3);
    case 24:
      return mi(a2, b2, c3);
  }
  throw Error(y(156, b2.tag));
};
function ik(a2, b2, c3, d3) {
  this.tag = a2;
  this.key = c3;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d3;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b2, c3, d3) {
  return new ik(a2, b2, c3, d3);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if (typeof a2 === "function")
    return ji(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b2) {
  var c3 = a2.alternate;
  c3 === null ? (c3 = nh(a2.tag, b2, a2.key, a2.mode), c3.elementType = a2.elementType, c3.type = a2.type, c3.stateNode = a2.stateNode, c3.alternate = a2, a2.alternate = c3) : (c3.pendingProps = b2, c3.type = a2.type, c3.flags = 0, c3.nextEffect = null, c3.firstEffect = null, c3.lastEffect = null);
  c3.childLanes = a2.childLanes;
  c3.lanes = a2.lanes;
  c3.child = a2.child;
  c3.memoizedProps = a2.memoizedProps;
  c3.memoizedState = a2.memoizedState;
  c3.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c3.dependencies = b2 === null ? null : {lanes: b2.lanes, firstContext: b2.firstContext};
  c3.sibling = a2.sibling;
  c3.index = a2.index;
  c3.ref = a2.ref;
  return c3;
}
function Vg(a2, b2, c3, d3, e3, f2) {
  var g3 = 2;
  d3 = a2;
  if (typeof a2 === "function")
    ji(a2) && (g3 = 1);
  else if (typeof a2 === "string")
    g3 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c3.children, e3, f2, b2);
        case Ha:
          g3 = 8;
          e3 |= 16;
          break;
        case wa:
          g3 = 8;
          e3 |= 1;
          break;
        case xa:
          return a2 = nh(12, c3, b2, e3 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f2, a2;
        case Ba:
          return a2 = nh(13, c3, b2, e3), a2.type = Ba, a2.elementType = Ba, a2.lanes = f2, a2;
        case Ca:
          return a2 = nh(19, c3, b2, e3), a2.elementType = Ca, a2.lanes = f2, a2;
        case Ia:
          return vi(c3, e3, f2, b2);
        case Ja:
          return a2 = nh(24, c3, b2, e3), a2.elementType = Ja, a2.lanes = f2, a2;
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case ya:
                g3 = 10;
                break a;
              case za:
                g3 = 9;
                break a;
              case Aa:
                g3 = 11;
                break a;
              case Da:
                g3 = 14;
                break a;
              case Ea:
                g3 = 16;
                d3 = null;
                break a;
              case Fa:
                g3 = 22;
                break a;
            }
          throw Error(y(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = nh(g3, c3, b2, e3);
  b2.elementType = a2;
  b2.type = d3;
  b2.lanes = f2;
  return b2;
}
function Xg(a2, b2, c3, d3) {
  a2 = nh(7, a2, d3, b2);
  a2.lanes = c3;
  return a2;
}
function vi(a2, b2, c3, d3) {
  a2 = nh(23, a2, d3, b2);
  a2.elementType = Ia;
  a2.lanes = c3;
  return a2;
}
function Ug(a2, b2, c3) {
  a2 = nh(6, a2, null, b2);
  a2.lanes = c3;
  return a2;
}
function Wg(a2, b2, c3) {
  b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c3;
  b2.stateNode = {containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation};
  return b2;
}
function jk(a2, b2, c3) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c3;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a2, b2, c3) {
  var d3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d3 == null ? null : "" + d3, children: a2, containerInfo: b2, implementation: c3};
}
function lk(a2, b2, c3, d3) {
  var e3 = b2.current, f2 = Hg(), g3 = Ig(e3);
  a:
    if (c3) {
      c3 = c3._reactInternals;
      b: {
        if (Zb(c3) !== c3 || c3.tag !== 1)
          throw Error(y(170));
        var h2 = c3;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y(171));
      }
      if (c3.tag === 1) {
        var k3 = c3.type;
        if (Ff(k3)) {
          c3 = If(c3, k3, h2);
          break a;
        }
      }
      c3 = h2;
    } else
      c3 = Cf;
  b2.context === null ? b2.context = c3 : b2.pendingContext = c3;
  b2 = zg(f2, g3);
  b2.payload = {element: a2};
  d3 = d3 === void 0 ? null : d3;
  d3 !== null && (b2.callback = d3);
  Ag(e3, b2);
  Jg(e3, g3, f2);
  return g3;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c3 = a2.retryLane;
    a2.retryLane = c3 !== 0 && c3 < b2 ? c3 : b2;
  }
}
function ok(a2, b2) {
  nk(a2, b2);
  (a2 = a2.alternate) && nk(a2, b2);
}
function pk() {
  return null;
}
function qk(a2, b2, c3) {
  var d3 = c3 != null && c3.hydrationOptions != null && c3.hydrationOptions.mutableSources || null;
  c3 = new jk(a2, b2, c3 != null && c3.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c3.current = b2;
  b2.stateNode = c3;
  xg(b2);
  a2[ff] = c3.current;
  cf(a2.nodeType === 8 ? a2.parentNode : a2);
  if (d3)
    for (a2 = 0; a2 < d3.length; a2++) {
      b2 = d3[a2];
      var e3 = b2._getVersion;
      e3 = e3(b2._source);
      c3.mutableSourceEagerHydrationData == null ? c3.mutableSourceEagerHydrationData = [b2, e3] : c3.mutableSourceEagerHydrationData.push(b2, e3);
    }
  this._internalRoot = c3;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b2 = a2.containerInfo;
  lk(null, a2, null, function() {
    b2[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function sk(a2, b2) {
  b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c3; c3 = a2.lastChild; )
      a2.removeChild(c3);
  return new qk(a2, 0, b2 ? {hydrate: true} : void 0);
}
function tk(a2, b2, c3, d3, e3) {
  var f2 = c3._reactRootContainer;
  if (f2) {
    var g3 = f2._internalRoot;
    if (typeof e3 === "function") {
      var h2 = e3;
      e3 = function() {
        var a3 = mk(g3);
        h2.call(a3);
      };
    }
    lk(b2, g3, a2, e3);
  } else {
    f2 = c3._reactRootContainer = sk(c3, d3);
    g3 = f2._internalRoot;
    if (typeof e3 === "function") {
      var k3 = e3;
      e3 = function() {
        var a3 = mk(g3);
        k3.call(a3);
      };
    }
    Xj(function() {
      lk(b2, g3, a2, e3);
    });
  }
  return mk(g3);
}
ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 4, b2);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 67108864, b2);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg(), c3 = Ig(a2);
    Jg(a2, c3, b2);
    ok(a2, c3);
  }
};
hc = function(a2, b2) {
  return b2();
};
yb = function(a2, b2, c3) {
  switch (b2) {
    case "input":
      ab(a2, c3);
      b2 = c3.name;
      if (c3.type === "radio" && b2 != null) {
        for (c3 = a2; c3.parentNode; )
          c3 = c3.parentNode;
        c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c3.length; b2++) {
          var d3 = c3[b2];
          if (d3 !== a2 && d3.form === a2.form) {
            var e3 = Db(d3);
            if (!e3)
              throw Error(y(90));
            Wa(d3);
            ab(d3, e3);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c3);
      break;
    case "select":
      b2 = c3.value, b2 != null && fb(a2, !!c3.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a2, b2, c3, d3, e3) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a2.bind(null, b2, c3, d3, e3));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a2, b2) {
  var c3 = X;
  X |= 2;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
};
function uk(a2, b2) {
  var c3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y(200));
  return kk(a2, b2, null, c3);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = cc(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a2)));
  }
  a2 = cc(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
var flushSync = function(a2, b2) {
  var c3 = X;
  if ((c3 & 48) !== 0)
    return a2(b2);
  X |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b2));
  } finally {
    X = c3, ig();
  }
};
var hydrate = function(a2, b2, c3) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, true, c3);
};
var render = function(a2, b2, c3) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, false, c3);
};
var unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a2, b2) {
  return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a2, b2, c3, d3) {
  if (!rk(c3))
    throw Error(y(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(y(38));
  return tk(a2, b2, c3, false, d3);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// build/_snowpack/pkg/common/extends-ffa7e3f6.js
function isNumber(value) {
  return typeof value === "number";
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var __DEV__ = false;
var lodash_mergewith = createCommonjsModule(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root2 = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e3) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function baseTimes(n3, iteratee) {
    var index = -1, result = Array(n3);
    while (++index < n3) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function overArg(func, transform2) {
    return function(arg) {
      return func(transform2(arg));
    };
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root2["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var objectCtorString = funcToString.call(Object);
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer2 = moduleExports ? root2.Buffer : void 0, Symbol2 = root2.Symbol, Uint8Array2 = root2.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e3) {
    }
  }();
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
  var Map2 = getNative(root2, "Map"), nativeCreate = getNative(Object, "create");
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject2(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty2.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map2 || ListCache)(),
      string: new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size2 = data.size;
    data.set(key, value);
    this.size += data.size == size2 ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }
  var baseFor = createBaseFor();
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeysIn(object) {
    if (!isObject2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject2(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject2(objValue) || isFunction2(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      configurable: true,
      enumerable: false,
      value: constant(string),
      writable: true
    });
  };
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e3) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isIterateeCall(value, index, object) {
    if (!isObject2(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function overRest(func, start, transform2) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform2(array);
      return apply(func, this, otherArgs);
    };
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var setToString = shortOut(baseSetToString);
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e3) {
      }
      try {
        return func + "";
      } catch (e3) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray2 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction2(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });
  function constant(value) {
    return function() {
      return value;
    };
  }
  function identity(value) {
    return value;
  }
  function stubFalse() {
    return false;
  }
  module.exports = mergeWith;
});
function omit(object, keys2) {
  var result = {};
  Object.keys(object).forEach((key) => {
    if (keys2.includes(key))
      return;
    result[key] = object[key];
  });
  return result;
}
function pick(object, keys2) {
  var result = {};
  keys2.forEach((key) => {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
function get(obj, path, fallback, index) {
  var key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = (fn) => {
  var cache = new WeakMap();
  var memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }
    var map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    var value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);
function objectFilter(object, fn) {
  var result = {};
  Object.keys(object).forEach((key) => {
    var value = object[key];
    var shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = (object) => objectFilter(object, (val) => val !== null && val !== void 0);
var objectKeys = (obj) => Object.keys(obj);
var fromEntries = (entries) => entries.reduce((carry, _ref) => {
  var [key, value] = _ref;
  carry[key] = value;
  return carry;
}, {});
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
var ariaAttr = (condition) => condition ? true : void 0;
var cx = function cx2() {
  for (var _len = arguments.length, classNames2 = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames2[_key] = arguments[_key];
  }
  return classNames2.filter(Boolean).join(" ");
};
function runIfFn(valueOrFn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
function callAllHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function func(event) {
    fns.some((fn) => {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function once(fn) {
  var result;
  return function func() {
    if (fn) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      result = fn.apply(this, args);
      fn = null;
    }
    return result;
  };
}
var noop = () => {
};
var warn = once((options) => () => {
  var {
    condition,
    message
  } = options;
  if (condition && __DEV__) {
    console.warn(message);
  }
});
var pipe = function pipe2() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }
  return (v2) => fns.reduce((a2, b2) => b2(a2), v2);
};
var tokenToCSSVar = (scale, value) => (theme3) => {
  var valueStr = String(value);
  var key = scale ? scale + "." + valueStr : valueStr;
  return isObject(theme3.__cssMap) && key in theme3.__cssMap ? theme3.__cssMap[key].varRef : value;
};
function createTransform(options) {
  var {
    scale,
    transform: transform2,
    compose
  } = options;
  var fn = (value, theme3) => {
    var _transform;
    var _value = tokenToCSSVar(scale, value)(theme3);
    var result = (_transform = transform2 == null ? void 0 : transform2(_value, theme3)) != null ? _transform : _value;
    if (compose) {
      result = compose(result, theme3);
    }
    return result;
  };
  return fn;
}
function toConfig(scale, transform2) {
  return (property) => {
    var result = {
      property,
      scale
    };
    result.transform = createTransform({
      scale,
      transform: transform2
    });
    return result;
  };
}
var getRtl = (_ref) => {
  var {
    rtl,
    ltr
  } = _ref;
  return (theme3) => theme3.direction === "rtl" ? rtl : ltr;
};
function logical(options) {
  var {
    property,
    scale,
    transform: transform2
  } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform2
    }) : transform2
  };
}
var transformTemplate = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function getTransformTemplate() {
  return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))", ...transformTemplate].join(" ");
}
function getTransformGpuTemplate() {
  return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...transformTemplate].join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": value,
    boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
};
var spaceYTemplate = {
  [owlSelector]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
};
function _wrapRegExp(re3, groups) {
  _wrapRegExp = function _wrapRegExp2(re4, groups2) {
    return new BabelRegExp(re4, void 0, groups2);
  };
  var _RegExp = _wrapNativeSuper(RegExp);
  var _super = RegExp.prototype;
  var _groups = new WeakMap();
  function BabelRegExp(re4, flags, groups2) {
    var _this = _RegExp.call(this, re4, flags);
    _groups.set(_this, groups2 || _groups.get(re4));
    return _this;
  }
  _inherits(BabelRegExp, _RegExp);
  BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result)
      result.groups = buildGroups(result, this);
    return result;
  };
  BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution === "string") {
      var groups2 = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_2, name) {
        return "$" + groups2[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = [];
        args.push.apply(args, arguments);
        if (typeof args[args.length - 1] !== "object") {
          args.push(buildGroups(args, _this));
        }
        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };
  function buildGroups(result, re4) {
    var g3 = _groups.get(re4);
    return Object.keys(g3).reduce(function(groups2, name) {
      groups2[name] = result[g3[name]];
      return groups2;
    }, Object.create(null));
  }
  return _wrapRegExp.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {constructor: {value: Wrapper, enumerable: false, writable: true, configurable: true}});
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e3) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p3) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p4) {
    o2.__proto__ = p4;
    return o2;
  };
  return _setPrototypeOf(o, p3);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme3) {
  var _regex$exec$groups, _regex$exec;
  if (value == null || globalSet.has(value))
    return value;
  var regex = /* @__PURE__ */ _wrapRegExp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
    type: 1,
    values: 2
  });
  var {
    type,
    values
  } = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {};
  if (!type || !values)
    return value;
  var _type = type.includes("-gradient") ? type : type + "-gradient";
  var [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  var direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  var _values = stops.map((stop) => {
    if (valueSet.has(stop))
      return stop;
    var firstStop = stop.indexOf(" ");
    var [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
    var _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    var key = "colors." + _color;
    var color2 = key in theme3.__cssMap ? theme3.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [color2, _stopOrFunc].join(" ") : color2;
  });
  return _type + "(" + _values.join(", ") + ")";
}
var isCSSFunction = (value) => {
  return isString(value) && value.includes("(") && value.includes(")");
};
var gradientTransform = (value, theme3) => parseGradient(value, theme3 != null ? theme3 : {});
var analyzeCSSValue = (value) => {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
};
var wrap = (str) => (value) => str + "(" + value + ")";
var transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip(value) {
    return value === "text" ? {
      color: "transparent",
      backgroundClip: "text"
    } : {
      backgroundClip: value
    };
  },
  transform(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  px(value) {
    if (value == null)
      return value;
    var {
      unitless
    } = analyzeCSSValue(value);
    return unitless || isNumber(value) ? value + "px" : value;
  },
  fraction(value) {
    return !isNumber(value) || value > 1 ? value : value * 100 + "%";
  },
  float(value, theme3) {
    var map = {
      left: "right",
      right: "left"
    };
    return theme3.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    var unitless = isString(value) && !value.endsWith("deg");
    return isNumber(value) || unitless ? value + "deg" : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage(value) {
    if (value == null)
      return value;
    var prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? "url(" + value + ")" : value;
  },
  outline(value) {
    var isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    } : {
      outline: value
    };
  },
  flexDirection(value) {
    var _flexDirectionTemplat;
    var {
      space: space2,
      divide: divide3
    } = (_flexDirectionTemplat = flexDirectionTemplate[value]) != null ? _flexDirectionTemplat : {};
    var result = {
      flexDirection: value
    };
    if (space2)
      result[space2] = 1;
    if (divide3)
      result[divide3] = 1;
    return result;
  }
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", transformFunctions.px),
  spaceT: toConfig("space", transformFunctions.px),
  degreeT(property) {
    return {
      property,
      transform: transformFunctions.degree
    };
  },
  prop(property, scale, transform2) {
    return _extends({
      property,
      scale
    }, scale && {
      transform: createTransform({
        scale,
        transform: transform2
      })
    });
  },
  propT(property, transform2) {
    return {
      property,
      transform: transform2
    };
  },
  sizes: toConfig("sizes", transformFunctions.px),
  sizesT: toConfig("sizes", transformFunctions.fraction),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.propT("backgroundImage", transformFunctions.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: {
    transform: transformFunctions.bgClip
  },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.propT("backgroundImage", transformFunctions.gradient),
  bgClip: {
    transform: transformFunctions.bgClip
  }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
var filter = {
  filter: {
    transform: transformFunctions.filter
  },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: {
    transform: transformFunctions.backdropFilter
  },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: transformFunctions.flexDirection
  },
  experimental_spaceX: {
    static: spaceXTemplate,
    transform: createTransform({
      scale: "space",
      transform: (value) => value !== null ? {
        "--chakra-space-x": value
      } : null
    })
  },
  experimental_spaceY: {
    static: spaceYTemplate,
    transform: createTransform({
      scale: "space",
      transform: (value) => value != null ? {
        "--chakra-space-y": value
      } : null
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: {
    transform: transformFunctions.outline
  },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  d: t.prop("display"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t.propT("float", transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = (theme3, key, styles2) => {
  var result = {};
  var obj = memoizedGet(theme3, key, {});
  for (var prop in obj) {
    var isInStyles = prop in styles2 && styles2[prop] != null;
    if (!isInStyles)
      result[prop] = obj[prop];
  }
  return result;
};
var others = {
  srOnly: {
    transform(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme3, styles2) => getWithPriority(theme3, "layerStyles." + value, styles2)
  },
  textStyle: {
    processResult: true,
    transform: (value, theme3, styles2) => getWithPriority(theme3, "textStyles." + value, styles2)
  },
  apply: {
    processResult: true,
    transform: (value, theme3, styles2) => getWithPriority(theme3, value, styles2)
  }
};
var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT(["top", "right", "bottom", "left"]),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var ring = {
  ring: {
    transform: transformFunctions.ring
  },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};
var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop("transitionTimingFunction", "transition.easing")
};
var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  },
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  }
};
var group = {
  hover: (selector) => selector + ":hover &, " + selector + "[data-hover] &",
  focus: (selector) => selector + ":focus &, " + selector + "[data-focus] &",
  active: (selector) => selector + ":active &, " + selector + "[data-active] &",
  disabled: (selector) => selector + ":disabled &, " + selector + "[data-disabled] &",
  invalid: (selector) => selector + ":invalid &, " + selector + "[data-invalid] &",
  checked: (selector) => selector + ":checked &, " + selector + "[data-checked] &",
  indeterminate: (selector) => selector + ":indeterminate &, " + selector + "[aria-checked=mixed] &, " + selector + "[data-indeterminate] &",
  readOnly: (selector) => selector + ":read-only &, " + selector + "[readonly] &, " + selector + "[data-read-only] &",
  expanded: (selector) => selector + ":read-only &, " + selector + "[aria-expanded=true] &, " + selector + "[data-expanded] &"
};
var toGroup = (fn) => merge(fn, "[role=group]", "[data-group]", ".group");
var merge = function merge2(fn) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }
  return selectors.map(fn).join(", ");
};
var pseudoSelectors = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible",
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: toGroup(group.hover),
  _groupFocus: toGroup(group.focus),
  _groupActive: toGroup(group.active),
  _groupDisabled: toGroup(group.disabled),
  _groupInvalid: toGroup(group.invalid),
  _groupChecked: toGroup(group.checked),
  _placeholder: "&::placeholder",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _dark: ".chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]",
  _light: ".chakra-ui-light &, [data-theme=light] &, &[data-theme=light]"
};
var pseudoPropNames = objectKeys(pseudoSelectors);
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var systemProps = lodash_mergewith({}, background, border, color, flexbox, layout, filter, ring, interactivity, grid, others, position, effect, space, typography, textDecoration, transform, list, transition);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var propNames = [...objectKeys(systemProps), ...pseudoPropNames];
var styleProps = _extends$1({}, systemProps, pseudoSelectors);
var isStyleProp = (prop) => prop in styleProps;
var expandResponsive = (styles2) => (theme3) => {
  if (!theme3.__breakpoints)
    return styles2;
  var {
    isResponsive,
    toArrayValue,
    media: medias
  } = theme3.__breakpoints;
  var computedStyles = {};
  for (var key in styles2) {
    var value = runIfFn(styles2[key], theme3);
    if (value == null)
      continue;
    value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
    if (!Array.isArray(value)) {
      computedStyles[key] = value;
      continue;
    }
    var queries2 = value.slice(0, medias.length).length;
    for (var index = 0; index < queries2; index += 1) {
      var media = medias == null ? void 0 : medias[index];
      if (!media) {
        computedStyles[key] = value[index];
        continue;
      }
      computedStyles[media] = computedStyles[media] || {};
      if (value[index] == null) {
        continue;
      }
      computedStyles[media][key] = value[index];
    }
  }
  return computedStyles;
};
var isCSSVariableTokenValue = (key, value) => key.startsWith("--") && isString(value) && !isCssVar(value);
var resolveTokenValue = (theme3, value) => {
  var _ref, _getVar2;
  if (value == null)
    return value;
  var getVar = (val) => {
    var _theme$__cssMap, _theme$__cssMap$val;
    return (_theme$__cssMap = theme3.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.varRef;
  };
  var getValue = (val) => {
    var _getVar;
    return (_getVar = getVar(val)) != null ? _getVar : val;
  };
  var valueSplit = value.split(",").map((v2) => v2.trim());
  var [tokenValue, fallbackValue] = valueSplit;
  value = (_ref = (_getVar2 = getVar(tokenValue)) != null ? _getVar2 : getValue(fallbackValue)) != null ? _ref : getValue(value);
  return value;
};
function getCss(options) {
  var {
    configs = {},
    pseudos = {},
    theme: theme3
  } = options;
  var css3 = function css4(stylesOrFn, nested) {
    if (nested === void 0) {
      nested = false;
    }
    var _styles = runIfFn(stylesOrFn, theme3);
    var styles2 = expandResponsive(_styles)(theme3);
    var computedStyles = {};
    for (var key in styles2) {
      var _config$transform, _config, _config2, _config3, _config4;
      var valueOrFn = styles2[key];
      var value = runIfFn(valueOrFn, theme3);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme3, value);
      }
      var config2 = configs[key];
      if (config2 === true) {
        config2 = {
          property: key
        };
      }
      if (isObject(value)) {
        var _computedStyles$key;
        computedStyles[key] = (_computedStyles$key = computedStyles[key]) != null ? _computedStyles$key : {};
        computedStyles[key] = lodash_mergewith({}, computedStyles[key], css4(value, true));
        continue;
      }
      var rawValue = (_config$transform = (_config = config2) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme3, _styles)) != null ? _config$transform : value;
      rawValue = (_config2 = config2) != null && _config2.processResult ? css4(rawValue, true) : rawValue;
      var configProperty = runIfFn((_config3 = config2) == null ? void 0 : _config3.property, theme3);
      if (!nested && (_config4 = config2) != null && _config4.static) {
        var staticStyles = runIfFn(config2.static, theme3);
        computedStyles = lodash_mergewith({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (var property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = lodash_mergewith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = lodash_mergewith({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css3;
}
var css = (styles2) => (theme3) => {
  var cssFn = getCss({
    theme: theme3,
    pseudos: pseudoSelectors,
    configs: systemProps
  });
  return cssFn(styles2);
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = function toExpression2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(resolveReference).join(" " + operator + " ").replace(/calc/g, "");
};
var _add = function add() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpression("+", ...operands) + ")";
};
var _subtract = function subtract() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpression("-", ...operands) + ")";
};
var _multiply = function multiply() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpression("*", ...operands) + ")";
};
var _divide = function divide() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpression("/", ...operands) + ")";
};
var _negate = (x3) => {
  var value = resolveReference(x3);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply(value, -1);
};
var calc = Object.assign((x3) => ({
  add: function add3() {
    for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      operands[_key6] = arguments[_key6];
    }
    return calc(_add(x3, ...operands));
  },
  subtract: function subtract4() {
    for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      operands[_key7] = arguments[_key7];
    }
    return calc(_subtract(x3, ...operands));
  },
  multiply: function multiply3() {
    for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      operands[_key8] = arguments[_key8];
    }
    return calc(_multiply(x3, ...operands));
  },
  divide: function divide3() {
    for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      operands[_key9] = arguments[_key9];
    }
    return calc(_divide(x3, ...operands));
  },
  negate: () => calc(_negate(x3)),
  toString: () => x3.toString()
}), {
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  negate: _negate
});
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate2(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e3) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var c = "comm";
var n = "rule";
var t$1 = "decl";
var i = "@import";
var p = "@keyframes";
var k = Math.abs;
var d = String.fromCharCode;
function m(e22, r22) {
  return (((r22 << 2 ^ z(e22, 0)) << 2 ^ z(e22, 1)) << 2 ^ z(e22, 2)) << 2 ^ z(e22, 3);
}
function g(e22) {
  return e22.trim();
}
function x(e22, r22) {
  return (e22 = r22.exec(e22)) ? e22[0] : e22;
}
function y2(e22, r22, a2) {
  return e22.replace(r22, a2);
}
function j(e22, r22) {
  return e22.indexOf(r22);
}
function z(e22, r22) {
  return e22.charCodeAt(r22) | 0;
}
function C(e22, r22, a2) {
  return e22.slice(r22, a2);
}
function A(e22) {
  return e22.length;
}
function M2(e22) {
  return e22.length;
}
function O2(e22, r22) {
  return r22.push(e22), e22;
}
function S2(e22, r22) {
  return e22.map(r22).join("");
}
var q = 1;
var B2 = 1;
var D2 = 0;
var E = 0;
var F2 = 0;
var G2 = "";
function H2(e22, r22, a2, c22, n22, t22, s2) {
  return {value: e22, root: r22, parent: a2, type: c22, props: n22, children: t22, line: q, column: B2, length: s2, return: ""};
}
function I2(e22, r22, a2) {
  return H2(e22, r22.root, r22.parent, a2, r22.props, r22.children, 0);
}
function J() {
  return F2;
}
function K() {
  F2 = E > 0 ? z(G2, --E) : 0;
  if (B2--, F2 === 10)
    B2 = 1, q--;
  return F2;
}
function L() {
  F2 = E < D2 ? z(G2, E++) : 0;
  if (B2++, F2 === 10)
    B2 = 1, q++;
  return F2;
}
function N2() {
  return z(G2, E);
}
function P2() {
  return E;
}
function Q(e22, r22) {
  return C(G2, e22, r22);
}
function R2(e22) {
  switch (e22) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function T2(e22) {
  return q = B2 = 1, D2 = A(G2 = e22), E = 0, [];
}
function U2(e22) {
  return G2 = "", e22;
}
function V2(e22) {
  return g(Q(E - 1, _(e22 === 91 ? e22 + 2 : e22 === 40 ? e22 + 1 : e22)));
}
function X2(e22) {
  while (F2 = N2())
    if (F2 < 33)
      L();
    else
      break;
  return R2(e22) > 2 || R2(F2) > 3 ? "" : " ";
}
function Z2(e22, r22) {
  while (--r22 && L())
    if (F2 < 48 || F2 > 102 || F2 > 57 && F2 < 65 || F2 > 70 && F2 < 97)
      break;
  return Q(e22, P2() + (r22 < 6 && N2() == 32 && L() == 32));
}
function _(e22) {
  while (L())
    switch (F2) {
      case e22:
        return E;
      case 34:
      case 39:
        return _(e22 === 34 || e22 === 39 ? e22 : F2);
      case 40:
        if (e22 === 41)
          _(e22);
        break;
      case 92:
        L();
        break;
    }
  return E;
}
function ee2(e22, r22) {
  while (L())
    if (e22 + F2 === 47 + 10)
      break;
    else if (e22 + F2 === 42 + 42 && N2() === 47)
      break;
  return "/*" + Q(r22, E - 1) + "*" + d(e22 === 47 ? e22 : L());
}
function re2(e22) {
  while (!R2(N2()))
    L();
  return Q(e22, E);
}
function ae2(e22) {
  return U2(ce2("", null, null, null, [""], e22 = T2(e22), 0, [0], e22));
}
function ce2(e22, r22, a2, c22, n22, t22, s2, u2, i2) {
  var f2 = 0;
  var o2 = 0;
  var l2 = s2;
  var v2 = 0;
  var h2 = 0;
  var p22 = 0;
  var b2 = 1;
  var w2 = 1;
  var $2 = 1;
  var k22 = 0;
  var m22 = "";
  var g22 = n22;
  var x22 = t22;
  var j2 = c22;
  var z22 = m22;
  while (w2)
    switch (p22 = k22, k22 = L()) {
      case 34:
      case 39:
      case 91:
      case 40:
        z22 += V2(k22);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z22 += X2(p22);
        break;
      case 92:
        z22 += Z2(P2() - 1, 7);
        continue;
      case 47:
        switch (N2()) {
          case 42:
          case 47:
            O2(te2(ee2(L(), P2()), r22, a2), i2);
            break;
          default:
            z22 += "/";
        }
        break;
      case 123 * b2:
        u2[f2++] = A(z22) * $2;
      case 125 * b2:
      case 59:
      case 0:
        switch (k22) {
          case 0:
          case 125:
            w2 = 0;
          case 59 + o2:
            if (h2 > 0 && A(z22) - l2)
              O2(h2 > 32 ? se2(z22 + ";", c22, a2, l2 - 1) : se2(y2(z22, " ", "") + ";", c22, a2, l2 - 2), i2);
            break;
          case 59:
            z22 += ";";
          default:
            O2(j2 = ne2(z22, r22, a2, f2, o2, n22, u2, m22, g22 = [], x22 = [], l2), t22);
            if (k22 === 123)
              if (o2 === 0)
                ce2(z22, r22, j2, j2, g22, t22, l2, u2, x22);
              else
                switch (v2) {
                  case 100:
                  case 109:
                  case 115:
                    ce2(e22, j2, j2, c22 && O2(ne2(e22, j2, j2, 0, 0, n22, u2, m22, n22, g22 = [], l2), x22), n22, x22, l2, u2, c22 ? g22 : x22);
                    break;
                  default:
                    ce2(z22, j2, j2, j2, [""], x22, l2, u2, x22);
                }
        }
        f2 = o2 = h2 = 0, b2 = $2 = 1, m22 = z22 = "", l2 = s2;
        break;
      case 58:
        l2 = 1 + A(z22), h2 = p22;
      default:
        if (b2 < 1) {
          if (k22 == 123)
            --b2;
          else if (k22 == 125 && b2++ == 0 && K() == 125)
            continue;
        }
        switch (z22 += d(k22), k22 * b2) {
          case 38:
            $2 = o2 > 0 ? 1 : (z22 += "\f", -1);
            break;
          case 44:
            u2[f2++] = (A(z22) - 1) * $2, $2 = 1;
            break;
          case 64:
            if (N2() === 45)
              z22 += V2(L());
            v2 = N2(), o2 = A(m22 = z22 += re2(P2())), k22++;
            break;
          case 45:
            if (p22 === 45 && A(z22) == 2)
              b2 = 0;
        }
    }
  return t22;
}
function ne2(e22, r22, a2, c22, t22, s2, u2, i2, f2, o2, l2) {
  var v2 = t22 - 1;
  var h2 = t22 === 0 ? s2 : [""];
  var p22 = M2(h2);
  for (var b2 = 0, w2 = 0, $2 = 0; b2 < c22; ++b2)
    for (var d22 = 0, m22 = C(e22, v2 + 1, v2 = k(w2 = u2[b2])), x22 = e22; d22 < p22; ++d22)
      if (x22 = g(w2 > 0 ? h2[d22] + " " + m22 : y2(m22, /&\f/g, h2[d22])))
        f2[$2++] = x22;
  return H2(e22, r22, a2, t22 === 0 ? n : i2, f2, o2, l2);
}
function te2(e22, r22, a2) {
  return H2(e22, r22, a2, c, d(J()), C(e22, 2, -2), 0);
}
function se2(e22, r22, a2, c22) {
  return H2(e22, r22, a2, t$1, C(e22, 0, c22), C(e22, c22 + 1, -1), c22);
}
function ue2(c22, n22) {
  switch (m(c22, n22)) {
    case 5103:
      return a + "print-" + c22 + c22;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c22 + c22;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c22 + r + c22 + e + c22 + c22;
    case 6828:
    case 4268:
      return a + c22 + e + c22 + c22;
    case 6165:
      return a + c22 + e + "flex-" + c22 + c22;
    case 5187:
      return a + c22 + y2(c22, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c22;
    case 5443:
      return a + c22 + e + "flex-item-" + y2(c22, /flex-|-self/, "") + c22;
    case 4675:
      return a + c22 + e + "flex-line-pack" + y2(c22, /align-content|flex-|-self/, "") + c22;
    case 5548:
      return a + c22 + e + y2(c22, "shrink", "negative") + c22;
    case 5292:
      return a + c22 + e + y2(c22, "basis", "preferred-size") + c22;
    case 6060:
      return a + "box-" + y2(c22, "-grow", "") + a + c22 + e + y2(c22, "grow", "positive") + c22;
    case 4554:
      return a + y2(c22, /([^-])(transform)/g, "$1" + a + "$2") + c22;
    case 6187:
      return y2(y2(y2(c22, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c22, "") + c22;
    case 5495:
    case 3959:
      return y2(c22, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return y2(y2(c22, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c22 + c22;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y2(c22, /(.+)-inline(.+)/, a + "$1$2") + c22;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(c22) - 1 - n22 > 6)
        switch (z(c22, n22 + 1)) {
          case 109:
            if (z(c22, n22 + 4) !== 45)
              break;
          case 102:
            return y2(c22, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r + (z(c22, n22 + 3) == 108 ? "$3" : "$2-$3")) + c22;
          case 115:
            return ~j(c22, "stretch") ? ue2(y2(c22, "stretch", "fill-available"), n22) + c22 : c22;
        }
      break;
    case 4949:
      if (z(c22, n22 + 1) !== 115)
        break;
    case 6444:
      switch (z(c22, A(c22) - 3 - (~j(c22, "!important") && 10))) {
        case 107:
          return y2(c22, ":", ":" + a) + c22;
        case 101:
          return y2(c22, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c22, 14) === 45 ? "inline-" : "") + "box$3$1" + a + "$2$3$1" + e + "$2box$3") + c22;
      }
      break;
    case 5936:
      switch (z(c22, n22 + 11)) {
        case 114:
          return a + c22 + e + y2(c22, /[svh]\w+-[tblr]{2}/, "tb") + c22;
        case 108:
          return a + c22 + e + y2(c22, /[svh]\w+-[tblr]{2}/, "tb-rl") + c22;
        case 45:
          return a + c22 + e + y2(c22, /[svh]\w+-[tblr]{2}/, "lr") + c22;
      }
      return a + c22 + e + c22 + c22;
  }
  return c22;
}
function ie2(e22, r22) {
  var a2 = "";
  var c22 = M2(e22);
  for (var n22 = 0; n22 < c22; n22++)
    a2 += r22(e22[n22], n22, e22, r22) || "";
  return a2;
}
function fe2(e22, r22, a2, s2) {
  switch (e22.type) {
    case i:
    case t$1:
      return e22.return = e22.return || e22.value;
    case c:
      return "";
    case n:
      e22.value = e22.props.join(",");
  }
  return A(a2 = ie2(e22.children, s2)) ? e22.return = e22.value + "{" + a2 + "}" : "";
}
function oe2(e22) {
  var r22 = M2(e22);
  return function(a2, c22, n22, t22) {
    var s2 = "";
    for (var u2 = 0; u2 < r22; u2++)
      s2 += e22[u2](a2, c22, n22, t22) || "";
    return s2;
  };
}
function le2(e22) {
  return function(r22) {
    if (!r22.root) {
      if (r22 = r22.return)
        e22(r22);
    }
  };
}
function ve2(c22, s2, u2, i2) {
  if (!c22.return)
    switch (c22.type) {
      case t$1:
        c22.return = ue2(c22.value, c22.length);
        break;
      case p:
        return ie2([I2(y2(c22.value, "@", "@" + a), c22, "")], i2);
      case n:
        if (c22.length)
          return S2(c22.props, function(n22) {
            switch (x(n22, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ie2([I2(y2(n22, /:(read-\w+)/, ":" + r + "$1"), c22, "")], i2);
              case "::placeholder":
                return ie2([I2(y2(n22, /:(plac\w+)/, ":" + a + "input-$1"), c22, ""), I2(y2(n22, /:(plac\w+)/, ":" + r + "$1"), c22, ""), I2(y2(n22, /:(plac\w+)/, e + "input-$1"), c22, "")], i2);
            }
            return "";
          });
    }
}
var weakMemoize = function weakMemoize2(func) {
  var cache = new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
function memoize$1(fn) {
  var cache = Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (R2(character)) {
      case 0:
        if (character === 38 && N2() === 12) {
          points[index] = 1;
        }
        parsed[index] += re2(E - 1);
        break;
      case 2:
        parsed[index] += V2(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = N2() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += d(character);
    }
  } while (character = L());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return U2(toRules(T2(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || !element.length) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k3 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k3++) {
      element.props[k3] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [ve2];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node) {
      var dataEmotionAttribute = node.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container2;
  var nodesToHydrate = [];
  {
    container2 = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
      var attrib = node.getAttribute("data-emotion").split(" ");
      for (var i2 = 1; i2 < attrib.length; i2++) {
        inserted[attrib[i2]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [fe2, le2(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe2(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return ie2(ae2(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container: container2,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var isBrowser$1 = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser$1 === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k3, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k3 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k3 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16);
    k3 ^= k3 >>> 24;
    h2 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p22) {
          cursor = {
            name: p1,
            styles: p22,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles2 += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles2) + identifierName;
  return {
    name,
    styles: styles2,
    next: cursor
  };
};
var EmotionCacheContext = /* @__PURE__ */ react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.forwardRef(function(props, ref) {
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.createContext({});
var getTheme = function getTheme2(outerTheme, theme3) {
  if (typeof theme3 === "function") {
    var mergedTheme = theme3(outerTheme);
    return mergedTheme;
  }
  return _extends$2({}, outerTheme, theme3);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme3) {
    return getTheme(outerTheme, theme3);
  });
});
var ThemeProvider = function ThemeProvider2(props) {
  var theme3 = react.useContext(ThemeContext);
  if (props.theme !== theme3) {
    theme3 = createCacheWithTheme(theme3)(props.theme);
  }
  return /* @__PURE__ */ react.createElement(ThemeContext.Provider, {
    value: theme3
  }, props.children);
};
var _extends_1 = createCommonjsModule(function(module) {
  function _extends5() {
    module.exports = _extends5 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _extends5.apply(this, arguments);
  }
  module.exports = _extends5;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

// build/_snowpack/pkg/common/providers-8a36b881.js
function getLastItem(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function analyzeCSSValue2(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
}
function px(value) {
  if (value == null)
    return value;
  var {
    unitless
  } = analyzeCSSValue2(value);
  return unitless || isNumber(value) ? value + "px" : value;
}
var sortByBreakpointValue = (a2, b2) => parseInt(a2[1], 10) > parseInt(b2[1], 10) ? 1 : -1;
var sortBps = (breakpoints2) => fromEntries(Object.entries(breakpoints2).sort(sortByBreakpointValue));
function normalize(breakpoints2) {
  var sorted = sortBps(breakpoints2);
  return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints2) {
  var value = Object.keys(sortBps(breakpoints2));
  return new Set(value);
}
function subtract2(value) {
  var _px;
  if (!value)
    return value;
  value = (_px = px(value)) != null ? _px : value;
  var factor = value.endsWith("px") ? -1 : -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, (m3) => "" + (parseFloat(m3) + factor));
}
function queryString(min, max) {
  var query = [];
  if (min)
    query.push("@media screen and (min-width: " + px(min) + ")");
  if (query.length > 0 && max)
    query.push("and");
  if (max)
    query.push("@media screen and (max-width: " + px(max) + ")");
  return query.join(" ");
}
function analyzeBreakpoints(breakpoints2) {
  var _breakpoints$base;
  if (!breakpoints2)
    return null;
  breakpoints2.base = (_breakpoints$base = breakpoints2.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize(breakpoints2);
  var queries2 = Object.entries(breakpoints2).sort(sortByBreakpointValue).map((_ref, index, entry) => {
    var _entry;
    var [breakpoint, minW] = _ref;
    var [, maxW] = (_entry = entry[index + 1]) != null ? _entry : [];
    maxW = parseFloat(maxW) > 0 ? subtract2(maxW) : void 0;
    return {
      breakpoint,
      minW,
      maxW,
      maxWQuery: queryString(null, maxW),
      minWQuery: queryString(minW),
      minMaxQuery: queryString(minW, maxW)
    };
  });
  var _keys = keys(breakpoints2);
  var _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    isResponsive(test) {
      var keys2 = Object.keys(test);
      return keys2.length > 0 && keys2.every((key) => _keys.has(key));
    },
    asObject: sortBps(breakpoints2),
    asArray: normalize(breakpoints2),
    details: queries2,
    media: [null, ...normalized.map((minW) => queryString(minW)).slice(1)],
    toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }
      var result = _keysArr.map((bp) => {
        var _test$bp;
        return (_test$bp = test[bp]) != null ? _test$bp : null;
      });
      while (getLastItem(result) === null) {
        result.pop();
      }
      return result;
    },
    toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return test.reduce((acc, value, index) => {
        var key = _keysArr[index];
        if (key != null && value != null)
          acc[key] = value;
        return acc;
      }, {});
    }
  };
}
function walkObject(target, predicate) {
  function inner(value, path) {
    if (path === void 0) {
      path = [];
    }
    if (isArray(value)) {
      return value.map((item, index) => inner(item, [...path, String(index)]));
    }
    if (isObject(value)) {
      return Object.fromEntries(Object.entries(value).map((_ref) => {
        var [key, child] = _ref;
        return [key, inner(child, [...path, key])];
      }));
    }
    return predicate(value, path);
  }
  return inner(target);
}
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
var mockBody = {
  classList: {
    add: noop,
    remove: noop
  }
};
var getBody = () => isBrowser ? document.body : mockBody;
function syncBodyClassName(isDark2) {
  var body = getBody();
  body.classList.add(isDark2 ? classNames.dark : classNames.light);
  body.classList.remove(isDark2 ? classNames.light : classNames.dark);
}
function getMediaQuery(query) {
  var mediaQueryList = window.matchMedia == null ? void 0 : window.matchMedia(query);
  if (!mediaQueryList) {
    return void 0;
  }
  return !!mediaQueryList.media === mediaQueryList.matches;
}
var queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
};
function getColorScheme(fallback) {
  var _getMediaQuery;
  var isDark2 = (_getMediaQuery = getMediaQuery(queries.dark)) != null ? _getMediaQuery : fallback === "dark";
  return isDark2 ? "dark" : "light";
}
function addListener(fn) {
  if (!("matchMedia" in window)) {
    return noop;
  }
  var mediaQueryList = window.matchMedia(queries.dark);
  var listener = () => {
    fn(mediaQueryList.matches ? "dark" : "light");
  };
  listener();
  mediaQueryList.addListener(listener);
  return () => {
    mediaQueryList.removeListener(listener);
  };
}
var root = {
  get: () => document.documentElement.style.getPropertyValue("--chakra-ui-color-mode"),
  set: (mode2) => {
    if (isBrowser) {
      document.documentElement.style.setProperty("--chakra-ui-color-mode", mode2);
    }
  }
};
var hasSupport = () => typeof Storage !== "undefined";
var storageKey = "chakra-ui-color-mode";
var localStorageManager = {
  get(init) {
    if (!hasSupport())
      return init;
    try {
      var _value = localStorage.getItem(storageKey);
      return _value != null ? _value : init;
    } catch (error) {
      return init;
    }
  },
  set(value) {
    if (!hasSupport())
      return;
    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
    }
  },
  type: "localStorage"
};
var ColorModeContext = /* @__PURE__ */ react.createContext({});
var useColorMode = () => {
  var context = react.useContext(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};
function ColorModeProvider(props) {
  var {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode
    },
    colorModeManager = localStorageManager
  } = props;
  var [colorMode, rawSetColorMode] = react.useState(colorModeManager.type === "cookie" ? colorModeManager.get(initialColorMode) : initialColorMode);
  react.useEffect(() => {
    if (isBrowser && colorModeManager.type === "localStorage") {
      var mode2 = useSystemColorMode ? getColorScheme(initialColorMode) : root.get() || colorModeManager.get();
      if (mode2) {
        rawSetColorMode(mode2);
      }
    }
  }, [colorModeManager, useSystemColorMode, initialColorMode]);
  react.useEffect(() => {
    var isDark2 = colorMode === "dark";
    syncBodyClassName(isDark2);
    root.set(isDark2 ? "dark" : "light");
  }, [colorMode]);
  var setColorMode = react.useCallback((value2) => {
    colorModeManager.set(value2);
    rawSetColorMode(value2);
  }, [colorModeManager]);
  var toggleColorMode = react.useCallback(() => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);
  react.useEffect(() => {
    var removeListener;
    if (useSystemColorMode) {
      removeListener = addListener(setColorMode);
    }
    return () => {
      if (removeListener && useSystemColorMode) {
        removeListener();
      }
    };
  }, [setColorMode, useSystemColorMode]);
  var context = react.useMemo(() => ({
    colorMode: value != null ? value : colorMode,
    toggleColorMode: value ? noop : toggleColorMode,
    setColorMode: value ? noop : setColorMode
  }), [colorMode, setColorMode, toggleColorMode, value]);
  return /* @__PURE__ */ react.createElement(ColorModeContext.Provider, {
    value: context
  }, children);
}
function replaceWhiteSpace(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  var valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  var isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? valueStr.replace(".", "\\.") : value;
}
function addPrefix(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return [prefix, escape(value)].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return "var(" + escape(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVarDefinition(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return "--" + addPrefix(value, prefix);
}
function cssVar(name, fallback, cssVarPrefix) {
  var cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function createThemeVars(target, options) {
  var context = {
    cssMap: {},
    cssVars: {}
  };
  walkObject(target, (value, path) => {
    var _tokenHandlerMap$firs;
    var [firstKey] = path;
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;
    var {
      cssVars,
      cssMap
    } = handler(path, value, options);
    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
}
var tokenHandlerMap = {
  space: (keys2, value, options) => {
    var properties = tokenHandlerMap.defaultHandler(keys2, value, options);
    var [firstKey, ...referenceKeys] = keys2;
    var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
    var negativeVarKey = keys2.join("-");
    var {
      variable,
      reference
    } = cssVar(negativeVarKey, void 0, options.cssVarPrefix);
    var negativeValue = calc.negate(value);
    var varRef = calc.negate(reference);
    return {
      cssVars: properties.cssVars,
      cssMap: _extends2({}, properties.cssMap, {
        [negativeLookupKey]: {
          value: "" + negativeValue,
          var: "" + variable,
          varRef
        }
      })
    };
  },
  defaultHandler: (keys2, value, options) => {
    var lookupKey = keys2.join(".");
    var varKey = keys2.join("-");
    var {
      variable,
      reference
    } = cssVar(varKey, void 0, options.cssVarPrefix);
    return {
      cssVars: {
        [variable]: value
      },
      cssMap: {
        [lookupKey]: {
          value,
          var: variable,
          varRef: reference
        }
      }
    };
  }
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var tokens = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];
function extractTokens(theme3) {
  var _tokens = tokens;
  return pick(theme3, _tokens);
}
function omitVars(rawTheme) {
  var cleanTheme = _objectWithoutPropertiesLoose(rawTheme, ["__cssMap", "__cssVars", "__breakpoints"]);
  return cleanTheme;
}
function _extends$12() {
  _extends$12 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$12.apply(this, arguments);
}
function toCSSVar(rawTheme) {
  var _theme$config;
  var theme3 = omitVars(rawTheme);
  var tokens2 = extractTokens(theme3);
  var cssVarPrefix = (_theme$config = theme3.config) == null ? void 0 : _theme$config.cssVarPrefix;
  var {
    cssMap,
    cssVars
  } = createThemeVars(tokens2, {
    cssVarPrefix
  });
  var defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme3, {
    __cssVars: _extends$12({}, defaultCssVars, cssVars),
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme3.breakpoints)
  });
  return theme3;
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for;
var c2 = b ? Symbol.for("react.element") : 60103;
var d2 = b ? Symbol.for("react.portal") : 60106;
var e2 = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g2 = b ? Symbol.for("react.profiler") : 60114;
var h = b ? Symbol.for("react.provider") : 60109;
var k2 = b ? Symbol.for("react.context") : 60110;
var l = b ? Symbol.for("react.async_mode") : 60111;
var m2 = b ? Symbol.for("react.concurrent_mode") : 60111;
var n2 = b ? Symbol.for("react.forward_ref") : 60112;
var p2 = b ? Symbol.for("react.suspense") : 60113;
var q2 = b ? Symbol.for("react.suspense_list") : 60120;
var r2 = b ? Symbol.for("react.memo") : 60115;
var t2 = b ? Symbol.for("react.lazy") : 60116;
var v = b ? Symbol.for("react.block") : 60121;
var w = b ? Symbol.for("react.fundamental") : 60117;
var x2 = b ? Symbol.for("react.responder") : 60118;
var y3 = b ? Symbol.for("react.scope") : 60119;
function z2(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u = a2.$$typeof;
    switch (u) {
      case c2:
        switch (a2 = a2.type, a2) {
          case l:
          case m2:
          case e2:
          case g2:
          case f:
          case p2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k2:
              case n2:
              case t2:
              case r2:
              case h:
                return a2;
              default:
                return u;
            }
        }
      case d2:
        return u;
    }
  }
}
function A2(a2) {
  return z2(a2) === m2;
}
var AsyncMode = l;
var ConcurrentMode = m2;
var ContextConsumer = k2;
var ContextProvider = h;
var Element2 = c2;
var ForwardRef = n2;
var Fragment = e2;
var Lazy = t2;
var Memo = r2;
var Portal = d2;
var Profiler = g2;
var StrictMode = f;
var Suspense = p2;
var isAsyncMode = function(a2) {
  return A2(a2) || z2(a2) === l;
};
var isConcurrentMode = A2;
var isContextConsumer = function(a2) {
  return z2(a2) === k2;
};
var isContextProvider = function(a2) {
  return z2(a2) === h;
};
var isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c2;
};
var isForwardRef = function(a2) {
  return z2(a2) === n2;
};
var isFragment = function(a2) {
  return z2(a2) === e2;
};
var isLazy = function(a2) {
  return z2(a2) === t2;
};
var isMemo = function(a2) {
  return z2(a2) === r2;
};
var isPortal = function(a2) {
  return z2(a2) === d2;
};
var isProfiler = function(a2) {
  return z2(a2) === g2;
};
var isStrictMode = function(a2) {
  return z2(a2) === f;
};
var isSuspense = function(a2) {
  return z2(a2) === p2;
};
var isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e2 || a2 === m2 || a2 === g2 || a2 === f || a2 === p2 || a2 === q2 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t2 || a2.$$typeof === r2 || a2.$$typeof === h || a2.$$typeof === k2 || a2.$$typeof === n2 || a2.$$typeof === w || a2.$$typeof === x2 || a2.$$typeof === y3 || a2.$$typeof === v);
};
var typeOf = z2;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element: Element2,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, react.useContext(ThemeContext));
  var sheetRef = react.useRef();
  react.useLayoutEffect(function() {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true;
      node.setAttribute("data-emotion", key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  react.useLayoutEffect(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css2.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function createContext(options) {
  if (options === void 0) {
    options = {};
  }
  var {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  var Context = /* @__PURE__ */ react.createContext(void 0);
  Context.displayName = name;
  function useContext() {
    var context = react.useContext(Context);
    if (!context && strict) {
      var error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error, useContext);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext, Context];
}
var ThemeProvider3 = (props) => {
  var {
    cssVarsRoot = ":host, :root",
    theme: theme3,
    children
  } = props;
  var computedTheme = react.useMemo(() => toCSSVar(theme3), [theme3]);
  return /* @__PURE__ */ react.createElement(ThemeProvider, {
    theme: computedTheme
  }, /* @__PURE__ */ react.createElement(Global, {
    styles: (theme4) => ({
      [cssVarsRoot]: theme4.__cssVars
    })
  }), children);
};
function useTheme() {
  var theme3 = react.useContext(ThemeContext);
  if (!theme3) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  }
  return theme3;
}
var [StylesProvider, useStyles] = createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var GlobalStyle = () => {
  var {
    colorMode
  } = useColorMode();
  return /* @__PURE__ */ react.createElement(Global, {
    styles: (theme3) => {
      var styleObjectOrFn = memoizedGet(theme3, "styles.global");
      var globalStyles = runIfFn(styleObjectOrFn, {
        theme: theme3,
        colorMode
      });
      if (!globalStyles)
        return void 0;
      var styles2 = css(globalStyles)(theme3);
      return styles2;
    }
  });
};

// build/_snowpack/pkg/@chakra-ui/provider.js
var CSSReset = () => /* @__PURE__ */ react.createElement(Global, {
  styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;      
        -moz-osx-font-smoothing: grayscale; 
        touch-action: manipulation; 
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
        vertical-align: middle;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }
    `
});
var [PortalManagerContextProvider, usePortalManager] = createContext({
  strict: false,
  name: "PortalManagerContext"
});
function PortalManager(props) {
  var {
    children,
    zIndex
  } = props;
  return /* @__PURE__ */ react.createElement(PortalManagerContextProvider, {
    value: {
      zIndex
    }
  }, children);
}
var defaultIdContext = {
  prefix: Math.round(Math.random() * 1e10),
  current: 0
};
var IdContext = /* @__PURE__ */ react.createContext(defaultIdContext);
var IdProvider = /* @__PURE__ */ react.memo((_ref) => {
  var {
    children
  } = _ref;
  var currentContext = react.useContext(IdContext);
  var isRoot = currentContext === defaultIdContext;
  var context = react.useMemo(() => ({
    prefix: isRoot ? 0 : ++currentContext.prefix,
    current: 0
  }), [isRoot, currentContext]);
  return /* @__PURE__ */ react.createElement(IdContext.Provider, {
    value: context
  }, children);
});
var doc = {
  body: {
    classList: {
      add() {
      },
      remove() {
      }
    }
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  }
};
var ssrDocument = doc;
var noop2 = () => {
};
var win = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop2,
  removeEventListener: noop2,
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia() {
    return {
      matches: false,
      addListener: noop2,
      removeListener: noop2
    };
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id2) {
    if (typeof setTimeout === "undefined")
      return;
    clearTimeout(id2);
  },
  setTimeout: () => 0,
  clearTimeout: noop2,
  setInterval: () => 0,
  clearInterval: noop2
};
var ssrWindow = win;
var mockEnv = {
  window: ssrWindow,
  document: ssrDocument
};
var defaultEnv = isBrowser ? {
  window,
  document
} : mockEnv;
var EnvironmentContext = /* @__PURE__ */ react.createContext(defaultEnv);
function EnvironmentProvider(props) {
  var {
    children,
    environment: environmentProp
  } = props;
  var [node, setNode] = react.useState(null);
  var context = react.useMemo(() => {
    var _ref;
    var doc2 = node == null ? void 0 : node.ownerDocument;
    var win2 = node == null ? void 0 : node.ownerDocument.defaultView;
    var nodeEnv = doc2 ? {
      document: doc2,
      window: win2
    } : void 0;
    var env = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env;
  }, [node, environmentProp]);
  var showEnvGetter = !node && !environmentProp;
  return /* @__PURE__ */ react.createElement(EnvironmentContext.Provider, {
    value: context
  }, children, showEnvGetter && /* @__PURE__ */ react.createElement("span", {
    ref: (el) => {
      if (el)
        setNode(el);
    }
  }));
}
var ChakraProvider = (props) => {
  var {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme: theme3 = {},
    environment,
    cssVarsRoot
  } = props;
  var _children = /* @__PURE__ */ react.createElement(EnvironmentProvider, {
    environment
  }, children);
  return /* @__PURE__ */ react.createElement(IdProvider, null, /* @__PURE__ */ react.createElement(ThemeProvider3, {
    theme: theme3,
    cssVarsRoot
  }, /* @__PURE__ */ react.createElement(ColorModeProvider, {
    colorModeManager,
    options: theme3.config
  }, resetCSS && /* @__PURE__ */ react.createElement(CSSReset, null), /* @__PURE__ */ react.createElement(GlobalStyle, null), portalZIndex ? /* @__PURE__ */ react.createElement(PortalManager, {
    zIndex: portalZIndex
  }, _children) : _children)));
};

// build/_snowpack/pkg/common/forward-ref-f7b9445f.js
var domElements = ["a", "b", "article", "aside", "blockquote", "button", "caption", "cite", "circle", "code", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "input", "kbd", "label", "li", "main", "mark", "nav", "ol", "p", "path", "pre", "q", "rect", "s", "svg", "section", "select", "strong", "small", "span", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul"];
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$1(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var createStyled = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      styles2.push(args[0][0]);
      var len = args.length;
      var i2 = 1;
      for (; i2 < len; i2++) {
        styles2.push(args[i2], args[0][i2]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = react.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === "string");
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      var ele = /* @__PURE__ */ react.createElement(finalTag, newProps);
      return ele;
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends$2({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var allPropNames = new Set([...propNames, "textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]);
var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
var shouldForwardProp = (prop) => validHTMLProps.has(prop) || !allPropNames.has(prop);
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var toCSSObject = (_ref) => {
  var {
    baseStyle: baseStyle2
  } = _ref;
  return (props) => {
    var {
      css: cssProp,
      __css,
      sx
    } = props, rest = _objectWithoutPropertiesLoose2(props, ["theme", "css", "__css", "sx"]);
    var styleProps2 = objectFilter(rest, (_2, prop) => isStyleProp(prop));
    var finalBaseStyle = runIfFn(baseStyle2, props);
    var finalStyles = Object.assign({}, __css, finalBaseStyle, filterUndefined(styleProps2), sx);
    var computedCSS = css(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };
};
function styled(component, options) {
  var _ref2 = options != null ? options : {}, {
    baseStyle: baseStyle2
  } = _ref2, styledOptions = _objectWithoutPropertiesLoose2(_ref2, ["baseStyle"]);
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  var styleObject = toCSSObject({
    baseStyle: baseStyle2
  });
  return newStyled(component, styledOptions)(styleObject);
}
var chakra = styled;
domElements.forEach((tag) => {
  chakra[tag] = chakra(tag);
});
function forwardRef(component) {
  return /* @__PURE__ */ react.forwardRef(component);
}

// build/_snowpack/pkg/@chakra-ui/react.js
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor)
      return false;
    var length, i2, keys2;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (!equal(a2[i2], b2[i2]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a2 instanceof Map && b2 instanceof Map) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!equal(i2.value[1], b2.get(i2.value[0])))
          return false;
      return true;
    }
    if (hasSet && a2 instanceof Set && b2 instanceof Set) {
      if (a2.size !== b2.size)
        return false;
      it = a2.entries();
      while (!(i2 = it.next()).done)
        if (!b2.has(i2.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (a2[i2] !== b2[i2])
          return false;
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b2.toString();
    keys2 = Object.keys(a2);
    length = keys2.length;
    if (length !== Object.keys(b2).length)
      return false;
    for (i2 = length; i2-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2]))
        return false;
    if (hasElementType && a2 instanceof Element)
      return false;
    for (i2 = length; i2-- !== 0; ) {
      if ((keys2[i2] === "_owner" || keys2[i2] === "__v" || keys2[i2] === "__o") && a2.$$typeof) {
        continue;
      }
      if (!equal(a2[keys2[i2]], b2[keys2[i2]]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
var reactFastCompare = function isEqual(a2, b2) {
  try {
    return equal(a2, b2);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function useChakra() {
  var colorModeResult = useColorMode();
  var theme3 = useTheme();
  return _extends3({}, colorModeResult, {
    theme: theme3
  });
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useStyleConfig(themeKey, props, opts) {
  var _styleConfig$defaultP;
  if (props === void 0) {
    props = {};
  }
  if (opts === void 0) {
    opts = {};
  }
  var {
    styleConfig: styleConfigProp
  } = props, rest = _objectWithoutPropertiesLoose3(props, ["styleConfig"]);
  var {
    theme: theme3,
    colorMode
  } = useChakra();
  var themeStyleConfig = memoizedGet(theme3, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = lodash_mergewith({
    theme: theme3,
    colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
  var stylesRef = react.useRef({});
  if (styleConfig) {
    var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;
    var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
    var variants2 = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
    var sizes2 = runIfFn((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
    var styles2 = lodash_mergewith({}, baseStyles, sizes2, variants2);
    if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
      styleConfig.parts.forEach((part) => {
        var _styles$part;
        styles2[part] = (_styles$part = styles2[part]) != null ? _styles$part : {};
      });
    }
    var isStyleEqual = reactFastCompare(stylesRef.current, styles2);
    if (!isStyleEqual) {
      stylesRef.current = styles2;
    }
  }
  return stylesRef.current;
}
function useMultiStyleConfig(themeKey, props) {
  return useStyleConfig(themeKey, props, {
    isMultiPart: true
  });
}
function bound01(n3, max) {
  if (isOnePointZero(n3)) {
    n3 = "100%";
  }
  var isPercent = isPercentage(n3);
  n3 = max === 360 ? n3 : Math.min(max, Math.max(0, parseFloat(n3)));
  if (isPercent) {
    n3 = parseInt(String(n3 * max), 10) / 100;
  }
  if (Math.abs(n3 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n3 = (n3 < 0 ? n3 % max + max : n3 % max) / parseFloat(String(max));
  } else {
    n3 = n3 % max / parseFloat(String(max));
  }
  return n3;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n3) {
  return typeof n3 === "string" && n3.indexOf(".") !== -1 && parseFloat(n3) === 1;
}
function isPercentage(n3) {
  return typeof n3 === "string" && n3.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n3) {
  if (n3 <= 1) {
    return Number(n3) * 100 + "%";
  }
  return n3;
}
function pad2(c3) {
  return c3.length === 1 ? "0" + c3 : String(c3);
}
function rgbToRgb(r3, g3, b2) {
  return {
    r: bound01(r3, 255) * 255,
    g: bound01(g3, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r3, g3, b2) {
  r3 = bound01(r3, 255);
  g3 = bound01(g3, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r3, g3, b2);
  var min = Math.min(r3, g3, b2);
  var h2 = 0;
  var s = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d3 = max - min;
    s = l2 > 0.5 ? d3 / (2 - max - min) : d3 / (max + min);
    switch (max) {
      case r3:
        h2 = (g3 - b2) / d3 + (g3 < b2 ? 6 : 0);
        break;
      case g3:
        h2 = (b2 - r3) / d3 + 2;
        break;
      case b2:
        h2 = (r3 - g3) / d3 + 4;
        break;
    }
    h2 /= 6;
  }
  return {h: h2, s, l: l2};
}
function hue2rgb(p3, q3, t3) {
  if (t3 < 0) {
    t3 += 1;
  }
  if (t3 > 1) {
    t3 -= 1;
  }
  if (t3 < 1 / 6) {
    return p3 + (q3 - p3) * (6 * t3);
  }
  if (t3 < 1 / 2) {
    return q3;
  }
  if (t3 < 2 / 3) {
    return p3 + (q3 - p3) * (2 / 3 - t3) * 6;
  }
  return p3;
}
function hslToRgb(h2, s, l2) {
  var r3;
  var g3;
  var b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g3 = l2;
    b2 = l2;
    r3 = l2;
  } else {
    var q3 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p3 = 2 * l2 - q3;
    r3 = hue2rgb(p3, q3, h2 + 1 / 3);
    g3 = hue2rgb(p3, q3, h2);
    b2 = hue2rgb(p3, q3, h2 - 1 / 3);
  }
  return {r: r3 * 255, g: g3 * 255, b: b2 * 255};
}
function rgbToHsv(r3, g3, b2) {
  r3 = bound01(r3, 255);
  g3 = bound01(g3, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r3, g3, b2);
  var min = Math.min(r3, g3, b2);
  var h2 = 0;
  var v2 = max;
  var d3 = max - min;
  var s = max === 0 ? 0 : d3 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r3:
        h2 = (g3 - b2) / d3 + (g3 < b2 ? 6 : 0);
        break;
      case g3:
        h2 = (b2 - r3) / d3 + 2;
        break;
      case b2:
        h2 = (r3 - g3) / d3 + 4;
        break;
    }
    h2 /= 6;
  }
  return {h: h2, s, v: v2};
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p3 = v2 * (1 - s);
  var q3 = v2 * (1 - f2 * s);
  var t3 = v2 * (1 - (1 - f2) * s);
  var mod = i2 % 6;
  var r3 = [v2, q3, p3, p3, t3, v2][mod];
  var g3 = [t3, v2, v2, q3, p3, p3][mod];
  var b2 = [p3, p3, t3, v2, v2, q3][mod];
  return {r: r3 * 255, g: g3 * 255, b: b2 * 255};
}
function rgbToHex(r3, g3, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r3).toString(16)),
    pad2(Math.round(g3).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r3, g3, b2, a2, allow4Char) {
  var hex = [
    pad2(Math.round(r3).toString(16)),
    pad2(Math.round(g3).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d3) {
  return Math.round(parseFloat(d3) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color2) {
  return {
    r: color2 >> 16,
    g: (color2 & 65280) >> 8,
    b: color2 & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color2) {
  var rgb = {r: 0, g: 0, b: 0};
  var a2 = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok2 = false;
  var format = false;
  if (typeof color2 === "string") {
    color2 = stringInputToObject(color2);
  }
  if (typeof color2 === "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb = rgbToRgb(color2.r, color2.g, color2.b);
      ok2 = true;
      format = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s = convertToPercentage(color2.s);
      v2 = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v2);
      ok2 = true;
      format = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l2 = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l2);
      ok2 = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color2, "a")) {
      a2 = color2.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok: ok2,
    format: color2.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color2) {
  color2 = color2.trim().toLowerCase();
  if (color2.length === 0) {
    return false;
  }
  var named = false;
  if (names[color2]) {
    color2 = names[color2];
    named = true;
  } else if (color2 === "transparent") {
    return {r: 0, g: 0, b: 0, a: 0, format: "name"};
  }
  var match = matchers.rgb.exec(color2);
  if (match) {
    return {r: match[1], g: match[2], b: match[3]};
  }
  match = matchers.rgba.exec(color2);
  if (match) {
    return {r: match[1], g: match[2], b: match[3], a: match[4]};
  }
  match = matchers.hsl.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], l: match[3]};
  }
  match = matchers.hsla.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], l: match[3], a: match[4]};
  }
  match = matchers.hsv.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], v: match[3]};
  }
  match = matchers.hsva.exec(color2);
  if (match) {
    return {h: match[1], s: match[2], v: match[3], a: match[4]};
  }
  match = matchers.hex8.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color2) {
  return Boolean(matchers.CSS_UNIT.exec(String(color2)));
}
var TinyColor = function() {
  function TinyColor2(color2, opts) {
    if (color2 === void 0) {
      color2 = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    if (color2 instanceof TinyColor2) {
      return color2;
    }
    if (typeof color2 === "number") {
      color2 = numberInputToObject(color2);
    }
    this.originalInput = color2;
    var rgb = inputToRGB(color2);
    this.originalInput = color2;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R3;
    var G3;
    var B3;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R3 = RsRGB / 12.92;
    } else {
      R3 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G3 = GsRGB / 12.92;
    } else {
      G3 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B3 = BsRGB / 12.92;
    } else {
      B3 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R3 + 0.7152 * G3 + 0.0722 * B3;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return {h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a};
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v2 = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(" + h2 + ", " + s + "%, " + v2 + "%)" : "hsva(" + h2 + ", " + s + "%, " + v2 + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return {h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a};
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l2 = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(" + h2 + ", " + s + "%, " + l2 + "%)" : "hsla(" + h2 + ", " + s + "%, " + l2 + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r3 = Math.round(this.r);
    var g3 = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(" + r3 + ", " + g3 + ", " + b2 + ")" : "rgba(" + r3 + ", " + g3 + ", " + b2 + ", " + this.roundA + ")";
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x3) {
      return Math.round(bound01(x3, 255) * 100) + "%";
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x3) {
      return Math.round(bound01(x3, 255) * 100);
    };
    return this.a === 1 ? "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)" : "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
      var _b = _a[_i], key = _b[0], value = _b[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color2, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color2).toRgb();
    var p3 = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p3 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p3 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p3 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p3 + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s = hsv.s;
    var v2 = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({h: h2, s, v: v2}));
      v2 = (v2 + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({h: (h2 + 72) % 360, s: hsl.s, l: hsl.l}),
      new TinyColor2({h: (h2 + 216) % 360, s: hsl.s, l: hsl.l})
    ];
  };
  TinyColor2.prototype.onBackground = function(background2) {
    var fg2 = this.toRgb();
    var bg2 = new TinyColor2(background2).toRgb();
    return new TinyColor2({
      r: bg2.r + (fg2.r - bg2.r) * fg2.a,
      g: bg2.g + (fg2.g - bg2.g) * fg2.a,
      b: bg2.b + (fg2.b - bg2.b) * fg2.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n3) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n3;
    for (var i2 = 1; i2 < n3; i2++) {
      result.push(new TinyColor2({h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l}));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color2) {
    return this.toRgbString() === new TinyColor2(color2).toRgbString();
  };
  return TinyColor2;
}();
function random(options) {
  if (options === void 0) {
    options = {};
  }
  if (options.count !== void 0 && options.count !== null) {
    var totalColors = options.count;
    var colors2 = [];
    options.count = void 0;
    while (totalColors > colors2.length) {
      options.count = null;
      if (options.seed) {
        options.seed += 1;
      }
      colors2.push(random(options));
    }
    options.count = totalColors;
    return colors2;
  }
  var h2 = pickHue(options.hue, options.seed);
  var s = pickSaturation(h2, options);
  var v2 = pickBrightness(h2, s, options);
  var res = {h: h2, s, v: v2};
  if (options.alpha !== void 0) {
    res.a = options.alpha;
  }
  return new TinyColor(res);
}
function pickHue(hue, seed) {
  var hueRange = getHueRange(hue);
  var res = randomWithin(hueRange, seed);
  if (res < 0) {
    res = 360 + res;
  }
  return res;
}
function pickSaturation(hue, options) {
  if (options.hue === "monochrome") {
    return 0;
  }
  if (options.luminosity === "random") {
    return randomWithin([0, 100], options.seed);
  }
  var saturationRange = getColorInfo(hue).saturationRange;
  var sMin = saturationRange[0];
  var sMax = saturationRange[1];
  switch (options.luminosity) {
    case "bright":
      sMin = 55;
      break;
    case "dark":
      sMin = sMax - 10;
      break;
    case "light":
      sMax = 55;
      break;
  }
  return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H3, S3, options) {
  var bMin = getMinimumBrightness(H3, S3);
  var bMax = 100;
  switch (options.luminosity) {
    case "dark":
      bMax = bMin + 20;
      break;
    case "light":
      bMin = (bMax + bMin) / 2;
      break;
    case "random":
      bMin = 0;
      bMax = 100;
      break;
  }
  return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H3, S3) {
  var lowerBounds = getColorInfo(H3).lowerBounds;
  for (var i2 = 0; i2 < lowerBounds.length - 1; i2++) {
    var s1 = lowerBounds[i2][0];
    var v1 = lowerBounds[i2][1];
    var s2 = lowerBounds[i2 + 1][0];
    var v2 = lowerBounds[i2 + 1][1];
    if (S3 >= s1 && S3 <= s2) {
      var m3 = (v2 - v1) / (s2 - s1);
      var b2 = v1 - m3 * s1;
      return m3 * S3 + b2;
    }
  }
  return 0;
}
function getHueRange(colorInput) {
  var num = parseInt(colorInput, 10);
  if (!Number.isNaN(num) && num < 360 && num > 0) {
    return [num, num];
  }
  if (typeof colorInput === "string") {
    var namedColor = bounds.find(function(n3) {
      return n3.name === colorInput;
    });
    if (namedColor) {
      var color2 = defineColor(namedColor);
      if (color2.hueRange) {
        return color2.hueRange;
      }
    }
    var parsed = new TinyColor(colorInput);
    if (parsed.isValid) {
      var hue = parsed.toHsv().h;
      return [hue, hue];
    }
  }
  return [0, 360];
}
function getColorInfo(hue) {
  if (hue >= 334 && hue <= 360) {
    hue -= 360;
  }
  for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
    var bound = bounds_1[_i];
    var color2 = defineColor(bound);
    if (color2.hueRange && hue >= color2.hueRange[0] && hue <= color2.hueRange[1]) {
      return color2;
    }
  }
  throw Error("Color not found");
}
function randomWithin(range, seed) {
  if (seed === void 0) {
    return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
  }
  var max = range[1] || 1;
  var min = range[0] || 0;
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;
  return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
  var sMin = bound.lowerBounds[0][0];
  var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
  var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
  var bMax = bound.lowerBounds[0][1];
  return {
    name: bound.name,
    hueRange: bound.hueRange,
    lowerBounds: bound.lowerBounds,
    saturationRange: [sMin, sMax],
    brightnessRange: [bMin, bMax]
  };
}
var bounds = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0]
    ]
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50]
    ]
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70]
    ]
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75]
    ]
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40]
    ]
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35]
    ]
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42]
    ]
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73]
    ]
  }
];
var getColor = (theme3, color2, fallback) => {
  var hex = memoizedGet(theme3, "colors." + color2, color2);
  var {
    isValid
  } = new TinyColor(hex);
  return isValid ? hex : fallback;
};
var tone = (color2) => (theme3) => {
  var hex = getColor(theme3, color2);
  var isDark2 = new TinyColor(hex).isDark();
  return isDark2 ? "dark" : "light";
};
var isDark = (color2) => (theme3) => tone(color2)(theme3) === "dark";
var transparentize = (color2, opacity) => (theme3) => {
  var raw = getColor(theme3, color2);
  return new TinyColor(raw).setAlpha(opacity).toRgbString();
};
function generateStripe(size2, color2) {
  if (size2 === void 0) {
    size2 = "1rem";
  }
  if (color2 === void 0) {
    color2 = "rgba(255, 255, 255, 0.15)";
  }
  return {
    backgroundImage: "linear-gradient(\n    45deg,\n    " + color2 + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + color2 + " 50%,\n    " + color2 + " 75%,\n    transparent 75%,\n    transparent\n  )",
    backgroundSize: size2 + " " + size2
  };
}
function randomColor(opts) {
  var fallback = random().toHexString();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  var hash = 0;
  if (str.length === 0)
    return hash.toString();
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    hash = str.charCodeAt(i2) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  var color2 = "#";
  for (var j2 = 0; j2 < 3; j2 += 1) {
    var value = hash >> j2 * 8 & 255;
    color2 += ("00" + value.toString(16)).substr(-2);
  }
  return color2;
}
function randomColorFromList(str, list2) {
  var index = 0;
  if (str.length === 0)
    return list2[0];
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    index = str.charCodeAt(i2) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list2.length + list2.length) % list2.length;
  return list2[index];
}
function randomFromList(list2) {
  return list2[Math.floor(Math.random() * list2.length)];
}
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  var {
    orientation,
    vertical,
    horizontal
  } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}
function _extends$13() {
  _extends$13 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$13.apply(this, arguments);
}
var createBreakpoints = (config2) => {
  warn({
    condition: true,
    message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("")
  });
  return _extends$13({
    base: "0em"
  }, config2);
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}
var Anatomy = class {
  constructor(name) {
    var _this = this;
    this.name = name;
    _defineProperty(this, "map", {});
    _defineProperty(this, "called", false);
    _defineProperty(this, "assert", () => {
      if (!this.called) {
        this.called = true;
        return;
      }
      throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
    });
    _defineProperty(this, "parts", function() {
      _this.assert();
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      for (var part of values) {
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    });
    _defineProperty(this, "extend", function() {
      for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parts[_key2] = arguments[_key2];
      }
      for (var part of parts) {
        if (part in _this.map)
          continue;
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    });
    _defineProperty(this, "toPart", (part) => {
      var el = ["container", "root"].includes(part != null ? part : "") ? [this.name] : [this.name, part];
      var attr = el.filter(Boolean).join("__");
      var className = "chakra-" + attr;
      var partObj = {
        className,
        selector: "." + className,
        toString: () => part
      };
      return partObj;
    });
    _defineProperty(this, "__type", {});
  }
  get selectors() {
    var value = Object.fromEntries(Object.entries(this.map).map((_ref) => {
      var [key, part] = _ref;
      return [key, part.selector];
    }));
    return value;
  }
  get classNames() {
    var value = Object.fromEntries(Object.entries(this.map).map((_ref2) => {
      var [key, part] = _ref2;
      return [key, part.className];
    }));
    return value;
  }
  get keys() {
    return Object.keys(this.map);
  }
};
function anatomy(name) {
  return new Anatomy(name);
}
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = function toExpr2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(toRef).join(" " + operator + " ").replace(/calc/g, "");
};
var _add2 = function add2() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpr("+", ...operands) + ")";
};
var _subtract2 = function subtract3() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpr("-", ...operands) + ")";
};
var _multiply2 = function multiply2() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpr("*", ...operands) + ")";
};
var _divide2 = function divide2() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpr("/", ...operands) + ")";
};
var _negate2 = (x3) => {
  var value = toRef(x3);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply2(value, -1);
};
var calc2 = Object.assign((x3) => ({
  add: function add3() {
    for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      operands[_key6] = arguments[_key6];
    }
    return calc2(_add2(x3, ...operands));
  },
  subtract: function subtract4() {
    for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      operands[_key7] = arguments[_key7];
    }
    return calc2(_subtract2(x3, ...operands));
  },
  multiply: function multiply3() {
    for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      operands[_key8] = arguments[_key8];
    }
    return calc2(_multiply2(x3, ...operands));
  },
  divide: function divide3() {
    for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      operands[_key9] = arguments[_key9];
    }
    return calc2(_divide2(x3, ...operands));
  },
  negate: () => calc2(_negate2(x3)),
  toString: () => x3.toString()
}), {
  add: _add2,
  subtract: _subtract2,
  multiply: _multiply2,
  divide: _divide2,
  negate: _negate2
});
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace2(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape2(value) {
  var valueStr = replaceWhiteSpace2(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", "\\.") : value;
}
function addPrefix2(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return [prefix, escape2(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return "var(" + escape2(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVar(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return "--" + addPrefix2(value, prefix);
}
function cssVar2(name, options) {
  var cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}
var accordionAnatomy = anatomy("accordion").parts("container", "item", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts("preview", "input");
var formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow");
var progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
var radioAnatomy = anatomy("radio").parts("container", "control", "label");
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack");
var statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
var switchAnatomy = anatomy("switch").parts("container", "track", "thumb");
var tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
var tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
var tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");
var baseStyleContainer = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
};
var baseStyleButton = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "1rem",
  _focus: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: 4,
  py: 2
};
var baseStylePanel = {
  pt: 2,
  px: 4,
  pb: 5
};
var baseStyleIcon = {
  fontSize: "1.25em"
};
var baseStyle = {
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
};
var Accordion = {
  parts: accordionAnatomy.keys,
  baseStyle
};
var baseStyle$1 = {
  container: {
    px: 4,
    py: 3
  },
  title: {
    fontWeight: "bold",
    lineHeight: 6,
    marginEnd: 2
  },
  description: {
    lineHeight: 6
  },
  icon: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 6
  }
};
function getBg(props) {
  var {
    theme: theme3,
    colorScheme: c3
  } = props;
  var lightBg = getColor(theme3, c3 + ".100", c3);
  var darkBg = transparentize(c3 + ".200", 0.16)(theme3);
  return mode(lightBg, darkBg)(props);
}
var variantSubtle = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    container: {
      bg: getBg(props)
    },
    icon: {
      color: mode(c3 + ".500", c3 + ".200")(props)
    }
  };
};
var variantLeftAccent = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: mode(c3 + ".500", c3 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c3 + ".500", c3 + ".200")(props)
    }
  };
};
var variantTopAccent = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: mode(c3 + ".500", c3 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c3 + ".500", c3 + ".200")(props)
    }
  };
};
var variantSolid = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    container: {
      bg: mode(c3 + ".500", c3 + ".200")(props),
      color: mode("white", "gray.900")(props)
    }
  };
};
var variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid
};
var defaultProps = {
  variant: "subtle",
  colorScheme: "blue"
};
var Alert = {
  parts: alertAnatomy.keys,
  baseStyle: baseStyle$1,
  variants,
  defaultProps
};
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
function _extends$22() {
  _extends$22 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$22.apply(this, arguments);
}
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = _extends$22({}, spacing, largeSizes, {
  container
});
var baseStyleBadge = (props) => {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("white", "gray.800")(props)
  };
};
var baseStyleExcessLabel = (props) => {
  return {
    bg: mode("gray.200", "whiteAlpha.400")(props)
  };
};
var baseStyleContainer$1 = (props) => {
  var {
    name,
    theme: theme3
  } = props;
  var bg2 = name ? randomColor({
    string: name
  }) : "gray.400";
  var isBgDark = isDark(bg2)(theme3);
  var color2 = "white";
  if (!isBgDark)
    color2 = "gray.800";
  var borderColor = mode("white", "gray.800")(props);
  return {
    bg: bg2,
    color: color2,
    borderColor,
    verticalAlign: "top"
  };
};
var baseStyle$2 = (props) => ({
  badge: baseStyleBadge(props),
  excessLabel: baseStyleExcessLabel(props),
  container: baseStyleContainer$1(props)
});
function getSize(size2) {
  var themeSize = sizes[size2];
  return {
    container: {
      width: size2,
      height: size2,
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)"
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)",
      lineHeight: size2 !== "100%" ? themeSize != null ? themeSize : size2 : void 0
    }
  };
}
var sizes$1 = {
  "2xs": getSize("4"),
  xs: getSize("6"),
  sm: getSize("8"),
  md: getSize("12"),
  lg: getSize("16"),
  xl: getSize("24"),
  "2xl": getSize("32"),
  full: getSize("100%")
};
var defaultProps$1 = {
  size: "md"
};
var Avatar = {
  parts: avatarAnatomy.keys,
  baseStyle: baseStyle$2,
  sizes: sizes$1,
  defaultProps: defaultProps$1
};
var baseStyle$3 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
};
var variantSolid$1 = (props) => {
  var {
    colorScheme: c3,
    theme: theme3
  } = props;
  var dark = transparentize(c3 + ".500", 0.6)(theme3);
  return {
    bg: mode(c3 + ".500", dark)(props),
    color: mode("white", "whiteAlpha.800")(props)
  };
};
var variantSubtle$1 = (props) => {
  var {
    colorScheme: c3,
    theme: theme3
  } = props;
  var darkBg = transparentize(c3 + ".200", 0.16)(theme3);
  return {
    bg: mode(c3 + ".100", darkBg)(props),
    color: mode(c3 + ".800", c3 + ".200")(props)
  };
};
var variantOutline = (props) => {
  var {
    colorScheme: c3,
    theme: theme3
  } = props;
  var darkColor = transparentize(c3 + ".200", 0.8)(theme3);
  var lightColor = getColor(theme3, c3 + ".500");
  var color2 = mode(lightColor, darkColor)(props);
  return {
    color: color2,
    boxShadow: "inset 0 0 0px 1px " + color2
  };
};
var variants$1 = {
  solid: variantSolid$1,
  subtle: variantSubtle$1,
  outline: variantOutline
};
var defaultProps$2 = {
  variant: "subtle",
  colorScheme: "gray"
};
var Badge = {
  baseStyle: baseStyle$3,
  variants: variants$1,
  defaultProps: defaultProps$2
};
var baseStyleLink = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyle$4 = {
  link: baseStyleLink
};
var Breadcrumb = {
  parts: breadcrumbAnatomy.keys,
  baseStyle: baseStyle$4
};
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var baseStyle$5 = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focus: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
};
var variantGhost = (props) => {
  var {
    colorScheme: c3,
    theme: theme3
  } = props;
  if (c3 === "gray") {
    return {
      color: mode("inherit", "whiteAlpha.900")(props),
      _hover: {
        bg: mode("gray.100", "whiteAlpha.200")(props)
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      }
    };
  }
  var darkHoverBg = transparentize(c3 + ".200", 0.12)(theme3);
  var darkActiveBg = transparentize(c3 + ".200", 0.24)(theme3);
  return {
    color: mode(c3 + ".600", c3 + ".200")(props),
    bg: "transparent",
    _hover: {
      bg: mode(c3 + ".50", darkHoverBg)(props)
    },
    _active: {
      bg: mode(c3 + ".100", darkActiveBg)(props)
    }
  };
};
var variantOutline$1 = (props) => {
  var {
    colorScheme: c3
  } = props;
  var borderColor = mode("gray.200", "whiteAlpha.300")(props);
  return _extends$3({
    border: "1px solid",
    borderColor: c3 === "gray" ? borderColor : "currentColor"
  }, variantGhost(props));
};
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid$2 = (props) => {
  var _accessibleColorMap$c;
  var {
    colorScheme: c3
  } = props;
  if (c3 === "gray") {
    var _bg = mode("gray.100", "whiteAlpha.200")(props);
    return {
      bg: _bg,
      _hover: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
        _disabled: {
          bg: _bg
        }
      },
      _active: {
        bg: mode("gray.300", "whiteAlpha.400")(props)
      }
    };
  }
  var {
    bg: bg2 = c3 + ".500",
    color: color2 = "white",
    hoverBg = c3 + ".600",
    activeBg = c3 + ".700"
  } = (_accessibleColorMap$c = accessibleColorMap[c3]) != null ? _accessibleColorMap$c : {};
  var background2 = mode(bg2, c3 + ".200")(props);
  return {
    bg: background2,
    color: mode(color2, "gray.800")(props),
    _hover: {
      bg: mode(hoverBg, c3 + ".300")(props),
      _disabled: {
        bg: background2
      }
    },
    _active: {
      bg: mode(activeBg, c3 + ".400")(props)
    }
  };
};
var variantLink = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(c3 + ".500", c3 + ".200")(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(c3 + ".700", c3 + ".500")(props)
    }
  };
};
var variantUnstyled = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0
};
var variants$2 = {
  ghost: variantGhost,
  outline: variantOutline$1,
  solid: variantSolid$2,
  link: variantLink,
  unstyled: variantUnstyled
};
var sizes$2 = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2
  }
};
var defaultProps$3 = {
  variant: "solid",
  size: "md",
  colorScheme: "gray"
};
var Button = {
  baseStyle: baseStyle$5,
  variants: variants$2,
  sizes: sizes$2,
  defaultProps: defaultProps$3
};
var baseStyleControl = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(c3 + ".500", c3 + ".200")(props),
      borderColor: mode(c3 + ".500", c3 + ".200")(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(c3 + ".600", c3 + ".300")(props),
        borderColor: mode(c3 + ".600", c3 + ".300")(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(c3 + ".500", c3 + ".200")(props),
      borderColor: mode(c3 + ".500", c3 + ".200")(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focus: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
};
var baseStyleLabel = {
  userSelect: "none",
  _disabled: {
    opacity: 0.4
  }
};
var baseStyleIcon$1 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
};
var baseStyle$6 = (props) => ({
  icon: baseStyleIcon$1,
  control: baseStyleControl(props),
  label: baseStyleLabel
});
var sizes$3 = {
  sm: {
    control: {
      h: 3,
      w: 3
    },
    label: {
      fontSize: "sm"
    },
    icon: {
      fontSize: "0.45rem"
    }
  },
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    },
    icon: {
      fontSize: "0.625rem"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    },
    icon: {
      fontSize: "0.625rem"
    }
  }
};
var defaultProps$4 = {
  size: "md",
  colorScheme: "blue"
};
var Checkbox = {
  parts: checkboxAnatomy.keys,
  baseStyle: baseStyle$6,
  sizes: sizes$3,
  defaultProps: defaultProps$4
};
var $size = cssVar2("close-button-size");
var baseStyle$7 = (props) => {
  var hoverBg = mode("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = mode("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    w: [$size.reference],
    h: [$size.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focus: {
      boxShadow: "outline"
    }
  };
};
var sizes$4 = {
  lg: {
    [$size.variable]: "40px",
    fontSize: "16px"
  },
  md: {
    [$size.variable]: "32px",
    fontSize: "12px"
  },
  sm: {
    [$size.variable]: "24px",
    fontSize: "10px"
  }
};
var defaultProps$5 = {
  size: "md"
};
var CloseButton = {
  baseStyle: baseStyle$7,
  sizes: sizes$4,
  defaultProps: defaultProps$5
};
var {
  variants: variants$3,
  defaultProps: defaultProps$6
} = Badge;
var baseStyle$8 = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
};
var Code = {
  baseStyle: baseStyle$8,
  variants: variants$3,
  defaultProps: defaultProps$6
};
var baseStyle$9 = {
  w: "100%",
  mx: "auto",
  maxW: "60ch",
  px: "1rem"
};
var Container = {
  baseStyle: baseStyle$9
};
var baseStyle$a = {
  opacity: 0.6,
  borderColor: "inherit"
};
var variantSolid$3 = {
  borderStyle: "solid"
};
var variantDashed = {
  borderStyle: "dashed"
};
var variants$4 = {
  solid: variantSolid$3,
  dashed: variantDashed
};
var defaultProps$7 = {
  variant: "solid"
};
var Divider = {
  baseStyle: baseStyle$a,
  variants: variants$4,
  defaultProps: defaultProps$7
};
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
function getSize$1(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        h: "100vh"
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var baseStyleOverlay = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
};
var baseStyleDialogContainer = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
};
var baseStyleDialog = (props) => {
  var {
    isFullHeight
  } = props;
  return _extends$4({}, isFullHeight && {
    height: "100vh"
  }, {
    zIndex: "modal",
    maxH: "100vh",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    boxShadow: mode("lg", "dark-lg")(props)
  });
};
var baseStyleHeader = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody = {
  px: 6,
  py: 2,
  flex: 1,
  overflow: "auto"
};
var baseStyleFooter = {
  px: 6,
  py: 4
};
var baseStyle$b = (props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: baseStyleDialog(props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter
});
var sizes$5 = {
  xs: getSize$1("xs"),
  sm: getSize$1("md"),
  md: getSize$1("lg"),
  lg: getSize$1("2xl"),
  xl: getSize$1("4xl"),
  full: getSize$1("full")
};
var defaultProps$8 = {
  size: "xs"
};
var Drawer = {
  parts: drawerAnatomy.keys,
  baseStyle: baseStyle$b,
  sizes: sizes$5,
  defaultProps: defaultProps$8
};
var baseStylePreview = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyleInput = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyle$c = {
  preview: baseStylePreview,
  input: baseStyleInput
};
var Editable = {
  parts: editableAnatomy.keys,
  baseStyle: baseStyle$c
};
var baseStyleRequiredIndicator = (props) => {
  return {
    marginStart: 1,
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyleHelperText = (props) => {
  return {
    mt: 2,
    color: mode("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
};
var baseStyle$d = (props) => ({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator(props),
  helperText: baseStyleHelperText(props)
});
var Form = {
  parts: formAnatomy.keys,
  baseStyle: baseStyle$d
};
var baseStyle$e = {
  fontSize: "md",
  marginEnd: 3,
  mb: 2,
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
};
var FormLabel = {
  baseStyle: baseStyle$e
};
var baseStyle$f = {
  fontFamily: "heading",
  fontWeight: "bold"
};
var sizes$6 = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
};
var defaultProps$9 = {
  size: "xl"
};
var Heading = {
  baseStyle: baseStyle$f,
  sizes: sizes$6,
  defaultProps: defaultProps$9
};
var baseStyle$g = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal"
  }
};
var size = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: 4,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "sm"
  }
};
var sizes$7 = {
  lg: {
    field: size.lg,
    addon: size.lg
  },
  md: {
    field: size.md,
    addon: size.md
  },
  sm: {
    field: size.sm,
    addon: size.sm
  },
  xs: {
    field: size.xs,
    addon: size.xs
  }
};
function getDefaults(props) {
  var {
    focusBorderColor: fc2,
    errorBorderColor: ec2
  } = props;
  return {
    focusBorderColor: fc2 || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec2 || mode("red.500", "red.300")(props)
  };
}
var variantOutline$2 = (props) => {
  var {
    theme: theme3
  } = props;
  var {
    focusBorderColor: fc2,
    errorBorderColor: ec2
  } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme3, ec2),
        boxShadow: "0 0 0 1px " + getColor(theme3, ec2)
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme3, fc2),
        boxShadow: "0 0 0 1px " + getColor(theme3, fc2)
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
};
var variantFilled = (props) => {
  var {
    theme: theme3
  } = props;
  var {
    focusBorderColor: fc2,
    errorBorderColor: ec2
  } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme3, ec2)
      },
      _focus: {
        bg: "transparent",
        borderColor: getColor(theme3, fc2)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
};
var variantFlushed = (props) => {
  var {
    theme: theme3
  } = props;
  var {
    focusBorderColor: fc2,
    errorBorderColor: ec2
  } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme3, ec2),
        boxShadow: "0px 1px 0px 0px " + getColor(theme3, ec2)
      },
      _focus: {
        borderColor: getColor(theme3, fc2),
        boxShadow: "0px 1px 0px 0px " + getColor(theme3, fc2)
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent"
    }
  };
};
var variantUnstyled$1 = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto"
  }
};
var variants$5 = {
  outline: variantOutline$2,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled$1
};
var defaultProps$a = {
  size: "md",
  variant: "outline"
};
var Input = {
  parts: inputAnatomy.keys,
  baseStyle: baseStyle$g,
  sizes: sizes$7,
  variants: variants$5,
  defaultProps: defaultProps$a
};
var baseStyle$h = (props) => {
  return {
    bg: mode("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  };
};
var Kbd = {
  baseStyle: baseStyle$h
};
var baseStyle$i = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var Link = {
  baseStyle: baseStyle$i
};
var baseStyleIcon$2 = {
  marginEnd: "0.5rem",
  display: "inline",
  verticalAlign: "text-bottom"
};
var baseStyle$j = {
  container: {},
  item: {},
  icon: baseStyleIcon$2
};
var List = {
  parts: listAnatomy.keys,
  baseStyle: baseStyle$j
};
var baseStyleList = (props) => {
  return {
    bg: mode("#fff", "gray.700")(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px"
  };
};
var baseStyleItem = (props) => {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _active: {
      bg: mode("gray.200", "whiteAlpha.200")(props)
    },
    _expanded: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
};
var baseStyleCommand = {
  opacity: 0.6
};
var baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6
};
var baseStyleButton$1 = {
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyle$k = (props) => ({
  button: baseStyleButton$1,
  list: baseStyleList(props),
  item: baseStyleItem(props),
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var Menu2 = {
  parts: menuAnatomy.keys,
  baseStyle: baseStyle$k
};
var baseStyleOverlay$1 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
};
var baseStyleDialogContainer$1 = (props) => {
  var {
    isCentered,
    scrollBehavior
  } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto"
  };
};
var baseStyleDialog$1 = (props) => {
  var {
    scrollBehavior
  } = props;
  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: mode("lg", "dark-lg")(props)
  };
};
var baseStyleHeader$1 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$1 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$1 = (props) => {
  var {
    scrollBehavior
  } = props;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
};
var baseStyleFooter$1 = {
  px: 6,
  py: 4
};
var baseStyle$l = (props) => ({
  overlay: baseStyleOverlay$1,
  dialogContainer: baseStyleDialogContainer$1(props),
  dialog: baseStyleDialog$1(props),
  header: baseStyleHeader$1,
  closeButton: baseStyleCloseButton$1,
  body: baseStyleBody$1(props),
  footer: baseStyleFooter$1
});
function getSize$2(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        minH: "100vh",
        my: 0
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var sizes$8 = {
  xs: getSize$2("xs"),
  sm: getSize$2("sm"),
  md: getSize$2("md"),
  lg: getSize$2("lg"),
  xl: getSize$2("xl"),
  "2xl": getSize$2("2xl"),
  "3xl": getSize$2("3xl"),
  "4xl": getSize$2("4xl"),
  "5xl": getSize$2("5xl"),
  "6xl": getSize$2("6xl"),
  full: getSize$2("full")
};
var defaultProps$b = {
  size: "md"
};
var Modal = {
  parts: modalAnatomy.keys,
  baseStyle: baseStyle$l,
  sizes: sizes$8,
  defaultProps: defaultProps$b
};
var typography2 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var _Input$baseStyle$fiel;
var _Input$baseStyle;
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
var {
  variants: variants$6,
  defaultProps: defaultProps$c
} = Input;
var $stepperWidth = cssVar2("number-input-stepper-width");
var $inputPadding = cssVar2("number-input-input-padding");
var inputPaddingValue = calc2($stepperWidth).add("0.5rem").toString();
var baseStyleRoot = {
  [$stepperWidth.variable]: "24px",
  [$inputPadding.variable]: inputPaddingValue
};
var baseStyleField = (_Input$baseStyle$fiel = (_Input$baseStyle = Input.baseStyle) == null ? void 0 : _Input$baseStyle.field) != null ? _Input$baseStyle$fiel : {};
var baseStyleStepperGroup = {
  width: [$stepperWidth.reference]
};
var baseStyleStepper = (props) => {
  return {
    borderStart: "1px solid",
    borderStartColor: mode("inherit", "whiteAlpha.300")(props),
    color: mode("inherit", "whiteAlpha.800")(props),
    _active: {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyle$m = (props) => ({
  root: baseStyleRoot,
  field: baseStyleField,
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper(props)
});
function getSize$3(size2) {
  var _sizeStyle$field$font, _sizeStyle$field;
  var sizeStyle = Input.sizes[size2];
  var radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  var _fontSize = (_sizeStyle$field$font = (_sizeStyle$field = sizeStyle.field) == null ? void 0 : _sizeStyle$field.fontSize) != null ? _sizeStyle$field$font : "md";
  var fontSize = typography2.fontSizes[_fontSize.toString()];
  return {
    field: _extends$5({}, sizeStyle.field, {
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    }),
    stepper: {
      fontSize: calc2(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  };
}
var sizes$9 = {
  xs: getSize$3("xs"),
  sm: getSize$3("sm"),
  md: getSize$3("md"),
  lg: getSize$3("lg")
};
var NumberInput = {
  parts: numberInputAnatomy.keys,
  baseStyle: baseStyle$m,
  sizes: sizes$9,
  variants: variants$6,
  defaultProps: defaultProps$c
};
var _Input$variants$unsty;
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
var baseStyle$n = _extends$6({}, Input.baseStyle.field, {
  textAlign: "center"
});
var sizes$a = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var variants$7 = {
  outline: (props) => {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: (props) => {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: (props) => {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty = Input.variants.unstyled.field) != null ? _Input$variants$unsty : {}
};
var defaultProps$d = Input.defaultProps;
var PinInput = {
  baseStyle: baseStyle$n,
  sizes: sizes$a,
  variants: variants$7,
  defaultProps: defaultProps$d
};
var $popperBg = cssVar2("popper-bg");
var $arrowBg = cssVar2("popper-arrow-bg");
var $arrowShadowColor = cssVar2("popper-arrow-shadow-color");
var baseStylePopper = {
  zIndex: 10
};
var baseStyleContent = (props) => {
  var bg2 = mode("white", "gray.700")(props);
  var shadowColor = mode("gray.200", "whiteAlpha.300")(props);
  return {
    [$popperBg.variable]: "colors." + bg2,
    bg: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: "colors." + shadowColor,
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focus: {
      outline: 0,
      boxShadow: "outline"
    }
  };
};
var baseStyleHeader$2 = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
};
var baseStyleBody$2 = {
  px: 3,
  py: 2
};
var baseStyleFooter$2 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
};
var baseStyle$o = (props) => ({
  popper: baseStylePopper,
  content: baseStyleContent(props),
  header: baseStyleHeader$2,
  body: baseStyleBody$2,
  footer: baseStyleFooter$2,
  arrow: {}
});
var Popover = {
  parts: popoverAnatomy.keys,
  baseStyle: baseStyle$o
};
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
function filledStyle(props) {
  var {
    colorScheme: c3,
    theme: t3,
    isIndeterminate,
    hasStripe
  } = props;
  var stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  var bgColor = mode(c3 + ".500", c3 + ".200")(props);
  var gradient = "linear-gradient(\n    to right,\n    transparent 0%,\n    " + getColor(t3, bgColor) + " 50%,\n    transparent 100%\n  )";
  var addStripe = !isIndeterminate && hasStripe;
  return _extends$7({}, addStripe && stripeStyle, isIndeterminate ? {
    bgImage: gradient
  } : {
    bgColor
  });
}
var baseStyleLabel$1 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
};
var baseStyleTrack = (props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
};
var baseStyleFilledTrack = (props) => {
  return _extends$7({
    transitionProperty: "common",
    transitionDuration: "slow"
  }, filledStyle(props));
};
var baseStyle$p = (props) => ({
  label: baseStyleLabel$1,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props)
});
var sizes$b = {
  xs: {
    track: {
      h: "0.25rem"
    }
  },
  sm: {
    track: {
      h: "0.5rem"
    }
  },
  md: {
    track: {
      h: "0.75rem"
    }
  },
  lg: {
    track: {
      h: "1rem"
    }
  }
};
var defaultProps$e = {
  size: "md",
  colorScheme: "blue"
};
var Progress = {
  parts: progressAnatomy.keys,
  sizes: sizes$b,
  baseStyle: baseStyle$p,
  defaultProps: defaultProps$e
};
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
var baseStyleControl$1 = (props) => {
  var {
    control = {}
  } = Checkbox.baseStyle(props);
  return _extends$8({}, control, {
    borderRadius: "full",
    _checked: _extends$8({}, control["_checked"], {
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    })
  });
};
var baseStyle$q = (props) => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl$1(props)
});
var sizes$c = {
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    }
  },
  sm: {
    control: {
      width: 3,
      height: 3
    },
    label: {
      fontSize: "sm"
    }
  }
};
var defaultProps$f = {
  size: "md",
  colorScheme: "blue"
};
var Radio = {
  parts: radioAnatomy.keys,
  baseStyle: baseStyle$q,
  sizes: sizes$c,
  defaultProps: defaultProps$f
};
function _extends$9() {
  _extends$9 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
var baseStyleField$1 = (props) => {
  return _extends$9({}, Input.baseStyle.field, {
    bg: mode("white", "gray.700")(props),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props)
    }
  });
};
var baseStyleIcon$3 = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5
  }
};
var baseStyle$r = (props) => ({
  field: baseStyleField$1(props),
  icon: baseStyleIcon$3
});
var sizes$d = _extends$9({}, Input.sizes, {
  xs: _extends$9({}, Input.sizes.xs, {
    icon: {
      insetEnd: "0.25rem"
    }
  })
});
var Select = {
  parts: selectAnatomy.keys,
  baseStyle: baseStyle$r,
  sizes: sizes$d,
  variants: Input.variants,
  defaultProps: Input.defaultProps
};
var fade = (startColor, endColor) => keyframes({
  from: {
    borderColor: startColor,
    background: startColor
  },
  to: {
    borderColor: endColor,
    background: endColor
  }
});
var baseStyle$s = (props) => {
  var defaultStartColor = mode("gray.100", "gray.800")(props);
  var defaultEndColor = mode("gray.400", "gray.600")(props);
  var {
    startColor = defaultStartColor,
    endColor = defaultEndColor,
    speed,
    theme: theme3
  } = props;
  var start = getColor(theme3, startColor);
  var end = getColor(theme3, endColor);
  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: speed + "s linear infinite alternate " + fade(start, end)
  };
};
var Skeleton = {
  baseStyle: baseStyle$s
};
var baseStyle$t = (props) => ({
  borderRadius: "md",
  fontWeight: "semibold",
  _focus: {
    boxShadow: "outline",
    padding: "1rem",
    position: "fixed",
    top: "1.5rem",
    insetStart: "1.5rem",
    bg: mode("white", "gray.700")(props)
  }
});
var SkipLink = {
  baseStyle: baseStyle$t
};
function _extends$a() {
  _extends$a = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
function thumbOrientation(props) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      _active: {
        transform: "translateX(-50%) scale(1.15)"
      }
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      _active: {
        transform: "translateY(-50%) scale(1.15)"
      }
    }
  });
}
var baseStyleContainer$2 = (props) => {
  var {
    orientation
  } = props;
  return _extends$a({
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    }
  }, orient({
    orientation,
    vertical: {
      h: "100%"
    },
    horizontal: {
      w: "100%"
    }
  }));
};
var baseStyleTrack$1 = (props) => {
  return {
    borderRadius: "sm",
    bg: mode("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: mode("gray.300", "whiteAlpha.300")(props)
    }
  };
};
var baseStyleThumb = (props) => {
  return _extends$a({
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  }, thumbOrientation(props));
};
var baseStyleFilledTrack$1 = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    bg: mode(c3 + ".500", c3 + ".200")(props)
  };
};
var baseStyle$u = (props) => ({
  container: baseStyleContainer$2(props),
  track: baseStyleTrack$1(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack$1(props)
});
var sizeLg = (props) => {
  return {
    thumb: {
      w: "16px",
      h: "16px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeMd = (props) => {
  return {
    thumb: {
      w: "14px",
      h: "14px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeSm = (props) => {
  return {
    thumb: {
      w: "10px",
      h: "10px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "2px"
      },
      vertical: {
        w: "2px"
      }
    })
  };
};
var sizes$e = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var defaultProps$g = {
  size: "md",
  colorScheme: "blue"
};
var Slider = {
  parts: sliderAnatomy.keys,
  sizes: sizes$e,
  baseStyle: baseStyle$u,
  defaultProps: defaultProps$g
};
var $size$1 = cssVar2("spinner-size");
var baseStyle$v = {
  width: [$size$1.reference],
  height: [$size$1.reference]
};
var sizes$f = {
  xs: {
    [$size$1.variable]: "0.75rem"
  },
  sm: {
    [$size$1.variable]: "1rem"
  },
  md: {
    [$size$1.variable]: "1.5rem"
  },
  lg: {
    [$size$1.variable]: "2rem"
  },
  xl: {
    [$size$1.variable]: "3rem"
  }
};
var defaultProps$h = {
  size: "md"
};
var Spinner = {
  baseStyle: baseStyle$v,
  sizes: sizes$f,
  defaultProps: defaultProps$h
};
var baseStyleLabel$2 = {
  fontWeight: "medium"
};
var baseStyleHelpText = {
  opacity: 0.8,
  marginBottom: 2
};
var baseStyleNumber = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
};
var baseStyleIcon$4 = {
  marginEnd: 1,
  w: "14px",
  h: "14px",
  verticalAlign: "middle"
};
var baseStyle$w = {
  container: {},
  label: baseStyleLabel$2,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon$4
};
var sizes$g = {
  md: {
    label: {
      fontSize: "sm"
    },
    helpText: {
      fontSize: "sm"
    },
    number: {
      fontSize: "2xl"
    }
  }
};
var defaultProps$i = {
  size: "md"
};
var Stat = {
  parts: statAnatomy.keys,
  baseStyle: baseStyle$w,
  sizes: sizes$g,
  defaultProps: defaultProps$i
};
var $width = cssVar2("switch-track-width");
var $height = cssVar2("switch-track-height");
var $diff = cssVar2("switch-track-diff");
var diffValue = calc2.subtract($width, $height);
var $translateX = cssVar2("switch-thumb-x");
var baseStyleTrack$2 = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    borderRadius: "full",
    p: "2px",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: mode(c3 + ".500", c3 + ".200")(props)
    }
  };
};
var baseStyleThumb$1 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: "translateX(" + $translateX.reference + ")"
  }
};
var baseStyle$x = (props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc2($diff).negate().toString()
    }
  },
  track: baseStyleTrack$2(props),
  thumb: baseStyleThumb$1
});
var sizes$h = {
  sm: {
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "0.75rem"
    }
  },
  md: {
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "1rem"
    }
  },
  lg: {
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "1.5rem"
    }
  }
};
var defaultProps$j = {
  size: "md",
  colorScheme: "blue"
};
var Switch = {
  parts: switchAnatomy.keys,
  baseStyle: baseStyle$x,
  sizes: sizes$h,
  defaultProps: defaultProps$j
};
function _extends$b() {
  _extends$b = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
var baseStyle$y = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
};
var numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
};
var variantSimple = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    th: _extends$b({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c3 + ".100", c3 + ".700")(props)
    }, numericStyles),
    td: _extends$b({
      borderBottom: "1px",
      borderColor: mode(c3 + ".100", c3 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variantStripe = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    th: _extends$b({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c3 + ".100", c3 + ".700")(props)
    }, numericStyles),
    td: _extends$b({
      borderBottom: "1px",
      borderColor: mode(c3 + ".100", c3 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(c3 + ".100", c3 + ".700")(props)
          },
          td: {
            background: mode(c3 + ".100", c3 + ".700")(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variants$8 = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: {}
};
var sizes$i = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  },
  md: {
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  },
  lg: {
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  }
};
var defaultProps$k = {
  variant: "simple",
  size: "md",
  colorScheme: "gray"
};
var Table = {
  parts: tableAnatomy.keys,
  baseStyle: baseStyle$y,
  variants: variants$8,
  sizes: sizes$i,
  defaultProps: defaultProps$k
};
var baseStyleRoot$1 = (props) => {
  var {
    orientation
  } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
};
var baseStyleTab = (props) => {
  var {
    isFitted
  } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focus: {
      zIndex: 1,
      boxShadow: "outline"
    }
  };
};
var baseStyleTablist = (props) => {
  var {
    align = "start",
    orientation
  } = props;
  var alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
};
var baseStyleTabpanel = {
  p: 4
};
var baseStyle$z = (props) => ({
  root: baseStyleRoot$1(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
});
var sizes$j = {
  sm: {
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  },
  md: {
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  },
  lg: {
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  }
};
var variantLine = (props) => {
  var {
    colorScheme: c3,
    orientation
  } = props;
  var isVertical = orientation === "vertical";
  var borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  var marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        color: mode(c3 + ".600", c3 + ".300")(props),
        borderColor: "currentColor"
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      }
    }
  };
};
var variantEnclosed = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(c3 + ".600", c3 + ".300")(props),
        borderColor: "inherit",
        borderBottomColor: mode("white", "gray.800")(props)
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantEnclosedColored = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode("gray.50", "whiteAlpha.50")(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        bg: mode("#fff", "gray.800")(props),
        color: mode(c3 + ".600", c3 + ".300")(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantSoftRounded = (props) => {
  var {
    colorScheme: c3,
    theme: theme3
  } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme3, c3 + ".700"),
        bg: getColor(theme3, c3 + ".100")
      }
    }
  };
};
var variantSolidRounded = (props) => {
  var {
    colorScheme: c3
  } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode("gray.600", "inherit")(props),
      _selected: {
        color: mode("#fff", "gray.800")(props),
        bg: mode(c3 + ".600", c3 + ".300")(props)
      }
    }
  };
};
var variantUnstyled$2 = {};
var variants$9 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled$2
};
var defaultProps$l = {
  size: "md",
  variant: "line",
  colorScheme: "blue"
};
var Tabs = {
  parts: tabsAnatomy.keys,
  baseStyle: baseStyle$z,
  sizes: sizes$j,
  variants: variants$9,
  defaultProps: defaultProps$l
};
var baseStyleContainer$3 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyleLabel$3 = {
  lineHeight: 1.2,
  overflow: "visible"
};
var baseStyleCloseButton$2 = {
  fontSize: "18px",
  w: "1.25rem",
  h: "1.25rem",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "0.375rem",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focus: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
};
var baseStyle$A = {
  container: baseStyleContainer$3,
  label: baseStyleLabel$3,
  closeButton: baseStyleCloseButton$2
};
var sizes$k = {
  sm: {
    container: {
      minH: "1.25rem",
      minW: "1.25rem",
      fontSize: "xs",
      px: 2,
      borderRadius: "md"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  },
  md: {
    container: {
      minH: "1.5rem",
      minW: "1.5rem",
      fontSize: "sm",
      borderRadius: "md",
      px: 2
    }
  },
  lg: {
    container: {
      minH: 8,
      minW: 8,
      fontSize: "md",
      borderRadius: "md",
      px: 3
    }
  }
};
var variants$a = {
  subtle: (props) => ({
    container: Badge.variants.subtle(props)
  }),
  solid: (props) => ({
    container: Badge.variants.solid(props)
  }),
  outline: (props) => ({
    container: Badge.variants.outline(props)
  })
};
var defaultProps$m = {
  size: "md",
  variant: "subtle",
  colorScheme: "gray"
};
var Tag = {
  parts: tagAnatomy.keys,
  variants: variants$a,
  baseStyle: baseStyle$A,
  sizes: sizes$k,
  defaultProps: defaultProps$m
};
var _Input$variants$unsty$1;
var _Input$sizes$xs$field;
var _Input$sizes$sm$field;
var _Input$sizes$md$field;
var _Input$sizes$lg$field;
function _extends$c() {
  _extends$c = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
var baseStyle$B = _extends$c({}, Input.baseStyle.field, {
  paddingY: "8px",
  minHeight: "80px",
  lineHeight: "short",
  verticalAlign: "top"
});
var variants$b = {
  outline: (props) => {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: (props) => {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: (props) => {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty$1 = Input.variants.unstyled.field) != null ? _Input$variants$unsty$1 : {}
};
var sizes$l = {
  xs: (_Input$sizes$xs$field = Input.sizes.xs.field) != null ? _Input$sizes$xs$field : {},
  sm: (_Input$sizes$sm$field = Input.sizes.sm.field) != null ? _Input$sizes$sm$field : {},
  md: (_Input$sizes$md$field = Input.sizes.md.field) != null ? _Input$sizes$md$field : {},
  lg: (_Input$sizes$lg$field = Input.sizes.lg.field) != null ? _Input$sizes$lg$field : {}
};
var defaultProps$n = {
  size: "md",
  variant: "outline"
};
var Textarea = {
  baseStyle: baseStyle$B,
  sizes: sizes$l,
  variants: variants$b,
  defaultProps: defaultProps$n
};
var $bg = cssVar2("tooltip-bg");
var $arrowBg$1 = cssVar2("popper-arrow-bg");
var baseStyle$C = (props) => {
  var bg2 = mode("gray.700", "gray.300")(props);
  return {
    [$bg.variable]: "colors." + bg2,
    px: "8px",
    py: "2px",
    bg: [$bg.reference],
    [$arrowBg$1.variable]: [$bg.reference],
    color: mode("whiteAlpha.900", "gray.900")(props),
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "320px",
    zIndex: "tooltip"
  };
};
var Tooltip = {
  baseStyle: baseStyle$C
};
var baseStyleText = (props) => {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm"
  };
};
var baseStyleIcon$5 = (props) => {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyle$D = (props) => ({
  text: baseStyleText(props),
  icon: baseStyleIcon$5(props)
});
var FormError = {
  parts: formErrorAnatomy.keys,
  baseStyle: baseStyle$D
};
var components = {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  CloseButton,
  Code,
  Container,
  Divider,
  Drawer,
  Editable,
  Form,
  FormLabel,
  Heading,
  Input,
  Kbd,
  Link,
  List,
  Menu: Menu2,
  Modal,
  NumberInput,
  PinInput,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  SkipLink,
  Slider,
  Spinner,
  Stat,
  Switch,
  Table,
  Tabs,
  Tag,
  Textarea,
  Tooltip,
  FormError
};
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
});
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition2 = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
function _extends$d() {
  _extends$d = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
var foundations = _extends$d({
  breakpoints,
  zIndices,
  radii,
  blur,
  colors
}, typography2, {
  sizes,
  shadows,
  space: spacing,
  borders,
  transition: transition2
});
var styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props)
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word"
    }
  })
};
var requiredChakraThemeKeys = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every((propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName));
}
function _extends$e() {
  _extends$e = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$e.apply(this, arguments);
}
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = _extends$e({
  direction
}, foundations, {
  components,
  styles,
  config
});
function extendTheme() {
  for (var _len = arguments.length, extensions = new Array(_len), _key = 0; _key < _len; _key++) {
    extensions[_key] = arguments[_key];
  }
  var overrides = [...extensions];
  var baseTheme = extensions[extensions.length - 1];
  if (isChakraTheme(baseTheme) && overrides.length > 1) {
    overrides = overrides.slice(0, overrides.length - 1);
  } else {
    baseTheme = theme;
  }
  return pipe(...overrides.map((extension) => (prevTheme) => isFunction(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)))(baseTheme);
}
function mergeThemeOverride() {
  for (var _len2 = arguments.length, overrides = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    overrides[_key2] = arguments[_key2];
  }
  return lodash_mergewith({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return function() {
      var sourceValue = isFunction(source) ? source(...arguments) : source;
      var overrideValue = isFunction(override) ? override(...arguments) : override;
      return lodash_mergewith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}
var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});
var visuallyHiddenStyle = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var [FormControlProvider, useFormControlContext] = createContext({
  strict: false,
  name: "FormControlContext"
});
function _extends$j() {
  _extends$j = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$j.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useFormControl(props) {
  var _useFormControlProps = useFormControlProps(props), {
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired
  } = _useFormControlProps, rest = _objectWithoutPropertiesLoose$5(_useFormControlProps, ["isDisabled", "isInvalid", "isReadOnly", "isRequired"]);
  return _extends$j({}, rest, {
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  });
}
function useFormControlProps(props) {
  var _ref, _ref2, _ref3;
  var field = useFormControlContext();
  var {
    id: id2,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus,
    onBlur
  } = props, rest = _objectWithoutPropertiesLoose$5(props, ["id", "disabled", "readOnly", "required", "isRequired", "isInvalid", "isReadOnly", "isDisabled", "onFocus", "onBlur"]);
  var labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if (field != null && field.hasFeedbackText && field != null && field.isInvalid) {
    labelIds.push(field.feedbackId);
  }
  if (field != null && field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return _extends$j({}, rest, {
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id2 != null ? id2 : field == null ? void 0 : field.id,
    isDisabled: (_ref = disabled != null ? disabled : isDisabled) != null ? _ref : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_ref2 = readOnly != null ? readOnly : isReadOnly) != null ? _ref2 : field == null ? void 0 : field.isReadOnly,
    isRequired: (_ref3 = required != null ? required : isRequired) != null ? _ref3 : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur)
  });
}
function _extends$k() {
  _extends$k = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$k.apply(this, arguments);
}
var Input$1 = /* @__PURE__ */ forwardRef((props, ref) => {
  var styles2 = useMultiStyleConfig("Input", props);
  var ownProps = omitThemingProps(props);
  var input = useFormControl(ownProps);
  var _className = cx("chakra-input", props.className);
  return /* @__PURE__ */ react.createElement(chakra.input, _extends$k({}, input, {
    __css: styles2.field,
    ref,
    className: _className
  }));
});
Input$1.id = "Input";
var Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
function _extends$l() {
  _extends$l = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$l.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Divider$1 = /* @__PURE__ */ forwardRef((props, ref) => {
  var _useStyleConfig = useStyleConfig("Divider", props), {
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderWidth,
    borderStyle,
    borderColor
  } = _useStyleConfig, styles2 = _objectWithoutPropertiesLoose$6(_useStyleConfig, ["borderLeftWidth", "borderBottomWidth", "borderTopWidth", "borderRightWidth", "borderWidth", "borderStyle", "borderColor"]);
  var _omitThemingProps = omitThemingProps(props), {
    className,
    orientation = "horizontal",
    __css
  } = _omitThemingProps, rest = _objectWithoutPropertiesLoose$6(_omitThemingProps, ["className", "orientation", "__css"]);
  var dividerStyles = {
    vertical: {
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ react.createElement(chakra.hr, _extends$l({
    ref,
    "aria-orientation": orientation
  }, rest, {
    __css: _extends$l({}, styles2, {
      border: "0",
      borderColor,
      borderStyle
    }, dividerStyles[orientation], __css),
    className: cx("chakra-divider", className)
  }));
});
function _extends$m() {
  _extends$m = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$m.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Flex = /* @__PURE__ */ forwardRef((props, ref) => {
  var {
    direction: direction2,
    align,
    justify,
    wrap: wrap2,
    basis,
    grow,
    shrink
  } = props, rest = _objectWithoutPropertiesLoose$7(props, ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"]);
  var styles2 = {
    display: "flex",
    flexDirection: direction2,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap2,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /* @__PURE__ */ react.createElement(chakra.div, _extends$m({
    ref,
    __css: styles2
  }, rest));
});

// build/dist/theme.js
var theme2 = extendTheme({
  fonts: {
    heading: "Inter, Noto Sans KR",
    body: "Inter, Noto Sans KR"
  },
  initialColorMode: "dark"
});
var theme_default = theme2;

// build/dist/Builder.js
var BuilderMain = () => {
  return /* @__PURE__ */ react.createElement(Flex, {
    flexDirection: "row"
  }, /* @__PURE__ */ react.createElement(Input$1, {
    placeholder: "Metadata"
  }));
};
var Builder_default = BuilderMain;

// build/_snowpack/pkg/@chakra-ui/icons.js
function _extends4() {
  _extends4 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var fallbackIcon = {
  path: /* @__PURE__ */ react.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ react.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /* @__PURE__ */ react.createElement("path", {
    fill: "currentColor",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /* @__PURE__ */ react.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  })),
  viewBox: "0 0 24 24"
};
var Icon = /* @__PURE__ */ forwardRef((props, ref) => {
  var {
    as: element,
    viewBox,
    color: color2 = "currentColor",
    focusable = false,
    children,
    className,
    __css
  } = props, rest = _objectWithoutPropertiesLoose4(props, ["as", "viewBox", "color", "focusable", "children", "className", "__css"]);
  var _className = cx("chakra-icon", className);
  var styles2 = _extends4({
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: color2
  }, __css);
  var shared = {
    ref,
    focusable,
    className: _className,
    __css: styles2
  };
  var _viewBox = viewBox != null ? viewBox : fallbackIcon.viewBox;
  if (element && typeof element !== "string") {
    return /* @__PURE__ */ react.createElement(chakra.svg, _extends4({
      as: element
    }, shared, rest));
  }
  var _path = children != null ? children : fallbackIcon.path;
  return /* @__PURE__ */ react.createElement(chakra.svg, _extends4({
    verticalAlign: "middle",
    viewBox: _viewBox
  }, shared, rest), _path);
});
function _extends$14() {
  _extends$14 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$14.apply(this, arguments);
}
function createIcon(options) {
  var {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    displayName,
    defaultProps: defaultProps2 = {}
  } = options;
  var Comp = /* @__PURE__ */ forwardRef((props, ref) => /* @__PURE__ */ react.createElement(Icon, _extends$14({
    ref,
    viewBox
  }, defaultProps2, props), path != null ? path : /* @__PURE__ */ react.createElement("path", {
    fill: "currentColor",
    d: pathDefinition
  })));
  return Comp;
}
var ChevronDownIcon = createIcon({
  displayName: "ChevronDownIcon",
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
});

// build/dist/Page.js
var Page = () => {
  return /* @__PURE__ */ react.createElement(Flex, {
    justifyContent: "space-evenly"
  }, /* @__PURE__ */ react.createElement(Builder_default, null), /* @__PURE__ */ react.createElement(Center, {
    height: "100px"
  }, /* @__PURE__ */ react.createElement(Divider$1, {
    size: "",
    orientation: "vertical"
  })), "dasdsadas");
};
var Page_default = Page;

// build/dist/App.js
function App() {
  return /* @__PURE__ */ react.createElement(ChakraProvider, {
    theme: theme_default
  }, /* @__PURE__ */ react.createElement(Page_default, null));
}
var App_default = App;

// build/dist/index.js
import.meta.env = env_exports;
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(App_default, null)), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map
