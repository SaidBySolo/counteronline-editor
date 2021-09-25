import { r as react } from '../common/index-210ebed7.js';
import { G as Global, c as createContext, i as isBrowser, T as ThemeProvider, C as ColorModeProvider, a as GlobalStyle } from '../common/providers-f33532bc.js';

var CSSReset = () => /*#__PURE__*/react.createElement(Global, {
  styles: "\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;      \n        -moz-osx-font-smoothing: grayscale; \n        touch-action: manipulation; \n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: 'kern';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type=\"button\"]::-moz-focus-inner,\n      [type=\"reset\"]::-moz-focus-inner,\n      [type=\"submit\"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type=\"checkbox\"],\n      [type=\"radio\"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type=\"number\"]::-webkit-inner-spin-button,\n      [type=\"number\"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type=\"number\"] {\n        -moz-appearance: textfield;\n      }\n\n      [type=\"search\"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type=\"search\"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role=\"button\"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n        vertical-align: middle;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    "
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
  return /*#__PURE__*/react.createElement(PortalManagerContextProvider, {
    value: {
      zIndex
    }
  }, children);
}

// This implementation is heavily inspired by react-aria's implementation
var defaultIdContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};
var IdContext = /*#__PURE__*/react.createContext(defaultIdContext);
var IdProvider = /*#__PURE__*/react.memo((_ref) => {
  var {
    children
  } = _ref;
  var currentContext = react.useContext(IdContext);
  var isRoot = currentContext === defaultIdContext;
  var context = react.useMemo(() => ({
    prefix: isRoot ? 0 : ++currentContext.prefix,
    current: 0
  }), [isRoot, currentContext]);
  return /*#__PURE__*/react.createElement(IdContext.Provider, {
    value: context
  }, children);
});

var doc = {
  body: {
    classList: {
      add() {},

      remove() {}

    }
  },

  addEventListener() {},

  removeEventListener() {},

  activeElement: {
    blur() {},

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
      initEvent() {}

    };
  },

  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},

      setAttribute() {},

      getElementsByTagName() {
        return [];
      }

    };
  }

};
var ssrDocument = doc;

var noop = () => {};

var win = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop,
  removeEventListener: noop,

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
      addListener: noop,
      removeListener: noop
    };
  },

  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }

    return setTimeout(callback, 0);
  },

  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") return;
    clearTimeout(id);
  },

  setTimeout: () => 0,
  clearTimeout: noop,
  setInterval: () => 0,
  clearInterval: noop
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
var EnvironmentContext = /*#__PURE__*/react.createContext(defaultEnv);
function EnvironmentProvider(props) {
  var {
    children,
    environment: environmentProp
  } = props;
  var [node, setNode] = react.useState(null);
  var context = react.useMemo(() => {
    var _ref;

    var doc = node == null ? void 0 : node.ownerDocument;
    var win = node == null ? void 0 : node.ownerDocument.defaultView;
    var nodeEnv = doc ? {
      document: doc,
      window: win
    } : undefined;
    var env = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env;
  }, [node, environmentProp]);
  var showEnvGetter = !node && !environmentProp;
  return /*#__PURE__*/react.createElement(EnvironmentContext.Provider, {
    value: context
  }, children, showEnvGetter && /*#__PURE__*/react.createElement("span", {
    ref: el => {
      if (el) setNode(el);
    }
  }));
}

/**
 * The global provider that must be added to make all Chakra components
 * work correctly
 */
var ChakraProvider = props => {
  var {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot
  } = props;

  var _children = /*#__PURE__*/react.createElement(EnvironmentProvider, {
    environment: environment
  }, children);

  return /*#__PURE__*/react.createElement(IdProvider, null, /*#__PURE__*/react.createElement(ThemeProvider, {
    theme: theme,
    cssVarsRoot: cssVarsRoot
  }, /*#__PURE__*/react.createElement(ColorModeProvider, {
    colorModeManager: colorModeManager,
    options: theme.config
  }, resetCSS && /*#__PURE__*/react.createElement(CSSReset, null), /*#__PURE__*/react.createElement(GlobalStyle, null), portalZIndex ? /*#__PURE__*/react.createElement(PortalManager, {
    zIndex: portalZIndex
  }, _children) : _children)));
};

export { ChakraProvider };
