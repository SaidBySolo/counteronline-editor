import { Center, Divider, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { MainAccordion } from './Builder';

function App() {
  return (
    <Flex>
      <MainAccordion />
      <Center height='500px'>
        <Divider orientation='vertical' />
      </Center>
      <div>
        here is render
      </div>
    </Flex>

  );
}

export default App;
