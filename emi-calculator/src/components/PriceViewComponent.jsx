import { Box, Typography } from '@mui/material'
import React from 'react'

const PriceViewComponent = ({value, title}) => {
  return (
   <Box>
   <Typography sx={{
    fontSize : '30px',
    backgroundColor: '#efefef',
    color:'black',
   }} variant='h5'>{title}</Typography>

   <Typography sx={{
    fontSize : '20px',
    color:'#ABAD48',
    padding:'25px',
   }} textAlign={'center'} >{value}</Typography>
    
   </Box>
  )
}

export default PriceViewComponent