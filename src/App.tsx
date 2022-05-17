import { Center, Divider, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { MainAccordion } from './Builder';
import { PatchNoteBuilder } from './PatchNoteBuilder';
import ReactDOMServer from 'react-dom/server'

function App() {
  const [element, setElement] = React.useState<JSX.Element[]>([]);
  const builder = new PatchNoteBuilder(setElement)

  return (
    <Flex>
      <MainAccordion builder={builder} />
      <Center height='100vh'>
        <Divider orientation='vertical' />
      </Center>
      <div dangerouslySetInnerHTML={{ __html: element.map(ReactDOMServer.renderToStaticMarkup).join("\n") }} />
    </Flex>

  );
}

export default App;
