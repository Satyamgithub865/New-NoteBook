import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import DataProvider from './context/DataProvider';
import Home from './components/Home';

function App() {

  return (
    <DataProvider>
      <Navbar />
      <Box padding={2}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
