import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Typography ,Box} from '@mui/material'


const Product = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/category')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => console.log(err))
  }, [])



  return (

    <Grid container>
      {products.map((product, index) => {
        return (
          <Grid md={2} xs={12} className='grandparent' >
          
           <Box >
            <img src={product.image} alt="product imagfe" height="auto" width="120px" className='grandparent'/>
            <Typography variant="h6">{product.name}</Typography>
            </Box>
      
          </Grid>

        )

      })}
    </Grid>
  )
}

export default Product