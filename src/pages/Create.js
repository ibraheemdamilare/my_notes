import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { useNavigate } from 'react-router-dom'

   
const Create = ({setNotes, setEdited, notes, setTitle, setCategory, setDetails, title, category, details, editID, setEditID}) => {
    
    
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const navigate = useNavigate()

const handleClick = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title === '') {
        setTitleError(true)
    }

    if(details === '') {
        setDetailsError(true)
    }
    
    if(title && details) {
       const newItem = {id: new Date().getTime().toString(), title, details, category}
        setNotes([...notes, newItem])
        navigate("/")
    }

    if(title && details && editID) {
        setNotes(
            notes.map((item) => {
                if (item.id === editID) {
                  return ({ ...item, title: title, details: details, category: category });
                }
                return item;
              })
        )
        
        setTitle('')
        setDetails('')
        setCategory('work')
        setEdited(
            notes.map((item) => {
                if (item.id === editID) {
                  return (true);
                }
                return false;
              })
        )
        setEditID(null)
        
     }
}

  return (
    <Container>
        <Typography 
        variant='h6'
        color='textSecondary'
        gutterBottom
        >
         Create a New Note
            
        </Typography>

        <form noValidate autoComplete='off' action="submit">
            
            <TextField 
            error={titleError}
            label="Note Title"
            fullWidth
            value={title}
            required
            sx={{
                marginY: "20px", display: "block"
            }}
            onChange = {(e) => {setTitle(e.target.value)}}
            />

            <TextField 
            error = {detailsError}
            label="Note Details"
            value={details}
            onChange = {(e) => {setDetails(e.target.value)}}
            fullWidth
            required
            multiline
            rows={4}
            sx={{
                marginY: "20px", display: "block"
            }}
            />

            <FormControl
            sx={{
                display: 'block',
                marginY: '15px'
            }}
            >
                <FormLabel>Note Categories</FormLabel>
                <RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value)}} >
                    <FormControlLabel label="money" value="money" control={<Radio color='primary'  />} />
                    <FormControlLabel label="work" value="work" control={<Radio color='primary'  />} />
                    <FormControlLabel label="todos" value="todos" control={<Radio color='primary'  />} />
                    <FormControlLabel label="reminders" value="reminders" control={<Radio color='primary'  />} />
                </RadioGroup>
            </FormControl>

            <Button
            onClick={handleClick}
            variant='contained'
            disableElevation
            type='submit'
            color='primary'
            endIcon={<KeyboardArrowRightOutlinedIcon />}
            >
            {editID ? 'Edit' : 'Submit'}   
            </Button>
        </form>
        
      
    </Container>
  )
}

export default Create