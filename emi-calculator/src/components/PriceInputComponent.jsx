import { Box } from '@mui/material'
import React from 'react'
import PriceSlider from './PriceSlider'

const PriceInputComponent = ({markings}) => {
  return (
    <Box>
        <PriceSlider  markings = {markings} />
    </Box>
  )
}

export default PriceInputComponent