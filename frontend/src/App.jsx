import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import {Button} from "@chakra-ui/react"; 
import {Rote, Routes} from "react-router-dom";

function App() {

  return (
    <Box minH={"100vh"}>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App;
