import React from "react"
import { Textarea, Button, useClipboard, Alert, AlertTitle, AlertIcon } from "@chakra-ui/react"
import ReactDOMServer from 'react-dom/server'
import Renderer from "./Renderer"

function process(str) {

    var div = document.createElement('div');
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML;
}

function format(node, level) {

    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;

    for (var i = 0; i < node.children.length; i++) {

        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}


const Page = () => {
    let [value, setValue] = React.useState("")
    let m = false
    const { hasCopied, onCopy } = useClipboard(process(ReactDOMServer.renderToStaticMarkup(<Renderer value={value}/>).replace("<div>","").replace("</div>","")))

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }

    if (value.includes("/metadata")){
      m = true
    }

    return (
      <>
        {m ? null : <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Metadata 속성이없습니다!</AlertTitle>
        </Alert>}

        <Textarea
          value={value} 
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"
        />
        <Renderer value={value}/>

        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </>
    )
}

export default Page;