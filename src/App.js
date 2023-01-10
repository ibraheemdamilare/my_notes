import React, { useState, useEffect } from 'react';
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './component/Layout';
import '@fontsource/roboto/400.css';
import Notebook from './component/data'


const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3"
    }
  }
})

const getLocalStorage = () => {
  let notes = localStorage.getItem('notes');
  if(notes){
    return (notes = JSON.parse(localStorage.getItem('notes')))
  }
  else{
    return Notebook
  }
}


function App() {
  const [notes, setNotes] = useState(getLocalStorage())

  // useEffect(()=>{
  //   setNotes(Notebook)
  // },[])

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Routes>
          <Route path='/' element={<Notes notes={notes} setNotes={setNotes} />} />
          <Route path='/create' element={<Create setNotes={setNotes} notes={notes} />} />
        </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
