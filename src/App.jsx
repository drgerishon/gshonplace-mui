import { Stack, Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Feeds from './components/Feeds';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';


import './App.css';
import AddPost from './components/AddPost';
import { useState } from 'react';
function App() {
const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
    
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feeds />
        <Rightbar />
      </Stack>
      <AddPost />
    </Box>
    </ThemeProvider>
  );
}

export default App;
