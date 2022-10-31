import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ChatIcon from '@mui/icons-material/Chat';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from 'react';

// export const InputContext = createContext();
export default function BasicGrid(props) {
const[search,setSearch] = useState('')

props.GetValues(search)

    return (
        <Box className='Navitems'>
            <Box className='searchContainer'>
               <TextField fullWidth placeholder='Search Menu...' onChange={(e)=>setSearch(e.target.value)}id="fullWidth"  className='search'/>
            </Box>

            <Box  className='NavOptions' >
                <Button className='chat'><span><ChatIcon /></span>Chat</Button>
                <Button className='more'><span><MoreVertIcon /></span>More</Button>
                <Button className='Share'><span><ShareIcon /></span>Share</Button>
                <Button className='notes'><span><BorderColorIcon /></span>Your notes</Button>


            </Box>


        </Box>
    );
  
}
