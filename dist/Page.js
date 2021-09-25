import React from "../_snowpack/pkg/react.js";
import {Textarea, Button, useClipboard, Alert, AlertTitle, AlertIcon} from "../_snowpack/pkg/@chakra-ui/react.js";
import ReactDOMServer from "../_snowpack/pkg/react-dom/server.js";
import Renderer from "./Renderer.js";
function process(str) {
  var div = document.createElement("div");
  div.innerHTML = str.trim();
  return format(div, 0).innerHTML;
}
function format(node, level) {
  var indentBefore = new Array(level++ + 1).join("  "), indentAfter = new Array(level - 1).join("  "), textNode;
  for (var i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode("\n" + indentBefore);
    node.insertBefore(textNode, node.children[i]);
    format(node.children[i], level);
    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode("\n" + indentAfter);
      node.appendChild(textNode);
    }
  }
  return node;
}
const Page = () => {
  let [value, setValue] = React.useState("");
  let m = false;
  const {hasCopied, onCopy} = useClipboard(ReactDOMServer.renderToStaticMarkup(/* @__PURE__ */ React.createElement(Renderer, {
    value
  })).replace("<div>", "").replace("</div>", ""));
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  if (value.includes("/metadata")) {
    m = true;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, m ? null : /* @__PURE__ */ React.createElement(Alert, {
    status: "error"
  }, /* @__PURE__ */ React.createElement(AlertIcon, null), /* @__PURE__ */ React.createElement(AlertTitle, {
    mr: 2
  }, "Metadata 속성이없습니다!")), /* @__PURE__ */ React.createElement(Textarea, {
    value,
    onChange: handleInputChange,
    placeholder: "Here is a sample placeholder",
    size: "sm"
  }), /* @__PURE__ */ React.createElement(Renderer, {
    value
  }), /* @__PURE__ */ React.createElement(Button, {
    onClick: onCopy,
    ml: 2
  }, hasCopied ? "Copied" : "Copy"));
};
export default Page;
