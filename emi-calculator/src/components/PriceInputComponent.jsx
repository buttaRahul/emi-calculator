import { Box, TextField } from '@mui/material'
import React from 'react'
import PriceSlider from './PriceSlider'

const PriceInputComponent = ({markings,title}) => {
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} >
          <h4>
            {title}
          </h4>
          <TextField />
      </Box>
        <PriceSlider  markings = {markings} />
    </Box>
  )
}

export default PriceInputComponent