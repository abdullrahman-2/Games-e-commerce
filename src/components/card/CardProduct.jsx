import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography, Button } from '@mui/material'
import React from 'react'

export default function Card(data) {
  return (
    <Box  display={'flex'} alignItems={'center'} gap={2.5} flexDirection={{xs:'column',sm:'row'}} >
    <Box sx={{display:'flex'}}>
<img width={300} src='imgs/swiper2.jpg'/>



    </Box>



    <Box sx={{textAlign:{xs: 'center', sm:'left'}}}>
    <Typography variant="h5" >title</Typography>
<Typography my={.4} fontSize={'22px'} color={'crimson'} variant="h5" >232$</Typography>
<Button sx={{
  mb:{xs:1,sm:0},
  textTransform: "capitalize",

}} variant="contained" color="primary">
<AddShoppingCartOutlined sx={{mr:1}}/>
Buy now

  
</Button>
    </Box>
      
    </Box>
  )
}
