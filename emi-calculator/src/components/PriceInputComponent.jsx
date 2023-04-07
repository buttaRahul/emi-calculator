import { Box, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import PriceSlider from './PriceSlider'
import { CustomTextField } from '../styled-components/CustomTextField'
import { EMIContext } from '../data/EMIContextProvider'

const PriceInputComponent = ({markings,title,cf = 1,name}) => {
  
  const {updateValues} = useContext(EMIContext)
  const [value,setValue] = useState('0')
  const updateFromSlider = (sv) => {
    setValue(sv*cf)
    updateValues(name,sv*cf)
  }

  const handleInput = (e)=>{
      const v = e.target.value
      setValue(v)
      // updateValues((pv)=>({...pv,[name]:v}))
      updateValues(name,v)
  }
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} >
          <h4>
            {title}
          </h4>
          {/* <TextField /> */}
          <CustomTextField onChange={(e)=>{handleInput(e)}} value={value}/>
          
      </Box>
        <PriceSlider  markings = {markings} value={value/cf} updateFromSlider={updateFromSlider} />
    </Box>
  )
}

export default PriceInputComponent