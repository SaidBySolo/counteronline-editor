import React from "../_snowpack/pkg/react.js";
import {MakeMainCategory, MakeMetaData, MakeSubCategory} from "./Editor.js";
import ReactDOMServer from "../_snowpack/pkg/react-dom/server.js";
import {parser} from "./Parser.js";
const Renderer = ({value}) => {
  const p = parser(value);
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: {__html: p.join("\n")}
  });
};
export default Renderer;
