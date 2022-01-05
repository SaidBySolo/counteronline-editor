import React from "../_snowpack/pkg/react.js";
import {parser} from "./Parser.js";
const Renderer = ({value}) => {
  const p = parser(value);
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: {__html: p.map((element) => `${element.markUp ? element.markUp : element}`).join("\n")}
  });
};
export default Renderer;
