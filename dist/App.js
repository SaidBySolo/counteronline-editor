import React from "../_snowpack/pkg/react.js";
import {ChakraProvider} from "../_snowpack/pkg/@chakra-ui/provider.js";
import theme from "./theme.js";
import Page from "./Page.js";
function App() {
  return /* @__PURE__ */ React.createElement(ChakraProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(Page, null));
}
export default App;
