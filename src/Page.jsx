import React from "react"
import {
  Divider,
  Flex,
  Center,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react"
import BuilderMain from "./Builder"
import { ChevronDownIcon } from '@chakra-ui/icons'
function process(str) {

  var div = document.createElement('div');
  div.innerHTML = str.trim();

  return format(div, 0).innerHTML;
}

function format(node, level) {

  var indentBefore = new Array(level++ + 1).join('  '),
    indentAfter = new Array(level - 1).join('  '),
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

const BuilderMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}



const Page = () => {
  return (
    <Flex justifyContent="space-evenly">
      <BuilderMain />
      <Center height="100px">
        <Divider size="" orientation='vertical' />
      </Center>
      dasdsadas
    </Flex>
  )
}

export default Page;