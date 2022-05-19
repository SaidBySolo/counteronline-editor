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

  const toast = useToast()

  const [elements, setElements] = React.useState<JSX.Element[]>([]);

  const [webhookMedadataBuilder] = React.useState<WebhookMetadataBuilder>(new WebhookMetadataBuilder());

  const [builder] = React.useState<PatchNoteBuilder>(
    new Proxy(new PatchNoteBuilder(setElements, webhookMedadataBuilder), {
      get: (target: PatchNoteBuilder, prop: string | symbol) => {
        if (target.isFinalized && 
           prop !== "isFinalized" &&
           prop !== "addFinal"
        ) {
          toast({
            title: '패치노트가 마무리 되었어요.',
            description: "패치노트가 마무리된 이후에는 내용을 추가할수없어요.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          return () => { }
        }
        if (target.isSetMetadata && prop === "addMetadata") {
          toast({
            title: '이미 메타데이터가 추가되어 있어요.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          return () => { }
        }
        if (!target.isSetMetadata &&
          prop !== "addMetadata" &&
          prop !== "webhookMetadataBuilderProcess" &&
          prop !== "isSetMetadata" &&
          prop !== "isFinalized"
        ) {
          console.log(prop)
          toast({
            title: '메타데이터를 먼저 추가해야해요!',
            description: "맨 상단에 메타데이터 추가를 열고 작성후 추가해주세요.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
          return () => { }
        }
        return Reflect.get(target, prop)
      }
    })
  );

  const [renderer, setRenderer] = React.useState<JSX.Element>(<Renderer elements={elements} />);
  const { hasCopied, onCopy } = useClipboard(process(ReactDOMServer.renderToString(renderer).replace(`<div style="margin-left:50px">`, "").replace("</div>", "")))

  React.useEffect(() => {
    setRenderer(<Renderer elements={elements} />)
  }, [elements])

  return (
    <>
      <Flex>
        <Flex flexDirection="column">
          <MainAccordion builder={builder} />
          <Flex justifyContent="space-between" margin="25px">
            <Button onClick={() => {
              if (builder.isFinalized) {
                toast({
                  title: '복사되었어요!',
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
                return onCopy()
              }
              toast({
                title: '패치노트를 마무리해야해요!',
                description: "맨 하단에 패치노트 마무리 항목을 누르고 추가해주세요.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            }}>
              {hasCopied ? "복사됨" : "복사"}
            </Button>
            <Button onClick={() => {
              setElements(elements => elements.slice(0, -1))
              builder.webhookMetadataBuilderProcess.pop()
              if (builder.webhookMetadataBuilderProcess.length === 0) {
                builder.isSetMetadata = false
              }
              if (builder.isFinalized) {
                builder.isFinalized = false
              }
            }}>
              되돌리기
            </Button>
            <Button onClick={() => {
              setElements([])
              webhookMedadataBuilder.clear()
              builder.webhookMetadataBuilderProcess = []
              builder.isFinalized = false
              builder.isSetMetadata = false
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
    </>
  );
}

export default App;
