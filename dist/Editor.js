import React from "../_snowpack/pkg/react.js";
const MakeMetaData = ({data}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("meta", {
    property: "og:description",
    content: `이 게시글은 CounterOnline changelog ${data} 패치에 관한 내용을 다루고 있습니다.`
  }), /* @__PURE__ */ React.createElement("p", null, " "));
};
const MakeMainCategory = ({data}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    style: {fontSize: "28px"}
  }, /* @__PURE__ */ React.createElement("strong", null, "  ", data))), /* @__PURE__ */ React.createElement("h5", null, /* @__PURE__ */ React.createElement("span", {
    style: {fontSize: "20px", color: "#999999"}
  }, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement("strike", null, "                                                                                           ")))));
};
const MakeSubCategory = ({data}) => {
  return /* @__PURE__ */ React.createElement("h5", {
    style: {fontWeight: 800, fontSize: "22px"}
  }, "    ", data);
};
const MakeDetailInfo = ({data}) => {
  let color = data.match(/setColor=\"(.+?)\"/m);
  color = color ? color[1] : "";
  let type = data.match(/setType=\"(.+?)\"/m);
  type = type ? type[1] : "";
  const value = data.replace(/setColor=\"(.+?)\"/m, "").replace(/setType=\"(.+?)\"/m, "");
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    style: {fontSize: "16px", color}
  }, /* @__PURE__ */ React.createElement("span", {
    class: `fas fa-${type}`
  }, " "), " ", value));
};
const MakeImage = ({data}) => {
  let alt = data.match(/setAlt=\"(.+?)\"/m);
  alt = alt ? alt[1] : "";
  let src = data.match(/setSrc=\"(.+?)\"/m);
  src = src ? src[1] : "";
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("img", {
    alt,
    src,
    style: {marginTop: "3px", borderRadius: "15px"},
    width: "70%"
  }));
};
const MakeBlockQuote = ({data}) => {
  return /* @__PURE__ */ React.createElement("blockquote", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    style: {fontSize: "16px"}
  }, data)));
};
const MakeTableContent = ({data}) => {
  return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    dangerouslySetInnerHTML: {__html: data},
    style: {fontSize: "15px"}
  }));
};
export {
  MakeMetaData,
  MakeMainCategory,
  MakeSubCategory,
  MakeDetailInfo,
  MakeImage,
  MakeBlockQuote,
  MakeTableContent
};
