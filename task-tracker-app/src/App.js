import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
   
    <Flex bg ="orange.200"
    h="100vh"
    alignItems="center"
    justifyContent="center">
      <Home />
     </Flex>
  );
}

export default App;
