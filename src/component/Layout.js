import React from 'react'
import { Drawer, Typography, Container, Avatar  } from '@mui/material'
import { Box } from '@mui/system';
import { List, ListItem, ListItemIcon, AppBar, Toolbar } from '@mui/material'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate} from 'react-router-dom';
import { format } from 'date-fns';


const drawerWidth = 80;

const Layout = ({children}) => {

    const navigate = useNavigate();
    // const location = useLocation();
    

    const menuItems = [
        {
            id: 1,
            icon: <SubjectOutlined color= 'primary' />,
            path: '/'
        },
        {
            id: 2,
            icon: <AddCircleOutlineOutlined color= 'primary' />,
            path: '/create'
        }
    ]
  return (
    <Box sx={{display: 'flex'}}>

        <AppBar sx={{width: `calc(100% - ${drawerWidth}px)`}}>
            <Toolbar sx={{display: 'flex', background: 'white'}}>
                <Typography sx={{color: 'black', flexGrow: 1, fontSize: '9px'}}>Today's date is {format(new Date(), 'do MMMM Y')}</Typography>
                <Typography sx={{color: 'black', fontSize: '11px'}}>Ibraheem</Typography>
                <Avatar src='\FB_IMG_1542488476691.jpg' sx={{marginLeft: '8px'}} />
            </Toolbar>
        </AppBar>
        
        <Drawer
        PaperProps={{
            sx: {
                width: drawerWidth
            }
        }}
        variant='permanent'
        anchor='left'
        sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-Paper': {width: drawerWidth, boxSizing: 'border-box'}}}
        
        >
            <Container>
                    <Typography variant='h6' color='primary' sx={{paddingTop: "20px", paddingBottom: '20px'}}>
                        IBD
                    </Typography>

                    <List>
                        {menuItems.map((item) => {
                            const {id, icon, path} = item
                            return(
                                
                                <ListItem 
                                key={id} 
                                button 
                                onClick={() => {navigate(path)}}
                                sx={{ paddingLeft: '3px'}}
                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    
                                </ListItem>
                            )
                        })}
                    </List>
                </Container>
        </Drawer>
        
        
        <Box sx={{background: '#f9f9f9', width: '100%', paddingTop: '64px'}}>
        {children}
        </Box>
   
    </Box>
  )
}

export default Layout