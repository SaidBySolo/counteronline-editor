import { Center, Divider, Flex, Button, useClipboard, useToast } from '@chakra-ui/react';
import * as React from 'react';
import { MainAccordion } from './Builder';
import { PatchNoteBuilder } from './PatchNoteBuilder';
import { Renderer } from './Renderer';
import ReactDOMServer from 'react-dom/server'
import { WebhookMetadataBuilder } from './WebhookMetadataBuilder';

function process(str: string) {

  var div = document.createElement('div');
  div.innerHTML = str.trim();

  return format(div, 0).innerHTML;
}

function format(node: Element, level: number) {

  var indentBefore = new Array(level++ + 1).join('  '),
    indentAfter = new Array(level - 1).join('  '),
    textNode;

  for (var i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode('\n' + indentBefore);
    node.insertBefore(textNode, node.children[i]);

    format(node.children[i], level);

    if (node.lastElementChild === node.children[i]) {
      textNode = document.createTextNode('\n' + indentAfter);
      node.appendChild(textNode);
    }
  }

  return node;
}


function App() {
  const [elements, setElements] = React.useState<JSX.Element[]>([]);
  const [isFinalized, setIsFinalized] = React.useState<boolean>(false);
  const [webhookMedadataBuilder] = React.useState<WebhookMetadataBuilder>(new WebhookMetadataBuilder());
  const [builder] = React.useState<PatchNoteBuilder>(new PatchNoteBuilder(setElements, setIsFinalized, webhookMedadataBuilder));
  const [renderer, setRenderer] = React.useState<JSX.Element>(<Renderer elements={elements} />);
  const { hasCopied, onCopy } = useClipboard(process(ReactDOMServer.renderToString(renderer).replace("<div>", "").replace("</div>", "")))
  const toast = useToast()

  React.useEffect(() => {
    setRenderer(<Renderer elements={elements} />)
  }, [elements])

  return (
    <Flex>
      <Flex flexDirection="column">
        <MainAccordion builder={builder} />
        <Flex justifyContent="space-between" margin="25px">
          <Button onClick={() => {
            if (!isFinalized) {
              toast({
                title: '패치노트를 마무리해야해요!',
                description: "맨 하단에 패치노트 마무리 항목을 누르고 추가해주세요.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              return
            }
            onCopy()
            toast({
              title: '복사되었어요!',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }}>
            {hasCopied ? "복사됨" : "복사"}
          </Button>
          <Button onClick={() => {
            setElements(elements => elements.slice(0, -1))
            builder.webhookMetadataBuilderProcess.pop()
            if (isFinalized) {
              setIsFinalized(false)
            }
          }}>
            되돌리기
          </Button>
          <Button onClick={() => {
            setElements([])
            webhookMedadataBuilder.clear()
            setIsFinalized(false)
          }}>
            전체 지우기
          </Button>
        </Flex>
      </Flex>
      <Center height='100vh'>
        <Divider orientation='vertical' />
      </Center>
      {renderer}
    </Flex>

  );
}

export default App;
