import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from './theme';
import Page from './Page';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Page />
    </ChakraProvider>
  );
}

export default App;
