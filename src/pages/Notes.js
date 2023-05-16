import React from 'react'
import { Container } from '@mui/material'
import NoteCard from '../component/NoteCard'
import Masonry from '@mui/lab/Masonry'
import {useNavigate } from 'react-router-dom'


const Notes = ({notes, setNotes, setTitle, edited, setCategory, setDetails, title, category, details, setEditID, editID}) => {  
  
    const navigate = useNavigate()

    
    
    const handleDelete = (id) => {
      const newNotes = notes.filter((note) => note.id !== id)
      setNotes(newNotes)
    }
    const handleEdit = (id) => {
      
      navigate('/create')
      const specificNote = notes.find((item) => item.id === id)
      setEditID(specificNote.id)
      setTitle(specificNote.title)
      setDetails(specificNote.details)
      setCategory(specificNote.category)
    }
  
  return (
    <Container>
      <Masonry columns={{xs:1, sm:2, md:3, lg:4}} spacing={3}>
          <NoteCard notes = {notes} handleDelete = {handleDelete} handleEdit = {handleEdit} editID = {editID} edited ={edited}   />
      </Masonry>  
    </Container>
  )
  }

export default Notes