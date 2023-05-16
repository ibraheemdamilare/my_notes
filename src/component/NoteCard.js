import React from 'react'
import { Avatar, CardActions, Paper } from '@mui/material'
import { Card, CardHeader, CardContent, Typography, IconButton } from '@mui/material'
import {DeleteOutlined} from '@mui/icons-material'
import { EditOutlined } from '@mui/icons-material'


const NoteCard = ({notes, handleDelete, handleEdit, edited}) => {

  return (
    <>
        {notes.map((note) => {
        const {id, title, details, category} = note
        return(
           
                <Paper key={id}>
                    <Card elevation = {3} 
                    sx={(category === 'work' && {border: '2px solid red'}) || (category === 'todos' && {border: '2px solid yellow'}) || (category === 'reminders' && {border: '2px solid purple'}) || (category === 'money' && {border: '2px solid green'}) } 
                    >
                        <CardHeader
                        title = {title}
                        subheader = {category}
                        action= {
                            <IconButton onClick={()=> handleDelete(id)}>
                                <DeleteOutlined sx={{color: '#f44336'}} />
                            </IconButton>
                        }
                        avatar={
                            <Avatar 
                            sx={(category === 'work' && {background: 'red'}) || (category === 'todos' && {background: 'yellow'}) || (category === 'reminders' && {background: 'purple'}) || (category === 'money' && {background: 'green'})}
                            >
                                {category[0].toUpperCase()}
                            </Avatar>
                        }
                        
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {details}
                            </Typography>
                           
                        </CardContent>
                        <CardActions disableSpacing>
                        <IconButton aria-label='edit note' onClick={() => {handleEdit(id)}}>
                            <EditOutlined sx={{color: '#0000FF'}} />
                        </IconButton>
                        {/* {edited && <Typography body2 sx={{fontSize: '6px', fontStyle: 'italic', letterSpacing: 3}}>Edited</Typography>} */}
                        </CardActions>
                    </Card>   
                </Paper>
           
        )
      } )}
    </>
  )
}

export default NoteCard