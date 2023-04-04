import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import PriceSlider from './PriceSlider'
import { CustomTextField } from '../styled-components/CustomTextField'

const PriceInputComponent = ({markings,title}) => {
  const [value,setValue] = useState('0')
  const updateFromSlider = (sv) => {
    setValue(sv*100000)
  }
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} >
          <h4>
            {title}
          </h4>
          {/* <TextField /> */}
          <CustomTextField onChange={(e)=>{setValue(e.target.value)}} value={value}/>
      </Box>
        <PriceSlider  markings = {markings} value={value} updateFromSlider={updateFromSlider} />
    </Box>
  )
}

export default PriceInputComponent