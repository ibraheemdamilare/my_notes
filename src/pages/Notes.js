import React from 'react'
import { Container } from '@mui/material'
import NoteCard from '../component/NoteCard'
import Masonry from '@mui/lab/Masonry'


const Notes = ({notes, setNotes}) => {    
    
    const handleDelete = (id) => {
      const newNotes = notes.filter((note) => note.id !== id)
      setNotes(newNotes)
    }
   
   
  return (
    <Container>
      <Masonry columns={{xs:1, sm:2, md:3, lg:4}} spacing={3}>
          <NoteCard notes = {notes} handleDelete = {handleDelete} />
      </Masonry>  
    </Container>
  )
  }

export default Notes