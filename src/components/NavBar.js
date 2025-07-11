import { AppBar, Avatar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActive from '@mui/icons-material/NotificationsActive';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})
function NavBar() {
  return (
    
    <AppBar>
        <StyledToolbar >
           <Typography variant='h5'>Toures</Typography>
            <Box sx={{display:'flex', alignItems:'center',gap:'20px'}}>
            <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="primary">
            <NotificationsActive color="action" />
            </Badge>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
            </Box>
       </StyledToolbar>
    </AppBar>
  )
}

export default NavBar