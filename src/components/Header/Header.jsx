import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {IconButton} from '@mui/material';



const Header = () => {
  return (
    <Box>
        <Paper sx={{margin:"10px 0px",padding:"10px"}}>
      <Box container>
   <Box display="flex" sx={{padding:"20px"}}>
<IconButton sx={{width:"50px", height:"50px",border:"2px solid rgba(233, 233, 233, 0.56)"}}>
        <ChevronLeftIcon />
        </IconButton>
        <Box sx={{paddingLeft:"20px"}}>
            <Typography variant="h4">Hamburger</Typography>
            <Typography variant="subtitle1" sx={{color:"#999999"}}>Discover whatever you need easily</Typography>
            </Box>
            
   </Box>

      </Box>
      </Paper>

    </Box>
  )
}

export default Header