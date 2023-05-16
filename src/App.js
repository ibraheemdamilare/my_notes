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
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [category, setCategory] = useState('work')
  const [editID, setEditID] = useState(null)
  const [edited, setEdited] = useState(false)

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
          <Route path='/' element={<Notes edited={edited} setEdited ={setEdited} editID={editID} setEditID={setEditID} notes={notes} setNotes={setNotes} title= {title} setTitle= {setTitle} details = {details} setDetails= {setDetails} category = {category} setCategory = {setCategory} />} />
          <Route path='/create' element={<Create edited={edited} setEdited ={setEdited} setEditID={setEditID} editID={editID} setNotes={setNotes} notes={notes} title= {title} setTitle= {setTitle} details = {details} setDetails= {setDetails} category = {category} setCategory = {setCategory} />} />
        </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
