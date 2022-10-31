import React, { useEffect, useState ,useContext} from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/material'
import axios from 'axios'

// import { InputContext } from '../NavbarItems/NavbarItems'
const Items = (props) => {
  const [items, setData] = useState([])
const finalSearchValueforFilter = props.data
  // const Search = useContext()
// console.log( Common().SearchValueFromNav)

  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((res)=>console.log(res))
  //   .catch((err)=>console.log(err))
  // },[])


const Api=()=>{
  axios.get('http://localhost:3000/product')
  .then((res)=>{

    setData(res.data.data)
    })
  .catch((err)=>console.log(err))
}

useEffect(()=>{
  Api()
},[])



  return (

    <Grid sx={{ flexGrow: 1 }} container spacing={2} >
      <Grid item xs={12} >
        <Grid container spacing={2} >
          {items.filter(item=>item.name.includes(finalSearchValueforFilter)).map((data, index) => {
            return (
              <Grid key={index} item >
                <Paper sx={{padding:"15px",textAlign:"center",width:"330px",height:"400px"}} className="items">
                  <Box>
                  <img src={data.images[0]}  alt="foodimg" height="200px" width="200px"/>

                   
                  </Box>
                  <Box>
                    <Typography variant='h6'>
                                        {data.name}
                                        </Typography>
                 
                  </Box>
                 
                  <Typography  className='prize' sx={{color:"green",fontWeight:"bold"}}>
                 {data.active?"Available":"Not Avaiable"}
                  </Typography>
                </Paper>
              
              </Grid>
            )
          })}
        </Grid>
      </Grid>

    </Grid>

  )
}

export default Items
{/* <Grid key={index} item >
<Paper sx={{padding:"15px",textAlign:"center",width:"330px",height:"400px"}} className="items">
  <Box>
  <img src={data.images[0]} alt="foodimg" height="200px" width="200px"/>

   
  </Box>
  <Box>
    <Typography variant='h6'>
                        {data.name}
                        </Typography>
 
  </Box>
  <Typography className='prize' sx={{color:"#f05756",fontWeight:"bold"}}>
  Price: {data.listPrice}rs 
  </Typography>
 
  <Typography  className='prize' sx={{color:"green",fontWeight:"bold"}}>
 Discount Price : {data.discountPrice} 
  </Typography>
  <Typography  className='prize' sx={{color:"green",fontWeight:"bold"}}>
 {data.active?"Available":"Not Avaiable"}
  </Typography>
</Paper>

</Grid> */}